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

.scroll{overflow-x:auto}
.ss{border-collapse:separate;border-spacing:3px;width:100%;min-width:700px;table-layout:fixed}
.ss th{font-weight:700;font-size:12px}
.ss th.rn{width:122px;text-align:left;font-size:13.5px;padding-right:6px}
.ss thead th.vh{vertical-align:bottom;text-align:center;padding:0 0 4px;font-size:10px;line-height:1.15;color:var(--text);cursor:default}
.ss thead th.vh b{display:block;font-size:12px}
.ss thead th.vh small{display:block;color:var(--text-light);font-weight:400;font-size:10.5px}
.ss tr.lab th{text-align:left;font-size:12px;color:var(--text-light);padding:10px 0 0}
.ss td.c{height:30px;text-align:center;font-size:11px;font-weight:700;color:#fff}
.ss td.c.A{background:var(--a)}.ss td.c.B{background:var(--b)}
.ss td.c.X{background:var(--background);color:var(--text-light);box-shadow:inset 0 0 0 1px var(--gridline)}
.ss td.c.brk{box-shadow:inset 0 0 0 2px var(--text),inset 0 0 0 4px var(--background)}
.ss tr.won th{text-align:left;font-size:12.5px;padding-top:12px}
.ss tr.won td.c{height:22px;font-size:10px}
.ss tr.won td{padding-top:12px}
.wrap{position:relative;min-width:700px}
#colbox{position:absolute;border:1.5px solid var(--text);pointer-events:none;display:none}
.detail{margin:12px 0 0;height:84px;overflow:hidden;font-size:14px;line-height:1.4;padding:10px 12px;background:var(--soft)}
@media(max-width:600px){.detail{height:104px}}
.detail b{font-weight:700}.detail .m{color:var(--text-light)}
.sw-brk{display:inline-block;width:18px;height:18px;margin-right:6px;vertical-align:-4px;background:var(--b);box-shadow:inset 0 0 0 2px var(--text),inset 0 0 0 4px var(--background)}
</style><figure class="fig">
  <h1>Council member's votes on the 10 contested motions</h1>
  <p class="sub">Each column is one of the <span id="n"></span> motions where most of bloc A and most of bloc B voted opposite ways, in date order. Hover a column to see the motion.</p>
  <div class="dw-legend" id="legend"></div>
  <div class="scroll"><div class="wrap"><table class="ss" id="ss"></table><div id="colbox" aria-hidden="true"></div></div></div>
  <p class="detail" id="detail"><span class="m">Hover or tap a column to see the motion.</span></p>
  <p class="note">An abstention counts as opposing the motion. </p>
  <div class="footer">Chart: Esha Bansiya / The Daily Californian · Source: Berkeley City Council minutes, <span data-range></span></div>
</figure>`;function o(e,t,i){let a=n,o=a.order,s=t=>e.querySelector(t),c=a.info.blocs.A,l=a.info.blocs.B,u=a.info.swing,d=e=>c.includes(e)?`A`:l.includes(e)?`B`:`U`,f=e=>String(e??``).replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e]),p=(e,t=22)=>r[e]?`<img class="face ${d(e)}" src="${r[e]}" alt="" width="${t}" height="${t}">`:``,m=e=>`<span class="name has-face ${d(e)}">${p(e)}${f(e)}</span>`,h={Y:`Aye`,N:`No`,B:`Abstain`,a:`Absent`,r:`Recused`,".":`No vote recorded`},g=e=>String(e||``).replace(/\s*\((Reviewed by|Item contains|ltem contains|Continued from|Item Contains|ltem Contains)[^)]*\)?/gi,``).replace(/^Procedural:\s*/i,``).trim(),_=(e,n)=>{let r=e=>{let t=String(e??``);return/[",\n]/.test(t)?`"${t.replace(/"/g,`""`)}"`:t},i=n.map(e=>e.map(r).join(`,`)).join(`
`),a=s(`#get-data`);a&&(a.href=t(i),a.download=`${e}.csv`)};e.querySelectorAll(`[data-range]`).forEach(e=>e.textContent=`${a.info.date_range[0]} to ${a.info.date_range[1]}`);let v=e=>{s(`#legend`).innerHTML=e.map(([e,t])=>`<span>${e?`<i style="${e}"></i>`:``}${t}</span>`).join(``)},y=a.motions.map((e,t)=>{let n=(a.context||{})[t];return{i:t,title:g(n?n[1]:e[0]),date:n?n[0]:``,codes:e[2],topic:e[3],level:e[4],passed:!!e[5],a:e[7],b:e[8]}}).filter(e=>e.level===2).sort((e,t)=>e.date.localeCompare(t.date)||e.i-t.i);s(`#n`).textContent=y.length,v([[`background:var(--a)`,`Took bloc A's side`],[`background:var(--b)`,`Took bloc B's side`],[`background:var(--background);box-shadow:inset 0 0 0 1px var(--gridline)`,`Didn't vote`],[null,`<i class="sw-brk"></i>Broke from their own bloc`],[null,`<b style="margin-right:6px">Aye / No / Ab</b>How they voted (Ab = abstained)`]]);let b=e=>e.a>=.5?`Y`:`N`,x=(e,t)=>{let n=e.codes[o.indexOf(t)];return`YNB`.includes(n)?n===`Y`==(b(e)===`Y`)?`A`:`B`:null},S=e=>b(e)===`Y`===e.passed?`A`:`B`,C={"Policing & surveillance":`Policing`,"Budget, taxes & fees":`Budget`,"Procedural & agenda":`Proce­dural`,"Advocacy & resolutions":`Advo­cacy`,"Land use & zoning":`Land use`,"Streets & transport":`Streets`,Homelessness:`Homeless`,"Community grants & culture":`Community`},w=e=>e?new Date(e+`T12:00`).toLocaleDateString(`en-US`,{month:`short`,year:`2-digit`}).replace(` `,` ’`):``,T=`<colgroup><col style="width:122px">${y.map(()=>`<col class="vcol">`).join(``)}</colgroup>`,E=`<thead><tr><th class="rn"></th>${y.map((e,t)=>`<th class="vh" data-k="${t}"><b>${t+1}</b>${f(C[e.topic]||e.topic)}<small>${w(e.date)}</small></th>`).join(``)}</tr></thead>`,D=e=>{let t=y.map(t=>x(t,e)),n=d(e),r=y.map((r,i)=>{let a=t[i],s=r.codes[o.indexOf(e)];return a?`<td class="c ${a}${n!==`U`&&a!==n?` brk`:``}" data-k="${i}" data-n="${f(e)}">${{Y:`Aye`,N:`No`,B:`Ab`}[s]}</td>`:`<td class="c X" data-k="${i}" data-n="${f(e)}">${s===`a`?`abs`:s===`r`?`rec`:`–`}</td>`}).join(``);return`<tr><th class="rn">${m(e)}</th>${r}</tr>`},O=`<tr class="won"><th>Side that won</th>${y.map((e,t)=>{let n=S(e);return`<td class="c ${n}" data-k="${t}">${n}</td>`}).join(``)}</tr>`;s(`#ss`).innerHTML=T+E+`<tbody>`+[[`Bloc A`,c],[`Bloc B`,l],[`Neither bloc`,u]].map(([e,t])=>`<tr class="lab"><th colspan="${y.length+1}">${e}</th></tr>${t.map(D).join(``)}`).join(``)+O+`</tbody>`;let k=s(`#colbox`),A=s(`.wrap`),j=-1,M=e=>{if(e===j)return;if(j=e,e<0){k.style.display=`none`;return}let t=s(`#ss th.vh[data-k="${e}"]`).getBoundingClientRect(),n=s(`#ss tr.won td[data-k="${e}"]`).getBoundingClientRect(),r=A.getBoundingClientRect();Object.assign(k.style,{display:`block`,left:`${t.left-r.left-2}px`,top:`${t.top-r.top-2}px`,width:`${t.width+4}px`,height:`${n.bottom-t.top+4}px`});let i=y[e],a=S(i),o=[...i.codes].filter(e=>e===`Y`).length,c=[...i.codes].filter(e=>e===`N`||e===`B`).length;s(`#detail`).innerHTML=`<b>${e+1}. ${f(i.title)}</b><br><span class="m">${i.date} · ${f(i.topic)} · ${i.passed?`Passed`:`Failed`} ${o}–${c} · bloc ${a}'s side won</span>`};s(`#ss`).addEventListener(`mouseover`,e=>{let t=e.target.closest(`[data-k]`);t&&M(+t.dataset.k)}),s(`#ss`).addEventListener(`click`,e=>{let t=e.target.closest(`[data-k]`);t&&M(+t.dataset.k)}),addEventListener(`resize`,()=>{let e=j;j=-1,M(e)},{signal:i}),_(`split-sides`,[[`member`,`usual bloc`,...y.map((e,t)=>`${t+1}. ${e.date} ${e.title}`)],...o.map(e=>[e,d(e)===`U`?`neither`:d(e),...y.map(t=>x(t,e)?`bloc ${x(t,e)} side`:h[t.codes[o.indexOf(e)]])]),[`Side that won`,``,...y.map(e=>`bloc ${S(e)}`)]])}var s=i();function c(){return(0,s.jsx)(t,{title:`SplitSides`,html:a,mount:o})}export{c as default};