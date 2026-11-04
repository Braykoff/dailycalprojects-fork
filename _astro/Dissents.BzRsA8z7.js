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

.rows{display:grid}
.row{display:grid;grid-template-columns:136px 34px minmax(0,1fr);gap:10px;align-items:center;padding:5px 0}
.row .nmb{font-size:15px}
.row .tot{font-size:15px;font-weight:700;font-variant-numeric:tabular-nums}
.sq{display:flex;flex-wrap:wrap;gap:2px}
.sq i{display:block;width:20px;height:20px;background:var(--secondary);cursor:default}
.sq i.alone{background:var(--primary)}
.sq i.ab{background-image:repeating-linear-gradient(135deg,transparent 0 3px,rgba(255,255,255,.45) 3px 5px)}
.sq i:hover,.sq i.on{box-shadow:inset 0 0 0 2px var(--text)}
.sq .gap{width:8px}
.sw-ab{display:inline-block;width:18px;height:18px;margin-right:6px;vertical-align:-4px;background:var(--secondary) repeating-linear-gradient(135deg,transparent 0 3px,rgba(255,255,255,.45) 3px 5px)}
.detail{margin:12px 0 0;height:84px;overflow:hidden;padding:10px 12px;background:var(--soft);font-size:14px;line-height:1.4}
.detail .dt,.detail .dm{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}
.detail .dt{font-weight:700}.detail .dm,.detail .m{color:var(--text-light);font-size:13px}.detail .dm b{color:var(--text)}
@media(max-width:600px){.row{grid-template-columns:112px 26px minmax(0,1fr);gap:6px}.row .nmb,.row .tot{font-size:13px}.sq i{width:12px;height:18px}}
</style><figure class="fig">
  <h1 id="title"></h1>
  <p class="sub">Each square is one No or Abstain vote. Dark squares are solo dissents Hover a square to see the motion.</p>
  <div class="dw-legend" id="legend"></div>
  <div class="rows" id="rows"></div>
  <p class="detail" id="detail"><span class="m">Hover a square to see the motion.</span></p>
  <p class="note">Contested motions only. Absent and recused members are not counted.</p>
  <div class="footer">Chart: Esha Bansiya / The Daily Californian · Source: Berkeley City Council minutes, <span data-range></span></div>
</figure>`;function o(e,t){let i=n,a=i.order,o=t=>e.querySelector(t),s=i.info.blocs.A,c=i.info.blocs.B;i.info.swing;let l=e=>s.includes(e)?`A`:c.includes(e)?`B`:`U`,u=e=>String(e??``).replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e]),d=e=>e.toLocaleString(`en-US`),f=e=>e.length<3?e.join(` and `):`${e.slice(0,-1).join(`, `)} and ${e.at(-1)}`,p=(e,t=22)=>r[e]?`<img class="face ${l(e)}" src="${r[e]}" alt="" width="${t}" height="${t}">`:``,m=e=>`<span class="name has-face ${l(e)}">${p(e)}${u(e)}</span>`,h=e=>String(e||``).replace(/\s*\((Reviewed by|Item contains|ltem contains|Continued from|Item Contains|ltem Contains)[^)]*\)?/gi,``).replace(/^Procedural:\s*/i,``).trim(),g=(e,n)=>{let r=e=>{let t=String(e??``);return/[",\n]/.test(t)?`"${t.replace(/"/g,`""`)}"`:t},i=n.map(e=>e.map(r).join(`,`)).join(`
`),a=o(`#get-data`);a&&a&&(a.href=t(i),a.download=`${e}.csv`)};e.querySelectorAll(`[data-range]`).forEach(e=>e.textContent=`${i.info.date_range[0]} to ${i.info.date_range[1]}`);let _=e=>{o(`#legend`).innerHTML=e.map(([e,t])=>`<span>${e?`<i style="${e}"></i>`:``}${t}</span>`).join(``)},v=i.motions.map((e,t)=>{let n=(i.context||{})[t];return{i:t,title:h(n?n[1]:e[0]),date:n?n[0]:``,codes:e[2],topic:e[3],level:e[4],passed:!!e[5],a:e[7],b:e[8]}}),y=v.filter(e=>e.level>0);v.forEach(e=>e.dis=a.filter((t,n)=>`NB`.includes(e.codes[n]))),o(`#unan`)&&(o(`#unan`).textContent=d(v.length-y.length)),o(`#total`)&&(o(`#total`).textContent=d(v.length)),_([[`background:var(--primary)`,`Alone`],[`background:var(--secondary)`,`With others`],[null,`<i class="sw-ab"></i>Abstained rather than voted No`]]);let b=(e,t)=>(e.date||``).localeCompare(t.date||``)||e.i-t.i,x=a.map(e=>{let t=a.indexOf(e),n=y.filter(e=>`NB`.includes(e.codes[t]));return{n:e,k:t,alone:n.filter(e=>e.dis.length===1).sort(b),withOthers:n.filter(e=>e.dis.length>1).sort(b)}}).sort((e,t)=>t.alone.length+t.withOthers.length-(e.alone.length+e.withOthers.length)||t.alone.length-e.alone.length),S=x[0];o(`#title`).textContent=`${S.n} has voted differently from the rest on ${S.alone.length} motions`;let C=(e,t)=>e.codes[t]===`B`?`Abstained`:`Voted No`,w=e=>{let t=[...e.codes].filter(e=>e===`Y`).length;return`${e.passed?`Passed`:`Failed`} ${t}–${e.dis.length}`},T=e=>[...e.alone.map(e=>[e,!0]),...e.withOthers.map(e=>[e,!1])].map(([t,n],r)=>`${r===e.alone.length&&e.alone.length?`<span class="gap"></span>`:``}<i class="${n?`alone`:``}${t.codes[e.k]===`B`?` ab`:``}" data-n="${u(e.n)}" data-i="${t.i}"></i>`).join(``);o(`#rows`).innerHTML=x.map(e=>`<div class="row" data-row="${u(e.n)}">${m(e.n).replace(`class="name`,`class="nmb name`)}<span class="tot">${e.alone.length+e.withOthers.length}</span><div class="sq">${T(e)}</div></div>`).join(``);let E=null,D=e=>{if(e===E)return;E&&E.classList.remove(`on`),E=e,e.classList.add(`on`);let t=x.find(t=>t.n===e.dataset.n),n=v[+e.dataset.i];o(`#detail`).innerHTML=`<div class="dt">${u(n.title)}</div><div class="dm">${[n.date,n.topic].filter(Boolean).map(u).join(` · `)} · <b>${u(t.n)}</b> ${C(n,t.k).toLowerCase()}${n.dis.length>1?`, with ${u(f(n.dis.filter(e=>e!==t.n)))}`:`, the only one`} · ${w(n)}</div>`};o(`#rows`).addEventListener(`mouseover`,e=>{let t=e.target.closest(`.sq i`);t&&D(t)}),o(`#rows`).addEventListener(`click`,e=>{let t=e.target.closest(`.sq i`);t&&D(t)}),o(`#rows`).addEventListener(`mouseleave`,()=>{E&&E.classList.remove(`on`),E=null}),g(`dissents`,[[`member`,`motion`,`date`,`topic`,`vote`,`alone or with others`,`others who dissented`,`result`],...x.flatMap(e=>[...e.alone,...e.withOthers].map(t=>[e.n,t.title,t.date,t.topic,C(t,e.k),t.dis.length===1?`alone`:`with others`,t.dis.filter(t=>t!==e.n).join(`; `),w(t)]))])}var s=i();function c(){return(0,s.jsx)(t,{title:`Dissents`,html:a,mount:o})}export{c as default};