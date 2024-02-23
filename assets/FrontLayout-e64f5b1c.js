import{p,m as Y,a as z,g as N,u as P,c as l,b as oe,d as ne,e as K,f as Q,h as Z,t as R,i as se,j as re,k as ee,l as ie,n as ue,s as _,o as f,q as ce,V as de,r as U,v as $,w as ve,x as W,y as me,z as H,A as ge,B as fe,C as be,D as he,E as ye,F as Ve,G as E,H as Se,I as ke,J as M,K as xe,L as Be,M as Te,N as _e,O as Ce,P as we,Q as pe,R as Ne,S as Pe,T as Ie,U as Le,W as F,X as Ae,Y as Re,Z as Ee,_ as $e,$ as He,a0 as g,a1 as C,a2 as k,a3 as d,a4 as T,a5 as w,a6 as X,a7 as D,a8 as A,a9 as De,aa as q,ab as Me}from"./index-a1a4f7b1.js";import{V as Ue,a as Fe}from"./VNavigationDrawer-0d5be122.js";import{u as Ye,V as O,a as j,b as ze}from"./VList-66a7070f.js";import{V as We}from"./VContainer-9c18d28c.js";import"./VDivider-217783ab.js";const te=p({text:String,...Y(),...z()},"VToolbarTitle"),ae=N()({name:"VToolbarTitle",props:te(),setup(e,i){let{slots:t}=i;return P(()=>{const v=!!(t.default||t.text||e.text);return l(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var o;return[v&&l("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(o=t.default)==null?void 0:o.call(t)])]}})}),{}}}),Xe=[null,"prominent","default","comfortable","compact"],le=p({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>Xe.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...oe(),...Y(),...ne(),...K(),...z({tag:"header"}),...Q()},"VToolbar"),G=N()({name:"VToolbar",props:le(),setup(e,i){var a;let{slots:t}=i;const{backgroundColorClasses:v,backgroundColorStyles:o}=Z(R(e,"color")),{borderClasses:s}=se(e),{elevationClasses:b}=re(e),{roundedClasses:m}=ee(e),{themeClasses:h}=ie(e),{rtlClasses:y}=ue(),n=_(!!(e.extended||(a=t.extension)!=null&&a.call(t))),u=f(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),c=f(()=>n.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return ce({VBtn:{variant:"text"}}),P(()=>{var r;const V=!!(e.title||t.title),S=!!(t.image||e.image),x=(r=t.extension)==null?void 0:r.call(t);return n.value=!!(e.extended||x),l(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},v.value,s.value,b.value,m.value,h.value,y.value,e.class],style:[o.value,e.style]},{default:()=>[S&&l("div",{key:"image",class:"v-toolbar__image"},[t.image?l(U,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):l(de,{key:"image-img",cover:!0,src:e.image},null)]),l(U,{defaults:{VTabs:{height:$(u.value)}}},{default:()=>{var B,I,L;return[l("div",{class:"v-toolbar__content",style:{height:$(u.value)}},[t.prepend&&l("div",{class:"v-toolbar__prepend"},[(B=t.prepend)==null?void 0:B.call(t)]),V&&l(ae,{key:"title",text:e.title},{text:t.title}),(I=t.default)==null?void 0:I.call(t),t.append&&l("div",{class:"v-toolbar__append"},[(L=t.append)==null?void 0:L.call(t)])])]}}),l(U,{defaults:{VTabs:{height:$(c.value)}}},{default:()=>[l(ve,null,{default:()=>[n.value&&l("div",{class:"v-toolbar__extension",style:{height:$(c.value)}},[x])]})]})]})}),{contentHeight:u,extensionHeight:c}}}),qe=p({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function Oe(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:t}=i;let v=0;const o=W(null),s=_(0),b=_(0),m=_(0),h=_(!1),y=_(!1),n=f(()=>Number(e.scrollThreshold)),u=f(()=>me((n.value-s.value)/n.value||0)),c=()=>{const a=o.value;!a||t&&!t.value||(v=s.value,s.value="window"in a?a.pageYOffset:a.scrollTop,y.value=s.value<v,m.value=Math.abs(s.value-n.value))};return H(y,()=>{b.value=b.value||s.value}),H(h,()=>{b.value=0}),ge(()=>{H(()=>e.scrollTarget,a=>{var S;const V=a?document.querySelector(a):window;V&&V!==o.value&&((S=o.value)==null||S.removeEventListener("scroll",c),o.value=V,o.value.addEventListener("scroll",c,{passive:!0}))},{immediate:!0})}),fe(()=>{var a;(a=o.value)==null||a.removeEventListener("scroll",c)}),t&&H(t,c,{immediate:!0}),{scrollThreshold:n,currentScroll:s,currentThreshold:m,isScrollActive:h,scrollRatio:u,isScrollingUp:y,savedScroll:b}}const je=p({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...le(),...be(),...qe(),height:{type:[Number,String],default:64}},"VAppBar"),Ge=N()({name:"VAppBar",props:je(),emits:{"update:modelValue":e=>!0},setup(e,i){let{slots:t}=i;const v=W(),o=he(e,"modelValue"),s=f(()=>{var B;const r=new Set(((B=e.scrollBehavior)==null?void 0:B.split(" "))??[]);return{hide:r.has("hide"),inverted:r.has("inverted"),collapse:r.has("collapse"),elevate:r.has("elevate"),fadeImage:r.has("fade-image")}}),b=f(()=>{const r=s.value;return r.hide||r.inverted||r.collapse||r.elevate||r.fadeImage||!o.value}),{currentScroll:m,scrollThreshold:h,isScrollingUp:y,scrollRatio:n}=Oe(e,{canScroll:b}),u=f(()=>e.collapse||s.value.collapse&&(s.value.inverted?n.value>0:n.value===0)),c=f(()=>e.flat||s.value.elevate&&(s.value.inverted?m.value>0:m.value===0)),a=f(()=>s.value.fadeImage?s.value.inverted?1-n.value:n.value:void 0),V=f(()=>{var I,L;if(s.value.hide&&s.value.inverted)return 0;const r=((I=v.value)==null?void 0:I.contentHeight)??0,B=((L=v.value)==null?void 0:L.extensionHeight)??0;return r+B});ye(f(()=>!!e.scrollBehavior),()=>{Se(()=>{s.value.hide?s.value.inverted?o.value=m.value>h.value:o.value=y.value||m.value<h.value:o.value=!0})});const{ssrBootStyles:S}=Ye(),{layoutItemStyles:x}=Ve({id:e.name,order:f(()=>parseInt(e.order,10)),position:R(e,"location"),layoutSize:V,elementSize:_(void 0),active:o,absolute:R(e,"absolute")});return P(()=>{const r=G.filterProps(e);return l(G,E({ref:v,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...x.value,"--v-toolbar-image-opacity":a.value,height:void 0,...S.value},e.style]},r,{collapse:u.value,flat:c.value}),t)}),{}}}),Je=p({...ke({icon:"$menu",variant:"text"})},"VAppBarNavIcon"),Ke=N()({name:"VAppBarNavIcon",props:Je(),setup(e,i){let{slots:t}=i;return P(()=>l(M,E(e,{class:["v-app-bar-nav-icon"]}),t)),{}}}),Qe=N()({name:"VAppBarTitle",props:te(),setup(e,i){let{slots:t}=i;return P(()=>l(ae,E(e,{class:"v-app-bar-title"}),t)),{}}});const Ze=p({bordered:Boolean,color:String,content:[Number,String],dot:Boolean,floating:Boolean,icon:xe,inline:Boolean,label:{type:String,default:"$vuetify.badge"},max:[Number,String],modelValue:{type:Boolean,default:!0},offsetX:[Number,String],offsetY:[Number,String],textColor:String,...Y(),...Be({location:"top end"}),...K(),...z(),...Q(),...Te({transition:"scale-rotate-transition"})},"VBadge"),J=N()({name:"VBadge",inheritAttrs:!1,props:Ze(),setup(e,i){const{backgroundColorClasses:t,backgroundColorStyles:v}=Z(R(e,"color")),{roundedClasses:o}=ee(e),{t:s}=_e(),{textColorClasses:b,textColorStyles:m}=Ce(R(e,"textColor")),{themeClasses:h}=we(),{locationStyles:y}=pe(e,!0,n=>(e.floating?e.dot?2:4:e.dot?8:12)+(["top","bottom"].includes(n)?+(e.offsetY??0):["left","right"].includes(n)?+(e.offsetX??0):0));return P(()=>{const n=Number(e.content),u=!e.max||isNaN(n)?e.content:n<=+e.max?n:`${e.max}+`,[c,a]=Ne(i.attrs,["aria-atomic","aria-label","aria-live","role","title"]);return l(e.tag,E({class:["v-badge",{"v-badge--bordered":e.bordered,"v-badge--dot":e.dot,"v-badge--floating":e.floating,"v-badge--inline":e.inline},e.class]},a,{style:e.style}),{default:()=>{var V,S;return[l("div",{class:"v-badge__wrapper"},[(S=(V=i.slots).default)==null?void 0:S.call(V),l(Pe,{transition:e.transition},{default:()=>{var x,r;return[Ie(l("span",E({class:["v-badge__badge",h.value,t.value,o.value,b.value],style:[v.value,m.value,e.inline?{}:y.value],"aria-atomic":"true","aria-label":s(e.label,n),"aria-live":"polite",role:"status"},c),[e.dot?void 0:i.slots.badge?(r=(x=i.slots).badge)==null?void 0:r.call(x):e.icon?l(F,{icon:e.icon},null):u]),[[Le,e.modelValue]])]}})])]}})}),{}}}),nt={__name:"FrontLayout",setup(e){const{apiAuth:i}=Me(),t=Ae(),v=Re(),o=Ee(),{mobile:s}=$e(),b=f(()=>s.value),m=W(!1),h=f(()=>[{to:"/register",text:"註冊",icon:"mdi-account-plus",show:!o.isLogin},{to:"/login",text:"登入",icon:"mdi-login",show:!o.isLogin},{to:"/cart",text:"購物車",icon:"mdi-cart",show:o.isLogin},{to:"/orders",text:"訂單",icon:"mdi-list-box",show:o.isLogin},{to:"/admin",text:"管理",icon:"mdi-cog",show:o.isLogin&&o.isAdmin}]),y=async()=>{var n,u;try{await i.delete("/users/logout"),o.logout(),v({text:"登出成功",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"green",location:"bottom"}}),t.push("/")}catch(c){const a=((u=(n=c==null?void 0:c.response)==null?void 0:n.data)==null?void 0:u.message)||"發生錯誤，請稍後再試";v({text:a,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}};return(n,u)=>{const c=He("RouterView");return g(),C(w,null,[b.value?(g(),k(Ue,{key:0,modelValue:m.value,"onUpdate:modelValue":u[0]||(u[0]=a=>m.value=a),temporary:"",location:"left"},{default:d(()=>[l(ze,{nav:""},{default:d(()=>[(g(!0),C(w,null,X(h.value,a=>(g(),C(w,{key:a.to},[a.show?(g(),k(O,{key:0,to:a.to},{prepend:d(()=>[l(F,{icon:a.icon},null,8,["icon"])]),append:d(()=>[a.to==="/cart"?(g(),k(J,{key:0,color:"error",content:D(o).cart,inline:""},null,8,["content"])):T("",!0)]),default:d(()=>[l(j,null,{default:d(()=>[A(q(a.text),1)]),_:2},1024)]),_:2},1032,["to"])):T("",!0)],64))),128)),D(o).isLogin?(g(),k(O,{key:0,onClick:y},{prepend:d(()=>[l(F,{icon:"mdi-logout"})]),default:d(()=>[l(j,null,{default:d(()=>[A("登出")]),_:1})]),_:1})):T("",!0)]),_:1})]),_:1},8,["modelValue"])):T("",!0),l(Ge,{color:"primary"},{default:d(()=>[l(We,{class:"d-flex align-center"},{default:d(()=>[l(M,{to:"/",active:!1},{default:d(()=>[l(Qe,null,{default:d(()=>[A("WE CAMP")]),_:1})]),_:1}),l(De),b.value?(g(),k(Ke,{key:0,onClick:u[1]||(u[1]=a=>m.value=!0)})):(g(),C(w,{key:1},[(g(!0),C(w,null,X(h.value,a=>(g(),C(w,{key:a.to},[a.show?(g(),k(M,{key:0,to:a.to,"prepend-icon":a.icon},{default:d(()=>[A(q(a.text),1),a.to==="/cart"?(g(),k(J,{key:0,color:"error",content:D(o).cart,floating:""},null,8,["content"])):T("",!0)]),_:2},1032,["to","prepend-icon"])):T("",!0)],64))),128)),D(o).isLogin?(g(),k(M,{key:0,"prepend-icon":"mdi-logout",onClick:y},{default:d(()=>[A("登出")]),_:1})):T("",!0)],64))]),_:1})]),_:1}),l(Fe,null,{default:d(()=>[(g(),k(c,{key:n.$route.path}))]),_:1})],64)}}};export{nt as default};
