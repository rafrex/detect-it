(this["webpackJsonpdetect-it-demo"]=this["webpackJsonpdetect-it-demo"]||[]).push([[0],{29:function(e,t,o){"use strict";o.r(t);var n=o(0),r=o(9),c=o.n(r),i=o(3),s=o(10),a=o(13);const{styled:l,css:d}=Object(a.a)({prefix:"",tokens:{colors:{$pageBackground:"rgb(240,240,240)",$codeBlockBackground:"rgb(224,224,224)",$highContrast:"rgb(0,0,0)",$lowContrast:"rgb(128,128,128)",$red:"rgb(224,0,0)",$green:"rgb(0,168,0)",$blue:"rgb(0,0,224)"}},breakpoints:{},utils:{}}),h=d.theme({colors:{$pageBackground:"rgb(32,32,32)",$codeBlockBackground:"rgb(56,56,56)",$highContrast:"rgb(192,192,192)",$lowContrast:"rgb(136,136,136)",$red:"rgb(216,0,0)",$green:"rgb(0,168,0)",$blue:"rgb(118,118,255)"}}),b=d.global({"body, div, span, a, p, h1, h2, code":{margin:0,border:0,padding:0,boxSizing:"inherit",font:"inherit",fontWeight:"inherit",textDecoration:"inherit",textAlign:"inherit",color:"inherit",background:"transparent"},html:{height:"100%"},body:{height:"100%",color:"$highContrast",fontFamily:"system-ui, Helvetica Neue, sans-serif",WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",fontSize:"16px",boxSizing:"border-box",textSizeAdjust:"none"},"#root":{minHeight:"100%",backgroundColor:"$pageBackground"}});var j=o(8),x=o.n(j),p=o(12),g=o(1);const u=l((({onClick:e,className:t,...o})=>Object(g.jsx)(x.a,{...o,className:t.toString(),onClick:e,as:"span",hover:{className:"hover"},active:"hover",focusFromTab:{className:"focusFromTab",style:{outline:null,outlineOffset:null}},touchActiveTapOnly:!0,children:Object(g.jsx)(p.a,{width:"30",height:"30"})})),{color:"$highContrast",width:"30px",height:"30px",display:"inline-block","&.hover":{color:"$green"},"&.focusFromTab":{outlineColor:"$green",outline:"2px solid",outlineOffset:"2px"}}),O=l((e=>Object(g.jsx)(x.a,{...e,className:e.className.toString(),as:"a",hover:{className:"hover"},active:"hover",focusFromTab:{className:"focusFromTab",style:{outline:null,outlineOffset:null}},touchActiveTapOnly:!0,target:"_blank",rel:"noopener noreferrer"})),{color:"$lowContrast",borderBottom:"1px dotted $green",textDecoration:"none","&.hover":{color:"$highContrast",borderBottomStyle:"solid"},"&.focusFromTab":{outlineColor:"$green",outline:"2px solid",outlineOffset:"2px"}}),m=l("div",{maxWidth:"400px",padding:"14px 15px 25px",margin:"0 auto"}),v=l("h1",{fontSize:"26px",display:"flex",justifyContent:"space-between",marginBottom:"2px"}),w=l("h2",{margin:"36px 0 -6px",fontSize:"22px"}),f=l("div",{backgroundColor:"$codeBlockBackground",padding:"4px 16px 6px",borderRadius:"3px",margin:"16px 0"}),y=l("code",{display:"block",margin:"5px 0"}),$=l("span",{color:"$blue",variants:{bool:{true:{color:"$green"},false:{color:"$red"}}}}),k=({bool:e})=>Object(g.jsx)($,{bool:e,children:"".concat(e)}),C=()=>{b();const e=Object(s.a)(void 0,{classNameDark:h});return Object(g.jsxs)(m,{children:[Object(g.jsxs)(v,{children:[Object(g.jsx)("span",{children:"Detect It \u2013 Live Detection"}),Object(g.jsx)(u,{onClick:e.toggle})]}),Object(g.jsx)(O,{href:"https://github.com/rafgraph/detect-it",children:"https://github.com/rafgraph/detect-it"}),Object(g.jsxs)(f,{children:[Object(g.jsxs)(y,{children:["deviceType: ",Object(g.jsx)($,{children:i.deviceType})]}),Object(g.jsxs)(y,{children:["primaryInput: ",Object(g.jsx)($,{children:i.primaryInput})]}),Object(g.jsxs)(y,{children:["supportsPointerEvents: ",Object(g.jsx)(k,{bool:i.supportsPointerEvents})]}),Object(g.jsxs)(y,{children:["supportsTouchEvents: ",Object(g.jsx)(k,{bool:i.supportsTouchEvents})]}),Object(g.jsxs)(y,{children:["supportsPassiveEvents: ",Object(g.jsx)(k,{bool:i.supportsPassiveEvents})]})]}),Object(g.jsx)(w,{children:"Additional Device Info"}),Object(g.jsxs)(f,{children:[Object(g.jsxs)(y,{children:["primaryPointerFine:"," ",Object(g.jsx)(k,{bool:window.matchMedia("(pointer: fine)").matches})]}),Object(g.jsxs)(y,{children:["anyPointerFine:"," ",Object(g.jsx)(k,{bool:window.matchMedia("(any-pointer: fine)").matches})]}),Object(g.jsxs)(y,{children:["primaryPointerCoarse:"," ",Object(g.jsx)(k,{bool:window.matchMedia("(pointer: coarse)").matches})]}),Object(g.jsxs)(y,{children:["anyPointerCoarse:"," ",Object(g.jsx)(k,{bool:window.matchMedia("(any-pointer: coarse)").matches})]})]}),Object(g.jsxs)(f,{children:[Object(g.jsxs)(y,{children:["primaryHover:"," ",Object(g.jsx)(k,{bool:window.matchMedia("(hover: hover)").matches})]}),Object(g.jsxs)(y,{children:["anyHover:"," ",Object(g.jsx)(k,{bool:window.matchMedia("(any-hover: hover)").matches})]}),Object(g.jsxs)(y,{children:["primaryHoverNone:"," ",Object(g.jsx)(k,{bool:window.matchMedia("(hover: none)").matches})]}),Object(g.jsxs)(y,{children:["anyHoverNone:"," ",Object(g.jsx)(k,{bool:window.matchMedia("(any-hover: none)").matches})]})]}),Object(g.jsxs)(f,{children:[Object(g.jsxs)(y,{children:["pointerEventInWindow:"," ",Object(g.jsx)(k,{bool:"PointerEvent"in window})]}),Object(g.jsxs)(y,{children:["maxTouchPoints:"," ",Object(g.jsx)($,{children:"".concat(window.navigator.maxTouchPoints)})]})]}),Object(g.jsxs)(f,{children:[Object(g.jsxs)(y,{children:["onTouchStartInWindow:"," ",Object(g.jsx)(k,{bool:"ontouchstart"in window})]}),Object(g.jsxs)(y,{children:["touchEventInWindow: ",Object(g.jsx)(k,{bool:"TouchEvent"in window})]})]}),Object(g.jsx)(f,{children:Object(g.jsxs)(y,{children:["screenSize:"," ",Object(g.jsx)($,{children:"".concat(window.screen.width,"x").concat(window.screen.height)})]})}),Object(g.jsx)(f,{children:Object(g.jsxs)(y,{children:["userAgent: ",Object(g.jsx)($,{children:window.navigator.userAgent})]})})]})};c.a.render(Object(g.jsx)(n.StrictMode,{children:Object(g.jsx)(C,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.8e6378d7.chunk.js.map