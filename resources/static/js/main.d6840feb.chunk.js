(this["webpackJsonpentando-mf-template"]=this["webpackJsonpentando-mf-template"]||[]).push([[0],{18:function(t,e,n){"use strict";n.r(e);var a=n(4),c=n(5),r=n(6),i=n(8),o=n(12),u=n(1),s=n.n(u),h=n(11),l=n.n(h),f=n(10),m=n(0),j=function(t){Object(r.a)(n,t);var e=Object(i.a)(n);function n(t){var c;return Object(a.a)(this,n),(c=e.call(this,t)).state={name:""},c}return Object(c.a)(n,[{key:"handleNameChange",value:function(t){this.setState((function(e){return Object(f.a)(Object(f.a)({},e),{},{name:t})}))}},{key:"render",value:function(){var t=this,e=this.state.name;return Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:"Sample Entando 6 Widget Configuration"}),Object(m.jsx)("label",{htmlFor:"name",children:"Name"}),Object(m.jsx)("input",{id:"name",onChange:function(e){return t.handleNameChange(e.target.value)},value:e})]})}}]),n}(s.a.Component),b=function(t){Object(r.a)(n,t);var e=Object(i.a)(n);function n(){var t;return Object(a.a)(this,n),(t=e.call(this)).reactRootRef=s.a.createRef(),t.mountPoint=null,t}return Object(c.a)(n,[{key:"config",get:function(){return this.reactRootRef.current?this.reactRootRef.current.state:{}},set:function(t){return this.reactRootRef.current.setState(t)}},{key:"connectedCallback",value:function(){this.mountPoint=document.createElement("div"),this.appendChild(this.mountPoint),l.a.render(Object(m.jsx)(j,{ref:this.reactRootRef}),this.mountPoint)}}]),n}(Object(o.a)(HTMLElement));customElements.define("my-widget-config",b)}},[[18,1,2]]]);
//# sourceMappingURL=main.d6840feb.chunk.js.map