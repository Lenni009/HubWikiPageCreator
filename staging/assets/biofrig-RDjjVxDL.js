import{p as e,g as o,i as d,j as I,k as h,w as b,t as E,f as y,l as c,m as u}from"./links-kExndiuE.js";import{a as $,b as v,c as x,d as C}from"./startup-EbdqEPqf.js";import"./gallery-Ve8p22hD.js";import"./Explanation.vue_vue_type_script_setup_true_lang-pvcS6IdP.js";function s(){const t=e.region;o.output.regNr.innerText=d(t)}function m(){const t=I(),n=e.catalogue;o.output.addInfo.innerText=`[[${n}]]${t}`}function w(){e.catalogue="Eisvana Starship Album - Organic Frigate"}function l(){const t=e.name,n=e.tentacles,a=e.mainColour,r=e.secColour,i=o.input.appearanceInput;if(!(a.trim()||r.trim()||n.trim()))return;const l=`${t} is ${a.trim()?`${h(a)} ${a.trim()}`:""} organic frigate${r.trim()?` with ${r} accents`:""} with ${n}.`;i.value=l,b(i)}function F(){return`{{Class|${e.class}}}`}function T(){return"Organic Frigate Album"}const O=[{element:"nameInput",func:()=>{$(),l()}},{element:"portalglyphsInput",func:()=>s()},{element:["mainColourInput","secColourInput","tentacleInput"],func:()=>l()},{element:"researchTeam",func:()=>m()},{element:"classInput",func:()=>v()},{element:"hideAppearanceButton",handler:"click",func:function(){E("appearance",this)}},{element:["discoveredInput","discoveredlinkInput"],func:()=>x()}];c.albumOtherExternal=()=>F(),c.albumItemTypeExternal=()=>T(),u("galleryExplanationExternal","\n\tThere is a preferred order of gallery pictures:\n\t<div class='dialog-center'>\n\t\t<ol class='dialog-list'>\n\t\t\t<li>Rear view of frigate</li>\n\t\t\t<li>Interaction screen</li>\n\t\t\t<li>System Page</li>\n\t\t</ol>\n \t</div>"),u("galleryArray",["","Rear view of frigate","Interaction screen","System Page"]),y(O),s(),w(),m(),C();
