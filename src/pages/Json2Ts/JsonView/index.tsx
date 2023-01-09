import Editor, { EditorProps } from '@monaco-editor/react'
import { useContext, useEffect, useRef, useState } from 'react'
import PageContext from '../PageContext'

const JsonView = () => {
	const { currentCode, setCurrentCode, select } = useContext(PageContext)
	const enditor = useRef<any>()
	const editorDidMountHandle: EditorProps['onMount'] = (editor) => {
		enditor.current = editor
		setTimeout(function () {
			editor.getAction('editor.action.formatDocument').run()
		}, 500)
	}

	return (
		<Editor
			height="800px"
			language={select?.language}
			options={{
				automaticLayout: true,
				minimap: {
					enabled: false,
				},
				wordWrap: 'on',
				formatOnPaste: true,
				formatOnType: true,
			}}
			theme="vs-dark"
			value={currentCode ?? ''}
			onMount={editorDidMountHandle}
			onChange={(value) => {
				setCurrentCode?.(value)
				setTimeout(function () {
					enditor.current.getAction('editor.action.formatDocument').run()
				}, 500)
			}}
		/>
	)
}

export default JsonView
