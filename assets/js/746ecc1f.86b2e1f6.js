"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[6266],{94138:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"openfeature_sdk/server_providers/openfeature_go","title":"GO","description":"How to use the OpenFeature GO SDK","source":"@site/versioned_docs/version-v1.38.0/openfeature_sdk/server_providers/openfeature_go.mdx","sourceDirName":"openfeature_sdk/server_providers","slug":"/openfeature_sdk/server_providers/openfeature_go","permalink":"/docs/v1.38.0/openfeature_sdk/server_providers/openfeature_go","draft":false,"unlisted":false,"editUrl":"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.38.0/openfeature_sdk/server_providers/openfeature_go.mdx","tags":[],"version":"v1.38.0","sidebarPosition":20,"frontMatter":{"sidebar_position":20,"title":"GO","description":"How to use the OpenFeature GO SDK"},"sidebar":"tutorialSidebar","previous":{"title":"SDKs","permalink":"/docs/v1.38.0/openfeature_sdk/sdk"},"next":{"title":"Java","permalink":"/docs/v1.38.0/openfeature_sdk/server_providers/openfeature_java"}}');var r=o(74848),i=o(28453);const a={sidebar_position:20,title:"GO",description:"How to use the OpenFeature GO SDK"},s="GO SDK usage",l={},d=[{value:"Install dependencies",id:"install-dependencies",level:2},{value:"Initialize your Open Feature provider",id:"initialize-your-open-feature-provider",level:2},{value:"Using the relay proxy",id:"using-the-relay-proxy",level:3},{value:"Example",id:"example",level:4},{value:"Initialize your Open Feature client",id:"initialize-your-open-feature-client",level:2},{value:"Evaluate your flag",id:"evaluate-your-flag",level:2},{value:"Contribute to the provider",id:"contribute-to-the-provider",level:2}];function u(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"go-sdk-usage",children:"GO SDK usage"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/open-feature/go-sdk-contrib/tree/main/providers/go-feature-flag",children:(0,r.jsx)(n.img,{src:"https://img.shields.io/badge/dynamic/json?color=blue&style=flat-square&url=https%3A%2F%2Fproxy.golang.org%2Fgithub.com%2Fopen-feature%2Fgo-sdk-contrib%2Fproviders%2Fgo-feature-flag%2F%40latest&query=%24.Version&label=GO",alt:"GO Version"})})}),"\n",(0,r.jsx)(n.h2,{id:"install-dependencies",children:"Install dependencies"}),"\n",(0,r.jsxs)(n.p,{children:["The first things we will do is install the ",(0,r.jsx)(n.strong,{children:"Open Feature SDK"})," and the ",(0,r.jsx)(n.strong,{children:"GO Feature Flag provider"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"go get github.com/open-feature/go-sdk\ngo get github.com/open-feature/go-sdk-contrib/providers/go-feature-flag\n"})}),"\n",(0,r.jsx)(n.h2,{id:"initialize-your-open-feature-provider",children:"Initialize your Open Feature provider"}),"\n",(0,r.jsxs)(n.p,{children:["Despite other providers, this GO provider can be used with the ",(0,r.jsx)(n.strong,{children:"relay proxy"})," or standalone\nusing the ",(0,r.jsx)(n.strong,{children:"GO Feature Flag module"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"using-the-relay-proxy",children:"Using the relay proxy"}),"\n",(0,r.jsxs)(n.p,{children:["If you want to use the provider with the ",(0,r.jsx)(n.strong,{children:"relay proxy"})," you should set the field ",(0,r.jsx)(n.code,{children:"Endpoint"})," in the options.\nBy default it will use a default ",(0,r.jsx)(n.code,{children:"HTTPClient"})," with a ",(0,r.jsx)(n.strong,{children:"timeout"})," configured at ",(0,r.jsx)(n.strong,{children:"10000"})," milliseconds. You can change\nthis configuration by providing your own configuration of the ",(0,r.jsx)(n.code,{children:"HTTPClient"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'options := gofeatureflag.ProviderOptions{\n  Endpoint: "http://localhost:1031",\n  HTTPClient: &http.Client{\n    Timeout:   1 * time.Second,\n  },\n}\nprovider, _ := gofeatureflag.NewProvider(options)\n'})}),"\n",(0,r.jsx)(n.h2,{id:"initialize-your-open-feature-client",children:"Initialize your Open Feature client"}),"\n",(0,r.jsx)(n.p,{children:"To evaluate the flags you need to have an Open Feature configured in you app.\nThis code block shows you how you can create a client that you can use in your application."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'import (\n  // ...\n  gofeatureflag "github.com/open-feature/go-sdk-contrib/providers/go-feature-flag/pkg"\n  of "github.com/open-feature/go-sdk/pkg/openfeature"\n)\n\n// ...\n\noptions := gofeatureflag.ProviderOptions{\n    Endpoint: "http://localhost:1031",\n}\nprovider, err := gofeatureflag.NewProvider(options)\nof.SetProvider(provider)\nclient := of.NewClient("my-app")\n'})}),"\n",(0,r.jsx)(n.h2,{id:"evaluate-your-flag",children:"Evaluate your flag"}),"\n",(0,r.jsxs)(n.p,{children:["This code block explains how you can create an ",(0,r.jsx)(n.code,{children:"EvaluationContext"})," and use it to evaluate your flag."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["In this example we are evaluating a ",(0,r.jsx)(n.code,{children:"boolean"})," flag, but other types are also available."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["Refer to the ",(0,r.jsx)(n.a,{href:"https://docs.openfeature.dev/docs/reference/concepts/evaluation-api#basic-evaluation",children:"Open Feature documentation"})," to know more about it."]})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'evaluationCtx := of.NewEvaluationContext(\n    "1d1b9238-2591-4a47-94cf-d2bc080892f1",\n    map[string]interface{}{\n      "firstname", "john",\n      "lastname", "doe",\n      "email", "john.doe@gofeatureflag.org",\n      "admin", true,\n      "anonymous", false,\n    })\nadminFlag, _ := client.BoolValue(context.TODO(), "flag-only-for-admin", false, evaluationCtx)\nif adminFlag {\n   // flag "flag-only-for-admin" is true for the user\n} else {\n  // flag "flag-only-for-admin" is false for the user\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"contribute-to-the-provider",children:"Contribute to the provider"}),"\n",(0,r.jsxs)(n.p,{children:["You can find the source of the provider in the ",(0,r.jsx)(n.a,{href:"https://github.com/open-feature/go-sdk-contrib/tree/main/providers/go-feature-flag",children:(0,r.jsx)(n.code,{children:"open-feature/go-sdk-contrib"})})," repository."]})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>a,x:()=>s});var t=o(96540);const r={},i=t.createContext(r);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);