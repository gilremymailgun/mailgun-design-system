import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{A as n,t as r}from"./iframe-CPGuSGKG.js";import{n as i,t as a}from"./Icon-NIiAo76S.js";var o=e((()=>{})),s,c,l,u=e((()=>{s=t(n(),1),i(),o(),c=r(),l=({label:e,onClick:t,options:n=[],disabled:r=!1,loading:i=!1})=>{let[o,l]=(0,s.useState)(!1);return(0,c.jsxs)(`div`,{className:`mg-split-button`,children:[(0,c.jsx)(`button`,{type:`button`,className:`mg-split-button__main`,onClick:t,disabled:r||i,children:i?(0,c.jsx)(`span`,{className:`mg-split-button__spinner`,"aria-hidden":`true`}):e}),(0,c.jsx)(`button`,{type:`button`,className:`mg-split-button__trigger`,onClick:()=>l(e=>!e),disabled:r||i,"aria-haspopup":`menu`,"aria-expanded":o,"aria-label":`${e} options`,children:(0,c.jsx)(a,{name:`navigate/chevron-down-gen2`})}),o&&n.length>0&&(0,c.jsx)(`div`,{className:`mg-split-button__menu`,role:`menu`,children:n.map((e,t)=>(0,c.jsx)(`button`,{type:`button`,role:`menuitem`,className:`mg-split-button__menu-item`,onClick:()=>{e.onClick(),l(!1)},children:e.label},t))})]})},l.__docgenInfo={description:``,methods:[],displayName:`SplitButton`,props:{label:{required:!0,tsType:{name:`string`},description:``},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},options:{required:!1,tsType:{name:`Array`,elements:[{name:`SplitButtonOption`}],raw:`SplitButtonOption[]`},description:``,defaultValue:{value:`[]`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},loading:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}}}}})),d,f,p,m,h;e((()=>{u(),d={title:`Components/SplitButton`,component:l,tags:[`autodocs`]},f={args:{label:`Split`,onClick:()=>alert(`main action`),options:[{label:`Option 1`,onClick:()=>alert(`Option 1`)},{label:`Option 2`,onClick:()=>alert(`Option 2`)},{label:`Option 3`,onClick:()=>alert(`Option 3`)}]}},p={args:{...f.args,loading:!0}},m={args:{...f.args,disabled:!0}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Split',
    onClick: () => alert('main action'),
    options: [{
      label: 'Option 1',
      onClick: () => alert('Option 1')
    }, {
      label: 'Option 2',
      onClick: () => alert('Option 2')
    }, {
      label: 'Option 3',
      onClick: () => alert('Option 3')
    }]
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    loading: true
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true
  }
}`,...m.parameters?.docs?.source}}},h=[`Default`,`Loading`,`Disabled`]}))();export{f as Default,m as Disabled,p as Loading,h as __namedExportsOrder,d as default};