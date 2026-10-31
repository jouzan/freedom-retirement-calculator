let annualCashflowRows=[];
let selectedCashflowAge=null;

function buildAnnualCashflows(p,m,baseYear=new Date().getFullYear()){
 return m.rows.filter(row=>row.age>=p.retire).map(row=>{
  return {age:row.age,year:baseYear+row.age-p.age,savings:Math.max(0,row.expense-row.passive-row.social),social:row.social,passive:row.passive,spending:row.expense,shortfall:row.shortfall,withdrawal:row.withdrawal};
 });
}
function selectCashflowYear(age){
 const row=annualCashflowRows.find(row=>row.age===age);
 if(!row)return;
 selectedCashflowAge=row.age;
 $('annual-selected-year').textContent=`${row.year} · Age ${row.age}`;
 $('annual-savings').textContent=money(row.savings);
 $('annual-social').textContent=money(row.social);
 $('annual-spending').textContent=money(row.spending);
 $('annual-passive').textContent=row.passive>0?`Other passive income: ${money(row.passive)} / year.`:'';
 $('annual-shortfall').textContent=row.shortfall>.01?`Savings cannot cover ${money(row.shortfall)} of the required withdrawal in ${row.year}. Available savings cover ${money(row.withdrawal)}.`:'';
 document.querySelectorAll('[data-cashflow-age]').forEach(group=>group.setAttribute('aria-pressed',Number(group.dataset.cashflowAge)===row.age?'true':'false'));
}
function renderAnnualCashflow(p,m){
 annualCashflowRows=m?buildAnnualCashflows(p,m):[];
 $('annual-description').textContent='Annual amounts based on the figures you enter.';
 const container=$('annual-cashflow-chart');
 const previousScroll=container.scrollLeft;
 if(!annualCashflowRows.length){
  $('annual-selected-year').textContent='Your retirement years';
  for(const id of ['annual-savings','annual-social','annual-spending'])$(id).textContent=money(0);
  $('annual-passive').textContent='';$('annual-shortfall').textContent='';
  container.innerHTML='<div class="annual-pending"><svg viewBox="0 0 700 160" role="img" aria-label="Year-by-year savings withdrawal and Social Security chart awaiting your plan"><line x1="35" y1="130" x2="665" y2="130" stroke="#dce5d2" stroke-width="2"/><path d="M60 130 H640" stroke="#547653" stroke-width="4"/><text x="350" y="72" text-anchor="middle" fill="#647659" font-size="20">Enter your ages and spending to see each retirement year</text><text x="350" y="106" text-anchor="middle" fill="#738369" font-size="17">Savings withdrawals + Social Security</text></svg></div>';
  return;
 }
 const rows=annualCashflowRows;
 const W=Math.max(1000,rows.length*70+110),H=360,L=88,R=22,T=40,B=72;
 const step=(W-L-R)/rows.length;
 const maximum=Math.max(1,...rows.flatMap(row=>[row.savings,row.social]))*1.12;
 const y=value=>H-B-value/maximum*(H-T-B);
 const chartBottom=H-B;
 let grid='';
 for(let i=0;i<=4;i++){
  const value=maximum*i/4,yy=y(value);
  grid+=`<line x1="${L}" y1="${yy}" x2="${W-R}" y2="${yy}" stroke="#e7ecdf"/><text x="${L-12}" y="${yy+6}" text-anchor="end" fill="#647659" font-size="17">${compact(value)}</text>`;
 }
 const bars=rows.map((row,index)=>{
  const x=L+step*index,barWidth=Math.min(22,(step-20)/2),savingsX=x+step/2-barWidth-3,socialX=x+step/2+3;
  const savingsHeight=chartBottom-y(row.savings),socialHeight=chartBottom-y(row.social),shortfallHeight=(chartBottom-y(row.shortfall));
  const title=`${row.year}, age ${row.age}. Required savings withdrawal ${money(row.savings)}. Social Security ${money(row.social)}. Spending ${money(row.spending)}.${row.shortfall>.01?` Unfunded withdrawal ${money(row.shortfall)}.`:''}`;
  return `<g class="annual-year" data-cashflow-age="${row.age}" role="button" tabindex="0" aria-pressed="false" aria-label="${title}"><title>${title}</title><rect class="year-hit" x="${x+1}" y="${T-12}" width="${step-2}" height="${H-T-2}" rx="7" fill="transparent"/><rect x="${savingsX}" y="${y(row.savings)}" width="${barWidth}" height="${savingsHeight}" rx="3" fill="#547653"/>${row.shortfall>.01?`<rect x="${savingsX}" y="${y(row.savings)}" width="${barWidth}" height="${Math.min(savingsHeight,shortfallHeight)}" fill="url(#annual-shortfall-pattern)"/>`:''}<rect x="${socialX}" y="${y(row.social)}" width="${barWidth}" height="${socialHeight}" rx="3" fill="#d2b879"/><text x="${x+step/2}" y="${H-43}" text-anchor="middle" fill="#38503b" font-size="16" font-weight="600">${row.year}</text><text x="${x+step/2}" y="${H-17}" text-anchor="middle" fill="#738369" font-size="15">Age ${row.age}</text></g>`;
 }).join('');
 container.innerHTML=`<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="group" aria-label="Annual required savings withdrawals and Social Security from age ${p.retire} through age 100"><defs><pattern id="annual-shortfall-pattern" width="7" height="7" patternUnits="userSpaceOnUse"><rect width="7" height="7" fill="#e6b9a0"/><path d="M-2 2 L2 -2 M0 7 L7 0 M5 9 L9 5" stroke="#a65f3b" stroke-width="2"/></pattern></defs>${grid}${bars}</svg>`;
 container.scrollLeft=previousScroll;
 selectCashflowYear(rows.some(row=>row.age===selectedCashflowAge)?selectedCashflowAge:rows[0].age);
}
if(typeof document!=='undefined'){
 const annualChart=document.getElementById('annual-cashflow-chart');
 const choose=event=>{const group=event.target.closest('[data-cashflow-age]');if(group)selectCashflowYear(Number(group.dataset.cashflowAge));};
 for(const event of ['click','pointerover','focusin'])annualChart.addEventListener(event,choose);
 annualChart.addEventListener('keydown',event=>{
  const group=event.target.closest('[data-cashflow-age]');if(!group)return;
  const age=Number(group.dataset.cashflowAge);
  if(event.key==='Enter'||event.key===' '){event.preventDefault();selectCashflowYear(age);}
  if(event.key==='ArrowRight'||event.key==='ArrowLeft'){
   const next=annualChart.querySelector(`[data-cashflow-age="${age+(event.key==='ArrowRight'?1:-1)}"]`);
   if(next){event.preventDefault();next.focus();next.scrollIntoView({block:'nearest',inline:'nearest'});}
  }
 });
}
if(typeof module!=='undefined')module.exports={buildAnnualCashflows};
