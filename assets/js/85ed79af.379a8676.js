"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[73848],{61941:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>p,contentTitle:()=>c,default:()=>v,frontMatter:()=>d,metadata:()=>t,toc:()=>f});const t=JSON.parse('{"id":"openfeature_sdk/server_providers/openfeature_java","title":"Java","description":"How to use the OpenFeature JAVA SDK","source":"@site/versioned_docs/version-v1.39.1/openfeature_sdk/server_providers/openfeature_java.mdx","sourceDirName":"openfeature_sdk/server_providers","slug":"/openfeature_sdk/server_providers/openfeature_java","permalink":"/docs/openfeature_sdk/server_providers/openfeature_java","draft":false,"unlisted":false,"editUrl":"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.39.1/openfeature_sdk/server_providers/openfeature_java.mdx","tags":[],"version":"v1.39.1","sidebarPosition":40,"frontMatter":{"sidebar_position":40,"title":"Java","description":"How to use the OpenFeature JAVA SDK"},"sidebar":"tutorialSidebar","previous":{"title":"GO","permalink":"/docs/openfeature_sdk/server_providers/openfeature_go"},"next":{"title":"Node.js","permalink":"/docs/openfeature_sdk/server_providers/openfeature_javascript"}}');var r=n(74848),o=n(28453),i=n(11470),l=n(19365),s=n(52739),u=n(21432);const d={sidebar_position:40,title:"Java",description:"How to use the OpenFeature JAVA SDK"},c="JAVA SDK usage",p={},f=[{value:"Install dependencies",id:"install-dependencies",level:2},{value:"Initialize your Open Feature client",id:"initialize-your-open-feature-client",level:2},{value:"Evaluate your flag",id:"evaluate-your-flag",level:2},{value:"Breaking changes",id:"breaking-changes",level:2},{value:"0.4.0 - Cache Implementation Change: Guava to Caffeine",id:"040---cache-implementation-change-guava-to-caffeine",level:3},{value:"How to migrate",id:"how-to-migrate",level:4},{value:"Contribute to the provider",id:"contribute-to-the-provider",level:2}];function h(e){const a={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.header,{children:(0,r.jsx)(a.h1,{id:"java-sdk-usage",children:"JAVA SDK usage"})}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.a,{href:"https://search.maven.org/artifact/dev.openfeature.contrib.providers/go-feature-flag",children:(0,r.jsx)(a.img,{src:"https://img.shields.io/maven-central/v/dev.openfeature.contrib.providers/go-feature-flag?color=blue&style=flat-square",alt:"Maven Central Version"})})}),"\n",(0,r.jsx)(a.h2,{id:"install-dependencies",children:"Install dependencies"}),"\n",(0,r.jsxs)(a.p,{children:["The first thing we will do is install the ",(0,r.jsx)(a.strong,{children:"Open Feature SDK"})," and the ",(0,r.jsx)(a.strong,{children:"GO Feature Flag provider"}),"."]}),"\n",(0,r.jsxs)(i.A,{groupId:"code",children:[(0,r.jsx)(l.A,{value:"maven",label:"maven",children:(0,r.jsx)(u.A,{language:"xml",showLineNumbers:!0,children:`<dependency>\n    <groupId>dev.openfeature</groupId>\n    <artifactId>sdk</artifactId>\n    <artifactId>${s.QT.xh}</artifactId>\n</dependency>\n<dependency>\n    <groupId>dev.openfeature.contrib.providers</groupId>\n    <artifactId>go-feature-flag</artifactId>\n    <version>${s.QT.EL}</version>\n</dependency>`})}),(0,r.jsx)(l.A,{value:"gradle",label:"gradle",children:(0,r.jsx)(u.A,{language:"toml",showLineNumbers:!0,children:`implementation group: 'dev.openfeature', name: 'javasdk', version: '${s.QT.xh}'\nimplementation group: 'dev.openfeature.contrib.providers', name: 'go-feature-flag', version: '${s.QT.EL}'`})})]}),"\n",(0,r.jsx)(a.h2,{id:"initialize-your-open-feature-client",children:"Initialize your Open Feature client"}),"\n",(0,r.jsx)(a.p,{children:"To evaluate the flag you need to have an Open Feature configured in your app.\nThis code block shows you how you can create a client that you can use in your application."}),"\n",(0,r.jsxs)(i.A,{groupId:"code",children:[(0,r.jsx)(l.A,{value:"java",label:"java",children:(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-java",children:'import dev.openfeature.contrib.providers.gofeatureflag.GoFeatureFlagProvider;\nimport dev.openfeature.contrib.providers.gofeatureflag.GoFeatureFlagProviderOptions;\nimport dev.openfeature.sdk.EvaluationContext;\nimport dev.openfeature.sdk.MutableContext;\nimport dev.openfeature.sdk.OpenFeatureAPI;\n\n// ...\n\nGoFeatureFlagProviderOptions options =\nGoFeatureFlagProviderOptions.builder().endpoint("http://localhost:1031/").build();\nGoFeatureFlagProvider provider = new GoFeatureFlagProvider(options);\n\nOpenFeatureAPI.getInstance().setProvider(provider);\nOpenFeatureAPI api = OpenFeatureAPI.getInstance();\nClient featureFlagClient = api.getClient();\n'})})}),(0,r.jsx)(l.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-kotlin",children:'import dev.openfeature.contrib.providers.gofeatureflag.GoFeatureFlagProvider\nimport dev.openfeature.contrib.providers.gofeatureflag.GoFeatureFlagProviderOptions\nimport dev.openfeature.sdk.EvaluationContext\nimport dev.openfeature.sdk.MutableContext\nimport dev.openfeature.sdk.OpenFeatureAPI\n\n// ...\n\nval options = GoFeatureFlagProviderOptions.builder().endpoint("http://localhost:1031/").build()\nval provider = GoFeatureFlagProvider(options)\n\nOpenFeatureAPI.getInstance().provider = provider\n// wait for the provider to be ready\nval api = OpenFeatureAPI.getInstance()\nval featureFlagClient = api.client\n'})})})]}),"\n",(0,r.jsx)(a.h2,{id:"evaluate-your-flag",children:"Evaluate your flag"}),"\n",(0,r.jsxs)(a.p,{children:["This code block explain how you can create an ",(0,r.jsx)(a.code,{children:"EvaluationContext"})," and use it to evaluate your flag."]}),"\n",(0,r.jsxs)(a.admonition,{type:"note",children:[(0,r.jsxs)(a.p,{children:["In this example we are evaluating a ",(0,r.jsx)(a.code,{children:"boolean"})," flag, but other types are available."]}),(0,r.jsx)(a.p,{children:(0,r.jsxs)(a.strong,{children:["Refer to the ",(0,r.jsx)(a.a,{href:"https://docs.openfeature.dev/docs/reference/concepts/evaluation-api#basic-evaluation",children:"Open Feature documentation"})," to know more about it."]})})]}),"\n",(0,r.jsxs)(i.A,{groupId:"code",children:[(0,r.jsx)(l.A,{value:"java",label:"java",children:(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-java",children:'// Context of your flag evaluation.\n// With GO Feature Flag you MUST have a targetingKey that is a unique identifier of the user.\nEvaluationContext userContext = new MutableContext("1d1b9238-2591-4a47-94cf-d2bc080892f1")\n  .add("firstname", "john")\n  .add("lastname", "doe")\n  .add("email","john.doe@gofeatureflag.org")\n  .add("admin", true)\n  .add("anonymous", false);\n\nBoolean adminFlag = featureFlagClient.getBooleanValue("flag-only-for-admin", false, userContext);\nif (adminFlag) {\n  // flag "flag-only-for-admin" is true for the user\n} else {\n  // flag "flag-only-for-admin" is false for the user\n}\n'})})}),(0,r.jsx)(l.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-kotlin",children:'// Context of your flag evaluation.\n// With GO Feature Flag you MUST have a targetingKey that is a unique identifier of the user.\nval userContext: EvaluationContext = MutableContext("1d1b9238-2591-4a47-94cf-d2bc080892f1")\n  .add("firstname", "john")\n  .add("lastname", "doe")\n  .add("email", "john.doe@gofeatureflag.org")\n  .add("admin", true)\n  .add("anonymous", false)\n\nval adminFlag = featureFlagClient.getBooleanValue("bool_targeting_match", false, userContext)\nif (adminFlag) {\n  // flag "flag-only-for-admin" is true for the user\n} else {\n  // flag "flag-only-for-admin" is false for the user\n}\n'})})})]}),"\n",(0,r.jsx)(a.h2,{id:"breaking-changes",children:"Breaking changes"}),"\n",(0,r.jsx)(a.h3,{id:"040---cache-implementation-change-guava-to-caffeine",children:"0.4.0 - Cache Implementation Change: Guava to Caffeine"}),"\n",(0,r.jsx)(a.p,{children:"In this release, we have updated the cache implementation from Guava to Caffeine. This change was made because Caffeine is now the recommended caching solution by the maintainers of Guava due to its performance improvements and enhanced features."}),"\n",(0,r.jsxs)(a.p,{children:["Because of this, the cache configuration on ",(0,r.jsx)(a.code,{children:"GoFeatureFlagProviderOptions"})," that used Guava's ",(0,r.jsx)(a.code,{children:"CacheBuilder"})," is now handled by ",(0,r.jsx)(a.code,{children:"Caffeine"}),"."]}),"\n",(0,r.jsx)(a.h4,{id:"how-to-migrate",children:"How to migrate"}),"\n",(0,r.jsx)(a.p,{children:"Configuration cache with Guava used to be like this:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-java",children:'import com.google.common.cache.CacheBuilder;\n// ...\nCacheBuilder guavaCacheBuilder = CacheBuilder.newBuilder()\n  .initialCapacity(100)\n  .maximumSize(2000);\n\nFeatureProvider provider = new GoFeatureFlagProvider(\n  GoFeatureFlagProviderOptions\n  .builder()\n  .endpoint("https://my-gofeatureflag-instance.org")\n  .cacheBuilder(guavaCacheBuilder)\n  .build());\n\nOpenFeatureAPI.getInstance().setProviderAndWait(provider);\n\n// ...\n'})}),"\n",(0,r.jsx)(a.p,{children:"Now with Caffeine it should be like this:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-java",children:'import com.github.benmanes.caffeine.cache.Caffeine;\n// ...\nCaffeine caffeineCacheConfig = Caffeine.newBuilder()\n  .initialCapacity(100)\n  .maximumSize(2000);\n\nFeatureProvider provider = new GoFeatureFlagProvider(\n  GoFeatureFlagProviderOptions\n  .builder()\n  .endpoint("https://my-gofeatureflag-instance.org")\n  .cacheConfig(caffeineCacheConfig)\n  .build());\n\nOpenFeatureAPI.getInstance().setProviderAndWait(provider);\n\n// ...\n'})}),"\n",(0,r.jsxs)(a.p,{children:["For a complete list of customizations  options available in Caffeine, please refer to the ",(0,r.jsx)(a.a,{href:"https://github.com/ben-manes/caffeine/wiki",children:"Caffeine documentation"})," for more details."]}),"\n",(0,r.jsx)(a.h2,{id:"contribute-to-the-provider",children:"Contribute to the provider"}),"\n",(0,r.jsxs)(a.p,{children:["You can find the source of the provider in the ",(0,r.jsx)(a.a,{href:"https://github.com/open-feature/java-sdk-contrib/tree/main/providers/go-feature-flag",children:(0,r.jsx)(a.code,{children:"open-feature/java-sdk-contrib"})})," repository."]})]})}function v(e={}){const{wrapper:a}={...(0,o.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,a,n)=>{n.d(a,{A:()=>i});n(96540);var t=n(18215);const r={tabItem:"tabItem_Ymn6"};var o=n(74848);function i(e){let{children:a,hidden:n,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,t.A)(r.tabItem,i),hidden:n,children:a})}},11470:(e,a,n)=>{n.d(a,{A:()=>F});var t=n(96540),r=n(18215),o=n(23104),i=n(56347),l=n(205),s=n(57485),u=n(31682),d=n(70679);function c(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:a,children:n}=e;return(0,t.useMemo)((()=>{const e=a??function(e){return c(e).map((e=>{let{props:{value:a,label:n,attributes:t,default:r}}=e;return{value:a,label:n,attributes:t,default:r}}))}(n);return function(e){const a=(0,u.XI)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,n])}function f(e){let{value:a,tabValues:n}=e;return n.some((e=>e.value===a))}function h(e){let{queryString:a=!1,groupId:n}=e;const r=(0,i.W6)(),o=function(e){let{queryString:a=!1,groupId:n}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:a,groupId:n});return[(0,s.aZ)(o),(0,t.useCallback)((e=>{if(!o)return;const a=new URLSearchParams(r.location.search);a.set(o,e),r.replace({...r.location,search:a.toString()})}),[o,r])]}function v(e){const{defaultValue:a,queryString:n=!1,groupId:r}=e,o=p(e),[i,s]=(0,t.useState)((()=>function(e){let{defaultValue:a,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!f({value:a,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:a,tabValues:o}))),[u,c]=h({queryString:n,groupId:r}),[v,g]=function(e){let{groupId:a}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(a),[r,o]=(0,d.Dv)(n);return[r,(0,t.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),m=(()=>{const e=u??v;return f({value:e,tabValues:o})?e:null})();(0,l.A)((()=>{m&&s(m)}),[m]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!f({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),g(e)}),[c,g,o]),tabValues:o}}var g=n(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(74848);function x(e){let{className:a,block:n,selectedValue:t,selectValue:i,tabValues:l}=e;const s=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.a_)(),d=e=>{const a=e.currentTarget,n=s.indexOf(a),r=l[n].value;r!==t&&(u(a),i(r))},c=e=>{let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=s.indexOf(e.currentTarget)+1;a=s[n]??s[0];break}case"ArrowLeft":{const n=s.indexOf(e.currentTarget)-1;a=s[n]??s[s.length-1];break}}a?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},a),children:l.map((e=>{let{value:a,label:n,attributes:o}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:t===a?0:-1,"aria-selected":t===a,ref:e=>s.push(e),onKeyDown:c,onClick:d,...o,className:(0,r.A)("tabs__item",m.tabItem,o?.className,{"tabs__item--active":t===a}),children:n??a},a)}))})}function j(e){let{lazy:a,children:n,selectedValue:o}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(a){const e=i.find((e=>e.props.value===o));return e?(0,t.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map(((e,a)=>(0,t.cloneElement)(e,{key:a,hidden:e.props.value!==o})))})}function y(e){const a=v(e);return(0,b.jsxs)("div",{className:(0,r.A)("tabs-container",m.tabList),children:[(0,b.jsx)(x,{...a,...e}),(0,b.jsx)(j,{...a,...e})]})}function F(e){const a=(0,g.A)();return(0,b.jsx)(y,{...e,children:c(e.children)},String(a))}},52739:e=>{e.exports=JSON.parse('{"QT":{"xh":"1.12.2","jO":"0.1.0","EL":"0.3.0","yA":"0.3.0"}}')}}]);