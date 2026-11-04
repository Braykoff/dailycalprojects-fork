import"./rolldown-runtime.XKyaHtl9.js";import{t as e}from"./react.B54jxNxs.js";import{t}from"./CityblocGraphic.Bp-jaMws.js";import{t as n}from"./photos.DWdCCHZW.js";import{t as r}from"./jsx-runtime.CpoXNhZb.js";e();var i={info:{date_range:[`2024-12-10`,`2026-08-16`],n_motions_total:1093,n_contested:54,n_bloc_split:10,blocs:{A:[`Tregub`,`Bartlett`,`Ishii`],B:[`Kesarwani`,`Taplin`,`Blackaby`,`Humbert`]},swing:[`Lunaparra`,`O'Keefe`],definitions:{contested:`at least one member voted differently`,bloc_split:`bloc A's and bloc B's majorities (Aye share >= 0.5) differed`,dissent:`No or Abstain; Absent/Recused excluded`,agreement:`share of shared contested votes where both members cast the same vote (min 5 shared)`},excluded_motion_types:[`Ceremonial`,`Committee vote`,`Council business`,`Unclear`]},order:[`Tregub`,`Bartlett`,`Ishii`,`Kesarwani`,`Taplin`,`Blackaby`,`Humbert`,`Lunaparra`,`O'Keefe`],topic_blocs:[[`Policing & surveillance`,17,4,[[[`Tregub`,`Bartlett`,`Ishii`],.62],[[`Blackaby`,`Humbert`,`O'Keefe`],.74],[[`Kesarwani`,`Taplin`],.97],[[`Lunaparra`],null]]],[`Land use & zoning`,10,1,[[[`Ishii`,`Kesarwani`,`Humbert`,`Lunaparra`],.6],[[`Tregub`,`Bartlett`,`Taplin`],.7],[[`Blackaby`],null],[[`O'Keefe`],null]]],[`Housing`,8,1,[[[`Tregub`,`Bartlett`,`Ishii`,`Kesarwani`,`Taplin`],.77],[[`Blackaby`,`O'Keefe`],.71],[[`Humbert`],null],[[`Lunaparra`],null]]],[`Advocacy & resolutions`,5,1,[[[`Kesarwani`,`Taplin`,`Humbert`,`O'Keefe`],.57],[[`Tregub`,`Bartlett`,`Ishii`],.83],[[`Blackaby`],null],[[`Lunaparra`],null]]],[`Streets & transport`,5,1,[[[`Ishii`,`Kesarwani`,`Taplin`,`Blackaby`,`Humbert`,`Lunaparra`],.78],[[`Tregub`],null],[[`Bartlett`],null],[[`O'Keefe`],null]]]],topic_bloc_min:5},a=`<style>
:host{
  --bloc-a:#1d6fa5;
  --bloc-b:#e3792b;
  --neither:#8c8c8c;
  --primary:#23517a;
  --secondary:#4ba3cc;
  --text:#1d1d1d;
  --text-light:#707070;
  --background:#ffffff;
  --gridline:#e6e6e6;
  --vote-aye:#4ba3cc;
  --vote-no:#1d1d1d;
  --vote-abstain:#f0b429;
  --font:Roboto,"Helvetica Neue",Helvetica,Arial,sans-serif;
}
:host{--paper:var(--background);--panel:var(--background);--ink:var(--text);--ink-2:color-mix(in srgb,var(--text) 82%,var(--background));--muted:var(--text-light);
--line:var(--gridline);--hair:color-mix(in srgb,var(--gridline) 60%,var(--background));--soft:color-mix(in srgb,var(--gridline) 70%,var(--background));
--a:var(--bloc-a);--a-soft:color-mix(in srgb,var(--bloc-a) 14%,var(--background));--a-ink:color-mix(in srgb,var(--bloc-a) 80%,#000);
--b:var(--bloc-b);--b-soft:color-mix(in srgb,var(--bloc-b) 16%,var(--background));--b-ink:color-mix(in srgb,var(--bloc-b) 70%,#000);
--u:var(--neither);--u-soft:color-mix(in srgb,var(--neither) 14%,var(--background));--u-ink:color-mix(in srgb,var(--neither) 60%,#000);
--split:var(--primary);--contest:var(--secondary);--heat:var(--primary);--heat-on:#fff;--sans:var(--font);--serif:var(--font)}
*{box-sizing:border-box}
:host{display:block;margin:0;background:var(--background);color:var(--text);font-family:var(--font);font-size:14px;line-height:1.45}
button,input,select{font:inherit;color:inherit}button{cursor:pointer}
.fig{max-width:820px;margin:0 auto;padding:12px 10px 10px}
.fig h1{margin:0;font:700 26px/1.2 var(--font);letter-spacing:-.01em}
.fig .sub{margin:6px 0 16px;color:var(--text);font-size:15px;line-height:1.4}
.fig .note{margin:14px 0 0;color:var(--text-light);font-size:12px}
.footer{margin-top:14px;color:var(--text-light);font-size:12px}
.footer a{color:var(--primary);text-decoration:none}.footer a:hover{text-decoration:underline}
.dw-legend{display:flex;flex-wrap:wrap;gap:6px 16px;margin:0 0 12px;font-size:14px}
.dw-legend{color:var(--text)}.dw-legend i{display:inline-block;width:18px;height:18px;margin-right:6px;vertical-align:-4px}
.face{flex:none;display:inline-block;border-radius:50%;vertical-align:middle;background:var(--soft);box-shadow:0 0 0 2px var(--u)}.face.A{box-shadow:0 0 0 2px var(--a)}.face.B{box-shadow:0 0 0 2px var(--b)}
.name.has-face:before{display:none}.name.has-face .face{margin:-3px 7px -3px 2px}
.name{white-space:nowrap}.name:before{content:"";display:inline-block;width:9px;height:9px;margin-right:6px;background:var(--u);vertical-align:0}.name.A:before{background:var(--a)}.name.B:before{background:var(--b)}
.ballot{display:inline-grid;place-items:center;min-width:28px;height:22px;padding:0 3px;font-size:10px;font-weight:700}
.vY{background:var(--vote-aye);color:#fff}.vN{background:var(--vote-no);color:#fff}.vB{background:var(--vote-abstain);color:var(--text)}.vX{color:var(--muted)}
.chip{padding:2px 7px;font-size:12.5px;font-weight:700;background:var(--u-soft);color:var(--u-ink)}
.chip.A{background:var(--a-soft);color:var(--a-ink)}.chip.B{background:var(--b-soft);color:var(--b-ink)}
.gA{background:var(--a)}.gB{background:var(--b)}.gU{background:var(--u)}
@media(max-width:600px){.fig h1{font-size:21px}.fig .sub{font-size:14px}}

.controls{display:flex;flex-wrap:wrap;gap:6px;align-items:center;margin:0 0 14px}
.seg{display:inline-flex;flex-wrap:wrap;border:1px solid var(--gridline)}
.seg button{border:0;border-right:1px solid var(--gridline);background:var(--background);padding:7px 12px;font-size:13px;font-weight:500;color:var(--text)}
.seg button:last-child{border-right:0}
.seg button small{color:var(--text-light);font-weight:400;margin-left:4px}
.seg button[aria-pressed="true"]{background:var(--text);color:var(--background)}.seg button[aria-pressed="true"] small{color:inherit;opacity:.75}
.stage{position:relative;margin-bottom:4px;display:grid;grid-template-columns:repeat(3,1fr);gap:8px}
.zone{position:relative;padding:34px 0 10px;min-height:120px}
.zone.A{background:var(--a-soft)}.zone.U{background:var(--u-soft)}.zone.B{background:var(--b-soft)}
.zone h2{position:absolute;top:8px;left:10px;right:10px;margin:0;font-size:13px;font-weight:700;display:flex;justify-content:space-between;gap:6px}
.zone.A h2{color:var(--a-ink)}.zone.B h2{color:var(--b-ink)}.zone.U h2{color:var(--u-ink)}
.zone h2 span{font-weight:400;color:var(--text-light);font-size:12px}
.pill{position:absolute;left:0;top:0;width:calc((100% - 16px) / 3 - 24px);height:30px;display:flex;align-items:center;gap:7px;padding:0 10px;background:var(--background);
  font-size:13.5px;font-weight:700;white-space:nowrap;overflow:hidden;transition:transform .8s cubic-bezier(.6,.05,.25,1),box-shadow .3s,opacity .3s;box-shadow:0 1px 2px #0002}
.pill .face{margin-left:-4px}
.pill.na{opacity:.35}
@media(max-width:600px){.pill{font-size:11.5px;padding:0 6px;gap:5px;width:calc((100% - 16px) / 3 - 8px)}}
</style><figure class="fig">
  <h1>Overall blocs hold the most for Policing & Advocacy</h1>
  <p class="sub">Pick a topic to see who council members voted with on that topic's contested votes.</p>
  <div class="dw-legend" id="legend"></div>
  <div class="controls"><div class="seg" id="seg" role="group" aria-label="Topic"></div></div>
  <div class="stage" id="stage">
    <div class="zone A"><h2>Bloc A's group<span id="held-A"></span></h2></div>
    <div class="zone U"><h2>On their own</h2></div>
    <div class="zone B"><h2>Bloc B's group<span id="held-B"></span></h2></div>
  </div>
  <p class="note">Groups come from clustering members on one topic's contested votes at a time. Because of small sample sizes, movement is uncertain.</p>
  <div class="footer">Chart: Esha Bansiya / The Daily Californian · Source: Berkeley City Council minutes, <span data-range></span></div>
</figure>`;function o(e,t,r){let a=i,o=a.order,s=t=>e.querySelector(t),c=a.info.blocs.A,l=a.info.blocs.B;a.info.swing;let u=e=>c.includes(e)?`A`:l.includes(e)?`B`:`U`,d=e=>String(e??``).replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e]),f=(e,t=0)=>e==null?`–`:`${(e*100).toFixed(t)}%`,p=(e,t=22)=>n[e]?`<img class="face ${u(e)}" src="${n[e]}" alt="" width="${t}" height="${t}">`:``,m=(e,n)=>{let r=e=>{let t=String(e??``);return/[",\n]/.test(t)?`"${t.replace(/"/g,`""`)}"`:t},i=n.map(e=>e.map(r).join(`,`)).join(`
`),a=s(`#get-data`);a&&(a.href=t(i),a.download=`${e}.csv`)};e.querySelectorAll(`[data-range]`).forEach(e=>e.textContent=`${a.info.date_range[0]} to ${a.info.date_range[1]}`),(e=>{s(`#legend`).innerHTML=e.map(([e,t])=>`<span>${e?`<i style="${e}"></i>`:``}${t}</span>`).join(``)})([[`background:var(--a);border-radius:50%`,`Usually votes with bloc A`],[`background:var(--b);border-radius:50%`,`Usually votes with bloc B`],[`background:var(--u);border-radius:50%`,`Usually in neither bloc`]]);let h=e=>{let t=e.filter(e=>u(e)===`A`).length,n=e.filter(e=>u(e)===`B`).length;return t>n?`A`:n>t?`B`:`U`},g=[{name:`Overall`,full:`All contested votes`,n:a.info.n_contested,of:Object.fromEntries(o.map(e=>[e,u(e)])),held:{}}];a.topic_blocs.forEach(([e,t,,n])=>{let r={},i={};n.forEach(([e,t])=>{let n=e.length>1?h(e):`U`;e.forEach(e=>r[e]=n),e.length>1&&n!==`U`&&(i[n]=t)}),g.push({name:e.replace(` & surveillance`,``).replace(` & zoning`,``).replace(` & resolutions`,``),full:e,n:t,of:r,held:i})});let _=[`A`,`U`,`B`];s(`#seg`).innerHTML=g.map((e,t)=>`<button type="button" data-k="${t}" aria-pressed="${t===0}">${d(e.name)}<small>${e.n}</small></button>`).join(``);let v=s(`#stage`);v.insertAdjacentHTML(`beforeend`,o.map(e=>`<div class="pill ${u(e)}" data-n="${d(e)}">${p(e,22)}<span>${d(e)}</span></div>`).join(``));let y=Object.fromEntries([...v.querySelectorAll(`.pill`)].map(e=>[e.dataset.n,e])),b=Math.max(...g.flatMap(e=>_.map(t=>o.filter(n=>(e.of[n]||`U`)===t).length)));v.querySelectorAll(`.zone`).forEach(e=>e.style.minHeight=`${34+b*36+8}px`);let x=0,S=e=>{x=e;let t=g[e];s(`#seg`).querySelectorAll(`button`).forEach(t=>t.setAttribute(`aria-pressed`,String(+t.dataset.k===e)));let n=v.querySelector(`.zone`).getBoundingClientRect().width;_.forEach((e,r)=>{o.filter(n=>(t.of[n]||`U`)===e).forEach((e,i)=>{let a=y[e];a.style.transform=`translate(${r*(n+8)+12}px, ${34+i*36}px)`,a.classList.toggle(`na`,!t.of[e])})}),s(`#held-A`).textContent=t.held.A==null?``:`held ${f(t.held.A)}`,s(`#held-B`).textContent=t.held.B==null?``:`held ${f(t.held.B)}`};s(`#seg`).addEventListener(`click`,e=>{let t=e.target.closest(`button`);t&&S(+t.dataset.k)}),addEventListener(`resize`,()=>S(x),{signal:r});let C=g.findIndex(e=>location.hash&&e.name.toLowerCase().replace(/\s+/g,`-`)===decodeURIComponent(location.hash.slice(1)).toLowerCase());v.querySelectorAll(`.pill`).forEach(e=>e.style.transition=`none`),S(C>0?C:0),requestAnimationFrame(()=>requestAnimationFrame(()=>v.querySelectorAll(`.pill`).forEach(e=>e.style.transition=``))),m(`bloc-moves`,[[`member`,`usual bloc`,...g.map(e=>e.full)],...o.map(e=>[e,u(e)===`U`?`neither`:u(e),...g.map(t=>t.of[e]?t.of[e]===`U`?`on their own`:`bloc ${t.of[e]} group`:`too few votes`)])])}var s=r();function c(){return(0,s.jsx)(t,{title:`BlocMoves`,html:a,mount:o})}export{c as default};