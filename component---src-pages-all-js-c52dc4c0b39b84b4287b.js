(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{269:function(e,t,n){"use strict";n.r(t),n.d(t,"AllQuery",function(){return g}),n(136);var r=n(0),a=n.n(r),i=n(4),o=n.n(i),l=n(64),m=n(277),c=n(283),s=n(278),p=m.b.div.withConfig({displayName:"all__Content"})(["background:",";grid-column:2;box-shadow:0 4px 120px rgba(0,0,0,0.1);border-radius:1rem;padding:3rem 6rem;@media ","{padding:3rem 2rem;}@media ","{padding:2rem 1.5rem;}overflow:hidden;"],function(e){return e.theme.colors.bg},s.a.tablet,s.a.phone),u=m.b.div.withConfig({displayName:"all__Hero"})(["grid-column:2;padding:3rem 2rem 6rem 2rem;text-shadow:0 12px 30px rgba(0,0,0,0.15);color:",";p{font-size:1.68rem;margin-top:-1rem;@media ","{font-size:1.25rem;}@media ","{font-size:1.45rem;}}"],function(e){return e.theme.colors.grey.dark},s.a.phone,s.a.tablet),d=function(e){var t=e.data.allMarkdownRemark.edges;return a.a.createElement(c.d,null,a.a.createElement(c.i,null,a.a.createElement(u,null,a.a.createElement("h1",null,"Salam!"),a.a.createElement("p",null,"Man Mehrad Rousta hastam va in noxostin site Gatsby.js e man ast."),a.a.createElement(l.Link,{to:"/contact"},a.a.createElement(c.b,{big:!0},a.a.createElement("svg",{width:"1792",height:"1792",viewBox:"0 0 1792 1792",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("path",{d:"M1764 11q33 24 27 64l-256 1536q-5 29-32 45-14 8-31 8-11 0-24-5l-453-185-242 295q-18 23-49 23-13 0-22-4-19-7-30.5-23.5t-11.5-36.5v-349l864-1059-1069 925-395-162q-37-14-40-55-2-40 32-59l1664-960q15-9 32-9 20 0 36 11z"})),"Tamas"))),a.a.createElement(p,null,a.a.createElement(c.g,null,"Axarin Neveshteha"),t.map(function(e){return a.a.createElement(c.a,{title:e.node.frontmatter.title,date:e.node.frontmatter.date,excerpt:e.node.excerpt,timeToRead:e.node.timeToRead,slug:e.node.fields.slug,category:e.node.frontmatter.category,podcast:e.node.frontmatter.podcast,key:e.node.fields.slug})}))))};t.default=d,d.propTypes={data:o.a.shape({allMarkdownRemark:o.a.shape({edges:o.a.array.isRequired})}).isRequired};var g="453584811"},278:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r={tablet:"(max-width: 1200px)",phone:"(max-width: 600px)"}},279:function(e,t){e.exports={pathPrefix:"/",siteTitle:"Alterview Podcasts",siteTitleAlt:"Alterview Podcasts - پادکست‌های آلترویو",siteUrl:"https://alterview.xyz/podcasts",siteLanguage:"fa",siteBanner:"/social/banner.jpg",favicon:"src/favicon.png",siteDescription:"پادکست‌های تولیدی توسط تیم آلترویو را از اینجا بشنوید!",userTwitter:"@alterviewxyz",ogSiteName:"alterviewxyz",themeColor:"#3498DB",backgroundColor:"#2b2e3c",headerFontFamily:"Bitter",bodyFontFamily:"Open Sans",baseFontSize:"18px"}},282:function(e){e.exports={data:{site:{buildTime:"19.08.2018"}}}},283:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(4),o=n.n(i),l=n(277),m=n(64),c=n(285),s=n.n(c),p=l.b.article.withConfig({displayName:"Article__Post"})(["display:flex;flex-direction:column;margin-top:3.5rem;margin-bottom:3.5rem;"]),u=l.b.h2.withConfig({displayName:"Article__Title"})(["position:relative;text-shadow:0 12px 30px rgba(0,0,0,0.15);margin-bottom:0.75rem;"]),d=l.b.span.withConfig({displayName:"Article__Initiale"})(["position:absolute;font-size:7rem;transform:translate(-50%,-50%);opacity:0.08;user-select:none;z-index:-1;"]),g=l.b.p.withConfig({displayName:"Article__Excerpt"})(["grid-column:-1 / 1;margin-top:1rem;margin-bottom:1rem;"]),f=function(e){var t=e.title,n=e.date,r=e.excerpt,i=e.slug,o=e.timeToRead,l=e.category,c=e.podcast,f=t.charAt(0);return a.a.createElement(p,null,a.a.createElement(u,null,a.a.createElement(d,null,f),a.a.createElement(m.Link,{to:i},t)),a.a.createElement(J,null,n," — ",o," Min Read — In"," ",a.a.createElement(m.Link,{to:"/categories/"+s()(l)},l),"|",a.a.createElement(m.Link,{to:"/podcasts/"+s()(c)},c)),a.a.createElement(g,null,r))},h=f;f.propTypes={title:o.a.string.isRequired,date:o.a.string.isRequired,excerpt:o.a.string.isRequired,slug:o.a.string.isRequired,timeToRead:o.a.number.isRequired,category:o.a.string.isRequired,podcast:o.a.string.isRequired},n(286);var b=n(280),y=l.b.button.withConfig({displayName:"Button"})(["background:",";border:none;display:inline-flex;align-items:center;border-radius:",";font-size:",";color:white;padding:",";transition:all ",";box-shadow:0 4px 6px rgba(50,50,93,0.11),0 1px 3px rgba(0,0,0,0.08);&:hover{background:",";cursor:pointer;transform:translateY(-2px);}&:focus{outline:none;}svg{width:20px;height:20px;margin-right:0.75rem;fill:white;}"],function(e){return e.theme.colors.primary},function(e){return e.big?"1.5rem":"1rem"},function(e){return e.big?"1.2rem":"1rem"},function(e){return e.big?"0.35rem 1.6rem":"0.25rem 1.5rem"},function(e){return e.theme.transitions.normal},function(e){return Object(b.b)(.05,e.theme.colors.primary)}),x=l.b.header.withConfig({displayName:"Header__Wrapper"})(["background:linear-gradient( 45deg,",","," );grid-column:1 / -1;margin-left:-1rem;margin-right:-1rem;padding:2rem 2rem 5rem 2rem;box-shadow:inset 0px -10px 30px 0px rgba(0,0,0,0.1);"],function(e){return Object(b.a)(.1,e.theme.colors.primary)},function(e){return Object(b.b)(.1,e.theme.colors.primary)}),w=l.b.div.withConfig({displayName:"Header__Content"})(["max-width:1000px;margin:0 auto;a{color:white;&:hover{opacity:0.85;color:white;}}"]),E=function(e){return a.a.createElement(x,null,a.a.createElement(w,null,e.children))},v=E;E.propTypes={children:o.a.oneOfType([o.a.array,o.a.node]).isRequired};var k=n(287),T=n.n(k),N=n(282),_={colors:{primary:"#009688",body:"#f2f2f2",bg:"white",grey:{dark:"rgba(0, 0, 0, 0.9)",default:"rgba(0, 0, 0, 0.7)",light:"rgba(0, 0, 0, 0.5)",ultraLight:"rgba(0, 0, 0, 0.25)"}},transitions:{normal:"0.5s"},fontSize:{small:"0.9rem"}},z=n(278);function C(){var e=T()(["\n  ::selection {\n    color: ",";\n    background: ",";\n  }\n  body {\n    background: ",";\n    color: ",";\n    @media "," {\n      font-size: 14px;\n    }\n  }\n  a {\n    color: ",";\n    text-decoration: none;\n    transition: all ",";\n  }\n  a:hover {\n    color: ",";\n  }\n  h1, h2, h3, h4 {\n    color: ",';\n  }\n  blockquote {\n    font-style: italic;\n    position: relative;\n  }\n\n  blockquote:before {\n    content: "";\n    position: absolute;\n    background: ',";\n    height: 100%;\n    width: 6px;\n    margin-left: -1.6rem;\n  }\n  label {\n    margin-bottom: .5rem;\n    color: ",";\n  }\n  input, textarea {\n    border-radius: .5rem;\n    border: none;\n    background: rgba(0, 0, 0, 0.05);\n    padding: .25rem 1rem;\n    &:focus {\n      outline: none;\n    }\n  }\n"]);return C=function(){return e},e}Object(l.c)(C(),_.colors.bg,_.colors.primary,_.colors.bg,_.default,z.a.phone,_.colors.grey.dark,_.transitions.normal,_.colors.primary,_.colors.grey.dark,_.colors.primary,_.colors.grey.dark);var R=l.b.footer.withConfig({displayName:"Layout__Footer"})(["text-align:center;padding:3rem 0;span{font-size:0.75rem;}"]),q=function(e){var t=e.children;return a.a.createElement(m.StaticQuery,{query:"1719855500",render:function(e){return a.a.createElement(l.a,{theme:_},a.a.createElement(a.a.Fragment,null,a.a.createElement(H,null),t,a.a.createElement(R,null,"© 2018 by John Doe. All rights reserved. ",a.a.createElement("br",null),a.a.createElement("a",{href:"https://github.com/LeKoArts/gatsby-starter-minimal-blog"},"GitHub Repository")," ",a.a.createElement("br",null),a.a.createElement("span",null,"Last build: ",e.site.buildTime)),";"))},data:N})},A=q;q.propTypes={children:o.a.oneOfType([o.a.array,o.a.node]).isRequired};var P=l.b.div.withConfig({displayName:"PrevNext__Wrapper"})(["display:flex;margin:6rem auto 0 auto;a{color:",";display:flex;align-items:center;}justify-items:center;"],function(e){return e.theme.colors.primary}),S=l.b.div.withConfig({displayName:"PrevNext__Prev"})(["span{text-transform:uppercase;font-size:0.8rem;color:",";}"],function(e){return e.theme.colors.grey.light}),L=l.b.div.withConfig({displayName:"PrevNext__Next"})(["margin-left:auto;text-align:right;span{text-transform:uppercase;font-size:0.8rem;color:",";}"],function(e){return e.theme.colors.grey.light}),j=function(e){var t=e.next,n=e.prev;return a.a.createElement(P,null,n&&a.a.createElement(S,null,a.a.createElement("span",null,"Previous"),a.a.createElement(m.Link,{to:n.fields.slug},n.frontmatter.title)),t&&a.a.createElement(L,null,a.a.createElement("span",null,"Next"),a.a.createElement(m.Link,{to:t.fields.slug},t.frontmatter.title)))},B=j;j.propTypes={next:o.a.object,prev:o.a.object},j.defaultProps={next:null,prev:null},n(281);var O=l.b.div.withConfig({displayName:"SectionTitle"})(["font-size:",";text-transform:uppercase;font-weight:bold;text-align:center;color:",";position:relative;padding-bottom:1rem;margin-bottom:4rem;&:after{content:'';height:1px;width:50px;position:absolute;bottom:0;left:50%;margin-left:-25px;background:",";}"],function(e){return e.theme.fontSize.small},function(e){return e.theme.colors.grey.dark},function(e){return e.theme.colors.grey.ultraLight}),F=n(284),D=n.n(F),I=n(279),M=n.n(I),U=function(e){var t,n,r,i,o=e.postNode,l=e.postPath,m=e.postSEO,c="/"===M.a.pathPrefix?"":M.a.pathPrefix;m?(t=o.frontmatter.title,n=o.excerpt,r=M.a.siteBanner,i=M.a.siteUrl+c+l):(t=M.a.siteTitle,n=M.a.siteDescription,r=M.a.siteBanner),r=M.a.siteUrl+c+r;var s=M.a.siteUrl+M.a.pathPrefix,p=[{"@context":"http://schema.org","@type":"WebSite",url:s,name:t,alternateName:M.a.siteTitleAlt?M.a.siteTitleAlt:""}];return m&&p.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":i,name:t,image:r}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:s,name:t,alternateName:M.a.siteTitleAlt?M.a.siteTitleAlt:"",headline:t,image:{"@type":"ImageObject",url:r},description:n}),a.a.createElement(D.a,null,a.a.createElement("title",null,M.a.siteTitle),a.a.createElement("meta",{name:"description",content:n}),a.a.createElement("meta",{name:"keywords",content:"minimal, blog, layout"}),a.a.createElement("meta",{name:"image",content:r}),a.a.createElement("script",{type:"application/ld+json"},JSON.stringify(p)),a.a.createElement("meta",{property:"og:locale",content:"de_DE"}),a.a.createElement("meta",{property:"og:site_name",content:M.a.ogSiteName?M.a.ogSiteName:""}),a.a.createElement("meta",{property:"og:url",content:m?i:s}),m?a.a.createElement("meta",{property:"og:type",content:"article"}):null,a.a.createElement("meta",{property:"og:title",content:t}),a.a.createElement("meta",{property:"og:description",content:n}),a.a.createElement("meta",{property:"og:image",content:r}),a.a.createElement("meta",{property:"fb:app_id",content:M.a.siteFBAppID?M.a.siteFBAppID:""}),a.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.a.createElement("meta",{name:"twitter:creator",content:M.a.userTwitter?M.a.userTwitter:""}),a.a.createElement("meta",{name:"twitter:title",content:t}),a.a.createElement("meta",{name:"twitter:url",content:M.a.siteUrl}),a.a.createElement("meta",{name:"twitter:description",content:n}),a.a.createElement("meta",{name:"twitter:image",content:r}))},H=U;U.propTypes={postNode:o.a.object,postPath:o.a.string,postSEO:o.a.bool};var J=l.b.div.withConfig({displayName:"Subline"})(["font-size:",";color:",";",";",";",";"],function(e){return e.theme.fontSize.small},function(e){return e.theme.colors.grey.light},function(e){return e.sectionTitle&&"margin-top: -3rem"},function(e){return e.sectionTitle&&"margin-bottom: 4rem"},function(e){return e.sectionTitle&&"text-align: center"}),W=l.b.div.withConfig({displayName:"Wrapper"})(["display:grid;grid-template-columns:1fr minmax(320px,1000px) 1fr;padding:0 1rem;"]);n.d(t,"a",function(){return h}),n.d(t,"b",function(){return y}),n.d(t,"c",function(){return v}),n.d(t,"d",function(){return A}),n.d(t,"e",function(){return B}),n.d(t,"g",function(){return O}),n.d(t,"f",function(){return H}),n.d(t,"h",function(){return J}),n.d(t,"i",function(){return W})}}]);
//# sourceMappingURL=component---src-pages-all-js-c52dc4c0b39b84b4287b.js.map