"use strict";(self.webpackChunkplaylenspro_app=self.webpackChunkplaylenspro_app||[]).push([[538],{8538:(e,t,s)=>{s.r(t),s.d(t,{default:()=>l});var i=s(5043),n=s(2646);const o=(0,s(9).Ay)("div")`
  padding: 10px;
  position: fixed;
  right: 30px;
  bottom: 30px;
  z-index: 10;
  cursor: pointer;
  background: rgb(241, 242, 243);
  text-align: center;
  align-items: center;
  border-radius: 4px;
  transition: all 0.3s ease-in-out;
  visibility: ${e=>e.show?"visible":"hidden"};
  opacity: ${e=>e.show?"1":"0"};
  display: flex;

  &:hover,
  &:active,
  &:focus {
    background: rgb(224, 224, 224);
  }

  @media screen and (max-width: 1240px) {
    display: none;
  }
`;var r=s(579);const l=()=>{const[e,t]=(0,i.useState)(!1),s=(0,i.useCallback)((()=>{const s=window.scrollY;!e&&s>350?t(!0):s<=350&&t(!1)}),[e]);(0,i.useEffect)((()=>(window.addEventListener("scroll",s),()=>{window.removeEventListener("scroll",s)})),[s]);return(0,r.jsx)(o,{onClick:()=>{document.getElementById("intro").scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})},show:e,children:(0,r.jsx)(n.A,{src:"/test-playlenspro-wp/img/svg/scroll-top.svg",width:"20px",height:"20px"})})}},2646:(e,t,s)=>{s.d(t,{A:()=>n});var i=s(579);const n=e=>{let{src:t,width:s,height:n}=e;return(0,i.jsx)("img",{src:`${t}`,alt:t,width:s,height:n})}}}]);
//# sourceMappingURL=538.9457fdd9.chunk.js.map