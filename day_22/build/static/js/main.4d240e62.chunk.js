(this.webpackJsonpday_22=this.webpackJsonpday_22||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(7),i=n.n(s),o=(n(13),n(3)),r=n(0),m=function(e){var t=e.memeData,n=e.handleClick;return Object(r.jsx)("div",{onClick:function(){return n(t)},className:"meme-card",children:Object(r.jsx)("div",{style:{backgroundImage:"url(".concat(t.url,")")},className:"image"})})},l=function(e){var t=e.memeTemplates,n=e.generateMeme;return Object(r.jsx)("div",{className:"meme-container",children:null!==t?t.map((function(e,c){return Object(r.jsx)(m,{handleClick:n,memeData:t[c]},c)})):""})},u=n(8),d=n(4),j=function(e){var t=e.memeData,n=e.chooseTemplate,s=e.updateMemeData,i=Object(c.useState)({template_id:t.id,username:"destro1108",password:"Xyro123456",boxes:[]}),m=Object(o.a)(i,2),l=m[0],j=m[1];console.log(t);var b=400*(t.width/t.height);return Object(r.jsx)("div",{className:"gen-meme-wrapper",children:t&&Object(r.jsxs)(a.a.Fragment,{children:[Object(r.jsx)("div",{style:{backgroundImage:"url(".concat(t.url,")"),width:400,height:b},className:"gen-image",children:" "}),Object(r.jsx)("div",{className:"meme-inputs",children:Object(u.a)(Array(t.box_count)).map((function(e,t){return Object(r.jsxs)("div",{className:"meme-input-div",children:[" ",Object(r.jsx)("input",{onChange:function(e){var n=l.boxes;n[t]={text:e.target.value},j(Object(d.a)(Object(d.a)({},l),{},{boxes:n}))},type:"text",className:"meme-input",placeholder:"Meme Caption ".concat(t+1),name:"Caption".concat(t+1),id:"Caption".concat(t+1)},t)," "]})}))}),Object(r.jsxs)("div",{className:"meme-actions",children:[Object(r.jsx)("div",{onClick:function(){!function(){var e="https://api.imgflip.com/caption_image?template_id=".concat(l.template_id,"&username=").concat(l.username,"&password=").concat(l.password);l.boxes.forEach((function(t,n){e+="&boxes[".concat(n,"][text]=").concat(t.text)})),fetch(e).then((function(e){return e.json()})).then((function(e){console.log(e),s(Object(d.a)(Object(d.a)({},t),{},{url:e.data.url}))}))}()},className:"button",children:"Generate Meme"}),Object(r.jsx)("div",{onClick:function(){n()},className:"button",children:"Choose Template"})]})]})})},b=function(){var e=Object(c.useState)(null),t=Object(o.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(null),i=Object(o.a)(s,2),m=i[0],u=i[1];Object(c.useEffect)((function(){fetch("https://api.imgflip.com/get_memes").then((function(e){return e.json()})).then((function(e){a(e.data.memes)}))}),[]);var d=function(e){u(e)};return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("header",{className:"App-header",children:Object(r.jsx)("h2",{children:"Meme Generator!"})}),Object(r.jsx)("div",{className:"content",children:n&&!m?Object(r.jsx)(l,{memeTemplates:n,generateMeme:d}):m&&Object(r.jsx)(j,{chooseTemplate:function(){return d(null)},updateMemeData:function(e){u(e)},memeData:m})})]})};i.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(b,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.4d240e62.chunk.js.map