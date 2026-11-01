(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var kf={exports:{}},ao={},_f={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ci=Symbol.for("react.element"),Dg=Symbol.for("react.portal"),Og=Symbol.for("react.fragment"),jg=Symbol.for("react.strict_mode"),Mg=Symbol.for("react.profiler"),Fg=Symbol.for("react.provider"),Ug=Symbol.for("react.context"),zg=Symbol.for("react.forward_ref"),$g=Symbol.for("react.suspense"),Bg=Symbol.for("react.memo"),Wg=Symbol.for("react.lazy"),lc=Symbol.iterator;function Hg(e){return e===null||typeof e!="object"?null:(e=lc&&e[lc]||e["@@iterator"],typeof e=="function"?e:null)}var xf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},If=Object.assign,Cf={};function _r(e,t,n){this.props=e,this.context=t,this.refs=Cf,this.updater=n||xf}_r.prototype.isReactComponent={};_r.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};_r.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Tf(){}Tf.prototype=_r.prototype;function jl(e,t,n){this.props=e,this.context=t,this.refs=Cf,this.updater=n||xf}var Ml=jl.prototype=new Tf;Ml.constructor=jl;If(Ml,_r.prototype);Ml.isPureReactComponent=!0;var uc=Array.isArray,Rf=Object.prototype.hasOwnProperty,Fl={current:null},Pf={key:!0,ref:!0,__self:!0,__source:!0};function Nf(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)Rf.call(t,r)&&!Pf.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ci,type:e,key:s,ref:o,props:i,_owner:Fl.current}}function Vg(e,t){return{$$typeof:Ci,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ul(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ci}function Kg(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var cc=/\/+/g;function Fo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Kg(""+e.key):t.toString(36)}function os(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Ci:case Dg:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Fo(o,0):r,uc(i)?(n="",e!=null&&(n=e.replace(cc,"$&/")+"/"),os(i,t,n,"",function(u){return u})):i!=null&&(Ul(i)&&(i=Vg(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(cc,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",uc(e))for(var a=0;a<e.length;a++){s=e[a];var l=r+Fo(s,a);o+=os(s,t,n,l,i)}else if(l=Hg(e),typeof l=="function")for(e=l.call(e),a=0;!(s=e.next()).done;)s=s.value,l=r+Fo(s,a++),o+=os(s,t,n,l,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function zi(e,t,n){if(e==null)return e;var r=[],i=0;return os(e,r,"","",function(s){return t.call(n,s,i++)}),r}function Gg(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ee={current:null},as={transition:null},qg={ReactCurrentDispatcher:Ee,ReactCurrentBatchConfig:as,ReactCurrentOwner:Fl};function Af(){throw Error("act(...) is not supported in production builds of React.")}M.Children={map:zi,forEach:function(e,t,n){zi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return zi(e,function(){t++}),t},toArray:function(e){return zi(e,function(t){return t})||[]},only:function(e){if(!Ul(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};M.Component=_r;M.Fragment=Og;M.Profiler=Mg;M.PureComponent=jl;M.StrictMode=jg;M.Suspense=$g;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qg;M.act=Af;M.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=If({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=Fl.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Rf.call(t,l)&&!Pf.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Ci,type:e.type,key:i,ref:s,props:r,_owner:o}};M.createContext=function(e){return e={$$typeof:Ug,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Fg,_context:e},e.Consumer=e};M.createElement=Nf;M.createFactory=function(e){var t=Nf.bind(null,e);return t.type=e,t};M.createRef=function(){return{current:null}};M.forwardRef=function(e){return{$$typeof:zg,render:e}};M.isValidElement=Ul;M.lazy=function(e){return{$$typeof:Wg,_payload:{_status:-1,_result:e},_init:Gg}};M.memo=function(e,t){return{$$typeof:Bg,type:e,compare:t===void 0?null:t}};M.startTransition=function(e){var t=as.transition;as.transition={};try{e()}finally{as.transition=t}};M.unstable_act=Af;M.useCallback=function(e,t){return Ee.current.useCallback(e,t)};M.useContext=function(e){return Ee.current.useContext(e)};M.useDebugValue=function(){};M.useDeferredValue=function(e){return Ee.current.useDeferredValue(e)};M.useEffect=function(e,t){return Ee.current.useEffect(e,t)};M.useId=function(){return Ee.current.useId()};M.useImperativeHandle=function(e,t,n){return Ee.current.useImperativeHandle(e,t,n)};M.useInsertionEffect=function(e,t){return Ee.current.useInsertionEffect(e,t)};M.useLayoutEffect=function(e,t){return Ee.current.useLayoutEffect(e,t)};M.useMemo=function(e,t){return Ee.current.useMemo(e,t)};M.useReducer=function(e,t,n){return Ee.current.useReducer(e,t,n)};M.useRef=function(e){return Ee.current.useRef(e)};M.useState=function(e){return Ee.current.useState(e)};M.useSyncExternalStore=function(e,t,n){return Ee.current.useSyncExternalStore(e,t,n)};M.useTransition=function(){return Ee.current.useTransition()};M.version="18.3.1";_f.exports=M;var y=_f.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yg=y,Qg=Symbol.for("react.element"),Jg=Symbol.for("react.fragment"),Xg=Object.prototype.hasOwnProperty,Zg=Yg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ey={key:!0,ref:!0,__self:!0,__source:!0};function bf(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Xg.call(t,r)&&!ey.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Qg,type:e,key:s,ref:o,props:i,_owner:Zg.current}}ao.Fragment=Jg;ao.jsx=bf;ao.jsxs=bf;kf.exports=ao;var c=kf.exports,Lf={exports:{}},De={},Df={exports:{}},Of={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,L){var D=P.length;P.push(L);e:for(;0<D;){var O=D-1>>>1,Y=P[O];if(0<i(Y,L))P[O]=L,P[D]=Y,D=O;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var L=P[0],D=P.pop();if(D!==L){P[0]=D;e:for(var O=0,Y=P.length,gt=Y>>>1;O<gt;){var yt=2*(O+1)-1,br=P[yt],re=yt+1,Bt=P[re];if(0>i(br,D))re<Y&&0>i(Bt,br)?(P[O]=Bt,P[re]=D,O=re):(P[O]=br,P[yt]=D,O=yt);else if(re<Y&&0>i(Bt,D))P[O]=Bt,P[re]=D,O=re;else break e}}return L}function i(P,L){var D=P.sortIndex-L.sortIndex;return D!==0?D:P.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var l=[],u=[],d=1,f=null,m=3,v=!1,w=!1,S=!1,I=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(P){for(var L=n(u);L!==null;){if(L.callback===null)r(u);else if(L.startTime<=P)r(u),L.sortIndex=L.expirationTime,t(l,L);else break;L=n(u)}}function E(P){if(S=!1,g(P),!w)if(n(l)!==null)w=!0,Wn(x);else{var L=n(u);L!==null&&Ar(E,L.startTime-P)}}function x(P,L){w=!1,S&&(S=!1,h(R),R=-1),v=!0;var D=m;try{for(g(L),f=n(l);f!==null&&(!(f.expirationTime>L)||P&&!U());){var O=f.callback;if(typeof O=="function"){f.callback=null,m=f.priorityLevel;var Y=O(f.expirationTime<=L);L=e.unstable_now(),typeof Y=="function"?f.callback=Y:f===n(l)&&r(l),g(L)}else r(l);f=n(l)}if(f!==null)var gt=!0;else{var yt=n(u);yt!==null&&Ar(E,yt.startTime-L),gt=!1}return gt}finally{f=null,m=D,v=!1}}var T=!1,C=null,R=-1,j=5,b=-1;function U(){return!(e.unstable_now()-b<j)}function oe(){if(C!==null){var P=e.unstable_now();b=P;var L=!0;try{L=C(!0,P)}finally{L?te():(T=!1,C=null)}}else T=!1}var te;if(typeof p=="function")te=function(){p(oe)};else if(typeof MessageChannel<"u"){var it=new MessageChannel,_e=it.port2;it.port1.onmessage=oe,te=function(){_e.postMessage(null)}}else te=function(){I(oe,0)};function Wn(P){C=P,T||(T=!0,te())}function Ar(P,L){R=I(function(){P(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){w||v||(w=!0,Wn(x))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(P){switch(m){case 1:case 2:case 3:var L=3;break;default:L=m}var D=m;m=L;try{return P()}finally{m=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,L){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var D=m;m=P;try{return L()}finally{m=D}},e.unstable_scheduleCallback=function(P,L,D){var O=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?O+D:O):D=O,P){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=D+Y,P={id:d++,callback:L,priorityLevel:P,startTime:D,expirationTime:Y,sortIndex:-1},D>O?(P.sortIndex=D,t(u,P),n(l)===null&&P===n(u)&&(S?(h(R),R=-1):S=!0,Ar(E,D-O))):(P.sortIndex=Y,t(l,P),w||v||(w=!0,Wn(x))),P},e.unstable_shouldYield=U,e.unstable_wrapCallback=function(P){var L=m;return function(){var D=m;m=L;try{return P.apply(this,arguments)}finally{m=D}}}})(Of);Df.exports=Of;var ty=Df.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ny=y,Le=ty;function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var jf=new Set,oi={};function zn(e,t){fr(e,t),fr(e+"Capture",t)}function fr(e,t){for(oi[e]=t,e=0;e<t.length;e++)jf.add(t[e])}var Nt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ca=Object.prototype.hasOwnProperty,ry=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,dc={},fc={};function iy(e){return Ca.call(fc,e)?!0:Ca.call(dc,e)?!1:ry.test(e)?fc[e]=!0:(dc[e]=!0,!1)}function sy(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function oy(e,t,n,r){if(t===null||typeof t>"u"||sy(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ke(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var fe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){fe[e]=new ke(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];fe[t]=new ke(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){fe[e]=new ke(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){fe[e]=new ke(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){fe[e]=new ke(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){fe[e]=new ke(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){fe[e]=new ke(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){fe[e]=new ke(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){fe[e]=new ke(e,5,!1,e.toLowerCase(),null,!1,!1)});var zl=/[\-:]([a-z])/g;function $l(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(zl,$l);fe[t]=new ke(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(zl,$l);fe[t]=new ke(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(zl,$l);fe[t]=new ke(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){fe[e]=new ke(e,1,!1,e.toLowerCase(),null,!1,!1)});fe.xlinkHref=new ke("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){fe[e]=new ke(e,1,!1,e.toLowerCase(),null,!0,!0)});function Bl(e,t,n,r){var i=fe.hasOwnProperty(t)?fe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(oy(t,n,i,r)&&(n=null),r||i===null?iy(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ft=ny.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$i=Symbol.for("react.element"),Vn=Symbol.for("react.portal"),Kn=Symbol.for("react.fragment"),Wl=Symbol.for("react.strict_mode"),Ta=Symbol.for("react.profiler"),Mf=Symbol.for("react.provider"),Ff=Symbol.for("react.context"),Hl=Symbol.for("react.forward_ref"),Ra=Symbol.for("react.suspense"),Pa=Symbol.for("react.suspense_list"),Vl=Symbol.for("react.memo"),Vt=Symbol.for("react.lazy"),Uf=Symbol.for("react.offscreen"),hc=Symbol.iterator;function Lr(e){return e===null||typeof e!="object"?null:(e=hc&&e[hc]||e["@@iterator"],typeof e=="function"?e:null)}var X=Object.assign,Uo;function Br(e){if(Uo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Uo=t&&t[1]||""}return`
`+Uo+e}var zo=!1;function $o(e,t){if(!e||zo)return"";zo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=a);break}}}finally{zo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Br(e):""}function ay(e){switch(e.tag){case 5:return Br(e.type);case 16:return Br("Lazy");case 13:return Br("Suspense");case 19:return Br("SuspenseList");case 0:case 2:case 15:return e=$o(e.type,!1),e;case 11:return e=$o(e.type.render,!1),e;case 1:return e=$o(e.type,!0),e;default:return""}}function Na(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Kn:return"Fragment";case Vn:return"Portal";case Ta:return"Profiler";case Wl:return"StrictMode";case Ra:return"Suspense";case Pa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ff:return(e.displayName||"Context")+".Consumer";case Mf:return(e._context.displayName||"Context")+".Provider";case Hl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Vl:return t=e.displayName||null,t!==null?t:Na(e.type)||"Memo";case Vt:t=e._payload,e=e._init;try{return Na(e(t))}catch{}}return null}function ly(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Na(t);case 8:return t===Wl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function dn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function zf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function uy(e){var t=zf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Bi(e){e._valueTracker||(e._valueTracker=uy(e))}function $f(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=zf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ts(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Aa(e,t){var n=t.checked;return X({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function pc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=dn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Bf(e,t){t=t.checked,t!=null&&Bl(e,"checked",t,!1)}function ba(e,t){Bf(e,t);var n=dn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?La(e,t.type,n):t.hasOwnProperty("defaultValue")&&La(e,t.type,dn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function mc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function La(e,t,n){(t!=="number"||Ts(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Wr=Array.isArray;function ir(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+dn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Da(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(_(91));return X({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function gc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(_(92));if(Wr(n)){if(1<n.length)throw Error(_(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:dn(n)}}function Wf(e,t){var n=dn(t.value),r=dn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function yc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Hf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Oa(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Hf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Wi,Vf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Wi=Wi||document.createElement("div"),Wi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Wi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ai(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Yr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},cy=["Webkit","ms","Moz","O"];Object.keys(Yr).forEach(function(e){cy.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Yr[t]=Yr[e]})});function Kf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Yr.hasOwnProperty(e)&&Yr[e]?(""+t).trim():t+"px"}function Gf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Kf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var dy=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ja(e,t){if(t){if(dy[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(_(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(_(61))}if(t.style!=null&&typeof t.style!="object")throw Error(_(62))}}function Ma(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fa=null;function Kl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ua=null,sr=null,or=null;function vc(e){if(e=Pi(e)){if(typeof Ua!="function")throw Error(_(280));var t=e.stateNode;t&&(t=ho(t),Ua(e.stateNode,e.type,t))}}function qf(e){sr?or?or.push(e):or=[e]:sr=e}function Yf(){if(sr){var e=sr,t=or;if(or=sr=null,vc(e),t)for(e=0;e<t.length;e++)vc(t[e])}}function Qf(e,t){return e(t)}function Jf(){}var Bo=!1;function Xf(e,t,n){if(Bo)return e(t,n);Bo=!0;try{return Qf(e,t,n)}finally{Bo=!1,(sr!==null||or!==null)&&(Jf(),Yf())}}function li(e,t){var n=e.stateNode;if(n===null)return null;var r=ho(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(_(231,t,typeof n));return n}var za=!1;if(Nt)try{var Dr={};Object.defineProperty(Dr,"passive",{get:function(){za=!0}}),window.addEventListener("test",Dr,Dr),window.removeEventListener("test",Dr,Dr)}catch{za=!1}function fy(e,t,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var Qr=!1,Rs=null,Ps=!1,$a=null,hy={onError:function(e){Qr=!0,Rs=e}};function py(e,t,n,r,i,s,o,a,l){Qr=!1,Rs=null,fy.apply(hy,arguments)}function my(e,t,n,r,i,s,o,a,l){if(py.apply(this,arguments),Qr){if(Qr){var u=Rs;Qr=!1,Rs=null}else throw Error(_(198));Ps||(Ps=!0,$a=u)}}function $n(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Zf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function wc(e){if($n(e)!==e)throw Error(_(188))}function gy(e){var t=e.alternate;if(!t){if(t=$n(e),t===null)throw Error(_(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return wc(i),e;if(s===r)return wc(i),t;s=s.sibling}throw Error(_(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?e:t}function eh(e){return e=gy(e),e!==null?th(e):null}function th(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=th(e);if(t!==null)return t;e=e.sibling}return null}var nh=Le.unstable_scheduleCallback,Sc=Le.unstable_cancelCallback,yy=Le.unstable_shouldYield,vy=Le.unstable_requestPaint,ee=Le.unstable_now,wy=Le.unstable_getCurrentPriorityLevel,Gl=Le.unstable_ImmediatePriority,rh=Le.unstable_UserBlockingPriority,Ns=Le.unstable_NormalPriority,Sy=Le.unstable_LowPriority,ih=Le.unstable_IdlePriority,lo=null,ut=null;function Ey(e){if(ut&&typeof ut.onCommitFiberRoot=="function")try{ut.onCommitFiberRoot(lo,e,void 0,(e.current.flags&128)===128)}catch{}}var Xe=Math.clz32?Math.clz32:xy,ky=Math.log,_y=Math.LN2;function xy(e){return e>>>=0,e===0?32:31-(ky(e)/_y|0)|0}var Hi=64,Vi=4194304;function Hr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function As(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Hr(a):(s&=o,s!==0&&(r=Hr(s)))}else o=n&~i,o!==0?r=Hr(o):s!==0&&(r=Hr(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Xe(t),i=1<<n,r|=e[n],t&=~i;return r}function Iy(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Cy(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-Xe(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=Iy(a,t)):l<=t&&(e.expiredLanes|=a),s&=~a}}function Ba(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function sh(){var e=Hi;return Hi<<=1,!(Hi&4194240)&&(Hi=64),e}function Wo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ti(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Xe(t),e[t]=n}function Ty(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Xe(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function ql(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Xe(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var $=0;function oh(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ah,Yl,lh,uh,ch,Wa=!1,Ki=[],nn=null,rn=null,sn=null,ui=new Map,ci=new Map,Gt=[],Ry="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ec(e,t){switch(e){case"focusin":case"focusout":nn=null;break;case"dragenter":case"dragleave":rn=null;break;case"mouseover":case"mouseout":sn=null;break;case"pointerover":case"pointerout":ui.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ci.delete(t.pointerId)}}function Or(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=Pi(t),t!==null&&Yl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Py(e,t,n,r,i){switch(t){case"focusin":return nn=Or(nn,e,t,n,r,i),!0;case"dragenter":return rn=Or(rn,e,t,n,r,i),!0;case"mouseover":return sn=Or(sn,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return ui.set(s,Or(ui.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ci.set(s,Or(ci.get(s)||null,e,t,n,r,i)),!0}return!1}function dh(e){var t=Sn(e.target);if(t!==null){var n=$n(t);if(n!==null){if(t=n.tag,t===13){if(t=Zf(n),t!==null){e.blockedOn=t,ch(e.priority,function(){lh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ls(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ha(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Fa=r,n.target.dispatchEvent(r),Fa=null}else return t=Pi(n),t!==null&&Yl(t),e.blockedOn=n,!1;t.shift()}return!0}function kc(e,t,n){ls(e)&&n.delete(t)}function Ny(){Wa=!1,nn!==null&&ls(nn)&&(nn=null),rn!==null&&ls(rn)&&(rn=null),sn!==null&&ls(sn)&&(sn=null),ui.forEach(kc),ci.forEach(kc)}function jr(e,t){e.blockedOn===t&&(e.blockedOn=null,Wa||(Wa=!0,Le.unstable_scheduleCallback(Le.unstable_NormalPriority,Ny)))}function di(e){function t(i){return jr(i,e)}if(0<Ki.length){jr(Ki[0],e);for(var n=1;n<Ki.length;n++){var r=Ki[n];r.blockedOn===e&&(r.blockedOn=null)}}for(nn!==null&&jr(nn,e),rn!==null&&jr(rn,e),sn!==null&&jr(sn,e),ui.forEach(t),ci.forEach(t),n=0;n<Gt.length;n++)r=Gt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Gt.length&&(n=Gt[0],n.blockedOn===null);)dh(n),n.blockedOn===null&&Gt.shift()}var ar=Ft.ReactCurrentBatchConfig,bs=!0;function Ay(e,t,n,r){var i=$,s=ar.transition;ar.transition=null;try{$=1,Ql(e,t,n,r)}finally{$=i,ar.transition=s}}function by(e,t,n,r){var i=$,s=ar.transition;ar.transition=null;try{$=4,Ql(e,t,n,r)}finally{$=i,ar.transition=s}}function Ql(e,t,n,r){if(bs){var i=Ha(e,t,n,r);if(i===null)Zo(e,t,r,Ls,n),Ec(e,r);else if(Py(i,e,t,n,r))r.stopPropagation();else if(Ec(e,r),t&4&&-1<Ry.indexOf(e)){for(;i!==null;){var s=Pi(i);if(s!==null&&ah(s),s=Ha(e,t,n,r),s===null&&Zo(e,t,r,Ls,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Zo(e,t,r,null,n)}}var Ls=null;function Ha(e,t,n,r){if(Ls=null,e=Kl(r),e=Sn(e),e!==null)if(t=$n(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Zf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ls=e,null}function fh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(wy()){case Gl:return 1;case rh:return 4;case Ns:case Sy:return 16;case ih:return 536870912;default:return 16}default:return 16}}var en=null,Jl=null,us=null;function hh(){if(us)return us;var e,t=Jl,n=t.length,r,i="value"in en?en.value:en.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return us=i.slice(e,1<r?1-r:void 0)}function cs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Gi(){return!0}function _c(){return!1}function Oe(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Gi:_c,this.isPropagationStopped=_c,this}return X(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Gi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Gi)},persist:function(){},isPersistent:Gi}),t}var xr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xl=Oe(xr),Ri=X({},xr,{view:0,detail:0}),Ly=Oe(Ri),Ho,Vo,Mr,uo=X({},Ri,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Mr&&(Mr&&e.type==="mousemove"?(Ho=e.screenX-Mr.screenX,Vo=e.screenY-Mr.screenY):Vo=Ho=0,Mr=e),Ho)},movementY:function(e){return"movementY"in e?e.movementY:Vo}}),xc=Oe(uo),Dy=X({},uo,{dataTransfer:0}),Oy=Oe(Dy),jy=X({},Ri,{relatedTarget:0}),Ko=Oe(jy),My=X({},xr,{animationName:0,elapsedTime:0,pseudoElement:0}),Fy=Oe(My),Uy=X({},xr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),zy=Oe(Uy),$y=X({},xr,{data:0}),Ic=Oe($y),By={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Wy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vy(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Hy[e])?!!t[e]:!1}function Zl(){return Vy}var Ky=X({},Ri,{key:function(e){if(e.key){var t=By[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=cs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Wy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zl,charCode:function(e){return e.type==="keypress"?cs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?cs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Gy=Oe(Ky),qy=X({},uo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cc=Oe(qy),Yy=X({},Ri,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zl}),Qy=Oe(Yy),Jy=X({},xr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xy=Oe(Jy),Zy=X({},uo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ev=Oe(Zy),tv=[9,13,27,32],eu=Nt&&"CompositionEvent"in window,Jr=null;Nt&&"documentMode"in document&&(Jr=document.documentMode);var nv=Nt&&"TextEvent"in window&&!Jr,ph=Nt&&(!eu||Jr&&8<Jr&&11>=Jr),Tc=" ",Rc=!1;function mh(e,t){switch(e){case"keyup":return tv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Gn=!1;function rv(e,t){switch(e){case"compositionend":return gh(t);case"keypress":return t.which!==32?null:(Rc=!0,Tc);case"textInput":return e=t.data,e===Tc&&Rc?null:e;default:return null}}function iv(e,t){if(Gn)return e==="compositionend"||!eu&&mh(e,t)?(e=hh(),us=Jl=en=null,Gn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ph&&t.locale!=="ko"?null:t.data;default:return null}}var sv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!sv[e.type]:t==="textarea"}function yh(e,t,n,r){qf(r),t=Ds(t,"onChange"),0<t.length&&(n=new Xl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Xr=null,fi=null;function ov(e){Rh(e,0)}function co(e){var t=Qn(e);if($f(t))return e}function av(e,t){if(e==="change")return t}var vh=!1;if(Nt){var Go;if(Nt){var qo="oninput"in document;if(!qo){var Nc=document.createElement("div");Nc.setAttribute("oninput","return;"),qo=typeof Nc.oninput=="function"}Go=qo}else Go=!1;vh=Go&&(!document.documentMode||9<document.documentMode)}function Ac(){Xr&&(Xr.detachEvent("onpropertychange",wh),fi=Xr=null)}function wh(e){if(e.propertyName==="value"&&co(fi)){var t=[];yh(t,fi,e,Kl(e)),Xf(ov,t)}}function lv(e,t,n){e==="focusin"?(Ac(),Xr=t,fi=n,Xr.attachEvent("onpropertychange",wh)):e==="focusout"&&Ac()}function uv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return co(fi)}function cv(e,t){if(e==="click")return co(t)}function dv(e,t){if(e==="input"||e==="change")return co(t)}function fv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var tt=typeof Object.is=="function"?Object.is:fv;function hi(e,t){if(tt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ca.call(t,i)||!tt(e[i],t[i]))return!1}return!0}function bc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Lc(e,t){var n=bc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=bc(n)}}function Sh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Sh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Eh(){for(var e=window,t=Ts();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ts(e.document)}return t}function tu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function hv(e){var t=Eh(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Sh(n.ownerDocument.documentElement,n)){if(r!==null&&tu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=Lc(n,s);var o=Lc(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var pv=Nt&&"documentMode"in document&&11>=document.documentMode,qn=null,Va=null,Zr=null,Ka=!1;function Dc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ka||qn==null||qn!==Ts(r)||(r=qn,"selectionStart"in r&&tu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Zr&&hi(Zr,r)||(Zr=r,r=Ds(Va,"onSelect"),0<r.length&&(t=new Xl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=qn)))}function qi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Yn={animationend:qi("Animation","AnimationEnd"),animationiteration:qi("Animation","AnimationIteration"),animationstart:qi("Animation","AnimationStart"),transitionend:qi("Transition","TransitionEnd")},Yo={},kh={};Nt&&(kh=document.createElement("div").style,"AnimationEvent"in window||(delete Yn.animationend.animation,delete Yn.animationiteration.animation,delete Yn.animationstart.animation),"TransitionEvent"in window||delete Yn.transitionend.transition);function fo(e){if(Yo[e])return Yo[e];if(!Yn[e])return e;var t=Yn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in kh)return Yo[e]=t[n];return e}var _h=fo("animationend"),xh=fo("animationiteration"),Ih=fo("animationstart"),Ch=fo("transitionend"),Th=new Map,Oc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function hn(e,t){Th.set(e,t),zn(t,[e])}for(var Qo=0;Qo<Oc.length;Qo++){var Jo=Oc[Qo],mv=Jo.toLowerCase(),gv=Jo[0].toUpperCase()+Jo.slice(1);hn(mv,"on"+gv)}hn(_h,"onAnimationEnd");hn(xh,"onAnimationIteration");hn(Ih,"onAnimationStart");hn("dblclick","onDoubleClick");hn("focusin","onFocus");hn("focusout","onBlur");hn(Ch,"onTransitionEnd");fr("onMouseEnter",["mouseout","mouseover"]);fr("onMouseLeave",["mouseout","mouseover"]);fr("onPointerEnter",["pointerout","pointerover"]);fr("onPointerLeave",["pointerout","pointerover"]);zn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));zn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));zn("onBeforeInput",["compositionend","keypress","textInput","paste"]);zn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));zn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));zn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Vr));function jc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,my(r,t,void 0,e),e.currentTarget=null}function Rh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;jc(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;jc(i,a,u),s=l}}}if(Ps)throw e=$a,Ps=!1,$a=null,e}function V(e,t){var n=t[Ja];n===void 0&&(n=t[Ja]=new Set);var r=e+"__bubble";n.has(r)||(Ph(t,e,2,!1),n.add(r))}function Xo(e,t,n){var r=0;t&&(r|=4),Ph(n,e,r,t)}var Yi="_reactListening"+Math.random().toString(36).slice(2);function pi(e){if(!e[Yi]){e[Yi]=!0,jf.forEach(function(n){n!=="selectionchange"&&(yv.has(n)||Xo(n,!1,e),Xo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Yi]||(t[Yi]=!0,Xo("selectionchange",!1,t))}}function Ph(e,t,n,r){switch(fh(t)){case 1:var i=Ay;break;case 4:i=by;break;default:i=Ql}n=i.bind(null,t,n,e),i=void 0,!za||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Zo(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Sn(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Xf(function(){var u=s,d=Kl(n),f=[];e:{var m=Th.get(e);if(m!==void 0){var v=Xl,w=e;switch(e){case"keypress":if(cs(n)===0)break e;case"keydown":case"keyup":v=Gy;break;case"focusin":w="focus",v=Ko;break;case"focusout":w="blur",v=Ko;break;case"beforeblur":case"afterblur":v=Ko;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=xc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Oy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Qy;break;case _h:case xh:case Ih:v=Fy;break;case Ch:v=Xy;break;case"scroll":v=Ly;break;case"wheel":v=ev;break;case"copy":case"cut":case"paste":v=zy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Cc}var S=(t&4)!==0,I=!S&&e==="scroll",h=S?m!==null?m+"Capture":null:m;S=[];for(var p=u,g;p!==null;){g=p;var E=g.stateNode;if(g.tag===5&&E!==null&&(g=E,h!==null&&(E=li(p,h),E!=null&&S.push(mi(p,E,g)))),I)break;p=p.return}0<S.length&&(m=new v(m,w,null,n,d),f.push({event:m,listeners:S}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",m&&n!==Fa&&(w=n.relatedTarget||n.fromElement)&&(Sn(w)||w[At]))break e;if((v||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,v?(w=n.relatedTarget||n.toElement,v=u,w=w?Sn(w):null,w!==null&&(I=$n(w),w!==I||w.tag!==5&&w.tag!==6)&&(w=null)):(v=null,w=u),v!==w)){if(S=xc,E="onMouseLeave",h="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(S=Cc,E="onPointerLeave",h="onPointerEnter",p="pointer"),I=v==null?m:Qn(v),g=w==null?m:Qn(w),m=new S(E,p+"leave",v,n,d),m.target=I,m.relatedTarget=g,E=null,Sn(d)===u&&(S=new S(h,p+"enter",w,n,d),S.target=g,S.relatedTarget=I,E=S),I=E,v&&w)t:{for(S=v,h=w,p=0,g=S;g;g=Hn(g))p++;for(g=0,E=h;E;E=Hn(E))g++;for(;0<p-g;)S=Hn(S),p--;for(;0<g-p;)h=Hn(h),g--;for(;p--;){if(S===h||h!==null&&S===h.alternate)break t;S=Hn(S),h=Hn(h)}S=null}else S=null;v!==null&&Mc(f,m,v,S,!1),w!==null&&I!==null&&Mc(f,I,w,S,!0)}}e:{if(m=u?Qn(u):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var x=av;else if(Pc(m))if(vh)x=dv;else{x=uv;var T=lv}else(v=m.nodeName)&&v.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(x=cv);if(x&&(x=x(e,u))){yh(f,x,n,d);break e}T&&T(e,m,u),e==="focusout"&&(T=m._wrapperState)&&T.controlled&&m.type==="number"&&La(m,"number",m.value)}switch(T=u?Qn(u):window,e){case"focusin":(Pc(T)||T.contentEditable==="true")&&(qn=T,Va=u,Zr=null);break;case"focusout":Zr=Va=qn=null;break;case"mousedown":Ka=!0;break;case"contextmenu":case"mouseup":case"dragend":Ka=!1,Dc(f,n,d);break;case"selectionchange":if(pv)break;case"keydown":case"keyup":Dc(f,n,d)}var C;if(eu)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Gn?mh(e,n)&&(R="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(ph&&n.locale!=="ko"&&(Gn||R!=="onCompositionStart"?R==="onCompositionEnd"&&Gn&&(C=hh()):(en=d,Jl="value"in en?en.value:en.textContent,Gn=!0)),T=Ds(u,R),0<T.length&&(R=new Ic(R,e,null,n,d),f.push({event:R,listeners:T}),C?R.data=C:(C=gh(n),C!==null&&(R.data=C)))),(C=nv?rv(e,n):iv(e,n))&&(u=Ds(u,"onBeforeInput"),0<u.length&&(d=new Ic("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:u}),d.data=C))}Rh(f,t)})}function mi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ds(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=li(e,n),s!=null&&r.unshift(mi(e,s,i)),s=li(e,t),s!=null&&r.push(mi(e,s,i))),e=e.return}return r}function Hn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Mc(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=li(n,s),l!=null&&o.unshift(mi(n,l,a))):i||(l=li(n,s),l!=null&&o.push(mi(n,l,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var vv=/\r\n?/g,wv=/\u0000|\uFFFD/g;function Fc(e){return(typeof e=="string"?e:""+e).replace(vv,`
`).replace(wv,"")}function Qi(e,t,n){if(t=Fc(t),Fc(e)!==t&&n)throw Error(_(425))}function Os(){}var Ga=null,qa=null;function Ya(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Qa=typeof setTimeout=="function"?setTimeout:void 0,Sv=typeof clearTimeout=="function"?clearTimeout:void 0,Uc=typeof Promise=="function"?Promise:void 0,Ev=typeof queueMicrotask=="function"?queueMicrotask:typeof Uc<"u"?function(e){return Uc.resolve(null).then(e).catch(kv)}:Qa;function kv(e){setTimeout(function(){throw e})}function ea(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),di(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);di(t)}function on(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function zc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ir=Math.random().toString(36).slice(2),lt="__reactFiber$"+Ir,gi="__reactProps$"+Ir,At="__reactContainer$"+Ir,Ja="__reactEvents$"+Ir,_v="__reactListeners$"+Ir,xv="__reactHandles$"+Ir;function Sn(e){var t=e[lt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[At]||n[lt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=zc(e);e!==null;){if(n=e[lt])return n;e=zc(e)}return t}e=n,n=e.parentNode}return null}function Pi(e){return e=e[lt]||e[At],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Qn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function ho(e){return e[gi]||null}var Xa=[],Jn=-1;function pn(e){return{current:e}}function K(e){0>Jn||(e.current=Xa[Jn],Xa[Jn]=null,Jn--)}function H(e,t){Jn++,Xa[Jn]=e.current,e.current=t}var fn={},ye=pn(fn),Ce=pn(!1),Pn=fn;function hr(e,t){var n=e.type.contextTypes;if(!n)return fn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Te(e){return e=e.childContextTypes,e!=null}function js(){K(Ce),K(ye)}function $c(e,t,n){if(ye.current!==fn)throw Error(_(168));H(ye,t),H(Ce,n)}function Nh(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(_(108,ly(e)||"Unknown",i));return X({},n,r)}function Ms(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||fn,Pn=ye.current,H(ye,e),H(Ce,Ce.current),!0}function Bc(e,t,n){var r=e.stateNode;if(!r)throw Error(_(169));n?(e=Nh(e,t,Pn),r.__reactInternalMemoizedMergedChildContext=e,K(Ce),K(ye),H(ye,e)):K(Ce),H(Ce,n)}var St=null,po=!1,ta=!1;function Ah(e){St===null?St=[e]:St.push(e)}function Iv(e){po=!0,Ah(e)}function mn(){if(!ta&&St!==null){ta=!0;var e=0,t=$;try{var n=St;for($=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}St=null,po=!1}catch(i){throw St!==null&&(St=St.slice(e+1)),nh(Gl,mn),i}finally{$=t,ta=!1}}return null}var Xn=[],Zn=0,Fs=null,Us=0,Me=[],Fe=0,Nn=null,Et=1,kt="";function yn(e,t){Xn[Zn++]=Us,Xn[Zn++]=Fs,Fs=e,Us=t}function bh(e,t,n){Me[Fe++]=Et,Me[Fe++]=kt,Me[Fe++]=Nn,Nn=e;var r=Et;e=kt;var i=32-Xe(r)-1;r&=~(1<<i),n+=1;var s=32-Xe(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Et=1<<32-Xe(t)+i|n<<i|r,kt=s+e}else Et=1<<s|n<<i|r,kt=e}function nu(e){e.return!==null&&(yn(e,1),bh(e,1,0))}function ru(e){for(;e===Fs;)Fs=Xn[--Zn],Xn[Zn]=null,Us=Xn[--Zn],Xn[Zn]=null;for(;e===Nn;)Nn=Me[--Fe],Me[Fe]=null,kt=Me[--Fe],Me[Fe]=null,Et=Me[--Fe],Me[Fe]=null}var be=null,Ae=null,G=!1,Ye=null;function Lh(e,t){var n=Ue(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Wc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,be=e,Ae=on(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,be=e,Ae=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Nn!==null?{id:Et,overflow:kt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ue(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,be=e,Ae=null,!0):!1;default:return!1}}function Za(e){return(e.mode&1)!==0&&(e.flags&128)===0}function el(e){if(G){var t=Ae;if(t){var n=t;if(!Wc(e,t)){if(Za(e))throw Error(_(418));t=on(n.nextSibling);var r=be;t&&Wc(e,t)?Lh(r,n):(e.flags=e.flags&-4097|2,G=!1,be=e)}}else{if(Za(e))throw Error(_(418));e.flags=e.flags&-4097|2,G=!1,be=e}}}function Hc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;be=e}function Ji(e){if(e!==be)return!1;if(!G)return Hc(e),G=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ya(e.type,e.memoizedProps)),t&&(t=Ae)){if(Za(e))throw Dh(),Error(_(418));for(;t;)Lh(e,t),t=on(t.nextSibling)}if(Hc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ae=on(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ae=null}}else Ae=be?on(e.stateNode.nextSibling):null;return!0}function Dh(){for(var e=Ae;e;)e=on(e.nextSibling)}function pr(){Ae=be=null,G=!1}function iu(e){Ye===null?Ye=[e]:Ye.push(e)}var Cv=Ft.ReactCurrentBatchConfig;function Fr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,e))}return e}function Xi(e,t){throw e=Object.prototype.toString.call(t),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Vc(e){var t=e._init;return t(e._payload)}function Oh(e){function t(h,p){if(e){var g=h.deletions;g===null?(h.deletions=[p],h.flags|=16):g.push(p)}}function n(h,p){if(!e)return null;for(;p!==null;)t(h,p),p=p.sibling;return null}function r(h,p){for(h=new Map;p!==null;)p.key!==null?h.set(p.key,p):h.set(p.index,p),p=p.sibling;return h}function i(h,p){return h=cn(h,p),h.index=0,h.sibling=null,h}function s(h,p,g){return h.index=g,e?(g=h.alternate,g!==null?(g=g.index,g<p?(h.flags|=2,p):g):(h.flags|=2,p)):(h.flags|=1048576,p)}function o(h){return e&&h.alternate===null&&(h.flags|=2),h}function a(h,p,g,E){return p===null||p.tag!==6?(p=la(g,h.mode,E),p.return=h,p):(p=i(p,g),p.return=h,p)}function l(h,p,g,E){var x=g.type;return x===Kn?d(h,p,g.props.children,E,g.key):p!==null&&(p.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Vt&&Vc(x)===p.type)?(E=i(p,g.props),E.ref=Fr(h,p,g),E.return=h,E):(E=ys(g.type,g.key,g.props,null,h.mode,E),E.ref=Fr(h,p,g),E.return=h,E)}function u(h,p,g,E){return p===null||p.tag!==4||p.stateNode.containerInfo!==g.containerInfo||p.stateNode.implementation!==g.implementation?(p=ua(g,h.mode,E),p.return=h,p):(p=i(p,g.children||[]),p.return=h,p)}function d(h,p,g,E,x){return p===null||p.tag!==7?(p=In(g,h.mode,E,x),p.return=h,p):(p=i(p,g),p.return=h,p)}function f(h,p,g){if(typeof p=="string"&&p!==""||typeof p=="number")return p=la(""+p,h.mode,g),p.return=h,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case $i:return g=ys(p.type,p.key,p.props,null,h.mode,g),g.ref=Fr(h,null,p),g.return=h,g;case Vn:return p=ua(p,h.mode,g),p.return=h,p;case Vt:var E=p._init;return f(h,E(p._payload),g)}if(Wr(p)||Lr(p))return p=In(p,h.mode,g,null),p.return=h,p;Xi(h,p)}return null}function m(h,p,g,E){var x=p!==null?p.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return x!==null?null:a(h,p,""+g,E);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case $i:return g.key===x?l(h,p,g,E):null;case Vn:return g.key===x?u(h,p,g,E):null;case Vt:return x=g._init,m(h,p,x(g._payload),E)}if(Wr(g)||Lr(g))return x!==null?null:d(h,p,g,E,null);Xi(h,g)}return null}function v(h,p,g,E,x){if(typeof E=="string"&&E!==""||typeof E=="number")return h=h.get(g)||null,a(p,h,""+E,x);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case $i:return h=h.get(E.key===null?g:E.key)||null,l(p,h,E,x);case Vn:return h=h.get(E.key===null?g:E.key)||null,u(p,h,E,x);case Vt:var T=E._init;return v(h,p,g,T(E._payload),x)}if(Wr(E)||Lr(E))return h=h.get(g)||null,d(p,h,E,x,null);Xi(p,E)}return null}function w(h,p,g,E){for(var x=null,T=null,C=p,R=p=0,j=null;C!==null&&R<g.length;R++){C.index>R?(j=C,C=null):j=C.sibling;var b=m(h,C,g[R],E);if(b===null){C===null&&(C=j);break}e&&C&&b.alternate===null&&t(h,C),p=s(b,p,R),T===null?x=b:T.sibling=b,T=b,C=j}if(R===g.length)return n(h,C),G&&yn(h,R),x;if(C===null){for(;R<g.length;R++)C=f(h,g[R],E),C!==null&&(p=s(C,p,R),T===null?x=C:T.sibling=C,T=C);return G&&yn(h,R),x}for(C=r(h,C);R<g.length;R++)j=v(C,h,R,g[R],E),j!==null&&(e&&j.alternate!==null&&C.delete(j.key===null?R:j.key),p=s(j,p,R),T===null?x=j:T.sibling=j,T=j);return e&&C.forEach(function(U){return t(h,U)}),G&&yn(h,R),x}function S(h,p,g,E){var x=Lr(g);if(typeof x!="function")throw Error(_(150));if(g=x.call(g),g==null)throw Error(_(151));for(var T=x=null,C=p,R=p=0,j=null,b=g.next();C!==null&&!b.done;R++,b=g.next()){C.index>R?(j=C,C=null):j=C.sibling;var U=m(h,C,b.value,E);if(U===null){C===null&&(C=j);break}e&&C&&U.alternate===null&&t(h,C),p=s(U,p,R),T===null?x=U:T.sibling=U,T=U,C=j}if(b.done)return n(h,C),G&&yn(h,R),x;if(C===null){for(;!b.done;R++,b=g.next())b=f(h,b.value,E),b!==null&&(p=s(b,p,R),T===null?x=b:T.sibling=b,T=b);return G&&yn(h,R),x}for(C=r(h,C);!b.done;R++,b=g.next())b=v(C,h,R,b.value,E),b!==null&&(e&&b.alternate!==null&&C.delete(b.key===null?R:b.key),p=s(b,p,R),T===null?x=b:T.sibling=b,T=b);return e&&C.forEach(function(oe){return t(h,oe)}),G&&yn(h,R),x}function I(h,p,g,E){if(typeof g=="object"&&g!==null&&g.type===Kn&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case $i:e:{for(var x=g.key,T=p;T!==null;){if(T.key===x){if(x=g.type,x===Kn){if(T.tag===7){n(h,T.sibling),p=i(T,g.props.children),p.return=h,h=p;break e}}else if(T.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Vt&&Vc(x)===T.type){n(h,T.sibling),p=i(T,g.props),p.ref=Fr(h,T,g),p.return=h,h=p;break e}n(h,T);break}else t(h,T);T=T.sibling}g.type===Kn?(p=In(g.props.children,h.mode,E,g.key),p.return=h,h=p):(E=ys(g.type,g.key,g.props,null,h.mode,E),E.ref=Fr(h,p,g),E.return=h,h=E)}return o(h);case Vn:e:{for(T=g.key;p!==null;){if(p.key===T)if(p.tag===4&&p.stateNode.containerInfo===g.containerInfo&&p.stateNode.implementation===g.implementation){n(h,p.sibling),p=i(p,g.children||[]),p.return=h,h=p;break e}else{n(h,p);break}else t(h,p);p=p.sibling}p=ua(g,h.mode,E),p.return=h,h=p}return o(h);case Vt:return T=g._init,I(h,p,T(g._payload),E)}if(Wr(g))return w(h,p,g,E);if(Lr(g))return S(h,p,g,E);Xi(h,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,p!==null&&p.tag===6?(n(h,p.sibling),p=i(p,g),p.return=h,h=p):(n(h,p),p=la(g,h.mode,E),p.return=h,h=p),o(h)):n(h,p)}return I}var mr=Oh(!0),jh=Oh(!1),zs=pn(null),$s=null,er=null,su=null;function ou(){su=er=$s=null}function au(e){var t=zs.current;K(zs),e._currentValue=t}function tl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function lr(e,t){$s=e,su=er=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ie=!0),e.firstContext=null)}function $e(e){var t=e._currentValue;if(su!==e)if(e={context:e,memoizedValue:t,next:null},er===null){if($s===null)throw Error(_(308));er=e,$s.dependencies={lanes:0,firstContext:e}}else er=er.next=e;return t}var En=null;function lu(e){En===null?En=[e]:En.push(e)}function Mh(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,lu(t)):(n.next=i.next,i.next=n),t.interleaved=n,bt(e,r)}function bt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Kt=!1;function uu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Fh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ct(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function an(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,F&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,bt(e,n)}return i=r.interleaved,i===null?(t.next=t,lu(r)):(t.next=i.next,i.next=t),r.interleaved=t,bt(e,n)}function ds(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ql(e,n)}}function Kc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Bs(e,t,n,r){var i=e.updateQueue;Kt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(s!==null){var f=i.baseState;o=0,d=u=l=null,a=s;do{var m=a.lane,v=a.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=e,S=a;switch(m=t,v=n,S.tag){case 1:if(w=S.payload,typeof w=="function"){f=w.call(v,f,m);break e}f=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=S.payload,m=typeof w=="function"?w.call(v,f,m):w,m==null)break e;f=X({},f,m);break e;case 2:Kt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else v={eventTime:v,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=v,l=f):d=d.next=v,o|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);bn|=o,e.lanes=o,e.memoizedState=f}}function Gc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(_(191,i));i.call(r)}}}var Ni={},ct=pn(Ni),yi=pn(Ni),vi=pn(Ni);function kn(e){if(e===Ni)throw Error(_(174));return e}function cu(e,t){switch(H(vi,t),H(yi,e),H(ct,Ni),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Oa(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Oa(t,e)}K(ct),H(ct,t)}function gr(){K(ct),K(yi),K(vi)}function Uh(e){kn(vi.current);var t=kn(ct.current),n=Oa(t,e.type);t!==n&&(H(yi,e),H(ct,n))}function du(e){yi.current===e&&(K(ct),K(yi))}var Q=pn(0);function Ws(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var na=[];function fu(){for(var e=0;e<na.length;e++)na[e]._workInProgressVersionPrimary=null;na.length=0}var fs=Ft.ReactCurrentDispatcher,ra=Ft.ReactCurrentBatchConfig,An=0,J=null,ie=null,ae=null,Hs=!1,ei=!1,wi=0,Tv=0;function pe(){throw Error(_(321))}function hu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!tt(e[n],t[n]))return!1;return!0}function pu(e,t,n,r,i,s){if(An=s,J=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,fs.current=e===null||e.memoizedState===null?Av:bv,e=n(r,i),ei){s=0;do{if(ei=!1,wi=0,25<=s)throw Error(_(301));s+=1,ae=ie=null,t.updateQueue=null,fs.current=Lv,e=n(r,i)}while(ei)}if(fs.current=Vs,t=ie!==null&&ie.next!==null,An=0,ae=ie=J=null,Hs=!1,t)throw Error(_(300));return e}function mu(){var e=wi!==0;return wi=0,e}function at(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ae===null?J.memoizedState=ae=e:ae=ae.next=e,ae}function Be(){if(ie===null){var e=J.alternate;e=e!==null?e.memoizedState:null}else e=ie.next;var t=ae===null?J.memoizedState:ae.next;if(t!==null)ae=t,ie=e;else{if(e===null)throw Error(_(310));ie=e,e={memoizedState:ie.memoizedState,baseState:ie.baseState,baseQueue:ie.baseQueue,queue:ie.queue,next:null},ae===null?J.memoizedState=ae=e:ae=ae.next=e}return ae}function Si(e,t){return typeof t=="function"?t(e):t}function ia(e){var t=Be(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=ie,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var d=u.lane;if((An&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=r):l=l.next=f,J.lanes|=d,bn|=d}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,tt(r,t.memoizedState)||(Ie=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,J.lanes|=s,bn|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function sa(e){var t=Be(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);tt(s,t.memoizedState)||(Ie=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function zh(){}function $h(e,t){var n=J,r=Be(),i=t(),s=!tt(r.memoizedState,i);if(s&&(r.memoizedState=i,Ie=!0),r=r.queue,gu(Hh.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||ae!==null&&ae.memoizedState.tag&1){if(n.flags|=2048,Ei(9,Wh.bind(null,n,r,i,t),void 0,null),le===null)throw Error(_(349));An&30||Bh(n,t,i)}return i}function Bh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=J.updateQueue,t===null?(t={lastEffect:null,stores:null},J.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Wh(e,t,n,r){t.value=n,t.getSnapshot=r,Vh(t)&&Kh(e)}function Hh(e,t,n){return n(function(){Vh(t)&&Kh(e)})}function Vh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!tt(e,n)}catch{return!0}}function Kh(e){var t=bt(e,1);t!==null&&Ze(t,e,1,-1)}function qc(e){var t=at();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Si,lastRenderedState:e},t.queue=e,e=e.dispatch=Nv.bind(null,J,e),[t.memoizedState,e]}function Ei(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=J.updateQueue,t===null?(t={lastEffect:null,stores:null},J.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Gh(){return Be().memoizedState}function hs(e,t,n,r){var i=at();J.flags|=e,i.memoizedState=Ei(1|t,n,void 0,r===void 0?null:r)}function mo(e,t,n,r){var i=Be();r=r===void 0?null:r;var s=void 0;if(ie!==null){var o=ie.memoizedState;if(s=o.destroy,r!==null&&hu(r,o.deps)){i.memoizedState=Ei(t,n,s,r);return}}J.flags|=e,i.memoizedState=Ei(1|t,n,s,r)}function Yc(e,t){return hs(8390656,8,e,t)}function gu(e,t){return mo(2048,8,e,t)}function qh(e,t){return mo(4,2,e,t)}function Yh(e,t){return mo(4,4,e,t)}function Qh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Jh(e,t,n){return n=n!=null?n.concat([e]):null,mo(4,4,Qh.bind(null,t,e),n)}function yu(){}function Xh(e,t){var n=Be();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&hu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Zh(e,t){var n=Be();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&hu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ep(e,t,n){return An&21?(tt(n,t)||(n=sh(),J.lanes|=n,bn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ie=!0),e.memoizedState=n)}function Rv(e,t){var n=$;$=n!==0&&4>n?n:4,e(!0);var r=ra.transition;ra.transition={};try{e(!1),t()}finally{$=n,ra.transition=r}}function tp(){return Be().memoizedState}function Pv(e,t,n){var r=un(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},np(e))rp(t,n);else if(n=Mh(e,t,n,r),n!==null){var i=we();Ze(n,e,r,i),ip(n,t,r)}}function Nv(e,t,n){var r=un(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(np(e))rp(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,tt(a,o)){var l=t.interleaved;l===null?(i.next=i,lu(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=Mh(e,t,i,r),n!==null&&(i=we(),Ze(n,e,r,i),ip(n,t,r))}}function np(e){var t=e.alternate;return e===J||t!==null&&t===J}function rp(e,t){ei=Hs=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ip(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ql(e,n)}}var Vs={readContext:$e,useCallback:pe,useContext:pe,useEffect:pe,useImperativeHandle:pe,useInsertionEffect:pe,useLayoutEffect:pe,useMemo:pe,useReducer:pe,useRef:pe,useState:pe,useDebugValue:pe,useDeferredValue:pe,useTransition:pe,useMutableSource:pe,useSyncExternalStore:pe,useId:pe,unstable_isNewReconciler:!1},Av={readContext:$e,useCallback:function(e,t){return at().memoizedState=[e,t===void 0?null:t],e},useContext:$e,useEffect:Yc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,hs(4194308,4,Qh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return hs(4194308,4,e,t)},useInsertionEffect:function(e,t){return hs(4,2,e,t)},useMemo:function(e,t){var n=at();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=at();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Pv.bind(null,J,e),[r.memoizedState,e]},useRef:function(e){var t=at();return e={current:e},t.memoizedState=e},useState:qc,useDebugValue:yu,useDeferredValue:function(e){return at().memoizedState=e},useTransition:function(){var e=qc(!1),t=e[0];return e=Rv.bind(null,e[1]),at().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=J,i=at();if(G){if(n===void 0)throw Error(_(407));n=n()}else{if(n=t(),le===null)throw Error(_(349));An&30||Bh(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,Yc(Hh.bind(null,r,s,e),[e]),r.flags|=2048,Ei(9,Wh.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=at(),t=le.identifierPrefix;if(G){var n=kt,r=Et;n=(r&~(1<<32-Xe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=wi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Tv++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},bv={readContext:$e,useCallback:Xh,useContext:$e,useEffect:gu,useImperativeHandle:Jh,useInsertionEffect:qh,useLayoutEffect:Yh,useMemo:Zh,useReducer:ia,useRef:Gh,useState:function(){return ia(Si)},useDebugValue:yu,useDeferredValue:function(e){var t=Be();return ep(t,ie.memoizedState,e)},useTransition:function(){var e=ia(Si)[0],t=Be().memoizedState;return[e,t]},useMutableSource:zh,useSyncExternalStore:$h,useId:tp,unstable_isNewReconciler:!1},Lv={readContext:$e,useCallback:Xh,useContext:$e,useEffect:gu,useImperativeHandle:Jh,useInsertionEffect:qh,useLayoutEffect:Yh,useMemo:Zh,useReducer:sa,useRef:Gh,useState:function(){return sa(Si)},useDebugValue:yu,useDeferredValue:function(e){var t=Be();return ie===null?t.memoizedState=e:ep(t,ie.memoizedState,e)},useTransition:function(){var e=sa(Si)[0],t=Be().memoizedState;return[e,t]},useMutableSource:zh,useSyncExternalStore:$h,useId:tp,unstable_isNewReconciler:!1};function Ke(e,t){if(e&&e.defaultProps){t=X({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function nl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:X({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var go={isMounted:function(e){return(e=e._reactInternals)?$n(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=we(),i=un(e),s=Ct(r,i);s.payload=t,n!=null&&(s.callback=n),t=an(e,s,i),t!==null&&(Ze(t,e,i,r),ds(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=we(),i=un(e),s=Ct(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=an(e,s,i),t!==null&&(Ze(t,e,i,r),ds(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=we(),r=un(e),i=Ct(n,r);i.tag=2,t!=null&&(i.callback=t),t=an(e,i,r),t!==null&&(Ze(t,e,r,n),ds(t,e,r))}};function Qc(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!hi(n,r)||!hi(i,s):!0}function sp(e,t,n){var r=!1,i=fn,s=t.contextType;return typeof s=="object"&&s!==null?s=$e(s):(i=Te(t)?Pn:ye.current,r=t.contextTypes,s=(r=r!=null)?hr(e,i):fn),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=go,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function Jc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&go.enqueueReplaceState(t,t.state,null)}function rl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},uu(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=$e(s):(s=Te(t)?Pn:ye.current,i.context=hr(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(nl(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&go.enqueueReplaceState(i,i.state,null),Bs(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function yr(e,t){try{var n="",r=t;do n+=ay(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function oa(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function il(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Dv=typeof WeakMap=="function"?WeakMap:Map;function op(e,t,n){n=Ct(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Gs||(Gs=!0,pl=r),il(e,t)},n}function ap(e,t,n){n=Ct(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){il(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){il(e,t),typeof r!="function"&&(ln===null?ln=new Set([this]):ln.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Xc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Dv;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=qv.bind(null,e,t,n),t.then(e,e))}function Zc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ed(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ct(-1,1),t.tag=2,an(n,t,1))),n.lanes|=1),e)}var Ov=Ft.ReactCurrentOwner,Ie=!1;function ve(e,t,n,r){t.child=e===null?jh(t,null,n,r):mr(t,e.child,n,r)}function td(e,t,n,r,i){n=n.render;var s=t.ref;return lr(t,i),r=pu(e,t,n,r,s,i),n=mu(),e!==null&&!Ie?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Lt(e,t,i)):(G&&n&&nu(t),t.flags|=1,ve(e,t,r,i),t.child)}function nd(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!Iu(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,lp(e,t,s,r,i)):(e=ys(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:hi,n(o,r)&&e.ref===t.ref)return Lt(e,t,i)}return t.flags|=1,e=cn(s,r),e.ref=t.ref,e.return=t,t.child=e}function lp(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(hi(s,r)&&e.ref===t.ref)if(Ie=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(Ie=!0);else return t.lanes=e.lanes,Lt(e,t,i)}return sl(e,t,n,r,i)}function up(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},H(nr,Ne),Ne|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,H(nr,Ne),Ne|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,H(nr,Ne),Ne|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,H(nr,Ne),Ne|=r;return ve(e,t,i,n),t.child}function cp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function sl(e,t,n,r,i){var s=Te(n)?Pn:ye.current;return s=hr(t,s),lr(t,i),n=pu(e,t,n,r,s,i),r=mu(),e!==null&&!Ie?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Lt(e,t,i)):(G&&r&&nu(t),t.flags|=1,ve(e,t,n,i),t.child)}function rd(e,t,n,r,i){if(Te(n)){var s=!0;Ms(t)}else s=!1;if(lr(t,i),t.stateNode===null)ps(e,t),sp(t,n,r),rl(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=$e(u):(u=Te(n)?Pn:ye.current,u=hr(t,u));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Jc(t,o,r,u),Kt=!1;var m=t.memoizedState;o.state=m,Bs(t,r,o,i),l=t.memoizedState,a!==r||m!==l||Ce.current||Kt?(typeof d=="function"&&(nl(t,n,d,r),l=t.memoizedState),(a=Kt||Qc(t,n,a,r,m,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Fh(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Ke(t.type,a),o.props=u,f=t.pendingProps,m=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=$e(l):(l=Te(n)?Pn:ye.current,l=hr(t,l));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||m!==l)&&Jc(t,o,r,l),Kt=!1,m=t.memoizedState,o.state=m,Bs(t,r,o,i);var w=t.memoizedState;a!==f||m!==w||Ce.current||Kt?(typeof v=="function"&&(nl(t,n,v,r),w=t.memoizedState),(u=Kt||Qc(t,n,u,r,m,w,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,w,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,w,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),o.props=r,o.state=w,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return ol(e,t,n,r,s,i)}function ol(e,t,n,r,i,s){cp(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&Bc(t,n,!1),Lt(e,t,s);r=t.stateNode,Ov.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=mr(t,e.child,null,s),t.child=mr(t,null,a,s)):ve(e,t,a,s),t.memoizedState=r.state,i&&Bc(t,n,!0),t.child}function dp(e){var t=e.stateNode;t.pendingContext?$c(e,t.pendingContext,t.pendingContext!==t.context):t.context&&$c(e,t.context,!1),cu(e,t.containerInfo)}function id(e,t,n,r,i){return pr(),iu(i),t.flags|=256,ve(e,t,n,r),t.child}var al={dehydrated:null,treeContext:null,retryLane:0};function ll(e){return{baseLanes:e,cachePool:null,transitions:null}}function fp(e,t,n){var r=t.pendingProps,i=Q.current,s=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),H(Q,i&1),e===null)return el(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=wo(o,r,0,null),e=In(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=ll(n),t.memoizedState=al,e):vu(t,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return jv(e,t,o,r,a,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=cn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=cn(a,s):(s=In(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?ll(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=al,r}return s=e.child,e=s.sibling,r=cn(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function vu(e,t){return t=wo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Zi(e,t,n,r){return r!==null&&iu(r),mr(t,e.child,null,n),e=vu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function jv(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=oa(Error(_(422))),Zi(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=wo({mode:"visible",children:r.children},i,0,null),s=In(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&mr(t,e.child,null,o),t.child.memoizedState=ll(o),t.memoizedState=al,s);if(!(t.mode&1))return Zi(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(_(419)),r=oa(s,r,void 0),Zi(e,t,o,r)}if(a=(o&e.childLanes)!==0,Ie||a){if(r=le,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,bt(e,i),Ze(r,e,i,-1))}return xu(),r=oa(Error(_(421))),Zi(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Yv.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Ae=on(i.nextSibling),be=t,G=!0,Ye=null,e!==null&&(Me[Fe++]=Et,Me[Fe++]=kt,Me[Fe++]=Nn,Et=e.id,kt=e.overflow,Nn=t),t=vu(t,r.children),t.flags|=4096,t)}function sd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),tl(e.return,t,n)}function aa(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function hp(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(ve(e,t,r.children,n),r=Q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&sd(e,n,t);else if(e.tag===19)sd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(H(Q,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ws(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),aa(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ws(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}aa(t,!0,n,null,s);break;case"together":aa(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ps(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Lt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),bn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,n=cn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=cn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Mv(e,t,n){switch(t.tag){case 3:dp(t),pr();break;case 5:Uh(t);break;case 1:Te(t.type)&&Ms(t);break;case 4:cu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;H(zs,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(H(Q,Q.current&1),t.flags|=128,null):n&t.child.childLanes?fp(e,t,n):(H(Q,Q.current&1),e=Lt(e,t,n),e!==null?e.sibling:null);H(Q,Q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return hp(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),H(Q,Q.current),r)break;return null;case 22:case 23:return t.lanes=0,up(e,t,n)}return Lt(e,t,n)}var pp,ul,mp,gp;pp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ul=function(){};mp=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,kn(ct.current);var s=null;switch(n){case"input":i=Aa(e,i),r=Aa(e,r),s=[];break;case"select":i=X({},i,{value:void 0}),r=X({},r,{value:void 0}),s=[];break;case"textarea":i=Da(e,i),r=Da(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Os)}ja(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(oi.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(oi.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&V("scroll",e),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};gp=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ur(e,t){if(!G)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function me(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Fv(e,t,n){var r=t.pendingProps;switch(ru(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return me(t),null;case 1:return Te(t.type)&&js(),me(t),null;case 3:return r=t.stateNode,gr(),K(Ce),K(ye),fu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ji(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ye!==null&&(yl(Ye),Ye=null))),ul(e,t),me(t),null;case 5:du(t);var i=kn(vi.current);if(n=t.type,e!==null&&t.stateNode!=null)mp(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(_(166));return me(t),null}if(e=kn(ct.current),Ji(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[lt]=t,r[gi]=s,e=(t.mode&1)!==0,n){case"dialog":V("cancel",r),V("close",r);break;case"iframe":case"object":case"embed":V("load",r);break;case"video":case"audio":for(i=0;i<Vr.length;i++)V(Vr[i],r);break;case"source":V("error",r);break;case"img":case"image":case"link":V("error",r),V("load",r);break;case"details":V("toggle",r);break;case"input":pc(r,s),V("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},V("invalid",r);break;case"textarea":gc(r,s),V("invalid",r)}ja(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Qi(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Qi(r.textContent,a,e),i=["children",""+a]):oi.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&V("scroll",r)}switch(n){case"input":Bi(r),mc(r,s,!0);break;case"textarea":Bi(r),yc(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Os)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Hf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[lt]=t,e[gi]=r,pp(e,t,!1,!1),t.stateNode=e;e:{switch(o=Ma(n,r),n){case"dialog":V("cancel",e),V("close",e),i=r;break;case"iframe":case"object":case"embed":V("load",e),i=r;break;case"video":case"audio":for(i=0;i<Vr.length;i++)V(Vr[i],e);i=r;break;case"source":V("error",e),i=r;break;case"img":case"image":case"link":V("error",e),V("load",e),i=r;break;case"details":V("toggle",e),i=r;break;case"input":pc(e,r),i=Aa(e,r),V("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=X({},r,{value:void 0}),V("invalid",e);break;case"textarea":gc(e,r),i=Da(e,r),V("invalid",e);break;default:i=r}ja(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Gf(e,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Vf(e,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ai(e,l):typeof l=="number"&&ai(e,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(oi.hasOwnProperty(s)?l!=null&&s==="onScroll"&&V("scroll",e):l!=null&&Bl(e,s,l,o))}switch(n){case"input":Bi(e),mc(e,r,!1);break;case"textarea":Bi(e),yc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+dn(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?ir(e,!!r.multiple,s,!1):r.defaultValue!=null&&ir(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Os)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return me(t),null;case 6:if(e&&t.stateNode!=null)gp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(_(166));if(n=kn(vi.current),kn(ct.current),Ji(t)){if(r=t.stateNode,n=t.memoizedProps,r[lt]=t,(s=r.nodeValue!==n)&&(e=be,e!==null))switch(e.tag){case 3:Qi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Qi(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[lt]=t,t.stateNode=r}return me(t),null;case 13:if(K(Q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(G&&Ae!==null&&t.mode&1&&!(t.flags&128))Dh(),pr(),t.flags|=98560,s=!1;else if(s=Ji(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(_(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(_(317));s[lt]=t}else pr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;me(t),s=!1}else Ye!==null&&(yl(Ye),Ye=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Q.current&1?se===0&&(se=3):xu())),t.updateQueue!==null&&(t.flags|=4),me(t),null);case 4:return gr(),ul(e,t),e===null&&pi(t.stateNode.containerInfo),me(t),null;case 10:return au(t.type._context),me(t),null;case 17:return Te(t.type)&&js(),me(t),null;case 19:if(K(Q),s=t.memoizedState,s===null)return me(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)Ur(s,!1);else{if(se!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Ws(e),o!==null){for(t.flags|=128,Ur(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return H(Q,Q.current&1|2),t.child}e=e.sibling}s.tail!==null&&ee()>vr&&(t.flags|=128,r=!0,Ur(s,!1),t.lanes=4194304)}else{if(!r)if(e=Ws(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ur(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!G)return me(t),null}else 2*ee()-s.renderingStartTime>vr&&n!==1073741824&&(t.flags|=128,r=!0,Ur(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=ee(),t.sibling=null,n=Q.current,H(Q,r?n&1|2:n&1),t):(me(t),null);case 22:case 23:return _u(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ne&1073741824&&(me(t),t.subtreeFlags&6&&(t.flags|=8192)):me(t),null;case 24:return null;case 25:return null}throw Error(_(156,t.tag))}function Uv(e,t){switch(ru(t),t.tag){case 1:return Te(t.type)&&js(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return gr(),K(Ce),K(ye),fu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return du(t),null;case 13:if(K(Q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(_(340));pr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return K(Q),null;case 4:return gr(),null;case 10:return au(t.type._context),null;case 22:case 23:return _u(),null;case 24:return null;default:return null}}var es=!1,ge=!1,zv=typeof WeakSet=="function"?WeakSet:Set,N=null;function tr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Z(e,t,r)}else n.current=null}function cl(e,t,n){try{n()}catch(r){Z(e,t,r)}}var od=!1;function $v(e,t){if(Ga=bs,e=Eh(),tu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,d=0,f=e,m=null;t:for(;;){for(var v;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(v=f.firstChild)!==null;)m=f,f=v;for(;;){if(f===e)break t;if(m===n&&++u===i&&(a=o),m===s&&++d===r&&(l=o),(v=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=v}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(qa={focusedElem:e,selectionRange:n},bs=!1,N=t;N!==null;)if(t=N,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,N=e;else for(;N!==null;){t=N;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var S=w.memoizedProps,I=w.memoizedState,h=t.stateNode,p=h.getSnapshotBeforeUpdate(t.elementType===t.type?S:Ke(t.type,S),I);h.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(E){Z(t,t.return,E)}if(e=t.sibling,e!==null){e.return=t.return,N=e;break}N=t.return}return w=od,od=!1,w}function ti(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&cl(t,n,s)}i=i.next}while(i!==r)}}function yo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function dl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function yp(e){var t=e.alternate;t!==null&&(e.alternate=null,yp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[lt],delete t[gi],delete t[Ja],delete t[_v],delete t[xv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function vp(e){return e.tag===5||e.tag===3||e.tag===4}function ad(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||vp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function fl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Os));else if(r!==4&&(e=e.child,e!==null))for(fl(e,t,n),e=e.sibling;e!==null;)fl(e,t,n),e=e.sibling}function hl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(hl(e,t,n),e=e.sibling;e!==null;)hl(e,t,n),e=e.sibling}var ce=null,Ge=!1;function Wt(e,t,n){for(n=n.child;n!==null;)wp(e,t,n),n=n.sibling}function wp(e,t,n){if(ut&&typeof ut.onCommitFiberUnmount=="function")try{ut.onCommitFiberUnmount(lo,n)}catch{}switch(n.tag){case 5:ge||tr(n,t);case 6:var r=ce,i=Ge;ce=null,Wt(e,t,n),ce=r,Ge=i,ce!==null&&(Ge?(e=ce,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ce.removeChild(n.stateNode));break;case 18:ce!==null&&(Ge?(e=ce,n=n.stateNode,e.nodeType===8?ea(e.parentNode,n):e.nodeType===1&&ea(e,n),di(e)):ea(ce,n.stateNode));break;case 4:r=ce,i=Ge,ce=n.stateNode.containerInfo,Ge=!0,Wt(e,t,n),ce=r,Ge=i;break;case 0:case 11:case 14:case 15:if(!ge&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&cl(n,t,o),i=i.next}while(i!==r)}Wt(e,t,n);break;case 1:if(!ge&&(tr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Z(n,t,a)}Wt(e,t,n);break;case 21:Wt(e,t,n);break;case 22:n.mode&1?(ge=(r=ge)||n.memoizedState!==null,Wt(e,t,n),ge=r):Wt(e,t,n);break;default:Wt(e,t,n)}}function ld(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new zv),t.forEach(function(r){var i=Qv.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ve(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:ce=a.stateNode,Ge=!1;break e;case 3:ce=a.stateNode.containerInfo,Ge=!0;break e;case 4:ce=a.stateNode.containerInfo,Ge=!0;break e}a=a.return}if(ce===null)throw Error(_(160));wp(s,o,i),ce=null,Ge=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Z(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Sp(t,e),t=t.sibling}function Sp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ve(t,e),ot(e),r&4){try{ti(3,e,e.return),yo(3,e)}catch(S){Z(e,e.return,S)}try{ti(5,e,e.return)}catch(S){Z(e,e.return,S)}}break;case 1:Ve(t,e),ot(e),r&512&&n!==null&&tr(n,n.return);break;case 5:if(Ve(t,e),ot(e),r&512&&n!==null&&tr(n,n.return),e.flags&32){var i=e.stateNode;try{ai(i,"")}catch(S){Z(e,e.return,S)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Bf(i,s),Ma(a,o);var u=Ma(a,s);for(o=0;o<l.length;o+=2){var d=l[o],f=l[o+1];d==="style"?Gf(i,f):d==="dangerouslySetInnerHTML"?Vf(i,f):d==="children"?ai(i,f):Bl(i,d,f,u)}switch(a){case"input":ba(i,s);break;case"textarea":Wf(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?ir(i,!!s.multiple,v,!1):m!==!!s.multiple&&(s.defaultValue!=null?ir(i,!!s.multiple,s.defaultValue,!0):ir(i,!!s.multiple,s.multiple?[]:"",!1))}i[gi]=s}catch(S){Z(e,e.return,S)}}break;case 6:if(Ve(t,e),ot(e),r&4){if(e.stateNode===null)throw Error(_(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(S){Z(e,e.return,S)}}break;case 3:if(Ve(t,e),ot(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{di(t.containerInfo)}catch(S){Z(e,e.return,S)}break;case 4:Ve(t,e),ot(e);break;case 13:Ve(t,e),ot(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Eu=ee())),r&4&&ld(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(ge=(u=ge)||d,Ve(t,e),ge=u):Ve(t,e),ot(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(N=e,d=e.child;d!==null;){for(f=N=d;N!==null;){switch(m=N,v=m.child,m.tag){case 0:case 11:case 14:case 15:ti(4,m,m.return);break;case 1:tr(m,m.return);var w=m.stateNode;if(typeof w.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(S){Z(r,n,S)}}break;case 5:tr(m,m.return);break;case 22:if(m.memoizedState!==null){cd(f);continue}}v!==null?(v.return=m,N=v):cd(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Kf("display",o))}catch(S){Z(e,e.return,S)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(S){Z(e,e.return,S)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Ve(t,e),ot(e),r&4&&ld(e);break;case 21:break;default:Ve(t,e),ot(e)}}function ot(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(vp(n)){var r=n;break e}n=n.return}throw Error(_(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ai(i,""),r.flags&=-33);var s=ad(e);hl(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=ad(e);fl(e,a,o);break;default:throw Error(_(161))}}catch(l){Z(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Bv(e,t,n){N=e,Ep(e)}function Ep(e,t,n){for(var r=(e.mode&1)!==0;N!==null;){var i=N,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||es;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||ge;a=es;var u=ge;if(es=o,(ge=l)&&!u)for(N=i;N!==null;)o=N,l=o.child,o.tag===22&&o.memoizedState!==null?dd(i):l!==null?(l.return=o,N=l):dd(i);for(;s!==null;)N=s,Ep(s),s=s.sibling;N=i,es=a,ge=u}ud(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,N=s):ud(e)}}function ud(e){for(;N!==null;){var t=N;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ge||yo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ge)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ke(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Gc(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Gc(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&di(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}ge||t.flags&512&&dl(t)}catch(m){Z(t,t.return,m)}}if(t===e){N=null;break}if(n=t.sibling,n!==null){n.return=t.return,N=n;break}N=t.return}}function cd(e){for(;N!==null;){var t=N;if(t===e){N=null;break}var n=t.sibling;if(n!==null){n.return=t.return,N=n;break}N=t.return}}function dd(e){for(;N!==null;){var t=N;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{yo(4,t)}catch(l){Z(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){Z(t,i,l)}}var s=t.return;try{dl(t)}catch(l){Z(t,s,l)}break;case 5:var o=t.return;try{dl(t)}catch(l){Z(t,o,l)}}}catch(l){Z(t,t.return,l)}if(t===e){N=null;break}var a=t.sibling;if(a!==null){a.return=t.return,N=a;break}N=t.return}}var Wv=Math.ceil,Ks=Ft.ReactCurrentDispatcher,wu=Ft.ReactCurrentOwner,ze=Ft.ReactCurrentBatchConfig,F=0,le=null,ne=null,de=0,Ne=0,nr=pn(0),se=0,ki=null,bn=0,vo=0,Su=0,ni=null,xe=null,Eu=0,vr=1/0,wt=null,Gs=!1,pl=null,ln=null,ts=!1,tn=null,qs=0,ri=0,ml=null,ms=-1,gs=0;function we(){return F&6?ee():ms!==-1?ms:ms=ee()}function un(e){return e.mode&1?F&2&&de!==0?de&-de:Cv.transition!==null?(gs===0&&(gs=sh()),gs):(e=$,e!==0||(e=window.event,e=e===void 0?16:fh(e.type)),e):1}function Ze(e,t,n,r){if(50<ri)throw ri=0,ml=null,Error(_(185));Ti(e,n,r),(!(F&2)||e!==le)&&(e===le&&(!(F&2)&&(vo|=n),se===4&&qt(e,de)),Re(e,r),n===1&&F===0&&!(t.mode&1)&&(vr=ee()+500,po&&mn()))}function Re(e,t){var n=e.callbackNode;Cy(e,t);var r=As(e,e===le?de:0);if(r===0)n!==null&&Sc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Sc(n),t===1)e.tag===0?Iv(fd.bind(null,e)):Ah(fd.bind(null,e)),Ev(function(){!(F&6)&&mn()}),n=null;else{switch(oh(r)){case 1:n=Gl;break;case 4:n=rh;break;case 16:n=Ns;break;case 536870912:n=ih;break;default:n=Ns}n=Pp(n,kp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function kp(e,t){if(ms=-1,gs=0,F&6)throw Error(_(327));var n=e.callbackNode;if(ur()&&e.callbackNode!==n)return null;var r=As(e,e===le?de:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ys(e,r);else{t=r;var i=F;F|=2;var s=xp();(le!==e||de!==t)&&(wt=null,vr=ee()+500,xn(e,t));do try{Kv();break}catch(a){_p(e,a)}while(!0);ou(),Ks.current=s,F=i,ne!==null?t=0:(le=null,de=0,t=se)}if(t!==0){if(t===2&&(i=Ba(e),i!==0&&(r=i,t=gl(e,i))),t===1)throw n=ki,xn(e,0),qt(e,r),Re(e,ee()),n;if(t===6)qt(e,r);else{if(i=e.current.alternate,!(r&30)&&!Hv(i)&&(t=Ys(e,r),t===2&&(s=Ba(e),s!==0&&(r=s,t=gl(e,s))),t===1))throw n=ki,xn(e,0),qt(e,r),Re(e,ee()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(_(345));case 2:vn(e,xe,wt);break;case 3:if(qt(e,r),(r&130023424)===r&&(t=Eu+500-ee(),10<t)){if(As(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){we(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Qa(vn.bind(null,e,xe,wt),t);break}vn(e,xe,wt);break;case 4:if(qt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-Xe(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=ee()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Wv(r/1960))-r,10<r){e.timeoutHandle=Qa(vn.bind(null,e,xe,wt),r);break}vn(e,xe,wt);break;case 5:vn(e,xe,wt);break;default:throw Error(_(329))}}}return Re(e,ee()),e.callbackNode===n?kp.bind(null,e):null}function gl(e,t){var n=ni;return e.current.memoizedState.isDehydrated&&(xn(e,t).flags|=256),e=Ys(e,t),e!==2&&(t=xe,xe=n,t!==null&&yl(t)),e}function yl(e){xe===null?xe=e:xe.push.apply(xe,e)}function Hv(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!tt(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function qt(e,t){for(t&=~Su,t&=~vo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Xe(t),r=1<<n;e[n]=-1,t&=~r}}function fd(e){if(F&6)throw Error(_(327));ur();var t=As(e,0);if(!(t&1))return Re(e,ee()),null;var n=Ys(e,t);if(e.tag!==0&&n===2){var r=Ba(e);r!==0&&(t=r,n=gl(e,r))}if(n===1)throw n=ki,xn(e,0),qt(e,t),Re(e,ee()),n;if(n===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,vn(e,xe,wt),Re(e,ee()),null}function ku(e,t){var n=F;F|=1;try{return e(t)}finally{F=n,F===0&&(vr=ee()+500,po&&mn())}}function Ln(e){tn!==null&&tn.tag===0&&!(F&6)&&ur();var t=F;F|=1;var n=ze.transition,r=$;try{if(ze.transition=null,$=1,e)return e()}finally{$=r,ze.transition=n,F=t,!(F&6)&&mn()}}function _u(){Ne=nr.current,K(nr)}function xn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Sv(n)),ne!==null)for(n=ne.return;n!==null;){var r=n;switch(ru(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&js();break;case 3:gr(),K(Ce),K(ye),fu();break;case 5:du(r);break;case 4:gr();break;case 13:K(Q);break;case 19:K(Q);break;case 10:au(r.type._context);break;case 22:case 23:_u()}n=n.return}if(le=e,ne=e=cn(e.current,null),de=Ne=t,se=0,ki=null,Su=vo=bn=0,xe=ni=null,En!==null){for(t=0;t<En.length;t++)if(n=En[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}En=null}return e}function _p(e,t){do{var n=ne;try{if(ou(),fs.current=Vs,Hs){for(var r=J.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Hs=!1}if(An=0,ae=ie=J=null,ei=!1,wi=0,wu.current=null,n===null||n.return===null){se=1,ki=t,ne=null;break}e:{var s=e,o=n.return,a=n,l=t;if(t=de,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=Zc(o);if(v!==null){v.flags&=-257,ed(v,o,a,s,t),v.mode&1&&Xc(s,u,t),t=v,l=u;var w=t.updateQueue;if(w===null){var S=new Set;S.add(l),t.updateQueue=S}else w.add(l);break e}else{if(!(t&1)){Xc(s,u,t),xu();break e}l=Error(_(426))}}else if(G&&a.mode&1){var I=Zc(o);if(I!==null){!(I.flags&65536)&&(I.flags|=256),ed(I,o,a,s,t),iu(yr(l,a));break e}}s=l=yr(l,a),se!==4&&(se=2),ni===null?ni=[s]:ni.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var h=op(s,l,t);Kc(s,h);break e;case 1:a=l;var p=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(ln===null||!ln.has(g)))){s.flags|=65536,t&=-t,s.lanes|=t;var E=ap(s,a,t);Kc(s,E);break e}}s=s.return}while(s!==null)}Cp(n)}catch(x){t=x,ne===n&&n!==null&&(ne=n=n.return);continue}break}while(!0)}function xp(){var e=Ks.current;return Ks.current=Vs,e===null?Vs:e}function xu(){(se===0||se===3||se===2)&&(se=4),le===null||!(bn&268435455)&&!(vo&268435455)||qt(le,de)}function Ys(e,t){var n=F;F|=2;var r=xp();(le!==e||de!==t)&&(wt=null,xn(e,t));do try{Vv();break}catch(i){_p(e,i)}while(!0);if(ou(),F=n,Ks.current=r,ne!==null)throw Error(_(261));return le=null,de=0,se}function Vv(){for(;ne!==null;)Ip(ne)}function Kv(){for(;ne!==null&&!yy();)Ip(ne)}function Ip(e){var t=Rp(e.alternate,e,Ne);e.memoizedProps=e.pendingProps,t===null?Cp(e):ne=t,wu.current=null}function Cp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Uv(n,t),n!==null){n.flags&=32767,ne=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{se=6,ne=null;return}}else if(n=Fv(n,t,Ne),n!==null){ne=n;return}if(t=t.sibling,t!==null){ne=t;return}ne=t=e}while(t!==null);se===0&&(se=5)}function vn(e,t,n){var r=$,i=ze.transition;try{ze.transition=null,$=1,Gv(e,t,n,r)}finally{ze.transition=i,$=r}return null}function Gv(e,t,n,r){do ur();while(tn!==null);if(F&6)throw Error(_(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(Ty(e,s),e===le&&(ne=le=null,de=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ts||(ts=!0,Pp(Ns,function(){return ur(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=ze.transition,ze.transition=null;var o=$;$=1;var a=F;F|=4,wu.current=null,$v(e,n),Sp(n,e),hv(qa),bs=!!Ga,qa=Ga=null,e.current=n,Bv(n),vy(),F=a,$=o,ze.transition=s}else e.current=n;if(ts&&(ts=!1,tn=e,qs=i),s=e.pendingLanes,s===0&&(ln=null),Ey(n.stateNode),Re(e,ee()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Gs)throw Gs=!1,e=pl,pl=null,e;return qs&1&&e.tag!==0&&ur(),s=e.pendingLanes,s&1?e===ml?ri++:(ri=0,ml=e):ri=0,mn(),null}function ur(){if(tn!==null){var e=oh(qs),t=ze.transition,n=$;try{if(ze.transition=null,$=16>e?16:e,tn===null)var r=!1;else{if(e=tn,tn=null,qs=0,F&6)throw Error(_(331));var i=F;for(F|=4,N=e.current;N!==null;){var s=N,o=s.child;if(N.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(N=u;N!==null;){var d=N;switch(d.tag){case 0:case 11:case 15:ti(8,d,s)}var f=d.child;if(f!==null)f.return=d,N=f;else for(;N!==null;){d=N;var m=d.sibling,v=d.return;if(yp(d),d===u){N=null;break}if(m!==null){m.return=v,N=m;break}N=v}}}var w=s.alternate;if(w!==null){var S=w.child;if(S!==null){w.child=null;do{var I=S.sibling;S.sibling=null,S=I}while(S!==null)}}N=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,N=o;else e:for(;N!==null;){if(s=N,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ti(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,N=h;break e}N=s.return}}var p=e.current;for(N=p;N!==null;){o=N;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,N=g;else e:for(o=p;N!==null;){if(a=N,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:yo(9,a)}}catch(x){Z(a,a.return,x)}if(a===o){N=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,N=E;break e}N=a.return}}if(F=i,mn(),ut&&typeof ut.onPostCommitFiberRoot=="function")try{ut.onPostCommitFiberRoot(lo,e)}catch{}r=!0}return r}finally{$=n,ze.transition=t}}return!1}function hd(e,t,n){t=yr(n,t),t=op(e,t,1),e=an(e,t,1),t=we(),e!==null&&(Ti(e,1,t),Re(e,t))}function Z(e,t,n){if(e.tag===3)hd(e,e,n);else for(;t!==null;){if(t.tag===3){hd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ln===null||!ln.has(r))){e=yr(n,e),e=ap(t,e,1),t=an(t,e,1),e=we(),t!==null&&(Ti(t,1,e),Re(t,e));break}}t=t.return}}function qv(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=we(),e.pingedLanes|=e.suspendedLanes&n,le===e&&(de&n)===n&&(se===4||se===3&&(de&130023424)===de&&500>ee()-Eu?xn(e,0):Su|=n),Re(e,t)}function Tp(e,t){t===0&&(e.mode&1?(t=Vi,Vi<<=1,!(Vi&130023424)&&(Vi=4194304)):t=1);var n=we();e=bt(e,t),e!==null&&(Ti(e,t,n),Re(e,n))}function Yv(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Tp(e,n)}function Qv(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(t),Tp(e,n)}var Rp;Rp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ce.current)Ie=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ie=!1,Mv(e,t,n);Ie=!!(e.flags&131072)}else Ie=!1,G&&t.flags&1048576&&bh(t,Us,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ps(e,t),e=t.pendingProps;var i=hr(t,ye.current);lr(t,n),i=pu(null,t,r,e,i,n);var s=mu();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Te(r)?(s=!0,Ms(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,uu(t),i.updater=go,t.stateNode=i,i._reactInternals=t,rl(t,r,e,n),t=ol(null,t,r,!0,s,n)):(t.tag=0,G&&s&&nu(t),ve(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ps(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Xv(r),e=Ke(r,e),i){case 0:t=sl(null,t,r,e,n);break e;case 1:t=rd(null,t,r,e,n);break e;case 11:t=td(null,t,r,e,n);break e;case 14:t=nd(null,t,r,Ke(r.type,e),n);break e}throw Error(_(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ke(r,i),sl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ke(r,i),rd(e,t,r,i,n);case 3:e:{if(dp(t),e===null)throw Error(_(387));r=t.pendingProps,s=t.memoizedState,i=s.element,Fh(e,t),Bs(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=yr(Error(_(423)),t),t=id(e,t,r,n,i);break e}else if(r!==i){i=yr(Error(_(424)),t),t=id(e,t,r,n,i);break e}else for(Ae=on(t.stateNode.containerInfo.firstChild),be=t,G=!0,Ye=null,n=jh(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(pr(),r===i){t=Lt(e,t,n);break e}ve(e,t,r,n)}t=t.child}return t;case 5:return Uh(t),e===null&&el(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,Ya(r,i)?o=null:s!==null&&Ya(r,s)&&(t.flags|=32),cp(e,t),ve(e,t,o,n),t.child;case 6:return e===null&&el(t),null;case 13:return fp(e,t,n);case 4:return cu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=mr(t,null,r,n):ve(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ke(r,i),td(e,t,r,i,n);case 7:return ve(e,t,t.pendingProps,n),t.child;case 8:return ve(e,t,t.pendingProps.children,n),t.child;case 12:return ve(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,H(zs,r._currentValue),r._currentValue=o,s!==null)if(tt(s.value,o)){if(s.children===i.children&&!Ce.current){t=Lt(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Ct(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),tl(s.return,n,t),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(_(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),tl(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ve(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,lr(t,n),i=$e(i),r=r(i),t.flags|=1,ve(e,t,r,n),t.child;case 14:return r=t.type,i=Ke(r,t.pendingProps),i=Ke(r.type,i),nd(e,t,r,i,n);case 15:return lp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ke(r,i),ps(e,t),t.tag=1,Te(r)?(e=!0,Ms(t)):e=!1,lr(t,n),sp(t,r,i),rl(t,r,i,n),ol(null,t,r,!0,e,n);case 19:return hp(e,t,n);case 22:return up(e,t,n)}throw Error(_(156,t.tag))};function Pp(e,t){return nh(e,t)}function Jv(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ue(e,t,n,r){return new Jv(e,t,n,r)}function Iu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Xv(e){if(typeof e=="function")return Iu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Hl)return 11;if(e===Vl)return 14}return 2}function cn(e,t){var n=e.alternate;return n===null?(n=Ue(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ys(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")Iu(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Kn:return In(n.children,i,s,t);case Wl:o=8,i|=8;break;case Ta:return e=Ue(12,n,t,i|2),e.elementType=Ta,e.lanes=s,e;case Ra:return e=Ue(13,n,t,i),e.elementType=Ra,e.lanes=s,e;case Pa:return e=Ue(19,n,t,i),e.elementType=Pa,e.lanes=s,e;case Uf:return wo(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Mf:o=10;break e;case Ff:o=9;break e;case Hl:o=11;break e;case Vl:o=14;break e;case Vt:o=16,r=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return t=Ue(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function In(e,t,n,r){return e=Ue(7,e,r,t),e.lanes=n,e}function wo(e,t,n,r){return e=Ue(22,e,r,t),e.elementType=Uf,e.lanes=n,e.stateNode={isHidden:!1},e}function la(e,t,n){return e=Ue(6,e,null,t),e.lanes=n,e}function ua(e,t,n){return t=Ue(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Zv(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Wo(0),this.expirationTimes=Wo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wo(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Cu(e,t,n,r,i,s,o,a,l){return e=new Zv(e,t,n,a,l),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Ue(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},uu(s),e}function ew(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Vn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Np(e){if(!e)return fn;e=e._reactInternals;e:{if($n(e)!==e||e.tag!==1)throw Error(_(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Te(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(_(171))}if(e.tag===1){var n=e.type;if(Te(n))return Nh(e,n,t)}return t}function Ap(e,t,n,r,i,s,o,a,l){return e=Cu(n,r,!0,e,i,s,o,a,l),e.context=Np(null),n=e.current,r=we(),i=un(n),s=Ct(r,i),s.callback=t??null,an(n,s,i),e.current.lanes=i,Ti(e,i,r),Re(e,r),e}function So(e,t,n,r){var i=t.current,s=we(),o=un(i);return n=Np(n),t.context===null?t.context=n:t.pendingContext=n,t=Ct(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=an(i,t,o),e!==null&&(Ze(e,i,o,s),ds(e,i,o)),o}function Qs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function pd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Tu(e,t){pd(e,t),(e=e.alternate)&&pd(e,t)}function tw(){return null}var bp=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ru(e){this._internalRoot=e}Eo.prototype.render=Ru.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(_(409));So(e,t,null,null)};Eo.prototype.unmount=Ru.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ln(function(){So(null,e,null,null)}),t[At]=null}};function Eo(e){this._internalRoot=e}Eo.prototype.unstable_scheduleHydration=function(e){if(e){var t=uh();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Gt.length&&t!==0&&t<Gt[n].priority;n++);Gt.splice(n,0,e),n===0&&dh(e)}};function Pu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ko(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function md(){}function nw(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Qs(o);s.call(u)}}var o=Ap(t,r,e,0,null,!1,!1,"",md);return e._reactRootContainer=o,e[At]=o.current,pi(e.nodeType===8?e.parentNode:e),Ln(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Qs(l);a.call(u)}}var l=Cu(e,0,!1,null,null,!1,!1,"",md);return e._reactRootContainer=l,e[At]=l.current,pi(e.nodeType===8?e.parentNode:e),Ln(function(){So(t,l,n,r)}),l}function _o(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Qs(o);a.call(l)}}So(t,o,e,i)}else o=nw(n,t,e,i,r);return Qs(o)}ah=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Hr(t.pendingLanes);n!==0&&(ql(t,n|1),Re(t,ee()),!(F&6)&&(vr=ee()+500,mn()))}break;case 13:Ln(function(){var r=bt(e,1);if(r!==null){var i=we();Ze(r,e,1,i)}}),Tu(e,1)}};Yl=function(e){if(e.tag===13){var t=bt(e,134217728);if(t!==null){var n=we();Ze(t,e,134217728,n)}Tu(e,134217728)}};lh=function(e){if(e.tag===13){var t=un(e),n=bt(e,t);if(n!==null){var r=we();Ze(n,e,t,r)}Tu(e,t)}};uh=function(){return $};ch=function(e,t){var n=$;try{return $=e,t()}finally{$=n}};Ua=function(e,t,n){switch(t){case"input":if(ba(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ho(r);if(!i)throw Error(_(90));$f(r),ba(r,i)}}}break;case"textarea":Wf(e,n);break;case"select":t=n.value,t!=null&&ir(e,!!n.multiple,t,!1)}};Qf=ku;Jf=Ln;var rw={usingClientEntryPoint:!1,Events:[Pi,Qn,ho,qf,Yf,ku]},zr={findFiberByHostInstance:Sn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},iw={bundleType:zr.bundleType,version:zr.version,rendererPackageName:zr.rendererPackageName,rendererConfig:zr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ft.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=eh(e),e===null?null:e.stateNode},findFiberByHostInstance:zr.findFiberByHostInstance||tw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ns=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ns.isDisabled&&ns.supportsFiber)try{lo=ns.inject(iw),ut=ns}catch{}}De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rw;De.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Pu(t))throw Error(_(200));return ew(e,t,null,n)};De.createRoot=function(e,t){if(!Pu(e))throw Error(_(299));var n=!1,r="",i=bp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Cu(e,1,!1,null,null,n,!1,r,i),e[At]=t.current,pi(e.nodeType===8?e.parentNode:e),new Ru(t)};De.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=eh(t),e=e===null?null:e.stateNode,e};De.flushSync=function(e){return Ln(e)};De.hydrate=function(e,t,n){if(!ko(t))throw Error(_(200));return _o(null,e,t,!0,n)};De.hydrateRoot=function(e,t,n){if(!Pu(e))throw Error(_(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=bp;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Ap(t,null,e,1,n??null,i,!1,s,o),e[At]=t.current,pi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Eo(t)};De.render=function(e,t,n){if(!ko(t))throw Error(_(200));return _o(null,e,t,!1,n)};De.unmountComponentAtNode=function(e){if(!ko(e))throw Error(_(40));return e._reactRootContainer?(Ln(function(){_o(null,null,e,!1,function(){e._reactRootContainer=null,e[At]=null})}),!0):!1};De.unstable_batchedUpdates=ku;De.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ko(n))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return _o(e,t,n,!1,r)};De.version="18.3.1-next-f1338f8080-20240426";function Lp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Lp)}catch(e){console.error(e)}}Lp(),Lf.exports=De;var sw=Lf.exports,Dp,gd=sw;Dp=gd.createRoot,gd.hydrateRoot;/**
 * react-router v7.18.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Nu=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,Op=/^[\\/]{2}/;function ow(e,t){return t+e.replace(/\\/g,"/")}var yd="popstate";function vd(e){return typeof e=="object"&&e!=null&&"pathname"in e&&"search"in e&&"hash"in e&&"state"in e&&"key"in e}function aw(e={}){function t(r,i){var u;let s=(u=i.state)==null?void 0:u.masked,{pathname:o,search:a,hash:l}=s||r.location;return vl("",{pathname:o,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default",s?{pathname:r.location.pathname,search:r.location.search,hash:r.location.hash}:void 0)}function n(r,i){return typeof i=="string"?i:Dn(i)}return uw(t,n,null,e)}function q(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function nt(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function lw(){return Math.random().toString(36).substring(2,10)}function wd(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function vl(e,t,n=null,r,i){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?Cr(t):t,state:n,key:t&&t.key||r||lw(),mask:i}}function Dn({pathname:e="/",search:t="",hash:n=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function Cr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function uw(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a="POP",l=null,u=d();u==null&&(u=0,o.replaceState({...o.state,idx:u},""));function d(){return(o.state||{idx:null}).idx}function f(){a="POP";let I=d(),h=I==null?null:I-u;u=I,l&&l({action:a,location:S.location,delta:h})}function m(I,h){a="PUSH";let p=vd(I)?I:vl(S.location,I,h);u=d()+1;let g=wd(p,u),E=S.createHref(p.mask||p);try{o.pushState(g,"",E)}catch(x){if(x instanceof DOMException&&x.name==="DataCloneError")throw x;i.location.assign(E)}s&&l&&l({action:a,location:S.location,delta:1})}function v(I,h){a="REPLACE";let p=vd(I)?I:vl(S.location,I,h);u=d();let g=wd(p,u),E=S.createHref(p.mask||p);o.replaceState(g,"",E),s&&l&&l({action:a,location:S.location,delta:0})}function w(I){return cw(i,I)}let S={get action(){return a},get location(){return e(i,o)},listen(I){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(yd,f),l=I,()=>{i.removeEventListener(yd,f),l=null}},createHref(I){return t(i,I)},createURL:w,encodeLocation(I){let h=w(I);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:m,replace:v,go(I){return o.go(I)}};return S}function cw(e,t,n=!1){let r="http://localhost";e&&(r=e.location.origin!=="null"?e.location.origin:e.location.href),q(r,"No window.location.(origin|href) available to create URL");let i=typeof t=="string"?t:Dn(t);return i=i.replace(/ $/,"%20"),!n&&Op.test(i)&&(i=r+i),new URL(i,r)}function jp(e,t,n="/"){return dw(e,t,n,!1)}function dw(e,t,n,r,i){let s=typeof t=="string"?Cr(t):t,o=Dt(s.pathname||"/",n);if(o==null)return null;let a=fw(e),l=null,u=_w(o);for(let d=0;l==null&&d<a.length;++d)l=kw(a[d],u,r);return l}function fw(e){let t=Mp(e);return hw(t),t}function Mp(e,t=[],n=[],r="",i=!1){let s=(o,a,l=i,u)=>{let d={relativePath:u===void 0?o.path||"":u,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};if(d.relativePath.startsWith("/")){if(!d.relativePath.startsWith(r)&&l)return;q(d.relativePath.startsWith(r),`Absolute route path "${d.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),d.relativePath=d.relativePath.slice(r.length)}let f=et([r,d.relativePath]),m=n.concat(d);o.children&&o.children.length>0&&(q(o.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${f}".`),Mp(o.children,t,m,f,l)),!(o.path==null&&!o.index)&&t.push({path:f,score:Sw(f,o.index),routesMeta:m.map((v,w)=>{let[S,I]=zp(v.relativePath,v.caseSensitive,w===m.length-1);return{...v,matcher:S,compiledParams:I}})})};return e.forEach((o,a)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))s(o,a);else for(let u of Fp(o.path))s(o,a,!0,u)}),t}function Fp(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Fp(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function hw(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Ew(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var pw=/^:[\w-]+$/,mw=3,gw=2,yw=1,vw=10,ww=-2,Sd=e=>e==="*";function Sw(e,t){let n=e.split("/"),r=n.length;return n.some(Sd)&&(r+=ww),t&&(r+=gw),n.filter(i=>!Sd(i)).reduce((i,s)=>i+(pw.test(s)?mw:s===""?yw:vw),r)}function Ew(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function kw(e,t,n=!1){let{routesMeta:r}=e,i={},s="/",o=[];for(let a=0;a<r.length;++a){let l=r[a],u=a===r.length-1,d=s==="/"?t:t.slice(s.length)||"/",f={path:l.relativePath,caseSensitive:l.caseSensitive,end:u},m=l.matcher&&l.compiledParams?Up(f,d,l.matcher,l.compiledParams):Js(f,d),v=l.route;if(!m&&u&&n&&!r[r.length-1].route.index&&(m=Js({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},d)),!m)return null;Object.assign(i,m.params),o.push({params:i,pathname:et([s,m.pathname]),pathnameBase:Cw(et([s,m.pathnameBase])),route:v}),m.pathnameBase!=="/"&&(s=et([s,m.pathnameBase]))}return o}function Js(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=zp(e.path,e.caseSensitive,e.end);return Up(e,t,n,r)}function Up(e,t,n,r){let i=t.match(n);if(!i)return null;let s=i[0],o=wr(s,1),a=i.slice(1);return{params:r.reduce((u,{paramName:d,isOptional:f},m)=>{if(d==="*"){let w=a[m]||"";o=wr(s.slice(0,s.length-w.length),1)}const v=a[m];return f&&!v?u[d]=void 0:u[d]=(v||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:e}}function zp(e,t=!1,n=!0){nt(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l,u,d)=>{if(r.push({paramName:a,isOptional:l!=null}),l){let f=d.charAt(u+o.length);return f&&f!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function _w(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return nt(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Dt(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function xw(e,t="/"){let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Cr(e):e,s;return n?(n=$p(n),n.startsWith("/")||n.startsWith("\\")?s=Ed(n.substring(1),"/"):s=Ed(n,t)):s=t,{pathname:s,search:Tw(r),hash:Rw(i)}}function Ed(e,t){let n=wr(t).split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ca(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Iw(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Au(e){let t=Iw(e);return t.map((n,r)=>r===t.length-1?n.pathname:n.pathnameBase)}function xo(e,t,n,r=!1){let i;typeof e=="string"?i=Cr(e):(i={...e},q(!i.pathname||!i.pathname.includes("?"),ca("?","pathname","search",i)),q(!i.pathname||!i.pathname.includes("#"),ca("#","pathname","hash",i)),q(!i.search||!i.search.includes("#"),ca("#","search","hash",i)));let s=e===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let f=t.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),f-=1;i.pathname=m.join("/")}a=f>=0?t[f]:"/"}let l=xw(i,a),u=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}var $p=e=>e.replace(/[\\/]{2,}/g,"/"),et=e=>$p(e.join("/"));function wr(e,t=0){let n=e.length;for(;n>t&&e.charCodeAt(n-1)===47;)n--;return n===e.length?e:e.slice(0,n)}var Cw=e=>wr(e).replace(/^\/*/,"/"),Tw=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Rw=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,Pw=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||"",this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function Nw(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}function Aw(e){let t=e.map(n=>n.route.path).filter(Boolean);return et(t)||"/"}var Bp=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Wp(e,t){let n=e;if(typeof n!="string"||!Nu.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(Bp)try{let s=new URL(window.location.href),o=Op.test(n)?new URL(ow(n,s.protocol)):new URL(n),a=Dt(o.pathname,t);o.origin===s.origin&&a!=null?n=a+o.search+o.hash:i=!0}catch{nt(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var kd=new URL("http://localhost");function bu(e){if(e.createURL)return e.createURL("/");try{return new URL(e.createHref("/"),kd)}catch{return kd}}function da(e,t){return e.origin===t.origin&&(e.origin!=="null"||e.protocol===t.protocol&&e.host===t.host)}function bw(e,t){if(e.startsWith("//"))return!0;let n=t.protocol.toLowerCase();return e.toLowerCase().startsWith(n)?t.host===""||e.slice(n.length).startsWith("//"):!1}function Lu(e,t,n,r){let i=null;try{i=e==null?null:new URL(e,n)}catch{}let s=new URL(t,n),o=i!=null&&!da(i,n),a=!da(s,n);if(r==="reject"){if(o||a)throw new Error("External navigation is not allowed")}else if(a&&(i==null||!bw(e,i)||!da(i,s)))throw new Error("External navigation is not allowed")}var Hp=["POST","PUT","PATCH","DELETE"];new Set(Hp);var Lw=["GET",...Hp];new Set(Lw);var Dw=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function Ow(e){try{return Dw.includes(new URL(e).protocol)}catch{return!1}}var Tr=y.createContext(null);Tr.displayName="DataRouter";var Io=y.createContext(null);Io.displayName="DataRouterState";var Vp=y.createContext(!1);function jw(){return y.useContext(Vp)}var Kp=y.createContext({isTransitioning:!1});Kp.displayName="ViewTransition";var Mw=y.createContext(new Map);Mw.displayName="Fetchers";var Fw=y.createContext(null);Fw.displayName="Await";var je=y.createContext(null);je.displayName="Navigation";var Ai=y.createContext(null);Ai.displayName="Location";var mt=y.createContext({outlet:null,matches:[],isDataRoute:!1});mt.displayName="Route";var Du=y.createContext(null);Du.displayName="RouteError";var Gp="REACT_ROUTER_ERROR",Uw="REDIRECT",zw="ROUTE_ERROR_RESPONSE";function $w(e){if(e.startsWith(`${Gp}:${Uw}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.location=="string"&&typeof t.reloadDocument=="boolean"&&typeof t.replace=="boolean")return t}catch{}}function Bw(e){if(e.startsWith(`${Gp}:${zw}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string")return new Pw(t.status,t.statusText,t.data)}catch{}}function Ww(e,{relative:t}={}){q(Rr(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=y.useContext(je),{hash:i,pathname:s,search:o}=bi(e,{relative:t}),a=s;return n!=="/"&&(a=s==="/"?n:et([n,s])),r.createHref({pathname:a,search:o,hash:i})}function Rr(){return y.useContext(Ai)!=null}function We(){return q(Rr(),"useLocation() may be used only in the context of a <Router> component."),y.useContext(Ai).location}var qp="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Yp(e){y.useContext(je).static||y.useLayoutEffect(e)}function Co(){let{isDataRoute:e}=y.useContext(mt);return e?n0():Hw()}function Hw(){q(Rr(),"useNavigate() may be used only in the context of a <Router> component.");let e=y.useContext(Tr),{basename:t,navigator:n}=y.useContext(je),{matches:r}=y.useContext(mt),{pathname:i}=We(),s=JSON.stringify(Au(r)),o=y.useRef(!1);return Yp(()=>{o.current=!0}),y.useCallback((l,u={})=>{if(nt(o.current,qp),!o.current)return;if(typeof l=="number"){n.go(l);return}let d=xo(l,JSON.parse(s),i,u.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:et([t,d.pathname])),Lu(typeof l=="string"?l:Dn(l),n.createHref(d),bu(n),"reject"),(u.replace?n.replace:n.push)(d,u.state,u)},[t,n,s,i,e])}y.createContext(null);function bi(e,{relative:t}={}){let{matches:n}=y.useContext(mt),{pathname:r}=We(),i=JSON.stringify(Au(n));return y.useMemo(()=>xo(e,JSON.parse(i),r,t==="path"),[e,i,r,t])}function Vw(e,t){return Qp(e,t)}function Qp(e,t,n){var I;q(Rr(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:r}=y.useContext(je),{matches:i}=y.useContext(mt),s=i[i.length-1],o=s?s.params:{},a=s?s.pathname:"/",l=s?s.pathnameBase:"/",u=s&&s.route;{let h=u&&u.path||"";Xp(a,!u||h.endsWith("*")||h.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${a}" (under <Route path="${h}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${h}"> to <Route path="${h==="/"?"*":`${h}/*`}">.`)}let d=We(),f;if(t){let h=typeof t=="string"?Cr(t):t;q(l==="/"||((I=h.pathname)==null?void 0:I.startsWith(l)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${l}" but pathname "${h.pathname}" was given in the \`location\` prop.`),f=h}else f=d;let m=f.pathname||"/",v=m;if(l!=="/"){let h=l.replace(/^\//,"").split("/");v="/"+m.replace(/^\//,"").split("/").slice(h.length).join("/")}let w=n&&n.state.matches.length?n.state.matches.map(h=>Object.assign(h,{route:n.manifest[h.route.id]||h.route})):jp(e,{pathname:v});nt(u||w!=null,`No routes matched location "${f.pathname}${f.search}${f.hash}" `),nt(w==null||w[w.length-1].route.element!==void 0||w[w.length-1].route.Component!==void 0||w[w.length-1].route.lazy!==void 0,`Matched leaf route at location "${f.pathname}${f.search}${f.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let S=Qw(w&&w.map(h=>Object.assign({},h,{params:Object.assign({},o,h.params),pathname:et([l,r.encodeLocation?r.encodeLocation(h.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:h.pathname]),pathnameBase:h.pathnameBase==="/"?l:et([l,r.encodeLocation?r.encodeLocation(h.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:h.pathnameBase])})),i,n);return t&&S?y.createElement(Ai.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...f},navigationType:"POP"}},S):S}function Kw(){let e=t0(),t=Nw(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},s={padding:"2px 4px",backgroundColor:r},o=null;return console.error("Error handled by React Router default ErrorBoundary:",e),o=y.createElement(y.Fragment,null,y.createElement("p",null,"💿 Hey developer 👋"),y.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",y.createElement("code",{style:s},"ErrorBoundary")," or"," ",y.createElement("code",{style:s},"errorElement")," prop on your route.")),y.createElement(y.Fragment,null,y.createElement("h2",null,"Unexpected Application Error!"),y.createElement("h3",{style:{fontStyle:"italic"}},t),n?y.createElement("pre",{style:i},n):null,o)}var Gw=y.createElement(Kw,null),Jp=class extends y.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error("React Router caught the following error during render",e)}render(){let e=this.state.error;if(this.context&&typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){const n=Bw(e.digest);n&&(e=n)}let t=e!==void 0?y.createElement(mt.Provider,{value:this.props.routeContext},y.createElement(Du.Provider,{value:e,children:this.props.component})):this.props.children;return this.context?y.createElement(qw,{error:e},t):t}};Jp.contextType=Vp;var fa=new WeakMap;function qw({children:e,error:t}){let{basename:n,navigator:r}=y.useContext(je);if(typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){let i=$w(t.digest);if(i){let s=fa.get(t);if(s)throw s;let o=Wp(i.location,n),a=o.absoluteURL||o.to;if(Lu(i.location,a,bu(r),"allow-explicit"),Ow(a))throw new Error("Invalid redirect location");if(Bp&&!fa.get(t))if(o.isExternal||i.reloadDocument)window.location.href=a;else{const l=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(o.to,{replace:i.replace}));throw fa.set(t,l),l}return y.createElement("meta",{httpEquiv:"refresh",content:`0;url=${a}`})}}return e}function Yw({routeContext:e,match:t,children:n}){let r=y.useContext(Tr);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),y.createElement(mt.Provider,{value:e},n)}function Qw(e,t=[],n){let r=n==null?void 0:n.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,s=r==null?void 0:r.errors;if(s!=null){let d=i.findIndex(f=>f.route.id&&(s==null?void 0:s[f.route.id])!==void 0);q(d>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(s).join(",")}`),i=i.slice(0,Math.min(i.length,d+1))}let o=!1,a=-1;if(n&&r){o=r.renderFallback;for(let d=0;d<i.length;d++){let f=i[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(a=d),f.route.id){let{loaderData:m,errors:v}=r,w=f.route.loader&&!m.hasOwnProperty(f.route.id)&&(!v||v[f.route.id]===void 0);if(f.route.lazy||w){n.isStatic&&(o=!0),a>=0?i=i.slice(0,a+1):i=[i[0]];break}}}}let l=n==null?void 0:n.onError,u=r&&l?(d,f)=>{var m,v;l(d,{location:r.location,params:((v=(m=r.matches)==null?void 0:m[0])==null?void 0:v.params)??{},pattern:Aw(r.matches),errorInfo:f})}:void 0;return i.reduceRight((d,f,m)=>{let v,w=!1,S=null,I=null;r&&(v=s&&f.route.id?s[f.route.id]:void 0,S=f.route.errorElement||Gw,o&&(a<0&&m===0?(Xp("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),w=!0,I=null):a===m&&(w=!0,I=f.route.hydrateFallbackElement||null)));let h=t.concat(i.slice(0,m+1)),p=()=>{let g;return v?g=S:w?g=I:f.route.Component?g=y.createElement(f.route.Component,null):f.route.element?g=f.route.element:g=d,y.createElement(Yw,{match:f,routeContext:{outlet:d,matches:h,isDataRoute:r!=null},children:g})};return r&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?y.createElement(Jp,{location:r.location,revalidation:r.revalidation,component:S,error:v,children:p(),routeContext:{outlet:null,matches:h,isDataRoute:!0},onError:u}):p()},null)}function Ou(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Jw(e){let t=y.useContext(Tr);return q(t,Ou(e)),t}function Xw(e){let t=y.useContext(Io);return q(t,Ou(e)),t}function Zw(e){let t=y.useContext(mt);return q(t,Ou(e)),t}function ju(e){let t=Zw(e),n=t.matches[t.matches.length-1];return q(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function e0(){return ju("useRouteId")}function t0(){var r;let e=y.useContext(Du),t=Xw("useRouteError"),n=ju("useRouteError");return e!==void 0?e:(r=t.errors)==null?void 0:r[n]}function n0(){let{router:e}=Jw("useNavigate"),t=ju("useNavigate"),n=y.useRef(!1);return Yp(()=>{n.current=!0}),y.useCallback(async(i,s={})=>{nt(n.current,qp),n.current&&(typeof i=="number"?await e.navigate(i):await e.navigate(i,{fromRouteId:t,...s}))},[e,t])}var _d={};function Xp(e,t,n){!t&&!_d[e]&&(_d[e]=!0,nt(!1,n))}y.memo(r0);function r0({routes:e,manifest:t,future:n,state:r,isStatic:i,onError:s}){return Qp(e,void 0,{manifest:t,state:r,isStatic:i,onError:s})}function rs({to:e,replace:t,state:n,relative:r}){q(Rr(),"<Navigate> may be used only in the context of a <Router> component.");let{static:i,navigator:s}=y.useContext(je);nt(!i,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:o}=y.useContext(mt),{pathname:a}=We(),l=Co(),u=xo(e,Au(o),a,r==="path");Lu(typeof e=="string"?e:Dn(e),s.createHref(u),bu(s),"reject");let d=JSON.stringify(u);return y.useEffect(()=>{l(JSON.parse(d),{replace:t,state:n,relative:r})},[l,d,r,t,n]),null}function Kr(e){q(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function i0({basename:e="/",children:t=null,location:n,navigationType:r="POP",navigator:i,static:s=!1,useTransitions:o}){q(!Rr(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let a=e.replace(/^\/*/,"/"),l=y.useMemo(()=>({basename:a,navigator:i,static:s,useTransitions:o,future:{}}),[a,i,s,o]);typeof n=="string"&&(n=Cr(n));let{pathname:u="/",search:d="",hash:f="",state:m=null,key:v="default",mask:w}=n,S=y.useMemo(()=>{let I=Dt(u,a);return I==null?null:{location:{pathname:I,search:d,hash:f,state:m,key:v,mask:w},navigationType:r}},[a,u,d,f,m,v,r,w]);return nt(S!=null,`<Router basename="${a}"> is not able to match the URL "${u}${d}${f}" because it does not start with the basename, so the <Router> won't render anything.`),S==null?null:y.createElement(je.Provider,{value:l},y.createElement(Ai.Provider,{children:t,value:S}))}function s0({children:e,location:t}){return Vw(wl(e),t)}function wl(e,t=[]){let n=[];return y.Children.forEach(e,(r,i)=>{if(!y.isValidElement(r))return;let s=[...t,i];if(r.type===y.Fragment){n.push.apply(n,wl(r.props.children,s));return}q(r.type===Kr,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),q(!r.props.index||!r.props.children,"An index route cannot have child routes.");let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=wl(r.props.children,s)),n.push(o)}),n}var vs="get",ws="application/x-www-form-urlencoded";function To(e){return typeof HTMLElement<"u"&&e instanceof HTMLElement}function o0(e){return To(e)&&e.tagName.toLowerCase()==="button"}function a0(e){return To(e)&&e.tagName.toLowerCase()==="form"}function l0(e){return To(e)&&e.tagName.toLowerCase()==="input"}function u0(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function c0(e,t){return e.button===0&&(!t||t==="_self")&&!u0(e)}var is=null;function d0(){if(is===null)try{new FormData(document.createElement("form"),0),is=!1}catch{is=!0}return is}var f0=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function ha(e){return e!=null&&!f0.has(e)?(nt(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ws}"`),null):e}function h0(e,t){let n,r,i,s,o;if(a0(e)){let a=e.getAttribute("action");r=a?Dt(a,t):null,n=e.getAttribute("method")||vs,i=ha(e.getAttribute("enctype"))||ws,s=new FormData(e)}else if(o0(e)||l0(e)&&(e.type==="submit"||e.type==="image")){let a=e.form;if(a==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let l=e.getAttribute("formaction")||a.getAttribute("action");if(r=l?Dt(l,t):null,n=e.getAttribute("formmethod")||a.getAttribute("method")||vs,i=ha(e.getAttribute("formenctype"))||ha(a.getAttribute("enctype"))||ws,s=new FormData(a,e),!d0()){let{name:u,type:d,value:f}=e;if(d==="image"){let m=u?`${u}.`:"";s.append(`${m}x`,"0"),s.append(`${m}y`,"0")}else u&&s.append(u,f)}}else{if(To(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=vs,r=null,i=ws,o=e}return s&&i==="text/plain"&&(o=s,s=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:s,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Mu(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Zp(e,t,n,r){let i=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return n?i.pathname.endsWith("/")?i.pathname=`${i.pathname}_.${r}`:i.pathname=`${i.pathname}.${r}`:i.pathname==="/"?i.pathname=`_root.${r}`:t&&Dt(i.pathname,t)==="/"?i.pathname=`${wr(t)}/_root.${r}`:i.pathname=`${wr(i.pathname)}.${r}`,i}async function p0(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function m0(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function g0(e,t,n){let r=await Promise.all(e.map(async i=>{let s=t.routes[i.route.id];if(s){let o=await p0(s,n);return o.links?o.links():[]}return[]}));return S0(r.flat(1).filter(m0).filter(i=>i.rel==="stylesheet"||i.rel==="preload").map(i=>i.rel==="stylesheet"?{...i,rel:"prefetch",as:"style"}:{...i,rel:"prefetch"}))}function xd(e,t,n,r,i,s){let o=(l,u)=>n[u]?l.route.id!==n[u].route.id:!0,a=(l,u)=>{var d;return n[u].pathname!==l.pathname||((d=n[u].route.path)==null?void 0:d.endsWith("*"))&&n[u].params["*"]!==l.params["*"]};return s==="assets"?t.filter((l,u)=>o(l,u)||a(l,u)):s==="data"?t.filter((l,u)=>{var f;let d=r.routes[l.route.id];if(!d||!d.hasLoader)return!1;if(o(l,u)||a(l,u))return!0;if(l.route.shouldRevalidate){let m=l.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:((f=n[0])==null?void 0:f.params)||{},nextUrl:new URL(e,window.origin),nextParams:l.params,defaultShouldRevalidate:!0});if(typeof m=="boolean")return m}return!0}):[]}function y0(e,t,{includeHydrateFallback:n}={}){return v0(e.map(r=>{let i=t.routes[r.route.id];if(!i)return[];let s=[i.module];return i.clientActionModule&&(s=s.concat(i.clientActionModule)),i.clientLoaderModule&&(s=s.concat(i.clientLoaderModule)),n&&i.hydrateFallbackModule&&(s=s.concat(i.hydrateFallbackModule)),i.imports&&(s=s.concat(i.imports)),s}).flat(1))}function v0(e){return[...new Set(e)]}function w0(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function S0(e,t){let n=new Set;return new Set(t),e.reduce((r,i)=>{let s=JSON.stringify(w0(i));return n.has(s)||(n.add(s),r.push({key:s,link:i})),r},[])}function Fu(){let e=y.useContext(Tr);return Mu(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function E0(){let e=y.useContext(Io);return Mu(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Uu=y.createContext(void 0);Uu.displayName="FrameworkContext";function Ro(){let e=y.useContext(Uu);return Mu(e,"You must render this element inside a <HydratedRouter> element"),e}function k0(e,t){let n=y.useContext(Uu),[r,i]=y.useState(!1),[s,o]=y.useState(!1),{onFocus:a,onBlur:l,onMouseEnter:u,onMouseLeave:d,onTouchStart:f}=t,m=y.useRef(null);y.useEffect(()=>{if(e==="render"&&o(!0),e==="viewport"){let S=h=>{h.forEach(p=>{o(p.isIntersecting)})},I=new IntersectionObserver(S,{threshold:.5});return m.current&&I.observe(m.current),()=>{I.disconnect()}}},[e]),y.useEffect(()=>{if(r){let S=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(S)}}},[r]);let v=()=>{i(!0)},w=()=>{i(!1),o(!1)};return n?e!=="intent"?[s,m,{}]:[s,m,{onFocus:$r(a,v),onBlur:$r(l,w),onMouseEnter:$r(u,v),onMouseLeave:$r(d,w),onTouchStart:$r(f,v)}]:[!1,m,{}]}function $r(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function _0({page:e,...t}){let n=jw(),{nonce:r}=Ro(),{router:i}=Fu(),s=y.useMemo(()=>jp(i.routes,e,i.basename),[i.routes,e,i.basename]);return s?(t.nonce==null&&r&&(t={...t,nonce:r}),n?y.createElement(I0,{page:e,matches:s,...t}):y.createElement(C0,{page:e,matches:s,...t})):null}function x0(e){let{manifest:t,routeModules:n}=Ro(),[r,i]=y.useState([]);return y.useEffect(()=>{let s=!1;return g0(e,t,n).then(o=>{s||i(o)}),()=>{s=!0}},[e,t,n]),r}function I0({page:e,matches:t,...n}){let r=We(),{future:i}=Ro(),{basename:s}=Fu(),o=y.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let a=Zp(e,s,i.v8_trailingSlashAwareDataRequests,"rsc"),l=!1,u=[];for(let d of t)typeof d.route.shouldRevalidate=="function"?l=!0:u.push(d.route.id);return l&&u.length>0&&a.searchParams.set("_routes",u.join(",")),[a.pathname+a.search]},[s,i.v8_trailingSlashAwareDataRequests,e,r,t]);return y.createElement(y.Fragment,null,o.map(a=>y.createElement("link",{key:a,rel:"prefetch",as:"fetch",href:a,...n})))}function C0({page:e,matches:t,...n}){let r=We(),{future:i,manifest:s,routeModules:o}=Ro(),{basename:a}=Fu(),{loaderData:l,matches:u}=E0(),d=y.useMemo(()=>xd(e,t,u,s,r,"data"),[e,t,u,s,r]),f=y.useMemo(()=>xd(e,t,u,s,r,"assets"),[e,t,u,s,r]),m=y.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let S=new Set,I=!1;if(t.forEach(p=>{var E;let g=s.routes[p.route.id];!g||!g.hasLoader||(!d.some(x=>x.route.id===p.route.id)&&p.route.id in l&&((E=o[p.route.id])!=null&&E.shouldRevalidate)||g.hasClientLoader?I=!0:S.add(p.route.id))}),S.size===0)return[];let h=Zp(e,a,i.v8_trailingSlashAwareDataRequests,"data");return I&&S.size>0&&h.searchParams.set("_routes",t.filter(p=>S.has(p.route.id)).map(p=>p.route.id).join(",")),[h.pathname+h.search]},[a,i.v8_trailingSlashAwareDataRequests,l,r,s,d,t,e,o]),v=y.useMemo(()=>y0(f,s),[f,s]),w=x0(f);return y.createElement(y.Fragment,null,m.map(S=>y.createElement("link",{key:S,rel:"prefetch",as:"fetch",href:S,...n})),v.map(S=>y.createElement("link",{key:S,rel:"modulepreload",href:S,...n})),w.map(({key:S,link:I})=>y.createElement("link",{key:S,nonce:n.nonce,...I,crossOrigin:I.crossOrigin??n.crossOrigin})))}function T0(...e){return t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var R0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{R0&&(window.__reactRouterVersion="7.18.4")}catch{}function P0({basename:e,children:t,useTransitions:n,window:r}){let i=y.useRef();i.current==null&&(i.current=aw({window:r,v5Compat:!0}));let s=i.current,[o,a]=y.useState({action:s.action,location:s.location}),l=y.useCallback(u=>{n===!1?a(u):y.startTransition(()=>a(u))},[n]);return y.useLayoutEffect(()=>s.listen(l),[s,l]),y.createElement(i0,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:s,useTransitions:n})}var Cn=y.forwardRef(function({onClick:t,discover:n="render",prefetch:r="none",relative:i,reloadDocument:s,replace:o,mask:a,state:l,target:u,to:d,preventScrollReset:f,viewTransition:m,defaultShouldRevalidate:v,...w},S){let{basename:I,navigator:h,useTransitions:p}=y.useContext(je),g=typeof d=="string"&&Nu.test(d),E=Wp(d,I);d=E.to;let x=Ww(d,{relative:i}),T=We(),C=null;if(a){let _e=xo(a,[],T.mask?T.mask.pathname:"/",!0);I!=="/"&&(_e.pathname=_e.pathname==="/"?I:et([I,_e.pathname])),C=h.createHref(_e)}let[R,j,b]=k0(r,w),U=L0(d,{replace:o,mask:a,state:l,target:u,preventScrollReset:f,relative:i,viewTransition:m,defaultShouldRevalidate:v,useTransitions:p});function oe(_e){t&&t(_e),_e.defaultPrevented||U(_e)}let te=!(E.isExternal||s),it=y.createElement("a",{...w,...b,href:(te?C:void 0)||E.absoluteURL||x,onClick:te?oe:t,ref:T0(S,j),target:u,"data-discover":!g&&n==="render"?"true":void 0});return R&&!g?y.createElement(y.Fragment,null,it,y.createElement(_0,{page:x})):it});Cn.displayName="Link";var N0=y.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:r="",end:i=!1,style:s,to:o,viewTransition:a,children:l,...u},d){let f=bi(o,{relative:u.relative}),m=We(),v=y.useContext(Io),{navigator:w,basename:S}=y.useContext(je),I=v!=null&&F0(f)&&a===!0,h=w.encodeLocation?w.encodeLocation(f).pathname:f.pathname,p=m.pathname,g=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;n||(p=p.toLowerCase(),g=g?g.toLowerCase():null,h=h.toLowerCase()),g&&S&&(g=Dt(g,S)||g);const E=h!=="/"&&h.endsWith("/")?h.length-1:h.length;let x=p===h||!i&&p.startsWith(h)&&p.charAt(E)==="/",T=g!=null&&(g===h||!i&&g.startsWith(h)&&g.charAt(h.length)==="/"),C={isActive:x,isPending:T,isTransitioning:I},R=x?t:void 0,j;typeof r=="function"?j=r(C):j=[r,x?"active":null,T?"pending":null,I?"transitioning":null].filter(Boolean).join(" ");let b=typeof s=="function"?s(C):s;return y.createElement(Cn,{...u,"aria-current":R,className:j,ref:d,style:b,to:o,viewTransition:a},typeof l=="function"?l(C):l)});N0.displayName="NavLink";var A0=y.forwardRef(({discover:e="render",fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:s,method:o=vs,action:a,onSubmit:l,relative:u,preventScrollReset:d,viewTransition:f,defaultShouldRevalidate:m,...v},w)=>{let{useTransitions:S}=y.useContext(je),I=j0(),h=M0(a,{relative:u}),p=o.toLowerCase()==="get"?"get":"post",g=typeof a=="string"&&Nu.test(a),E=x=>{if(l&&l(x),x.defaultPrevented)return;x.preventDefault();let T=x.nativeEvent.submitter,C=(T==null?void 0:T.getAttribute("formmethod"))||o,R=()=>I(T||x.currentTarget,{fetcherKey:t,method:C,navigate:n,replace:i,state:s,relative:u,preventScrollReset:d,viewTransition:f,defaultShouldRevalidate:m});S&&n!==!1?y.startTransition(()=>R()):R()};return y.createElement("form",{ref:w,method:p,action:h,onSubmit:r?l:E,...v,"data-discover":!g&&e==="render"?"true":void 0})});A0.displayName="Form";function b0(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function em(e){let t=y.useContext(Tr);return q(t,b0(e)),t}function L0(e,{target:t,replace:n,mask:r,state:i,preventScrollReset:s,relative:o,viewTransition:a,defaultShouldRevalidate:l,useTransitions:u}={}){let d=Co(),f=We(),m=bi(e,{relative:o});return y.useCallback(v=>{if(c0(v,t)){v.preventDefault();let w=n!==void 0?n:Dn(f)===Dn(m),S=()=>d(e,{replace:w,mask:r,state:i,preventScrollReset:s,relative:o,viewTransition:a,defaultShouldRevalidate:l});u?y.startTransition(()=>S()):S()}},[f,d,m,n,r,i,t,e,s,o,a,l,u])}var D0=0,O0=()=>`__${String(++D0)}__`;function j0(){let{router:e}=em("useSubmit"),{basename:t}=y.useContext(je),n=e0(),r=e.fetch,i=e.navigate;return y.useCallback(async(s,o={})=>{let{action:a,method:l,encType:u,formData:d,body:f}=h0(s,t);if(o.navigate===!1){let m=o.fetcherKey||O0();await r(m,n,o.action||a,{defaultShouldRevalidate:o.defaultShouldRevalidate,preventScrollReset:o.preventScrollReset,formData:d,body:f,formMethod:o.method||l,formEncType:o.encType||u,flushSync:o.flushSync})}else await i(o.action||a,{defaultShouldRevalidate:o.defaultShouldRevalidate,preventScrollReset:o.preventScrollReset,formData:d,body:f,formMethod:o.method||l,formEncType:o.encType||u,replace:o.replace,state:o.state,fromRouteId:n,flushSync:o.flushSync,viewTransition:o.viewTransition})},[r,i,t,n])}function M0(e,{relative:t}={}){let{basename:n}=y.useContext(je),r=y.useContext(mt);q(r,"useFormAction must be used inside a RouteContext");let[i]=r.matches.slice(-1),s={...bi(e||".",{relative:t})},o=We();if(e==null){s.search=o.search;let a=new URLSearchParams(s.search),l=a.getAll("index");if(l.some(d=>d==="")){a.delete("index"),l.filter(f=>f).forEach(f=>a.append("index",f));let d=a.toString();s.search=d?`?${d}`:""}}return(!e||e===".")&&i.route.index&&(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(s.pathname=s.pathname==="/"?n:et([n,s.pathname])),Dn(s)}function F0(e,{relative:t}={}){let n=y.useContext(Kp);q(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=em("useViewTransitionState"),i=bi(e,{relative:t});if(!n.isTransitioning)return!1;let s=Dt(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Dt(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Js(i.pathname,o)!=null||Js(i.pathname,s)!=null}const U0=()=>{};var Id={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tm=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},z0=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},nm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,a=o?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,d=s>>2,f=(s&3)<<4|a>>4;let m=(a&15)<<2|u>>6,v=u&63;l||(v=64,o||(m=64)),r.push(n[d],n[f],n[m],n[v])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(tm(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):z0(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const f=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||a==null||u==null||f==null)throw new $0;const m=s<<2|a>>4;if(r.push(m),u!==64){const v=a<<4&240|u>>2;if(r.push(v),f!==64){const w=u<<6&192|f;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class $0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const B0=function(e){const t=tm(e);return nm.encodeByteArray(t,!0)},rm=function(e){return B0(e).replace(/\./g,"")},im=function(e){try{return nm.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H0=()=>W0().__FIREBASE_DEFAULTS__,V0=()=>{if(typeof process>"u"||typeof Id>"u")return;const e=Id.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},K0=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&im(e[1]);return t&&JSON.parse(t)},zu=()=>{try{return U0()||H0()||V0()||K0()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},G0=e=>{var t,n;return(n=(t=zu())==null?void 0:t.emulatorHosts)==null?void 0:n[e]},sm=()=>{var e;return(e=zu())==null?void 0:e.config},om=e=>{var t;return(t=zu())==null?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function q0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Se())}function Y0(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Q0(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function J0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function X0(){const e=Se();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function lm(){try{return typeof indexedDB=="object"}catch{return!1}}function um(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)==null?void 0:s.message)||"")}}catch(n){t(n)}})}function Z0(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eS="FirebaseError";class Ut extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=eS,Object.setPrototypeOf(this,Ut.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Bn.prototype.create)}}class Bn{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?tS(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Ut(i,a,r)}}function tS(e,t){try{let n=0,r="";for(;n<e.length;){const i=e.indexOf("{$",n);if(i===-1){r+=e.substring(n);break}const s=e.indexOf("}",i+2);if(s===-1){r+=e.substring(n);break}const o=e.substring(i+2,s),a=t[o];r+=e.substring(n,i)+(a!=null?String(a):`<${o}?>`),n=s+1}return r}catch{return e}}function nS(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Sr(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if(Cd(s)&&Cd(o)){if(!Sr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Cd(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Li(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Gr(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(s)}}),t}function qr(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function rS(e,t){const n=new iS(e,t);return n.subscribe.bind(n)}class iS{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");sS(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=pa),i.error===void 0&&(i.error=pa),i.complete===void 0&&(i.complete=pa);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function sS(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function pa(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(e){return e&&e._delegate?e._delegate:e}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $u(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}async function oS(e){return(await fetch(e,{credentials:"include"})).ok}class pt{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aS{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new am;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){const n=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(t==null?void 0:t.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(uS(t))try{this.getOrInitializeService({instanceIdentifier:wn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=wn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=wn){return this.instances.has(t)}getOptions(t=wn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(t),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&t(s,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:lS(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=wn){return this.component?this.component.multipleInstances?t:wn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function lS(e){return e===wn?void 0:e}function uS(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cS{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new aS(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var W;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(W||(W={}));const dS={debug:W.DEBUG,verbose:W.VERBOSE,info:W.INFO,warn:W.WARN,error:W.ERROR,silent:W.SILENT},fS=W.INFO,hS={[W.DEBUG]:"log",[W.VERBOSE]:"log",[W.INFO]:"info",[W.WARN]:"warn",[W.ERROR]:"error"},pS=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=hS[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class cm{constructor(t){this.name=t,this._logLevel=fS,this._logHandler=pS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in W))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?dS[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,W.DEBUG,...t),this._logHandler(this,W.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,W.VERBOSE,...t),this._logHandler(this,W.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,W.INFO,...t),this._logHandler(this,W.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,W.WARN,...t),this._logHandler(this,W.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,W.ERROR,...t),this._logHandler(this,W.ERROR,...t)}}const mS=(e,t)=>t.some(n=>e instanceof n);let Td,Rd;function gS(){return Td||(Td=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function yS(){return Rd||(Rd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const dm=new WeakMap,Sl=new WeakMap,fm=new WeakMap,ma=new WeakMap,Bu=new WeakMap;function vS(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(Tt(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&dm.set(n,e)}).catch(()=>{}),Bu.set(t,e),t}function wS(e){if(Sl.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});Sl.set(e,t)}let El={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Sl.get(e);if(t==="objectStoreNames")return e.objectStoreNames||fm.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Tt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function SS(e){El=e(El)}function ES(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(ga(this),t,...n);return fm.set(r,t.sort?t.sort():[t]),Tt(r)}:yS().includes(e)?function(...t){return e.apply(ga(this),t),Tt(dm.get(this))}:function(...t){return Tt(e.apply(ga(this),t))}}function kS(e){return typeof e=="function"?ES(e):(e instanceof IDBTransaction&&wS(e),mS(e,gS())?new Proxy(e,El):e)}function Tt(e){if(e instanceof IDBRequest)return vS(e);if(ma.has(e))return ma.get(e);const t=kS(e);return t!==e&&(ma.set(e,t),Bu.set(t,e)),t}const ga=e=>Bu.get(e);function Po(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=Tt(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Tt(o.result),l.oldVersion,l.newVersion,Tt(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}function Ss(e,{blocked:t}={}){const n=indexedDB.deleteDatabase(e);return t&&n.addEventListener("blocked",r=>t(r.oldVersion,r)),Tt(n).then(()=>{})}const _S=["get","getKey","getAll","getAllKeys","count"],xS=["put","add","delete","clear"],ya=new Map;function Pd(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(ya.get(t))return ya.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=xS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||_S.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return ya.set(t,s),s}SS(e=>({...e,get:(t,n,r)=>Pd(t,n)||e.get(t,n,r),has:(t,n)=>!!Pd(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IS{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(CS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function CS(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const kl="@firebase/app",Nd="0.16.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ot=new cm("@firebase/app"),TS="@firebase/app-compat",RS="@firebase/analytics-compat",PS="@firebase/analytics",NS="@firebase/app-check-compat",AS="@firebase/app-check",bS="@firebase/auth",LS="@firebase/auth-compat",DS="@firebase/database",OS="@firebase/data-connect",jS="@firebase/database-compat",MS="@firebase/functions",FS="@firebase/functions-compat",US="@firebase/installations",zS="@firebase/installations-compat",$S="@firebase/messaging",BS="@firebase/messaging-compat",WS="@firebase/performance",HS="@firebase/performance-compat",VS="@firebase/remote-config",KS="@firebase/remote-config-compat",GS="@firebase/storage",qS="@firebase/storage-compat",YS="@firebase/firestore",QS="@firebase/ai",JS="@firebase/firestore-compat",XS="firebase",ZS="12.19.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _l="[DEFAULT]",eE={[kl]:"fire-core",[TS]:"fire-core-compat",[PS]:"fire-analytics",[RS]:"fire-analytics-compat",[AS]:"fire-app-check",[NS]:"fire-app-check-compat",[bS]:"fire-auth",[LS]:"fire-auth-compat",[DS]:"fire-rtdb",[OS]:"fire-data-connect",[jS]:"fire-rtdb-compat",[MS]:"fire-fn",[FS]:"fire-fn-compat",[US]:"fire-iid",[zS]:"fire-iid-compat",[$S]:"fire-fcm",[BS]:"fire-fcm-compat",[WS]:"fire-perf",[HS]:"fire-perf-compat",[VS]:"fire-rc",[KS]:"fire-rc-compat",[GS]:"fire-gcs",[qS]:"fire-gcs-compat",[YS]:"fire-fst",[JS]:"fire-fst-compat",[QS]:"fire-vertex","fire-js":"fire-js",[XS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xs=new Map,tE=new Map,xl=new Map;function Ad(e,t){try{e.container.addComponent(t)}catch(n){Ot.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function jt(e){const t=e.name;if(xl.has(t))return Ot.debug(`There were multiple attempts to register component ${t}.`),!1;xl.set(t,e);for(const n of Xs.values())Ad(n,e);for(const n of tE.values())Ad(n,e);return!0}function Di(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function Qe(e){return e==null?!1:e.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},_t=new Bn("app","Firebase",nE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{constructor(t,n,r){this._isDeleted=!1,this._options={...t},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new pt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw _t.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oi=ZS;function hm(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r={name:_l,automaticDataCollectionEnabled:!0,...t},i=r.name;if(typeof i!="string"||!i)throw _t.create("bad-app-name",{appName:String(i)});if(n||(n=sm()),!n)throw _t.create("no-options");const s=Xs.get(i);if(s)if(Sr(n,s.options)){if(Sr(r,s.config))return s;throw _t.create("duplicate-app",{appName:i,mismatchedParam:"config",oldValue:JSON.stringify(s.config),newValue:JSON.stringify(r)})}else throw _t.create("duplicate-app",{appName:i,mismatchedParam:"options",oldValue:JSON.stringify(s.options),newValue:JSON.stringify(n)});const o=new cS(i);for(const l of xl.values())o.addComponent(l);const a=new rE(n,r,o);return Xs.set(i,a),a}function pm(e=_l){const t=Xs.get(e);if(!t&&e===_l&&sm())return hm();if(!t)throw _t.create("no-app",{appName:e});return t}function dt(e,t,n){let r=eE[e]??e;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=t.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${t}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Ot.warn(o.join(" "));return}jt(new pt(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iE="firebase-heartbeat-database",sE=1,_i="firebase-heartbeat-store";let va=null;function mm(){return va||(va=Po(iE,sE,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(_i)}catch(n){console.warn(n)}}}}).catch(e=>{throw _t.create("idb-open",{originalErrorMessage:e.message})})),va}async function oE(e){try{const n=(await mm()).transaction(_i),r=await n.objectStore(_i).get(gm(e));return await n.done,r}catch(t){if(t instanceof Ut)Ot.warn(t.message);else{const n=_t.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Ot.warn(n.message)}}}async function bd(e,t){try{const r=(await mm()).transaction(_i,"readwrite");await r.objectStore(_i).put(t,gm(e)),await r.done}catch(n){if(n instanceof Ut)Ot.warn(n.message);else{const r=_t.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ot.warn(r.message)}}}function gm(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aE=1024,lE=30;class uE{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new dE(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ld();if(((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>lE){const o=fE(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Ot.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ld(),{heartbeatsToSend:r,unsentEntries:i}=cE(this._heartbeatsCache.heartbeats),s=rm(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Ot.warn(n),""}}}function Ld(){return new Date().toISOString().substring(0,10)}function cE(e,t=aE){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Dd(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Dd(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class dE{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return lm()?um().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await oE(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return bd(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return bd(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function Dd(e){return rm(JSON.stringify({version:2,heartbeats:e})).length}function fE(e){if(e.length===0)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hE(e){jt(new pt("platform-logger",t=>new IS(t),"PRIVATE")),jt(new pt("heartbeat",t=>new uE(t),"PRIVATE")),dt(kl,Nd,e),dt(kl,Nd,"esm2020"),dt("fire-js","")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */hE("");function ym(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const pE=ym,vm=new Bn("auth","Firebase",ym());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zs=new cm("@firebase/auth");function Es(e,...t){Zs.logLevel<=W.WARN&&Zs.warn(`Auth (${Oi}): ${e}`,...t)}function ks(e,...t){Zs.logLevel<=W.ERROR&&Zs.error(`Auth (${Oi}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(e,...t){throw Hu(e,...t)}function ft(e,...t){return Hu(e,...t)}function Wu(e,t,n){const r={...pE(),[t]:n};return new Bn("auth","Firebase",r).create(t,{appName:e.name})}function Rt(e){return Wu(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Hu(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return vm.create(e,...t)}function A(e,t,...n){if(!e)throw Hu(t,...n)}function xt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw ks(t),new Error(t)}function Mt(e,t){e||xt(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Il(){var e;return typeof self<"u"&&((e=self.location)==null?void 0:e.href)||""}function mE(){return Od()==="http:"||Od()==="https:"}function Od(){var e;return typeof self<"u"&&((e=self.location)==null?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(mE()||Q0()||"connection"in navigator)?navigator.onLine:!0}function yE(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(t,n){this.shortDelay=t,this.longDelay=n,Mt(n>t,"Short delay should be less than long delay!"),this.isMobile=q0()||J0()}get(){return gE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vu(e,t){Mt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;xt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;xt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;xt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wE=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],SE=new ji(3e4,6e4);function zt(e,t){return e.tenantId&&!t.tenantId?{...t,tenantId:e.tenantId}:t}async function $t(e,t,n,r,i={}){return Sm(e,i,async()=>{let s={},o={};r&&(t==="GET"?o=r:s={body:JSON.stringify(r)});const a=Li({...o,key:e.config.apiKey}).slice(1),l=await e._getAdditionalHeaders();l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode);const u={method:t,headers:l,...s};return Y0()||(u.referrerPolicy="strict-origin-when-cross-origin"),e.emulatorConfig&&$u(e.emulatorConfig.host)&&(u.credentials="include"),wm.fetch()(await Em(e,e.config.apiHost,n,a),u)})}async function Sm(e,t,n){e._canInitEmulator=!1;const r={...vE,...t};try{const i=new kE(e),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ss(e,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ss(e,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ss(e,"email-already-in-use",o);if(l==="USER_DISABLED")throw ss(e,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Wu(e,d,u);rt(e,d)}}catch(i){if(i instanceof Ut)throw i;rt(e,"network-request-failed",{message:String(i)})}}async function Mi(e,t,n,r,i={}){const s=await $t(e,t,n,r,i);return"mfaPendingCredential"in s&&rt(e,"multi-factor-auth-required",{_serverResponse:s}),s}async function Em(e,t,n,r){const i=`${t}${n}?${r}`,s=e,o=s.config.emulator?Vu(e.config,i):`${e.config.apiScheme}://${i}`;return wE.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function EE(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class kE{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ft(this.auth,"network-request-failed")),SE.get())})}}function ss(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ft(e,t,r);return i.customData._tokenResponse=n,i}function jd(e){return e!==void 0&&e.enterprise!==void 0}class _E{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return EE(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function xE(e,t){return $t(e,"GET","/v2/recaptchaConfig",zt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IE(e,t){return $t(e,"POST","/v1/accounts:delete",t)}async function eo(e,t){return $t(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ii(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function CE(e,t=!1){const n=He(e),r=await n.getIdToken(t),i=Ku(r);A(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ii(wa(i.auth_time)),issuedAtTime:ii(wa(i.iat)),expirationTime:ii(wa(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function wa(e){return Number(e)*1e3}function Ku(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return ks("JWT malformed, contained fewer than 3 sections"),null;try{const i=im(n);return i?JSON.parse(i):(ks("Failed to decode base64 JWT payload"),null)}catch(i){return ks("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Md(e){const t=Ku(e);return A(t,"internal-error"),A(typeof t.exp<"u","internal-error"),A(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xi(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Ut&&TE(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function TE({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RE{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){if(t){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ii(this.lastLoginAt),this.creationTime=ii(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function to(e){var f;const t=e.auth,n=await e.getIdToken(),r=await xi(e,eo(t,{idToken:n}));A(r==null?void 0:r.users.length,t,"internal-error");const i=r.users[0];e._notifyReloadListener(i);const s=(f=i.providerUserInfo)!=null&&f.length?km(i.providerUserInfo):[],o=NE(e.providerData,s),a=e.isAnonymous,l=!(e.email&&i.passwordHash)&&!(o!=null&&o.length),u=a?l:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Cl(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(e,d)}async function PE(e){const t=He(e);await to(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function NE(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function km(e){return e.map(({providerId:t,...n})=>({providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AE(e,t){const n=await Sm(e,{},async()=>{const r=Li({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=await Em(e,i,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:r};return e.emulatorConfig&&$u(e.emulatorConfig.host)&&(l.credentials="include"),wm.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function bE(e,t){return $t(e,"POST","/v2/accounts:revokeToken",zt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){A(t.idToken,"internal-error"),A(typeof t.idToken<"u","internal-error"),A(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Md(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){A(t.length!==0,"internal-error");const n=Md(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(A(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await AE(t,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new cr;return r&&(A(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),i&&(A(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),s&&(A(typeof s=="number","internal-error",{appName:t}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new cr,this.toJSON())}_performRefresh(){return xt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(e,t){A(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class Je{constructor({uid:t,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new RE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Cl(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const n=await xi(this,this.stsTokenManager.getToken(this.auth,t));return A(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return CE(this,t)}reload(){return PE(this)}_assign(t){this!==t&&(A(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>({...n})),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Je({...this,auth:t,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(t){A(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await to(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Qe(this.auth.app))return Promise.reject(Rt(this.auth));const t=await this.getIdToken();return await xi(this,IE(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>({...t})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,l=n._redirectEventId??void 0,u=n.createdAt??void 0,d=n.lastLoginAt??void 0,{uid:f,emailVerified:m,isAnonymous:v,providerData:w,stsTokenManager:S}=n;A(f&&S,t,"internal-error");const I=cr.fromJSON(this.name,S);A(typeof f=="string",t,"internal-error"),Ht(r,t.name),Ht(i,t.name),A(typeof m=="boolean",t,"internal-error"),A(typeof v=="boolean",t,"internal-error"),Ht(s,t.name),Ht(o,t.name),Ht(a,t.name),Ht(l,t.name),Ht(u,t.name),Ht(d,t.name);const h=new Je({uid:f,auth:t,email:i,emailVerified:m,displayName:r,isAnonymous:v,photoURL:o,phoneNumber:s,tenantId:a,stsTokenManager:I,createdAt:u,lastLoginAt:d});return w&&Array.isArray(w)&&(h.providerData=w.map(p=>({...p}))),l&&(h._redirectEventId=l),h}static async _fromIdTokenResponse(t,n,r=!1){const i=new cr;i.updateFromServerResponse(n);const s=new Je({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await to(s),s}static async _fromGetAccountInfoResponse(t,n,r){const i=n.users[0];A(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?km(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new cr;a.updateFromIdToken(r);const l=new Je({uid:i.localId,auth:t,stsTokenManager:a,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Cl(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fd=new Map;function It(e){Mt(e instanceof Function,"Expected a class definition");let t=Fd.get(e);return t?(Mt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Fd.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _m{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}_m.type="NONE";const Ud=_m;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _s(e,t,n){return`firebase:${e}:${t}:${n}`}class Tn{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=_s(this.userKey,i.apiKey,s),this.fullPersistenceKey=_s("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n);try{this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}catch{}}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const n=await eo(this.auth,{idToken:t}).catch(()=>{});return n?Je._fromGetAccountInfoResponse(this.auth,n,t):null}return Je._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){try{this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}catch{}}static async create(t,n,r="authUser"){if(!n.length)return new Tn(It(Ud),t,r);const i=(await Promise.all(n.map(async u=>{try{if(await u._isAvailable())return u}catch{return}}))).filter(u=>u);let s=i[0]||It(Ud);const o=_s(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const d=await u._get(o);if(d){let f;if(typeof d=="string"){const m=await eo(t,{idToken:d}).catch(()=>{});if(!m)break;f=await Je._fromGetAccountInfoResponse(t,m,d)}else f=Je._fromJSON(t,d);u!==s&&(a=f),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Tn(s,t,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Tn(s,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zd(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Tm(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(xm(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Pm(t))return"Blackberry";if(Nm(t))return"Webos";if(Im(t))return"Safari";if((t.includes("chrome/")||Cm(t))&&!t.includes("edge/"))return"Chrome";if(Rm(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function xm(e=Se()){return/firefox\//i.test(e)}function Im(e=Se()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Cm(e=Se()){return/crios\//i.test(e)}function Tm(e=Se()){return/iemobile/i.test(e)}function Rm(e=Se()){return/android/i.test(e)}function Pm(e=Se()){return/blackberry/i.test(e)}function Nm(e=Se()){return/webos/i.test(e)}function Gu(e=Se()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function LE(e=Se()){var t;return Gu(e)&&!!((t=window.navigator)!=null&&t.standalone)}function DE(){return X0()&&document.documentMode===10}function Am(e=Se()){return Gu(e)||Rm(e)||Nm(e)||Pm(e)||/windows phone/i.test(e)||Tm(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bm(e,t=[]){let n;switch(e){case"Browser":n=zd(Se());break;case"Worker":n=`${zd(Se())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Oi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OE{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=s=>new Promise((o,a)=>{try{const l=t(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jE(e,t={}){return $t(e,"GET","/v2/passwordPolicy",zt(e,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ME=6;class FE{constructor(t){var r;const n=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??ME,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=t.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=t.forceUpgradeOnSignin??!1,this.schemaVersion=t.schemaVersion}validatePassword(t){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,n),this.validatePasswordCharacterOptions(t,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UE{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $d(this),this.idTokenSubscription=new $d(this),this.beforeStateQueue=new OE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=vm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=It(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted){try{this.persistenceManager=await Tn.create(this,t)}catch(o){Es(`Failed to initialize persistence: ${o}`),this.persistenceManager=await Tn.create(this,[])}finally{(r=this._resolvePersistenceManagerAvailable)==null||r.call(this)}if(!this._deleted){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}try{await this.initializeCurrentUser(n)}catch(o){Es(`Failed to initialize current user: ${o}`),await this.directlySetCurrentUser(null).catch(()=>{})}this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await eo(this,{idToken:t}),r=await Je._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var s;if(Qe(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(t);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return A(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await to(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=yE()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Qe(this.app))return Promise.reject(Rt(this));const n=t?He(t):null;return n&&A(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&A(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Qe(this.app)?Promise.reject(Rt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Qe(this.app)?Promise.reject(Rt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(It(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await jE(this),n=new FE(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new Bn("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await bE(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)==null?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&It(t)||this._popupRedirectResolver;A(n,this,"argument-error"),this.redirectPersistenceManager=await Tn.create(this,[It(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(A(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}).catch(l=>{if(!o)if(typeof n!="function"&&n.error)n.error(l);else if(r)r(l);else throw l}),typeof n=="function"){const l=t.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=t.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(t){if(this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,this.persistenceManager)try{t?await this.persistenceManager.setCurrentUser(t):await this.persistenceManager.removeCurrentUser()}catch(n){const r=(n==null?void 0:n.message)||String(n),i=Wu(this,"internal-error",`An internal AuthError has occurred: ${r}`);throw i.customData={originalError:n},i}}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return A(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=bm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var n;if(Qe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return t!=null&&t.error&&Es(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function gn(e){return He(e)}class $d{constructor(t){this.auth=t,this.observer=null,this.addObserver=rS(n=>this.observer=n)}get next(){return A(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let No={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function zE(e){No=e}function Lm(e){return No.loadJS(e)}function $E(){return No.recaptchaEnterpriseScript}function BE(){return No.gapiScript}function WE(e){return`__${e}${Math.floor(Math.random()*1e6)}`}class HE{constructor(){this.enterprise=new VE}ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}class VE{ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KE="recaptcha-enterprise",Dm="NO_RECAPTCHA",Bd="onFirebaseAuthREInstanceReady";class Yt{constructor(t){this.type=KE,this.auth=gn(t)}async verify(t="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{xE(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new _E(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;jd(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:t}).then(u=>{o(u)}).catch(()=>{o(Dm)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new HE().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(async a=>{if(!n&&jd(window.grecaptcha)&&Yt.scriptInjectionDeferred)await Yt.scriptInjectionDeferred.promise,i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=$E();l.length!==0&&(l+=a+`&onload=${Bd}`),Yt.scriptInjectionDeferred=new am,window[Bd]=()=>{var u;(u=Yt.scriptInjectionDeferred)==null||u.resolve()},Lm(l).then(()=>{var u;return(u=Yt.scriptInjectionDeferred)==null?void 0:u.promise}).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}Yt.scriptInjectionDeferred=null;async function Wd(e,t,n,r=!1,i=!1){const s=new Yt(e);let o;if(i)o=Dm;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const a={...t};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,u=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function no(e,t,n,r,i){var s;if((s=e._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Wd(e,t,n,n==="getOobCode");return r(e,o)}else return r(e,t).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Wd(e,t,n,n==="getOobCode");return r(e,a)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GE(e,t){const n=Di(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Sr(s,t??{}))return i;rt(i,"already-initialized")}return n.initialize({options:t})}function qE(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(It);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function YE(e,t,n){const r=gn(e);A(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!1,s=Om(t),{host:o,port:a}=QE(t),l=a===null?"":`:${a}`,u={url:`${s}//${o}${l}/`},d=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){A(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),A(Sr(u,r.config.emulator)&&Sr(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,$u(o)?oS(`${s}//${o}${l}`):JE()}function Om(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function QE(e){const t=Om(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Hd(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Hd(o)}}}function Hd(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function JE(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return xt("not implemented")}_getIdTokenResponse(t){return xt("not implemented")}_linkToIdToken(t,n){return xt("not implemented")}_getReauthenticationResolver(t){return xt("not implemented")}}async function XE(e,t){return $t(e,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZE(e,t){return Mi(e,"POST","/v1/accounts:signInWithPassword",zt(e,t))}async function jm(e,t){return $t(e,"POST","/v1/accounts:sendOobCode",zt(e,t))}async function e1(e,t){return jm(e,t)}async function t1(e,t){return jm(e,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n1(e,t){return Mi(e,"POST","/v1/accounts:signInWithEmailLink",zt(e,t))}async function r1(e,t){return Mi(e,"POST","/v1/accounts:signInWithEmailLink",zt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii extends qu{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new Ii(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new Ii(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return no(t,n,"signInWithPassword",ZE);case"emailLink":return n1(t,{email:this._email,oobCode:this._password});default:rt(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return no(t,r,"signUpPassword",XE);case"emailLink":return r1(t,{idToken:n,email:this._email,oobCode:this._password});default:rt(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dr(e,t){return Mi(e,"POST","/v1/accounts:signInWithIdp",zt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i1="http://localhost";class On extends qu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new On(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):rt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new On(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return dr(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,dr(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,dr(t,n)}buildRequest(){const t={requestUri:i1,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Li(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s1(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function o1(e){const t=Gr(qr(e)).link,n=t?Gr(qr(t)).deep_link_id:null,r=Gr(qr(e)).deep_link_id;return(r?Gr(qr(r)).link:null)||r||n||t||e}class Yu{constructor(t){const n=Gr(qr(t)),r=n.apiKey??null,i=n.oobCode??null,s=s1(n.mode??null);A(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(t){const n=o1(t);try{return new Yu(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(){this.providerId=Pr.PROVIDER_ID}static credential(t,n){return Ii._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=Yu.parseLink(n);return A(r,"argument-error"),Ii._fromEmailAndCode(t,r.code,r.tenantId)}}Pr.PROVIDER_ID="password";Pr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Pr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi extends Mm{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt extends Fi{constructor(){super("facebook.com")}static credential(t){return On._fromParams({providerId:Qt.PROVIDER_ID,signInMethod:Qt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Qt.credentialFromTaggedObject(t)}static credentialFromError(t){return Qt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Qt.credential(t.oauthAccessToken)}catch{return null}}}Qt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Qt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt extends Fi{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return On._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Jt.credentialFromTaggedObject(t)}static credentialFromError(t){return Jt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Jt.credential(n,r)}catch{return null}}}Jt.GOOGLE_SIGN_IN_METHOD="google.com";Jt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt extends Fi{constructor(){super("github.com")}static credential(t){return On._fromParams({providerId:Xt.PROVIDER_ID,signInMethod:Xt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Xt.credentialFromTaggedObject(t)}static credentialFromError(t){return Xt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Xt.credential(t.oauthAccessToken)}catch{return null}}}Xt.GITHUB_SIGN_IN_METHOD="github.com";Xt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt extends Fi{constructor(){super("twitter.com")}static credential(t,n){return On._fromParams({providerId:Zt.PROVIDER_ID,signInMethod:Zt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Zt.credentialFromTaggedObject(t)}static credentialFromError(t){return Zt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Zt.credential(n,r)}catch{return null}}}Zt.TWITTER_SIGN_IN_METHOD="twitter.com";Zt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function a1(e,t){return Mi(e,"POST","/v1/accounts:signUp",zt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const s=await Je._fromIdTokenResponse(t,r,i),o=Vd(r);return new jn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=Vd(r);return new jn({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function Vd(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro extends Ut{constructor(t,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ro.prototype),this.customData={appName:t.name,tenantId:t.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new ro(t,n,r,i)}}function Fm(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ro._fromErrorAndOperation(e,s,t,r):s})}async function l1(e,t,n=!1){const r=await xi(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return jn._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function u1(e,t,n=!1){const{auth:r}=e;if(Qe(r.app))return Promise.reject(Rt(r));const i="reauthenticate";try{const s=await xi(e,Fm(r,i,t,e),n);A(s.idToken,r,"internal-error");const o=Ku(s.idToken);A(o,r,"internal-error");const{sub:a}=o;return A(e.uid===a,r,"user-mismatch"),jn._forOperation(e,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&rt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Um(e,t,n=!1){if(Qe(e.app))return Promise.reject(Rt(e));const r="signIn",i=await Fm(e,r,t),s=await jn._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function c1(e,t){return Um(gn(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zm(e){const t=gn(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function d1(e,t,n){const r=gn(e);await no(r,{requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"},"getOobCode",t1)}async function f1(e,t,n){if(Qe(e.app))return Promise.reject(Rt(e));const r=gn(e),o=await no(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",a1).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&zm(e),l}),a=await jn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function h1(e,t,n){return Qe(e.app)?Promise.reject(Rt(e)):c1(He(e),Pr.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&zm(e),r})}async function Qu(e,t){const n=He(e),i={requestType:"VERIFY_EMAIL",idToken:await e.getIdToken()},{email:s}=await e1(n.auth,i);s!==e.email&&await e.reload()}function p1(e,t,n,r){return He(e).onIdTokenChanged(t,n,r)}function m1(e,t,n){return He(e).beforeAuthStateChanged(t,n)}function g1(e,t,n,r){return He(e).onAuthStateChanged(t,n,r)}function $m(e){return He(e).signOut()}const io="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(io,"1"),this.storage.removeItem(io),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y1=1e3,v1=10;class Wm extends Bm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Am(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=t.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);DE()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,v1):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},y1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Wm.type="LOCAL";const w1=Wm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm extends Bm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Hm.type="SESSION";const Vm=Hm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S1(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Ao(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await S1(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ao.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ju(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E1{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Ju("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const m=f;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(d),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(){return window}function k1(e){ht().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Km(){return typeof ht().WorkerGlobalScope<"u"&&typeof ht().importScripts=="function"}async function _1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function x1(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)==null?void 0:e.controller)||null}function I1(){return Km()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gm="firebaseLocalStorageDb",C1=1,so="firebaseLocalStorage",qm="fbase_key";class Ui{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function bo(e,t){return e.transaction([so],t?"readwrite":"readonly").objectStore(so)}function T1(){const e=indexedDB.deleteDatabase(Gm);return new Ui(e).toPromise()}function Ym(){const e=indexedDB.open(Gm,C1);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(so,{keyPath:qm})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(so)?t(r):(r.close(),await T1(),t(await Ym()))})})}async function Kd(e,t,n){const r=bo(e,!0).put({[qm]:t,value:n});return new Ui(r).toPromise()}async function R1(e,t){const n=bo(e,!1).get(t),r=await new Ui(n).toPromise();return r===void 0?null:r.value}function Gd(e,t){const n=bo(e,!0).delete(t);return new Ui(n).toPromise()}const P1=800,N1=3;class Qm{registerLifecycleListeners(){typeof window<"u"&&typeof window.addEventListener=="function"&&(window.addEventListener("pagehide",this.onPageHide),window.addEventListener("pageshow",this.onPageShow))}unregisterLifecycleListeners(){typeof window<"u"&&typeof window.removeEventListener=="function"&&(window.removeEventListener("pagehide",this.onPageHide),window.removeEventListener("pageshow",this.onPageShow))}constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.isClosing=!1,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this.onPageHide=()=>{this.isClosing=!0,this.stopPolling(),this.dbPromise&&(this.dbPromise.then(t=>t.close()).catch(()=>{}),this.dbPromise=null)},this.onPageShow=()=>{this.isClosing&&(this.isClosing=!1,Object.keys(this.listeners).length>0&&this.startPolling())},this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=Ym(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>N1)throw r;if(this.dbPromise){const i=this.dbPromise;this.dbPromise=null;try{(await i).close()}catch{}}}}async initializeServiceWorkerMessaging(){return Km()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ao._getInstance(I1()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await _1(),!this.activeServiceWorker)return;this.sender=new E1(this.activeServiceWorker);const t=await this.sender._send("ping",{},800);t&&(n=t[0])!=null&&n.fulfilled&&(r=t[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||x1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async t=>{await Kd(t,io,"1"),await Gd(t,io)}),!0):!1}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Kd(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>R1(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Gd(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){if(this.isClosing)return[];try{const t=await this._withRetries(i=>{const s=bo(i,!1).getAll();return new Ui(s).toPromise()});if(this.isClosing)return[];if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}catch(t){return this.isClosing||Es(`Firebase Auth cross-tab polling failed with error: ${t}`),[]}}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),P1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.startPolling(),this.registerLifecycleListeners()),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.stopPolling(),this.unregisterLifecycleListeners())}}Qm.type="LOCAL";const A1=Qm;new ji(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b1(e,t){return t?It(t):(A(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu extends qu{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return dr(t,this._buildIdpRequest())}_linkToIdToken(t,n){return dr(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return dr(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function L1(e){return Um(e.auth,new Xu(e),e.bypassAuthState)}function D1(e){const{auth:t,user:n}=e;return A(n,t,"internal-error"),u1(n,new Xu(e),e.bypassAuthState)}async function O1(e){const{auth:t,user:n}=e;return A(n,t,"internal-error"),l1(n,new Xu(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{constructor(t,n,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=t;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return L1;case"linkViaPopup":case"linkViaRedirect":return O1;case"reauthViaPopup":case"reauthViaRedirect":return D1;default:rt(this.auth,"internal-error")}}resolve(t){Mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j1=new ji(2e3,1e4);class rr extends Jm{constructor(t,n,r,i,s){super(t,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,rr.currentPopupAction&&rr.currentPopupAction.cancel(),rr.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return A(t,this.auth,"internal-error"),t}async onExecution(){Mt(this.filter.length===1,"Popup operations only handle one event");const t=Ju();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ft(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)==null?void 0:t.associatedEvent)||null}cancel(){this.reject(ft(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,rr.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ft(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,j1.get())};t()}}rr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M1="pendingRedirect",xs=new Map;class F1 extends Jm{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=xs.get(this.auth._key());if(!t){try{const r=await U1(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}xs.set(this.auth._key(),t)}return this.bypassAuthState||xs.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function U1(e,t){const n=B1(t),r=$1(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function z1(e,t){xs.set(e._key(),t)}function $1(e){return It(e._redirectPersistence)}function B1(e){return _s(M1,e.config.apiKey,e.name)}async function W1(e,t,n=!1){if(Qe(e.app))return Promise.reject(Rt(e));const r=gn(e),i=b1(r,t),o=await new F1(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H1=10*60*1e3;class V1{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!K1(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!Xm(t)){const i=((r=t.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(ft(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=H1&&this.cachedEventUids.clear(),this.cachedEventUids.has(qd(t))}saveEventToCache(t){this.cachedEventUids.add(qd(t)),this.lastProcessedEventTime=Date.now()}}function qd(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Xm({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function K1(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Xm(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G1(e,t={}){return $t(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Y1=/^https?/;async function Q1(e){if(e.config.emulator)return;const{authorizedDomains:t}=await G1(e);for(const n of t)try{if(J1(n))return}catch{}rt(e,"unauthorized-domain")}function J1(e){const t=Il(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Y1.test(n))return!1;if(q1.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X1=new ji(3e4,6e4);function Yd(){const e=ht().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function Z1(e){return new Promise((t,n)=>{var i,s,o;function r(){Yd(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Yd(),n(ft(e,"network-request-failed"))},timeout:X1.get()})}if((s=(i=ht().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)t(gapi.iframes.getContext());else if((o=ht().gapi)!=null&&o.load)r();else{const a=WE("iframefcb");return ht()[a]=()=>{gapi.load?r():n(ft(e,"network-request-failed"))},Lm(`${BE()}?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw Is=null,t})}let Is=null;function ek(e){return Is=Is||Z1(e),Is}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tk=new ji(5e3,15e3),nk="__/auth/iframe",rk="emulator/auth/iframe",ik={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},sk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ok(e){const t=e.config;A(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Vu(t,rk):`https://${e.config.authDomain}/${nk}`,r={apiKey:t.apiKey,appName:e.name,v:Oi},i=sk.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Li(r).slice(1)}`}async function ak(e){const t=await ek(e),n=ht().gapi;return A(n,e,"internal-error"),t.open({where:document.body,url:ok(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ik,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=ft(e,"network-request-failed"),a=ht().setTimeout(()=>{s(o)},tk.get());function l(){ht().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},uk=500,ck=600,dk="_blank",fk="http://localhost";class Qd{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function hk(e,t,n,r=uk,i=ck){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l={...lk,width:r.toString(),height:i.toString(),top:s,left:o},u=Se().toLowerCase();n&&(a=Cm(u)?dk:n),xm(u)&&(t=t||fk,l.scrollbars="yes");const d=Object.entries(l).reduce((m,[v,w])=>`${m}${v}=${w},`,"");if(LE(u)&&a!=="_self")return pk(t||"",a),new Qd(null);const f=window.open(t||"",a,d);A(f,e,"popup-blocked");try{f.focus()}catch{}return new Qd(f)}function pk(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mk="__/auth/handler",gk="emulator/auth/handler",yk=encodeURIComponent("fac");async function Jd(e,t,n,r,i,s){A(e.config.authDomain,e,"auth-domain-config-required"),A(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Oi,eventId:i};if(t instanceof Mm){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",nS(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[d,f]of Object.entries({}))o[d]=f}if(t instanceof Fi){const d=t.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await e._getAppCheckToken(),u=l?`#${yk}=${encodeURIComponent(l)}`:"";return`${vk(e)}?${Li(a).slice(1)}${u}`}function vk({config:e}){return e.emulator?Vu(e,gk):`https://${e.authDomain}/${mk}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sa="webStorageSupport";class wk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Vm,this._completeRedirectFn=W1,this._overrideRedirectResult=z1}async _openPopup(t,n,r,i){var o;Mt((o=this.eventManagers[t._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await Jd(t,n,r,Il(),i);return hk(t,s,Ju())}async _openRedirect(t,n,r,i){await this._originValidation(t);const s=await Jd(t,n,r,Il(),i);return k1(s),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Mt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await ak(t),r=new V1(t);return n.register("authEvent",i=>(A(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Sa,{type:Sa},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[Sa];s!==void 0&&n(!!s),rt(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Q1(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Am()||Im()||Gu()}}const Sk=wk;var Xd="@firebase/auth",Zd="1.13.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ek{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)==null?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){A(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kk(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function _k(e){jt(new pt("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;A(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:bm(e)},u=new UE(r,i,s,l);return qE(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),jt(new pt("auth-internal",t=>{const n=gn(t.getProvider("auth").getImmediate());return(r=>new Ek(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),dt(Xd,Zd,kk(e)),dt(Xd,Zd,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xk=5*60,Ik=om("authIdTokenMaxAge")||xk;let ef=null;const Ck=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Ik)return;const i=n==null?void 0:n.token;ef!==i&&(ef=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Tk(e=pm()){const t=Di(e,"auth");if(t.isInitialized())return t.getImmediate();const n=GE(e,{popupRedirectResolver:Sk,persistence:[A1,w1,Vm]}),r=om("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=Ck(s.toString());m1(n,o,()=>o(n.currentUser)),p1(n,a=>o(a))}}const i=G0("auth");return i&&YE(n,`http://${i}`),n}function Rk(){var e;return((e=document.getElementsByTagName("head"))==null?void 0:e[0])??document}zE({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const s=ft("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Rk().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});_k("Browser");var Pk="firebase",Nk="12.19.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */dt(Pk,Nk,"app");const Ak={apiKey:"AIzaSyCgdQCfHaJVfIUNqnH_iUkP9muAA9vhS1o",authDomain:"expiryalert-15bcb.firebaseapp.com",projectId:"expiryalert-15bcb",storageBucket:"expiryalert-15bcb.firebasestorage.app",messagingSenderId:"889261706688",appId:"1:889261706688:web:26b698b8a1c6eac4c355"},Zm=hm(Ak),Rn=Tk(Zm);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var bk={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lk=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),he=(e,t)=>{const n=y.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:a="",children:l,...u},d)=>y.createElement("svg",{ref:d,...bk,width:i,height:i,stroke:r,strokeWidth:o?Number(s)*24/Number(i):s,className:["lucide",`lucide-${Lk(e)}`,a].join(" "),...u},[...t.map(([f,m])=>y.createElement(f,m)),...Array.isArray(l)?l:[l]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cs=he("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dk=he("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg=he("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tl=he("CheckCircle2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tf=he("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rl=he("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pl=he("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nf=he("KeyRound",[["path",{d:"M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z",key:"167ctg"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nl=he("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ok=he("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jk=he("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Al=he("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bl=he("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rf=he("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ll=he("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mk=he("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fk=he("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);function Uk(){var b;const e=Co(),t=We(),[n,r]=y.useState(((b=t.state)==null?void 0:b.email)||""),[i,s]=y.useState(""),[o,a]=y.useState(!1),[l,u]=y.useState(null),[d,f]=y.useState(""),[m,v]=y.useState(!1),[w,S]=y.useState(null),[I,h]=y.useState(!1),[p,g]=y.useState(!1),E=async U=>{U.preventDefault(),u(null),f(""),S(null);const oe=n.trim();if(!oe||!i){u({message:"Please fill in both email and password."});return}v(!0);try{const it=(await h1(Rn,oe,i)).user;it.emailVerified?e("/"):(S(it),u({message:"Note: Your email address has not been verified yet.",isUnverified:!0}))}catch(te){console.error("Firebase Login error:",te),x(te)}finally{v(!1)}},x=U=>{switch(U.code||""){case"auth/invalid-credential":case"auth/wrong-password":case"auth/user-not-found":u({message:"Incorrect email or password.",hint:"Please double-check your password spelling. If you haven't created an account yet, create one below.",isCredentialError:!0});break;case"auth/invalid-email":u({message:"Please enter a valid email address."});break;case"auth/user-disabled":u({message:"This account has been disabled. Please contact support."});break;case"auth/too-many-requests":u({message:"Too many unsuccessful attempts. Please wait a moment or reset your password."});break;case"auth/network-request-failed":u({message:"Network error. Please check your internet connection."});break;default:u({message:U.message||"Failed to sign in. Please try again."})}},T=async U=>{U.preventDefault(),u(null),f("");const oe=n.trim();if(!oe){u({message:"Please enter your email to receive password reset instructions."});return}v(!0);try{await d1(Rn,oe),f(`Password reset link sent to ${oe}! Please check your inbox.`)}catch(te){console.error("Password reset error:",te),te.code==="auth/user-not-found"?u({message:"No account found with this email address. Please sign up."}):te.code==="auth/invalid-email"?u({message:"Please enter a valid email address."}):u({message:te.message||"Could not send reset email. Try again later."})}finally{v(!1)}},C=async()=>{if(w){h(!0),u(null);try{await Qu(w),f("Verification email resent! Please check your inbox or spam folder.")}catch(U){console.error("Resend verification error:",U),u({message:"Could not resend verification email right now. Please wait a few moments."})}finally{h(!1)}}},R=()=>{e("/")},j=async()=>{await $m(Rn),S(null),u(null),f("")};return c.jsx("div",{className:"auth-page",children:c.jsxs("div",{className:"auth-card",children:[c.jsxs("div",{className:"auth-brand",children:[c.jsx("div",{className:"auth-brand-logo",children:"🔔"}),c.jsxs("div",{children:[c.jsx("div",{className:"auth-brand-title",children:"ExpiryAlert"}),c.jsx("div",{className:"auth-brand-subtitle",children:"Smart Expiry Tracker"})]})]}),c.jsxs("div",{className:"auth-tabs",children:[c.jsx("button",{className:"auth-tab-btn active",type:"button",children:"Log In"}),c.jsx(Cn,{to:"/signup",state:{email:n},className:"auth-tab-btn",children:"Create Account"})]}),p?c.jsxs("div",{children:[c.jsxs("div",{className:"auth-header",children:[c.jsx("h1",{children:"Reset Password"}),c.jsx("p",{children:"Enter your email to receive a password reset link"})]}),l&&c.jsxs("div",{className:"auth-alert auth-alert-error",style:{marginBottom:"1rem"},children:[c.jsx(Cs,{size:18,style:{flexShrink:0,marginTop:"2px"}}),c.jsx("span",{children:l.message})]}),d&&c.jsxs("div",{className:"auth-alert auth-alert-success",style:{marginBottom:"1rem"},children:[c.jsx(Tl,{size:18,style:{flexShrink:0,marginTop:"2px"}}),c.jsx("span",{children:d})]}),c.jsxs("form",{onSubmit:T,className:"auth-form",children:[c.jsxs("div",{className:"auth-field",children:[c.jsx("label",{className:"auth-label",children:"Email Address"}),c.jsxs("div",{className:"auth-input-wrapper",children:[c.jsx("span",{className:"auth-input-icon",children:c.jsx(Al,{size:18})}),c.jsx("input",{type:"email",className:"auth-input",placeholder:"name@example.com",value:n,onChange:U=>r(U.target.value),required:!0,autoFocus:!0})]})]}),c.jsx("button",{type:"submit",className:"auth-submit-btn",disabled:m,children:m?c.jsxs(c.Fragment,{children:[c.jsx(bl,{size:18,className:"auth-spinner"}),"Sending Instructions..."]}):c.jsxs(c.Fragment,{children:[c.jsx(nf,{size:18}),"Send Reset Link"]})}),c.jsx("div",{style:{textAlign:"center",marginTop:"1rem"},children:c.jsx("button",{type:"button",className:"auth-link",onClick:()=>{g(!1),u(null),f("")},children:"← Back to Login"})})]})]}):c.jsxs("div",{children:[c.jsxs("div",{className:"auth-header",children:[c.jsx("h1",{children:"Welcome Back 👋"}),c.jsx("p",{children:"Sign in with your email to manage your expiry reminders"})]}),l&&!w&&c.jsxs("div",{className:"auth-alert auth-alert-error",style:{marginBottom:"1.25rem",flexDirection:"column",alignItems:"stretch",gap:"0.5rem"},children:[c.jsxs("div",{style:{display:"flex",gap:"0.5rem",alignItems:"flex-start"},children:[c.jsx(Cs,{size:20,style:{flexShrink:0,marginTop:"2px"}}),c.jsxs("div",{children:[c.jsx("strong",{children:l.message}),l.hint&&c.jsx("p",{style:{fontSize:"0.82rem",marginTop:"4px",color:"#fecaca",lineHeight:1.45},children:l.hint})]})]}),l.isCredentialError&&c.jsxs("div",{style:{display:"flex",gap:"0.5rem",flexWrap:"wrap",marginTop:"0.4rem"},children:[c.jsxs("button",{type:"button",onClick:()=>e("/signup",{state:{email:n}}),className:"auth-quick-fill-btn",style:{background:"rgba(99, 102, 241, 0.3)",borderColor:"rgba(99, 102, 241, 0.6)",color:"#ffffff",display:"inline-flex",alignItems:"center",gap:"0.35rem"},children:[c.jsx(Mk,{size:14}),"Create Account with this email"]}),c.jsxs("button",{type:"button",onClick:()=>{g(!0),u(null)},className:"auth-quick-fill-btn",style:{background:"rgba(255, 255, 255, 0.08)",borderColor:"rgba(255, 255, 255, 0.2)",color:"#f3f4f6",display:"inline-flex",alignItems:"center",gap:"0.35rem"},children:[c.jsx(nf,{size:14}),"Reset Password"]})]})]}),d&&c.jsxs("div",{className:"auth-alert auth-alert-success",style:{marginBottom:"1.1rem"},children:[c.jsx(Tl,{size:18,style:{flexShrink:0,marginTop:"2px"}}),c.jsx("span",{children:d})]}),w&&c.jsxs("div",{className:"auth-alert auth-alert-warning",style:{marginBottom:"1.25rem",flexDirection:"column",gap:"0.75rem"},children:[c.jsxs("div",{style:{display:"flex",gap:"0.5rem",alignItems:"flex-start"},children:[c.jsx(Cs,{size:20,style:{flexShrink:0,marginTop:"2px"}}),c.jsxs("div",{children:[c.jsx("strong",{children:"Email Not Verified Yet"}),c.jsxs("p",{style:{marginTop:"4px",fontSize:"0.82rem"},children:["We sent a verification link to ",c.jsx("strong",{children:w.email}),"."]})]})]}),c.jsxs("div",{style:{display:"flex",gap:"0.5rem",flexWrap:"wrap",width:"100%",marginTop:"0.25rem"},children:[c.jsx("button",{type:"button",onClick:C,disabled:I,className:"auth-quick-fill-btn",style:{background:"rgba(245, 158, 11, 0.2)",borderColor:"rgba(245, 158, 11, 0.4)",color:"#fef3c7"},children:I?"Sending...":"📨 Resend Verification"}),c.jsx("button",{type:"button",onClick:R,className:"auth-quick-fill-btn",style:{background:"rgba(99, 102, 241, 0.2)",borderColor:"rgba(99, 102, 241, 0.4)",color:"#c7d2fe"},children:"Continue to Dashboard →"}),c.jsx("button",{type:"button",onClick:j,className:"auth-link",style:{fontSize:"0.78rem",marginLeft:"auto",alignSelf:"center"},children:"Log out"})]})]}),c.jsxs("form",{onSubmit:E,className:"auth-form",children:[c.jsxs("div",{className:"auth-field",children:[c.jsx("label",{className:"auth-label",children:"Email Address"}),c.jsxs("div",{className:"auth-input-wrapper",children:[c.jsx("span",{className:"auth-input-icon",children:c.jsx(Al,{size:18})}),c.jsx("input",{type:"email",className:"auth-input",placeholder:"name@example.com",value:n,onChange:U=>r(U.target.value),required:!0,autoComplete:"email"})]})]}),c.jsxs("div",{className:"auth-field",children:[c.jsxs("div",{className:"auth-label",children:[c.jsx("span",{children:"Password"}),c.jsx("button",{type:"button",className:"auth-link",style:{fontSize:"0.8rem",fontWeight:500},onClick:()=>{g(!0),u(null),f("")},children:"Forgot password?"})]}),c.jsxs("div",{className:"auth-input-wrapper",children:[c.jsx("span",{className:"auth-input-icon",children:c.jsx(Nl,{size:18})}),c.jsx("input",{type:o?"text":"password",className:"auth-input",placeholder:"Enter your password",value:i,onChange:U=>s(U.target.value),required:!0,autoComplete:"current-password"}),c.jsx("button",{type:"button",className:"auth-input-toggle",onClick:()=>a(!o),tabIndex:-1,title:o?"Hide password":"Show password",children:o?c.jsx(Rl,{size:18}):c.jsx(Pl,{size:18})})]})]}),c.jsx("button",{type:"submit",className:"auth-submit-btn",disabled:m,children:m?c.jsxs(c.Fragment,{children:[c.jsx(bl,{size:18,className:"auth-spinner"}),"Signing in..."]}):c.jsxs(c.Fragment,{children:["Sign In",c.jsx(eg,{size:18})]})})]}),c.jsxs("div",{className:"auth-footer-text",children:["Don't have an account?"," ",c.jsx(Cn,{to:"/signup",state:{email:n},className:"auth-link",children:"Create one now"})]})]})]})})}function zk(){var T;const e=Co(),t=We(),[n,r]=y.useState(((T=t.state)==null?void 0:T.email)||""),[i,s]=y.useState(""),[o,a]=y.useState(""),[l,u]=y.useState(!1),[d,f]=y.useState(!1),[m,v]=y.useState(null),[w,S]=y.useState(!1),[I,h]=y.useState(!1),[p,g]=y.useState(!1),E=async C=>{C.preventDefault(),v(null);const R=n.trim();if(!R){v({message:"Please enter your email address."});return}if(i.length<6){v({message:"Password must contain at least 6 characters."});return}if(i!==o){v({message:"Passwords do not match. Please re-enter."});return}S(!0);try{const j=await f1(Rn,R,i);try{await Qu(j.user),g(!0)}catch(b){console.warn("Verification email sending issue:",b),g(!1)}h(!0)}catch(j){console.error("Firebase Signup error:",j),x(j)}finally{S(!1)}},x=C=>{switch(C.code||""){case"auth/email-already-in-use":v({message:"This email is already registered.",hint:"An account already exists with this email address.",isAlreadyRegistered:!0});break;case"auth/invalid-email":v({message:"Please enter a valid email address."});break;case"auth/weak-password":v({message:"Password is too weak. Please choose at least 6 characters."});break;case"auth/operation-not-allowed":v({message:"Email/Password accounts are not enabled in the Firebase Console."});break;case"auth/network-request-failed":v({message:"Network error. Please check your internet connection."});break;default:v({message:C.message||"Signup failed. Please try again."})}};return c.jsx("div",{className:"auth-page",children:c.jsxs("div",{className:"auth-card",children:[c.jsxs("div",{className:"auth-brand",children:[c.jsx("div",{className:"auth-brand-logo",children:"🔔"}),c.jsxs("div",{children:[c.jsx("div",{className:"auth-brand-title",children:"ExpiryAlert"}),c.jsx("div",{className:"auth-brand-subtitle",children:"Smart Expiry Tracker"})]})]}),c.jsxs("div",{className:"auth-tabs",children:[c.jsx(Cn,{to:"/login",state:{email:n},className:"auth-tab-btn",children:"Log In"}),c.jsx("button",{className:"auth-tab-btn active",type:"button",children:"Create Account"})]}),I?c.jsxs("div",{style:{textAlign:"center",animation:"authFadeIn 0.35s ease"},children:[c.jsx("div",{style:{width:"60px",height:"60px",borderRadius:"50%",background:"rgba(16, 185, 129, 0.15)",border:"2px solid rgba(16, 185, 129, 0.4)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 1.25rem",color:"#10b981"},children:c.jsx(Tl,{size:34})}),c.jsx("h1",{style:{fontSize:"1.5rem",fontWeight:700,marginBottom:"0.5rem",color:"#ffffff"},children:"Account Created! 🎉"}),c.jsx("p",{style:{color:"#9ca3af",fontSize:"0.9rem",lineHeight:1.5,marginBottom:"1.5rem"},children:p?c.jsxs(c.Fragment,{children:["We have sent a verification link to ",c.jsx("strong",{children:n.trim()}),". Please verify your inbox to secure your account."]}):c.jsx(c.Fragment,{children:"Welcome to ExpiryAlert! Your new account is active and ready to use."})}),c.jsxs("button",{type:"button",className:"auth-submit-btn",onClick:()=>e("/"),style:{marginBottom:"0.75rem"},children:["Go to Dashboard",c.jsx(eg,{size:18})]}),c.jsx("div",{style:{marginTop:"1rem"},children:c.jsx(Cn,{to:"/login",state:{email:n},className:"auth-link",style:{fontSize:"0.85rem"},children:"← Return to Login"})})]}):c.jsxs("div",{children:[c.jsxs("div",{className:"auth-header",children:[c.jsx("h1",{children:"Create an Account ✨"}),c.jsx("p",{children:"Sign up to track items and never miss an expiry date"})]}),m&&c.jsxs("div",{className:"auth-alert auth-alert-error",style:{marginBottom:"1.1rem",flexDirection:"column",alignItems:"stretch",gap:"0.5rem"},children:[c.jsxs("div",{style:{display:"flex",gap:"0.5rem",alignItems:"flex-start"},children:[c.jsx(Cs,{size:18,style:{flexShrink:0,marginTop:"2px"}}),c.jsxs("div",{children:[c.jsx("strong",{children:m.message}),m.hint&&c.jsx("p",{style:{fontSize:"0.82rem",marginTop:"4px",color:"#fecaca"},children:m.hint})]})]}),m.isAlreadyRegistered&&c.jsx("div",{style:{marginTop:"0.35rem"},children:c.jsxs("button",{type:"button",onClick:()=>e("/login",{state:{email:n}}),className:"auth-quick-fill-btn",style:{background:"rgba(99, 102, 241, 0.3)",borderColor:"rgba(99, 102, 241, 0.6)",color:"#ffffff",display:"inline-flex",alignItems:"center",gap:"0.35rem"},children:[c.jsx(Ok,{size:14}),"Log in with this email"]})})]}),c.jsxs("form",{onSubmit:E,className:"auth-form",children:[c.jsxs("div",{className:"auth-field",children:[c.jsx("label",{className:"auth-label",children:"Email Address"}),c.jsxs("div",{className:"auth-input-wrapper",children:[c.jsx("span",{className:"auth-input-icon",children:c.jsx(Al,{size:18})}),c.jsx("input",{type:"email",className:"auth-input",placeholder:"name@example.com",value:n,onChange:C=>r(C.target.value),required:!0,autoComplete:"email",autoFocus:!0})]})]}),c.jsxs("div",{className:"auth-field",children:[c.jsx("label",{className:"auth-label",children:"Password"}),c.jsxs("div",{className:"auth-input-wrapper",children:[c.jsx("span",{className:"auth-input-icon",children:c.jsx(Nl,{size:18})}),c.jsx("input",{type:l?"text":"password",className:"auth-input",placeholder:"At least 6 characters",value:i,onChange:C=>s(C.target.value),required:!0,autoComplete:"new-password"}),c.jsx("button",{type:"button",className:"auth-input-toggle",onClick:()=>u(!l),tabIndex:-1,title:l?"Hide password":"Show password",children:l?c.jsx(Rl,{size:18}):c.jsx(Pl,{size:18})})]}),i.length>0&&c.jsxs("div",{className:`auth-hint ${i.length>=6?"valid":""}`,children:[i.length>=6?c.jsx(tf,{size:14}):"•",i.length>=6?"Strong length (6+ chars)":"Needs at least 6 characters"]})]}),c.jsxs("div",{className:"auth-field",children:[c.jsx("label",{className:"auth-label",children:"Confirm Password"}),c.jsxs("div",{className:"auth-input-wrapper",children:[c.jsx("span",{className:"auth-input-icon",children:c.jsx(Nl,{size:18})}),c.jsx("input",{type:d?"text":"password",className:"auth-input",placeholder:"Re-enter password",value:o,onChange:C=>a(C.target.value),required:!0,autoComplete:"new-password"}),c.jsx("button",{type:"button",className:"auth-input-toggle",onClick:()=>f(!d),tabIndex:-1,title:d?"Hide password":"Show password",children:d?c.jsx(Rl,{size:18}):c.jsx(Pl,{size:18})})]}),o.length>0&&c.jsxs("div",{className:`auth-hint ${i===o?"valid":""}`,children:[i===o?c.jsx(tf,{size:14}):"•",i===o?"Passwords match":"Passwords do not match"]})]}),c.jsx("button",{type:"submit",className:"auth-submit-btn",disabled:w,children:w?c.jsxs(c.Fragment,{children:[c.jsx(bl,{size:18,className:"auth-spinner"}),"Creating Account..."]}):c.jsxs(c.Fragment,{children:[c.jsx(Ll,{size:18}),"Create Free Account"]})})]}),c.jsxs("div",{className:"auth-footer-text",children:["Already have an account?"," ",c.jsx(Cn,{to:"/login",state:{email:n},className:"auth-link",children:"Sign in here"})]})]})]})})}const tg="@firebase/installations",Zu="0.6.24";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ng=1e4,rg=`w:${Zu}`,ig="FIS_v2",$k="https://firebaseinstallations.googleapis.com/v1",Bk=60*60*1e3,Wk="installations",Hk="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vk={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Mn=new Bn(Wk,Hk,Vk);function sg(e){return e instanceof Ut&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function og({projectId:e}){return`${$k}/projects/${e}/installations`}function ag(e){return{token:e.token,requestStatus:2,expiresIn:Gk(e.expiresIn),creationTime:Date.now()}}async function lg(e,t){const r=(await t.json()).error;return Mn.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function ug({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Kk(e,{refreshToken:t}){const n=ug(e);return n.append("Authorization",qk(t)),n}async function cg(e){const t=await e();return t.status>=500&&t.status<600?e():t}function Gk(e){return Number(e.replace("s","000"))}function qk(e){return`${ig} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yk({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=og(e),i=ug(e),s=t.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:ig,appId:e.appId,sdkVersion:rg},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await cg(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:ag(u.authToken)}}else throw await lg("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dg(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qk(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jk=/^[cdef][\w-]{21}$/,Dl="";function Xk(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=Zk(e);return Jk.test(n)?n:Dl}catch{return Dl}}function Zk(e){return Qk(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nr(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Er=new Map;function fg(e,t){const n=Nr(e);hg(n,t),n_(n,t)}function e_(e,t){pg();const n=Nr(e);let r=Er.get(n);r||(r=new Set,Er.set(n,r)),r.add(t)}function t_(e,t){const n=Nr(e),r=Er.get(n);r&&(r.delete(t),r.size===0&&Er.delete(n),mg())}function hg(e,t){const n=Er.get(e);if(n)for(const r of n)r(t)}function n_(e,t){const n=pg();n&&n.postMessage({key:e,fid:t}),mg()}let _n=null;function pg(){return!_n&&"BroadcastChannel"in self&&(_n=new BroadcastChannel("[Firebase] FID Change"),_n.onmessage=e=>{hg(e.data.key,e.data.fid)}),_n}function mg(){Er.size===0&&_n&&(_n.close(),_n=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r_="firebase-installations-database",i_=1,Fn="firebase-installations-store";let Ea=null;function ec(){return Ea||(Ea=Po(r_,i_,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Fn)}}})),Ea}async function oo(e,t){const n=Nr(e),i=(await ec()).transaction(Fn,"readwrite"),s=i.objectStore(Fn),o=await s.get(n);return await s.put(t,n),await i.done,(!o||o.fid!==t.fid)&&fg(e,t.fid),t}async function gg(e){const t=Nr(e),r=(await ec()).transaction(Fn,"readwrite");await r.objectStore(Fn).delete(t),await r.done}async function Lo(e,t){const n=Nr(e),i=(await ec()).transaction(Fn,"readwrite"),s=i.objectStore(Fn),o=await s.get(n),a=t(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&fg(e,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tc(e){let t;const n=await Lo(e.appConfig,r=>{const i=s_(r),s=o_(e,i);return t=s.registrationPromise,s.installationEntry});return n.fid===Dl?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function s_(e){const t=e||{fid:Xk(),registrationStatus:0};return yg(t)}function o_(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Mn.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=a_(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:l_(e)}:{installationEntry:t}}async function a_(e,t){try{const n=await Yk(e,t);return oo(e.appConfig,n)}catch(n){throw sg(n)&&n.customData.serverCode===409?await gg(e.appConfig):await oo(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function l_(e){let t=await sf(e.appConfig);for(;t.registrationStatus===1;)await dg(100),t=await sf(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await tc(e);return r||n}return t}function sf(e){return Lo(e,t=>{if(!t)throw Mn.create("installation-not-found");return yg(t)})}function yg(e){return u_(e)?{fid:e.fid,registrationStatus:0}:e}function u_(e){return e.registrationStatus===1&&e.registrationTime+ng<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function c_({appConfig:e,heartbeatServiceProvider:t},n){const r=d_(e,n),i=Kk(e,n),s=t.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:rg,appId:e.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await cg(()=>fetch(r,a));if(l.ok){const u=await l.json();return ag(u)}else throw await lg("Generate Auth Token",l)}function d_(e,{fid:t}){return`${og(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nc(e,t=!1){let n;const r=await Lo(e.appConfig,s=>{if(!vg(s))throw Mn.create("not-registered");const o=s.authToken;if(!t&&p_(o))return s;if(o.requestStatus===1)return n=f_(e,t),s;{if(!navigator.onLine)throw Mn.create("app-offline");const a=g_(s);return n=h_(e,a),a}});return n?await n:r.authToken}async function f_(e,t){let n=await of(e.appConfig);for(;n.authToken.requestStatus===1;)await dg(100),n=await of(e.appConfig);const r=n.authToken;return r.requestStatus===0?nc(e,t):r}function of(e){return Lo(e,t=>{if(!vg(t))throw Mn.create("not-registered");const n=t.authToken;return y_(n)?{...t,authToken:{requestStatus:0}}:t})}async function h_(e,t){try{const n=await c_(e,t),r={...t,authToken:n};return await oo(e.appConfig,r),n}catch(n){if(sg(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await gg(e.appConfig);else{const r={...t,authToken:{requestStatus:0}};await oo(e.appConfig,r)}throw n}}function vg(e){return e!==void 0&&e.registrationStatus===2}function p_(e){return e.requestStatus===2&&!m_(e)}function m_(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Bk}function g_(e){const t={requestStatus:1,requestTime:Date.now()};return{...e,authToken:t}}function y_(e){return e.requestStatus===1&&e.requestTime+ng<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function v_(e){const t=e,{installationEntry:n,registrationPromise:r}=await tc(t);return r?r.catch(console.error):nc(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function w_(e,t=!1){const n=e;return await S_(n),(await nc(n,t)).token}async function S_(e){const{registrationPromise:t}=await tc(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E_(e,t){const{appConfig:n}=e;return e_(n,t),()=>{t_(n,t)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k_(e){if(!e||!e.options)throw ka("App Configuration");if(!e.name)throw ka("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw ka(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function ka(e){return Mn.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wg="installations",__="installations-internal",x_=e=>{const t=e.getProvider("app").getImmediate(),n=k_(t),r=Di(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},I_=e=>{const t=e.getProvider("app").getImmediate(),n=Di(t,wg).getImmediate();return{getId:()=>v_(n),getToken:i=>w_(n,i)}};function C_(){jt(new pt(wg,x_,"PUBLIC")),jt(new pt(__,I_,"PRIVATE"))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */C_();dt(tg,Zu);dt(tg,Zu,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T_="/firebase-messaging-sw.js",R_="/firebase-cloud-messaging-push-scope",Sg="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",P_="https://fcmregistrations.googleapis.com/v1",Eg="google.c.a.c_id",N_="google.c.a.c_l",A_="google.c.a.ts",b_="google.c.a.e",af=1e4;var lf;(function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(lf||(lf={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var kr;(function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked",e.FID_REGISTERED="fid-registered"})(kr||(kr={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function kg(e){const t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),i=new Uint8Array(r.length);for(let s=0;s<r.length;++s)i[s]=r.charCodeAt(s);return i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _a="fcm_token_details_db",L_=5,uf="fcm_token_object_Store";async function D_(e){if("databases"in indexedDB&&!(await indexedDB.databases()).map(s=>s.name).includes(_a))return null;let t=null;return(await Po(_a,L_,{upgrade:async(r,i,s,o)=>{if(i<2||!r.objectStoreNames.contains(uf))return;const a=o.objectStore(uf),l=await a.index("fcmSenderId").get(e);if(await a.clear(),!!l){if(i===2){const u=l;if(!u.auth||!u.p256dh||!u.endpoint)return;t={token:u.fcmToken,createTime:u.createTime??Date.now(),subscriptionOptions:{auth:u.auth,p256dh:u.p256dh,endpoint:u.endpoint,swScope:u.swScope,vapidKey:typeof u.vapidKey=="string"?u.vapidKey:qe(u.vapidKey)}}}else if(i===3){const u=l;t={token:u.fcmToken,createTime:u.createTime,subscriptionOptions:{auth:qe(u.auth),p256dh:qe(u.p256dh),endpoint:u.endpoint,swScope:u.swScope,vapidKey:qe(u.vapidKey)}}}else if(i===4){const u=l;t={token:u.fcmToken,createTime:u.createTime,subscriptionOptions:{auth:qe(u.auth),p256dh:qe(u.p256dh),endpoint:u.endpoint,swScope:u.swScope,vapidKey:qe(u.vapidKey)}}}}}})).close(),await Ss(_a),await Ss("fcm_vapid_details_db"),await Ss("undefined"),O_(t)?t:null}function O_(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return typeof e.createTime=="number"&&e.createTime>0&&typeof e.token=="string"&&e.token.length>0&&typeof t.auth=="string"&&t.auth.length>0&&typeof t.p256dh=="string"&&t.p256dh.length>0&&typeof t.endpoint=="string"&&t.endpoint.length>0&&typeof t.swScope=="string"&&t.swScope.length>0&&typeof t.vapidKey=="string"&&t.vapidKey.length>0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j_={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","fid-registration-failed":"A problem occurred while creating an FCM registration via FID: {$errorInfo}","fid-unregister-failed":"A problem occurred while unregistering the FCM registration via FID: {$errorInfo}","fid-registration-idb-schema-unavailable":"Unable to read or persist FID registration metadata because the messaging IndexedDB schema is unavailable (for example, the database could not be upgraded to the latest version).","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used.","invalid-on-registered-handler":"No onRegistered callback handler was provided or registered. Implement onRegistered() before register()."},B=new Bn("messaging","Messaging",j_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cf="firebase-messaging-database",df=2,Un="firebase-messaging-store",Pt="firebase-messaging-fid-registration-store",M_={openDB:Po,deleteDB:Ss};let ff=M_,si=null;function F_(e,t,n){switch(t){case 0:if(e.createObjectStore(Un),n===1)break;case 1:n===2&&e.createObjectStore(Pt)}}function hf(e){return{upgrade:(t,n)=>{F_(t,n,e)},blocked:()=>{},blocking:(t,n,r)=>{var i;si=null,(i=r.target)==null||i.close()},terminated:()=>{si=null}}}function Do(){return si||(si=ff.openDB(cf,df,hf(2)).catch(()=>ff.openDB(cf,df-1,hf(1)))),si}function _g(e,t){return e.objectStoreNames.contains(t)}function xg(e){if(!_g(e,Pt))throw B.create("fid-registration-idb-schema-unavailable")}async function U_(e){const t=Oo(e),r=await(await Do()).transaction(Un).objectStore(Un).get(t);if(r)return r;{const i=await D_(e.appConfig.senderId);if(i)return await rc(e,i),i}}async function rc(e,t){const n=Oo(e),r=await Do(),i=[Un],s=_g(r,Pt);s&&i.push(Pt);const o=r.transaction(i,"readwrite");return await o.objectStore(Un).put(t,n),s&&await o.objectStore(Pt).delete(n),await o.done,t}async function Ig(e){const t=Oo(e),n=await Do();return xg(n),await n.transaction(Pt).objectStore(Pt).get(t)}async function z_(e,t){const n=Oo(e),r=await Do();xg(r);const i=r.transaction([Un,Pt],"readwrite");return await i.objectStore(Pt).put(t,n),await i.objectStore(Un).delete(n),await i.done,t}function Oo({appConfig:e}){return e.appId}const pf="@firebase/messaging",Ol="0.13.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $_=3,B_=1e3;async function W_(e,t){const n=await Mo(e),r=ic(t,e.appConfig.appName,!1),i={method:"POST",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(jo(e.appConfig),i)).json()}catch(o){throw B.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw B.create("token-subscribe-failed",{errorInfo:o})}if(!s.token)throw B.create("token-subscribe-no-token");return s.token}async function H_(e,t){var l;const n=await Mo(e),r=ic(t,e.appConfig.appName,!0),i={method:"POST",headers:n,body:JSON.stringify(r)};let s;try{s=await Y_(()=>fetch(jo(e.appConfig),i),$_,B_)}catch(u){throw B.create("fid-registration-failed",{errorInfo:u==null?void 0:u.toString()})}if(s.ok)return{responseFid:await V_(s)};let o;try{o=await s.json()}catch{throw B.create("fid-registration-failed",{errorInfo:s.statusText})}const a=((l=o.error)==null?void 0:l.message)??s.statusText;throw B.create("fid-registration-failed",{errorInfo:a})}async function V_(e){const t=await e.text();if(!t.trim())throw B.create("fid-registration-failed",{errorInfo:"CreateRegistration succeeded but response body is empty"});let n;try{n=JSON.parse(t)}catch{throw B.create("fid-registration-failed",{errorInfo:"CreateRegistration succeeded but response body is not valid JSON"})}const r=n.name;if(typeof r!="string"||r.length===0)throw B.create("fid-registration-failed",{errorInfo:"CreateRegistration succeeded but response did not include a non-empty name"});return K_(r)}const mf="/registrations/";function K_(e){const t=e.indexOf(mf);if(t!==-1){const n=e.slice(t+mf.length);if(n.length>0)return n}throw B.create("fid-registration-failed",{errorInfo:"CreateRegistration succeeded but response name is not a valid registration resource name"})}async function G_(e,t){const n=await Mo(e),r=ic(t.subscriptionOptions,e.appConfig.appName,!1),i={method:"PATCH",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(`${jo(e.appConfig)}/${t.token}`,i)).json()}catch(o){throw B.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw B.create("token-update-failed",{errorInfo:o})}if(!s.token)throw B.create("token-update-no-token");return s.token}async function q_(e,t){const r={method:"DELETE",headers:await Mo(e)};try{const s=await(await fetch(`${jo(e.appConfig)}/${t}`,r)).json();if(s.error){const o=s.error.message;throw B.create("token-unsubscribe-failed",{errorInfo:o})}}catch(i){throw B.create("token-unsubscribe-failed",{errorInfo:i==null?void 0:i.toString()})}}async function Y_(e,t,n){let r;for(let i=0;i<t;i++)try{return await e()}catch(s){if(r=s,i<t-1){const o=n*Math.pow(2,i);await new Promise(a=>setTimeout(a,o))}}throw r}function jo({projectId:e}){return`${P_}/projects/${e}/registrations`}async function Mo({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function Q_(e,t){var n,r;try{if(/^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(e))return new URL(e).host}catch{}try{if(typeof self<"u"&&((n=self.location)!=null&&n.href))return new URL(e,self.location.origin).host}catch{}return typeof self<"u"&&((r=self.location)!=null&&r.host)?self.location.host:t}function ic({p256dh:e,auth:t,endpoint:n,vapidKey:r,swScope:i},s,o){const a={web:{origin:Q_(i,s),endpoint:n,auth:t,p256dh:e}};return o&&(a.fcm_sdk_version=Ol),r!==Sg&&(a.web.applicationPubKey=r),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J_=7*24*60*60*1e3;async function X_(e){const t=await ex(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:qe(t.getKey("auth")),p256dh:qe(t.getKey("p256dh"))},r=await U_(e.firebaseDependencies);if(r){if(tx(r.subscriptionOptions,n))return Date.now()>=r.createTime+J_?Z_(e,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await q_(e.firebaseDependencies,r.token)}catch(i){console.warn(i)}return gf(e.firebaseDependencies,n)}else return gf(e.firebaseDependencies,n)}async function Z_(e,t){try{const n=await G_(e.firebaseDependencies,t),r={...t,token:n,createTime:Date.now()};return await rc(e.firebaseDependencies,r),n}catch(n){throw n}}async function gf(e,t){const r={token:await W_(e,t),createTime:Date.now(),subscriptionOptions:t};return await rc(e,r),r.token}async function ex(e,t){const n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:kg(t)})}function tx(e,t){const n=t.vapidKey===e.vapidKey,r=t.endpoint===e.endpoint,i=t.auth===e.auth,s=t.p256dh===e.p256dh;return n&&r&&i&&s}function nx(e,t){const n=e.onRegisteredHandler;n&&(typeof n=="function"?n(t):n.next(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rx(e){try{e.swRegistration=await navigator.serviceWorker.register(T_,{scope:R_}),e.swRegistration.update().catch(()=>{}),await ix(e.swRegistration)}catch(t){throw B.create("failed-service-worker-registration",{browserErrorMessage:t==null?void 0:t.message})}}async function ix(e){return new Promise((t,n)=>{const r=setTimeout(()=>n(new Error(`Service worker not registered after ${af} ms`)),af),i=e.installing||e.waiting;e.active?(clearTimeout(r),t()):i?i.onstatechange=s=>{var o;((o=s.target)==null?void 0:o.state)==="activated"&&(i.onstatechange=null,clearTimeout(r),t())}:(clearTimeout(r),n(new Error("No incoming service worker found.")))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cg(e,t){if(!t&&!e.swRegistration&&await rx(e),!(!t&&e.swRegistration)){if(!(t instanceof ServiceWorkerRegistration))throw B.create("invalid-sw-registration");e.swRegistration=t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tg(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=Sg)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yf=3;async function sx(e,t){const n=await ox(e.swRegistration,e.vapidKey),r={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:n.endpoint,auth:qe(n.getKey("auth")),p256dh:qe(n.getKey("p256dh"))},i=e.firebaseDependencies.installations;for(let s=0;s<yf;s++){const{responseFid:o}=await H_(e.firebaseDependencies,r);if(o===t)return;s<yf-1&&await i.getToken(!0)}throw B.create("fid-registration-failed",{errorInfo:"CreateRegistration response FID does not match Firebase Installation ID"})}async function ox(e,t){const n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:kg(t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ax=7*24*60*60*1e3;async function Rg(e,t){if(!navigator)throw B.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw B.create("permission-blocked");if(!e.onRegisteredHandler)throw B.create("invalid-on-registered-handler");await Tg(e,t==null?void 0:t.vapidKey),await Cg(e,t==null?void 0:t.serviceWorkerRegistration);const n=e._registerNotifyChain.catch(()=>{});return e._registerNotifyChain=n.then(async()=>{const r=await e.firebaseDependencies.installations.getId(),i=await Ig(e.firebaseDependencies),s=Date.now();if((!i||i.fid!==r||s>=i.lastRegisterTime+ax)&&(await sx(e,r),await z_(e.firebaseDependencies,{fid:r,lastRegisterTime:s,vapidKey:e.vapidKey})),!e.onRegisteredHandler)throw B.create("invalid-on-registered-handler");nx(e,r)}),e._registerNotifyChain}/**
 * @license
 * Copyright 2026 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lx(e,t){return E_(t,()=>{(async()=>!e.onRegisteredHandler||!await Ig(e.firebaseDependencies)||await Rg(e).catch(()=>{}))()})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vf(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return ux(t,e),cx(t,e),dx(t,e),t}function ux(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const r=t.notification.body;r&&(e.notification.body=r);const i=t.notification.image;i&&(e.notification.image=i);const s=t.notification.icon;s&&(e.notification.icon=s)}function cx(e,t){t.data&&(e.data=t.data)}function dx(e,t){var i,s,o,a;if(!t.fcmOptions&&!((i=t.notification)!=null&&i.click_action))return;e.fcmOptions={};const n=((s=t.fcmOptions)==null?void 0:s.link)??((o=t.notification)==null?void 0:o.click_action);n&&(e.fcmOptions.link=n);const r=(a=t.fcmOptions)==null?void 0:a.analytics_label;r&&(e.fcmOptions.analyticsLabel=r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fx(e){return typeof e=="object"&&!!e&&Eg in e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hx(e){if(!e||!e.options)throw xa("App Configuration Object");if(!e.name)throw xa("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const r of t)if(!n[r])throw xa(r);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function xa(e){return B.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class px{constructor(t,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.onRegisteredHandler=null,this.onUnregisteredHandler=null,this._registerNotifyChain=Promise.resolve(),this._fidChangeUnsubscribe=null,this.logEvents=[],this.logQueue={state:"stopped"};const i=hx(t);this.firebaseDependencies={app:t,appConfig:i,installations:n,analyticsProvider:r}}_delete(){return this._fidChangeUnsubscribe&&(this._fidChangeUnsubscribe(),this._fidChangeUnsubscribe=null),this.logQueue.state==="scheduled"&&clearTimeout(this.logQueue.timerId),this.logQueue={state:"stopped"},Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pg(e,t){if(!navigator)throw B.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw B.create("permission-blocked");return await Tg(e,t==null?void 0:t.vapidKey),await Cg(e,t==null?void 0:t.serviceWorkerRegistration),X_(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mx(e,t,n){const r=gx(t);(await e.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[Eg],message_name:n[N_],message_time:n[A_],message_device_time:Math.floor(Date.now()/1e3)})}function gx(e){switch(e){case kr.NOTIFICATION_CLICKED:return"notification_open";case kr.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yx(e,t){const n=t.data;if(!n.isFirebaseMessaging)return;if(e.onMessageHandler&&n.messageType===kr.PUSH_RECEIVED&&(typeof e.onMessageHandler=="function"?e.onMessageHandler(vf(n)):e.onMessageHandler.next(vf(n))),e.onRegisteredHandler&&n.messageType===kr.FID_REGISTERED){const i=n.fid;typeof e.onRegisteredHandler=="function"?e.onRegisteredHandler(i):e.onRegisteredHandler.next(i)}const r=n.data;fx(r)&&r[b_]==="1"&&await mx(e,n.messageType,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vx=e=>{const t=new px(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>yx(t,n)),t._fidChangeUnsubscribe=lx(t,e.getProvider("installations").getImmediate()),t},wx=e=>{const t=e.getProvider("messaging").getImmediate();return{getToken:r=>Pg(t,r),register:r=>Rg(t,r)}};function Sx(){jt(new pt("messaging",vx,"PUBLIC")),jt(new pt("messaging-internal",wx,"PRIVATE")),dt(pf,Ol),dt(pf,Ol,"esm2020")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ex(){try{await um()}catch{return!1}return typeof window<"u"&&lm()&&Z0()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kx(e=pm()){return Ex().then(t=>{if(!t)throw B.create("unsupported-browser")},t=>{throw B.create("indexed-db-unsupported")}),Di(He(e),"messaging").getImmediate()}async function _x(e,t){return e=He(e),Pg(e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Sx();const xx="BALy_nRwK-esWIECWEil4ZXftRREWcrLoB4z4c01TXI_bM2Mvn0AYL6RSPKOv7pROfOxexUlBcEnRmPiGYw8tKo";async function Ix(){try{if(!("Notification"in window))throw new Error("This browser does not support notifications.");let e=Notification.permission;if(e!=="granted"&&(e=await Notification.requestPermission(),e!=="granted"))throw new Error("Notification permission was not granted by the user.");let t=null;if("serviceWorker"in navigator){if(await navigator.serviceWorker.register("/firebase-messaging-sw.js",{scope:"/"}),t=await navigator.serviceWorker.ready,!t.active){const r=t.installing||t.waiting;r&&await new Promise(i=>{r.addEventListener("statechange",s=>{s.target.state==="activated"&&i()})})}console.log("✅ Active Service Worker ready for PushManager:",t)}let n=null;try{const r=kx(Zm);n=await _x(r,{vapidKey:xx,serviceWorkerRegistration:t}),n&&(console.log("================================"),console.log("✅ FCM DEVICE TOKEN:",n),console.log("================================"),localStorage.setItem("expiry_alert_fcm_token",n))}catch(r){console.warn("⚠️ FCM token registration note (local notifications remain fully functional):",r)}return{token:n,registration:t}}catch(e){throw console.error("❌ Notification setup error:",e),e}}async function Ia(e,t={}){try{if(!("Notification"in window)||Notification.permission!=="granted")return!1;const n={icon:"/favicon.ico",badge:"/favicon.ico",vibrate:[200,100,200],...t};if("serviceWorker"in navigator){const r=await navigator.serviceWorker.ready;if(r&&r.showNotification)return await r.showNotification(e,n),!0}return new Notification(e,n),!0}catch(n){return console.error("❌ Failed to display notification:",n),!1}}const Cx="expiry_alert_items",wf="expiry_alert_legacy_migrated_to";function Tx(e){const t=typeof e=="string"?e:(e==null?void 0:e.uid)||"guest",n=typeof e=="object"&&(e==null?void 0:e.email)||"",r=Date.now();return[{id:`${r}-1`,name:"Organic Milk",category:"Groceries",expiryDate:new Date(r+5*864e5).toISOString().split("T")[0],location:"Refrigerator",subLocation:"Top Shelf",photo:"https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&auto=format&fit=crop&q=80",createdAt:new Date().toISOString(),userId:t,userEmail:n},{id:`${r}-2`,name:"Amoxicillin Antibiotics",category:"Medicine",expiryDate:new Date(r+3*864e5).toISOString().split("T")[0],location:"Medicine Box",subLocation:"Drawer 1",photo:"https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&auto=format&fit=crop&q=80",createdAt:new Date().toISOString(),userId:t,userEmail:n},{id:`${r}-3`,name:"Greek Yogurt",category:"Groceries",expiryDate:new Date(r+12*864e5).toISOString().split("T")[0],location:"Refrigerator",subLocation:"Middle Shelf",photo:"https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&auto=format&fit=crop&q=80",createdAt:new Date().toISOString(),userId:t,userEmail:n},{id:`${r}-4`,name:"Whole Wheat Bread",category:"Bakery",expiryDate:new Date(r-1*864e5).toISOString().split("T")[0],location:"Kitchen Shelf",subLocation:"Bread Box",photo:"https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&auto=format&fit=crop&q=80",createdAt:new Date().toISOString(),userId:t,userEmail:n}]}function Ng(e){return`expiry_alert_items_${typeof e=="string"?e:(e==null?void 0:e.uid)||"guest"}`}function Sf(e){if(!e)return[];const t=typeof e=="string"?e:e.uid;if(!t)return[];const n=Ng(t),r=localStorage.getItem(n);if(r!==null)try{const s=JSON.parse(r);if(Array.isArray(s))return s}catch(s){return console.error(`Error parsing items for user ${t}:`,s),[]}if(!localStorage.getItem(wf)){const s=localStorage.getItem(Cx);if(s)try{const o=JSON.parse(s);if(Array.isArray(o)&&o.length>0){const a=typeof e=="object"&&(e==null?void 0:e.email)||"",l=o.map(u=>({...u,userId:u.userId||t,userEmail:u.userEmail||a}));return localStorage.setItem(n,JSON.stringify(l)),localStorage.setItem(wf,t),l}}catch(o){console.warn("Error reading legacy items:",o)}}return[]}function Rx(e,t){if(!e)return;const n=typeof e=="string"?e:e.uid;if(!n)return;const r=Ng(n);try{localStorage.setItem(r,JSON.stringify(t||[]))}catch(i){console.error(`Error saving items for user ${n}:`,i)}}const Ef=[{id:"Refrigerator",label:"🧊 Refrigerator"},{id:"Kitchen Shelf",label:"🍞 Kitchen Shelf"},{id:"Bedroom Cupboard",label:"🛏️ Bedroom Cupboard"},{id:"Medicine Box",label:"💊 Medicine Box"},{id:"Pantry",label:"🗄️ Pantry"},{id:"Other",label:"📍 Other Location"}];function Px({user:e}){const t=e||Rn.currentUser,n=(t==null?void 0:t.uid)||"guest",r=y.useRef(n),[i,s]=y.useState(!1),[o,a]=y.useState(""),l=async()=>{try{await $m(Rn)}catch(k){console.error("Logout error:",k)}},u=async()=>{if(t){s(!0);try{await Qu(t),a("Verification link resent! Check your inbox.")}catch(k){console.error("Error resending verification:",k),a("Could not send verification email. Try again shortly.")}finally{s(!1)}}},[d,f]=y.useState(()=>Sf(t));y.useEffect(()=>{if(r.current!==n){r.current=n,f(Sf(t));return}Rx(t,d)},[d,n,t]);const m=()=>{const k=Tx(t);f(z=>z.length===0?k:[...z,...k])},[v,w]=y.useState("dashboard"),[S,I]=y.useState("All"),[h,p]=y.useState(""),[g,E]=y.useState("All"),[x,T]=y.useState("default"),[C,R]=y.useState(""),[j,b]=y.useState("Groceries"),[U,oe]=y.useState(""),[te,it]=y.useState("Refrigerator"),[_e,Wn]=y.useState(""),[Ar,P]=y.useState(""),[L,D]=y.useState(null),[O,Y]=y.useState(null);y.useEffect(()=>{"Notification"in window&&T(Notification.permission)},[]);const gt=async()=>{try{if(!("Notification"in window)){alert("❌ This browser does not support notifications.");return}const k=await Ix(),z=k==null?void 0:k.token;T(Notification.permission),z&&localStorage.setItem("expiry_alert_fcm_token",z),await Ia("🔔 ExpiryAlert Notifications Enabled",{body:"Push alerts are active. You will receive automatic reminders 5 days & 3 days before items expire.",icon:"/favicon.ico"}),alert(`✅ Push notifications enabled successfully!

Your device is now registered to receive expiry alerts.`)}catch(k){console.error("❌ Notification setup error:",k),alert(`❌ Could not enable push notifications.

`+((k==null?void 0:k.message)||"Please check browser notification permissions in your browser or device settings."))}},yt=async()=>{if(!("Notification"in window)){alert("❌ This browser does not support notifications.");return}if(Notification.permission!=="granted"){await gt();return}const k=await Ia("🚨 ExpiryAlert Test: Milk Expiring Soon",{body:"Organic Milk is stored in Refrigerator (Top Shelf) and expires in 3 days!",icon:"/favicon.ico"});alert(k?"🔔 Test notification sent! Check your system notification tray or lock screen.":"⚠️ Could not display notification. Please ensure browser notifications are allowed in system settings.")},br=async()=>{if(!("Notification"in window)){alert("❌ This browser does not support notifications.");return}if(Notification.permission!=="granted"){await gt();return}const k=[...Pe,...vt];if(k.length===0){alert("🎉 Great news! You currently have no items expiring within 5 days.");return}for(const z of k){const ue=re(z.expiryDate),st=ue<=3;await Ia(st?`🚨 CRITICAL: ${z.name} expires in ${ue} day(s)!`:`⚠️ WARNING: ${z.name} expires in ${ue} days`,{body:`Location: ${z.location} (${z.subLocation}). Expiry date: ${z.expiryDate}.`,icon:"/favicon.ico"})}alert(`🔔 Sent ${k.length} expiry reminder notification(s) to your device!`)},re=k=>{const z=new Date;z.setHours(0,0,0,0);const ue=new Date(k);ue.setHours(0,0,0,0);const st=ue.getTime()-z.getTime();return Math.ceil(st/(1e3*60*60*24))},Bt=k=>k<0?{label:"Expired",badgeClass:"badge-expired",icon:"❌",severity:"expired"}:k===0?{label:"Expires Today",badgeClass:"badge-critical",icon:"🚨",severity:"critical"}:k<=3?{label:`Critical: ${k}d Left`,badgeClass:"badge-critical",icon:"🚨",severity:"critical"}:k<=5?{label:`Warning: ${k}d Left`,badgeClass:"badge-warning",icon:"⚠️",severity:"warning"}:{label:`Fresh: ${k}d Left`,badgeClass:"badge-fresh",icon:"🟢",severity:"fresh"},Ag=k=>{const z=k.target.files[0];if(z){const ue=new FileReader;ue.onloadend=()=>{P(ue.result),D(ue.result)},ue.readAsDataURL(z)}},bg=k=>{if(k.preventDefault(),!C||!U)return;const z={id:Date.now().toString(),name:C.trim(),category:j,expiryDate:U,location:te,subLocation:_e?_e.trim():"Standard Shelf",photo:Ar||"https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&auto=format&fit=crop&q=80",createdAt:new Date().toISOString(),userId:(t==null?void 0:t.uid)||"",userEmail:(t==null?void 0:t.email)||""};f([z,...d]),R(""),oe(""),Wn(""),P(""),D(null),w("dashboard")},sc=k=>{confirm("Are you sure you want to remove this item?")&&(f(d.filter(z=>z.id!==k)),(O==null?void 0:O.id)===k&&Y(null))},oc=d.filter(k=>{const z=k.name.toLowerCase().includes(h.toLowerCase())||k.location.toLowerCase().includes(h.toLowerCase()),ue=S==="All"||k.location===S,st=re(k.expiryDate),ac=g==="All"||g==="warning"&&(st===4||st===5)||g==="critical"&&st>=0&&st<=3||g==="expired"&&st<0||g==="fresh"&&st>5;return z&&ue&&ac}),vt=d.filter(k=>{const z=re(k.expiryDate);return z===4||z===5}),Pe=d.filter(k=>{const z=re(k.expiryDate);return z>=0&&z<=3}),Lg=d.filter(k=>re(k.expiryDate)<0);return c.jsxs("div",{style:{maxWidth:"1240px",margin:"0 auto",padding:"1.5rem 1rem",width:"100%",flex:1,display:"flex",flexDirection:"column",gap:"2rem"},children:[c.jsxs("header",{className:"glass-panel",style:{padding:"1.25rem 2rem",display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"center",gap:"1rem"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[c.jsx("div",{style:{width:"46px",height:"46px",borderRadius:"14px",background:"var(--gradient-accent)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.5rem",boxShadow:"0 4px 15px rgba(99, 102, 241, 0.4)"},children:"🔔"}),c.jsxs("div",{children:[c.jsxs("h1",{style:{fontSize:"1.4rem",fontWeight:"800",letterSpacing:"-0.02em",display:"flex",alignItems:"center",gap:"0.4rem"},children:["ExpiryAlert ",c.jsx("span",{className:"gradient-text",style:{fontSize:"0.9rem",fontWeight:"600"},children:"Smart Reminder"})]}),c.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"0.85rem"},children:"Never waste food or miss medication expiry dates again"})]})]}),c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem",flexWrap:"wrap"},children:[x!=="granted"&&c.jsx("button",{onClick:gt,className:"btn btn-secondary",style:{fontSize:"0.8rem",padding:"0.5rem 0.9rem"},children:"🔔 Enable Push Alerts"}),c.jsx("button",{onClick:()=>w("add"),className:"btn btn-primary",style:{padding:"0.55rem 1.1rem"},children:"➕ Add Item"}),t&&c.jsxs("div",{className:"header-user-badge",children:[c.jsx("div",{className:"header-user-avatar",children:t.email?t.email.charAt(0).toUpperCase():c.jsx(Fk,{size:14})}),c.jsxs("div",{style:{display:"flex",flexDirection:"column",lineHeight:1.2},children:[c.jsx("span",{style:{maxWidth:"140px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",fontWeight:600},title:t.email,children:t.email}),c.jsxs("span",{style:{fontSize:"0.68rem",color:"var(--status-fresh)",display:"flex",alignItems:"center",gap:"2px"},children:[c.jsx(rf,{size:10})," Private Data"]})]}),c.jsxs("button",{type:"button",onClick:l,className:"header-logout-btn",title:"Log out of ExpiryAlert",children:[c.jsx(jk,{size:13}),"Logout"]})]})]})]}),t&&!t.emailVerified&&c.jsxs("div",{className:"auth-alert auth-alert-warning",style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"0.75rem",padding:"0.75rem 1.25rem",borderRadius:"var(--radius-md)"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.6rem"},children:[c.jsx(Dk,{size:18,style:{color:"var(--status-warning)",flexShrink:0}}),c.jsxs("span",{style:{fontSize:"0.88rem"},children:["Your email (",c.jsx("strong",{children:t.email}),") is not verified yet. Please check your inbox."]})]}),c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.6rem"},children:[o&&c.jsx("span",{style:{fontSize:"0.82rem",color:"var(--text-primary)"},children:o}),c.jsx("button",{type:"button",onClick:u,disabled:i,className:"auth-quick-fill-btn",style:{background:"rgba(245, 158, 11, 0.25)",borderColor:"rgba(245, 158, 11, 0.5)"},children:i?"Sending...":"Resend Verification Link"})]})]}),c.jsxs("nav",{style:{display:"flex",gap:"0.5rem",borderBottom:"1px solid var(--border-color)",paddingBottom:"0.75rem",overflowX:"auto"},children:[c.jsxs("button",{onClick:()=>w("dashboard"),className:`btn ${v==="dashboard"?"btn-primary":"btn-secondary"}`,children:["📊 Dashboard (",d.length,")"]}),c.jsxs("button",{onClick:()=>w("notifications"),className:`btn ${v==="notifications"?"btn-primary":"btn-secondary"}`,style:{position:"relative"},children:["🔔 Reminders Center",vt.length+Pe.length>0&&c.jsx("span",{style:{background:"#ef4444",color:"#fff",borderRadius:"50px",padding:"0.1rem 0.5rem",fontSize:"0.75rem",fontWeight:"bold",marginLeft:"0.3rem"},children:vt.length+Pe.length})]}),c.jsx("button",{onClick:()=>w("add"),className:`btn ${v==="add"?"btn-primary":"btn-secondary"}`,children:"📝 Add New Item"})]}),(Pe.length>0||vt.length>0)&&v==="dashboard"&&c.jsxs("section",{className:"glass-panel",style:{padding:"1.25rem 1.75rem",background:Pe.length>0?"var(--gradient-alert-3d)":"var(--gradient-alert-5d)",borderColor:Pe.length>0?"rgba(239, 68, 68, 0.4)":"rgba(245, 158, 11, 0.4)",display:"flex",justify:"space-between",alignItems:"center",flexWrap:"wrap",gap:"1rem"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[c.jsx("span",{style:{fontSize:"2rem"},children:Pe.length>0?"🚨":"⚠️"}),c.jsxs("div",{children:[c.jsx("h3",{style:{fontSize:"1.1rem",fontWeight:"700",color:"#ffffff"},children:Pe.length>0?`Attention: ${Pe.length} item(s) expiring within 3 days!`:`Reminder: ${vt.length} item(s) expiring within 5 days!`}),c.jsx("p",{style:{color:"rgba(255, 255, 255, 0.85)",fontSize:"0.875rem"},children:"Check storage locations to use or discard before expiry."})]})]}),c.jsx("button",{onClick:()=>w("notifications"),className:"btn btn-secondary",style:{background:"rgba(0,0,0,0.3)"},children:"View Reminders ↗"})]}),v==="dashboard"&&c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.75rem"},children:[c.jsxs("div",{className:"glass-panel",style:{padding:"0.85rem 1.25rem",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"0.75rem",background:"rgba(99, 102, 241, 0.08)",borderColor:"rgba(99, 102, 241, 0.25)"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.6rem"},children:[c.jsx(rf,{size:18,style:{color:"var(--status-fresh)",flexShrink:0}}),c.jsxs("div",{style:{fontSize:"0.88rem"},children:[c.jsx("span",{style:{color:"var(--text-secondary)"},children:"Personal Workspace: "}),c.jsx("strong",{style:{color:"var(--text-primary)"},children:(t==null?void 0:t.email)||"User"}),c.jsx("span",{style:{marginLeft:"0.5rem",fontSize:"0.75rem",background:"rgba(16, 185, 129, 0.15)",color:"var(--status-fresh)",padding:"2px 8px",borderRadius:"12px",border:"1px solid rgba(16, 185, 129, 0.3)"},children:"Isolated & Private"})]})]}),d.length>0&&c.jsxs("button",{type:"button",onClick:m,className:"btn btn-secondary",style:{fontSize:"0.78rem",padding:"0.35rem 0.75rem",display:"flex",alignItems:"center",gap:"0.35rem"},title:"Add sample demo items to your private list",children:[c.jsx(Ll,{size:13}),"+ Load Demo Samples"]})]}),c.jsxs("section",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"1rem"},children:[c.jsxs("div",{className:"glass-panel",style:{padding:"1.25rem"},children:[c.jsx("span",{style:{color:"var(--text-muted)",fontSize:"0.85rem",fontWeight:"600"},children:"TOTAL STORED"}),c.jsx("p",{style:{fontSize:"1.8rem",fontWeight:"800",marginTop:"0.2rem"},children:d.length})]}),c.jsxs("div",{className:"glass-panel",style:{padding:"1.25rem",borderColor:"var(--status-warning-border)"},children:[c.jsx("span",{style:{color:"var(--status-warning)",fontSize:"0.85rem",fontWeight:"600"},children:"⚠️ 5 DAYS REMINDER"}),c.jsx("p",{style:{fontSize:"1.8rem",fontWeight:"800",color:"var(--status-warning)",marginTop:"0.2rem"},children:vt.length})]}),c.jsxs("div",{className:"glass-panel",style:{padding:"1.25rem",borderColor:"var(--status-critical-border)"},children:[c.jsx("span",{style:{color:"var(--status-critical)",fontSize:"0.85rem",fontWeight:"600"},children:"🚨 3 DAYS CRITICAL"}),c.jsx("p",{style:{fontSize:"1.8rem",fontWeight:"800",color:"var(--status-critical)",marginTop:"0.2rem"},children:Pe.length})]}),c.jsxs("div",{className:"glass-panel",style:{padding:"1.25rem",borderColor:"var(--status-expired-border)"},children:[c.jsx("span",{style:{color:"var(--status-expired)",fontSize:"0.85rem",fontWeight:"600"},children:"❌ EXPIRED"}),c.jsx("p",{style:{fontSize:"1.8rem",fontWeight:"800",color:"var(--status-expired)",marginTop:"0.2rem"},children:Lg.length})]})]}),c.jsxs("section",{className:"glass-panel",style:{padding:"1.25rem",display:"flex",flexWrap:"wrap",gap:"1rem",alignItems:"center",justifyContent:"space-between"},children:[c.jsx("div",{style:{flex:"1 1 250px",display:"flex",alignItems:"center",gap:"0.5rem"},children:c.jsx("input",{type:"text",placeholder:"🔍 Search items by name or location...",className:"form-input",value:h,onChange:k=>p(k.target.value)})}),c.jsxs("div",{style:{display:"flex",gap:"0.75rem",flexWrap:"wrap",flex:"1 1 auto"},children:[c.jsxs("select",{className:"form-select",style:{width:"auto"},value:S,onChange:k=>I(k.target.value),children:[c.jsx("option",{value:"All",children:"📍 All Storage Locations"}),Ef.map(k=>c.jsx("option",{value:k.id,children:k.label},k.id))]}),c.jsxs("select",{className:"form-select",style:{width:"auto"},value:g,onChange:k=>E(k.target.value),children:[c.jsx("option",{value:"All",children:"🏷️ All Statuses"}),c.jsx("option",{value:"critical",children:"🚨 Critical (≤ 3d)"}),c.jsx("option",{value:"warning",children:"⚠️ Warning (4 - 5d)"}),c.jsx("option",{value:"fresh",children:"🟢 Fresh (> 5d)"}),c.jsx("option",{value:"expired",children:"❌ Expired"})]})]})]}),oc.length===0?c.jsxs("div",{className:"glass-panel",style:{padding:"4rem 2rem",textAlign:"center",color:"var(--text-muted)"},children:[c.jsx("p",{style:{fontSize:"3rem",marginBottom:"1rem"},children:"📦"}),c.jsx("h3",{style:{fontSize:"1.25rem",fontWeight:"700",color:"var(--text-primary)"},children:d.length===0?"Your Private Inventory is Empty":"No items match your filter"}),c.jsx("p",{style:{fontSize:"0.9rem",marginTop:"0.5rem",maxWidth:"520px",margin:"0.5rem auto 0 auto",lineHeight:1.5},children:d.length===0?`You are signed in as ${(t==null?void 0:t.email)||"your account"}. Items you add here are completely private to your account and cannot be viewed by any other user.`:"Try clearing your search or add a new item to your list."}),c.jsx("div",{style:{display:"flex",gap:"0.75rem",justifyContent:"center",marginTop:"1.5rem",flexWrap:"wrap"},children:d.length===0?c.jsxs(c.Fragment,{children:[c.jsx("button",{onClick:()=>w("add"),className:"btn btn-primary",style:{padding:"0.65rem 1.25rem"},children:"➕ Add Your First Item"}),c.jsxs("button",{onClick:m,className:"btn btn-secondary",style:{padding:"0.65rem 1.25rem",display:"flex",alignItems:"center",gap:"0.4rem"},children:[c.jsx(Ll,{size:16})," Load Demo Items"]})]}):c.jsx("button",{onClick:()=>{p(""),I("All"),E("All")},className:"btn btn-secondary",children:"Reset Filters"})})]}):c.jsx("div",{className:"items-grid",children:oc.map(k=>{const z=re(k.expiryDate),ue=Bt(z);return c.jsxs("div",{className:"glass-panel",style:{display:"flex",flexDirection:"column",overflow:"hidden",position:"relative"},children:[c.jsxs("div",{style:{height:"160px",width:"100%",overflow:"hidden",background:"#111827",position:"relative"},children:[c.jsx("img",{src:k.photo,alt:k.name,style:{width:"100%",height:"100%",objectFit:"cover"}}),c.jsx("div",{style:{position:"absolute",top:"10px",right:"10px"},children:c.jsxs("span",{className:`badge ${ue.badgeClass}`,children:[ue.icon," ",ue.label]})})]}),c.jsxs("div",{style:{padding:"1.25rem",display:"flex",flexDirection:"column",gap:"0.75rem",flex:1},children:[c.jsxs("div",{children:[c.jsx("h3",{style:{fontSize:"1.15rem",fontWeight:"700",marginBottom:"0.2rem"},children:k.name}),c.jsx("span",{style:{fontSize:"0.8rem",color:"var(--accent-secondary)",fontWeight:"600",textTransform:"uppercase"},children:k.category||"General Item"})]}),c.jsx("div",{style:{background:"rgba(255, 255, 255, 0.04)",border:"1px solid var(--border-color)",borderRadius:"8px",padding:"0.6rem 0.8rem",fontSize:"0.85rem"},children:c.jsxs("div",{style:{color:"var(--text-secondary)",display:"flex",alignItems:"center",gap:"0.4rem"},children:[c.jsx("span",{children:"📍"}),c.jsx("strong",{style:{color:"var(--text-primary)"},children:k.location}),k.subLocation&&c.jsxs("span",{children:["– ",k.subLocation]})]})}),c.jsx("div",{style:{fontSize:"0.85rem",color:"var(--text-muted)",display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"auto",paddingTop:"0.5rem"},children:c.jsxs("span",{children:["📅 Expires: ",c.jsx("strong",{children:k.expiryDate})]})}),c.jsxs("div",{style:{display:"flex",gap:"0.5rem",marginTop:"0.5rem"},children:[c.jsx("button",{onClick:()=>Y(k),className:"btn btn-secondary",style:{flex:1,padding:"0.45rem",fontSize:"0.8rem",justifyContent:"center"},children:"👁️ View Details"}),c.jsx("button",{onClick:()=>sc(k.id),className:"btn btn-danger",style:{padding:"0.45rem 0.75rem",fontSize:"0.8rem"},children:"🗑️"})]})]})]},k.id)})})]}),v==="notifications"&&c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[c.jsxs("section",{className:"glass-panel",style:{padding:"2rem"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem",marginBottom:"1.5rem"},children:[c.jsx("span",{style:{fontSize:"2.5rem"},children:"📱"}),c.jsxs("div",{children:[c.jsx("h2",{style:{fontSize:"1.4rem",fontWeight:"800"},children:"Smart Push Notification Reminders"}),c.jsxs("p",{style:{color:"var(--text-secondary)",fontSize:"0.9rem"},children:["Simulated preview of automated system push notifications sent at ",c.jsx("strong",{children:"5 days before expiry"})," and ",c.jsx("strong",{children:"3 days before expiry"}),"."]})]})]}),c.jsxs("div",{style:{background:"rgba(99, 102, 241, 0.1)",border:"1px solid var(--border-glow)",padding:"1.25rem",borderRadius:"12px",display:"flex",flexDirection:"column",gap:"1rem"},children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"1rem"},children:[c.jsxs("div",{children:[c.jsx("strong",{style:{fontSize:"0.95rem"},children:"Device Push Notification Status:"})," ",c.jsx("span",{style:{color:x==="granted"?"var(--status-fresh)":"var(--status-warning)",fontWeight:"bold"},children:x.toUpperCase()})]}),x!=="granted"&&c.jsx("button",{onClick:gt,className:"btn btn-primary",style:{fontSize:"0.85rem"},children:"🔔 Enable Push Notifications"})]}),c.jsxs("div",{style:{display:"flex",gap:"0.75rem",flexWrap:"wrap",borderTop:"1px solid rgba(255,255,255,0.08)",paddingTop:"0.75rem"},children:[c.jsx("button",{type:"button",onClick:yt,className:"btn btn-secondary",style:{fontSize:"0.85rem",padding:"0.5rem 1rem"},children:"🔔 Send Test Notification"}),c.jsxs("button",{type:"button",onClick:br,className:"btn btn-primary",style:{fontSize:"0.85rem",padding:"0.5rem 1rem"},children:["🚨 Trigger Real Expiry Alerts (",Pe.length+vt.length,")"]})]})]})]}),c.jsxs("section",{style:{display:"flex",flexDirection:"column",gap:"1.25rem"},children:[c.jsx("h3",{style:{fontSize:"1.2rem",fontWeight:"700"},children:"Active Notification Feed"}),Pe.map(k=>c.jsx("div",{className:"glass-panel",style:{padding:"1.25rem 1.5rem",background:"var(--gradient-alert-3d)",borderColor:"rgba(239, 68, 68, 0.4)"},children:c.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"flex-start"},children:[c.jsx("span",{style:{fontSize:"2rem"},children:"🚨"}),c.jsxs("div",{style:{flex:1},children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[c.jsxs("strong",{style:{fontSize:"1.05rem",color:"#ffffff"},children:["🚨 ",k.name," expires in ",re(k.expiryDate)," days!"]}),c.jsx("span",{style:{fontSize:"0.8rem",color:"rgba(255,255,255,0.7)"},children:"3-Day Critical Trigger"})]}),c.jsxs("p",{style:{color:"rgba(255, 255, 255, 0.9)",marginTop:"0.3rem",fontSize:"0.9rem"},children:["📍 ",c.jsx("strong",{children:"Location:"})," ",k.location," – ",k.subLocation]}),c.jsxs("p",{style:{color:"rgba(255, 255, 255, 0.75)",fontSize:"0.8rem",marginTop:"0.2rem"},children:["Expiry Date: ",k.expiryDate]})]})]})},`3d-${k.id}`)),vt.map(k=>c.jsx("div",{className:"glass-panel",style:{padding:"1.25rem 1.5rem",background:"var(--gradient-alert-5d)",borderColor:"rgba(245, 158, 11, 0.4)"},children:c.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"flex-start"},children:[c.jsx("span",{style:{fontSize:"2rem"},children:"⚠️"}),c.jsxs("div",{style:{flex:1},children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[c.jsxs("strong",{style:{fontSize:"1.05rem",color:"#ffffff"},children:["⚠️ ",k.name," expires in ",re(k.expiryDate)," days"]}),c.jsx("span",{style:{fontSize:"0.8rem",color:"rgba(255,255,255,0.7)"},children:"5-Day Warning Trigger"})]}),c.jsxs("p",{style:{color:"rgba(255, 255, 255, 0.9)",marginTop:"0.3rem",fontSize:"0.9rem"},children:["📍 ",c.jsx("strong",{children:"Location:"})," ",k.location," – ",k.subLocation]}),c.jsxs("p",{style:{color:"rgba(255, 255, 255, 0.75)",fontSize:"0.8rem",marginTop:"0.2rem"},children:["Expiry Date: ",k.expiryDate]})]})]})},`5d-${k.id}`)),Pe.length===0&&vt.length===0&&c.jsxs("div",{className:"glass-panel",style:{padding:"3rem",textAlign:"center",color:"var(--text-muted)"},children:[c.jsx("span",{style:{fontSize:"2.5rem"},children:"🎉"}),c.jsx("h4",{style:{marginTop:"0.5rem",fontSize:"1.1rem"},children:"No Active Expiry Reminders"}),c.jsx("p",{style:{fontSize:"0.875rem",marginTop:"0.3rem"},children:"All stored items are fresh or no items are within the 5-day window."})]})]})]}),v==="add"&&c.jsxs("section",{className:"glass-panel",style:{padding:"2.5rem",maxWidth:"700px",margin:"0 auto",width:"100%"},children:[c.jsxs("h2",{style:{fontSize:"1.5rem",fontWeight:"800",marginBottom:"0.5rem",display:"flex",alignItems:"center",gap:"0.5rem"},children:[c.jsx("span",{children:"📝"})," Add New Item to ExpiryAlert"]}),c.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"0.9rem",marginBottom:"2rem"},children:"Upload a photo, select storage location, and set expiry date for automatic alerts."}),c.jsxs("form",{onSubmit:bg,style:{display:"flex",flexDirection:"column",gap:"1.25rem"},children:[c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"📸 Item Photo (Upload or Take Photo)"}),c.jsx("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:c.jsx("input",{type:"file",accept:"image/*",onChange:Ag,className:"form-input",style:{flex:1}})}),L&&c.jsx("div",{style:{marginTop:"0.75rem",width:"120px",height:"120px",borderRadius:"12px",overflow:"hidden",border:"1px solid var(--accent-primary)"},children:c.jsx("img",{src:L,alt:"Preview",style:{width:"100%",height:"100%",objectFit:"cover"}})})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"📝 Item Name *"}),c.jsx("input",{type:"text",required:!0,placeholder:"e.g. Milk, Amoxicillin, Greek Yogurt, Eggs...",className:"form-input",value:C,onChange:k=>R(k.target.value)})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"🏷️ Category"}),c.jsxs("select",{className:"form-select",value:j,onChange:k=>b(k.target.value),children:[c.jsx("option",{value:"Groceries",children:"🥦 Groceries / Dairy"}),c.jsx("option",{value:"Medicine",children:"💊 Medicine & Supplies"}),c.jsx("option",{value:"Bakery",children:"🍞 Bakery & Bread"}),c.jsx("option",{value:"Beverages",children:"🥤 Beverages"}),c.jsx("option",{value:"Cosmetics",children:"💄 Cosmetics & Skincare"}),c.jsx("option",{value:"Other",children:"📦 Other"})]})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"📅 Expiry Date *"}),c.jsx("input",{type:"date",required:!0,className:"form-input",value:U,onChange:k=>oe(k.target.value)})]}),c.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem"},children:[c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"📍 Main Storage Location"}),c.jsx("select",{className:"form-select",value:te,onChange:k=>it(k.target.value),children:Ef.map(k=>c.jsx("option",{value:k.id,children:k.label},k.id))})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"📌 Specific Spot / Shelf"}),c.jsx("input",{type:"text",placeholder:"e.g. Top Shelf, Door Rack, Box 2",className:"form-input",value:_e,onChange:k=>Wn(k.target.value)})]})]}),c.jsx("button",{type:"submit",className:"btn btn-primary",style:{marginTop:"1rem",padding:"0.85rem",justifyContent:"center",fontSize:"1rem"},children:"🔔 Save Item & Activate Reminders"})]})]}),O&&c.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0, 0, 0, 0.8)",backdropFilter:"blur(8px)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3,padding:"1rem"},children:c.jsxs("div",{className:"glass-panel",style:{maxWidth:"520px",width:"100%",padding:"2rem",display:"flex",flexDirection:"column",gap:"1.25rem",position:"relative"},children:[c.jsx("button",{onClick:()=>Y(null),style:{position:"absolute",top:"15px",right:"15px",background:"none",border:"none",color:"#fff",fontSize:"1.5rem",cursor:"pointer"},children:"✕"}),c.jsx("div",{style:{height:"220px",borderRadius:"12px",overflow:"hidden"},children:c.jsx("img",{src:O.photo,alt:O.name,style:{width:"100%",height:"100%",objectFit:"cover"}})}),c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[c.jsx("h2",{style:{fontSize:"1.4rem",fontWeight:"800"},children:O.name}),c.jsx("span",{className:`badge ${Bt(re(O.expiryDate)).badgeClass}`,children:Bt(re(O.expiryDate)).label})]}),c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.6rem",background:"rgba(0,0,0,0.3)",padding:"1rem",borderRadius:"10px"},children:[c.jsxs("p",{children:["📍 ",c.jsx("strong",{children:"Location:"})," ",O.location," – ",O.subLocation]}),c.jsxs("p",{children:["📅 ",c.jsx("strong",{children:"Expiry Date:"})," ",O.expiryDate]}),c.jsxs("p",{children:["⏳ ",c.jsx("strong",{children:"Days Remaining:"})," ",re(O.expiryDate)," days"]})]}),c.jsxs("div",{style:{borderTop:"1px solid var(--border-color)",paddingTop:"1rem"},children:[c.jsx("h4",{style:{fontSize:"0.9rem",color:"var(--text-secondary)",marginBottom:"0.5rem"},children:"Scheduled System Notifications:"}),c.jsxs("ul",{style:{fontSize:"0.85rem",color:"var(--text-muted)",display:"flex",flexDirection:"column",gap:"0.4rem",paddingLeft:"1.2rem"},children:[c.jsxs("li",{children:["⚠️ 5-Day Reminder: Triggered 5 days before ",O.expiryDate]}),c.jsxs("li",{children:["🚨 3-Day Critical Alert: Triggered 3 days before ",O.expiryDate]})]})]}),c.jsxs("div",{style:{display:"flex",gap:"1rem",marginTop:"0.5rem"},children:[c.jsx("button",{onClick:()=>sc(O.id),className:"btn btn-danger",style:{flex:1,justifyContent:"center"},children:"🗑️ Delete Item"}),c.jsx("button",{onClick:()=>Y(null),className:"btn btn-secondary",style:{flex:1,justifyContent:"center"},children:"Close"})]})]})}),c.jsx("footer",{style:{marginTop:"auto",borderTop:"1px solid var(--border-color)",paddingTop:"1.5rem",textAlign:"center",color:"var(--text-muted)",fontSize:"0.85rem"},children:"ExpiryAlert Smart Expiry Date Reminder • Storage Locations: Refrigerator, Kitchen Shelf, Bedroom Cupboard, Medicine Box"})]})}function Nx(){const[e,t]=y.useState(null),[n,r]=y.useState(!0);return y.useEffect(()=>{const i=g1(Rn,s=>{t(s),r(!1)});return()=>i()},[]),n?c.jsxs("div",{className:"auth-loading-screen",children:[c.jsx("div",{className:"auth-loading-logo",children:"🔔"}),c.jsx("div",{className:"auth-spinner"}),c.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"0.95rem",fontWeight:500},children:"Securing ExpiryAlert session..."})]}):c.jsxs(s0,{children:[c.jsx(Kr,{path:"/login",element:e?c.jsx(rs,{to:"/",replace:!0}):c.jsx(Uk,{})}),c.jsx(Kr,{path:"/signup",element:e?c.jsx(rs,{to:"/",replace:!0}):c.jsx(zk,{})}),c.jsx(Kr,{path:"/",element:e?c.jsx(Px,{user:e},e.uid):c.jsx(rs,{to:"/login",replace:!0})}),c.jsx(Kr,{path:"*",element:c.jsx(rs,{to:e?"/":"/login",replace:!0})})]})}Dp(document.getElementById("root")).render(c.jsx(y.StrictMode,{children:c.jsx(P0,{children:c.jsx(Nx,{})})}));
