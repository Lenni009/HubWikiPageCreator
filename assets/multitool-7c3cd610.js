import{g as l,r as U,p as t,w as f,s as q,d as _,c as V,h as u,e as P,f as J,i as z,H as K,j as Q,v as W,k as X,t as Y,l as Z,a as ee,b as d}from"./about-44bb0714.js";import{e as k,a as ne,f as te,b as M,c as oe,d as ae}from"./startup-a6d81f60.js";function L(){l.output.HubNr.innerText=U(t.region)}function w(){const e=t.civShort,n=K(e);f(n,"locGalaxy")}function b(){const e=q(t.civShort),n=_("GHSH"),a=(()=>{const e=t.type;return"Standard"==e?"Standard Multi-Tool":e})(),o="[["+("CalHub"==e?`${e} Multi-Tool Catalog`:`${e} Multi-Tool Catalog - ${a}`)+"]]"+n;l.output.addInfo.innerText=o}function h(){const e=t.mainColour,n=t.secColour,a=t.name,o=t.type.toLowerCase(),i=l.input.appearanceInput;if(!e.trim()&&!n.trim())return;const c=e.trim()?`${P(e)} ${e.trim()}`:P(o),u=n.trim()?` with ${n} accents`:"",s=`${a} is ${c} ${o} multi-tool${u}.`;i.value=s,f(i)}function D(){ce(),t.albumInitialised?k():document.addEventListener("albumLoaded",(()=>k()))}function $(){D(),v()}function ce(){const{srLocName:e,planet:n,moon:l,axes:a}=t,o=t.location.toLowerCase(),i=Q(n,l);let c,u;const s=(()=>{const n=t.srLoc;return n.includes("Space")||e?n:o.includes("Space")?o:i})();o.includes("space")?(c=`fly to the ${o}`,u=`the ${s}`,o!=s&&e?s.includes("space")||(u=`${s} [[${e}]]`):c="take from cabinet"):(u=`${s} [[${e}]]`,c=`fly to ${i} (${a})`,s.includes("space")?u=`the ${s}`:l&&"moon"==s&&e==l||!l&&"planet"==s&&e==n?c=`fly to ${a}`:e||(u=`${i}`,c=`fly to ${a}`));f(`Save and reload on ${u}, then ${c}.`,"acquirement"),t.actualSrLoc=s}function v(){const e=t.srLocName,n=t.location,a=t.srPlanetImg||"nmsMisc_notAvailable.png",o=t.sysImg||"nmsMisc_notAvailable.png",i=t.cabinetPlanetImg||"nmsMisc_notAvailable.png",c=t.axesImg||"nmsMisc_notAvailable.png",s=["srImgInput","sysImgInput","cabInput","coordsInput"],r=[{},{},{},{}],p=V(),m=(()=>{const l=t.srLoc;return l.includes("Space")||e?l:n.includes("Space")?n:p})(),f="Sentinel Pillar"==n?"Pillar":"Cabinet",d=n.includes("Space")?"":`(${f} ${p} highlighted)`;function I(t,e,n){t.picName=e,t.desc=n}I(r[0],a,`Save/Reload ${m}`),I(r[1],o,`System ${d}`),!n.includes("Space")&&(I(r[2],i,`${f} ${p}`),I(r[3],c,"Coordinates"));const S=[];for(let t=0;t<r.length;t++){const e=r[t],n=e.picName,a=e.desc,o=s[t];if(!n||!a){u(l.input[o],"none");continue}u(l.input[o],"");const i=document.createElement("span");i.style.display="block",i.innerText=`${n}|${a}`,S.push(i.outerHTML),l.output[o+"Label"].innerText=a}l.output.acquirementGallery.innerHTML=S.join("")}function B(){const e=t.type,n=l.input.locInput,a={Royal:"Sentinel Pillar",Sentinel:"Harmonic Camp"};e in a?(u(n,"none"),n.value=a[e],f(n)):u(n,""),G(),se(),v()}function H(){const e=t.type,n=t.size,a=l.input.sizeInput;a.querySelector('option[value="SMG"]').style.display="Experimental"==e?"none":"","Experimental"==e&&"SMG"==n&&(a.value="Pistol"),["Royal","Starter Pistol","Sentinel"].includes(e)?u(a,"none"):u(a,"")}function N(){const e=l.input.typeInput,n=e.value,a=n.split(" ").slice(-1).join(),o=t.size,i="Standard"==n&&"SMG"==o?"Rifle":"Standard"==n?o:a;P(i,"enPrefix");const c=e.dataset.destNoauto;f(i,c),t[c]=n}function F(){const e=t.location,n=["planetInput","moonInput","axesInput"];for(const t of n){const n=l.input[t],a=e.includes("Space");u(n,a?"none":""),a&&(n.value="",f(n),J(n))}}function R(){const e=t.srLoc,n=l.input.srInput;e.includes("Space")?(u(n,"none"),n.value="",f(n)):u(n,"")}function G(){const e=t.location,n=l.input.costInput,a="Sentinel Pillar"==e||"Harmonic Camp"==e;u(n,a?"none":""),a&&(n.value="",z(n,"input"))}function se(){const e=t.type,n=l.input.crystalsInput;if("Royal"==e||"Sentinel"==e){const t=n.closest(".checkboxes").querySelectorAll('input[type="checkbox"]');u(n,"none"),t.forEach((t=>{t.checked=!1,z(t,"change")}))}else u(n,"")}function le(t){if("Harmonic Camp"!=t.value)return;const e=l.input.typeInput;e.value="Sentinel",z(e,"change"),u(e,"none"),u(t,"")}function ie(){return"Catalog"}function re(){return t.type}function ue(){return`<br>{{Class|${t.class}}} - ${function(){const e=t.type,n=t.size;return["Royal","Starter Pistol","Sentinel"].includes(e)?"":n+" -"}()} ${t.slots} Slots`}function pe(){return(()=>{const e=t.axes,n=t.acquirement.replace("Save and reload","S/r");return e&&!W(!1)?n.replace(/[()]/g,"").replace(e,`(${e})`):n})()}function me(){const e=q(t.civShort),n=t.type;return(()=>{if("CalHub"==e)return e+" Multi-Tool Catalog";return e+" Multi-Tool Catalog - "+("Standard"==n?`${n} Multi-Tool`:n)})()}function fe(){const e=["","Discovery Menu","Price Page","Base Stats","Minor Settlement","Sentinel Pillar","Harmonic Camp","Tool in hand","First Person View"],n=t.location,l=["Minor Settlement","Sentinel Pillar","Harmonic Camp"];if(l.includes(n))l.filter((t=>t!=n)).forEach((t=>{const n=e.indexOf(t);e.splice(n,1)}));else for(let t=e.length-1;t>=0;t--)l.includes(e[t])&&e.splice(t,1);t.galleryArray=e}const de=[{element:"nameInput",func:()=>{ne(),h()}},{element:"civ",func:()=>{w(),b(),h(),L()}},{element:"typeInput",func:()=>{b(),h(),B(),H(),N(),te(),M()}},{element:"sizeInput",func:()=>{H(),N(),M()}},{element:"researchTeam",func:()=>b()},{element:"locInput",func:function(){$(),F(),G(),le(this)}},{element:"srlocInput",func:()=>{$(),R()}},{element:["srInput","planetInput","moonInput"],func:()=>$()},{element:"axesInput",func:()=>D()},{element:["slotsInput","classInput"],func:()=>M()},{element:["srImgInput","sysImgInput","cabInput","coordsInput"],func:()=>v()},{element:["srImgUpload","sysImgUpload","cabUpload","coordsUpload"],handler:"change",func:function(){X(this),v()}},{element:"portalglyphsInput",func:()=>L()},{element:["discoveredInput","discoveredlinkInput"],func:()=>oe()},{element:["mainColourInput","secColourInput"],func:()=>h()},{element:"hideAppearanceButton",handler:"click",func:function(){Y("appearance",this)}}];Z("huburbs",!0),d.albumDescExternal=()=>pe(),d.albumOtherExternal=()=>ue(),d.albumItemTypeExternal=()=>re(),d.albumTypeExternal=()=>ie(),d.generateGalleryArray=()=>fe(),d.albumLinkGen=()=>me(),t.galleryExplanationExternal="\n\tThere is a preferred order of pictures:\n\t<div class='is-flex is-justify-content-center'>\n\t\t<ol class='has-text-left'>\n\t\t\t<li>Discovery Menu</li>\n\t\t\t<li>Price Page</li>\n\t\t\t<li>Base Stats</li>\n\t\t\t<li>Minor Settlement/Sentinel Pillar/Harmonic Camp</li>\n\t\t\t<li>Tool in Hand</li>\n\t\t\t<li>First Person View</li>\n\t\t</ol>\n\t</div>",ee(de),w(),$(),b(),B(),H(),N(),F(),R(),L(),G(),ae();