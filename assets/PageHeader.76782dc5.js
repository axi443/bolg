import{_ as u,f as i,S as d,H as p,l as _,q as b,o as t,a as s,i as a,s as r,j as o,d as f,t as l,I as h}from"./app.dcda0402.js";const I={class:"title"},k={key:1,class:"subtitle"},y=i({props:{pageInfo:{type:Object,default:()=>({})}},setup(n){const c=n,{pageInfo:e}=d(c),g=p(),m=_(()=>e.value.bgImage?{backgroundImage:`url(${b(e.value.bgImage.path)})`}:{});return(v,B)=>(t(),s("div",{class:h(["page-header",{"use-image":a(e).bgImage}]),style:r(a(m))},[a(e).bgImage&&a(e).bgImage.mask?(t(),s("div",{key:0,class:"header-mask",style:r({background:a(e).bgImage.mask})},null,4)):o("",!0),f("h1",I,l(a(e).title||a(g).title),1),a(e).subtitle?(t(),s("h3",k,l(a(e).subtitle),1)):o("",!0)],6))}});var S=u(y,[["__file","PageHeader.vue"]]);export{S as P};
