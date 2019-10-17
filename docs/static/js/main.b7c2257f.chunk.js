(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{25:function(e,t,n){e.exports=n(44)},30:function(e,t,n){},31:function(e,t,n){},33:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(21),i=n.n(o),c=n(4),s=(n(30),n(9)),l=n(10),u=n(13),m=n(12),p=n(11),f=n(14),d=n(6),g=(n(31),n(16)),h=n.n(g),v=n(22),E=function(e){var t="https://pokeapi.co/api/v2/pokemon/".concat(e,"/");return fetch(t).then((function(e){return e.json()}))},_=function(e){return e.map((function(e){return e.type.name})).sort()},k=function(e){var t={grass:"#78c850",water:"#6890f0",fire:"#f08030",poison:"#a040a0",flying:"#A890F0",bug:"#A8B821",normal:"#A8A878",electric:"#f8d12f",ground:"#E0C068",fairy:"#EE99AC",fighting:"#C03028",psychic:"#F75888",rock:"#817333",steel:"#B8B8D0",ice:"#98D8D8",ghost:"#705797",dragon:"#3E1EC0"};return _(e).map((function(e){return t[e]}))},b=function(){for(var e=[],t=1;t<=151;t++)e.push(E(t));return e},N=function(){var e=Object(v.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(b());case 2:return t=e.sent,e.abrupt("return",t.map((function(e){var t=e.id,n=e.species,a=e.sprites,r=e.types;return{colors:k(r),id:t,image:a.front_default,name:n.name,types:_(r)}})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=(n(33),function(e){var t=e.pokemon,n=t.name,a=t.image,o=t.colors,i={background:"linear-gradient(90deg, ".concat(o[0]," 50%, ").concat(o[1]||o[0]," 50%)")};return r.a.createElement("div",{className:"pokemon",style:i},r.a.createElement(c.b,{to:"/"+n},r.a.createElement("div",{className:"pokemon__image",style:{backgroundImage:"url(".concat(a,")")}}),r.a.createElement("p",{className:"pokemon__name"},n)))}),C=(n(39),n(40),function(){return r.a.createElement("header",{className:"header"},r.a.createElement("h1",{className:"header__title"},"Pokedex"))}),I=(n(41),function(e){return r.a.createElement("div",{className:"filter"},r.a.createElement("input",{className:"filter_input",onChange:e.onInputChange,value:e.inputValue,placeholder:"Search for Pokemon name or type"}))}),S=function(e){return r.a.createElement("div",{className:"list-page"},r.a.createElement(C,null),r.a.createElement(I,{inputValue:e.inputValue,onInputChange:e.onInputChange}),r.a.createElement("ul",{className:"list"},function(e){return e.pokemons.map((function(t,n){return r.a.createElement("li",{className:"list__item",key:n},r.a.createElement(y,{pokemon:t,getPokemonDetails:e.getPokemonDetails}))}))}(e)))},x=(n(42),function(e,t){var n="https://pokeapi.co/api/v2/".concat(e,"/").concat(t,"/");return fetch(n).then((function(e){return e.json()}))}),j=function(e){return e.find((function(e){return"en"===e.language.name}))},w=function(e){var t=Object.assign(e[0],e[1]),n=t.name,a=t.height,r=t.id,o=t.capture_rate,i=t.egg_groups,c=t.gender_rate,s=t.abilities,l=t.flavor_text_entries,u=t.weight,m=t.sprites,p=t.types,f=t.genera;return function(e){return fetch(e.evolution_chain.url).then((function(e){return e.json()})).then((function(e){return[[e.chain.species.name],e.chain.evolves_to.map((function(e){return e.species.name})),e.chain&&e.chain.evolves_to[0]&&e.chain.evolves_to[0].evolves_to[0]?[e.chain.evolves_to[0].evolves_to[0].species.name]:null]}))}(t).then((function(e){return{abilities:s.map((function(e){return e.ability.name})),capture_rate:o,colors:k(p),egg_groups:i.map((function(e){return e.name})),evolution:e,height:a/10,gender_rate:c,id:r,image:m.front_default,name:n,translated_name:j(f).genus,text:j(l).flavor_text,types:p.map((function(e){return e.type.name})).sort(),weight:u/10}}))},O=function(e){return function(e){var t=[x("pokemon",e),x("pokemon-species",e)];return Promise.all(t)}(e).then((function(e){return w(e)}))};var P=function(e,t){var n=parseInt(e.substring(1,3),16),a=parseInt(e.substring(3,5),16),r=parseInt(e.substring(5,7),16);return n=parseInt(n*(100+t)/100),a=(a=parseInt(a*(100+t)/100))<255?a:255,r=(r=parseInt(r*(100+t)/100))<255?r:255,"#"+(1===(n=n<255?n:255).toString(16).length?"0"+n.toString(16):n.toString(16))+(1===a.toString(16).length?"0"+a.toString(16):a.toString(16))+(1===r.toString(16).length?"0"+r.toString(16):r.toString(16))},D=function(e){return r.a.createElement("div",{className:"profile__text"},r.a.createElement("span",{className:"profile__text__span"},e.quest),e.data)},q=(n(43),function(e){return r.a.createElement("div",{className:"buttons"},r.a.createElement(c.b,{to:e.prev},r.a.createElement("button",{className:"prev-btn --btn"},"Previous Pokemon")),r.a.createElement(c.b,{to:"/"},r.a.createElement("button",{className:"home-btn --btn"},"Home")),r.a.createElement(c.b,{to:e.next},r.a.createElement("button",{className:"next-btn --btn"},"Next Pokemon")))}),A=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).componentDidMount=function(){n.getInicialState()},n.getInicialState=function(){O(n.props.pokemonName).then((function(e){return n.setState({details:e})}))},n.componentDidUpdate=function(){n.props.pokemonName!==n.state.details.name&&O(n.props.pokemonName).then((function(e){return n.setState({details:e})}))},n.state={details:{}},n}return Object(f.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.state.details,n=t.abilities,a=t.name,o=t.height,i=t.capture_rate,s=t.colors,l=t.egg_groups,u=t.evolution,m=t.id,p=t.image,f=t.weight,d=t.gender_rate,g=t.text,h=t.translated_name,v=t.types,E=function(){return s?{backgroundColor:P(s[0],-60)}:null},_=function(e,t){var n=t||"";return e?r.a.createElement("ul",null,e.map((function(e,t){return r.a.createElement("li",{key:t,style:{backgroundColor:n[t]}},e)}))):""};return Object.keys(this.state.details).length?r.a.createElement("div",{className:"details-page",style:s?{background:"linear-gradient(90deg, ".concat(s[0]," 50%, ").concat(s[1]||s[0]," 50%)")}:null},r.a.createElement(q,{prev:function(t){return t>1?e.props.pokemonList.filter((function(e){return e.id===t-1}))[0].name:""}(m),next:function(t){return t<151?e.props.pokemonList.filter((function(e){return e.id===t+1}))[0].name:""}(m)}),r.a.createElement("div",{className:"details"},r.a.createElement("h1",{className:"details__name",style:E()},a),r.a.createElement("div",{className:"details__container"},r.a.createElement("section",{className:"description"},r.a.createElement("img",{className:"description__image",src:p,alt:a}),r.a.createElement("div",{className:"description__types"},r.a.createElement("ul",null,_(v,s))),r.a.createElement("h3",{className:"description__id"},"# ".concat(m)),r.a.createElement("p",{className:"description__translated_name"},h),r.a.createElement("p",{className:"description__text"},g)),r.a.createElement("section",{className:"profile"},r.a.createElement("h2",{className:"profile__title --title",style:E()},"Profile"),r.a.createElement(D,{quest:"Height: ",data:"".concat(o,"m")}),r.a.createElement(D,{quest:"Weight: ",data:"".concat(f,"kg")}),r.a.createElement(D,{quest:"Catch Rate: ",data:"".concat(i,"%")}),r.a.createElement(D,{quest:"Egg Groups: ",data:_(l)}),r.a.createElement(D,{quest:"Abilities: ",data:_(n)}),r.a.createElement(D,{quest:"Gender Ratio: ",data:d})),r.a.createElement("section",{className:"evolutions"},r.a.createElement("h2",{className:"evolutions__title --title",style:E()},"Evolutions"),r.a.createElement("div",{className:"evolution"},function(){var t=function(e){return e.name===a?"currentPokemon":null},n=function(n,a){return n?r.a.createElement("ul",{key:a,className:"evolution__list"},n.map((function(n,a){return function(n,a){var o=e.props.pokemonList.find((function(e){return e.name===n}));return o?r.a.createElement("li",{key:a,className:"evolution__list__item "+t(o),onClick:e.handleEvolutionClick},r.a.createElement(c.b,{to:o.name},r.a.createElement("img",{src:o.image,alt:o.name}))):null}(n,a)}))):null};return u.map((function(e,t){return n(e,t)}))}()))))):r.a.createElement("div",{className:"loading"},r.a.createElement("div",{className:"pokemon"}))}}]),t}(r.a.Component),L=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).componentDidMount=function(){e.getInicialState()},e.getInicialState=function(){N().then((function(t){return e.setState({pokemons:t})}))},e.handleInputChange=function(t){var n=t.target.value;e.setState({filter:n})},e.renderList=function(){var t=e.state.filter.toLowerCase(),n=e.state.pokemons.filter((function(e){return e.name.includes(t)||e.types.toString().includes(t)}));return r.a.createElement(S,{pokemons:n,getPokemonName:e.getPokemonName,onInputChange:e.handleInputChange,inputValue:e.state.filter})},e.renderDetails=function(t){return r.a.createElement(A,{pokemonName:t.match.params.name,pokemonList:e.state.pokemons})},e.state={pokemons:[],selectedPokemon:"",filter:""},e.handleInputChange=e.handleInputChange.bind(Object(p.a)(e)),e}return Object(f.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/",render:this.renderList}),r.a.createElement(d.a,{path:"/:name",render:this.renderDetails})))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(c.a,null,r.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[25,1,2]]]);
//# sourceMappingURL=main.b7c2257f.chunk.js.map