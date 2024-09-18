import{D as y,ai as U,d as b,a0 as q,aj as $,ak as W,h as L,$ as _,al as z,am as d,an as J,ao as V,u as k,f as S,a8 as Y,ap as K,t as Q,aq as X,g as i,l as o,p as u,ar as Z,e as ee,a9 as w,as as B,R as N,at as H,n as f,au as te,av as O,aw as R,s as x,q as P,v as M,m as T,ax as ne,ay as ae,az as oe,aA as ie,aB as A,aC as re}from"./links-c7SUkTPh.js";const le=[{element:"nameInput",func:function(){y()}},{element:"researchTeam",func:function(){U(),b()}},{element:"fileUpload",handler:"change",func:function(){q(this)}},{element:"portalglyphsInput",func:function(){$(this),W(),y()}},{element:"discoveredInput",func:function(){L("discoveredInput","discoveredlinkInput"),b()}},{element:"discoveredlinkInput",func:function(){L("discoveredlinkInput","discoveredInput"),b()}},{element:"docbyInput",func:function(){b()}},{element:"axesInput",handler:"change",func:function(){_()}},{element:"glyphDeleteButton",handler:"click",func:function(){z()}},{element:"fileUploadTooltip",handler:"click",func:function(){d.uploadShown=!0}},{element:"galleryFileUploadTooltip",handler:"click",func:function(){d.galleryUploadShown=!0}}];J(),V(),k(X),S(le),Y();const ue={output:{explanationHeading:"explanationHeading",explanationContent:"explanationContent",explanationLink:"explanationLink",explanationWebpImg:"explanationWebpImg",explanationFallbackImg:"explanationFallbackImg"}},D=i.output.explanation;D&&(D.innerHTML=K),k(ue);const se=["builderInput","builderlinkInput","discoveredInput","discoveredlinkInput"];for(const e of se){const t=i.input[e];t&&(t.dataset.player="")}function ce(){var e,t;const n=document.querySelectorAll(".table .data input, .table .data textarea"),a=document.querySelectorAll(".table .data select"),i=document.getElementsByTagName("output");for(const e of Array.from(n))switch(e.type.toLowerCase()){case"checkbox":e.checked=!1;break;case"radio":const t=document.querySelectorAll('input[type="radio"]:not([checked])'),n=document.querySelectorAll('input[type="radio"][checked]');for(const e of Array.from(t))e.checked=!1;for(const e of Array.from(n))e.checked=!0;break;default:e.value=""}for(const n of Array.from(a))n.value=null==(t=null==(e=n.options)?void 0:e[0])?void 0:t.value;for(const e of Array.from(i))e.innerText="";Z();for(const e in u)delete u[e];const l=document.querySelectorAll(".error");for(const e of Array.from(l))ee(e.previousElementSibling);for(const e in w)delete w[e];"function"==typeof o.resetExternal&&o.resetExternal(),B(),N(),H()}function v(e,t){var n,a,o,l;e.style.pointerEvents="none";const{innerText:r,dataset:{link:c}}=e;f.text=te(JSON.stringify(u)),f.copy=!0,f.link=c;const s=O(e);if(s)return e.classList.remove("is-primary"),e.classList.add("is-danger"),e.innerText=s,void setTimeout((()=>{e.classList.remove("is-danger"),e.classList.add("is-primary"),e.innerText=r,e.style.pointerEvents=""}),1500);const d=(null==(l=null==(o=null==(a=null==(n=i)?void 0:n.output)?void 0:a[t])?void 0:o.innerText)?void 0:l.replaceAll("\n\n\n","\n\n"))??t;navigator.clipboard.writeText(d),f.copy=!0,f.link=c,e.innerText="Copied!",setTimeout((()=>{e.innerText=r,e.style.pointerEvents=""}),1500)}function de(e){const t=i.output.fullArticle.innerText.replaceAll("\n\n\n","\n\n"),n=u.name,a=e;a.href="data:text/plain,"+encodeURIComponent(t),a.download=n+".txt"}function F(e,t=u.name){e.style.pointerEvents="none";j(e,R+"Special:EditPage/"+t)}function j(e,t){const n=O(e),a=new RegExp(`[${["#","<",">","[","]","{","|","}"].join("")}]`,"g");if(n){const t=e.innerText;e.removeAttribute("href"),e.className="button is-danger",e.innerText=n,setTimeout((()=>{e.className="button is-outlined is-primary",e.innerText=t,e.style.pointerEvents=""}),1500)}else e.href=t.replace(a," "),e.target="_blank",e.rel="noopener noreferrer",e.style.pointerEvents=""}function He(){var e;if("function"!=typeof o.redirectPage)return;const t=document.getElementById("reset"),n=["copyRedirect","createRedirect"],a=document.createElement("p");if(a.id="redirectNote",a.classList.add("has-text-centered"),a.innerText="Please create a redirect for your page!",!o.redirectPage())return n.forEach((()=>{const e=t.previousElementSibling;n.includes(e.id)&&e.remove()})),void(null==(e=document.getElementById(a.id))||e.remove());const i=document.createElement("button");i.innerText="Copy Redirect Code",i.type="button";const l=document.createElement("a");l.rel="noopener noreferrer",l.target="_blank",l.innerText="Create Redirect",S([{element:i,handler:"click",func:function(){v(this,`#REDIRECT [[${u.name}]]`)}},{element:l,handler:"click",func:function(){F(this,o.redirectPage())}}]);const r=[i,l];for(let e=0;e<r.length;e++){const a=r[e],o=n[e];if(document.getElementById(o))return;a.classList.add("button","is-outlined","is-primary"),a.id=o,a.dataset.link="redirect",t.insertAdjacentElement("beforebegin",a)}t.parentElement.insertAdjacentElement("beforebegin",a)}Q();const pe='\n<button class="button is-outlined is-primary" id="copy" type="button" data-link="page" data-evt-id="copyButton">Copy Wikicode</button>\n<a class="button is-outlined is-primary" id="download" data-evt-id="downloadButton">Download File</a>\n<a class="button is-outlined is-primary" href="https://nomanssky.fandom.com/wiki/Special:Upload?multiple=true" id="uploadLink" rel="noopener noreferrer" target="_blank">Upload Pictures</a>\n<a class="button is-outlined is-primary" id="create" data-link="page" data-evt-id="createPageButton">Create Page</a>\n<button class="button is-warning" id="reset" type="reset" data-evt-id="resetButton">Reset Inputs</button>',me=[{element:"copyButton",handler:"click",func:function(){v(this,"fullArticle")}},{element:"downloadButton",handler:"click",func:function(){de(this)}},{element:"createPageButton",handler:"click",func:function(){F(this)}},{element:"resetButton",handler:"click",func:()=>ce()}],fe=x(pe,{},me),be='<p class="has-text-centered">You must copy the code first, then paste it into the wiki page.<br>Also don\'t forget to upload any images you have put here.</p>',E=i.output.actions;E.innerHTML="",P(fe,E,"afterbegin"),E.insertAdjacentHTML("beforebegin",be);const ye='\n<label style="display:flex; gap: .3rem"><input class="checkbox" type="checkbox" id="skipCheck" data-evt-id="skipCheck">Enable debug (no checks, no popups)</label>;\n<button style="margin: 0 1rem" class="button is-danger is-small" id="clearCache" data-evt-id="clearCache">Clear Localstorage</button>',he=[{element:"clearCache",handler:"click",func:()=>localStorage.clear()},{element:"skipCheck",handler:"change",func:function(){const e=this.checked;d.debug=e,d.uploadShown=e,d.galleryUploadShown=e,document.documentElement.dataset.debug=e.toString(),y()}}];i.output.actions,x(ye,{},he),Object.defineProperty(d,"debug",{configurable:!1,writable:!1,value:!1});const h=document.getElementById("skipCheck");h&&new URLSearchParams(window.location.search).has("debug")&&(h.checked=!0,M(h,"change"));const ge='<h2 class="title is-5 has-text-left has-text-weight-bold mb-2">Eisvana \x3c!-- //NOSONAR\r\n\t(this is fine since this snippet is inserted somewhere else)--\x3e\r\n\t<output id="album" name="type"></output> <output id="albumType"></output> entry for <output id="albumHeaderName"\r\n\t\tname="name"></output>:\r\n</h2>\r\n<div id="albumText" class="wikiText">\r\n\t| {{album| file=<output name="image" id="albumImage"></output> | name=[[<output id="albumName"></output>]]\r\n\t| other=<output id="albumOther"></output> | glyph=<output id="albumGlyphs" name="portalglyphs"></output> |\r\n\t<output id="albumDiscoverer"></output>}} <output id="albumDesc"></output>\r\n</div>',ke='<button id="albumBtn" class="button is-outlined is-primary"\n\t   data-link="album" data-evt-id="copyButton">\n\t   Copy Album Wikicode\n\t   </button>\n\t   <a class="button is-outlined is-primary" id="albumLink"\n\t   data-link="album" data-evt-id="openAlbumButton">\n\t   Open Album\n\t   </a>',xe=[{element:"copyButton",handler:"click",func:function(){v(this,"albumText")}},{element:"openAlbumButton",handler:"click",func:function(){ve(this)}}],Te=x(ke,{},xe);function ve(e){e.style.pointerEvents="none";const t="function"==typeof o.albumLinkGen?o.albumLinkGen():u.catalogue?u.catalogue:(console.warn("No wiki page provided. Define the function `albumLinkGen()` and add it to the `globalFunctions` object or define a catalogue in the `pageData.catalogue` property!"),void(e.style.pointerEvents=""));t&&j(e,R+t)}function Ee(){const e="function"==typeof o.albumItemTypeExternal?o.albumItemTypeExternal():u.type;i.output.album.innerText=e}function Ie(){const e="function"==typeof o.albumDescExternal?o.albumDescExternal():"",t=i.output.albumDesc;t&&(t.innerText=e)}function Le(){const e=(()=>{if("function"==typeof o.albumDiscovererExternal)return o.albumDiscovererExternal();{const{discovered:e,discoveredlink:t}=u;return t?`wiki=${t}`:`discoverer=${e}`}})(),t=i.output.albumDiscoverer;t&&(t.innerText=e)}function we(){const e="function"==typeof o.albumNameExternal?o.albumNameExternal():u.name;i.output.albumName.innerText=e}function Ae(){const e="function"==typeof o.albumOtherExternal?o.albumOtherExternal():"",t=i.output.albumOther;t&&(t.innerText=e)}function De(){const e="function"==typeof o.albumTypeExternal?o.albumTypeExternal():"";i.output.albumType.innerText=e}function Ce(){const e={albumHeaderName:"name",albumImage:"image",albumGlyphs:"portalglyphs"};for(const t in e){i.output[t].innerText=u[e[t]]}}function Oe(){function e(){Ce(),Le(),we(),Ae(),De(),Ee(),Ie()}u.albumInitialised?e():document.addEventListener("albumLoaded",(()=>e()))}const Se={output:{album:"album",albumType:"albumType",albumHeaderName:"albumHeaderName",albumImage:"albumImage",albumName:"albumName",albumOther:"albumOther",albumGlyphs:"albumGlyphs",albumDiscoverer:"albumDiscoverer",albumText:"albumText",albumDesc:"albumDesc"}},C=i.output.albumEntry,g=i.output.albumActions;C instanceof HTMLDivElement&&(C.innerHTML=ge),g instanceof HTMLDivElement&&(P(Te,g,"afterbegin"),k(Se),document.dispatchEvent(new Event("albumLoaded")),T("albumInitialised",!0),g.insertAdjacentHTML("afterbegin",'<p style="width:100%" class="has-text-centered mb-3">Please don\'t forget to create an album entry!</p>')),ne(i.output.portalglyphButtons,"portalglyphsInput");const Be=ae();T("pageType",Be),oe(),B(),N(),d.uploadShown=!0,d.galleryUploadShown=!0,H(),d.debug||(d.uploadShown=!1,d.galleryUploadShown=!1),y();const G=i.output.output;G.onmousedown=()=>ie();for(const e of Array.from(G.children)){const t=e;t.onmouseup=e=>A(e.target),t.ontouchend=e=>A(e.target)}re();try{M(i.input.portalglyphsInput,"input")}catch{}T("eventListeners",!0);export{we as a,Ae as b,Le as c,Oe as d,v as e,ve as f,Te as g,Ie as h,Ee as i,He as t};
