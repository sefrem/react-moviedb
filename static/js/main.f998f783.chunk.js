(window["webpackJsonpmy-app"]=window["webpackJsonpmy-app"]||[]).push([[0],{60:function(e,t,a){e.exports=a(95)},94:function(e,t,a){},95:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(25),c=a.n(o),i=a(4),s=a(5),l=a(7),u=a(6),m=a(8),p=a(104),d=a(96),b=a(30),h=a.n(b),f=a(35),v=a(16),g=a(37),O=a.n(g),y=a(51);function j(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function E(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?j(a,!0).forEach((function(t){Object(v.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):j(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var w="https://api.themoviedb.org/3",k="3f4ca4f3a9750da53450646ced312397";function _(e){return N.apply(this,arguments)}function N(){return(N=Object(f.a)(h.a.mark((function e(t){var a,n,r,o=arguments;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=o.length>1&&void 0!==o[1]?o[1]:{},e.prev=1,e.next=4,fetch(t,a);case 4:if(!((n=e.sent).status<400)){e.next=9;break}return e.abrupt("return",n.json());case 9:throw n;case 10:e.next=18;break;case 12:return e.prev=12,e.t0=e.catch(1),e.next=16,e.t0.json();case 16:return r=e.sent,e.abrupt("return",Object(y.reject)(r));case 18:case"end":return e.stop()}}),e,null,[[1,12]])})))).apply(this,arguments)}var C=function(){function e(){Object(i.a)(this,e)}return Object(s.a)(e,null,[{key:"get",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.params,n=E({api_key:k},a);return _("".concat(w).concat(e,"?").concat(O.a.stringify(n)),{mode:"cors",headers:{"Content-type":"application/json"}})}},{key:"post",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.params,n=t.body,r=E({api_key:k},a);return _("".concat(w).concat(e,"?").concat(O.a.stringify(r)),{method:"POST",mode:"cors",headers:{"Content-type":"application/json"},body:JSON.stringify(n)})}},{key:"logout",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.params,n=t.body,r=E({api_key:k},a);return _("".concat(w).concat(e,"?").concat(O.a.stringify(r)),{method:"DELETE",mode:"cors",headers:{"Content-type":"application/json"},body:JSON.stringify(n)})}}]),e}(),P=function(e){var t=e.labelText,a=e.id,n=e.type,o=e.name,c=e.value,i=e.onChange,s=e.onBlur,l=e.placeholder,u=e.error;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:o},t),r.a.createElement("input",{id:a,type:n,className:u?"form-control border-danger":"form-control",placeholder:l,name:o,value:c,onChange:i,onBlur:s}),u?r.a.createElement("div",{className:"invalid-feedback"},u):null)},D=a(10),L=function(e){return{type:"UPDATE_AUTH",payload:e}},S=function(){return{type:"TOGGLE_MODAL"}};function G(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function T(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?G(a,!0).forEach((function(t){Object(v.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):G(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var A=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:"",repeatPassword:"",errors:{username:"",password:"",repeatPassword:""},submitting:!1},a.onChange=function(e){var t=e.target.name,n=e.target.value;a.setState((function(e){var a;return a={},Object(v.a)(a,t,n),Object(v.a)(a,"errors",T({},e.errors,Object(v.a)({},t,""))),a}))},a.handleBlur=function(){var e=a.validateFields();Object.keys(e).length&&a.setState((function(t){return{errors:T({},t.errors,{},e)}}))},a.validateFields=function(){var e={},t=a.state,n=t.username,r=t.password,o=t.repeatPassword;return n||(e.username="Username required"),r||(e.password="Password required"),o!==r&&(e.repeatPassword="Must be equal password"),e},a.onSubmit=function(){a.setState({submitting:!0,errors:{base:""}}),a.login()},a.login=Object(f.a)(h.a.mark((function e(){var t,a,n,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.get("/authentication/token/new");case 3:return t=e.sent,e.next=6,C.post("/authentication/token/validate_with_login",{body:{username:this.state.username,password:this.state.password,request_token:t.request_token}});case 6:return a=e.sent,e.next=9,C.post("/authentication/session/new",{body:{request_token:a.request_token}});case 9:return n=e.sent,e.next=12,C.get("/account",{params:{session_id:n.session_id}});case 12:r=e.sent,this.props.updateAuth({user:r,session_id:n.session_id}),this.setState({submitting:!1}),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(0),this.setState({submitting:!1,errors:{base:e.t0.status_message}});case 20:case"end":return e.stop()}}),e,this,[[0,17]])}))),a.onLogin=function(e){e.preventDefault();var t=a.validateFields();Object.keys(t).length?a.setState((function(e){return{errors:T({},e.errors,{},t)}})):a.onSubmit()},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.password,n=e.repeatPassword,o=e.errors,c=e.submitting;return r.a.createElement("div",{className:"form-login-container"},r.a.createElement("form",{className:"form-login"},r.a.createElement("h1",{className:"h3 mb-3 font-weight-normal text-center"},"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"),r.a.createElement(P,{labelText:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c",type:"text",className:"form-control",id:"username",placeholder:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c (\u043f\u043e\u0434\u0441\u043a\u0430\u0437\u043a\u0430 - Sefre)",name:"username",value:t,onChange:this.onChange,onBlur:this.handleBlur,error:o.username}),r.a.createElement(P,{labelText:"\u041f\u0430\u0440\u043e\u043b\u044c",type:"password",className:"form-control",id:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c (\u043f\u043e\u0434\u0441\u043a\u0430\u0437\u043a\u0430 - 1p222)",name:"password",value:a,onChange:this.onChange,onBlur:this.handleBlur,error:o.password}),r.a.createElement(P,{labelText:"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",type:"password",className:"form-control",id:"repeatPassword",placeholder:"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",name:"repeatPassword",value:n,onChange:this.onChange,onBlur:this.handleBlur,error:o.repeatPassword}),r.a.createElement("button",{type:"submit",className:"btn btn-lg btn-primary btn-block",onClick:this.onLogin,disabled:c},"\u0412\u0445\u043e\u0434"),o.base&&r.a.createElement("div",{className:"invalid-feedback text-center"},o.base)))}}]),t}(r.a.Component),x={updateAuth:L},M=Object(D.b)(void 0,x)(A),R=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.toggleModal,a=e.showModal;return r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-success",type:"button",onClick:t},"Login"),r.a.createElement(p.a,{isOpen:a,toggle:t},r.a.createElement(d.a,null,r.a.createElement(M,null))))}}]),t}(r.a.Component),F={toggleModal:S},B=Object(D.b)((function(e){return{showModal:e.auth.showModal}}),F)(R),I=a(97),U=a(105),H=a(98),V=a(99),q=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={dropdownOpen:!1},a.toggleDropdown=function(){a.setState((function(e){return{dropdownOpen:!e.dropdownOpen}}))},a.handleLogout=function(){C.logout("/authentication/session",{body:{session_id:a.props.session_id}}).then(a.props.onLogOut())},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.user;return r.a.createElement(I.a,{isOpen:this.state.dropdownOpen,toggle:this.toggleDropdown},r.a.createElement(U.a,{tag:"div",onClick:this.toggleDropdown,"data-toggle":"dropdown","aria-expanded":this.state.dropdownOpen},r.a.createElement("img",{className:"rounded-circle",src:"https://secure.gravatar.com/avatar/".concat(e.avatar.gravatar.hash,'.jpg?s=64"'),alt:"avatar"})),r.a.createElement(H.a,null,r.a.createElement(V.a,{onClick:this.handleLogout},"Logout")))}}]),t}(r.a.Component),J={onLogOut:function(){return{type:"LOGOUT"}}},W=Object(D.b)((function(e){return{user:e.auth.user,session_id:e.auth.session_id}}),J)(q),Y=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-dark bg-primary"},r.a.createElement("div",{className:"container"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement("a",{className:"nav-link",href:"/react-moviedb"},"Home"))),this.props.user?r.a.createElement(W,null):r.a.createElement(B,null)))}}]),t}(r.a.Component),$=Object(D.b)((function(e){return{user:e.auth.user}}))(Y),z=function(e){return{type:"CHANGE_FILTER",payload:e}},K=function(e){return{type:"CHANGE_PAGINATION",payload:e}},Q=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).selectOptions=function(){for(var e=[],t=2019;t>=1900;t--)e.push(r.a.createElement("option",{key:t,value:t},t));return e},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.filters,a=t.sort_by,n=t.primary_release_year,o=e.onChangeFilter,c=e.options;return r.a.createElement("div",{className:"mt-4"},r.a.createElement("h3",null,"Filters"),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"sort_by"},"Sort By"),r.a.createElement("select",{className:"form-control",name:"sort_by",id:"sort_by",value:a,onChange:function(e){return o(e)}},c.map((function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.label)})))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"primary_release_year"},"Year of Release"),r.a.createElement("select",{className:"form-control",id:"primary_release_year",name:"primary_release_year",value:n,onChange:o},r.a.createElement("option",null,"Select year"),this.selectOptions())))}}]),t}(r.a.PureComponent);Q.defaultProps={options:[{label:"Popularity descending",value:"popularity.desc"},{label:"Popularity ascending",value:"popularity.asc"},{label:"Rating descending",value:"vote_average.desc"},{label:"Rating ascending",value:"vote_average.asc"}]};var X={onChangeFilter:z},Z=Object(D.b)((function(e){return{filters:e.filters}}),X)(Q),ee=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("button",{type:"button",className:"btn btn-outline-info",onClick:this.props.resetFilters,style:{width:"180px"}},"Reset All Filters"))}}]),t}(r.a.Component),te={resetFilters:function(){return{type:"RESET_FILTERS"}}},ae=Object(D.b)(void 0,te)(ee),ne=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleClick=function(e){return function(){return a.props.onChangePagination({name:"page",value:e})}},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.pagination,t=e.page,a=e.totalPages;return r.a.createElement("div",{className:"d-flex flex-column align-items-center"},r.a.createElement("p",{className:"mb-1"},"Page ",t," of ",a),r.a.createElement("div",{className:"btn-group",style:{width:"180px"}},r.a.createElement("button",{type:"button",className:"btn btn-primary",disabled:1===t,onClick:this.handleClick(t-1),width:"150px",name:"page"},"Previous"),r.a.createElement("button",{type:"button",className:"btn btn-primary",disabled:t===a||t>a,onClick:this.handleClick(t+1),name:"page"},"Next")),r.a.createElement("div",{className:"mt-1"},r.a.createElement(ae,null)))}}]),t}(r.a.Component),re={onChangePagination:K},oe=Object(D.b)((function(e){return{pagination:e.filters.pagination}}),re)(ne),ce=a(58),ie=a(19);var se={onChangeFilter:z},le=Object(ie.compose)(Object(D.b)((function(e){return{with_genres:e.filters.sorting.with_genres}}),se),(function(e){return function(t){function a(){var e;return Object(i.a)(this,a),(e=Object(l.a)(this,Object(u.a)(a).call(this))).onChangeGenres=function(t){var a=t.target.value,n=e.props.with_genres;e.props.onChangeFilter({target:{name:"with_genres",value:n.includes(a)?n.filter((function(e){return e!==a})):[].concat(Object(ce.a)(n),[a])}})},e.getMoviesGenres=function(){C.get("/genre/movie/list",{params:{language:"en-US"}}).then((function(t){e.setState({moviesGenres:t.genres})}))},e.state={moviesGenres:[]},e}return Object(m.a)(a,t),Object(s.a)(a,[{key:"componentDidMount",value:function(){this.getMoviesGenres()}},{key:"render",value:function(){return r.a.createElement(e,{moviesGenres:this.state.moviesGenres,with_genres:this.props.with_genres,onChangeGenres:this.onChangeGenres})}}]),a}(r.a.PureComponent)})),ue=function(e){var t=e.moviesGenres,a=e.with_genres,n=e.onChangeGenres;return r.a.createElement("div",null,r.a.createElement("p",{className:"mb-2"},"Select Genres"),r.a.createElement("div",{className:"form-check"},t.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement("input",{className:"form-check-input",checked:a.includes("".concat(e.id)),type:"checkbox",id:e.id,value:e.id,name:"with_genres",onChange:n}),r.a.createElement("label",{className:"form-check-label",htmlFor:e.id},e.name))}))))};ue.defaultProps={moviesGenres:[]};var me=le(ue),pe=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{className:"mb-3"},r.a.createElement(oe,null),r.a.createElement(Z,null),r.a.createElement(me,null))}}]),t}(r.a.Component),de=(a(91),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={like:!1},a.onToggleLike=function(){a.props.session_id?a.setState((function(e){return{like:!e.like}}),(function(){return a.onLike(a.state.like)})):a.props.toggleModal()},a.onLike=function(e){var t=a.props,n=t.session_id,r=t.movie;C.post("/account/{account_id}/favorite",{params:{session_id:n,media_type:"movie",media_id:r.id,favorite:e}}).then((function(e){console.log(e.status_message)}))},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.like;return r.a.createElement("i",{className:"material-icons",onClick:this.onToggleLike},e?"star":"star_border")}}]),t}(r.a.Component)),be={toggleModal:S},he=Object(D.b)((function(e){return{session_id:e.auth.session_id}}),be)(de),fe=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={bookmark:!1},a.onToggleBookmark=function(){a.props.session_id?a.setState((function(e){return{bookmark:!e.bookmark}}),(function(){return a.onBookmark(a.state.bookmark)})):a.props.toggleModal()},a.onBookmark=function(e){var t=a.props,n=t.session_id,r=t.movie;C.post("/account/{account_id}/favorite",{params:{session_id:n,media_type:"movie",media_id:r.id,favorite:e}}).then((function(e){console.log(e.status_message)}))},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.bookmark;return r.a.createElement("i",{className:"material-icons",onClick:this.onToggleBookmark},e?"bookmark":"bookmark_border")}}]),t}(r.a.Component),ve={toggleModal:S},ge=Object(D.b)((function(e){return{session_id:e.auth.session_id}}),ve)(fe),Oe=a(21),ye=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.path;return r.a.createElement("img",{className:"card-img-top",src:"https://image.tmdb.org/t/p/w500".concat(e),alt:""})}}]),t}(r.a.Component),je=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.movie;return r.a.createElement("div",{className:"card",style:{width:"100%"}},r.a.createElement(ye,{path:e.backdrop_path||e.poster_path}),r.a.createElement("div",{className:"card-body"},r.a.createElement(Oe.b,{className:"card-title",to:"/movie/".concat(e.id,"/details")},e.title),r.a.createElement("div",{className:"card-text"},"Rating: ",e.vote_average),r.a.createElement("div",{className:"mt-2"},r.a.createElement(he,{movie:e}),r.a.createElement(ge,{movie:e}))))}}]),t}(r.a.Component),Ee=a(36),we=a.n(Ee),ke=a(100),_e=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(ke.a,{className:"loader",animation:"border"})}}]),t}(r.a.Component),Ne=function(){return{type:"TOGGLE_LOADER"}},Ce=function(e){return{type:"GET_MOVIES",payload:e}};var Pe={onChangePagination:K,fetchMovies:function(e){return function(t){return t({type:"TOGGLE_LOADER"}),C.get("/discover/movie",{params:e}).then((function(e){t(K({name:"totalPages",value:e.total_pages})),t(Ce(e.results)),t({type:"TOGGLE_LOADER"})}))}}},De=Object(ie.compose)(Object(D.b)((function(e){return{sorting:e.filters.sorting,pagination:e.filters.pagination,movies:e.movies.movies,isLoading:e.loader.general}}),Pe),(function(e){return function(t){function a(){return Object(i.a)(this,a),Object(l.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(m.a)(a,t),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.sorting,a=t.sort_by,n=t.primary_release_year,r=t.with_genres,o=e.fetchMovies,c={language:"en-EN",sort_by:a,page:e.pagination.page,primary_release_year:n};r.length>0&&(c.with_genres=r.join(",")),o(c)}},{key:"componentDidUpdate",value:function(e){var t=this.props,a=t.sorting,n=t.sorting,r=n.sort_by,o=n.primary_release_year,c=n.with_genres,i=t.pagination.page,s=t.onChangePagination,l=t.fetchMovies,u={language:"en-EN",sort_by:r,page:i,primary_release_year:o};return c.length>0&&(u.with_genres=c.join(",")),we.a.isEqual(a,e.sorting)?i!==e.pagination.page?l(u):void 0:(s({name:"page",value:1}),l(u))}},{key:"render",value:function(){var t=this.props,a=t.movies,n=t.isLoading;return r.a.createElement("div",{className:"container"},n?r.a.createElement(_e,null):r.a.createElement(e,Object.assign({},this.props,{movies:a})))}}]),a}(r.a.Component)})),Le=function(e){var t=e.movies;return r.a.createElement("div",{className:"row"},t.map((function(e){return r.a.createElement("div",{key:e.id,className:"col-6 mb-4"},r.a.createElement(je,{movie:e}))})))};Le.defaultProps={movies:[]};var Se=De(Le),Ge=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row mt-4"},r.a.createElement("div",{className:"col-4"},r.a.createElement("div",{className:"card",style:{width:"100%"}},r.a.createElement("div",{className:"card-body"},r.a.createElement(pe,null)))),r.a.createElement("div",{className:"col-8"},r.a.createElement(Se,null))))}}]),t}(r.a.Component),Te=a(17),Ae=a(101),xe=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).formatNumber=function(e){return e.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")},a.renderCountries=function(e){return e.map((function(e,t){return r.a.createElement("span",{key:t},e.name," ")}))},a.renderGenres=function(e){return e.map((function(e,t){return r.a.createElement("p",{className:"badge badge-warning mb-2",key:t},e.name)}))},a.renderCompanies=function(e){return e.map((function(e,t){return r.a.createElement("p",{className:"badge badge-info mb-2",key:t},e.name," ")}))},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.movie,a=[{title:"Status",data:t.status},{title:"Release Date",data:t.release_date},{title:"Slogan",data:t.tagline},{title:"Country",data:t.production_countries},{title:"Budget",data:t.budget},{title:"Revenue",data:t.revenue},{title:"Genres",data:t.genres},{title:"Homepage",data:t.homepage},{title:"Runtime",data:t.runtime},{title:"Company",data:t.production_companies}];return r.a.createElement(Ae.a,{className:"mt-4"},r.a.createElement("tbody",null,a.filter((function(e){return"object"===typeof e.data?!we.a.isEmpty(e.data):e.data})).map((function(t,a){return"Budget"===t.title||"Revenue"===t.title?r.a.createElement("tr",{key:a},r.a.createElement("th",null,t.title),r.a.createElement("td",null,e.formatNumber(t.data))):"Country"===t.title?r.a.createElement("tr",{key:a},r.a.createElement("th",null,t.title),r.a.createElement("td",null,e.renderCountries(t.data))):"Genres"===t.title?r.a.createElement("tr",{key:a},r.a.createElement("th",null,t.title),r.a.createElement("td",{className:"d-flex flex-column align-items-start"},e.renderGenres(t.data))):"Runtime"===t.title?r.a.createElement("tr",{key:a},r.a.createElement("th",null,t.title),r.a.createElement("td",null,t.data," minutes")):"Company"===t.title?r.a.createElement("tr",{key:a},r.a.createElement("th",null,t.title),r.a.createElement("td",{className:"d-flex flex-column align-items-start"},e.renderCompanies(t.data))):r.a.createElement("tr",{key:a},r.a.createElement("th",null,t.title),r.a.createElement("td",null,t.data))}))))}}]),t}(r.a.Component),Me=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={videos:[]},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.toggleLoaderVideos;t(),C.get("/movie/".concat(this.props.match.params.id,"/videos")).then((function(a){e.setState({videos:a.results}),t()}))}},{key:"render",value:function(){var e=this.props.isLoadingVideos,t=this.state.videos;return r.a.createElement("div",{className:"row"},e?r.a.createElement(_e,null):t.map((function(e,t){return r.a.createElement("iframe",{key:t,className:"col-4 border-0 mt-2",title:"video",src:"https://www.youtube.com/embed/".concat(e.key),allow:"fullscreen"})})))}}]),t}(r.a.Component),Re={toggleLoaderVideos:function(){return{type:"TOGGLE_LOADER_VIDEOS"}}},Fe=Object(Te.f)(Object(D.b)((function(e){return{isLoadingVideos:e.loader.videos}}),Re)(Me)),Be=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={credits:[]},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.toggleLoaderCredits;t(),C.get("/movie/".concat(this.props.match.params.id,"/credits")).then((function(a){e.setState({credits:a.cast}),t()}))}},{key:"render",value:function(){var e=this.props.isLoadingCredits,t=this.state.credits;return r.a.createElement("div",{className:"row"},e?r.a.createElement(_e,null):t.map((function(e,t){return r.a.createElement("div",{className:"col-md-2 mt-2",key:t},r.a.createElement(ye,{path:e.profile_path}),r.a.createElement("span",null,r.a.createElement("b",null,e.name)," / ",e.character))})))}}]),t}(r.a.Component),Ie={toggleLoaderCredits:function(){return{type:"TOGGLE_LOADER_CREDITS"}}},Ue=Object(Te.f)(Object(D.b)((function(e){return{isLoadingCredits:e.loader.credits}}),Ie)(Be)),He=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.movie,t=e.backdrop_path,a=e.original_title,n=e.overview,o=e.release_date,c=e.vote_average,i=this.props.movie,s="".concat(o).split("-")[0];return r.a.createElement("div",{className:"row mt-4"},r.a.createElement("div",{className:"col-4"},r.a.createElement(ye,{path:t})),r.a.createElement("div",{className:"col-8"},r.a.createElement("h5",{className:"title mb-4"},a," (",s,")"),r.a.createElement(he,{movie:i}),r.a.createElement(ge,{movie:i}),r.a.createElement("h6",{className:""},"Rating ",c),r.a.createElement("p",{className:"mb-4"},n)))}}]),t}(r.a.Component),Ve=Object(Te.f)(He),qe=a(102),Je=a(103),We=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.match.params.id;return r.a.createElement("div",{className:"mt-4"},r.a.createElement(qe.a,{tabs:!0},r.a.createElement(Je.a,null,r.a.createElement(Oe.c,{to:"/movie/".concat(e,"/details"),className:"nav-link"},"Details")),r.a.createElement(Je.a,null,r.a.createElement(Oe.c,{to:"/movie/".concat(e,"/videos"),className:"nav-link"},"Videos")),r.a.createElement(Je.a,null,r.a.createElement(Oe.c,{to:"/movie/".concat(e,"/credits"),className:"nav-link"},"Credits"))))}}]),t}(r.a.Component),Ye=Object(Te.f)(We),$e=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={movie:{}},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.toggleLoader;console.log(this.props.match),t(),C.get("/movie/".concat(this.props.match.params.id)).then((function(a){e.setState({movie:a}),t()}))}},{key:"render",value:function(){var e=this.props.isLoading,t=this.state.movie;return r.a.createElement("div",null,e?r.a.createElement(_e,null):r.a.createElement("div",{className:"container"},r.a.createElement(Oe.b,{to:"/react-moviedb"},"Back"),r.a.createElement(Ve,{movie:t}),r.a.createElement(Ye,null),r.a.createElement(Te.c,null,r.a.createElement(Te.a,{path:"/movie/:id/details"},r.a.createElement(xe,{movie:t})," "),r.a.createElement(Te.a,{path:"/movie/:id/videos"},r.a.createElement(Fe,null)," "),r.a.createElement(Te.a,{path:"/movie/:id/credits"},r.a.createElement(Ue,null)," "))))}}]),t}(r.a.Component),ze={toggleLoader:Ne},Ke=Object(D.b)((function(e){return{isLoading:e.loader.general}}),ze)($e),Qe=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.session_id;e&&this.props.updateLogin(e)}},{key:"render",value:function(){return r.a.createElement(Oe.a,null,r.a.createElement($,null),r.a.createElement(Te.a,{exact:!0,path:"/react-moviedb",component:Ge}),r.a.createElement(Te.a,{path:"/react-moviedb/movie/:id",component:Ke}))}}]),t}(r.a.Component),Xe={updateLogin:function(e){return function(t){return C.get("/account",{params:{session_id:e}}).then((function(a){return t(L({user:a,session_id:e}))}))}}},Ze=Object(D.b)((function(e){return{session_id:e.auth.session_id}}),Xe)(Qe),et=(a(94),a(56)),tt=a(57);function at(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var nt={general:!1,videos:!1,credits:!1},rt=function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?at(a,!0).forEach((function(t){Object(v.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):at(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e,Object(v.a)({},t,!e[t]))},ot=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:nt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_LOADER":return rt(e,"general");case"TOGGLE_LOADER_VIDEOS":return rt(e,"videos");case"TOGGLE_LOADER_CREDITS":return rt(e,"credits");default:return e}},ct=new(a(59).a);function it(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function st(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?it(a,!0).forEach((function(t){Object(v.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):it(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var lt={user:null,session_id:ct.get("session_id"),showModal:!1},ut=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:lt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_AUTH":return st({},e,{user:t.payload.user,session_id:t.payload.session_id});case"LOGOUT":return st({},e,{user:null,session_id:null});case"TOGGLE_MODAL":return st({},e,{showModal:!e.showModal});default:return e}};function mt(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function pt(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?mt(a,!0).forEach((function(t){Object(v.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):mt(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var dt={movies:[]},bt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:dt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_MOVIES":return pt({},e,{movies:t.payload.slice()});default:return e}};function ht(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function ft(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ht(a,!0).forEach((function(t){Object(v.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ht(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var vt={sorting:{sort_by:"popularity.desc",primary_release_year:"",with_genres:[]},pagination:{page:1,totalPages:500}},gt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:vt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_FILTER":return ft({},e,{sorting:ft({},e.sorting,Object(v.a)({},t.payload.target.name,t.payload.target.value))});case"CHANGE_PAGINATION":return ft({},e,{pagination:ft({},e.pagination,Object(v.a)({},t.payload.name,t.payload.value))});case"RESET_FILTERS":return ft({},e,{},vt);default:return e}},Ot=Object(ie.combineReducers)({auth:ut,loader:ot,movies:bt,filters:gt}),yt=Object(ie.createStore)(Ot,Object(tt.composeWithDevTools)(Object(ie.applyMiddleware)(et.a,(function(e){return function(e){return function(t){return"UPDATE_AUTH"===t.type&&ct.set("session_id",t.payload.session_id,{path:"/",maxAge:2592e3}),"LOGOUT"===t.type&&ct.remove("session_id"),e(t)}}}))));c.a.render(r.a.createElement(D.a,{store:yt},r.a.createElement(Ze,null)),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.f998f783.chunk.js.map