import { useEffect } from 'react'

const index = () => {
	useEffect(() => {
		window.location.href =
			'https://nelsonyong.github.io/code-producer/site/Guide.html'
	}, [])
	return <div>index</div>
}

export default index
