import Editor, { EditorProps } from '@monaco-editor/react'
import { useContext, useEffect, useRef, useState } from 'react'
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
	const { currentCode, setCurrentCode } = useContext(PageContext)
	const [typeCode, setTypeCode] = useState<string>()

	const enditor = useRef()
	const viewDidMountHandle: EditorProps['onMount'] = (editor) => {
		enditor.current = editor
		// setTimeout(function () {
		// 	editor.getAction('editor.action.formatDocument').run()
		// }, 500)
	}

	useAsyncEffect(async () => {
		const { lines: typescriptResult } = await quicktypeJSON(
			'typescript',
			'Result',
			currentCode ?? ''
		)
		setTypeCode(typescriptResult.join('\n'))
	}, [currentCode])

	// const data = []
	// Array.from(
	// 	document
	// 		.getElementsByTagName('table')[1]
	// 		.getElementsByTagName('tbody')[0]
	// 		.getElementsByTagName('tr')
	// )
	// 	.filter((item, index) => {
	// 		return item.childNodes[item.childNodes.length - 2]?.innerText !== ''
	// 	})
	// 	?.forEach((item) => {
	// 		data.push({
	// 			dataIndex: item.childNodes[0]?.innerText,
	// 			title: item.childNodes[item.childNodes.length - 2]?.innerText,
	// 		})
	// 	})
	// console.log(JSON.stringify(data))

	return (
		<Editor
			height="100%"
			language="typescript"
			options={{
				automaticLayout: true,
				minimap: {
					enabled: false,
				},
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
}

export default TypeView
