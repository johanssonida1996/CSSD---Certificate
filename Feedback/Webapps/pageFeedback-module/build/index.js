/*! For license information please see index.js.LICENSE.txt */
(()=>{var e={257:e=>{"use strict";var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,o){for(var a,i,u=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var s in a=Object(arguments[l]))r.call(a,s)&&(u[s]=a[s]);if(t){i=t(a);for(var c=0;c<i.length;c++)n.call(a,i[c])&&(u[i[c]]=a[i[c]])}}return u}},745:(e,t,r)=>{"use strict";var n=r(585);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,a,i){if(i!==n){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return r.PropTypes=r,r}},159:(e,t,r)=>{e.exports=r(745)()},585:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},954:(e,t,r)=>{"use strict";function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}var o=r(257),a=r(341);function i(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var u=60106,l=60107,s=60108,c=60114,f=60109,p=60110,d=60112,h=60113,y=60120,m=60115,v=60116,g=60121,w=60117,b=60119,x=60129,k=60131;if("function"==typeof Symbol&&Symbol.for){var S=Symbol.for;u=S("react.portal"),l=S("react.fragment"),s=S("react.strict_mode"),c=S("react.profiler"),f=S("react.provider"),p=S("react.context"),d=S("react.forward_ref"),h=S("react.suspense"),y=S("react.suspense_list"),m=S("react.memo"),v=S("react.lazy"),g=S("react.block"),w=S("react.fundamental"),b=S("react.scope"),x=S("react.debug_trace_mode"),k=S("react.legacy_hidden")}function E(e){if(null==e)return null;if("function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case l:return"Fragment";case u:return"Portal";case c:return"Profiler";case s:return"StrictMode";case h:return"Suspense";case y:return"SuspenseList"}if("object"===n(e))switch(e.$$typeof){case p:return(e.displayName||"Context")+".Consumer";case f:return(e._context.displayName||"Context")+".Provider";case d:var t=e.render;return t=t.displayName||t.name||"",e.displayName||(""!==t?"ForwardRef("+t+")":"ForwardRef");case m:return E(e.type);case g:return E(e._render);case v:t=e._payload,e=e._init;try{return E(e(t))}catch(e){}}return null}var _=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,C={};function O(e,t){for(var r=0|e._threadCount;r<=t;r++)e[r]=e._currentValue2,e._threadCount=r+1}for(var F=new Uint16Array(16),I=0;15>I;I++)F[I]=I+1;F[15]=0;var P=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,D=Object.prototype.hasOwnProperty,R={},N={};function j(e){return!!D.call(N,e)||!D.call(R,e)&&(P.test(e)?N[e]=!0:(R[e]=!0,!1))}function M(e,t,r,o){if(null==t||function(e,t,r,o){if(null!==r&&0===r.type)return!1;switch(n(t)){case"function":case"symbol":return!0;case"boolean":return!o&&(null!==r?!r.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,r,o))return!0;if(o)return!1;if(null!==r)switch(r.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function T(e,t,r,n,o,a,i){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=n,this.attributeNamespace=o,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=i}var $={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){$[e]=new T(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];$[t]=new T(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){$[e]=new T(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){$[e]=new T(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){$[e]=new T(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){$[e]=new T(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){$[e]=new T(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){$[e]=new T(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){$[e]=new T(e,5,!1,e.toLowerCase(),null,!1,!1)}));var A=/[\-:]([a-z])/g;function q(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(A,q);$[t]=new T(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(A,q);$[t]=new T(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(A,q);$[t]=new T(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){$[e]=new T(e,1,!1,e.toLowerCase(),null,!1,!1)})),$.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){$[e]=new T(e,1,!1,e.toLowerCase(),null,!0,!0)}));var L=/["'&<>]/;function z(e){if("boolean"==typeof e||"number"==typeof e)return""+e;e=""+e;var t=L.exec(e);if(t){var r,n="",o=0;for(r=t.index;r<e.length;r++){switch(e.charCodeAt(r)){case 34:t="&quot;";break;case 38:t="&amp;";break;case 39:t="&#x27;";break;case 60:t="&lt;";break;case 62:t="&gt;";break;default:continue}o!==r&&(n+=e.substring(o,r)),o=r+1,n+=t}e=o!==r?n+e.substring(o,r):n}return e}function V(e,t){var r,n=$.hasOwnProperty(e)?$[e]:null;return(r="style"!==e)&&(r=null!==n?0===n.type:2<e.length&&("o"===e[0]||"O"===e[0])&&("n"===e[1]||"N"===e[1])),r||M(e,t,n,!1)?"":null!==n?(e=n.attributeName,3===(r=n.type)||4===r&&!0===t?e+'=""':(n.sanitizeURL&&(t=""+t),e+'="'+z(t)+'"')):j(e)?e+'="'+z(t)+'"':""}var U="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},W=null,H=null,B=null,Z=!1,G=!1,Y=null,J=0;function X(){if(null===W)throw Error(i(321));return W}function K(){if(0<J)throw Error(i(312));return{memoizedState:null,queue:null,next:null}}function Q(){return null===B?null===H?(Z=!1,H=B=K()):(Z=!0,B=H):null===B.next?(Z=!1,B=B.next=K()):(Z=!0,B=B.next),B}function ee(e,t,r,n){for(;G;)G=!1,J+=1,B=null,r=e(t,n);return te(),r}function te(){W=null,G=!1,H=null,J=0,B=Y=null}function re(e,t){return"function"==typeof t?t(e):t}function ne(e,t,r){if(W=X(),B=Q(),Z){var n=B.queue;if(t=n.dispatch,null!==Y&&void 0!==(r=Y.get(n))){Y.delete(n),n=B.memoizedState;do{n=e(n,r.action),r=r.next}while(null!==r);return B.memoizedState=n,[n,t]}return[B.memoizedState,t]}return e=e===re?"function"==typeof t?t():t:void 0!==r?r(t):t,B.memoizedState=e,e=(e=B.queue={last:null,dispatch:null}).dispatch=ae.bind(null,W,e),[B.memoizedState,e]}function oe(e,t){if(W=X(),t=void 0===t?null:t,null!==(B=Q())){var r=B.memoizedState;if(null!==r&&null!==t){var n=r[1];e:if(null===n)n=!1;else{for(var o=0;o<n.length&&o<t.length;o++)if(!U(t[o],n[o])){n=!1;break e}n=!0}if(n)return r[0]}}return e=e(),B.memoizedState=[e,t],e}function ae(e,t,r){if(!(25>J))throw Error(i(301));if(e===W)if(G=!0,e={action:r,next:null},null===Y&&(Y=new Map),void 0===(r=Y.get(t)))Y.set(t,e);else{for(t=r;null!==t.next;)t=t.next;t.next=e}}function ie(){}var ue=null,le={readContext:function(e){var t=ue.threadID;return O(e,t),e[t]},useContext:function(e){X();var t=ue.threadID;return O(e,t),e[t]},useMemo:oe,useReducer:ne,useRef:function(e){W=X();var t=(B=Q()).memoizedState;return null===t?(e={current:e},B.memoizedState=e):t},useState:function(e){return ne(re,e)},useLayoutEffect:function(){},useCallback:function(e,t){return oe((function(){return e}),t)},useImperativeHandle:ie,useEffect:ie,useDebugValue:ie,useDeferredValue:function(e){return X(),e},useTransition:function(){return X(),[function(e){e()},!1]},useOpaqueIdentifier:function(){return(ue.identifierPrefix||"")+"R:"+(ue.uniqueID++).toString(36)},useMutableSource:function(e,t){return X(),t(e._source)}},se="http://www.w3.org/1999/xhtml";function ce(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}var fe={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},pe=o({menuitem:!0},fe),de={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},he=["Webkit","ms","Moz","O"];Object.keys(de).forEach((function(e){he.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),de[t]=de[e]}))}));var ye=/([A-Z])/g,me=/^ms-/,ve=a.Children.toArray,ge=_.ReactCurrentDispatcher,we={listing:!0,pre:!0,textarea:!0},be=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,xe={},ke={};var Se=Object.prototype.hasOwnProperty,Ee={children:null,dangerouslySetInnerHTML:null,suppressContentEditableWarning:null,suppressHydrationWarning:null};function _e(e,t){if(void 0===e)throw Error(i(152,E(t)||"Component"))}function Ce(e,t,r){function u(a,u){var l=u.prototype&&u.prototype.isReactComponent,s=function(e,t,r,o){if(o&&"object"===n(o=e.contextType)&&null!==o)return O(o,r),o[r];if(e=e.contextTypes){for(var a in r={},e)r[a]=t[a];t=r}else t=C;return t}(u,t,r,l),c=[],f=!1,p={isMounted:function(){return!1},enqueueForceUpdate:function(){if(null===c)return null},enqueueReplaceState:function(e,t){f=!0,c=[t]},enqueueSetState:function(e,t){if(null===c)return null;c.push(t)}};if(l){if(l=new u(a.props,s,p),"function"==typeof u.getDerivedStateFromProps){var d=u.getDerivedStateFromProps.call(null,a.props,l.state);null!=d&&(l.state=o({},l.state,d))}}else if(W={},l=u(a.props,s,p),null==(l=ee(u,a.props,l,s))||null==l.render)return void _e(e=l,u);if(l.props=a.props,l.context=s,l.updater=p,void 0===(p=l.state)&&(l.state=p=null),"function"==typeof l.UNSAFE_componentWillMount||"function"==typeof l.componentWillMount)if("function"==typeof l.componentWillMount&&"function"!=typeof u.getDerivedStateFromProps&&l.componentWillMount(),"function"==typeof l.UNSAFE_componentWillMount&&"function"!=typeof u.getDerivedStateFromProps&&l.UNSAFE_componentWillMount(),c.length){p=c;var h=f;if(c=null,f=!1,h&&1===p.length)l.state=p[0];else{d=h?p[0]:l.state;var y=!0;for(h=h?1:0;h<p.length;h++){var m=p[h];null!=(m="function"==typeof m?m.call(l,d,a.props,s):m)&&(y?(y=!1,d=o({},d,m)):o(d,m))}l.state=d}}else c=null;if(_e(e=l.render(),u),"function"==typeof l.getChildContext&&"object"===n(a=u.childContextTypes)){var v=l.getChildContext();for(var g in v)if(!(g in a))throw Error(i(108,E(u)||"Unknown",g))}v&&(t=o({},t,v))}for(;a.isValidElement(e);){var l=e,s=l.type;if("function"!=typeof s)break;u(l,s)}return{child:e,context:t}}var Oe=function(){function e(e,t,r){a.isValidElement(e)?e.type!==l?e=[e]:(e=e.props.children,e=a.isValidElement(e)?[e]:ve(e)):e=ve(e),e={type:null,domNamespace:se,children:e,childIndex:0,context:C,footer:""};var n=F[0];if(0===n){var o=F,u=2*(n=o.length);if(!(65536>=u))throw Error(i(304));var s=new Uint16Array(u);for(s.set(o),(F=s)[0]=n+1,o=n;o<u-1;o++)F[o]=o+1;F[u-1]=0}else F[0]=F[n];this.threadID=n,this.stack=[e],this.exhausted=!1,this.currentSelectValue=null,this.previousWasTextNode=!1,this.makeStaticMarkup=t,this.suspenseDepth=0,this.contextIndex=-1,this.contextStack=[],this.contextValueStack=[],this.uniqueID=0,this.identifierPrefix=r&&r.identifierPrefix||""}var t=e.prototype;return t.destroy=function(){if(!this.exhausted){this.exhausted=!0,this.clearProviders();var e=this.threadID;F[e]=F[0],F[0]=e}},t.pushProvider=function(e){var t=++this.contextIndex,r=e.type._context,n=this.threadID;O(r,n);var o=r[n];this.contextStack[t]=r,this.contextValueStack[t]=o,r[n]=e.props.value},t.popProvider=function(){var e=this.contextIndex,t=this.contextStack[e],r=this.contextValueStack[e];this.contextStack[e]=null,this.contextValueStack[e]=null,this.contextIndex--,t[this.threadID]=r},t.clearProviders=function(){for(var e=this.contextIndex;0<=e;e--)this.contextStack[e][this.threadID]=this.contextValueStack[e]},t.read=function(e){if(this.exhausted)return null;var t=ue;ue=this;var r=ge.current;ge.current=le;try{for(var n=[""],o=!1;n[0].length<e;){if(0===this.stack.length){this.exhausted=!0;var a=this.threadID;F[a]=F[0],F[0]=a;break}var u=this.stack[this.stack.length-1];if(o||u.childIndex>=u.children.length){var l=u.footer;if(""!==l&&(this.previousWasTextNode=!1),this.stack.pop(),"select"===u.type)this.currentSelectValue=null;else if(null!=u.type&&null!=u.type.type&&u.type.type.$$typeof===f)this.popProvider(u.type);else if(u.type===h){this.suspenseDepth--;var s=n.pop();if(o){o=!1;var c=u.fallbackFrame;if(!c)throw Error(i(303));this.stack.push(c),n[this.suspenseDepth]+="\x3c!--$!--\x3e";continue}n[this.suspenseDepth]+=s}n[this.suspenseDepth]+=l}else{var p=u.children[u.childIndex++],d="";try{d+=this.render(p,u.context,u.domNamespace)}catch(e){if(null!=e&&"function"==typeof e.then)throw Error(i(294));throw e}n.length<=this.suspenseDepth&&n.push(""),n[this.suspenseDepth]+=d}}return n[0]}finally{ge.current=r,ue=t,te()}},t.render=function(e,t,r){if("string"==typeof e||"number"==typeof e)return""===(r=""+e)?"":this.makeStaticMarkup?z(r):this.previousWasTextNode?"\x3c!-- --\x3e"+z(r):(this.previousWasTextNode=!0,z(r));if(e=(t=Ce(e,t,this.threadID)).child,t=t.context,null===e||!1===e)return"";if(!a.isValidElement(e)){if(null!=e&&null!=e.$$typeof){if((r=e.$$typeof)===u)throw Error(i(257));throw Error(i(258,r.toString()))}return e=ve(e),this.stack.push({type:null,domNamespace:r,children:e,childIndex:0,context:t,footer:""}),""}var g=e.type;if("string"==typeof g)return this.renderDOM(e,t,r);switch(g){case k:case x:case s:case c:case y:case l:return e=ve(e.props.children),this.stack.push({type:null,domNamespace:r,children:e,childIndex:0,context:t,footer:""}),"";case h:throw Error(i(294));case b:throw Error(i(343))}if("object"===n(g)&&null!==g)switch(g.$$typeof){case d:W={};var S=g.render(e.props,e.ref);return S=ee(g.render,e.props,S,e.ref),S=ve(S),this.stack.push({type:null,domNamespace:r,children:S,childIndex:0,context:t,footer:""}),"";case m:return e=[a.createElement(g.type,o({ref:e.ref},e.props))],this.stack.push({type:null,domNamespace:r,children:e,childIndex:0,context:t,footer:""}),"";case f:return r={type:e,domNamespace:r,children:g=ve(e.props.children),childIndex:0,context:t,footer:""},this.pushProvider(e),this.stack.push(r),"";case p:g=e.type,S=e.props;var E=this.threadID;return O(g,E),g=ve(S.children(g[E])),this.stack.push({type:e,domNamespace:r,children:g,childIndex:0,context:t,footer:""}),"";case w:throw Error(i(338));case v:return g=(S=(g=e.type)._init)(g._payload),e=[a.createElement(g,o({ref:e.ref},e.props))],this.stack.push({type:null,domNamespace:r,children:e,childIndex:0,context:t,footer:""}),""}throw Error(i(130,null==g?g:n(g),""))},t.renderDOM=function(e,t,r){var u=e.type.toLowerCase();if(r===se&&ce(u),!xe.hasOwnProperty(u)){if(!be.test(u))throw Error(i(65,u));xe[u]=!0}var l=e.props;if("input"===u)l=o({type:void 0},l,{defaultChecked:void 0,defaultValue:void 0,value:null!=l.value?l.value:l.defaultValue,checked:null!=l.checked?l.checked:l.defaultChecked});else if("textarea"===u){var s=l.value;if(null==s){s=l.defaultValue;var c=l.children;if(null!=c){if(null!=s)throw Error(i(92));if(Array.isArray(c)){if(!(1>=c.length))throw Error(i(93));c=c[0]}s=""+c}null==s&&(s="")}l=o({},l,{value:void 0,children:""+s})}else if("select"===u)this.currentSelectValue=null!=l.value?l.value:l.defaultValue,l=o({},l,{value:void 0});else if("option"===u){c=this.currentSelectValue;var f=function(e){if(null==e)return e;var t="";return a.Children.forEach(e,(function(e){null!=e&&(t+=e)})),t}(l.children);if(null!=c){var p=null!=l.value?l.value+"":f;if(s=!1,Array.isArray(c)){for(var d=0;d<c.length;d++)if(""+c[d]===p){s=!0;break}}else s=""+c===p;l=o({selected:void 0,children:void 0},l,{selected:s,children:f})}}if(s=l){if(pe[u]&&(null!=s.children||null!=s.dangerouslySetInnerHTML))throw Error(i(137,u));if(null!=s.dangerouslySetInnerHTML){if(null!=s.children)throw Error(i(60));if("object"!==n(s.dangerouslySetInnerHTML)||!("__html"in s.dangerouslySetInnerHTML))throw Error(i(61))}if(null!=s.style&&"object"!==n(s.style))throw Error(i(62))}s=l,c=this.makeStaticMarkup,f=1===this.stack.length,p="<"+e.type;e:if(-1===u.indexOf("-"))d="string"==typeof s.is;else switch(u){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":d=!1;break e;default:d=!0}for(k in s)if(Se.call(s,k)){var h=s[k];if(null!=h){if("style"===k){var y=void 0,m="",v="";for(y in h)if(h.hasOwnProperty(y)){var g=0===y.indexOf("--"),w=h[y];if(null!=w){if(g)var b=y;else if(b=y,ke.hasOwnProperty(b))b=ke[b];else{var x=b.replace(ye,"-$1").toLowerCase().replace(me,"-ms-");b=ke[b]=x}m+=v+b+":",v=y,m+=g=null==w||"boolean"==typeof w||""===w?"":g||"number"!=typeof w||0===w||de.hasOwnProperty(v)&&de[v]?(""+w).trim():w+"px",v=";"}}h=m||null}y=null,d?Ee.hasOwnProperty(k)||(y=j(y=k)&&null!=h?y+'="'+z(h)+'"':""):y=V(k,h),y&&(p+=" "+y)}}c||f&&(p+=' data-reactroot=""');var k=p;s="",fe.hasOwnProperty(u)?k+="/>":(k+=">",s="</"+e.type+">");e:{if(null!=(c=l.dangerouslySetInnerHTML)){if(null!=c.__html){c=c.__html;break e}}else if("string"==typeof(c=l.children)||"number"==typeof c){c=z(c);break e}c=null}return null!=c?(l=[],we.hasOwnProperty(u)&&"\n"===c.charAt(0)&&(k+="\n"),k+=c):l=ve(l.children),e=e.type,r=null==r||"http://www.w3.org/1999/xhtml"===r?ce(e):"http://www.w3.org/2000/svg"===r&&"foreignObject"===e?"http://www.w3.org/1999/xhtml":r,this.stack.push({domNamespace:r,type:u,children:l,childIndex:0,context:t,footer:s}),this.previousWasTextNode=!1,k},e}();t.renderToString=function(e,t){e=new Oe(e,!1,t);try{return e.read(1/0)}finally{e.destroy()}}},956:(e,t,r)=>{"use strict";e.exports=r(954)},340:(e,t,r)=>{"use strict";function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}var o=r(257),a=60103,i=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var u=60109,l=60110,s=60112;t.Suspense=60113;var c=60115,f=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;a=p("react.element"),i=p("react.portal"),t.Fragment=p("react.fragment"),t.StrictMode=p("react.strict_mode"),t.Profiler=p("react.profiler"),u=p("react.provider"),l=p("react.context"),s=p("react.forward_ref"),t.Suspense=p("react.suspense"),c=p("react.memo"),f=p("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function v(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||y}function g(){}function w(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||y}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!==n(e)&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=v.prototype;var b=w.prototype=new g;b.constructor=w,o(b,v.prototype),b.isPureReactComponent=!0;var x={current:null},k=Object.prototype.hasOwnProperty,S={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,r){var n,o={},i=null,u=null;if(null!=t)for(n in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(i=""+t.key),t)k.call(t,n)&&!S.hasOwnProperty(n)&&(o[n]=t[n]);var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){for(var s=Array(l),c=0;c<l;c++)s[c]=arguments[c+2];o.children=s}if(e&&e.defaultProps)for(n in l=e.defaultProps)void 0===o[n]&&(o[n]=l[n]);return{$$typeof:a,type:e,key:i,ref:u,props:o,_owner:x.current}}function _(e){return"object"===n(e)&&null!==e&&e.$$typeof===a}var C=/\/+/g;function O(e,t){return"object"===n(e)&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function F(e,t,r,o,u){var l=n(e);"undefined"!==l&&"boolean"!==l||(e=null);var s=!1;if(null===e)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case a:case i:s=!0}}if(s)return u=u(s=e),e=""===o?"."+O(s,0):o,Array.isArray(u)?(r="",null!=e&&(r=e.replace(C,"$&/")+"/"),F(u,t,r,"",(function(e){return e}))):null!=u&&(_(u)&&(u=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(u,r+(!u.key||s&&s.key===u.key?"":(""+u.key).replace(C,"$&/")+"/")+e)),t.push(u)),1;if(s=0,o=""===o?".":o+":",Array.isArray(e))for(var c=0;c<e.length;c++){var f=o+O(l=e[c],c);s+=F(l,t,r,f,u)}else if(f=function(e){return null===e||"object"!==n(e)?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),c=0;!(l=e.next()).done;)s+=F(l=l.value,t,r,f=o+O(l,c++),u);else if("object"===l)throw t=""+e,Error(h(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return s}function I(e,t,r){if(null==e)return e;var n=[],o=0;return F(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function P(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var D={current:null};function R(){var e=D.current;if(null===e)throw Error(h(321));return e}var N={ReactCurrentDispatcher:D,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:x,IsSomeRendererActing:{current:!1},assign:o};t.Children={map:I,forEach:function(e,t,r){I(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return I(e,(function(){t++})),t},toArray:function(e){return I(e,(function(e){return e}))||[]},only:function(e){if(!_(e))throw Error(h(143));return e}},t.Component=v,t.PureComponent=w,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=N,t.cloneElement=function(e,t,r){if(null==e)throw Error(h(267,e));var n=o({},e.props),i=e.key,u=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(u=t.ref,l=x.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in t)k.call(t,c)&&!S.hasOwnProperty(c)&&(n[c]=void 0===t[c]&&void 0!==s?s[c]:t[c])}var c=arguments.length-2;if(1===c)n.children=r;else if(1<c){s=Array(c);for(var f=0;f<c;f++)s[f]=arguments[f+2];n.children=s}return{$$typeof:a,type:e.type,key:i,ref:u,props:n,_owner:l}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:l,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},t.createElement=E,t.createFactory=function(e){var t=E.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=_,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:c,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return R().useCallback(e,t)},t.useContext=function(e,t){return R().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return R().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return R().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return R().useLayoutEffect(e,t)},t.useMemo=function(e,t){return R().useMemo(e,t)},t.useReducer=function(e,t,r){return R().useReducer(e,t,r)},t.useRef=function(e){return R().useRef(e)},t.useState=function(e){return R().useState(e)},t.version="17.0.2"},341:(e,t,r)=>{"use strict";e.exports=r(340)}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=r(341),t=r(956);const n=require("router");var o=r.n(n);const a=require("i18n");var i=r.n(a),u=r(159),l=r.n(u),s=function(t){var r=t.name,n=t.type;return e.createElement("div",{className:"env-form-element"},e.createElement("label",{htmlFor:r,className:"env-form-element__label"},i().get(r)),e.createElement("input",{className:"env-form-input",type:n,id:r,name:r,placeholder:i().get("".concat(r,"Placeholder")),required:!0}))};s.propTypes={name:l().string,type:l().string};const c=s,f=require("toasts");var p=r.n(f);const d=require("requester");var h=r.n(d);const y=require("events");var m=r.n(y);const v=function(){return e.createElement("div",null,e.createElement("form",{onSubmit:function(e){e.preventDefault();var t=e.currentTarget,r=new FormData(t),n={};r.forEach((function(e,t){n[t]=e})),h().doPost({url:o().getStandaloneUrl("/feedback"),data:n}).then((function(){t.reset(),p().publish({message:i().get("uploadSuccess"),type:"success"}),m().trigger("pageFeed:reload")})).catch((function(e){console.error("ERROR: "+JSON.stringify(e))}))},className:"env-form"},e.createElement(c,{name:"name",type:"text"}),e.createElement(c,{name:"feedback",type:"text"}),e.createElement("div",{className:"env-form-element"},e.createElement("button",{type:"submit",className:"env-button env-button--primary"},"Skicka feedback"))))},g=require("PortletContextUtil");var w=r.n(g);const b=require("storage");var x=r.n(b);const k=require("RestAppInvokerFactory");var S=r.n(k),E=x().getCollectionDataStore("feedback"),_=S().fromPath("rest-api/Task2-RestApp");o().get("/",(function(r,n){var o=(0,t.renderToString)(e.createElement(v,null));n.agnosticRender(o,{})})),o().post("/feedback",(function(e,t){var r=e.params,n=r.name,o=r.feedback,a=E.add({page:w().getCurrentPage().getIdentifier(),name:n,feedback:o});return _.get("/test"),a?t.status(204).send("Feedback successfully stored."):t.status(400).send("Failed to store feedback.")}))})()})();