(function(){"use strict";var t={4230:function(t,e,i){var a=i(6369),s=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"wrapper"},[e("div",{staticClass:"page"},[e("Header"),e("main",{staticClass:"page__content"},[e("router-view")],1),e("Footer")],1)])])},r=[],c=(i(7658),function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"header"},[e("div",{staticClass:"header__logo"},[e("router-link",{attrs:{to:"/main"}},[e("div",{staticClass:"main-nav__logo-img"},[e("img",{attrs:{src:i(9726),alt:"logo"}})])])],1),e("div",{staticClass:"header_main-nav"},[e("ul",{staticClass:"main-nav__list"},t._l(t.navItem,(function(i){return e("li",{key:i.link,staticClass:"main-nav__item"},[e("router-link",{staticClass:"main-nav__link",attrs:{to:i.link}},[t._v(t._s(i.label))])],1)})),0)])])])}),n=[],o={data(){return{navItem:[{label:"Главная",link:"/main"},{label:"Каталог",link:"/catalog"}]}}},l=o,u=i(1001),d=(0,u.Z)(l,c,n,!1,null,null,null),f=d.exports,p=function(){var t=this;t._self._c;return t._m(0)},h=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"footer"},[e("div",{staticClass:"footer__name"},[t._v("Филимонов Евгений Алексеевич")]),e("div",{staticClass:"footer__git"},[e("a",{attrs:{href:"https://github.com/xdr3am/etton-test-task",target:"_blank"}},[t._v("https://github.com/xdr3am/etton-test-task")])])])])}],_={},m=(0,u.Z)(_,p,h,!1,null,null,null),g=m.exports,v={components:{Header:f,Footer:g},mounted(){this.$router.push("/main")}},C=v,k=(0,u.Z)(C,s,r,!1,null,null,null),b=k.exports,w=i(2631),y=function(){var t=this;t._self._c;return t._m(0)},x=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"main__container"},[e("div",{staticClass:"container"},[e("div",{staticClass:"main__box"},[e("h1",{staticClass:"main__title"},[t._v(" Главная")])])])])}],F={},$=(0,u.Z)(F,y,x,!1,null,"94c9bd98",null),j=$.exports,P=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"catalog"},[e("div",{staticClass:"catalog__container"},[e("div",{staticClass:"div"}),e("h1",[t._v("Каталог")]),e("button",{staticClass:"btn btn--main catalog-btn-filter",on:{click:function(e){t.showFilter=!t.showFilter}}},[t._v("Фильтры")]),t.showFilter?e("div",{staticClass:"catalog__filter"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"catalog__filter-input-name",attrs:{placeholder:"Поиск"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),e("select",{directives:[{name:"model",rawName:"v-model",value:t.breed,expression:"breed"}],staticClass:"catalog__filter-input-select",attrs:{placeholder:""},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.breed=e.target.multiple?i:i[0]}}},[e("option",{staticClass:"catalog__filter-input-options",attrs:{value:"all"}},[t._v("Все породы")]),t._l(t.options,(function(t){return e("option",{key:t.id,attrs:{label:t.label},domProps:{value:t.id}})}))],2),e("div",{staticClass:"catalog__filter-checkbox-container"},[e("div",{staticClass:"catalog__filter-checkbox-row"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.freeCheck,expression:"freeCheck"}],attrs:{type:"checkbox",id:"free",value:"free"},domProps:{checked:Array.isArray(t.freeCheck)?t._i(t.freeCheck,"free")>-1:t.freeCheck},on:{change:function(e){var i=t.freeCheck,a=e.target,s=!!a.checked;if(Array.isArray(i)){var r="free",c=t._i(i,r);a.checked?c<0&&(t.freeCheck=i.concat([r])):c>-1&&(t.freeCheck=i.slice(0,c).concat(i.slice(c+1)))}else t.freeCheck=s}}}),e("label",{attrs:{for:"free"}},[t._v("Бесплатные")])]),e("div",{staticClass:"catalog__filter-checkbox-row"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.freeCheck,expression:"freeCheck"}],attrs:{type:"checkbox",id:"notFree",value:"notFree"},domProps:{checked:Array.isArray(t.freeCheck)?t._i(t.freeCheck,"notFree")>-1:t.freeCheck},on:{change:function(e){var i=t.freeCheck,a=e.target,s=!!a.checked;if(Array.isArray(i)){var r="notFree",c=t._i(i,r);a.checked?c<0&&(t.freeCheck=i.concat([r])):c>-1&&(t.freeCheck=i.slice(0,c).concat(i.slice(c+1)))}else t.freeCheck=s}}}),e("label",{attrs:{for:"notFree"}},[t._v("Не бесплатные")])])]),e("button",{staticClass:"btn btn--main",on:{click:t.filtering}},[t._v("Применить")]),"all"!==t.breed||t.name||t.freeCheck.length?e("button",{staticClass:"btn btn--alt",on:{click:t.clearFiltering}},[t._v("Сброс")]):t._e()]):t._e(),e("div",{staticClass:"catalog__card-container"},[e("div",{staticClass:"catalog__card-sort"},[e("button",{staticClass:"catalog__card-sort-btn",class:[t.sortStatus?"catalog__card-sort-img-rotate":"catalog__card-sort-img-rotate-1"],on:{click:t.sorting}},[t._m(0)]),e("div",{staticClass:"catalog__card-sort-title"},[t._v("По цене")])]),e("ul",{staticClass:"catalog__list"},t._l(t.cats,(function(i){return e("li",{key:i.id,staticClass:"catalog__item"},[e("router-link",{staticClass:"catalog__card",attrs:{to:"/cat/"+i.id}},[e("div",{staticClass:"catalog__img-container"},[e("img",{attrs:{src:i.img?i.img:"https://catherineasquithgallery.com/uploads/posts/2021-12/1639688886_146-catherineasquithgallery-com-p-kotiki-rozovii-fon-467.jpg"}})]),e("div",{staticClass:"catalog__item-title"},[e("p",[t._v(t._s(i.title))])]),i.price?e("div",{staticClass:"catalog__item-price"},[e("p",[t._v(t._s(i.price))])]):e("div",{staticClass:"catalog__item-price-free"},[t._v("Бесплатно")])])],1)})),0)])])])])},A=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"catalog__card-sort-img"},[e("img",{attrs:{id:"img",src:i(8475)}})])}],Z={data(){return{cats:[],options:[],breed:"all",freeCheck:[],name:"",sortStatus:!1,showFilter:!0}},mounted(){this.fetch()},methods:{fetch(){const t=this.$store.getters.filter_params;this.name=t.name,this.breed=t.breed,this.freeCheck=t.freeCheck,this.filtering(),this.cats=this.$store.getters.cats,this.options=this.$store.getters.options},filtering(){const t={};t.name=this.name,t.breed=this.breed,t.freeCheck=this.freeCheck,this.$store.commit("GET_FILTER_PARAMS",t),this.$store.commit("GET_FILTERED_CATS",t),this.cats=this.$store.getters.cats},clearFiltering(){this.name="",this.breed="all",this.freeCheck=[],this.filtering()},sorting(){this.sortStatus?this.cats.sort(((t,e)=>t.price-e.price)):this.cats.sort(((t,e)=>e.price-t.price)),this.sortStatus=!this.sortStatus}}},T=Z,E=(0,u.Z)(T,P,A,!1,null,null,null),O=E.exports,S=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"cat__back"},[e("button",{staticClass:"cat__back-btn",on:{click:function(e){return t.$router.go(-1)}}},[e("img",{attrs:{src:i(7911)}})]),e("p",{staticClass:"cat__back-btn-title"},[t._v("Вернуться в каталог")])]),e("div",{staticClass:"cat__card"},[e("div",{staticClass:"cat__card-img"},[e("img",{attrs:{src:t.cats[this.$route.params.id-1].img?t.cats[this.$route.params.id-1].img:"https://catherineasquithgallery.com/uploads/posts/2021-12/1639688886_146-catherineasquithgallery-com-p-kotiki-rozovii-fon-467.jpg"}})]),e("div",{staticClass:"cat__card-title"},[e("div",{staticClass:"cat__card-name"},[t._v(t._s(t.cats[this.$route.params.id-1].title))]),t.cats[this.$route.params.id-1].price?e("div",{staticClass:"cat__card-price"},[t._v(t._s(t.cats[this.$route.params.id-1].price))]):e("div",{staticClass:"cat__card-price-free"},[t._v("Бесплатно")])])])])},I=[],R={data(){return{catId:"",cats:[],cat:[]}},watch:{$route(){this.catId=this.$route}},computed:{},mounted(){this.fetch(),this.filteringCat()},methods:{async fetch(){this.cats=this.$store.state.products},filteringCat(){const t=this.$route.params.id;this.cat=this.cats.filter((e=>e.id===t))}}},L=R,q=(0,u.Z)(L,S,I,!1,null,null,null),G=q.exports;a.ZP.use(w.ZP);const N=[{path:"/main/",component:j},{path:"/catalog/",component:O},{path:"/cat/:id",component:G}],M=new w.ZP({mode:"history",base:"/",routes:N});var z=M,D=i(3822);a.ZP.use(D.ZP);var H=new D.ZP.Store({state:{products:[{id:1,title:"Полосатый котик",img:"https://www.purina.ru/sites/default/files/2021-10/amer-korotkoserst-1.jpg",categories:[2,3,4],price:14900},{id:2,img:"https://www.purina.ru/sites/default/files/2021-10/angora-3.jpg",title:"Красивая белая кошка с очень длинным именем Lorem100",categories:[3,4],price:3900},{id:3,title:"Бесплатный котик",categories:[1],price:0},{id:4,title:"Ушастый дьявол",img:"https://www.purina.ru/sites/default/files/2021-10/kerl2_1_0.jpg",categories:[2],price:6900},{id:5,title:"Черный котик на черном фоне",img:"https://www.purina.ru/sites/default/files/2021-10/bombay-3.jpg",categories:[1,4],price:0},{id:6,title:"Где лапки?",img:"https://www.purina.ru/sites/default/files/2021-10/manchkin-1.jpg",categories:[2,3],price:1900},{id:7,title:"Какой то дорогой кот",img:"https://www.purina.ru/sites/default/files/2021-10/cornish-reks-2.jpg",categories:[3],price:39900},{id:8,img:"https://www.purina.ru/sites/default/files/2021-10/mein-kun-1.jpg",title:"Большой котик",categories:[2,4],price:7900},{id:9,title:"Котик без фотографии",categories:[1,4],price:300},{id:10,title:"Персидская булочка",img:"https://www.purina.ru/sites/default/files/2021-10/persidskaya3.jpg",categories:[2,4],price:11900},{id:11,title:"Гепард комнатный",img:"https://www.purina.ru/sites/default/files/2021-10/savanna-2.jpg",categories:[2,4],price:21900},{id:12,title:"Самый красивый котик",categories:[1,4],price:0}],cats:[],options:[{id:1,label:"Беспородные"},{id:2,label:"Породистые"},{id:3,label:"Титулованные"},{id:4,label:"Пусечки бусечки"}],filter_params:{breed:"all",freeCheck:[],name:""}},getters:{options:t=>t.options,cats:t=>t.cats,filter_params:t=>t.filter_params},mutations:{GET_FILTER_PARAMS(t,e){t.filter_params=e},GET_FILTERED_CATS(t,e){t.cats=t.products;let i=[];i="all"!==e.breed?t.products.filter((t=>t.categories.includes(e.breed))):t.products;let a=[];a=i.filter((t=>t.title.includes(e.name)));let s=[];s="free"===e.freeCheck[0]&&1===e.freeCheck.length?a.filter((t=>0===t.price)):"notFree"===e.freeCheck[0]&&1===e.freeCheck.length?a.filter((t=>0!==t.price)):(e.freeCheck.length,a),t.cats=s}},actions:{}});a.ZP.config.productionTip=!1,new a.ZP({router:z,store:H,render:t=>t(b)}).$mount("#app")},7911:function(t,e,i){t.exports=i.p+"img/back.19dfb4a1.svg"},9726:function(t,e,i){t.exports=i.p+"img/etton-logo.36cfc280.svg"},8475:function(t,e,i){t.exports=i.p+"img/sort.110ae245.svg"}},e={};function i(a){var s=e[a];if(void 0!==s)return s.exports;var r=e[a]={exports:{}};return t[a](r,r.exports,i),r.exports}i.m=t,function(){var t=[];i.O=function(e,a,s,r){if(!a){var c=1/0;for(u=0;u<t.length;u++){a=t[u][0],s=t[u][1],r=t[u][2];for(var n=!0,o=0;o<a.length;o++)(!1&r||c>=r)&&Object.keys(i.O).every((function(t){return i.O[t](a[o])}))?a.splice(o--,1):(n=!1,r<c&&(c=r));if(n){t.splice(u--,1);var l=s();void 0!==l&&(e=l)}}return e}r=r||0;for(var u=t.length;u>0&&t[u-1][2]>r;u--)t[u]=t[u-1];t[u]=[a,s,r]}}(),function(){i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,{a:e}),e}}(),function(){i.d=function(t,e){for(var a in e)i.o(e,a)&&!i.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){i.p="/"}(),function(){var t={143:0};i.O.j=function(e){return 0===t[e]};var e=function(e,a){var s,r,c=a[0],n=a[1],o=a[2],l=0;if(c.some((function(e){return 0!==t[e]}))){for(s in n)i.o(n,s)&&(i.m[s]=n[s]);if(o)var u=o(i)}for(e&&e(a);l<c.length;l++)r=c[l],i.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return i.O(u)},a=self["webpackChunktest"]=self["webpackChunktest"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=i.O(void 0,[998],(function(){return i(4230)}));a=i.O(a)})();
//# sourceMappingURL=app.c0d69164.js.map