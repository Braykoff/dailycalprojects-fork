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

.filters{display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin-bottom:12px}
.fc{min-height:34px;padding:6px 9px;border:1px solid var(--line);background:var(--paper);font-size:12px}
.fc[type=search]{flex:1 1 220px}
.count{color:var(--muted);font-size:12px;font-variant-numeric:tabular-nums}
.mhead,.mrow{display:grid;grid-template-columns:minmax(0,1fr) 290px;gap:14px;align-items:center;padding:9px 0;border-top:1px solid var(--hair)}
.mhead{border:0;padding:14px 0 8px;color:var(--text-light);font-size:11px;font-weight:700}
.mrow .t{font-weight:500;font-size:14px;line-height:1.35}.mrow .meta{color:var(--muted);font-size:11px;margin-top:2px}
.ballots{display:grid;grid-template-columns:repeat(9,1fr);gap:5px}
.mhead .ballots span.nh{display:flex;flex-direction:column;align-items:center;gap:6px;overflow:visible;padding-top:4px}
.ballots .ballot{min-width:0}
.mhead .ballots span{text-align:center;overflow:hidden;white-space:nowrap}
.more{margin-top:12px;padding:9px 16px;border:1px solid var(--line);background:var(--paper);font-size:12px;font-weight:700}
.tag{display:inline-block;padding:0 6px;font-size:10px;font-weight:800;margin-right:4px}
.tag.c{background:color-mix(in srgb,var(--secondary) 30%,var(--background));color:var(--text)}.tag.s{background:var(--primary);color:#fff}
@media(max-width:600px){.mhead{display:none}.mrow{grid-template-columns:1fr;gap:6px}}
</style><figure class="fig">
  <h1>Every motion and how each member voted</h1>
  <p class="sub">Search all <span id="total"></span> motions. Contested and split votes are listed first.</p>
  <div class="dw-legend" id="legend"></div>
  <div class="filters">
    <input class="fc" id="q" type="search" placeholder="Search motions…" aria-label="Search motions">
    <select class="fc" id="f-topic" aria-label="Topic"><option value="">All topics</option></select>
    <select class="fc" id="f-level" aria-label="Vote type"><option value="">All votes</option><option value="c">Contested</option><option value="2">Blocs split</option><option value="0">Unanimous</option></select>
    <select class="fc" id="f-member" aria-label="Dissent by"><option value="">Dissent by anyone</option></select>
    <span class="count" id="count"></span>
  </div>
  <div class="mhead"><span>Motion</span><div class="ballots" id="names"></div></div>
  <div id="list"></div>
  <button class="more" id="more" type="button">Show more</button>
  <p class="note">Contested motions use the agenda heading from the minutes; others use the motion title.</p>
  <div class="footer">Source: Berkeley City Council minutes, <span data-range></span> </div>
</figure>`;function o(e,t){let i=n,a=i.order,o=t=>e.querySelector(t),s=i.info.blocs.A,c=i.info.blocs.B;i.info.swing;let l=e=>s.includes(e)?`A`:c.includes(e)?`B`:`U`,u=e=>String(e??``).replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e]),d=e=>e.toLocaleString(`en-US`),f=(e,t=22)=>r[e]?`<img class="face ${l(e)}" src="${r[e]}" alt="" width="${t}" height="${t}">`:``,p={Y:[`Aye`,`vY`],N:[`No`,`vN`],B:[`Ab`,`vB`],a:[`abs`,`vX`],r:[`rec`,`vX`],".":[`–`,`vX`]},m={Y:`Aye`,N:`No`,B:`Abstain`,a:`Absent`,r:`Recused`,".":`No vote recorded`},h=(e,t)=>`<span class="ballot ${p[e][1]}" title="${u(t)}: ${m[e]}">${p[e][0]}</span>`,g=e=>String(e||``).replace(/\s*\((Reviewed by|Item contains|ltem contains|Continued from|Item Contains|ltem Contains)[^)]*\)?/gi,``).replace(/^Procedural:\s*/i,``).trim(),_=(e,n)=>{let r=e=>{let t=String(e??``);return/[",\n]/.test(t)?`"${t.replace(/"/g,`""`)}"`:t},i=n.map(e=>e.map(r).join(`,`)).join(`
`),a=o(`#get-data`);a&&(a.href=t(i),a.download=`${e}.csv`)};e.querySelectorAll(`[data-range]`).forEach(e=>e.textContent=`${i.info.date_range[0]} to ${i.info.date_range[1]}`);let v=e=>{o(`#legend`).innerHTML=e.map(([e,t])=>`<span>${e?`<i style="${e}"></i>`:``}${t}</span>`).join(``)},y=[[`background:var(--vote-aye)`,`Aye`],[`background:var(--vote-no)`,`No`],[`background:var(--vote-abstain)`,`Abstain`],[null,`<b style="color:var(--text-light);margin-right:6px">abs</b>Absent`],[null,`<b style="color:var(--text-light);margin-right:6px">rec</b>Recused`],[null,`<b style="color:var(--text-light);margin-right:6px">–</b>No vote recorded`]],b=i.motions.map((e,t)=>{let n=(i.context||{})[t];return{i:t,title:g(n?n[1]:e[0]),date:n?n[0]:``,codes:e[2],topic:e[3],level:e[4],passed:!!e[5],a:e[7],b:e[8]}});v([...y,[null,`<span class="tag s">Blocs split</span>Blocs took opposite sides`],[null,`<span class="tag c">Contested</span>At least one No or Abstain`]]),o(`#total`).textContent=d(b.length),o(`#f-topic`).innerHTML+=[...new Set(b.map(e=>e.topic))].sort().map(e=>`<option>${u(e)}</option>`).join(``),o(`#f-member`).innerHTML+=a.map(e=>`<option>${u(e)}</option>`).join(``),o(`#names`).innerHTML=a.map(e=>`<span class="nh" title="${u(e)}" style="color:var(--${l(e).toLowerCase()}-ink)">${f(e,20)}${u(e.slice(0,4))}</span>`).join(``);let x=[...b].sort((e,t)=>t.level-e.level||(t.date||``).localeCompare(e.date||``)||e.i-t.i),S=25,C=()=>{let e=o(`#q`).value.trim().toLowerCase(),t=o(`#f-topic`).value,n=o(`#f-level`).value,r=a.indexOf(o(`#f-member`).value),i=x.filter(i=>(!e||i.title.toLowerCase().includes(e))&&(!t||i.topic===t)&&(!n||(n===`c`?i.level>0:i.level===+n))&&(r<0||`NB`.includes(i.codes[r])));o(`#count`).textContent=`${d(i.length)} motion${i.length===1?``:`s`}`,o(`#list`).innerHTML=i.slice(0,S).map(e=>`<div class="mrow"><div><div class="t">${u(e.title.length>160?e.title.slice(0,160)+`…`:e.title)}</div><div class="meta">${e.level===2?`<span class="tag s">Blocs split</span>`:e.level===1?`<span class="tag c">Contested</span>`:``}${u(e.topic)}${e.date?` · ${e.date}`:``} · ${e.passed?`Passed`:`Failed`}</div></div><div class="ballots">${[...e.codes].map((e,t)=>h(e,a[t])).join(``)}</div></div>`).join(``)||`<p class="count" style="padding:12px 0">No motions match.</p>`,o(`#more`).hidden=i.length<=S};[`#q`,`#f-topic`,`#f-level`,`#f-member`].forEach(e=>o(e).addEventListener(`input`,()=>{S=25,C()})),o(`#more`).addEventListener(`click`,()=>{S+=50,C()}),C(),_(`council-votes`,[[`date`,`motion`,`topic`,`vote type`,`result`,...a],...b.map(e=>[e.date,e.title,e.topic,[`unanimous`,`contested`,`blocs split`][e.level],e.passed?`Passed`:`Failed`,...[...e.codes].map(e=>m[e])])])}var s=i();function c(){return(0,s.jsx)(t,{title:`MotionExplorer`,html:a,mount:o})}export{c as default};