import{w as l,p as u,H as h,I as T,E as x,b as E,g as s,C as m,B as I,j as d,J as k,c as A}from"./main-a791611c.js";import{g as v,h as B,i as p}from"./startup-3c13a8d1.js";const g='| [[File:<output name="image"></output>|150px]] || [[<output name="system"></output>]] || <output name="rooms"></output> || <output name="enemies"></output> || {{gl/Small|<output name="portalglyphs"></output>}} || <output name="discoverer"></output><br>\n|-';function y(){const e=document.getElementsByName("enemiesInput"),t=[];for(const n of Array.from(e))n.checked&&t.push(n.value);l(t.join(", "),"enemies")}function L(){const e=h.link,{class:t}=u;return"album"===e?`${u.name}`:`Eisvana Derelict Freighter Album#${t}-Class`}function C(e){const t=e.value,n=t.substring(4),a=T(t).slice(0,-5);l(n,"regionglyphs"),l(a,"coordinates")}function b(){const{discovered:e,discoveredlink:t}=u;l(e||`{{Profile|${t}}}`,"discoverer")}const w=[{element:"portalglyphsInput",func:function(){C(this)}},{element:"enemiesInput",func:()=>y()},{element:["discoveredInput","discoveredlinkInput"],func:()=>b()}],H={input:{enemies:"enemies",classTableActions:"classTableActions",galaxyTableActions:"galaxyTableActions"},output:{portalglyphsPreview:"portalglyphsPreview",galaxyTable:"galaxyTable",galaxyTableEntry:"galaxyTableEntry",indexEntry:"indexEntry",albumText:"albumText"}},D=[{element:"copyButton",handler:"click",func:function(){v(this,"classTableEntry")}},{element:"openAlbumButton",handler:"click",func:function(){B(this)}}];A.albumLinkGen=()=>L(),x(H),E(w),s.output.galaxyTable.innerHTML=g,s.output.albumText.innerHTML=g;const f="galaxyTableActionsNote",F=`<p id="${f}">If the page already exists, just add an entry for the derelict freighter from your system</p>`;p.body.insertAdjacentHTML("afterbegin",F);const j=p.body.innerHTML;m(p,s.input.galaxyTableActions,"afterbegin");const i=I(j,{},D),r=i.getElementById(f);r&&(r.id="indexTableActionsNote",r.innerText="If the page doesn't exist yet, add an entry to the catalogue as well");const a=i.getElementById("albumBtn");a&&(a.id="tableBtn",a.dataset.link="classTableEntry",a.innerText="Copy Index Entry Code");const o=i.getElementById("albumLink");o&&(o.id="pageLink",o.dataset.link="classTableEntry",o.innerText="Open Index Page"),m(i,s.input.classTableActions,"afterbegin");const G=s.input.fileInput,M=s.input.portalglyphsInput;d(G,"input"),d(M,"input"),y(),k(),b();
