import{w as a,p as i,G as x,H as T,g as s,D as E,b as I,B as p,A as k,j as d,I as v,c as A}from"./main-327a7913.js";import{g as B,h as L,i as c}from"./startup-f801146c.js";const w='| [[File: <output name="image"></output>|150px]] || [[<output name="name"></output>]] || <output name="rooms"></output> || <output name="enemies"></output> || {{gl/Small|0000<output name="portalglyphs"></output>}} || <output name="discoverer"></output><br>\n|-';function m(){const e=document.getElementsByName("enemiesInput"),t=[];for(const n of Array.from(e))n.checked&&t.push(n.value);a(t.join(", "),"enemies")}function C(){const e=x.link,{galaxy:t,class:n}=i;return"album"==e?`${i.name}#${t}`:`GHSH Derelict Freighter Catalog#${n}-Class`}function H(e){const t=e.value,n=t.substring(4),o=e.dataset.destNoauto,i=T(t).slice(0,-5);a(n,o),a(i,"coordinates");s.output.portalglyphsPreview.innerText=t}function g(){const{discovered:e,discoveredlink:t}=i;a(e||`{{Profile|${t}}}`,"discoverer")}const D=[{element:"portalglyphsInput",func:function(){H(this)}},{element:"enemiesInput",func:()=>m()},{element:["discoveredInput","discoveredlinkInput"],func:()=>g()}],G={input:{enemies:"enemies",classTableActions:"classTableActions",galaxyTableActions:"galaxyTableActions"},output:{portalglyphsPreview:"portalglyphsPreview",galaxyTable:"galaxyTable",galaxyTableEntry:"galaxyTableEntry",indexEntry:"indexEntry"}},F=[{element:"copyButton",handler:"click",func:function(){B(this,"classTableEntry")}},{element:"openAlbumButton",handler:"click",func:function(){L(this)}}];A.albumLinkGen=()=>C(),E(G),I(D),s.output.galaxyTable.innerHTML=w;const y="galaxyTableActionsNote",P=`<p id="${y}">If the page already exists, just add an entry for the derelict freighter from your system</p>`;c.body.insertAdjacentHTML("afterbegin",P);const j=c.body.innerHTML;p(c,s.input.galaxyTableActions,"afterbegin");const o=k(j,{},F),b=o.getElementById(y);b.id="indexTableActionsNote",b.innerText="If the page doesn't exist yet, add an entry to the catalogue as well";const r=o.getElementById("albumBtn");r.id="tableBtn",r.dataset.link="classTableEntry",r.innerText="Copy Index Entry Code";const u=o.getElementById("albumLink");u.id="pageLink",u.dataset.link="classTableEntry",u.innerText="Open Index Page",p(o,s.input.classTableActions,"afterbegin");const $=s.input.fileInput,M=s.input.portalglyphsInput;d($,"input"),d(M,"input"),m(),v(),g();
