"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[84014],{24665:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});const o=JSON.parse('{"id":"openfeature_sdk/server_providers/openfeature_python","title":"Python","description":"How to use the OpenFeature Python SDK with GO Feature Flag","source":"@site/versioned_docs/version-v1.36.1/openfeature_sdk/server_providers/openfeature_python.md","sourceDirName":"openfeature_sdk/server_providers","slug":"/openfeature_sdk/server_providers/openfeature_python","permalink":"/docs/v1.36.1/openfeature_sdk/server_providers/openfeature_python","draft":false,"unlisted":false,"editUrl":"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.36.1/openfeature_sdk/server_providers/openfeature_python.md","tags":[],"version":"v1.36.1","sidebarPosition":51,"frontMatter":{"sidebar_position":51,"title":"Python","description":"How to use the OpenFeature Python SDK with GO Feature Flag"},"sidebar":"tutorialSidebar","previous":{"title":"PHP","permalink":"/docs/v1.36.1/openfeature_sdk/server_providers/openfeature_php"},"next":{"title":"Ruby","permalink":"/docs/v1.36.1/openfeature_sdk/server_providers/openfeature_ruby"}}');var r=n(74848),a=n(28453);const i={sidebar_position:51,title:"Python",description:"How to use the OpenFeature Python SDK with GO Feature Flag"},s="Python Provider",l={},p=[{value:"Install dependencies",id:"install-dependencies",level:2},{value:"Initialize your Open Feature client",id:"initialize-your-open-feature-client",level:2},{value:"Evaluate your flag",id:"evaluate-your-flag",level:2},{value:"Contribute to the provider",id:"contribute-to-the-provider",level:2}];function u(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"python-provider",children:"Python Provider"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://pypi.org/project/gofeatureflag-python-provider/",children:(0,r.jsx)(t.img,{src:"https://img.shields.io/pypi/v/gofeatureflag-python-provider?color=blue&style=flat-square",alt:"PyPI - Version"})}),"\n",(0,r.jsx)(t.img,{src:"https://img.shields.io/pypi/dm/gofeatureflag-python-provider?style=flat-square",alt:"PyPI - Downloads"})]}),"\n",(0,r.jsx)(t.h2,{id:"install-dependencies",children:"Install dependencies"}),"\n",(0,r.jsxs)(t.p,{children:["The first thing we will do is install the ",(0,r.jsx)(t.strong,{children:"Open Feature SDK"})," and the ",(0,r.jsx)(t.strong,{children:"GO Feature Flag provider"}),"."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"pip install gofeatureflag-python-provider\n"})}),"\n",(0,r.jsx)(t.h2,{id:"initialize-your-open-feature-client",children:"Initialize your Open Feature client"}),"\n",(0,r.jsx)(t.p,{children:"To evaluate the flag you need to have an Open Feature configured in you app.\nThis code block shows you how you can create a client that you can use in your application."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'from gofeatureflag_python_provider.provider import GoFeatureFlagProvider\nfrom gofeatureflag_python_provider.options import GoFeatureFlagOptions\nfrom openfeature import api\nfrom openfeature.evaluation_context import EvaluationContext\n\n// ...\n\ngoff_provider = GoFeatureFlagProvider(\n    options=GoFeatureFlagOptions(endpoint="https://gofeatureflag.org/")\n)\napi.set_provider(goff_provider)\nclient = api.get_client(name="test-client")\n'})}),"\n",(0,r.jsx)(t.h2,{id:"evaluate-your-flag",children:"Evaluate your flag"}),"\n",(0,r.jsxs)(t.p,{children:["This code block explains how you can create an ",(0,r.jsx)(t.code,{children:"EvaluationContext"})," and use it to evaluate your flag."]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["In this example, we are evaluating a ",(0,r.jsx)(t.code,{children:"boolean"})," flag, but other types are also available."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.strong,{children:["Refer to the ",(0,r.jsx)(t.a,{href:"https://docs.openfeature.dev/docs/reference/concepts/evaluation-api#basic-evaluation",children:"Open Feature documentation"})," to know more about it."]})}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'// Context of your flag evaluation.\n// With GO Feature Flag you MUST have a targetingKey that is a unique identifier of the user.\nevaluation_ctx = EvaluationContext(\n    targeting_key="d45e303a-38c2-11ed-a261-0242ac120002",\n    attributes={\n        "email": "john.doe@gofeatureflag.org",\n        "firstname": "john",\n        "lastname": "doe",\n        "anonymous": False,\n        "professional": True,\n        "rate": 3.14,\n        "age": 30,\n        "company_info": {"name": "my_company", "size": 120},\n        "labels": ["pro", "beta"],\n    },\n)\n\nadmin_flag = client.get_boolean_value(\n          flag_key=flag_key,\n          default_value=default_value,\n          evaluation_context=ctx,\n      )\n\nif admin_flag:\n  # flag "flag-only-for-admin" is true for the user\nelse:\n  # flag "flag-only-for-admin" is false for the user\n'})}),"\n",(0,r.jsx)(t.h2,{id:"contribute-to-the-provider",children:"Contribute to the provider"}),"\n",(0,r.jsxs)(t.p,{children:["You can find the source of the provider in the ",(0,r.jsx)(t.a,{href:"https://github.com/thomaspoignant/go-feature-flag/tree/main/openfeature/providers/python-provider",children:(0,r.jsx)(t.code,{children:"repository"})}),"."]})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>s});var o=n(96540);const r={},a=o.createContext(r);function i(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);