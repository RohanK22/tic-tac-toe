(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(6),i=n.n(r),l=(n(12),n(7)),s=n(3),u=(n(13),n(0));var j=function(){var e=Object(c.useState)(Array(9).fill(null)),t=Object(s.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!0),i=Object(s.a)(r,2),j=i[0],o=i[1],b=Object(c.useState)(null),d=Object(s.a)(b,2),O=d[0],f=d[1],h=function(e){var t=Object(l.a)(n);O||null!=t[e]||(t[e]=j?"X":"O",a(t),o(!j),f(function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n++){var c=Object(s.a)(t[n],3),a=c[0],r=c[1],i=c[2];if(e[a]&&e[a]===e[r]&&e[a]===e[i])return e[a]}return null}(t)))};return Object(c.useEffect)((function(){document.getElementById("win-text").innerHTML=O?"Winner: "+O+"! Refresh to play again":"Next Player: "+(j?"X":"O")}),[n]),Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{className:"heading",children:"Tic-Tac-Toe"}),Object(u.jsx)("div",{className:"board",children:n.map((function(e,t){return Object(u.jsx)("div",{className:"square",onClick:function(){h(t)},children:null===e?"_":e},t)}))}),Object(u.jsx)("div",{id:"win-text",children:O?"Winner: "+O:"Next Player: "+(j?"X":"O")})]})})};i.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(j,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.f42a0996.chunk.js.map