(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"./docz/components/Alert.mdx":function(e,n,t){"use strict";t.r(n);var o=t("./node_modules/react/index.js"),r=t.n(o),a=t("./node_modules/@mdx-js/tag/dist/index.js"),i=t("./node_modules/docz/dist/index.m.js"),s=t("./node_modules/react-emotion/dist/index.esm.js"),d={info:"#5352ED",positive:"#2ED573",negative:"#FF4757",warning:"#FFA502"},l=Object(s.b)("div",{target:"erv7vp70"})("padding:15px 20px;background:white;border-radius:3px;color:white;background:",function(e){var n=e.kind;return d[void 0===n?"info":n]},";"),m=function(e){return r.a.createElement(l,e)};function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}m.defaultProps={kind:"info"},m.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{kind:{defaultValue:{value:"'info'",computed:!1},type:{name:"enum",value:[{value:"'info'",computed:!1},{value:"'positive'",computed:!1},{value:"'negative'",computed:!1},{value:"'warning'",computed:!1}]},required:!1,description:""}}};n.default=function(e){var n=e.components,t=c(e,["components"]);return r.a.createElement(a.MDXTag,{name:"wrapper",components:n},r.a.createElement(a.MDXTag,{name:"h1",components:n,props:{id:"alert"}},"Alert"),r.a.createElement(a.MDXTag,{name:"h2",components:n,props:{id:"properties"}},"Properties"),r.a.createElement(i.f,{of:m}),r.a.createElement(a.MDXTag,{name:"h2",components:n,props:{id:"basic-usage"}},"Basic usage"),r.a.createElement(i.e,{__position:1,__codesandbox:"undefined",__code:"<Alert>Some message</Alert>",__scope:{props:t,Alert:m}},r.a.createElement(m,null,"Some message")),r.a.createElement(a.MDXTag,{name:"h2",components:n,props:{id:"using-different-kinds"}},"Using different kinds"),r.a.createElement(i.e,{__position:2,__codesandbox:"undefined",__code:'<Alert kind="info">Some message</Alert>\n<Alert kind="positive">Some message</Alert>\n<Alert kind="negative">Some message</Alert>\n<Alert kind="warning">Some message</Alert>',__scope:{props:t,Alert:m}},r.a.createElement(m,{kind:"info"},"Some message"),r.a.createElement(m,{kind:"positive"},"Some message"),r.a.createElement(m,{kind:"negative"},"Some message"),r.a.createElement(m,{kind:"warning"},"Some message")),r.a.createElement(a.MDXTag,{name:"h2",components:n,props:{id:"use-with-children-as-a-function"}},"Use with children as a function"),r.a.createElement(i.e,{__position:3,__codesandbox:"undefined",__code:"{() => {\n  const message = 'Hello world'\n  return <Alert>{message}</Alert>\n}}",__scope:{props:t,Alert:m}},function(){return r.a.createElement(m,null,"Hello world")}))}}}]);