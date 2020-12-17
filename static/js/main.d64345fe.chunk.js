(this.webpackJsonphdyf=this.webpackJsonphdyf||[]).push([[0],{45:function(e,t,n){e.exports=n(73)},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"saveComment",(function(){return W})),n.d(a,"fetchComments",(function(){return N})),n.d(a,"changeAuth",(function(){return T}));var o=n(0),r=n.n(o),c=n(20),i=n.n(c),u=n(19),l=n(2),s=n(8),m=n(17),d=n(26),h=function(e){var t=e.dispatch;return function(e){return function(n){if(!n.payload||!n.payload.then)return e(n);n.payload.then((function(e){var a=Object(d.a)(Object(d.a)({},n),{},{payload:e});t(a)}))}}},p=n(40),f=n.n(p),v={$schema:"http://json-schema.org/draft-07/schema",$id:"http://example.com/example.json",type:"object",title:"The Root Schema",description:"The root schema comprises the entire JSON document.",required:["comments","auth"],properties:{comments:{$id:"#/properties/comments",type:"array",title:"The Comments Schema",description:"An explanation about the purpose of this instance.",default:[],items:{$id:"#/properties/comments/items",type:"string",title:"The Items Schema",description:"An explanation about the purpose of this instance.",default:"",examples:["Comments #1","Comments #2"]}},auth:{$id:"#/properties/auth",type:"boolean",title:"The Auth Schema",description:"An explanation about the purpose of this instance.",default:!1,examples:[!0]}}},b=function(e){e.dispatch;var t=e.getState;return function(e){return function(n){e(n),f.a.validate(t(),v)||console.warn("Invalid state schema detected")}}},y=n(21),g=Object(m.c)({comments:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"save_comment":return[].concat(Object(y.a)(e),[t.payload]);case"fetch_comments":var n=t.payload.data.map((function(e){return e.name}));return[].concat(Object(y.a)(e),Object(y.a)(n));default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"change_auth":return t.payload;default:return e}}}),j=function(e){var t=e.children,n=e.initialState,a=void 0===n?{}:n,o=Object(m.d)(g,a,Object(m.a)(h,b));return r.a.createElement(s.a,{store:o},t)},O=n(11),w=n(12),E=n(14),k=n(13),x=n(9),C=n(10),S=n(41),A=n.n(S);function W(e){return{type:"save_comment",payload:e}}function N(){return{type:"fetch_comments",payload:A.a.get("https://jsonplaceholder.typicode.com/comments")}}function T(e){return{type:"change_auth",payload:e}}function I(){var e=Object(x.a)(["\n  border: 0;\n  border-radius: 5px;\n  height: 100px;\n  color: grey;\n  font-size: 0.8em;\n  font-family: Roboto-Italic;\n"]);return I=function(){return e},e}function $(){var e=Object(x.a)(["\n  display: inline-block;\n  border-radius: 5px;\n  padding: 7px 12px;\n  border: 1px solid #d5d5d5;\n  background-color: linear-gradient(#eee, #ddd);\n  font: 700 13px/18px Helvetica, arial;\n"]);return $=function(){return e},e}function _(){var e=Object(x.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 1em;\n"]);return _=function(){return e},e}function H(){var e=Object(x.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]);return H=function(){return e},e}function R(){var e=Object(x.a)(["\n  display: flex;\n  justify-content: center;\n  background-color: #f5f5f5;\n  height: calc(100vh - 37px);\n"]);return R=function(){return e},e}var U=C.a.main(R()),q=C.a.div(H()),B=C.a.form(_()),D=C.a.button($()),J=C.a.textarea(I()),L=function(e){Object(E.a)(n,e);var t=Object(k.a)(n);function n(){var e;Object(O.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={comment:"..."},e.handleChange=function(t){e.setState({comment:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.saveComment(e.state.comment),e.setState({comment:""})},e}return Object(w.a)(n,[{key:"render",value:function(){return r.a.createElement(U,null,r.a.createElement(q,null,r.a.createElement("h1",null,"Hi, how do you feel ?"),r.a.createElement(B,{onSubmit:this.handleSubmit},r.a.createElement(J,{value:this.state.comment,onChange:this.handleChange}),r.a.createElement(D,null,"Send"))))}}]),n}(o.Component),P=Object(s.b)(null,a)(function(e){var t=function(t){Object(E.a)(a,t);var n=Object(k.a)(a);function a(){return Object(O.a)(this,a),n.apply(this,arguments)}return Object(w.a)(a,[{key:"componentDidMount",value:function(){this.shouldNavigateAway()}},{key:"componentDidUpdate",value:function(){this.shouldNavigateAway()}},{key:"shouldNavigateAway",value:function(){this.props.auth||this.props.history.push("/")}},{key:"render",value:function(){return r.a.createElement(e,this.props)}}]),a}(o.Component);return Object(s.b)((function(e){return{auth:e.auth}}))(t)}(L)),z=function(e){Object(E.a)(n,e);var t=Object(k.a)(n);function n(){return Object(O.a)(this,n),t.apply(this,arguments)}return Object(w.a)(n,[{key:"renderComments",value:function(){return this.props.comments.map((function(e){return r.a.createElement("li",{key:e},e)}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h4",null,"Comment List"),r.a.createElement("ul",null,this.renderComments()))}}]),n}(o.Component);var F=Object(s.b)((function(e){return{comments:e.comments}}))(z);function M(){var e=Object(x.a)(["\n  font-style: Italic;\n  color: #666666;\n"]);return M=function(){return e},e}function G(){var e=Object(x.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: space-around;\n  font-size: 0.8em;\n  border-bottom: 1px solid pink;\n  padding: 0.5em 0;\n"]);return G=function(){return e},e}var K=C.a.nav(G()),Q=C.a.blockquote(M()),V=function(e){Object(E.a)(n,e);var t=Object(k.a)(n);function n(){return Object(O.a)(this,n),t.apply(this,arguments)}return Object(w.a)(n,[{key:"renderButton",value:function(){var e=this;return this.props.auth?r.a.createElement("button",{onClick:function(){return e.props.changeAuth(!1)}},"Sign Out"):r.a.createElement("button",{onClick:function(){return e.props.changeAuth(!0)}},"Sign In")}},{key:"renderHeader",value:function(){return r.a.createElement(K,null,r.a.createElement("div",null,r.a.createElement(u.b,{to:"/"},"Home")),r.a.createElement("div",null,r.a.createElement(u.b,{to:"/post"},"Post a Comment")),r.a.createElement("div",null,this.renderButton()))}},{key:"render",value:function(){return r.a.createElement("main",{className:"main-layout"},this.renderHeader(),r.a.createElement(l.a,{path:"/post",component:P}),r.a.createElement(l.a,{path:"/",exact:!0,component:F}),r.a.createElement(Q,null,"No one here around me can help me feel totally save. I guess, there never was. - Wang"),r.a.createElement("input",{type:"tel",autoFocus:!0}))}}]),n}(o.Component);var X=Object(s.b)((function(e){return{auth:e.auth}}),a)(V),Y=(n(71),n(72),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function Z(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(r.a.createElement(j,null,r.a.createElement(u.a,null,r.a.createElement(l.a,{path:"/",component:X}))),document.querySelector("#root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat(".","/service-worker.js");Y?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Z(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Z(t,e)}))}}()}},[[45,1,2]]]);
//# sourceMappingURL=main.d64345fe.chunk.js.map