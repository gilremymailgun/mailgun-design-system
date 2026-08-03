import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./iframe-DlGTtrP2.js";import{i as n,n as r,r as i,t as a}from"./Icon-CfLNB__B.js";var o,s,c,l,u;e((()=>{r(),n(),o=t(),s={title:`Foundations/Icons`,component:a,tags:[`autodocs`],argTypes:{name:{control:`select`,options:Object.keys(i)},size:{control:`number`}}},c={args:{name:`arrows/arrow-left-gen1`,size:16}},l={name:`All icons`,render:()=>(0,o.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(120px, 1fr))`,gap:`16px`,padding:`24px`},children:Object.keys(i).sort().map(e=>(0,o.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`8px`,padding:`12px`,border:`1px solid var(--sys-color-border-subtle)`,borderRadius:`var(--ref-radius-s)`},children:[(0,o.jsx)(a,{name:e,size:24}),(0,o.jsx)(`span`,{style:{fontSize:`10px`,color:`var(--sys-color-text-muted)`,textAlign:`center`,wordBreak:`break-word`},children:e})]},e))})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'arrows/arrow-left-gen1',
    size: 16
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'All icons',
  render: () => {
    const names = Object.keys(iconRegistry).sort();
    return <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
      gap: '16px',
      padding: '24px'
    }}>
        {names.map(name => <div key={name} style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        padding: '12px',
        border: '1px solid var(--sys-color-border-subtle)',
        borderRadius: 'var(--ref-radius-s)'
      }}>
            <Icon name={name} size={24} />
            <span style={{
          fontSize: '10px',
          color: 'var(--sys-color-text-muted)',
          textAlign: 'center',
          wordBreak: 'break-word'
        }}>
              {name}
            </span>
          </div>)}
      </div>;
  }
}`,...l.parameters?.docs?.source}}},u=[`SingleIcon`,`AllIcons`]}))();export{l as AllIcons,c as SingleIcon,u as __namedExportsOrder,s as default};