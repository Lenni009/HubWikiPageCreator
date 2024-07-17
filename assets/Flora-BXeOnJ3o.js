const __vite__fileDeps=["assets/gallery-es730Bl3.js","assets/runtime-dom.esm-bundler-DJ5zsBvr.js","assets/links-BeZFHNqG.js","assets/links-DURnzgEz.css","assets/Explanation.vue_vue_type_script_setup_true_lang-DXjn_GXr.js","assets/_plugin-vue_export-helper-DlAUqK2U.js","assets/gallery-Bf4dc25L.css"],__vite__mapDeps=e=>e.map((e=>__vite__fileDeps[e]));import{u as ge,_ as he,a as ye}from"./main-CPef0cGD.js";import{v as be,w as Ve,a as le}from"./runtime-dom.esm-bundler-DJ5zsBvr.js";import{_ as A,a as g,w as U,b as De,c as p,d as Ne,e as Se,f as ke,S as Ie,g as $e,h as we,i as Te,I as Ee,j as Pe,O as Ue,k as Fe}from"./index-CjYRp_PS.js";import{O as H,L as ne,M as W,T as m,R as X,aU as a,aV as j,aW as l,aX as u,aY as c,aZ as $,a_ as G,a$ as t,S as e,P as Me,N as _,b0 as Ae,m as ae,b1 as oe,b2 as Ce,b3 as s,b4 as i,b5 as F,b6 as M,b7 as xe}from"./links-BeZFHNqG.js";import{f as I}from"./floraDatalists-Bz-O6jQ9.js";import{_ as Be}from"./Explanation.vue_vue_type_script_setup_true_lang-DXjn_GXr.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const Re=l("label",null,"In which biome is this plant?",-1),Oe=["value"],Le=H({__name:"BiomeInput",setup(n){const o=ne(),{biome:s}=W(o),i=["Lush","Barren","Dead","Exotic","Mega Exotic","Scorched","Frozen","Toxic","Irradiated","Marsh","Volcanic"];return(n,o)=>(m(),X(A,null,{label:a((()=>[Re])),input:a((()=>[j(l("select",{"onUpdate:modelValue":o[0]||(o[0]=e=>u(s)?s.value=e:null)},[(m(),c($,null,G(i,(e=>l("option",{value:e},t(e),9,Oe))),64))],512),[[be,e(s)]])])),_:1}))}}),ze=l("div",null,"| galaxy = Eissentam",-1),We=l("div",null,"| civilized = Eisvana",-1),je=H({__name:"FloraInfobox",props:{plantName:{},region:{},image:{},systemName:{},planetName:{},moonName:{},type:{},biome:{},polymorphic:{},age:{},roots:{},nutrients:{},notes:{},elemPrimary:{},elemSecondary:{},discoveredlinkName:{},discoveredName:{},discDate:{},mode:{},researchteam:{},release:{}},setup:e=>(e,n)=>(m(),X(g,{"is-single-line":!1,"template-name":"Flora infobox"},{default:a((()=>[l("div",null,"| name = "+t(e.plantName),1),l("div",null,"| image = "+t(e.image||"nmsMisc_NotAvailable.png"),1),ze,l("div",null,"| region = "+t(e.region),1),l("div",null,"| system = "+t(e.systemName),1),l("div",null,"| planet = "+t(e.planetName),1),l("div",null,"| moon = "+t(e.moonName),1),We,l("div",null,"| type = "+t(e.type),1),l("div",null,"| biome = "+t(e.biome),1),l("div",null,"| polymorphic = "+t(e.polymorphic),1),l("div",null,"| age = "+t(e.age),1),l("div",null,"| roots = "+t(e.roots),1),l("div",null,"| nut_source = "+t(e.nutrients),1),l("div",null,"| notes = "+t(e.notes),1),l("div",null,"| element_primary = "+t(e.elemPrimary),1),l("div",null,"| element_secondary = "+t(e.elemSecondary),1),l("div",null,"| discoveredlink = "+t(e.discoveredlinkName),1),l("div",null,"| discovered = "+t(e.discoveredName),1),l("div",null,"| discovered_on = "+t(e.discDate),1),l("div",null,"| mode = "+t(e.mode),1),l("div",null,"| researchteam = "+t(e.researchteam),1),l("div",null,"| release = "+t(e.release),1)])),_:1}))}),Ge=l("label",{for:"discDate"},"Discovery date:",-1),He=l("br",null,null,-1),Xe=l("p",null,"Information about the player.",-1),Ye=l("label",{for:"appearance"},"Appearance:",-1),Ze=l("div",{id:"galleryInput"},null,-1),qe=l("div",{id:"galleryItems",class:"gallery-items-wrapper"},null,-1),Je=l("br",null,null,-1),Ke=l("div",null,"==Summary==",-1),Qe=l("br",null,null,-1),el=l("br",null,null,-1),ll=l("div",null,"==Alias Names==",-1),al={key:1},ol=l("br",null,null,-1),nl=l("div",null,"==Location==",-1),tl={key:0},sl=l("br",null,null,-1),il=l("div",null,"==Resources==",-1),rl={key:2},dl={key:3},ul=l("br",null,null,-1),ml=l("div",null,"==Additional Information==",-1),pl={key:4},cl=l("br",null,null,-1),fl=l("div",{id:"gallery"},null,-1),Dl=H({__name:"Flora",setup(n){const o=Me(),{fullArticleElement:r}=W(o),d=ge(),v=_(null);Ae((()=>{r.value=v.value,ae("galleryArray",["","Scanner view","Discovery Menu"]),ae("galleryExplanationExternal","\n\tThere is a preferred order of gallery pictures:\n\t<div class='dialog-center'>\n\t\t<ol class='dialog-list'>\n\t\t\t<li>Scanner view</li>\n\t\t\t<li>Discovery Menu</li>\n\t\t</ol>\n \t</div>"),he((()=>import("./gallery-es730Bl3.js")),__vite__mapDeps([0,1,2,3,4,5,6]))}));const f=ne(),{release:h,name:y,orgName:b,image:V,discovered:D,discoveredlink:N,system:x,planet:S,moon:k,glyphs:T,type:w,biome:B,age:E,roots:P,nutrients:z,notes:O,elements:R,polymorphic:H,discDate:C,docBy:L,researchteam:q,appearance:Z,region:J,docBySentence:K,sanitisedStrings:Y}=W(f),Q=oe((()=>xe(H.value))),ee=_(""),te=_(""),se=_(""),ie=_("");U(E,(()=>ee.value=M(E.value,I.ageData)),{debounce:500}),U(P,(()=>te.value=M(P.value,I.rootData)),{debounce:500}),U(z,(()=>se.value=M(z.value,I.nutSourceData)),{debounce:500}),U(O,(()=>ie.value=M(O.value,I.floraNotesData)),{debounce:500}),Ce((()=>{R.value[0]===R.value[1]&&(R.value[1]="")}));const re=oe((()=>R.value.filter(Boolean))),ue=_(""),de=_(!1);function me(){const{isValidData:e,message:l}=ye();ue.value=l.value,de.value=!e.value}return(n,o)=>(m(),c($,null,[s(Ee,null,{default:a((()=>[l("form",{class:"table",onSubmit:o[13]||(o[13]=Ve((()=>{}),["prevent"]))},[s(De),s(p,{label:"Plant name:",identifier:"nameInput",modelValue:e(y),"onUpdate:modelValue":o[0]||(o[0]=e=>u(y)?y.value=e:null),img:"flora/floraName"},{heading:a((()=>[i("Plant Name")])),content:a((()=>[i("Enter exactly as seen in game. Watch out for 0 (zero) and O (o).")])),default:a((()=>[i(" Enter exactly as seen in game. Watch out for 0 (zero) and O (o). ")])),_:1},8,["modelValue"]),s(p,{label:"Original name before uploading (if available):",identifier:"orgNameInput",modelValue:e(b),"onUpdate:modelValue":o[1]||(o[1]=e=>u(b)?b.value=e:null)},null,8,["modelValue"]),s(Ne),s(p,{label:"Name of the System:",identifier:"systemInput",modelValue:e(x),"onUpdate:modelValue":o[2]||(o[2]=e=>u(x)?x.value=e:null)},null,8,["modelValue"]),s(p,{label:"Name of the planet:",identifier:"planetInput",modelValue:e(S),"onUpdate:modelValue":o[3]||(o[3]=e=>u(S)?S.value=e:null)},{default:a((()=>[i(" Planet Name OR the planet circled by the moon where the plant can be found. ")])),_:1},8,["modelValue"]),s(p,{label:"Name of the moon (if plant is on moon):",identifier:"moonInput",modelValue:e(k),"onUpdate:modelValue":o[4]||(o[4]=e=>u(k)?k.value=e:null)},{default:a((()=>[i(" If the plant is located on a moon. Leave blank if the plant is on a planet. ")])),_:1},8,["modelValue"]),s(Se),s(Le),s(p,{modelValue:e(E),"onUpdate:modelValue":o[5]||(o[5]=e=>u(E)?E.value=e:null),error:ee.value,label:"Age:",identifier:"age",list:"ageData",img:"flora/age"},{heading:a((()=>[i("Age")])),content:a((()=>[i("Found on the flora scan.")])),default:a((()=>[i(" Found on the flora scan. ")])),_:1},8,["modelValue","error"]),s(p,{modelValue:e(P),"onUpdate:modelValue":o[6]||(o[6]=e=>u(P)?P.value=e:null),error:te.value,label:"Root structure:",identifier:"roots",list:"rootData",img:"flora/roots"},{heading:a((()=>[i("Root Structure")])),content:a((()=>[i("Found on the flora scan.")])),default:a((()=>[i(" Found on the flora scan. ")])),_:1},8,["modelValue","error"]),s(p,{modelValue:e(z),"onUpdate:modelValue":o[7]||(o[7]=e=>u(z)?z.value=e:null),error:se.value,label:"Nutrient source:",identifier:"nutSource",list:"nutSourceData",img:"flora/nutSource"},{heading:a((()=>[i("Nutrient Source")])),content:a((()=>[i("Found on the flora scan.")])),default:a((()=>[i(" Found on the flora scan. ")])),_:1},8,["modelValue","error"]),s(p,{modelValue:e(O),"onUpdate:modelValue":o[8]||(o[8]=e=>u(O)?O.value=e:null),error:ie.value,label:"Notes:",identifier:"notes",list:"floraNotesData",img:"flora/notes"},{heading:a((()=>[i("Notes")])),content:a((()=>[i("Found on the flora scan.")])),default:a((()=>[i(" Found on the flora scan. ")])),_:1},8,["modelValue","error"]),s(p,{modelValue:e(H),"onUpdate:modelValue":o[9]||(o[9]=e=>u(H)?H.value=e:null),error:Q.value,identifier:"polymorphic",label:"Polymorphic (number of instances):",maxlength:"2"},{heading:a((()=>[i("Polymorphic")])),content:a((()=>[i(' Sometimes multiple flora models have the same name. This is called "Polymorphism". Enter the number of how many different flora models had this name. ')])),default:a((()=>[i(" How many different models of this flora were discovered. ")])),_:1},8,["modelValue","error"]),(m(),c($,null,G(2,(l=>s(ke,{index:l-1,resources:e(I).floraResources,item:"flora"},null,8,["index","resources"]))),64)),s(A,null,{label:a((()=>[Ge,s(Be,{img:"flora/discDate"},{heading:a((()=>[i("Discovery Date")])),content:a((()=>[i(" Found on the flora scan. "),He,i(" The exact discovery timestamp is displayed on the top left. ")])),default:a((()=>[i(" Found on the flora scan. ")])),_:1})])),input:a((()=>[j(l("input",{"onUpdate:modelValue":o[10]||(o[10]=e=>u(C)?C.value=e:null),id:"discDate",type:"date"},null,512),[[le,e(C)]])])),_:1}),s(Ie,null,{default:a((()=>[s(A,null,{default:a((()=>[Xe])),_:1}),s($e),s(p,{label:"Documenter if not discoverer:",identifier:"docBy",modelValue:e(L),"onUpdate:modelValue":o[11]||(o[11]=e=>u(L)?L.value=e:null)},null,8,["modelValue"]),s(we)])),_:1}),s(A,null,{default:a((()=>[Ye,j(l("textarea",{"onUpdate:modelValue":o[12]||(o[12]=e=>u(Z)?Z.value=e:null),id:"appearance",placeholder:"This flora is a <size> <colour> <type>."},null,512),[[le,e(Z)]])])),_:1})],32),Ze,qe,s(Te)])),_:1}),s(Pe,{open:de.value,"onUpdate:open":o[14]||(o[14]=e=>de.value=e),"error-message":ue.value},null,8,["open","error-message"]),s(Ue,{onMousedown:me},{default:a((()=>[l("div",{ref_key:"wikiText",ref:v,class:"wikiText",id:"fullArticle",onMouseup:o[15]||(o[15]=(...l)=>e(d).getSelectedText&&e(d).getSelectedText(...l)),onTouchend:o[16]||(o[16]=(...l)=>e(d).getSelectedText&&e(d).getSelectedText(...l))},[l("div",null,[s(g,{"template-name":"Version"},{default:a((()=>[i(t(e(h)),1)])),_:1})]),l("div",null,[s(g,{"template-name":"Eisvana"})]),s(je,{"plant-name":e(Y).name,image:e(V),region:e(J),"system-name":e(Y).system,"planet-name":e(Y).planet,"moon-name":e(Y).moon,type:e(w),biome:e(B),polymorphic:e(H),age:e(E),roots:e(P),nutrients:e(z),notes:e(O),"elem-primary":e(R)[0],"elem-secondary":e(R)[1],"disc-date":e(C).replaceAll("-","/"),"discovered-name":e(Y).discovered,"discoveredlink-name":e(Y).discoveredlink,researchteam:e(q),release:e(h)},null,8,["plant-name","image","region","system-name","planet-name","moon-name","type","biome","polymorphic","age","roots","nutrients","notes","elem-primary","elem-secondary","disc-date","discovered-name","discoveredlink-name","researchteam","release"]),l("div",null,"'''"+t(e(Y).name)+"''' is a species of flora.",1),Je,Ke,l("div",null,"'''"+t(e(Y).name)+"''' is a [[species]] of [[flora]]. "+t(e(Y).appearance),1),Qe,e(H)?(m(),c($,{key:0},[l("div",null,[s(g,{"template-name":"Polymorphic"},{default:a((()=>[i(t(e(H)),1)])),_:1})]),el],64)):F("",!0),ll,e(b)?(m(),c("div",al,[s(g,{"template-name":"aliasc"},{default:a((()=>[i("text=Original|name="+t(e(Y).orgName),1)])),_:1})])):F("",!0),l("div",null,[s(g,{"template-name":"aliasc"},{default:a((()=>[i("text=Current|name="+t(e(Y).name),1)])),_:1})]),ol,nl,l("div",null,[i(" It can be found on the "),e(k)?(m(),c("span",tl,"[[moon]] [["+t(e(Y).moon)+"]] of the",1)):F("",!0),i(" [[planet]] [["+t(e(Y).planet)+"]] in the [["+t(e(Y).system)+"]] [[star system]]. ",1)]),l("div",null,[s(g,{"template-name":"CoordGlyphConvert"},{default:a((()=>[i(t(e(T)),1)])),_:1})]),sl,il,re.value.length?(m(),c("div",rl," This flora provides the "+t(re.value.length>1?"resources":"resource")+" "+t(re.value.map((e=>`[[${e}]]`)).join(" and "))+" when harvested. ",1)):(m(),c("div",dl,"This flora provides no harvestable resources.")),ul,ml,e(L)&&e(L)!==e(N)&&e(L)!==e(D)?(m(),c("div",pl,"Documented by "+t(e(K)),1)):F("",!0),cl,fl],544)])),_:1}),(m(!0),c($,null,G(e(I),((e,l)=>(m(),X(Fe,{identifier:l,data:e},null,8,["identifier","data"])))),256))],64))}});export{Dl as default};