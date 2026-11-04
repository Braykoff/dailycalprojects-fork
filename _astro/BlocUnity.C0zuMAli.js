import"./rolldown-runtime.XKyaHtl9.js";import{t as e}from"./react.B54jxNxs.js";import{t}from"./CityblocGraphic.Bp-jaMws.js";import{t as n}from"./dissents-data.CiCsNPi0.js";import{t as r}from"./photos.DWdCCHZW.js";import{t as i}from"./jsx-runtime.CpoXNhZb.js";e();var a=`<style>
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

.rows{display:grid;gap:18px}
.row{display:grid;grid-template-columns:150px minmax(0,1fr);gap:12px;align-items:start}
.row .lab{font-size:15px;font-weight:700;line-height:1.25}
.row .lab .faces{display:flex;gap:6px;margin:8px 0 2px 2px}
.row .lab .who{display:block;font-weight:400;font-size:12.5px;color:var(--text-light);margin-top:2px}
.row .big{display:block;font-size:24px;font-weight:700;margin-top:6px;font-variant-numeric:tabular-nums}
.row .big small{font-size:13px;font-weight:400;color:var(--text-light)}
.sq{display:grid;grid-template-columns:repeat(27,minmax(0,1fr));gap:2px}
.sq i{display:block;height:24px;background:var(--soft);cursor:default}
.sq i.A{background:var(--a)}.sq i.B{background:var(--b)}
.sq i:hover,.sq i.on{box-shadow:inset 0 0 0 2px var(--text)}
.bench{margin:6px 0 0;font-size:12.5px;color:var(--text-light)}
.detail{margin:14px 0 0;min-height:92px;padding:10px 12px;background:var(--soft);font-size:14px;line-height:1.4}
.detail .dt{font-weight:700;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}
.detail .dm,.detail .m{color:var(--text-light);font-size:13px}
.detail .bs{display:flex;flex-wrap:wrap;gap:6px 12px;align-items:center;margin-top:6px;font-size:12.5px}
@media(max-width:600px){.row{grid-template-columns:1fr;gap:6px}.row .big{display:inline;margin:0 0 0 8px;font-size:18px}.sq{grid-template-columns:repeat(18,minmax(0,1fr))}.sq i{height:20px}}
</style><figure class="fig">
  <h1 id="title"></h1>
  <p class="sub">Each square is one contested motion. Hover a square to see how they voted.</p>
  <div class="dw-legend" id="legend"></div>
  <div class="rows" id="rows"></div>
  <div class="detail" id="detail"><span class="m">Hover a square to see the motion.</span></div>
  <p class="note">Contested motions only: at least one council member voted differently. Absent and recused members are left out; a motion counts if at least two bloc members voted.</p>
  <div class="footer">Chart: Esha Bansiya / The Daily Californian · Source: Berkeley City Council minutes, <span data-range></span></div>
</figure>`;function o(e,t){let i=n,a=i.order,o=t=>e.querySelector(t),s=i.info.blocs.A,c=i.info.blocs.B;i.info.swing;let l=e=>s.includes(e)?`A`:c.includes(e)?`B`:`U`,u=e=>String(e??``).replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e]),d=(e,t=0)=>e==null?`–`:`${(e*100).toFixed(t)}%`,f=e=>e.length<3?e.join(` and `):`${e.slice(0,-1).join(`, `)} and ${e.at(-1)}`,p=(e,t=22)=>r[e]?`<img class="face ${l(e)}" src="${r[e]}" alt="" width="${t}" height="${t}">`:``,m={Y:[`Aye`,`vY`],N:[`No`,`vN`],B:[`Ab`,`vB`],a:[`abs`,`vX`],r:[`rec`,`vX`],".":[`–`,`vX`]},h={Y:`Aye`,N:`No`,B:`Abstain`,a:`Absent`,r:`Recused`,".":`No vote recorded`},g=(e,t)=>`<span class="ballot ${m[e][1]}" title="${u(t)}: ${h[e]}">${m[e][0]}</span>`,_=e=>String(e||``).replace(/\s*\((Reviewed by|Item contains|ltem contains|Continued from|Item Contains|ltem Contains)[^)]*\)?/gi,``).replace(/^Procedural:\s*/i,``).trim(),v=(e,n)=>{let r=e=>{let t=String(e??``);return/[",\n]/.test(t)?`"${t.replace(/"/g,`""`)}"`:t},i=n.map(e=>e.map(r).join(`,`)).join(`
`),a=o(`#get-data`);a&&(a.href=t(i),a.download=`${e}.csv`)};e.querySelectorAll(`[data-range]`).forEach(e=>e.textContent=`${i.info.date_range[0]} to ${i.info.date_range[1]}`);let y=e=>{o(`#legend`).innerHTML=e.map(([e,t])=>`<span>${e?`<i style="${e}"></i>`:``}${t}</span>`).join(``)},b=i.motions.map((e,t)=>{let n=(i.context||{})[t];return{i:t,title:_(n?n[1]:e[0]),date:n?n[0]:``,codes:e[2],topic:e[3],level:e[4],passed:!!e[5],a:e[7],b:e[8]}}),x=b.filter(e=>e.level>0),S=(e,t)=>(e.date||``).localeCompare(t.date||``)||e.i-t.i,C=(e,t)=>t.map(t=>e.codes[a.indexOf(t)]).filter(e=>`YNB`.includes(e)),w=e=>{let t=x.filter(t=>C(t,e).length>=2);return{pool:t,together:t.filter(t=>new Set(C(t,e)).size===1)}},T=(e,t)=>t===0?[[]]:e.flatMap((n,r)=>T(e.slice(r+1),t-1).map(e=>[n,...e])),E=e=>{let t=[...e].sort((e,t)=>e-t),n=t.length>>1;return t.length%2?t[n]:(t[n-1]+t[n])/2},D=e=>{let t=w(e);return t.together.length/t.pool.length},O=[[`A`,s],[`B`,c]].map(([e,t])=>{let n=w(t),r=T(a,t.length).map(D),i=D(t);return{k:e,g:t,...n,rate:i,typical:E(r),rank:r.filter(e=>e>i+1e-9).length+1,tied:r.filter(e=>Math.abs(e-i)<1e-9).length>1,groups:r.length}}),[k,A]=O;o(`#title`).textContent=`Bloc A voted as one on ${k.together.length} of ${k.pool.length} contested motions, bloc B on ${A.together.length}`,y([[`background:var(--a)`,`Bloc A all voted the same`],[`background:var(--b)`,`Bloc B all voted the same`],[`background:var(--soft)`,`Bloc members split`]]),o(`#rows`).innerHTML=O.map(e=>{let t=e.pool.filter(t=>!e.together.includes(t));return`<div class="row"><div class="lab"><span class="name ${e.k}">Bloc ${e.k}</span><span class="faces">${e.g.map(e=>p(e,30)).join(``)}</span><span class="who">${u(f(e.g))}</span><span class="big">${d(e.rate)} <small>${e.together.length} of ${e.pool.length}</small></span></div>
  <div><div class="sq">${[...e.together.sort(S).map(t=>`<i class="${e.k}" data-b="${e.k}" data-i="${t.i}"></i>`),...t.sort(S).map(t=>`<i data-b="${e.k}" data-i="${t.i}"></i>`)].join(``)}</div></div></div>`}).join(``);let j=null,M=e=>{if(e===j)return;j&&j.classList.remove(`on`),j=e,e.classList.add(`on`);let t=O.find(t=>t.k===e.dataset.b),n=b[+e.dataset.i],r=[...n.codes].filter(e=>e===`Y`).length,i=[...n.codes].filter(e=>`NB`.includes(e)).length;o(`#detail`).innerHTML=`<div class="dt">${u(n.title)}</div><div class="dm">${[n.date,n.topic].filter(Boolean).map(u).join(` · `)} · ${n.passed?`Passed`:`Failed`} ${r}–${i} · bloc ${t.k} ${t.together.includes(n)?`voted as one`:`split`}</div>
    <div class="bs">${t.g.map(e=>`<span>${p(e,20)} ${u(e)} ${g(n.codes[a.indexOf(e)],e)}</span>`).join(``)}</div>`};o(`#rows`).addEventListener(`mouseover`,e=>{let t=e.target.closest(`.sq i`);t&&M(t)}),o(`#rows`).addEventListener(`click`,e=>{let t=e.target.closest(`.sq i`);t&&M(t)}),o(`#rows`).addEventListener(`mouseleave`,()=>{j&&j.classList.remove(`on`),j=null}),v(`bloc-unity`,[[`bloc`,`motion`,`date`,`topic`,`bloc voted as one`,...a],...O.flatMap(e=>e.pool.sort(S).map(t=>[e.k,t.title,t.date,t.topic,e.together.includes(t)?`yes`:`no`,...[...t.codes].map(e=>h[e])]))])}var s=i();function c(){return(0,s.jsx)(t,{title:`BlocUnity`,html:a,mount:o})}export{c as default};