(()=>{var e={};e.id=58,e.ids=[58],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},8188:e=>{"use strict";e.exports=require("module")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},5658:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>u,originalPathname:()=>m,pages:()=>c,routeModule:()=>p,tree:()=>d}),r(3608),r(7628),r(5866),r(6067);var a=r(3191),s=r(8716),o=r(7922),i=r.n(o),n=r(5231),l={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>n[e]);r.d(t,l);let d=["",{children:["(sub pages)",{children:["projects",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,3608)),"/home/momotaaro/Next.js-Creative-Portfolio-Website/src/app/(sub pages)/projects/page.js"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,7628)),"/home/momotaaro/Next.js-Creative-Portfolio-Website/src/app/(sub pages)/layout.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,6067)),"/home/momotaaro/Next.js-Creative-Portfolio-Website/src/app/layout.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["/home/momotaaro/Next.js-Creative-Portfolio-Website/src/app/(sub pages)/projects/page.js"],m="/(sub pages)/projects/page",u={require:r,loadChunk:()=>Promise.resolve()},p=new a.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/(sub pages)/projects/page",pathname:"/projects",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},7143:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2994,23)),Promise.resolve().then(r.t.bind(r,6114,23)),Promise.resolve().then(r.t.bind(r,9727,23)),Promise.resolve().then(r.t.bind(r,9671,23)),Promise.resolve().then(r.t.bind(r,1868,23)),Promise.resolve().then(r.t.bind(r,4759,23))},8673:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2481,23)),Promise.resolve().then(r.bind(r,933)),Promise.resolve().then(r.bind(r,6618)),Promise.resolve().then(r.bind(r,1778)),Promise.resolve().then(r.bind(r,4134)),Promise.resolve().then(r.bind(r,3946)),Promise.resolve().then(r.bind(r,4744))},4923:(e,t,r)=>{Promise.resolve().then(r.bind(r,6467)),Promise.resolve().then(r.bind(r,5446))},3747:(e,t,r)=>{Promise.resolve().then(r.bind(r,5900))},6467:(e,t,r)=>{"use strict";r.d(t,{default:()=>i});var a=r(326),s=r(7577);let o=()=>({id:Math.random(),top:`${100*Math.random()}%`,left:`${100*Math.random()}%`,animationDuration:`${5*Math.random()+5}s`}),i=()=>{let[e,t]=(0,s.useState)([]);return(0,s.useEffect)(()=>{let e=setInterval(()=>{let e=o();t(t=>[...t.slice(-14),e])},1e3);return()=>clearInterval(e)},[]),a.jsx("div",{className:"fixed top-0 left-0 w-full h-full -z-10 overflow-hidden",children:e.map(e=>a.jsx("div",{className:"absolute roudned-full w-[10px] h-[10px] bg-firefly-radial",style:{top:e.top,left:e.left,animation:`move ${e.animationDuration} infinite alternate`}},e.id))})}},5900:(e,t,r)=>{"use strict";r.d(t,{default:()=>l});var a=r(326),s=r(5305),o=r(5920),i=r(434);let n=(0,s.E)(i.default),l=()=>(0,a.jsxs)(n,{initial:{scale:0},animate:{scale:1},transition:{delay:1},href:"/",target:"_self",className:"text-foreground  rounded-full flex items-center justify-center custom-bg fixed top-4 left-4 w-fit self-start z-50 ","aria-label":"home",name:"home",prefetch:!1,children:[(0,a.jsxs)("span",{className:"relative  w-14 h-14 p-4  hover:text-accent",children:[a.jsx(o.Z,{className:"w-full h-auto",strokeWidth:1.5}),a.jsx("span",{className:"peer bg-transparent absolute top-0 left-0 w-full h-full"}),a.jsx("span",{className:"absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap",children:"Home"})]}),a.jsx("span",{className:"sr-only",children:"Go to Home Page"})]})},4744:(e,t,r)=>{"use strict";r.d(t,{default:()=>l});var a=r(326),s=r(6647),o=r(2586),i=r(1135),n=r(7577);let l=({children:e,className:t})=>(0,a.jsxs)(o.Xz,{className:(0,i.Z)("w-screen h-screen -z-10 relative",t),shadows:!1,dpr:[1,2],children:[a.jsx(n.Suspense,{fallback:null,children:e}),a.jsx(s.qA,{preset:"dawn"})]})},5446:(e,t,r)=>{"use strict";r.d(t,{default:()=>c});var a=r(326),s=r(5305),o=r(9145),i=r(5128),n=r(7577),l=r(962);let d=({onClose:e,toggle:t})=>(0,l.createPortal)(a.jsx("div",{className:"fixed inset-0 bg-background/60 backdrop-blur-sm flex items-center justify-center",children:(0,a.jsxs)("div",{className:"bg-background/20 border border-accent/30 border-solid backdrop-blur-[6px] py-8 px-6 xs:px-10 sm:px-16 rounded shadow-glass-inset text-center space-y-8 ",children:[a.jsx("p",{className:"font-light",children:"Do you like to play the background music?"}),(0,a.jsxs)("div",{className:"flex items-center justify-center space-x-4",children:[a.jsx("button",{onClick:t,className:"px-4 py-2 border border-accent/30 border-solid hover:shadow-glass-sm rounded mr-2",children:"Yes"}),a.jsx("button",{onClick:e,className:"px-4 py-2 border border-accent/30 border-solid hover:shadow-glass-sm rounded",children:"No"})]})]})}),document.getElementById("my-modal")),c=()=>{let e=(0,n.useRef)(null),[t,r]=(0,n.useState)(!1),[l,c]=(0,n.useState)(!1),m=()=>{"true"!==localStorage.getItem("musicConsent")||t||(e.current.play(),r(!0)),["click","keydown","touchstart"].forEach(e=>document.removeEventListener(e,m))};(0,n.useEffect)(()=>{let e=localStorage.getItem("musicConsent"),t=localStorage.getItem("consentTime");e&&t&&new Date(t).getTime()+2592e5>new Date?(r("true"===e),"true"===e&&["click","keydown","touchstart"].forEach(e=>document.addEventListener(e,m))):c(!0)},[]);let u=()=>{let a=!t;r(!t),a?e.current.play():e.current.pause(),localStorage.setItem("musicConsent",String(a)),localStorage.setItem("consentTime",new Date().toISOString()),c(!1)};return(0,a.jsxs)("div",{className:"fixed top-4 right-2.5 xs:right-4 z-50 group",children:[l&&a.jsx(d,{onClose:()=>c(!1),toggle:u}),(0,a.jsxs)("audio",{ref:e,loop:!0,children:[a.jsx("source",{src:"/audio/birds39-forest-20772.mp3",type:"audio/mpeg"}),"your browser does not support the audio element."]}),a.jsx(s.E.button,{onClick:u,initial:{scale:0},animate:{scale:1},transition:{delay:1},className:"w-10 h-10 xs:w-14 xs:h-14 text-foreground rounded-full flex items-center justify-center cursor-pointer z-50 p-2.5 xs:p-4 custom-bg","aria-label":"Sound control button",name:"Sound control button",children:t?a.jsx(o.Z,{className:"w-full h-full text-foreground group-hover:text-accent",strokeWidth:1.5}):a.jsx(i.Z,{className:"w-full h-full text-foreground group-hover:text-accent",strokeWidth:1.5})})]})}},4134:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var a=r(326),s=r(7577),o=r.n(s),i=r(8795),n=r(6297);let l=o().memo(function(e){let{nodes:t,materials:r}=(0,i.L)("/models/staff-transformed.glb"),o=(0,s.useRef)();return(0,n.C)(()=>{o.current.rotation.y+=.007}),(0,a.jsxs)("group",{...e,dispose:null,scale:[3,3,3],position:[0,-2,0],ref:o,children:[a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:t.Wizard_Staff3_Wizard_Staff3_0.geometry,material:r.Wizard_Staff3,position:[-.041,.983,.768],rotation:[0,Math.PI/2,0],scale:.04}),a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:t.Wizard_Staff3_Wizard_Staff3_0_1.geometry,material:r.Wizard_Staff3,position:[-.041,.983,.768],rotation:[0,Math.PI/2,0],scale:.04}),a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:t.Wizard_Staff3_Wizard_Staff3_0_2.geometry,material:r.Wizard_Staff3,position:[-.041,.983,.768],rotation:[0,Math.PI/2,0],scale:.04}),a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:t.Wizard_Staff3_Wizard_Staff3_0_3.geometry,material:r.Wizard_Staff3,position:[-.041,.983,.768],rotation:[0,Math.PI/2,0],scale:.04}),a.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:t.Wizard_Staff2_Wizard_Staff2_0.geometry,material:r.Wizard_Staff2,position:[-.041,.983,.768],rotation:[0,Math.PI/2,0],scale:.04})]})});i.L.preload("/models/staff-transformed.glb")},3946:(e,t,r)=>{"use strict";r.d(t,{default:()=>c});var a=r(326),s=r(5305),o=r(434);let i={hidden:{opacity:0,y:100},show:{opacity:1,y:0}},n=(0,s.E)(o.default),l=({name:e,description:t,date:r,demoLink:s})=>(0,a.jsxs)(n,{variants:i,href:s,target:"_blank",className:" text-sm md:text-base flex  items-center justify-between w-full relative rounded-lg overflow-hidden p-4 md:p-6 custom-bg",children:[(0,a.jsxs)("div",{className:"flex items-center justify-center space-x-2",children:[a.jsx("h2",{className:"text-foreground",children:e}),a.jsx("p",{className:"text-muted hidden sm:inline-block",children:t})]}),a.jsx("div",{className:"self-end flex-1 mx-2 mb-1 bg-transparent border-b border-dashed border-muted"}),a.jsx("p",{className:"text-muted sm:text-foreground",children:new Date(r).toDateString()})]}),d={hidden:{opacity:0},show:{opacity:1,transition:{staggerChildren:.3,delayChildren:1.5}}},c=({projects:e})=>a.jsx(s.E.div,{variants:d,initial:"hidden",animate:"show",className:"w-full max-w-auto  xl:max-w-4xl px-4 mx-auto lg:px-16 space-y-6 md:space-y-8 flex flex-col items-center",children:e.map((e,t)=>a.jsx(l,{...e},t))})},7628:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var a=r(9510);let s=(0,r(8570).createProxy)(String.raw`/home/momotaaro/Next.js-Creative-Portfolio-Website/src/components/HomeBtn.jsx#default`);function o({children:e}){return(0,a.jsxs)("main",{className:"flex min-h-screen flex-col items-center justify-center px-8 xs:px-16 lg:px-32 py-20",children:[a.jsx(s,{}),e]})}},3608:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>m,metadata:()=>c});var a=r(9510),s=r(7710);let o={src:"/_next/static/media/projects-background.fe38537d.png",height:576,width:1024,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAPFBMVEUnGgkmIxkbLjILCQs0KyAjHBhENCYzNCs6PTZZNiBoQytOPSwIHSdFJxEuHQkNDQcqPDhBQko/Y2koVmRku4/UAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAL0lEQVR4nAXBhwGAIBAAsQO+ohRl/11JKAWYKG9137878kSNE0Z2sxQZtKY9P10XFooBJGgpUXAAAAAASUVORK5CYII=",blurWidth:8,blurHeight:5},i=(0,r(8570).createProxy)(String.raw`/home/momotaaro/Next.js-Creative-Portfolio-Website/src/components/projects/index.jsx#default`),n=[{id:1,name:"Movie Recommender ML Model",description:"SKLearn Python StreamLit",date:"2022-08-15",demoLink:"https://movie-suggestor.streamlit.app/"},{id:2,name:"Meditation App",description:"React Native, Expo Router, Native Wind, JScript, TypeScript",date:"2023-06-20",demoLink:"https://github.com/adityachauhan0/meditation-app"},{id:3,name:"This Website!!",description:"ThreeJS, NextJS, Taiwind CSS, Framer Motion, React Hook Form, Sonner, Gltf JSX",date:"2024-09-10",demoLink:"https://portfol-adityac.streamlit.app/"},{id:4,name:"TCP FileStorage",description:"Decentralized File Storage System using GoLang",date:"2023-10-30",demoLink:"https://github.com/adityachauhan0/TCP-FileStorage"}];var l=r(2955);let d=(0,r(8318).default)(()=>r.e(672).then(r.bind(r,7672)),{loadableGenerated:{modules:["app/(sub pages)/projects/page.js -> @/components/models/Staff"]},ssr:!1}),c={title:"Projects"};function m(){return(0,a.jsxs)(a.Fragment,{children:[a.jsx(s.default,{src:o,alt:"Next.js Portfolio website's about page background image",className:"-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50",priority:!0,sizes:"100vw"}),a.jsx(i,{projects:n}),a.jsx("div",{className:"flex items-center justify-center fixed  top-16  lg:top-20 -translate-x-1/2 lg:translate-x-0 -z-10 left-1/2 lg:-left-24 h-screen",children:a.jsx(l.Z,{children:a.jsx(d,{})})})]})}},6067:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>m,metadata:()=>c});var a=r(9510),s=r(5035),o=r.n(s);r(5023);var i=r(5761),n=r(8570);let l=(0,n.createProxy)(String.raw`/home/momotaaro/Next.js-Creative-Portfolio-Website/src/components/FireFliesBackground.jsx#default`),d=(0,n.createProxy)(String.raw`/home/momotaaro/Next.js-Creative-Portfolio-Website/src/components/Sound.jsx#default`),c={title:{template:"Next.js Portfolio Created with Three.js and Tailwind CSS | %s | Aditya C",default:"Next.js Portfolio Created with Three.js and Tailwind CSS by Aditya C"},description:"A unique creative portfolio designed by Aditya Chauhan with cutting-edge technologies like Next.js, Tailwind CSS, Three.js, and Framer Motion. Experience the art of modern web development firsthand. Checkout CodeBucks on youtube."};function m({children:e}){return a.jsx("html",{lang:"en",children:(0,a.jsxs)("body",{className:(0,i.Z)(o().variable,"bg-background text-foreground font-inter"),children:[e,a.jsx(l,{}),a.jsx(d,{}),a.jsx("div",{id:"my-modal"})]})})}},2955:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});let a=(0,r(8570).createProxy)(String.raw`/home/momotaaro/Next.js-Creative-Portfolio-Website/src/components/RenderModel.jsx#default`)},1778:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});let a={src:"/_next/static/media/projects-background.fe38537d.png",height:576,width:1024,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAPFBMVEUnGgkmIxkbLjILCQs0KyAjHBhENCYzNCs6PTZZNiBoQytOPSwIHSdFJxEuHQkNDQcqPDhBQko/Y2koVmRku4/UAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAL0lEQVR4nAXBhwGAIBAAsQO+ohRl/11JKAWYKG9137878kSNE0Z2sxQZtKY9P10XFooBJGgpUXAAAAAASUVORK5CYII=",blurWidth:8,blurHeight:5}},3881:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});var a=r(6621);let s=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,a.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},5023:()=>{}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[948,862,705,40],()=>r(5658));module.exports=a})();