import{y as m,g as l,p as s,w as c,z as p,A as f,B as g,C as y,D as v,b,a as u}from"./main-585f33b6.js";import{p as S}from"./index-b85646af.js";import"./index-58e6d6c1.js";import"./creatureData-46652f69.js";import"./startup-e706f00e.js";const h={input:{moonInputs:"moonInputs",addMoonButton:"addMoonButton"},output:{}};function A(t){const n=t.parentElement,e=document.querySelectorAll("[data-moon]"),o=p(Array.from(e),"dataset.moon"),l="moon_input"+o,i=f(`<div class="tableCell text removable" data-moon="section${o}">\n\t\t<button class="button is-outlined is-danger icon is-small" title="Remove moon" type="button" data-evt-id="removeButton">&#10006</button>\n\t\t<label for="${l}">Moon name:</label>\n\t</div>\n\t<div class="tableCell data" data-moon="section${o}">\n\t\t<input type="text" id="${l}" data-evt-id="moonInput">\n\t</div>`,{},[{element:"moonInput",handler:"input",func:()=>a()},{element:"removeButton",handler:"click",func:()=>{y("section"+o,"moon"),C()}}]);g(i,n,"beforebegin"),document.querySelectorAll("[data-moon]").length/2+1>2&&(t.disabled=!0)}function C(){l.input.moonInputs.querySelector("button").disabled=!1,a()}function a(){const t=document.querySelectorAll("[data-moon] input"),n=[];for(const e of Array.from(t))e.value&&n.push(`[[${m(e.value)}]]`);l.output.moonList.innerText=n.join(", "),s.moons=n,x()}function x(){const t=(()=>{const t=s.moons;if(!t||0==t.length)return"This planet has no moons.";{const n=t.length;return`This planet's [[moon]]${n>1?"s":""} ${S(n)} ${t.join(" and ")}.`}})();c(t,"moonSentence")}const E=[{element:"addMoonButton",handler:"click",func:function(){A(this)}}];v(h),b(E),a(),u("galleryExplanationExternal","\nThere is a preferred order of pictures:\n\t<div class='dialog-center'>\n\t\t<ol class='dialog-list'>\n\t\t\t<li>Landscape</li>\n\t\t\t<li>Night View</li>\n\t\t\t<li>Cave System</li>\n\t\t\t<li>Coast Area</li>\n\t\t\t<li>Underwater</li>\n\t\t\t<li>Analysis Visor</li>\n\t\t\t<li>Planet Exploration Guide</li>\n\t\t\t<li>Planet Page</li>\n\t\t\t<li>System Page</li>\n\t\t\t<li>Galaxy Map</li>\n\t\t</ol>\n\t</div>"),u("galleryArray",["","Landscape","Night View","Cave System","Coast Area","Underwater","Analysis Visor","Planet Exploration Guide","Planet Page","System Page","Galaxy Map"]);
