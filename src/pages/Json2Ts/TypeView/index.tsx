import Editor, { EditorProps } from '@monaco-editor/react'
import { useContext, useEffect, useMemo, useRef, useState } from 'react'
import PageContext from '../PageContext'
import {
	InputData,
	jsonInputForTargetLanguage,
	quicktype,
} from 'quicktype-core'
import { useAsyncEffect } from 'ahooks'
import { BooleanOption } from 'quicktype-core/dist/RendererOptions'

async function quicktypeJSON(
	targetLanguage: string,
	typeName: string,
	jsonString: string
) {
	const jsonInput = jsonInputForTargetLanguage(targetLanguage)
	await jsonInput.addSource({
		name: typeName,
		samples: [jsonString],
	})

	const inputData = new InputData()
	inputData.addInput(jsonInput)

	return await quicktype({
		inputData,
		lang: targetLanguage,
		rendererOptions: {
			'just-types': 'true',
		},
	})
}

const TypeView = () => {
	const { currentCode, targetSelect } = useContext(PageContext)
	const [typeCode, setTypeCode] = useState<string>()

	const enditor = useRef<any>()
	const viewDidMountHandle: EditorProps['onMount'] = (editor) => {
		enditor.current = editor
		setTimeout(function () {
			editor.getAction('editor.action.formatDocument').run()
		}, 500)
	}

	useAsyncEffect(async () => {
		console.log('进入')
		console.log(currentCode)

		const { lines: typescriptResult } = await quicktypeJSON(
			'typescript',
			'Result',
			currentCode ?? ''
		)
		setTypeCode(typescriptResult.join('\n'))
		setTimeout(function () {
			enditor.current?.getAction('editor.action.formatDocument').run()
		}, 500)
	}, [currentCode])

	useEffect(() => {
		console.log(typeCode)
	}, [typeCode])

	const editor = useMemo(() => {
		return (
			<Editor
				height="800px"
				language={targetSelect?.language}
				options={{
					automaticLayout: true,
					wordWrap: 'on',
					formatOnPaste: true,
					formatOnType: true,
					readOnly: true,
				}}
				theme="vs-dark"
				value={typeCode ?? ''}
				onMount={viewDidMountHandle}
			/>
		)
	}, [typeCode])

	return editor
}

export default TypeView
