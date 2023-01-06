import { useEffect, useRef } from 'react'
import { useEventListener, useMemoizedFn } from 'ahooks'

function useScale(options?: { useWidthHeightMini?: boolean }) {
	const { useWidthHeightMini } = options ?? {}
	const targetElement = document.body
	const bodyObserver = useRef<MutationObserver>()
	const elementStyleRef = useRef<CSSStyleDeclaration>({
		...targetElement.style,
	})

	const width = 1920
	const height = 1080

	const handleScale = useMemoizedFn(() => {
		const scale = useWidthHeightMini
			? Math.min(window.innerWidth / width, window.innerHeight / height)
			: window.innerWidth / width
		targetElement.style.width = `${window.innerWidth / scale}px`
		targetElement.style.height = `${window.innerHeight / scale}px`
		targetElement.style.transform = `scale(${scale})`
		targetElement.style.transformOrigin = 'top left'
		targetElement.style.overflow = 'hidden'
	})

	/*
	 * 如果只在useEffect调用计算scale，那么子组件会在父组件mount前无法正确计算scale
	 * 如 echarts的resize。所以这里采取了调用2次的方式。
	 */
	const scaleRef = useRef<any>(handleScale)
	scaleRef.current?.()
	scaleRef.current = null
	useEffect(() => {
		handleScale()
	}, [handleScale])

	useEventListener('resize', handleScale)

	useEffect(() => {
		// 处理因为 antd-modal 显示时，修改 body 的 width，导致页面变形
		bodyObserver.current = new MutationObserver(() => {
			if (targetElement.style.width.includes('calc')) {
				targetElement.style.width = `${width}px`
			}
		})

		bodyObserver.current.observe(targetElement, {
			attributes: true,
		})

		return () => {
			bodyObserver.current?.disconnect?.()
		}
	}, [targetElement])

	useEffect(() => {
		const styles = elementStyleRef.current

		return () => {
			targetElement.style.width = styles.width
			targetElement.style.height = styles.height
			targetElement.style.transform = styles.transform
			targetElement.style.transformOrigin = styles.transformOrigin
			targetElement.style.overflow = styles.overflow
		}
	}, [targetElement, targetElement.style])
}

export default useScale
