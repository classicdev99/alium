(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7307],{20640:function(e,t,n){"use strict";var o=n(11742),r={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,i,a,s,d,l,c=!1;t||(t={}),n=t.debug||!1;try{if(a=o(),s=document.createRange(),d=document.getSelection(),(l=document.createElement("span")).textContent=e,l.style.all="unset",l.style.position="fixed",l.style.top=0,l.style.clip="rect(0, 0, 0, 0)",l.style.whiteSpace="pre",l.style.webkitUserSelect="text",l.style.MozUserSelect="text",l.style.msUserSelect="text",l.style.userSelect="text",l.addEventListener("copy",(function(o){if(o.stopPropagation(),t.format)if(o.preventDefault(),"undefined"===typeof o.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var i=r[t.format]||r.default;window.clipboardData.setData(i,e)}else o.clipboardData.clearData(),o.clipboardData.setData(t.format,e);t.onCopy&&(o.preventDefault(),t.onCopy(o.clipboardData))})),document.body.appendChild(l),s.selectNodeContents(l),d.addRange(s),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");c=!0}catch(u){n&&console.error("unable to copy using execCommand: ",u),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),c=!0}catch(u){n&&console.error("unable to copy using clipboardData: ",u),n&&console.error("falling back to prompt"),i=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(i,e)}}finally{d&&("function"==typeof d.removeRange?d.removeRange(s):d.removeAllRanges()),l&&document.body.removeChild(l),a()}return c}},7929:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return J},default:function(){return F}});var o=n(41810),r=n(11163),i=n(75347),a=n(55141),s=n(93350),d=n(79308),l=n(84378),c=n(57141),u=n(14820),p=n(27123),m=n(75472),f=n.n(m),v=n(67294),g=n(68472),h=n(85893);function x(e){var t=e.pair,n=(0,o.$G)().t,r=(0,i.JM)({variables:{pairAddress:t.id}}).data,a=(0,v.useMemo)((function(){var e=[],t=[];return f()(null===r||void 0===r?void 0:r.pairDayDatas,"date").forEach((function(n){e.push({date:n.date,value:Number(n.dailyVolumeUSD)}),t.push({date:n.date,value:Number(n.reserveUSD)})})),{volume:e,liquidity:t}}),[null===r||void 0===r?void 0:r.pairDayDatas]);return(0,h.jsx)(x.Root,{charts:[{title:n("Volume"),data:a.volume,type:"bar"},{title:n("Liquidity"),data:a.liquidity,type:"line"}]})}x.Root=(0,s.default)(g.Z).withConfig({displayName:"PairCharts__Root",componentId:"sc-tg7u46-0"})(["min-height:386px;"]);var y=n(62639),b=n(3033),w=n(76780),j=n(44141),k=n(70487),C=n(99638);function _(e){var t=e.pair,n=(0,o.$G)().t,r=(0,k.Z)(),a=(0,j.Z)(r.h24),s=(0,j.Z)(r.h48),d=(0,i.Y3)({variables:{id:t.id,block24h:a,block48h:s},skip:!a||!s,fetchPolicy:"no-cache"}).data;if(!d)return(0,h.jsx)(y.Od,{minHeight:128});var l=d.now,c=d.h24,u=d.h48,p=Number(null===l||void 0===l?void 0:l.reserveUSD)||0,m=(0,C.Yu)(Number(null===c||void 0===c?void 0:c.reserveUSD),p),f=(0,C.Kt)(Number(null===c||void 0===c?void 0:c.volumeUSD),Number(null===l||void 0===l?void 0:l.volumeUSD)),v=(0,C.Kt)(Number(null===u||void 0===u?void 0:u.volumeUSD),Number(null===c||void 0===c?void 0:c.volumeUSD)),g=(0,C.Yu)(v,f),x=(0,C.Kt)(Number(null===c||void 0===c?void 0:c.totalTransactions),Number(null===l||void 0===l?void 0:l.totalTransactions)),N=(0,C.Kt)(Number(null===u||void 0===u?void 0:u.totalTransactions),Number(null===c||void 0===c?void 0:c.totalTransactions)),R=(0,C.Yu)(N,x);return(0,h.jsxs)(_.Root,{children:[(0,h.jsx)(w.Z,{title:n("Total Liquidity"),value:"$"+(0,C.uf)(p),percent:m}),(0,h.jsx)(w.Z,{title:n("Volume (24 hrs)"),value:"$"+(0,C.uf)(f),percent:g}),(0,h.jsx)(w.Z,{title:n("Transaction (24 hrs)"),value:(0,C.uf)(x),percent:R}),(0,h.jsx)(w.Z,{title:n("Pooled Tokens"),value:(0,h.jsxs)(_.Tokens,{children:[(0,h.jsxs)("div",{children:[(0,h.jsx)(b._,{address:t.token0.id,symbol:t.token0.symbol}),(0,C.uf)((null===l||void 0===l?void 0:l.reserve0)||0)+" "+(0,C.Rr)(t.token0.symbol)]}),(0,h.jsxs)("div",{children:[(0,h.jsx)(b._,{address:t.token1.id,symbol:t.token1.symbol}),(0,C.uf)((null===l||void 0===l?void 0:l.reserve1)||0)+" "+(0,C.Rr)(t.token1.symbol)]})]})})]})}_.Tokens=s.default.div.withConfig({displayName:"PairCounters__Tokens",componentId:"sc-alw4x-0"})(["display:grid;gap:8px;",";color:#0b1359;& > div{display:grid;grid-auto-flow:column;align-items:center;justify-content:start;gap:8px;}@media ","{grid-auto-flow:column;justify-content:start;}"],d.cp.A6.medium,d.mq.down(d.AV.sm)),_.Root=s.default.div.withConfig({displayName:"PairCounters__Root",componentId:"sc-alw4x-1"})(["display:grid;gap:16px;@media ","{gap:8px;}@media ","{grid-auto-flow:column;gap:16px;}@media ","{grid-auto-flow:row;gap:8px;}"],d.mq.down(d.AV.lg),d.mq.down(d.AV.md),d.mq.down(d.AV.sm));var N=n(47646),R=n(93578),P=n(35141),Z=n(63280),O=n(9462);function D(e){var t=e.pair,n=(0,o.$G)().t,r=(0,N.x)().chainId,i=(0,R.lc)(r,!0).explorerName;return(0,h.jsx)(D.Root,{title:n("Pair Information"),items:[{title:n("Pair name"),value:(0,h.jsx)(D.Name,{children:(0,p.X)(t.token0.symbol,t.token1.symbol)})},{title:n("Pair address"),value:(0,h.jsx)(P.Z,{address:t.id})},{title:n("{{token}} address",{token:(0,C.Rr)(t.token0.symbol)}),value:(0,h.jsx)(P.Z,{address:t.token0.id})},{title:n("{{token}} address",{token:(0,C.Rr)(t.token1.symbol)}),value:(0,h.jsx)(P.Z,{address:t.token1.id})}],actions:(0,h.jsx)(d.zx,{as:"a",href:(0,R.E8)(r,t.id,"address"),target:"_blank",rel:"noreferrer noopener",variant:"outlined",size:"small",children:n("View on {{explorerName}}",{explorerName:i})})})}D.Name=s.default.div.withConfig({displayName:"PairInformation__Name",componentId:"sc-96hzcw-0"})([""," color:#6C5DD3;"],d.cp.A6.medium),D.Root=(0,s.default)(Z.Z).withConfig({displayName:"PairInformation__Root",componentId:"sc-96hzcw-1"})(["","{grid-template-columns:1fr 1.5fr 1.5fr 3fr;}"],O.ZP.Row);var A=n(92809),I=n(10219),T=n(94829),E=n(91935),S=n(82613),z=n(55792),M=n(87692),V=n(77370),q=n(45089),U=n(46230),L=n(21385),B=n(78984),H=n(41954),$=function(e,t,n,o){return"1 ".concat(e," = ").concat((0,C.uf)(t,{maximumFractionDigits:8})," ").concat(n," ($").concat((0,C.uf)(o),")")};function G(e){var t=e.pair,n=(0,C.Rr)(t.token0.symbol),o=(0,C.Rr)(t.token1.symbol),r=Number(t.token0Price),i=Number(t.token1Price),a=Number(t.token0.derivedUSD)||0,s=Number(t.token1.derivedUSD)||0;return(0,h.jsx)(G.Root,{text:(0,h.jsxs)(G.Content,{children:[(0,h.jsxs)("div",{children:[(0,h.jsx)(b._,{address:t.token0.id,symbol:t.token0.symbol,size:"18px"}),(0,h.jsx)("span",{children:$(n,i,o,a)})]}),(0,h.jsxs)("div",{children:[(0,h.jsx)(b._,{address:t.token1.id,symbol:t.token1.symbol,size:"18px"}),(0,h.jsx)("span",{children:(0,h.jsx)("span",{children:$(o,r,n,s)})})]})]})})}G.Root=(0,s.default)(H.Z).withConfig({displayName:"PriceTooltip__Root",componentId:"sc-48nm14-0"})(["&__tooltip{width:auto;}"]),G.Content=s.default.div.withConfig({displayName:"PriceTooltip__Content",componentId:"sc-48nm14-1"})(["display:grid;gap:6px;","{--logo-size:18px;}& > div{display:grid;grid-auto-flow:column;gap:6px;justify-content:start;align-items:center;"," color:#0B1359;}"],b._.Root,d.cp.Vz.medium);var X=["pair"];function W(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function Y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?W(Object(n),!0).forEach((function(t){(0,A.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):W(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function K(e){var t=e.pair,n=(0,I.Z)(e,X),r=(0,o.$G)().t,i=(0,T.Z)(d.mq.down(d.AV.sm)),a=B.x.useContainer().pairs,s=a.isBookmarked(t.id);return(0,h.jsxs)(M.Z,Y(Y({},n),{},{children:[(0,h.jsxs)(q.Z,{children:[(0,h.jsxs)(K.Main,{children:[(0,h.jsx)(z.Z,{address0:t.token0.id,address1:t.token1.id,symbol0:t.token0.symbol,symbol1:t.token1.symbol}),(0,h.jsx)(U.Z,{children:r("{{name}} Pair",{name:(0,p.X)(t.token0.symbol,t.token1.symbol)})}),(0,h.jsx)(G,{pair:t})]}),!i&&(0,h.jsx)(V.Z,{})]}),(0,h.jsxs)(q.Z,{children:[(0,h.jsxs)(K.Actions,{children:[(0,h.jsx)(L.Z,{token0:t.token0.id,token1:t.token1.id}),(0,h.jsx)(E.Z,{token0:t.token0.id,token1:t.token1.id}),(0,h.jsx)(S.Z,{isActive:s,onToggle:function(){return s?a.remove(t.id):a.add(t.id)}})]}),i&&(0,h.jsx)(V.Z,{})]})]}))}function F(){var e=(0,o.$G)().t,t=(0,r.useRouter)().query,n=t.token0,s=t.token1,d=(0,i.tP)({variables:{token0:n,token1:s}}).data;if(!d)return(0,h.jsx)(a.Z,{load:!0});var u=d.pairs[0];return u?(0,h.jsxs)(F.Root,{children:[(0,h.jsx)(l.Z,{items:[{title:e("Pairs"),href:"/info/pairs"},{title:e("{{name}} Pair",{name:(0,p.X)(u.token0.symbol,u.token1.symbol)}),href:"/info/pairs/".concat(u.token0.id,"/").concat(u.token1.id)}]}),(0,h.jsx)(K,{pair:u}),(0,h.jsxs)(F.Content,{children:[(0,h.jsxs)(F.Main,{children:[(0,h.jsx)(_,{pair:u}),(0,h.jsx)(x,{pair:u})]}),(0,h.jsx)(c.Z,{pair:u.id}),(0,h.jsx)(D,{pair:u})]})]}):(0,h.jsx)(h.Fragment,{children:"Not found"})}K.Actions=s.default.div.withConfig({displayName:"PairToolbar__Actions",componentId:"sc-1obss2c-0"})(["display:grid;align-items:center;grid-auto-flow:column;gap:8px;"]),K.Main=s.default.div.withConfig({displayName:"PairToolbar__Main",componentId:"sc-1obss2c-1"})(["display:flex;align-items:center;","{--logo-size:48px;}","{margin:0 8px 0 16px;}","{align-self:flex-start;}@media ","{","{--logo-size:32px;}}"],b._.Root,U.Z,G.Root,d.mq.down(d.AV.md),b._.Root),F.Main=s.default.div.withConfig({displayName:"pair__Main",componentId:"sc-1oiin4g-0"})(["display:grid;grid-template-columns:354px 1fr;gap:30px;"]),F.Content=s.default.div.withConfig({displayName:"pair__Content",componentId:"sc-1oiin4g-1"})(["display:grid;gap:40px;"]),F.Root=s.default.div.withConfig({displayName:"pair__Root",componentId:"sc-1oiin4g-2"})(["@media ","{","{grid-template-columns:309px 1fr;gap:24px;}}@media ","{","{grid-template-columns:auto;gap:32px;}","{gap:32px;}}"],d.mq.down(d.AV.lg),F.Main,d.mq.down(d.AV.md),F.Main,F.Content),F.getLayout=u.b;var J=!0},91935:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var o,r,i=n(41810),a=n(41664),s=n(93350),d=n(79308),l=n(67294);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function u(e){return l.createElement("svg",c({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),o||(o=l.createElement("path",{opacity:.5,d:"M12 8.327v7.326M15.666 11.99H8.333",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),r||(r=l.createElement("path",{clipRule:"evenodd",d:"M16.686 2H7.314C4.048 2 2 4.312 2 7.585v8.83C2 19.688 4.038 22 7.314 22h9.372C19.962 22 22 19.688 22 16.415v-8.83C22 4.312 19.962 2 16.686 2z",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})))}var p=n(85893);function m(e){var t=e.token0,n=e.token1,o=(0,i.$G)().t;return(0,p.jsx)(a.default,{passHref:!0,href:["/add/".concat(t),n].filter(Boolean).join("/"),children:(0,p.jsxs)(m.Button,{forwardedAs:"a",variant:"outlined",children:[(0,p.jsx)(u,{}),(0,p.jsx)("span",{children:o("Add Liquidity")})]})})}m.Button=(0,s.default)(d.zx).withConfig({displayName:"AddLiquidity__Button",componentId:"sc-83ykba-0"})(["& > span{text-overflow:ellipsis;overflow:hidden;}@media ","{max-width:183px;}"],d.mq.down(d.AV.sm))},82613:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var o=n(93350),r=n(79308),i=n(56123),a=n(85893);function s(e){var t=e.isActive,n=e.onToggle;return(0,a.jsx)(s.Root,{"data-active":t||void 0,onClick:n,children:(0,a.jsx)(i.Z,{})})}s.Root=(0,o.default)(r.hU).withConfig({displayName:"BookmarkButton__Root",componentId:"sc-1ggipbp-0"})(["padding:4px;color:#8990a5;border:1px solid #cbc8ee;border-radius:6px;&[data-active]{background:#6c5dd3;color:#fff;}"])},84378:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var o,r=n(41664),i=n(67294),a=n(93350);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function d(e){return i.createElement("svg",s({width:18,height:18,viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),o||(o=i.createElement("path",{d:"M7.125 5.25l3.75 3.753-3.75 3.747",stroke:"#8990A5",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})))}var l=n(85893);function c(e){var t=e.items;return(0,l.jsx)(c.Root,{children:t.map((function(e,n){return(0,l.jsxs)(i.Fragment,{children:[(0,l.jsx)(r.default,{passHref:!0,href:e.href,children:(0,l.jsx)(c.Item,{children:e.title})}),n+1!==t.length&&(0,l.jsx)(d,{})]},e.href)}))})}c.Item=a.default.a.withConfig({displayName:"Breadcrumbs__Item",componentId:"sc-jnb34-0"})(["background:rgba(108,93,211,0.1);border-radius:6px;font-weight:500;font-size:12px;line-height:14px;letter-spacing:0.1px;color:#8990a5;padding:4px 8px;"]),c.Root=a.default.div.withConfig({displayName:"Breadcrumbs__Root",componentId:"sc-jnb34-1"})(["display:flex;align-items:center;margin-bottom:24px;& > * + *{margin-left:4px;}"])},35141:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var o=n(86377),r=n(93350),i=n(80318),a=n(20640),s=n.n(a),d=n(67294);var l,c,u=n(79308);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function m(e){return d.createElement("svg",p({width:24,height:25,viewBox:"0 0 24 25",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),l||(l=d.createElement("path",{d:"M20 9.002h-9a2 2 0 00-2 2v9a2 2 0 002 2h9a2 2 0 002-2v-9a2 2 0 00-2-2z",stroke:"#8990A5",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),c||(c=d.createElement("path",{opacity:.5,d:"M5 15.002H4a2 2 0 01-2-2v-9a2 2 0 012-2h9a2 2 0 012 2v1",stroke:"#8990A5",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})))}var f=n(85893);function v(e){var t=e.text,n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:500,t=(0,d.useState)(!1),n=t[0],o=t[1],r=(0,d.useCallback)((function(e){var t=s()(e);o(t)}),[]);return(0,d.useEffect)((function(){if(n){var t=setTimeout((function(){o(!1)}),e);return function(){clearTimeout(t)}}}),[n,o,e]),[n,r]}(),o=(0,i.Z)(n,2),r=(o[0],o[1]);return(0,f.jsx)(u.hU,{onClick:function(){return r(t)},children:(0,f.jsx)(m,{})})}function g(e){var t=e.address;return(0,f.jsxs)(g.Root,{children:[(0,o.Tg)(t,8,6),(0,f.jsx)(v,{text:t})]})}g.Root=r.default.div.withConfig({displayName:"CopyableAddress__Root",componentId:"sc-1n5xzqf-0"})(["display:grid;grid-auto-flow:column;align-items:center;gap:16px;"])},76780:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var o=n(93350),r=n(79308),i=n(67619),a=n(85893);function s(e){var t=e.title,n=e.value,o=e.percent;return(0,a.jsxs)(s.Root,{children:[(0,a.jsx)(s.Title,{children:t}),"string"===typeof n?(0,a.jsx)(s.Value,{children:n}):n,void 0!==o&&(0,a.jsx)(s.Percent,{value:o})]})}s.Value=o.default.div.withConfig({displayName:"CounterCard__Value",componentId:"sc-ee5f97-0"})([""," color:#0B1359;"],r.cp.h6),s.Title=o.default.div.withConfig({displayName:"CounterCard__Title",componentId:"sc-ee5f97-1"})([""," color:#8990A5;white-space:nowrap;"],r.cp.A6.medium),s.Percent=(0,o.default)(i.Z).withConfig({displayName:"CounterCard__Percent",componentId:"sc-ee5f97-2"})(["",""],r.cp.A6.regular),s.Root=(0,o.default)(r.Zb).withConfig({displayName:"CounterCard__Root",componentId:"sc-ee5f97-3"})(["box-shadow:0px 6px 12px rgba(185,189,208,0.4);padding:16px;display:grid;gap:8px;@media ","{align-items:end;justify-content:space-between;","{grid-column:2;grid-row:1 / span 2;}}"],r.mq.down(r.AV.sm),s.Percent)},63280:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var o=n(92809),r=n(10219),i=n(94829),a=n(93350),s=n(79308),d=n(9462),l=n(67061),c=n(85893),u=["items","actions","title"];function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e){var t=e.items,n=e.actions,o=e.title,a=(0,r.Z)(e,u),p=(0,i.Z)(s.mq.down(s.AV.sm));return(0,c.jsxs)(f.Root,m(m({},a),{},{children:[(0,c.jsx)(l.Z,{children:o}),p?(0,c.jsxs)(f.MobileCard,{children:[t.map((function(e,t){return(0,c.jsxs)("div",{children:[(0,c.jsx)("span",{children:e.title}),(0,c.jsx)("span",{children:e.value})]},t)})),n&&(0,c.jsx)(f.Actions,{children:n})]}):(0,c.jsx)(d.ZP,{header:(0,c.jsx)(d.ZP.HeaderRow,{children:t.map((function(e,t){return(0,c.jsx)(d.ZP.HeaderCell,{children:e.title},t)}))}),children:(0,c.jsx)(d.ZP.ItemRow,{children:t.map((function(e,o){return(0,c.jsxs)(d.ZP.ItemCell,{children:[e.value,o+1===t.length&&n&&(0,c.jsx)(f.Actions,{children:n})]},o)}))})})]}))}f.Actions=a.default.div.withConfig({displayName:"InformationTable__Actions",componentId:"sc-1tzwdbw-0"})([""]),f.MobileCard=(0,a.default)(s.Zb).withConfig({displayName:"InformationTable__MobileCard",componentId:"sc-1tzwdbw-1"})(["padding:16px;box-shadow:0px 6px 12px rgba(185,189,208,0.4);display:grid;gap:8px;& > div{display:grid;grid-auto-flow:column;justify-content:space-between;align-items:center;& > span{color:#0b1359;&:nth-of-type(1){","}&:nth-of-type(2){","}}}","{margin-top:16px;}"],s.cp.YH.miniheader,s.cp.Vz.regular,f.Actions),f.Root=a.default.div.withConfig({displayName:"InformationTable__Root",componentId:"sc-1tzwdbw-2"})(["","{& > *:last-child{text-align:inherit;justify-content:space-between;}}"],d.ZP.Row)},21385:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var o=n(41810),r=n(41664),i=n(79308),a=n(85893);function s(e){var t=e.token0,n=e.token1,s=(0,o.$G)().t;return(0,a.jsx)(r.default,{passHref:!0,href:["/swap/".concat(t),n].filter(Boolean).join("/"),children:(0,a.jsx)(i.zx,{as:"a",children:s("Trade")})})}},31844:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/info/pairs/[token0]/[token1]",function(){return n(7929)}])},11742:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],o=0;o<e.rangeCount;o++)n.push(e.getRangeAt(o));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}}},function(e){e.O(0,[4408,2178,5892,9744,5092,9774,2888,179],(function(){return t=31844,e(e.s=t);var t}));var t=e.O();_N_E=t}]);