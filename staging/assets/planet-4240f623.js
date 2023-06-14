import{z as m,g as l,p as s,w as c,A as p,B as f,C as g,D as v,E as y,b,a as u}from"./about-b18469d8.js";import{p as S}from"./index-4a8e9302.js";import"./index-64838ff8.js";import"./creatureData-40d64141.js";import"./startup-526a1b7e.js";const h={input:{moonInputs:"moonInputs",addMoonButton:"addMoonButton"},output:{}};function A(t){const n=t.parentElement,e=document.querySelectorAll("[data-moon]"),o=p(Array.from(e),"dataset.moon"),l="moon_input"+o,i=f(`<div class="tableCell text removable" data-moon="section${o}">\n\t\t<button class="button is-outlined is-danger icon is-small" title="Remove moon" type="button" data-evt-id="removeButton">&#10006</button>\n\t\t<label for="${l}">Moon name:</label>\n\t</div>\n\t<div class="tableCell data" data-moon="section${o}">\n\t\t<input type="text" id="${l}" data-evt-id="moonInput">\n\t</div>`,{},[{element:"moonInput",handler:"input",func:()=>a()},{element:"removeButton",handler:"click",func:()=>{v("section"+o,"moon"),C()}}]);g(i,n,"beforebegin"),document.querySelectorAll("[data-moon]").length/2+1>2&&(t.disabled=!0)}function C(){l.input.moonInputs.querySelector("button").disabled=!1,a()}function a(){const t=document.querySelectorAll("[data-moon] input"),n=[];for(const e of Array.from(t))e.value&&n.push(`[[${m(e.value)}]]`);l.output.moonList.innerText=n.join(", "),s.moons=n,E()}function E(){const t=(()=>{const t=s.moons;if(!t||0==t.length)return"This planet has no moons.";{const n=t.length;return`This planet's [[moon]]${n>1?"s":""} ${S(n)} ${t.join(" and ")}.`}})();c(t,"moonSentence")}const x=[{element:"addMoonButton",handler:"click",func:function(){A(this)}}];y(h),b(x),a(),u("galleryExplanationExternal","\nThere is a preferred order of pictures:\n\t<div class='dialog-center'>\n\t\t<ol class='dialog-list'>\n\t\t\t<li>Landscape</li>\n\t\t\t<li>Night View</li>\n\t\t\t<li>Cave System</li>\n\t\t\t<li>Coast Area</li>\n\t\t\t<li>Underwater</li>\n\t\t\t<li>Analysis Visor</li>\n\t\t\t<li>Planet Exploration Guide</li>\n\t\t\t<li>Planet Page</li>\n\t\t\t<li>System Page</li>\n\t\t\t<li>Galaxy Map</li>\n\t\t</ol>\n\t</div>"),u("galleryArray",["","Landscape","Night View","Cave System","Coast Area","Underwater","Analysis Visor","Planet Exploration Guide","Planet Page","System Page","Galaxy Map"]);