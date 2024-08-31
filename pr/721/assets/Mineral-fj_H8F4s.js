const __vite__mapDeps=(e,l=__vite__mapDeps,a=l.f||(l.f=["assets/gallery-3Tj4Da4q.js","assets/runtime-dom.esm-bundler-BpPV8KCp.js","assets/links-C4y6QV6d.js","assets/links-CPwEWuzm.css","assets/Explanation.vue_vue_type_script_setup_true_lang-Dsx8iwta.js","assets/_plugin-vue_export-helper-DlAUqK2U.js","assets/gallery-Bf4dc25L.css"]))=>e.map((e=>a[e]));import{u as ve,_ as fe,a as _e}from"./main-B5tIMQ_X.js";import{w as ye,a as G}from"./runtime-dom.esm-bundler-BpPV8KCp.js";import{a as y,w as H,b as u,c as he,d as ge,e as be,_ as x,S as Ne,f as Ve,g as De,h as Se,I as ke,i as Me,O as Ie,j as we}from"./index-CTMBK8H-.js";import{O as K,V as c,T as ee,aW as t,aY as e,b1 as n,P as Te,M as Q,N as V,Q as Pe,m as X,L as $e,b2 as I,b3 as Ee,a_ as _,b4 as i,U as l,aZ as d,b5 as s,a$ as w,b0 as Y,aX as Z,b6 as T,b7 as q,b8 as J}from"./links-C4y6QV6d.js";import{_ as Ce}from"./Explanation.vue_vue_type_script_setup_true_lang-Dsx8iwta.js";import{m as P}from"./mineralDatalists-CKshA0d-.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const Ue=e("div",null,"| galaxy = Eissentam",-1),Fe=e("div",null,"| civilized = Eisvana",-1),xe=K({__name:"MineralInfobox",props:{mineralName:{},image:{},region:{},systemName:{},planetName:{},moonName:{},content:{},formation:{},notes:{},elemPrimary:{},elemSecondary:{},polymorphic:{},discoveredlinkName:{},discoveredName:{},discDate:{},mode:{},researchteam:{},release:{}},setup:l=>(l,a)=>(c(),ee(y,{"is-single-line":!1,"template-name":"Mineral infobox"},{default:t((()=>[e("div",null,"| name = "+n(l.mineralName),1),e("div",null,"| image = "+n(l.image||"nmsMisc_NotAvailable.png"),1),Ue,e("div",null,"| region = "+n(l.region),1),e("div",null,"| system = "+n(l.systemName),1),e("div",null,"| planet = "+n(l.planetName),1),e("div",null,"| moon = "+n(l.moonName),1),e("div",null,"| content = "+n(l.content),1),e("div",null,"| formation = "+n(l.formation),1),e("div",null,"| notes = "+n(l.notes),1),e("div",null,"| element_primary = "+n(l.elemPrimary),1),e("div",null,"| element_secondary = "+n(l.elemSecondary),1),e("div",null,"| polymorphic = "+n(l.polymorphic),1),Fe,e("div",null,"| discoveredlink = "+n(l.discoveredlinkName),1),e("div",null,"| discovered = "+n(l.discoveredName),1),e("div",null,"| discovered_on = "+n(l.discDate),1),e("div",null,"| mode = "+n(l.mode),1),e("div",null,"| researchteam = "+n(l.researchteam),1),e("div",null,"| release = "+n(l.release),1)])),_:1}))}),Ae=e("label",{for:"discDate"},"Discovery date:",-1),Oe=e("br",null,null,-1),Be=e("p",null,"Information about the player.",-1),Re=e("label",{for:"appearance"},"Appearance:",-1),Le=e("div",{id:"galleryInput"},null,-1),ze=e("div",{id:"galleryItems",class:"gallery-items-wrapper"},null,-1),We=e("br",null,null,-1),je=e("div",null,"==Summary==",-1),Ge=e("br",null,null,-1),He=e("br",null,null,-1),Qe=e("div",null,"==Alias Names==",-1),Xe={key:1},Ye=e("br",null,null,-1),Ze=e("div",null,"==Discovery Menu==",-1),qe=e("br",null,null,-1),Je=e("div",null,"==Location==",-1),Ke={key:0},el=e("br",null,null,-1),ll=e("div",null,"==Resources==",-1),al=e("br",null,null,-1),nl=e("div",null,"==Additional Information==",-1),ol={key:2},tl=e("br",null,null,-1),il=e("div",{id:"gallery"},null,-1),vl=K({__name:"Mineral",setup(a){const o=Te(),{fullArticleElement:r}=Q(o),m=ve(),p=V(null);Pe((()=>{r.value=p.value,X("galleryArray",["","Scanner view","Discovery Menu"]),X("galleryExplanationExternal","\n\tThere is a preferred order of gallery pictures:\n\t<div class='dialog-center'>\n\t\t<ol class='dialog-list'>\n\t\t\t<li>Scanner view</li>\n\t\t\t<li>Discovery Menu</li>\n\t\t</ol>\n \t</div>"),fe((()=>import("./gallery-3Tj4Da4q.js")),__vite__mapDeps([0,1,2,3,4,5,6]))}));const v=$e(),{release:f,name:h,orgName:g,image:b,discovered:N,discoveredlink:D,system:k,planet:U,moon:j,glyphs:M,content:S,formation:C,notes:E,elements:A,polymorphic:F,discDate:B,docBy:K,researchteam:O,region:z,sanitisedStrings:L,docBySentence:W,appearance:R}=Q(v),$=I((()=>J(F.value))),le=I((()=>J(S.value))),ae=V(""),ne=V("");H(C,(()=>ae.value=q(C.value,P.formationData)),{debounce:500}),H(E,(()=>ne.value=q(E.value,P.mineralNotesData)),{debounce:500}),Ee((()=>{A.value[0]===A.value[1]&&(A.value[1]="")}));const te=I((()=>{const e=parseInt(S.value);if(!isNaN(e))return e+"%"})),ie=I((()=>A.value.filter(Boolean))),oe=V(""),se=V(!1);function re(){const{isValidData:e,message:l}=_e();oe.value=l.value,se.value=!e.value}return(a,o)=>(c(),_(w,null,[i(ke,null,{default:t((()=>[e("form",{class:"table",onSubmit:o[12]||(o[12]=ye((()=>{}),["prevent"]))},[i(u,{label:"Mineral name:",identifier:"nameInput",modelValue:l(h),"onUpdate:modelValue":o[0]||(o[0]=e=>d(h)?h.value=e:null),img:"mineral/mineralName"},{heading:t((()=>[s("Mineral Name")])),content:t((()=>[s("Enter exactly as seen in game. Watch out for 0 (zero) and O (o).")])),default:t((()=>[s(" Enter exactly as seen in game. Watch out for 0 (zero) and O (o). ")])),_:1},8,["modelValue"]),i(u,{label:"Original name before uploading (if available):",identifier:"orgNameInput",modelValue:l(g),"onUpdate:modelValue":o[1]||(o[1]=e=>d(g)?g.value=e:null)},null,8,["modelValue"]),i(he),i(u,{label:"Name of the System:",identifier:"systemInput",modelValue:l(k),"onUpdate:modelValue":o[2]||(o[2]=e=>d(k)?k.value=e:null)},null,8,["modelValue"]),i(u,{label:"Name of the planet:",identifier:"planetInput",modelValue:l(U),"onUpdate:modelValue":o[3]||(o[3]=e=>d(U)?U.value=e:null)},{default:t((()=>[s(" Planet Name OR the planet circled by the moon where the mineral can be found. ")])),_:1},8,["modelValue"]),i(u,{label:"Name of the moon (if mineral is on moon):",identifier:"moonInput",modelValue:l(j),"onUpdate:modelValue":o[4]||(o[4]=e=>d(j)?j.value=e:null)},{default:t((()=>[s(" If the mineral is located on a moon. Leave blank if the mineral is on a planet. ")])),_:1},8,["modelValue"]),i(ge),i(u,{modelValue:l(S),"onUpdate:modelValue":o[5]||(o[5]=e=>d(S)?S.value=e:null),error:le.value,label:"Metal content:",identifier:"content",img:"mineral/content",maxlength:"2"},{heading:t((()=>[s("Metal Content")])),content:t((()=>[s("Found on the mineral scan.")])),default:t((()=>[s(" Found on the mineral scan. ")])),_:1},8,["modelValue","error"]),i(u,{modelValue:l(C),"onUpdate:modelValue":o[6]||(o[6]=e=>d(C)?C.value=e:null),error:ae.value,label:"Formation process:",identifier:"formation",list:"formationData",img:"mineral/formation"},{heading:t((()=>[s("Formation Process")])),content:t((()=>[s("Found on the mineral scan.")])),default:t((()=>[s(" Found on the mineral scan. ")])),_:1},8,["modelValue","error"]),i(u,{modelValue:l(E),"onUpdate:modelValue":o[7]||(o[7]=e=>d(E)?E.value=e:null),error:ne.value,label:"Notes:",identifier:"notes",list:"mineralNotesData",img:"mineral/notes"},{heading:t((()=>[s("Notes")])),content:t((()=>[s("Found on the mineral scan.")])),default:t((()=>[s(" Found on the mineral scan. ")])),_:1},8,["modelValue","error"]),i(u,{modelValue:l(F),"onUpdate:modelValue":o[8]||(o[8]=e=>d(F)?F.value=e:null),error:$.value,identifier:"polymorphic",label:"Polymorphic (number of instances):",maxlength:"2"},{heading:t((()=>[s("Polymorphic")])),content:t((()=>[s(' Sometimes multiple mineral models have the same name. This is called "Polymorphism". Enter the number of how many different mineral models had this name. ')])),default:t((()=>[s(" How many different models of this mineral were discovered. ")])),_:1},8,["modelValue","error"]),(c(),_(w,null,Y(2,(e=>i(be,{index:e-1,resources:l(P).mineralResources,item:"mineral"},null,8,["index","resources"]))),64)),i(x,null,{label:t((()=>[Ae,i(Ce,{img:"mineral/discDate"},{heading:t((()=>[s("Discovery Date")])),content:t((()=>[s(" Found on the mineral scan. "),Oe,s(" The exact discovery timestamp is displayed on the top left. ")])),default:t((()=>[s(" Found on the mineral scan. ")])),_:1})])),input:t((()=>[Z(e("input",{"onUpdate:modelValue":o[9]||(o[9]=e=>d(B)?B.value=e:null),id:"discDate",type:"date"},null,512),[[G,l(B)]])])),_:1}),i(Ne,null,{default:t((()=>[i(x,null,{default:t((()=>[Be])),_:1}),i(Ve),i(u,{label:"Documenter if not discoverer:",identifier:"docBy",modelValue:l(K),"onUpdate:modelValue":o[10]||(o[10]=e=>d(K)?K.value=e:null)},null,8,["modelValue"]),i(De)])),_:1}),i(x,null,{default:t((()=>[Re,Z(e("textarea",{"onUpdate:modelValue":o[11]||(o[11]=e=>d(R)?R.value=e:null),id:"appearance",placeholder:"This mineral is a <size> <colour> <type>."},null,512),[[G,l(R)]])])),_:1})],32),Le,ze,i(Se)])),_:1}),i(Me,{open:se.value,"onUpdate:open":o[13]||(o[13]=e=>se.value=e),"error-message":oe.value},null,8,["open","error-message"]),i(Ie,{onMousedown:re},{default:t((()=>[e("div",{ref_key:"wikiText",ref:p,class:"wikiText",id:"fullArticle",onMouseup:o[14]||(o[14]=(...e)=>l(m).getSelectedText&&l(m).getSelectedText(...e)),onTouchend:o[15]||(o[15]=(...e)=>l(m).getSelectedText&&l(m).getSelectedText(...e))},[e("div",null,[i(y,{"template-name":"Version"},{default:t((()=>[s(n(l(f)),1)])),_:1})]),e("div",null,[i(y,{"template-name":"Eisvana"})]),i(xe,{"mineral-name":l(L).name,image:l(b),region:l(z),systemName:l(L).system,planetName:l(L).planet,moonName:l(L).moon,content:te.value,formation:l(C),notes:l(E),"elem-primary":l(A)[0],"elem-secondary":l(A)[1],polymorphic:l(F),"disc-date":l(B).replaceAll("-","/"),"discovered-name":l(L).discovered,"discoveredlink-name":l(L).discoveredlink,researchteam:l(O),release:l(f)},null,8,["mineral-name","image","region","systemName","planetName","moonName","content","formation","notes","elem-primary","elem-secondary","polymorphic","disc-date","discovered-name","discoveredlink-name","researchteam","release"]),e("div",null,"'''"+n(l(L).name)+"''' is a variety of mineral.",1),We,je,e("div",null,"'''"+n(l(L).name)+"''' is a type of [[mineral]]. "+n(l(L).appearance),1),Ge,l(F)?(c(),_(w,{key:0},[e("div",null,[i(y,{"template-name":"Polymorphicmineral"},{default:t((()=>[s(n(l(F)),1)])),_:1})]),He],64)):T("",!0),Qe,l(g)?(c(),_("div",Xe,[i(y,{"template-name":"aliasc"},{default:t((()=>[s("text=Original|name="+n(l(L).orgName),1)])),_:1})])):T("",!0),e("div",null,[i(y,{"template-name":"aliasc"},{default:t((()=>[s("text=Current|name="+n(l(L).name),1)])),_:1})]),Ye,Ze,e("div",null,"* Metal Content: "+n(te.value),1),e("div",null,"* Formation Process: "+n(l(C)),1),e("div",null,"* Notes: "+n(l(E)),1),qe,Je,e("div",null,[s(" It can be found on the "),l(j)?(c(),_("span",Ke,"[[moon]] [["+n(l(L).moon)+"]] of the",1)):T("",!0),s(" [[planet]] [["+n(l(L).planet)+"]] in the [["+n(l(L).system)+"]] [[star system]]. ",1)]),e("div",null,[i(y,{"template-name":"CoordGlyphConvert"},{default:t((()=>[s(n(l(M)),1)])),_:1})]),el,ll,e("div",null," This mineral provides the "+n(ie.value.length>1?"resources":"resource")+" "+n(ie.value.map((e=>`[[${e}]]`)).join(" and "))+" when mined. ",1),al,nl,l(K)&&l(K)!==l(D)&&l(K)!==l(N)?(c(),_("div",ol,"Documented by "+n(l(W)),1)):T("",!0),tl,il],544)])),_:1}),(c(!0),_(w,null,Y(l(P),((e,l)=>(c(),ee(we,{identifier:l,data:e},null,8,["identifier","data"])))),256))],64))}});export{vl as default};
