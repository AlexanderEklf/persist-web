(this["webpackJsonppersist-web"]=this["webpackJsonppersist-web"]||[]).push([[0],{10:function(e,t,a){e.exports={card:"playercard_card__28PrA",cardContent:"playercard_cardContent__LK-Oy",cardTitle:"playercard_cardTitle__2asJ0",cardBody:"playercard_cardBody__1x22q",discord:"playercard_discord__2ywNm",link:"playercard_link__BxI36",battleTag:"playercard_battleTag__bcHaR",avatar:"playercard_avatar__3eBWT",container:"playercard_container__1X4yZ"}},14:function(e,t,a){e.exports={container:"information_container__24QUx",item:"information_item__dwx53",smallParagraph:"information_smallParagraph__jW77H"}},20:function(e,t,a){e.exports={container:"apply_container__sBgYU",inputForm:"apply_inputForm__ahb6w",applyButton:"apply_applyButton__wj88G"}},26:function(e,t,a){e.exports={container:"home_container__3RByl",cards:"home_cards__10Wrr",card:"home_card__1mOj3"}},29:function(e,t,a){e.exports={wrapper:"layout_wrapper__1VWRz",content:"layout_content__gm-OO"}},36:function(e,t,a){e.exports={footer:"footer_footer__sC7mT"}},37:function(e,t,a){e.exports={navbar:"navbar_navbar__2ATdV",icon:"navbar_icon__5a3Ie"}},44:function(e,t,a){},46:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),s=a.n(c),i=(a(44),a(12)),o=a.n(i),l=a(16),d=a(7),u=(a(46),a(26)),j=a.n(u),m=a(10),p=a.n(m),b=a(19),h=a(17),O=a(1),x=function(e){var t=e.cardInfo,a=Object(h.useToasts)().addToast,n=function(e){var t=document.createElement("textarea");document.body.appendChild(t),t.value=e,t.select(),document.execCommand("copy"),document.body.removeChild(t),a("".concat(e," copied to clipboard"),{appearance:"success"})},r=new URL("/profile/wow/character/twisting-nether/".concat(t.ingameName.toLowerCase(),"/character-media"),"https://eu.api.blizzard.com");r.search=new URLSearchParams({namespace:"profile-eu",locale:"en_GB"}).toString();var c=Object(b.b)(r.toString(),{},[]),s=c.loading,i=c.error,o=c.data,l=void 0===o?{}:o;return Object(O.jsxs)(O.Fragment,{children:[i&&"Error",s&&"Loading..",!s&&Object(O.jsx)("div",{className:p.a.card,style:{backgroundImage:"url(".concat(l.assets[2].value,")"),backgroundSize:"cover"},children:Object(O.jsxs)("div",{className:p.a.cardContent,children:[Object(O.jsx)("h2",{className:p.a.cardTitle,children:t.ingameName}),Object(O.jsxs)("div",{className:p.a.cardBody,children:[Object(O.jsx)("p",{className:p.a.battleTag,children:Object(O.jsx)("button",{className:p.a.link,onClick:function(){return n(t.battleTag)},children:t.battleTag})}),Object(O.jsx)("p",{className:p.a.discord,children:Object(O.jsx)("button",{className:p.a.link,onClick:function(){return n(t.discordTag)},children:t.discordTag})})]})]})})]})},f=a.p+"static/media/cover.e91ff8ca.png",g=a(14),_=a.n(g),v=function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:_.a.container,children:[Object(O.jsxs)("div",{className:_.a.item,children:[Object(O.jsx)("h1",{children:"Allm\xe4n information"}),Object(O.jsx)("p",{children:"What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."})]}),Object(O.jsxs)("div",{className:_.a.item,children:[Object(O.jsx)("h1",{children:"Raidtider"}),Object(O.jsxs)("p",{className:_.a.smallParagraph,children:[Object(O.jsx)("span",{children:"M\xe5ndagar 20:00-23:00"}),Object(O.jsx)("br",{}),Object(O.jsx)("span",{children:"S\xf6ndagar 20:00-23:00"})]})]}),Object(O.jsxs)("div",{className:_.a.item,children:[Object(O.jsx)("h1",{children:"Vi s\xf6ker"}),Object(O.jsx)("p",{className:_.a.smallParagraph,children:Object(O.jsx)("span",{children:"What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"})})]})]})})};var y=function(){return Object(n.useEffect)((function(){console.log("Component Home mounted")})),Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:j.a.container,children:[Object(O.jsx)("img",{src:f}),Object(O.jsx)(v,{}),Object(O.jsxs)("div",{className:j.a.cards,children:[Object(O.jsx)(x,{cardInfo:{battleTag:"#12341",discordTag:"Discrod#1234",ingameName:"Malydred"}}),Object(O.jsx)(x,{cardInfo:{battleTag:"#12341",discordTag:"Discrod#1234",ingameName:"N\xf3rre"}}),Object(O.jsx)(x,{cardInfo:{battleTag:"#12341",discordTag:"Discrod#1234",ingameName:"Fellicious"}})]})]})})},N=a(36),k=a.n(N),w=function(){return Object(O.jsx)("div",{className:k.a.footer,children:Object(O.jsx)("h4",{children:"Footer!"})})},T=a(15),I=a(37),C=a.n(I),S=function(){return Object(O.jsx)("div",{className:C.a.navbar,children:Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:Object(O.jsx)(T.b,{to:"/home",children:"Hem"})}),Object(O.jsx)("li",{children:Object(O.jsx)(T.b,{to:"/apply",children:"Ans\xf6k"})}),Object(O.jsx)("li",{children:Object(O.jsx)(T.b,{to:"/contact",children:"Kontakt"})})]})})},F=a(29),B=a.n(F),L=function(e){e.title;var t=e.children;return Object(O.jsxs)("div",{className:B.a.wrapper,children:[Object(O.jsx)(S,{}),Object(O.jsx)("div",{className:B.a.content,children:t}),Object(O.jsx)(w,{})]})},P=a(18),z=a(30),A=a(20),D=a.n(A),R=function(){var e=function(e){var t=Object(n.useState)(e),a=Object(d.a)(t,2),r=a[0],c=a[1],s=Object(n.useState)({}),i=Object(d.a)(s,2),o=i[0],l=i[1],u=Object(n.useState)(!1),j=Object(d.a)(u,2),m=(j[0],j[1]);return[r,function(e){c(Object(z.a)(Object(z.a)({},r),{},Object(P.a)({},e.target.name,e.target.value)))},function(e){e.preventDefault(),l(function(e){var t={about:"",characterName:"",class:"",firstName:"",lastName:""};return e.firstName.trim()||(t.firstName="F\xf6rnamn \xe4r obligatoriskt"),e.lastName.trim()||(t.lastName="Efternamn \xe4r obligatoriskt"),e.characterName.trim()||(t.characterName="Namn p\xe5 din karakt\xe4r \xe4r obligatoriskt"),e.class.trim()||(t.class="Class/Spec \xe4r obligatoriskt"),t}(r)),m(!0)},o]}({firstName:"",lastName:"",about:"",class:"",characterName:""}),t=Object(d.a)(e,4),a=t[0],r=t[1],c=t[2],s=t[3],i=n.useState(!1),o=Object(d.a)(i,2),l=o[0];o[1];return Object(O.jsx)(O.Fragment,{children:l?Object(O.jsx)("div",{children:"Tack f\xf6r din ans\xf6kan!"}):Object(O.jsx)("div",{className:D.a.container,children:Object(O.jsxs)("form",{onSubmit:c,children:[Object(O.jsxs)("div",{className:D.a.inputForm,children:[Object(O.jsx)("input",{name:"firstName",placeholder:"F\xf6rnamn*",value:a.firstName,onChange:r}),s.firstName&&Object(O.jsx)("p",{children:s.firstName}),Object(O.jsx)("input",{name:"lastName",value:a.lastName,placeholder:"Efternamn*",onChange:r}),s.lastName&&Object(O.jsx)("p",{children:s.lastName}),Object(O.jsx)("input",{name:"class",value:a.class,placeholder:"Vilken class/spec s\xf6ker du som*",onChange:r}),s.class&&Object(O.jsx)("p",{children:s.class}),Object(O.jsx)("input",{name:"characterName",value:a.characterName,placeholder:"Vad heter karakt\xe4ren du s\xf6ker som?*",onChange:r}),s.characterName&&Object(O.jsx)("p",{children:s.characterName}),Object(O.jsx)("textarea",{name:"about",value:a.about,placeholder:"Ber\xe4tta lite om dig sj\xe4lv",onChange:r})]}),Object(O.jsx)("input",{type:"submit"}),Object(O.jsx)("button",{type:"submit",className:D.a.applyButton,children:"Apply"})]})})})},W=a(2);var E=function(){var e=Object(l.a)(o.a.mark((function e(t,a,n){var r,c,s,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=new Headers).append("Authorization","Basic "+btoa(t+":"+a)),(c=new FormData).append("grant_type","client_credentials"),e.next=6,fetch(n,{method:"POST",headers:r,body:c}).then((function(e){return e.json()})).then((function(e){return e}));case 6:return s=e.sent,i=s.access_token,console.log(i),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}();var J=function(){var e=function(e,t){var a=Object(n.useState)((function(){try{var a=window.localStorage.getItem(e);return a?JSON.parse(a):t}catch(n){return console.log(n),t}})),r=Object(d.a)(a,2),c=r[0],s=r[1];return[c,function(t){try{var a=t instanceof Function?t(c):t;s(a),window.localStorage.setItem(e,JSON.stringify(a))}catch(n){console.log(n)}}]}("token",""),t=Object(d.a)(e,2),a=t[0],r=t[1],c={interceptors:{request:function(){var e=Object(l.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.options,t.url,t.path,t.route,e.next=3,E("03b3d67a469e4f878e6964d39a389cb6","7WpOlR8GvXr0wOQnJwpquily0xl6oVe3","https://eu.battle.net/oauth/token");case 3:return a=e.sent,r(a),n.headers.Authorization="Bearer ".concat(a),e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),response:function(){var e=Object(l.a)(o.a.mark((function e(t){var a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.response,n=a,e.abrupt("return",n);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}};return Object(O.jsx)(b.a,{url:"https://eu.api.blizzard.com",options:c,children:Object(O.jsx)(h.ToastProvider,{placement:"bottom-center",autoDismiss:!0,children:Object(O.jsx)(T.a,{children:Object(O.jsx)(W.d,{children:Object(O.jsxs)(L,{title:"asd",children:[Object(O.jsx)(W.b,{path:"/home",children:Object(O.jsx)(y,{})}),Object(O.jsx)(W.b,{path:"/apply",children:Object(O.jsx)(R,{})}),Object(O.jsx)(W.b,{path:"/",children:Object(O.jsx)(W.a,{to:"/home"})})]})})})})})},V=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,63)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))};a(59).config(),s.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(J,{})}),document.getElementById("root")),V()}},[[62,1,2]]]);
//# sourceMappingURL=main.67f06595.chunk.js.map