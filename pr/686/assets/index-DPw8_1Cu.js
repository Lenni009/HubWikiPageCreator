import{a0 as s,t as e,H as l,u as o,f as u,v as c,g as r,l as i}from"./links-KR6A22Gr.js";import{l as m,f as d,s as f,a as p,b as n,c as h,w as t,d as g,e as w,g as I,h as E,r as S,i as B}from"./index-BlVYbWnB.js";import{f as b}from"./floraDatalists-Bz-O6jQ9.js";import{m as k}from"./mineralDatalists-CKshA0d-.js";const F=[{element:["systemInput","portalglyphsInput"],func:()=>m()},{element:"faunaNumberInput",func:()=>d()},{element:"sentinelInput",func:()=>{f(),p()}},{element:["descriptionInput","wormmaxdepthInput"],func:function(){n(this)}},{element:"sandwormInput",func:()=>h()},{element:"sandwormImgUpload",handler:"change",func:function(){s(this)}},{element:"autoSpawn",func:()=>t()},{element:"addResourceButton",handler:"click",func:function(){g(this)}},{element:"faunaToggleButton",handler:"click",func:function(){e("fauna",this)}},{element:"floraToggleButton",handler:"click",func:function(){e("flora",this)}},{element:"mineralToggleButton",handler:"click",func:function(){e("mineral",this)}},{element:"addFaunaButton",handler:"click",func:function(){w(this)}},{element:"addFloraButton",handler:"click",func:function(){I(this)}},{element:"addMineralButton",handler:"click",func:function(){E(this)}}],v={input:{resourceInputs:"resourceInputs",autoSpawn:"autoSpawnInput"},output:{resourceBullets:"resourceBullets",creatures:"creatures",plants:"plants",minerals:"minerals",sandworm:"sandworm"}};i.resetExternal=()=>document.dispatchEvent(new Event("pageReset")),document.addEventListener("pageReset",(()=>S()));const M=[b,k];M.forEach((n=>l(n))),o(v),u(F),c(r.input.resourceInputs.querySelector("button"),"click"),n(),t(),B();
