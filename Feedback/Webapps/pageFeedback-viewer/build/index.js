/*! For license information please see index.js.LICENSE.txt */
(()=>{var e={257:e=>{"use strict";var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,o){for(var a,i,u=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var c in a=Object(arguments[l]))r.call(a,c)&&(u[c]=a[c]);if(t){i=t(a);for(var s=0;s<i.length;s++)n.call(a,i[s])&&(u[i[s]]=a[i[s]])}}return u}},745:(e,t,r)=>{"use strict";var n=r(585);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,a,i){if(i!==n){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return r.PropTypes=r,r}},159:(e,t,r)=>{e.exports=r(745)()},585:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},954:(e,t,r)=>{"use strict";function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}var o=r(257),a=r(341);function i(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var u=60106,l=60107,c=60108,s=60114,f=60109,p=60110,d=60112,h=60113,y=60120,m=60115,v=60116,g=60121,b=60117,w=60119,x=60129,k=60131;if("function"==typeof Symbol&&Symbol.for){var S=Symbol.for;u=S("react.portal"),l=S("react.fragment"),c=S("react.strict_mode"),s=S("react.profiler"),f=S("react.provider"),p=S("react.context"),d=S("react.forward_ref"),h=S("react.suspense"),y=S("react.suspense_list"),m=S("react.memo"),v=S("react.lazy"),g=S("react.block"),b=S("react.fundamental"),w=S("react.scope"),x=S("react.debug_trace_mode"),k=S("react.legacy_hidden")}function _(e){if(null==e)return null;if("function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case l:return"Fragment";case u:return"Portal";case s:return"Profiler";case c:return"StrictMode";case h:return"Suspense";case y:return"SuspenseList"}if("object"===n(e))switch(e.$$typeof){case p:return(e.displayName||"Context")+".Consumer";case f:return(e._context.displayName||"Context")+".Provider";case d:var t=e.render;return t=t.displayName||t.name||"",e.displayName||(""!==t?"ForwardRef("+t+")":"ForwardRef");case m:return _(e.type);case g:return _(e._render);case v:t=e._payload,e=e._init;try{return _(e(t))}catch(e){}}return null}var E=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,C={};function O(e,t){for(var r=0|e._threadCount;r<=t;r++)e[r]=e._currentValue2,e._threadCount=r+1}for(var F=new Uint16Array(16),I=0;15>I;I++)F[I]=I+1;F[15]=0;var P=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,j=Object.prototype.hasOwnProperty,D={},N={};function R(e){return!!j.call(N,e)||!j.call(D,e)&&(P.test(e)?N[e]=!0:(D[e]=!0,!1))}function T(e,t,r,o){if(null==t||function(e,t,r,o){if(null!==r&&0===r.type)return!1;switch(n(t)){case"function":case"symbol":return!0;case"boolean":return!o&&(null!==r?!r.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,r,o))return!0;if(o)return!1;if(null!==r)switch(r.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function A(e,t,r,n,o,a,i){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=n,this.attributeNamespace=o,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=i}var M={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){M[e]=new A(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];M[t]=new A(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){M[e]=new A(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){M[e]=new A(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){M[e]=new A(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){M[e]=new A(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){M[e]=new A(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){M[e]=new A(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){M[e]=new A(e,5,!1,e.toLowerCase(),null,!1,!1)}));var $=/[\-:]([a-z])/g;function q(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace($,q);M[t]=new A(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace($,q);M[t]=new A(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace($,q);M[t]=new A(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){M[e]=new A(e,1,!1,e.toLowerCase(),null,!1,!1)})),M.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){M[e]=new A(e,1,!1,e.toLowerCase(),null,!0,!0)}));var U=/["'&<>]/;function L(e){if("boolean"==typeof e||"number"==typeof e)return""+e;e=""+e;var t=U.exec(e);if(t){var r,n="",o=0;for(r=t.index;r<e.length;r++){switch(e.charCodeAt(r)){case 34:t="&quot;";break;case 38:t="&amp;";break;case 39:t="&#x27;";break;case 60:t="&lt;";break;case 62:t="&gt;";break;default:continue}o!==r&&(n+=e.substring(o,r)),o=r+1,n+=t}e=o!==r?n+e.substring(o,r):n}return e}function z(e,t){var r,n=M.hasOwnProperty(e)?M[e]:null;return(r="style"!==e)&&(r=null!==n?0===n.type:2<e.length&&("o"===e[0]||"O"===e[0])&&("n"===e[1]||"N"===e[1])),r||T(e,t,n,!1)?"":null!==n?(e=n.attributeName,3===(r=n.type)||4===r&&!0===t?e+'=""':(n.sanitizeURL&&(t=""+t),e+'="'+L(t)+'"')):R(e)?e+'="'+L(t)+'"':""}var V="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},W=null,H=null,B=null,Z=!1,G=!1,Y=null,X=0;function J(){if(null===W)throw Error(i(321));return W}function K(){if(0<X)throw Error(i(312));return{memoizedState:null,queue:null,next:null}}function Q(){return null===B?null===H?(Z=!1,H=B=K()):(Z=!0,B=H):null===B.next?(Z=!1,B=B.next=K()):(Z=!0,B=B.next),B}function ee(e,t,r,n){for(;G;)G=!1,X+=1,B=null,r=e(t,n);return te(),r}function te(){W=null,G=!1,H=null,X=0,B=Y=null}function re(e,t){return"function"==typeof t?t(e):t}function ne(e,t,r){if(W=J(),B=Q(),Z){var n=B.queue;if(t=n.dispatch,null!==Y&&void 0!==(r=Y.get(n))){Y.delete(n),n=B.memoizedState;do{n=e(n,r.action),r=r.next}while(null!==r);return B.memoizedState=n,[n,t]}return[B.memoizedState,t]}return e=e===re?"function"==typeof t?t():t:void 0!==r?r(t):t,B.memoizedState=e,e=(e=B.queue={last:null,dispatch:null}).dispatch=ae.bind(null,W,e),[B.memoizedState,e]}function oe(e,t){if(W=J(),t=void 0===t?null:t,null!==(B=Q())){var r=B.memoizedState;if(null!==r&&null!==t){var n=r[1];e:if(null===n)n=!1;else{for(var o=0;o<n.length&&o<t.length;o++)if(!V(t[o],n[o])){n=!1;break e}n=!0}if(n)return r[0]}}return e=e(),B.memoizedState=[e,t],e}function ae(e,t,r){if(!(25>X))throw Error(i(301));if(e===W)if(G=!0,e={action:r,next:null},null===Y&&(Y=new Map),void 0===(r=Y.get(t)))Y.set(t,e);else{for(t=r;null!==t.next;)t=t.next;t.next=e}}function ie(){}var ue=null,le={readContext:function(e){var t=ue.threadID;return O(e,t),e[t]},useContext:function(e){J();var t=ue.threadID;return O(e,t),e[t]},useMemo:oe,useReducer:ne,useRef:function(e){W=J();var t=(B=Q()).memoizedState;return null===t?(e={current:e},B.memoizedState=e):t},useState:function(e){return ne(re,e)},useLayoutEffect:function(){},useCallback:function(e,t){return oe((function(){return e}),t)},useImperativeHandle:ie,useEffect:ie,useDebugValue:ie,useDeferredValue:function(e){return J(),e},useTransition:function(){return J(),[function(e){e()},!1]},useOpaqueIdentifier:function(){return(ue.identifierPrefix||"")+"R:"+(ue.uniqueID++).toString(36)},useMutableSource:function(e,t){return J(),t(e._source)}},ce="http://www.w3.org/1999/xhtml";function se(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}var fe={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},pe=o({menuitem:!0},fe),de={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},he=["Webkit","ms","Moz","O"];Object.keys(de).forEach((function(e){he.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),de[t]=de[e]}))}));var ye=/([A-Z])/g,me=/^ms-/,ve=a.Children.toArray,ge=E.ReactCurrentDispatcher,be={listing:!0,pre:!0,textarea:!0},we=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,xe={},ke={};var Se=Object.prototype.hasOwnProperty,_e={children:null,dangerouslySetInnerHTML:null,suppressContentEditableWarning:null,suppressHydrationWarning:null};function Ee(e,t){if(void 0===e)throw Error(i(152,_(t)||"Component"))}function Ce(e,t,r){function u(a,u){var l=u.prototype&&u.prototype.isReactComponent,c=function(e,t,r,o){if(o&&"object"===n(o=e.contextType)&&null!==o)return O(o,r),o[r];if(e=e.contextTypes){for(var a in r={},e)r[a]=t[a];t=r}else t=C;return t}(u,t,r,l),s=[],f=!1,p={isMounted:function(){return!1},enqueueForceUpdate:function(){if(null===s)return null},enqueueReplaceState:function(e,t){f=!0,s=[t]},enqueueSetState:function(e,t){if(null===s)return null;s.push(t)}};if(l){if(l=new u(a.props,c,p),"function"==typeof u.getDerivedStateFromProps){var d=u.getDerivedStateFromProps.call(null,a.props,l.state);null!=d&&(l.state=o({},l.state,d))}}else if(W={},l=u(a.props,c,p),null==(l=ee(u,a.props,l,c))||null==l.render)return void Ee(e=l,u);if(l.props=a.props,l.context=c,l.updater=p,void 0===(p=l.state)&&(l.state=p=null),"function"==typeof l.UNSAFE_componentWillMount||"function"==typeof l.componentWillMount)if("function"==typeof l.componentWillMount&&"function"!=typeof u.getDerivedStateFromProps&&l.componentWillMount(),"function"==typeof l.UNSAFE_componentWillMount&&"function"!=typeof u.getDerivedStateFromProps&&l.UNSAFE_componentWillMount(),s.length){p=s;var h=f;if(s=null,f=!1,h&&1===p.length)l.state=p[0];else{d=h?p[0]:l.state;var y=!0;for(h=h?1:0;h<p.length;h++){var m=p[h];null!=(m="function"==typeof m?m.call(l,d,a.props,c):m)&&(y?(y=!1,d=o({},d,m)):o(d,m))}l.state=d}}else s=null;if(Ee(e=l.render(),u),"function"==typeof l.getChildContext&&"object"===n(a=u.childContextTypes)){var v=l.getChildContext();for(var g in v)if(!(g in a))throw Error(i(108,_(u)||"Unknown",g))}v&&(t=o({},t,v))}for(;a.isValidElement(e);){var l=e,c=l.type;if("function"!=typeof c)break;u(l,c)}return{child:e,context:t}}var Oe=function(){function e(e,t,r){a.isValidElement(e)?e.type!==l?e=[e]:(e=e.props.children,e=a.isValidElement(e)?[e]:ve(e)):e=ve(e),e={type:null,domNamespace:ce,children:e,childIndex:0,context:C,footer:""};var n=F[0];if(0===n){var o=F,u=2*(n=o.length);if(!(65536>=u))throw Error(i(304));var c=new Uint16Array(u);for(c.set(o),(F=c)[0]=n+1,o=n;o<u-1;o++)F[o]=o+1;F[u-1]=0}else F[0]=F[n];this.threadID=n,this.stack=[e],this.exhausted=!1,this.currentSelectValue=null,this.previousWasTextNode=!1,this.makeStaticMarkup=t,this.suspenseDepth=0,this.contextIndex=-1,this.contextStack=[],this.contextValueStack=[],this.uniqueID=0,this.identifierPrefix=r&&r.identifierPrefix||""}var t=e.prototype;return t.destroy=function(){if(!this.exhausted){this.exhausted=!0,this.clearProviders();var e=this.threadID;F[e]=F[0],F[0]=e}},t.pushProvider=function(e){var t=++this.contextIndex,r=e.type._context,n=this.threadID;O(r,n);var o=r[n];this.contextStack[t]=r,this.contextValueStack[t]=o,r[n]=e.props.value},t.popProvider=function(){var e=this.contextIndex,t=this.contextStack[e],r=this.contextValueStack[e];this.contextStack[e]=null,this.contextValueStack[e]=null,this.contextIndex--,t[this.threadID]=r},t.clearProviders=function(){for(var e=this.contextIndex;0<=e;e--)this.contextStack[e][this.threadID]=this.contextValueStack[e]},t.read=function(e){if(this.exhausted)return null;var t=ue;ue=this;var r=ge.current;ge.current=le;try{for(var n=[""],o=!1;n[0].length<e;){if(0===this.stack.length){this.exhausted=!0;var a=this.threadID;F[a]=F[0],F[0]=a;break}var u=this.stack[this.stack.length-1];if(o||u.childIndex>=u.children.length){var l=u.footer;if(""!==l&&(this.previousWasTextNode=!1),this.stack.pop(),"select"===u.type)this.currentSelectValue=null;else if(null!=u.type&&null!=u.type.type&&u.type.type.$$typeof===f)this.popProvider(u.type);else if(u.type===h){this.suspenseDepth--;var c=n.pop();if(o){o=!1;var s=u.fallbackFrame;if(!s)throw Error(i(303));this.stack.push(s),n[this.suspenseDepth]+="\x3c!--$!--\x3e";continue}n[this.suspenseDepth]+=c}n[this.suspenseDepth]+=l}else{var p=u.children[u.childIndex++],d="";try{d+=this.render(p,u.context,u.domNamespace)}catch(e){if(null!=e&&"function"==typeof e.then)throw Error(i(294));throw e}n.length<=this.suspenseDepth&&n.push(""),n[this.suspenseDepth]+=d}}return n[0]}finally{ge.current=r,ue=t,te()}},t.render=function(e,t,r){if("string"==typeof e||"number"==typeof e)return""===(r=""+e)?"":this.makeStaticMarkup?L(r):this.previousWasTextNode?"\x3c!-- --\x3e"+L(r):(this.previousWasTextNode=!0,L(r));if(e=(t=Ce(e,t,this.threadID)).child,t=t.context,null===e||!1===e)return"";if(!a.isValidElement(e)){if(null!=e&&null!=e.$$typeof){if((r=e.$$typeof)===u)throw Error(i(257));throw Error(i(258,r.toString()))}return e=ve(e),this.stack.push({type:null,domNamespace:r,children:e,childIndex:0,context:t,footer:""}),""}var g=e.type;if("string"==typeof g)return this.renderDOM(e,t,r);switch(g){case k:case x:case c:case s:case y:case l:return e=ve(e.props.children),this.stack.push({type:null,domNamespace:r,children:e,childIndex:0,context:t,footer:""}),"";case h:throw Error(i(294));case w:throw Error(i(343))}if("object"===n(g)&&null!==g)switch(g.$$typeof){case d:W={};var S=g.render(e.props,e.ref);return S=ee(g.render,e.props,S,e.ref),S=ve(S),this.stack.push({type:null,domNamespace:r,children:S,childIndex:0,context:t,footer:""}),"";case m:return e=[a.createElement(g.type,o({ref:e.ref},e.props))],this.stack.push({type:null,domNamespace:r,children:e,childIndex:0,context:t,footer:""}),"";case f:return r={type:e,domNamespace:r,children:g=ve(e.props.children),childIndex:0,context:t,footer:""},this.pushProvider(e),this.stack.push(r),"";case p:g=e.type,S=e.props;var _=this.threadID;return O(g,_),g=ve(S.children(g[_])),this.stack.push({type:e,domNamespace:r,children:g,childIndex:0,context:t,footer:""}),"";case b:throw Error(i(338));case v:return g=(S=(g=e.type)._init)(g._payload),e=[a.createElement(g,o({ref:e.ref},e.props))],this.stack.push({type:null,domNamespace:r,children:e,childIndex:0,context:t,footer:""}),""}throw Error(i(130,null==g?g:n(g),""))},t.renderDOM=function(e,t,r){var u=e.type.toLowerCase();if(r===ce&&se(u),!xe.hasOwnProperty(u)){if(!we.test(u))throw Error(i(65,u));xe[u]=!0}var l=e.props;if("input"===u)l=o({type:void 0},l,{defaultChecked:void 0,defaultValue:void 0,value:null!=l.value?l.value:l.defaultValue,checked:null!=l.checked?l.checked:l.defaultChecked});else if("textarea"===u){var c=l.value;if(null==c){c=l.defaultValue;var s=l.children;if(null!=s){if(null!=c)throw Error(i(92));if(Array.isArray(s)){if(!(1>=s.length))throw Error(i(93));s=s[0]}c=""+s}null==c&&(c="")}l=o({},l,{value:void 0,children:""+c})}else if("select"===u)this.currentSelectValue=null!=l.value?l.value:l.defaultValue,l=o({},l,{value:void 0});else if("option"===u){s=this.currentSelectValue;var f=function(e){if(null==e)return e;var t="";return a.Children.forEach(e,(function(e){null!=e&&(t+=e)})),t}(l.children);if(null!=s){var p=null!=l.value?l.value+"":f;if(c=!1,Array.isArray(s)){for(var d=0;d<s.length;d++)if(""+s[d]===p){c=!0;break}}else c=""+s===p;l=o({selected:void 0,children:void 0},l,{selected:c,children:f})}}if(c=l){if(pe[u]&&(null!=c.children||null!=c.dangerouslySetInnerHTML))throw Error(i(137,u));if(null!=c.dangerouslySetInnerHTML){if(null!=c.children)throw Error(i(60));if("object"!==n(c.dangerouslySetInnerHTML)||!("__html"in c.dangerouslySetInnerHTML))throw Error(i(61))}if(null!=c.style&&"object"!==n(c.style))throw Error(i(62))}c=l,s=this.makeStaticMarkup,f=1===this.stack.length,p="<"+e.type;e:if(-1===u.indexOf("-"))d="string"==typeof c.is;else switch(u){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":d=!1;break e;default:d=!0}for(k in c)if(Se.call(c,k)){var h=c[k];if(null!=h){if("style"===k){var y=void 0,m="",v="";for(y in h)if(h.hasOwnProperty(y)){var g=0===y.indexOf("--"),b=h[y];if(null!=b){if(g)var w=y;else if(w=y,ke.hasOwnProperty(w))w=ke[w];else{var x=w.replace(ye,"-$1").toLowerCase().replace(me,"-ms-");w=ke[w]=x}m+=v+w+":",v=y,m+=g=null==b||"boolean"==typeof b||""===b?"":g||"number"!=typeof b||0===b||de.hasOwnProperty(v)&&de[v]?(""+b).trim():b+"px",v=";"}}h=m||null}y=null,d?_e.hasOwnProperty(k)||(y=R(y=k)&&null!=h?y+'="'+L(h)+'"':""):y=z(k,h),y&&(p+=" "+y)}}s||f&&(p+=' data-reactroot=""');var k=p;c="",fe.hasOwnProperty(u)?k+="/>":(k+=">",c="</"+e.type+">");e:{if(null!=(s=l.dangerouslySetInnerHTML)){if(null!=s.__html){s=s.__html;break e}}else if("string"==typeof(s=l.children)||"number"==typeof s){s=L(s);break e}s=null}return null!=s?(l=[],be.hasOwnProperty(u)&&"\n"===s.charAt(0)&&(k+="\n"),k+=s):l=ve(l.children),e=e.type,r=null==r||"http://www.w3.org/1999/xhtml"===r?se(e):"http://www.w3.org/2000/svg"===r&&"foreignObject"===e?"http://www.w3.org/1999/xhtml":r,this.stack.push({domNamespace:r,type:u,children:l,childIndex:0,context:t,footer:c}),this.previousWasTextNode=!1,k},e}();t.renderToString=function(e,t){e=new Oe(e,!1,t);try{return e.read(1/0)}finally{e.destroy()}}},956:(e,t,r)=>{"use strict";e.exports=r(954)},340:(e,t,r)=>{"use strict";function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}var o=r(257),a=60103,i=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var u=60109,l=60110,c=60112;t.Suspense=60113;var s=60115,f=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;a=p("react.element"),i=p("react.portal"),t.Fragment=p("react.fragment"),t.StrictMode=p("react.strict_mode"),t.Profiler=p("react.profiler"),u=p("react.provider"),l=p("react.context"),c=p("react.forward_ref"),t.Suspense=p("react.suspense"),s=p("react.memo"),f=p("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function v(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||y}function g(){}function b(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||y}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!==n(e)&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=v.prototype;var w=b.prototype=new g;w.constructor=b,o(w,v.prototype),w.isPureReactComponent=!0;var x={current:null},k=Object.prototype.hasOwnProperty,S={key:!0,ref:!0,__self:!0,__source:!0};function _(e,t,r){var n,o={},i=null,u=null;if(null!=t)for(n in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(i=""+t.key),t)k.call(t,n)&&!S.hasOwnProperty(n)&&(o[n]=t[n]);var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){for(var c=Array(l),s=0;s<l;s++)c[s]=arguments[s+2];o.children=c}if(e&&e.defaultProps)for(n in l=e.defaultProps)void 0===o[n]&&(o[n]=l[n]);return{$$typeof:a,type:e,key:i,ref:u,props:o,_owner:x.current}}function E(e){return"object"===n(e)&&null!==e&&e.$$typeof===a}var C=/\/+/g;function O(e,t){return"object"===n(e)&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function F(e,t,r,o,u){var l=n(e);"undefined"!==l&&"boolean"!==l||(e=null);var c=!1;if(null===e)c=!0;else switch(l){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case a:case i:c=!0}}if(c)return u=u(c=e),e=""===o?"."+O(c,0):o,Array.isArray(u)?(r="",null!=e&&(r=e.replace(C,"$&/")+"/"),F(u,t,r,"",(function(e){return e}))):null!=u&&(E(u)&&(u=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(u,r+(!u.key||c&&c.key===u.key?"":(""+u.key).replace(C,"$&/")+"/")+e)),t.push(u)),1;if(c=0,o=""===o?".":o+":",Array.isArray(e))for(var s=0;s<e.length;s++){var f=o+O(l=e[s],s);c+=F(l,t,r,f,u)}else if(f=function(e){return null===e||"object"!==n(e)?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),s=0;!(l=e.next()).done;)c+=F(l=l.value,t,r,f=o+O(l,s++),u);else if("object"===l)throw t=""+e,Error(h(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function I(e,t,r){if(null==e)return e;var n=[],o=0;return F(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function P(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var j={current:null};function D(){var e=j.current;if(null===e)throw Error(h(321));return e}var N={ReactCurrentDispatcher:j,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:x,IsSomeRendererActing:{current:!1},assign:o};t.Children={map:I,forEach:function(e,t,r){I(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return I(e,(function(){t++})),t},toArray:function(e){return I(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error(h(143));return e}},t.Component=v,t.PureComponent=b,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=N,t.cloneElement=function(e,t,r){if(null==e)throw Error(h(267,e));var n=o({},e.props),i=e.key,u=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(u=t.ref,l=x.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(s in t)k.call(t,s)&&!S.hasOwnProperty(s)&&(n[s]=void 0===t[s]&&void 0!==c?c[s]:t[s])}var s=arguments.length-2;if(1===s)n.children=r;else if(1<s){c=Array(s);for(var f=0;f<s;f++)c[f]=arguments[f+2];n.children=c}return{$$typeof:a,type:e.type,key:i,ref:u,props:n,_owner:l}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:l,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},t.createElement=_,t.createFactory=function(e){var t=_.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=E,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:s,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return D().useCallback(e,t)},t.useContext=function(e,t){return D().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return D().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return D().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return D().useLayoutEffect(e,t)},t.useMemo=function(e,t){return D().useMemo(e,t)},t.useReducer=function(e,t,r){return D().useReducer(e,t,r)},t.useRef=function(e){return D().useRef(e)},t.useState=function(e){return D().useState(e)},t.version="17.0.2"},341:(e,t,r)=>{"use strict";e.exports=r(340)}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e=require("router");var t=r.n(e),n=r(341),o=r(956),a=r(159),i=r.n(a);const u=require("i18n");var l=r.n(u),c=function(e){var t=e.name,r=e.feedback,o=e.pageName,a=e.pageURI;return n.createElement("article",{className:"env-card env-block env-shadow"},n.createElement("div",{className:"env-card__body"},n.createElement("p",{className:"env-card__text env-card__text--title"},l().get("feedbackFrom",t),a&&o&&n.createElement(n.Fragment,null,l().get("for"),n.createElement("a",{className:"env-link",href:a},o))),n.createElement("br",null),n.createElement("p",{className:"env-card__text","aria-hidden":!0},r)))};c.propTypes={page:i().string,name:i().string,feedback:i().string};const s=c,f=require("requester");var p=r.n(f);const d=require("events");var h=r.n(d);function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},y.apply(this,arguments)}function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,i,u=[],l=!0,c=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=a.call(r)).done)&&(u.push(n.value),u.length!==t);l=!0);}catch(e){c=!0,o=e}finally{try{if(!l&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(c)throw o}}return u}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return v(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return v(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var g=function(e){var r=e.feedbacks,o=m(n.useState(r),2),a=o[0],i=o[1];return console.log(a),n.useEffect((function(){h().on("pageFeed:reload",(function(){p().doGet({url:t().getStandaloneUrl("/feedbacks")}).then((function(e){return i(e.feedbacks)}))}))})),n.createElement("div",{className:"env-cardholder-grid"},a.map((function(e){return n.createElement(s,y({key:e.id},e))})))};g.propTypes={feedbacks:i().array};const b=g,w=require("appData");var x=r.n(w);const k=require("NodeTypeUtil");var S=r.n(k);const _=require("PortletContextUtil");var E=r.n(_);const C=require("Properties");var O=r.n(C);const F=require("ResourceLocatorUtil");var I=r.n(F);const P=require("storage");var j=r.n(P);const D=require("TrashcanUtil");var N=r.n(D);require("LogUtil");var R=function(){var e="allFeedbacks"==x().get("feedbacks"),t=j().getCollectionDataStore("feedback"),r=e?"*":"ds.analyzed.page:".concat(E().getCurrentPage().getIdentifier());return t.find(r,100,0).toArray().map((function(e){var t,r=e.page,n=e.name,o=e.feedback,a=I().getNodeByIdentifier(r);if((t=a)&&!N().isInTrashcan(t)){var i={name:n,feedback:o},u=S().isArticle(a)?"articleName":"displayName",l=O().get(a,u,"URI");return i.pageURI=l.URI,i.pageName=l[u],i}})).filter((function(e){return!!e}))};t().get("/",(function(e,t){var r=R();t.agnosticRender((0,o.renderToString)(n.createElement(b,{feedbacks:r})),{feedbacks:r})})),t().get("/feedbacks",(function(e,t){t.json({feedbacks:R()})}))})()})();