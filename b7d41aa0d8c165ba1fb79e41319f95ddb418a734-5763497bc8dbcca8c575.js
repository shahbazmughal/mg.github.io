(self.webpackChunk_elegantstack_gatsby_starter_flexiblocks=self.webpackChunk_elegantstack_gatsby_starter_flexiblocks||[]).push([[875],{8994:function(t,e,n){"use strict";n.d(e,{Z:function(){return x}});var r=n(7451),a=n(7378),o=n(2110),i=(n(4332),n(2730),n(4886)),s=(n(3059),n(9606),n(1690),n(3253));function c(t,e,n,r,a,o,i){try{var s=t[o](i),c=s.value}catch(l){return void n(l)}s.done?e(c):Promise.resolve(c).then(r,a)}var l=n(3715),u=n.n(l),p=n(6495),m={imgStyle:{width:"100%",height:240,objectFit:"cover",borderRadius:"6px"},flex0:{flex:0,WebkitFlex:0},loadings:{width:"100%",textAlign:"center"}};var h=function(){var t,e=(0,a.useState)([]),n=e[0],r=e[1],o=(0,a.useState)(!0),i=o[0],s=o[1];return(0,a.useEffect)((function(){var t=[];(function(){var t,e=(t=u().mark((function t(){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://school.mumara.com/wp-json/wp/v2/posts/",{headers:{"Content-Type":"application/json"}});case 2:if(200===(e=t.sent).status){t.next=5;break}throw new Error("cannot fetch the posts data.");case 5:return t.next=7,e.json();case 7:return n=t.sent,t.abrupt("return",n);case 9:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,a){var o=t.apply(e,n);function i(t){c(o,r,a,i,s,"next",t)}function s(t){c(o,r,a,i,s,"throw",t)}i(void 0)}))});return function(){return e.apply(this,arguments)}})()().then((function(e){r(e),s(!1),t.push(e)})).catch((function(t){return console.log("Rejected: ",t.message)}))}),[]),(0,p.tZ)("div",{className:"css-fdsoy5"},(0,p.tZ)("div",((t={style:m.loadings}).style={display:"none"},t),(0,p.tZ)("div",{id:"loading",className:"loading"},(0,p.tZ)("div",{className:"loader"}))),1==i?(0,p.tZ)("div",{style:m.loadings},(0,p.tZ)("div",{id:"loading",className:"loading"},(0,p.tZ)("div",{className:"loader"}))):"",void 0!==n&&n!==[]?null==n?void 0:n.slice(0,3).map((function(t,e){return(0,p.tZ)("div",{className:"css-1w4obji",key:"post-"+e,id:t.id},(0,p.tZ)("a",{href:t.link,className:"button-group-button css-1ip3i53",target:"_blank"},(0,p.tZ)("article",{className:"css-1lr6sgx"},(0,p.tZ)("div",{className:"css-1li49bo",style:m.flex0},(0,p.tZ)("div",{className:"css-1i5g8ff"},(0,p.tZ)("div",{className:"css-1jhnp88-ContentImages"},(0,p.tZ)("picture",null,(0,p.tZ)("img",{src:t.yoast_head_json.og_image[0].url,alt:"",style:m.imgStyle}))))),(0,p.tZ)("div",{className:"css-1eetir6"},(0,p.tZ)("div",{className:"css-12hibeq"},(0,p.tZ)("div",{className:"css-19p2wcd",style:{textAlign:"left"}},t.yoast_head_json.schema["@graph"][5].articleSection.map((function(t,e){return(0,p.tZ)("div",{key:"ct-"+e,className:"css-cig7md",style:{marginRight:"5px"}},t)})))),(0,p.tZ)("h5",{className:"css-19bvfwj",style:{textAlign:"left"}},t.title.rendered.slice(0,55)),(0,p.tZ)("div",{className:"css-1r912eh",style:{textAlign:"left"}},String(t.excerpt.rendered).replace(/<[^>]+>/gm,"").replace(/\&([^;]+);/g,"").slice(0,150)+"..."),(0,p.tZ)("div",{className:"css-jwtewi"},(0,p.tZ)("div",{className:"css-zkfaav"},(0,p.tZ)("div",{className:"css-1jhnp88-ContentImages"},(0,p.tZ)("div",{"data-gatsby-image-wrapper":"",className:"gatsby-image-wrapper gatsby-image-wrapper-constrained css-20oayb-ImageComponent"},(0,p.tZ)("picture",null,(0,p.tZ)("img",{width:"80",height:"80",alt:t.yoast_head_json.schema["@graph"][6].name,src:t.yoast_head_json.schema["@graph"][6].image.url})))),(0,p.tZ)("div",{className:"css-1y5f7qa"},(0,p.tZ)("div",{className:"css-ng6b79",style:{textAlign:"left"}},(0,p.tZ)("a",{className:"css-dpe4lb"},(0,p.tZ)("strong",null,t.yoast_head_json.schema["@graph"][6].image.caption))),(0,p.tZ)("div",{className:"css-zkfaav"},(0,p.tZ)("div",{className:"css-f55aen"},(n=t.date,(r=n.split("T"))[1],(a=r[0].split("-"))[1]+" "+{"01":"Jan","02":"Feb","03":"Mar","04":"Apr","05":"May","06":"June","07":"July","08":"Aug","09":"Sep",10:"Oct",11:"Nov",12:"Dec"}[a[1]]+", "+a[0])," "),(0,p.tZ)("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 512 512",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg"},(0,p.tZ)("path",{d:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"}))))))))));var n,r,a})):"")},f=n(2565),d=n.n(f),g=["as","content","children"],y=["text"],w=["variant","color"],v=["h2"],Z=function(t){t.as;var e=t.content,n=(t.children,(0,r.Z)(t,g));return!e||e.length<1?null:(Array.isArray(e)?e:[e]).map((function(t,e){var i=t.text,s=(0,r.Z)(t,y);if(!i)return null;s.mb=s.space;var c=d()({},n,s,(function(t,e){return null===e?t:void 0})),l=c.variant,u=c.color;(0,r.Z)(c,w);return v.includes(l)?(0,p.tZ)(o.X6,{key:"dp-"+e,variant:l,color:u},"Blogs, Resources & More."):(0,p.tZ)(a.Fragment,null)}))},x=(0,s.Z)((function(t){var e=t.content,n=e.text;e.collection,e.buttons;return(0,p.tZ)(o.W2,null,(0,p.tZ)(o.xu,{sx:{textAlign:"center"}},(0,p.tZ)(Z,{content:n}),(0,p.tZ)(i.Z,null),(0,p.tZ)(h,null)),(0,p.tZ)(i.Z,null))}))},3303:function(t,e,n){"use strict";n(7378);var r=n(6495);e.Z=function(t){return(0,r.tZ)("div",{style:{display:"none"}},(0,r.tZ)("div",{className:"sitesearch",itemScope:!0,itemType:"https://schema.org/WebSite"},(0,r.tZ)("meta",{itemProp:"url",content:"https://www.mumara.com/"}),(0,r.tZ)("form",{itemProp:"potentialAction",itemScope:!0,itemType:"https://schema.org/SearchAction"},(0,r.tZ)("meta",{itemProp:"target",content:"https://www.mumara.com/?s={s}"}),(0,r.tZ)("input",{itemProp:"query-input",type:"text",name:"s",required:!0}),(0,r.tZ)("input",{type:"submit"}))),(0,r.tZ)("span",{className:"socialorg",itemScope:!0,itemType:"https://schema.org/Organization"},(0,r.tZ)("link",{itemProp:"url",href:"https://www.mumara.com"}),(0,r.tZ)("a",{itemProp:"sameAs",href:"https://www.facebook.com/MumaraApps"},"FB"),(0,r.tZ)("a",{itemProp:"sameAs",href:"https://twitter.com/MumaraApps"},"Twitter"),(0,r.tZ)("a",{itemProp:"sameAs",href:"https://plus.google.com/+MumaraEmailMarketer"},"Google+"),(0,r.tZ)("a",{itemProp:"sameAs",href:"https://www.youtube.com/channel/UC1k6voQOVss0_PWg7CfJTdw"},"Youtube"),(0,r.tZ)("a",{itemProp:"sameAs",href:"https://www.linkedin.com/company/mumara"},"Linkedin")))}},9542:function(t,e,n){"use strict";n(7378);var r=n(7326),a=n(6495);e.Z=function(t){return(0,a.tZ)(r.q,null,(0,a.tZ)("script",{type:"application/ld+json"},'\n                    {\n                    "@context": "https://schema.org",\n                    "@type": "Organization",\n                    "name": "Mumara",\n                    "alternateName": "Marketing Automation &amp; Customer Engagement Tools | Mumara",\n                    "url": "https://www.mumara.com",\n                    "logo": "https://www.mumara.com/assets/img/logo-dark.png",\n                    "contactPoint": {\n                        "@type": "ContactPoint",\n                        "telephone": "+1 (844) 686 – 2721",\n                        "contactType": "customer service"\n                    },\n                    "sameAs": [\n                        "https://www.facebook.com/MumaraApps",\n                        "https://twitter.com/MumaraApps",\n                        "https://plus.google.com/+MumaraEmailMarketer",\n                        "https://www.youtube.com/channel/UC1k6voQOVss0_PWg7CfJTdw",\n                        "https://www.linkedin.com/company/mumara"\n                    ]\n                    }\n                '),(0,a.tZ)("script",{type:"application/ld+json"},'\n                    {\n                    "@context":"https://schema.org",\n                    "@type":"ItemList",\n                    "itemListElement":[\n                        {\n                        "@type":"ListItem",\n                        "position":1,\n                        "url":"https://www.mumara.com/campaigns/"\n                        },\n                        {\n                        "@type":"ListItem",\n                        "position":2,\n                        "url":"https://www.mumara.com/one/"\n                        },\n                        {\n                        "@type":"ListItem",\n                        "position":3,\n                        "url":"https://www.mumara.com/sms/"\n                        },\n                        {\n                        "@type":"ListItem",\n                        "position":4,\n                        "url":"https://www.mumara.com/smsplus/"\n                        },\n                        {\n                        "@type":"ListItem",\n                        "position":5,\n                        "url":"https://www.mumara.com/classic/"\n                        }\n                    ]\n                    }\n                '),(0,a.tZ)("script",{type:"application/ld+json"},'\n                    {\n                    "@context": "https://schema.org",\n                    "@type": "Person",\n                    "name": "Mumara",\n                    "url": "https://www.mumara.com",\n                    "sameAs": [\n                        "https://www.facebook.com/MumaraApps",\n                        "https://twitter.com/MumaraApps",\n                        "https://plus.google.com/+MumaraEmailMarketer",\n                        "https://www.youtube.com/channel/UC1k6voQOVss0_PWg7CfJTdw",\n                        "https://www.linkedin.com/company/mumara"\n                    ]\n                    }\n                '),(0,a.tZ)("script",{type:"application/ld+json"},'\n                    {\n                    "@context": "https://schema.org/",\n                    "@type": "WebSite",\n                    "name": "Mumara",\n                    "url": "https://www.mumara.com/",\n                    "potentialAction": {\n                        "@type": "SearchAction",\n                        "target": "https://www.mumara.com/?s={s}",\n                        "query-input": "required name=s"\n                    }\n                    }\n                '),(0,a.tZ)("script",{src:"https://code.jquery.com/jquery-3.6.0.min.js",integrity:"sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=",crossorigin:"anonymous"}),(0,a.tZ)("script",{"data-ad-client":"ca-pub-7570269198350551",async:!0,src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"}),(0,a.tZ)("script",{id:"sbinit",src:"https://dashboard.mumara.com/js/init.js"}),(0,a.tZ)("script",null,"\n                    window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;\n                    ga('create', 'UA-63566119-1', 'auto');\n                    ga('send', 'pageview');\n                "),(0,a.tZ)("script",{async:!0,src:"https://www.google-analytics.com/analytics.js"}),(0,a.tZ)("script",null,"\n                    !function(f,b,e,v,n,t,s)\n                    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?\n                    n.callMethod.apply(n,arguments):n.queue.push(arguments)};\n                    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';\n                    n.queue=[];t=b.createElement(e);t.async=!0;\n                    t.src=v;s=b.getElementsByTagName(e)[0];\n                    s.parentNode.insertBefore(t,s)}(window, document,'script',\n                    'https://connect.facebook.net/en_US/fbevents.js');\n                    fbq('init', '329504770823436');\n                    fbq('track', 'Mumara PageView');\n                "),(0,a.tZ)("noscript",null,'<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=329504770823436&ev=ViewContent&noscript=1" />'))}},2577:function(t,e,n){"use strict";n.d(e,{Z:function(){return l}});var r=n(8291),a=(n(7378),n(2110)),o=n(3059),i=n(6140),s=n(6495),c=function(t){var e,n=t.icon,c=t.iconProps,l=t.text,u=t.description,p=t.compact,m=t.vertical,h=t.center,f=t.middle;return(0,s.tZ)(a.kC,{sx:{flexDirection:m?"column":"row",alignItems:h?"center":"flex-start",textAlign:h&&m?"center":"unset",justifyContent:f?"center":"unset","& + &":{mt:u?p?3:4:2}}},(null==n?void 0:n.src)&&(0,s.tZ)(a.xu,{sx:(e={display:"inline-flex",flexShrink:0},e[m?"mb":"mr"]=p?2:3,e)},(0,s.tZ)(i.Z,(0,r.Z)({content:n,size:"sm",p:p?1:void 0},c))),(0,s.tZ)(a.xu,{sx:{alignSelf:m?"auto":"center"}},(0,s.tZ)(o.Z,{content:l})))};c.defaultProps={iconProps:{}};var l=c},3605:function(t,e,n){"use strict";n(7378),n(6495)},6328:function(t,e,n){"use strict";n.d(e,{Z:function(){return c}});var r=n(7378),a=n(2110),o=n(4886),i=n(1690),s=n(6495),c=function(t){var e,n,c=t.space,l=t.fields,u=t.buttons;return(null==l?void 0:l[0])&&(0,s.tZ)(r.Fragment,null,(0,s.tZ)(o.Z,{space:c}),(0,s.tZ)(a.xu,{variant:"cards.primary",sx:{display:"inline-flex",alignContent:"space-between",bg:"contentBg",borderRadius:"xl",minWidth:["auto",400],p:2}},(0,s.tZ)(a.II,{type:"text",name:l[0].identifier,placeholder:null===(e=l[0].placeholder)||void 0===e?void 0:e.text,sx:{bg:"transparent",px:3,py:0,"::placeholder":{color:(null===(n=l[0].placeholder)||void 0===n?void 0:n.color)||"omegaDark"}}}),(null==u?void 0:u[0])&&(0,s.tZ)(i.Z,{content:u,wrapperStyles:{minWidth:"auto"}})))}},3715:function(t,e,n){t.exports=n(6248)},6248:function(t){var e=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(S){c=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var a=e&&e.prototype instanceof g?e:g,o=Object.create(a.prototype),i=new E(r||[]);return o._invoke=function(t,e,n){var r=p;return function(a,o){if(r===h)throw new Error("Generator is already running");if(r===f){if("throw"===a)throw o;return P()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var s=_(i,n);if(s){if(s===d)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===p)throw r=f,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var c=u(t,e,n);if("normal"===c.type){if(r=n.done?f:m,c.arg===d)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=f,n.method="throw",n.arg=c.arg)}}}(t,n,i),o}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(S){return{type:"throw",arg:S}}}t.wrap=l;var p="suspendedStart",m="suspendedYield",h="executing",f="completed",d={};function g(){}function y(){}function w(){}var v={};v[o]=function(){return this};var Z=Object.getPrototypeOf,x=Z&&Z(Z(A([])));x&&x!==n&&r.call(x,o)&&(v=x);var b=w.prototype=g.prototype=Object.create(v);function k(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){function n(a,o,i,s){var c=u(t[a],t,o);if("throw"!==c.type){var l=c.arg,p=l.value;return p&&"object"==typeof p&&r.call(p,"__await")?e.resolve(p.__await).then((function(t){n("next",t,i,s)}),(function(t){n("throw",t,i,s)})):e.resolve(p).then((function(t){l.value=t,i(l)}),(function(t){return n("throw",t,i,s)}))}s(c.arg)}var a;this._invoke=function(t,r){function o(){return new e((function(e,a){n(t,r,e,a)}))}return a=a?a.then(o,o):o()}}function _(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,_(t,n),"throw"===n.method))return d;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var a=u(r,t.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,d;var o=a.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,d):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,d)}function N(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function A(t){if(t){var n=t[o];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,i=function n(){for(;++a<t.length;)if(r.call(t,a))return n.value=t[a],n.done=!1,n;return n.value=e,n.done=!0,n};return i.next=i}}return{next:P}}function P(){return{value:e,done:!0}}return y.prototype=b.constructor=w,w.constructor=y,y.displayName=c(w,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,c(t,s,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},k(j.prototype),j.prototype[i]=function(){return this},t.AsyncIterator=j,t.async=function(e,n,r,a,o){void 0===o&&(o=Promise);var i=new j(l(e,n,r,a),o);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},k(b),c(b,s,"Generator"),b[o]=function(){return this},b.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=A,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(L),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function a(r,a){return s.type="throw",s.arg=t,n.next=r,a&&(n.method="next",n.arg=e),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],s=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),l=r.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),L(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;L(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:A(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=e}catch(n){Function("r","regeneratorRuntime = r")(e)}}}]);
//# sourceMappingURL=b7d41aa0d8c165ba1fb79e41319f95ddb418a734-5763497bc8dbcca8c575.js.map