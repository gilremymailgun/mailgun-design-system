import{i as e}from"./preload-helper-xPQekRTU.js";import{A as t,t as n}from"./iframe-B9OS_tCb.js";var r=e((()=>{})),i,a,o=e((()=>{t(),r(),i=n(),a=({type:e=`critical`,children:t,className:n})=>(0,i.jsx)(`div`,{className:[`mg-alert`,`mg-alert--${e}`,n||``].filter(Boolean).join(` `),role:`alert`,children:(0,i.jsx)(`p`,{className:`mg-alert__text`,children:t})}),a.__docgenInfo={description:``,methods:[],displayName:`Alert`,props:{type:{required:!1,tsType:{name:`union`,raw:`'critical' | 'warning'`,elements:[{name:`literal`,value:`'critical'`},{name:`literal`,value:`'warning'`}]},description:``,defaultValue:{value:`'critical'`,computed:!1}},children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}}})),s,c,l,u,d,f;e((()=>{o(),s=n(),c={title:`Components/Alert`,component:a,tags:[`autodocs`],argTypes:{type:{control:`select`,options:[`critical`,`warning`]},children:{control:`text`}}},l={args:{type:`critical`,children:`A temporary sending limit of 200 emails has been applied on your account. Please contact support.`}},u={args:{type:`warning`,children:`Your account is approaching its monthly sending limit.`}},d={name:`All types`,render:()=>(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`12px`,padding:`24px`,maxWidth:`600px`},children:[(0,s.jsx)(a,{type:`critical`,children:`A temporary sending limit of 200 emails has been applied on your account. Please contact support.`}),(0,s.jsx)(a,{type:`warning`,children:`Your account is approaching its monthly sending limit.`})]})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'critical',
    children: 'A temporary sending limit of 200 emails has been applied on your account. Please contact support.'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'warning',
    children: 'Your account is approaching its monthly sending limit.'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'All types',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    padding: '24px',
    maxWidth: '600px'
  }}>
      <Alert type="critical">
        A temporary sending limit of 200 emails has been applied on your account. Please contact support.
      </Alert>
      <Alert type="warning">Your account is approaching its monthly sending limit.</Alert>
    </div>
}`,...d.parameters?.docs?.source}}},f=[`Critical`,`Warning`,`AllTypes`]}))();export{d as AllTypes,l as Critical,u as Warning,f as __namedExportsOrder,c as default};