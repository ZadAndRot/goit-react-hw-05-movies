"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[953],{6953:function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});var a=n(885),c={nav:"Movies_nav__hr2jX"},r=n(2791),i=n(4569),u=n.n(i),o=n(501),s=n(184),l=function(e){var t=e.filter,n=e.onSetFilter,i=(0,r.useState)(t||""),l=(0,a.Z)(i,2),f=l[0],d=l[1],h=(0,r.useState)([]),m=(0,a.Z)(h,2),p=m[0],v=m[1],g=(0,o.lr)(),b=(0,a.Z)(g,2)[1];(0,r.useEffect)((function(){""!==t&&u().get("https://api.themoviedb.org/3/search/movie?api_key=d33121ec8e4d8e2727fc1b2edf68984b&language=en-US&query=".concat(t,"&page=1&include_adult=false")).then((function(e){v(e.data.results)})).catch((function(e){return console.log(e)}))}),[t]);return(0,s.jsxs)("div",{className:c.movies,children:[(0,s.jsxs)("form",{onSubmit:function(e){!function(e){e.preventDefault(),u().get("https://api.themoviedb.org/3/search/movie?api_key=d33121ec8e4d8e2727fc1b2edf68984b&language=en-US&query=".concat(f,"&page=1&include_adult=false")).then((function(e){v(e.data.results)})).catch((function(e){return console.log(e)})),n(f),b({query:f})}(e)},children:[(0,s.jsx)("input",{type:"text",value:f,onChange:function(e){d(e.target.value)}}),(0,s.jsx)("button",{type:"submit",children:"Search"})]}),(0,s.jsx)("div",{children:p.map((function(e){return(0,s.jsxs)(r.Fragment,{children:[(0,s.jsx)(o.OL,{className:c.nav,to:"/movies/".concat(e.id),state:{from:"/movies/",query:t},children:e.original_title}),(0,s.jsx)("br",{})]},e.id)}))})]})}}}]);
//# sourceMappingURL=953.9d8c729a.chunk.js.map