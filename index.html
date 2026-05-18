/* CHISPAS AZULES */
(function(){
  const c = document.getElementById('spark-canvas');
  const ctx = c.getContext('2d');
  let W, H, particles = [];
  function resize(){ W = c.width = innerWidth; H = c.height = innerHeight; }
  resize(); addEventListener('resize', resize);
  function spark(x, y, n){
    for(let i=0;i<n;i++){
      const a = Math.random()*Math.PI*2;
      const s = Math.random()*3 + 0.8;
      particles.push({
        x, y, vx: Math.cos(a)*s, vy: Math.sin(a)*s - Math.random()*1.5,
        life: 1, r: Math.random()*2 + 0.6, hue: 190 + Math.random()*30
      });
    }
  }
  let lastMove = 0;
  document.addEventListener('mousemove', e=>{
    const now = Date.now();
    if(now - lastMove < 16) return;
    lastMove = now;
    spark(e.clientX, e.clientY, 2);
  });
  document.querySelectorAll('[data-spark]').forEach(el=>{
    el.addEventListener('mousemove', e=>spark(e.clientX, e.clientY, 3));
  });
  document.addEventListener('click', e=>spark(e.clientX, e.clientY, 18));
  (function loop(){
    ctx.clearRect(0, 0, W, H);
    particles = particles.filter(p=>p.life>0);
    particles.forEach(p=>{
      p.x += p.vx; p.y += p.vy;
      p.vy += 0.06; p.vx *= 0.99; p.life -= 0.022;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r * p.life, 0, Math.PI*2);
      ctx.fillStyle = `hsla(${p.hue}, 100%, ${50 + p.life*30}%, ${p.life * 0.9})`;
      ctx.shadowBlur = 12;
      ctx.shadowColor = `hsla(${p.hue}, 100%, 60%, ${p.life})`;
      ctx.fill(); ctx.shadowBlur = 0;
    });
    requestAnimationFrame(loop);
  })();
})();

/* FONDO RED DE NODOS */
(function(){
  const c = document.getElementById('bg-canvas');
  if(!c) return;
  const ctx = c.getContext('2d');
  let nodes = [], W, H;
  function resize(){ W = c.width = innerWidth; H = c.height = innerHeight; }
  function init(){
    nodes = [];
    const n = Math.floor(W*H / 28000);
    for(let i=0;i<n;i++) nodes.push({
      x: Math.random()*W, y: Math.random()*H,
      vx: (Math.random()-0.5)*0.2, vy: (Math.random()-0.5)*0.2,
      r: Math.random()*1.2+0.4, pulse: Math.random()*Math.PI*2
    });
  }
  (function draw(){
    ctx.clearRect(0,0,W,H);
    const t = Date.now()*0.001;
    for(let i=0;i<nodes.length;i++){
      for(let j=i+1;j<nodes.length;j++){
        const dx = nodes[i].x-nodes[j].x, dy = nodes[i].y-nodes[j].y;
        const d = Math.sqrt(dx*dx+dy*dy);
        if(d<150){
          ctx.beginPath();
          ctx.strokeStyle = `rgba(91,184,255,${(1-d/150)*0.10})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.stroke();
        }
      }
    }
    nodes.forEach(n=>{
      const g = (Math.sin(t+n.pulse)+1)*0.5;
      ctx.beginPath(); ctx.arc(n.x,n.y,n.r,0,Math.PI*2);
      ctx.fillStyle = `rgba(91,184,255,${0.12+g*0.25})`; ctx.fill();
      n.x += n.vx; n.y += n.vy;
      if(n.x<0||n.x>W) n.vx*=-1;
      if(n.y<0||n.y>H) n.vy*=-1;
    });
    requestAnimationFrame(draw);
  })();
  addEventListener('resize', ()=>{resize();init();});
  resize(); init();
})();