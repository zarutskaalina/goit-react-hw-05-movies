"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{186:function(e,r,t){t.r(r);var n=t(861),a=t(439),s=t(757),c=t.n(s),u=t(791),i=t(294),o=t(258),p=t(184);r.default=function(e){var r=e.movieId,t=(0,u.useState)([]),s=(0,a.Z)(t,2),h=s[0],l=s[1],d=(0,u.useState)(!1),v=(0,a.Z)(d,2),f=v[0],m=v[1],x=(0,u.useState)(null),k=(0,a.Z)(x,2),w=k[0],j=k[1];return(0,u.useEffect)((function(){var e=function(){var e=(0,n.Z)(c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,m(!0),e.next=4,i.Z.get("https://api.themoviedb.org/3/movie/".concat(r,"}/reviews?language=en-US&page=1&api_key=a98bc7353de84626309d54158846e0b4"));case 4:t=e.sent,n=t.data,l(n.results),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),j(e.t0.message);case 12:return e.prev=12,m(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[r]),(0,p.jsxs)("div",{children:[f&&(0,p.jsx)(o.a,{}),null!=w&&(0,p.jsxs)("p",{children:["Sorry, an error occurred ",w,"!"]}),h.map((function(e){return(0,p.jsxs)("div",{children:[(0,p.jsxs)("p",{children:["Author: ",e.author]}),""!==e.content?(0,p.jsx)("p",{children:e.content}):(0,p.jsx)("p",{children:"Sorry, there are no reviews!"})]},e.id)}))]})}}}]);
//# sourceMappingURL=186.0d0c873a.chunk.js.map