import{g as i,r as U,p as t,d as _,f as V,h as r,w as g,i as z,j as T,s as J,k as K,l as Q,v as W,e as P,m as X,t as Y,b as Z,c as f,a as ee}from"./main-327a7913.js";import{e as N,a as ne,f as k,b as M,c as te,d as oe}from"./startup-f801146c.js";function D(){i.output.regNr.innerText=U(t.region)}function $(){const e=_(),t=i.output.addInfo,n="[["+B()+"]]"+e;t.innerText=n}function h(){const e=t.mainColour,n=t.secColour,a=t.name,l=t.subtype.toLowerCase(),o=t.type.toLowerCase(),s=i.input.appearanceInput;if(!e.trim()&&!n.trim())return;const c=e.trim()?`${P(e)} ${e.trim()}`:P(o),r=n.trim()?` with ${n} accents`:"",u=`${a} is ${c} ${"starter pistol"==l?l:o} multi-tool${r}.`;s.value=u,g(s)}function R(){ae(),t.albumInitialised?N():document.addEventListener("albumLoaded",(()=>N()))}function x(){R(),v()}function ae(){const{srLocName:e,planet:n,moon:a,axes:i}=t,l=t.location.toLowerCase(),o=Q(n,a);let s,c;const r=(()=>{const n=t.srLoc;return e||n.includes("Space")?n.toLowerCase():l.includes("Space")?l:o})();l.includes("space")?(s=`fly to the ${l}`,c=`the ${r}`,l!=r&&e?r.includes("space")||(c=`${r} [[${e}]]`):s="take from cabinet"):(c=`${r} [[${e}]]`,s=`fly to ${o} (${i})`,r.toLowerCase().includes("space")?c=`the ${r}`:a&&"moon"==r&&e==a||!a&&"planet"==r&&e==n?s=`fly to ${i}`:e||(c=`${o}`,s=`fly to ${i}`));g(`Save and reload on ${c}, then ${s}.`,"acquirement"),t.actualSrLoc=r}function v(){const e=t.srLocName,n=t.location,a=t.srPlanetImg||"nmsMisc_notAvailable.png",l=t.sysImg||"nmsMisc_notAvailable.png",o=t.cabinetPlanetImg||"nmsMisc_notAvailable.png",s=t.axesImg||"nmsMisc_notAvailable.png",c=["srImgInput","sysImgInput","cabInput","coordsInput"],u=[{},{},{},{}],p=V(),m=(()=>{const a=t.srLoc;return a.includes("Space")||e?a:n.includes("Space")?n:p})(),f="Sentinel Pillar"==n?"Pillar":"Cabinet",d=n.includes("Space")?"":`(${f} ${p} highlighted)`;function I(e,t,n){e.picName=t,e.desc=n}I(u[0],a,`Save/Reload ${m}`),I(u[1],l,`System ${d}`),!n.includes("Space")&&(I(u[2],o,`${f} ${p}`),I(u[3],s,"Coordinates"));const g=[];for(let e=0;e<u.length;e++){const t=u[e],n=t.picName,a=t.desc,l=c[e];if(!n||!a){r(i.input[l],"none");continue}r(i.input[l],"");const o=document.createElement("span");o.style.display="block",o.innerText=`${n}|${a}`,g.push(o.outerHTML),i.output[l+"Label"].innerText=a}i.output.acquirementGallery.innerHTML=g.join("")}function q(){const e=t.type,n=i.input.locInput,a={Royal:"Sentinel Pillar",Sentinel:"Harmonic Camp"};e in a?(r(n,"none"),n.value=a[e],g(n)):r(n,""),A(),se(),v()}function G(){const e=t.location,n=["planetInput","moonInput","axesInput"];for(const t of n){const n=i.input[t],a=e.includes("Space");r(n,a?"none":""),a&&(n.value="",g(n),z(n))}}function H(){const e=t.srLoc,n=i.input.srInput;e.includes("Space")?(r(n,"none"),n.value="",g(n)):r(n,"")}function A(){const e=t.location,n=i.input.costInput,a="Sentinel Pillar"==e||"Harmonic Camp"==e;r(n,a?"none":""),a&&(n.value="",T(n,"input"))}function se(){const e=t.type,n=i.input.crystalsInput;if("Royal"==e||"Sentinel"==e){const e=n.closest(".checkboxes").querySelectorAll('input[type="checkbox"]');r(n,"none"),e.forEach((e=>{e.checked=!1,T(e,"change")}))}else r(n,"")}function ce(e){if("Harmonic Camp"!=e.value)return;const t=i.input.typeInput;t.value="Sentinel",T(t,"change"),r(t,"none"),r(e,"")}function O(){const e=t.type,n=i.input.subtypeInput,a={Pistol:[["Pistol","Starter Pistol"],["Standard","Starter Pistol"]],Rifle:[["Rifle","SMG"],["Standard (Large)","SMG (Small)"]],Experimental:[["Rifle","Pistol"],["Rifle (Large)","Pistol (Small)"]],Alien:[["Rifle","SMG","Pistol"],["Rifle (Large)","SMG (Medium)","Pistol (Small)"]]},l=Object.keys(a).includes(e);r(n,l?"":"none"),l?J(n,a[e][0],a[e][1]):n.value="",K(n)}function le(){return"Catalog"}function ie(){return"Multi-Tool"}function re(){return`<br>{{Class|${t.class}}} - ${function(){const e=t.subtype;return!e||t.isStarter?"":e+" -"}()} ${t.slots} Slots`}function ue(){return(()=>{const e=t.axes,n=t.acquirement.replace("Save and reload","S/r");return e&&!W(!1)?n.replace(/[()]/g,"").replace(e,`(${e})`):n})()}function B(){return"Eisvana Multi-Tool Catalog"}function pe(){const e=["","Discovery Menu","Price Page","Base Stats","Minor Settlement","Sentinel Pillar","Harmonic Camp","Tool in hand","First Person View"],n=t.location,a=["Minor Settlement","Sentinel Pillar","Harmonic Camp"];if(a.includes(n))a.filter((e=>e!=n)).forEach((t=>{const n=e.indexOf(t);e.splice(n,1)}));else for(let t=e.length-1;t>=0;t--)a.includes(e[t])&&e.splice(t,1);t.galleryArray=e}const me=[{element:"nameInput",func:()=>{ne(),h()}},{element:"typeInput",func:()=>{$(),q(),O(),P(t.type,"enPrefix"),k(),M(),h()}},{element:"subtypeInput",func:()=>{M(),$(),h(),k()}},{element:"researchTeam",func:()=>$()},{element:"locInput",func:function(){x(),G(),A(),ce(this)}},{element:"srlocInput",func:()=>{x(),H()}},{element:["srInput","planetInput","moonInput"],func:()=>x()},{element:"axesInput",func:()=>R()},{element:["slotsInput","classInput"],func:()=>M()},{element:["srImgInput","sysImgInput","cabInput","coordsInput"],func:()=>v()},{element:["srImgUpload","sysImgUpload","cabUpload","coordsUpload"],handler:"change",func:function(){X(this),v()}},{element:"portalglyphsInput",func:()=>D()},{element:["discoveredInput","discoveredlinkInput"],func:()=>te()},{element:["mainColourInput","secColourInput"],func:()=>h()},{element:"hideAppearanceButton",handler:"click",func:function(){Y("appearance",this)}}];f.albumDescExternal=()=>ue(),f.albumOtherExternal=()=>re(),f.albumItemTypeExternal=()=>ie(),f.albumTypeExternal=()=>le(),f.generateGalleryArray=()=>pe(),f.albumLinkGen=()=>B(),ee("galleryExplanationExternal","\n\tThere is a preferred order of pictures:\n\t<div class='is-flex is-justify-content-center'>\n\t\t<ol class='has-text-left'>\n\t\t\t<li>Discovery Menu</li>\n\t\t\t<li>Price Page</li>\n\t\t\t<li>Base Stats</li>\n\t\t\t<li>Minor Settlement/Sentinel Pillar/Harmonic Camp</li>\n\t\t\t<li>Tool in Hand</li>\n\t\t\t<li>First Person View</li>\n\t\t</ol>\n\t</div>"),Z(me),x(),$(),q(),O(),G(),H(),D(),A(),oe(),P(t.type??"","enPrefix");
