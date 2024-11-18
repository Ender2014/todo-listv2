(()=>{var n={365:(n,e,t)=>{"use strict";t.d(e,{A:()=>u});var o=t(354),r=t.n(o),a=t(314),i=t.n(a),A=t(417),c=t.n(A),s=new URL(t(832),t.b),l=i()(r()),d=c()(s);l.push([n.id,`/* CSS Reset - Start*/\n@font-face{\n    font-family: Roboto;\n    src: url(${d});\n}\n\n*{\n    box-sizing: border-box;\n}\n\n:root {\n    line-height: 1.5;\n    --background-color: #121212;\n    --text-primary-color: #ffffff;\n    --text-secondary-color: #b3b3b3;\n    --selected-color: #5851db;\n    --hover-color: #7270f5;\n    --accent-color: #A2EDFC;\n    --card-background: #1e1e1e;\n    --border-color: #333333;\n    \n    --fw-thin: 100;\n    --fw-regular: 500;\n    --fw-bold: 600;\n    --fw-black: 700;\n\n    --font-size-small: 1.2rem;\n    --font-size-main: 1.5rem;\n    --font-size-large: 2.2rem;\n    --font-size-header: 2.6rem;\n    \n    --tiny-padding: 0.7rem;\n    --small-padding: 1rem;  \n    --medium-padding: 1.5rem;  \n    --large-padding: 2.25rem;   \n    --Xl-padding: 5rem;\n}\n\n\nh1, h2, h3, h4, h5, figure, p, ol, ul {\n    margin: 0;\n    padding: 0;\n}\n\np{\n    font-size: var(--font-size-small);\n    font-weight: var(--fw-thin);\n    opacity: 0.6;\n}\n\n\nol[role="list"], ul[role="list"] {\n    list-style: none;\n    padding-inline: 0;\n}\n\nli{\n    list-style: none;\n}\n\nh1, h2, h3, h4, h5 {\n    font-size: inherit;\n    font-weight: inherit;\n}\n\nimg {\n    display: block;\n    max-inline-size: 100%;\n}\n\nbutton,\ninput,\nselect,\ntextarea {\n    font-family: inherit;\n    font-size: 100%;\n}\n\na:hover, button:hover, input[type="checkbox"]{\n    cursor: pointer; \n}\n\n/* CSS reset - end */\n/*------------------------------------------------------------*/\n/* Global - start */\nbody{\n    margin: 0;\n    padding: 0;\n    font-family: Roboto, sans-serif;\n    font-size: var(--font-size-main);\n    font-weight: var(--fw-regular);\n    height: 100vh;\n    width: 100vw;\n    background-color: var(--background-color); \n    color: var(--color-text-main);\n    display: grid;\n    grid-template-columns: 18.75rem 1fr;\n}\n\nh1{\n    font-size: var(--font-size-header);\n    font-weight: var(--fw-black);\n    color: var(--text-primary-color);\n}\n\nh2{\n    font-size: var(--font-size-large);\n    font-weight: var(--fw-bold);\n    color: var(--text-primary-color);\n}\n\nh3{\n    font-size: var(--font-size-small);\n    font-weight: var(--fw-regular);\n    color: var(--text-primary-color);\n}\n\np{\n    font-size: var(--font-size-small);\n    color: var(--text-secondary-color);\n}\n\na {\n    color: var(--accent-color);\n  }\n/* Modal styling */\n\n.modal-container{\n    visibility: hidden;\n    position: absolute;\n}\n\n.modal {\n    border: none;\n    border-radius: 8px;\n    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);\n    padding: 20px;\n    width: 400px;\n    max-width: 90%;\n    background: #fff;\n    font-size: 16px;\n   \n}\n\n/* Modal heading */\n.modal h2 {\n    margin-top: 0;\n    font-size: 1.5rem;\n    color: #333;\n    text-align: center;\n    border-bottom: 1px solid #ddd;\n    padding-bottom: 10px;\n    margin-bottom: 20px;\n}\n\n/* Form row styles */\n.form-row {\n    margin-bottom: 15px;\n}\n\n.form-row label {\n    display: block;\n    font-weight: bold;\n    margin-bottom: 5px;\n    color: #555;\n}\n\n.form-row input,\n.form-row select {\n    width: 100%;\n    padding: 8px;\n    font-size: 14px;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    transition: border-color 0.2s;\n}\n\n.form-row input:focus,\n.form-row select:focus {\n    outline: none;\n    border-color: #007bff;\n}\n\n/* Modal buttons */\n.modal-btns {\n    display: flex;\n    justify-content: space-between;\n    margin-top: 20px;\n}\n\n.modal-btns .add-btn,\n.modal-btns .close-btn {\n    padding: 10px 20px;\n    border: none;\n    border-radius: 4px;\n    cursor: pointer;\n    font-size: 14px;\n    font-weight: bold;\n    transition: background-color 0.3s;\n}\n\n.modal-btns .add-btn {\n    background-color: #007bff;\n    color: #fff;\n}\n\n.modal-btns .add-btn:hover {\n    background-color: #0056b3;\n}\n\n.modal-btns .close-btn {\n    background-color: #f44336;\n    color: #fff;\n}\n\n.modal-btns .close-btn:hover {\n    background-color: #c72c2c;\n}\n\n/* Modal - End*/\n/*------------------------------------------------------------*/\n/*------------------------------------------------------------*/\n/* SideBar - Start*/\n.sidebar{\n    grid-column: 1/2;\n    grid-row:1/3; \n    background-color: var(--background-color);\n    padding: 0px var(--large-padding);\n    gap: var(--large-padding);\n    display: grid;\n    grid-template-rows: 4.25rem 1fr;\n    font-size: var(--font-size-small);\n    /*border-right: 1px solid var(--text-primary-color);*/\n}\n\n.sidebar-header{\n   grid-row: 1/2;\n    \n}\n\n.nav{\n    grid-row: 2/3;\n    display: flex;\n    flex-direction: column;\n    gap: var(--large-padding);\n}\n\n.sidebar button, .task button{\n    padding:0;\n    border: none;\n    background: none;\n    width:100%;\n    text-align: left;\n    color: var(--text-primary-color);\n    border-radius: 0.5em;\n    padding: 0.2em;\n    transition: background-color 0.3s;\n}\n\n.highlight * {\n    fill:var(--accent-color);\n    color:var(--accent-color);\n}\n.sidebar button:hover {\n    background:#90bacf18;\n}\n\n.sidebar button:focus * {\n    fill:var(--accent-color);\n    color:var(--accent-color);\n}\n\n\n.sidebar svg{\n    fill: white;\n    width: 1.75em;\n    height:auto;\n    \n}\n.sidebar svg path{\n    stroke-width: 0px;\n}\n\n\n/* SideBar - End*/\n/*------------------------------------------------------------*/\n/* Content- Start*/\n\n.page{\n    grid-row:1/3;\n    grid-column:2/3;\n    display: grid;\n    grid-template-rows: 4.25rem 1fr;\n    grid-template-columns: 1fr clamp( 8rem, 30%, 20rem);\n    padding-left: 5rem;\n    row-gap: var(--large-padding);\n    background-color: var(--card-background);\n}\n\n.page-nav{\n    grid-column:1/2;\n    grid-row:1/2;\n}\n\n.page-body{\n    grid-column:1/2;\n    grid-row:2/3;\n    display:flex;\n    flex-direction: column;\n    row-gap: var(--medium-padding);\n    \n}\n\n\n.page-header{\n    /*grid-column:1/2;\n    grid-row:2/3;\n    display:flex;\n    align-items: flex-start;*/\n    \n}\n\n.content{\n    grid-row:2/3;\n    grid-column:1/2;\n    display:flex;\n    flex-direction: column;\n    color: var(--text-primary-color);\n}\n\n.task{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-bottom: var(--small-padding);\n    color: var(--text-primary-color);\n}\n\n.task img{\n    filter:invert(1);\n    width: 1em;\n    height:auto;\n}\n\n\n/*------------------------------------------------------------*/\n/* Utility- Start*/\n.column-flex{\n    display: flex;\n    flex-direction: column;\n    gap: 1.2rem;\n}\n\n.row-flex{\n    display:flex;\n    align-items: center;\n    gap: var(--small-padding);\n}\n\n.row-flex.start-end{\n    justify-content: space-between;\n}\n\n.row-flex.wide, .column-flex.wide {\n    gap: var(--large-padding);\n}\n\n.row-flex.small, .column-flex.small{\n    gap: var(--tiny-padding);\n}\n\n.underline {\n    position: relative;\n}\n\n.underline::after {\n    content: '';\n    position: absolute;\n    left: 0;\n    bottom: 0; /* Position it at the bottom */\n    width: 100%;\n    height: 1px; /* Thickness of the underline */\n    background-color: var(--text-secondary-color); /* Color of the underline */\n    opacity: 0.5;\n}\n\n\ninput[type="checkbox"] {\n    appearance: none;\n    -webkit-appearance: none;\n    display: flex;\n    align-content: center;\n    justify-content: center;\n    font-size: 2rem;\n    border: 0.15rem solid var(--text-secondary-color);\n    border-radius: var(--font-size-main);;\n}\n  \ninput[type="checkbox"]::before {\n    content: "";\n    width: 1.5rem;\n    height: 1.5rem;\n    clip-path: circle(50% at 50% 50%);\n    transform: scale(0);\n    background-color: var(--accent-color);\n    opacity: 20%;\n}\n\ninput[type="checkbox"]:checked{\n    border-color: var(--accent-color);\n}\n\ninput[type="checkbox"]:checked::before {\n    transform: scale(1);\n}\n\n\n\n\n  \n  \n\n\n\n`,"",{version:3,sources:["webpack://./src/styles.css"],names:[],mappings:"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",sourcesContent:['/* CSS Reset - Start*/\n@font-face{\n    font-family: Roboto;\n    src: url(../src/resources/font_library/roboto-regular-webfont.woff2);\n}\n\n*{\n    box-sizing: border-box;\n}\n\n:root {\n    line-height: 1.5;\n    --background-color: #121212;\n    --text-primary-color: #ffffff;\n    --text-secondary-color: #b3b3b3;\n    --selected-color: #5851db;\n    --hover-color: #7270f5;\n    --accent-color: #A2EDFC;\n    --card-background: #1e1e1e;\n    --border-color: #333333;\n    \n    --fw-thin: 100;\n    --fw-regular: 500;\n    --fw-bold: 600;\n    --fw-black: 700;\n\n    --font-size-small: 1.2rem;\n    --font-size-main: 1.5rem;\n    --font-size-large: 2.2rem;\n    --font-size-header: 2.6rem;\n    \n    --tiny-padding: 0.7rem;\n    --small-padding: 1rem;  \n    --medium-padding: 1.5rem;  \n    --large-padding: 2.25rem;   \n    --Xl-padding: 5rem;\n}\n\n\nh1, h2, h3, h4, h5, figure, p, ol, ul {\n    margin: 0;\n    padding: 0;\n}\n\np{\n    font-size: var(--font-size-small);\n    font-weight: var(--fw-thin);\n    opacity: 0.6;\n}\n\n\nol[role="list"], ul[role="list"] {\n    list-style: none;\n    padding-inline: 0;\n}\n\nli{\n    list-style: none;\n}\n\nh1, h2, h3, h4, h5 {\n    font-size: inherit;\n    font-weight: inherit;\n}\n\nimg {\n    display: block;\n    max-inline-size: 100%;\n}\n\nbutton,\ninput,\nselect,\ntextarea {\n    font-family: inherit;\n    font-size: 100%;\n}\n\na:hover, button:hover, input[type="checkbox"]{\n    cursor: pointer; \n}\n\n/* CSS reset - end */\n/*------------------------------------------------------------*/\n/* Global - start */\nbody{\n    margin: 0;\n    padding: 0;\n    font-family: Roboto, sans-serif;\n    font-size: var(--font-size-main);\n    font-weight: var(--fw-regular);\n    height: 100vh;\n    width: 100vw;\n    background-color: var(--background-color); \n    color: var(--color-text-main);\n    display: grid;\n    grid-template-columns: 18.75rem 1fr;\n}\n\nh1{\n    font-size: var(--font-size-header);\n    font-weight: var(--fw-black);\n    color: var(--text-primary-color);\n}\n\nh2{\n    font-size: var(--font-size-large);\n    font-weight: var(--fw-bold);\n    color: var(--text-primary-color);\n}\n\nh3{\n    font-size: var(--font-size-small);\n    font-weight: var(--fw-regular);\n    color: var(--text-primary-color);\n}\n\np{\n    font-size: var(--font-size-small);\n    color: var(--text-secondary-color);\n}\n\na {\n    color: var(--accent-color);\n  }\n/* Modal styling */\n\n.modal-container{\n    visibility: hidden;\n    position: absolute;\n}\n\n.modal {\n    border: none;\n    border-radius: 8px;\n    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);\n    padding: 20px;\n    width: 400px;\n    max-width: 90%;\n    background: #fff;\n    font-size: 16px;\n   \n}\n\n/* Modal heading */\n.modal h2 {\n    margin-top: 0;\n    font-size: 1.5rem;\n    color: #333;\n    text-align: center;\n    border-bottom: 1px solid #ddd;\n    padding-bottom: 10px;\n    margin-bottom: 20px;\n}\n\n/* Form row styles */\n.form-row {\n    margin-bottom: 15px;\n}\n\n.form-row label {\n    display: block;\n    font-weight: bold;\n    margin-bottom: 5px;\n    color: #555;\n}\n\n.form-row input,\n.form-row select {\n    width: 100%;\n    padding: 8px;\n    font-size: 14px;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    transition: border-color 0.2s;\n}\n\n.form-row input:focus,\n.form-row select:focus {\n    outline: none;\n    border-color: #007bff;\n}\n\n/* Modal buttons */\n.modal-btns {\n    display: flex;\n    justify-content: space-between;\n    margin-top: 20px;\n}\n\n.modal-btns .add-btn,\n.modal-btns .close-btn {\n    padding: 10px 20px;\n    border: none;\n    border-radius: 4px;\n    cursor: pointer;\n    font-size: 14px;\n    font-weight: bold;\n    transition: background-color 0.3s;\n}\n\n.modal-btns .add-btn {\n    background-color: #007bff;\n    color: #fff;\n}\n\n.modal-btns .add-btn:hover {\n    background-color: #0056b3;\n}\n\n.modal-btns .close-btn {\n    background-color: #f44336;\n    color: #fff;\n}\n\n.modal-btns .close-btn:hover {\n    background-color: #c72c2c;\n}\n\n/* Modal - End*/\n/*------------------------------------------------------------*/\n/*------------------------------------------------------------*/\n/* SideBar - Start*/\n.sidebar{\n    grid-column: 1/2;\n    grid-row:1/3; \n    background-color: var(--background-color);\n    padding: 0px var(--large-padding);\n    gap: var(--large-padding);\n    display: grid;\n    grid-template-rows: 4.25rem 1fr;\n    font-size: var(--font-size-small);\n    /*border-right: 1px solid var(--text-primary-color);*/\n}\n\n.sidebar-header{\n   grid-row: 1/2;\n    \n}\n\n.nav{\n    grid-row: 2/3;\n    display: flex;\n    flex-direction: column;\n    gap: var(--large-padding);\n}\n\n.sidebar button, .task button{\n    padding:0;\n    border: none;\n    background: none;\n    width:100%;\n    text-align: left;\n    color: var(--text-primary-color);\n    border-radius: 0.5em;\n    padding: 0.2em;\n    transition: background-color 0.3s;\n}\n\n.highlight * {\n    fill:var(--accent-color);\n    color:var(--accent-color);\n}\n.sidebar button:hover {\n    background:#90bacf18;\n}\n\n.sidebar button:focus * {\n    fill:var(--accent-color);\n    color:var(--accent-color);\n}\n\n\n.sidebar svg{\n    fill: white;\n    width: 1.75em;\n    height:auto;\n    \n}\n.sidebar svg path{\n    stroke-width: 0px;\n}\n\n\n/* SideBar - End*/\n/*------------------------------------------------------------*/\n/* Content- Start*/\n\n.page{\n    grid-row:1/3;\n    grid-column:2/3;\n    display: grid;\n    grid-template-rows: 4.25rem 1fr;\n    grid-template-columns: 1fr clamp( 8rem, 30%, 20rem);\n    padding-left: 5rem;\n    row-gap: var(--large-padding);\n    background-color: var(--card-background);\n}\n\n.page-nav{\n    grid-column:1/2;\n    grid-row:1/2;\n}\n\n.page-body{\n    grid-column:1/2;\n    grid-row:2/3;\n    display:flex;\n    flex-direction: column;\n    row-gap: var(--medium-padding);\n    \n}\n\n\n.page-header{\n    /*grid-column:1/2;\n    grid-row:2/3;\n    display:flex;\n    align-items: flex-start;*/\n    \n}\n\n.content{\n    grid-row:2/3;\n    grid-column:1/2;\n    display:flex;\n    flex-direction: column;\n    color: var(--text-primary-color);\n}\n\n.task{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-bottom: var(--small-padding);\n    color: var(--text-primary-color);\n}\n\n.task img{\n    filter:invert(1);\n    width: 1em;\n    height:auto;\n}\n\n\n/*------------------------------------------------------------*/\n/* Utility- Start*/\n.column-flex{\n    display: flex;\n    flex-direction: column;\n    gap: 1.2rem;\n}\n\n.row-flex{\n    display:flex;\n    align-items: center;\n    gap: var(--small-padding);\n}\n\n.row-flex.start-end{\n    justify-content: space-between;\n}\n\n.row-flex.wide, .column-flex.wide {\n    gap: var(--large-padding);\n}\n\n.row-flex.small, .column-flex.small{\n    gap: var(--tiny-padding);\n}\n\n.underline {\n    position: relative;\n}\n\n.underline::after {\n    content: \'\';\n    position: absolute;\n    left: 0;\n    bottom: 0; /* Position it at the bottom */\n    width: 100%;\n    height: 1px; /* Thickness of the underline */\n    background-color: var(--text-secondary-color); /* Color of the underline */\n    opacity: 0.5;\n}\n\n\ninput[type="checkbox"] {\n    appearance: none;\n    -webkit-appearance: none;\n    display: flex;\n    align-content: center;\n    justify-content: center;\n    font-size: 2rem;\n    border: 0.15rem solid var(--text-secondary-color);\n    border-radius: var(--font-size-main);;\n}\n  \ninput[type="checkbox"]::before {\n    content: "";\n    width: 1.5rem;\n    height: 1.5rem;\n    clip-path: circle(50% at 50% 50%);\n    transform: scale(0);\n    background-color: var(--accent-color);\n    opacity: 20%;\n}\n\ninput[type="checkbox"]:checked{\n    border-color: var(--accent-color);\n}\n\ninput[type="checkbox"]:checked::before {\n    transform: scale(1);\n}\n\n\n\n\n  \n  \n\n\n\n'],sourceRoot:""}]);const u=l},314:n=>{"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var A=0;A<this.length;A++){var c=this[A][0];null!=c&&(i[c]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},417:n=>{"use strict";n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},354:n=>{"use strict";n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),a="/*# ".concat(r," */");return[e].concat([a]).join("\n")}return[e].join("\n")}},72:n=>{"use strict";var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],A=0;A<n.length;A++){var c=n[A],s=o.base?c[0]+o.base:c[0],l=a[s]||0,d="".concat(s," ").concat(l);a[s]=l+1;var u=t(d),g={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(g);else{var p=r(g,o);o.byIndex=A,e.splice(A,0,{identifier:d,updater:p,references:1})}i.push(d)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var A=t(a[i]);e[A].references--}for(var c=o(n,r),s=0;s<a.length;s++){var l=t(a[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=c}}},659:n=>{"use strict";var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{"use strict";n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{"use strict";n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{"use strict";n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{"use strict";n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},91:()=>{document.getElementById("taskModal"),document.getElementById("projectModal"),document.querySelector("#taskModal form"),document.querySelector("#projectModal form"),document.querySelector("#taskModal .add-btn"),document.querySelector("#projectModal .add-btn"),document.querySelectorAll(".close-btn"),document.querySelector(".taskBtn"),document.querySelector(".projectBtn"),document.querySelector(".today"),document.querySelector(".content"),document.querySelector(".upcoming"),document.querySelector(".allTask"),document.querySelector(".completed")},832:(n,e,t)=>{"use strict";n.exports=t.p+"3d74926d9f380c7bb7d7.woff2"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&"SCRIPT"===e.currentScript.tagName.toUpperCase()&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!n||!/^http(s?):/.test(n));)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{"use strict";var n=t(72),e=t.n(n),o=t(825),r=t.n(o),a=t(659),i=t.n(a),A=t(56),c=t.n(A),s=t(540),l=t.n(s),d=t(113),u=t.n(d),g=t(365),p={};p.styleTagTransform=u(),p.setAttributes=c(),p.insert=i().bind(null,"head"),p.domAPI=r(),p.insertStyleElement=l(),e()(g.A,p),g.A&&g.A.locals&&g.A.locals,t(91);class f{static idCounter=0;constructor(n){this.name=n,this.id=++f.idCounter,this.tasks=new Map}getId(){return this.id}getTasks(){return Array.from(this.tasks.values())}addTask(n){console.log(typeof tasks),this.tasks.set(n.getId(),n)}removeTask(n){this.tasks.delete(n)}getTask(n){return this.tasks.get(n)}static fromJSON(n){const e=Object.assign(new f,n);return e.tasks=new Map(Object.entries(n.tasks)),e}}const m=new class{constructor(){this.projects=new Map,this.activeProjectId=null}addProject(n){if(n)return this.projects.set(n.getId(),n),n;console.log(`Project ${n} cannot be added.`)}removeProject(n){this.getProject(n)?this.projects.delete(n):console.log(`Project with ID ${n} cannot be removed.`)}getAllProjects(){return Array.from(this.projects.values())}getProject(n){const e=this.projects.get(n);if(e)return e;console.log(`Project with ID ${n} not found.`)}};function C(){return console.log(`Project with ID ${m.activeProjectId} is currently active.`),m.getProject(m.activeProjectId)}function B(n){m.getProject(n)&&(m.activeProjectId=n),console.log(`Project with ID ${m.activeProjectId} is now active.`)}class h{static events={};static subscribe(n,e){this.events[n]||(this.events[n]=[]),this.events[n].push(e)}static unsubscribe(n,e){this.events[n]&&(this.events[n]=this.events[n].filter((n=>n!==e)))}static publish(n,...e){this.events[n]&&0!==this.events[n].length&&this.events[n].forEach((n=>n(...e)))}}Math.pow(10,8);const I=Symbol.for("constructDateFrom");function b(n,e){return"function"==typeof n?n(e):n&&"object"==typeof n&&I in n?n[I](e):n instanceof Date?new n.constructor(e):new Date(e)}function v(n,e){return b(e||n,n)}function y(n){return function(n,e){const t=v(n,e?.in);return t.setHours(0,0,0,0),t}(Date.now(),n)}class k{static idCounter=0;constructor(n,e,t,o,r){this.name=n,this.id=++k.idCounter,this.projectId=t,this.desc=e,this.dueDate=o?new Date(o):null,this.priority=r,this.isComplete=!1}getId(){return this.id}getProjectId(){return this.projectId}getIsComplete(){return this.isComplete}toggleComplete(){this.isComplete=!this.isComplete,console.log(`Task ${this.id} marked ${this.isComplete}.`)}checkOverdue(){return n=new Date(this.getDate()),e=new Date,+v(n)<+v(e);var n,e}static fromJSON(n){return Object.assign(new k,n)}}class x{static activePage=null;static pageConfigs={};static init(n){this.pageConfigs=n}static addToPageConfigs(n,e){this.pageConfigs[n+""]=e}static getActivePage(){if(this.pageConfigs[this.activePage])return console.log(`Current page is ${this.activePage}.`),this.activePage;console.log("Page does not exist!")}static selectPage(n){if(this.pageConfigs[n])return this.activePage=n,void console.log(`Page ${n} is selected.`);console.log(`Page ${n} does not exist!`)}static runActivePage(){if(this.pageConfigs[this.activePage])return console.log(`Page ${this.activePage} is running.`),void this.pageConfigs[this.activePage]();console.log(`Page ${this.activePage} cannot be run!`)}}function w(n,e){n.textContent="",e.forEach((e=>{const t=document.createElement("li"),o=document.createElement("button");o.setAttribute("type","button"),o.classList.add("project","row-flex"),o.id=e.getId();const r="http://www.w3.org/2000/svg",a=document.createElementNS(r,"svg");a.setAttribute("xmlns",r),a.setAttribute("viewBox","0 0 24 24");const i=document.createElementNS(r,"path");i.setAttribute("d","M20,18H4V8H20M20,6H12L10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6Z"),a.appendChild(i);const A=document.createElement("h3");A.textContent=e.name;const c=document.createElement("span");c.textContent=`(${e.getTasks().length})`,o.appendChild(a),o.appendChild(A),o.appendChild(c),t.appendChild(o),n.appendChild(t),h.publish("DOMprojectload",e,o)}))}t.p;const E=t.p+"27178b4697c8fe649bcd.svg",j=t.p+"3ea4cf483224d228ffe4.svg";function S(n,e){const t=document.querySelector(".content");!function(n,e){n.textContent="";const t=document.createElement("h2");t.classList.add("header"),t.textContent=e,n.appendChild(t)}(document.querySelector(".page-header"),n),function(n,e){n.textContent="",e.forEach((e=>{const t=document.createElement("div");t.classList.add("task","row-flex","wide","underline"),t.id=e.getId();const o=document.createElement("div");o.classList.add("row-flex");const r=document.createElement("input");r.setAttribute("type","checkbox"),r.setAttribute("name",`task${e.getId()}-checkbox`),r.classList.add("checkbox","UIElement"),r.id=`task${e.getId()}-checkbox`,r.checked=e.getIsComplete();const a=document.createElement("span");a.textContent=e.name,o.appendChild(r),o.appendChild(a);const i=document.createElement("div");i.classList.add("row-flex");for(let n=0;n<1;n++){const t=document.createElement("button");t.setAttribute("type","button"),t.classList.add("utility","UIElement","row-flex"),t.id=`task${e.getId()}-utility${n}`;const o=document.createElement("img");o.src=j,t.appendChild(o),i.appendChild(t)}for(let n=1;n<2;n++){const t=document.createElement("button");t.setAttribute("type","button"),t.classList.add("utility","UIElement","row-flex"),t.id=`task${e.getId()}-utility${n}`;const o=document.createElement("img");o.src=E,t.appendChild(o),i.appendChild(t)}t.appendChild(o),t.appendChild(i),n.appendChild(t),h.publish("DOMtaskload",e)}))}(t,e)}function z(){const n=document.querySelector(".taskModal"),e=document.querySelector(".taskModal form");n.close(),e.reset()}function P(){const n=document.querySelector(".projectModal"),e=document.querySelector(".projectModal form");n.close(),e.reset()}function D(n){x.selectPage(n),x.runActivePage()}function T(n,e){e?localStorage.setItem(n,JSON.stringify(e)):console.log("Invalid item")}function M(n){return JSON.parse(localStorage.getItem(n))}const q=new class{constructor(n){this.projectManager=n}addTask(n){const e=C();e?e.addTask(n):console.log(`Project with ID ${n.getProjectId()} not found.`)}removeTask(n){for(const e of this.projectManager.getAllProjects())if(e.getTask(n))return void e.removeTask(n);console.log(`Task with ID ${n} not found.`)}getTask(n){for(const e of this.projectManager.getAllProjects()){const t=e.getTask(n);if(t)return t}return null}getAllTasks(){const n=[];for(const e of this.projectManager.getAllProjects())n.push(...e.getTasks());return n}getTasksByProject(n){const e=this.projectManager.getProject(n);return e?e.getTasks():[]}getTasksDueWithinDays(n){const e=this.getAllTasks(),t=y(),o=function(n,e,t){const o=v(n,t?.in);return isNaN(e)?b(t?.in||n,NaN):e?(o.setDate(o.getDate()+e),o):o}(t,n);return e.filter((n=>function(n,e,t){const o=+v(n,t?.in),[r,a]=[+v(e.start,t?.in),+v(e.end,t?.in)].sort(((n,e)=>n-e));return o>=r&&o<=a}(new Date(n.dueDate),{start:t,end:o})))}getCompletedTasks(){return this.getAllTasks().filter((n=>n.getIsComplete()))}}(m);!function(n,e){document.addEventListener("DOMContentLoaded",(()=>{!function(n,e){if(function(){let n;try{n=window.localStorage;const e="__storage_test__";return n.setItem(e,e),n.removeItem(e),!0}catch(e){return e instanceof DOMException&&"QuotaExceededError"===e.name&&n&&0!==n.length}}()){console.log("localStorage API loaded.");const t=M("projects"),o=M("tasks");0===t.length?B(new f("My Tasks").getId()):t.forEach((e=>{const t=f.fromJSON(e);n.addProject(t),o.forEach((n=>{const e=k.fromJSON(n);e.projectId===t.getId()&&t.addTask(e)}))})),h.subscribe("DOMprojectload",((n,e)=>{!function(n,e){x.addToPageConfigs(n.getId(),(()=>{B(n.getId()),S(n.name,n.getTasks())})),e.addEventListener("click",(n=>{D(n.currentTarget.id)}))}(n,e)})),h.subscribe("DOMtaskload",(t=>{!function(n,e,t){document.querySelectorAll(".task .UIElement").forEach((o=>{o.addEventListener("click",(o=>{if(o.currentTarget.id===`task${n.getId()}-checkbox`)n.toggleComplete();else if(o.currentTarget.id===`task${n.getId()}-utility0`);else if(o.currentTarget.id===`task${n.getId()}-utility1`){const o=t.getAllProjects();e.removeTask(n.getId()),w(document.querySelector(".project-list"),o)}x.runActivePage(),T("tasks",e.getAllTasks())}))}))}(t,e,n)})),function(n){const e=document.getElementById("today"),t=document.getElementById("upcoming"),o=document.getElementById("allTask"),r=document.getElementById("completed");document.querySelector(".content"),x.init({[e.id]:()=>{S(e.textContent,n.getTasksDueWithinDays(1))},[t.id]:()=>{S(t.textContent,n.getTasksDueWithinDays(7))},[o.id]:()=>{S(o.textContent,n.getAllTasks())},[r.id]:()=>{S(r.textContent,n.getCompletedTasks())}})}(e)}else console.log("localStorage API loaded not found");const t=document.querySelector(".project-list"),o=n.getAllProjects();w(t,o),T("projects",o)}(n,e)})),document.querySelector(".addproject").addEventListener("click",(()=>{document.querySelector(".projectModal").showModal()})),document.querySelector(".projectModal .close-btn").addEventListener("click",(()=>{P()})),document.querySelector(".projectModal .add-btn").addEventListener("click",(e=>{e.preventDefault(),function(n){const e=document.querySelector(".projectModal form").elements.title.value,t=new f(e);n.addProject(t);const o=document.querySelector(".project-list"),r=n.getAllProjects();w(o,r),T(r),P()}(n)})),document.querySelector(".addtask").addEventListener("click",(()=>{!function(){const n=document.querySelector(".taskModal");document.querySelector(".taskModal h2").textContent="Add Task",n.showModal()}()})),document.querySelector(".taskModal .close-btn").addEventListener("click",(()=>{z()})),document.querySelector(".taskModal .add-btn").addEventListener("click",(t=>{t.preventDefault(),function(n,e){const t=document.querySelector(".taskModal form"),o=t.elements.title.value,r=t.elements.desc.value,a=t.elements.dueDate.value,i=t.elements.priority.value,A=new k(o,r,C().getId(),a,i);e.addTask(A);const c=document.querySelector(".project-list"),s=n.getAllProjects(),l=e.getAllTasks();x.runActivePage(),w(c,s),T("projects",s),T("tasks",l),z()}(n,e)})),document.querySelectorAll(".sidebar button").forEach((n=>{n.addEventListener("click",(n=>{D(n.currentTarget.id)}))}))}(m,q)})()})();
//# sourceMappingURL=main.js.map