import{i as e}from"./preload-helper-xPQekRTU.js";import{A as t,t as n}from"./iframe-CPGuSGKG.js";import{n as r,t as i}from"./Icon-NIiAo76S.js";import{n as a,t as o}from"./StatusDot-yBqzvgLv.js";var s=e((()=>{})),c,l,u=e((()=>{t(),a(),r(),s(),c=n(),l=({children:e,icon:t,dotStatus:n,onRemove:r,className:a})=>(0,c.jsxs)(`div`,{className:[`mg-tag`,a||``].filter(Boolean).join(` `),children:[t&&(0,c.jsx)(`span`,{className:`mg-tag__icon`,children:t}),n&&(0,c.jsx)(o,{type:n}),(0,c.jsx)(`span`,{className:`mg-tag__text`,children:e}),r&&(0,c.jsx)(`button`,{type:`button`,className:`mg-tag__remove`,onClick:r,"aria-label":`Remove`,children:(0,c.jsx)(i,{name:`feedback/delete-circle-gen1`})})]}),l.__docgenInfo={description:``,methods:[],displayName:`Tag`,props:{children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},icon:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Optional icon element, e.g. <Icon name="..." />`},dotStatus:{required:!1,tsType:{name:`union`,raw:`'info' | 'success' | 'error' | 'warning'`,elements:[{name:`literal`,value:`'info'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'error'`},{name:`literal`,value:`'warning'`}]},description:`Optional status dot shown before the label.`},onRemove:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Called when the remove ("x") action is clicked. If omitted, no remove icon is shown.`},className:{required:!1,tsType:{name:`string`},description:``}}}})),d,f,p,m,h,g;e((()=>{u(),r(),d=n(),f={title:`Components/Tag`,component:l,tags:[`autodocs`],argTypes:{children:{control:`text`},dotStatus:{control:`select`,options:[void 0,`info`,`success`,`error`,`warning`]}}},p={args:{children:`Tag`,onRemove:()=>alert(`removed`)}},m={name:`With icon and dot`,args:{children:`Tag`,icon:(0,d.jsx)(i,{name:`navigate/home-gen2`}),dotStatus:`success`,onRemove:()=>alert(`removed`)}},h={name:`Not removable (no remove action passed)`,args:{children:`Tag`}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Tag',
    onRemove: () => alert('removed')
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'With icon and dot',
  args: {
    children: 'Tag',
    icon: <Icon name="navigate/home-gen2" />,
    dotStatus: 'success',
    onRemove: () => alert('removed')
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Not removable (no remove action passed)',
  args: {
    children: 'Tag'
  }
}`,...h.parameters?.docs?.source}}},g=[`Default`,`WithIconAndDot`,`NotRemovable`]}))();export{p as Default,h as NotRemovable,m as WithIconAndDot,g as __namedExportsOrder,f as default};