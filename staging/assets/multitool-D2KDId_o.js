import{g as i,i as V,p as n,j as z,X,A as r,Y as A,w as f,e as Y,v as D,y as Z,z as J,a as K,Z as Q,k as E,_ as W,t as ee,f as te,l as d,m as ne}from"./links-Dq6abfQO.js";import{h as N,a as oe,i as k,b as C,c as se,d as ce}from"./startup-DDsNTrBY.js";import"./gallery-BV0E1wyX.js";import"./runtime-dom.esm-bundler-D7erJodC.js";import"./Explanation.vue_vue_type_script_setup_true_lang-DTqT8wdL.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";function R(){i.output.regNr.innerText=V(n.region)}function x(){const e=z(),n=i.output.addInfo,t="[["+F()+"]]"+e;n.innerText=t}function $(){const e=n.mainColour,t=n.secColour,l=n.name,o=n.subtype.toLowerCase(),a=n.type.toLowerCase(),s=i.input.appearanceInput;if(!e.trim()&&!t.trim())return;const r=`${l} is ${e.trim()?`${E(e)} ${e.trim()}`:E(a)} ${"starter pistol"===o?o:a} multi-tool${t.trim()?` with ${t} accents`:""}.`;s.value=r,f(s)}function q(){ae(),n.albumInitialised?N():document.addEventListener("albumLoaded",(()=>N()))}function L(){q(),g()}function ae(){const{srLocName:e,planet:t,moon:i,axes:l}=n,o=n.location.toLowerCase(),a=K(t,i);let s,r;const c=(()=>{const t=n.srLoc;return e||t.includes("Space")?t.toLowerCase():o.includes("Space")?o:a})();o.includes("space")?(s=`fly to the ${o}`,r=`the ${c}`,o!==c&&e?c.includes("space")||(r=`${c} [[${e}]]`):s="take from cabinet"):(r=`${c} [[${e}]]`,s=`fly to ${a} (${l})`,c.toLowerCase().includes("space")?r=`the ${c}`:i&&"moon"===c&&e===i||!i&&"planet"===c&&e===t?s=`fly to ${l}`:e||(r=`${a}`,s=`fly to ${l}`));f(`Save and reload on ${r}, then ${s}.`,"acquirement"),n.actualSrLoc=c}function g(){const e=n.srLocName,t=n.location,l=n.srPlanetImg||"nmsMisc_notAvailable.png",o=n.sysImg||"nmsMisc_notAvailable.png",a=n.cabinetPlanetImg||"nmsMisc_notAvailable.png",s=n.axesImg||"nmsMisc_notAvailable.png",c=["srImgInput","sysImgInput","cabInput","coordsInput"],u=[{},{},{},{}],p=X(),m=(()=>{const i=n.srLoc;return i.includes("Space")||e?i:t.includes("Space")?t:p})(),f="Sentinel Pillar"===t?"Pillar":"Cabinet",d=t.includes("Space")?"":`(${f} ${p} highlighted)`;function y(e,n,t){e.picName=n,e.desc=t}y(u[0],l,`Save/Reload ${m}`),y(u[1],o,`System ${d}`),!t.includes("Space")&&(y(u[2],a,`${f} ${p}`),y(u[3],s,"Coordinates"));const I=[];for(let e=0;e<u.length;e++){const n=u[e],t=n.picName,l=n.desc,o=c[e];if(!t||!l){r(i.input[o],"none");continue}r(i.input[o],"");const a=document.createElement("span");a.style.display="block",a.innerText=`${t}|${l}`,I.push(a.outerHTML),i.output[o+"Label"].innerText=l}i.output.acquirementGallery.innerHTML=I.join("")}function G(){const e=n.type,t=i.input.locInput;e in A?(r(t,"none"),t.value=A[e],f(t)):r(t,""),M(),B(),g()}function le(){const e=n.location,t=i.input.typeInput,l=i.input.subtypeInput;if(!("string"==typeof e&&t instanceof HTMLSelectElement&&l instanceof HTMLSelectElement))return;const o=structuredClone(A);delete o.Royal;const a=Object.fromEntries(Object.entries(o).map((e=>e.reverse())));e in a?(r(t,"none"),r(l,"none"),t.value=a[e],f(t)):r(t,""),M(),B(),g()}function H(){const e=n.location,t=["planetInput","moonInput","axesInput"];for(const n of t){const t=i.input[n],l=e.includes("Space");r(t,l?"none":""),l&&(t.value="",f(t),Y(t))}}function O(){const e=n.srLoc,t=i.input.srInput;e.includes("Space")?(r(t,"none"),t.value="",f(t)):r(t,"")}function M(){const e=n.location,t=i.input.costInput,l="Sentinel Pillar"===e||"Harmonic Camp"===e;r(t,l?"none":""),l&&(t.value="",D(t,"input"))}function B(){const e=n.type,t=i.input.crystalsInput;if(["Royal","Sentinel","Atlantid"].includes(e)){const e=t.closest(".checkboxes").querySelectorAll('input[type="checkbox"]');r(t,"none"),e.forEach((e=>{e.checked=!1,D(e,"change")}))}else r(t,"")}function j(){const e=n.type,t=i.input.subtypeInput,l={Pistol:[["Pistol","Starter Pistol"],["Standard","Starter Pistol"]],Rifle:[["Rifle","SMG"],["Standard (Large)","SMG (Small)"]],Experimental:[["Rifle","Pistol"],["Rifle (Large)","Pistol (Small)"]],Alien:[["Rifle","SMG","Pistol"],["Rifle (Large)","SMG (Medium)","Pistol (Small)"]]},o=Object.keys(l).includes(e);r(t,o?"":"none"),o?Z(t,l[e][0],l[e][1]):t.value="",J(t)}function ie(){return"Album"}function re(){return"Multi-Tool"}function ue(){return`<br>{{Class|${n.class}}} - ${function(){const e=n.subtype;return!e||n.isStarter?"":e+" -"}()} ${n.slots} Slots`}function pe(){return(()=>{const e=n.axes,t=n.acquirement.replace("Save and reload","S/r");return e&&!Q(!1)?t.replace(/[()]/g,"").replace(e,`(${e})`):t})()}function F(){const{type:e}=n;return`Eisvana Multi-Tool Album - ${e}`}function me(){const e=["","Discovery Menu","Price Page","Base Stats","Minor Settlement","Sentinel Pillar","Harmonic Camp","Monolith","Tool in Hand","First Person View"],t=n.location,i=["Minor Settlement","Sentinel Pillar","Harmonic Camp","Monolith"];if(i.includes(t))i.filter((e=>e!==t)).forEach((n=>{const t=e.indexOf(n);e.splice(t,1)}));else for(let n=e.length-1;n>=0;n--)i.includes(e[n])&&e.splice(n,1);n.galleryArray=e}const fe=[{element:"nameInput",func:()=>{oe(),$()}},{element:"typeInput",func:()=>{x(),G(),j(),E(n.type,"enPrefix"),k(),C(),$()}},{element:"subtypeInput",func:()=>{C(),x(),$(),k()}},{element:"researchTeam",func:()=>x()},{element:"locInput",func:function(){L(),H(),M(),le()}},{element:"srlocInput",func:()=>{L(),O()}},{element:["srInput","planetInput","moonInput"],func:()=>L()},{element:"axesInput",func:()=>q()},{element:["slotsInput","classInput"],func:()=>C()},{element:["srImgInput","sysImgInput","cabInput","coordsInput"],func:()=>g()},{element:["srImgUpload","sysImgUpload","cabUpload","coordsUpload"],handler:"change",func:function(){W(this),g()}},{element:"portalglyphsInput",func:()=>R()},{element:["discoveredInput","discoveredlinkInput"],func:()=>se()},{element:["mainColourInput","secColourInput"],func:()=>$()},{element:"hideAppearanceButton",handler:"click",func:function(){ee("appearance",this)}}];d.albumDescExternal=()=>pe(),d.albumOtherExternal=()=>ue(),d.albumItemTypeExternal=()=>re(),d.albumTypeExternal=()=>ie(),d.generateGalleryArray=()=>me(),d.albumLinkGen=()=>F(),ne("galleryExplanationExternal","\n\tThere is a preferred order of pictures:\n\t<div class='is-flex is-justify-content-center'>\n\t\t<ol class='has-text-left'>\n\t\t\t<li>Discovery Menu</li>\n\t\t\t<li>Price Page</li>\n\t\t\t<li>Base Stats</li>\n\t\t\t<li>Minor Settlement/Sentinel Pillar/Harmonic Camp/Monolith</li>\n\t\t\t<li>Tool in Hand</li>\n\t\t\t<li>First Person View</li>\n\t\t</ol>\n\t</div>"),te(fe),L(),x(),G(),j(),H(),O(),R(),M(),ce(),E(n.type??"","enPrefix");
