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
import { useMemo, useState, useRef } from "react";
import ProTable from "@ant-design/pro-table";
import type { ActionType, ProColumns } from "@ant-design/pro-table";
import type { FormInstance } from "antd";
import useTableRequest from "@/hooks/useTableRequest";

const CompareDetail =()=>{

  const formRef = useRef<FormInstance>();
  const actionRef = useRef<ActionType>();
  const request = useTableRequest();
   
  const columns = useMemo<ProColumns<any>[]>(()=>({${currentCode}}),[]);

  return (
    <ProTable
      formRef={formRef}
      actionRef={actionRef}
      rowKey="id"
      request={async (params) => {
        const res = await request(fetchAPI, {
          ...params,
        });
        return {
          ...(res ?? {}),
          data: res?.data?.map?.((item) => ({
            ...item
          })),
        };
      }}
      columns={compareColumns}
    />
  );

}
`
	return (
		<Editor
			height="800px"
			language="javascript"
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
