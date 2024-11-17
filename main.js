(()=>{var n={365:(n,e,t)=>{"use strict";t.d(e,{A:()=>u});var o=t(354),r=t.n(o),a=t(314),i=t.n(a),s=t(417),c=t.n(s),l=new URL(t(832),t.b),A=i()(r()),d=c()(l);A.push([n.id,`/* CSS Reset - Start*/\n@font-face{\n    font-family: Roboto;\n    src: url(${d});\n}\n\n*{\n    box-sizing: border-box;\n}\n\n:root {\n    line-height: 1.5;\n    --background-color: #121212;\n    --text-primary-color: #ffffff;\n    --text-secondary-color: #b3b3b3;\n    --selected-color: #5851db;\n    --hover-color: #7270f5;\n    --accent-color: #00aaff;\n    --card-background: #1e1e1e;\n    --border-color: #333333;\n    \n    --fw-thin: 100;\n    --fw-regular: 500;\n    --fw-bold: 600;\n    --fw-black: 700;\n\n    --font-size-small: 1.4rem;\n    --font-size-main: 1.8rem;\n    --font-size-large: 2.2rem;\n    --font-size-header: 2.6rem;\n  \n    --small-padding: 0.75rem;  \n    --medium-padding: 1.5rem;  \n    --large-padding: 2.25rem;   \n    --Xl-padding: 5rem;\n}\n\n\nh1, h2, h3, h4, h5, figure, p, ol, ul {\n    margin: 0;\n    padding: 0;\n}\n\np{\n    font-size: var(--font-size-small);\n    font-weight: var(--fw-thin);\n    opacity: 0.6;\n}\n\n\nol[role="list"], ul[role="list"] {\n    list-style: none;\n    padding-inline: 0;\n}\n\nli{\n    list-style: none;\n}\n\nh1, h2, h3, h4, h5 {\n    font-size: inherit;\n    font-weight: inherit;\n}\n\nimg {\n    display: block;\n    max-inline-size: 100%;\n}\n\nbutton,\ninput,\nselect,\ntextarea {\n    font-family: inherit;\n    font-size: 100%;\n}\n\na:hover, button:hover{\n    cursor: pointer; \n}\n\n/* CSS reset - end */\n/*------------------------------------------------------------*/\n/* Global - start */\nbody{\n    margin: 0;\n    padding: 0;\n    font-family: Roboto, sans-serif;\n    font-size: var(--font-size-main);\n    font-weight: var(--fw-regular);\n    height: 100vh;\n    width: 100vw;\n    background-color: var(--background-color); \n    color: var(--color-text-main);\n    display: grid;\n    grid-template-columns: clamp(18.75rem, 40%, 40rem) 1fr;\n    grid-template-rows: clamp( 6.25rem, 10%, 18.75rem) 1fr;\n}\n\nh1{\n    font-size: var(--font-size-header);\n    font-weight: var(--fw-black);\n    color: var(--text-primary-color);\n}\n\nh2{\n    font-size: var(--font-size-large);\n    font-weight: var(--fw-bold);\n    color: var(--text-primary-color);\n}\n\nh3{\n    font-size: var(--font-size-small);\n    font-weight: var(--fw-regular);\n    color: var(--text-primary-color);\n}\n\np{\n    font-size: var(--font-size-small);\n    color: var(--text-secondary-color);\n}\n\na {\n    color: var(--accent-color);\n  }\n\n.modal{\n    background-color:  var(--hover-color);\n    color: var(--text-primary-color);\n    border: none;\n    border-radius: 1rem; \n    border-radius: var(--font-size-small);\n    box-shadow: 0 16px 36px rgba(0, 0, 0, 0.1);\n    padding: var(--large-padding);\n    width: clamp(300px, 20%, 400px);\n   \n}\n\n.modal > :first-child{\n    margin-bottom: var(--large-padding);\n    text-align: center;\n}\n\n.modal .form-row{\n    display: flex;\n    flex-direction: column;\n    margin-bottom: var(--small-padding);\n}\n\n.modal form{\n    font-size: var(--font-size-small);\n    display: flex;\n    flex-direction: column;\n    gap: var(--small-padding);\n}\n\n.modal-btns{\n    margin-top: auto;\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    gap: var(--small-padding);\n    font-size: var(--font-size-small);\n}\n\n.modal-btns > button{\n    padding: 0.25em 0.25em;\n    border-radius: 15px;\n    border: none;\n}\n\ndialog::backdrop{\n    background-color: rgba(0, 0, 0, 0.5)\n    \n}\n\n/* Modal - End*/\n/*------------------------------------------------------------*/\n/*------------------------------------------------------------*/\n/* SideBar - Start*/\n.sidebar{\n    grid-column: 1/2;\n    grid-row:1/3;\n    color: var(--color-text-main); \n    padding: var(--large-padding);\n    display: flex;\n    flex-direction: column;\n    gap: var(--Xl-padding);\n    border-right: 1px solid var(--selected-color);\n    font-size: var(--font-size-small);\n}\n\n\n.sidebar button, .task button{\n    padding:0;\n    border: none;\n    background: none;\n    width:100%;\n    text-align: left;\n    color: var(--text-primary-color);\n}\n\n.sidebar img{\n    filter: invert(1);\n    width: 1.75em;\n    height:auto;\n}\n\n\n/* SideBar - End*/\n/*------------------------------------------------------------*/\n/* Content- Start*/\n.page-header{\n    grid-column: 2/3;\n    grid-row:1/2;\n}\n\n.content{\n    display:grid;\n    grid-auto-rows: 2em;\n    background-color: var(--background-color); \n    color: var(--text-primary-color);\n    padding: 2rem;\n    grid-column: 2/3;\n    grid-row:2/4;\n}\n\n.task{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n\n.task img{\n    filter: invert(1);\n    width: 1.25em;\n    height:auto;\n}\n/*------------------------------------------------------------*/\n/* Utility- Start*/\n.column-flex{\n    display: flex;\n    flex-direction: column;\n    gap: var(--small-padding)\n}\n\n.row-flex{\n    display:flex;\n    align-items: center;\n    gap: var(--small-padding);\n}\n\n\n\n\n`,"",{version:3,sources:["webpack://./src/styles.css"],names:[],mappings:"AAAA,qBAAqB;AACrB;IACI,mBAAmB;IACnB,4CAAoE;AACxE;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;IAChB,2BAA2B;IAC3B,6BAA6B;IAC7B,+BAA+B;IAC/B,yBAAyB;IACzB,sBAAsB;IACtB,uBAAuB;IACvB,0BAA0B;IAC1B,uBAAuB;;IAEvB,cAAc;IACd,iBAAiB;IACjB,cAAc;IACd,eAAe;;IAEf,yBAAyB;IACzB,wBAAwB;IACxB,yBAAyB;IACzB,0BAA0B;;IAE1B,wBAAwB;IACxB,wBAAwB;IACxB,wBAAwB;IACxB,kBAAkB;AACtB;;;AAGA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,iCAAiC;IACjC,2BAA2B;IAC3B,YAAY;AAChB;;;AAGA;IACI,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,oBAAoB;AACxB;;AAEA;IACI,cAAc;IACd,qBAAqB;AACzB;;AAEA;;;;IAII,oBAAoB;IACpB,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA,oBAAoB;AACpB,+DAA+D;AAC/D,mBAAmB;AACnB;IACI,SAAS;IACT,UAAU;IACV,+BAA+B;IAC/B,gCAAgC;IAChC,8BAA8B;IAC9B,aAAa;IACb,YAAY;IACZ,yCAAyC;IACzC,6BAA6B;IAC7B,aAAa;IACb,sDAAsD;IACtD,sDAAsD;AAC1D;;AAEA;IACI,kCAAkC;IAClC,4BAA4B;IAC5B,gCAAgC;AACpC;;AAEA;IACI,iCAAiC;IACjC,2BAA2B;IAC3B,gCAAgC;AACpC;;AAEA;IACI,iCAAiC;IACjC,8BAA8B;IAC9B,gCAAgC;AACpC;;AAEA;IACI,iCAAiC;IACjC,kCAAkC;AACtC;;AAEA;IACI,0BAA0B;EAC5B;;AAEF;IACI,qCAAqC;IACrC,gCAAgC;IAChC,YAAY;IACZ,mBAAmB;IACnB,qCAAqC;IACrC,0CAA0C;IAC1C,6BAA6B;IAC7B,+BAA+B;;AAEnC;;AAEA;IACI,mCAAmC;IACnC,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mCAAmC;AACvC;;AAEA;IACI,iCAAiC;IACjC,aAAa;IACb,sBAAsB;IACtB,yBAAyB;AAC7B;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,yBAAyB;IACzB,mBAAmB;IACnB,yBAAyB;IACzB,iCAAiC;AACrC;;AAEA;IACI,sBAAsB;IACtB,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI;;AAEJ;;AAEA,eAAe;AACf,+DAA+D;AAC/D,+DAA+D;AAC/D,mBAAmB;AACnB;IACI,gBAAgB;IAChB,YAAY;IACZ,6BAA6B;IAC7B,6BAA6B;IAC7B,aAAa;IACb,sBAAsB;IACtB,sBAAsB;IACtB,6CAA6C;IAC7C,iCAAiC;AACrC;;;AAGA;IACI,SAAS;IACT,YAAY;IACZ,gBAAgB;IAChB,UAAU;IACV,gBAAgB;IAChB,gCAAgC;AACpC;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,WAAW;AACf;;;AAGA,iBAAiB;AACjB,+DAA+D;AAC/D,kBAAkB;AAClB;IACI,gBAAgB;IAChB,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,mBAAmB;IACnB,yCAAyC;IACzC,gCAAgC;IAChC,aAAa;IACb,gBAAgB;IAChB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;;AAGA;IACI,iBAAiB;IACjB,aAAa;IACb,WAAW;AACf;AACA,+DAA+D;AAC/D,kBAAkB;AAClB;IACI,aAAa;IACb,sBAAsB;IACtB;AACJ;;AAEA;IACI,YAAY;IACZ,mBAAmB;IACnB,yBAAyB;AAC7B",sourcesContent:['/* CSS Reset - Start*/\n@font-face{\n    font-family: Roboto;\n    src: url(../src/resources/font_library/roboto-regular-webfont.woff2);\n}\n\n*{\n    box-sizing: border-box;\n}\n\n:root {\n    line-height: 1.5;\n    --background-color: #121212;\n    --text-primary-color: #ffffff;\n    --text-secondary-color: #b3b3b3;\n    --selected-color: #5851db;\n    --hover-color: #7270f5;\n    --accent-color: #00aaff;\n    --card-background: #1e1e1e;\n    --border-color: #333333;\n    \n    --fw-thin: 100;\n    --fw-regular: 500;\n    --fw-bold: 600;\n    --fw-black: 700;\n\n    --font-size-small: 1.4rem;\n    --font-size-main: 1.8rem;\n    --font-size-large: 2.2rem;\n    --font-size-header: 2.6rem;\n  \n    --small-padding: 0.75rem;  \n    --medium-padding: 1.5rem;  \n    --large-padding: 2.25rem;   \n    --Xl-padding: 5rem;\n}\n\n\nh1, h2, h3, h4, h5, figure, p, ol, ul {\n    margin: 0;\n    padding: 0;\n}\n\np{\n    font-size: var(--font-size-small);\n    font-weight: var(--fw-thin);\n    opacity: 0.6;\n}\n\n\nol[role="list"], ul[role="list"] {\n    list-style: none;\n    padding-inline: 0;\n}\n\nli{\n    list-style: none;\n}\n\nh1, h2, h3, h4, h5 {\n    font-size: inherit;\n    font-weight: inherit;\n}\n\nimg {\n    display: block;\n    max-inline-size: 100%;\n}\n\nbutton,\ninput,\nselect,\ntextarea {\n    font-family: inherit;\n    font-size: 100%;\n}\n\na:hover, button:hover{\n    cursor: pointer; \n}\n\n/* CSS reset - end */\n/*------------------------------------------------------------*/\n/* Global - start */\nbody{\n    margin: 0;\n    padding: 0;\n    font-family: Roboto, sans-serif;\n    font-size: var(--font-size-main);\n    font-weight: var(--fw-regular);\n    height: 100vh;\n    width: 100vw;\n    background-color: var(--background-color); \n    color: var(--color-text-main);\n    display: grid;\n    grid-template-columns: clamp(18.75rem, 40%, 40rem) 1fr;\n    grid-template-rows: clamp( 6.25rem, 10%, 18.75rem) 1fr;\n}\n\nh1{\n    font-size: var(--font-size-header);\n    font-weight: var(--fw-black);\n    color: var(--text-primary-color);\n}\n\nh2{\n    font-size: var(--font-size-large);\n    font-weight: var(--fw-bold);\n    color: var(--text-primary-color);\n}\n\nh3{\n    font-size: var(--font-size-small);\n    font-weight: var(--fw-regular);\n    color: var(--text-primary-color);\n}\n\np{\n    font-size: var(--font-size-small);\n    color: var(--text-secondary-color);\n}\n\na {\n    color: var(--accent-color);\n  }\n\n.modal{\n    background-color:  var(--hover-color);\n    color: var(--text-primary-color);\n    border: none;\n    border-radius: 1rem; \n    border-radius: var(--font-size-small);\n    box-shadow: 0 16px 36px rgba(0, 0, 0, 0.1);\n    padding: var(--large-padding);\n    width: clamp(300px, 20%, 400px);\n   \n}\n\n.modal > :first-child{\n    margin-bottom: var(--large-padding);\n    text-align: center;\n}\n\n.modal .form-row{\n    display: flex;\n    flex-direction: column;\n    margin-bottom: var(--small-padding);\n}\n\n.modal form{\n    font-size: var(--font-size-small);\n    display: flex;\n    flex-direction: column;\n    gap: var(--small-padding);\n}\n\n.modal-btns{\n    margin-top: auto;\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    gap: var(--small-padding);\n    font-size: var(--font-size-small);\n}\n\n.modal-btns > button{\n    padding: 0.25em 0.25em;\n    border-radius: 15px;\n    border: none;\n}\n\ndialog::backdrop{\n    background-color: rgba(0, 0, 0, 0.5)\n    \n}\n\n/* Modal - End*/\n/*------------------------------------------------------------*/\n/*------------------------------------------------------------*/\n/* SideBar - Start*/\n.sidebar{\n    grid-column: 1/2;\n    grid-row:1/3;\n    color: var(--color-text-main); \n    padding: var(--large-padding);\n    display: flex;\n    flex-direction: column;\n    gap: var(--Xl-padding);\n    border-right: 1px solid var(--selected-color);\n    font-size: var(--font-size-small);\n}\n\n\n.sidebar button, .task button{\n    padding:0;\n    border: none;\n    background: none;\n    width:100%;\n    text-align: left;\n    color: var(--text-primary-color);\n}\n\n.sidebar img{\n    filter: invert(1);\n    width: 1.75em;\n    height:auto;\n}\n\n\n/* SideBar - End*/\n/*------------------------------------------------------------*/\n/* Content- Start*/\n.page-header{\n    grid-column: 2/3;\n    grid-row:1/2;\n}\n\n.content{\n    display:grid;\n    grid-auto-rows: 2em;\n    background-color: var(--background-color); \n    color: var(--text-primary-color);\n    padding: 2rem;\n    grid-column: 2/3;\n    grid-row:2/4;\n}\n\n.task{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n\n.task img{\n    filter: invert(1);\n    width: 1.25em;\n    height:auto;\n}\n/*------------------------------------------------------------*/\n/* Utility- Start*/\n.column-flex{\n    display: flex;\n    flex-direction: column;\n    gap: var(--small-padding)\n}\n\n.row-flex{\n    display:flex;\n    align-items: center;\n    gap: var(--small-padding);\n}\n\n\n\n\n'],sourceRoot:""}]);const u=A},314:n=>{"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<n.length;l++){var A=[].concat(n[l]);o&&i[A[0]]||(void 0!==a&&(void 0===A[5]||(A[1]="@layer".concat(A[5].length>0?" ".concat(A[5]):""," {").concat(A[1],"}")),A[5]=a),t&&(A[2]?(A[1]="@media ".concat(A[2]," {").concat(A[1],"}"),A[2]=t):A[2]=t),r&&(A[4]?(A[1]="@supports (".concat(A[4],") {").concat(A[1],"}"),A[4]=r):A[4]="".concat(r)),e.push(A))}},e}},417:n=>{"use strict";n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},354:n=>{"use strict";n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),a="/*# ".concat(r," */");return[e].concat([a]).join("\n")}return[e].join("\n")}},72:n=>{"use strict";var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],l=o.base?c[0]+o.base:c[0],A=a[l]||0,d="".concat(l," ").concat(A);a[l]=A+1;var u=t(d),g={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(g);else{var m=r(g,o);o.byIndex=s,e.splice(s,0,{identifier:d,updater:m,references:1})}i.push(d)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=t(a[i]);e[s].references--}for(var c=o(n,r),l=0;l<a.length;l++){var A=t(a[l]);0===e[A].references&&(e[A].updater(),e.splice(A,1))}a=c}}},659:n=>{"use strict";var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{"use strict";n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{"use strict";n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{"use strict";n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{"use strict";n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},91:()=>{document.getElementById("taskModal"),document.getElementById("projectModal"),document.querySelector("#taskModal form"),document.querySelector("#projectModal form"),document.querySelector("#taskModal .add-btn"),document.querySelector("#projectModal .add-btn"),document.querySelectorAll(".close-btn"),document.querySelector(".taskBtn"),document.querySelector(".projectBtn"),document.querySelector(".today"),document.querySelector(".content"),document.querySelector(".upcoming"),document.querySelector(".allTask"),document.querySelector(".completed")},832:(n,e,t)=>{"use strict";n.exports=t.p+"3d74926d9f380c7bb7d7.woff2"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&"SCRIPT"===e.currentScript.tagName.toUpperCase()&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!n||!/^http(s?):/.test(n));)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{"use strict";var n=t(72),e=t.n(n),o=t(825),r=t.n(o),a=t(659),i=t.n(a),s=t(56),c=t.n(s),l=t(540),A=t.n(l),d=t(113),u=t.n(d),g=t(365),m={};m.styleTagTransform=u(),m.setAttributes=c(),m.insert=i().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=A(),e()(g.A,m),g.A&&g.A.locals&&g.A.locals,t(91);class f{static idCounter=0;constructor(n){this.name=n,this.id=++f.idCounter,this.tasks=new Map}getId(){return this.id}getTasks(){return Array.from(this.tasks.values())}addTask(n){this.tasks.set(n.getId(),n)}removeTask(n){this.tasks.delete(n)}getTask(n){return this.tasks.get(n)}}const p=new class{constructor(){this.projects=new Map,this.activeProjectId=null}addProject(n){if(n)return this.projects.set(n.getId(),n),n;console.log(`Project ${n} cannot be added.`)}removeProject(n){this.getProject(n)?this.projects.delete(n):console.log(`Project with ID ${n} cannot be removed.`)}getAllProjects(){return Array.from(this.projects.values())}getProject(n){const e=this.projects.get(n);if(e)return e;console.log(`Project with ID ${n} not found.`)}};function C(n){p.getProject(n)&&(p.activeProjectId=n),console.log(`Project with ID ${p.activeProjectId} is now active.`)}Math.pow(10,8);const h=Symbol.for("constructDateFrom");function B(n,e){return"function"==typeof n?n(e):n&&"object"==typeof n&&h in n?n[h](e):n instanceof Date?new n.constructor(e):new Date(e)}function v(n,e){return B(e||n,n)}function I(n){return function(n,e){const t=v(n,e?.in);return t.setHours(0,0,0,0),t}(Date.now(),n)}class b{static idCounter=0;constructor(n,e,t,o){this.name=n,this.id=++b.idCounter,this.desc=e,this.dueDate=t?new Date(t):null,this.priority=o,this.isComplete=!1}getId(){return this.id}getProjectId(){return this.projectId}getIsComplete(){return this.isComplete}toggleComplete(){this.isComplete=!this.isComplete,console.log(`Task ${this.id} marked ${this.isComplete}.`)}checkOverdue(){return n=new Date(this.getDate()),e=new Date,+v(n)<+v(e);var n,e}}class y{static activePage=null;static pageConfigs={};static init(n){this.pageConfigs=n}static addToPageConfigs(n,e){this.pageConfigs[n+""]=e}static getActivePage(){if(this.pageConfigs[this.activePage])return console.log(`Current page is ${this.activePage}.`),this.activePage;console.log("Page does not exist!")}static selectPage(n){if(this.pageConfigs[n])return this.activePage=n,void console.log(`Page ${n} is selected.`);console.log(`Page ${n} does not exist!`)}static runActivePage(){if(this.pageConfigs[this.activePage])return console.log(`Page ${this.activePage} is running.`),void this.pageConfigs[this.activePage]();console.log(`Page ${this.activePage} cannot be run!`)}}const k=t.p+"637824bc8f2833004ccc.svg";class x{static events={};static subscribe(n,e){this.events[n]||(this.events[n]=[]),this.events[n].push(e)}static unsubscribe(n,e){this.events[n]&&(this.events[n]=this.events[n].filter((n=>n!==e)))}static publish(n,...e){this.events[n]&&0!==this.events[n].length&&this.events[n].forEach((n=>n(...e)))}}function w(n,e){n.textContent="",e.forEach((e=>{const t=document.createElement("li"),o=document.createElement("button");o.setAttribute("type","button"),o.classList.add("project","row-flex"),o.id=e.getId();const r=document.createElement("img");r.src=k;const a=document.createElement("h3");a.textContent=e.name;const i=document.createElement("span");i.textContent=`(${e.getTasks().length})`,o.appendChild(r),o.appendChild(a),o.appendChild(i),t.appendChild(o),n.appendChild(t),x.publish("DOMprojectload",e,o)}))}function E(n,e){const t=document.querySelector(".content");!function(n,e){n.textContent="";const t=document.createElement("h1");t.classList.add("header"),t.textContent=e,n.appendChild(t)}(document.querySelector(".page-header"),n),function(n,e){n.textContent="",e.forEach((e=>{const t=document.createElement("div");t.classList.add("task"),t.id=e.getId();const o=document.createElement("div");o.classList.add("row-flex");const r=document.createElement("input");r.setAttribute("type","checkbox"),r.setAttribute("name",`task${e.getId()}-checkbox`),r.classList.add("checkbox","UIElement"),r.id=`task${e.getId()}-checkbox`,r.checked=e.getIsComplete();const a=document.createElement("span");a.textContent=e.name,o.appendChild(r),o.appendChild(a);const i=document.createElement("div");i.classList.add("row-flex");for(let n=0;n<2;n++){const t=document.createElement("button");t.setAttribute("type","button"),t.classList.add("utility","UIElement","row-flex"),t.id=`task${e.getId()}-utility${n}`;const o=document.createElement("img");o.src=k,t.appendChild(o),i.appendChild(t)}t.appendChild(o),t.appendChild(i),n.appendChild(t),x.publish("DOMtaskload",e)}))}(t,e)}function j(){const n=document.querySelector(".taskModal"),e=document.querySelector(".taskModal form");n.close(),e.reset()}function S(){const n=document.querySelector(".projectModal"),e=document.querySelector(".projectModal form");n.close(),e.reset()}function z(n){y.selectPage(n),y.runActivePage()}new Event("DOMTaskLoaded");const P=new class{constructor(n){this.projectManager=n}addTask(n){const e=(console.log(`Project with ID ${p.activeProjectId} is currently active.`),p.getProject(p.activeProjectId));e?e.addTask(n):console.log(`Project with ID ${n.getProjectId()} not found.`)}removeTask(n){for(const e of this.projectManager.getAllProjects())if(e.getTask(n))return void e.removeTask(n);console.log(`Task with ID ${n} not found.`)}getTask(n){for(const e of this.projectManager.getAllProjects()){const t=e.getTask(n);if(t)return t}return null}getAllTasks(){const n=[];for(const e of this.projectManager.getAllProjects())n.push(...e.getTasks());return n}getTasksByProject(n){const e=this.projectManager.getProject(n);return e?e.getTasks():[]}getTasksDueWithinDays(n){const e=this.getAllTasks(),t=I(),o=function(n,e,t){const o=v(n,t?.in);return isNaN(e)?B(t?.in||n,NaN):e?(o.setDate(o.getDate()+e),o):o}(t,n);return e.filter((n=>function(n,e,t){const o=+v(n,t?.in),[r,a]=[+v(e.start,t?.in),+v(e.end,t?.in)].sort(((n,e)=>n-e));return o>=r&&o<=a}(new Date(n.dueDate),{start:t,end:o})))}getCompletedTasks(){return this.getAllTasks().filter((n=>n.getIsComplete()))}}(p);!function(n,e){!function(n){const e=document.getElementById("today"),t=document.getElementById("upcoming"),o=document.getElementById("allTask"),r=document.getElementById("completed");document.querySelector(".content"),y.init({[e.id]:()=>{E(e.textContent,n.getTasksDueWithinDays(1))},[t.id]:()=>{E(t.textContent,n.getTasksDueWithinDays(7))},[o.id]:()=>{E(o.textContent,n.getAllTasks())},[r.id]:()=>{E(r.textContent,n.getCompletedTasks())}})}(e),function(n){const e=new f("Default Bitch");n.addProject(e),C(e.getId()),w(document.querySelector(".project-list"),n.getAllProjects())}(n),document.querySelector(".addproject").addEventListener("click",(()=>{document.querySelector(".projectModal").showModal()})),document.querySelector(".projectModal .close-btn").addEventListener("click",(()=>{S()})),document.querySelector(".projectModal .add-btn").addEventListener("click",(e=>{e.preventDefault(),function(n){const e=document.querySelector(".projectModal form").elements.title.value,t=new f(e);n.addProject(t),w(document.querySelector(".project-list"),n.getAllProjects()),S()}(n)})),document.querySelector(".addtask").addEventListener("click",(()=>{!function(){const n=document.querySelector(".taskModal");document.querySelector(".taskModal h2").textContent="Add Task",n.showModal()}()})),document.querySelector(".taskModal .close-btn").addEventListener("click",(()=>{j()})),document.querySelector(".taskModal .add-btn").addEventListener("click",(t=>{t.preventDefault(),function(n,e){const t=document.querySelector(".taskModal form"),o=t.elements.title.value,r=t.elements.desc.value,a=t.elements.dueDate.value,i=t.elements.priority.value,s=new b(o,r,a,i);e.addTask(s);const c=document.querySelector(".project-list"),l=n.getAllProjects();y.runActivePage(),w(c,l),j()}(n,e)})),document.querySelectorAll(".sidebar button").forEach((n=>{n.addEventListener("click",(n=>{z(n.currentTarget.id)}))})),x.subscribe("DOMprojectload",((n,e)=>{!function(n,e){y.addToPageConfigs(n.getId(),(()=>{C(n.getId()),E(n.name,n.getTasks())})),e.addEventListener("click",(n=>{z(n.currentTarget.id)}))}(n,e)})),x.subscribe("DOMtaskload",(n=>{!function(n,e){document.querySelectorAll(".task .UIElement").forEach((t=>{t.addEventListener("click",(t=>{t.currentTarget.classList.contains("checkbox")?(n.toggleComplete(),y.runActivePage()):t.currentTarget.classList.contains("utility")&&(t.currentTarget.id.includes("0")||t.currentTarget.id.includes("1")&&e.removeTask(n.getId()),y.runActivePage())}))}))}(n,e)}))}(p,P)})()})();
//# sourceMappingURL=main.js.map