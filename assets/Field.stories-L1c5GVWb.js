import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{A as n,t as r}from"./iframe-GYTy-WCS.js";import{n as i,t as a}from"./Icon-DNZxuDT2.js";import{n as o,t as s}from"./Button-CG5V9UYn.js";var c=e((()=>{})),l,u,d=e((()=>{n(),i(),o(),c(),l=r(),u=({value:e,onChange:t,placeholder:n,label:r,labelOptionText:i,showLabelTooltip:o,additionalCustomText:c,leadingIcon:u,trailingIcon:d,showTrailingIcon:f,buttonLabel:p,onButtonClick:m,helpText:h,showHelpIcon:g,counterText:_,size:v=`normal`,error:y=!1,disabled:b=!1,className:x})=>(0,l.jsxs)(`div`,{className:[`mg-field`,`mg-field--${v}`,y?`mg-field--error`:``,b?`mg-field--disabled`:``,x||``].filter(Boolean).join(` `),children:[r&&(0,l.jsxs)(`div`,{className:`mg-field__label-row`,children:[(0,l.jsx)(`span`,{className:`mg-field__label`,children:r}),i&&(0,l.jsx)(`span`,{className:`mg-field__label-option`,children:i}),o&&(0,l.jsx)(`span`,{className:`mg-field__label-tooltip-icon`,children:(0,l.jsx)(a,{name:`feedback/info-circle-gen1`})})]}),c&&(0,l.jsx)(`span`,{className:`mg-field__custom-text`,children:c}),(0,l.jsxs)(`div`,{className:`mg-field__row`,children:[(0,l.jsxs)(`div`,{className:`mg-field__box`,children:[u&&(0,l.jsx)(`span`,{className:`mg-field__icon`,children:u}),(0,l.jsx)(`input`,{type:`text`,className:`mg-field__input`,value:e,placeholder:n,disabled:b,onChange:e=>t?.(e.target.value)}),f&&(0,l.jsx)(`span`,{className:`mg-field__icon mg-field__icon--trailing`,children:d||(0,l.jsx)(a,{name:`navigate/chevron-down-gen2`})})]}),p&&(0,l.jsx)(s,{hierarchy:`primary`,size:v===`small`?`small`:`default`,disabled:!0,onClick:m,children:p})]}),(h||_)&&(0,l.jsxs)(`div`,{className:`mg-field__helper`,children:[g&&(0,l.jsx)(`span`,{className:`mg-field__help-icon`,children:(0,l.jsx)(a,{name:`feedback/info-circle-gen1`})}),h&&(0,l.jsx)(`span`,{className:`mg-field__help-text`,children:h}),_&&(0,l.jsx)(`span`,{className:`mg-field__counter`,children:_})]})]}),u.__docgenInfo={description:``,methods:[],displayName:`Field`,props:{value:{required:!0,tsType:{name:`string`},description:``},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:``},placeholder:{required:!1,tsType:{name:`string`},description:``},label:{required:!1,tsType:{name:`string`},description:``},labelOptionText:{required:!1,tsType:{name:`string`},description:`Small secondary text shown next to the label, e.g. "(Optional message)"`},showLabelTooltip:{required:!1,tsType:{name:`boolean`},description:"Shows a tooltip icon next to the label. Pass the tooltip content via `labelTooltipContent` if you wire up a real tooltip."},additionalCustomText:{required:!1,tsType:{name:`string`},description:``},leadingIcon:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},trailingIcon:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:"Defaults to a chevron-down icon if `showTrailingIcon` is true and no custom icon is passed."},showTrailingIcon:{required:!1,tsType:{name:`boolean`},description:``},buttonLabel:{required:!1,tsType:{name:`string`},description:`Renders a disabled-looking inline button (e.g. "Add") at the end of the field row.`},onButtonClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},helpText:{required:!1,tsType:{name:`string`},description:``},showHelpIcon:{required:!1,tsType:{name:`boolean`},description:``},counterText:{required:!1,tsType:{name:`string`},description:`e.g. "0/10"`},size:{required:!1,tsType:{name:`union`,raw:`'normal' | 'small'`,elements:[{name:`literal`,value:`'normal'`},{name:`literal`,value:`'small'`}]},description:``,defaultValue:{value:`'normal'`,computed:!1}},error:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``}}}})),f,p,m,h,g,_,v,y,b,x;e((()=>{f=t(n(),1),d(),p=r(),m={title:`Components/Field`,component:u,tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`normal`,`small`]},error:{control:`boolean`},disabled:{control:`boolean`}}},h={args:{value:``,placeholder:`Placeholder`,label:`Label`,labelOptionText:`(Optional message)`,showLabelTooltip:!0,additionalCustomText:`Additional custom text`,showTrailingIcon:!0,buttonLabel:`Add`,helpText:`Help text`,showHelpIcon:!0,counterText:`0/10`,size:`normal`}},g={args:{...h.args,size:`small`}},_={name:`Minimal (no label/helper)`,args:{value:``,placeholder:`Placeholder`,size:`normal`}},v={name:`Error`,args:{...h.args,value:`Invalid value`,error:!0,helpText:`This field is required`}},y={args:{...h.args,value:`Disabled value`,disabled:!0}},b={name:`Interactive (controlled)`,render:()=>{let[e,t]=(0,f.useState)(``);return(0,p.jsx)(u,{value:e,onChange:t,placeholder:`Type something...`,label:`Domain`,helpText:`Enter your custom domain`,showHelpIcon:!0})}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    value: '',
    placeholder: 'Placeholder',
    label: 'Label',
    labelOptionText: '(Optional message)',
    showLabelTooltip: true,
    additionalCustomText: 'Additional custom text',
    showTrailingIcon: true,
    buttonLabel: 'Add',
    helpText: 'Help text',
    showHelpIcon: true,
    counterText: '0/10',
    size: 'normal'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    size: 'small'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Minimal (no label/helper)',
  args: {
    value: '',
    placeholder: 'Placeholder',
    size: 'normal'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Error',
  args: {
    ...Default.args,
    value: 'Invalid value',
    error: true,
    helpText: 'This field is required'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    value: 'Disabled value',
    disabled: true
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Interactive (controlled)',
  render: () => {
    const [value, setValue] = useState('');
    return <Field value={value} onChange={setValue} placeholder="Type something..." label="Domain" helpText="Enter your custom domain" showHelpIcon />;
  }
}`,...b.parameters?.docs?.source}}},x=[`Default`,`Small`,`Minimal`,`ErrorState`,`Disabled`,`Interactive`]}))();export{h as Default,y as Disabled,v as ErrorState,b as Interactive,_ as Minimal,g as Small,x as __namedExportsOrder,m as default};