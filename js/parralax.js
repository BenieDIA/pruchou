document.addEventListener("mousemove",(e)=>{
  const stickers=document.querySelectorAll(".floating-sticker");

  const x=(e.clientX/window.innerWidth-0.5)*2;
  const y=(e.clientY/window.innerHeight-0.5)*2;

  stickers.forEach((el,i)=>{
    const speed=(i+1)*6;
    el.style.transform=`translate3d(${x*speed}px,${y*speed}px,0)`;
  });
});