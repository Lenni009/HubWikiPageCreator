import{a1 as d,g as s,p as o,w as l,v as p,a2 as f,s as g,q as y,a3 as v,u as h,f as b,m as S,l as A}from"./links-c7SUkTPh.js";import"./index-BF8bSWtV.js";import"./index-CaEggnzw.js";import"./creatureData-aS7SzfNZ.js";import"./startup-CrcDNibH.js";import"./gallery-D_cgs4Xt.js";import"./runtime-dom.esm-bundler-BSY-fVkX.js";import"./Explanation.vue_vue_type_script_setup_true_lang-Behxwvww.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./floraDatalists-Bz-O6jQ9.js";import"./mineralDatalists-CKshA0d-.js";const E={input:{moonInputs:"moonInputs",addMoonButton:"addMoonButton"},output:{}};function x(t){const n=t.parentElement,e=document.querySelectorAll("[data-moon]"),o=f(Array.from(e),"dataset.moon"),a="moon_input"+o,s=g(`<div class="table-cell text removable" data-moon="section${o}">\n\t\t<button class="button is-outlined is-danger icon is-small" title="Remove moon" type="button" data-evt-id="removeButton">&#10006</button>\n\t\t<label for="${a}">Moon name:</label>\n\t</div>\n\t<div class="table-cell data" data-moon="section${o}">\n\t\t<input type="text" id="${a}" data-evt-id="moonInput">\n\t</div>`,{},[{element:"moonInput",handler:"input",func:()=>i()},{element:"removeButton",handler:"click",func:()=>{v("section"+o,"moon"),I()}}]);y(s,n,"beforebegin"),document.querySelectorAll("[data-moon]").length/2+1>2&&(t.disabled=!0)}function I(){s.input.moonInputs.querySelector("button").disabled=!1,i()}function i(){const t=document.querySelectorAll("[data-moon] input"),n=[];for(const e of Array.from(t))e.value&&n.push(`[[${d(e.value)}]]`);s.output.moonList.innerText=n.join(", "),o.moons=n,L()}function w(t,n=""){const e=1===t?"is":"are";if(!n)return e;l(e,n)}function L(){const t=(()=>{const t=o.moons;if(!t||0===t.length)return"This planet has no moons.";{const n=t.length;return`This planet's [[moon]]${n>1?"s":""} ${w(n)} ${t.join(" and ")}.`}})();l(t,"moonSentence")}function M(){const t=["","Landscape","Night View","Cave System","Analysis Visor","Planet Exploration Guide","Planet Page","System Page","Galaxy Map"],n=["Coast Area","Underwater"];if("Waterless"!==o.terrain){const e=t.indexOf("Analysis Visor");t.splice(e,0,...n)}o.galleryArray=t}function u(){const t=o.terrain;"string"==typeof t&&l("Waterless"!==t?"Yes":"No","water")}function C(){i();const t=s.input.terrainInput;t instanceof HTMLSelectElement&&p(t,"change")}const P=[{element:"addMoonButton",handler:"click",func:function(){x(this)}},{element:"terrainInput",func:()=>u()}];A.generateGalleryArray=()=>M(),document.addEventListener("pageReset",(()=>C())),h(E),b(P),i(),u(),S("galleryExplanationExternal","\nThere is a preferred order of pictures:\n\t<div class='dialog-center'>\n\t\t<ol class='dialog-list'>\n\t\t\t<li>Landscape</li>\n\t\t\t<li>Night View</li>\n\t\t\t<li>Cave System</li>\n\t\t\t<li>Coast Area</li>\n\t\t\t<li>Underwater</li>\n\t\t\t<li>Analysis Visor</li>\n\t\t\t<li>Planet Exploration Guide</li>\n\t\t\t<li>Planet Page</li>\n\t\t\t<li>System Page</li>\n\t\t\t<li>Galaxy Map</li>\n\t\t</ol>\n\t</div>");
