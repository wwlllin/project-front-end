import{aq as S,X as B,Y as C,Z as k,x as F,A as M,a0 as P,a1 as A,c as a,a3 as s,ar as $,a5 as E,ab as N,an as n,aa as d,V as R,a7 as r,ao as T,ap as U,J as v,a8 as _}from"./index-845555eb.js";import{c as j,e as D,u as I,d as J,V as L}from"./index.esm-a83c1ca1.js";import{V as O}from"./VContainer-f32d47bb.js";import{a as W,V as m}from"./VRow-f22ef6ae.js";const X={style:{"white-space":"pre"}},Y=n("h1",{class:"text-red text-h1"},"已下架",-1),Q={__name:"ProductView",setup(Z){const y=S(),p=B(),{api:V,apiAuth:h}=N(),i=C(),g=k(),t=F({_id:"",name:"",price:0,description:"",image:"",sell:!0,category:""}),b=j({quantity:D().typeError("缺少數量").required("缺少數量").min(1,"數量最小為 1")}),{isSubmitting:f,handleSubmit:x}=I({validationSchema:b,initialValues:{quantity:1}}),c=J("quantity"),w=x(async u=>{var o,e;if(!g.isLogin){p.push("/login");return}try{const{data:l}=await h.patch("/users/cart",{product:t.value._id,quantity:u.quantity});g.cart=l.result,i({text:"新增成功",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"green",location:"bottom"}})}catch(l){const q=((e=(o=l==null?void 0:l.response)==null?void 0:o.data)==null?void 0:e.message)||"發生錯誤，請稍後再試";i({text:q,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}});return M(async()=>{var u,o;try{const{data:e}=await V.get("/products/"+y.params.id);t.value._id=e.result._id,t.value.name=e.result.name,t.value.price=e.result.price,t.value.description=e.result.description,t.value.image=e.result.image,t.value.sell=e.result.sell,t.value.category=e.result.category,document.title=`WE CAMP | ${t.value.name}`}catch(e){console.log(e);const l=((o=(u=e==null?void 0:e.response)==null?void 0:u.data)==null?void 0:o.message)||"發生錯誤，請稍後再試";i({text:l,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}}),p.push("/")}}),(u,o)=>(P(),A(E,null,[a(O,null,{default:s(()=>[a(W,null,{default:s(()=>[a(m,{cols:"12"},{default:s(()=>[n("h1",null,d(t.value.name),1)]),_:1}),a(m,{cols:"12",md:"6"},{default:s(()=>[a(R,{src:t.value.image},null,8,["src"])]),_:1}),a(m,{cols:"12",md:"6"},{default:s(()=>[n("p",null,"$"+d(t.value.price),1),n("p",X,d(t.value.description),1),a(L,{disabled:r(f),onSubmit:T(r(w),["prevent"])},{default:s(()=>[a(U,{type:"number",min:"0",modelValue:r(c).value.value,"onUpdate:modelValue":o[0]||(o[0]=e=>r(c).value.value=e),modelModifiers:{number:!0},"error-messages":r(c).errorMessage.value},null,8,["modelValue","error-messages"]),a(v,{type:"submit","prepend-icon":"mdi-cart",loading:r(f)},{default:s(()=>[_("加入購物車")]),_:1},8,["loading"])]),_:1},8,["disabled","onSubmit"])]),_:1})]),_:1})]),_:1}),a($,{class:"align-center justify-center text-center","model-value":!t.value.sell,persistent:""},{default:s(()=>[Y,a(v,{to:"/",color:"green"},{default:s(()=>[_("回首頁")]),_:1})]),_:1},8,["model-value"])],64))}};export{Q as default};