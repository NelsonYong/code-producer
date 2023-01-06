(self.webpackChunk=self.webpackChunk||[]).push([[188],{43362:function(G,b,u){"use strict";u.r(b),u.d(b,{default:function(){return W}});var M=u(46686),g=u.n(M),R=u(57895),n=u(93236),x=u(84001),A=(0,n.createContext)({}),C=A,a=u(62086),O=function(){var r=(0,n.useContext)(C),t=r.currentCode,c=r.setCurrentCode,s=r.select,i=(0,n.useRef)(),o=function(l){i.current=l,setTimeout(function(){l.getAction("editor.action.formatDocument").run()},500)};return(0,a.jsx)(x.ZP,{height:"800px",language:s==null?void 0:s.language,options:{automaticLayout:!0,minimap:{enabled:!1},wordWrap:"on",formatOnPaste:!0,formatOnType:!0},theme:"vs-dark",value:t!=null?t:"",onMount:o,onChange:function(l){c==null||c(l),setTimeout(function(){i.current.getAction("editor.action.formatDocument").run()},500)}})},I=O,N=function(){var r=(0,n.useContext)(C),t=r.currentCode,c=r.targetSelect,s=(0,n.useRef)(),i=function(l){s.current=l,setTimeout(function(){l.getAction("editor.action.formatDocument").run()},500)},o=`
import { useMemo, useState, useRef } from "react";
import ProTable from "@ant-design/pro-table";
import type { ActionType, ProColumns } from "@ant-design/pro-table";
import type { FormInstance } from "antd";
import useTableRequest from "@/hooks/useTableRequest";

const CompareDetail =()=>{

  const formRef = useRef<FormInstance>();
  const actionRef = useRef<ActionType>();
  const request = useTableRequest();
   
  const columns = useMemo<ProColumns<any>[]>(()=>({`.concat(t,`}),[]);

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
`);return(0,a.jsx)(x.ZP,{height:"800px",language:"javascript",options:{automaticLayout:!0,minimap:{enabled:!1},wordWrap:"on",formatOnPaste:!0,formatOnType:!0},theme:"vs-dark",value:o!=null?o:"",onMount:i,onChange:function(l){setTimeout(function(){s.current.getAction("editor.action.formatDocument").run()},500)}})},J=N,H=u(35290),h=u.n(H),Z=u(411),V=u.n(Z),w=u(82853),$=u(48234);function k(m,r,t){return j.apply(this,arguments)}function j(){return j=V()(h()().mark(function m(r,t,c){var s,i;return h()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return s=(0,w.jsonInputForTargetLanguage)(r),e.next=3,s.addSource({name:t,samples:[c]});case 3:return i=new w.InputData,i.addInput(s),e.next=7,(0,w.quicktype)({inputData:i,lang:r,rendererOptions:{"just-types":"true"}});case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}},m)})),j.apply(this,arguments)}var E=function(){var r=(0,n.useContext)(C),t=r.currentCode,c=r.targetSelect,s=(0,n.useState)(),i=g()(s,2),o=i[0],e=i[1],l=(0,n.useRef)(),P=function(f){l.current=f,setTimeout(function(){f.getAction("editor.action.formatDocument").run()},500)};(0,$.Z)(V()(h()().mark(function v(){var f,T;return h()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return console.log("\u8FDB\u5165"),console.log(t),d.next=4,k("typescript","Result",t!=null?t:"");case 4:f=d.sent,T=f.lines,e(T.join(`
`)),setTimeout(function(){var S;(S=l.current)===null||S===void 0||S.getAction("editor.action.formatDocument").run()},500);case 8:case"end":return d.stop()}},v)})),[t]),(0,n.useEffect)(function(){console.log(o)},[o]);var y=(0,n.useMemo)(function(){return(0,a.jsx)(x.ZP,{height:"800px",language:c==null?void 0:c.language,options:{automaticLayout:!0,wordWrap:"on",formatOnPaste:!0,formatOnType:!0,readOnly:!0},theme:"vs-dark",value:o!=null?o:"",onMount:P})},[o]),p=[];return y},F=E,L=function(){var r=(0,n.useState)(),t=g()(r,2),c=t[0],s=t[1],i=(0,n.useState)({label:"Json",value:"json",language:"json"}),o=g()(i,2),e=o[0],l=o[1],P=(0,n.useState)({label:"ProTable",value:"protable",language:"typescript"}),y=g()(P,2),p=y[0],v=y[1],f=(0,n.useMemo)(function(){return{typescript:(0,a.jsx)(F,{}),protable:(0,a.jsx)(J,{})}},[]);(0,n.useEffect)(function(){e.value==="protable-json"&&v({label:"ProTable",value:"protable",language:"typescript"})},[e]);var T=(0,n.useMemo)(function(){return f[p.value]},[p]);return(0,a.jsx)(C.Provider,{value:{currentCode:c,setCurrentCode:s,select:e,setSelect:l,targetSelect:p,setTargetSelect:v},children:(0,a.jsxs)("div",{className:"w-full h-full flex  p-2",children:[(0,a.jsx)("div",{className:"w-1/2 flex-1 mr-1",children:(0,a.jsxs)("div",{className:"w-full h-full pt-2 rounded-xl overflow-hidden ",style:{backgroundColor:"#3c3c3c"},children:[(0,a.jsx)("div",{className:"pl-2 pb-2",children:(0,a.jsx)(R.Z,{value:e,style:{width:150},onChange:function(d){l(d)},labelInValue:!0,options:[{label:"Tool Input",options:[{label:"Json",value:"json",language:"json"}]}]})}),(0,a.jsx)(I,{})]})}),(0,a.jsx)("div",{className:"w-1/2 flex-1 ml-1",children:(0,a.jsxs)("div",{className:"w-full h-full pt-2 rounded-xl overflow-hidden",style:{backgroundColor:"#3c3c3c"},children:[(0,a.jsx)("div",{className:"pl-2 pb-2",children:(0,a.jsx)(R.Z,{value:p,style:{width:120},onChange:function(d){v(d)},labelInValue:!0,options:[{label:"Business",options:[{label:"ProTable",value:"protable",language:"typescript"}]}]})}),T]})})]})})},W=L},99412:function(){},64170:function(){}}]);
