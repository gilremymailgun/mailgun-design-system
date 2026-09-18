import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{A as n,t as r}from"./iframe-CV2d6n22.js";var i=e((()=>{})),a,o,s,c=e((()=>{a=t(n(),1),i(),o=r(),s=({tabs:e,defaultActiveId:t,activeId:n,onChange:r,showSupportingText:i=!1})=>{let[s,c]=(0,a.useState)(t??e[0]?.id??``),l=n??s,u=e=>{c(e),r?.(e)};return(0,o.jsx)(`div`,{className:`tabs`,role:`tablist`,"aria-label":`Tabs`,children:e.map(e=>{let t=e.id===l,n=e.disabled===!0;return(0,o.jsxs)(`button`,{role:`tab`,type:`button`,className:[`tabs__tab`,t&&`tabs__tab--selected`,n&&`tabs__tab--disabled`].filter(Boolean).join(` `),"aria-selected":t,"aria-disabled":n,disabled:n,onClick:()=>!n&&u(e.id),children:[(0,o.jsx)(`span`,{className:`tabs__tab-label`,children:e.label}),i&&e.supportingText&&(0,o.jsx)(`span`,{className:`tabs__tab-supporting`,children:e.supportingText})]},e.id)})})},s.__docgenInfo={description:``,methods:[],displayName:`Tabs`,props:{tabs:{required:!0,tsType:{name:`Array`,elements:[{name:`TabItem`}],raw:`TabItem[]`},description:`List of tab items to render`},defaultActiveId:{required:!1,tsType:{name:`string`},description:`ID of the initially selected tab`},activeId:{required:!1,tsType:{name:`string`},description:`Controlled active tab ID`},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(id: string) => void`,signature:{arguments:[{type:{name:`string`},name:`id`}],return:{name:`void`}}},description:`Callback fired when the active tab changes`},showSupportingText:{required:!1,tsType:{name:`boolean`},description:`Show supporting text (count, badge) next to label`,defaultValue:{value:`false`,computed:!1}}}}})),l,u,d,f,p,m,h,g;e((()=>{c(),l=r(),u={title:`Navigation/Tabs`,component:s,tags:[`autodocs`],parameters:{layout:`fullscreen`},decorators:[e=>(0,l.jsx)(`div`,{style:{padding:`32px`},children:(0,l.jsx)(e,{})})],argTypes:{showSupportingText:{description:`Show supporting text (e.g. count) next to each tab label.`,control:`boolean`},defaultActiveId:{description:`ID of the tab selected on mount.`,control:`text`}}},d=[{id:`item-1`,label:`Item 1`},{id:`item-2`,label:`Item 2`},{id:`item-3`,label:`Item 3`},{id:`item-4`,label:`Item 4`,disabled:!0},{id:`item-5`,label:`Item 5`},{id:`item-6`,label:`Item 6`},{id:`item-7`,label:`Item 7`},{id:`item-8`,label:`Item 8`},{id:`item-9`,label:`Item 9`}],f=[{id:`send`,label:`Send`,supportingText:`(203)`},{id:`optimize`,label:`Optimize`,supportingText:`(12)`},{id:`reporting`,label:`Reporting`,supportingText:`(5)`},{id:`archived`,label:`Archived`,supportingText:`(0)`,disabled:!0}],p={args:{tabs:d,defaultActiveId:`item-1`,showSupportingText:!1}},m={args:{tabs:f,defaultActiveId:`send`,showSupportingText:!0}},h={args:{tabs:d,defaultActiveId:`item-2`,showSupportingText:!1}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: DEFAULT_TABS,
    defaultActiveId: 'item-1',
    showSupportingText: false
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: TABS_WITH_COUNT,
    defaultActiveId: 'send',
    showSupportingText: true
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: DEFAULT_TABS,
    defaultActiveId: 'item-2',
    showSupportingText: false
  }
}`,...h.parameters?.docs?.source}}},g=[`Default`,`WithSupportingText`,`SecondTabSelected`]}))();export{p as Default,h as SecondTabSelected,m as WithSupportingText,g as __namedExportsOrder,u as default};