import{p as a,g as o,s as I,w as y,h as T,r as K,d as J,l as U,j as M,e as B,t as Q,a as Y,D as q,b as Z,c as f}from"./main-585f33b6.js";import{a as _,t as k,b as v,c as ee,d as te}from"./startup-e706f00e.js";const P={subtypeInput:["show"],exoticInput:["hide",""],pilotInput:["hide",""],inventoryInput:["show"],classInput:["hide",""],maneuverBInput:["hide",""],damageBInput:["hide",""],shieldBInput:["hide",""],warpBInput:["hide",""],economyInput:["show"],planetInput:["hide",""],moonInput:["hide",""],axesInput:["hide",""]},c={Freighter:{cost:{Small:"5,000,000 - 23,000,000",Large:"26,150,000 - 178,000,000"},slots:{Small:"15-19",Large:"24-34"},techslots:{Small:"8-12",Large:"12-20"},subtypes:["Dreadnought","Battleship","Sentinel","Resurgent","Imperial","Venator","Blade","Cargo","Centrifuge","Enterprise","Galleon","Hammerhead","Iris","Oculus","Revolver"],secParts:["","Tower","Elevated","Spoiler","Keiser"],accessories:["","Keel","Bottom Fin","Top Fin","W-Wings","Wedge","Nacelle"],miscParts:["","Cargo Boxes","Cargo Pods"],sections:{subtypeInput:["show"],exoticInput:["hide",""],pilotInput:["show"],inventoryInput:["hide"],classInput:["hide",""],maneuverBInput:["hide",""],damageBInput:["hide",""],shieldBInput:["hide",""],warpBInput:["hide",""],economyInput:["show"],planetInput:["hide",""],moonInput:["hide",""],axesInput:["hide",""]}},Exotic:{cost:{Small:"20,900,000 - 41,000,000"},slots:{Small:"24-30"},techslots:{Small:"20-28"},subtypes:[],secParts:["","Small Double Thruster","Large Double Thruster","Clam Shell Thruster","Single Thruster"],accessories:["","Side Wings","Side Booster"],miscParts:["","Hexagon","Acanthus","Geometric Plate","Circles","Sergeant Stripes"],sections:{subtypeInput:["hide",""],exoticInput:["show"],pilotInput:["hide",""],inventoryInput:["hide","Small"],classInput:["hide","S"],maneuverBInput:["hide",""],damageBInput:["hide",""],shieldBInput:["hide",""],warpBInput:["hide",""],economyInput:["show"],planetInput:["hide",""],moonInput:["hide",""],axesInput:["hide",""]}},Solar:{cost:{Small:"4,000,000 - 14,000,000"},slots:{Small:"24-30"},techslots:{Small:"13-18"},subtypes:["Falcon","Grouper","Jackal","Marlin","Raven","Spider"],secParts:["","Razor","Shielded","Double Blade","Starburst","Talon","Grapple"],accessories:["","Hex","Crescent","Rectangle"],miscParts:["","Horza","Verta","Tristar","Torpedo","Drill"],sections:{subtypeInput:["show"],exoticInput:["hide",""],pilotInput:["hide",""],inventoryInput:["hide"],classInput:["hide",""],maneuverBInput:["hide",""],damageBInput:["hide",""],shieldBInput:["hide",""],warpBInput:["hide",""],economyInput:["show"],planetInput:["hide",""],moonInput:["hide",""],axesInput:["hide",""]}},Fighter:{cost:{Small:"4,050,000 - 15,650,000",Medium:"4,050,000 - 27,650,000",Large:"10,500,000 - 57,500,000"},slots:{Small:"24-28",Medium:"24-32",Large:"30-38"},techslots:{Small:"14-19",Medium:"14-24",Large:"19-30"},subtypes:["Alpha","Barrel","Jet","Long","Needle","Rasa","Snowspeeder","Stubby","Viper"],secParts:["","Heavy","Starjumper","Horizon","Vector","Tie","Halo","Bowie-H","Bowie-V","Gull","Quasar","Vulture","Droid","Mecha-3","Mecha-5","Mecha-7","E-Wings","Aftershock","Shockwave","Starscream"],accessories:["","Box Thruster","Single Thruster","Triple Thruster"],miscParts:["","Serenity","Firefly"],sections:P},Explorer:{cost:{Small:"3,450,000 - 11,900,000",Medium:"3,450,000 - 18,300,000",Large:"9,200,000 - 39,000,000"},slots:{Small:"24-29",Medium:"24-32",Large:"30-38"},techslots:{Small:"14-19",Medium:"19-24",Large:"24-30"},subtypes:["Hopper","Firespray"],secParts:["","Curved Cockpit","Bubble Cockpit"],accessories:["","Ajairu","Arc","Chick","Curved-Tie","Dagger","Dragonfly","Glider","Lance","No Wings","Nucleo","Proteus","Solar Fins","Solar Pods","Solar Tie","T3 Pods","Wraith","Xenia","Xtara","X-Wing"],miscParts:[],sections:P},Hauler:{cost:{Small:"9,700,000 - 37,500,000",Medium:"20,850,000 - 58,500,000",Large:"32,500,000 - 126,000,000"},slots:{Small:"30-36",Medium:"36-40",Large:"40-48"},techslots:{Small:"12-18",Medium:"18-24",Large:"20-30"},subtypes:{Aftershock:["Small"],Ball:["Small","Large"],"Body only":["Small"],Box:["Small","Large"],"C-Wing":["Small"],"Bent Wing":["Small"],"D-Flect Wing":["Medium"],"E-Wing":["Small"],"Fan Wing":["Large"],"V-Wing":["Small"],"Thrusters only":["Small"],"W-Wing":["Medium"],Shield:["Small"],"Tie-Shield":["Small"],"Split Shield":["Small"]},secParts:["","Short Cab","Mack","Duck","Robot","Turret","Box Nose"],accessories:["","Short Tail","Long Tail","Box Tail"],miscParts:["","High Wings","Serenity","2rpedo","Sabre","V-Blade","Tilt"],sections:P},Shuttle:{cost:{Small:"2,070,000 - 12,650,000",Medium:"4,400,000 - 22,500,000"},slots:{Small:"24-32",Medium:"28-36"},techslots:{Small:"12-19",Medium:"18-26"},subtypes:["Single Tube","Small Box Body","Double Tube","Large Box Body"],secParts:["","Voyager","Grill Wings","Y-Wings","Bent Wings","Drop-Wings","X-Wings","Low Wings","Glider","V-Wings"],accessories:["","Straight Turbine","Tapered Turbine","Omega Cap","Retro Booster","Fatboy","Magnatreme Adapter","Afterburner","Hover Fan","Magnatreme Dome","Magnatreme Ring","Magnatreme Shield","Wing Turbine"],miscParts:["","Micro Thruster","Vertical Intake","Solar Panel","Keg","Mr. Fusion","R2 Unit","Fuel Port","Antenna","Lunch Box","Cargo Vent","Cooling Channel","Exhaust Cooling Channel","Angled Vent","Fuel Compressor","Coolant Ports"],sections:{subtypeInput:["show"],exoticInput:["hide",""],pilotInput:["hide",""],inventoryInput:["hide"],classInput:["hide",""],maneuverBInput:["hide",""],damageBInput:["hide",""],shieldBInput:["hide",""],warpBInput:["hide",""],economyInput:["show"],planetInput:["hide",""],moonInput:["hide",""],axesInput:["hide",""]}},"Living Ship":{cost:{Medium:""},slots:{Medium:"36"},techslots:{Medium:"30"},subtypes:["Anvil","Hammerhead","Shark","Tusked","Compact"],secParts:["","Long Arm","Short Arm"],accessories:["","Bigfoot","Fruitbowl Feet","Pedestal Feet"],miscParts:["","Single Thruster","Triple Thruster"],sections:{subtypeInput:["show"],exoticInput:["hide",""],pilotInput:["hide",""],inventoryInput:["hide","Medium"],classInput:["hide","S"],maneuverBInput:["show"],damageBInput:["show"],shieldBInput:["show"],warpBInput:["show"],economyInput:["hide",""],planetInput:["show"],moonInput:["show"],axesInput:["show"]}},Interceptor:{cost:{Large:""},slots:{Large:"32-40"},techslots:{Large:"22-28"},subtypes:[],secParts:[],accessories:[],miscParts:[],sections:{subtypeInput:["hide"],exoticInput:["hide",""],pilotInput:["hide",""],inventoryInput:["hide","Large"],classInput:["show"],maneuverBInput:["show"],damageBInput:["show"],shieldBInput:["show"],warpBInput:["show"],economyInput:["show"],planetInput:["show"],moonInput:["show"],axesInput:["show"]}}};function E(){const e=a.type,t=o.input.subtypeInput;Array.isArray(c[e].subtypes)?I(t,c[e].subtypes):I(t,Object.keys(c[e].subtypes)),y(t)}function L(){const e=a.economy.split(" "),t=a.type;let n,s="always spawns";if(!["Exotic","Living Ship"].includes(t)){switch(e[0]){case"★★★":n="2%";break;case"★★":n="1%";break;case"★":case"Data":n="0%";break;default:n="5%"}s=`has a ${n} chance to spawn`}o.output.sChance.innerText=s}function A(){const e=a.type.split(" ")[0];o.output.stats.innerText=e+"Ship"}function F(){var e,t;const n={show:"",hide:"none"},s=a.type;D();for(const a of Object.keys(c[s].sections)){const i=c[s].sections[a],r=o.input[a];T(r,n[i[0]]),i.length>1?r.value=i[1]:"select"==r.tagName.toLowerCase()&&(r.value||(r.value=null==(t=null==(e=r.options)?void 0:e[0])?void 0:t.value)),y(r)}W(),$()}function D(){const e=a.type,t=a.subtype,n=o.input.inventoryInput;if("Hauler"==e){const e=c.Hauler.subtypes;I(n,e[t]),1==e[t].length&&(n.value=e[t][0])}else I(n,["Small","Medium","Large"]);y(n)}function W(){if("Hauler"!=a.type)return;const e=a.subtype,t=o.input.inventoryInput;1==c.Hauler.subtypes[e].length?T(t,"none"):T(t,"")}function $(){const e=a.subtype,t=a.type,n=o.input.inventoryInput;let s;switch(t){case"Freighter":s=c[t].subtypes.indexOf(e)>5?"Small":"Large";break;case"Shuttle":s=c[t].subtypes.indexOf(e)>1?"Medium":"Small"}s&&(n.value=s),y(n),H()}function H(){const e=a.type,t=a.inventory,n=["cost","slots","techslots"];for(const s of n)o.output[s].innerText=c[e][s][t]}function R(){y(V(),"archetype")}function V(){return"Freighter"==a.type?"freighter":"starship"}function m(){const{class:e,system:t,region:n,type:s}=a,i=`This ${V()} was discovered in the [[${t}]] [[star system]] in the [[${n}]] [[region]]${K(n)} of [[Eisvana]], in the [[Eissentam]] [[galaxy]].\n\n\t${"Interceptor"==s?"The {{Class|"+e+"}} class version of this starship":"It"} can be found ${function(){switch(s){case"Freighter":return"Capital"==function(){if("Large"==a.inventory)return"Capital"}()?"after warping into the star system if a space battle is triggered":"randomly while pulsing around in the star system";case"Interceptor":case"Living Ship":return function(){const e=a.axes;return`on the ${U()} at the coordinates ${e}`}();default:return"at either the [[Space Station]] or any [[Trade Outpost]]s available in the star system"}}()}.`;o.output.location.innerText=i}function x(){const e="[["+G()+"]]"+J();o.output.addInfo.innerText=e}function N(){const e=a.type,{secPartsInput:t,accessoriesInput:n,miscPartsInput:s}=o.input,i={secParts:t,accessories:n,miscParts:s};for(const[t,n]of Object.entries(i))I(n,c[e][t])}function w(){const e=o.input.appearanceInput,t=o.input.mainColourInput.value,n=o.input.secColourInput.value,s=o.input.secPartsInput.value,i=o.input.accessoriesInput.value,r=o.input.miscPartsInput.value;if(!(t.trim()||n.trim()||s||i||r))return;const l=a.type,u=a.subtype,p=a.exotic,c=a.name,h=n.trim()?` with ${n} accents`:"",d=(()=>{let e="";(s||i||r)&&(e="It features ");const t=[s.toLowerCase(),i.toLowerCase(),r.toLowerCase()],n=[];for(const e of t)e&&n.push(e);for(let t=0;t<n.length;t++){let s;s=0==t?"":t!=n.length-1?", ":" and ",e+=s+n[t]}return e&&(e+="."),e})(),m=`${c} is ${t.trim()?`${B(t)} ${t}`:B(l)} ${l.toLowerCase()} of the ${u.toLowerCase()||p.toLowerCase()} subtype${h}. ${d}`;e.value=m,y(e)}function ne(){const{planet:e,moon:t,type:n}=a,s=a.economy,i="("+a.axes+")",o="- "+a.pilot,r=t?`[[${t}]]`:`[[${e}]]`,l=s.includes("Black")?"{{BlackMarket}}":"Data Unavailable"==s?"★ Economy (Abandoned)":s.split(" ")[0]+" Economy";let u=l,p="";switch(n){case"Freighter":p=o;break;case"Interceptor":u=`${l}<br>${r}`,p=i;break;case"Living Ship":u=r,p=i}return`<br>${u} ${p}`}function G(){const{type:e}=a;return`Eisvana ${e} Catalog`}function se(){return"Catalog"}function ae(){const e=["","Rear view of ship","Rear view of freighter","Inventory screen","NPC freighter captain","NPC ship pilot","Analysis Visor Scan","Crash site","Moon Page","Planet Page","System Page"],t=["moon","planet","crash"],n=["npc","freighter"],s={"Living Ship":n,Interceptor:n,Freighter:["ship",...t],default:["freighter",...t]};if(!a.moon){const t=e.findIndex((e=>e.toLowerCase().includes("moon")));e.splice(t,1)}const i=s[a.type]??s.default,o=structuredClone(e).map((e=>e.toLowerCase()));for(let t=e.length-1;t>=0;t--){const n=o[t];i.some((e=>n.includes(e)))&&e.splice(t,1)}a.galleryArray=e}function ie(){M(o.input.typeInput,"change"),M(o.input.systemInput,"input")}c.Explorer.miscParts=structuredClone(c.Explorer.accessories),c.Explorer.miscParts.push("Antenna","Spike","Dish","Sensor"),Object.freeze(c);const oe=[{element:"nameInput",func:()=>{w(),_(),k()}},{element:"systemInput",func:()=>m()},{element:["planetInput","moonInput","axesInput"],func:()=>{m(),v()}},{element:"portalglyphsInput",func:()=>m()},{element:"typeInput",func:function(){R(),E(),F(),A(),N(),w(),L(),m(),x(),v(),B(this.value,"enPrefix")}},{element:"subtypeInput",func:()=>{D(),W(),$(),w(),m(),x()}},{element:["inventoryInput","economyInput"],func:()=>{L(),v(),H()}},{element:"pilotInput",func:()=>v()},{element:["discoveredInput","discoveredlinkInput"],func:()=>ee()},{element:"researchTeam",func:()=>x()},{element:["mainColourInput","secColourInput","secPartsInput","accessoriesInput","miscPartsInput"],func:()=>w()},{element:"hideAppearanceButton",handler:"click",func:function(){Q("appearance",this)}}],re={input:{economyInput:"wealthInput"}};f.albumTypeExternal=()=>se(),f.albumOtherExternal=()=>ne(),f.albumLinkGen=()=>G(),f.generateGalleryArray=()=>ae(),f.resetExternal=()=>ie(),Y("galleryExplanationExternal","\n\tThere is a preferred order of gallery pictures, depending on ship type:\n\t<div class='dialog-center is-flex-wrap-wrap mt-2' style='gap: 1rem'>\n\t\t<div>\n\t\t\t<div class='has-text-weight-bold'>Normal Ships:</div>\n\t\t\t<ol class='dialog-list mt-1'>\n\t\t\t\t<li>Rear view of ship</li>\n\t\t\t\t<li>Inventory screen</li>\n\t\t\t\t<li>NPC Ship Pilot</li>\n\t\t\t\t<li>Analysis Visor Scan</li>\n\t\t\t\t<li>System Page</li>\n\t\t\t</ol>\n\t\t</div>\n\t\t<div>\n\t\t\t<div class='has-text-weight-bold'>Living Ships/Interceptors:</div>\n\t\t\t<ol class='dialog-list mt-1'>\n\t\t\t\t<li>Rear view of ship</li>\n\t\t\t\t<li>Inventory screen</li>\n\t\t\t\t<li>Analysis Visor Scan</li>\n\t\t\t\t<li>Crash site</li>\n\t\t\t\t<li>Planet/Moon Page</li>\n\t\t\t\t<li>System Page</li>\n\t\t\t</ol>\n\t\t</div>\n\t\t<div>\n\t\t\t<div class='has-text-weight-bold'>Freighters:</div>\n\t\t\t<ol class='dialog-list mt-1'>\n\t\t\t\t<li>Rear view of freighter</li>\n\t\t\t\t<li>Inventory screen</li>\n\t\t\t\t<li>NPC freighter captain</li>\n\t\t\t\t<li>Analysis Visor Scan</li>\n\t\t\t\t<li>System Page</li>\n\t\t\t</ol>\n\t\t</div>\n\t</div>"),q(re),Z(oe),E(),F(),A(),L(),R(),m(),x(),N(),B(o.input.typeInput.value,"enPrefix"),te(),k();
