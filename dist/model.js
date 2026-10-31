(function(root){
function project(p){
 const keys=['stocks','money','401k'];let balances=keys.map(k=>p[k]);const total=()=>balances.reduce((a,b)=>a+b,0);const initial=total();const weights=balances.map(v=>initial?v/initial:1/3);const rows=[];let retirementBalance=null,runout=null;
 for(let age=p.age;age<=100;age++){
  const expense=p.expenses;const passive=p.passive;const social=age>=p.socialAge?p.social*12:0;
  if(age===p.retire)retirementBalance=total();
  const start=total();balances=balances.map((b,i)=>b*(1+p[keys[i]+'Rate']/100));
  let withdrawal=0,shortfall=0;
  if(age<p.retire){balances=balances.map((b,i)=>b+p.savings*weights[i]);}
  else{const needed=expense-passive-social;if(needed>0){withdrawal=Math.min(needed,total());shortfall=Math.max(0,needed-total());const before=total();balances=balances.map(b=>before?Math.max(0,b-b*withdrawal/before):0);if(shortfall>0.01&&runout===null)runout=age;}else{balances=balances.map((b,i)=>b-needed*weights[i]);}}
  rows.push({age,start,end:total(),expense,passive,social,withdrawal,shortfall});
 }
 return {rows,retirementBalance,runout};
}
root.FreedomModel={project};if(typeof module!=='undefined')module.exports={project};
})(typeof window!=='undefined'?window:globalThis);
