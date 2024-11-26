"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[84511],{37275:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"getting_started/using-openfeature","title":"Using Open Feature SDKs","description":"Deploy the relay proxy and use the OpenFeature SDKs","source":"@site/versioned_docs/version-v1.38.0/getting_started/using-openfeature.md","sourceDirName":"getting_started","slug":"/getting_started/using-openfeature","permalink":"/docs/v1.38.0/getting_started/using-openfeature","draft":false,"unlisted":false,"editUrl":"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.38.0/getting_started/using-openfeature.md","tags":[],"version":"v1.38.0","sidebarPosition":10,"frontMatter":{"sidebar_position":10,"description":"Deploy the relay proxy and use the OpenFeature SDKs"},"sidebar":"tutorialSidebar","previous":{"title":"Getting Started","permalink":"/docs/v1.38.0/category/getting-started"},"next":{"title":"Using the GO module","permalink":"/docs/v1.38.0/getting_started/using-go-module"}}');var a=t(74848),i=t(28453);const o={sidebar_position:10,description:"Deploy the relay proxy and use the OpenFeature SDKs"},l="Using Open Feature SDKs",s={},d=[{value:"Integration pattern",id:"integration-pattern",level:2},{value:"Create a feature flag configuration",id:"create-a-feature-flag-configuration",level:2},{value:"Create a relay proxy configuration file",id:"create-a-relay-proxy-configuration-file",level:2},{value:"Install the relay proxy",id:"install-the-relay-proxy",level:2},{value:"Use Open Feature SDK",id:"use-open-feature-sdk",level:2},{value:"Install dependencies",id:"install-dependencies",level:3},{value:"Init your Open Feature client",id:"init-your-open-feature-client",level:3},{value:"Evaluate your flag",id:"evaluate-your-flag",level:3}];function u(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"using-open-feature-sdks",children:"Using Open Feature SDKs"})}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["OpenFeature provides a shared, standardized feature flagging client - ",(0,a.jsx)(n.em,{children:"an SDK"})," - which can be plugged into various 3rd-party feature flagging providers.\nWhether you're using an open-source system or a commercial product, whether it's self-hosted or cloud-hosted, OpenFeature provides a consistent, unified API for developers to use feature flagging in their applications.\n",(0,a.jsx)(n.em,{children:(0,a.jsx)(n.a,{href:"https://docs.openfeature.dev",children:"Documentation"})})]})}),"\n",(0,a.jsxs)(n.p,{children:["GO Feature Flag is committed to ",(0,a.jsx)(n.strong,{children:"opensource"})," principles and ",(0,a.jsx)(n.strong,{children:"standardization"}),". To achieve this, we've chosen to rely solely on ",(0,a.jsx)(n.a,{href:"https://docs.openfeature.dev",children:"OpenFeature"})," and avoid building custom SDKs."]}),"\n",(0,a.jsxs)(n.p,{children:["To seamlessly integrate with OpenFeature, we provide a lightweight, self-hosted API server called the ",(0,a.jsx)(n.strong,{children:"relay proxy"}),". This proxy leverages the core GO Feature Flag module internally. By deploying the relay proxy in your infrastructure, you can utilize Open Feature SDKs in conjunction with GO Feature Flag providers to evaluate your feature flags."]}),"\n",(0,a.jsxs)(n.p,{children:["For a comprehensive understanding of how Open Feature operates, please refer to the official ",(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.a,{href:"https://docs.openfeature.dev",children:"Open Feature documentation"})}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"integration-pattern",children:"Integration pattern"}),"\n",(0,a.jsx)("img",{src:"/docs/openfeature/concepts.png",style:{borderRadius:"1.4em"}}),"\n",(0,a.jsx)(n.h2,{id:"create-a-feature-flag-configuration",children:"Create a feature flag configuration"}),"\n",(0,a.jsxs)(n.p,{children:["Create a new ",(0,a.jsx)(n.code,{children:"YAML"})," file containing your first flag configuration."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",metastring:'title="flag-config.goff.yaml"',children:"# only admins will eval to true\nflag-only-for-admin:\n  variations:\n    is-admin: true\n    not-admin: false\n  defaultRule:\n    variation: not-admin\n  targeting:\n    - name: check admin\n      query: admin eq true\n      variation: is-admin\n"})}),"\n",(0,a.jsxs)(n.p,{children:["This flag split users in 2 groups. Those who were configured with ",(0,a.jsx)(n.code,{children:"admin"})," attribute set to ",(0,a.jsx)(n.code,{children:"true"})," will resolve to the variation ",(0,a.jsx)(n.code,{children:"is-admin"}),". Otherwise, they will resolve to variation ",(0,a.jsx)(n.code,{children:"not-admin"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"create-a-relay-proxy-configuration-file",children:"Create a relay proxy configuration file"}),"\n",(0,a.jsxs)(n.p,{children:["Create a new ",(0,a.jsx)(n.code,{children:"YAML"})," file containing the configuration of your relay proxy."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",metastring:'title="goff-proxy.yaml"',children:"listen: 1031\npollingInterval: 1000\nstartWithRetrieverError: false\nretriever:\n  kind: file\n  path: /goff/flag-config.goff.yaml\nexporter:\n  kind: log\n"})}),"\n",(0,a.jsx)(n.h2,{id:"install-the-relay-proxy",children:"Install the relay proxy"}),"\n",(0,a.jsxs)(n.p,{children:["We will run the ",(0,a.jsx)(n.strong,{children:"relay proxy"})," locally to make the API available.\nThe default port will be ",(0,a.jsx)(n.code,{children:"1031"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"# Launch the container\ndocker run \\\n  -p 1031:1031 \\\n  -v $(pwd)/flag-config.goff.yaml:/goff/flag-config.goff.yaml \\\n  -v $(pwd)/goff-proxy.yaml:/goff/goff-proxy.yaml \\\n  gofeatureflag/go-feature-flag:latest\n\n"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsxs)(n.em,{children:["If you don't want to use docker to install the ",(0,a.jsx)(n.strong,{children:"relay proxy"})," you can follow the ",(0,a.jsx)(n.a,{href:"/docs/v1.38.0/relay_proxy/install_relay_proxy",children:"documentation"})]}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"use-open-feature-sdk",children:"Use Open Feature SDK"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.em,{children:"In this example we are using the javascript SDK, but it is still relevant for all the languages"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"install-dependencies",children:"Install dependencies"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"npm i @openfeature/server-sdk @openfeature/go-feature-flag-provider\n"})}),"\n",(0,a.jsx)(n.h3,{id:"init-your-open-feature-client",children:"Init your Open Feature client"}),"\n",(0,a.jsx)(n.p,{children:"In your app initialization you have to create a client using the Open Feature SDK and initialize it."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:'const {OpenFeature} = require("@openfeature/server-sdk");\nconst {GoFeatureFlagProvider} = require("@openfeature/go-feature-flag-provider");\n\n\n// init Open Feature SDK with GO Feature Flag provider\nconst goFeatureFlagProvider = new GoFeatureFlagProvider({\n  endpoint: \'http://localhost:1031/\' // DNS of your instance of relay proxy\n});\n// Sets the default feature flag provider\nOpenFeature.setProvider(goFeatureFlagProvider);\n// Gets the client that is bound to default provider\nconst featureFlagClient = OpenFeature.getClient();\n'})}),"\n",(0,a.jsx)(n.h3,{id:"evaluate-your-flag",children:"Evaluate your flag"}),"\n",(0,a.jsx)(n.p,{children:"Now you can evaluate your flags anywhere in your code using this client."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"// Context of your flag evaluation.\n// With GO Feature Flag you MUST have a targetingKey that is a unique identifier of the user.\nconst userContext = {\n  targetingKey: '1d1b9238-2591-4a47-94cf-d2bc080892f1', // user unique identifier (mandatory)\n  firstname: 'john',\n  lastname: 'doe',\n  email: 'john.doe@gofeatureflag.org',\n  admin: true, // this field is used in the targeting rule of the flag \"flag-only-for-admin\"\n  // ...\n};\n\n(async () => {\n  const adminFlag = await featureFlagClient.getBooleanValue('flag-only-for-admin', false, userContext);\n  if (adminFlag) {\n     // flag \"flag-only-for-admin\" is true for the user\n    console.log(\"new feature for admin!\");\n  } else {\n    // flag \"flag-only-for-admin\" is false for the user\n    console.log(\"not an admin, no feature\");\n  }\n})();\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Try changing the ",(0,a.jsx)(n.code,{children:"admin"})," attribute in the ",(0,a.jsx)(n.code,{children:"userContext"})," from ",(0,a.jsx)(n.code,{children:"true"})," to ",(0,a.jsx)(n.code,{children:"false"})," to see different executions flows running."]})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var r=t(96540);const a={},i=r.createContext(a);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);