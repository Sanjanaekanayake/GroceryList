(this["webpackJsonpgrocery-list"]=this["webpackJsonpgrocery-list"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(8),i=n.n(a),s=(n(14),n(9)),l=n(7),o=n(5),u=(n(15),n(16),n(0)),d=function(e){var t=e.search,n=e.setSearch;return Object(u.jsxs)("form",{className:"searchForm",onSubmit:function(e){return e.preventDefault()},children:[Object(u.jsx)("label",{htmlFor:"search",children:"Search"}),Object(u.jsx)("input",{id:"search",type:"text",role:"searchbox",placeholder:"Search Items",value:t,onChange:function(e){return n(e.target.value)}})]})},j=n(4),b=function(e){var t=e.newItem,n=e.setNewItem,r=e.handleSubmit,a=Object(c.useRef)();return Object(u.jsxs)("form",{className:"addForm",onSubmit:r,children:[Object(u.jsx)("label",{htmlFor:"addItem",children:"Add Item"}),Object(u.jsx)("input",{autoFocus:!0,ref:a,id:"addItem",type:"text",placeholder:"Add Item",required:!0,value:t,onChange:function(e){return n(e.target.value)}}),Object(u.jsx)("button",{type:"submit","aria-label":"Add Item",onClick:function(){return a.current.focus()},children:Object(u.jsx)(j.a,{})})]})},h=function(e){var t=e.items,n=e.handleCheck,c=e.handleDelete;return Object(u.jsx)("main",{children:t.length?Object(u.jsx)("ul",{children:t.map((function(e){return Object(u.jsxs)("li",{className:"item",children:[Object(u.jsx)("input",{type:"checkbox",onChange:function(){return n(e.id)},checked:e.checked}),Object(u.jsx)("label",{style:e.checked?{textDecoration:"line-through"}:null,onDoubleClick:function(){return n(e.id)},children:e.item}),Object(u.jsx)(j.b,{onClick:function(){return c(e.id)},role:"button",tabIndex:"0"})]},e.id)}))}):Object(u.jsx)("p",{style:{marginTop:"2rem"},children:"Your list is empty."})})};var m=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),i=Object(o.a)(a,2),j=i[0],m=i[1],O=Object(c.useState)(""),f=Object(o.a)(O,2),x=f[0],p=f[1],g=function(e){var t,c={id:n.length?n[n.length-1].id+1:1,checked:!1,item:e},a=[].concat(Object(s.a)(n),[c]);r(t=a),localStorage.setItem("shoppinglist",JSON.stringify(t))},v=new Date;return Object(u.jsxs)("div",{children:[Object(u.jsxs)("nav",{className:"navbar navbar-expand navbar-dark bg-dark",children:[Object(u.jsx)("a",{href:"/customers",className:"navbar-brand",children:"Grocery List"}),Object(u.jsx)("div",{className:"navbar-nav mr-auto"})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)(d,{search:x,setSearch:p}),Object(u.jsx)(b,{newItem:j,setNewItem:m,handleSubmit:function(e){e.preventDefault(),j&&(g(j),m(""))}}),Object(u.jsx)(h,{items:n.filter((function(e){return e.item.toLowerCase().includes(x.toLowerCase())})),handleCheck:function(e){var t=n.map((function(t){return t.id===e?Object(l.a)(Object(l.a)({},t),{},{checked:!t.checked}):t}));r(t),localStorage.setItem("shoppinglist",JSON.stringify(t))},handleDelete:function(e){var t=n.filter((function(t){return t.id!==e}));r(t),localStorage.setItem("shoppinglist",JSON.stringify(t))}}),Object(u.jsx)("footer",{children:Object(u.jsxs)("p",{children:["Copyright \xa9 ",v.getFullYear()]})})]})]})};i.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(m,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.471f1967.chunk.js.map