(this.webpackJsonpcalc1=this.webpackJsonpcalc1||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),u=n(4),s=n.n(u),r=(n(9),n(2)),o=n(0),i=function(e){var t=e.change,n=e.op,c=e.num1,a=e.num2,u=["+","-","*","/","^","%"];var s=function(){u.includes(n)?t("+"===n?""+(c+a):"-"===n?""+(c-a):"*"===n?""+c*a:"/"===n?0===a?"Invalid Input":""+c/a:"^"===n?c<=0?"Invalid Input":""+(c^a):0===a?"Invalid Input":""+c%a):t("Invalid Input")};return Object(o.jsx)("button",{className:"space",onClick:function(){return s()},children:"Calculate"})};n(11);function l(e){var t=e.setNum,n=e.num;return Object(o.jsx)("input",{className:"nums",value:n,type:"number",onChange:function(e){return t(+e.target.value)}})}var j=function(e){var t=e.setOp,n=e.op;return Object(o.jsx)("input",{id:"op",value:n,type:"text",onChange:function(e){return t(e.target.value)}})};var p=function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),n=t[0],a=t[1],u=Object(c.useState)(""),s=Object(r.a)(u,2),p=s[0],b=s[1],d=Object(c.useState)(0),O=Object(r.a)(d,2),h=O[0],m=O[1],v=Object(c.useState)(0),g=Object(r.a)(v,2),x=g[0],f=g[1];return console.log(h),console.log(p),console.log(x),Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("h1",{children:"Calculator App"}),Object(o.jsx)("p",{children:"Input a number, an operation, and then another number.  The supported operations are +, -, *, /, ^, and %."}),Object(o.jsxs)("div",{id:"calculate",children:[Object(o.jsx)("p",{children:"Happy Calculating!"}),Object(o.jsx)(l,{setNum:m,num:h}),Object(o.jsx)(j,{setOp:b,op:p}),Object(o.jsx)(l,{setNum:f,num:x}),Object(o.jsxs)("p",{id:"ans",children:[" = ",n]})]}),Object(o.jsx)(i,{change:a,op:p,num1:h,num2:x})]})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,u=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),u(e),s(e)}))};s.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(p,{})}),document.getElementById("root")),b()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.dac8d683.chunk.js.map