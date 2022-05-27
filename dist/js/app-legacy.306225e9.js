(function(){"use strict";var t={3442:function(t,i,e){e(6992),e(8674),e(9601),e(7727);var o=e(8935),n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"app"}},[e("nav",{staticClass:"navbar-1"},[e("router-link",{attrs:{to:"/"},nativeOn:{click:function(i){return t.changeHome()}}},[t._v("Home")]),t._v(" | "),e("router-link",{attrs:{to:"/pranzo"},nativeOn:{click:function(i){return t.changePranzo()}}},[t._v("Pranzo")]),t._v(" | "),e("router-link",{attrs:{to:"/cena"},nativeOn:{click:function(i){return t.changeCena()}}},[t._v("Cena")]),t._v(" | "),e("router-link",{attrs:{to:"/Drink"},nativeOn:{click:function(i){return t.changeDrink()}}},[t._v("Drink")])],1),e("router-view")],1)},a=[],s=function(){var t=this,i=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("section",[e("div",{staticClass:"container-fluid"},[e("ul",[e("li",[t._v("Coperto: 2.5")]),e("li",[t._v("Allergeni")]),e("li",[t._v("N.B. supplemento da €1,00 a €3,50")])])])])}],l={name:"PreFooter"},c=l,u=e(1001),d=(0,u.Z)(c,s,r,!1,null,null,null),h=d.exports,m={components:{PreFooter:h},data:function(){return{page:"",route:window.location.hash}},mounted:function(){console.log(window.location.hash);var t=document.querySelector(".navbar-1");"#/"==window.location.hash?t.classList.add("ceruleo"):"#/pranzo"==window.location.hash?t.classList.add("giallo"):"#/cena"==window.location.hash?t.classList.add("rosso"):"#/Drink"==window.location.hash&&t.classList.add("viola")},methods:{changeHome:function(){var t=document.querySelector(".navbar-1");t.classList.add("ceruleo"),t.classList.contains("giallo")&&t.classList.remove("giallo"),t.classList.contains("viola")&&t.classList.remove("viola"),t.classList.contains("rosso")&&t.classList.remove("rosso")},changePranzo:function(){var t=document.querySelector(".navbar-1");console.log(t),t.classList.add("giallo"),t.classList.contains("ceruleo")&&t.classList.remove("ceruleo"),t.classList.contains("viola")&&t.classList.remove("viola"),t.classList.contains("rosso")&&t.classList.remove("rosso")},changeCena:function(){var t=document.querySelector(".navbar-1");t.classList.add("rosso"),t.classList.contains("giallo")&&t.classList.remove("giallo"),t.classList.contains("viola")&&t.classList.remove("viola"),t.classList.contains("ceruleo")&&t.classList.remove("ceruleo")},changeDrink:function(){var t=document.querySelector(".navbar-1");t.classList.add("viola"),t.classList.contains("giallo")&&t.classList.remove("giallo"),t.classList.contains("ceruleo")&&t.classList.remove("ceruleo"),t.classList.contains("rosso")&&t.classList.remove("rosso")}}},p=m,v=(0,u.Z)(p,n,a,!1,null,null,null),f=v.exports,g=(e(1539),e(8783),e(3948),e(2809)),z=function(){var t=this,i=t.$createElement;t._self._c;return t._m(0)},w=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"home .container-fluid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col d-flex justify-content-center align-items-center"},[t._v(" Pagina iniziale ")])])])}],k={name:"HomeView",components:{}},_=k,C=(0,u.Z)(_,z,w,!1,null,null,null),b=C.exports,A=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{},[e("div",{staticClass:"nav-2 nav-pranzo container-fluid"},[t._m(0),e("div",{staticClass:"row mt-3"},[e("div",{staticClass:"col-12 d-flex justify-content-center"},[e("ul",{staticClass:"list-unstyled text-center row w-75 "},[e("li",{staticClass:"col-12 col-md elemento",on:{click:function(i){return t.setAll()}}},[t._v("Tutto")]),e("li",{staticClass:"col-12 col-md elemento",on:{click:function(i){return t.setInsalata()}}},[t._v("Insalate")]),e("li",{staticClass:"col-12 col-md elemento",on:{click:function(i){return t.setPiatti()}}},[t._v("Piatti")]),e("li",{staticClass:"col-12 col-md elemento",on:{click:function(i){return t.setDessert()}}},[t._v("Dessert")]),e("li",{staticClass:"col-12 col-md elemento",on:{click:function(i){return t.setBevande()}}},[t._v("Bevande")])])])])]),e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"container-fluid"},t._l(t.piatti2,(function(i,o){return e("div",{key:o,staticClass:"row"},[e("div",{directives:[{name:"show",rawName:"v-show",value:i.title,expression:"piatto.title"}],staticClass:"col-12 text-center text-md-start mt-4 mb-4"},[e("h1",[t._v(t._s(i.title))])]),e("div",{staticClass:"col-12 col-md-4"},[e("h3",[t._v(t._s(i.nome))])]),e("div",{staticClass:"col-12 col-md-4"},[null==i.condimenti?e("h5"):e("h5",[t._v("Condimenti")]),e("p",[t._v(t._s(i.condimenti))])]),e("div",{staticClass:"col-12 col-md-4 mb-4"},[e("div",[t._v("€ "+t._s(i.prezzo))])])])})),0)])]),e("PreFooter",{staticClass:"prefooter"})],1)},y=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[t._v("Cosa cerchi?")])])}],P=(e(7327),e(4916),e(4765),e(1038),{name:"PranzoView",components:{PreFooter:h},data:function(){return{elementi:null,setter:"All",piatti2:[],piatti:[{nome:"Bresaola",categoria:"insalata",condimenti:"iceberg, radicchio,valeriana, datterino, grana, bresaola",prezzo:10,title:"Insalate",class:"bg-success"},{nome:"Tonno",categoria:"insalata",condimenti:"iceberg,rucola, valeriana, tonno, olive, mozzarella",prezzo:10},{nome:"Greca",categoria:"insalata",condimenti:"iceberg,cipolla,olive,cetriolo,datterino,feta,salsa yogurt",prezzo:8},{nome:"Caprese",categoria:"piatti",condimenti:"datterino, fior di latte, basilico",prezzo:8,title:"I Nostri piatti"},{nome:"La Magra",categoria:"piatti",condimenti:"carpaccio di fassona, rucola, grana, vinagrette al limone, olio evo",prezzo:13},{nome:"L'Adige",categoria:"piatti",condimenti:"carne salada “cotta”, fagioli borlotti, cipolla, olio evo",prezzo:13},{nome:"Un 'po' di tartarre",categoria:"piatti",condimenti:"tartare di fassona con mango e chicchi di melograno, senape",prezzo:15},{nome:"Sampieri",categoria:"piatti",condimenti:"tartare di salmone, avocado, erba cipollina, vinagrette al limone",prezzo:15},{nome:"Semifreddo “croccante al pistacchio”",categoria:"dessert",prezzo:7,title:"Dessert"},{nome:"Geometrie di cioccolato e pere",categoria:"dessert",prezzo:7},{nome:"Semifreddo “croccante alla mandorla”",categoria:"dessert",prezzo:6},{nome:"Semifreddo “agrumi di sicilia”",categoria:"dessert",prezzo:6},{nome:"acqua naturale 0,5cl",categoria:"bevande",prezzo:1,title:"Bevande"},{nome:"acqua frizzante 0,5cl",categoria:"bevande",prezzo:1},{nome:"succo di frutta ace, pesca, ananas",categoria:"bevande",prezzo:2}]}},mounted:function(){var t=this;this.piatti2=this.piatti.filter((function(i){return i.categoria==t.setter})),console.log("new",this.piatti2),"All"==this.setter&&(this.piatti2=this.piatti);var i=window.location.protocol+"//"+window.location.host+"/"+window.location.pathname+window.location.search;console.log(window.location.protocol),console.log(window.location.host),console.log(window.location.pathname),console.log(window.location.search),console.log("ok"),console.log(i);var e=window.location.protocol+"//"+window.location.host+"/#/pranzo";console.log(e),console.log(window.location.hash),(window.location.hash="#/pranzo")&&console.log("ok");var o=document.querySelectorAll(".elemento");console.log("elementi",o),console.log(Array.from(o));var n=Array.from(o);console.log(n),this.elementi=n},methods:{setAll:function(){var t=this;this.setter="All",this.piatti2=this.piatti.filter((function(i){return i.categoria==t.setter})),console.log("new",this.piatti2),"All"==this.setter&&(this.piatti2=this.piatti),this.elementi[0].classList.add("active-element")},setInsalata:function(){var t=this;this.setter="insalata",this.piatti2=this.piatti.filter((function(i){return i.categoria==t.setter})),console.log("new",this.piatti2),"All"==this.setter&&(this.piatti2=this.piatti)},setPiatti:function(){var t=this;this.setter="piatti",this.piatti2=this.piatti.filter((function(i){return i.categoria==t.setter})),console.log("new",this.piatti2),"All"==this.setter&&(this.piatti2=this.piatti)},setDessert:function(){var t=this;this.setter="dessert",this.piatti2=this.piatti.filter((function(i){return i.categoria==t.setter})),console.log("new",this.piatti2),"All"==this.setter&&(this.piatti2=this.piatti)},setBevande:function(){var t=this;this.setter="bevande",this.piatti2=this.piatti.filter((function(i){return i.categoria==t.setter})),console.log("new",this.piatti2),"All"==this.setter&&(this.piatti2=this.piatti)}}}),L=P,x=(0,u.Z)(L,A,y,!1,null,null,null),D=x.exports,S=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{},[e("div",{staticClass:"nav-2 nav-cena container-fluid"},[t._m(0),e("div",{staticClass:"row mt-3"},[e("div",{staticClass:"col-12 d-flex justify-content-center"},[e("ul",{staticClass:"list-unstyled text-center row w-75"},[e("li",{staticClass:"col-12 col-md ",on:{click:function(i){return t.setAll()}}},[t._v("Tutto")]),e("li",{staticClass:"col-12 col-md ",on:{click:function(i){return t.setPizzeClassiche()}}},[t._v("Pizze Classiche")]),e("li",{staticClass:"col-12 col-md ",on:{click:function(i){return t.setPizzeSpeciali()}}},[t._v("Pizze Speciali")]),e("li",{staticClass:"col-12 col-md ",on:{click:function(i){return t.setPizzeMare()}}},[t._v("Pizze di Mare")]),e("li",{staticClass:"col-12 col-md ",on:{click:function(i){return t.setPiattiUnici()}}},[t._v("Piatti Unici")]),e("li",{staticClass:"col-12 col-md ",on:{click:function(i){return t.setFrigitoria()}}},[t._v("Frigitoria")])])])])]),e("div",{staticClass:"container-fluid"},t._l(t.piatti2,(function(i,o){return e("div",{key:o,staticClass:"row"},[e("div",{directives:[{name:"show",rawName:"v-show",value:i.title,expression:"piatto.title"}],staticClass:"col-12 text-center text-md-start mt-3"},[e("h1",[t._v(t._s(i.title))])]),e("div",{staticClass:"col-12 col-md-4"},[e("h3",[t._v(t._s(i.nome))])]),e("div",{staticClass:"col-12 col-md-4 "},[null==i.condimenti?e("h5"):e("h5",[t._v("Condimenti")]),e("p",[t._v(t._s(i.condimenti))])]),e("div",{staticClass:"col-12 col-md-4 mb-4"},[e("div",[t._v("€ "+t._s(i.prezzo))])])])})),0),e("PreFooter",{staticClass:"prefooter"})],1)},E=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[t._v("Cosa cerchi?")])])}],O={name:"CenaView",components:{PreFooter:h},data:function(){return{setter:"All",piatti2:[],piatti:[{nome:"Biancaneve",categoria:"pizza",condimenti:"mozzarella, olio",prezzo:5,title:"Pizze Classiche"},{nome:"Margherita",categoria:"pizza",condimenti:"salsa di pomodoro,mozzarella,basilico,olio evo",prezzo:6},{nome:"Norma",categoria:"pizza",condimenti:"salsa di pomodoro,mozzarella,melanzana fritta, ricotta salata, olio",prezzo:7.5},{nome:"sapori siculi ",categoria:"pizza speciale",condimenti:"salsa di pomodoro, mozzarella, salsiccia fresca, finocchietto selvatico, mollica condita, olio",prezzo:10,title:"Pizze Speciali"},{nome:"Carciofina",categoria:"pizza speciale",condimenti:"mozzarella, crema di carciofi, speck, datterino",prezzo:10},{nome:"la spiaggetta ",categoria:"pizza mare",condimenti:"salsa di pomodoro, polipo*, gamberetti*, cozze*,gamberoni*, prezzemolo, olio",prezzo:10,title:"Pizze Di Mare"},{nome:"IL VEGETARIANO",categoria:"piatti unici",condimenti:"datterino confit, radicchio grigliato, melanzana grigliata, burrata di bufala, basilico,crostoni, olio evo",prezzo:13,title:"Piatti unici"},{nome:"partatine fritte",categoria:"frigitoria",prezzo:4,title:"Frigitoria"}]}},mounted:function(){var t=this;this.piatti2=this.piatti.filter((function(i){return i.categoria==t.setter})),console.log("new",this.piatti2),"All"==this.setter&&(this.piatti2=this.piatti)},methods:{setAll:function(){var t=this;this.setter="All",this.piatti2=this.piatti.filter((function(i){return i.categoria==t.setter})),console.log("new",this.piatti2),"All"==this.setter&&(this.piatti2=this.piatti)},setPizzeClassiche:function(){var t=this;this.setter="pizza",this.piatti2=this.piatti.filter((function(i){return i.categoria==t.setter})),console.log("new",this.piatti2),"All"==this.setter&&(this.piatti2=this.piatti)},setPizzeSpeciali:function(){var t=this;this.setter="pizza speciale",this.piatti2=this.piatti.filter((function(i){return i.categoria==t.setter})),console.log("new",this.piatti2),"All"==this.setter&&(this.piatti2=this.piatti)},setPizzeMare:function(){var t=this;this.setter="pizza mare",this.piatti2=this.piatti.filter((function(i){return i.categoria==t.setter})),console.log("new",this.piatti2),"All"==this.setter&&(this.piatti2=this.piatti)},setPiattiUnici:function(){var t=this;this.setter="piatti unici",this.piatti2=this.piatti.filter((function(i){return i.categoria==t.setter})),console.log("new",this.piatti2),"All"==this.setter&&(this.piatti2=this.piatti)},setFrigitoria:function(){var t=this;this.setter="frigitoria",this.piatti2=this.piatti.filter((function(i){return i.categoria==t.setter})),console.log("new",this.piatti2),"All"==this.setter&&(this.piatti2=this.piatti)}},watch:function(){}},F=O,j=(0,u.Z)(F,S,E,!1,null,null,null),B=j.exports,T=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("div",{staticClass:"nav-2 nav-drink container-fluid"},[t._m(0),e("div",{staticClass:"row mt-3"},[e("div",{staticClass:"col-12 d-flex justify-content-center"},[e("ul",{staticClass:"list-unstyled text-center row w-75"},[e("li",{staticClass:"col-12 col-md ",on:{click:function(i){return t.setAll()}}},[t._v("Tutto")]),e("li",{staticClass:"col-12 col-md ",on:{click:function(i){return t.setNostriDrink()}}},[t._v("I nostri Drink")]),e("li",{staticClass:"col-12 col-md ",on:{click:function(i){return t.setClassici()}}},[t._v("Classici")]),e("li",{staticClass:"col-12 col-md ",on:{click:function(i){return t.setBevande()}}},[t._v("Bevande")]),e("li",{staticClass:"col-12 col-md ",on:{click:function(i){return t.setAmari()}}},[t._v("Amari")]),e("li",{staticClass:"col-12 col-md ",on:{click:function(i){return t.setDistillati()}}},[t._v("Distillati")]),e("li",{staticClass:"col-12 col-md ",on:{click:function(i){return t.setGin()}}},[t._v("Gin")])])])])]),e("div",{staticClass:"container-fluid"},t._l(t.drinks2,(function(i,o){return e("div",{key:o,staticClass:"row"},[e("div",{directives:[{name:"show",rawName:"v-show",value:i.title,expression:"drink.title"}],staticClass:"col-12 text-center text-md-start my-3"},[e("h1",[t._v(t._s(i.title))])]),e("div",{staticClass:"col-12 col-md-4 bg-fire "},[e("h3",[t._v(t._s(i.nome))])]),e("div",{staticClass:"col-12 col-md-4 "},[null==i.condimenti?e("h5"):e("h5",[t._v("Ingredienti")]),e("p",[t._v(t._s(i.condimenti))])]),e("div",{staticClass:"col-12 col-md-4 "},[e("div",[t._v("€ "+t._s(i.prezzo))])])])})),0),e("PreFooter",{staticClass:"prefooter"})],1)},N=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[t._v(" Cosa cerchi? ")])])}],$={name:"DrinkVue",components:{PreFooter:h},data:function(){return{setter:"All",drinks2:[],drinks:[{nome:"Blue summer",categoria:"nostri",condimenti:"(lime, cordial lime & blu curacao, rum blanco)",prezzo:8,title:"I nostri drink"},{nome:"Green Woods",categoria:"nostri",condimenti:"(lime,zucchero all’alloro, melone,gin, dash di midori)",prezzo:8},{nome:"Strawberry Basil...Forever",categoria:"nostri",condimenti:"(zucchero,lime, fragole, vodka al basilico, soda al pompelmo)",prezzo:8},{nome:"Butter Trid",categoria:"nostri",condimenti:"(limone,ananas,bourbon al burro, dash di angostura)",prezzo:8},{nome:"Fresh Alexander",categoria:"nostri",condimenti:"(limone,orzata,brandy,stillabunt,bitter al cioccolato, ginger beer)",prezzo:8},{nome:"Negroni",categoria:"classici",condimenti:"(bitter campari, vermouth rosso, gin)",prezzo:6,title:"Drink Classici"},{nome:"Americano",categoria:"classici",condimenti:"(bitter campari, vermouth rosso, soda)",prezzo:6},{nome:"Forst 1857 33cl",categoria:"bevande",prezzo:3,title:"Bevande"},{nome:"amaro del capo",categoria:"amari",prezzo:3,title:"Amari"},{nome:"grappa barricata",categoria:"distillati",prezzo:3,title:"Distillati"},{nome:"tanqueray",categoria:"gin",prezzo:6,title:"Gin"}]}},mounted:function(){var t=this;this.drinks2=this.drinks.filter((function(i){return i.categoria==t.setter})),console.log("new",this.drinks2),"All"==this.setter&&(this.drinks2=this.drinks);var i=window.location.protocol+"//"+window.location.host+"/"+window.location.pathname+window.location.search;console.log(i)},methods:{setAll:function(){var t=this;this.setter="All",this.drinks2=this.drinks.filter((function(i){return i.categoria==t.setter})),console.log("new",this.drinks2),"All"==this.setter&&(this.drinks2=this.drinks)},setNostriDrink:function(){var t=this;this.setter="nostri",this.drinks2=this.drinks.filter((function(i){return i.categoria==t.setter})),console.log("new",this.drinks2),"All"==this.setter&&(this.drinks2=this.drinks)},setClassici:function(){var t=this;this.setter="classici",this.drinks2=this.drinks.filter((function(i){return i.categoria==t.setter})),console.log("new",this.drinks2),"All"==this.setter&&(this.drinks2=this.drinks)},setBevande:function(){var t=this;this.setter="bevande",this.drinks2=this.drinks.filter((function(i){return i.categoria==t.setter})),console.log("new",this.drinks2),"All"==this.setter&&(this.drinks2=this.drinks)},setAmari:function(){var t=this;this.setter="amari",this.drinks2=this.drinks.filter((function(i){return i.categoria==t.setter})),console.log("new",this.drinks2),"All"==this.setter&&(this.drinks2=this.drinks)},setDistillati:function(){var t=this;this.setter="distillati",this.drinks2=this.drinks.filter((function(i){return i.categoria==t.setter})),console.log("new",this.drinks2),"All"==this.setter&&(this.drinks2=this.drinks)},setGin:function(){var t=this;this.setter="gin",this.drinks2=this.drinks.filter((function(i){return i.categoria==t.setter})),console.log("new",this.drinks2),"All"==this.setter&&(this.drinks2=this.drinks)}}},Z=$,q=(0,u.Z)(Z,T,N,!1,null,null,null),I=q.exports;o.Z.use(g.Z);var M=[{path:"/",name:"home",component:b},{path:"/about",name:"about",component:function(){return e.e(443).then(e.bind(e,5830))}},{path:"/pranzo",name:"Pranzo",component:D},{path:"/cena",name:"Cena",component:B},{path:"/drink",name:"Drink",component:I}],G=new g.Z({routes:M}),V=G;e(4232);o.Z.config.productionTip=!1,new o.Z({router:V,render:function(t){return t(f)}}).$mount("#app")}},i={};function e(o){var n=i[o];if(void 0!==n)return n.exports;var a=i[o]={exports:{}};return t[o](a,a.exports,e),a.exports}e.m=t,function(){var t=[];e.O=function(i,o,n,a){if(!o){var s=1/0;for(u=0;u<t.length;u++){o=t[u][0],n=t[u][1],a=t[u][2];for(var r=!0,l=0;l<o.length;l++)(!1&a||s>=a)&&Object.keys(e.O).every((function(t){return e.O[t](o[l])}))?o.splice(l--,1):(r=!1,a<s&&(s=a));if(r){t.splice(u--,1);var c=n();void 0!==c&&(i=c)}}return i}a=a||0;for(var u=t.length;u>0&&t[u-1][2]>a;u--)t[u]=t[u-1];t[u]=[o,n,a]}}(),function(){e.n=function(t){var i=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(i,{a:i}),i}}(),function(){e.d=function(t,i){for(var o in i)e.o(i,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:i[o]})}}(),function(){e.f={},e.e=function(t){return Promise.all(Object.keys(e.f).reduce((function(i,o){return e.f[o](t,i),i}),[]))}}(),function(){e.u=function(t){return"js/about-legacy.9dc52f58.js"}}(),function(){e.miniCssF=function(t){}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)}}(),function(){var t={},i="spiaggetta:";e.l=function(o,n,a,s){if(t[o])t[o].push(n);else{var r,l;if(void 0!==a)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==i+a){r=d;break}}r||(l=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,e.nc&&r.setAttribute("nonce",e.nc),r.setAttribute("data-webpack",i+a),r.src=o),t[o]=[n];var h=function(i,e){r.onerror=r.onload=null,clearTimeout(m);var n=t[o];if(delete t[o],r.parentNode&&r.parentNode.removeChild(r),n&&n.forEach((function(t){return t(e)})),i)return i(e)},m=setTimeout(h.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=h.bind(null,r.onerror),r.onload=h.bind(null,r.onload),l&&document.head.appendChild(r)}}}(),function(){e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){e.p="/"}(),function(){var t={143:0};e.f.j=function(i,o){var n=e.o(t,i)?t[i]:void 0;if(0!==n)if(n)o.push(n[2]);else{var a=new Promise((function(e,o){n=t[i]=[e,o]}));o.push(n[2]=a);var s=e.p+e.u(i),r=new Error,l=function(o){if(e.o(t,i)&&(n=t[i],0!==n&&(t[i]=void 0),n)){var a=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.src;r.message="Loading chunk "+i+" failed.\n("+a+": "+s+")",r.name="ChunkLoadError",r.type=a,r.request=s,n[1](r)}};e.l(s,l,"chunk-"+i,i)}},e.O.j=function(i){return 0===t[i]};var i=function(i,o){var n,a,s=o[0],r=o[1],l=o[2],c=0;if(s.some((function(i){return 0!==t[i]}))){for(n in r)e.o(r,n)&&(e.m[n]=r[n]);if(l)var u=l(e)}for(i&&i(o);c<s.length;c++)a=s[c],e.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return e.O(u)},o=self["webpackChunkspiaggetta"]=self["webpackChunkspiaggetta"]||[];o.forEach(i.bind(null,0)),o.push=i.bind(null,o.push.bind(o))}();var o=e.O(void 0,[998],(function(){return e(3442)}));o=e.O(o)})();
//# sourceMappingURL=app-legacy.306225e9.js.map