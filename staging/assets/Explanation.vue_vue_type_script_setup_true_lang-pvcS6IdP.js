import{b0 as J,b1 as x,b2 as st,b3 as $,b4 as w,b5 as b,b6 as O,b7 as Y,b8 as it,b9 as rt,ba as at,bb as ct,bc as Z,bd as lt,be as ft,bf as ut,bg as tt,bh as dt,I as pt,a5 as u,a6 as mt,K as A,L as T,O as f,V as N,W as gt,af as H,Q as R,ag as bt,P as ht,ah as vt}from"./links-kExndiuE.js";const _t="http://www.w3.org/2000/svg",g=typeof document<"u"?document:null,W=g&&g.createElement("template"),St={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,o)=>{const a=e?g.createElementNS(_t,t):g.createElement(t,n?{is:n}:void 0);return"select"===t&&o&&null!=o.multiple&&a.setAttribute("multiple",o.multiple),a},createText:t=>g.createTextNode(t),createComment:t=>g.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>g.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,o,a,s){const l=n?n.previousSibling:e.lastChild;if(a&&(a===s||a.nextSibling))for(;e.insertBefore(a.cloneNode(!0),n),a!==s&&(a=a.nextSibling););else{W.innerHTML=o?`<svg>${t}</svg>`:t;const a=W.content;if(o){const t=a.firstChild;for(;t.firstChild;)a.appendChild(t.firstChild);a.removeChild(t)}e.insertBefore(a,n)}return[l?l.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Ct=Symbol("_vtc");function Et(t,e,n){const o=t[Ct];o&&(e=(e?[e,...o]:[...o]).join(" ")),null==e?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const B=Symbol("_vod"),Zt={beforeMount(t,{value:e},{transition:n}){t[B]="none"===t.style.display?"":t.style.display,n&&e?n.beforeEnter(t):S(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:o}){!e!=!n&&(o?e?(o.beforeEnter(t),S(t,!0),o.enter(t)):o.leave(t,(()=>{S(t,!1)})):S(t,e))},beforeUnmount(t,{value:e}){S(t,e)}};function S(t,e){t.style.display=e?t[B]:"none"}function At(t,e,n){const o=t.style,a=x(n);if(n&&!a){if(e&&!x(e))for(const t in e)null==n[t]&&L(o,t,"");for(const t in n)L(o,t,n[t])}else{const s=o.display;a?e!==n&&(o.cssText=n):e&&t.removeAttribute("style"),B in t&&(o.display=s)}}const D=/\s*!important$/;function L(t,e,n){if(b(n))n.forEach((n=>L(t,e,n)));else if(null==n&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const o=xt(t,e);D.test(n)?t.setProperty(Z(o),n.replace(D,""),"important"):t[o]=n}}const U=["Webkit","Moz","ms"],y={};function xt(t,e){const n=y[e];if(n)return n;let o=lt(e);if("filter"!==o&&o in t)return y[e]=o;o=ft(o);for(let n=0;n<U.length;n++){const a=U[n]+o;if(a in t)return y[e]=a}return e}const F="http://www.w3.org/1999/xlink";function wt(t,e,n,o,a){if(o&&e.startsWith("xlink:"))null==n?t.removeAttributeNS(F,e.slice(6,e.length)):t.setAttributeNS(F,e,n);else{const o=ut(e);null==n||o&&!tt(n)?t.removeAttribute(e):t.setAttribute(e,o?"":n)}}function Mt(t,e,n,o,a,s,l){if("innerHTML"===e||"textContent"===e)return o&&l(o,a,s),void(t[e]=n??"");const i=t.tagName;if("value"===e&&"PROGRESS"!==i&&!i.includes("-")){t._value=n;const o=n??"";return("OPTION"===i?t.getAttribute("value"):t.value)!==o&&(t.value=o),void(null==n&&t.removeAttribute(e))}let r=!1;if(""===n||null==n){const o=typeof t[e];"boolean"===o?n=tt(n):null==n&&"string"===o?(n="",r=!0):"number"===o&&(n=0,r=!0)}try{t[e]=n}catch{}r&&t.removeAttribute(e)}function m(t,e,n,o){t.addEventListener(e,n,o)}function It(t,e,n,o){t.removeEventListener(e,n,o)}const j=Symbol("_vei");function Tt(t,e,n,o,a=null){const s=t[j]||(t[j]={}),l=s[e];if(o&&l)l.value=o;else{const[n,i]=Nt(e);if(o){m(t,n,s[e]=$t(o,a),i)}else l&&(It(t,n,l,i),s[e]=void 0)}}const q=/(?:Once|Passive|Capture)$/;function Nt(t){let e;if(q.test(t)){let n;for(e={};n=t.match(q);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[":"===t[2]?t.slice(3):Z(t.slice(2)),e]}let P=0;const yt=Promise.resolve(),Pt=()=>P||(yt.then((()=>P=0)),P=Date.now());function $t(t,e){const n=t=>{if(t._vts){if(t._vts<=n.attached)return}else t._vts=Date.now();dt(Lt(t,n.value),e,5,[t])};return n.value=t,n.attached=Pt(),n}function Lt(t,e){if(b(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map((t=>e=>!e._stopped&&t&&t(e)))}return e}const z=t=>111===t.charCodeAt(0)&&110===t.charCodeAt(1)&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Ot=(t,e,n,o,a=!1,s,l,i,r)=>{"class"===e?Et(t,o,a):"style"===e?At(t,n,o):at(e)?ct(e)||Tt(t,e,n,o,l):("."===e[0]?(e=e.slice(1),1):"^"===e[0]?(e=e.slice(1),0):Bt(t,e,o,a))?Mt(t,e,o,s,l,i,r):("true-value"===e?t._trueValue=o:"false-value"===e&&(t._falseValue=o),wt(t,e,o,a))};function Bt(t,e,n,o){if(o)return!!("innerHTML"===e||"textContent"===e||e in t&&z(e)&&J(n));if("spellcheck"===e||"draggable"===e||"translate"===e||"form"===e||"list"===e&&"INPUT"===t.tagName||"type"===e&&"TEXTAREA"===t.tagName)return!1;if("width"===e||"height"===e){const e=t.tagName;return!("IMG"===e||"VIDEO"===e||"CANVAS"===e||"SOURCE"===e)}return(!z(e)||!x(n))&&e in t}const v=t=>{const e=t.props["onUpdate:modelValue"]||!1;return b(e)?t=>it(e,t):e};function Vt(t){t.target.composing=!0}function G(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const d=Symbol("_assign"),te={created(t,{modifiers:{lazy:e,trim:n,number:o}},a){t[d]=v(a);const s=o||a.props&&"number"===a.props.type;m(t,e?"change":"input",(e=>{if(e.target.composing)return;let o=t.value;n&&(o=o.trim()),s&&(o=$(o)),t[d](o)})),n&&m(t,"change",(()=>{t.value=t.value.trim()})),e||(m(t,"compositionstart",Vt),m(t,"compositionend",G),m(t,"change",G))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:o,number:a}},s){if(t[d]=v(s),t.composing)return;const l=e??"";(a||"number"===t.type?$(t.value):t.value)!==l&&(document.activeElement===t&&"range"!==t.type&&(n||o&&t.value.trim()===l)||(t.value=l))}},ee={deep:!0,created(t,e,n){t[d]=v(n),m(t,"change",(()=>{const e=t._modelValue,n=C(t),o=t.checked,a=t[d];if(b(e)){const t=O(e,n),s=-1!==t;if(o&&!s)a(e.concat(n));else if(!o&&s){const n=[...e];n.splice(t,1),a(n)}}else if(w(e)){const t=new Set(e);o?t.add(n):t.delete(n),a(t)}else a(et(t,o))}))},mounted:Q,beforeUpdate(t,e,n){t[d]=v(n),Q(t,e,n)}};function Q(t,{value:e,oldValue:n},o){t._modelValue=e,b(e)?t.checked=O(e,o.props.value)>-1:w(e)?t.checked=e.has(o.props.value):e!==n&&(t.checked=Y(e,et(t,!0)))}const ne={deep:!0,created(t,{value:e,modifiers:{number:n}},o){const a=w(e);m(t,"change",(()=>{const e=Array.prototype.filter.call(t.options,(t=>t.selected)).map((t=>n?$(C(t)):C(t)));t[d](t.multiple?a?new Set(e):e:e[0])})),t[d]=v(o)},mounted(t,{value:e}){X(t,e)},beforeUpdate(t,e,n){t[d]=v(n)},updated(t,{value:e}){X(t,e)}};function X(t,e){const n=t.multiple;if(!n||b(e)||w(e)){for(let o=0,a=t.options.length;o<a;o++){const a=t.options[o],s=C(a);if(n)b(e)?a.selected=O(e,s)>-1:a.selected=e.has(s);else if(Y(C(a),e))return void(t.selectedIndex!==o&&(t.selectedIndex=o))}!n&&-1!==t.selectedIndex&&(t.selectedIndex=-1)}}function C(t){return"_value"in t?t._value:t.value}function et(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Kt=["ctrl","shift","alt","meta"],Ht={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&0!==t.button,middle:t=>"button"in t&&1!==t.button,right:t=>"button"in t&&2!==t.button,exact:(t,e)=>Kt.some((n=>t[`${n}Key`]&&!e.includes(n)))},oe=(t,e)=>t._withMods||(t._withMods=(n,...o)=>{for(let t=0;t<e.length;t++){const o=Ht[e[t]];if(o&&o(n,e))return}return t(n,...o)}),Rt=rt({patchProp:Ot},St);let k;function Wt(){return k||(k=st(Rt))}const se=(...t)=>{const e=Wt().createApp(...t),{mount:n}=e;return e.mount=t=>{const o=Dt(t);if(!o)return;const a=e._component;!J(a)&&!a.render&&!a.template&&(a.template=o.innerHTML),o.innerHTML="";const s=n(o,!1,o instanceof SVGElement);return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),s},e};function Dt(t){return x(t)?document.querySelector(t):t}const ie=(t,e)=>{const n=t.__vccOpts||t;for(const[t,o]of e)n[t]=o;return n},Ut="/EisvanaWikiPageCreator/staging/assets/icons/help.svg",Ft=["aria-disabled"],jt=f("img",{src:Ut,alt:"Help"},null,-1),qt={class:"tooltiptext nms-font"},zt={id:"explanationHeading",class:"explanationHeading title is-4"},Gt={id:"explanationContent",class:"explanationContent nms-font"},Qt=["href"],Xt=["srcset"],kt=["src"],Jt=f("form",{method:"dialog"},[f("button",{class:"button",type:"submit",autofocus:""}," Close ")],-1),re=pt({__name:"Explanation",props:{img:{},open:{type:Boolean}},emits:["update:open"],setup(t,{emit:e}){var n;const o=t,a=u(null),s=u(null),l=u(null),i=(null==(n=o.img)?void 0:n.trim())??"",r=u("0 -100vh"),c=u(""),d=u(0),p=u(0),m=u(!1),v=u(!1),b=e;function g(){r.value="0 -100vh",c.value||(c.value=i),m.value||(m.value=!0),b("update:open",!0),vt((()=>{a.value&&(a.value.showModal(),r.value="0 0",a.value.scrollTo(0,0))}))}function h(){p.value=1,d.value=1}return mt((()=>{o.open&&g()})),(t,e)=>(A(),T(ht,null,[f("button",{"aria-disabled":!t.$slots.content||void 0,class:"tooltip",onClick:e[0]||(e[0]=e=>t.$slots.content&&g())},[jt,f("p",qt,[N(t.$slots,"default")])],8,Ft),(A(),gt(bt,{to:"body"},[m.value?(A(),T("dialog",{key:0,style:H({translate:r.value}),class:"explanation modal-content content",ref_key:"dialogElement",ref:a,onClose:e[3]||(e[3]=e=>t.$emit("update:open",!1))},[f("h2",zt,[N(t.$slots,"heading")]),f("div",Gt,[N(t.$slots,"content")]),c.value&&!v.value?(A(),T("a",{key:0,href:`./assets/images/jpg/${c.value}.jpg`,class:"explanationLink loading",id:"explanationLink",ref_key:"linkElement",ref:l,rel:"noopener noreferrer",target:"_blank"},[f("picture",null,[f("source",{srcset:`./assets/images/webp/${c.value}.webp`,class:"explanationWebpImg",id:"explanationWebpImg",type:"image/webp"},null,8,Xt),f("img",{src:`./assets/images/jpg/${c.value}.jpg`,style:H({opacity:d.value,"margin-block-start":p.value+"rem"}),alt:"Explainer Image",class:"explanationFallbackImg",id:"explanationFallbackImg",ref_key:"imgElement",ref:s,onLoadstart:e[1]||(e[1]=t=>v.value=!1),onLoad:h,onError:e[2]||(e[2]=t=>v.value=!0)},null,44,kt)])],8,Qt)):R("",!0),Jt],36)):R("",!0)]))],64))}});export{ie as _,re as a,te as b,ee as c,se as d,Zt as e,ne as v,oe as w};
