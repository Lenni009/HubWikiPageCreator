import{t as e,m as n,a as d,F as f,D as g,b as S,g as a,c as r}from"./main-849ec3e1.js";import{r as i,e as t,a as y,b as s,s as l,c,w as o,d as u,f as I,g as m,h as p,t as E,m as M,i as D,j as C}from"./index-5e532b13.js";import"./creatureData-46652f69.js";import"./startup-fcf01eb9.js";const b=[{element:"portalglyphsInput",func:()=>{i(),t(),y()}},{element:["planetInput","moonInput"],func:()=>s()},{element:"nameInput",func:()=>t()},{element:"factionInput",func:()=>{l(),c()}},{element:["economybuyInput","economysellInput"],func:function(){o(this,1)}},{element:["wealthInput","conflictInput"],func:function(){u(this)}},{element:"platformInput",func:()=>I()},{element:"systemExtras",func:function(){m(this)}},{element:"merchantSearch",func:function(){p(this)}},{element:"addTradeablesButton",handler:"click",func:()=>E()},{element:"hideMTMerchantButton",handler:"click",func:function(){e("MTMerchant",this)}},{element:"hideSSMerchantButton",handler:"click",func:function(){e("SSMerchant",this)}},{element:"hideECMerchantButton",handler:"click",func:function(){e("ECMerchant",this)}},{element:"hideESMerchantButton",handler:"click",func:function(){e("ESMerchant",this)}},{element:"hideSDMerchantButton",handler:"click",func:function(){e("SDMerchant",this)}},{element:"ssFileUpload",handler:"change",func:function(){n(this)}},{element:"navFileUpload",handler:"change",func:function(){n(this)}}],x={input:{planetInput:"planetNumInput",moonInput:"moonNumInput",terminalInputs:"terminalInputs",systemExtras:"systemExtras",merchantSearch:"merchant-search"},output:{tradeTerminal:"tradeTerminal",planets:"planets",Freighters:"Freighters",Derelict:"Derelict",Organic:"Organic",Starships:"Starships",MTs:"MTs"}},T={terminal:["Star Silk","Comet Droplets","Ion Sphere","Decrypted User Data","Teleport Coordinators","Nanotube Crate","Self-Repairing Heridium","Optical Solvent","5D Torus","Superconducting Fibre","De-Scented Bottles","Neutron Microscope","Instability Injector","Organic Piping","Neural Duct","Dirt","Unrefined Pyrite Grease","Bromide Salt","Polychromatic Zirconium","Re-latticed Arc Crystal","Enormous Metal Cog","Non-Stick Piston","Mesh Decouplers","Holographic Crankshaft","Vector Compressors","Decommissioned Circuits","Welding Soap","Ion Capacitor","Autonomous Positioning Unit","Quantum Accelerator","Spark Canister","Industrial-Grade Battery","Ohmic Gel","Experimental Power Fluid","Fusion Core"]};d("galleryExplanationExternal","\nThere is a preferred order of pictures:\n\t<div class='dialog-center'>\n\t\t<ol class='dialog-list'>\n\t\t\t<li>System Exploration Guide</li>\n\t\t\t<li>System Page</li>\n\t\t\t<li>Default SS Multi-Tool</li>\n\t\t</ol>\n\t</div>"),r.resetExternal=()=>D(),r.generateGalleryArray=()=>C(),f(T),g(x),S(b),c(),M(),i(),l(),s(),t(),m(),o(),u(a.input.wealthInput),a.input.merchantSearch.forEach((e=>p(e)));
