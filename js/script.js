// ── CAROUSEL 3D ──
const slides=[
  {name:"Michael Jackson",tag:"King of Pop",bg:"#E8002D",ico:"🎩",img:"./img/michael-jackson.jpg"},
  {name:"JoJo's Bizarre",tag:"Stand User",bg:"#C084FC",ico:"⭐",img:"./img/gyroo.webp"},
  {name:"L'Attaque des Titans",tag:"Survey Corps",bg:"#C00020",ico:"⚔️",img:"./img/livai.png"},
  {name:"Playboi Carti",tag:"Playboi Carti",bg:"#FF1744",ico:"🩸",img:"./img/kencarson.jpeg"},
  {name:"Golden State Warriors",tag:"Champions",bg:"#F5C518",ico:"🏆",img:"./img/curry.webp"},
  {name:"Nos souvenirs",tag:"Ajoute tes photos",bg:"#FF4D6D",ico:"📸",img:"./img/noel.jpeg"},
  {name:"Ensemble",tag:"Notre histoire",bg:"#E8002D",ico:"🌹", img:"./img/us.jpeg"},
];

const R=280;
const step=360/slides.length;
const ci=document.getElementById('ci');
const cdots=document.getElementById('cdots');
const cthumbs=document.getElementById('cthumbs');

slides.forEach((s,i)=>{
  const ang=step*i;
  const card=document.createElement('div');
  card.className='cslide';
  card.style.transform=`rotateY(${ang}deg) translateZ(${R}px)`;
  // Pour mettre une vraie photo : remplace le div.ph par <img src="ta-photo.jpg">
 card.innerHTML=`
  <div class="ph" style="background:${s.bg}">
    <img src="${s.img}" alt="">
  </div>
  <div class="clabel">
    <div class="cn">${s.name}</div>
    <div class="ct">${s.tag}</div>
  </div>`;
  card.onclick=()=>goTo(i);
  ci.appendChild(card);

  const d=document.createElement('div');
  d.className='cdot'+(i===0?' on':'');
  d.onclick=()=>goTo(i);
  cdots.appendChild(d);

  const t=document.createElement('div');
  t.style.cssText=`flex-shrink:0;width:60px;height:44px;border-radius:10px;background:${s.bg};display:flex;align-items:center;justify-content:center;font-size:20px;cursor:pointer;border:2.5px solid ${i===0?'#FF4D6D':'transparent'};transition:all 0.2s`;
  t.textContent=s.ico;
  t.onclick=()=>goTo(i);
  cthumbs.appendChild(t);
});

let cur=0,timer;
function goTo(i){
  document.querySelectorAll('.cdot')[cur].classList.remove('on');
  cthumbs.children[cur].style.borderColor='transparent';
  cur=(i+slides.length)%slides.length;
  ci.style.transform=`rotateY(${-step*cur}deg)`;
  document.querySelectorAll('.cdot')[cur].classList.add('on');
  cthumbs.children[cur].style.borderColor='#FF4D6D';
  clearInterval(timer);
  timer=setInterval(()=>goTo(cur+1),4200);
}
document.getElementById('cprev').onclick=()=>goTo(cur-1);
document.getElementById('cnext').onclick=()=>goTo(cur+1);
timer=setInterval(()=>goTo(cur+1),4200);

// ── PLAYLIST ──
const songs=[
  {title:"Thriller",artist:"Michael Jackson",ico:"",tag:"Légende",bg:"#FF4D6D"},
  {title:"Crazy Noisy Bizarre Town",artist:"Yugo Kanno",ico:"",tag:"Stand power",bg:"#C084FC"},
  {title:"Sky Walker",artist:"Playboi Carti",ico:"",tag:"Vamp mode",bg:"#E63946"},
  {title:"Alliance",artist:"Fally Ipupa Dicap La merveille",ico:"",tag:"Survey Corps",bg:"#F5A623"},
  {title:"Don't Stop 'Til You Get Enough",artist:"Michael Jackson",ico:"",tag:"Classic",bg:"#FF8C69"},
  {title:"White keys",artist:"Dominik Fike",ico:"",tag:"Trendy",bg:"#C084FC"},
];
const pg=document.getElementById('plgrid');
songs.forEach((s,i)=>{
  const el=document.createElement('div');
  el.className='pl-item';
  const bars=[1,2,3,4].map((_,j)=>`<div class="pl-b" style="height:${8+j*4}px;animation-duration:${0.55+j*0.15}s;animation-delay:${i*0.12+j*0.09}s"></div>`).join('');
  el.innerHTML=`
    <div class="pl-thumb" style="background:${s.bg}30">${s.ico}</div>
    <div class="pl-info">
      <div class="pl-title">${s.title}</div>
      <div class="pl-artist">${s.artist}</div>
    </div>
    <div class="pl-tag">${s.tag}</div>
    <div class="pl-bar">${bars}</div>`;
  pg.appendChild(el);
});