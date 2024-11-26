"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[3630],{43129:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"go_module/store_file/http","title":"HTTP endpoint","description":"The HTTP Retriever","source":"@site/versioned_docs/version-v1.39.0/go_module/store_file/http.md","sourceDirName":"go_module/store_file","slug":"/go_module/store_file/http","permalink":"/docs/v1.39.0/go_module/store_file/http","draft":false,"unlisted":false,"editUrl":"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.39.0/go_module/store_file/http.md","tags":[],"version":"v1.39.0","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Retrieve your feature flags configuration","permalink":"/docs/v1.39.0/go_module/store_file/"},"next":{"title":"S3 Bucket","permalink":"/docs/v1.39.0/go_module/store_file/s3"}}');var i=n(74848),o=n(28453);const s={sidebar_position:2},d="HTTP endpoint",l={},c=[{value:"Example",id:"example",level:2},{value:"Configuration fields",id:"configuration-fields",level:2}];function a(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"http-endpoint",children:"HTTP endpoint"})}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.a,{href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag/retriever/httpretriever/#Retriever",children:(0,i.jsx)(t.strong,{children:"HTTP Retriever"})}),"\nwill perform an HTTP Request with your configuration to get your flags."]}),"\n",(0,i.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",metastring:"showLineNumbers",children:'err := ffclient.Init(ffclient.Config{\n    PollingInterval: 3 * time.Second,\n    Retriever: &httpretriever.Retriever{\n        URL:    "http://example.com/flag-config.goff.yaml",\n        Timeout: 2 * time.Second,\n    },\n})\ndefer ffclient.Close()\n'})}),"\n",(0,i.jsx)(t.h2,{id:"configuration-fields",children:"Configuration fields"}),"\n",(0,i.jsx)(t.p,{children:"To configure your HTTP endpoint:"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Field"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"URL"})})}),(0,i.jsxs)(t.td,{children:["Location to retrieve the file ",(0,i.jsx)("br",{})," ",(0,i.jsxs)(t.em,{children:["(ex: ",(0,i.jsx)(t.a,{href:"http://mydomain.io/flag.yaml",children:"http://mydomain.io/flag.yaml"}),")"]}),"."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"Method"})})}),(0,i.jsxs)(t.td,{children:["the HTTP method you want to use ",(0,i.jsx)("br",{}),(0,i.jsx)(t.em,{children:"(default is GET)"}),"."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"Body"})})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.em,{children:"(optional)"}),(0,i.jsx)("br",{}),"If you need a body to get the flags."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"Header"})})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.em,{children:"(optional)"}),(0,i.jsx)("br",{}),"Header you should pass while calling the endpoint ",(0,i.jsx)(t.em,{children:"(useful for authorization)"}),"."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"Timeout"})})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.em,{children:"(optional)"}),(0,i.jsx)("br",{}),"Timeout for the HTTP call ",(0,i.jsx)("br",{}),"(default is 10 seconds)."]})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>d});var r=n(96540);const i={},o=r.createContext(i);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);