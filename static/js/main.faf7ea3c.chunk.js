(this["webpackJsonpWythoff's Queen"]=this["webpackJsonpWythoff's Queen"]||[]).push([[0],{28:function(e,t){},507:function(e,t,n){"use strict";n.r(t);var c=n(4),a=n.n(c),i=n(64),o=n.n(i),r=(n(70),n(71),n(8)),s=n(65),u=n(32),f=n(7),l=n.n(f),d=n(14),h=n(15),b=n(29),p=n.n(b),g=n(30),j=n(31),y=(n(93),n(5));function x(e){return Object(y.jsxs)("div",{className:"game-tile ".concat(e.highlighted?"highlighted":""),onClick:function(){e.highlighted&&e.callbackFunc({x:e.x,y:e.y})},children:[0===e.x&&0===e.y&&Object(y.jsx)(j.a,{icon:["fab","fort-awesome"],id:"castle-icon"}),e.occupied&&Object(y.jsx)(j.a,{icon:"crown",id:"crown-icon"})]})}n(95);var m=n(21);function w(e){var t=Object(c.useState)(null),n=Object(h.a)(t,2),a=n[0],i=n[1],o=Object(c.useState)(null),r=Object(h.a)(o,2),s=(r[0],r[1]),u=Object(c.useState)(null),f=Object(h.a)(u,2),b=f[0],j=f[1],w=Object(c.useState)(!0),O=Object(h.a)(w,2),v=O[0],k=O[1],I="https://6k6fezitqe.execute-api.us-west-1.amazonaws.com/";var C=Object(c.useCallback)(function(){var e=Object(d.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(v){e.next=2;break}return e.abrupt("return");case 2:return k(!1),i(t),e.next=6,new Promise((function(e){return setTimeout(e,500)}));case 6:Date.now(),n=Object(g.a)(Date.now(),'yyyymmdd"T"hhMMss"Z"'),p.a.post(I+"submitMove",{movePosition:t},{headers:{UserId:m.config.credentials.identityId,"X-Amz-Date":n}}).then(function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t),k(!0),s(null),i({x:t.data.position.x,y:t.data.position.y});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log(e),s(null)}));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[v]),D=Object(c.useCallback)((function(){for(var t=[],n=e.height-1;n>=0;n--)for(var c=0;c<e.width;c++)t.push([c,n]);j(t.map((function(t){return Object(y.jsx)(x,{x:t[0],y:t[1],highlighted:a&&t[0]<=a.x&&t[1]<=a.y&&(t[0]===a.x||t[1]===a.y||t[0]-t[1]===a.x-a.y)&&!(t[0]===a.x&&t[1]===a.y),occupied:a&&t[0]===a.x&&t[1]===a.y,callbackFunc:C},t[1]*e.width+t[0])})))}),[e.width,e.height,a,C]);return Object(c.useEffect)((function(){!function(){var e=Date.now();e=Object(g.a)(Date.now(),'yyyymmdd"T"hhMMss"Z"'),p.a.post(I+"startGame",{},{headers:{UserId:m.config.credentials.identityId,"X-Amz-Date":e}}).then((function(e){console.log(e),i({x:e.data.position.x,y:e.data.position.y}),s(null)})).catch((function(e){console.log(e),s(e)}))}()}),[]),Object(c.useEffect)((function(){D()}),[a,D]),Object(y.jsx)("div",{id:"gameboard",style:{gridTemplate:"repeat("+e.height+", 1fr) / repeat("+e.width+", 1fr)"},children:b})}var O=n(21);function v(){return k.apply(this,arguments)}function k(){return(k=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.config.credentials.refreshPromise();case 2:console.log(O.config.credentials),setTimeout(v,O.config.credentials.expireTime-new Date);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}r.b.add(u.b,s.a,u.a);var I=n(21);I.config.region="us-west-1",I.config.credentials=new I.CognitoIdentityCredentials({IdentityPoolId:"us-west-1:4f4c2491-7c42-4063-aad0-1ea855da82b9"});var C=function(){return v(),console.log(O.config.credentials),Object(y.jsx)("div",{className:"App",children:Object(y.jsx)(w,{width:25,height:25})})},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,508)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),i(e),o(e)}))};o.a.render(Object(y.jsx)(a.a.StrictMode,{children:Object(y.jsx)(C,{})}),document.getElementById("root")),D()},70:function(e,t,n){},71:function(e,t,n){},93:function(e,t,n){},95:function(e,t,n){}},[[507,1,2]]]);
//# sourceMappingURL=main.faf7ea3c.chunk.js.map