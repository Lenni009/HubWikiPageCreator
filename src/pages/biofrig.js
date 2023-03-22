function startupFunctions(){numberStats(),locHubNr(),locGalaxy(),generateCatalogue(),addInfo(),albumFunctions()}const frigateElementFunctions={civ:["locGalaxy(); addInfo(); appearance(); locHubNr(); generateCatalogue()",null,!0],nameInput:["albumName(); appearance()"],costInput:["numberStats(this)"],combatInput:["numberStats(this)"],explorationInput:["numberStats(this)"],industrialInput:["numberStats(this)"],tradeInput:["numberStats(this)"],fuelInput:["numberStats(this)"],portalglyphsInput:["locHubNr()",null,!0],mainColourInput:["appearance()"],secColourInput:["appearance()"],tentacleInput:["appearance()"],researchTeam:["addInfo()"],classInput:["albumOther()"]};function locHubNr(){globalElements.output.HubNr.innerText=regNr(pageData.region)}function locGalaxy(){const a=pageData.civShort,t=HubGal(a);wikiCode(t,"locGalaxy")}function addInfo(){const a=docByResearchteam("GHSH"),t=pageData.catalogue;globalElements.output.addInfo.innerText=`[[${t}]]${a}`}function generateCatalogue(){const a=pageData.civShort,t=pageData.civilized,e=(()=>{switch(a){case"GHub":case"EisHub":return shortenGHub(a);case"CalHub":return t}})();pageData.catalogue=`${e} Organic Frigate Catalog`}function appearance(){const a=pageData.name,t=pageData.mainColour,e=pageData.secColour,n=pageData.tentacles,r=globalElements.input.appearanceInput;if(!(t.trim()||e.trim()||n.trim()))return;const l=`${a} is ${t.trim()?`${enPrefix(t)} ${t.trim()}`:""} organic frigate${e.trim()?` with ${e} accents`:""} with ${n}.`;r.value=l,wikiCode(r)}function albumOtherExternal(){return`{{Class|${pageData.class}}}`}function albumItemTypeExternal(){return"Organic Frigate Catalog"}function generateGalleryArray(){pageData.galleryArray=["","Rear view of frigate","Interaction screen","System Page"]}function galleryExplanationExternal(){return"There is a preferred order of gallery pictures:\n\t<div class='dialog-center'>\n\t\t<ol class='dialog-list'>\n\t\t\t<li>Rear view of frigate</li>\n\t\t\t<li>Interaction screen</li>\n\t\t\t<li>System Page</li>\n\t\t</ol>\n \t</div>"}assignElementFunctions(frigateElementFunctions);
