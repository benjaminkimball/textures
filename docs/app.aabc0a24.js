parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"aSor":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.render=L,exports.hydrate=M,exports.h=exports.createElement=f,exports.Fragment=h,exports.createRef=d,exports.Component=v,exports.cloneElement=A,exports.createContext=F,exports.toChildArray=b,exports._unmount=T,exports.options=exports.isValidElement=void 0;var e,t,n,l,o,r,_,u={},i=[],s=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;function c(e,t){for(var n in t)e[n]=t[n];return e}function p(e){var t=e.parentNode;t&&t.removeChild(e)}function f(e,t,n){var l,o,r,_,u=arguments;if(t=c({},t),arguments.length>3)for(n=[n],l=3;l<arguments.length;l++)n.push(u[l]);if(null!=n&&(t.children=n),null!=e&&null!=e.defaultProps)for(o in e.defaultProps)void 0===t[o]&&(t[o]=e.defaultProps[o]);return _=t.key,null!=(r=t.ref)&&delete t.ref,null!=_&&delete t.key,a(e,t,_,r)}function a(t,n,l,o){var r={type:t,props:n,key:l,ref:o,__k:null,__:null,__b:0,__e:null,__d:null,__c:null,constructor:void 0};return e.vnode&&e.vnode(r),r}function d(){return{}}function h(e){return e.children}function v(e,t){this.props=e,this.context=t}function y(e,t){if(null==t)return e.__?y(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?y(e):null}function m(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return m(e)}}function g(t){(!t.__d&&(t.__d=!0)&&1===n.push(t)||o!==e.debounceRendering)&&((o=e.debounceRendering)||l)(k)}function k(){var e,t,l,o,r,_,u;for(n.sort(function(e,t){return t.__v.__b-e.__v.__b});e=n.pop();)e.__d&&(l=void 0,o=void 0,_=(r=(t=e).__v).__e,(u=t.__P)&&(l=[],o=E(u,r,c({},r),t.__n,void 0!==u.ownerSVGElement,null,l,null==_?y(r):_),U(l,r),o!=_&&m(r)))}function x(e,t,n,l,o,r,_,s,c){var f,a,d,h,v,m,g,k=n&&n.__k||i,x=k.length;if(s==u&&(s=null!=r?r[0]:x?y(n,0):null),f=0,t.__k=b(t.__k,function(n){if(null!=n){if(n.__=t,n.__b=t.__b+1,null===(d=k[f])||d&&n.key==d.key&&n.type===d.type)k[f]=void 0;else for(a=0;a<x;a++){if((d=k[a])&&n.key==d.key&&n.type===d.type){k[a]=void 0;break}d=null}if(h=E(e,n,d=d||u,l,o,r,_,s,c),(a=n.ref)&&d.ref!=a&&(g||(g=[]),d.ref&&g.push(d.ref,null,n),g.push(a,n.__c||h,n)),null!=h){if(null==m&&(m=h),null!=n.__d)h=n.__d,n.__d=null;else if(r==d||h!=s||null==h.parentNode){e:if(null==s||s.parentNode!==e)e.appendChild(h);else{for(v=s,a=0;(v=v.nextSibling)&&a<x;a+=2)if(v==h)break e;e.insertBefore(h,s)}"option"==t.type&&(e.value="")}s=h.nextSibling,"function"==typeof t.type&&(t.__d=h)}}return f++,n}),t.__e=m,null!=r&&"function"!=typeof t.type)for(f=r.length;f--;)null!=r[f]&&p(r[f]);for(f=x;f--;)null!=k[f]&&T(k[f],k[f]);if(g)for(f=0;f<g.length;f++)D(g[f],g[++f],g[++f])}function b(e,t,n){if(null==n&&(n=[]),null==e||"boolean"==typeof e)t&&n.push(t(null));else if(Array.isArray(e))for(var l=0;l<e.length;l++)b(e[l],t,n);else n.push(t?t("string"==typeof e||"number"==typeof e?a(null,e,null,null):null!=e.__e||null!=e.__c?a(e.type,e.props,e.key,null):e):e);return n}function C(e,t,n,l,o){var r;for(r in n)r in t||S(e,r,null,n[r],l);for(r in t)o&&"function"!=typeof t[r]||"value"===r||"checked"===r||n[r]===t[r]||S(e,r,t[r],n[r],l)}function w(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]="number"==typeof n&&!1===s.test(t)?n+"px":null==n?"":n}function S(e,t,n,l,o){var r,_,u,i,s;if(o?"className"===t&&(t="class"):"class"===t&&(t="className"),"key"===t||"children"===t);else if("style"===t)if(r=e.style,"string"==typeof n)r.cssText=n;else{if("string"==typeof l&&(r.cssText="",l=null),l)for(_ in l)n&&_ in n||w(r,_,"");if(n)for(u in n)l&&n[u]===l[u]||w(r,u,n[u])}else"o"===t[0]&&"n"===t[1]?(i=t!==(t=t.replace(/Capture$/,"")),s=t.toLowerCase(),t=(s in e?s:t).slice(2),n?(l||e.addEventListener(t,P,i),(e.l||(e.l={}))[t]=n):e.removeEventListener(t,P,i)):"list"!==t&&"tagName"!==t&&"form"!==t&&!o&&t in e?e[t]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==t&&(t!==(t=t.replace(/^xlink:?/,""))?null==n||!1===n?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),n):null==n||!1===n?e.removeAttribute(t):e.setAttribute(t,n))}function P(t){this.l[t.type](e.event?e.event(t):t)}function E(t,n,l,o,r,_,u,i,s){var p,f,a,d,y,m,g,k,C,w,S=n.type;if(void 0!==n.constructor)return null;(p=e.__b)&&p(n);try{e:if("function"==typeof S){if(k=n.props,C=(p=S.contextType)&&o[p.__c],w=p?C?C.props.value:p.__:o,l.__c?g=(f=n.__c=l.__c).__=f.__E:("prototype"in S&&S.prototype.render?n.__c=f=new S(k,w):(n.__c=f=new v(k,w),f.constructor=S,f.render=W),C&&C.sub(f),f.props=k,f.state||(f.state={}),f.context=w,f.__n=o,a=f.__d=!0,f.__h=[]),null==f.__s&&(f.__s=f.state),null!=S.getDerivedStateFromProps&&(f.__s==f.state&&(f.__s=c({},f.__s)),c(f.__s,S.getDerivedStateFromProps(k,f.__s))),d=f.props,y=f.state,a)null==S.getDerivedStateFromProps&&null!=f.componentWillMount&&f.componentWillMount(),null!=f.componentDidMount&&f.__h.push(f.componentDidMount);else{if(null==S.getDerivedStateFromProps&&null==f.__e&&null!=f.componentWillReceiveProps&&f.componentWillReceiveProps(k,w),!f.__e&&null!=f.shouldComponentUpdate&&!1===f.shouldComponentUpdate(k,f.__s,w)){for(f.props=k,f.state=f.__s,f.__d=!1,f.__v=n,n.__e=l.__e,n.__k=l.__k,f.__h.length&&u.push(f),p=0;p<n.__k.length;p++)n.__k[p]&&(n.__k[p].__=n);break e}null!=f.componentWillUpdate&&f.componentWillUpdate(k,f.__s,w),null!=f.componentDidUpdate&&f.__h.push(function(){f.componentDidUpdate(d,y,m)})}f.context=w,f.props=k,f.state=f.__s,(p=e.__r)&&p(n),f.__d=!1,f.__v=n,f.__P=t,p=f.render(f.props,f.state,f.context),n.__k=b(null!=p&&p.type==h&&null==p.key?p.props.children:p),null!=f.getChildContext&&(o=c(c({},o),f.getChildContext())),a||null==f.getSnapshotBeforeUpdate||(m=f.getSnapshotBeforeUpdate(d,y)),x(t,n,l,o,r,_,u,i,s),f.base=n.__e,f.__h.length&&u.push(f),g&&(f.__E=f.__=null),f.__e=null}else n.__e=N(l.__e,n,l,o,r,_,u,s);(p=e.diffed)&&p(n)}catch(t){e.__e(t,n,l)}return n.__e}function U(t,n){e.__c&&e.__c(n,t),t.some(function(n){try{t=n.__h,n.__h=[],t.some(function(e){e.call(n)})}catch(t){e.__e(t,n.__v)}})}function N(e,t,n,l,o,r,_,s){var c,p,f,a,d,h=n.props,v=t.props;if(o="svg"===t.type||o,null==e&&null!=r)for(c=0;c<r.length;c++)if(null!=(p=r[c])&&(null===t.type?3===p.nodeType:p.localName===t.type)){e=p,r[c]=null;break}if(null==e){if(null===t.type)return document.createTextNode(v);e=o?document.createElementNS("http://www.w3.org/2000/svg",t.type):document.createElement(t.type),r=null}if(null===t.type)null!=r&&(r[r.indexOf(e)]=null),h!==v&&(e.data=v);else if(t!==n){if(null!=r&&(r=i.slice.call(e.childNodes)),f=(h=n.props||u).dangerouslySetInnerHTML,a=v.dangerouslySetInnerHTML,!s){if(h===u)for(h={},d=0;d<e.attributes.length;d++)h[e.attributes[d].name]=e.attributes[d].value;(a||f)&&(a&&f&&a.__html==f.__html||(e.innerHTML=a&&a.__html||""))}C(e,v,h,o,s),t.__k=t.props.children,a||x(e,t,n,l,"foreignObject"!==t.type&&o,r,_,u,s),s||("value"in v&&void 0!==v.value&&v.value!==e.value&&(e.value=null==v.value?"":v.value),"checked"in v&&void 0!==v.checked&&v.checked!==e.checked&&(e.checked=v.checked))}return e}function D(t,n,l){try{"function"==typeof t?t(n):t.current=n}catch(t){e.__e(t,l)}}function T(t,n,l){var o,r,_;if(e.unmount&&e.unmount(t),(o=t.ref)&&D(o,null,n),l||"function"==typeof t.type||(l=null!=(r=t.__e)),t.__e=t.__d=null,null!=(o=t.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(t){e.__e(t,n)}o.base=o.__P=null}if(o=t.__k)for(_=0;_<o.length;_++)o[_]&&T(o[_],n,l);null!=r&&p(r)}function W(e,t,n){return this.constructor(e,n)}function L(t,n,l){var o,_,s;e.__&&e.__(t,n),_=(o=l===r)?null:l&&l.__k||n.__k,t=f(h,null,[t]),s=[],E(n,(o?n:l||n).__k=t,_||u,u,void 0!==n.ownerSVGElement,l&&!o?[l]:_?null:i.slice.call(n.childNodes),s,l||u,o),U(s,t)}function M(e,t){L(e,t,r)}function A(e,t){return t=c(c({},e.props),t),arguments.length>2&&(t.children=i.slice.call(arguments,2)),a(e.type,t,t.key||e.key,t.ref||e.ref)}function F(e){var t={},n={__c:"__cC"+_++,__:e,Consumer:function(e,t){return e.children(t)},Provider:function(e){var l,o=this;return this.getChildContext||(l=[],this.getChildContext=function(){return t[n.__c]=o,t},this.shouldComponentUpdate=function(t){e.value!==t.value&&l.some(function(e){e.context=t.value,g(e)})},this.sub=function(e){l.push(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){l.splice(l.indexOf(e),1),t&&t.call(e)}}),e.children}};return n.Consumer.contextType=n,n}exports.isValidElement=t,exports.options=e,exports.options=e={__e:function(e,t){for(var n;t=t.__;)if((n=t.__c)&&!n.__)try{if(n.constructor&&null!=n.constructor.getDerivedStateFromError)n.setState(n.constructor.getDerivedStateFromError(e));else{if(null==n.componentDidCatch)continue;n.componentDidCatch(e)}return g(n.__E=n)}catch(t){e=t}throw e}},exports.isValidElement=t=function(e){return null!=e&&void 0===e.constructor},v.prototype.setState=function(e,t){var n;n=this.__s!==this.state?this.__s:this.__s=c({},this.state),"function"==typeof e&&(e=e(n,this.props)),e&&c(n,e),null!=e&&this.__v&&(this.__e=!1,t&&this.__h.push(t),g(this))},v.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),g(this))},v.prototype.render=h,n=[],l="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,r=u,_=0;
},{}],"rM0O":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=require("preact");function r(t,r){return n(t)||i(t,r)||e()}function e(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function i(t,r){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var e=[],i=!0,n=!1,o=void 0;try{for(var a,l=t[Symbol.iterator]();!(i=(a=l.next()).done)&&(e.push(a.value),!r||e.length!==r);i=!0);}catch(s){n=!0,o=s}finally{try{i||null==l.return||l.return()}finally{if(n)throw o}}return e}}function n(t){if(Array.isArray(t))return t}var o=function(e){var i=e.background,n=e.complement,o=e.fill,a=e.heavier,l=e.id,s=e.lighter,c=e.radius,u=e.size,h=e.stroke,d=e.strokeWidth,f=e.thicker,p=e.thinner;return a&&(isNaN(a)?c*=2:c*=2*a),s&&(isNaN(s)?c/=2:c/=2*s),f&&(isNaN(f)?u/=2:u/=2*f),p&&(isNaN(p)?u*=2:u*=2*p),(0,t.h)("defs",null,(0,t.h)("pattern",{id:l,patternUnits:"userSpaceOnUse",width:u,height:u},i&&(0,t.h)("rect",{width:u,height:u,fill:i}),(0,t.h)("circle",{cx:u/2,cy:u/2,fill:o,r:c,stroke:h,"stroke-width":d}),n&&[[0,0],[0,u],[u,0],[u,u]].map(function(e,i){var n=r(e,2),a=n[0],l=n[1];return(0,t.h)("circle",{key:i,cx:a,cy:l,fill:o,r:c,stroke:h,"stroke-width":d})})))};o.defaultProps={complement:!1,fill:"#343434",radius:2,size:20,stroke:"#343434",strokeWidth:0};var a=o;exports.default=a;
},{"preact":"aSor"}],"NlTt":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var c=function(c,n){var t=c;switch(n){case"0/8":case"vertical":return"\n        M ".concat(t/2,",0\n        l 0,").concat(t,"\n      ");case"1/8":return"\n        M ".concat(t/4,",0\n        l ").concat(-t/2,",").concat(t,"\n        M ").concat(3*t/4,",0\n        l ").concat(-t/2,",").concat(t,"\n        M ").concat(5*t/4,",0\n        l ").concat(-t/2,",").concat(t,"\n      ");case"2/8":case"diagonal":return"\n        M 0,".concat(t,"\n        l ").concat(t,",").concat(-t,"\n        M ").concat(-t/4,",").concat(t/4,"\n        l ").concat(t/2,",").concat(-t/2,"\n        M ").concat(3*t/4,",").concat(5*t/4,"\n        l ").concat(t/2,",").concat(-t/2,"\n      ");case"3/8":return"\n        M 0,".concat(3*t/4,"\n        l ").concat(t,",").concat(-t/2,"\n        M 0,").concat(t/4,"\n        l ").concat(t,",").concat(-t/2,"\n        M 0,").concat(5*t/4,"\n        l ").concat(t,",").concat(-t/2,"\n      ");case"4/8":case"horizontal":return"\n        M 0,".concat(t/2,"\n        l ").concat(t,",0\n      ");case"5/8":return"\n        M 0,".concat(-t/4,"\n        l ").concat(t,",").concat(t/2,"\n        M 0,").concat(t/4,"\n        l ").concat(t,",").concat(t/2,"\n        M 0,").concat(3*t/4,"\n        l ").concat(t,",").concat(t/2,"\n      ");case"6/8":return"\n        M 0,0\n        l ".concat(t,",").concat(t,"\n        M ").concat(-t/4,",").concat(3*t/4,"\n        l ").concat(t/2,",").concat(t/2,"\n        M ").concat(3*t/4,",").concat(-t/4,"\n        l ").concat(t/2,",").concat(t/2,"\n      ");case"7/8":return"\n        M ".concat(-t/4,",0\n        l ").concat(t/2,",").concat(t,"\n        M ").concat(t/4,",0\n        l ").concat(t/2,",").concat(t,"\n        M ").concat(3*t/4,",0\n        l ").concat(t/2,",").concat(t,"\n      ");default:return"\n        M ".concat(t/2,",0\n        l 0,").concat(t,"\n      ")}};exports.default=c;
},{}],"eq5P":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("preact"),t=r(require("../../utils/get-lines-pattern"));function r(e){return e&&e.__esModule?e:{default:e}}var i=function(r){var i=r.background,a=r.heavier,n=r.id,s=r.lighter,o=r.orientation,d=r.shapeRendering,u=r.size,h=r.stroke,l=r.strokeWidth,p=r.thicker,c=r.thinner;return a&&(isNaN(a)?l*=2:l*=2*a),s&&(isNaN(s)?l/=2:l/=2*s),o&&!Array.isArray(o)&&(o=[o]),p&&(isNaN(p)?u/=2:u/=2*p),c&&(isNaN(c)?u*=2:u*=2*c),(0,e.h)("defs",null,(0,e.h)("pattern",{id:n,patternUnits:"userSpaceOnUse",width:u,height:u},i&&(0,e.h)("rect",{width:u,height:u,fill:i}),o.map(function(r,i){return(0,e.h)("path",{key:i,d:(0,t.default)(u,r),"shape-rendering":d,stroke:h,"stroke-linecap":"square","stroke-width":l})})))};i.defaultProps={orientation:["diagonal"],shapeRendering:"auto",size:20,stroke:"#343434",strokeWidth:2};var a=i;exports.default=a;
},{"preact":"aSor","../../utils/get-lines-pattern":"NlTt"}],"BYyY":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var c=function(c,n){var t=c;switch(n){case"caps":return"\n        M ".concat(t/4,",").concat(3*t/4,"\n        l ").concat(t/4,",").concat(-t/2,"\n        l ").concat(t/4,",").concat(t/2,"\n      ");case"crosses":return"\n        M ".concat(t/4,",").concat(t/4,"\n        l ").concat(t/2,",").concat(t/2,"\n        M ").concat(t/4,",").concat(3*t/4,"\n        l ").concat(t/2,",").concat(-t/2,"\n      ");case"hexagons":var a=Math.sqrt(3);return"\n        M ".concat(t,",0\n        l ").concat(t,",0\n        l ").concat(t/2,",").concat(t*a/2,"\n        l ").concat(-t/2,",").concat(t*a/2,"\n        l ").concat(-t,",0\n        l ").concat(-t/2,",").concat(-t*a/2,"\n        Z\n        M 0,").concat(t*a/2,"\n        l ").concat(t/2,",0\n        M ").concat(3*t,",").concat(t*a/2,"\n        l ").concat(-t/2,",0\n      ");case"nylon":return"\n        M 0,".concat(t/4,"\n        h ").concat(t/4,"\n        v ").concat(-t/4,"\n        M ").concat(3*t/4,",").concat(t,"\n        v ").concat(-t/4,"\n        h ").concat(t/4,"\n        M ").concat(t/4,",").concat(t/2,"\n        v ").concat(t/4,"\n        h ").concat(t/4,"\n        M ").concat(t/2,",").concat(t/4,"\n        h ").concat(t/4,"\n        v ").concat(t/4,"\n      ");case"squares":return"\n        M ".concat(t/4,",").concat(t/4,"\n        l ").concat(t/2,",0\n        l 0,").concat(t/2,"\n        l ").concat(-t/2,",0\n        Z\n      ");case"waves":return"\n        M 0,".concat(t/2,"\n        c ").concat(t/8,",").concat(-t/4," ").concat(3*t/8,",").concat(-t/4,", ").concat(t/2,",0\n        c ").concat(t/8,",").concat(t/4," ").concat(3*t/8,",").concat(t/4,", ").concat(t/2,",0\n        M ").concat(-t/2,",").concat(t/2,"\n        c ").concat(t/8,",").concat(t/4," ").concat(3*t/8,",").concat(t/4,", ").concat(t/2,",0\n        M ").concat(t,",").concat(t/2,"\n        c ").concat(t/8,",").concat(-t/4," ").concat(3*t/8,",").concat(-t/4,", ").concat(t/2,",0\n      ");case"woven":return"\n        M ".concat(t/4,",").concat(t/4,"\n        l ").concat(t/2,",").concat(t/2,"\n        M ").concat(3*t/4,",").concat(t/4,"\n        l ").concat(t/2,",").concat(-t/2,"\n        M ").concat(t/4,",").concat(3*t/4,"\n        l ").concat(-t/2,",").concat(t/2,"\n        M ").concat(3*t/4,",").concat(5*t/4,"\n        l ").concat(t/2,",").concat(-t/2,"\n        M ").concat(-t/4,",").concat(t/4,"\n        l ").concat(t/2,",").concat(-t/2,"\n      ");default:return"\n        M ".concat(t/4,",").concat(3*t/4,"\n        l ").concat(t/4,",").concat(-t/2,"\n        l ").concat(t/4,",").concat(t/2,"\n      ")}};exports.default=c;
},{}],"eTiG":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("preact"),t=r(require("../../utils/get-paths-pattern"));function r(e){return e&&e.__esModule?e:{default:e}}var i=function(r){var i=r.background,s=r.fill,a=r.heavier,h=r.height,n=r.id,d=r.lighter,l=r.shapeRendering,u=r.size,o=r.stroke,p=r.strokeWidth,f=r.thicker,g=r.thinner,c=r.type,k=r.width;return a&&(isNaN(a)?p*=2:p*=2*a),d&&(isNaN(d)?p/=2:p/=2*d),f&&(isNaN(f)?u/=2:u/=2*f),g&&(isNaN(g)?u*=2:u*=2*g),"hexagons"===c&&(k=3,h=Math.sqrt(k)),(0,e.h)("defs",null,(0,e.h)("pattern",{id:n,width:u*k,height:u*h,patternUnits:"userSpaceOnUse"},i&&(0,e.h)("rect",{width:u*k,height:u*h,fill:i}),(0,e.h)("path",{d:(0,t.default)(u,c),fill:s,"shape-rendering":l,stroke:o,"stroke-linecap":"square","stroke-width":p})))};i.defaultProps={fill:"transparent",height:1,shapeRendering:"auto",size:20,stroke:"#343434",strokeWidth:2,width:1};var s=i;exports.default=s;
},{"preact":"aSor","../../utils/get-paths-pattern":"BYyY"}],"ApxH":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"Circles",{enumerable:!0,get:function(){return e.default}}),Object.defineProperty(exports,"Lines",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(exports,"Paths",{enumerable:!0,get:function(){return t.default}});var e=u(require("./circles")),r=u(require("./lines")),t=u(require("./paths"));function u(e){return e&&e.__esModule?e:{default:e}}
},{"./circles":"rM0O","./lines":"eq5P","./paths":"eTiG"}],"A2T1":[function(require,module,exports) {
"use strict";var e=require("preact"),t=require("./components/textures"),r=function(){return(0,e.h)("svg",{viewBox:"0 0 300 100",width:"300",height:"100"},(0,e.h)(t.Lines,{id:"lines1",background:"white",lighter:!0,orientation:"1/8"}),(0,e.h)("circle",{cx:"25%",cy:"50%",r:"50",fill:"url(#lines1)"}),(0,e.h)(t.Circles,{id:"circles1",background:"white",lighter:!0,thicker:!0}),(0,e.h)("circle",{cx:"50%",cy:"50%",r:"50",fill:"url(#circles1)"}),(0,e.h)(t.Paths,{id:"paths1",background:"white",lighter:!0,type:"crosses"}),(0,e.h)("circle",{cx:"75%",cy:"50%",r:"50",fill:"url(#paths1)"}),(0,e.h)("text",{x:"50%",y:"65%",style:{fontSize:"54px",fontWeight:"bold"},"text-anchor":"middle"},"textures"))},i=document.getElementById("root");(0,e.render)((0,e.h)(r,null),i,i.lastChild);
},{"preact":"aSor","./components/textures":"ApxH"}]},{},["A2T1"], null)
//# sourceMappingURL=/textures/app.aabc0a24.js.map