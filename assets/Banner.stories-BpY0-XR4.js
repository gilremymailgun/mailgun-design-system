import{i as e}from"./preload-helper-xPQekRTU.js";import{A as t,t as n}from"./iframe-Ce6mmkYk.js";import{n as r,t as i}from"./Icon-BDbwB_jX.js";import{n as a,t as o}from"./Button-DI5zimWI.js";var s=e((()=>{})),c,l,u,d=e((()=>{t(),r(),s(),c=n(),l={info:`feedback/info-gen2`,warning:`feedback/warning-gen2`,success:`feedback/success-gen2`,error:`feedback/error-gen2`,tip:`ui/light-bulb-gen2`},u=({type:e=`info`,title:t,children:n,actions:r,onClose:a,className:o})=>(0,c.jsx)(`div`,{className:[`mg-banner`,`mg-banner--${e}`,o||``].filter(Boolean).join(` `),role:`alert`,children:(0,c.jsxs)(`div`,{className:`mg-banner__row`,children:[(0,c.jsxs)(`div`,{className:`mg-banner__main`,children:[(0,c.jsx)(`span`,{className:`mg-banner__icon`,children:(0,c.jsx)(i,{name:l[e]})}),(0,c.jsxs)(`div`,{className:`mg-banner__content`,children:[t&&(0,c.jsx)(`p`,{className:`mg-banner__title`,children:t}),(0,c.jsxs)(`div`,{className:`mg-banner__body`,children:[(0,c.jsx)(`p`,{className:`mg-banner__text`,children:n}),r&&(0,c.jsx)(`div`,{className:`mg-banner__actions`,children:r})]})]})]}),a&&(0,c.jsx)(`button`,{type:`button`,className:`mg-banner__close`,onClick:a,"aria-label":`Close`,children:(0,c.jsx)(i,{name:`navigate/close-small-gen2`})})]})}),u.__docgenInfo={description:``,methods:[],displayName:`Banner`,props:{type:{required:!1,tsType:{name:`union`,raw:`'info' | 'warning' | 'success' | 'error' | 'tip'`,elements:[{name:`literal`,value:`'info'`},{name:`literal`,value:`'warning'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'error'`},{name:`literal`,value:`'tip'`}]},description:``,defaultValue:{value:`'info'`,computed:!1}},title:{required:!1,tsType:{name:`string`},description:``},children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},actions:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Action buttons rendered below the description, e.g. tertiary <Button> elements.`},onClose:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Called when the close ("x") button is clicked. If omitted, no close button is shown.`},className:{required:!1,tsType:{name:`string`},description:``}}}})),f,p,m,h,g,_,v,y,b,x,S,C,w;e((()=>{d(),a(),f=n(),p={title:`Components/Banner`,component:u,tags:[`autodocs`],argTypes:{type:{control:`select`,options:[`info`,`warning`,`success`,`error`,`tip`]},title:{control:`text`},children:{control:`text`}}},m=`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,h={args:{type:`info`,children:m,onClose:()=>{}}},g={args:{type:`warning`,children:m,onClose:()=>{}}},_={args:{type:`success`,children:m,onClose:()=>{}}},v={args:{type:`error`,children:m,onClose:()=>{}}},y={args:{type:`tip`,children:m,onClose:()=>{}}},b={name:`With title`,args:{type:`info`,title:`Title`,children:m,onClose:()=>{}}},x={name:`With actions`,args:{type:`warning`,title:`Title`,children:m,onClose:()=>{},actions:(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(o,{hierarchy:`tertiary`,size:`small`,children:`Dismiss`}),(0,f.jsx)(o,{hierarchy:`tertiary`,size:`small`,children:`Learn more`})]})}},S={name:`No close button`,args:{type:`info`,children:m}},C={name:`All types`,render:()=>(0,f.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`12px`,padding:`24px`,maxWidth:`672px`},children:[`info`,`warning`,`success`,`error`,`tip`].map(e=>(0,f.jsx)(u,{type:e,onClose:()=>{},children:m},e))})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'info',
    children: LOREM,
    onClose: () => {}
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'warning',
    children: LOREM,
    onClose: () => {}
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'success',
    children: LOREM,
    onClose: () => {}
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'error',
    children: LOREM,
    onClose: () => {}
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'tip',
    children: LOREM,
    onClose: () => {}
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'With title',
  args: {
    type: 'info',
    title: 'Title',
    children: LOREM,
    onClose: () => {}
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'With actions',
  args: {
    type: 'warning',
    title: 'Title',
    children: LOREM,
    onClose: () => {},
    actions: <>
        <Button hierarchy="tertiary" size="small">
          Dismiss
        </Button>
        <Button hierarchy="tertiary" size="small">
          Learn more
        </Button>
      </>
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'No close button',
  args: {
    type: 'info',
    children: LOREM
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'All types',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    padding: '24px',
    maxWidth: '672px'
  }}>
      {(['info', 'warning', 'success', 'error', 'tip'] as const).map(type => <Banner key={type} type={type} onClose={() => {}}>
          {LOREM}
        </Banner>)}
    </div>
}`,...C.parameters?.docs?.source}}},w=[`Info`,`Warning`,`Success`,`Error`,`Tip`,`WithTitle`,`WithActions`,`NoCloseButton`,`AllTypes`]}))();export{C as AllTypes,v as Error,h as Info,S as NoCloseButton,_ as Success,y as Tip,g as Warning,x as WithActions,b as WithTitle,w as __namedExportsOrder,p as default};