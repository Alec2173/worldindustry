import{a as y}from"./chunk-7IGFEGL6.js";import{a as x}from"./chunk-UGZOQ2VP.js";import{g as C}from"./chunk-TEZX466F.js";import{m as v}from"./chunk-ZUUUZYJW.js";import{Eb as l,Fb as m,Ia as a,Ka as n,Mb as u,Pa as s,Va as g,Za as f,eb as r,jb as b,lb as _,mb as P,nb as i,ob as c,pb as p,vb as d}from"./chunk-JEN6AWE5.js";var M=e=>["/produse",e],O=e=>["/subcategory",e],k=(e,o)=>o.id;function w(e,o){if(e&1&&(i(0,"li")(1,"a",2),p(2,"img",3),i(3,"p"),l(4),c()()()),e&2){let t=d().$implicit;n(),r("routerLink",u(3,M,t.category)),n(),r("src",t.imageURL,a),n(2),m(t.title)}}function I(e,o){if(e&1&&(i(0,"li")(1,"a",2),p(2,"img",3),i(3,"p"),l(4),c()()()),e&2){let t=d().$implicit;n(),r("routerLink",u(3,O,t.link)),n(),r("src",t.imageURL,a),n(2),m(t.title)}}function L(e,o){if(e&1&&f(0,w,5,5,"li")(1,I,5,5,"li"),e&2){let t=o.$implicit;b(t.category!="none"?0:1)}}var h=class e{constructor(o,t){this.productsService=o;this.subcategoryService=t}products=[];subcategories=[];nonCategoryItems=[];ngOnInit(){this.products=this.productsService.getAll(),this.subcategories=this.subcategoryService.getSubcategories()}static \u0275fac=function(t){return new(t||e)(s(y),s(x))};static \u0275cmp=g({type:e,selectors:[["app-products-page"]],decls:5,vars:0,consts:[[1,"style-container"],[1,"product-container"],[3,"routerLink"],[3,"src"]],template:function(t,S){t&1&&(i(0,"div",0)(1,"div",1)(2,"ul"),_(3,L,2,1,null,null,k),c()()()),t&2&&(n(3),P(S.products))},dependencies:[v,C],styles:["body[_ngcontent-%COMP%], html[_ngcontent-%COMP%]{background-size:cover;background-repeat:no-repeat}.style-container[_ngcontent-%COMP%]{min-height:100vh;height:auto;width:100%;background-color:#222831}.product-container[_ngcontent-%COMP%]{font-family:Liter,serif;font-weight:800;border-color:#eee;height:auto;width:100%}ul[_ngcontent-%COMP%]{display:flex;gap:3rem;justify-content:center;align-items:center;flex-wrap:wrap;list-style-type:none;padding:4rem}li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-align:center;font-size:1.5rem;text-decoration:none;color:#eee;background-color:#222831;height:25rem;width:20rem;border:3px solid #eeeeee;border-radius:1rem;margin:.5rem;display:flex;flex-direction:column;overflow:hidden;transition:background-color .4s ease-in-out,color .4s ease-in-out,transform .3s ease-in-out,box-shadow .3s ease-in-out,border-color .4s ease-in-out}li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#000;transform:scale(1.08);box-shadow:0 0 15px #00adb5;background-color:#00adb5;border-color:gray;animation:_ngcontent-%COMP%_pulse .6s ease-in-out infinite alternate}@keyframes _ngcontent-%COMP%_pulse{0%{box-shadow:0 0 10px #00adb5}to{box-shadow:0 0 20px #00adb5}}img[_ngcontent-%COMP%]{height:250px;border-bottom:2px solid #eeeeee}p[_ngcontent-%COMP%]{margin-top:2rem;padding:10px}app-tables[_ngcontent-%COMP%]{padding:1rem;background-color:#0ff}"]})};export{h as ProductsPageComponent};
