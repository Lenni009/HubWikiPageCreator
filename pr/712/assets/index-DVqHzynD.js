import{_ as U}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as i,a_ as d,bb as T,O as $,T as y,aW as u,a$ as C,aY as l,b1 as g,bc as ee,b6 as S,bd as B,b2 as M,aw as K,L as E,M as w,N as k,b3 as L,b4 as x,b5 as _,aX as I,aZ as V,U as v,b0 as N,be as te,P as A,bf as X,K as ne,a1 as ae,bg as O,W as oe,bh as le,bi as se,S as ie}from"./links-BUup23nr.js";import{_ as R}from"./Explanation.vue_vue_type_script_setup_true_lang-Cum2IAN6.js";import{a as F,v as Z,b as re}from"./runtime-dom.esm-bundler-CybY6-WE.js";import{b as q,u as ue}from"./main-BN_BLJhH.js";const ce={},pe={id:"input",class:"column is-full-mobile"};function de(e,t){return i(),d("div",pe,[T(e.$slots,"default")])}const gt=U(ce,[["render",de]]),me={},fe={id:"output",class:"column is-full-mobile"};function _e(e,t){return i(),d("div",fe,[T(e.$slots,"default")])}const vt=U(me,[["render",_e]]),he={},ge={class:"table"};function ve(e,t){return i(),d("div",ge,[T(e.$slots,"default")])}const be=U(he,[["render",ve]]),ye={class:"table-cell text"},$e={class:"table-cell data"},ke={key:1,class:"table-cell"},D=$({__name:"InputRow",setup:e=>(e,t)=>(i(),y(be,null,{default:u((()=>[e.$slots.label&&e.$slots.input?(i(),d(C,{key:0},[l("div",ye,[T(e.$slots,"label")]),l("div",$e,[T(e.$slots,"input")])],64)):(i(),d("div",ke,[T(e.$slots,"default")]))])),_:3}))}),Ce={},we={class:"error"};function xe(e,t){return i(),d("p",we,[T(e.$slots,"default")])}const H=U(Ce,[["render",xe]]),Te=["for"],De=["list","value","id","maxlength"],bt=$({__name:"SimpleInput",props:{label:{},identifier:{},list:{},img:{},modelValue:{},error:{},maxlength:{}},emits:["update:modelValue","change"],setup(e,{emit:t}){const a=t;function n(e){if(!(e.target instanceof HTMLInputElement))return;const t=e.target.value;a("update:modelValue",t)}return(e,t)=>(i(),y(D,null,{label:u((()=>[l("label",{for:e.identifier},g(e.label),9,Te),e.$slots.default?(i(),y(R,{key:0,img:e.img},ee({default:u((()=>[T(e.$slots,"default")])),_:2},[e.$slots.heading?{name:"heading",fn:u((()=>[T(e.$slots,"heading")])),key:"0"}:void 0,e.$slots.content?{name:"content",fn:u((()=>[T(e.$slots,"content")])),key:"1"}:void 0]),1032,["img"])):S("",!0)])),input:u((()=>[l("input",{class:B({"error-input":e.error}),list:e.list,value:e.modelValue,id:e.identifier,maxlength:e.maxlength,type:"text",onInput:n,onChange:t[0]||(t[0]=t=>e.$emit("change",t))},null,42,De),e.error?(i(),y(H,{key:0,innerHTML:e.error},null,8,["innerHTML"])):S("",!0)])),_:3}))}}),Se=["href"],G=$({__name:"WikiLink",props:{link:{},text:{}},setup(e){const t=e,l=M((()=>K+t.link));return(e,t)=>(i(),d("a",{href:l.value,rel:"noopener noreferrer",target:"_blank"},g(e.text),9,Se))}}),Ie=l("label",{for:"picInput"},"Main image name, including file extension:",-1),Ee=l("iframe",{src:"https://nmscd.com/Image-Compressor/",title:"Image Compressor",class:"explanation-embed",width:"450",height:"300"},"Image Compressor",-1),Pe=l("div",{class:"mt-3"},[l("span",{class:"has-text-weight-bold"},"NOTE"),_(': You can access this popup at any time by clicking on the "?" next to the main image upload button. ')],-1),Me=l("a",{href:"https://nmscd.com/Image-Compressor/",target:"_blank",rel:"noopener noreferrer"},"Image Compressor",-1),Ve=1e7,yt=$({__name:"InfoboxImageInput",setup(e){const t=E(),{image:a}=w(t),n=k(!1),o=k(!1),s=k(!1),r=k(!1);function p(e){var t;if(!(e.target&&e.target instanceof HTMLInputElement))return;const l=null==(t=e.target.files)?void 0:t[0];a.value=(null==l?void 0:l.name)??"",r.value=!!(l&&l.size>Ve),!s.value&&!r.value&&(n.value=!0,o.value=!0,s.value=!0)}return L((()=>{o.value&&!n.value&&(o.value=!1)})),L((()=>{!s.value&&n.value&&(s.value=!0)})),(e,t)=>(i(),y(D,null,{label:u((()=>[Ie,x(R,{open:n.value,"onUpdate:open":t[0]||(t[0]=e=>n.value=e)},{heading:u((()=>[_("File Upload")])),content:u((()=>[o.value?(i(),d(C,{key:1},[l("span",null,[_(" Don't forget to upload your picture to the wiki on "),x(G,{link:"Special:Upload?multiple=true",text:"Special:Upload"}),_(". The upload button only auto-filled the image name into the code, it is not automatically uploaded to the wiki. ")]),Pe],64)):(i(),d(C,{key:0},[_(" Any pictures you upload here won't be uploaded to the wiki. This is only to autofill the image name. Maximum filesize is 10MB. You can upload your pictures to the wiki on "),x(G,{link:"Special:Upload?multiple=true",text:"Special:Upload"}),_(". "),Ee],64))])),default:u((()=>[_(" Picture won't be uploaded to the wiki. This is only to autofill the image name. ")])),_:1},8,["open"])])),input:u((()=>[I(l("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>V(a)?a.value=e:null),type:"text",id:"picInput"},null,512),[[F,v(a)]]),l("input",{class:B({"error-input":r.value}),type:"file",onChange:p},null,34),r.value?(i(),y(H,{key:0},{default:u((()=>[_("This file is too big to be uploaded to the wiki. Maximum filesize is 10MB. Compress your file here: "),Me])),_:1})):S("",!0)])),_:1}))}}),Le={for:"discoveredlinkInput"},Ue={for:"discoveredInput"},$t=$({__name:"DiscovererInputs",props:{type:{default:"Discoverer"}},setup(e){const t=E(),{discovered:a,discoveredlink:n}=w(t);return(e,t)=>(i(),d(C,null,[v(a)?S("",!0):(i(),y(D,{key:0},{label:u((()=>[l("label",Le,g(e.type)+" wiki name:",1)])),input:u((()=>[I(l("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>V(n)?n.value=e:null),type:"text",id:"discoveredlinkInput"},null,512),[[F,v(n)]])])),_:1})),v(n)?S("",!0):(i(),y(D,{key:1},{label:u((()=>[l("label",Ue,g(e.type)+" alias if no wiki:",1)])),input:u((()=>[I(l("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>V(a)?a.value=e:null),type:"text",id:"discoveredInput"},null,512),[[F,v(a)]])])),_:1}))],64))}}),Be=l("label",{for:"portalglyphsInput"},"Portalglyphs:",-1),Fe=l("iframe",{src:"https://nmspar.vercel.app/",sandbox:"allow-scripts allow-same-origin",title:"Glyph Reader",class:"explanation-embed",width:"450",height:"300"},"Glyph Reader",-1),Ge={id:"portalglyphButtons"},Ne=["id","value"],Ae={class:"glyph icon is-small"},Re={name:"portalglyphs",id:"portalglyphsPreview",class:"glyph"},z=12,kt=$({__name:"GlyphInput",setup(e){const t=/[0-9A-F]/,a=E(),{glyphs:n,isValidGlyphs:o}=w(a);function s(e){if(!e.target||!(e.target instanceof HTMLButtonElement||e.target instanceof HTMLElement&&e.target.parentElement instanceof HTMLButtonElement))return;const t=e.target instanceof HTMLButtonElement?e.target:e.target.parentElement;t instanceof HTMLButtonElement&&n.value.length<z&&(n.value+=t.value)}function r(){n.value=n.value.slice(0,-1)}function p(){n.value=n.value.toUpperCase().split("").filter((e=>t.test(e))).join("")}const c=e=>e.toString(16).toUpperCase(),m=M((()=>n.value.length===z&&!o.value));return(e,t)=>(i(),d(C,null,[x(D,null,{label:u((()=>[l("div",{class:"label-combo"},[Be,l("button",{class:"button is-small is-danger",type:"button",id:"glyphDeleteButton",onClick:r}," ← Delete ")]),x(R,{img:"shared/glyphs"},{heading:u((()=>[_("Portalglyphs")])),content:u((()=>[_(" Found in Photo Mode. Glyphs are specific to each planet. "),Fe])),default:u((()=>[_(" Found in Photo Mode. Glyphs are specific to each planet. ")])),_:1})])),input:u((()=>[I(l("input",{class:B([{"error-input":m.value},"glyphs-input"]),id:"portalglyphsInput",type:"text",maxlength:"12","onUpdate:modelValue":t[0]||(t[0]=e=>V(n)?n.value=e:null),onInput:p},null,34),[[F,v(n)]]),m.value?(i(),y(H,{key:0,class:"error"},{default:u((()=>[_("No valid Eisvana region. See "),x(G,{link:"Eisvana#Claimed_Regions",text:"Eisvana Claimed Regions"}),_(" for a list of valid regions.")])),_:1})):S("",!0)])),_:1}),x(D,null,{default:u((()=>[l("div",Ge,[(i(),d(C,null,N(16,(e=>l("button",{class:"button",type:"button",id:"glyphButton"+e,value:c(e-1),onClick:s},[l("span",Ae,g(c(e-1)),1)],8,Ne))),64))]),l("output",Re,g(v(n)),1)])),_:1})],64))}}),We=["id"],He=["value"],Ct=$({__name:"DatalistWrapper",props:{data:{},identifier:{}},setup:e=>(e,t)=>(i(),d("datalist",{id:e.identifier},[(i(!0),d(C,null,N(e.data,(e=>(i(),d("option",{value:e},null,8,He)))),256))],8,We))}),Oe=l("br",null,null,-1),ze=["value"],wt=$({__name:"ResourceInput",props:{index:{},resources:{},item:{}},setup(e){const t=E(),{elements:a}=w(t),n=["Primary","Secondary"];return(e,t)=>(i(),y(D,null,{label:u((()=>[l("label",null,g(e.index?"Secondary":"Primary")+" element",1),x(R,{img:`${e.item}/element`+e.index},{heading:u((()=>[_(g(n[e.index])+" Element",1)])),content:u((()=>[_(" Found on the "+g(e.item)+" scan. ",1),Oe,_(" Leave empty if it isn't listed. ")])),default:u((()=>[_(" Found on the "+g(e.item)+" scan. ",1)])),_:1},8,["img"])])),input:u((()=>[I(l("select",{"onUpdate:modelValue":t[0]||(t[0]=t=>v(a)[e.index]=t)},[(i(!0),d(C,null,N(e.resources,(e=>(i(),d("option",{value:e},g(e),9,ze)))),256))],512),[[Z,v(a)[e.index]]])])),_:1}))}}),je=l("label",null,"Do you belong to a department?",-1),Ye=["value"],xt=$({__name:"ResearchteamInput",setup(e){const t=E(),{researchteam:a}=w(t);return(e,t)=>(i(),y(D,null,{label:u((()=>[je])),input:u((()=>[I(l("select",{"onUpdate:modelValue":t[0]||(t[0]=e=>V(a)?a.value=e:null)},[(i(!0),d(C,null,N(v(te),((e,t)=>(i(),d("option",{value:e,key:t},g(t),9,Ye)))),128))],512),[[Z,v(a)]])])),_:1}))}}),Ke={class:"debug-skip-label is-flex"},Xe=$({__name:"DebugActions",setup(e){const t=A(),{debug:a}=w(t),n=()=>localStorage.clear();return L((()=>document.documentElement.dataset.debug=a.value.toString())),(e,t)=>(i(),d(C,null,[l("label",Ke,[I(l("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>V(a)?a.value=e:null),class:"checkbox",type:"checkbox",id:"skipCheck"},null,512),[[re,v(a)]]),_("Enable debug (no checks, no popups)")]),l("button",{class:"button is-danger is-small mx-4",id:"clearCache",onClick:n}," Clear Localstorage ")],64))}}),Ze=U(Xe,[["__scopeId","data-v-64bc936b"]]),qe=["href"],Je=$({__name:"CreatePageButton",setup(e){const t=E(),{pageName:l}=w(t),a=A(),{debug:n}=w(a),o=k(),u=k(!0),s=X({fail:"",idle:"Create Page"}),r=k(s.idle);function p(){const{isValidData:e,message:t}=q(!1,n.value);o.value=e.value?K+"Special:EditPage/"+l.value:void 0,!e.value&&(s.fail=t.value,r.value=s.fail,u.value=e.value,setTimeout((()=>{r.value=s.idle,u.value=!0}),1500))}const c=M((()=>u.value?"is-outlined is-primary":"is-danger no-interaction"));return(e,t)=>(i(),d("a",{class:B([c.value,"button"]),href:o.value,id:"create",rel:"noopener noreferrer",target:"_blank",onClick:p},g(r.value),11,qe))}});function J(e){var t;const l=null==(t=e.value)?void 0:t.innerText.replace(/\n{3,}/g,"\n\n").trim();return{articleText:k(l)}}const Qe=$({__name:"CopyArticleButton",setup(e){const t=ue(),{text:l,copy:a}=w(t),n=A(),{fullArticleElement:o,debug:u}=w(n),s=k(!0),r=k(!1),p=X({fail:"",idle:"Copy Code",success:"Copied!"}),c=k(p.idle);function m(){l.value=ne(),a.value=!0;const{isValidData:e,message:t}=q(u.value),{articleText:n}=J(o);navigator.clipboard.writeText(n.value??""),a.value=!0,p.fail=t.value,c.value=e.value?p.success:p.fail,r.value=!0,s.value=e.value,setTimeout((()=>{c.value=p.idle,s.value=!0,r.value=!1}),1500)}const v=M((()=>{const e=r.value?"no-interaction":"";return`${s.value?"is-outlined is-primary":"is-danger"} ${e}`}));return(e,t)=>(i(),d("button",{class:B([v.value,"button"]),id:"copy",type:"button",onClick:m},g(c.value),3))}}),et=l("p",{class:"has-text-centered"},[_(" You must copy the code first, then paste it into the wiki page."),l("br"),_("Also don't forget to upload any images you have put here. ")],-1),tt={class:"buttons"},nt=["download","href"],Tt=$({__name:"Actions",setup(e){const t=E(),{name:a,pageName:n}=w(t),o=A(),{fullArticleElement:u}=w(o),s=M((()=>ae(a.value)));L((()=>n.value=s.value));const r=M((()=>n.value+".txt")),p=k();function c(){const{articleText:e}=J(u);p.value=e.value?"data:text/plain,"+encodeURIComponent(e.value):void 0}return(e,a)=>(i(),d(C,null,[et,l("div",tt,[x(Qe),l("a",{download:r.value,href:p.value,class:"button is-outlined is-primary",id:"download",onClick:c},"Download File",8,nt),x(G,{class:"button is-outlined is-primary",link:"Special:Upload?multiple=true",text:"Upload Pictures"}),x(Je),l("button",{class:"button is-warning",id:"reset",type:"reset",onClick:a[0]||(a[0]=e=>v(t).$reset())}," Reset Inputs "),v(false)?(i(),y(Ze,{key:0})):S("",!0)])],64))}}),at=l("span",null,"{{",-1),ot=l("span",null,"}}",-1),Dt=$({__name:"WikiTemplate",props:{templateName:{},isSingleLine:{type:Boolean,default:!0}},setup(e){const t=e.isSingleLine?"span":"div";return(e,a)=>(i(),d(C,null,[(i(),y(O(v(t)),null,{default:u((()=>[at,l("span",null,g(e.templateName)+g(e.$slots.default&&e.isSingleLine?"|":""),1)])),_:1})),l("span",null,[T(e.$slots,"default")]),(i(),y(O(v(t)),null,{default:u((()=>[ot])),_:1}))],64))}}),lt=l("h2",{class:"explanation-heading"},"Missing/Incorrect Data",-1),st={class:"explanation-content"},it=l("form",{method:"dialog"},[l("button",{class:"button",type:"submit",autofocus:""}," Close ")],-1),St=$({__name:"ExplanationError",props:{open:{type:Boolean},errorMessage:{}},emits:["update:open"],setup(e){const t=e,a=k("0 -100vh"),n=k(null);return L((()=>{t.open&&(a.value="0 -100vh",oe((()=>{var e;null==(e=n.value)||e.showModal(),a.value="0 0"})))})),(e,t)=>(i(),y(se,{to:"body"},[l("dialog",{style:le({translate:a.value}),class:"explanation modal-content content",ref_key:"dialogElement",ref:n,onClose:t[0]||(t[0]=t=>e.$emit("update:open",!1))},[lt,l("div",st,g(e.errorMessage),1),it],36)]))}});function j(e){return"function"==typeof e?e():v(e)}typeof WorkerGlobalScope<"u"&&(globalThis,WorkerGlobalScope);const Y=()=>{};function rt(e,t){return function(...l){return new Promise(((a,n)=>{Promise.resolve(e((()=>t.apply(this,l)),{fn:t,thisArg:this,args:l})).then(a).catch(n)}))}}const ut=e=>e();function ct(e,t={}){let l,a,n=Y;const i=e=>{clearTimeout(e),n(),n=Y};return o=>{const u=j(e),s=j(t.maxWait);return l&&i(l),u<=0||void 0!==s&&s<=0?(a&&(i(a),a=null),Promise.resolve(o())):new Promise(((e,r)=>{n=t.rejectOnCancel?r:e,s&&!a&&(a=setTimeout((()=>{l&&i(l),a=null,e(o())}),s)),l=setTimeout((()=>{a&&i(a),a=null,e(o())}),u)}))}}function pt(e,t,l={}){const{eventFilter:a=ut,...n}=l;return ie(e,rt(a,t),n)}function It(e,t,l={}){const{debounce:a=0,maxWait:n,...i}=l;return pt(e,t,{...i,eventFilter:ct(a,{maxWait:n})})}export{gt as I,vt as O,be as S,D as _,Dt as a,bt as b,yt as c,kt as d,wt as e,$t as f,xt as g,Tt as h,St as i,Ct as j,It as w};
