import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{A as n,t as r}from"./iframe-DjKzufGM.js";import{n as i,t as a}from"./Field-Dnd7mvRV.js";var o,s,c,l,u,d,f,p,m,h;e((()=>{o=t(n(),1),i(),s=r(),c={title:`Components/Field`,component:a,tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`normal`,`small`]},error:{control:`boolean`},disabled:{control:`boolean`}}},l={args:{value:``,placeholder:`Placeholder`,label:`Label`,labelOptionText:`(Optional message)`,showLabelTooltip:!0,additionalCustomText:`Additional custom text`,showTrailingIcon:!0,buttonLabel:`Add`,helpText:`Help text`,showHelpIcon:!0,counterText:`0/10`,size:`normal`}},u={args:{...l.args,size:`small`}},d={name:`Minimal (no label/helper)`,args:{value:``,placeholder:`Placeholder`,size:`normal`}},f={name:`Error`,args:{...l.args,value:`Invalid value`,error:!0,helpText:`This field is required`}},p={args:{...l.args,value:`Disabled value`,disabled:!0}},m={name:`Interactive (controlled)`,render:()=>{let[e,t]=(0,o.useState)(``);return(0,s.jsx)(a,{value:e,onChange:t,placeholder:`Type something...`,label:`Domain`,helpText:`Enter your custom domain`,showHelpIcon:!0})}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    size: 'small'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Minimal (no label/helper)',
  args: {
    value: '',
    placeholder: 'Placeholder',
    size: 'normal'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Error',
  args: {
    ...Default.args,
    value: 'Invalid value',
    error: true,
    helpText: 'This field is required'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    value: 'Disabled value',
    disabled: true
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Interactive (controlled)',
  render: () => {
    const [value, setValue] = useState('');
    return <Field value={value} onChange={setValue} placeholder="Type something..." label="Domain" helpText="Enter your custom domain" showHelpIcon />;
  }
}`,...m.parameters?.docs?.source}}},h=[`Default`,`Small`,`Minimal`,`ErrorState`,`Disabled`,`Interactive`]}))();export{l as Default,p as Disabled,f as ErrorState,m as Interactive,d as Minimal,u as Small,h as __namedExportsOrder,c as default};