import{p as s,g as a,w as i,J as I,K as k,L as d,E as v,b as A,C as y,B as H,j as m,a as C,c as G}from"./about-b18469d8.js";import{g as L,h as B,i as u}from"./startup-526a1b7e.js";const w='| [[File: <output name="image"></output>|150px]] || [[<output name="name"></output>]] || <output name="rooms"></output> || <output name="enemies"></output> || {{gl/Small|0000<output name="portalglyphs"></output>}} || <output name="discoverer"></output><br>\n|-';function g(){const t=s.galaxy.toLowerCase(),e=["euclid","calypso","eissentam"].filter((e=>e!=t));a.output[t].style.display="";for(const t of e)a.output[t].style.display="none"}function b(){const t=document.getElementsByName("enemiesInput"),e=[];for(const n of Array.from(t))n.checked&&e.push(n.value);i(e.join(", "),"enemies")}function f(t){s.civShort=t,s.civilized={GHub:"Galactic Hub Project",CalHub:"Galactic Hub Calypso",EisHub:"Galactic Hub Eissentam"}[t],s.galaxy={GHub:"Euclid",CalHub:"Calypso",EisHub:"Eissentam"}[t]}function P(){const t=I.link,{galaxy:e,class:n}=s;return"album"==t?`${s.name}#${e}`:`GHSH Derelict Freighter Catalog#${n}-Class`}function D(t){const e=t.value,n=e.substring(4),s=t.dataset.destNoauto,o=k(e).slice(0,-5);i(n,s),i(o,"coordinates");a.output.portalglyphsPreview.innerText=e}function x(){const{discovered:t,discoveredlink:e}=s;i(t||`{{Profile|${e}}}`,"discoverer")}const j=[{element:"portalglyphsInput",func:function(){D(this)}},{element:"galaxyInput",func:function(){f(this.value),d(),g()}},{element:"enemiesInput",func:()=>b()},{element:["discoveredInput","discoveredlinkInput"],func:()=>x()}],F={input:{galaxyInput:"civInput",enemies:"enemies",classTableActions:"classTableActions",galaxyTableActions:"galaxyTableActions"},output:{portalglyphsPreview:"portalglyphsPreview",galaxyTableEntry:"galaxyTableEntry",indexEntry:"indexEntry",euclid:"euclid",calypso:"calypso",eissentam:"eissentam"}},$=[{element:"copyButton",handler:"click",func:function(){L(this,"classTableEntry")}},{element:"openAlbumButton",handler:"click",func:function(){B(this)}}];C("huburbs",!0),G.albumLinkGen=()=>P(),v(F),A(j);const M=document.querySelectorAll("[data-entry]");for(const t of Array.from(M))t.innerHTML=w;const h="galaxyTableActionsNote",N=`<p id="${h}">If the page already exists, just add an entry for the derelict freighter from your system</p>`;u.body.insertAdjacentHTML("afterbegin",N);const S=u.body.innerHTML;y(u,a.input.galaxyTableActions,"afterbegin");const c=H(S,{},$),E=c.getElementById(h);E.id="indexTableActionsNote",E.innerText="If the page doesn't exist yet, add an entry to the catalogue as well";const r=c.getElementById("albumBtn");r.id="tableBtn",r.dataset.link="classTableEntry",r.innerText="Copy Index Entry Code";const p=c.getElementById("albumLink");p.id="pageLink",p.dataset.link="classTableEntry",p.innerText="Open Index Page",y(c,a.input.classTableActions,"afterbegin");const O=a.input.fileInput,q=a.input.portalglyphsInput;m(O,"input"),m(q,"input"),f(a.input.galaxyInput.value),b(),d(),g(),x();