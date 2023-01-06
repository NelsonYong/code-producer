(self.webpackChunk=self.webpackChunk||[]).push([[188],{43362:function(L,P,r){"use strict";r.r(P),r.d(P,{default:function(){return F}});var V=r(46686),h=r.n(V),b=r(57895),n=r(93236),w=r(84001),D=(0,n.createContext)({}),y=D,a=r(62086),M=function(){var o=(0,n.useContext)(y),e=o.currentCode,i=o.setCurrentCode,u=o.select,l=(0,n.useRef)(),s=function(c){l.current=c,setTimeout(function(){c.getAction("editor.action.formatDocument").run()},500)};return(0,a.jsx)(w.ZP,{height:"800px",language:u==null?void 0:u.language,options:{automaticLayout:!0,minimap:{enabled:!1},wordWrap:"on",formatOnPaste:!0,formatOnType:!0},theme:"vs-dark",value:e!=null?e:"",onMount:s,onChange:function(c){i==null||i(c),setTimeout(function(){l.current.getAction("editor.action.formatDocument").run()},500)}})},A=M,O=function(){var o=(0,n.useContext)(y),e=o.currentCode,i=o.targetSelect,u=(0,n.useRef)(),l=function(m){u.current=m,setTimeout(function(){m.getAction("editor.action.formatDocument").run()},500)},s=`
  //  Yapi
  const data = []
	Array.from(
		document
			.getElementsByTagName('table')[1]
			.getElementsByTagName('tbody')[0]
			.getElementsByTagName('tr')
	)
		.filter((item, index) => {
			return item.childNodes[item.childNodes.length - 2]?.innerText !== ''
		})
		?.forEach((item) => {
			data.push({
				dataIndex: item.childNodes[0]?.innerText,
				title: item.childNodes[item.childNodes.length - 2]?.innerText,
			})
		})
	console.log(JSON.stringify(data))
  `,t=`
import { useMemo, useState, useRef } from "react";
import ProTable from "@ant-design/pro-table";
import type { ActionType, ProColumns } from "@ant-design/pro-table";
import type { FormInstance } from "antd";
import useTableRequest from "@/hooks/useTableRequest";

const CompareDetail =()=>{

  const formRef = useRef<FormInstance>();
  const actionRef = useRef<ActionType>();
  const request = useTableRequest();
   
  const columns = useMemo<ProColumns<any>[]>(()=>(`.concat(e,`),[]);

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
`);return(0,a.jsx)(w.ZP,{height:"800px",language:"javascript",options:{automaticLayout:!0,minimap:{enabled:!1},wordWrap:"on",formatOnPaste:!0,formatOnType:!0},theme:"vs-dark",value:e&&(e==null?void 0:e.trim())!==""?t!=null?t:"":s,onMount:l,onChange:function(m){setTimeout(function(){u.current.getAction("editor.action.formatDocument").run()},500)}})},I=O,J=r(35290),C=r.n(J),E=r(411),N=r.n(E),S=r(82853),H=r(48234);function Z(g,o,e){return j.apply(this,arguments)}function j(){return j=N()(C()().mark(function g(o,e,i){var u,l;return C()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return u=(0,S.jsonInputForTargetLanguage)(o),t.next=3,u.addSource({name:e,samples:[i]});case 3:return l=new S.InputData,l.addInput(u),t.next=7,(0,S.quicktype)({inputData:l,lang:o,rendererOptions:{"just-types":"true"}});case 7:return t.abrupt("return",t.sent);case 8:case"end":return t.stop()}},g)})),j.apply(this,arguments)}var B=function(){var o=(0,n.useContext)(y),e=o.currentCode,i=o.targetSelect,u=(0,n.useState)(),l=h()(u,2),s=l[0],t=l[1],c=(0,n.useRef)(),m=function(d){c.current=d,setTimeout(function(){d.getAction("editor.action.formatDocument").run()},500)};(0,H.Z)(N()(C()().mark(function f(){var d,x;return C()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return console.log("\u8FDB\u5165"),console.log(e),v.next=4,Z("typescript","Result",e!=null?e:"");case 4:d=v.sent,x=d.lines,t(x.join(`
`)),setTimeout(function(){var p;(p=c.current)===null||p===void 0||p.getAction("editor.action.formatDocument").run()},500);case 8:case"end":return v.stop()}},f)})),[e]),(0,n.useEffect)(function(){console.log(s)},[s]);var T=(0,n.useMemo)(function(){return(0,a.jsx)(w.ZP,{height:"800px",language:i==null?void 0:i.language,options:{automaticLayout:!0,wordWrap:"on",formatOnPaste:!0,formatOnType:!0,readOnly:!0},theme:"vs-dark",value:s!=null?s:"",onMount:m})},[s]);return T},$=B,k=function(){var o=(0,n.useState)(),e=h()(o,2),i=e[0],u=e[1],l=(0,n.useState)({label:"Json",value:"json",language:"json"}),s=h()(l,2),t=s[0],c=s[1],m=(0,n.useState)({label:"ProTable",value:"protable",language:"typescript"}),T=h()(m,2),f=T[0],d=T[1],x=(0,n.useMemo)(function(){return{typescript:(0,a.jsx)($,{}),protable:(0,a.jsx)(I,{})}},[]);(0,n.useEffect)(function(){t.value==="protable-json"&&d({label:"ProTable",value:"protable",language:"typescript"})},[t]);var R=(0,n.useMemo)(function(){return x[f.value]},[f]);return(0,a.jsx)(y.Provider,{value:{currentCode:i,setCurrentCode:u,select:t,setSelect:c,targetSelect:f,setTargetSelect:d},children:(0,a.jsxs)("div",{className:"w-full h-full flex  p-2",children:[(0,a.jsx)("div",{className:"w-1/2 flex-1 mr-1",children:(0,a.jsxs)("div",{className:"w-full h-full pt-2 rounded-xl overflow-hidden ",style:{backgroundColor:"#3c3c3c"},children:[(0,a.jsx)("div",{className:"pl-2 pb-2",children:(0,a.jsx)(b.Z,{value:t,style:{width:150},onChange:function(p){c(p)},labelInValue:!0,options:[{label:"Tool Input",options:[{label:"Json",value:"json",language:"json"}]}]})}),(0,a.jsx)(A,{})]})}),(0,a.jsx)("div",{className:"w-1/2 flex-1 ml-1",children:(0,a.jsxs)("div",{className:"w-full h-full pt-2 rounded-xl overflow-hidden",style:{backgroundColor:"#3c3c3c"},children:[(0,a.jsx)("div",{className:"pl-2 pb-2",children:(0,a.jsx)(b.Z,{value:f,style:{width:120},onChange:function(p){d(p)},labelInValue:!0,options:[{label:"Business",options:[{label:"ProTable",value:"protable",language:"typescript"}]}]})}),R]})})]})})},F=k},99412:function(){},64170:function(){}}]);
