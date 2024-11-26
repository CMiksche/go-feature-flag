"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[91926],{52510:(e,i,o)=>{o.r(i),o.d(i,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>n,toc:()=>a});const n=JSON.parse('{"id":"go_module/notifier/discord","title":"Discord Notifier","description":"The discord notifier allows to get notified on your favorite discord channel when an instance of go-feature-flag is","source":"@site/versioned_docs/version-v1.38.0/go_module/notifier/discord.md","sourceDirName":"go_module/notifier","slug":"/go_module/notifier/discord","permalink":"/docs/v1.38.0/go_module/notifier/discord","draft":false,"unlisted":false,"editUrl":"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.38.0/go_module/notifier/discord.md","tags":[],"version":"v1.38.0","sidebarPosition":10,"frontMatter":{"sidebar_position":10},"sidebar":"tutorialSidebar","previous":{"title":"Slack Notifier","permalink":"/docs/v1.38.0/go_module/notifier/slack"},"next":{"title":"Microsoft Teams Notifier","permalink":"/docs/v1.38.0/go_module/notifier/microsoft-teams"}}');var t=o(74848),s=o(28453);const r={sidebar_position:10},d="Discord Notifier",c={},a=[{value:"Configure Discord Notifications",id:"configure-discord-notifications",level:2},{value:"<strong>Configuration fields</strong>",id:"configuration-fields",level:2}];function l(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"discord-notifier",children:"Discord Notifier"})}),"\n",(0,t.jsxs)(i.p,{children:["The discord notifier allows to get notified on your favorite discord channel when an instance of ",(0,t.jsx)(i.code,{children:"go-feature-flag"})," is\ndetecting changes in the configuration of your flags."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Discord Notification",src:o(16743).A+"",width:"504",height:"389"})}),"\n",(0,t.jsx)(i.h2,{id:"configure-discord-notifications",children:"Configure Discord Notifications"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"Connect to your discord account and go on the channel where you want to send the notifications."}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"Go on the settings menu of your channel."}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Discord Config",src:o(66060).A+"",width:"270",height:"81"})}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:['Under your channel\u2019s settings, go to the "Integrations" section and create a new webhook. To create it, please follow\nthe ',(0,t.jsx)(i.a,{href:"https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks",children:"official documentation"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"Copy the webhook URL"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Discord WebHook",src:o(61333).A+"",width:"708",height:"188"})}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"Now you can configure your notifier"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-go",children:'err := ffclient.Init(ffclient.Config\n{\n    // ...\n    Notifiers: []notifier.Notifier{\n        &discordnotifier.Notifier{\n            DiscordWebhookURL: "https://discord.com/api/webhooks/yyyy/xxxxxxx",\n        },\n    },\n})\n'})}),"\n",(0,t.jsx)(i.h2,{id:"configuration-fields",children:(0,t.jsx)(i.strong,{children:"Configuration fields"})}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:(0,t.jsx)(i.strong,{children:"Field"})}),(0,t.jsx)(i.th,{children:(0,t.jsx)(i.strong,{children:"Description"})})]})}),(0,t.jsx)(i.tbody,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"DiscordWebhookURL"})}),(0,t.jsx)(i.td,{children:"The complete URL of your discord webhook."})]})})]})]})}function h(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},16743:(e,i,o)=>{o.d(i,{A:()=>n});const n=o.p+"assets/images/discord1-ea5e47214cd98bff95d8755e8db4da00.png"},66060:(e,i,o)=>{o.d(i,{A:()=>n});const n=o.p+"assets/images/discord2-1077decdaebff0ed3204ddd3ba552f50.png"},61333:(e,i,o)=>{o.d(i,{A:()=>n});const n=o.p+"assets/images/discord3-dac3ede11eb3537a2a811f877ee7fc6b.png"},28453:(e,i,o)=>{o.d(i,{R:()=>r,x:()=>d});var n=o(96540);const t={},s=n.createContext(t);function r(e){const i=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),n.createElement(s.Provider,{value:i},e.children)}}}]);