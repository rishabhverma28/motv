(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,t,a){},105:function(e,t,a){},106:function(e,t,a){},107:function(e,t,a){},108:function(e,t,a){},231:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(84),r=a.n(o),s=(a(96),a(97),a(8)),c=a(9),l=a(12),d=a(10),h=a(2),m=a(13),u=(a(98),a(85)),v=a.n(u),p=a(11),f=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).state={hidden:!0,prevPos:window.pageYOffset},a.handleScroll=a.handleScroll.bind(Object(h.a)(a)),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleScroll",value:function(){window.pageYOffset>50?this.setState({hidden:!1}):this.setState({hidden:!0})}},{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){return i.a.createElement("header",{className:this.state.hidden?"site-header":"site-header color"},i.a.createElement(p.c,{to:"/"},i.a.createElement("img",{src:v.a,alt:"logo",className:"site-header-logo"})))}}]),t}(n.Component),b=a(55),g=a.n(b),E=a(88);a(104),a(105),a(106);var w=function(e){return i.a.createElement("div",{className:"MOTV-list-item"},i.a.createElement("img",{className:"MOTV-list-item-img",src:e.posterPath,alt:"poster"}),i.a.createElement("div",{className:"MOTV-list-item-title"},e.title))},k=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).state={windowWidth:window.innerWidth},a.updateWindowDimensions=a.updateWindowDimensions.bind(Object(h.a)(a)),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"updateWindowDimensions",value:function(){this.setState({windowWidth:window.innerWidth})}},{key:"render",value:function(){var e=Math.floor(this.state.windowWidth/154)-1;if(this.props.data.results.length){var t=this.props.data.results.map(function(e){var t=e.original_title||e.name,a=null===e.poster_path?"https://via.placeholder.com/150x231?text=Poster":"https://image.tmdb.org/t/p/w154/"+e.poster_path;return i.a.createElement(p.c,{to:{pathname:"/title/".concat(e.id),state:{data:{val:e}}},key:e.id},i.a.createElement(w,{posterPath:a,title:t}))});return i.a.createElement("div",{className:"MOTV-list",style:{gridTemplateColumns:"repeat(".concat(e,", 1fr)")}},t)}return i.a.createElement("div",{className:"MOTV-list-error"}," Sorry, no results found")}}]),t}(n.Component),y=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).state={queryResponse:{},searchText:"",isLoading:!1,movie:!0,searched:!1,errorInFetching:!1},a.handleClick=a.handleClick.bind(Object(h.a)(a)),a.handleEnter=a.handleEnter.bind(Object(h.a)(a)),a.handleKeyChange=a.handleKeyChange.bind(Object(h.a)(a)),a.handleMovieorTV=a.handleMovieorTV.bind(Object(h.a)(a)),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleKeyChange",value:function(e){"Enter"===e.key?this.handleClick():this.setState({searchText:e.target.value})}},{key:"handleMovieorTV",value:function(){var e=Object(E.a)(g.a.mark(function e(t){return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.target.dataset.id;case 2:if(e.t0=e.sent,"movie"!==e.t0){e.next=7;break}this.setState({movie:!0}),e.next=8;break;case 7:this.setState({movie:!1});case 8:this.state.searched&&this.handleClick();case 9:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"handleEnter",value:function(e){13===e.keyCode&&this.handleClick()}},{key:"handleClick",value:function(){var e=this,t=this.state.searchText.replace(/ /g,"+").toLowerCase(),a="https://api.themoviedb.org/3/search/"+(this.state.movie?"movie":"tv")+"?api_key=48d0b71da7310da812fd0c5e863d0af0&query="+t;console.log(a),fetch(a).then(function(e){if(!e.ok)throw Error(e.statusText);return e.json()}).then(function(t){return e.setState({isLoading:!0,queryResponse:t,searched:!0})}).catch(function(t){console.log(t),e.setState({searched:!0,errorInFetching:!0})})}},{key:"render",value:function(){var e=this.state.movie?"Movie":"TV Show";return i.a.createElement("div",{className:"searcher"},i.a.createElement("div",{className:"searcher-container"},i.a.createElement("div",{className:"selector-buttons"},i.a.createElement("button",{className:this.state.movie?"selector-buttons-movie active":"selector-buttons-movie","data-id":"movie",onClick:this.handleMovieorTV},"Movie"),i.a.createElement("button",{className:this.state.movie?"selector-buttons-tv":"selector-buttons-tv active","data-id":"tv",onClick:this.handleMovieorTV},"TV")),i.a.createElement("label",{htmlFor:"title-name",className:"searcher-container-label"},"Search for your favourite ",e),i.a.createElement("input",{id:"title-name",type:"text",className:"searcher-container-input",onKeyDown:this.handleEnter,onChange:this.handleKeyChange,autoComplete:"off"}),i.a.createElement("button",{className:"searcher-container-button",onClick:this.handleClick},"Search")),this.state.searched&&this.state.errorInFetching&&i.a.createElement("div",{className:"MOTV-list-error"},"Sorry, there was an error in fetching your request"),this.state.searched&&!this.state.errorInFetching&&i.a.createElement(k,{data:this.state.queryResponse}))}}]),t}(n.Component),O=a(89),C=a.n(O);a(107);var j=function(){return i.a.createElement("img",{src:C.a,alt:"site intro",className:"site-image"})};var N=function(){return i.a.createElement("div",null,i.a.createElement(j,null),i.a.createElement(y,null))},S=(a(108),a(90)),x=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).getColors=function(e){a.setState({colors:e})},a.state={data:{},colors:[]},a.posterRef=i.a.createRef(),a.getColors=a.getColors.bind(Object(h.a)(a)),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"getData",value:function(){this.setState({data:this.props.location.state.data})}},{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){var e=this.state.data;if("val"in e){var t=this.state.colors[0]+"99";return i.a.createElement("div",{className:"title-info"},i.a.createElement("div",{className:"title-info-backdrop",style:{backgroundImage:"url(".concat("https://image.tmdb.org/t/p/original/"+e.val.backdrop_path,")"),backgroundSize:"cover",boxShadow:"inset 0 0 250px ".concat(t)}}),i.a.createElement("div",{className:"title-info-rest",style:{backgroundColor:t,boxShadow:"0px -10px 35px ".concat(t)}},i.a.createElement("div",{className:"title-info-poster"},i.a.createElement(S.a,{getColors:this.getColors},i.a.createElement("img",{src:"https://image.tmdb.org/t/p/w342/"+e.val.poster_path,alt:"title poster",onLoad:this.getColors,className:"title-info-poster-img"}))),i.a.createElement("div",{className:"title-info-desc"},i.a.createElement("div",{className:"title-info-desc-title"},e.val.original_title||e.val.name),i.a.createElement("div",{className:"title-info-desc-date"},e.val.release_date||e.val.first_air_date),i.a.createElement("div",{className:"title-info-desc-vote"},e.val.vote_average),i.a.createElement("div",{className:"title-info-desc-overview"},e.val.overview))))}return i.a.createElement("div",null,"loading...")}}]),t}(n.Component),T=a(14);var M=function(){return i.a.createElement(p.b,{basename:"/"},i.a.createElement("div",{className:"App"},i.a.createElement(f,null),i.a.createElement(T.c,null,i.a.createElement(T.a,{exact:!0,path:"/",component:N}),i.a.createElement(T.a,{exact:!0,path:"/title/:id",component:x}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(p.a,null,i.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},85:function(e,t,a){e.exports=a.p+"static/media/motv.5487724f.svg"},89:function(e,t,a){e.exports=a.p+"static/media/combined.07067166.svg"},91:function(e,t,a){e.exports=a(231)},96:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){}},[[91,1,2]]]);
//# sourceMappingURL=main.dcca0e0e.chunk.js.map