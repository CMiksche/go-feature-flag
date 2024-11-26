"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[99756],{18698:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"relay_proxy/profiling","title":"Profiling","description":"Profiling of the relay proxy.","source":"@site/versioned_docs/version-v1.39.0/relay_proxy/profiling.md","sourceDirName":"relay_proxy","slug":"/relay_proxy/profiling","permalink":"/docs/v1.39.0/relay_proxy/profiling","draft":false,"unlisted":false,"editUrl":"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.39.0/relay_proxy/profiling.md","tags":[],"version":"v1.39.0","sidebarPosition":81,"frontMatter":{"sidebar_position":81,"title":"Profiling","description":"Profiling of the relay proxy."},"sidebar":"tutorialSidebar","previous":{"title":"Monitoring / Tracing","permalink":"/docs/v1.39.0/relay_proxy/monitor_relay_proxy"},"next":{"title":"Advanced usage","permalink":"/docs/v1.39.0/relay_proxy/advanced_usage"}}');var r=i(74848),t=i(28453);const s={sidebar_position:81,title:"Profiling",description:"Profiling of the relay proxy."},l=void 0,a={},d=[{value:"Profiling",id:"profiling",level:2},{value:"Enable profiling",id:"enable-profiling",level:3}];function p(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"profiling",children:"Profiling"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"relay proxy"})," is able to expose profiling information.",(0,r.jsx)(n.br,{}),"\n","This is useful to understand the performance of the service and solve potential issues."]}),"\n",(0,r.jsxs)(n.p,{children:["The information are exposed on the ",(0,r.jsx)(n.code,{children:"/debug/pprof"})," endpoint, and we are using the default ",(0,r.jsx)(n.code,{children:"net/http/pprof"})," package\nto expose the information."]}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsx)(n.p,{children:"By default the profiling endpoints are disabled, and must be enabled in the configuration file."})}),"\n",(0,r.jsxs)(n.p,{children:["List of endpoints exposed is available ",(0,r.jsx)(n.a,{href:"http://localhost:1031/debug/pprof/",children:"http://localhost:1031/debug/pprof/"})]}),"\n",(0,r.jsx)(n.h3,{id:"enable-profiling",children:"Enable profiling"}),"\n",(0,r.jsxs)(n.p,{children:["In your relay proxy configuration file you need to set the ",(0,r.jsx)(n.code,{children:"enablePprof"})," field to ",(0,r.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:"{5}",children:"retriever:\n  kind: file\n  path: /goff/flags.yaml # Location of your feature flag files\n#  ...\nenablePprof: true\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.em,{children:["Note: the ",(0,r.jsx)(n.code,{children:"debug"})," field also enables profiling, but it is deprecated."]})})]})}function c(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>l});var o=i(96540);const r={},t=o.createContext(r);function s(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);