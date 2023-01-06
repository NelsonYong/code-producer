import Editor, { EditorProps } from '@monaco-editor/react'
import { useContext, useRef, useState } from 'react'
import PageContext from '../PageContext'

const ProTableView = () => {
	const { currentCode, targetSelect } = useContext(PageContext)
	const enditor = useRef<any>()
	const editorDidMountHandle: EditorProps['onMount'] = (editor) => {
		enditor.current = editor
		setTimeout(function () {
			editor.getAction('editor.action.formatDocument').run()
		}, 500)
	}

	const template = `
  /**
       [{
        title: "日期",
        dataIndex: "businessDate",
        search: false,
      },
      {
        title: "大分类",
        dataIndex: "firstCategoryName",
        search: false,
      }]
*/
      <ProTable
      column={${currentCode}}}
      />
  `
	return (
		<Editor
			height="800px"
			language={targetSelect?.language}
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
			value={template ?? ''}
			onMount={editorDidMountHandle}
			onChange={(value) => {
				setTimeout(function () {
					enditor.current.getAction('editor.action.formatDocument').run()
				}, 500)
			}}
		/>
	)
}

export default ProTableView
