import{a as S}from"./chunk-7IGFEGL6.js";import{a as P}from"./chunk-UGZOQ2VP.js";import{d as C,f as _,g as x}from"./chunk-TEZX466F.js";import"./chunk-ZUUUZYJW.js";import{Eb as s,Fb as h,Ia as l,Ka as n,Mb as v,Pa as r,Va as d,Za as p,eb as c,jb as m,lb as u,mb as f,nb as i,ob as a,pb as b,vb as y}from"./chunk-JEN6AWE5.js";var M=e=>["/subcategory",e],O=(e,t)=>t.id;function w(e,t){if(e&1&&(i(0,"li")(1,"a",5),b(2,"img",6),i(3,"div",7)(4,"p"),s(5),a()()()()),e&2){let o=t.$implicit;n(),c("routerLink",v(3,M,o.id)),n(),c("src",o.imageURL,l),n(3),h(o.title)}}function I(e,t){if(e&1&&(i(0,"div",1)(1,"div",2)(2,"a",3)(3,"span",4),s(4," arrow_back "),a()()(),i(5,"ul"),u(6,w,6,5,"li",null,O),a()()),e&2){let o=y();n(6),f(o.subcategories)}}var k=class e{constructor(t,o,g,L){this.route=t;this.subcategoryService=o;this.router=g;this.productsService=L}subcategories=[];category="";nonCategoryItemSocking=[];ngOnInit(){this.route.paramMap.subscribe(t=>{this.category=t.get("category")||"",this.loadSubcategories()}),this.nonCategoryItemSocking=this.productsService.getNonCategories()}loadSubcategories(){this.category&&(this.subcategories=this.subcategoryService.getSubcategories().filter(t=>t.category?.toLowerCase()===this.category?.toLowerCase()))}redirectToDescription(){this.nonCategoryItemSocking.length>1&&this.nonCategoryItemSocking[1]&&this.router.navigate(["/subcategory/13"])}static \u0275fac=function(o){return new(o||e)(r(C),r(P),r(_),r(S))};static \u0275cmp=d({type:e,selectors:[["app-subcategory"]],decls:2,vars:1,consts:[[1,"style-container"],[1,"product-container"],[1,"footer-link"],["routerLink","/produse"],[1,"material-symbols-outlined"],[3,"routerLink"],["alt","",3,"src"],[1,"title"]],template:function(o,g){o&1&&(i(0,"div",0),p(1,I,8,0,"div",1),a()),o&2&&(n(),m(g.subcategories.length>0?1:-1))},dependencies:[x],styles:['body[_ngcontent-%COMP%], html[_ngcontent-%COMP%]{background-size:cover;background-repeat:no-repeat}.style-container[_ngcontent-%COMP%]{min-height:100vh;height:auto;width:100%;background-color:#222831}.product-container[_ngcontent-%COMP%]{font-family:Liter,serif;font-weight:800;margin-top:2px;border-color:#eee;height:auto;width:100%}ul[_ngcontent-%COMP%]{display:flex;gap:3rem;justify-content:center;align-items:center;flex-wrap:wrap;list-style-type:none;padding:4rem}li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-align:center;font-size:1.5rem;text-decoration:none;color:#eee;background-color:#222831;height:25rem;width:20rem;border:3px solid #eeeeee;border-radius:1rem;margin:.5rem;display:flex;flex-direction:column;overflow:hidden;transition:background-color .4s ease-in-out,color .4s ease-in-out,transform .3s ease-in-out,box-shadow .3s ease-in-out,border-color .4s ease-in-out}li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#000;transform:scale(1.08);box-shadow:0 0 15px #00adb5;background-color:#00adb5;border-color:gray;animation:pulse .6s ease-in-out infinite alternate}img[_ngcontent-%COMP%]{height:12.5rem;border-bottom:2px solid #eeeeee}p[_ngcontent-%COMP%]{margin-top:2rem;padding:10px}.footer-link[_ngcontent-%COMP%]{margin-left:20px;padding-top:20px}.footer-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-weight:700;font-size:2rem;display:inline-block;color:#fff;text-align:center;padding:30px 45px;text-decoration:none;font-size:17px;margin:0 10px;position:relative}.footer-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after{content:"";display:block;width:0;height:3.5px;background:#00adb5;transition:width 1s;position:absolute;bottom:0;left:50%;transform:translate(-50%)}.footer-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:after{width:100%}.footer-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{border-radius:10%;background-color:#eee;color:#000}.material-symbols-outlined[_ngcontent-%COMP%]{font-variation-settings:"FILL" 0,"wght" 400,"GRAD" 0,"opsz" 24}']})};export{k as SubcategoryComponent};
