let e=0,t=0,s=!1,a=0;const l=document.querySelector(".swiper"),r=document.querySelector(".swiper-wrapper"),o=document.querySelector(".swiper-button-prev"),i=document.querySelector(".swiper-button-next"),d=r.querySelectorAll("a.hero-card");let n=r.offsetWidth-window.innerWidth;const c=(e,t,s)=>e+(t-e)*s,h=()=>{(t=c(t,e,.0825))<1&&(t=0),t>n-1&&(t=n);let s=t/n;gsap.set(".swiper-scrollbar",{scaleX:s}),requestAnimationFrame(h)};l.addEventListener("wheel",t=>{Math.abs(t.deltaX)>10&&(e+=t.deltaX),(e=Math.min(e=Math.max(0,e),n))?o.classList.remove("disabled"):o.classList.add("disabled")}),l.addEventListener("mousedown",e=>{s=!0,a=e.clientX,l.style.cursor="grabbing"}),l.addEventListener("mouseleave",()=>{s=!1}),l.addEventListener("mouseup",()=>{s=!1,l.style.cursor="grab",d.forEach(e=>{e.style.pointerEvents="auto"})}),l.addEventListener("mouseenter",()=>{l.style.cursor="grab"}),l.addEventListener("mousemove",t=>{s&&(d.forEach(e=>{e.style.pointerEvents="none"}),l.scrollLeft+=a-t.clientX,e+=a-t.clientX,(e=Math.min(n,e=Math.max(0,e)))?o.classList.remove("disabled"):o.classList.add("disabled"),a=t.clientX)}),h(),o.addEventListener("click",()=>{l.style.scrollBehavior="smooth",l.scrollLeft-=n/2,e-=n/2,(e=Math.max(0,e))?o.classList.remove("disabled"):o.classList.add("disabled"),l.style.scrollBehavior="auto"}),i.addEventListener("click",()=>{l.style.scrollBehavior="smooth",l.scrollLeft+=n/2,e+=n/2,(e=Math.min(e,n))?o.classList.remove("disabled"):o.classList.add("disabled"),l.style.scrollBehavior="auto"}),r.querySelectorAll("img, svg, p, a, span, h1, h2, h3, h4, h5, h6, .text").forEach(e=>{e.setAttribute("draggable","false")});
//# sourceMappingURL=index.15989af5.js.map