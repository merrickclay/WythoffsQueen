(this["webpackJsonpWythoff's Queen"]=this["webpackJsonpWythoff's Queen"]||[]).push([[0],{28:function(e,t){},508:function(e,t,n){"use strict";n.r(t);var c=n(5),a=n.n(c),i=n(64),s=n.n(i),o=(n(70),n(71),n(9)),l=n(65),r=n(32),u=n(8),h=n.n(u),d=n(15),b=n(7),j=n(29),f=n.n(j),g=n(30),x=n(31),m=(n(93),n(2));function O(e){return Object(m.jsxs)("div",{className:"game-tile ".concat(e.highlighted?"highlighted":""),onClick:function(){e.highlighted&&e.callbackFunc({x:e.x,y:e.y})},children:[e.occupied&&Object(m.jsx)(x.a,{icon:"crown",id:"crown-icon"}),0===e.x&&0===e.y&&Object(m.jsx)(x.a,{icon:["fab","fort-awesome"],id:"castle-icon",className:e.occupied?"captured":""})]})}n(95),n(96);function p(e){var t=Object(c.useState)("false"),n=Object(b.a)(t,2),a=n[0],i=n[1];return Object(c.useEffect)((function(){i(e.visible)}),[e.visible]),Object(m.jsx)("div",{className:"overlay",style:{visibility:a?"visible":"hidden",opacity:a?"1":"0"},children:Object(m.jsxs)("div",{className:"popup",children:[Object(m.jsx)("h2",{children:e.title}),Object(m.jsx)("h4",{children:e.message}),Object(m.jsx)("div",{children:e.challenge}),Object(m.jsx)("button",{onClick:function(){i(!1),e.onClickFunc()},children:e.buttonText})]})})}var y=n(21),v={title:"You won!",message:"Congratulations! You successfully beat the AI.",challenge:"Can you do it again?",buttonText:"Start New Game"},w={title:"You lost!",message:"Come on, you were defeated by an AI...",challenge:"Give it another shot!",buttonText:"Start New Game"};function T(e){var t=Object(c.useState)(null),n=Object(b.a)(t,2),a=n[0],i=n[1],s=Object(c.useState)(null),o=Object(b.a)(s,2),l=(o[0],o[1]),r=Object(c.useState)(null),u=Object(b.a)(r,2),j=u[0],x=u[1],T=Object(c.useState)(!0),I=Object(b.a)(T,2),k=I[0],C=I[1],S=Object(c.useState)(!0),A=Object(b.a)(S,2),F=A[0],N=A[1],P=Object(c.useState)("IN_PROGRESS"),D=Object(b.a)(P,2),E=D[0],Y=D[1],M="https://6k6fezitqe.execute-api.us-west-1.amazonaws.com/";function q(){var e=Date.now();e=Object(g.a)(Date.now(),'yyyymmdd"T"hhMMss"Z"'),f.a.post(M+"startGame",{},{headers:{UserId:y.config.credentials.identityId,"X-Amz-Date":e}}).then((function(e){console.log(e),i({x:e.data.position.x,y:e.data.position.y}),console.log(e.data.gameStatus),Y(e.data.gameStatus),l(null)})).catch((function(e){console.log(e),l(e)}))}var G=Object(c.useCallback)(function(){var e=Object(d.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(k){e.next=2;break}return e.abrupt("return");case 2:return N(!1),C(!1),i(t),e.next=7,new Promise((function(e){return setTimeout(e,300)}));case 7:Date.now(),n=Object(g.a)(Date.now(),'yyyymmdd"T"hhMMss"Z"'),f.a.post(M+"submitMove",{movePosition:t},{headers:{UserId:y.config.credentials.identityId,"X-Amz-Date":n}}).then(function(){var e=Object(d.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t),l(null),i({x:t.data.position.x,y:t.data.position.y}),C(!0),console.log(t.data.gameStatus),Y(t.data.gameStatus);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log(e),l(null)})).finally(N(!0));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[k]),R=Object(c.useCallback)((function(){for(var t=[],n=e.height-1;n>=0;n--)for(var c=0;c<e.width;c++)t.push([c,n]);x(t.map((function(t){return Object(m.jsx)(O,{x:t[0],y:t[1],highlighted:F&&a&&t[0]<=a.x&&t[1]<=a.y&&(t[0]===a.x||t[1]===a.y||t[0]-t[1]===a.x-a.y)&&!(t[0]===a.x&&t[1]===a.y),occupied:a&&t[0]===a.x&&t[1]===a.y,callbackFunc:G},t[1]*e.width+t[0])})))}),[e.width,e.height,a,G]);return Object(c.useEffect)((function(){q()}),[]),Object(c.useEffect)((function(){R()}),[a,R]),Object(m.jsxs)("div",{id:"gameboard",style:{gridTemplate:"repeat("+e.height+", 1fr) / repeat("+e.width+", 1fr)"},children:[j,"PLAYER_VICTORY"===E?Object(m.jsx)(p,{title:v.title,message:v.message,challenge:v.challenge,buttonText:v.buttonText,visible:!0,onClickFunc:q}):"PLAYER_DEFEAT"===E?Object(m.jsx)(p,{title:w.title,message:w.message,challenge:w.challenge,buttonText:w.buttonText,visible:!0,onClickFunc:q}):Object(m.jsx)(p,{title:"",message:"",challenge:"",buttonText:"",visible:!1,onClickFunc:null})]})}var I=n(21);function k(){return C.apply(this,arguments)}function C(){return(C=Object(d.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.config.credentials.refreshPromise();case 2:console.log(I.config.credentials),setTimeout(k,I.config.credentials.expireTime-new Date);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}o.b.add(r.b,l.a,r.a);var S=n(21);S.config.region="us-west-1",S.config.credentials=new S.CognitoIdentityCredentials({IdentityPoolId:"us-west-1:4f4c2491-7c42-4063-aad0-1ea855da82b9"});var A=function(){return k(),console.log(I.config.credentials),Object(m.jsxs)("div",{className:"App container",children:[Object(m.jsx)("h1",{children:"Wythoff's Queen"}),Object(m.jsx)(T,{width:25,height:25}),Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("h2",{children:"How to Play:"}),Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:"You and the AI will alternate taking turns moving the queen."}),Object(m.jsx)("li",{children:"When moving the queen, each player may move the queen any number of cells left, down, or diagonally left and down."}),Object(m.jsx)("li",{children:"The player that moves the queen to her castle wins."})]})]}),Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("h2",{children:"Is this AI beatable?"}),Object(m.jsxs)("p",{children:["Yes, this AI can be defeated using proper strategy. The challenge is not in beating the AI once, but rather developing a strategy that consistently beats the AI."," "]})]})]})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,509)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))};s.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(A,{})}),document.getElementById("root")),F()},70:function(e,t,n){},71:function(e,t,n){},93:function(e,t,n){},95:function(e,t,n){},96:function(e,t,n){}},[[508,1,2]]]);
//# sourceMappingURL=main.780d8c3a.chunk.js.map