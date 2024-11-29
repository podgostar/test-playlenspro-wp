"use strict";(self.webpackChunkplaylenspro_app=self.webpackChunkplaylenspro_app||[]).push([[44],{9044:(e,t,r)=>{r.r(t),r.d(t,{default:()=>T});var s=r(1319),n=r(4647),a=r(4019),i=r(5043);const l={_origin:"https://api.emailjs.com"},d=(e,t,r)=>{if(!e)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!r)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class o{constructor(e){this.status=e.status,this.text=e.responseText}}const m=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise(((s,n)=>{const a=new XMLHttpRequest;a.addEventListener("load",(e=>{let{target:t}=e;const r=new o(t);200===r.status||"OK"===r.text?s(r):n(r)})),a.addEventListener("error",(e=>{let{target:t}=e;n(new o(t))})),a.open("POST",l._origin+e,!0),Object.keys(r).forEach((e=>{a.setRequestHeader(e,r[e])})),a.send(t)}))},c=(e,t,r,s)=>{const n=s||l._userID;d(n,e,t);const a={lib_version:"3.2.0",user_id:n,service_id:e,template_id:t,template_params:r};return m("/api/v1.0/email/send",JSON.stringify(a),{"Content-type":"application/json"})},h={name:"",email:"",message:""};var p=r(5639),x=r(9);const u=(0,x.Ay)("p")`
  margin-top: 1.5rem;
`,g=(0,x.Ay)("div")`
  position: relative;
  max-width: 700px;
`,j=(0,x.Ay)("div")`
  border-radius: 3rem;
  max-width: 400px;
`;var y=r(579);const v=e=>{let{title:t,content:r}=e;return(0,y.jsxs)(g,{children:[(0,y.jsx)("h6",{children:t}),(0,y.jsx)(j,{children:(0,y.jsx)(u,{children:r})})]})},b=(0,x.Ay)("div")`
  display: inline-block;
  width: 100%;
  padding: 10px 5px;
`,w=(0,x.Ay)("input")`
  font-size: 0.875rem;
`,f=(0,x.Ay)("div")`
  display: inline-block;
  width: 100%;
  padding: 10px 5px;
  margin-bottom: -0.625rem;
`,A=(0,x.Ay)("textarea")`
  resize: none;
  font-size: 0.875rem;
  height: 185px;
`,C=(0,x.Ay)("label")`
  display: block;
  padding-bottom: 10px;
  text-transform: capitalize;
`,_=e=>{let{name:t,placeholder:r,onChange:s}=e;return(0,y.jsxs)(b,{children:[(0,y.jsx)(C,{htmlFor:t,children:t}),(0,y.jsx)(w,{placeholder:r,name:t,id:t,onChange:s})]})},k=e=>{let{name:t,placeholder:r,onChange:s}=e;return(0,y.jsxs)(f,{children:[(0,y.jsx)(C,{htmlFor:t,children:t}),(0,y.jsx)(A,{placeholder:r,id:t,name:t,onChange:s})]})},q=(0,x.Ay)("div")`
  padding: 5rem 0;

  @media only screen and (max-width: 1024px) {
    padding: 3rem 0;
  }
`,E=(0,x.Ay)("form")`
  width: 100%;
  max-width: 520px;

  @media only screen and (max-width: 1045px) {
    max-width: 100%;
    margin-top: 2rem;
  }
`,O=(0,x.Ay)("span")`
  display: block;
  font-weight: 600;
  color: rgb(255, 130, 92);
  height: 0.775rem;
  padding: 0 0.675rem;
`,S=(0,x.Ay)("div")`
  text-align: end;
  position: relative;

  @media only screen and (max-width: 414px) {
    padding-top: 0.75rem;
  }
`,T=e=>{let{title:t,content:r,id:l}=e;const{values:d,errors:o,handleChange:m,handleSubmit:x}=(()=>{const[e,t]=(0,i.useState)({values:{...h},errors:{...h}});return{handleChange:e=>{e.persist();const{name:r,value:s}=e.target;t((e=>({...e,values:{...e.values,[r]:s},errors:{...e.errors,[r]:""}})))},handleSubmit:async e=>{e.preventDefault();const t=new FormData(e.target),r=Object.fromEntries(t.entries());try{200===(await c("service_s1boq0d","template_9nxwx1x",{name:r.name,email:r.email,message:r.message},"RNNa1m6YXQvsNTATF")).status?alert("Your message has been sent!"):alert("Error sending message.")}catch(s){alert("An error occurred. Please try again later."),console.error("Error sending email:",s)}},values:e.values,errors:e.errors}})(),u=e=>{let{type:t}=e;const r=o[t];return(0,y.jsx)(O,{children:r})};return(0,y.jsx)(q,{id:l,children:(0,y.jsxs)(s.A,{justify:"space-between",align:"middle",children:[(0,y.jsx)(n.A,{lg:12,md:11,sm:24,xs:24,children:(0,y.jsx)(a.q7,{direction:"left",triggerOnce:!0,children:(0,y.jsx)(v,{title:t,content:r})})}),(0,y.jsx)(n.A,{lg:12,md:12,sm:24,xs:24,children:(0,y.jsx)(a.q7,{direction:"right",triggerOnce:!0,children:(0,y.jsxs)(E,{autoComplete:"off",onSubmit:x,children:[(0,y.jsx)(n.A,{span:24,children:(0,y.jsx)(_,{type:"text",name:"Name",placeholder:"Your Name",value:d.name||"",onChange:m})}),(0,y.jsxs)(n.A,{span:24,children:[(0,y.jsx)(_,{type:"text",name:"email",placeholder:"Your Email",value:d.email||"",onChange:m}),(0,y.jsx)(u,{type:"email"})]}),(0,y.jsxs)(n.A,{span:24,children:[(0,y.jsx)(k,{placeholder:"Your Message",value:d.message||"",name:"message",onChange:m}),(0,y.jsx)(u,{type:"message"})]}),(0,y.jsx)(S,{children:(0,y.jsx)(p.$,{name:"submit",children:"Submit"})})]})})})]})})}}}]);
//# sourceMappingURL=44.8e18aa2d.chunk.js.map