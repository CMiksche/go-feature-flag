"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[16909],{81992:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>s,metadata:()=>i,toc:()=>u});const i=JSON.parse('{"id":"go_module/notifier/custom","title":"Custom Notifier","description":"To create a custom notifier you must have a struct that implements the","source":"@site/versioned_docs/version-v1.38.0/go_module/notifier/custom.md","sourceDirName":"go_module/notifier","slug":"/go_module/notifier/custom","permalink":"/docs/v1.38.0/go_module/notifier/custom","draft":false,"unlisted":false,"editUrl":"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.38.0/go_module/notifier/custom.md","tags":[],"version":"v1.38.0","sidebarPosition":30,"frontMatter":{"sidebar_position":30},"sidebar":"tutorialSidebar","previous":{"title":"Webhook Notifier","permalink":"/docs/v1.38.0/go_module/notifier/webhook"},"next":{"title":"Linter","permalink":"/docs/v1.38.0/tooling/linter"}}');var n=o(74848),r=o(28453);const s={sidebar_position:30},a="Custom Notifier",c={},u=[];function f(e){const t={a:"a",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"custom-notifier",children:"Custom Notifier"})}),"\n",(0,n.jsxs)(t.p,{children:["To create a custom notifier you must have a ",(0,n.jsx)(t.code,{children:"struct"})," that implements the\n",(0,n.jsx)(t.a,{href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag/notifier/notifier",children:(0,n.jsx)(t.code,{children:"notifier.Notifier"})})," interface."]}),"\n",(0,n.jsxs)(t.p,{children:["In parameter you will receive a ",(0,n.jsx)(t.code,{children:"notifier.DiffCache"})," struct that will tell you what has changed in your flag configuration."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-go",children:'import (\n\tffclient "github.com/thomaspoignant/go-feature-flag"\n\t"github.com/thomaspoignant/go-feature-flag/notifier/notifier"\n\t"sync"\n)\n\ntype Notifier struct{}\nfunc (c *Notifier) Notify(diff notifier.DiffCache) error {\n\t// ...\n\t// do whatever you want here\n}\n'})})]})}function l(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(f,{...e})}):f(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>s,x:()=>a});var i=o(96540);const n={},r=i.createContext(n);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);