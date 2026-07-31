import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./iframe-Ce6mmkYk.js";import{n,t as r}from"./NavIcons-93zMePPX.js";var i,a,o,s,c,l,u;e((()=>{n(),i=t(),a={title:`Foundations/Icons/NavIcons`,tags:[`autodocs`],parameters:{layout:`centered`}},o=[`dashboard`,`reporting`,`send`,`inspect`,`optimize`,`validate`,`sms`,`integrations`],s={render:()=>(0,i.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`24px`,padding:`16px`},children:o.map(e=>(0,i.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`8px`,width:`80px`},children:[(0,i.jsx)(r,{name:e}),(0,i.jsx)(`span`,{style:{fontSize:`11px`,color:`var(--color-text-secondary)`,textAlign:`center`},children:e})]},e))})},c={render:()=>(0,i.jsx)(`div`,{style:{display:`flex`,gap:`16px`,color:`var(--color-neutral-600)`},children:o.map(e=>(0,i.jsx)(r,{name:e},e))})},l={render:()=>(0,i.jsx)(`div`,{style:{display:`flex`,gap:`16px`,color:`var(--color-cta-brand-default)`},children:o.map(e=>(0,i.jsx)(r,{name:e},e))})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: '24px',
    padding: '16px'
  }}>
      {ALL_ICONS.map(name => <div key={name} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px',
      width: '80px'
    }}>
          <NavIcon name={name} />
          <span style={{
        fontSize: '11px',
        color: 'var(--color-text-secondary)',
        textAlign: 'center'
      }}>
            {name}
          </span>
        </div>)}
    </div>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    color: 'var(--color-neutral-600)'
  }}>
      {ALL_ICONS.map(name => <NavIcon key={name} name={name} />)}
    </div>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    color: 'var(--color-cta-brand-default)'
  }}>
      {ALL_ICONS.map(name => <NavIcon key={name} name={name} />)}
    </div>
}`,...l.parameters?.docs?.source}}},u=[`AllIcons`,`DefaultState`,`ActiveState`]}))();export{l as ActiveState,s as AllIcons,c as DefaultState,u as __namedExportsOrder,a as default};