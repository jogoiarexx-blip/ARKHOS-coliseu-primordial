var fd=Object.defineProperty;var pd=(n,t,e)=>t in n?fd(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var Gt=(n,t,e)=>pd(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const Nc=[{id:"carvunio",name:"Carvúnio",affinity:"brasa",role:"batedor",hp:25,atk:7,armor:1,move:4,range:1,squadCost:2,tags:[],skill:{id:"rastro-quente",name:"Rastro Quente",extraPO:1,cooldown:2,target:"none",range:0,text:"Deixa Cinza aquecida na casa onde termina e na casa de onde veio, por 2 rodadas. Brasa ganha +10% de dano sobre Cinza."},look:"roedor de carvão com rabo incandescente"},{id:"cinzalon",name:"Cinzalon",affinity:"brasa",role:"assalto",hp:34,atk:11,armor:2,move:3,range:1,squadCost:3,tags:[],skill:{id:"estouro-cinzas",name:"Estouro de Cinzas",extraPO:1,cooldown:2,target:"none",range:1,text:"Dano 6 (perfuração parcial) em todos os inimigos nas 4 casas em cruz ao redor e aplica Queimadura (−3 PV por 2 rodadas)."},look:"felino magro de cerâmica rachada"},{id:"goteju",name:"Goteju",affinity:"mare",role:"batedor",hp:24,atk:7,armor:0,move:4,range:1,squadCost:2,tags:["aquatico"],skill:{id:"escorrer",name:"Escorrer",extraPO:1,cooldown:2,target:"cell",range:2,text:"Escorre por cima de um aliado adjacente até a casa livre logo atrás dele e recebe Guarda (−25% do próximo dano)."},look:"criatura-gota com pés de concha"},{id:"nacarino",name:"Nacarino",affinity:"mare",role:"suporte",hp:30,atk:6,armor:2,move:3,range:2,squadCost:2,tags:["aquatico"],skill:{id:"mare-benefica",name:"Maré Benéfica",extraPO:1,cooldown:2,target:"ally",range:2,text:"Cura 7 PV de um aliado a até 2 casas (ou de si mesmo) e limpa Queimadura."},look:"molusco de porcelana perolada"},{id:"musgote",name:"Musgote",affinity:"selva",role:"batedor",hp:26,atk:7,armor:1,move:4,range:1,squadCost:2,tags:[],skill:{id:"broto-agil",name:"Broto Ágil",extraPO:1,cooldown:2,target:"none",range:0,text:"MOV +1 nesta ativação (use antes de mover). Se terminar sobre Mata, recebe Guarda."},look:"coelho vegetal de musgo"},{id:"larveira",name:"Larveira",affinity:"selva",role:"controle",hp:32,atk:8,armor:2,move:3,range:2,squadCost:3,tags:[],skill:{id:"teia-raizes",name:"Teia de Raízes",extraPO:1,cooldown:2,target:"enemy",range:2,text:"Enraíza 1 inimigo a até 2 casas com linha de visão: ele não pode se deslocar até o fim da próxima ativação dele (ainda pode atacar)."},look:"lagarta com raiz-casco"},{id:"pedruxo",name:"Pedruxo",affinity:"pedra",role:"vanguarda",hp:40,atk:7,armor:5,move:2,range:1,squadCost:2,tags:[],skill:{id:"casca-densa",name:"Casca Densa",extraPO:1,cooldown:2,target:"self",range:0,text:"ARM +2 até o começo da próxima ativação de Pedruxo."},look:"lagartixa mineral arredondada"},{id:"mineruva",name:"Mineruva",affinity:"pedra",role:"atirador",hp:32,atk:10,armor:2,move:3,range:3,squadCost:3,tags:["arqueado"],skill:{id:"estilhaco-guiado",name:"Estilhaço Guiado",extraPO:1,cooldown:2,target:"enemy",range:3,text:"Ataque que ignora a cobertura leve de Mata e Cristal."},look:"coruja com penas minerais"},{id:"zirpim",name:"Zirpim",affinity:"trovao",role:"batedor",hp:23,atk:8,armor:0,move:4,range:1,squadCost:2,tags:[],skill:{id:"estalo",name:"Estalo",extraPO:1,cooldown:2,target:"cell",range:2,text:"Depois de mover, teleporta para uma casa livre a até 2 de distância, ignorando obstáculos, lava e altura."},look:"lagarto neon de pernas de mola"},{id:"falcorrente",name:"Falcorrente",affinity:"trovao",role:"atirador",hp:28,atk:10,armor:1,move:4,range:3,squadCost:3,tags:["voador"],skill:{id:"raio-arco",name:"Raio em Arco",extraPO:1,cooldown:3,target:"enemy",range:3,text:"Ataque normal; o raio salta para o inimigo mais próximo (até 2 casas do alvo) causando 4. Se o alvo estiver sobre Condutor, salta para mais um."},look:"falcão com asas segmentadas"},{id:"lampejo",name:"Lampejo",affinity:"astral",role:"batedor",hp:24,atk:7,armor:0,move:4,range:1,squadCost:2,tags:["voador"],skill:{id:"dobra-breve",name:"Dobra Breve",extraPO:1,cooldown:2,target:"ally",range:1,text:"Troca de lugar com um aliado adjacente (inclusive Enraizado)."},look:"pequena arraia luminosa flutuante"},{id:"nebuliz",name:"Nebuliz",affinity:"astral",role:"suporte",hp:28,atk:6,armor:1,move:3,range:2,squadCost:2,tags:["voador"],skill:{id:"bruma-memoria",name:"Bruma de Memória",extraPO:1,cooldown:2,target:"ally",range:2,text:"Cura 6 PV de um aliado a até 2 casas (ou de si mesmo) e remove Enraizado."},look:"nuvem com máscara de argila"}],md=new Map(Nc.map(n=>[n.id,n]));md.set("simbolo",{"id":"simbolo","name":"Símbolo Primordial","affinity":"astral","role":"vanguarda","hp":48,"atk":0,"armor":4,"move":0,"range":0,"squadCost":0,"tags":["simbolo"],"skill":{"id":"simbolo-inerte","name":"Núcleo do Coliseu","extraPO":0,"cooldown":0,"target":"self","range":0,"text":"Peça central imóvel. Proteja seu símbolo: sua destruição encerra o duelo."},"look":"obelisco de pedra antiga com cristal dourado"});function je(n){const t=md.get(n);if(!t)throw new Error(`Eco desconhecido: ${n}`);return t}const wa=18,Ta=6,Ts=4,ln={brasa:{name:"Brasa",symbol:"▲",color:"#ff7a4d",beats:"selva"},selva:{name:"Selva",symbol:"♣",color:"#7ed36f",beats:"mare"},mare:{name:"Maré",symbol:"≈",color:"#4cc9f0",beats:"brasa"},pedra:{name:"Pedra",symbol:"⬢",color:"#c9b48a",beats:"trovao"},trovao:{name:"Trovão",symbol:"ϟ",color:"#ffe066",beats:"astral"},astral:{name:"Astral",symbol:"✧",color:"#c3a6ff",beats:"pedra"}},Oc={vanguarda:"Vanguarda",assalto:"Assalto",atirador:"Atirador",suporte:"Suporte",controle:"Controle",batedor:"Batedor"};function Ju(n){if(n.length===0)return{ok:!1,reason:"Escolha ao menos 1 Eco."};if(n.length>Ta)return{ok:!1,reason:`No máximo ${Ta} Ecos.`};if(new Set(n).size!==n.length)return{ok:!1,reason:"Ecos duplicados não são permitidos."};const t=n.reduce((e,i)=>e+je(i).squadCost,0);return t>wa?{ok:!1,reason:`Orçamento estourado: ${t}/${wa}.`}:{ok:!0}}const Jn=[{x:0,y:-1,f:"N"},{x:1,y:0,f:"E"},{x:0,y:1,f:"S"},{x:-1,y:0,f:"W"}],gd={N:{x:0,y:-1},S:{x:0,y:1},E:{x:1,y:0},W:{x:-1,y:0}},Ls=n=>n==="A"?"B":"A",Ce=(n,t)=>Math.abs(n.x-t.x)+Math.abs(n.y-t.y),Ci=(n,t)=>n.x===t.x&&n.y===t.y,vd=n=>`${n.x},${n.y}`;function _d(n){return Math.floor(n+.5+1e-9)}function fe(n,t,e){if(!(t<0||e<0||t>=n.width||e>=n.height))return n.tiles[e*n.width+t]}const Ee=n=>n.temp?.terrain??n.terrain;function He(n,t){return n.units.find(e=>e.id===t)}function gn(n,t,e,i){return n.units.find(s=>s.x===t&&s.y===e&&s.id!==i)}const zt=n=>je(n.monsterId),xd=n=>zt(n).tags.includes("voador");function Cn(n,t){return n.statuses.some(e=>e.id===t)}function Ku(n,t){return n.statuses.find(e=>e.id===t)}function Zi(n,t){n.statuses=n.statuses.filter(e=>e.id!==t.id),n.statuses.push({...t})}function Os(n){if(!n)return!1;const t=Ee(n);return t!=="lava"&&t!=="parede"}function Ha(n,t,e){const i=Ee(e);if(i==="parede")return 1/0;if(xd(n))return 1;if(i==="lava")return 1/0;const s=e.h-t.h;if(s>=2||s<=-2)return 1/0;let r=1;s===1&&(r+=1);const a=zt(n);return i==="agua"&&a.affinity!=="mare"&&!a.tags.includes("aquatico")&&(r+=1),r}function Ui(n,t=0){if(Cn(n,"enraizado"))return 0;let e=zt(n).move+t;return Cn(n,"lento")&&(e=Math.max(1,e-1)),e}
/* ARKHOS 0.3 - perfis táticos do Coliseu */
const arkDiagonals=[{x:1,y:1},{x:1,y:-1},{x:-1,y:1},{x:-1,y:-1}];
function arkSymbol(n){return !!n&&n.monsterId==="simbolo"}
function arkScout(n){return zt(n).role==="batedor"||xd(n)}
function arkMoveVectors(n){return arkScout(n)?Jn.concat(arkDiagonals):Jn}
function arkStep(n,t,from,to){
  const dx=to.x-from.x,dy=to.y-from.y,ax=Math.abs(dx),ay=Math.abs(dy);
  if(ax+ay===1)return true;
  if(ax!==1||ay!==1||!arkScout(t))return false;
  if(xd(t))return true;
  const first=fe(n,from.x+dx,from.y),second=fe(n,from.x,from.y+dy);
  return !!first&&!!second&&Os(first)&&Os(second)&&
    !gn(n,first.x,first.y,t.id)&&!gn(n,second.x,second.y,t.id)&&
    Ha(t,from,first)<Infinity&&Ha(t,from,second)<Infinity;
}
function arkAttackDistance(t,from,to){
  const dx=Math.abs(from.x-to.x),dy=Math.abs(from.y-to.y),role=zt(t).role;
  if(role==="atirador")return dx===0||dy===0||dx===dy?Math.max(dx,dy):Infinity;
  if(role==="batedor")return Math.max(dx,dy);
  return dx+dy;
}
function Qu(n,t,e){const i=n.width*n.height,s=new Array(i).fill(1/0),r=new Array(i).fill(-1),a=new Array(i).fill(!1),o=t.y*n.width+t.x;for(s[o]=0;;){let l=-1;for(let f=0;f<i;f++)!a[f]&&s[f]<1/0&&(l<0||s[f]<s[l])&&(l=f);if(l<0)break;a[l]=!0;const u=l%n.width,h=Math.floor(l/n.width),d=n.tiles[l];for(const f of arkMoveVectors(t)){const g=u+f.x,v=h+f.y,m=fe(n,g,v);if(!m||gn(n,g,v,t.id)||!arkStep(n,t,d,m))continue;const p=s[l]+Ha(t,d,m),b=v*n.width+g;p<=e&&p<s[b]&&(s[b]=p,r[b]=l)}}const c=new Map;for(let l=0;l<i;l++){if(s[l]===1/0)continue;const u=n.tiles[l];if(!Os(u))continue;const h=[];let d=l;for(;d!==o&&d>=0;)h.unshift({x:d%n.width,y:Math.floor(d/n.width)}),d=r[d];c.set(vd(u),{pos:{x:u.x,y:u.y},cost:s[l],path:h})}return c}function yd(n,t,e,i){if(e.length===0)return null;if(i<=0)return Cn(t,"enraizado")?"Eco Enraizado não pode se deslocar.":"Sem movimento disponível.";let s=fe(n,t.x,t.y),r=0;for(const a of e){if(!arkStep(n,t,s,a))return"Caminho inválido: respeite o padrão de movimento e os obstáculos.";const o=fe(n,a.x,a.y);if(!o)return"Caminho sai do tabuleiro.";if(gn(n,a.x,a.y,t.id))return"Caminho atravessa outra unidade.";const c=Ha(t,s,o);if(c===1/0)return Ee(o)==="parede"?"Caminho atravessa uma parede.":Ee(o)==="lava"?"Caminho atravessa lava.":"Desnível de 2 níveis exige escalada ou voo.";r+=c,s=o}return r>i?`Caminho custa ${r} passos; MOV disponível ${i}.`:Os(s)?null:"Não é possível terminar o movimento nessa casa."}function Md(n,t){let e=n.x,i=n.y;const s=t.x-n.x,r=t.y-n.y,a=Math.abs(s),o=Math.abs(r),c=Math.sign(s),l=Math.sign(r),u=[{x:e,y:i}];let h=0,d=0;for(;h<a||d<o;){const f=(1+2*h)*o-(1+2*d)*a;f===0?(u.push({x:e+c,y:i},{x:e,y:i+l}),e+=c,i+=l,h++,d++):f<0?(e+=c,h++):(i+=l,d++),u.push({x:e,y:i})}return u}function Sd(n,t,e){for(const i of Md(t,e)){if(Ci(i,t)||Ci(i,e))continue;const s=fe(n,i.x,i.y);if(s&&Ee(s)==="parede")return!1}return!0}function bd(n,t,e,i,s=zt(t).range){const r=zt(t),a=fe(n,e.x,e.y).h,o=fe(n,i.x,i.y).h;return s+(r.tags.includes("arqueado")&&a>o?1:0)}function Fs(n,t,e,i,s){const r=arkAttackDistance(t,e,i);if(r===0)return"Alvo inválido.";if(!Number.isFinite(r))return"Atiradores atacam em linhas retas ou diagonais, como no coliseu.";const a=bd(n,t,e,i,s);return r>a?`Fora de alcance (${r} casas; alcance ${a}).`:r>1&&!Sd(n,e,i)?"Sem linha de visão: uma parede bloqueia o disparo.":null}const Aa={brasa:"selva",selva:"mare",mare:"brasa",pedra:"trovao",trovao:"astral",astral:"pedra"};function Ed(n,t){return Aa[n]===t?1.15:Aa[t]===n?.9:1}const vl={brasa:"cinza",mare:"agua",selva:"mata",pedra:"cristal",trovao:"condutor",astral:"fenda"};function wd(n,t){if(vl[n]===t)return 1.1;const e=Object.keys(Aa).find(i=>Aa[i]===n);return vl[e]===t?.95:1}function Td(n){let t=zt(n).armor;return Cn(n,"casca")&&(t+=2),Cn(n,"fragil")&&(t-=2),Math.max(0,t)}const zi=n=>n.toFixed(2).replace(".",",").replace(/,?0+$/,"");function ui(n,t,e,i,s={}){const r=zt(t),a=zt(i),o=Td(i),c=[];let l;if(s.power!==void 0){const O=s.pierce??.5;l=s.power-o*O,c.push(`Poder ${s.power} − ARM ${o}×${zi(O)} = ${zi(l)}`)}else{const O=s.pierce??1;l=r.atk-o*O,c.push(O===1?`ATK ${r.atk} − ARM ${o} = ${zi(l)}`:`ATK ${r.atk} − ARM ${o}×${zi(O)} = ${zi(l)}`)}const u=Math.max(2,l);l<2&&c.push("Mínimo de 2 antes dos multiplicadores");const h=Ed(r.affinity,a.affinity);c.push(`Afinidade: ${h>1?"vantagem":h<1?"desvantagem":"neutra"} ×${zi(h)}`);const d=fe(n,e.x,e.y),f=fe(n,i.x,i.y),g=d.h>f.h?1.1:1;g>1&&c.push("Altura: acima do alvo ×1,1");const v=gd[i.facing],p=(e.x-i.x)*v.x+(e.y-i.y)*v.y<=0?1.1:1;p>1&&c.push("Flanco: lateral/costas ×1,1");const b=wd(r.affinity,Ee(d));b!==1&&c.push(`Terreno: ${b>1?"favorável":"desfavorável"} ×${zi(b)}`);const S=Ce(e,i)>1,x=Ee(f),D=S&&!s.ignoreCover&&(x==="mata"||x==="cristal")?.15:0;D&&c.push("Cobertura leve: −15%");const R=Cn(i,"guarda")?.25:0;R&&c.push("Guarda: −25%");const P=Math.min(.5,1-(1-D)*(1-R)),A=u*h*g*p*b*(1-P),M=Math.max(1,_d(A)),_=Ku(i,"barreira"),T=_?Math.min(_.value??0,M):0;return T&&c.push(`Barreira absorve ${T}`),{total:M,absorbed:T,lines:c,base:u,affinity:h,height:g,flank:p,terrain:b,reduction:P}}function Ai(n,t,e){const i=t.x-n.x,s=t.y-n.y;return i===0&&s===0?e:Math.abs(i)>=Math.abs(s)?i>0?"E":"W":s>0?"S":"N"}function Lr(n,t,e){const i={...t,x:e.x,y:e.y};return{s2:{...n,units:n.units.map(s=>s.id===t.id?i:s)},u2:i}}function se(n,t,e){n.log.push({round:n.round,team:t,text:e}),n.log.length>60&&n.log.splice(0,n.log.length-60)}const de=n=>zt(n).name;function Ra(n,t,e,i,s,r){const a=Ku(t,"barreira");let o=e;if(a&&(a.value??0)>0){const l=Math.min(a.value??0,o);a.value=(a.value??0)-l,o-=l,(a.value??0)<=0&&(t.statuses=t.statuses.filter(u=>u.id!=="barreira"))}t.statuses=t.statuses.filter(l=>l.id!=="guarda");const c=Math.min(t.hp,o);return t.hp-=o,n.stats[r].damage+=c,i.push({type:"damage",unitId:t.id,amount:e,source:s}),c}function zr(n,t,e,i,s,r){const a=r?Math.min(e,Math.max(0,t.hp-1)):e;a<=0||(t.hp-=a,i.push({type:"damage",unitId:t.id,amount:a,source:s}))}function Ad(n,t,e,i,s){const r=Math.max(0,Math.min(e,t.maxHp-t.hp));return t.hp+=r,n.stats[s].healing+=r,i.push({type:"heal",unitId:t.id,amount:r}),r}function Uo(n,t){const e=n.units.filter(i=>i.hp<=0);if(e.length){for(const i of e)t.push({type:"defeated",unitId:i.id}),n.stats[i.team].lost++,n.stats[i.team==="A"?"B":"A"].defeated++,se(n,i.team,`${de(i)} foi desfeito e volta à Memória-Viva.`);n.units=n.units.filter(i=>i.hp>0)}}function Rd(n,t){const e=new Set([`${t.x},${t.y}`]),i=[{x:t.x,y:t.y}];for(;i.length;){const s=i.shift();for(const[r,a]of[[0,-1],[1,0],[0,1],[-1,0]]){const o={x:s.x+r,y:s.y+a},c=`${o.x},${o.y}`;if(e.has(c))continue;e.add(c);const l=fe(n,o.x,o.y);if(!l)continue;const u=l.temp?.terrain??l.terrain;if(u!=="parede"){if(u!=="lava"&&!n.units.some(h=>h.x===o.x&&h.y===o.y))return o;i.push(o)}}}return null}const gr=(n,t)=>t.team!==n.team;function _l(n,t,e,i){const s=e?He(n,e):void 0;return s?s.team!==t.team?"Alvo precisa ser aliado.":Ce(t,s)>i?`Aliado fora do alcance (${i}).`:s:"Escolha um aliado."}function th(n,t,e){const i=zt(t).skill;switch(i.id){case"rastro-quente":case"broto-agil":case"casca-densa":return null;case"estouro-cinzas":return Jn.some(r=>{const a=gn(n,t.x+r.x,t.y+r.y);return!!a&&gr(t,a)})?null:"Nenhum inimigo nas 4 casas em cruz.";case"escorrer":{const s=e.cell;if(!s)return"Escolha a casa de pouso.";const r=s.x-t.x,a=s.y-t.y;if(!(Math.abs(r)===2&&a===0||Math.abs(a)===2&&r===0))return"Pouso precisa estar a 2 casas em linha reta.";const o=gn(n,t.x+r/2,t.y+a/2);return!o||o.team!==t.team?"Precisa haver um aliado entre Goteju e o pouso.":!Os(fe(n,s.x,s.y))||gn(n,s.x,s.y,t.id)?"Casa de pouso ocupada ou intransitável.":null}case"mare-benefica":case"bruma-memoria":{const s=_l(n,t,e.targetId,i.range);return typeof s=="string"?s:null}case"teia-raizes":{const s=e.targetId?He(n,e.targetId):void 0;return!s||!gr(t,s)?"Escolha um inimigo.":Fs(n,t,t,s,i.range)}case"estilhaco-guiado":case"raio-arco":{const s=e.targetId?He(n,e.targetId):void 0;return!s||!gr(t,s)?"Escolha um inimigo.":Fs(n,t,t,s)}case"estalo":{const s=e.cell;return s?Ci(s,t)?"Escolha outra casa.":Ce(t,s)>i.range?"Destino a mais de 2 casas.":!Os(fe(n,s.x,s.y))||gn(n,s.x,s.y,t.id)?"Destino ocupado ou intransitável.":null:"Escolha a casa de destino."}case"dobra-breve":{const s=_l(n,t,e.targetId,1);return typeof s=="string"?s:s.id===t.id?"Escolha outro aliado.":null}}return"Habilidade desconhecida."}function xl(n,t,e,i,s){const r=n.units.filter(o=>gr(t,o)&&!i.has(o.id)&&o.hp>0&&Ce(o,e)<=2).sort((o,c)=>Ce(o,e)-Ce(c,e)||o.id.localeCompare(c.id))[0];if(!r)return null;i.add(r.id);const a=ui(n,t,t,r,{power:4,pierce:0,ignoreCover:!0});return s.push({type:"attack",attackerId:t.id,targetId:r.id,damage:a.total,skill:"raio-arco"}),Ra(n,r,a.total,s,"Raio em Arco",t.team),se(n,t.team,`O arco salta para ${de(r)}: ${a.total} de dano.`),r}function Cd(n,t,e,i,s){const r=zt(t).skill;switch(n.stats[t.team].skills++,r.id){case"rastro-quente":{const a=i.path.length>=2?i.path[i.path.length-2]:i.path.length===1?i.start:null,o=[{x:t.x,y:t.y},...a?[a]:[]].filter(c=>{const l=fe(n,c.x,c.y),u=Ee(l);return u!=="lava"&&u!=="parede"&&u!=="ponte"&&u!=="agua"});for(const c of o)fe(n,c.x,c.y).temp={terrain:"cinza",rounds:2};s.push({type:"skill",unitId:t.id,skillId:r.id,cells:o},{type:"tiles",cells:o}),se(n,t.team,`${de(t)} deixa um Rastro Quente (${o.length} casa${o.length>1?"s":""} de Cinza).`);break}case"estouro-cinzas":{const a=Jn.map(o=>({x:t.x+o.x,y:t.y+o.y})).filter(o=>fe(n,o.x,o.y));s.push({type:"skill",unitId:t.id,skillId:r.id,cells:a});for(const o of a){const c=gn(n,o.x,o.y);if(!c||!gr(t,c))continue;const l=ui(n,t,t,c,{power:6,pierce:.5});s.push({type:"attack",attackerId:t.id,targetId:c.id,damage:l.total,skill:r.id}),Ra(n,c,l.total,s,r.name,t.team),Zi(c,{id:"queimadura",rounds:2}),s.push({type:"status",unitId:c.id,status:"queimadura"}),se(n,t.team,`${de(t)} explode cinzas em ${de(c)}: ${l.total} de dano e Queimadura.`)}break}case"escorrer":{const a=e.cell;t.facing=Ai(t,a,t.facing),t.x=a.x,t.y=a.y,s.push({type:"teleport",unitId:t.id,to:a}),Zi(t,{id:"guarda",rounds:99,untilActivation:"start"}),s.push({type:"status",unitId:t.id,status:"guarda"}),se(n,t.team,`${de(t)} escorre por cima do aliado e assume Guarda.`);break}case"mare-benefica":case"bruma-memoria":{const a=He(n,e.targetId),o=Ad(n,a,r.id==="mare-benefica"?7:6,s,t.team),c=r.id==="mare-benefica"?"queimadura":"enraizado",l=Cn(a,c);a.statuses=a.statuses.filter(u=>u.id!==c),s.push({type:"skill",unitId:t.id,skillId:r.id,cells:[{x:a.x,y:a.y}]}),se(n,t.team,`${de(t)} cura ${o} PV de ${de(a)}${l?` e remove ${c==="queimadura"?"Queimadura":"Enraizado"}`:""}.`);break}case"broto-agil":{const a=fe(n,t.x,t.y);s.push({type:"skill",unitId:t.id,skillId:r.id,cells:[{x:t.x,y:t.y}]}),Ee(a)==="mata"?(Zi(t,{id:"guarda",rounds:99,untilActivation:"start"}),s.push({type:"status",unitId:t.id,status:"guarda"}),se(n,t.team,`${de(t)} brota na Mata e assume Guarda.`)):se(n,t.team,`${de(t)} avança com Broto Ágil.`);break}case"teia-raizes":{const a=He(n,e.targetId);t.facing=Ai(t,a,t.facing),Zi(a,{id:"enraizado",rounds:99,untilActivation:"end"}),s.push({type:"skill",unitId:t.id,skillId:r.id,cells:[{x:a.x,y:a.y}]},{type:"status",unitId:a.id,status:"enraizado"}),se(n,t.team,`${de(t)} prende ${de(a)} com Teia de Raízes.`);break}case"casca-densa":{Zi(t,{id:"casca",rounds:99,untilActivation:"start"}),s.push({type:"skill",unitId:t.id,skillId:r.id,cells:[{x:t.x,y:t.y}]},{type:"status",unitId:t.id,status:"casca"}),se(n,t.team,`${de(t)} endurece a Casca Densa (ARM +2).`);break}case"estilhaco-guiado":case"raio-arco":{const a=He(n,e.targetId);t.facing=Ai(t,a,t.facing);const o=ui(n,t,t,a,{ignoreCover:r.id==="estilhaco-guiado"}),c=Ee(fe(n,a.x,a.y))==="condutor";if(s.push({type:"attack",attackerId:t.id,targetId:a.id,damage:o.total,skill:r.id}),Ra(n,a,o.total,s,r.name,t.team),se(n,t.team,`${de(t)} usa ${r.name} em ${de(a)}: ${o.total} de dano.`),r.id==="raio-arco"){const l=new Set([a.id]);xl(n,t,a,l,s)&&c&&xl(n,t,a,l,s)}break}case"estalo":{const a=e.cell;t.facing=Ai(t,a,t.facing),t.x=a.x,t.y=a.y,s.push({type:"teleport",unitId:t.id,to:a}),se(n,t.team,`${de(t)} dá um Estalo e reaparece em outra casa.`);break}case"dobra-breve":{const a=He(n,e.targetId),o={x:t.x,y:t.y};t.x=a.x,t.y=a.y,a.x=o.x,a.y=o.y,s.push({type:"swap",a:t.id,b:a.id}),se(n,t.team,`${de(t)} troca de lugar com ${de(a)}.`);break}}}function eh(n,t){const e=zt(t).skill,i=[],s=(r,a,o)=>{th(n,t,r)||i.push({action:r,cells:a,label:o})};switch(e.target){case"none":case"self":s({kind:"skill"},e.id==="estouro-cinzas"?Jn.map(r=>({x:t.x+r.x,y:t.y+r.y})):[{x:t.x,y:t.y}],e.name);break;case"ally":case"enemy":for(const r of n.units)s({kind:"skill",targetId:r.id},[{x:r.x,y:r.y}],`${e.name} → ${zt(r).name}`);break;case"cell":for(let r=t.y-e.range;r<=t.y+e.range;r++)for(let a=t.x-e.range;a<=t.x+e.range;a++)fe(n,a,r)&&s({kind:"skill",cell:{x:a,y:r}},[{x:a,y:r}],e.name);break}return i}const No=6,Ca=24,Fc=4,Pd=12,Pa=2,Ia=2,Id=3,As={guarda:{name:"Guarda",order:"Muralha Breve",text:"Barreira 6 (2 rodadas) em um aliado."},impeto:{name:"Ímpeto",order:"Passo de Ruptura",text:"Move um aliado 1 casa sem gastar a ativação dele."},oraculo:{name:"Oráculo",order:"Vislumbre",text:"Reduz em 1 rodada a recarga da habilidade de um aliado."}},yl=()=>({damage:0,healing:0,defeated:0,lost:0,centerRounds:0,centerStreak:0,bestCenterStreak:0,skills:0});function nh(n){const t={version:0,arenaId:n.arena.id,width:n.arena.width,height:n.arena.height,round:1,maxRounds:Pd,initiative:n.initiative,nextToAct:n.initiative,po:{A:No,B:No},passed:{A:!1,B:!1},summoned:{A:!1,B:!1},score:{A:0,B:0},units:[],reserves:{A:[],B:[]},commander:{A:{doctrine:n.doctrines.A,orderReadyRound:1,usedThisRound:!1},B:{doctrine:n.doctrines.B,orderReadyRound:1,usedThisRound:!1}},tiles:n.arena.tiles.map(e=>({...e})),confluences:n.arena.confluences.map(e=>({...e})),portals:{A:[...n.arena.portals.A],B:[...n.arena.portals.B]},events:n.arena.events.map(e=>({...e,cells:[...e.cells]})),emergency:{A:null,B:null},phase:"battle",winner:null,endReason:null,stats:{A:yl(),B:yl()},log:[],uidCounter:0};for(const e of["A","B"]){const i=n.squads[e];i.slice(0,Ts).forEach((s,r)=>{const a=n.arena.spawns[e][r];t.units.push(ih(t,s,e,a))}),t.reserves[e]=i.slice(Ts);t.units.push(ih(t,"simbolo",e,{x:4,y:e==="A"?1:7}))}return se(t,null,`Rodada 1 — ${n.initiative==="A"?"o rival":"você"} tem a iniciativa.`),t}function ih(n,t,e,i){const s=je(t);return n.uidCounter++,{id:`${e}-${t}-${n.uidCounter}`,monsterId:t,team:e,x:i.x,y:i.y,hp:s.hp,maxHp:s.hp,facing:e==="A"?"S":"N",activated:!1,exposed:!1,statuses:[],skillReadyRound:1,heat:0}}function Bs(n,t){return 1+(t?zt(n).skill.extraPO:0)}function ks(n,t){if(arkSymbol(t))return"O Símbolo Primordial é uma peça fixa e não pode ser ativado.";return n.phase!=="battle"?"A partida terminou.":t.team!==n.nextToAct?"Aguarde a sua vez.":t.exposed?"Recém-invocado: só age na próxima rodada.":t.activated?"Este Eco já ativou nesta rodada.":n.po[t.team]<1?"Pontos de Ordem insuficientes.":null}function Dr(n,t){return n.round>=t.skillReadyRound}function Ur(n,t){return n.portals[t].filter(e=>!gn(n,e.x,e.y)&&!n.units.some(i=>i.team!==t&&Ce(i,e)<=1))}function Nr(n,t){return n.reserves[t].length?n.summoned[t]?"Já houve uma invocação nesta rodada.":n.po[t]<Pa?`Invocar custa ${Pa} PO.`:Ur(n,t).length?null:"Portais ocupados ou ameaçados por inimigo adjacente.":"Sem Ecos na reserva."}function Or(n,t){const e=n.commander[t];return e.usedThisRound?"Apenas uma Ordem por rodada.":n.round<e.orderReadyRound?`Ordem em recarga até a rodada ${e.orderReadyRound}.`:n.po[t]<Ia?`Ordem custa ${Ia} PO.`:null}function qn(n,t,e,i){const s=He(n,e);if(!s||s.team!==t||arkSymbol(s))return"A Ordem precisa de um Eco aliado ativo em campo.";const r=n.commander[t].doctrine;if(r==="impeto"){if(!i)return"Escolha a casa de destino.";if(Ce(s,i)!==1)return"Passo de Ruptura move exatamente 1 casa.";const a=fe(n,i.x,i.y);if(!Os(a)||gn(n,i.x,i.y))return"Destino ocupado ou intransitável.";if(Ha(s,fe(n,s.x,s.y),a)===1/0)return"Desnível grande demais para esse passo.";if(Cn(s,"enraizado"))return"Aliado Enraizado não pode ser deslocado."}return r==="oraculo"&&s.skillReadyRound<=n.round?"A habilidade desse aliado já está pronta.":null}function Ml(n,t){return n.phase!=="battle"||n.passed[t]||n.po[t]<1?!1:!!(n.units.some(e=>e.team===t&&!e.activated&&!e.exposed)||!Nr(n,t)||!Or(n,t)&&n.units.some(e=>e.team===t&&!qn(n,t,e.id,Ld(n,e))))}function Ld(n,t){if(n.commander[t.team].doctrine==="impeto"){for(const e of Jn){const i={x:t.x+e.x,y:t.y+e.y},s=fe(n,i.x,i.y);if(s&&Os(s)&&!gn(n,i.x,i.y)&&Ha(t,fe(n,t.x,t.y),s)!==1/0)return i}return{x:-1,y:-1}}}function sh(n,t=2){return n.events.filter(e=>e.round>=n.round&&e.round<n.round+t)}function rh(n,t){return{A:n.units.some(e=>e.team==="A"&&e.hp>0&&Ce(e,t)<=1),B:n.units.some(e=>e.team==="B"&&e.hp>0&&Ce(e,t)<=1)}}function Dd(n,t){if(n.phase!=="battle")return{ok:!1,reason:"A partida terminou."};if(t.stateVersion!==void 0&&t.stateVersion!==n.version)return{ok:!1,reason:"Ação desatualizada: o estado mudou."};if(t.team!==n.nextToAct)return{ok:!1,reason:"Não é a vez desta equipe."};if(n.passed[t.team])return{ok:!1,reason:"Esta equipe já passou nesta rodada."};const e=structuredClone(n),i=[];let s;switch(t.kind){case"activate":s=Ud(e,t,i);break;case"summon":s=Nd(e,t,i);break;case"order":s=Od(e,t,i);break;case"pass":e.passed[t.team]=!0,i.push({type:"pass",team:t.team}),se(e,t.team,`${t.team==="A"?"O rival":"Você"} passou a rodada.`),s=null;break}return s?{ok:!1,reason:s}:(e.version++,Uo(e,i),Fd(e,t.team,i),{ok:!0,state:e,events:i})}function Ud(n,t,e){const i=He(n,t.unitId);if(!i||i.team!==t.team)return"Eco inválido.";const s=ks(n,i);if(s)return s;const r=t.action.kind==="skill",a=zt(i);if(r&&!Dr(n,i))return`${a.skill.name} em recarga até a rodada ${i.skillReadyRound}.`;const o=Bs(i,r);if(n.po[i.team]<o)return`Pontos de Ordem insuficientes (precisa ${o}).`;const c=r&&a.skill.id==="broto-agil"?1:0,l=yd(n,i,t.path,Ui(i,c));if(l)return l;const u=Cn(i,"enraizado");i.statuses=i.statuses.filter(f=>f.untilActivation!=="start");const h={x:i.x,y:i.y};if(t.path.length){const f=t.path[t.path.length-1],g=t.path.length>1?t.path[t.path.length-2]:h;i.x=f.x,i.y=f.y,i.facing=Ai(g,f,i.facing)}const d=t.action;if(d.kind==="attack"){const f=He(n,d.targetId);if(!f||f.team===i.team)return"Escolha um Eco inimigo.";const g=Fs(n,i,i,f);if(g)return g}else if(d.kind==="skill"){const f=th(n,i,d);if(f)return f}if(e.push({type:"activate",unitId:i.id}),t.path.length&&e.push({type:"move",unitId:i.id,path:[...t.path]}),d.kind==="attack"){const f=He(n,d.targetId);i.facing=Ai(i,f,i.facing);const g=ui(n,i,i,f);e.push({type:"attack",attackerId:i.id,targetId:f.id,damage:g.total}),Ra(n,f,g.total,e,"Ataque",i.team),se(n,i.team,`${de(i)} ataca ${de(f)}: ${g.total} de dano${g.absorbed?` (${g.absorbed} na Barreira)`:""}.`)}else d.kind==="defend"?(Zi(i,{id:"guarda",rounds:99,untilActivation:"start"}),e.push({type:"defend",unitId:i.id},{type:"status",unitId:i.id,status:"guarda"}),se(n,i.team,`${de(i)} assume Guarda (−25% no próximo dano).`)):d.kind==="skill"?(Cd(n,i,d,{start:h,path:t.path},e),i.skillReadyRound=n.round+a.skill.cooldown):t.path.length?se(n,i.team,`${de(i)} se reposiciona.`):se(n,i.team,`${de(i)} aguarda.`);return u&&(i.statuses=i.statuses.filter(f=>f.id!=="enraizado")),i.activated=!0,n.po[i.team]-=o,null}function Nd(n,t,e){const i=Nr(n,t.team);if(i)return i;if(!n.reserves[t.team].includes(t.monsterId))return"Esse Eco não está na reserva.";if(!Ur(n,t.team).some(r=>Ci(r,t.portal)))return"Portal ocupado, ameaçado ou inválido.";const s=ih(n,t.monsterId,t.team,t.portal);return s.exposed=!0,s.activated=!0,n.units.push(s),n.reserves[t.team]=n.reserves[t.team].filter(r=>r!==t.monsterId),n.summoned[t.team]=!0,n.po[t.team]-=Pa,e.push({type:"summon",unitId:s.id,team:t.team}),se(n,t.team,`${de(s)} atravessa o portal (Exposto até a próxima rodada).`),null}function Od(n,t,e){const i=Or(n,t.team)??qn(n,t.team,t.targetId,t.cell);if(i)return i;const s=He(n,t.targetId),r=n.commander[t.team];if(r.doctrine==="guarda")Zi(s,{id:"barreira",rounds:2,value:6}),e.push({type:"status",unitId:s.id,status:"barreira"}),se(n,t.team,`Ordem Muralha Breve: ${de(s)} recebe Barreira 6.`);else if(r.doctrine==="impeto"){const a=t.cell;s.facing=Ai(s,a,s.facing),s.x=a.x,s.y=a.y,e.push({type:"move",unitId:s.id,path:[a]}),se(n,t.team,`Ordem Passo de Ruptura: ${de(s)} avança 1 casa.`)}else s.skillReadyRound=Math.max(n.round,s.skillReadyRound-1),se(n,t.team,`Ordem Vislumbre: recarga de ${zt(s).skill.name} reduzida.`);return e.push({type:"order",team:t.team,targetId:s.id,doctrine:r.doctrine}),r.usedThisRound=!0,r.orderReadyRound=n.round+Id,n.po[t.team]-=Ia,null}function Sl(n,t){return!n.units.some(e=>e.team===t&&!arkSymbol(e))&&n.reserves[t].length===0}function Fd(n,t,e){const a=n.units.some(r=>r.team==="A"&&arkSymbol(r)),b=n.units.some(r=>r.team==="B"&&arkSymbol(r));if(!a&&!b)return _i(n,"draw","Os dois Símbolos Primordiais foram destruídos.",e);if(!a)return _i(n,"B","Vitória: o Símbolo Primordial de Arven foi destruído.",e);if(!b)return _i(n,"A","Derrota: seu Símbolo Primordial foi destruído.",e);for(let i=0;i<4&&n.phase==="battle";i++){if(Sl(n,"A")||Sl(n,"B")){bl(n,e);continue}const s=Ls(t);if(Ml(n,s)){n.nextToAct=s;return}if(Ml(n,t)){n.nextToAct=t;return}bl(n,e),t=Ls(n.initiative)}}function bl(n,t){for(const r of n.units){Cn(r,"queimadura")&&(zr(n,r,3,t,"Queimadura",!1),se(n,r.team,`${de(r)} sofre 3 de Queimadura.`));const a=fe(n,r.x,r.y);Ee(a)==="cinza"&&zt(r).affinity!=="brasa"?(r.heat++,r.heat>=2&&(zr(n,r,2,t,"Cinza aquecida",!0),se(n,r.team,`${de(r)} sofre desgaste da Cinza.`))):r.heat=0}Uo(n,t);for(const r of n.units){for(const a of r.statuses)a.untilActivation===void 0&&a.rounds--;r.statuses=r.statuses.filter(a=>a.untilActivation!==void 0||a.rounds>0)}const e=[];for(const r of n.tiles)r.temp&&--r.temp.rounds<=0&&(delete r.temp,e.push({x:r.x,y:r.y}));e.length&&t.push({type:"tiles",cells:e});for(const r of n.events.filter(a=>a.round===n.round))if(t.push({type:"map-event",kind:r.kind,cells:r.cells,title:r.title}),se(n,null,`⚠ ${r.title}.`),r.kind==="bridge_collapse"){for(const a of r.cells){const o=fe(n,a.x,a.y);o.terrain="lava",delete o.temp;const c=gn(n,a.x,a.y);if(c){const l=Rd(n,c);l&&(c.x=l.x,c.y=l.y,t.push({type:"pushed",unitId:c.id,to:l})),zr(n,c,4,t,"Desabamento",!0),se(n,c.team,`${de(c)} salta da ponte que desaba.`)}}t.push({type:"tiles",cells:r.cells})}else if(r.kind==="heat_burst")for(const a of n.units){if(zt(a).affinity==="brasa")continue;const o=fe(n,a.x,a.y);(r.cells.some(c=>Ci(c,a))||Ee(o)==="cinza")&&(zr(n,a,5,t,"Rajada de calor",!0),se(n,a.team,`${de(a)} é atingido pela rajada de calor.`))}Uo(n,t);for(const r of n.confluences){const a=rh(n,r);let o=null;if(a.A&&!a.B?o="A":a.B&&!a.A&&(o="B"),o?(r.owner!==o&&(r.owner=o,t.push({type:"capture",confluenceId:r.id,team:o}),se(n,o,`${r.name} agora responde a ${o==="A"?"o rival":"você"}.`)),n.score[o]+=r.value,t.push({type:"score",team:o,points:r.value})):a.A&&a.B&&se(n,null,`${r.name} está contestada: ninguém pontua.`),r.id==="centro")for(const c of["A","B"]){const l=n.stats[c];o===c?(l.centerRounds++,l.centerStreak++,l.bestCenterStreak=Math.max(l.bestCenterStreak,l.centerStreak)):l.centerStreak=0}}const i={A:!1,B:!1};for(const r of["A","B"]){if(n.units.some(o=>o.team===r)){n.emergency[r]=null;continue}n.reserves[r].length?n.emergency[r]===null?(n.emergency[r]=n.round+1,se(n,r,"Rodada de emergência: invoque um reforço ou será derrotado.")):n.round>=n.emergency[r]&&(i[r]=!0):i[r]=!0}if(i.A&&i.B)return _i(n,"draw","Os dois esquadrões foram desfeitos.",t);if(i.A)return _i(n,"B","Extermínio: o esquadrão rival foi desfeito.",t);if(i.B)return _i(n,"A","Extermínio: seu esquadrão foi desfeito.",t);for(const r of["A","B"])if(n.score[r]>=Ca&&n.score[r]-n.score[Ls(r)]>=Fc)return _i(n,r,`Domínio: ${n.score[r]} × ${n.score[Ls(r)]} na rodada ${n.round}.`,t);if(n.round>=n.maxRounds){const{A:r,B:a}=n.score;if(r!==a)return _i(n,r>a?"A":"B",`Limite de rodadas: Domínio ${Math.max(r,a)} × ${Math.min(r,a)}.`,t);const o=h=>n.confluences.filter(d=>d.owner===h).length;if(o("A")!==o("B"))return _i(n,o("A")>o("B")?"A":"B","Empate em PD: decidido por Confluências controladas.",t);const c=h=>n.units.filter(d=>d.team===h).reduce((d,f)=>d+f.hp/f.maxHp,0),l=c("A"),u=c("B");return Math.abs(l-u)>1e-9?_i(n,l>u?"A":"B","Empate em PD e Confluências: decidido pela vida restante.",t):_i(n,"draw","Empate declarado após todos os desempates.",t)}n.round++,n.initiative=Ls(n.initiative),n.nextToAct=n.initiative;const s=n.confluences.find(r=>r.id==="centro");for(const r of["A","B"])n.po[r]=No+(s?.owner===r?1:0),n.passed[r]=!1,n.summoned[r]=!1,n.commander[r].usedThisRound=!1;for(const r of n.units)r.activated=!1,r.exposed=!1;t.push({type:"round-start",round:n.round,initiative:n.initiative}),se(n,null,`Rodada ${n.round} — ${n.initiative==="A"?"o rival":"você"} tem a iniciativa.`)}function _i(n,t,e,i){n.phase="finished",n.winner=t,n.endReason=e,i.push({type:"game-over",winner:t,reason:e}),se(n,null,e)}const Oo={historia:{risk:.8,kill:6,domain:4,noise:3},normal:{risk:2.6,kill:14,domain:6,noise:0}};function Bd(n){let t=2166136261;for(let e=0;e<n.length;e++)t^=n.charCodeAt(e),t=Math.imul(t,16777619)>>>0;return t%1e3/1e3-.5}function wr(n,t,e){const i={...t,x:e.x,y:e.y};return{s2:{...n,units:n.units.map(s=>s.id===t.id?i:s)},u2:i}}function Fo(n,t,e,i){let s=0;for(const r of n.units){if(r.team===t)continue;const a=Ui(r)+zt(r).range;if(Ce(r,e)>a)continue;const{s2:o,u2:c}=wr(n,i,e),l=ui(o,r,r,c);s+=l.total*(r.activated&&n.nextToAct===t?.6:1)}return s}function Rs(n,t,e,i,s){let r=0;for(const u of n.confluences){const h=Ce(i,u),f=rh(n,u)[Ls(t)],g=n.units.some(v=>v.team===t&&v.id!==e.id&&Ce(v,u)<=1);h<=1?r+=u.value*s.domain*(g?.35:1)*(f?.8:1):r+=Math.max(0,6-h)*u.value*.35*(g?.3:1)}const a=fe(n,i.x,i.y),o=Ee(a),c=zt(e).affinity,l={brasa:"cinza",mare:"agua",selva:"mata",pedra:"cristal",trovao:"condutor",astral:"fenda"}[c];o===l&&(r+=1.2),o==="cinza"&&c!=="brasa"&&(r-=1.5),(o==="mata"||o==="cristal")&&(r+=.6),r+=a.h*.7;for(const u of n.events)u.round<n.round||u.round>n.round||u.cells.some(h=>h.x===i.x&&h.y===i.y)&&!(u.kind==="heat_burst"&&c==="brasa")&&(r-=9);return Cn(e,"queimadura")&&o==="agua"&&(r+=.5),n.units.some(u=>arkSymbol(u)&&u.team!==t)&&(r+=Math.max(0,5-Math.min(...n.units.filter(u=>arkSymbol(u)&&u.team!==t).map(u=>Ce(i,u))))*1.1),r}function Vr(n,t,e,i,s,r,a){const o=Oo[a],{s2:c,u2:l}=wr(n,e,i);let u=Rs(c,t,l,i,o)-Rs(n,t,e,e,o)*.15,h="posição";const d=e.hp/e.maxHp,f=Fo(c,t,i,l);if(u-=f/Math.max(1,e.hp)*o.risk*4*(r.kind==="defend"?.6:1),f>=e.hp&&(u-=o.risk*3),r.kind==="attack"){const g=c.units.find(p=>p.id===r.targetId),v=ui(c,l,l,g),m=Math.min(g.hp,v.total-v.absorbed);u+=m*(arkSymbol(g)?3.2:1.1)+(v.total>=g.hp+0?(arkSymbol(g)?40:o.kill+zt(g).squadCost*2):0),n.confluences.some(p=>Ce(p,g)<=1)&&(u+=2),h=`ataca ${zt(g).name}`}else if(r.kind==="skill"){const g=zt(e).skill;switch(u-=1.4*g.extraPO,g.id){case"estouro-cinzas":{for(const v of Jn){const m=gn(c,i.x+v.x,i.y+v.y);if(m&&m.team!==t){const p=ui(c,l,l,m,{power:6,pierce:.5});u+=p.total*1.1+3+(p.total>=m.hp?o.kill:0)}}break}case"estilhaco-guiado":case"raio-arco":{const v=c.units.find(p=>p.id===r.targetId),m=ui(c,l,l,v,{ignoreCover:g.id==="estilhaco-guiado"});u+=Math.min(v.hp,m.total)*1.1+(m.total>=v.hp?o.kill:0),g.id==="raio-arco"&&(u+=c.units.some(p=>p.team!==t&&p.id!==v.id&&Ce(p,v)<=2)?4:-3);break}case"mare-benefica":case"bruma-memoria":{const v=c.units.find(p=>p.id===r.targetId),m=v.maxHp-v.hp;u+=Math.min(m,g.id==="mare-benefica"?7:6)*1.2-2+(Cn(v,"queimadura")&&g.id==="mare-benefica"?4:0);break}case"teia-raizes":{const v=c.units.find(m=>m.id===r.targetId);u+=v.activated?1:3.5,n.confluences.some(m=>Ce(m,v)<=2)&&(u+=2);break}case"casca-densa":u+=f>0?3+f*.15:-2;break;case"broto-agil":u+=.5;break;case"rastro-quente":u+=zt(e).affinity==="brasa"?.8:0;break;case"escorrer":case"estalo":{const v=r.cell,{s2:m,u2:p}=wr(c,l,v);u+=Rs(m,t,p,v,o)-Rs(c,t,l,i,o),u-=(Fo(m,t,v,p)-f)/Math.max(1,e.hp)*o.risk*3,g.id==="escorrer"&&(u+=1);break}case"dobra-breve":{const v=c.units.find(m=>m.id===r.targetId);u+=v.hp/v.maxHp<.5?2:-2;break}}h=g.name}else r.kind==="defend"&&(u+=Math.min(4,f*.12)+(d<.5?1:0),h="defende");return u+=Bd(`${n.round}:${e.id}:${i.x},${i.y}:${r.kind}`)*o.noise,{cmd:{kind:"activate",team:t,unitId:e.id,path:s,action:r,stateVersion:n.version},score:u,why:h}}function ah(n,t,e="normal"){const i=[];for(const r of n.units){if(r.team!==t||ks(n,r))continue;const a=Dr(n,r)&&n.po[t]>=Bs(r,!0),o=a&&zt(r).skill.id==="broto-agil"?1:0,c=Qu(n,r,Ui(r,o));for(const l of c.values()){const u=l.cost<=Ui(r),{s2:h,u2:d}=wr(n,r,l.pos);if(u){for(const v of h.units)if(v.team!==t&&!Fs(h,d,d,v)){const m=Vr(n,t,r,l.pos,l.path,{kind:"attack",targetId:v.id},e);m&&i.push(m)}const f=Vr(n,t,r,l.pos,l.path,{kind:"defend"},e);f&&i.push(f);const g=Vr(n,t,r,l.pos,l.path,{kind:"wait"},e);g&&(g.score-=.3,i.push(g))}if(a){const f=zt(r).skill.id==="broto-agil";if(!u&&!f)continue;for(const g of eh(h,d)){const v=Vr(n,t,r,l.pos,l.path,g.action,e);v&&i.push(v)}}}}if(!Nr(n,t)){const r=n.units.filter(h=>h.team===t).length,a=n.units.filter(h=>h.team!==t).length,c=[...n.reserves[t]].sort((h,d)=>h.localeCompare(d))[0],l=Ur(n,t)[0],u=3+(a-r)*4+(r<=2?6:0)+(n.round>=3?2:-2);i.push({cmd:{kind:"summon",team:t,monsterId:c,portal:l,stateVersion:n.version},score:u,why:"reforço"})}if(!Or(n,t)){const r=n.commander[t].doctrine;for(const a of n.units.filter(o=>o.team===t))if(r==="guarda"){if(qn(n,t,a.id))continue;const o=Fo(n,t,a,a),c=n.confluences.some(l=>Ce(l,a)<=1);i.push({cmd:{kind:"order",team:t,targetId:a.id,stateVersion:n.version},score:Math.min(6,o)*.8+(c?2:0)-2.5,why:"Muralha Breve"})}else if(r==="impeto")for(const o of Jn){const c={x:a.x+o.x,y:a.y+o.y};if(qn(n,t,a.id,c))continue;const{s2:l,u2:u}=wr(n,a,c),h=Rs(l,t,u,c,Oo[e])-Rs(n,t,a,a,Oo[e]);i.push({cmd:{kind:"order",team:t,targetId:a.id,cell:c,stateVersion:n.version},score:h-2.5,why:"Passo de Ruptura"})}else qn(n,t,a.id)||i.push({cmd:{kind:"order",team:t,targetId:a.id,stateVersion:n.version},score:-1.5,why:"Vislumbre"})}if(!i.length)return{kind:"pass",team:t,stateVersion:n.version};i.sort((r,a)=>a.score-r.score||JSON.stringify(r.cmd).localeCompare(JSON.stringify(a.cmd)));const s=i[0];if(s.score<-4&&s.cmd.kind!=="activate"){const r=i.find(a=>a.cmd.kind==="activate");return r?r.cmd:{kind:"pass",team:t,stateVersion:n.version}}return s.cmd}const kd=["P...#...P","..m...k..","..#~.~#..",".o.L=L.z.","w.~=C=~.w"],zd=["000000000","000000120","000000000","000000000","000010000"],Vd={P:"rocha",".":"rocha","#":"parede","~":"cinza",w:"agua",m:"mata",k:"cristal",z:"condutor",L:"lava","=":"ponte",o:"rocha",C:"rocha"};function El(n){const t=n.length-1,e=n.slice(0,t).reverse().map(i=>[...i].reverse().join(""));return[...n,...e]}function Hd(){const n=El(kd),t=El(zd),e=[],i=[];let s={x:4,y:4};for(let u=0;u<9;u++)for(let h=0;h<9;h++){const d=n[u][h],f=Vd[d];if(!f)throw new Error(`Caractere de mapa inválido '${d}' em ${h},${u}`);e.push({x:h,y:u,h:Number(t[u][h]),terrain:f}),d==="o"&&i.push({x:h,y:u}),d==="C"&&(s={x:h,y:u})}const[r,a]=i.sort((u,h)=>u.x-h.x),o=[{id:"oeste",name:"Altar da Escória",x:r.x,y:r.y,value:2,owner:null},{id:"centro",name:"Coração da Ponte",x:s.x,y:s.y,value:3,owner:null},{id:"leste",name:"Altar da Fuligem",x:a.x,y:a.y,value:2,owner:null}],c=e.filter(u=>u.terrain==="cinza").map(u=>({x:u.x,y:u.y}));return{id:"ar01-ponte-das-cinzas",name:"Ponte das Cinzas",region:"Brasa",width:9,height:9,tiles:e,confluences:o,portals:{A:[{x:0,y:0},{x:8,y:0}],B:[{x:8,y:8},{x:0,y:8}]},spawns:{A:[{x:3,y:1},{x:5,y:1},{x:2,y:0},{x:6,y:0}],B:[{x:5,y:7},{x:3,y:7},{x:6,y:8},{x:2,y:8}]},events:[{round:4,kind:"bridge_collapse",cells:[{x:4,y:3},{x:4,y:5}],title:"As pontes norte e sul desabam",text:"No fechamento da rodada 4 as pontes ao norte e ao sul do Coração viram lava. Quem estiver sobre elas é lançado para a casa livre mais próxima e sofre 4 de dano (nunca letal)."},{round:7,kind:"heat_burst",cells:c,title:"Rajada de calor",text:"No fechamento da rodada 7 toda Cinza aquecida explode: Ecos que não são de Brasa sobre ela sofrem 5 de dano (nunca letal)."},{round:10,kind:"heat_burst",cells:c,title:"Segunda rajada de calor",text:"No fechamento da rodada 10 a Cinza explode outra vez: 5 de dano em quem não é de Brasa (nunca letal)."}]}}class Gd{constructor(){Gt(this,"ctx",null);Gt(this,"master",null);Gt(this,"enabled",!0);Gt(this,"volume",.6);Gt(this,"last",new Map)}unlock(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}try{this.ctx=new AudioContext,this.master=this.ctx.createGain(),this.master.connect(this.ctx.destination)}catch{this.ctx=null}}tone(t,e,i,s,r=0,a=0){const o=this.ctx,c=o.currentTime+a,l=o.createOscillator(),u=o.createGain();l.type=i,l.frequency.setValueAtTime(t,c),r&&l.frequency.exponentialRampToValueAtTime(Math.max(30,t+r),c+e),u.gain.setValueAtTime(1e-4,c),u.gain.exponentialRampToValueAtTime(s,c+.01),u.gain.exponentialRampToValueAtTime(1e-4,c+e),l.connect(u).connect(this.master),l.start(c),l.stop(c+e+.02)}play(t){if(!this.enabled||!this.ctx||!this.master)return;const e=performance.now();if(!(e-(this.last.get(t)??0)<60))switch(this.last.set(t,e),this.master.gain.value=this.volume*.5,t){case"select":this.tone(660,.07,"triangle",.3);break;case"confirm":this.tone(520,.08,"triangle",.3),this.tone(780,.1,"triangle",.25,0,.06);break;case"move":this.tone(220,.08,"sine",.25,60);break;case"hit":this.tone(140,.18,"sawtooth",.35,-80),this.tone(90,.2,"square",.15,-40);break;case"heal":this.tone(523,.12,"sine",.3),this.tone(784,.18,"sine",.25,0,.08);break;case"capture":[523,659,784].forEach((i,s)=>this.tone(i,.16,"triangle",.25,0,s*.07));break;case"round":this.tone(392,.25,"sine",.25),this.tone(587,.3,"sine",.2,0,.12);break;case"warn":this.tone(300,.2,"square",.18),this.tone(300,.2,"square",.18,0,.25);break;case"summon":this.tone(180,.45,"sine",.3,500);break;case"error":this.tone(180,.12,"square",.2,-40);break;case"win":[392,523,659,784].forEach((i,s)=>this.tone(i,.35,"triangle",.28,0,s*.12));break;case"lose":[392,330,262].forEach((i,s)=>this.tone(i,.4,"sine",.25,0,s*.18));break}}}const oh="arkhos.settings.v1",ch="arkhos.progress.v1";function Wd(){return matchMedia("(pointer: coarse)").matches||(navigator.hardwareConcurrency??4)<=4?"medio":"alto"}const $d={speed:1,quality:"medio",sound:!0,volume:.6,reduceMotion:!1,tips:!0,difficulty:"normal",doctrine:"guarda",playerFirst:!1,squad:["cinzalon","nacarino","larveira","mineruva","zirpim","pedruxo"]};function lh(n){try{const t=localStorage.getItem(n);return t?JSON.parse(t):null}catch{return null}}function uh(n,t){try{localStorage.setItem(n,JSON.stringify(t))}catch{}}function hh(){const n=lh(oh),t={...$d,quality:Wd(),reduceMotion:matchMedia("(prefers-reduced-motion: reduce)").matches};return n?{...t,...n,squad:Array.isArray(n.squad)?n.squad.filter(e=>typeof e=="string"):t.squad}:t}const Tn=n=>uh(oh,n);function Xd(){const n=lh(ch);return!n||n.saveVersion!==1?{saveVersion:1,wins:0,losses:0,medals:{concluir:!1,intacto:!1,maestria:!1}}:{saveVersion:1,wins:n.wins??0,losses:n.losses??0,medals:{concluir:!1,intacto:!1,maestria:!1,...n.medals}}}const qd=n=>uh(ch,n);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Bc="170",Yd=0,wl=1,Zd=2,dh=1,jd=2,ai=3,Ni=0,un=1,mn=2,Pi=0,Ii=1,Wn=2,Tl=3,Al=4,Jd=5,ji=100,Kd=101,Qd=102,tf=103,ef=104,nf=200,sf=201,rf=202,af=203,Bo=204,ko=205,of=206,cf=207,lf=208,uf=209,hf=210,df=211,ff=212,pf=213,mf=214,zo=0,Vo=1,Ho=2,zs=3,Go=4,Wo=5,$o=6,Xo=7,fh=0,gf=1,vf=2,Li=0,_f=1,xf=2,yf=3,ph=4,Mf=5,Sf=6,bf=7,mh=300,Vs=301,Hs=302,qo=303,Yo=304,Ga=306,La=1e3,Ki=1001,Zo=1002,vn=1003,Ef=1004,Hr=1005,$n=1006,Ka=1007,Qi=1008,pi=1009,gh=1010,vh=1011,Tr=1012,kc=1013,es=1014,Xn=1015,Fr=1016,zc=1017,Vc=1018,Gs=1020,_h=35902,xh=1021,yh=1022,Fn=1023,Mh=1024,Sh=1025,Ds=1026,Ws=1027,Hc=1028,Gc=1029,bh=1030,Wc=1031,$c=1033,_a=33776,xa=33777,ya=33778,Ma=33779,jo=35840,Jo=35841,Ko=35842,Qo=35843,tc=36196,ec=37492,nc=37496,ic=37808,sc=37809,rc=37810,ac=37811,oc=37812,cc=37813,lc=37814,uc=37815,hc=37816,dc=37817,fc=37818,pc=37819,mc=37820,gc=37821,Sa=36492,vc=36494,_c=36495,Eh=36283,xc=36284,yc=36285,Mc=36286,wf=3200,Tf=3201,wh=0,Af=1,Ti="",sn="srgb",qs="srgb-linear",Wa="linear",ge="srgb",ls=7680,Rl=519,Rf=512,Cf=513,Pf=514,Th=515,If=516,Lf=517,Df=518,Uf=519,Cl=35044,Pl="300 es",li=2e3,Da=2001;class Ys{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Xe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Il=1234567;const vr=Math.PI/180,Ar=180/Math.PI;function ss(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Xe[n&255]+Xe[n>>8&255]+Xe[n>>16&255]+Xe[n>>24&255]+"-"+Xe[t&255]+Xe[t>>8&255]+"-"+Xe[t>>16&15|64]+Xe[t>>24&255]+"-"+Xe[e&63|128]+Xe[e>>8&255]+"-"+Xe[e>>16&255]+Xe[e>>24&255]+Xe[i&255]+Xe[i>>8&255]+Xe[i>>16&255]+Xe[i>>24&255]).toLowerCase()}function ze(n,t,e){return Math.max(t,Math.min(e,n))}function Xc(n,t){return(n%t+t)%t}function Nf(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function Of(n,t,e){return n!==t?(e-n)/(t-n):0}function _r(n,t,e){return(1-e)*n+e*t}function Ff(n,t,e,i){return _r(n,t,1-Math.exp(-e*i))}function Bf(n,t=1){return t-Math.abs(Xc(n,t*2)-t)}function kf(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function zf(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Vf(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Hf(n,t){return n+Math.random()*(t-n)}function Gf(n){return n*(.5-Math.random())}function Wf(n){n!==void 0&&(Il=n);let t=Il+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function $f(n){return n*vr}function Xf(n){return n*Ar}function qf(n){return(n&n-1)===0&&n!==0}function Yf(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Zf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function jf(n,t,e,i,s){const r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+i)/2),u=a((t+i)/2),h=r((t-i)/2),d=a((t-i)/2),f=r((i-t)/2),g=a((i-t)/2);switch(s){case"XYX":n.set(o*u,c*h,c*d,o*l);break;case"YZY":n.set(c*d,o*u,c*h,o*l);break;case"ZXZ":n.set(c*h,c*d,o*u,o*l);break;case"XZX":n.set(o*u,c*g,c*f,o*l);break;case"YXY":n.set(c*f,o*u,c*g,o*l);break;case"ZYZ":n.set(c*g,c*f,o*u,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ws(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function en(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Jf={DEG2RAD:vr,RAD2DEG:Ar,generateUUID:ss,clamp:ze,euclideanModulo:Xc,mapLinear:Nf,inverseLerp:Of,lerp:_r,damp:Ff,pingpong:Bf,smoothstep:kf,smootherstep:zf,randInt:Vf,randFloat:Hf,randFloatSpread:Gf,seededRandom:Wf,degToRad:$f,radToDeg:Xf,isPowerOfTwo:qf,ceilPowerOfTwo:Yf,floorPowerOfTwo:Zf,setQuaternionFromProperEuler:jf,normalize:en,denormalize:ws};class ot{constructor(t=0,e=0){ot.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(ze(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Yt{constructor(t,e,i,s,r,a,o,c,l){Yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,c,l)}set(t,e,i,s,r,a,o,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=c,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],u=i[4],h=i[7],d=i[2],f=i[5],g=i[8],v=s[0],m=s[3],p=s[6],b=s[1],S=s[4],x=s[7],D=s[2],R=s[5],P=s[8];return r[0]=a*v+o*b+c*D,r[3]=a*m+o*S+c*R,r[6]=a*p+o*x+c*P,r[1]=l*v+u*b+h*D,r[4]=l*m+u*S+h*R,r[7]=l*p+u*x+h*P,r[2]=d*v+f*b+g*D,r[5]=d*m+f*S+g*R,r[8]=d*p+f*x+g*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8];return e*a*u-e*o*l-i*r*u+i*o*c+s*r*l-s*a*c}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],h=u*a-o*l,d=o*c-u*r,f=l*r-a*c,g=e*h+i*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=h*v,t[1]=(s*l-u*i)*v,t[2]=(o*i-s*a)*v,t[3]=d*v,t[4]=(u*e-s*c)*v,t[5]=(s*r-o*e)*v,t[6]=f*v,t[7]=(i*c-l*e)*v,t[8]=(a*e-i*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Qa.makeScale(t,e)),this}rotate(t){return this.premultiply(Qa.makeRotation(-t)),this}translate(t,e){return this.premultiply(Qa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Qa=new Yt;function Ah(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Ua(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Kf(){const n=Ua("canvas");return n.style.display="block",n}const Ll={};function dr(n){n in Ll||(Ll[n]=!0,console.warn(n))}function Qf(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function tp(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function ep(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const re={enabled:!0,workingColorSpace:qs,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ge&&(n.r=hi(n.r),n.g=hi(n.g),n.b=hi(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ge&&(n.r=Us(n.r),n.g=Us(n.g),n.b=Us(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Ti?Wa:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function hi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Us(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Dl=[.64,.33,.3,.6,.15,.06],Ul=[.2126,.7152,.0722],Nl=[.3127,.329],Ol=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fl=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);re.define({[qs]:{primaries:Dl,whitePoint:Nl,transfer:Wa,toXYZ:Ol,fromXYZ:Fl,luminanceCoefficients:Ul,workingColorSpaceConfig:{unpackColorSpace:sn},outputColorSpaceConfig:{drawingBufferColorSpace:sn}},[sn]:{primaries:Dl,whitePoint:Nl,transfer:ge,toXYZ:Ol,fromXYZ:Fl,luminanceCoefficients:Ul,outputColorSpaceConfig:{drawingBufferColorSpace:sn}}});let us;class np{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{us===void 0&&(us=Ua("canvas")),us.width=t.width,us.height=t.height;const i=us.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=us}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ua("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=hi(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(hi(e[i]/255)*255):e[i]=hi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ip=0;class Rh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ip++}),this.uuid=ss(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(to(s[a].image)):r.push(to(s[a]))}else r=to(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function to(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?np.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let sp=0;class Je extends Ys{constructor(t=Je.DEFAULT_IMAGE,e=Je.DEFAULT_MAPPING,i=Ki,s=Ki,r=$n,a=Qi,o=Fn,c=pi,l=Je.DEFAULT_ANISOTROPY,u=Ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sp++}),this.uuid=ss(),this.name="",this.source=new Rh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==mh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case La:t.x=t.x-Math.floor(t.x);break;case Ki:t.x=t.x<0?0:1;break;case Zo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case La:t.y=t.y-Math.floor(t.y);break;case Ki:t.y=t.y<0?0:1;break;case Zo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Je.DEFAULT_IMAGE=null;Je.DEFAULT_MAPPING=mh;Je.DEFAULT_ANISOTROPY=1;class ve{constructor(t=0,e=0,i=0,s=1){ve.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const c=t.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(l+1)/2,x=(f+1)/2,D=(p+1)/2,R=(u+d)/4,P=(h+v)/4,A=(g+m)/4;return S>x&&S>D?S<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(S),s=R/i,r=P/i):x>D?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=R/s,r=A/s):D<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),i=P/r,s=A/r),this.set(i,s,r,e),this}let b=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(h-v)/b,this.z=(d-u)/b,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class rp extends Ys{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Je(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Rh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ns extends rp{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Ch extends Je{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=vn,this.minFilter=vn,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ap extends Je{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=vn,this.minFilter=vn,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rs{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let c=i[s+0],l=i[s+1],u=i[s+2],h=i[s+3];const d=r[a+0],f=r[a+1],g=r[a+2],v=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=v;return}if(h!==v||c!==d||l!==f||u!==g){let m=1-o;const p=c*d+l*f+u*g+h*v,b=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const D=Math.sqrt(S),R=Math.atan2(D,p*b);m=Math.sin(m*R)/D,o=Math.sin(o*R)/D}const x=o*b;if(c=c*m+d*x,l=l*m+f*x,u=u*m+g*x,h=h*m+v*x,m===1-o){const D=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=D,l*=D,u*=D,h*=D}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,s,r,a){const o=i[s],c=i[s+1],l=i[s+2],u=i[s+3],h=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+u*h+c*f-l*d,t[e+1]=c*g+u*d+l*h-o*f,t[e+2]=l*g+u*f+o*d-c*h,t[e+3]=u*g-o*h-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(s/2),h=o(r/2),d=c(i/2),f=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"YZX":this._x=d*u*h+l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h-d*f*g;break;case"XZY":this._x=d*u*h-l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],u=e[6],h=e[10],d=i+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(i>o&&i>h){const f=2*Math.sqrt(1+i-o-h);this._w=(u-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>h){const f=2*Math.sqrt(1+o-i-h);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+h-i-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ze(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,u=e._w;return this._x=i*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-i*l,this._z=r*u+a*l+i*c-s*o,this._w=a*u-i*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+i*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*i+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-e)*u)/l,d=Math.sin(e*u)/l;return this._w=a*h+this._w*d,this._x=i*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,i=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Bl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Bl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*i),u=2*(o*e-r*s),h=2*(r*i-a*e);return this.x=e+c*l+a*h-o*u,this.y=i+c*u+o*l-r*h,this.z=s+c*h+r*u-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-i*c,this.z=i*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return eo.copy(this).projectOnVector(t),this.sub(eo)}reflect(t){return this.sub(eo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(ze(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const eo=new I,Bl=new rs;class mi{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Ln.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Ln.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Ln.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ln):Ln.fromBufferAttribute(r,a),Ln.applyMatrix4(t.matrixWorld),this.expandByPoint(Ln);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Gr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Gr.copy(i.boundingBox)),Gr.applyMatrix4(t.matrixWorld),this.union(Gr)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ln),Ln.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(er),Wr.subVectors(this.max,er),hs.subVectors(t.a,er),ds.subVectors(t.b,er),fs.subVectors(t.c,er),xi.subVectors(ds,hs),yi.subVectors(fs,ds),Vi.subVectors(hs,fs);let e=[0,-xi.z,xi.y,0,-yi.z,yi.y,0,-Vi.z,Vi.y,xi.z,0,-xi.x,yi.z,0,-yi.x,Vi.z,0,-Vi.x,-xi.y,xi.x,0,-yi.y,yi.x,0,-Vi.y,Vi.x,0];return!no(e,hs,ds,fs,Wr)||(e=[1,0,0,0,1,0,0,0,1],!no(e,hs,ds,fs,Wr))?!1:($r.crossVectors(xi,yi),e=[$r.x,$r.y,$r.z],no(e,hs,ds,fs,Wr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ln).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ln).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ei),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ei=[new I,new I,new I,new I,new I,new I,new I,new I],Ln=new I,Gr=new mi,hs=new I,ds=new I,fs=new I,xi=new I,yi=new I,Vi=new I,er=new I,Wr=new I,$r=new I,Hi=new I;function no(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Hi.fromArray(n,r);const o=s.x*Math.abs(Hi.x)+s.y*Math.abs(Hi.y)+s.z*Math.abs(Hi.z),c=t.dot(Hi),l=e.dot(Hi),u=i.dot(Hi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const op=new mi,nr=new I,io=new I;class as{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):op.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;nr.subVectors(t,this.center);const e=nr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(nr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(io.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(nr.copy(t.center).add(io)),this.expandByPoint(nr.copy(t.center).sub(io))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ni=new I,so=new I,Xr=new I,Mi=new I,ro=new I,qr=new I,ao=new I;class $a{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ni)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ni.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ni.copy(this.origin).addScaledVector(this.direction,e),ni.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){so.copy(t).add(e).multiplyScalar(.5),Xr.copy(e).sub(t).normalize(),Mi.copy(this.origin).sub(so);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Xr),o=Mi.dot(this.direction),c=-Mi.dot(Xr),l=Mi.lengthSq(),u=Math.abs(1-a*a);let h,d,f,g;if(u>0)if(h=a*c-o,d=a*o-c,g=r*u,h>=0)if(d>=-g)if(d<=g){const v=1/u;h*=v,d*=v,f=h*(h+a*d+2*o)+d*(a*h+d+2*c)+l}else d=r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(so).addScaledVector(Xr,d),f}intersectSphere(t,e){ni.subVectors(t.center,this.origin);const i=ni.dot(this.direction),s=ni.dot(ni)-i*i,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(i=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(i=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),u>=0?(r=(t.min.y-d.y)*u,a=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,a=(t.min.y-d.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(t.min.z-d.z)*h,c=(t.max.z-d.z)*h):(o=(t.max.z-d.z)*h,c=(t.min.z-d.z)*h),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,ni)!==null}intersectTriangle(t,e,i,s,r){ro.subVectors(e,t),qr.subVectors(i,t),ao.crossVectors(ro,qr);let a=this.direction.dot(ao),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Mi.subVectors(this.origin,t);const c=o*this.direction.dot(qr.crossVectors(Mi,qr));if(c<0)return null;const l=o*this.direction.dot(ro.cross(Mi));if(l<0||c+l>a)return null;const u=-o*Mi.dot(ao);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class le{constructor(t,e,i,s,r,a,o,c,l,u,h,d,f,g,v,m){le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,c,l,u,h,d,f,g,v,m)}set(t,e,i,s,r,a,o,c,l,u,h,d,f,g,v,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new le().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/ps.setFromMatrixColumn(t,0).length(),r=1/ps.setFromMatrixColumn(t,1).length(),a=1/ps.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const d=a*u,f=a*h,g=o*u,v=o*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=f+g*l,e[5]=d-v*l,e[9]=-o*c,e[2]=v-d*l,e[6]=g+f*l,e[10]=a*c}else if(t.order==="YXZ"){const d=c*u,f=c*h,g=l*u,v=l*h;e[0]=d+v*o,e[4]=g*o-f,e[8]=a*l,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=f*o-g,e[6]=v+d*o,e[10]=a*c}else if(t.order==="ZXY"){const d=c*u,f=c*h,g=l*u,v=l*h;e[0]=d-v*o,e[4]=-a*h,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*u,e[9]=v-d*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const d=a*u,f=a*h,g=o*u,v=o*h;e[0]=c*u,e[4]=g*l-f,e[8]=d*l+v,e[1]=c*h,e[5]=v*l+d,e[9]=f*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const d=a*c,f=a*l,g=o*c,v=o*l;e[0]=c*u,e[4]=v-d*h,e[8]=g*h+f,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-l*u,e[6]=f*h+g,e[10]=d-v*h}else if(t.order==="XZY"){const d=a*c,f=a*l,g=o*c,v=o*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=d*h+v,e[5]=a*u,e[9]=f*h-g,e[2]=g*h-f,e[6]=o*u,e[10]=v*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(cp,t,lp)}lookAt(t,e,i){const s=this.elements;return fn.subVectors(t,e),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),Si.crossVectors(i,fn),Si.lengthSq()===0&&(Math.abs(i.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),Si.crossVectors(i,fn)),Si.normalize(),Yr.crossVectors(fn,Si),s[0]=Si.x,s[4]=Yr.x,s[8]=fn.x,s[1]=Si.y,s[5]=Yr.y,s[9]=fn.y,s[2]=Si.z,s[6]=Yr.z,s[10]=fn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],u=i[1],h=i[5],d=i[9],f=i[13],g=i[2],v=i[6],m=i[10],p=i[14],b=i[3],S=i[7],x=i[11],D=i[15],R=s[0],P=s[4],A=s[8],M=s[12],_=s[1],T=s[5],O=s[9],C=s[13],U=s[2],z=s[6],F=s[10],$=s[14],V=s[3],K=s[7],it=s[11],mt=s[15];return r[0]=a*R+o*_+c*U+l*V,r[4]=a*P+o*T+c*z+l*K,r[8]=a*A+o*O+c*F+l*it,r[12]=a*M+o*C+c*$+l*mt,r[1]=u*R+h*_+d*U+f*V,r[5]=u*P+h*T+d*z+f*K,r[9]=u*A+h*O+d*F+f*it,r[13]=u*M+h*C+d*$+f*mt,r[2]=g*R+v*_+m*U+p*V,r[6]=g*P+v*T+m*z+p*K,r[10]=g*A+v*O+m*F+p*it,r[14]=g*M+v*C+m*$+p*mt,r[3]=b*R+S*_+x*U+D*V,r[7]=b*P+S*T+x*z+D*K,r[11]=b*A+S*O+x*F+D*it,r[15]=b*M+S*C+x*$+D*mt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],u=t[2],h=t[6],d=t[10],f=t[14],g=t[3],v=t[7],m=t[11],p=t[15];return g*(+r*c*h-s*l*h-r*o*d+i*l*d+s*o*f-i*c*f)+v*(+e*c*f-e*l*d+r*a*d-s*a*f+s*l*u-r*c*u)+m*(+e*l*h-e*o*f-r*a*h+i*a*f+r*o*u-i*l*u)+p*(-s*o*u-e*c*h+e*o*d+s*a*h-i*a*d+i*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],h=t[9],d=t[10],f=t[11],g=t[12],v=t[13],m=t[14],p=t[15],b=h*m*l-v*d*l+v*c*f-o*m*f-h*c*p+o*d*p,S=g*d*l-u*m*l-g*c*f+a*m*f+u*c*p-a*d*p,x=u*v*l-g*h*l+g*o*f-a*v*f-u*o*p+a*h*p,D=g*h*c-u*v*c-g*o*d+a*v*d+u*o*m-a*h*m,R=e*b+i*S+s*x+r*D;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/R;return t[0]=b*P,t[1]=(v*d*r-h*m*r-v*s*f+i*m*f+h*s*p-i*d*p)*P,t[2]=(o*m*r-v*c*r+v*s*l-i*m*l-o*s*p+i*c*p)*P,t[3]=(h*c*r-o*d*r-h*s*l+i*d*l+o*s*f-i*c*f)*P,t[4]=S*P,t[5]=(u*m*r-g*d*r+g*s*f-e*m*f-u*s*p+e*d*p)*P,t[6]=(g*c*r-a*m*r-g*s*l+e*m*l+a*s*p-e*c*p)*P,t[7]=(a*d*r-u*c*r+u*s*l-e*d*l-a*s*f+e*c*f)*P,t[8]=x*P,t[9]=(g*h*r-u*v*r-g*i*f+e*v*f+u*i*p-e*h*p)*P,t[10]=(a*v*r-g*o*r+g*i*l-e*v*l-a*i*p+e*o*p)*P,t[11]=(u*o*r-a*h*r-u*i*l+e*h*l+a*i*f-e*o*f)*P,t[12]=D*P,t[13]=(u*v*s-g*h*s+g*i*d-e*v*d-u*i*m+e*h*m)*P,t[14]=(g*o*s-a*v*s-g*i*c+e*v*c+a*i*m-e*o*m)*P,t[15]=(a*h*s-u*o*s+u*i*c-e*h*c-a*i*d+e*o*d)*P,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,c=t.z,l=r*a,u=r*o;return this.set(l*a+i,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+i,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,u=a+a,h=o+o,d=r*l,f=r*u,g=r*h,v=a*u,m=a*h,p=o*h,b=c*l,S=c*u,x=c*h,D=i.x,R=i.y,P=i.z;return s[0]=(1-(v+p))*D,s[1]=(f+x)*D,s[2]=(g-S)*D,s[3]=0,s[4]=(f-x)*R,s[5]=(1-(d+p))*R,s[6]=(m+b)*R,s[7]=0,s[8]=(g+S)*P,s[9]=(m-b)*P,s[10]=(1-(d+v))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=ps.set(s[0],s[1],s[2]).length();const a=ps.set(s[4],s[5],s[6]).length(),o=ps.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Dn.copy(this);const l=1/r,u=1/a,h=1/o;return Dn.elements[0]*=l,Dn.elements[1]*=l,Dn.elements[2]*=l,Dn.elements[4]*=u,Dn.elements[5]*=u,Dn.elements[6]*=u,Dn.elements[8]*=h,Dn.elements[9]*=h,Dn.elements[10]*=h,e.setFromRotationMatrix(Dn),i.x=r,i.y=a,i.z=o,this}makePerspective(t,e,i,s,r,a,o=li){const c=this.elements,l=2*r/(e-t),u=2*r/(i-s),h=(e+t)/(e-t),d=(i+s)/(i-s);let f,g;if(o===li)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Da)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=li){const c=this.elements,l=1/(e-t),u=1/(i-s),h=1/(a-r),d=(e+t)*l,f=(i+s)*u;let g,v;if(o===li)g=(a+r)*h,v=-2*h;else if(o===Da)g=r*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const ps=new I,Dn=new le,cp=new I(0,0,0),lp=new I(1,1,1),Si=new I,Yr=new I,fn=new I,kl=new le,zl=new rs;class kn{constructor(t=0,e=0,i=0,s=kn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(ze(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ze(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ze(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return kl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(kl,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return zl.setFromEuler(this),this.setFromQuaternion(zl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}kn.DEFAULT_ORDER="XYZ";class qc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let up=0;const Vl=new I,ms=new rs,ii=new le,Zr=new I,ir=new I,hp=new I,dp=new rs,Hl=new I(1,0,0),Gl=new I(0,1,0),Wl=new I(0,0,1),$l={type:"added"},fp={type:"removed"},gs={type:"childadded",child:null},oo={type:"childremoved",child:null};class Ne extends Ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:up++}),this.uuid=ss(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ne.DEFAULT_UP.clone();const t=new I,e=new kn,i=new rs,s=new I(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new le},normalMatrix:{value:new Yt}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=Ne.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ms.setFromAxisAngle(t,e),this.quaternion.multiply(ms),this}rotateOnWorldAxis(t,e){return ms.setFromAxisAngle(t,e),this.quaternion.premultiply(ms),this}rotateX(t){return this.rotateOnAxis(Hl,t)}rotateY(t){return this.rotateOnAxis(Gl,t)}rotateZ(t){return this.rotateOnAxis(Wl,t)}translateOnAxis(t,e){return Vl.copy(t).applyQuaternion(this.quaternion),this.position.add(Vl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Hl,t)}translateY(t){return this.translateOnAxis(Gl,t)}translateZ(t){return this.translateOnAxis(Wl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ii.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Zr.copy(t):Zr.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),ir.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ii.lookAt(ir,Zr,this.up):ii.lookAt(Zr,ir,this.up),this.quaternion.setFromRotationMatrix(ii),s&&(ii.extractRotation(s.matrixWorld),ms.setFromRotationMatrix(ii),this.quaternion.premultiply(ms.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent($l),gs.child=t,this.dispatchEvent(gs),gs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(fp),oo.child=t,this.dispatchEvent(oo),oo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ii.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ii.multiply(t.parent.matrixWorld)),t.applyMatrix4(ii),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent($l),gs.child=t,this.dispatchEvent(gs),gs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,t,hp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,dp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(t.shapes,h)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),u=a(t.images),h=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Ne.DEFAULT_UP=new I(0,1,0);Ne.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Un=new I,si=new I,co=new I,ri=new I,vs=new I,_s=new I,Xl=new I,lo=new I,uo=new I,ho=new I,fo=new ve,po=new ve,mo=new ve;class Nn{constructor(t=new I,e=new I,i=new I){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Un.subVectors(t,e),s.cross(Un);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Un.subVectors(s,e),si.subVectors(i,e),co.subVectors(t,e);const a=Un.dot(Un),o=Un.dot(si),c=Un.dot(co),l=si.dot(si),u=si.dot(co),h=a*l-o*o;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(l*c-o*u)*d,g=(a*u-o*c)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,ri)===null?!1:ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getInterpolation(t,e,i,s,r,a,o,c){return this.getBarycoord(t,e,i,s,ri)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ri.x),c.addScaledVector(a,ri.y),c.addScaledVector(o,ri.z),c)}static getInterpolatedAttribute(t,e,i,s,r,a){return fo.setScalar(0),po.setScalar(0),mo.setScalar(0),fo.fromBufferAttribute(t,e),po.fromBufferAttribute(t,i),mo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(fo,r.x),a.addScaledVector(po,r.y),a.addScaledVector(mo,r.z),a}static isFrontFacing(t,e,i,s){return Un.subVectors(i,e),si.subVectors(t,e),Un.cross(si).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Un.subVectors(this.c,this.b),si.subVectors(this.a,this.b),Un.cross(si).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Nn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Nn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return Nn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return Nn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Nn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let a,o;vs.subVectors(s,i),_s.subVectors(r,i),lo.subVectors(t,i);const c=vs.dot(lo),l=_s.dot(lo);if(c<=0&&l<=0)return e.copy(i);uo.subVectors(t,s);const u=vs.dot(uo),h=_s.dot(uo);if(u>=0&&h<=u)return e.copy(s);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),e.copy(i).addScaledVector(vs,a);ho.subVectors(t,r);const f=vs.dot(ho),g=_s.dot(ho);if(g>=0&&f<=g)return e.copy(r);const v=f*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(i).addScaledVector(_s,o);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return Xl.subVectors(r,s),o=(h-u)/(h-u+(f-g)),e.copy(s).addScaledVector(Xl,o);const p=1/(m+v+d);return a=v*p,o=d*p,e.copy(i).addScaledVector(vs,a).addScaledVector(_s,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ph={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bi={h:0,s:0,l:0},jr={h:0,s:0,l:0};function go(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Kt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=sn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=re.workingColorSpace){return this.r=t,this.g=e,this.b=i,re.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=re.workingColorSpace){if(t=Xc(t,1),e=ze(e,0,1),i=ze(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=go(a,r,t+1/3),this.g=go(a,r,t),this.b=go(a,r,t-1/3)}return re.toWorkingColorSpace(this,s),this}setStyle(t,e=sn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=sn){const i=Ph[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=hi(t.r),this.g=hi(t.g),this.b=hi(t.b),this}copyLinearToSRGB(t){return this.r=Us(t.r),this.g=Us(t.g),this.b=Us(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=sn){return re.fromWorkingColorSpace(qe.copy(this),t),Math.round(ze(qe.r*255,0,255))*65536+Math.round(ze(qe.g*255,0,255))*256+Math.round(ze(qe.b*255,0,255))}getHexString(t=sn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=re.workingColorSpace){re.fromWorkingColorSpace(qe.copy(this),e);const i=qe.r,s=qe.g,r=qe.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case i:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-i)/h+2;break;case r:c=(i-s)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=re.workingColorSpace){return re.fromWorkingColorSpace(qe.copy(this),e),t.r=qe.r,t.g=qe.g,t.b=qe.b,t}getStyle(t=sn){re.fromWorkingColorSpace(qe.copy(this),t);const e=qe.r,i=qe.g,s=qe.b;return t!==sn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(bi),this.setHSL(bi.h+t,bi.s+e,bi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(bi),t.getHSL(jr);const i=_r(bi.h,jr.h,e),s=_r(bi.s,jr.s,e),r=_r(bi.l,jr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qe=new Kt;Kt.NAMES=Ph;let pp=0;class os extends Ys{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pp++}),this.uuid=ss(),this.name="",this.blending=Ii,this.side=Ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bo,this.blendDst=ko,this.blendEquation=ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Kt(0,0,0),this.blendAlpha=0,this.depthFunc=zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ls,this.stencilZFail=ls,this.stencilZPass=ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ii&&(i.blending=this.blending),this.side!==Ni&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Bo&&(i.blendSrc=this.blendSrc),this.blendDst!==ko&&(i.blendDst=this.blendDst),this.blendEquation!==ji&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==zs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ls&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ls&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ls&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class me extends os{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=fh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ie=new I,Jr=new ot;class _n{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Cl,this.updateRanges=[],this.gpuType=Xn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Jr.fromBufferAttribute(this,e),Jr.applyMatrix3(t),this.setXY(e,Jr.x,Jr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix3(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix4(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ie.fromBufferAttribute(this,e),Ie.applyNormalMatrix(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ie.fromBufferAttribute(this,e),Ie.transformDirection(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ws(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=en(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ws(e,this.array)),e}setX(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ws(e,this.array)),e}setY(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ws(e,this.array)),e}setZ(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ws(e,this.array)),e}setW(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=en(e,this.array),i=en(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=en(e,this.array),i=en(i,this.array),s=en(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=en(e,this.array),i=en(i,this.array),s=en(s,this.array),r=en(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Cl&&(t.usage=this.usage),t}}class Ih extends _n{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Lh extends _n{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class ne extends _n{constructor(t,e,i){super(new Float32Array(t),e,i)}}let mp=0;const Mn=new le,vo=new Ne,xs=new I,pn=new mi,sr=new mi,Be=new I;class Pe extends Ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mp++}),this.uuid=ss(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ah(t)?Lh:Ih)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Yt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Mn.makeRotationFromQuaternion(t),this.applyMatrix4(Mn),this}rotateX(t){return Mn.makeRotationX(t),this.applyMatrix4(Mn),this}rotateY(t){return Mn.makeRotationY(t),this.applyMatrix4(Mn),this}rotateZ(t){return Mn.makeRotationZ(t),this.applyMatrix4(Mn),this}translate(t,e,i){return Mn.makeTranslation(t,e,i),this.applyMatrix4(Mn),this}scale(t,e,i){return Mn.makeScale(t,e,i),this.applyMatrix4(Mn),this}lookAt(t){return vo.lookAt(t),vo.updateMatrix(),this.applyMatrix4(vo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xs).negate(),this.translate(xs.x,xs.y,xs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ne(i,3))}else{for(let i=0,s=e.count;i<s;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];pn.setFromBufferAttribute(r),this.morphTargetsRelative?(Be.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(Be),Be.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(Be)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new as);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const i=this.boundingSphere.center;if(pn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];sr.setFromBufferAttribute(o),this.morphTargetsRelative?(Be.addVectors(pn.min,sr.min),pn.expandByPoint(Be),Be.addVectors(pn.max,sr.max),pn.expandByPoint(Be)):(pn.expandByPoint(sr.min),pn.expandByPoint(sr.max))}pn.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)Be.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Be));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Be.fromBufferAttribute(o,l),c&&(xs.fromBufferAttribute(t,l),Be.add(xs)),s=Math.max(s,i.distanceToSquared(Be))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _n(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let A=0;A<i.count;A++)o[A]=new I,c[A]=new I;const l=new I,u=new I,h=new I,d=new ot,f=new ot,g=new ot,v=new I,m=new I;function p(A,M,_){l.fromBufferAttribute(i,A),u.fromBufferAttribute(i,M),h.fromBufferAttribute(i,_),d.fromBufferAttribute(r,A),f.fromBufferAttribute(r,M),g.fromBufferAttribute(r,_),u.sub(l),h.sub(l),f.sub(d),g.sub(d);const T=1/(f.x*g.y-g.x*f.y);isFinite(T)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(T),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(T),o[A].add(v),o[M].add(v),o[_].add(v),c[A].add(m),c[M].add(m),c[_].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let A=0,M=b.length;A<M;++A){const _=b[A],T=_.start,O=_.count;for(let C=T,U=T+O;C<U;C+=3)p(t.getX(C+0),t.getX(C+1),t.getX(C+2))}const S=new I,x=new I,D=new I,R=new I;function P(A){D.fromBufferAttribute(s,A),R.copy(D);const M=o[A];S.copy(M),S.sub(D.multiplyScalar(D.dot(M))).normalize(),x.crossVectors(R,M);const T=x.dot(c[A])<0?-1:1;a.setXYZW(A,S.x,S.y,S.z,T)}for(let A=0,M=b.length;A<M;++A){const _=b[A],T=_.start,O=_.count;for(let C=T,U=T+O;C<U;C+=3)P(t.getX(C+0)),P(t.getX(C+1)),P(t.getX(C+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new _n(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const s=new I,r=new I,a=new I,o=new I,c=new I,l=new I,u=new I,h=new I;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),v=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,m),o.add(u),c.add(u),l.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Be.fromBufferAttribute(t,e),Be.normalize(),t.setXYZ(e,Be.x,Be.y,Be.z)}toNonIndexed(){function t(o,c){const l=o.array,u=o.itemSize,h=o.normalized,d=new l.constructor(c.length*u);let f=0,g=0;for(let v=0,m=c.length;v<m;v++){o.isInterleavedBufferAttribute?f=c[v]*o.data.stride+o.offset:f=c[v]*u;for(let p=0;p<u;p++)d[g++]=l[f++]}return new _n(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Pe,i=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=t(c,i);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let u=0,h=l.length;u<h;u++){const d=l[u],f=t(d,i);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const f=l[h];u.push(f.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],h=r[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ql=new le,Gi=new $a,Kr=new as,Yl=new I,Qr=new I,ta=new I,ea=new I,_o=new I,na=new I,Zl=new I,ia=new I;class $t extends Ne{constructor(t=new Pe,e=new me){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){na.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=o[c],h=r[c];u!==0&&(_o.fromBufferAttribute(h,t),a?na.addScaledVector(_o,u):na.addScaledVector(_o.sub(e),u))}e.add(na)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Kr.copy(i.boundingSphere),Kr.applyMatrix4(r),Gi.copy(t.ray).recast(t.near),!(Kr.containsPoint(Gi.origin)===!1&&(Gi.intersectSphere(Kr,Yl)===null||Gi.origin.distanceToSquared(Yl)>(t.far-t.near)**2))&&(ql.copy(r).invert(),Gi.copy(t.ray).applyMatrix4(ql),!(i.boundingBox!==null&&Gi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Gi)))}_computeIntersections(t,e,i){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=a[m.materialIndex],b=Math.max(m.start,f.start),S=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let x=b,D=S;x<D;x+=3){const R=o.getX(x),P=o.getX(x+1),A=o.getX(x+2);s=sa(this,p,t,i,l,u,h,R,P,A),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const b=o.getX(m),S=o.getX(m+1),x=o.getX(m+2);s=sa(this,a,t,i,l,u,h,b,S,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=a[m.materialIndex],b=Math.max(m.start,f.start),S=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let x=b,D=S;x<D;x+=3){const R=x,P=x+1,A=x+2;s=sa(this,p,t,i,l,u,h,R,P,A),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const b=m,S=m+1,x=m+2;s=sa(this,a,t,i,l,u,h,b,S,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function gp(n,t,e,i,s,r,a,o){let c;if(t.side===un?c=i.intersectTriangle(a,r,s,!0,o):c=i.intersectTriangle(s,r,a,t.side===Ni,o),c===null)return null;ia.copy(o),ia.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(ia);return l<e.near||l>e.far?null:{distance:l,point:ia.clone(),object:n}}function sa(n,t,e,i,s,r,a,o,c,l){n.getVertexPosition(o,Qr),n.getVertexPosition(c,ta),n.getVertexPosition(l,ea);const u=gp(n,t,e,i,Qr,ta,ea,Zl);if(u){const h=new I;Nn.getBarycoord(Zl,Qr,ta,ea,h),s&&(u.uv=Nn.getInterpolatedAttribute(s,o,c,l,h,new ot)),r&&(u.uv1=Nn.getInterpolatedAttribute(r,o,c,l,h,new ot)),a&&(u.normal=Nn.getInterpolatedAttribute(a,o,c,l,h,new I),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new I,materialIndex:0};Nn.getNormal(Qr,ta,ea,d.normal),u.face=d,u.barycoord=h}return u}class an extends Pe{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,i,e,t,a,r,0),g("z","y","x",1,-1,i,e,-t,a,r,1),g("x","z","y",1,1,t,i,e,s,a,2),g("x","z","y",1,-1,t,i,-e,s,a,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new ne(l,3)),this.setAttribute("normal",new ne(u,3)),this.setAttribute("uv",new ne(h,2));function g(v,m,p,b,S,x,D,R,P,A,M){const _=x/P,T=D/A,O=x/2,C=D/2,U=R/2,z=P+1,F=A+1;let $=0,V=0;const K=new I;for(let it=0;it<F;it++){const mt=it*T-C;for(let Ft=0;Ft<z;Ft++){const Qt=Ft*_-O;K[v]=Qt*b,K[m]=mt*S,K[p]=U,l.push(K.x,K.y,K.z),K[v]=0,K[m]=0,K[p]=R>0?1:-1,u.push(K.x,K.y,K.z),h.push(Ft/P),h.push(1-it/A),$+=1}}for(let it=0;it<A;it++)for(let mt=0;mt<P;mt++){const Ft=d+mt+z*it,Qt=d+mt+z*(it+1),Z=d+(mt+1)+z*(it+1),rt=d+(mt+1)+z*it;c.push(Ft,Qt,rt),c.push(Qt,Z,rt),V+=6}o.addGroup(f,V,M),f+=V,d+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new an(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function $s(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function nn(n){const t={};for(let e=0;e<n.length;e++){const i=$s(n[e]);for(const s in i)t[s]=i[s]}return t}function vp(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Dh(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:re.workingColorSpace}const _p={clone:$s,merge:nn};var xp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Oi extends os{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xp,this.fragmentShader=yp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=$s(t.uniforms),this.uniformsGroups=vp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Uh extends Ne{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=li}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ei=new I,jl=new ot,Jl=new ot;class An extends Uh{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ar*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(vr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ar*2*Math.atan(Math.tan(vr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ei.x,Ei.y).multiplyScalar(-t/Ei.z),Ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ei.x,Ei.y).multiplyScalar(-t/Ei.z)}getViewSize(t,e){return this.getViewBounds(t,jl,Jl),e.subVectors(Jl,jl)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(vr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*i/l,s*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ys=-90,Ms=1;class Mp extends Ne{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new An(ys,Ms,t,e);s.layers=this.layers,this.add(s);const r=new An(ys,Ms,t,e);r.layers=this.layers,this.add(r);const a=new An(ys,Ms,t,e);a.layers=this.layers,this.add(a);const o=new An(ys,Ms,t,e);o.layers=this.layers,this.add(o);const c=new An(ys,Ms,t,e);c.layers=this.layers,this.add(c);const l=new An(ys,Ms,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===li)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Da)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,a),t.setRenderTarget(i,2,s),t.render(e,o),t.setRenderTarget(i,3,s),t.render(e,c),t.setRenderTarget(i,4,s),t.render(e,l),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(h,d,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Nh extends Je{constructor(t,e,i,s,r,a,o,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:Vs,super(t,e,i,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Sp extends ns{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Nh(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:$n}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new an(5,5,5),r=new Oi({name:"CubemapFromEquirect",uniforms:$s(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:un,blending:Pi});r.uniforms.tEquirect.value=e;const a=new $t(s,r),o=e.minFilter;return e.minFilter===Qi&&(e.minFilter=$n),new Mp(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}}const xo=new I,bp=new I,Ep=new Yt;class qi{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=xo.subVectors(i,e).cross(bp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(xo),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Ep.getNormalMatrix(t),s=this.coplanarPoint(xo).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Wi=new as,ra=new I;class Yc{constructor(t=new qi,e=new qi,i=new qi,s=new qi,r=new qi,a=new qi){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=li){const i=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],u=s[5],h=s[6],d=s[7],f=s[8],g=s[9],v=s[10],m=s[11],p=s[12],b=s[13],S=s[14],x=s[15];if(i[0].setComponents(c-r,d-l,m-f,x-p).normalize(),i[1].setComponents(c+r,d+l,m+f,x+p).normalize(),i[2].setComponents(c+a,d+u,m+g,x+b).normalize(),i[3].setComponents(c-a,d-u,m-g,x-b).normalize(),i[4].setComponents(c-o,d-h,m-v,x-S).normalize(),e===li)i[5].setComponents(c+o,d+h,m+v,x+S).normalize();else if(e===Da)i[5].setComponents(o,h,v,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Wi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Wi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Wi)}intersectsSprite(t){return Wi.center.set(0,0,0),Wi.radius=.7071067811865476,Wi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Wi)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(ra.x=s.normal.x>0?t.max.x:t.min.x,ra.y=s.normal.y>0?t.max.y:t.min.y,ra.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ra)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Oh(){let n=null,t=!1,e=null,i=null;function s(r,a){e(r,a),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function wp(n){const t=new WeakMap;function e(o,c){const l=o.array,u=o.usage,h=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,u),o.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,c,l){const u=c.array,h=c.updateRanges;if(n.bindBuffer(l,o),h.length===0)n.bufferSubData(l,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],v=h[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,h[d]=v)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const v=h[f];n.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(n.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}class Zs extends Pe{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(i),c=Math.floor(s),l=o+1,u=c+1,h=t/o,d=e/c,f=[],g=[],v=[],m=[];for(let p=0;p<u;p++){const b=p*d-a;for(let S=0;S<l;S++){const x=S*h-r;g.push(x,-b,0),v.push(0,0,1),m.push(S/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let b=0;b<o;b++){const S=b+l*p,x=b+l*(p+1),D=b+1+l*(p+1),R=b+1+l*p;f.push(S,x,R),f.push(x,D,R)}this.setIndex(f),this.setAttribute("position",new ne(g,3)),this.setAttribute("normal",new ne(v,3)),this.setAttribute("uv",new ne(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zs(t.width,t.height,t.widthSegments,t.heightSegments)}}var Tp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ap=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Rp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ip=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Dp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Up=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Np=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Op=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Fp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,kp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,zp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Vp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Hp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$p=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Xp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Yp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Zp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,jp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Jp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Kp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,em=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nm="gl_FragColor = linearToOutputTexel( gl_FragColor );",im=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,rm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,am=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,om=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,lm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,um=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,pm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,_m=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,xm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ym=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Em=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,wm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Tm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Am=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Im=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Lm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Um=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Nm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Om=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,km=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Hm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Wm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,$m=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ym=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Zm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Jm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Km=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,t0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,e0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,n0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,i0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,s0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,r0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,a0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,o0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,c0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,l0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,u0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,h0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,d0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,f0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,p0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,m0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,g0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,v0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,x0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,y0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,M0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,S0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,b0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,E0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const w0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,T0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,R0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,P0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,L0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,D0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,U0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,N0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,O0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,F0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,B0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,k0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,z0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,V0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,H0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,G0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,W0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,X0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,q0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Y0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Z0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,j0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,J0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,K0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Q0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,tg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ng=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ig=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,jt={alphahash_fragment:Tp,alphahash_pars_fragment:Ap,alphamap_fragment:Rp,alphamap_pars_fragment:Cp,alphatest_fragment:Pp,alphatest_pars_fragment:Ip,aomap_fragment:Lp,aomap_pars_fragment:Dp,batching_pars_vertex:Up,batching_vertex:Np,begin_vertex:Op,beginnormal_vertex:Fp,bsdfs:Bp,iridescence_fragment:kp,bumpmap_pars_fragment:zp,clipping_planes_fragment:Vp,clipping_planes_pars_fragment:Hp,clipping_planes_pars_vertex:Gp,clipping_planes_vertex:Wp,color_fragment:$p,color_pars_fragment:Xp,color_pars_vertex:qp,color_vertex:Yp,common:Zp,cube_uv_reflection_fragment:jp,defaultnormal_vertex:Jp,displacementmap_pars_vertex:Kp,displacementmap_vertex:Qp,emissivemap_fragment:tm,emissivemap_pars_fragment:em,colorspace_fragment:nm,colorspace_pars_fragment:im,envmap_fragment:sm,envmap_common_pars_fragment:rm,envmap_pars_fragment:am,envmap_pars_vertex:om,envmap_physical_pars_fragment:_m,envmap_vertex:cm,fog_vertex:lm,fog_pars_vertex:um,fog_fragment:hm,fog_pars_fragment:dm,gradientmap_pars_fragment:fm,lightmap_pars_fragment:pm,lights_lambert_fragment:mm,lights_lambert_pars_fragment:gm,lights_pars_begin:vm,lights_toon_fragment:xm,lights_toon_pars_fragment:ym,lights_phong_fragment:Mm,lights_phong_pars_fragment:Sm,lights_physical_fragment:bm,lights_physical_pars_fragment:Em,lights_fragment_begin:wm,lights_fragment_maps:Tm,lights_fragment_end:Am,logdepthbuf_fragment:Rm,logdepthbuf_pars_fragment:Cm,logdepthbuf_pars_vertex:Pm,logdepthbuf_vertex:Im,map_fragment:Lm,map_pars_fragment:Dm,map_particle_fragment:Um,map_particle_pars_fragment:Nm,metalnessmap_fragment:Om,metalnessmap_pars_fragment:Fm,morphinstance_vertex:Bm,morphcolor_vertex:km,morphnormal_vertex:zm,morphtarget_pars_vertex:Vm,morphtarget_vertex:Hm,normal_fragment_begin:Gm,normal_fragment_maps:Wm,normal_pars_fragment:$m,normal_pars_vertex:Xm,normal_vertex:qm,normalmap_pars_fragment:Ym,clearcoat_normal_fragment_begin:Zm,clearcoat_normal_fragment_maps:jm,clearcoat_pars_fragment:Jm,iridescence_pars_fragment:Km,opaque_fragment:Qm,packing:t0,premultiplied_alpha_fragment:e0,project_vertex:n0,dithering_fragment:i0,dithering_pars_fragment:s0,roughnessmap_fragment:r0,roughnessmap_pars_fragment:a0,shadowmap_pars_fragment:o0,shadowmap_pars_vertex:c0,shadowmap_vertex:l0,shadowmask_pars_fragment:u0,skinbase_vertex:h0,skinning_pars_vertex:d0,skinning_vertex:f0,skinnormal_vertex:p0,specularmap_fragment:m0,specularmap_pars_fragment:g0,tonemapping_fragment:v0,tonemapping_pars_fragment:_0,transmission_fragment:x0,transmission_pars_fragment:y0,uv_pars_fragment:M0,uv_pars_vertex:S0,uv_vertex:b0,worldpos_vertex:E0,background_vert:w0,background_frag:T0,backgroundCube_vert:A0,backgroundCube_frag:R0,cube_vert:C0,cube_frag:P0,depth_vert:I0,depth_frag:L0,distanceRGBA_vert:D0,distanceRGBA_frag:U0,equirect_vert:N0,equirect_frag:O0,linedashed_vert:F0,linedashed_frag:B0,meshbasic_vert:k0,meshbasic_frag:z0,meshlambert_vert:V0,meshlambert_frag:H0,meshmatcap_vert:G0,meshmatcap_frag:W0,meshnormal_vert:$0,meshnormal_frag:X0,meshphong_vert:q0,meshphong_frag:Y0,meshphysical_vert:Z0,meshphysical_frag:j0,meshtoon_vert:J0,meshtoon_frag:K0,points_vert:Q0,points_frag:tg,shadow_vert:eg,shadow_frag:ng,sprite_vert:ig,sprite_frag:sg},ht={common:{diffuse:{value:new Kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new Kt(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},Hn={basic:{uniforms:nn([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:nn([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Kt(0)}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:nn([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Kt(0)},specular:{value:new Kt(1118481)},shininess:{value:30}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:nn([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new Kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:nn([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new Kt(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:nn([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:nn([ht.points,ht.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:nn([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:nn([ht.common,ht.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:nn([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:nn([ht.sprite,ht.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distanceRGBA:{uniforms:nn([ht.common,ht.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distanceRGBA_vert,fragmentShader:jt.distanceRGBA_frag},shadow:{uniforms:nn([ht.lights,ht.fog,{color:{value:new Kt(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};Hn.physical={uniforms:nn([Hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new Kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new Kt(0)},specularColor:{value:new Kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};const aa={r:0,b:0,g:0},$i=new kn,rg=new le;function ag(n,t,e,i,s,r,a){const o=new Kt(0);let c=r===!0?0:1,l,u,h=null,d=0,f=null;function g(b){let S=b.isScene===!0?b.background:null;return S&&S.isTexture&&(S=(b.backgroundBlurriness>0?e:t).get(S)),S}function v(b){let S=!1;const x=g(b);x===null?p(o,c):x&&x.isColor&&(p(x,1),S=!0);const D=n.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,a):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(b,S){const x=g(S);x&&(x.isCubeTexture||x.mapping===Ga)?(u===void 0&&(u=new $t(new an(1,1,1),new Oi({name:"BackgroundCubeMaterial",uniforms:$s(Hn.backgroundCube.uniforms),vertexShader:Hn.backgroundCube.vertexShader,fragmentShader:Hn.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,R,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),$i.copy(S.backgroundRotation),$i.x*=-1,$i.y*=-1,$i.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&($i.y*=-1,$i.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(rg.makeRotationFromEuler($i)),u.material.toneMapped=re.getTransfer(x.colorSpace)!==ge,(h!==x||d!==x.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,h=x,d=x.version,f=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new $t(new Zs(2,2),new Oi({name:"BackgroundMaterial",uniforms:$s(Hn.background.uniforms),vertexShader:Hn.background.vertexShader,fragmentShader:Hn.background.fragmentShader,side:Ni,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=re.getTransfer(x.colorSpace)!==ge,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,h=x,d=x.version,f=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function p(b,S){b.getRGB(aa,Dh(n)),i.buffers.color.setClear(aa.r,aa.g,aa.b,S,a)}return{getClearColor:function(){return o},setClearColor:function(b,S=1){o.set(b),c=S,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,p(o,c)},render:v,addToRenderList:m}}function og(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,a=!1;function o(_,T,O,C,U){let z=!1;const F=h(C,O,T);r!==F&&(r=F,l(r.object)),z=f(_,C,O,U),z&&g(_,C,O,U),U!==null&&t.update(U,n.ELEMENT_ARRAY_BUFFER),(z||a)&&(a=!1,x(_,T,O,C),U!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function c(){return n.createVertexArray()}function l(_){return n.bindVertexArray(_)}function u(_){return n.deleteVertexArray(_)}function h(_,T,O){const C=O.wireframe===!0;let U=i[_.id];U===void 0&&(U={},i[_.id]=U);let z=U[T.id];z===void 0&&(z={},U[T.id]=z);let F=z[C];return F===void 0&&(F=d(c()),z[C]=F),F}function d(_){const T=[],O=[],C=[];for(let U=0;U<e;U++)T[U]=0,O[U]=0,C[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:O,attributeDivisors:C,object:_,attributes:{},index:null}}function f(_,T,O,C){const U=r.attributes,z=T.attributes;let F=0;const $=O.getAttributes();for(const V in $)if($[V].location>=0){const it=U[V];let mt=z[V];if(mt===void 0&&(V==="instanceMatrix"&&_.instanceMatrix&&(mt=_.instanceMatrix),V==="instanceColor"&&_.instanceColor&&(mt=_.instanceColor)),it===void 0||it.attribute!==mt||mt&&it.data!==mt.data)return!0;F++}return r.attributesNum!==F||r.index!==C}function g(_,T,O,C){const U={},z=T.attributes;let F=0;const $=O.getAttributes();for(const V in $)if($[V].location>=0){let it=z[V];it===void 0&&(V==="instanceMatrix"&&_.instanceMatrix&&(it=_.instanceMatrix),V==="instanceColor"&&_.instanceColor&&(it=_.instanceColor));const mt={};mt.attribute=it,it&&it.data&&(mt.data=it.data),U[V]=mt,F++}r.attributes=U,r.attributesNum=F,r.index=C}function v(){const _=r.newAttributes;for(let T=0,O=_.length;T<O;T++)_[T]=0}function m(_){p(_,0)}function p(_,T){const O=r.newAttributes,C=r.enabledAttributes,U=r.attributeDivisors;O[_]=1,C[_]===0&&(n.enableVertexAttribArray(_),C[_]=1),U[_]!==T&&(n.vertexAttribDivisor(_,T),U[_]=T)}function b(){const _=r.newAttributes,T=r.enabledAttributes;for(let O=0,C=T.length;O<C;O++)T[O]!==_[O]&&(n.disableVertexAttribArray(O),T[O]=0)}function S(_,T,O,C,U,z,F){F===!0?n.vertexAttribIPointer(_,T,O,U,z):n.vertexAttribPointer(_,T,O,C,U,z)}function x(_,T,O,C){v();const U=C.attributes,z=O.getAttributes(),F=T.defaultAttributeValues;for(const $ in z){const V=z[$];if(V.location>=0){let K=U[$];if(K===void 0&&($==="instanceMatrix"&&_.instanceMatrix&&(K=_.instanceMatrix),$==="instanceColor"&&_.instanceColor&&(K=_.instanceColor)),K!==void 0){const it=K.normalized,mt=K.itemSize,Ft=t.get(K);if(Ft===void 0)continue;const Qt=Ft.buffer,Z=Ft.type,rt=Ft.bytesPerElement,Et=Z===n.INT||Z===n.UNSIGNED_INT||K.gpuType===kc;if(K.isInterleavedBufferAttribute){const lt=K.data,Lt=lt.stride,Vt=K.offset;if(lt.isInstancedInterleavedBuffer){for(let Ot=0;Ot<V.locationSize;Ot++)p(V.location+Ot,lt.meshPerAttribute);_.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Ot=0;Ot<V.locationSize;Ot++)m(V.location+Ot);n.bindBuffer(n.ARRAY_BUFFER,Qt);for(let Ot=0;Ot<V.locationSize;Ot++)S(V.location+Ot,mt/V.locationSize,Z,it,Lt*rt,(Vt+mt/V.locationSize*Ot)*rt,Et)}else{if(K.isInstancedBufferAttribute){for(let lt=0;lt<V.locationSize;lt++)p(V.location+lt,K.meshPerAttribute);_.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let lt=0;lt<V.locationSize;lt++)m(V.location+lt);n.bindBuffer(n.ARRAY_BUFFER,Qt);for(let lt=0;lt<V.locationSize;lt++)S(V.location+lt,mt/V.locationSize,Z,it,mt*rt,mt/V.locationSize*lt*rt,Et)}}else if(F!==void 0){const it=F[$];if(it!==void 0)switch(it.length){case 2:n.vertexAttrib2fv(V.location,it);break;case 3:n.vertexAttrib3fv(V.location,it);break;case 4:n.vertexAttrib4fv(V.location,it);break;default:n.vertexAttrib1fv(V.location,it)}}}}b()}function D(){A();for(const _ in i){const T=i[_];for(const O in T){const C=T[O];for(const U in C)u(C[U].object),delete C[U];delete T[O]}delete i[_]}}function R(_){if(i[_.id]===void 0)return;const T=i[_.id];for(const O in T){const C=T[O];for(const U in C)u(C[U].object),delete C[U];delete T[O]}delete i[_.id]}function P(_){for(const T in i){const O=i[T];if(O[_.id]===void 0)continue;const C=O[_.id];for(const U in C)u(C[U].object),delete C[U];delete O[_.id]}}function A(){M(),a=!0,r!==s&&(r=s,l(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:A,resetDefaultState:M,dispose:D,releaseStatesOfGeometry:R,releaseStatesOfProgram:P,initAttributes:v,enableAttribute:m,disableUnusedAttributes:b}}function cg(n,t,e){let i;function s(l){i=l}function r(l,u){n.drawArrays(i,l,u),e.update(u,i,1)}function a(l,u,h){h!==0&&(n.drawArraysInstanced(i,l,u,h),e.update(u,i,h))}function o(l,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];e.update(f,i,1)}function c(l,u,h,d){if(h===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)a(l[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(i,l,0,u,0,d,0,h);let g=0;for(let v=0;v<h;v++)g+=u[v]*d[v];e.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function lg(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(P){return!(P!==Fn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const A=P===Fr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==pi&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Xn&&!A)}function c(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:S,maxFragmentUniforms:x,vertexTextures:D,maxSamples:R}}function ug(n){const t=this;let e=null,i=0,s=!1,r=!1;const a=new qi,o=new Yt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||i!==0||s;return s=d,i=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{const b=r?0:i,S=b*4;let x=p.clippingState||null;c.value=x,x=u(g,d,S,f);for(let D=0;D!==S;++D)x[D]=e[D];p.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,d,f,g){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const p=f+v*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,x=f;S!==v;++S,x+=4)a.copy(h[S]).applyMatrix4(b,o),a.normal.toArray(m,x),m[x+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function hg(n){let t=new WeakMap;function e(a,o){return o===qo?a.mapping=Vs:o===Yo&&(a.mapping=Hs),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===qo||o===Yo)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Sp(c.height);return l.fromEquirectangularTexture(n,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class Zc extends Uh{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,a=i+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Cs=4,Kl=[.125,.215,.35,.446,.526,.582],Ji=20,yo=new Zc,Ql=new Kt;let Mo=null,So=0,bo=0,Eo=!1;const Yi=(1+Math.sqrt(5))/2,Ss=1/Yi,tu=[new I(-Yi,Ss,0),new I(Yi,Ss,0),new I(-Ss,0,Yi),new I(Ss,0,Yi),new I(0,Yi,-Ss),new I(0,Yi,Ss),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class eu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Mo=this._renderer.getRenderTarget(),So=this._renderer.getActiveCubeFace(),bo=this._renderer.getActiveMipmapLevel(),Eo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=su(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=iu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Mo,So,bo),this._renderer.xr.enabled=Eo,t.scissorTest=!1,oa(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Vs||t.mapping===Hs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Mo=this._renderer.getRenderTarget(),So=this._renderer.getActiveCubeFace(),bo=this._renderer.getActiveMipmapLevel(),Eo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:$n,minFilter:$n,generateMipmaps:!1,type:Fr,format:Fn,colorSpace:qs,depthBuffer:!1},s=nu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nu(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dg(r)),this._blurMaterial=fg(r,t,e)}return s}_compileMaterial(t){const e=new $t(this._lodPlanes[0],t);this._renderer.compile(e,yo)}_sceneToCubeUV(t,e,i,s){const o=new An(90,1,e,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Ql),u.toneMapping=Li,u.autoClear=!1;const f=new me({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),g=new $t(new an,f);let v=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,v=!0):(f.color.copy(Ql),v=!0);for(let p=0;p<6;p++){const b=p%3;b===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):b===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));const S=this._cubeSize;oa(s,b*S,p>2?S:0,S,S),u.setRenderTarget(s),v&&u.render(g,o),u.render(t,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Vs||t.mapping===Hs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=su()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=iu());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new $t(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;oa(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(a,yo)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=tu[(s-r-1)%tu.length];this._blur(t,r-1,r,a,o)}e.autoClear=i}_blur(t,e,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,s,"latitudinal",r),this._halfBlur(a,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new $t(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ji-1),v=r/g,m=isFinite(r)?1+Math.floor(u*v):Ji;m>Ji&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ji}`);const p=[];let b=0;for(let P=0;P<Ji;++P){const A=P/v,M=Math.exp(-A*A/2);p.push(M),P===0?b+=M:P<m&&(b+=2*M)}for(let P=0;P<p.length;P++)p[P]=p[P]/b;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:S}=this;d.dTheta.value=g,d.mipInt.value=S-i;const x=this._sizeLods[s],D=3*x*(s>S-Cs?s-S+Cs:0),R=4*(this._cubeSize-x);oa(e,D,R,3*x,2*x),c.setRenderTarget(e),c.render(h,yo)}}function dg(n){const t=[],e=[],i=[];let s=n;const r=n-Cs+1+Kl.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let c=1/o;a>n-Cs?c=Kl[a-n+Cs-1]:a===0&&(c=0),i.push(c);const l=1/(o-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,v=3,m=2,p=1,b=new Float32Array(v*g*f),S=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let R=0;R<f;R++){const P=R%3*2/3-1,A=R>2?0:-1,M=[P,A,0,P+2/3,A,0,P+2/3,A+1,0,P,A,0,P+2/3,A+1,0,P,A+1,0];b.set(M,v*g*R),S.set(d,m*g*R);const _=[R,R,R,R,R,R];x.set(_,p*g*R)}const D=new Pe;D.setAttribute("position",new _n(b,v)),D.setAttribute("uv",new _n(S,m)),D.setAttribute("faceIndex",new _n(x,p)),t.push(D),s>Cs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function nu(n,t,e){const i=new ns(n,t,e);return i.texture.mapping=Ga,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function oa(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function fg(n,t,e){const i=new Float32Array(Ji),s=new I(0,1,0);return new Oi({name:"SphericalGaussianBlur",defines:{n:Ji,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function iu(){return new Oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function su(){return new Oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function jc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function pg(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===qo||c===Yo,u=c===Vs||c===Hs;if(l||u){let h=t.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new eu(n)),h=l?e.fromEquirectangular(o,h):e.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{const f=o.image;return l&&f&&f.height>0||u&&f&&s(f)?(e===null&&(e=new eu(n)),h=l?e.fromEquirectangular(o):e.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function mg(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&dr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function gg(n,t,e,i){const s={},r=new WeakMap;function a(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)t.remove(v[m])}d.removeEventListener("dispose",a),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(h,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function c(h){const d=h.attributes;for(const g in d)t.update(d[g],n.ARRAY_BUFFER);const f=h.morphAttributes;for(const g in f){const v=f[g];for(let m=0,p=v.length;m<p;m++)t.update(v[m],n.ARRAY_BUFFER)}}function l(h){const d=[],f=h.index,g=h.attributes.position;let v=0;if(f!==null){const b=f.array;v=f.version;for(let S=0,x=b.length;S<x;S+=3){const D=b[S+0],R=b[S+1],P=b[S+2];d.push(D,R,R,P,P,D)}}else if(g!==void 0){const b=g.array;v=g.version;for(let S=0,x=b.length/3-1;S<x;S+=3){const D=S+0,R=S+1,P=S+2;d.push(D,R,R,P,P,D)}}else return;const m=new(Ah(d)?Lh:Ih)(d,1);m.version=v;const p=r.get(h);p&&t.remove(p),r.set(h,m)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return r.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function vg(n,t,e){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,f){n.drawElements(i,f,r,d*a),e.update(f,i,1)}function l(d,f,g){g!==0&&(n.drawElementsInstanced(i,f,r,d*a,g),e.update(f,i,g))}function u(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,i,1)}function h(d,f,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/a,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,v,0,g);let p=0;for(let b=0;b<g;b++)p+=f[b]*v[b];e.update(p,i,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function _g(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function xg(n,t,e){const i=new WeakMap,s=new ve;function r(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==h){let _=function(){A.dispose(),i.delete(o),o.removeEventListener("dispose",_)};var f=_;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let x=0;g===!0&&(x=1),v===!0&&(x=2),m===!0&&(x=3);let D=o.attributes.position.count*x,R=1;D>t.maxTextureSize&&(R=Math.ceil(D/t.maxTextureSize),D=t.maxTextureSize);const P=new Float32Array(D*R*4*h),A=new Ch(P,D,R,h);A.type=Xn,A.needsUpdate=!0;const M=x*4;for(let T=0;T<h;T++){const O=p[T],C=b[T],U=S[T],z=D*R*4*T;for(let F=0;F<O.count;F++){const $=F*M;g===!0&&(s.fromBufferAttribute(O,F),P[z+$+0]=s.x,P[z+$+1]=s.y,P[z+$+2]=s.z,P[z+$+3]=0),v===!0&&(s.fromBufferAttribute(C,F),P[z+$+4]=s.x,P[z+$+5]=s.y,P[z+$+6]=s.z,P[z+$+7]=0),m===!0&&(s.fromBufferAttribute(U,F),P[z+$+8]=s.x,P[z+$+9]=s.y,P[z+$+10]=s.z,P[z+$+11]=U.itemSize===4?s.w:1)}}d={count:h,texture:A,size:new ot(D,R)},i.set(o,d),o.addEventListener("dispose",_)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const v=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",v),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function yg(n,t,e,i){let s=new WeakMap;function r(c){const l=i.render.frame,u=c.geometry,h=t.get(c,u);if(s.get(h)!==l&&(t.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return h}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}class Fh extends Je{constructor(t,e,i,s,r,a,o,c,l,u=Ds){if(u!==Ds&&u!==Ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Ds&&(i=es),i===void 0&&u===Ws&&(i=Gs),super(null,s,r,a,o,c,u,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:vn,this.minFilter=c!==void 0?c:vn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Bh=new Je,ru=new Fh(1,1),kh=new Ch,zh=new ap,Vh=new Nh,au=[],ou=[],cu=new Float32Array(16),lu=new Float32Array(9),uu=new Float32Array(4);function js(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=au[s];if(r===void 0&&(r=new Float32Array(s),au[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function Oe(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Fe(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Xa(n,t){let e=ou[t];e===void 0&&(e=new Int32Array(t),ou[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Mg(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Sg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;n.uniform2fv(this.addr,t),Fe(e,t)}}function bg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Oe(e,t))return;n.uniform3fv(this.addr,t),Fe(e,t)}}function Eg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;n.uniform4fv(this.addr,t),Fe(e,t)}}function wg(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Oe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Fe(e,t)}else{if(Oe(e,i))return;uu.set(i),n.uniformMatrix2fv(this.addr,!1,uu),Fe(e,i)}}function Tg(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Oe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Fe(e,t)}else{if(Oe(e,i))return;lu.set(i),n.uniformMatrix3fv(this.addr,!1,lu),Fe(e,i)}}function Ag(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Oe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Fe(e,t)}else{if(Oe(e,i))return;cu.set(i),n.uniformMatrix4fv(this.addr,!1,cu),Fe(e,i)}}function Rg(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Cg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;n.uniform2iv(this.addr,t),Fe(e,t)}}function Pg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;n.uniform3iv(this.addr,t),Fe(e,t)}}function Ig(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;n.uniform4iv(this.addr,t),Fe(e,t)}}function Lg(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Dg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;n.uniform2uiv(this.addr,t),Fe(e,t)}}function Ug(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;n.uniform3uiv(this.addr,t),Fe(e,t)}}function Ng(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;n.uniform4uiv(this.addr,t),Fe(e,t)}}function Og(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(ru.compareFunction=Th,r=ru):r=Bh,e.setTexture2D(t||r,s)}function Fg(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||zh,s)}function Bg(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Vh,s)}function kg(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||kh,s)}function zg(n){switch(n){case 5126:return Mg;case 35664:return Sg;case 35665:return bg;case 35666:return Eg;case 35674:return wg;case 35675:return Tg;case 35676:return Ag;case 5124:case 35670:return Rg;case 35667:case 35671:return Cg;case 35668:case 35672:return Pg;case 35669:case 35673:return Ig;case 5125:return Lg;case 36294:return Dg;case 36295:return Ug;case 36296:return Ng;case 35678:case 36198:case 36298:case 36306:case 35682:return Og;case 35679:case 36299:case 36307:return Fg;case 35680:case 36300:case 36308:case 36293:return Bg;case 36289:case 36303:case 36311:case 36292:return kg}}function Vg(n,t){n.uniform1fv(this.addr,t)}function Hg(n,t){const e=js(t,this.size,2);n.uniform2fv(this.addr,e)}function Gg(n,t){const e=js(t,this.size,3);n.uniform3fv(this.addr,e)}function Wg(n,t){const e=js(t,this.size,4);n.uniform4fv(this.addr,e)}function $g(n,t){const e=js(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Xg(n,t){const e=js(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function qg(n,t){const e=js(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Yg(n,t){n.uniform1iv(this.addr,t)}function Zg(n,t){n.uniform2iv(this.addr,t)}function jg(n,t){n.uniform3iv(this.addr,t)}function Jg(n,t){n.uniform4iv(this.addr,t)}function Kg(n,t){n.uniform1uiv(this.addr,t)}function Qg(n,t){n.uniform2uiv(this.addr,t)}function tv(n,t){n.uniform3uiv(this.addr,t)}function ev(n,t){n.uniform4uiv(this.addr,t)}function nv(n,t,e){const i=this.cache,s=t.length,r=Xa(e,s);Oe(i,r)||(n.uniform1iv(this.addr,r),Fe(i,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Bh,r[a])}function iv(n,t,e){const i=this.cache,s=t.length,r=Xa(e,s);Oe(i,r)||(n.uniform1iv(this.addr,r),Fe(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||zh,r[a])}function sv(n,t,e){const i=this.cache,s=t.length,r=Xa(e,s);Oe(i,r)||(n.uniform1iv(this.addr,r),Fe(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Vh,r[a])}function rv(n,t,e){const i=this.cache,s=t.length,r=Xa(e,s);Oe(i,r)||(n.uniform1iv(this.addr,r),Fe(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||kh,r[a])}function av(n){switch(n){case 5126:return Vg;case 35664:return Hg;case 35665:return Gg;case 35666:return Wg;case 35674:return $g;case 35675:return Xg;case 35676:return qg;case 5124:case 35670:return Yg;case 35667:case 35671:return Zg;case 35668:case 35672:return jg;case 35669:case 35673:return Jg;case 5125:return Kg;case 36294:return Qg;case 36295:return tv;case 36296:return ev;case 35678:case 36198:case 36298:case 36306:case 35682:return nv;case 35679:case 36299:case 36307:return iv;case 35680:case 36300:case 36308:case 36293:return sv;case 36289:case 36303:case 36311:case 36292:return rv}}class ov{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=zg(e.type)}}class cv{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=av(e.type)}}class lv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],i)}}}const wo=/(\w+)(\])?(\[|\.)?/g;function hu(n,t){n.seq.push(t),n.map[t.id]=t}function uv(n,t,e){const i=n.name,s=i.length;for(wo.lastIndex=0;;){const r=wo.exec(i),a=wo.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){hu(e,l===void 0?new ov(o,n,t):new cv(o,n,t));break}else{let h=e.map[o];h===void 0&&(h=new lv(o),hu(e,h)),e=h}}}class ba{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);uv(r,a,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&i.push(a)}return i}}function du(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const hv=37297;let dv=0;function fv(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const fu=new Yt;function pv(n){re._getMatrix(fu,re.workingColorSpace,n);const t=`mat3( ${fu.elements.map(e=>e.toFixed(4))} )`;switch(re.getTransfer(n)){case Wa:return[t,"LinearTransferOETF"];case ge:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function pu(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+fv(n.getShaderSource(t),a)}else return s}function mv(n,t){const e=pv(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function gv(n,t){let e;switch(t){case _f:e="Linear";break;case xf:e="Reinhard";break;case yf:e="Cineon";break;case ph:e="ACESFilmic";break;case Sf:e="AgX";break;case bf:e="Neutral";break;case Mf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ca=new I;function vv(){re.getLuminanceCoefficients(ca);const n=ca.x.toFixed(4),t=ca.y.toFixed(4),e=ca.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _v(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fr).join(`
`)}function xv(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function yv(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function fr(n){return n!==""}function mu(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function gu(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Mv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sc(n){return n.replace(Mv,bv)}const Sv=new Map;function bv(n,t){let e=jt[t];if(e===void 0){const i=Sv.get(t);if(i!==void 0)e=jt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Sc(e)}const Ev=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vu(n){return n.replace(Ev,wv)}function wv(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function _u(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Tv(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===dh?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===jd?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ai&&(t="SHADOWMAP_TYPE_VSM"),t}function Av(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Vs:case Hs:t="ENVMAP_TYPE_CUBE";break;case Ga:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Rv(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Hs:t="ENVMAP_MODE_REFRACTION";break}return t}function Cv(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case fh:t="ENVMAP_BLENDING_MULTIPLY";break;case gf:t="ENVMAP_BLENDING_MIX";break;case vf:t="ENVMAP_BLENDING_ADD";break}return t}function Pv(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function Iv(n,t,e,i){const s=n.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=Tv(e),l=Av(e),u=Rv(e),h=Cv(e),d=Pv(e),f=_v(e),g=xv(r),v=s.createProgram();let m,p,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(fr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(fr).join(`
`),p.length>0&&(p+=`
`)):(m=[_u(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fr).join(`
`),p=[_u(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Li?"#define TONE_MAPPING":"",e.toneMapping!==Li?jt.tonemapping_pars_fragment:"",e.toneMapping!==Li?gv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,mv("linearToOutputTexel",e.outputColorSpace),vv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(fr).join(`
`)),a=Sc(a),a=mu(a,e),a=gu(a,e),o=Sc(o),o=mu(o,e),o=gu(o,e),a=vu(a),o=vu(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Pl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Pl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=b+m+a,x=b+p+o,D=du(s,s.VERTEX_SHADER,S),R=du(s,s.FRAGMENT_SHADER,x);s.attachShader(v,D),s.attachShader(v,R),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function P(T){if(n.debug.checkShaderErrors){const O=s.getProgramInfoLog(v).trim(),C=s.getShaderInfoLog(D).trim(),U=s.getShaderInfoLog(R).trim();let z=!0,F=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,D,R);else{const $=pu(s,D,"vertex"),V=pu(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+O+`
`+$+`
`+V)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(C===""||U==="")&&(F=!1);F&&(T.diagnostics={runnable:z,programLog:O,vertexShader:{log:C,prefix:m},fragmentShader:{log:U,prefix:p}})}s.deleteShader(D),s.deleteShader(R),A=new ba(s,v),M=yv(s,v)}let A;this.getUniforms=function(){return A===void 0&&P(this),A};let M;this.getAttributes=function(){return M===void 0&&P(this),M};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(v,hv)),_},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=dv++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=D,this.fragmentShader=R,this}let Lv=0;class Dv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Uv(t),e.set(t,i)),i}}class Uv{constructor(t){this.id=Lv++,this.code=t,this.usedTimes=0}}function Nv(n,t,e,i,s,r,a){const o=new qc,c=new Dv,l=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,_,T,O,C){const U=O.fog,z=C.geometry,F=M.isMeshStandardMaterial?O.environment:null,$=(M.isMeshStandardMaterial?e:t).get(M.envMap||F),V=$&&$.mapping===Ga?$.image.height:null,K=g[M.type];M.precision!==null&&(f=s.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const it=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,mt=it!==void 0?it.length:0;let Ft=0;z.morphAttributes.position!==void 0&&(Ft=1),z.morphAttributes.normal!==void 0&&(Ft=2),z.morphAttributes.color!==void 0&&(Ft=3);let Qt,Z,rt,Et;if(K){const pe=Hn[K];Qt=pe.vertexShader,Z=pe.fragmentShader}else Qt=M.vertexShader,Z=M.fragmentShader,c.update(M),rt=c.getVertexShaderID(M),Et=c.getFragmentShaderID(M);const lt=n.getRenderTarget(),Lt=n.state.buffers.depth.getReversed(),Vt=C.isInstancedMesh===!0,Ot=C.isBatchedMesh===!0,ie=!!M.map,J=!!M.matcap,st=!!$,L=!!M.aoMap,Pt=!!M.lightMap,et=!!M.bumpMap,Mt=!!M.normalMap,ut=!!M.displacementMap,Dt=!!M.emissiveMap,xt=!!M.metalnessMap,w=!!M.roughnessMap,y=M.anisotropy>0,H=M.clearcoat>0,q=M.dispersion>0,Q=M.iridescence>0,Y=M.sheen>0,wt=M.transmission>0,dt=y&&!!M.anisotropyMap,yt=H&&!!M.clearcoatMap,Jt=H&&!!M.clearcoatNormalMap,nt=H&&!!M.clearcoatRoughnessMap,St=Q&&!!M.iridescenceMap,Ut=Q&&!!M.iridescenceThicknessMap,kt=Y&&!!M.sheenColorMap,bt=Y&&!!M.sheenRoughnessMap,te=!!M.specularMap,Zt=!!M.specularColorMap,_e=!!M.specularIntensityMap,N=wt&&!!M.transmissionMap,pt=wt&&!!M.thicknessMap,X=!!M.gradientMap,j=!!M.alphaMap,_t=M.alphaTest>0,gt=!!M.alphaHash,Xt=!!M.extensions;let Ae=Li;M.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(Ae=n.toneMapping);const $e={shaderID:K,shaderType:M.type,shaderName:M.name,vertexShader:Qt,fragmentShader:Z,defines:M.defines,customVertexShaderID:rt,customFragmentShaderID:Et,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Ot,batchingColor:Ot&&C._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&C.instanceColor!==null,instancingMorph:Vt&&C.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:lt===null?n.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:qs,alphaToCoverage:!!M.alphaToCoverage,map:ie,matcap:J,envMap:st,envMapMode:st&&$.mapping,envMapCubeUVHeight:V,aoMap:L,lightMap:Pt,bumpMap:et,normalMap:Mt,displacementMap:d&&ut,emissiveMap:Dt,normalMapObjectSpace:Mt&&M.normalMapType===Af,normalMapTangentSpace:Mt&&M.normalMapType===wh,metalnessMap:xt,roughnessMap:w,anisotropy:y,anisotropyMap:dt,clearcoat:H,clearcoatMap:yt,clearcoatNormalMap:Jt,clearcoatRoughnessMap:nt,dispersion:q,iridescence:Q,iridescenceMap:St,iridescenceThicknessMap:Ut,sheen:Y,sheenColorMap:kt,sheenRoughnessMap:bt,specularMap:te,specularColorMap:Zt,specularIntensityMap:_e,transmission:wt,transmissionMap:N,thicknessMap:pt,gradientMap:X,opaque:M.transparent===!1&&M.blending===Ii&&M.alphaToCoverage===!1,alphaMap:j,alphaTest:_t,alphaHash:gt,combine:M.combine,mapUv:ie&&v(M.map.channel),aoMapUv:L&&v(M.aoMap.channel),lightMapUv:Pt&&v(M.lightMap.channel),bumpMapUv:et&&v(M.bumpMap.channel),normalMapUv:Mt&&v(M.normalMap.channel),displacementMapUv:ut&&v(M.displacementMap.channel),emissiveMapUv:Dt&&v(M.emissiveMap.channel),metalnessMapUv:xt&&v(M.metalnessMap.channel),roughnessMapUv:w&&v(M.roughnessMap.channel),anisotropyMapUv:dt&&v(M.anisotropyMap.channel),clearcoatMapUv:yt&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:Jt&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:St&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ut&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:kt&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:bt&&v(M.sheenRoughnessMap.channel),specularMapUv:te&&v(M.specularMap.channel),specularColorMapUv:Zt&&v(M.specularColorMap.channel),specularIntensityMapUv:_e&&v(M.specularIntensityMap.channel),transmissionMapUv:N&&v(M.transmissionMap.channel),thicknessMapUv:pt&&v(M.thicknessMap.channel),alphaMapUv:j&&v(M.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Mt||y),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!z.attributes.uv&&(ie||j),fog:!!U,useFog:M.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Lt,skinning:C.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:mt,morphTextureStride:Ft,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&T.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ae,decodeVideoTexture:ie&&M.map.isVideoTexture===!0&&re.getTransfer(M.map.colorSpace)===ge,decodeVideoTextureEmissive:Dt&&M.emissiveMap.isVideoTexture===!0&&re.getTransfer(M.emissiveMap.colorSpace)===ge,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===mn,flipSided:M.side===un,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Xt&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xt&&M.extensions.multiDraw===!0||Ot)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return $e.vertexUv1s=l.has(1),$e.vertexUv2s=l.has(2),$e.vertexUv3s=l.has(3),l.clear(),$e}function p(M){const _=[];if(M.shaderID?_.push(M.shaderID):(_.push(M.customVertexShaderID),_.push(M.customFragmentShaderID)),M.defines!==void 0)for(const T in M.defines)_.push(T),_.push(M.defines[T]);return M.isRawShaderMaterial===!1&&(b(_,M),S(_,M),_.push(n.outputColorSpace)),_.push(M.customProgramCacheKey),_.join()}function b(M,_){M.push(_.precision),M.push(_.outputColorSpace),M.push(_.envMapMode),M.push(_.envMapCubeUVHeight),M.push(_.mapUv),M.push(_.alphaMapUv),M.push(_.lightMapUv),M.push(_.aoMapUv),M.push(_.bumpMapUv),M.push(_.normalMapUv),M.push(_.displacementMapUv),M.push(_.emissiveMapUv),M.push(_.metalnessMapUv),M.push(_.roughnessMapUv),M.push(_.anisotropyMapUv),M.push(_.clearcoatMapUv),M.push(_.clearcoatNormalMapUv),M.push(_.clearcoatRoughnessMapUv),M.push(_.iridescenceMapUv),M.push(_.iridescenceThicknessMapUv),M.push(_.sheenColorMapUv),M.push(_.sheenRoughnessMapUv),M.push(_.specularMapUv),M.push(_.specularColorMapUv),M.push(_.specularIntensityMapUv),M.push(_.transmissionMapUv),M.push(_.thicknessMapUv),M.push(_.combine),M.push(_.fogExp2),M.push(_.sizeAttenuation),M.push(_.morphTargetsCount),M.push(_.morphAttributeCount),M.push(_.numDirLights),M.push(_.numPointLights),M.push(_.numSpotLights),M.push(_.numSpotLightMaps),M.push(_.numHemiLights),M.push(_.numRectAreaLights),M.push(_.numDirLightShadows),M.push(_.numPointLightShadows),M.push(_.numSpotLightShadows),M.push(_.numSpotLightShadowsWithMaps),M.push(_.numLightProbes),M.push(_.shadowMapType),M.push(_.toneMapping),M.push(_.numClippingPlanes),M.push(_.numClipIntersection),M.push(_.depthPacking)}function S(M,_){o.disableAll(),_.supportsVertexTextures&&o.enable(0),_.instancing&&o.enable(1),_.instancingColor&&o.enable(2),_.instancingMorph&&o.enable(3),_.matcap&&o.enable(4),_.envMap&&o.enable(5),_.normalMapObjectSpace&&o.enable(6),_.normalMapTangentSpace&&o.enable(7),_.clearcoat&&o.enable(8),_.iridescence&&o.enable(9),_.alphaTest&&o.enable(10),_.vertexColors&&o.enable(11),_.vertexAlphas&&o.enable(12),_.vertexUv1s&&o.enable(13),_.vertexUv2s&&o.enable(14),_.vertexUv3s&&o.enable(15),_.vertexTangents&&o.enable(16),_.anisotropy&&o.enable(17),_.alphaHash&&o.enable(18),_.batching&&o.enable(19),_.dispersion&&o.enable(20),_.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.reverseDepthBuffer&&o.enable(4),_.skinning&&o.enable(5),_.morphTargets&&o.enable(6),_.morphNormals&&o.enable(7),_.morphColors&&o.enable(8),_.premultipliedAlpha&&o.enable(9),_.shadowMapEnabled&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),_.decodeVideoTextureEmissive&&o.enable(20),_.alphaToCoverage&&o.enable(21),M.push(o.mask)}function x(M){const _=g[M.type];let T;if(_){const O=Hn[_];T=_p.clone(O.uniforms)}else T=M.uniforms;return T}function D(M,_){let T;for(let O=0,C=u.length;O<C;O++){const U=u[O];if(U.cacheKey===_){T=U,++T.usedTimes;break}}return T===void 0&&(T=new Iv(n,_,M,r),u.push(T)),T}function R(M){if(--M.usedTimes===0){const _=u.indexOf(M);u[_]=u[u.length-1],u.pop(),M.destroy()}}function P(M){c.remove(M)}function A(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:D,releaseProgram:R,releaseShaderCache:P,programs:u,dispose:A}}function Ov(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,c){n.get(a)[o]=c}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function Fv(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function xu(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function yu(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(h,d,f,g,v,m){let p=n[t];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:v,group:m},n[t]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=v,p.group=m),t++,p}function o(h,d,f,g,v,m){const p=a(h,d,f,g,v,m);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(h,d,f,g,v,m){const p=a(h,d,f,g,v,m);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function l(h,d){e.length>1&&e.sort(h||Fv),i.length>1&&i.sort(d||xu),s.length>1&&s.sort(d||xu)}function u(){for(let h=t,d=n.length;h<d;h++){const f=n[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:o,unshift:c,finish:u,sort:l}}function Bv(){let n=new WeakMap;function t(i,s){const r=n.get(i);let a;return r===void 0?(a=new yu,n.set(i,[a])):s>=r.length?(a=new yu,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function kv(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Kt};break;case"SpotLight":e={position:new I,direction:new I,color:new Kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Kt,groundColor:new Kt};break;case"RectAreaLight":e={color:new Kt,position:new I,halfWidth:new I,halfHeight:new I};break}return n[t.id]=e,e}}}function zv(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let Vv=0;function Hv(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Gv(n){const t=new kv,e=zv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new I);const s=new I,r=new le,a=new le;function o(l){let u=0,h=0,d=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,b=0,S=0,x=0,D=0,R=0,P=0;l.sort(Hv);for(let M=0,_=l.length;M<_;M++){const T=l[M],O=T.color,C=T.intensity,U=T.distance,z=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)u+=O.r*C,h+=O.g*C,d+=O.b*C;else if(T.isLightProbe){for(let F=0;F<9;F++)i.probe[F].addScaledVector(T.sh.coefficients[F],C);P++}else if(T.isDirectionalLight){const F=t.get(T);if(F.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const $=T.shadow,V=e.get(T);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,i.directionalShadow[f]=V,i.directionalShadowMap[f]=z,i.directionalShadowMatrix[f]=T.shadow.matrix,b++}i.directional[f]=F,f++}else if(T.isSpotLight){const F=t.get(T);F.position.setFromMatrixPosition(T.matrixWorld),F.color.copy(O).multiplyScalar(C),F.distance=U,F.coneCos=Math.cos(T.angle),F.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),F.decay=T.decay,i.spot[v]=F;const $=T.shadow;if(T.map&&(i.spotLightMap[D]=T.map,D++,$.updateMatrices(T),T.castShadow&&R++),i.spotLightMatrix[v]=$.matrix,T.castShadow){const V=e.get(T);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,i.spotShadow[v]=V,i.spotShadowMap[v]=z,x++}v++}else if(T.isRectAreaLight){const F=t.get(T);F.color.copy(O).multiplyScalar(C),F.halfWidth.set(T.width*.5,0,0),F.halfHeight.set(0,T.height*.5,0),i.rectArea[m]=F,m++}else if(T.isPointLight){const F=t.get(T);if(F.color.copy(T.color).multiplyScalar(T.intensity),F.distance=T.distance,F.decay=T.decay,T.castShadow){const $=T.shadow,V=e.get(T);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,V.shadowCameraNear=$.camera.near,V.shadowCameraFar=$.camera.far,i.pointShadow[g]=V,i.pointShadowMap[g]=z,i.pointShadowMatrix[g]=T.shadow.matrix,S++}i.point[g]=F,g++}else if(T.isHemisphereLight){const F=t.get(T);F.skyColor.copy(T.color).multiplyScalar(C),F.groundColor.copy(T.groundColor).multiplyScalar(C),i.hemi[p]=F,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ht.LTC_FLOAT_1,i.rectAreaLTC2=ht.LTC_FLOAT_2):(i.rectAreaLTC1=ht.LTC_HALF_1,i.rectAreaLTC2=ht.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const A=i.hash;(A.directionalLength!==f||A.pointLength!==g||A.spotLength!==v||A.rectAreaLength!==m||A.hemiLength!==p||A.numDirectionalShadows!==b||A.numPointShadows!==S||A.numSpotShadows!==x||A.numSpotMaps!==D||A.numLightProbes!==P)&&(i.directional.length=f,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=x+D-R,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=P,A.directionalLength=f,A.pointLength=g,A.spotLength=v,A.rectAreaLength=m,A.hemiLength=p,A.numDirectionalShadows=b,A.numPointShadows=S,A.numSpotShadows=x,A.numSpotMaps=D,A.numLightProbes=P,i.version=Vv++)}function c(l,u){let h=0,d=0,f=0,g=0,v=0;const m=u.matrixWorldInverse;for(let p=0,b=l.length;p<b;p++){const S=l[p];if(S.isDirectionalLight){const x=i.directional[h];x.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),h++}else if(S.isSpotLight){const x=i.spot[f];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(S.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),a.identity(),r.copy(S.matrixWorld),r.premultiply(m),a.extractRotation(r),x.halfWidth.set(S.width*.5,0,0),x.halfHeight.set(0,S.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(S.isPointLight){const x=i.point[d];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){const x=i.hemi[v];x.direction.setFromMatrixPosition(S.matrixWorld),x.direction.transformDirection(m),v++}}}return{setup:o,setupView:c,state:i}}function Mu(n){const t=new Gv(n),e=[],i=[];function s(u){l.camera=u,e.length=0,i.length=0}function r(u){e.push(u)}function a(u){i.push(u)}function o(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function Wv(n){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Mu(n),t.set(s,[o])):r>=a.length?(o=new Mu(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}class $v extends os{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=wf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Xv extends os{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const qv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Yv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Zv(n,t,e){let i=new Yc;const s=new ot,r=new ot,a=new ve,o=new $v({depthPacking:Tf}),c=new Xv,l={},u=e.maxTextureSize,h={[Ni]:un,[un]:Ni,[mn]:mn},d=new Oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:qv,fragmentShader:Yv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Pe;g.setAttribute("position",new _n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new $t(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dh;let p=this.type;this.render=function(R,P,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const M=n.getRenderTarget(),_=n.getActiveCubeFace(),T=n.getActiveMipmapLevel(),O=n.state;O.setBlending(Pi),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const C=p!==ai&&this.type===ai,U=p===ai&&this.type!==ai;for(let z=0,F=R.length;z<F;z++){const $=R[z],V=$.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const K=V.getFrameExtents();if(s.multiply(K),r.copy(V.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/K.x),s.x=r.x*K.x,V.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/K.y),s.y=r.y*K.y,V.mapSize.y=r.y)),V.map===null||C===!0||U===!0){const mt=this.type!==ai?{minFilter:vn,magFilter:vn}:{};V.map!==null&&V.map.dispose(),V.map=new ns(s.x,s.y,mt),V.map.texture.name=$.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const it=V.getViewportCount();for(let mt=0;mt<it;mt++){const Ft=V.getViewport(mt);a.set(r.x*Ft.x,r.y*Ft.y,r.x*Ft.z,r.y*Ft.w),O.viewport(a),V.updateMatrices($,mt),i=V.getFrustum(),x(P,A,V.camera,$,this.type)}V.isPointLightShadow!==!0&&this.type===ai&&b(V,A),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(M,_,T)};function b(R,P){const A=t.update(v);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new ns(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(P,null,A,d,v,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(P,null,A,f,v,null)}function S(R,P,A,M){let _=null;const T=A.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(T!==void 0)_=T;else if(_=A.isPointLight===!0?c:o,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const O=_.uuid,C=P.uuid;let U=l[O];U===void 0&&(U={},l[O]=U);let z=U[C];z===void 0&&(z=_.clone(),U[C]=z,P.addEventListener("dispose",D)),_=z}if(_.visible=P.visible,_.wireframe=P.wireframe,M===ai?_.side=P.shadowSide!==null?P.shadowSide:P.side:_.side=P.shadowSide!==null?P.shadowSide:h[P.side],_.alphaMap=P.alphaMap,_.alphaTest=P.alphaTest,_.map=P.map,_.clipShadows=P.clipShadows,_.clippingPlanes=P.clippingPlanes,_.clipIntersection=P.clipIntersection,_.displacementMap=P.displacementMap,_.displacementScale=P.displacementScale,_.displacementBias=P.displacementBias,_.wireframeLinewidth=P.wireframeLinewidth,_.linewidth=P.linewidth,A.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const O=n.properties.get(_);O.light=A}return _}function x(R,P,A,M,_){if(R.visible===!1)return;if(R.layers.test(P.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&_===ai)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,R.matrixWorld);const C=t.update(R),U=R.material;if(Array.isArray(U)){const z=C.groups;for(let F=0,$=z.length;F<$;F++){const V=z[F],K=U[V.materialIndex];if(K&&K.visible){const it=S(R,K,M,_);R.onBeforeShadow(n,R,P,A,C,it,V),n.renderBufferDirect(A,null,C,it,R,V),R.onAfterShadow(n,R,P,A,C,it,V)}}}else if(U.visible){const z=S(R,U,M,_);R.onBeforeShadow(n,R,P,A,C,z,null),n.renderBufferDirect(A,null,C,z,R,null),R.onAfterShadow(n,R,P,A,C,z,null)}}const O=R.children;for(let C=0,U=O.length;C<U;C++)x(O[C],P,A,M,_)}function D(R){R.target.removeEventListener("dispose",D);for(const A in l){const M=l[A],_=R.target.uuid;_ in M&&(M[_].dispose(),delete M[_])}}}const jv={[zo]:Vo,[Ho]:$o,[Go]:Xo,[zs]:Wo,[Vo]:zo,[$o]:Ho,[Xo]:Go,[Wo]:zs};function Jv(n,t){function e(){let N=!1;const pt=new ve;let X=null;const j=new ve(0,0,0,0);return{setMask:function(_t){X!==_t&&!N&&(n.colorMask(_t,_t,_t,_t),X=_t)},setLocked:function(_t){N=_t},setClear:function(_t,gt,Xt,Ae,$e){$e===!0&&(_t*=Ae,gt*=Ae,Xt*=Ae),pt.set(_t,gt,Xt,Ae),j.equals(pt)===!1&&(n.clearColor(_t,gt,Xt,Ae),j.copy(pt))},reset:function(){N=!1,X=null,j.set(-1,0,0,0)}}}function i(){let N=!1,pt=!1,X=null,j=null,_t=null;return{setReversed:function(gt){if(pt!==gt){const Xt=t.get("EXT_clip_control");pt?Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.ZERO_TO_ONE_EXT):Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.NEGATIVE_ONE_TO_ONE_EXT);const Ae=_t;_t=null,this.setClear(Ae)}pt=gt},getReversed:function(){return pt},setTest:function(gt){gt?lt(n.DEPTH_TEST):Lt(n.DEPTH_TEST)},setMask:function(gt){X!==gt&&!N&&(n.depthMask(gt),X=gt)},setFunc:function(gt){if(pt&&(gt=jv[gt]),j!==gt){switch(gt){case zo:n.depthFunc(n.NEVER);break;case Vo:n.depthFunc(n.ALWAYS);break;case Ho:n.depthFunc(n.LESS);break;case zs:n.depthFunc(n.LEQUAL);break;case Go:n.depthFunc(n.EQUAL);break;case Wo:n.depthFunc(n.GEQUAL);break;case $o:n.depthFunc(n.GREATER);break;case Xo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}j=gt}},setLocked:function(gt){N=gt},setClear:function(gt){_t!==gt&&(pt&&(gt=1-gt),n.clearDepth(gt),_t=gt)},reset:function(){N=!1,X=null,j=null,_t=null,pt=!1}}}function s(){let N=!1,pt=null,X=null,j=null,_t=null,gt=null,Xt=null,Ae=null,$e=null;return{setTest:function(pe){N||(pe?lt(n.STENCIL_TEST):Lt(n.STENCIL_TEST))},setMask:function(pe){pt!==pe&&!N&&(n.stencilMask(pe),pt=pe)},setFunc:function(pe,Pn,Qn){(X!==pe||j!==Pn||_t!==Qn)&&(n.stencilFunc(pe,Pn,Qn),X=pe,j=Pn,_t=Qn)},setOp:function(pe,Pn,Qn){(gt!==pe||Xt!==Pn||Ae!==Qn)&&(n.stencilOp(pe,Pn,Qn),gt=pe,Xt=Pn,Ae=Qn)},setLocked:function(pe){N=pe},setClear:function(pe){$e!==pe&&(n.clearStencil(pe),$e=pe)},reset:function(){N=!1,pt=null,X=null,j=null,_t=null,gt=null,Xt=null,Ae=null,$e=null}}}const r=new e,a=new i,o=new s,c=new WeakMap,l=new WeakMap;let u={},h={},d=new WeakMap,f=[],g=null,v=!1,m=null,p=null,b=null,S=null,x=null,D=null,R=null,P=new Kt(0,0,0),A=0,M=!1,_=null,T=null,O=null,C=null,U=null;const z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,$=0;const V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(V)[1]),F=$>=1):V.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),F=$>=2);let K=null,it={};const mt=n.getParameter(n.SCISSOR_BOX),Ft=n.getParameter(n.VIEWPORT),Qt=new ve().fromArray(mt),Z=new ve().fromArray(Ft);function rt(N,pt,X,j){const _t=new Uint8Array(4),gt=n.createTexture();n.bindTexture(N,gt),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Xt=0;Xt<X;Xt++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(pt,0,n.RGBA,1,1,j,0,n.RGBA,n.UNSIGNED_BYTE,_t):n.texImage2D(pt+Xt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,_t);return gt}const Et={};Et[n.TEXTURE_2D]=rt(n.TEXTURE_2D,n.TEXTURE_2D,1),Et[n.TEXTURE_CUBE_MAP]=rt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Et[n.TEXTURE_2D_ARRAY]=rt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Et[n.TEXTURE_3D]=rt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),lt(n.DEPTH_TEST),a.setFunc(zs),et(!1),Mt(wl),lt(n.CULL_FACE),L(Pi);function lt(N){u[N]!==!0&&(n.enable(N),u[N]=!0)}function Lt(N){u[N]!==!1&&(n.disable(N),u[N]=!1)}function Vt(N,pt){return h[N]!==pt?(n.bindFramebuffer(N,pt),h[N]=pt,N===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=pt),N===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=pt),!0):!1}function Ot(N,pt){let X=f,j=!1;if(N){X=d.get(pt),X===void 0&&(X=[],d.set(pt,X));const _t=N.textures;if(X.length!==_t.length||X[0]!==n.COLOR_ATTACHMENT0){for(let gt=0,Xt=_t.length;gt<Xt;gt++)X[gt]=n.COLOR_ATTACHMENT0+gt;X.length=_t.length,j=!0}}else X[0]!==n.BACK&&(X[0]=n.BACK,j=!0);j&&n.drawBuffers(X)}function ie(N){return g!==N?(n.useProgram(N),g=N,!0):!1}const J={[ji]:n.FUNC_ADD,[Kd]:n.FUNC_SUBTRACT,[Qd]:n.FUNC_REVERSE_SUBTRACT};J[tf]=n.MIN,J[ef]=n.MAX;const st={[nf]:n.ZERO,[sf]:n.ONE,[rf]:n.SRC_COLOR,[Bo]:n.SRC_ALPHA,[hf]:n.SRC_ALPHA_SATURATE,[lf]:n.DST_COLOR,[of]:n.DST_ALPHA,[af]:n.ONE_MINUS_SRC_COLOR,[ko]:n.ONE_MINUS_SRC_ALPHA,[uf]:n.ONE_MINUS_DST_COLOR,[cf]:n.ONE_MINUS_DST_ALPHA,[df]:n.CONSTANT_COLOR,[ff]:n.ONE_MINUS_CONSTANT_COLOR,[pf]:n.CONSTANT_ALPHA,[mf]:n.ONE_MINUS_CONSTANT_ALPHA};function L(N,pt,X,j,_t,gt,Xt,Ae,$e,pe){if(N===Pi){v===!0&&(Lt(n.BLEND),v=!1);return}if(v===!1&&(lt(n.BLEND),v=!0),N!==Jd){if(N!==m||pe!==M){if((p!==ji||x!==ji)&&(n.blendEquation(n.FUNC_ADD),p=ji,x=ji),pe)switch(N){case Ii:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Wn:n.blendFunc(n.ONE,n.ONE);break;case Tl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Al:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Ii:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Wn:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Tl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Al:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}b=null,S=null,D=null,R=null,P.set(0,0,0),A=0,m=N,M=pe}return}_t=_t||pt,gt=gt||X,Xt=Xt||j,(pt!==p||_t!==x)&&(n.blendEquationSeparate(J[pt],J[_t]),p=pt,x=_t),(X!==b||j!==S||gt!==D||Xt!==R)&&(n.blendFuncSeparate(st[X],st[j],st[gt],st[Xt]),b=X,S=j,D=gt,R=Xt),(Ae.equals(P)===!1||$e!==A)&&(n.blendColor(Ae.r,Ae.g,Ae.b,$e),P.copy(Ae),A=$e),m=N,M=!1}function Pt(N,pt){N.side===mn?Lt(n.CULL_FACE):lt(n.CULL_FACE);let X=N.side===un;pt&&(X=!X),et(X),N.blending===Ii&&N.transparent===!1?L(Pi):L(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);const j=N.stencilWrite;o.setTest(j),j&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Dt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?lt(n.SAMPLE_ALPHA_TO_COVERAGE):Lt(n.SAMPLE_ALPHA_TO_COVERAGE)}function et(N){_!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),_=N)}function Mt(N){N!==Yd?(lt(n.CULL_FACE),N!==T&&(N===wl?n.cullFace(n.BACK):N===Zd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Lt(n.CULL_FACE),T=N}function ut(N){N!==O&&(F&&n.lineWidth(N),O=N)}function Dt(N,pt,X){N?(lt(n.POLYGON_OFFSET_FILL),(C!==pt||U!==X)&&(n.polygonOffset(pt,X),C=pt,U=X)):Lt(n.POLYGON_OFFSET_FILL)}function xt(N){N?lt(n.SCISSOR_TEST):Lt(n.SCISSOR_TEST)}function w(N){N===void 0&&(N=n.TEXTURE0+z-1),K!==N&&(n.activeTexture(N),K=N)}function y(N,pt,X){X===void 0&&(K===null?X=n.TEXTURE0+z-1:X=K);let j=it[X];j===void 0&&(j={type:void 0,texture:void 0},it[X]=j),(j.type!==N||j.texture!==pt)&&(K!==X&&(n.activeTexture(X),K=X),n.bindTexture(N,pt||Et[N]),j.type=N,j.texture=pt)}function H(){const N=it[K];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function q(){try{n.compressedTexImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Q(){try{n.compressedTexImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Y(){try{n.texSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function wt(){try{n.texSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function dt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function yt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Jt(){try{n.texStorage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function nt(){try{n.texStorage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function St(){try{n.texImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ut(){try{n.texImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function kt(N){Qt.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),Qt.copy(N))}function bt(N){Z.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),Z.copy(N))}function te(N,pt){let X=l.get(pt);X===void 0&&(X=new WeakMap,l.set(pt,X));let j=X.get(N);j===void 0&&(j=n.getUniformBlockIndex(pt,N.name),X.set(N,j))}function Zt(N,pt){const j=l.get(pt).get(N);c.get(pt)!==j&&(n.uniformBlockBinding(pt,j,N.__bindingPointIndex),c.set(pt,j))}function _e(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},K=null,it={},h={},d=new WeakMap,f=[],g=null,v=!1,m=null,p=null,b=null,S=null,x=null,D=null,R=null,P=new Kt(0,0,0),A=0,M=!1,_=null,T=null,O=null,C=null,U=null,Qt.set(0,0,n.canvas.width,n.canvas.height),Z.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:lt,disable:Lt,bindFramebuffer:Vt,drawBuffers:Ot,useProgram:ie,setBlending:L,setMaterial:Pt,setFlipSided:et,setCullFace:Mt,setLineWidth:ut,setPolygonOffset:Dt,setScissorTest:xt,activeTexture:w,bindTexture:y,unbindTexture:H,compressedTexImage2D:q,compressedTexImage3D:Q,texImage2D:St,texImage3D:Ut,updateUBOMapping:te,uniformBlockBinding:Zt,texStorage2D:Jt,texStorage3D:nt,texSubImage2D:Y,texSubImage3D:wt,compressedTexSubImage2D:dt,compressedTexSubImage3D:yt,scissor:kt,viewport:bt,reset:_e}}function Su(n,t,e,i){const s=Kv(i);switch(e){case xh:return n*t;case Mh:return n*t;case Sh:return n*t*2;case Hc:return n*t/s.components*s.byteLength;case Gc:return n*t/s.components*s.byteLength;case bh:return n*t*2/s.components*s.byteLength;case Wc:return n*t*2/s.components*s.byteLength;case yh:return n*t*3/s.components*s.byteLength;case Fn:return n*t*4/s.components*s.byteLength;case $c:return n*t*4/s.components*s.byteLength;case _a:case xa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ya:case Ma:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Jo:case Qo:return Math.max(n,16)*Math.max(t,8)/4;case jo:case Ko:return Math.max(n,8)*Math.max(t,8)/2;case tc:case ec:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case nc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ic:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case sc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case rc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case ac:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case oc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case cc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case lc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case uc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case hc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case dc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case fc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case pc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case mc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case gc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Sa:case vc:case _c:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Eh:case xc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case yc:case Mc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Kv(n){switch(n){case pi:case gh:return{byteLength:1,components:1};case Tr:case vh:case Fr:return{byteLength:2,components:1};case zc:case Vc:return{byteLength:2,components:4};case es:case kc:case Xn:return{byteLength:4,components:1};case _h:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Qv(n,t,e,i,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ot,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,y){return f?new OffscreenCanvas(w,y):Ua("canvas")}function v(w,y,H){let q=1;const Q=xt(w);if((Q.width>H||Q.height>H)&&(q=H/Math.max(Q.width,Q.height)),q<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const Y=Math.floor(q*Q.width),wt=Math.floor(q*Q.height);h===void 0&&(h=g(Y,wt));const dt=y?g(Y,wt):h;return dt.width=Y,dt.height=wt,dt.getContext("2d").drawImage(w,0,0,Y,wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+Y+"x"+wt+")."),dt}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),w;return w}function m(w){return w.generateMipmaps}function p(w){n.generateMipmap(w)}function b(w){return w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?n.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(w,y,H,q,Q=!1){if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let Y=y;if(y===n.RED&&(H===n.FLOAT&&(Y=n.R32F),H===n.HALF_FLOAT&&(Y=n.R16F),H===n.UNSIGNED_BYTE&&(Y=n.R8)),y===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&(Y=n.R8UI),H===n.UNSIGNED_SHORT&&(Y=n.R16UI),H===n.UNSIGNED_INT&&(Y=n.R32UI),H===n.BYTE&&(Y=n.R8I),H===n.SHORT&&(Y=n.R16I),H===n.INT&&(Y=n.R32I)),y===n.RG&&(H===n.FLOAT&&(Y=n.RG32F),H===n.HALF_FLOAT&&(Y=n.RG16F),H===n.UNSIGNED_BYTE&&(Y=n.RG8)),y===n.RG_INTEGER&&(H===n.UNSIGNED_BYTE&&(Y=n.RG8UI),H===n.UNSIGNED_SHORT&&(Y=n.RG16UI),H===n.UNSIGNED_INT&&(Y=n.RG32UI),H===n.BYTE&&(Y=n.RG8I),H===n.SHORT&&(Y=n.RG16I),H===n.INT&&(Y=n.RG32I)),y===n.RGB_INTEGER&&(H===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),H===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),H===n.UNSIGNED_INT&&(Y=n.RGB32UI),H===n.BYTE&&(Y=n.RGB8I),H===n.SHORT&&(Y=n.RGB16I),H===n.INT&&(Y=n.RGB32I)),y===n.RGBA_INTEGER&&(H===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),H===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),H===n.UNSIGNED_INT&&(Y=n.RGBA32UI),H===n.BYTE&&(Y=n.RGBA8I),H===n.SHORT&&(Y=n.RGBA16I),H===n.INT&&(Y=n.RGBA32I)),y===n.RGB&&H===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),y===n.RGBA){const wt=Q?Wa:re.getTransfer(q);H===n.FLOAT&&(Y=n.RGBA32F),H===n.HALF_FLOAT&&(Y=n.RGBA16F),H===n.UNSIGNED_BYTE&&(Y=wt===ge?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function x(w,y){let H;return w?y===null||y===es||y===Gs?H=n.DEPTH24_STENCIL8:y===Xn?H=n.DEPTH32F_STENCIL8:y===Tr&&(H=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===es||y===Gs?H=n.DEPTH_COMPONENT24:y===Xn?H=n.DEPTH_COMPONENT32F:y===Tr&&(H=n.DEPTH_COMPONENT16),H}function D(w,y){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==vn&&w.minFilter!==$n?Math.log2(Math.max(y.width,y.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?y.mipmaps.length:1}function R(w){const y=w.target;y.removeEventListener("dispose",R),A(y),y.isVideoTexture&&u.delete(y)}function P(w){const y=w.target;y.removeEventListener("dispose",P),_(y)}function A(w){const y=i.get(w);if(y.__webglInit===void 0)return;const H=w.source,q=d.get(H);if(q){const Q=q[y.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&M(w),Object.keys(q).length===0&&d.delete(H)}i.remove(w)}function M(w){const y=i.get(w);n.deleteTexture(y.__webglTexture);const H=w.source,q=d.get(H);delete q[y.__cacheKey],a.memory.textures--}function _(w){const y=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(y.__webglFramebuffer[q]))for(let Q=0;Q<y.__webglFramebuffer[q].length;Q++)n.deleteFramebuffer(y.__webglFramebuffer[q][Q]);else n.deleteFramebuffer(y.__webglFramebuffer[q]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[q])}else{if(Array.isArray(y.__webglFramebuffer))for(let q=0;q<y.__webglFramebuffer.length;q++)n.deleteFramebuffer(y.__webglFramebuffer[q]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let q=0;q<y.__webglColorRenderbuffer.length;q++)y.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[q]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const H=w.textures;for(let q=0,Q=H.length;q<Q;q++){const Y=i.get(H[q]);Y.__webglTexture&&(n.deleteTexture(Y.__webglTexture),a.memory.textures--),i.remove(H[q])}i.remove(w)}let T=0;function O(){T=0}function C(){const w=T;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),T+=1,w}function U(w){const y=[];return y.push(w.wrapS),y.push(w.wrapT),y.push(w.wrapR||0),y.push(w.magFilter),y.push(w.minFilter),y.push(w.anisotropy),y.push(w.internalFormat),y.push(w.format),y.push(w.type),y.push(w.generateMipmaps),y.push(w.premultiplyAlpha),y.push(w.flipY),y.push(w.unpackAlignment),y.push(w.colorSpace),y.join()}function z(w,y){const H=i.get(w);if(w.isVideoTexture&&ut(w),w.isRenderTargetTexture===!1&&w.version>0&&H.__version!==w.version){const q=w.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(H,w,y);return}}e.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+y)}function F(w,y){const H=i.get(w);if(w.version>0&&H.__version!==w.version){Z(H,w,y);return}e.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+y)}function $(w,y){const H=i.get(w);if(w.version>0&&H.__version!==w.version){Z(H,w,y);return}e.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+y)}function V(w,y){const H=i.get(w);if(w.version>0&&H.__version!==w.version){rt(H,w,y);return}e.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+y)}const K={[La]:n.REPEAT,[Ki]:n.CLAMP_TO_EDGE,[Zo]:n.MIRRORED_REPEAT},it={[vn]:n.NEAREST,[Ef]:n.NEAREST_MIPMAP_NEAREST,[Hr]:n.NEAREST_MIPMAP_LINEAR,[$n]:n.LINEAR,[Ka]:n.LINEAR_MIPMAP_NEAREST,[Qi]:n.LINEAR_MIPMAP_LINEAR},mt={[Rf]:n.NEVER,[Uf]:n.ALWAYS,[Cf]:n.LESS,[Th]:n.LEQUAL,[Pf]:n.EQUAL,[Df]:n.GEQUAL,[If]:n.GREATER,[Lf]:n.NOTEQUAL};function Ft(w,y){if(y.type===Xn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===$n||y.magFilter===Ka||y.magFilter===Hr||y.magFilter===Qi||y.minFilter===$n||y.minFilter===Ka||y.minFilter===Hr||y.minFilter===Qi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,K[y.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,K[y.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,K[y.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,it[y.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,it[y.minFilter]),y.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,mt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===vn||y.minFilter!==Hr&&y.minFilter!==Qi||y.type===Xn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");n.texParameterf(w,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function Qt(w,y){let H=!1;w.__webglInit===void 0&&(w.__webglInit=!0,y.addEventListener("dispose",R));const q=y.source;let Q=d.get(q);Q===void 0&&(Q={},d.set(q,Q));const Y=U(y);if(Y!==w.__cacheKey){Q[Y]===void 0&&(Q[Y]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,H=!0),Q[Y].usedTimes++;const wt=Q[w.__cacheKey];wt!==void 0&&(Q[w.__cacheKey].usedTimes--,wt.usedTimes===0&&M(y)),w.__cacheKey=Y,w.__webglTexture=Q[Y].texture}return H}function Z(w,y,H){let q=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(q=n.TEXTURE_3D);const Q=Qt(w,y),Y=y.source;e.bindTexture(q,w.__webglTexture,n.TEXTURE0+H);const wt=i.get(Y);if(Y.version!==wt.__version||Q===!0){e.activeTexture(n.TEXTURE0+H);const dt=re.getPrimaries(re.workingColorSpace),yt=y.colorSpace===Ti?null:re.getPrimaries(y.colorSpace),Jt=y.colorSpace===Ti||dt===yt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt);let nt=v(y.image,!1,s.maxTextureSize);nt=Dt(y,nt);const St=r.convert(y.format,y.colorSpace),Ut=r.convert(y.type);let kt=S(y.internalFormat,St,Ut,y.colorSpace,y.isVideoTexture);Ft(q,y);let bt;const te=y.mipmaps,Zt=y.isVideoTexture!==!0,_e=wt.__version===void 0||Q===!0,N=Y.dataReady,pt=D(y,nt);if(y.isDepthTexture)kt=x(y.format===Ws,y.type),_e&&(Zt?e.texStorage2D(n.TEXTURE_2D,1,kt,nt.width,nt.height):e.texImage2D(n.TEXTURE_2D,0,kt,nt.width,nt.height,0,St,Ut,null));else if(y.isDataTexture)if(te.length>0){Zt&&_e&&e.texStorage2D(n.TEXTURE_2D,pt,kt,te[0].width,te[0].height);for(let X=0,j=te.length;X<j;X++)bt=te[X],Zt?N&&e.texSubImage2D(n.TEXTURE_2D,X,0,0,bt.width,bt.height,St,Ut,bt.data):e.texImage2D(n.TEXTURE_2D,X,kt,bt.width,bt.height,0,St,Ut,bt.data);y.generateMipmaps=!1}else Zt?(_e&&e.texStorage2D(n.TEXTURE_2D,pt,kt,nt.width,nt.height),N&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,nt.width,nt.height,St,Ut,nt.data)):e.texImage2D(n.TEXTURE_2D,0,kt,nt.width,nt.height,0,St,Ut,nt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Zt&&_e&&e.texStorage3D(n.TEXTURE_2D_ARRAY,pt,kt,te[0].width,te[0].height,nt.depth);for(let X=0,j=te.length;X<j;X++)if(bt=te[X],y.format!==Fn)if(St!==null)if(Zt){if(N)if(y.layerUpdates.size>0){const _t=Su(bt.width,bt.height,y.format,y.type);for(const gt of y.layerUpdates){const Xt=bt.data.subarray(gt*_t/bt.data.BYTES_PER_ELEMENT,(gt+1)*_t/bt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,gt,bt.width,bt.height,1,St,Xt)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,bt.width,bt.height,nt.depth,St,bt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,X,kt,bt.width,bt.height,nt.depth,0,bt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Zt?N&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,bt.width,bt.height,nt.depth,St,Ut,bt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,X,kt,bt.width,bt.height,nt.depth,0,St,Ut,bt.data)}else{Zt&&_e&&e.texStorage2D(n.TEXTURE_2D,pt,kt,te[0].width,te[0].height);for(let X=0,j=te.length;X<j;X++)bt=te[X],y.format!==Fn?St!==null?Zt?N&&e.compressedTexSubImage2D(n.TEXTURE_2D,X,0,0,bt.width,bt.height,St,bt.data):e.compressedTexImage2D(n.TEXTURE_2D,X,kt,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?N&&e.texSubImage2D(n.TEXTURE_2D,X,0,0,bt.width,bt.height,St,Ut,bt.data):e.texImage2D(n.TEXTURE_2D,X,kt,bt.width,bt.height,0,St,Ut,bt.data)}else if(y.isDataArrayTexture)if(Zt){if(_e&&e.texStorage3D(n.TEXTURE_2D_ARRAY,pt,kt,nt.width,nt.height,nt.depth),N)if(y.layerUpdates.size>0){const X=Su(nt.width,nt.height,y.format,y.type);for(const j of y.layerUpdates){const _t=nt.data.subarray(j*X/nt.data.BYTES_PER_ELEMENT,(j+1)*X/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,j,nt.width,nt.height,1,St,Ut,_t)}y.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,St,Ut,nt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,kt,nt.width,nt.height,nt.depth,0,St,Ut,nt.data);else if(y.isData3DTexture)Zt?(_e&&e.texStorage3D(n.TEXTURE_3D,pt,kt,nt.width,nt.height,nt.depth),N&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,St,Ut,nt.data)):e.texImage3D(n.TEXTURE_3D,0,kt,nt.width,nt.height,nt.depth,0,St,Ut,nt.data);else if(y.isFramebufferTexture){if(_e)if(Zt)e.texStorage2D(n.TEXTURE_2D,pt,kt,nt.width,nt.height);else{let X=nt.width,j=nt.height;for(let _t=0;_t<pt;_t++)e.texImage2D(n.TEXTURE_2D,_t,kt,X,j,0,St,Ut,null),X>>=1,j>>=1}}else if(te.length>0){if(Zt&&_e){const X=xt(te[0]);e.texStorage2D(n.TEXTURE_2D,pt,kt,X.width,X.height)}for(let X=0,j=te.length;X<j;X++)bt=te[X],Zt?N&&e.texSubImage2D(n.TEXTURE_2D,X,0,0,St,Ut,bt):e.texImage2D(n.TEXTURE_2D,X,kt,St,Ut,bt);y.generateMipmaps=!1}else if(Zt){if(_e){const X=xt(nt);e.texStorage2D(n.TEXTURE_2D,pt,kt,X.width,X.height)}N&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,St,Ut,nt)}else e.texImage2D(n.TEXTURE_2D,0,kt,St,Ut,nt);m(y)&&p(q),wt.__version=Y.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function rt(w,y,H){if(y.image.length!==6)return;const q=Qt(w,y),Q=y.source;e.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+H);const Y=i.get(Q);if(Q.version!==Y.__version||q===!0){e.activeTexture(n.TEXTURE0+H);const wt=re.getPrimaries(re.workingColorSpace),dt=y.colorSpace===Ti?null:re.getPrimaries(y.colorSpace),yt=y.colorSpace===Ti||wt===dt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);const Jt=y.isCompressedTexture||y.image[0].isCompressedTexture,nt=y.image[0]&&y.image[0].isDataTexture,St=[];for(let j=0;j<6;j++)!Jt&&!nt?St[j]=v(y.image[j],!0,s.maxCubemapSize):St[j]=nt?y.image[j].image:y.image[j],St[j]=Dt(y,St[j]);const Ut=St[0],kt=r.convert(y.format,y.colorSpace),bt=r.convert(y.type),te=S(y.internalFormat,kt,bt,y.colorSpace),Zt=y.isVideoTexture!==!0,_e=Y.__version===void 0||q===!0,N=Q.dataReady;let pt=D(y,Ut);Ft(n.TEXTURE_CUBE_MAP,y);let X;if(Jt){Zt&&_e&&e.texStorage2D(n.TEXTURE_CUBE_MAP,pt,te,Ut.width,Ut.height);for(let j=0;j<6;j++){X=St[j].mipmaps;for(let _t=0;_t<X.length;_t++){const gt=X[_t];y.format!==Fn?kt!==null?Zt?N&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,_t,0,0,gt.width,gt.height,kt,gt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,_t,te,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Zt?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,_t,0,0,gt.width,gt.height,kt,bt,gt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,_t,te,gt.width,gt.height,0,kt,bt,gt.data)}}}else{if(X=y.mipmaps,Zt&&_e){X.length>0&&pt++;const j=xt(St[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,pt,te,j.width,j.height)}for(let j=0;j<6;j++)if(nt){Zt?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,St[j].width,St[j].height,kt,bt,St[j].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,te,St[j].width,St[j].height,0,kt,bt,St[j].data);for(let _t=0;_t<X.length;_t++){const Xt=X[_t].image[j].image;Zt?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,_t+1,0,0,Xt.width,Xt.height,kt,bt,Xt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,_t+1,te,Xt.width,Xt.height,0,kt,bt,Xt.data)}}else{Zt?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,kt,bt,St[j]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,te,kt,bt,St[j]);for(let _t=0;_t<X.length;_t++){const gt=X[_t];Zt?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,_t+1,0,0,kt,bt,gt.image[j]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,_t+1,te,kt,bt,gt.image[j])}}}m(y)&&p(n.TEXTURE_CUBE_MAP),Y.__version=Q.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function Et(w,y,H,q,Q,Y){const wt=r.convert(H.format,H.colorSpace),dt=r.convert(H.type),yt=S(H.internalFormat,wt,dt,H.colorSpace),Jt=i.get(y),nt=i.get(H);if(nt.__renderTarget=y,!Jt.__hasExternalTextures){const St=Math.max(1,y.width>>Y),Ut=Math.max(1,y.height>>Y);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?e.texImage3D(Q,Y,yt,St,Ut,y.depth,0,wt,dt,null):e.texImage2D(Q,Y,yt,St,Ut,0,wt,dt,null)}e.bindFramebuffer(n.FRAMEBUFFER,w),Mt(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,Q,nt.__webglTexture,0,et(y)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,Q,nt.__webglTexture,Y),e.bindFramebuffer(n.FRAMEBUFFER,null)}function lt(w,y,H){if(n.bindRenderbuffer(n.RENDERBUFFER,w),y.depthBuffer){const q=y.depthTexture,Q=q&&q.isDepthTexture?q.type:null,Y=x(y.stencilBuffer,Q),wt=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,dt=et(y);Mt(y)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,dt,Y,y.width,y.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,dt,Y,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,Y,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,wt,n.RENDERBUFFER,w)}else{const q=y.textures;for(let Q=0;Q<q.length;Q++){const Y=q[Q],wt=r.convert(Y.format,Y.colorSpace),dt=r.convert(Y.type),yt=S(Y.internalFormat,wt,dt,Y.colorSpace),Jt=et(y);H&&Mt(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Jt,yt,y.width,y.height):Mt(y)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Jt,yt,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,yt,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Lt(w,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,w),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=i.get(y.depthTexture);q.__renderTarget=y,(!q.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),z(y.depthTexture,0);const Q=q.__webglTexture,Y=et(y);if(y.depthTexture.format===Ds)Mt(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0);else if(y.depthTexture.format===Ws)Mt(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Vt(w){const y=i.get(w),H=w.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==w.depthTexture){const q=w.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),q){const Q=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,q.removeEventListener("dispose",Q)};q.addEventListener("dispose",Q),y.__depthDisposeCallback=Q}y.__boundDepthTexture=q}if(w.depthTexture&&!y.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Lt(y.__webglFramebuffer,w)}else if(H){y.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[q]),y.__webglDepthbuffer[q]===void 0)y.__webglDepthbuffer[q]=n.createRenderbuffer(),lt(y.__webglDepthbuffer[q],w,!1);else{const Q=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=y.__webglDepthbuffer[q];n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,Y)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),lt(y.__webglDepthbuffer,w,!1);else{const q=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,q,n.RENDERBUFFER,Q)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ot(w,y,H){const q=i.get(w);y!==void 0&&Et(q.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&Vt(w)}function ie(w){const y=w.texture,H=i.get(w),q=i.get(y);w.addEventListener("dispose",P);const Q=w.textures,Y=w.isWebGLCubeRenderTarget===!0,wt=Q.length>1;if(wt||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=y.version,a.memory.textures++),Y){H.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(y.mipmaps&&y.mipmaps.length>0){H.__webglFramebuffer[dt]=[];for(let yt=0;yt<y.mipmaps.length;yt++)H.__webglFramebuffer[dt][yt]=n.createFramebuffer()}else H.__webglFramebuffer[dt]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){H.__webglFramebuffer=[];for(let dt=0;dt<y.mipmaps.length;dt++)H.__webglFramebuffer[dt]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(wt)for(let dt=0,yt=Q.length;dt<yt;dt++){const Jt=i.get(Q[dt]);Jt.__webglTexture===void 0&&(Jt.__webglTexture=n.createTexture(),a.memory.textures++)}if(w.samples>0&&Mt(w)===!1){H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let dt=0;dt<Q.length;dt++){const yt=Q[dt];H.__webglColorRenderbuffer[dt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[dt]);const Jt=r.convert(yt.format,yt.colorSpace),nt=r.convert(yt.type),St=S(yt.internalFormat,Jt,nt,yt.colorSpace,w.isXRRenderTarget===!0),Ut=et(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ut,St,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.RENDERBUFFER,H.__webglColorRenderbuffer[dt])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),lt(H.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Y){e.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),Ft(n.TEXTURE_CUBE_MAP,y);for(let dt=0;dt<6;dt++)if(y.mipmaps&&y.mipmaps.length>0)for(let yt=0;yt<y.mipmaps.length;yt++)Et(H.__webglFramebuffer[dt][yt],w,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,yt);else Et(H.__webglFramebuffer[dt],w,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);m(y)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let dt=0,yt=Q.length;dt<yt;dt++){const Jt=Q[dt],nt=i.get(Jt);e.bindTexture(n.TEXTURE_2D,nt.__webglTexture),Ft(n.TEXTURE_2D,Jt),Et(H.__webglFramebuffer,w,Jt,n.COLOR_ATTACHMENT0+dt,n.TEXTURE_2D,0),m(Jt)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let dt=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(dt=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(dt,q.__webglTexture),Ft(dt,y),y.mipmaps&&y.mipmaps.length>0)for(let yt=0;yt<y.mipmaps.length;yt++)Et(H.__webglFramebuffer[yt],w,y,n.COLOR_ATTACHMENT0,dt,yt);else Et(H.__webglFramebuffer,w,y,n.COLOR_ATTACHMENT0,dt,0);m(y)&&p(dt),e.unbindTexture()}w.depthBuffer&&Vt(w)}function J(w){const y=w.textures;for(let H=0,q=y.length;H<q;H++){const Q=y[H];if(m(Q)){const Y=b(w),wt=i.get(Q).__webglTexture;e.bindTexture(Y,wt),p(Y),e.unbindTexture()}}}const st=[],L=[];function Pt(w){if(w.samples>0){if(Mt(w)===!1){const y=w.textures,H=w.width,q=w.height;let Q=n.COLOR_BUFFER_BIT;const Y=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,wt=i.get(w),dt=y.length>1;if(dt)for(let yt=0;yt<y.length;yt++)e.bindFramebuffer(n.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+yt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,wt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+yt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let yt=0;yt<y.length;yt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),dt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,wt.__webglColorRenderbuffer[yt]);const Jt=i.get(y[yt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Jt,0)}n.blitFramebuffer(0,0,H,q,0,0,H,q,Q,n.NEAREST),c===!0&&(st.length=0,L.length=0,st.push(n.COLOR_ATTACHMENT0+yt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(st.push(Y),L.push(Y),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,L)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,st))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),dt)for(let yt=0;yt<y.length;yt++){e.bindFramebuffer(n.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+yt,n.RENDERBUFFER,wt.__webglColorRenderbuffer[yt]);const Jt=i.get(y[yt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,wt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+yt,n.TEXTURE_2D,Jt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){const y=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function et(w){return Math.min(s.maxSamples,w.samples)}function Mt(w){const y=i.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ut(w){const y=a.render.frame;u.get(w)!==y&&(u.set(w,y),w.update())}function Dt(w,y){const H=w.colorSpace,q=w.format,Q=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||H!==qs&&H!==Ti&&(re.getTransfer(H)===ge?(q!==Fn||Q!==pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),y}function xt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=C,this.resetTextureUnits=O,this.setTexture2D=z,this.setTexture2DArray=F,this.setTexture3D=$,this.setTextureCube=V,this.rebindTextures=Ot,this.setupRenderTarget=ie,this.updateRenderTargetMipmap=J,this.updateMultisampleRenderTarget=Pt,this.setupDepthRenderbuffer=Vt,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=Mt}function t_(n,t){function e(i,s=Ti){let r;const a=re.getTransfer(s);if(i===pi)return n.UNSIGNED_BYTE;if(i===zc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Vc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===_h)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===gh)return n.BYTE;if(i===vh)return n.SHORT;if(i===Tr)return n.UNSIGNED_SHORT;if(i===kc)return n.INT;if(i===es)return n.UNSIGNED_INT;if(i===Xn)return n.FLOAT;if(i===Fr)return n.HALF_FLOAT;if(i===xh)return n.ALPHA;if(i===yh)return n.RGB;if(i===Fn)return n.RGBA;if(i===Mh)return n.LUMINANCE;if(i===Sh)return n.LUMINANCE_ALPHA;if(i===Ds)return n.DEPTH_COMPONENT;if(i===Ws)return n.DEPTH_STENCIL;if(i===Hc)return n.RED;if(i===Gc)return n.RED_INTEGER;if(i===bh)return n.RG;if(i===Wc)return n.RG_INTEGER;if(i===$c)return n.RGBA_INTEGER;if(i===_a||i===xa||i===ya||i===Ma)if(a===ge)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===_a)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===_a)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===xa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ya)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ma)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===jo||i===Jo||i===Ko||i===Qo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===jo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Jo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ko)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Qo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===tc||i===ec||i===nc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===tc||i===ec)return a===ge?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===nc)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ic||i===sc||i===rc||i===ac||i===oc||i===cc||i===lc||i===uc||i===hc||i===dc||i===fc||i===pc||i===mc||i===gc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ic)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===sc)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===rc)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ac)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===oc)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===cc)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===lc)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===uc)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===hc)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===dc)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===fc)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===pc)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===mc)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===gc)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Sa||i===vc||i===_c)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Sa)return a===ge?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===vc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===_c)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Eh||i===xc||i===yc||i===Mc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Sa)return r.COMPRESSED_RED_RGTC1_EXT;if(i===xc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===yc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Mc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Gs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class e_ extends An{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class we extends Ne{constructor(){super(),this.isGroup=!0,this.type="Group"}}const n_={type:"move"};class To{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new we,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new we,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new we,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,i),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(n_)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new we;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const i_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,s_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class r_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new Je,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Oi({vertexShader:i_,fragmentShader:s_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new $t(new Zs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class a_ extends Ys{constructor(t,e){super();const i=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,g=null;const v=new r_,m=e.getContextAttributes();let p=null,b=null;const S=[],x=[],D=new ot;let R=null;const P=new An;P.viewport=new ve;const A=new An;A.viewport=new ve;const M=[P,A],_=new e_;let T=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let rt=S[Z];return rt===void 0&&(rt=new To,S[Z]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function(Z){let rt=S[Z];return rt===void 0&&(rt=new To,S[Z]=rt),rt.getGripSpace()},this.getHand=function(Z){let rt=S[Z];return rt===void 0&&(rt=new To,S[Z]=rt),rt.getHandSpace()};function C(Z){const rt=x.indexOf(Z.inputSource);if(rt===-1)return;const Et=S[rt];Et!==void 0&&(Et.update(Z.inputSource,Z.frame,l||a),Et.dispatchEvent({type:Z.type,data:Z.inputSource}))}function U(){s.removeEventListener("select",C),s.removeEventListener("selectstart",C),s.removeEventListener("selectend",C),s.removeEventListener("squeeze",C),s.removeEventListener("squeezestart",C),s.removeEventListener("squeezeend",C),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",z);for(let Z=0;Z<S.length;Z++){const rt=x[Z];rt!==null&&(x[Z]=null,S[Z].disconnect(rt))}T=null,O=null,v.reset(),t.setRenderTarget(p),f=null,d=null,h=null,s=null,b=null,Qt.stop(),i.isPresenting=!1,t.setPixelRatio(R),t.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",C),s.addEventListener("selectstart",C),s.addEventListener("selectend",C),s.addEventListener("squeeze",C),s.addEventListener("squeezestart",C),s.addEventListener("squeezeend",C),s.addEventListener("end",U),s.addEventListener("inputsourceschange",z),m.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(D),s.renderState.layers===void 0){const rt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,rt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new ns(f.framebufferWidth,f.framebufferHeight,{format:Fn,type:pi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let rt=null,Et=null,lt=null;m.depth&&(lt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,rt=m.stencil?Ws:Ds,Et=m.stencil?Gs:es);const Lt={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:r};h=new XRWebGLBinding(s,e),d=h.createProjectionLayer(Lt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),b=new ns(d.textureWidth,d.textureHeight,{format:Fn,type:pi,depthTexture:new Fh(d.textureWidth,d.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Qt.setContext(s),Qt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function z(Z){for(let rt=0;rt<Z.removed.length;rt++){const Et=Z.removed[rt],lt=x.indexOf(Et);lt>=0&&(x[lt]=null,S[lt].disconnect(Et))}for(let rt=0;rt<Z.added.length;rt++){const Et=Z.added[rt];let lt=x.indexOf(Et);if(lt===-1){for(let Vt=0;Vt<S.length;Vt++)if(Vt>=x.length){x.push(Et),lt=Vt;break}else if(x[Vt]===null){x[Vt]=Et,lt=Vt;break}if(lt===-1)break}const Lt=S[lt];Lt&&Lt.connect(Et)}}const F=new I,$=new I;function V(Z,rt,Et){F.setFromMatrixPosition(rt.matrixWorld),$.setFromMatrixPosition(Et.matrixWorld);const lt=F.distanceTo($),Lt=rt.projectionMatrix.elements,Vt=Et.projectionMatrix.elements,Ot=Lt[14]/(Lt[10]-1),ie=Lt[14]/(Lt[10]+1),J=(Lt[9]+1)/Lt[5],st=(Lt[9]-1)/Lt[5],L=(Lt[8]-1)/Lt[0],Pt=(Vt[8]+1)/Vt[0],et=Ot*L,Mt=Ot*Pt,ut=lt/(-L+Pt),Dt=ut*-L;if(rt.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Dt),Z.translateZ(ut),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Lt[10]===-1)Z.projectionMatrix.copy(rt.projectionMatrix),Z.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{const xt=Ot+ut,w=ie+ut,y=et-Dt,H=Mt+(lt-Dt),q=J*ie/w*xt,Q=st*ie/w*xt;Z.projectionMatrix.makePerspective(y,H,q,Q,xt,w),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function K(Z,rt){rt===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(rt.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let rt=Z.near,Et=Z.far;v.texture!==null&&(v.depthNear>0&&(rt=v.depthNear),v.depthFar>0&&(Et=v.depthFar)),_.near=A.near=P.near=rt,_.far=A.far=P.far=Et,(T!==_.near||O!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),T=_.near,O=_.far),P.layers.mask=Z.layers.mask|2,A.layers.mask=Z.layers.mask|4,_.layers.mask=P.layers.mask|A.layers.mask;const lt=Z.parent,Lt=_.cameras;K(_,lt);for(let Vt=0;Vt<Lt.length;Vt++)K(Lt[Vt],lt);Lt.length===2?V(_,P,A):_.projectionMatrix.copy(P.projectionMatrix),it(Z,_,lt)};function it(Z,rt,Et){Et===null?Z.matrix.copy(rt.matrixWorld):(Z.matrix.copy(Et.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(rt.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(rt.projectionMatrix),Z.projectionMatrixInverse.copy(rt.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Ar*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(Z){c=Z,d!==null&&(d.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(_)};let mt=null;function Ft(Z,rt){if(u=rt.getViewerPose(l||a),g=rt,u!==null){const Et=u.views;f!==null&&(t.setRenderTargetFramebuffer(b,f.framebuffer),t.setRenderTarget(b));let lt=!1;Et.length!==_.cameras.length&&(_.cameras.length=0,lt=!0);for(let Vt=0;Vt<Et.length;Vt++){const Ot=Et[Vt];let ie=null;if(f!==null)ie=f.getViewport(Ot);else{const st=h.getViewSubImage(d,Ot);ie=st.viewport,Vt===0&&(t.setRenderTargetTextures(b,st.colorTexture,d.ignoreDepthValues?void 0:st.depthStencilTexture),t.setRenderTarget(b))}let J=M[Vt];J===void 0&&(J=new An,J.layers.enable(Vt),J.viewport=new ve,M[Vt]=J),J.matrix.fromArray(Ot.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(Ot.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(ie.x,ie.y,ie.width,ie.height),Vt===0&&(_.matrix.copy(J.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),lt===!0&&_.cameras.push(J)}const Lt=s.enabledFeatures;if(Lt&&Lt.includes("depth-sensing")){const Vt=h.getDepthInformation(Et[0]);Vt&&Vt.isValid&&Vt.texture&&v.init(t,Vt,s.renderState)}}for(let Et=0;Et<S.length;Et++){const lt=x[Et],Lt=S[Et];lt!==null&&Lt!==void 0&&Lt.update(lt,rt,l||a)}mt&&mt(Z,rt),rt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:rt}),g=null}const Qt=new Oh;Qt.setAnimationLoop(Ft),this.setAnimationLoop=function(Z){mt=Z},this.dispose=function(){}}}const Xi=new kn,o_=new le;function c_(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Dh(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,b,S,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,b,S):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===un&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===un&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const b=t.get(p),S=b.envMap,x=b.envMapRotation;S&&(m.envMap.value=S,Xi.copy(x),Xi.x*=-1,Xi.y*=-1,Xi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Xi.y*=-1,Xi.z*=-1),m.envMapRotation.value.setFromMatrix4(o_.makeRotationFromEuler(Xi)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,b,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=S*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===un&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const b=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function l_(n,t,e,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,S){const x=S.program;i.uniformBlockBinding(b,x)}function l(b,S){let x=s[b.id];x===void 0&&(g(b),x=u(b),s[b.id]=x,b.addEventListener("dispose",m));const D=S.program;i.updateUBOMapping(b,D);const R=t.render.frame;r[b.id]!==R&&(d(b),r[b.id]=R)}function u(b){const S=h();b.__bindingPointIndex=S;const x=n.createBuffer(),D=b.__size,R=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,D,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,x),x}function h(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const S=s[b.id],x=b.uniforms,D=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let R=0,P=x.length;R<P;R++){const A=Array.isArray(x[R])?x[R]:[x[R]];for(let M=0,_=A.length;M<_;M++){const T=A[M];if(f(T,R,M,D)===!0){const O=T.__offset,C=Array.isArray(T.value)?T.value:[T.value];let U=0;for(let z=0;z<C.length;z++){const F=C[z],$=v(F);typeof F=="number"||typeof F=="boolean"?(T.__data[0]=F,n.bufferSubData(n.UNIFORM_BUFFER,O+U,T.__data)):F.isMatrix3?(T.__data[0]=F.elements[0],T.__data[1]=F.elements[1],T.__data[2]=F.elements[2],T.__data[3]=0,T.__data[4]=F.elements[3],T.__data[5]=F.elements[4],T.__data[6]=F.elements[5],T.__data[7]=0,T.__data[8]=F.elements[6],T.__data[9]=F.elements[7],T.__data[10]=F.elements[8],T.__data[11]=0):(F.toArray(T.__data,U),U+=$.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,O,T.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(b,S,x,D){const R=b.value,P=S+"_"+x;if(D[P]===void 0)return typeof R=="number"||typeof R=="boolean"?D[P]=R:D[P]=R.clone(),!0;{const A=D[P];if(typeof R=="number"||typeof R=="boolean"){if(A!==R)return D[P]=R,!0}else if(A.equals(R)===!1)return A.copy(R),!0}return!1}function g(b){const S=b.uniforms;let x=0;const D=16;for(let P=0,A=S.length;P<A;P++){const M=Array.isArray(S[P])?S[P]:[S[P]];for(let _=0,T=M.length;_<T;_++){const O=M[_],C=Array.isArray(O.value)?O.value:[O.value];for(let U=0,z=C.length;U<z;U++){const F=C[U],$=v(F),V=x%D,K=V%$.boundary,it=V+K;x+=K,it!==0&&D-it<$.storage&&(x+=D-it),O.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=x,x+=$.storage}}}const R=x%D;return R>0&&(x+=D-R),b.__size=x,b.__cache={},this}function v(b){const S={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=48,S.storage=48):b.isMatrix4?(S.boundary=64,S.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),S}function m(b){const S=b.target;S.removeEventListener("dispose",m);const x=a.indexOf(S.__bindingPointIndex);a.splice(x,1),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function p(){for(const b in s)n.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:c,update:l,dispose:p}}class u_{constructor(t={}){const{canvas:e=Kf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const b=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=sn,this.toneMapping=Li,this.toneMappingExposure=1;const x=this;let D=!1,R=0,P=0,A=null,M=-1,_=null;const T=new ve,O=new ve;let C=null;const U=new Kt(0);let z=0,F=e.width,$=e.height,V=1,K=null,it=null;const mt=new ve(0,0,F,$),Ft=new ve(0,0,F,$);let Qt=!1;const Z=new Yc;let rt=!1,Et=!1;const lt=new le,Lt=new le,Vt=new I,Ot=new ve,ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let J=!1;function st(){return A===null?V:1}let L=i;function Pt(E,B){return e.getContext(E,B)}try{const E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Bc}`),e.addEventListener("webglcontextlost",j,!1),e.addEventListener("webglcontextrestored",_t,!1),e.addEventListener("webglcontextcreationerror",gt,!1),L===null){const B="webgl2";if(L=Pt(B,E),L===null)throw Pt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let et,Mt,ut,Dt,xt,w,y,H,q,Q,Y,wt,dt,yt,Jt,nt,St,Ut,kt,bt,te,Zt,_e,N;function pt(){et=new mg(L),et.init(),Zt=new t_(L,et),Mt=new lg(L,et,t,Zt),ut=new Jv(L,et),Mt.reverseDepthBuffer&&d&&ut.buffers.depth.setReversed(!0),Dt=new _g(L),xt=new Ov,w=new Qv(L,et,ut,xt,Mt,Zt,Dt),y=new hg(x),H=new pg(x),q=new wp(L),_e=new og(L,q),Q=new gg(L,q,Dt,_e),Y=new yg(L,Q,q,Dt),kt=new xg(L,Mt,w),nt=new ug(xt),wt=new Nv(x,y,H,et,Mt,_e,nt),dt=new c_(x,xt),yt=new Bv,Jt=new Wv(et),Ut=new ag(x,y,H,ut,Y,f,c),St=new Zv(x,Y,Mt),N=new l_(L,Dt,Mt,ut),bt=new cg(L,et,Dt),te=new vg(L,et,Dt),Dt.programs=wt.programs,x.capabilities=Mt,x.extensions=et,x.properties=xt,x.renderLists=yt,x.shadowMap=St,x.state=ut,x.info=Dt}pt();const X=new a_(x,L);this.xr=X,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const E=et.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=et.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(E){E!==void 0&&(V=E,this.setSize(F,$,!1))},this.getSize=function(E){return E.set(F,$)},this.setSize=function(E,B,G=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=E,$=B,e.width=Math.floor(E*V),e.height=Math.floor(B*V),G===!0&&(e.style.width=E+"px",e.style.height=B+"px"),this.setViewport(0,0,E,B)},this.getDrawingBufferSize=function(E){return E.set(F*V,$*V).floor()},this.setDrawingBufferSize=function(E,B,G){F=E,$=B,V=G,e.width=Math.floor(E*G),e.height=Math.floor(B*G),this.setViewport(0,0,E,B)},this.getCurrentViewport=function(E){return E.copy(T)},this.getViewport=function(E){return E.copy(mt)},this.setViewport=function(E,B,G,W){E.isVector4?mt.set(E.x,E.y,E.z,E.w):mt.set(E,B,G,W),ut.viewport(T.copy(mt).multiplyScalar(V).round())},this.getScissor=function(E){return E.copy(Ft)},this.setScissor=function(E,B,G,W){E.isVector4?Ft.set(E.x,E.y,E.z,E.w):Ft.set(E,B,G,W),ut.scissor(O.copy(Ft).multiplyScalar(V).round())},this.getScissorTest=function(){return Qt},this.setScissorTest=function(E){ut.setScissorTest(Qt=E)},this.setOpaqueSort=function(E){K=E},this.setTransparentSort=function(E){it=E},this.getClearColor=function(E){return E.copy(Ut.getClearColor())},this.setClearColor=function(){Ut.setClearColor.apply(Ut,arguments)},this.getClearAlpha=function(){return Ut.getClearAlpha()},this.setClearAlpha=function(){Ut.setClearAlpha.apply(Ut,arguments)},this.clear=function(E=!0,B=!0,G=!0){let W=0;if(E){let k=!1;if(A!==null){const at=A.texture.format;k=at===$c||at===Wc||at===Gc}if(k){const at=A.texture.type,vt=at===pi||at===es||at===Tr||at===Gs||at===zc||at===Vc,Tt=Ut.getClearColor(),At=Ut.getClearAlpha(),Ht=Tt.r,qt=Tt.g,Rt=Tt.b;vt?(g[0]=Ht,g[1]=qt,g[2]=Rt,g[3]=At,L.clearBufferuiv(L.COLOR,0,g)):(v[0]=Ht,v[1]=qt,v[2]=Rt,v[3]=At,L.clearBufferiv(L.COLOR,0,v))}else W|=L.COLOR_BUFFER_BIT}B&&(W|=L.DEPTH_BUFFER_BIT),G&&(W|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",j,!1),e.removeEventListener("webglcontextrestored",_t,!1),e.removeEventListener("webglcontextcreationerror",gt,!1),yt.dispose(),Jt.dispose(),xt.dispose(),y.dispose(),H.dispose(),Y.dispose(),_e.dispose(),N.dispose(),wt.dispose(),X.dispose(),X.removeEventListener("sessionstart",ll),X.removeEventListener("sessionend",ul),ki.stop()};function j(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function _t(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const E=Dt.autoReset,B=St.enabled,G=St.autoUpdate,W=St.needsUpdate,k=St.type;pt(),Dt.autoReset=E,St.enabled=B,St.autoUpdate=G,St.needsUpdate=W,St.type=k}function gt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Xt(E){const B=E.target;B.removeEventListener("dispose",Xt),Ae(B)}function Ae(E){$e(E),xt.remove(E)}function $e(E){const B=xt.get(E).programs;B!==void 0&&(B.forEach(function(G){wt.releaseProgram(G)}),E.isShaderMaterial&&wt.releaseShaderCache(E))}this.renderBufferDirect=function(E,B,G,W,k,at){B===null&&(B=ie);const vt=k.isMesh&&k.matrixWorld.determinant()<0,Tt=ud(E,B,G,W,k);ut.setMaterial(W,vt);let At=G.index,Ht=1;if(W.wireframe===!0){if(At=Q.getWireframeAttribute(G),At===void 0)return;Ht=2}const qt=G.drawRange,Rt=G.attributes.position;let oe=qt.start*Ht,xe=(qt.start+qt.count)*Ht;at!==null&&(oe=Math.max(oe,at.start*Ht),xe=Math.min(xe,(at.start+at.count)*Ht)),At!==null?(oe=Math.max(oe,0),xe=Math.min(xe,At.count)):Rt!=null&&(oe=Math.max(oe,0),xe=Math.min(xe,Rt.count));const Me=xe-oe;if(Me<0||Me===1/0)return;_e.setup(k,W,Tt,G,At);let on,ue=bt;if(At!==null&&(on=q.get(At),ue=te,ue.setIndex(on)),k.isMesh)W.wireframe===!0?(ut.setLineWidth(W.wireframeLinewidth*st()),ue.setMode(L.LINES)):ue.setMode(L.TRIANGLES);else if(k.isLine){let It=W.linewidth;It===void 0&&(It=1),ut.setLineWidth(It*st()),k.isLineSegments?ue.setMode(L.LINES):k.isLineLoop?ue.setMode(L.LINE_LOOP):ue.setMode(L.LINE_STRIP)}else k.isPoints?ue.setMode(L.POINTS):k.isSprite&&ue.setMode(L.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)ue.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))ue.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const It=k._multiDrawStarts,ti=k._multiDrawCounts,he=k._multiDrawCount,In=At?q.get(At).bytesPerElement:1,cs=xt.get(W).currentProgram.getUniforms();for(let dn=0;dn<he;dn++)cs.setValue(L,"_gl_DrawID",dn),ue.render(It[dn]/In,ti[dn])}else if(k.isInstancedMesh)ue.renderInstances(oe,Me,k.count);else if(G.isInstancedBufferGeometry){const It=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,ti=Math.min(G.instanceCount,It);ue.renderInstances(oe,Me,ti)}else ue.render(oe,Me)};function pe(E,B,G){E.transparent===!0&&E.side===mn&&E.forceSinglePass===!1?(E.side=un,E.needsUpdate=!0,kr(E,B,G),E.side=Ni,E.needsUpdate=!0,kr(E,B,G),E.side=mn):kr(E,B,G)}this.compile=function(E,B,G=null){G===null&&(G=E),p=Jt.get(G),p.init(B),S.push(p),G.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),E!==G&&E.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();const W=new Set;return E.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const at=k.material;if(at)if(Array.isArray(at))for(let vt=0;vt<at.length;vt++){const Tt=at[vt];pe(Tt,G,k),W.add(Tt)}else pe(at,G,k),W.add(at)}),S.pop(),p=null,W},this.compileAsync=function(E,B,G=null){const W=this.compile(E,B,G);return new Promise(k=>{function at(){if(W.forEach(function(vt){xt.get(vt).currentProgram.isReady()&&W.delete(vt)}),W.size===0){k(E);return}setTimeout(at,10)}et.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let Pn=null;function Qn(E){Pn&&Pn(E)}function ll(){ki.stop()}function ul(){ki.start()}const ki=new Oh;ki.setAnimationLoop(Qn),typeof self<"u"&&ki.setContext(self),this.setAnimationLoop=function(E){Pn=E,X.setAnimationLoop(E),E===null?ki.stop():ki.start()},X.addEventListener("sessionstart",ll),X.addEventListener("sessionend",ul),this.render=function(E,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(B),B=X.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,B,A),p=Jt.get(E,S.length),p.init(B),S.push(p),Lt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Z.setFromProjectionMatrix(Lt),Et=this.localClippingEnabled,rt=nt.init(this.clippingPlanes,Et),m=yt.get(E,b.length),m.init(),b.push(m),X.enabled===!0&&X.isPresenting===!0){const at=x.xr.getDepthSensingMesh();at!==null&&Ja(at,B,-1/0,x.sortObjects)}Ja(E,B,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(K,it),J=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,J&&Ut.addToRenderList(m,E),this.info.render.frame++,rt===!0&&nt.beginShadows();const G=p.state.shadowsArray;St.render(G,E,B),rt===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=m.opaque,k=m.transmissive;if(p.setupLights(),B.isArrayCamera){const at=B.cameras;if(k.length>0)for(let vt=0,Tt=at.length;vt<Tt;vt++){const At=at[vt];dl(W,k,E,At)}J&&Ut.render(E);for(let vt=0,Tt=at.length;vt<Tt;vt++){const At=at[vt];hl(m,E,At,At.viewport)}}else k.length>0&&dl(W,k,E,B),J&&Ut.render(E),hl(m,E,B);A!==null&&(w.updateMultisampleRenderTarget(A),w.updateRenderTargetMipmap(A)),E.isScene===!0&&E.onAfterRender(x,E,B),_e.resetDefaultState(),M=-1,_=null,S.pop(),S.length>0?(p=S[S.length-1],rt===!0&&nt.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function Ja(E,B,G,W){if(E.visible===!1)return;if(E.layers.test(B.layers)){if(E.isGroup)G=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(B);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Z.intersectsSprite(E)){W&&Ot.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Lt);const vt=Y.update(E),Tt=E.material;Tt.visible&&m.push(E,vt,Tt,G,Ot.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Z.intersectsObject(E))){const vt=Y.update(E),Tt=E.material;if(W&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ot.copy(E.boundingSphere.center)):(vt.boundingSphere===null&&vt.computeBoundingSphere(),Ot.copy(vt.boundingSphere.center)),Ot.applyMatrix4(E.matrixWorld).applyMatrix4(Lt)),Array.isArray(Tt)){const At=vt.groups;for(let Ht=0,qt=At.length;Ht<qt;Ht++){const Rt=At[Ht],oe=Tt[Rt.materialIndex];oe&&oe.visible&&m.push(E,vt,oe,G,Ot.z,Rt)}}else Tt.visible&&m.push(E,vt,Tt,G,Ot.z,null)}}const at=E.children;for(let vt=0,Tt=at.length;vt<Tt;vt++)Ja(at[vt],B,G,W)}function hl(E,B,G,W){const k=E.opaque,at=E.transmissive,vt=E.transparent;p.setupLightsView(G),rt===!0&&nt.setGlobalState(x.clippingPlanes,G),W&&ut.viewport(T.copy(W)),k.length>0&&Br(k,B,G),at.length>0&&Br(at,B,G),vt.length>0&&Br(vt,B,G),ut.buffers.depth.setTest(!0),ut.buffers.depth.setMask(!0),ut.buffers.color.setMask(!0),ut.setPolygonOffset(!1)}function dl(E,B,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[W.id]===void 0&&(p.state.transmissionRenderTarget[W.id]=new ns(1,1,{generateMipmaps:!0,type:et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float")?Fr:pi,minFilter:Qi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:re.workingColorSpace}));const at=p.state.transmissionRenderTarget[W.id],vt=W.viewport||T;at.setSize(vt.z,vt.w);const Tt=x.getRenderTarget();x.setRenderTarget(at),x.getClearColor(U),z=x.getClearAlpha(),z<1&&x.setClearColor(16777215,.5),x.clear(),J&&Ut.render(G);const At=x.toneMapping;x.toneMapping=Li;const Ht=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),p.setupLightsView(W),rt===!0&&nt.setGlobalState(x.clippingPlanes,W),Br(E,G,W),w.updateMultisampleRenderTarget(at),w.updateRenderTargetMipmap(at),et.has("WEBGL_multisampled_render_to_texture")===!1){let qt=!1;for(let Rt=0,oe=B.length;Rt<oe;Rt++){const xe=B[Rt],Me=xe.object,on=xe.geometry,ue=xe.material,It=xe.group;if(ue.side===mn&&Me.layers.test(W.layers)){const ti=ue.side;ue.side=un,ue.needsUpdate=!0,fl(Me,G,W,on,ue,It),ue.side=ti,ue.needsUpdate=!0,qt=!0}}qt===!0&&(w.updateMultisampleRenderTarget(at),w.updateRenderTargetMipmap(at))}x.setRenderTarget(Tt),x.setClearColor(U,z),Ht!==void 0&&(W.viewport=Ht),x.toneMapping=At}function Br(E,B,G){const W=B.isScene===!0?B.overrideMaterial:null;for(let k=0,at=E.length;k<at;k++){const vt=E[k],Tt=vt.object,At=vt.geometry,Ht=W===null?vt.material:W,qt=vt.group;Tt.layers.test(G.layers)&&fl(Tt,B,G,At,Ht,qt)}}function fl(E,B,G,W,k,at){E.onBeforeRender(x,B,G,W,k,at),E.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),k.onBeforeRender(x,B,G,W,E,at),k.transparent===!0&&k.side===mn&&k.forceSinglePass===!1?(k.side=un,k.needsUpdate=!0,x.renderBufferDirect(G,B,W,k,E,at),k.side=Ni,k.needsUpdate=!0,x.renderBufferDirect(G,B,W,k,E,at),k.side=mn):x.renderBufferDirect(G,B,W,k,E,at),E.onAfterRender(x,B,G,W,k,at)}function kr(E,B,G){B.isScene!==!0&&(B=ie);const W=xt.get(E),k=p.state.lights,at=p.state.shadowsArray,vt=k.state.version,Tt=wt.getParameters(E,k.state,at,B,G),At=wt.getProgramCacheKey(Tt);let Ht=W.programs;W.environment=E.isMeshStandardMaterial?B.environment:null,W.fog=B.fog,W.envMap=(E.isMeshStandardMaterial?H:y).get(E.envMap||W.environment),W.envMapRotation=W.environment!==null&&E.envMap===null?B.environmentRotation:E.envMapRotation,Ht===void 0&&(E.addEventListener("dispose",Xt),Ht=new Map,W.programs=Ht);let qt=Ht.get(At);if(qt!==void 0){if(W.currentProgram===qt&&W.lightsStateVersion===vt)return ml(E,Tt),qt}else Tt.uniforms=wt.getUniforms(E),E.onBeforeCompile(Tt,x),qt=wt.acquireProgram(Tt,At),Ht.set(At,qt),W.uniforms=Tt.uniforms;const Rt=W.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Rt.clippingPlanes=nt.uniform),ml(E,Tt),W.needsLights=dd(E),W.lightsStateVersion=vt,W.needsLights&&(Rt.ambientLightColor.value=k.state.ambient,Rt.lightProbe.value=k.state.probe,Rt.directionalLights.value=k.state.directional,Rt.directionalLightShadows.value=k.state.directionalShadow,Rt.spotLights.value=k.state.spot,Rt.spotLightShadows.value=k.state.spotShadow,Rt.rectAreaLights.value=k.state.rectArea,Rt.ltc_1.value=k.state.rectAreaLTC1,Rt.ltc_2.value=k.state.rectAreaLTC2,Rt.pointLights.value=k.state.point,Rt.pointLightShadows.value=k.state.pointShadow,Rt.hemisphereLights.value=k.state.hemi,Rt.directionalShadowMap.value=k.state.directionalShadowMap,Rt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Rt.spotShadowMap.value=k.state.spotShadowMap,Rt.spotLightMatrix.value=k.state.spotLightMatrix,Rt.spotLightMap.value=k.state.spotLightMap,Rt.pointShadowMap.value=k.state.pointShadowMap,Rt.pointShadowMatrix.value=k.state.pointShadowMatrix),W.currentProgram=qt,W.uniformsList=null,qt}function pl(E){if(E.uniformsList===null){const B=E.currentProgram.getUniforms();E.uniformsList=ba.seqWithValue(B.seq,E.uniforms)}return E.uniformsList}function ml(E,B){const G=xt.get(E);G.outputColorSpace=B.outputColorSpace,G.batching=B.batching,G.batchingColor=B.batchingColor,G.instancing=B.instancing,G.instancingColor=B.instancingColor,G.instancingMorph=B.instancingMorph,G.skinning=B.skinning,G.morphTargets=B.morphTargets,G.morphNormals=B.morphNormals,G.morphColors=B.morphColors,G.morphTargetsCount=B.morphTargetsCount,G.numClippingPlanes=B.numClippingPlanes,G.numIntersection=B.numClipIntersection,G.vertexAlphas=B.vertexAlphas,G.vertexTangents=B.vertexTangents,G.toneMapping=B.toneMapping}function ud(E,B,G,W,k){B.isScene!==!0&&(B=ie),w.resetTextureUnits();const at=B.fog,vt=W.isMeshStandardMaterial?B.environment:null,Tt=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:qs,At=(W.isMeshStandardMaterial?H:y).get(W.envMap||vt),Ht=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,qt=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Rt=!!G.morphAttributes.position,oe=!!G.morphAttributes.normal,xe=!!G.morphAttributes.color;let Me=Li;W.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Me=x.toneMapping);const on=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ue=on!==void 0?on.length:0,It=xt.get(W),ti=p.state.lights;if(rt===!0&&(Et===!0||E!==_)){const yn=E===_&&W.id===M;nt.setState(W,E,yn)}let he=!1;W.version===It.__version?(It.needsLights&&It.lightsStateVersion!==ti.state.version||It.outputColorSpace!==Tt||k.isBatchedMesh&&It.batching===!1||!k.isBatchedMesh&&It.batching===!0||k.isBatchedMesh&&It.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&It.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&It.instancing===!1||!k.isInstancedMesh&&It.instancing===!0||k.isSkinnedMesh&&It.skinning===!1||!k.isSkinnedMesh&&It.skinning===!0||k.isInstancedMesh&&It.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&It.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&It.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&It.instancingMorph===!1&&k.morphTexture!==null||It.envMap!==At||W.fog===!0&&It.fog!==at||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==nt.numPlanes||It.numIntersection!==nt.numIntersection)||It.vertexAlphas!==Ht||It.vertexTangents!==qt||It.morphTargets!==Rt||It.morphNormals!==oe||It.morphColors!==xe||It.toneMapping!==Me||It.morphTargetsCount!==ue)&&(he=!0):(he=!0,It.__version=W.version);let In=It.currentProgram;he===!0&&(In=kr(W,B,k));let cs=!1,dn=!1,Qs=!1;const Se=In.getUniforms(),zn=It.uniforms;if(ut.useProgram(In.program)&&(cs=!0,dn=!0,Qs=!0),W.id!==M&&(M=W.id,dn=!0),cs||_!==E){ut.buffers.depth.getReversed()?(lt.copy(E.projectionMatrix),tp(lt),ep(lt),Se.setValue(L,"projectionMatrix",lt)):Se.setValue(L,"projectionMatrix",E.projectionMatrix),Se.setValue(L,"viewMatrix",E.matrixWorldInverse);const gi=Se.map.cameraPosition;gi!==void 0&&gi.setValue(L,Vt.setFromMatrixPosition(E.matrixWorld)),Mt.logarithmicDepthBuffer&&Se.setValue(L,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Se.setValue(L,"isOrthographic",E.isOrthographicCamera===!0),_!==E&&(_=E,dn=!0,Qs=!0)}if(k.isSkinnedMesh){Se.setOptional(L,k,"bindMatrix"),Se.setOptional(L,k,"bindMatrixInverse");const yn=k.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),Se.setValue(L,"boneTexture",yn.boneTexture,w))}k.isBatchedMesh&&(Se.setOptional(L,k,"batchingTexture"),Se.setValue(L,"batchingTexture",k._matricesTexture,w),Se.setOptional(L,k,"batchingIdTexture"),Se.setValue(L,"batchingIdTexture",k._indirectTexture,w),Se.setOptional(L,k,"batchingColorTexture"),k._colorsTexture!==null&&Se.setValue(L,"batchingColorTexture",k._colorsTexture,w));const tr=G.morphAttributes;if((tr.position!==void 0||tr.normal!==void 0||tr.color!==void 0)&&kt.update(k,G,In),(dn||It.receiveShadow!==k.receiveShadow)&&(It.receiveShadow=k.receiveShadow,Se.setValue(L,"receiveShadow",k.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(zn.envMap.value=At,zn.flipEnvMap.value=At.isCubeTexture&&At.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&B.environment!==null&&(zn.envMapIntensity.value=B.environmentIntensity),dn&&(Se.setValue(L,"toneMappingExposure",x.toneMappingExposure),It.needsLights&&hd(zn,Qs),at&&W.fog===!0&&dt.refreshFogUniforms(zn,at),dt.refreshMaterialUniforms(zn,W,V,$,p.state.transmissionRenderTarget[E.id]),ba.upload(L,pl(It),zn,w)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(ba.upload(L,pl(It),zn,w),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Se.setValue(L,"center",k.center),Se.setValue(L,"modelViewMatrix",k.modelViewMatrix),Se.setValue(L,"normalMatrix",k.normalMatrix),Se.setValue(L,"modelMatrix",k.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const yn=W.uniformsGroups;for(let gi=0,vi=yn.length;gi<vi;gi++){const gl=yn[gi];N.update(gl,In),N.bind(gl,In)}}return In}function hd(E,B){E.ambientLightColor.needsUpdate=B,E.lightProbe.needsUpdate=B,E.directionalLights.needsUpdate=B,E.directionalLightShadows.needsUpdate=B,E.pointLights.needsUpdate=B,E.pointLightShadows.needsUpdate=B,E.spotLights.needsUpdate=B,E.spotLightShadows.needsUpdate=B,E.rectAreaLights.needsUpdate=B,E.hemisphereLights.needsUpdate=B}function dd(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(E,B,G){xt.get(E.texture).__webglTexture=B,xt.get(E.depthTexture).__webglTexture=G;const W=xt.get(E);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||et.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,B){const G=xt.get(E);G.__webglFramebuffer=B,G.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(E,B=0,G=0){A=E,R=B,P=G;let W=!0,k=null,at=!1,vt=!1;if(E){const At=xt.get(E);if(At.__useDefaultFramebuffer!==void 0)ut.bindFramebuffer(L.FRAMEBUFFER,null),W=!1;else if(At.__webglFramebuffer===void 0)w.setupRenderTarget(E);else if(At.__hasExternalTextures)w.rebindTextures(E,xt.get(E.texture).__webglTexture,xt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Rt=E.depthTexture;if(At.__boundDepthTexture!==Rt){if(Rt!==null&&xt.has(Rt)&&(E.width!==Rt.image.width||E.height!==Rt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(E)}}const Ht=E.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(vt=!0);const qt=xt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(qt[B])?k=qt[B][G]:k=qt[B],at=!0):E.samples>0&&w.useMultisampledRTT(E)===!1?k=xt.get(E).__webglMultisampledFramebuffer:Array.isArray(qt)?k=qt[G]:k=qt,T.copy(E.viewport),O.copy(E.scissor),C=E.scissorTest}else T.copy(mt).multiplyScalar(V).floor(),O.copy(Ft).multiplyScalar(V).floor(),C=Qt;if(ut.bindFramebuffer(L.FRAMEBUFFER,k)&&W&&ut.drawBuffers(E,k),ut.viewport(T),ut.scissor(O),ut.setScissorTest(C),at){const At=xt.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+B,At.__webglTexture,G)}else if(vt){const At=xt.get(E.texture),Ht=B||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,At.__webglTexture,G||0,Ht)}M=-1},this.readRenderTargetPixels=function(E,B,G,W,k,at,vt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=xt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&vt!==void 0&&(Tt=Tt[vt]),Tt){ut.bindFramebuffer(L.FRAMEBUFFER,Tt);try{const At=E.texture,Ht=At.format,qt=At.type;if(!Mt.textureFormatReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Mt.textureTypeReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=E.width-W&&G>=0&&G<=E.height-k&&L.readPixels(B,G,W,k,Zt.convert(Ht),Zt.convert(qt),at)}finally{const At=A!==null?xt.get(A).__webglFramebuffer:null;ut.bindFramebuffer(L.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(E,B,G,W,k,at,vt){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Tt=xt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&vt!==void 0&&(Tt=Tt[vt]),Tt){const At=E.texture,Ht=At.format,qt=At.type;if(!Mt.textureFormatReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Mt.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=E.width-W&&G>=0&&G<=E.height-k){ut.bindFramebuffer(L.FRAMEBUFFER,Tt);const Rt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Rt),L.bufferData(L.PIXEL_PACK_BUFFER,at.byteLength,L.STREAM_READ),L.readPixels(B,G,W,k,Zt.convert(Ht),Zt.convert(qt),0);const oe=A!==null?xt.get(A).__webglFramebuffer:null;ut.bindFramebuffer(L.FRAMEBUFFER,oe);const xe=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Qf(L,xe,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Rt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,at),L.deleteBuffer(Rt),L.deleteSync(xe),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,B=null,G=0){E.isTexture!==!0&&(dr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,E=arguments[1]);const W=Math.pow(2,-G),k=Math.floor(E.image.width*W),at=Math.floor(E.image.height*W),vt=B!==null?B.x:0,Tt=B!==null?B.y:0;w.setTexture2D(E,0),L.copyTexSubImage2D(L.TEXTURE_2D,G,0,0,vt,Tt,k,at),ut.unbindTexture()},this.copyTextureToTexture=function(E,B,G=null,W=null,k=0){E.isTexture!==!0&&(dr("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,E=arguments[1],B=arguments[2],k=arguments[3]||0,G=null);let at,vt,Tt,At,Ht,qt,Rt,oe,xe;const Me=E.isCompressedTexture?E.mipmaps[k]:E.image;G!==null?(at=G.max.x-G.min.x,vt=G.max.y-G.min.y,Tt=G.isBox3?G.max.z-G.min.z:1,At=G.min.x,Ht=G.min.y,qt=G.isBox3?G.min.z:0):(at=Me.width,vt=Me.height,Tt=Me.depth||1,At=0,Ht=0,qt=0),W!==null?(Rt=W.x,oe=W.y,xe=W.z):(Rt=0,oe=0,xe=0);const on=Zt.convert(B.format),ue=Zt.convert(B.type);let It;B.isData3DTexture?(w.setTexture3D(B,0),It=L.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(w.setTexture2DArray(B,0),It=L.TEXTURE_2D_ARRAY):(w.setTexture2D(B,0),It=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,B.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,B.unpackAlignment);const ti=L.getParameter(L.UNPACK_ROW_LENGTH),he=L.getParameter(L.UNPACK_IMAGE_HEIGHT),In=L.getParameter(L.UNPACK_SKIP_PIXELS),cs=L.getParameter(L.UNPACK_SKIP_ROWS),dn=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Me.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Me.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,At),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ht),L.pixelStorei(L.UNPACK_SKIP_IMAGES,qt);const Qs=E.isDataArrayTexture||E.isData3DTexture,Se=B.isDataArrayTexture||B.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const zn=xt.get(E),tr=xt.get(B),yn=xt.get(zn.__renderTarget),gi=xt.get(tr.__renderTarget);ut.bindFramebuffer(L.READ_FRAMEBUFFER,yn.__webglFramebuffer),ut.bindFramebuffer(L.DRAW_FRAMEBUFFER,gi.__webglFramebuffer);for(let vi=0;vi<Tt;vi++)Qs&&L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,xt.get(E).__webglTexture,k,qt+vi),E.isDepthTexture?(Se&&L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,xt.get(B).__webglTexture,k,xe+vi),L.blitFramebuffer(At,Ht,at,vt,Rt,oe,at,vt,L.DEPTH_BUFFER_BIT,L.NEAREST)):Se?L.copyTexSubImage3D(It,k,Rt,oe,xe+vi,At,Ht,at,vt):L.copyTexSubImage2D(It,k,Rt,oe,xe+vi,At,Ht,at,vt);ut.bindFramebuffer(L.READ_FRAMEBUFFER,null),ut.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Se?E.isDataTexture||E.isData3DTexture?L.texSubImage3D(It,k,Rt,oe,xe,at,vt,Tt,on,ue,Me.data):B.isCompressedArrayTexture?L.compressedTexSubImage3D(It,k,Rt,oe,xe,at,vt,Tt,on,Me.data):L.texSubImage3D(It,k,Rt,oe,xe,at,vt,Tt,on,ue,Me):E.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,k,Rt,oe,at,vt,on,ue,Me.data):E.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,k,Rt,oe,Me.width,Me.height,on,Me.data):L.texSubImage2D(L.TEXTURE_2D,k,Rt,oe,at,vt,on,ue,Me);L.pixelStorei(L.UNPACK_ROW_LENGTH,ti),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,he),L.pixelStorei(L.UNPACK_SKIP_PIXELS,In),L.pixelStorei(L.UNPACK_SKIP_ROWS,cs),L.pixelStorei(L.UNPACK_SKIP_IMAGES,dn),k===0&&B.generateMipmaps&&L.generateMipmap(It),ut.unbindTexture()},this.copyTextureToTexture3D=function(E,B,G=null,W=null,k=0){return E.isTexture!==!0&&(dr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,W=arguments[1]||null,E=arguments[2],B=arguments[3],k=arguments[4]||0),dr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,B,G,W,k)},this.initRenderTarget=function(E){xt.get(E).__webglFramebuffer===void 0&&w.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?w.setTextureCube(E,0):E.isData3DTexture?w.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?w.setTexture2DArray(E,0):w.setTexture2D(E,0),ut.unbindTexture()},this.resetState=function(){R=0,P=0,A=null,ut.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=re._getDrawingBufferColorSpace(t),e.unpackColorSpace=re._getUnpackColorSpace()}}class h_ extends Ne{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new kn,this.environmentIntensity=1,this.environmentRotation=new kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class d_ extends Je{constructor(t=null,e=1,i=1,s,r,a,o,c,l=vn,u=vn,h,d){super(null,a,o,c,l,u,s,r,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bu extends _n{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const bs=new le,Eu=new le,la=[],wu=new mi,f_=new le,rr=new $t,ar=new as;class Tu extends $t{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new bu(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,f_)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new mi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,bs),wu.copy(t.boundingBox).applyMatrix4(bs),this.boundingBox.union(wu)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new as),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,bs),ar.copy(t.boundingSphere).applyMatrix4(bs),this.boundingSphere.union(ar)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=t*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(t,e){const i=this.matrixWorld,s=this.count;if(rr.geometry=this.geometry,rr.material=this.material,rr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ar.copy(this.boundingSphere),ar.applyMatrix4(i),t.ray.intersectsSphere(ar)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,bs),Eu.multiplyMatrices(i,bs),rr.matrixWorld=Eu,rr.raycast(t,la);for(let a=0,o=la.length;a<o;a++){const c=la[a];c.instanceId=r,c.object=this,e.push(c)}la.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new bu(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new d_(new Float32Array(s*this.count),s,this.count,Hc,Xn));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<i.length;l++)a+=i[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;r[c]=o,r.set(i,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Hh extends os{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Kt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Na=new I,Oa=new I,Au=new le,or=new $a,ua=new as,Ao=new I,Ru=new I;class p_ extends Ne{constructor(t=new Pe,e=new Hh){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)Na.fromBufferAttribute(e,s-1),Oa.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Na.distanceTo(Oa);t.setAttribute("lineDistance",new ne(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ua.copy(i.boundingSphere),ua.applyMatrix4(s),ua.radius+=r,t.ray.intersectsSphere(ua)===!1)return;Au.copy(s).invert(),or.copy(t.ray).applyMatrix4(Au);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let v=f,m=g-1;v<m;v+=l){const p=u.getX(v),b=u.getX(v+1),S=ha(this,t,or,c,p,b);S&&e.push(S)}if(this.isLineLoop){const v=u.getX(g-1),m=u.getX(f),p=ha(this,t,or,c,v,m);p&&e.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let v=f,m=g-1;v<m;v+=l){const p=ha(this,t,or,c,v,v+1);p&&e.push(p)}if(this.isLineLoop){const v=ha(this,t,or,c,g-1,f);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ha(n,t,e,i,s,r){const a=n.geometry.attributes.position;if(Na.fromBufferAttribute(a,s),Oa.fromBufferAttribute(a,r),e.distanceSqToSegment(Na,Oa,Ao,Ru)>i)return;Ao.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Ao);if(!(c<t.near||c>t.far))return{distance:c,point:Ru.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}class Gh extends os{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Kt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Cu=new le,bc=new $a,da=new as,fa=new I;class m_ extends Ne{constructor(t=new Pe,e=new Gh){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),da.copy(i.boundingSphere),da.applyMatrix4(s),da.radius+=r,t.ray.intersectsSphere(da)===!1)return;Cu.copy(s).invert(),bc.copy(t.ray).applyMatrix4(Cu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,h=i.attributes.position;if(l!==null){const d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=d,v=f;g<v;g++){const m=l.getX(g);fa.fromBufferAttribute(h,m),Pu(fa,m,c,s,t,e,this)}}else{const d=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let g=d,v=f;g<v;g++)fa.fromBufferAttribute(h,g),Pu(fa,g,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Pu(n,t,e,i,s,r,a){const o=bc.distanceSqToPoint(n);if(o<e){const c=new I;bc.closestPointToPoint(n,c),c.applyMatrix4(i);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Wh extends Je{constructor(t,e,i,s,r,a,o,c,l){super(t,e,i,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Kn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let s=0;const r=i.length;let a;e?a=e:a=t*i[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=i[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===a)return s/(r-1);const u=i[s],d=i[s+1]-u,f=(a-u)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new ot:new I);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new I,s=[],r=[],a=[],o=new I,c=new le;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new I)}r[0]=new I,a[0]=new I;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=l&&(l=u,i.set(1,0,0)),h<=l&&(l=h,i.set(0,1,0)),d<=l&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(ze(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(ze(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Jc extends Kn{constructor(t=0,e=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new ot){const i=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*u-f*h+this.aX,l=d*h+f*u+this.aY}return i.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class g_ extends Jc{constructor(t,e,i,s,r,a){super(t,e,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Kc(){let n=0,t=0,e=0,i=0;function s(r,a,o,c){n=r,t=o,e=-3*r+3*a-2*o-c,i=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,u,h){let d=(a-r)/l-(o-r)/(l+u)+(o-a)/u,f=(o-a)/u-(c-a)/(u+h)+(c-o)/h;d*=u,f*=u,s(a,o,d,f)},calc:function(r){const a=r*r,o=a*r;return n+t*r+e*a+i*o}}}const pa=new I,Ro=new Kc,Co=new Kc,Po=new Kc;class v_ extends Kn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new I){const i=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,u;this.closed||o>0?l=s[(o-1)%r]:(pa.subVectors(s[0],s[1]).add(s[0]),l=pa);const h=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(pa.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=pa),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(h),f),v=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Ro.initNonuniformCatmullRom(l.x,h.x,d.x,u.x,g,v,m),Co.initNonuniformCatmullRom(l.y,h.y,d.y,u.y,g,v,m),Po.initNonuniformCatmullRom(l.z,h.z,d.z,u.z,g,v,m)}else this.curveType==="catmullrom"&&(Ro.initCatmullRom(l.x,h.x,d.x,u.x,this.tension),Co.initCatmullRom(l.y,h.y,d.y,u.y,this.tension),Po.initCatmullRom(l.z,h.z,d.z,u.z,this.tension));return i.set(Ro.calc(c),Co.calc(c),Po.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Iu(n,t,e,i,s){const r=(i-t)*.5,a=(s-e)*.5,o=n*n,c=n*o;return(2*e-2*i+r+a)*c+(-3*e+3*i-2*r-a)*o+r*n+e}function __(n,t){const e=1-n;return e*e*t}function x_(n,t){return 2*(1-n)*n*t}function y_(n,t){return n*n*t}function xr(n,t,e,i){return __(n,t)+x_(n,e)+y_(n,i)}function M_(n,t){const e=1-n;return e*e*e*t}function S_(n,t){const e=1-n;return 3*e*e*n*t}function b_(n,t){return 3*(1-n)*n*n*t}function E_(n,t){return n*n*n*t}function yr(n,t,e,i,s){return M_(n,t)+S_(n,e)+b_(n,i)+E_(n,s)}class $h extends Kn{constructor(t=new ot,e=new ot,i=new ot,s=new ot){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new ot){const i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(yr(t,s.x,r.x,a.x,o.x),yr(t,s.y,r.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class w_ extends Kn{constructor(t=new I,e=new I,i=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new I){const i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(yr(t,s.x,r.x,a.x,o.x),yr(t,s.y,r.y,a.y,o.y),yr(t,s.z,r.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Xh extends Kn{constructor(t=new ot,e=new ot){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ot){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ot){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class T_ extends Kn{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class qh extends Kn{constructor(t=new ot,e=new ot,i=new ot){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new ot){const i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(xr(t,s.x,r.x,a.x),xr(t,s.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class A_ extends Kn{constructor(t=new I,e=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new I){const i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(xr(t,s.x,r.x,a.x),xr(t,s.y,r.y,a.y),xr(t,s.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Yh extends Kn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ot){const i=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],u=s[a>s.length-2?s.length-1:a+1],h=s[a>s.length-3?s.length-1:a+2];return i.set(Iu(o,c.x,l.x,u.x,h.x),Iu(o,c.y,l.y,u.y,h.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new ot().fromArray(s))}return this}}var Ec=Object.freeze({__proto__:null,ArcCurve:g_,CatmullRomCurve3:v_,CubicBezierCurve:$h,CubicBezierCurve3:w_,EllipseCurve:Jc,LineCurve:Xh,LineCurve3:T_,QuadraticBezierCurve:qh,QuadraticBezierCurve3:A_,SplineCurve:Yh});class R_ extends Kn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ec[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const a=s[r]-i,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){const u=c[l];i&&i.equals(u)||(e.push(u),i=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new Ec[s.type]().fromJSON(s))}return this}}class wc extends R_{constructor(t){super(),this.type="Path",this.currentPoint=new ot,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new Xh(this.currentPoint.clone(),new ot(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const r=new qh(this.currentPoint.clone(),new ot(t,e),new ot(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,a){const o=new $h(this.currentPoint.clone(),new ot(t,e),new ot(i,s),new ot(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new Yh(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,i,s,r,a),this}absarc(t,e,i,s,r,a){return this.absellipse(t,e,i,i,s,r,a),this}ellipse(t,e,i,s,r,a,o,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,i,s,r,a,o,c),this}absellipse(t,e,i,s,r,a,o,c){const l=new Jc(t,e,i,s,r,a,o,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Qc extends Pe{constructor(t=[new ot(0,-.5),new ot(.5,0),new ot(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=ze(s,0,Math.PI*2);const r=[],a=[],o=[],c=[],l=[],u=1/e,h=new I,d=new ot,f=new I,g=new I,v=new I;let m=0,p=0;for(let b=0;b<=t.length-1;b++)switch(b){case 0:m=t[b+1].x-t[b].x,p=t[b+1].y-t[b].y,f.x=p*1,f.y=-m,f.z=p*0,v.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(v.x,v.y,v.z);break;default:m=t[b+1].x-t[b].x,p=t[b+1].y-t[b].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),c.push(f.x,f.y,f.z),v.copy(g)}for(let b=0;b<=e;b++){const S=i+b*u*s,x=Math.sin(S),D=Math.cos(S);for(let R=0;R<=t.length-1;R++){h.x=t[R].x*x,h.y=t[R].y,h.z=t[R].x*D,a.push(h.x,h.y,h.z),d.x=b/e,d.y=R/(t.length-1),o.push(d.x,d.y);const P=c[3*R+0]*x,A=c[3*R+1],M=c[3*R+0]*D;l.push(P,A,M)}}for(let b=0;b<e;b++)for(let S=0;S<t.length-1;S++){const x=S+b*t.length,D=x,R=x+t.length,P=x+t.length+1,A=x+1;r.push(D,R,A),r.push(P,A,R)}this.setIndex(r),this.setAttribute("position",new ne(a,3)),this.setAttribute("uv",new ne(o,2)),this.setAttribute("normal",new ne(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qc(t.points,t.segments,t.phiStart,t.phiLength)}}class Mr extends Qc{constructor(t=1,e=1,i=4,s=8){const r=new wc;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:i,radialSegments:s}}static fromJSON(t){return new Mr(t.radius,t.length,t.capSegments,t.radialSegments)}}class Ri extends Pe{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],c=[],l=new I,u=new ot;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let h=0,d=3;h<=e;h++,d+=3){const f=i+h/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(a[d]/t+1)/2,u.y=(a[d+1]/t+1)/2,c.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new ne(a,3)),this.setAttribute("normal",new ne(o,3)),this.setAttribute("uv",new ne(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ri(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class be extends Pe{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],d=[],f=[];let g=0;const v=[],m=i/2;let p=0;b(),a===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new ne(h,3)),this.setAttribute("normal",new ne(d,3)),this.setAttribute("uv",new ne(f,2));function b(){const x=new I,D=new I;let R=0;const P=(e-t)/i;for(let A=0;A<=r;A++){const M=[],_=A/r,T=_*(e-t)+t;for(let O=0;O<=s;O++){const C=O/s,U=C*c+o,z=Math.sin(U),F=Math.cos(U);D.x=T*z,D.y=-_*i+m,D.z=T*F,h.push(D.x,D.y,D.z),x.set(z,P,F).normalize(),d.push(x.x,x.y,x.z),f.push(C,1-_),M.push(g++)}v.push(M)}for(let A=0;A<s;A++)for(let M=0;M<r;M++){const _=v[M][A],T=v[M+1][A],O=v[M+1][A+1],C=v[M][A+1];(t>0||M!==0)&&(u.push(_,T,C),R+=3),(e>0||M!==r-1)&&(u.push(T,O,C),R+=3)}l.addGroup(p,R,0),p+=R}function S(x){const D=g,R=new ot,P=new I;let A=0;const M=x===!0?t:e,_=x===!0?1:-1;for(let O=1;O<=s;O++)h.push(0,m*_,0),d.push(0,_,0),f.push(.5,.5),g++;const T=g;for(let O=0;O<=s;O++){const U=O/s*c+o,z=Math.cos(U),F=Math.sin(U);P.x=M*F,P.y=m*_,P.z=M*z,h.push(P.x,P.y,P.z),d.push(0,_,0),R.x=z*.5+.5,R.y=F*.5*_+.5,f.push(R.x,R.y),g++}for(let O=0;O<s;O++){const C=D+O,U=T+O;x===!0?u.push(U,U+1,C):u.push(U+1,U,C),A+=3}l.addGroup(p,A,x===!0?1:2),p+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new be(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Re extends be{constructor(t=1,e=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Re(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Js extends Pe{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const r=[],a=[];o(s),l(i),u(),this.setAttribute("position",new ne(r,3)),this.setAttribute("normal",new ne(r.slice(),3)),this.setAttribute("uv",new ne(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(b){const S=new I,x=new I,D=new I;for(let R=0;R<e.length;R+=3)f(e[R+0],S),f(e[R+1],x),f(e[R+2],D),c(S,x,D,b)}function c(b,S,x,D){const R=D+1,P=[];for(let A=0;A<=R;A++){P[A]=[];const M=b.clone().lerp(x,A/R),_=S.clone().lerp(x,A/R),T=R-A;for(let O=0;O<=T;O++)O===0&&A===R?P[A][O]=M:P[A][O]=M.clone().lerp(_,O/T)}for(let A=0;A<R;A++)for(let M=0;M<2*(R-A)-1;M++){const _=Math.floor(M/2);M%2===0?(d(P[A][_+1]),d(P[A+1][_]),d(P[A][_])):(d(P[A][_+1]),d(P[A+1][_+1]),d(P[A+1][_]))}}function l(b){const S=new I;for(let x=0;x<r.length;x+=3)S.x=r[x+0],S.y=r[x+1],S.z=r[x+2],S.normalize().multiplyScalar(b),r[x+0]=S.x,r[x+1]=S.y,r[x+2]=S.z}function u(){const b=new I;for(let S=0;S<r.length;S+=3){b.x=r[S+0],b.y=r[S+1],b.z=r[S+2];const x=m(b)/2/Math.PI+.5,D=p(b)/Math.PI+.5;a.push(x,1-D)}g(),h()}function h(){for(let b=0;b<a.length;b+=6){const S=a[b+0],x=a[b+2],D=a[b+4],R=Math.max(S,x,D),P=Math.min(S,x,D);R>.9&&P<.1&&(S<.2&&(a[b+0]+=1),x<.2&&(a[b+2]+=1),D<.2&&(a[b+4]+=1))}}function d(b){r.push(b.x,b.y,b.z)}function f(b,S){const x=b*3;S.x=t[x+0],S.y=t[x+1],S.z=t[x+2]}function g(){const b=new I,S=new I,x=new I,D=new I,R=new ot,P=new ot,A=new ot;for(let M=0,_=0;M<r.length;M+=9,_+=6){b.set(r[M+0],r[M+1],r[M+2]),S.set(r[M+3],r[M+4],r[M+5]),x.set(r[M+6],r[M+7],r[M+8]),R.set(a[_+0],a[_+1]),P.set(a[_+2],a[_+3]),A.set(a[_+4],a[_+5]),D.copy(b).add(S).add(x).divideScalar(3);const T=m(D);v(R,_+0,b,T),v(P,_+2,S,T),v(A,_+4,x,T)}}function v(b,S,x,D){D<0&&b.x===1&&(a[S]=b.x-1),x.x===0&&x.z===0&&(a[S]=D/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function p(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Js(t.vertices,t.indices,t.radius,t.details)}}class On extends Js{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new On(t.radius,t.detail)}}class Zh extends wc{constructor(t){super(t),this.uuid=ss(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new wc().fromJSON(s))}return this}}const C_={triangulate:function(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let r=jh(n,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,c,l,u,h,d,f;if(i&&(r=U_(n,t,r,e)),n.length>80*e){o=l=n[0],c=u=n[1];for(let g=e;g<s;g+=e)h=n[g],d=n[g+1],h<o&&(o=h),d<c&&(c=d),h>l&&(l=h),d>u&&(u=d);f=Math.max(l-o,u-c),f=f!==0?32767/f:0}return Rr(r,a,e,o,c,f,0),a}};function jh(n,t,e,i,s){let r,a;if(s===$_(n,t,e,i)>0)for(r=t;r<e;r+=i)a=Lu(r,n[r],n[r+1],a);else for(r=e-i;r>=t;r-=i)a=Lu(r,n[r],n[r+1],a);return a&&qa(a,a.next)&&(Pr(a),a=a.next),a}function is(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(qa(e,e.next)||Te(e.prev,e,e.next)===0)){if(Pr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Rr(n,t,e,i,s,r,a){if(!n)return;!a&&r&&k_(n,i,s,r);let o=n,c,l;for(;n.prev!==n.next;){if(c=n.prev,l=n.next,r?I_(n,i,s,r):P_(n)){t.push(c.i/e|0),t.push(n.i/e|0),t.push(l.i/e|0),Pr(n),n=l.next,o=l.next;continue}if(n=l,n===o){a?a===1?(n=L_(is(n),t,e),Rr(n,t,e,i,s,r,2)):a===2&&D_(n,t,e,i,s,r):Rr(is(n),t,e,i,s,r,1);break}}}function P_(n){const t=n.prev,e=n,i=n.next;if(Te(t,e,i)>=0)return!1;const s=t.x,r=e.x,a=i.x,o=t.y,c=e.y,l=i.y,u=s<r?s<a?s:a:r<a?r:a,h=o<c?o<l?o:l:c<l?c:l,d=s>r?s>a?s:a:r>a?r:a,f=o>c?o>l?o:l:c>l?c:l;let g=i.next;for(;g!==t;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=f&&Ps(s,o,r,c,a,l,g.x,g.y)&&Te(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function I_(n,t,e,i){const s=n.prev,r=n,a=n.next;if(Te(s,r,a)>=0)return!1;const o=s.x,c=r.x,l=a.x,u=s.y,h=r.y,d=a.y,f=o<c?o<l?o:l:c<l?c:l,g=u<h?u<d?u:d:h<d?h:d,v=o>c?o>l?o:l:c>l?c:l,m=u>h?u>d?u:d:h>d?h:d,p=Tc(f,g,t,e,i),b=Tc(v,m,t,e,i);let S=n.prevZ,x=n.nextZ;for(;S&&S.z>=p&&x&&x.z<=b;){if(S.x>=f&&S.x<=v&&S.y>=g&&S.y<=m&&S!==s&&S!==a&&Ps(o,u,c,h,l,d,S.x,S.y)&&Te(S.prev,S,S.next)>=0||(S=S.prevZ,x.x>=f&&x.x<=v&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&Ps(o,u,c,h,l,d,x.x,x.y)&&Te(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;S&&S.z>=p;){if(S.x>=f&&S.x<=v&&S.y>=g&&S.y<=m&&S!==s&&S!==a&&Ps(o,u,c,h,l,d,S.x,S.y)&&Te(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;x&&x.z<=b;){if(x.x>=f&&x.x<=v&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&Ps(o,u,c,h,l,d,x.x,x.y)&&Te(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function L_(n,t,e){let i=n;do{const s=i.prev,r=i.next.next;!qa(s,r)&&Jh(s,i,i.next,r)&&Cr(s,r)&&Cr(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),Pr(i),Pr(i.next),i=n=r),i=i.next}while(i!==n);return is(i)}function D_(n,t,e,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&H_(a,o)){let c=Kh(a,o);a=is(a,a.next),c=is(c,c.next),Rr(a,t,e,i,s,r,0),Rr(c,t,e,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function U_(n,t,e,i){const s=[];let r,a,o,c,l;for(r=0,a=t.length;r<a;r++)o=t[r]*i,c=r<a-1?t[r+1]*i:n.length,l=jh(n,o,c,i,!1),l===l.next&&(l.steiner=!0),s.push(V_(l));for(s.sort(N_),r=0;r<s.length;r++)e=O_(s[r],e);return e}function N_(n,t){return n.x-t.x}function O_(n,t){const e=F_(n,t);if(!e)return t;const i=Kh(e,n);return is(i,i.next),is(e,e.next)}function F_(n,t){let e=t,i=-1/0,s;const r=n.x,a=n.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const d=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>i&&(i=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;const o=s,c=s.x,l=s.y;let u=1/0,h;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&Ps(a<l?r:i,a,c,l,a<l?i:r,a,e.x,e.y)&&(h=Math.abs(a-e.y)/(r-e.x),Cr(e,n)&&(h<u||h===u&&(e.x>s.x||e.x===s.x&&B_(s,e)))&&(s=e,u=h)),e=e.next;while(e!==o);return s}function B_(n,t){return Te(n.prev,n,t.prev)<0&&Te(t.next,n,n.next)<0}function k_(n,t,e,i){let s=n;do s.z===0&&(s.z=Tc(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,z_(s)}function z_(n){let t,e,i,s,r,a,o,c,l=1;do{for(e=n,n=null,r=null,a=0;e;){for(a++,i=e,o=0,t=0;t<l&&(o++,i=i.nextZ,!!i);t++);for(c=l;o>0||c>0&&i;)o!==0&&(c===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,o--):(s=i,i=i.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,l*=2}while(a>1);return n}function Tc(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function V_(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Ps(n,t,e,i,s,r,a,o){return(s-a)*(t-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(i-o)}function H_(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!G_(n,t)&&(Cr(n,t)&&Cr(t,n)&&W_(n,t)&&(Te(n.prev,n,t.prev)||Te(n,t.prev,t))||qa(n,t)&&Te(n.prev,n,n.next)>0&&Te(t.prev,t,t.next)>0)}function Te(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function qa(n,t){return n.x===t.x&&n.y===t.y}function Jh(n,t,e,i){const s=ga(Te(n,t,e)),r=ga(Te(n,t,i)),a=ga(Te(e,i,n)),o=ga(Te(e,i,t));return!!(s!==r&&a!==o||s===0&&ma(n,e,t)||r===0&&ma(n,i,t)||a===0&&ma(e,n,i)||o===0&&ma(e,t,i))}function ma(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function ga(n){return n>0?1:n<0?-1:0}function G_(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Jh(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Cr(n,t){return Te(n.prev,n,n.next)<0?Te(n,t,n.next)>=0&&Te(n,n.prev,t)>=0:Te(n,t,n.prev)<0||Te(n,n.next,t)<0}function W_(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Kh(n,t){const e=new Ac(n.i,n.x,n.y),i=new Ac(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function Lu(n,t,e,i){const s=new Ac(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Pr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Ac(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function $_(n,t,e,i){let s=0;for(let r=t,a=e-i;r<e;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}class Sr{static area(t){const e=t.length;let i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return Sr.area(t)<0}static triangulateShape(t,e){const i=[],s=[],r=[];Du(t),Uu(i,t);let a=t.length;e.forEach(Du);for(let c=0;c<e.length;c++)s.push(a),a+=e[c].length,Uu(i,e[c]);const o=C_.triangulate(i,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}}function Du(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Uu(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class tl extends Pe{constructor(t=new Zh([new ot(.5,.5),new ot(-.5,.5),new ot(-.5,-.5),new ot(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,s=[],r=[];for(let o=0,c=t.length;o<c;o++){const l=t[o];a(l)}this.setAttribute("position",new ne(s,3)),this.setAttribute("uv",new ne(r,2)),this.computeVertexNormals();function a(o){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:X_;let S,x=!1,D,R,P,A;p&&(S=p.getSpacedPoints(u),x=!0,d=!1,D=p.computeFrenetFrames(u,!1),R=new I,P=new I,A=new I),d||(m=0,f=0,g=0,v=0);const M=o.extractPoints(l);let _=M.shape;const T=M.holes;if(!Sr.isClockWise(_)){_=_.reverse();for(let J=0,st=T.length;J<st;J++){const L=T[J];Sr.isClockWise(L)&&(T[J]=L.reverse())}}const C=Sr.triangulateShape(_,T),U=_;for(let J=0,st=T.length;J<st;J++){const L=T[J];_=_.concat(L)}function z(J,st,L){return st||console.error("THREE.ExtrudeGeometry: vec does not exist"),J.clone().addScaledVector(st,L)}const F=_.length,$=C.length;function V(J,st,L){let Pt,et,Mt;const ut=J.x-st.x,Dt=J.y-st.y,xt=L.x-J.x,w=L.y-J.y,y=ut*ut+Dt*Dt,H=ut*w-Dt*xt;if(Math.abs(H)>Number.EPSILON){const q=Math.sqrt(y),Q=Math.sqrt(xt*xt+w*w),Y=st.x-Dt/q,wt=st.y+ut/q,dt=L.x-w/Q,yt=L.y+xt/Q,Jt=((dt-Y)*w-(yt-wt)*xt)/(ut*w-Dt*xt);Pt=Y+ut*Jt-J.x,et=wt+Dt*Jt-J.y;const nt=Pt*Pt+et*et;if(nt<=2)return new ot(Pt,et);Mt=Math.sqrt(nt/2)}else{let q=!1;ut>Number.EPSILON?xt>Number.EPSILON&&(q=!0):ut<-Number.EPSILON?xt<-Number.EPSILON&&(q=!0):Math.sign(Dt)===Math.sign(w)&&(q=!0),q?(Pt=-Dt,et=ut,Mt=Math.sqrt(y)):(Pt=ut,et=Dt,Mt=Math.sqrt(y/2))}return new ot(Pt/Mt,et/Mt)}const K=[];for(let J=0,st=U.length,L=st-1,Pt=J+1;J<st;J++,L++,Pt++)L===st&&(L=0),Pt===st&&(Pt=0),K[J]=V(U[J],U[L],U[Pt]);const it=[];let mt,Ft=K.concat();for(let J=0,st=T.length;J<st;J++){const L=T[J];mt=[];for(let Pt=0,et=L.length,Mt=et-1,ut=Pt+1;Pt<et;Pt++,Mt++,ut++)Mt===et&&(Mt=0),ut===et&&(ut=0),mt[Pt]=V(L[Pt],L[Mt],L[ut]);it.push(mt),Ft=Ft.concat(mt)}for(let J=0;J<m;J++){const st=J/m,L=f*Math.cos(st*Math.PI/2),Pt=g*Math.sin(st*Math.PI/2)+v;for(let et=0,Mt=U.length;et<Mt;et++){const ut=z(U[et],K[et],Pt);lt(ut.x,ut.y,-L)}for(let et=0,Mt=T.length;et<Mt;et++){const ut=T[et];mt=it[et];for(let Dt=0,xt=ut.length;Dt<xt;Dt++){const w=z(ut[Dt],mt[Dt],Pt);lt(w.x,w.y,-L)}}}const Qt=g+v;for(let J=0;J<F;J++){const st=d?z(_[J],Ft[J],Qt):_[J];x?(P.copy(D.normals[0]).multiplyScalar(st.x),R.copy(D.binormals[0]).multiplyScalar(st.y),A.copy(S[0]).add(P).add(R),lt(A.x,A.y,A.z)):lt(st.x,st.y,0)}for(let J=1;J<=u;J++)for(let st=0;st<F;st++){const L=d?z(_[st],Ft[st],Qt):_[st];x?(P.copy(D.normals[J]).multiplyScalar(L.x),R.copy(D.binormals[J]).multiplyScalar(L.y),A.copy(S[J]).add(P).add(R),lt(A.x,A.y,A.z)):lt(L.x,L.y,h/u*J)}for(let J=m-1;J>=0;J--){const st=J/m,L=f*Math.cos(st*Math.PI/2),Pt=g*Math.sin(st*Math.PI/2)+v;for(let et=0,Mt=U.length;et<Mt;et++){const ut=z(U[et],K[et],Pt);lt(ut.x,ut.y,h+L)}for(let et=0,Mt=T.length;et<Mt;et++){const ut=T[et];mt=it[et];for(let Dt=0,xt=ut.length;Dt<xt;Dt++){const w=z(ut[Dt],mt[Dt],Pt);x?lt(w.x,w.y+S[u-1].y,S[u-1].x+L):lt(w.x,w.y,h+L)}}}Z(),rt();function Z(){const J=s.length/3;if(d){let st=0,L=F*st;for(let Pt=0;Pt<$;Pt++){const et=C[Pt];Lt(et[2]+L,et[1]+L,et[0]+L)}st=u+m*2,L=F*st;for(let Pt=0;Pt<$;Pt++){const et=C[Pt];Lt(et[0]+L,et[1]+L,et[2]+L)}}else{for(let st=0;st<$;st++){const L=C[st];Lt(L[2],L[1],L[0])}for(let st=0;st<$;st++){const L=C[st];Lt(L[0]+F*u,L[1]+F*u,L[2]+F*u)}}i.addGroup(J,s.length/3-J,0)}function rt(){const J=s.length/3;let st=0;Et(U,st),st+=U.length;for(let L=0,Pt=T.length;L<Pt;L++){const et=T[L];Et(et,st),st+=et.length}i.addGroup(J,s.length/3-J,1)}function Et(J,st){let L=J.length;for(;--L>=0;){const Pt=L;let et=L-1;et<0&&(et=J.length-1);for(let Mt=0,ut=u+m*2;Mt<ut;Mt++){const Dt=F*Mt,xt=F*(Mt+1),w=st+Pt+Dt,y=st+et+Dt,H=st+et+xt,q=st+Pt+xt;Vt(w,y,H,q)}}}function lt(J,st,L){c.push(J),c.push(st),c.push(L)}function Lt(J,st,L){Ot(J),Ot(st),Ot(L);const Pt=s.length/3,et=b.generateTopUV(i,s,Pt-3,Pt-2,Pt-1);ie(et[0]),ie(et[1]),ie(et[2])}function Vt(J,st,L,Pt){Ot(J),Ot(st),Ot(Pt),Ot(st),Ot(L),Ot(Pt);const et=s.length/3,Mt=b.generateSideWallUV(i,s,et-6,et-3,et-2,et-1);ie(Mt[0]),ie(Mt[1]),ie(Mt[3]),ie(Mt[1]),ie(Mt[2]),ie(Mt[3])}function Ot(J){s.push(c[J*3+0]),s.push(c[J*3+1]),s.push(c[J*3+2])}function ie(J){r.push(J.x),r.push(J.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return q_(e,i,t)}static fromJSON(t,e){const i=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];i.push(o)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Ec[s.type]().fromJSON(s)),new tl(i,t.options)}}const X_={generateTopUV:function(n,t,e,i,s){const r=t[e*3],a=t[e*3+1],o=t[i*3],c=t[i*3+1],l=t[s*3],u=t[s*3+1];return[new ot(r,a),new ot(o,c),new ot(l,u)]},generateSideWallUV:function(n,t,e,i,s,r){const a=t[e*3],o=t[e*3+1],c=t[e*3+2],l=t[i*3],u=t[i*3+1],h=t[i*3+2],d=t[s*3],f=t[s*3+1],g=t[s*3+2],v=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(o-u)<Math.abs(a-l)?[new ot(a,1-c),new ot(l,1-h),new ot(d,1-g),new ot(v,1-p)]:[new ot(o,1-c),new ot(u,1-h),new ot(f,1-g),new ot(m,1-p)]}};function q_(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class di extends Js{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new di(t.radius,t.detail)}}class Di extends Js{constructor(t=1,e=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Di(t.radius,t.detail)}}class Fa extends Pe{constructor(t=.5,e=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);const o=[],c=[],l=[],u=[];let h=t;const d=(e-t)/s,f=new I,g=new ot;for(let v=0;v<=s;v++){for(let m=0;m<=i;m++){const p=r+m/i*a;f.x=h*Math.cos(p),f.y=h*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,u.push(g.x,g.y)}h+=d}for(let v=0;v<s;v++){const m=v*(i+1);for(let p=0;p<i;p++){const b=p+m,S=b,x=b+i+1,D=b+i+2,R=b+1;o.push(S,x,R),o.push(x,D,R)}}this.setIndex(o),this.setAttribute("position",new ne(c,3)),this.setAttribute("normal",new ne(l,3)),this.setAttribute("uv",new ne(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fa(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Gn extends Pe{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let l=0;const u=[],h=new I,d=new I,f=[],g=[],v=[],m=[];for(let p=0;p<=i;p++){const b=[],S=p/i;let x=0;p===0&&a===0?x=.5/e:p===i&&c===Math.PI&&(x=-.5/e);for(let D=0;D<=e;D++){const R=D/e;h.x=-t*Math.cos(s+R*r)*Math.sin(a+S*o),h.y=t*Math.cos(a+S*o),h.z=t*Math.sin(s+R*r)*Math.sin(a+S*o),g.push(h.x,h.y,h.z),d.copy(h).normalize(),v.push(d.x,d.y,d.z),m.push(R+x,1-S),b.push(l++)}u.push(b)}for(let p=0;p<i;p++)for(let b=0;b<e;b++){const S=u[p][b+1],x=u[p][b],D=u[p+1][b],R=u[p+1][b+1];(p!==0||a>0)&&f.push(S,x,R),(p!==i-1||c<Math.PI)&&f.push(x,D,R)}this.setIndex(f),this.setAttribute("position",new ne(g,3)),this.setAttribute("normal",new ne(v,3)),this.setAttribute("uv",new ne(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ba extends Js{constructor(t=1,e=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,s,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ba(t.radius,t.detail)}}class br extends Pe{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const a=[],o=[],c=[],l=[],u=new I,h=new I,d=new I;for(let f=0;f<=i;f++)for(let g=0;g<=s;g++){const v=g/s*r,m=f/i*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(v),h.y=(t+e*Math.cos(m))*Math.sin(v),h.z=e*Math.sin(m),o.push(h.x,h.y,h.z),u.x=t*Math.cos(v),u.y=t*Math.sin(v),d.subVectors(h,u).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=s;g++){const v=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,b=(s+1)*f+g;a.push(v,m,b),a.push(m,p,b)}this.setIndex(a),this.setAttribute("position",new ne(o,3)),this.setAttribute("normal",new ne(c,3)),this.setAttribute("uv",new ne(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new br(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class el extends Pe{constructor(t=1,e=.4,i=64,s=8,r=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:i,radialSegments:s,p:r,q:a},i=Math.floor(i),s=Math.floor(s);const o=[],c=[],l=[],u=[],h=new I,d=new I,f=new I,g=new I,v=new I,m=new I,p=new I;for(let S=0;S<=i;++S){const x=S/i*r*Math.PI*2;b(x,r,a,t,f),b(x+.01,r,a,t,g),m.subVectors(g,f),p.addVectors(g,f),v.crossVectors(m,p),p.crossVectors(v,m),v.normalize(),p.normalize();for(let D=0;D<=s;++D){const R=D/s*Math.PI*2,P=-e*Math.cos(R),A=e*Math.sin(R);h.x=f.x+(P*p.x+A*v.x),h.y=f.y+(P*p.y+A*v.y),h.z=f.z+(P*p.z+A*v.z),c.push(h.x,h.y,h.z),d.subVectors(h,f).normalize(),l.push(d.x,d.y,d.z),u.push(S/i),u.push(D/s)}}for(let S=1;S<=i;S++)for(let x=1;x<=s;x++){const D=(s+1)*(S-1)+(x-1),R=(s+1)*S+(x-1),P=(s+1)*S+x,A=(s+1)*(S-1)+x;o.push(D,R,A),o.push(R,P,A)}this.setIndex(o),this.setAttribute("position",new ne(c,3)),this.setAttribute("normal",new ne(l,3)),this.setAttribute("uv",new ne(u,2));function b(S,x,D,R,P){const A=Math.cos(S),M=Math.sin(S),_=D/x*S,T=Math.cos(_);P.x=R*(2+T)*.5*A,P.y=R*(2+T)*M*.5,P.z=R*Math.sin(_)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new el(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}}class We extends os{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wh,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class nl extends Ne{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Y_ extends nl{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Io=new le,Nu=new I,Ou=new I;class Qh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.map=null,this.mapPass=null,this.matrix=new le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yc,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Nu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Nu),Ou.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ou),e.updateMatrixWorld(),Io.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Io),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Io)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Fu=new le,cr=new I,Lo=new I;class Z_ extends Qh{constructor(){super(new An(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ot(4,2),this._viewportCount=6,this._viewports=[new ve(2,1,1,1),new ve(0,1,1,1),new ve(3,1,1,1),new ve(1,1,1,1),new ve(3,0,1,1),new ve(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),cr.setFromMatrixPosition(t.matrixWorld),i.position.copy(cr),Lo.copy(i.position),Lo.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Lo),i.updateMatrixWorld(),s.makeTranslation(-cr.x,-cr.y,-cr.z),Fu.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fu)}}class td extends nl{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Z_}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class j_ extends Qh{constructor(){super(new Zc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Bu extends nl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.target=new Ne,this.shadow=new j_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class J_{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ku(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=ku();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function ku(){return performance.now()}const zu=new le;class K_{constructor(t,e,i=0,s=1/0){this.ray=new $a(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new qc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return zu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(zu),this}intersectObject(t,e=!0,i=[]){return Rc(t,this,i,e),i.sort(Vu),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Rc(t[s],this,i,e);return i.sort(Vu),i}}function Vu(n,t){return n.distance-t.distance}function Rc(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let a=0,o=r.length;a<o;a++)Rc(r[a],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bc);const lr=new I;function Sn(n,t,e,i,s,r){const a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;lr.copy(t),lr[i]=0,lr.normalize();const l=.5*a/(a+o),u=1-lr.angleTo(n)/c;return Math.sign(lr[e])===1?u*l:o/(a+o)+l+l*(1-u)}class Q_ extends an{constructor(t=1,e=1,i=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,i/2,r),super(1,1,1,s,s,s),s===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const o=new I,c=new I,l=new I(t,e,i).divideScalar(2).subScalar(r),u=this.attributes.position.array,h=this.attributes.normal.array,d=this.attributes.uv.array,f=u.length/6,g=new I,v=.5/s;for(let m=0,p=0;m<u.length;m+=3,p+=2)switch(o.fromArray(u,m),c.copy(o),c.x-=Math.sign(c.x)*v,c.y-=Math.sign(c.y)*v,c.z-=Math.sign(c.z)*v,c.normalize(),u[m+0]=l.x*Math.sign(o.x)+c.x*r,u[m+1]=l.y*Math.sign(o.y)+c.y*r,u[m+2]=l.z*Math.sign(o.z)+c.z*r,h[m+0]=c.x,h[m+1]=c.y,h[m+2]=c.z,Math.floor(m/f)){case 0:g.set(1,0,0),d[p+0]=Sn(g,c,"z","y",r,i),d[p+1]=1-Sn(g,c,"y","z",r,e);break;case 1:g.set(-1,0,0),d[p+0]=1-Sn(g,c,"z","y",r,i),d[p+1]=1-Sn(g,c,"y","z",r,e);break;case 2:g.set(0,1,0),d[p+0]=1-Sn(g,c,"x","z",r,t),d[p+1]=Sn(g,c,"z","x",r,i);break;case 3:g.set(0,-1,0),d[p+0]=1-Sn(g,c,"x","z",r,t),d[p+1]=1-Sn(g,c,"z","x",r,i);break;case 4:g.set(0,0,1),d[p+0]=1-Sn(g,c,"x","y",r,t),d[p+1]=1-Sn(g,c,"y","x",r,e);break;case 5:g.set(0,0,-1),d[p+0]=Sn(g,c,"x","y",r,t),d[p+1]=1-Sn(g,c,"y","x",r,e);break}}}const Hu=new Map;function Nt(n,t){let e=Hu.get(n);return e||(e=t(),Hu.set(n,e)),e}function ye(n,t={}){return new We({color:n,roughness:.62,metalness:.08,flatShading:!0,...t})}function Bt(n,t,e=[0,0,0],i){const s=new $t(n,t);return s.position.set(...e),s.castShadow=!0,i?.add(s),s}const tx=new me({color:"#fffbe8"}),ed=new me({color:"#1b1612"});function Vn(n,t,e,i,s=.055){for(const r of[-1,1]){const a=Bt(Nt(`eye${s}`,()=>new Gn(s,8,6)),tx,[r*i,t,e],n);a.castShadow=!1,Bt(Nt(`pup${s}`,()=>new Gn(s*.55,6,5)),ed,[0,0,s*.6],a).castShadow=!1}}const ex={carvunio(n,t,e){const i=ye("#3a2f2c",{roughness:.9}),s=ye("#ff6a1f",{emissive:"#ff4a10",emissiveIntensity:1.4});e.push(i,s),Bt(Nt("carv-t",()=>new On(.22,0)),i,[0,.24,0],t).scale.set(1,.85,1.35);const a=Bt(Nt("carv-h",()=>new Re(.15,.3,6)),i,[0,.3,.3],t);a.rotation.x=Math.PI/2;for(const l of[-1,1])Bt(Nt("carv-e",()=>new Re(.06,.12,4)),s,[l*.1,.45,.2],t);Vn(t,.36,.36,.07,.04);const o=new we;o.position.set(0,.25,-.27),t.add(o);const c=[];for(let l=0;l<4;l++)c.push(Bt(Nt(`carv-tail${l}`,()=>new Gn(.06-l*.008,6,5)),s,[0,l*.07,-l*.07],o));return l=>{o.rotation.y=Math.sin(l*5)*.4,s.emissiveIntensity=1.1+Math.sin(l*7)*.4,c[3].position.y=.21+Math.sin(l*6)*.03}},cinzalon(n,t,e){const i=ye("#c9a184",{roughness:.5}),s=ye("#ff5a1f",{emissive:"#ff3d00",emissiveIntensity:1.2});e.push(i,s);const r=Bt(Nt("cin-t",()=>new Mr(.13,.36,3,6)),i,[0,.38,0],t);r.rotation.x=Math.PI/2,Bt(Nt("cin-c",()=>new an(.03,.2,.3)),s,[.12,.42,0],t);for(const[c,l]of[[-.09,.17],[.09,.17],[-.09,-.17],[.09,-.17]])Bt(Nt("cin-l",()=>new be(.035,.03,.3,5)),i,[c,.15,l],t);const a=Bt(Nt("cin-h",()=>new di(.14,0)),i,[0,.58,.28],t);for(const c of[-1,1]){const l=Bt(Nt("cin-ear",()=>new Re(.05,.14,3)),i,[c*.08,.12,0],a);l.rotation.z=-c*.25}Vn(a,.02,.12,.06,.035);const o=Bt(Nt("cin-tail",()=>new Re(.03,.42,5)),i,[0,.5,-.32],t);return o.rotation.x=-.9,c=>{o.rotation.z=Math.sin(c*2.4)*.35,s.emissiveIntensity=.9+Math.sin(c*3)*.35}},goteju(n,t,e){const i=ye("#4cc9f0",{roughness:.15,metalness:.2,transparent:!0,opacity:.88}),s=ye("#f2d7b6");e.push(i,s);const r=Bt(Nt("got-d",()=>{const a=new Gn(.24,12,10),o=a.attributes.position;for(let c=0;c<o.count;c++){const l=o.getY(c);if(l>0){const u=1-l/.24*.75;o.setX(c,o.getX(c)*u),o.setZ(c,o.getZ(c)*u),o.setY(c,l*1.7)}}return a.computeVertexNormals(),a}),i,[0,.3,0],t);for(const a of[-1,1]){const o=Bt(Nt("got-f",()=>new Re(.09,.08,7)),s,[a*.12,.05,.05],t);o.rotation.x=Math.PI}return Vn(t,.36,.2,.08,.045),a=>{r.scale.set(1+Math.sin(a*4)*.04,1-Math.sin(a*4)*.05,1+Math.sin(a*4)*.04)}},nacarino(n,t,e){const i=ye("#f4ece4",{roughness:.25,metalness:.3}),s=ye("#9ad7e6",{roughness:.3}),r=ye("#e7a6b4");e.push(i,s,r),Bt(Nt("nac-foot",()=>new Mr(.12,.3,3,8)),r,[0,.1,.05],t).rotation.x=Math.PI/2;const a=new we;a.position.set(0,.28,-.05),t.add(a);for(let c=0;c<5;c++){const l=.24-c*.04,u=Bt(Nt(`nac-s${c}`,()=>new Gn(l,10,8,0,Math.PI*2,0,Math.PI/2)),c%2?s:i,[0,c*.06,-c*.03],a);u.rotation.x=-.3}const o=new we;o.position.set(0,.18,.25),t.add(o);for(const c of[-1,1]){const l=Bt(Nt("nac-st",()=>new be(.015,.02,.18,4)),r,[c*.05,.1,0],o);l.rotation.z=c*.3}return Vn(o,.2,0,.08,.035),c=>{a.rotation.y=Math.sin(c*1.3)*.12,o.position.z=.25+Math.sin(c*2)*.02}},musgote(n,t,e){const i=ye("#6fbf5a",{roughness:.95}),s=ye("#7a5a3a"),r=ye("#b7e06a");e.push(i,s,r),Bt(Nt("mus-b",()=>new On(.21,1)),i,[0,.24,-.02],t);const a=Bt(Nt("mus-h",()=>new On(.15,0)),i,[0,.44,.15],t),o=[];for(const c of[-1,1]){const l=Bt(Nt("mus-ear",()=>new Re(.06,.3,4)),r,[c*.07,.2,-.03],a);l.rotation.z=-c*.2,o.push(l)}return Vn(a,.02,.13,.06,.035),Bt(Nt("mus-tail",()=>new Gn(.07,6,5)),s,[0,.25,-.24],t),c=>{o.forEach((l,u)=>l.rotation.x=Math.sin(c*3+u)*.18)}},larveira(n,t,e){const i=ye("#8cc56a"),s=ye("#6b4a2e",{roughness:.95});e.push(i,s);const r=[];for(let a=0;a<5;a++)r.push(Bt(Nt("lar-s",()=>new di(.12,0)),a===0?i:a%2?s:i,[0,.13,.26-a*.14],t));r[0].scale.setScalar(1.2),Vn(r[0],.04,.1,.06,.03);for(const a of[-1,1]){const o=Bt(Nt("lar-h",()=>new Re(.025,.2,4)),s,[a*.05,.16,0],r[0]);o.rotation.z=-a*.5}return a=>{r.forEach((o,c)=>o.position.y=.13+Math.max(0,Math.sin(a*4-c*.9))*.06)}},pedruxo(n,t,e){const i=ye("#a99a82",{roughness:.95}),s=ye("#6e6252",{roughness:1});e.push(i,s),Bt(Nt("ped-t",()=>new On(.26,0)),i,[0,.24,-.02],t).scale.set(1.15,.75,1.25);const a=Bt(Nt("ped-h",()=>new On(.15,0)),i,[0,.28,.32],t);Vn(a,.05,.11,.08,.035);for(let c=0;c<3;c++){const l=Bt(Nt("ped-p",()=>new be(.09,.11,.06,6)),s,[0,.43,.12-c*.14],t);l.rotation.x=.2}for(const[c,l]of[[-.2,.15],[.2,.15],[-.2,-.18],[.2,-.18]])Bt(Nt("ped-l",()=>new an(.1,.12,.12)),s,[c,.06,l],t);const o=Bt(Nt("ped-tail",()=>new Re(.08,.3,5)),i,[0,.2,-.38],t);return o.rotation.x=-Math.PI/2,c=>{o.rotation.z=Math.sin(c*1.5)*.2}},mineruva(n,t,e){const i=ye("#7d8aa3",{roughness:.4,metalness:.3}),s=ye("#d8e2ff",{roughness:.2,metalness:.4}),r=new me({color:"#ffcf5c"});e.push(i,s),Bt(Nt("min-t",()=>new Di(.25,0)),i,[0,.4,0],t).scale.set(.9,1.25,.8);const o=[];for(const c of[-1,1]){const l=Bt(Nt("min-w",()=>new Ba(.2,0)),s,[c*.2,.38,-.02],t);l.scale.set(.5,1.4,1),o.push(l)}for(const c of[-1,1]){const l=Bt(Nt("min-tuft",()=>new Re(.05,.16,4)),s,[c*.09,.7,.02],t);l.rotation.z=-c*.3}for(const c of[-1,1])Bt(Nt("min-eye",()=>new Ri(.065,10)),r,[c*.075,.52,.18],t).castShadow=!1;return c=>{o.forEach((l,u)=>l.rotation.z=(u?-1:1)*(.15+Math.sin(c*2.2)*.08))}},zirpim(n,t,e){const i=ye("#f5e663",{emissive:"#d6b800",emissiveIntensity:.5,roughness:.4}),s=ye("#2b2a3a"),r=ye("#7ef9ff",{emissive:"#2fd3ff",emissiveIntensity:1});e.push(i,s,r);const a=Bt(Nt("zir-t",()=>new Mr(.1,.32,3,6)),i,[0,.36,0],t);a.rotation.x=Math.PI/2;const o=Bt(Nt("zir-h",()=>new Re(.11,.24,4)),i,[0,.4,.3],t);o.rotation.x=Math.PI/2,Vn(t,.46,.28,.06,.035);const c=[];for(const[u,h]of[[-.1,.12],[.1,.12],[-.1,-.12],[.1,-.12]])c.push(Bt(Nt("zir-sp",()=>new el(.03,.01,24,4,1,5)),r,[u,.14,h],t));c.forEach(u=>u.rotation.x=Math.PI/2);const l=Bt(Nt("zir-tail",()=>new Re(.05,.36,4)),s,[0,.36,-.36],t);return l.rotation.x=-Math.PI/2,u=>{const h=1+Math.abs(Math.sin(u*6))*.35;c.forEach(d=>d.scale.z=h),t.position.y=(h-1)*.08}},falcorrente(n,t,e){const i=ye("#46506a",{metalness:.5,roughness:.35}),s=ye("#ffe066",{emissive:"#ffd000",emissiveIntensity:1.2});e.push(i,s),t.position.y=.25,Bt(Nt("fal-t",()=>new Di(.17,0)),i,[0,.35,0],t).scale.set(.9,.9,1.6),Bt(Nt("fal-h",()=>new Ba(.12,0)),i,[0,.42,.24],t).rotation.set(.5,.8,0),Bt(Nt("fal-beak",()=>new Re(.03,.1,4)),s,[0,.4,.34],t).rotation.x=Math.PI/2,Vn(t,.46,.27,.06,.03);const o=[];for(const l of[-1,1]){const u=new we;u.position.set(l*.12,.38,0),t.add(u),o.push(u);for(let h=0;h<3;h++){const d=Bt(Nt("fal-f",()=>new an(.16,.02,.12)),h===1?s:i,[l*(.1+h*.14),0,-h*.03],u);d.rotation.y=l*h*.15}}const c=new $t(Nt("fal-sh",()=>new Ri(.22,12)),new me({color:"#000",transparent:!0,opacity:.25,depthWrite:!1}));return c.rotation.x=-Math.PI/2,c.position.y=.02,n.add(c),l=>{o.forEach((u,h)=>u.rotation.z=(h?-1:1)*Math.sin(l*7)*.45),t.position.y=.25+Math.sin(l*2)*.05}},lampejo(n,t,e){const i=ye("#b49cff",{emissive:"#7a5cff",emissiveIntensity:.6,roughness:.3,side:mn}),s=new me({color:"#fff4c8"});e.push(i),t.position.y=.3;const r=Bt(Nt("lam-d",()=>{const c=new Zh;return c.moveTo(0,.3),c.quadraticCurveTo(.34,.05,.3,-.12),c.quadraticCurveTo(.1,-.05,0,-.18),c.quadraticCurveTo(-.1,-.05,-.3,-.12),c.quadraticCurveTo(-.34,.05,0,.3),new tl(c,{depth:.05,bevelEnabled:!1})}),i,[0,.25,0],t);r.rotation.x=-Math.PI/2;const a=Bt(Nt("lam-t",()=>new be(.008,.02,.4,4)),i,[0,.25,-.35],t);a.rotation.x=Math.PI/2;for(const[c,l]of[[.12,0],[-.1,.06],[.02,-.08]])Bt(Nt("lam-s",()=>new Di(.025,0)),s,[c,.31,l],t).castShadow=!1;Vn(t,.31,.2,.07,.03);const o=new $t(Nt("fal-sh",()=>new Ri(.22,12)),new me({color:"#000",transparent:!0,opacity:.22,depthWrite:!1}));return o.rotation.x=-Math.PI/2,o.position.y=.02,n.add(o),c=>{t.position.y=.3+Math.sin(c*1.8)*.06,r.rotation.y=Math.sin(c*2.5)*.15,i.emissiveIntensity=.5+Math.sin(c*3)*.2}},nebuliz(n,t,e){const i=ye("#e9e4ff",{roughness:1,transparent:!0,opacity:.92}),s=ye("#b5704a",{roughness:.8});e.push(i,s),t.position.y=.25;const r=[];for(const[o,c,l,u]of[[0,.3,0,.2],[.17,.26,-.03,.14],[-.17,.27,-.02,.15],[0,.42,-.06,.13],[.05,.22,-.17,.13]])r.push(Bt(Nt(`neb${u}`,()=>new di(u,1)),i,[o,c,l],t));const a=Bt(Nt("neb-m",()=>new Gn(.14,10,8,0,Math.PI*2,0,Math.PI/2)),s,[0,.32,.13],t);a.rotation.x=Math.PI/2;for(const o of[-1,1])Bt(Nt("neb-e",()=>new Ri(.03,8)),ed,[o*.05,.035,-.01],a).rotation.x=-Math.PI/2;return o=>{r.forEach((c,l)=>c.scale.setScalar(1+Math.sin(o*1.6+l)*.06)),t.position.y=.25+Math.sin(o*1.2)*.04}}};
/* Obelisco 3D próprio, não é um Eco comprável. */
ex.simbolo=(root,pivot,materials)=>{
  const stone=ye("#625777",{metalness:.38,roughness:.48});
  const trim=ye("#d6ab63",{metalness:.7,roughness:.3});
  const jewel=ye("#fbe7a8",{emissive:"#ffc957",emissiveIntensity:1.4,roughness:.2});
  materials.push(stone,trim,jewel);
  const base=new $t(new an(.54,.18,.54),stone);base.position.set(0,.09,0);pivot.add(base);
  const edge=new $t(new an(.42,.075,.42),trim);edge.position.set(0,.21,0);pivot.add(edge);
  const spire=new $t(new Re(.095,.20,.68,6),stone);spire.position.set(0,.57,0);spire.castShadow=true;pivot.add(spire);
  const ring=new $t(new Re(.23,.18,.09,6),trim);ring.position.set(0,.89,0);pivot.add(ring);
  const crystal=new $t(new Ri(.15,10,8),jewel);crystal.position.set(0,1.06,0);pivot.add(crystal);
  return time=>{crystal.position.y=1.06+Math.sin(time*2.6)*.035;crystal.rotation.y=time*.6};
};
function nx(n){const t=new we,e=new we;t.add(e);const i=[],s=ex[n],r=s?s(t,e,i):()=>{};return e.scale.setScalar(1.3),{root:t,body:e,idle:r,materials:i}}function ix(n,t=!1){const e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},a={},o=n[0].morphTargetsRelative,c=new Pe;let l=0;for(let u=0;u<n.length;++u){const h=n[u];let d=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in h.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(h.attributes[f]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in h.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(h.morphAttributes[f])}if(t){let f;if(e)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,u),l+=f}}if(e){let u=0;const h=[];for(let d=0;d<n.length;++d){const f=n[d].index;for(let g=0;g<f.count;++g)h.push(f.getX(g)+u);u+=n[d].attributes.position.count}c.setIndex(h)}for(const u in r){const h=Gu(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,h)}for(const u in a){const h=a[u][0].length;if(h===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let d=0;d<h;++d){const f=[];for(let v=0;v<a[u].length;++v)f.push(a[u][v][d]);const g=Gu(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(g)}}return c}function Gu(n){let t,e,i,s=-1,r=0;for(let l=0;l<n.length;++l){const u=n[l];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}const a=new t(r),o=new _n(a,e,i);let c=0;for(let l=0;l<n.length;++l){const u=n[l];if(u.isInterleavedBufferAttribute){const h=c/e;for(let d=0,f=u.count;d<f;d++)for(let g=0;g<e;g++){const v=u.getComponent(d,g);o.setComponent(d+h,g,v)}}else a.set(u.array,c);c+=u.count*e}return s!==void 0&&(o.gpuType=s),o}function Le(n){let t=n>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function Ke(n=128){const t=document.createElement("canvas");return t.width=t.height=n,[t,t.getContext("2d")]}function Qe(n,t=!1,e=!0){const i=new Wh(n);return e&&(i.colorSpace=sn),t&&(i.wrapS=i.wrapT=La),i.anisotropy=4,i}function ur(n,t,e,i,s){for(let r=0;r<e;r++){n.fillStyle=i[Math.floor(t()*i.length)];const a=s[0]+t()*(s[1]-s[0]);n.globalAlpha=.25+t()*.5,n.fillRect(t()*128,t()*128,a,a)}n.globalAlpha=1}function va(n,t,e,i,s){n.strokeStyle=e,n.lineWidth=i,n.lineCap="round";for(let r=0;r<s;r++){let a=t()*128,o=t()*128;n.beginPath(),n.moveTo(a,o);for(let c=0;c<5;c++)a+=(t()-.5)*40,o+=(t()-.5)*40,n.lineTo(a,o);n.stroke()}}function Es(n,t=.45){const e=n.createRadialGradient(64,64,30,64,64,92);e.addColorStop(0,"rgba(0,0,0,0)"),e.addColorStop(1,`rgba(0,0,0,${t})`),n.fillStyle=e,n.fillRect(0,0,128,128),n.strokeStyle="rgba(255,240,220,0.18)",n.lineWidth=3,n.strokeRect(3,3,122,122)}const Wu=new Map;function tn(n,t){let e=Wu.get(n);return e||(e=t(),Wu.set(n,e)),e}const Ye={rocha:()=>tn("rocha",()=>{const[n,t]=Ke(),e=Le(11);return t.fillStyle="#8a837c",t.fillRect(0,0,128,128),t.strokeStyle="rgba(40,32,28,0.55)",t.lineWidth=2,t.beginPath(),t.moveTo(0,58+e()*12),t.lineTo(128,62+e()*10),t.moveTo(52+e()*20,0),t.lineTo(60+e()*10,64),t.moveTo(40+e()*50,64),t.lineTo(46+e()*50,128),t.stroke(),ur(t,e,500,["#6e6760","#9d968e","#5c554f","#a8a097"],[1,3]),va(t,e,"rgba(30,24,20,0.35)",1,3),Es(t),Qe(n)}),parede:()=>tn("parede",()=>{const[n,t]=Ke(),e=Le(5);return t.fillStyle="#5f554e",t.fillRect(0,0,128,128),ur(t,e,400,["#4a423c","#6e645c","#3b342f"],[1,4]),Es(t,.6),Qe(n)}),cinza:()=>tn("cinza",()=>{const[n,t]=Ke(),e=Le(21);return t.fillStyle="#4a4542",t.fillRect(0,0,128,128),ur(t,e,700,["#2f2b29","#5d5753","#6a625d","#3a2420"],[1,3]),va(t,Le(22),"#1a1210",3,6),Es(t),Qe(n)}),cinzaGlow:()=>tn("cinzaGlow",()=>{const[n,t]=Ke();t.fillStyle="#000",t.fillRect(0,0,128,128),va(t,Le(22),"#ff6a1a",1.6,6);const e=Le(23);for(let i=0;i<26;i++)t.fillStyle=e()>.5?"#ff4a0a":"#ffb03a",t.globalAlpha=.5+e()*.5,t.beginPath(),t.arc(e()*128,e()*128,1+e()*1.6,0,7),t.fill();return t.globalAlpha=1,Qe(n)}),mata:()=>tn("mata",()=>{const[n,t]=Ke(),e=Le(31);t.fillStyle="#3f6b34",t.fillRect(0,0,128,128);for(let i=0;i<420;i++){t.strokeStyle=["#5e9a46","#2f5527","#7bb35a","#476f35"][Math.floor(e()*4)],t.lineWidth=1.2;const s=e()*128,r=e()*128;t.beginPath(),t.moveTo(s,r),t.lineTo(s+(e()-.5)*4,r-3-e()*4),t.stroke()}return Es(t,.4),Qe(n)}),cristal:()=>tn("cristal",()=>{const[n,t]=Ke(),e=Le(41);return t.fillStyle="#4b5280",t.fillRect(0,0,128,128),ur(t,e,300,["#3a3f66","#5f67a0","#2f3355"],[1,4]),va(t,Le(42),"rgba(170,190,255,0.7)",1.4,5),Es(t),Qe(n)}),condutor:()=>tn("condutor",()=>{const[n,t]=Ke(),e=Le(51);t.fillStyle="#7a5a30",t.fillRect(0,0,128,128),ur(t,e,260,["#5d4322","#9b7440","#4a3a28"],[1,3]),t.strokeStyle="#c99550",t.lineWidth=3;for(const i of[32,64,96])t.beginPath(),t.moveTo(i,8),t.lineTo(i,120),t.stroke();t.fillStyle="#e2b670";for(const[i,s]of[[14,14],[114,14],[14,114],[114,114]])t.beginPath(),t.arc(i,s,4,0,7),t.fill();return Es(t),Qe(n)}),ponte:()=>tn("ponte",()=>{const[n,t]=Ke(),e=Le(61);t.fillStyle="#2a1a10",t.fillRect(0,0,128,128);for(let i=0;i<5;i++){const s=4+i*25;t.fillStyle=["#8d6440","#7a5536","#9b7048"][i%3],t.fillRect(2,s,124,21),t.strokeStyle="rgba(40,24,12,0.5)",t.lineWidth=1;for(let r=0;r<4;r++)t.beginPath(),t.moveTo(2,s+4+e()*14),t.lineTo(126,s+4+e()*14),t.stroke();t.fillStyle="#3a2a1c",t.fillRect(10,s+8,3,3),t.fillRect(114,s+8,3,3)}return Qe(n)}),agua:()=>tn("agua",()=>{const[n,t]=Ke(),e=Le(71);t.fillStyle="#1f6f96",t.fillRect(0,0,128,128),t.strokeStyle="rgba(190,240,255,0.55)",t.lineWidth=1.4;for(let i=0;i<26;i++){const s=e()*128,r=e()*128,a=10+e()*16;for(const o of[-128,0,128])for(const c of[-128,0,128])t.beginPath(),t.moveTo(s+o,r+c),t.quadraticCurveTo(s+o+a/2,r+c-3,s+o+a,r+c),t.stroke()}return Qe(n,!0)}),lava:()=>tn("lava",()=>{const[n,t]=Ke(),e=Le(81),i=t.createLinearGradient(0,0,128,128);i.addColorStop(0,"#ff7a1a"),i.addColorStop(.5,"#ffb43a"),i.addColorStop(1,"#ff5a10"),t.fillStyle=i,t.fillRect(0,0,128,128);for(let s=0;s<22;s++){const r=e()*128,a=e()*128,o=6+e()*16;for(const c of[-128,0,128])for(const l of[-128,0,128]){t.fillStyle=e()>.4?"rgba(60,14,4,0.85)":"rgba(120,30,6,0.7)",t.beginPath();for(let u=0;u<6;u++){const h=u/6*Math.PI*2,d=o*(.6+.4*Math.sin(u*2.3+s));t.lineTo(r+c+Math.cos(h)*d,a+l+Math.sin(h)*d)}t.fill()}}return Qe(n,!0)}),magma:()=>tn("magma",()=>{const[n,t]=Ke(256),e=Le(77);t.fillStyle="#1a0805",t.fillRect(0,0,256,256);for(let i=0;i<40;i++){const s=e()*256,r=e()*256,a=18+e()*46;for(const o of[-256,0,256])for(const c of[-256,0,256]){const l=t.createRadialGradient(s+o,r+c,0,s+o,r+c,a);l.addColorStop(0,e()>.5?"rgba(255,120,30,0.55)":"rgba(255,70,15,0.45)"),l.addColorStop(1,"rgba(255,60,10,0)"),t.fillStyle=l,t.fillRect(s+o-a,r+c-a,a*2,a*2)}}return Qe(n,!0)}),soft:()=>tn("soft",()=>{const[n,t]=Ke(64),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.4,"rgba(255,255,255,0.45)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),Qe(n)}),rune:()=>tn("rune",()=>{const[n,t]=Ke(256);t.translate(128,128),t.strokeStyle="#ffe3a0",t.fillStyle="#ffe3a0",t.lineWidth=4,t.beginPath(),t.arc(0,0,118,0,7),t.stroke(),t.lineWidth=2,t.beginPath(),t.arc(0,0,96,0,7),t.stroke();const e=Le(91);for(let i=0;i<18;i++)t.save(),t.rotate(i/18*Math.PI*2),t.translate(0,-107),t.beginPath(),t.moveTo(-5,-5),t.lineTo(e()*8-4,5),t.lineTo(5,-4),e()>.5&&(t.moveTo(0,-6),t.lineTo(0,6)),t.stroke(),t.restore();t.lineWidth=3,t.beginPath();for(let i=0;i<4;i++){const s=i/4*Math.PI*2+Math.PI/4;t.lineTo(Math.cos(s)*80,Math.sin(s)*80)}return t.closePath(),t.stroke(),Qe(n)}),swirl:()=>tn("swirl",()=>{const[n,t]=Ke(128);t.translate(64,64);for(let i=0;i<90;i++){const s=i*.32,r=i*.68;t.fillStyle=`rgba(255,255,255,${.12+i%3*.12})`,t.beginPath(),t.arc(Math.cos(s)*r,Math.sin(s)*r,3+i*.05,0,7),t.fill()}const e=t.createRadialGradient(0,0,0,0,0,64);return e.addColorStop(0,"rgba(255,255,255,0.8)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(-64,-64,128,128),Qe(n)}),fade:()=>tn("fade",()=>{const[n,t]=Ke(128),e=t.createRadialGradient(64,64,10,64,64,64);return e.addColorStop(0,"#fff"),e.addColorStop(.55,"#aaa"),e.addColorStop(1,"#000"),t.fillStyle=e,t.fillRect(0,0,128,128),Qe(n,!1,!1)})},pr={B:"#4fd1c1",A:"#ea4f6a"},bn=n=>new We({flatShading:!0,roughness:.9,...n});function sx(){const n=Ye.lava(),t=new We({map:n,emissive:"#ffffff",emissiveMap:n,emissiveIntensity:1.05,roughness:.7}),e=new We({map:Ye.agua(),color:"#9fdcff",roughness:.15,metalness:.1,transparent:!0,opacity:.88}),i=new We({map:Ye.cinza(),emissive:"#ffffff",emissiveMap:Ye.cinzaGlow(),emissiveIntensity:.9,roughness:.95});return{materials:{rocha:new We({map:Ye.rocha(),roughness:.95}),parede:new We({map:Ye.parede(),roughness:1}),cinza:i,agua:e,mata:new We({map:Ye.mata(),roughness:1}),cristal:new We({map:Ye.cristal(),roughness:.5,metalness:.15}),condutor:new We({map:Ye.condutor(),roughness:.45,metalness:.55}),fenda:new We({color:"#3c2c5c",emissive:"#5b2fb0",emissiveIntensity:.4}),ponte:new We({map:Ye.ponte(),roughness:.9}),lava:t},lava:t,water:e,ash:i}}class nd{constructor(){Gt(this,"buckets",new Map);Gt(this,"m",new le);Gt(this,"q",new rs);Gt(this,"e",new kn)}add(t,e,i,s,r,a=0,o=1,c=0,l=0){const u=Array.isArray(o)?new I(...o):new I(o,o,o);this.q.setFromEuler(this.e.set(c,a,l)),this.m.compose(new I(i,s,r),this.q,u);const h=(t.index?t.toNonIndexed():t.clone()).applyMatrix4(this.m);for(const d of Object.keys(h.attributes))["position","normal","uv"].includes(d)||h.deleteAttribute(d);this.buckets.has(e)||this.buckets.set(e,[]),this.buckets.get(e).push(h)}flush(t,e=!0){for(const[i,s]of this.buckets){const r=ix(s,!1);if(s.forEach(o=>o.dispose()),!r)continue;const a=new $t(r,i);a.castShadow=e,a.receiveShadow=!0,t.add(a)}this.buckets.clear()}}function rx(n,t){const e=new we;n.add(e);const i=bn({color:"#3a2f2a",roughness:1}),s=bn({color:"#2a211d",roughness:1}),r=new We({color:"#2b1006",emissive:"#ff4a10",emissiveIntensity:1.3,flatShading:!0}),a=bn({color:"#1d1820",roughness:.25,metalness:.35}),o=new nd,c=Le(7);o.add(new an(9.6,.6,9.6),i,0,-.25,0);const l=new an(1,1,1);for(const C of[-1,1])o.add(l,s,0,.12,C*4.9,0,[10.2,.5,.4]),o.add(l,s,C*4.9,.12,0,0,[.4,.5,9.4]),o.add(l,r,0,.375,C*4.9,0,[9.4,.02,.06]),o.add(l,r,C*4.9,.375,0,0,[.06,.02,9.4]);for(const C of[-1,1])for(const U of[-1,1])o.add(new be(.5,.6,.5,8),s,C*5.3,.12,U*5.3);const u=new Re(6.7,5.2,10,4),h=u.attributes.position;for(let C=0;C<h.count;C++){const U=1+(c()-.5)*.28;h.setX(C,h.getX(C)*U),h.setZ(C,h.getZ(C)*U)}u.computeVertexNormals(),o.add(u,i,0,-3.15,0,.2,1,Math.PI);for(let C=0;C<14;C++){const U=c()*Math.PI*2,z=1.5+c()*4.5,F=.8+c()*2.2;o.add(new Re(.25+c()*.35,F,5),s,Math.cos(U)*z,-1-F/2-(6-z)*.45,Math.sin(U)*z,c()*3,1,Math.PI)}for(let C=0;C<16;C++){const U=C/16*Math.PI*2+c()*.25,z=5.7+c()*.6,F=Math.cos(U)*z,$=Math.sin(U)*z;if(!(Math.abs(F)<5.1&&Math.abs($)<5.1))if(C%3===0){const V=.5+c()*.9;o.add(new be(.16,.2,V,8),i,F,-.55+V/2,$,c(),1,(c()-.5)*.3,(c()-.5)*.3),o.add(new On(.16,0),s,F+.3,-.5,$-.2,c())}else o.add(new Re(.12+c()*.1,.5+c()*.7,5),a,F,-.3,$,c(),1,(c()-.5)*.5,(c()-.5)*.5)}for(let C=0;C<10;C++){const U=C/10*Math.PI*2+c()*.3;o.add(new an(.05,2.2,.05),r,Math.cos(U)*5.2,-1.6,Math.sin(U)*5.2,0,1,Math.cos(U)*.5,Math.sin(U)*.5)}const d=[];for(let C=0;C<9;C++){const U=C/9*Math.PI*2+.4,z=9.6+C%3*1.7,F=.4+C%4*.18,$=new we,V=new $t(new be(F,F*.85,.3,7),i),K=new $t(new Re(F*.85,F*2.2,7),s);if(K.rotation.x=Math.PI,K.position.y=-F*1.25,$.add(V,K),C%2===0){const it=new $t(new be(.1,.12,.6+F*.4,6),i);it.position.set(F*.3,.4,0),$.add(it)}$.position.set(Math.cos(U)*z,-2.2-C%3*1.1,Math.sin(U)*z),$.userData.phase=C,e.add($),d.push($)}const f=[new I(-8,-6,-7),new I(9,-6,-3),new I(-3,-6,9)];o.flush(e);const g=Ye.magma().clone();g.needsUpdate=!0,g.repeat.set(4,4);const v=new $t(new Ri(19,48),new me({map:g,color:"#ffffff",alphaMap:Ye.fade(),transparent:!0,opacity:.9,depthWrite:!1}));v.rotation.x=-Math.PI/2,v.position.y=-9,e.add(v);const m=Ye.lava().clone();m.needsUpdate=!0,m.repeat.set(1,2);const p=new me({map:m,color:"#ffb070"});for(const[C,U]of[[-2.6,5.12],[5.12,-2.6]]){const z=new $t(new be(.09,.03,2.6,8,1,!0),p);z.position.set(C,-1.45,U),e.add(z)}const b=[],S=[],x=new me({color:"#ffb347",transparent:!0,opacity:.9,blending:Wn,depthWrite:!1}),D=new me({color:"#fff1b0",transparent:!0,opacity:.95,blending:Wn,depthWrite:!1}),R=bn({color:"#4a3a30",metalness:.4,roughness:.6});for(const[C,U]of[[-1,-1],[1,-1],[1,1],[-1,1]]){const z=C*5.3,F=U*5.3,$=new we;$.position.set(z,0,F);const V=new $t(new be(.24,.32,.7,8),s);V.position.y=.35,V.castShadow=!0;const K=new $t(new be(.34,.2,.22,8,1,!0),R);K.position.y=.8;const it=new $t(new be(.3,.3,.05,8),r);it.position.y=.87;const mt=new $t(new Re(.22,.65,7),x);mt.position.y=1.2;const Ft=new $t(new Re(.11,.38,6),D);Ft.position.y=1.1,$.add(V,K,it,mt,Ft),b.push(mt,Ft);const Qt=new td("#ff9a4a",6,5.5,1.6);Qt.position.y=1.4,$.add(Qt),S.push(Qt),e.add($)}const P=Ye.soft(),A=(C,U,z,F,$)=>{const V=new Pe,K=new Float32Array(C*3);for(let mt=0;mt<C;mt++)$(mt,K);V.setAttribute("position",new _n(K,3));const it=new m_(V,new Gh({map:P,color:U,size:z,sizeAttenuation:!1,transparent:!0,opacity:F,depthWrite:!1,blending:U==="#ffffff"?Ii:Wn}));return e.add(it),it},M=Le(99),_=A(180,"#ff9a3c",5,.9,(C,U)=>{U[C*3]=(M()-.5)*14,U[C*3+1]=-8+M()*13,U[C*3+2]=(M()-.5)*14}),T=A(36,"#6b5a52",70,.22,(C,U)=>{const z=f[C%3];U[C*3]=z.x,U[C*3+1]=z.y+C/3*.9,U[C*3+2]=z.z});T.material.blending=Ii;const O=C=>{S.forEach(U=>U.visible=C==="alto"),T.visible=C!=="baixo",_.geometry.setDrawRange(0,C==="baixo"?60:180)};return O(t),{setQuality:O,update(C,U,z){g.offset.set(C*.012*z,C*.008*z),m.offset.y=-C*.35*z,r.emissiveIntensity=1.1+Math.sin(C*1.3)*.3*z,b.forEach((F,$)=>{const V=1+Math.sin(C*13+$*1.7)*.12*z+Math.sin(C*7.3+$)*.08*z;F.scale.set(1,V,1)}),S.forEach((F,$)=>F.intensity=6+Math.sin(C*11+$*2)*1.2*z);for(const F of d)F.position.y+=Math.sin(C*.5+F.userData.phase)*.0025*z,F.rotation.y+=8e-4*z;if(z){const F=_.geometry.attributes.position;for(let V=0;V<F.count;V++){let K=F.getY(V)+U*(.35+V%5*.12),it=F.getX(V)+Math.sin(C+V)*U*.1;K>5&&(K=-8,it=Math.sin(V*91.7+C)*.5*14),F.setXY(V,it,K)}F.needsUpdate=!0;const $=T.geometry.attributes.position;for(let V=0;V<$.count;V++){const K=f[V%3];let it=$.getY(V)+U*.45;it>K.y+7&&(it=K.y),$.setXYZ(V,K.x+(it-K.y)*.25,it,K.z-(it-K.y)*.1)}$.needsUpdate=!0}}}}const $u=(n,t,e,i)=>{const s=fe(n,t,e);return i(s.h,Ee(s))};function ax(n,t){const e=new we,i=new nd,s=A=>A-(n.width-1)/2,r=A=>A-(n.height-1)/2,a=bn({color:"#6a5e55"}),o=bn({color:"#4b413a"}),c=bn({color:"#231d24",roughness:.3,metalness:.3}),l=bn({color:"#8d6440"}),u=bn({color:"#c9a77a"}),h=bn({color:"#5a3e28"}),d=bn({color:"#5fa04c"}),f=bn({color:"#7cb85a"}),g=new We({color:"#b9c6ff",emissive:"#5b6cff",emissiveIntensity:.9,roughness:.15,metalness:.2,flatShading:!0,transparent:!0,opacity:.92}),v=new We({color:"#d99a4e",emissive:"#6a3a00",emissiveIntensity:.4,metalness:.75,roughness:.3,flatShading:!0}),m=new We({color:"#2b1b18",emissive:"#ff5a1a",emissiveIntensity:1.3,flatShading:!0}),p=[],b=Le(1234),S=[],x=[];for(const A of n.tiles){const M=Ee(A),_=s(A.x),T=r(A.y),O=t(A.h,M);if(M==="parede"){i.add(new an(.8,.14,.8),o,_,O+.07,T,b()*.3);const C=.7+b()*.35;i.add(new be(.27,.31,C,10),a,_,O+.14+C/2,T,b()),i.add(new be(.29,.27,.22,10),a,_+.04,O+.2+C,T,b(),1,.25,.1),i.add(new On(.14,0),o,_+.32,O+.08,T+.25,b()),i.add(new On(.1,0),o,_-.3,O+.06,T-.28,b()),i.add(new Di(.09,0),c,_-.2,O+.2,T+.32,b(),[1,1.8,1])}else if(M==="ponte"){const C=A.y===4;for(const U of[-1,1]){const z=C?0:U*.42,F=C?U*.42:0;for(const $ of[-1,1])i.add(new be(.04,.05,.42,5),l,_+z+(C?$*.42:0),O+.2,T+F+(C?0:$*.42));i.add(new be(.015,.015,.9,4),u,_+z,O+.34,T+F,0,1,C?0:Math.PI/2,C?Math.PI/2:0)}}else if(M==="mata"){for(const[C,U,z]of[[-.24,-.18,1],[.24,.2,.8],[.22,-.26,.6]]){const F=new we;F.position.set(_+C,O,T+U),F.scale.setScalar(z),F.userData.phase=b()*6;const $=new $t(new be(.04,.06,.3,5),h);$.position.y=.15,$.castShadow=!0;const V=new $t(new di(.2,0),d);V.position.y=.4,V.castShadow=!0;const K=new $t(new di(.14,0),f);K.position.set(.06,.58,.02),K.castShadow=!0,F.add($,V,K),e.add(F),S.push(F)}for(let C=0;C<6;C++)i.add(new Re(.025,.14,3),f,_+(b()-.5)*.8,O+.07,T+(b()-.5)*.8,b()*3)}else if(M==="cristal")for(const[C,U,z,F]of[[-.2,.15,1,.15],[.22,-.12,.75,-.25],[.15,.27,.5,.35],[-.25,-.25,.45,-.1]])i.add(new Di(.12,0),g,_+C,O+.24*z,T+U,b()*3,[z,z*2.6,z],F,F*.5);else if(M==="condutor"){const C=new I(_-.32,O+.62,T-.32),U=new I(_+.32,O+.62,T+.32);for(const F of[C,U])i.add(new be(.045,.07,.62,6),v,F.x,O+.31,F.z),i.add(new Gn(.07,8,6),v,F.x,O+.64,F.z);i.add(new br(.3,.025,6,20),v,_,O+.04,T,0,1,Math.PI/2);const z=new p_(new Pe().setFromPoints(Array.from({length:7},()=>new I)),new Hh({color:"#fff7a8",transparent:!0,opacity:.9,blending:Wn}));e.add(z),x.push({line:z,a:C,b:U})}else if(M==="cinza")for(const[C,U]of[[-.25,.2],[.22,-.2],[.05,.28],[-.12,-.27]])i.add(new di(.05+b()*.05,0),m,_+C,O+.03,T+U,b()*3);else M==="rocha"&&b()<.18&&i.add(new On(.04+b()*.04,0),a,_+(b()-.5)*.7,O+.03,T+(b()-.5)*.7,b()*3)}const D=[];for(const A of["A","B"])for(const M of n.portals[A]){const _=$u(n,M.x,M.y,t),T=new we;T.position.set(s(M.x),_,r(M.y)),T.rotation.y=Math.atan2(s(M.x),r(M.y));for(const U of[-1,1]){const z=new $t(new an(.12,.7,.12),o);z.position.set(U*.36,.35,0),z.castShadow=!0,T.add(z)}const O=new $t(new br(.36,.07,6,14,Math.PI),a);O.position.y=.7,O.castShadow=!0,T.add(O);const C=new $t(new Ri(.32,24),new me({map:Ye.swirl(),color:pr[A],transparent:!0,opacity:.85,side:mn,blending:Wn,depthWrite:!1}));C.position.y=.66,T.add(C),D.push(C),e.add(T)}const R=[];for(const A of n.confluences){const M=$u(n,A.x,A.y,t),_=s(A.x),T=r(A.y);i.add(new be(.42,.46,.08,8),o,_,M+.04,T),i.add(new be(.28,.34,.12,8),a,_,M+.14,T);const O=new $t(new Zs(.95,.95),new me({map:Ye.rune(),color:"#f2c14e",transparent:!0,opacity:.8,depthWrite:!1,blending:Wn}));O.rotation.x=-Math.PI/2,O.position.set(_,M+.205,T),e.add(O);const C=new $t(new br(1.55,A.value===3?.06:.045,4,4),new me({color:"#f2c14e",transparent:!0,opacity:.9}));C.rotation.x=Math.PI/2,C.position.set(_,M+.05,T),e.add(C);const U=new $t(new Di(A.value===3?.17:.13,0),new We({color:"#ffe08a",emissive:"#f2c14e",emissiveIntensity:1.2}));U.position.set(_,M+1.25,T),e.add(U);const z=new $t(new be(.06,.16,1.05,10,1,!0),new me({color:"#f2c14e",transparent:!0,opacity:.28,blending:Wn,depthWrite:!1,side:mn}));z.position.set(_,M+.72,T),e.add(z),R.push({id:A.id,ring:C,gem:U,beam:z,rune:O})}i.flush(e),p.push((A,M)=>{S.forEach(_=>{_.rotation.z=Math.sin(A*1.4+_.userData.phase)*.05*M,_.rotation.x=Math.cos(A*1.1+_.userData.phase)*.03*M}),D.forEach((_,T)=>{_.rotation.z=-A*1.6*M-T}),g.emissiveIntensity=.8+Math.sin(A*2)*.25*M,m.emissiveIntensity=1.1+Math.sin(A*2.6)*.4*M;for(const _ of R)_.beam.material.opacity=.22+Math.sin(A*2.2+_.gem.position.x)*.08*M,_.rune.rotation.z=A*.25*M});let P=-1;return p.push((A,M)=>{if(A-P<.09)return;P=A;const _=Le(Math.floor(A*100));for(const T of x){const O=T.line.geometry.attributes.position,C=M===0||_()>.25;T.line.visible=C;for(let U=0;U<O.count;U++){const z=U/(O.count-1),F=U===0||U===O.count-1?0:.09;O.setXYZ(U,T.a.x+(T.b.x-T.a.x)*z+(_()-.5)*F,T.a.y+Math.sin(z*Math.PI)*.12+(_()-.5)*F,T.a.z+(T.b.z-T.a.z)*z+(_()-.5)*F)}O.needsUpdate=!0}}),{group:e,confluences:R,update:(A,M)=>p.forEach(_=>_(A,M))}}const Cc=.3,Xu=.38,hr=(n,t)=>t==="lava"?.1:t==="agua"?Cc+n*Xu-.06:Cc+n*Xu,ox={S:0,E:Math.PI/2,N:Math.PI,W:-Math.PI/2},cx={queimadura:"🔥",enraizado:"🌿",lento:"🐌",fragil:"💔",guarda:"🛡",barreira:"◈",casca:"⬢"},id={queimadura:"Queimadura",enraizado:"Enraizado",lento:"Lento",fragil:"Frágil",guarda:"Guarda",barreira:"Barreira",casca:"Casca Densa"};function wi(n,t){const e=document.createElement("canvas");e.width=e.height=64;const i=e.getContext("2d");if(i.fillStyle=n,i.globalAlpha=t==="solid"?.55:.28,i.fillRect(0,0,64,64),i.globalAlpha=.9,i.strokeStyle=n,i.fillStyle=n,i.lineWidth=4,t==="dots")for(let r=12;r<64;r+=20)for(let a=12;a<64;a+=20)i.beginPath(),i.arc(r,a,3.5,0,Math.PI*2),i.fill();if(t==="stripes"||t==="warn")for(let r=-64;r<128;r+=16)i.beginPath(),i.moveTo(r,0),i.lineTo(r+64,64),i.stroke();t==="rings"&&(i.beginPath(),i.arc(32,32,18,0,Math.PI*2),i.stroke(),i.beginPath(),i.arc(32,32,7,0,Math.PI*2),i.stroke()),i.globalAlpha=1,i.lineWidth=5,i.strokeRect(2.5,2.5,59,59);const s=new Wh(e);return s.colorSpace=sn,s}class lx{constructor(t,e,i){Gt(this,"gl");Gt(this,"scene",new h_);Gt(this,"camera");Gt(this,"boardGroup",new we);Gt(this,"propGroup",new we);Gt(this,"unitGroup",new we);Gt(this,"overlayGroup",new we);Gt(this,"fxGroup",new we);Gt(this,"overlays",[]);Gt(this,"warns",[]);Gt(this,"overlayMats");Gt(this,"hover");Gt(this,"units",new Map);Gt(this,"tweens",[]);Gt(this,"epoch",0);Gt(this,"state",null);Gt(this,"azimuth",Math.PI/4);Gt(this,"targetAzimuth",Math.PI/4);Gt(this,"zoom",1);Gt(this,"targetZoom",1);Gt(this,"clock",new J_);Gt(this,"kit",sx());Gt(this,"backdrop",null);Gt(this,"props",null);Gt(this,"confluenceViews",[]);Gt(this,"sun");Gt(this,"tileSignature","");Gt(this,"speed",1);Gt(this,"reduceMotion",!1);Gt(this,"labelLayer");Gt(this,"fxLayer");Gt(this,"tmp",new I);Gt(this,"portrait",null);Gt(this,"loop",()=>{requestAnimationFrame(this.loop);const t=Math.min(.05,this.clock.getDelta()),e=this.clock.elapsedTime;for(let a=this.tweens.length-1;a>=0;a--){const o=this.tweens[a];o.t+=t;const c=Math.min(1,o.t/o.dur);o.fn(c*c*(3-2*c)),c>=1&&(this.tweens.splice(a,1),o.done())}this.azimuth+=(this.targetAzimuth-this.azimuth)*Math.min(1,t*8),this.zoom+=(this.targetZoom-this.zoom)*Math.min(1,t*10);const i=.66,s=22;this.camera.position.set(Math.sin(this.azimuth)*Math.cos(i)*s,Math.sin(i)*s,Math.cos(this.azimuth)*Math.cos(i)*s),this.camera.lookAt(0,-.2,0),this.camera.zoom!==this.zoom&&(this.camera.zoom=this.zoom,this.camera.updateProjectionMatrix());const r=this.reduceMotion?0:1;this.kit.lava.map.offset.set(e*.03*r,e*.02*r),this.kit.lava.emissiveIntensity=1+Math.sin(e*1.7)*.2*r,this.kit.water.map.offset.set(e*.02*r,-e*.012*r),this.kit.ash.emissiveIntensity=.75+Math.sin(e*2.3)*.35*r,this.backdrop?.update(e,t,r),this.props?.update(e,r);for(const a of this.warns)a.visible&&(a.material.opacity=a.userData.urgent?.65+Math.sin(e*6)*.35:.45);for(const a of this.confluenceViews)a.gem.rotation.y=e*1.2*r,a.gem.position.y+=Math.sin(e*2+a.gem.position.x)*.0015*r;for(const a of this.units.values()){if(r&&a.creature.idle(e+a.id.length),a.flash>0){a.flash=Math.max(0,a.flash-t*3);for(const c of a.creature.materials)c.userData.e0===void 0&&(c.userData.e0=c.emissive.getHex(),c.userData.i0=c.emissiveIntensity),a.flash>.01?(c.emissive.setHex(16777215),c.emissiveIntensity=a.flash*.8):(c.emissive.setHex(c.userData.e0),c.emissiveIntensity=c.userData.i0)}this.tmp.copy(a.group.position),this.tmp.y+=1.15,this.tmp.project(this.camera);const o=this.canvas.getBoundingClientRect();a.label.style.transform=`translate(${o.left+(this.tmp.x+1)/2*o.width}px, ${o.top+(1-this.tmp.y)/2*o.height}px) translate(-50%, -100%)`,a.label.style.display=a.group.visible?"":"none"}this.gl.render(this.scene,this.camera)});this.canvas=t,this.gl=new u_({canvas:t,antialias:i!=="baixo",alpha:!0,powerPreference:"high-performance"}),this.gl.outputColorSpace=sn,this.gl.toneMapping=ph,this.gl.toneMappingExposure=1.05,this.camera=new Zc(-6,6,6,-6,.1,120),this.scene.add(this.boardGroup,this.propGroup,this.unitGroup,this.overlayGroup,this.fxGroup),this.scene.add(new Y_("#ffe4c4","#2a1c2e",1.15));const s=new Bu("#8fb2ff",.7);s.position.set(8,6,-7),this.scene.add(s),this.sun=new Bu("#ffd2a0",2.5),this.sun.position.set(-6,12,5),this.sun.shadow.camera.left=-8,this.sun.shadow.camera.right=8,this.sun.shadow.camera.top=8,this.sun.shadow.camera.bottom=-8,this.sun.shadow.bias=-8e-4,this.scene.add(this.sun);const r=new td("#ff6a2a",30,18,1.6);r.position.set(0,-2.5,0),this.scene.add(r),this.labelLayer=document.createElement("div"),this.labelLayer.className="unit-labels",e.appendChild(this.labelLayer),this.fxLayer=document.createElement("div"),this.fxLayer.className="fx-layer",e.appendChild(this.fxLayer),this.overlayMats={move:new me({map:wi("#4fd1c1","dots"),transparent:!0,depthWrite:!1}),attack:new me({map:wi("#ff5470","stripes"),transparent:!0,depthWrite:!1}),target:new me({map:wi("#ff5470","solid"),transparent:!0,depthWrite:!1}),skill:new me({map:wi("#ffc94d","rings"),transparent:!0,depthWrite:!1}),order:new me({map:wi("#b9a1ff","rings"),transparent:!0,depthWrite:!1}),summon:new me({map:wi("#4fd1c1","rings"),transparent:!0,depthWrite:!1}),path:new me({map:wi("#e8fff9","solid"),transparent:!0,depthWrite:!1}),warn:new me({map:wi("#ff3b1f","warn"),transparent:!0,depthWrite:!1}),hover:new me({color:"#fff3d6",transparent:!0,opacity:.9,depthWrite:!1})},this.hover=new $t(new Fa(.42,.48,4,1,Math.PI/4),this.overlayMats.hover),this.hover.rotation.x=-Math.PI/2,this.hover.visible=!1,this.overlayGroup.add(this.hover),this.backdrop=rx(this.scene,i),this.setQuality(i),this.resize(),window.addEventListener("resize",()=>this.resize()),this.loop()}setQuality(t){const e=Math.min(window.devicePixelRatio||1,t==="alto"?2:t==="medio"?1.5:1);this.gl.setPixelRatio(e),this.gl.shadowMap.enabled=t!=="baixo",this.sun.castShadow=t!=="baixo",this.sun.shadow.mapSize.set(t==="alto"?2048:1024,t==="alto"?2048:1024),this.backdrop?.setQuality(t),this.sun.shadow.map?.dispose(),this.sun.shadow.map=null,this.resize()}resize(){const t=this.canvas.clientWidth||window.innerWidth,e=this.canvas.clientHeight||window.innerHeight;this.gl.setSize(t,e,!1);const i=t/e,s=i<.8;s!==this.portrait&&(this.portrait=s,this.targetAzimuth=this.azimuth=s?0:Math.PI/4);const r=s?5.6/i:Math.max(5.4,7.3/i);this.camera.top=r,this.camera.bottom=-r,this.camera.left=-r*i,this.camera.right=r*i,this.camera.updateProjectionMatrix()}world(t,e=0){const i=this.state?fe(this.state,t.x,t.y):void 0;return new I(t.x-4,(i?hr(i.h,Ee(i)):Cc)+e,t.y-4)}setState(t){this.state=t;const e=t.tiles.map(i=>Ee(i)).join("");e!==this.tileSignature&&(this.tileSignature=e,this.buildBoard(t)),this.syncUnits(t),this.syncConfluences(t),this.syncWarnings(t)}buildBoard(t){for(const u of[this.boardGroup,this.propGroup])u.traverse(h=>{h instanceof Tu?h.dispose():h instanceof $t&&u===this.propGroup&&h.geometry.dispose()}),u.clear();this.confluenceViews=[];const e=new Map,i=Le(42),s=new rs;for(const u of t.tiles){const h=Ee(u),d=hr(u.h,h);s.setFromAxisAngle(new I(0,1,0),Math.floor(i()*4)*Math.PI/2);const f=new le().compose(new I(u.x-4,(d-.4)/2,u.y-4),s,new I(.96,d+.4,.96));e.has(h)||e.set(h,[]),e.get(h).push(f)}const r=new Q_(1,1,1,2,.06),a=new an(1,1,1),o=new Kt;for(const[u,h]of e){const d=new Tu(u==="lava"||u==="agua"?a:r,this.kit.materials[u],h.length);h.forEach((f,g)=>{d.setMatrixAt(g,f);const v=.86+i()*.22;d.setColorAt(g,o.setRGB(v,v*(.97+i()*.05),v*(.95+i()*.06)))}),d.receiveShadow=!0,d.castShadow=u!=="lava"&&u!=="agua",this.boardGroup.add(d)}const c=ax(t,hr);this.props=c,this.propGroup.add(c.group),this.confluenceViews=c.confluences;for(const u of[...this.overlays,...this.warns])this.overlayGroup.remove(u);this.overlays=[],this.warns=[];const l=new Zs(.9,.9);for(const u of t.tiles){const h=hr(u.h,Ee(u)),d=new $t(l,this.overlayMats.move);d.rotation.x=-Math.PI/2,d.position.set(u.x-4,h+.03,u.y-4),d.visible=!1,d.renderOrder=3;const f=new $t(l,this.overlayMats.warn);f.rotation.x=-Math.PI/2,f.position.set(u.x-4,h+.02,u.y-4),f.visible=!1,f.renderOrder=2,this.overlayGroup.add(d,f),this.overlays.push(d),this.warns.push(f)}}syncConfluences(t){for(const e of this.confluenceViews){const i=t.confluences.find(a=>a.id===e.id),s=i.owner?pr[i.owner]:"#f2c14e";e.ring.material.color.set(s);const r=e.gem.material;r.color.set(i.owner?s:"#ffe08a"),r.emissive.set(s),e.beam.material.color.set(s),e.rune.material.color.set(s)}}syncWarnings(t){this.warns.forEach(e=>e.visible=!1);for(const e of sh(t,2))for(const i of e.cells){const s=this.warns[i.y*t.width+i.x];s&&(s.visible=!0,s.userData.urgent=e.round===t.round)}}makeUnit(t){const e=nx(t.monsterId),i=new we,s=je(t.monsterId),r=new $t(new Fa(.36,.44,t.team==="B"?32:6),new me({color:pr[t.team],transparent:!0,opacity:.95,depthWrite:!1}));r.rotation.x=-Math.PI/2,r.position.y=.025;const a=new $t(new Re(.08,.16,3),new me({color:pr[t.team]}));a.rotation.x=Math.PI/2,a.position.set(0,.03,.52);const o=new we;o.add(a,e.root),i.add(r,o),i.userData.pivot=o;const c=document.createElement("div");c.className=`ulabel team-${t.team}`,c.innerHTML=`<span class="aff" style="--c:${ln[s.affinity].color}">${ln[s.affinity].symbol}</span><i class="hp"><b></b><em></em></i><span class="st"></span>`,this.labelLayer.appendChild(c),this.unitGroup.add(i);const l={id:t.id,team:t.team,creature:e,group:i,ring:r,arrow:a,label:c,hpShown:t.hp,maxHp:t.maxHp,facing:t.facing,flash:0};return this.units.set(t.id,l),l}syncUnits(t){const e=new Set(t.units.map(i=>i.id));for(const[i,s]of this.units)e.has(i)||this.removeUnit(i,s);for(const i of t.units){const s=this.units.get(i.id)??this.makeUnit(i);s.group.position.copy(this.world(i)),s.group.visible=!0,s.group.scale.setScalar(1),s.hpShown=i.hp,s.maxHp=i.maxHp,this.setFacing(s,i.facing),this.updateLabel(s,i)}}removeUnit(t,e){this.unitGroup.remove(e.group),e.label.remove(),e.creature.materials.forEach(i=>i.dispose()),this.units.delete(t)}setFacing(t,e){t.facing=e,t.group.userData.pivot.rotation.y=ox[e]}updateLabel(t,e){const i=Math.max(0,t.hpShown)/t.maxHp,s=t.label.querySelector("b");if(s.style.width=`${i*100}%`,s.dataset.low=i<.35?"1":"",t.label.querySelector("em").textContent=`${Math.max(0,t.hpShown)}`,e){const r=t.label.querySelector(".st");r.textContent=e.statuses.map(a=>cx[a.id]).join(""),t.label.classList.toggle("spent",e.activated&&!e.exposed),t.label.classList.toggle("exposed",e.exposed)}}previewUnitAt(t,e,i){for(const a of this.units.values())a.ring.scale.setScalar(1);if(!t||!this.state)return;const s=this.units.get(t);if(!s)return;s.ring.scale.setScalar(1.25);const r=this.state.units.find(a=>a.id===t);s.group.position.copy(this.world(e??r)),i?this.setFacing(s,i):this.setFacing(s,r.facing)}clearOverlays(){this.overlays.forEach(t=>t.visible=!1)}showOverlay(t,e){if(this.state)for(const i of t){const s=this.overlays[i.y*this.state.width+i.x];s&&(s.material=this.overlayMats[e],s.visible=!0)}}setHover(t){if(!t||!this.state){this.hover.visible=!1;return}this.hover.visible=!0,this.hover.position.copy(this.world(t,.05))}resetCamera(){const t=this.portrait?0:Math.PI/4,e=Math.round((this.azimuth-t)/(Math.PI*2));this.targetAzimuth=t+e*Math.PI*2,this.targetZoom=1}rotate(t){this.targetAzimuth+=t*Math.PI/2}rotateFree(t){this.targetAzimuth+=t,this.azimuth+=t}zoomBy(t){this.targetZoom=Jf.clamp(this.targetZoom*t,.75,2.4)}pick(t,e){if(!this.state)return{cell:null,unitId:null};const i=this.canvas.getBoundingClientRect(),s=new ot((t-i.left)/i.width*2-1,-((e-i.top)/i.height)*2+1),r=new K_;r.setFromCamera(s,this.camera);let a=1/0,o=null,c=null;const l=new I;for(const u of this.state.units){const h=this.units.get(u.id);if(!h)continue;const d=h.group.position,f=new mi(new I(d.x-.38,d.y,d.z-.38),new I(d.x+.38,d.y+.85,d.z+.38));if(r.ray.intersectBox(f,l)){const g=l.distanceTo(r.ray.origin);g<a&&(a=g,c=u.id,o={x:u.x,y:u.y})}}for(const u of this.state.tiles){const h=hr(u.h,Ee(u)),d=new mi(new I(u.x-4.5,-.4,u.y-4.5),new I(u.x-3.5,h,u.y-3.5));if(r.ray.intersectBox(d,l)){const f=l.distanceTo(r.ray.origin);f<a-.001&&(a=f,o={x:u.x,y:u.y},c=null)}}return{cell:o,unitId:c}}screenOf(t,e=1){const i=this.world(t,e).project(this.camera),s=this.canvas.getBoundingClientRect();return{x:s.left+(i.x+1)/2*s.width,y:s.top+(1-i.y)/2*s.height}}tween(t,e){const i=this.reduceMotion||this.speed>=99?0:t/this.speed;return i<=0?(e(1),Promise.resolve()):new Promise(s=>this.tweens.push({t:0,dur:i,fn:e,done:s}))}wait(t){return this.tween(t,()=>{})}floatText(t,e,i){const s=document.createElement("div");s.className=`float ${i}`,s.textContent=e;const r=this.screenOf(t,1.1);s.style.left=`${r.x}px`,s.style.top=`${r.y}px`,s.style.animationDuration=`${Math.max(.5,1.1/Math.min(this.speed,3))}s`,this.fxLayer.appendChild(s),setTimeout(()=>s.remove(),1400)}posOf(t){const e=this.units.get(t);return e?{x:Math.round(e.group.position.x+4),y:Math.round(e.group.position.z+4)}:null}async moveAlong(t,e){let i=t.group.position.clone();for(const s of e){const r=this.world(s),a=r.x-i.x,o=r.z-i.z;this.setFacing(t,Math.abs(a)>Math.abs(o)?a>0?"E":"W":o>0?"S":"N");const c=i.clone();await this.tween(.15,l=>{t.group.position.lerpVectors(c,r,l),t.group.position.y+=Math.sin(l*Math.PI)*.12}),i=r}}stop(){this.epoch++;const t=this.tweens;this.tweens=[];for(const e of t)e.fn(1),e.done()}async play(t,e){const i=this.epoch,s=this.state;this.state=e.tiles===s?.tiles?e:{...e,tiles:s?s.tiles:e.tiles};for(const r of t){if(i!==this.epoch)return;switch(r.type){case"move":{const a=this.units.get(r.unitId);a&&await this.moveAlong(a,r.path);break}case"teleport":case"pushed":{const a=this.units.get(r.unitId);if(!a)break;await this.tween(.15,o=>a.group.scale.setScalar(1-o*.9)),a.group.position.copy(this.world(r.to)),await this.tween(.15,o=>a.group.scale.setScalar(.1+o*.9));break}case"swap":{const a=this.units.get(r.a),o=this.units.get(r.b);if(!a||!o)break;const c=a.group.position.clone(),l=o.group.position.clone();await this.tween(.3,u=>{a.group.position.lerpVectors(c,l,u),o.group.position.lerpVectors(l,c,u),a.group.position.y+=Math.sin(u*Math.PI)*.5});break}case"attack":{const a=this.units.get(r.attackerId),o=this.units.get(r.targetId);if(!a||!o)break;const c=a.group.position.clone(),l=o.group.position.clone(),u=l.clone().sub(c);if(u.y=0,this.setFacing(a,Math.abs(u.x)>Math.abs(u.z)?u.x>0?"E":"W":u.z>0?"S":"N"),u.length()>1.2||r.skill==="raio-arco"){const d=ln[je(this.unitMonster(r.attackerId)??"zirpim").affinity].color,f=new $t(new di(.1,0),new me({color:d}));this.fxGroup.add(f);const g=c.clone().add(new I(0,.5,0)),v=l.clone().add(new I(0,.4,0));await this.tween(.28,m=>{f.position.lerpVectors(g,v,m),f.position.y+=Math.sin(m*Math.PI)*.6}),this.fxGroup.remove(f),f.geometry.dispose()}else{const d=u.clone().normalize().multiplyScalar(.35);await this.tween(.12,f=>a.group.position.copy(c).addScaledVector(d,f)),await this.tween(.12,f=>a.group.position.copy(c).addScaledVector(d,1-f))}o.flash=1,await this.tween(.16,d=>{o.group.position.x=l.x+Math.sin(d*30)*.05*(1-d)}),o.group.position.x=l.x;break}case"damage":{const a=this.units.get(r.unitId),o=this.posOf(r.unitId);a&&o&&(a.hpShown-=r.amount,this.updateLabel(a),this.floatText(o,`−${r.amount}`,r.source==="Ataque"?"dmg":"dmg alt"));break}case"heal":{const a=this.units.get(r.unitId),o=this.posOf(r.unitId);a&&o&&(a.hpShown+=r.amount,this.updateLabel(a),this.floatText(o,`+${r.amount}`,"heal")),await this.wait(.2);break}case"status":{const a=this.posOf(r.unitId);a&&this.floatText(a,id[r.status],"status");break}case"skill":{const a=this.posOf(r.unitId);a&&this.floatText(a,je(this.unitMonster(r.unitId)).skill.name,"skill"),this.showOverlay(r.cells,"skill"),await this.wait(.35),this.clearOverlays();break}case"defeated":{const a=this.units.get(r.unitId);if(!a)break;await this.tween(.45,o=>{a.group.scale.setScalar(1-o*.8),a.group.position.y-=.01,a.group.rotation.z=o*.6}),this.removeUnit(r.unitId,a);break}case"summon":{const a=e.units.find(l=>l.id===r.unitId);if(!a)break;const o=this.makeUnit(a);o.group.position.copy(this.world(a)),this.setFacing(o,a.facing);const c=new $t(new be(.4,.4,3,12,1,!0),new me({color:pr[a.team],transparent:!0,opacity:.5,side:mn,blending:Wn,depthWrite:!1}));c.position.copy(this.world(a,1.5)),this.fxGroup.add(c),await this.tween(.5,l=>{o.group.scale.setScalar(l),c.material.opacity=.5*(1-l)}),this.fxGroup.remove(c);break}case"defend":{const a=this.posOf(r.unitId);a&&this.floatText(a,"Guarda","status"),await this.wait(.2);break}case"order":{const a=this.posOf(r.targetId);a&&this.floatText(a,"Ordem do Tecelão","order"),await this.wait(.3);break}case"tiles":case"map-event":{this.state={...e},this.tileSignature="",r.type==="map-event"&&await this.wait(.4),this.tileSignature=e.tiles.map(a=>Ee(a)).join(""),this.buildBoard(e);break}case"capture":{this.syncConfluences(e);const a=e.confluences.find(c=>c.id===r.confluenceId),o=this.confluenceViews.find(c=>c.id===r.confluenceId);a&&o&&(this.floatText(a,r.team==="B"?"Capturada":"Perdida",r.team==="B"?"heal":"dmg"),await this.tween(.4,c=>o.ring.scale.setScalar(1+Math.sin(c*Math.PI)*.25)));break}}}i===this.epoch&&this.setState(e)}unitMonster(t){return this.state?.units.find(e=>e.id===t)?.monsterId??t.split("-")[1]}}const ft="B",Ze="A",Ge={name:"Arven",title:"Guardião da Brasa",squad:["cinzalon","carvunio","pedruxo","falcorrente","nacarino","larveira"],doctrine:"impeto"},Fi=document.getElementById("board"),cn=document.getElementById("ui"),sd=document.getElementById("layer");let Ct=hh(),oi=Xd();const Ue=new Gd,il=Hd();let Wt;try{Wt=new lx(Fi,sd,Ct.quality)}catch{throw cn.innerHTML='<div class="fatal"><h1>ARKHOS</h1><p>Este navegador não conseguiu iniciar o WebGL. Ative a aceleração de hardware ou tente outro navegador.</p></div>',new Error("WebGL indisponível")}Ns();let Ve="title",ce=null,En=null,tt=null,Bn=0,xn=!1,Pc="cinzalon",fi=Ju(Ct.squad).ok?[...Ct.squad]:["cinzalon","nacarino","larveira","mineruva","zirpim","pedruxo"],ci=Array.from({length:Ta},(n,t)=>fi[t]??null);const qu=()=>{fi=ci.filter(n=>!!n)};let ct=null,ee=null,ae=null,Xs=null,Yu=0;const Ya=n=>cn.querySelector(n),hn=n=>n.replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),Ic=n=>new Promise(t=>setTimeout(t,Ct.speed>=99?0:n/Ct.speed)),ux=n=>n===ft?"Você":Ge.name,ts=n=>ln[je(n).affinity];function Ns(){Wt.speed=Ct.speed,Wt.reduceMotion=Ct.reduceMotion,Ue.enabled=Ct.sound,Ue.volume=Ct.volume,document.documentElement.classList.toggle("reduce-motion",Ct.reduceMotion)}function rn(n,t="info"){const e=Ya("#toast")??Object.assign(document.createElement("div"),{id:"toast"});e.parentElement||cn.appendChild(e),e.className=`toast ${t} show`,e.textContent=n,clearTimeout(Yu),Yu=window.setTimeout(()=>e.classList.remove("show"),2600),t==="error"&&Ue.play("error")}function Lc(n,t=""){const e=document.createElement("div");e.className="banner",e.innerHTML=`<strong>${hn(n)}</strong>${t?`<span>${hn(t)}</span>`:""}`,cn.appendChild(e),setTimeout(()=>e.remove(),Ct.reduceMotion?1200:1900)}function mr(){return nh({arena:il,squads:{A:Ge.squad,B:fi},doctrines:{A:Ge.doctrine,B:Ct.doctrine},initiative:Ze})}function wn(){switch(sd.classList.toggle("hidden",Ve!=="battle"),document.body.dataset.screen=Ve,Ve){case"title":cn.innerHTML=hx();break;case"squad":cn.innerHTML=fx();break;case"briefing":cn.innerHTML=px();break;case"bestiary":cn.innerHTML=mx();break;case"rules":cn.innerHTML=`<section class="sheet wide">${rd()}<div class="row end"><button class="btn" data-act="go-title">Voltar</button></div></section>`;break;case"battle":cn.innerHTML='<div id="hud"></div><div id="modal-root"></div>',jn();break;case"result":cn.innerHTML=xx();break}ke()}function hx(){const n=oi.medals;return`<main class="title">
    <div class="title-mark">
      <h1 class="wordmark">Arkhos</h1>
      <p class="subtitle">Coliseu dos Primordiais</p>
    </div>
    <p class="title-lede">Seis reinos partidos, ligados por arenas antigas. Firme pactos com os Ecos, leia o tabuleiro e faça as Confluências responderem a você.</p>
    <nav class="title-menu">
      <button class="btn primary big" data-act="go-squad">Jogar: Ponte das Cinzas</button>
      <button class="btn" data-act="go-bestiary">Bestiário</button>
      <button class="btn" data-act="go-rules">Como jogar</button>
      <button class="btn" data-act="open-options">Opções</button>
    </nav>
    <footer class="title-foot">
      <span>Missão 02 · região da Brasa</span>
      <span class="medals" title="Medalhas desta missão">${Do("Concluir",n.concluir)}${Do("Sem perdas",n.intacto)}${Do("Maestria do centro",n.maestria)}</span>
      <span>${oi.wins} vitórias · ${oi.losses} derrotas</span>
    </footer>
  </main>`}const dx=n=>[["PV",n.hp],["ATK",n.atk],["ARM",n.armor],["MOV",n.move],["ALC",n.range]].map(([t,e])=>`<span><b>${t}</b>${e}</span>`).join(""),Do=(n,t)=>`<i class="medal ${t?"got":""}" title="${n}${t?" — conquistada":""}">${t?"◆":"◇"}</i>`;function fx(){const n=fi.reduce((c,l)=>c+je(l).squadCost,0),t=wa-n,e=ci.slice(0,Ts).filter(Boolean).length,i=e===Ts,s=c=>{const l=ci[c];if(!l)return'<span class="cap empty" aria-label="Vaga livre">+</span>';const u=je(l),h=ln[u.affinity];return`<button class="cap" data-act="toggle-eco" data-id="${l}" style="--aff:${h.color}" aria-label="Tirar ${u.name}"><i>${h.symbol}</i><small>${u.name}</small></button>`},r=je(Pc),a=ln[r.affinity],o=Nc.map(c=>{const l=ln[c.affinity],u=ci.indexOf(c.id),h=u<0&&(fi.length>=Ta||c.squadCost>t);return`<button class="pick ${u>=0?"on":""} ${h?"off":""} ${Pc===c.id?"cur":""}" data-act="toggle-eco" data-id="${c.id}" style="--aff:${l.color}" aria-pressed="${u>=0}">
      <i>${l.symbol}</i><b>${c.name}</b><span class="pips" aria-label="custo ${c.squadCost}">${"●".repeat(c.squadCost)}</span>${u>=0?`<em>${u<Ts?u+1:"R"}</em>`:""}</button>`}).join("");return`<section class="tray">
    <header class="tray-head">
      <button class="icon" data-act="go-title" aria-label="Voltar ao menu">←</button>
      <h2>Esquadrão</h2>
      <span class="points ${t<0?"over":""}"><b>${n}</b> de ${wa} pontos</span>
    </header>
    <div class="caps">
      <div class="caps-group"><span>Em campo</span><div>${[0,1,2,3].map(s).join("")}</div></div>
      <div class="caps-group reserve"><span>Reserva</span><div>${[4,5].map(s).join("")}</div></div>
    </div>
    <div class="focus" style="--aff:${a.color}">
      <i>${a.symbol}</i>
      <div><b>${r.name}</b> <span>${a.name} · ${Oc[r.role]} · ${r.squadCost} pontos</span>
        <p class="nums">PV ${r.hp} · ATK ${r.atk} · ARM ${r.armor} · MOV ${r.move} · ALC ${r.range}</p>
        <p><em>${r.skill.name}:</em> ${r.skill.text}</p></div>
    </div>
    <div class="picks">${o}</div>
    <footer class="tray-foot">
      <button class="btn ghost" data-act="squad-suggest">Sugerir</button>
      <button class="btn primary" data-act="go-briefing" ${i?"":"disabled"}>${i?"Continuar":`Complete o campo (${e}/${Ts})`}</button>
    </footer>
  </section>`}function px(){const n=il.events.map(e=>`<li><b>Rodada ${e.round}</b> ${hn(e.title)}. <span>${hn(e.text)}</span></li>`).join(""),t=Object.keys(As).map(e=>`<label class="choice ${Ct.doctrine===e?"on":""}"><input type="radio" name="doc" value="${e}" data-act="set-doctrine" ${Ct.doctrine===e?"checked":""}><b>${As[e].name}</b><span>${As[e].order}: ${As[e].text}</span></label>`).join("");return`<section class="sheet wide briefing">
    <header class="sheet-head"><div><h2>Ponte das Cinzas</h2><p>Arven, ${Ge.title}, chegou primeiro à arena e quer o Coração da Ponte para si. As pontes de madeira não vão aguentar a noite.</p></div></header>
    <div class="brief-grid">
      <div class="brief-col">
        <h3>Como vencer</h3>
        <ul class="facts">
          <li><b>Domínio</b> chegue a ${Ca} pontos com pelo menos ${Fc} de vantagem. Altares laterais dão 2 por rodada, o Coração da Ponte dá 3.</li>
          <li><b>Pontuar</b> ao fim da rodada, tenha um Eco a até 1 casa do altar e nenhum inimigo nesse raio.</li>
          <li><b>Extermínio</b> desfaça todos os Ecos de Arven, inclusive a reserva.</li>
          <li><b>Limite</b> na rodada 12 vence quem tiver mais Domínio.</li>
        </ul>
        <h3>Eventos anunciados</h3>
        <ul class="events">${n}</ul>
      </div>
      <div class="brief-col">
        <h3>Esquadrão de Arven</h3>
        <p class="rival-line">${Ge.squad.slice(0,4).map(e=>`<span style="--aff:${ts(e).color}">${ts(e).symbol} ${je(e).name}</span>`).join("")}<em>reserva: ${Ge.squad.slice(4).map(e=>je(e).name).join(", ")}</em></p>
        <h3>Doutrina do Tecelão</h3>
        <div class="choices">${t}</div>
        <h3>Partida</h3>
        <div class="row wrap">
          <label class="toggle"><input type="checkbox" data-act="set-diff" ${Ct.difficulty==="historia"?"checked":""}> Modo História (IA mais branda)</label>
          <label class="toggle"><input type="checkbox" data-act="set-first" ${Ct.playerFirst?"checked":""}> Eu começo a rodada 1</label>
        </div>
        <p class="note">Quem começa a rodada alterna a cada rodada. Em testes IA × IA, responder primeiro foi ligeiramente vantajoso, por isso Arven começa por padrão.</p>
      </div>
    </div>
    <footer class="row between"><button class="btn" data-act="go-squad">Ajustar esquadrão</button><button class="btn primary" data-act="start">Entrar na arena</button></footer>
  </section>`}function mx(){return`<section class="sheet wide"><header class="sheet-head"><div><h2>Bestiário</h2><p>Os 12 Ecos desta primeira Confluência. Vantagens: Brasa vence Selva, Selva vence Maré, Maré vence Brasa; Pedra vence Trovão, Trovão vence Astral, Astral vence Pedra (+15% / −10%).</p></div></header>
    <div class="eco-grid static">${Nc.map(n=>`<article class="eco static" style="--aff:${ln[n.affinity].color}">
      <span class="eco-sym">${ln[n.affinity].symbol}</span><span class="eco-name">${n.name}</span><span class="eco-meta">${ln[n.affinity].name} · ${Oc[n.role]} · ${n.look}</span><span class="eco-cost">${n.squadCost}</span>
      <span class="eco-stats">${dx(n)}</span>
      <span class="eco-skill"><em>${n.skill.name}</em> +${n.skill.extraPO} PO, recarga ${n.skill.cooldown}. ${n.skill.text}</span>
      ${n.tags.length?`<span class="eco-tags">${n.tags.map(t=>({voador:"voa: ignora altura, sobrevoa lava",arqueado:"disparo arqueado: +1 alcance quando mais alto",aquatico:"aquático: água não custa movimento extra"})[t]??t).join(" · ")}</span>`:""}
    </article>`).join("")}</div>
    <div class="row end"><button class="btn" data-act="go-title">Voltar</button></div></section>`}function rd(){return`<header class="sheet-head"><div><h2>Como jogar</h2><p>Partidas de 10 a 15 minutos. Nada é aleatório: todo ataque válido acerta e a prévia mostra o dano exato.</p></div></header>
  <div class="rules">
    <article><h3>Turnos intercalados</h3><p>Cada rodada começa com 6 Pontos de Ordem (7 para quem controla o Coração da Ponte). Você ativa um Eco, depois o rival ativa um, e assim por diante. Cada Eco ativa uma vez por rodada.</p></article>
    <article><h3>Ativação (1 PO)</h3><p>Mova até o MOV e faça uma ação: atacar, Defender (−25% no próximo dano) ou aguardar. A habilidade custa +1 PO e substitui o ataque. Subir um nível custa 1 passo extra; dois níveis exigem voo.</p></article>
    <article><h3>Dano</h3><p>(ATK − ARM, mínimo 2) × afinidade × altura (+10% de cima) × flanco (+10% pelos lados ou costas) × terreno favorito (+10%). Mata e Cristal dão cobertura de 15% contra disparos.</p></article>
    <article><h3>Domínio</h3><p>No fechamento da rodada, um altar pontua para quem tiver Eco a até 1 casa dele sem inimigo no mesmo raio. Contestado, ninguém pontua.</p></article>
    <article><h3>Reforços e Ordens (2 PO)</h3><p>Uma invocação por rodada, num portal seu livre e sem inimigo ao lado; o Eco chega Exposto e só age na próxima rodada. A Ordem do Tecelão (1 por rodada, recarga 3) não gasta ativação.</p></article>
    <article><h3>Terrenos</h3><p><span class="sw cinza"></span>Cinza: Brasa +10%; os demais se desgastam após 2 rodadas sobre ela. <span class="sw agua"></span>Água: Maré +10%; custa 1 passo extra a quem não é aquático. <span class="sw lava"></span>Lava: intransponível (voadores sobrevoam). <span class="sw ponte"></span>Ponte: pode desabar após aviso.</p></article>
    <article><h3>Símbolo Primordial</h3><p>Proteja o obelisco da sua equipe! Destruir o Símbolo inimigo vence o duelo imediatamente. Também é possível vencer eliminando todos os Ecos e reservas do adversário ou por Domínio dos altares.</p></article><article><h3>Padrões táticos</h3><p>Batedores e voadores se movem também na diagonal. Batedores atacam nas 8 casas vizinhas. Atiradores atacam em linhas retas ou diagonais até o alcance indicado. Os demais seguem o alcance ortogonal. O caminho não atravessa paredes, peças ou cantos bloqueados.</p></article><article><h3>Leitura do tabuleiro</h3><p>Pontos turquesa: casas de movimento. Listras vermelhas: alvos de ataque. Anéis dourados: alvos de habilidade. Listras laranja pulsando: evento no fim desta rodada.</p></article>
    <article><h3>Controles</h3><p>Toque/clique seleciona; toque de novo no mesmo alvo confirma. Q/E ou arrastar giram a câmera; roda ou pinça dão zoom. Esc cancela, Tab alterna Ecos prontos, Enter confirma, Espaço passa.</p></article>
  </div>`}function Zu(){Bn++,Wt.stop();const n=Bn;tt=nh({arena:il,squads:{A:Ge.squad,B:fi},doctrines:{A:Ge.doctrine,B:Ct.doctrine},initiative:Ct.playerFirst?ft:Ze}),ct=null,ee=null,ae=null,Xs=null,xn=!1,ce=null,Rn.step=Ct.tips?0:Yn.length,Ve="battle",Wt.setState(tt),Wt.resetCamera(),wn(),Lc("Rodada 1",tt.initiative===ft?"Sua iniciativa":`Iniciativa de ${Ge.name}`),Ue.play("round"),Ic(900).then(()=>{n===Bn&&ad()})}const Yn=[{id:"select",text:"Toque num Eco seu: o anel redondo turquesa marca o seu lado; o hexagonal vermelho, o de Arven."},{id:"move",text:"As casas pontilhadas mostram até onde ele vai. Toque numa delas: nada acontece até você confirmar."},{id:"attack",text:"Inimigos com listras vermelhas estão ao alcance. Toque num deles para ver o dano exato e toque de novo para confirmar."},{id:"point",text:"Feche uma rodada com um Eco a 1 casa de um altar dourado, sem inimigos no mesmo raio, para marcar Domínio."},{id:"defend",text:"Defender reduz em 25% o próximo dano. Use num Eco que vai ficar exposto ao rival."},{id:"warn",text:"Listras laranja pulsando avisam um evento no fim da rodada. Saia das pontes antes da rodada 4."}],Rn={step:0};function Is(n){Rn.step<Yn.length&&Yn[Rn.step].id===n&&(Rn.step++,Rn.step>=Yn.length&&rn("Dicas concluídas. Você pode reativá-las em Opções."))}async function ad(){const n=Bn;if(!(!tt||Ve!=="battle")){if(tt.phase==="finished"){if(await Ic(900),n!==Bn)return;_x();return}if(tt.nextToAct===Ze){for(xn=!0,jn(),await Ic(500);ce==="pause"||ce==="options"||ce==="rules"||ce==="confirm-restart"||ce==="confirm-menu"||ce==="log";)if(await new Promise(e=>setTimeout(e,200)),n!==Bn)return;if(n!==Bn||!tt)return;const t=ah(tt,Ze,Ct.difficulty);await Za(t)}else xn=!1,tt.round>=3&&Is("warn"),jn()}}async function Za(n){if(!tt)return!1;const t=Bn,e=Dd(tt,n);return e.ok?(xn=!0,n.team===ft&&(Ue.play("confirm"),n.kind==="activate"&&(n.path.length&&Is("move"),n.action.kind==="attack"&&Is("attack"),n.action.kind==="defend"&&Is("defend"))),ct=null,ee=null,ae=null,Wt.clearOverlays(),Wt.previewUnitAt(null,null),jn(),gx(e.events),await Wt.play(e.events,e.state),t!==Bn||(tt=e.state,tt.score[ft]>0&&Is("point"),vx(e.events),n.team===ft&&Rn.step<Yn.length&&Yn[Rn.step].id==="move"&&n.kind==="activate"&&n.path.length,await ad()),!0):(rn(e.reason,"error"),!1)}function gx(n){const t=new Set(n.map(e=>e.type));(t.has("attack")||t.has("damage"))&&setTimeout(()=>Ue.play("hit"),200/Ct.speed),t.has("move")&&Ue.play("move"),t.has("heal")&&Ue.play("heal"),t.has("summon")&&Ue.play("summon"),t.has("capture")&&Ue.play("capture")}function vx(n){if(tt){for(const t of n)if(t.type==="map-event"&&(Lc(t.title),Ue.play("warn")),t.type==="round-start"){const e=tt.score;Lc(`Rodada ${t.round}`,`${t.initiative===ft?"Sua iniciativa":`Iniciativa de ${Ge.name}`} · Domínio ${e[ft]} × ${e[Ze]}`),Ue.play("round");const i=tt.events.find(s=>s.round===t.round);i&&setTimeout(()=>rn(`No fim desta rodada: ${i.title.toLowerCase()}.`,"warn"),1400/Math.min(2,Ct.speed))}}}function _x(){var e,i,s;if(!tt)return;const n=tt.winner===ft,t=tt.stats[ft];(e=oi.medals).concluir||(e.concluir=n),(i=oi.medals).intacto||(i.intacto=n&&t.lost===0),(s=oi.medals).maestria||(s.maestria=t.bestCenterStreak>=3),n?oi.wins++:tt.winner===Ze&&oi.losses++,qd(oi),Ue.play(n?"win":"lose"),Ve="result",Wt.clearOverlays(),wn()}function xx(){const n=tt,t=n.winner===ft,e=n.winner==="draw",i=n.stats[ft],s=n.stats[Ze],r=[{name:"Concluir",got:t,need:"Vença a partida."},{name:"Sem perdas",got:t&&i.lost===0,need:`Vença sem perder Ecos (perdidos: ${i.lost}).`},{name:"Maestria do centro",got:i.bestCenterStreak>=3,need:`Pontue no Coração da Ponte 3 rodadas seguidas (melhor sequência: ${i.bestCenterStreak}).`}],a=t?"":i.centerRounds===0?"Dica: o Coração vale 3 por rodada e dá 1 PO extra. Mesmo contestar o centro já impede Arven de pontuar.":i.lost>=3?"Dica: Ecos isolados caem rápido. Avance em pares e use Defender em quem vai ficar exposto.":"Dica: pontos laterais somam. Segure o altar mais próximo de você enquanto disputa o centro.";return`<section class="sheet result ${t?"won":e?"draw":"lost"}">
    <h2>${t?"Vitória":e?"Empate":"Derrota"}</h2>
    <p class="result-why">${hn(n.endReason??"")}</p>
    <div class="score-final"><span class="me">${n.score[ft]}</span><i>Domínio · rodada ${n.round} de ${n.maxRounds}</i><span class="them">${n.score[Ze]}</span></div>
    <table class="stats"><thead><tr><th></th><th>Você</th><th>${Ge.name}</th></tr></thead><tbody>
      <tr><td>Dano causado</td><td>${i.damage}</td><td>${s.damage}</td></tr>
      <tr><td>Cura</td><td>${i.healing}</td><td>${s.healing}</td></tr>
      <tr><td>Ecos rivais desfeitos</td><td>${i.defeated}</td><td>${s.defeated}</td></tr>
      <tr><td>Rodadas pontuando no centro</td><td>${i.centerRounds}</td><td>${s.centerRounds}</td></tr>
      <tr><td>Habilidades usadas</td><td>${i.skills}</td><td>${s.skills}</td></tr>
    </tbody></table>
    <ul class="medal-list">${r.map(o=>`<li class="${o.got?"got":""}"><i>${o.got?"◆":"◇"}</i><b>${o.name}</b><span>${o.got?"Conquistada":o.need}</span></li>`).join("")}</ul>
    ${a?`<p class="advice">${a}</p>`:""}
    <footer class="row between"><button class="btn" data-act="go-title">Menu</button><span class="row"><button class="btn ghost" data-act="go-squad">Editar equipe</button><button class="btn primary" data-act="start">Jogar de novo</button></span></footer>
  </section>`}function Bi(){return tt&&ct?He(tt,ct.unitId)??null:null}function ka(n){tt&&(ae=null,ee=null,ct={unitId:n.id,dest:null,path:[],mode:"move",skillArmed:!1,reach:new Map},Xs=n.id,Is("select"),Ue.play("select"),De())}function sl(){ct=null,ee=null,ae=null,Wt.previewUnitAt(null,null),De()}function Ks(n){return ct?.dest??{x:n.x,y:n.y}}function ja(n){if(!ct||!ct.dest)return!0;const t=ct.reach.get(`${ct.dest.x},${ct.dest.y}`);return!!t&&t.cost<=Ui(n)}function Ir(n){const{s2:t,u2:e}=Lr(tt,n,Ks(n));return eh(t,e)}function De(){if(!tt)return;Wt.clearOverlays();const n=Bi();if(n&&ct){const t=ct.skillArmed&&zt(n).skill.id==="broto-agil"?1:0;ct.reach=Qu(tt,n,Ui(n,t)),Wt.showOverlay([...ct.reach.values()].filter(o=>o.path.length).map(o=>o.pos),"move"),ct.path.length&&Wt.showOverlay(ct.path,"path");const e=Ks(n),i=ct.path.length?ct.path[ct.path.length-1]:null,s=ct.path.length>1?ct.path[ct.path.length-2]:n;Wt.previewUnitAt(n.id,ct.dest,i?Ai(s,i,n.facing):void 0);const{s2:r,u2:a}=Lr(tt,n,e);ct.mode==="skill"&&zt(n).skill.id!=="broto-agil"?Wt.showOverlay(Ir(n).flatMap(o=>o.cells),"skill"):!ct.skillArmed&&ja(n)&&Wt.showOverlay(r.units.filter(o=>o.team!==ft&&!Fs(r,a,a,o)).map(o=>({x:o.x,y:o.y})),"attack")}else Wt.previewUnitAt(null,null);if(ae?.kind==="summon"&&Wt.showOverlay(Ur(tt,ft),"summon"),ae?.kind==="order"){const t=tt.commander[ft].doctrine;if(t==="impeto"&&ae.targetId){const e=He(tt,ae.targetId);Wt.showOverlay(Jn.map(i=>({x:e.x+i.x,y:e.y+i.y})).filter(i=>!qn(tt,ft,e.id,i)),"order")}else Wt.showOverlay(tt.units.filter(e=>e.team===ft&&!qn(tt,ft,e.id,t==="impeto"?od(e):void 0)).map(e=>({x:e.x,y:e.y})),"order")}ee&&Wt.showOverlay(ee.cells,"target"),jn()}function od(n){return Jn.map(t=>({x:n.x+t.x,y:n.y+t.y})).find(t=>!qn(tt,ft,n.id,t))}function Dc(n,t,e,i={}){const{s2:s,u2:r}=Lr(tt,n,t),a=s.units.find(l=>l.id===e.id),o=ui(s,r,r,a,i),c=Math.max(0,e.hp-(o.total-o.absorbed));return{total:o.total,lines:[...o.lines,`<b>Dano previsto ${o.total}</b> · ${zt(e).name} fica com ${c}/${e.maxHp} PV${c===0?" — desfeito":""}`]}}function yx(n,t){const e=Ks(n),{s2:i,u2:s}=Lr(tt,n,e),r=Fs(i,s,s,i.units.find(c=>c.id===t.id));if(r){rn(r,"error");return}const a=Dc(n,e,t),o=arkAttackDistance(n,e,t);ee={cmd:{kind:"activate",team:ft,unitId:n.id,path:ct.path,action:{kind:"attack",targetId:t.id},stateVersion:tt.version},title:`${zt(n).name} → ${zt(t).name}`,lines:[`Ataque básico · distância ${o} · ${o>1?"linha de visão livre":"corpo a corpo"} · custo 1 PO`,...a.lines],cells:[{x:t.x,y:t.y}],targetKey:`u:${t.id}`,confirmLabel:"Confirmar ataque"},De()}function za(n,t){const e=zt(n).skill,i=Ks(n),s=[`${e.text}`,`Custo ${Bs(n,!0)} PO · recarga ${e.cooldown} rodadas`],{s2:r}=Lr(tt,n,i);if(e.id==="estouro-cinzas")for(const o of Jn){const c=gn(r,i.x+o.x,i.y+o.y);c&&c.team!==ft&&s.push(`${zt(c).name}: ${Dc(n,i,c,{power:6,pierce:.5}).total} de dano + Queimadura`)}else if(e.id==="estilhaco-guiado"||e.id==="raio-arco"){const o=r.units.find(c=>c.id===t.action.targetId);if(s.push(...Dc(n,i,o,{ignoreCover:e.id==="estilhaco-guiado"}).lines),e.id==="raio-arco"){const c=r.units.filter(l=>l.team!==ft&&l.id!==o.id&&Ce(l,o)<=2).length;s.push(c?`O arco salta para ${c>1&&Ee(fe(r,o.x,o.y))==="condutor"?"mais 2 inimigos":"mais 1 inimigo"} (4 de dano).`:"Nenhum inimigo a até 2 casas do alvo para o arco saltar.")}}else if(e.id==="mare-benefica"||e.id==="bruma-memoria"){const o=r.units.find(c=>c.id===t.action.targetId);s.push(`${zt(o).name}: +${Math.min(o.maxHp-o.hp,e.id==="mare-benefica"?7:6)} PV (${o.hp}/${o.maxHp})`)}else e.id==="broto-agil"&&s.push(Ee(fe(r,i.x,i.y))==="mata"?"Termina sobre Mata: recebe Guarda.":"Não termina sobre Mata: sem Guarda.");const a=t.action.targetId?`u:${t.action.targetId}`:t.action.cell?`c:${t.action.cell.x},${t.action.cell.y}`:"self";ee={cmd:{kind:"activate",team:ft,unitId:n.id,path:ct.path,action:t.action,stateVersion:tt.version},title:e.name,lines:s,cells:t.cells,targetKey:a,confirmLabel:`Usar ${e.name}`},De()}function Uc(n){const t=Bi();if(!(!t||!ct)){if(!ja(t)){rn("Esse destino só é alcançável com Broto Ágil.","error");return}ee={cmd:{kind:"activate",team:ft,unitId:t.id,path:ct.path,action:{kind:n},stateVersion:tt.version},title:n==="defend"?`${zt(t).name} defende`:ct.path.length?`${zt(t).name} se move`:`${zt(t).name} aguarda`,lines:[n==="defend"?"Guarda: −25% no próximo dano direto, até a próxima ativação deste Eco.":"Termina a ativação sem ação.","Custo 1 PO"],cells:[Ks(t)],targetKey:n,confirmLabel:n==="defend"?"Confirmar Defender":ct.path.length?"Confirmar movimento":"Confirmar"},De()}}function cd(){const n=Bi();if(!n||!ct||!tt)return;const t=zt(n).skill;if(!Dr(tt,n)){rn(`${t.name} volta na rodada ${n.skillReadyRound}.`,"error");return}if(tt.po[ft]<Bs(n,!0)){rn(`${t.name} custa ${Bs(n,!0)} PO.`,"error");return}if(ee=null,t.id==="broto-agil"){if(ct.skillArmed=!ct.skillArmed,ct.mode=ct.skillArmed?"skill":"move",!ct.skillArmed&&!ja(n)&&(ct.dest=null,ct.path=[]),ct.skillArmed){const e=Ir(n)[0];e&&za(n,e);return}De();return}if(ct.mode=ct.mode==="skill"?"move":"skill",ct.mode==="skill"){const e=Ir(n);if(!e.length)rn(`Sem alvo válido para ${t.name} daqui.`,"error"),ct.mode="move";else if(t.target==="none"||t.target==="self"){za(n,e[0]);return}}De()}async function rl(){if(!ee||xn)return;const n=ee.cmd;await Za(n)}function al(n,t){if(!tt||Ve!=="battle"||ce)return;Ue.unlock();const e=t?He(tt,t)??null:null;if(e&&(Xs=e.id),xn||tt.nextToAct!==ft||tt.phase!=="battle"){jn();return}const i=e?`u:${e.id}`:n?`c:${n.x},${n.y}`:"";if(ee&&(ee.targetKey===i||ee.targetKey==="self"&&e?.id===ct?.unitId||(ee.targetKey==="defend"||ee.targetKey==="wait")&&n&&ct&&Ci(n,Ks(Bi())))){rl();return}if(ae?.kind==="summon"){if(n&&ae.monsterId&&Ur(tt,ft).some(r=>Ci(r,n))){const r=je(ae.monsterId);ee={cmd:{kind:"summon",team:ft,monsterId:r.id,portal:n,stateVersion:tt.version},title:`Invocar ${r.name}`,lines:["Custo 2 PO. Chega Exposto: só age na próxima rodada.","Uma invocação por rodada."],cells:[n],targetKey:`c:${n.x},${n.y}`,confirmLabel:"Confirmar invocação"},De();return}ae=null,ee=null,De();return}if(ae?.kind==="order"){const r=tt.commander[ft].doctrine;if(r==="impeto"&&ae.targetId&&n&&!e){const a=qn(tt,ft,ae.targetId,n);if(a){rn(a,"error");return}const o=He(tt,ae.targetId);ee={cmd:{kind:"order",team:ft,targetId:o.id,cell:n,stateVersion:tt.version},title:`Passo de Ruptura: ${zt(o).name}`,lines:["Move o aliado 1 casa sem gastar a ativação dele.","Custo 2 PO · recarga 3 rodadas"],cells:[n],targetKey:`c:${n.x},${n.y}`,confirmLabel:"Confirmar Ordem"},De();return}if(e&&e.team===ft){const a=qn(tt,ft,e.id,r==="impeto"?od(e):void 0);if(a){rn(a,"error");return}if(r==="impeto"){ae.targetId=e.id,ee=null,De();return}const o=As[r];ee={cmd:{kind:"order",team:ft,targetId:e.id,stateVersion:tt.version},title:`${o.order}: ${zt(e).name}`,lines:[o.text,"Custo 2 PO · recarga 3 rodadas · não gasta ativação"],cells:[{x:e.x,y:e.y}],targetKey:`u:${e.id}`,confirmLabel:"Confirmar Ordem"},De();return}ae=null,ee=null,De();return}const s=Bi();if(s&&ct){if(ct.mode==="skill"&&zt(s).skill.id!=="broto-agil"){const r=Ir(s).find(a=>e&&a.action.targetId===e.id||n&&a.action.cell&&Ci(a.action.cell,n));if(r){za(s,r);return}}if(e&&e.team!==ft){if(ct.skillArmed){rn("Broto Ágil substitui o ataque nesta ativação.","error");return}yx(s,e);return}if(e&&e.team===ft&&e.id!==s.id&&!ks(tt,e)){ka(e);return}if(n&&!(e&&e.id!==s.id)){const r=ct.reach.get(`${n.x},${n.y}`);if(r){if(ct.dest=r.path.length?r.pos:null,ct.path=r.path,ee=null,ct.skillArmed){const a=Ir(s)[0];if(a){za(s,a);return}}Ue.play("select"),De();return}}}if(e&&e.team===ft){const r=ks(tt,e);if(!r){ka(e);return}rn(r)}e?jn():sl()}const Zn=new Map;let Er=!1,Ea=0;Fi.addEventListener("pointerdown",n=>{if(Fi.setPointerCapture(n.pointerId),Zn.set(n.pointerId,{x:n.clientX,y:n.clientY,sx:n.clientX,sy:n.clientY}),Er=!1,Zn.size===2){const[t,e]=[...Zn.values()];Ea=Math.hypot(t.x-e.x,t.y-e.y)}});Fi.addEventListener("pointermove",n=>{const t=Zn.get(n.pointerId);if(!t){if(Ve==="battle"&&n.pointerType==="mouse"){const i=Wt.pick(n.clientX,n.clientY);Wt.setHover(i.cell);const s=i.unitId;s!==Va&&(Va=s,cl())}return}const e=n.clientX-t.x;if(t.x=n.clientX,t.y=n.clientY,Zn.size===2){const[i,s]=[...Zn.values()],r=Math.hypot(i.x-s.x,i.y-s.y);Ea>0&&Wt.zoomBy(r/Ea),Ea=r,Er=!0;return}Math.hypot(n.clientX-t.sx,n.clientY-t.sy)>10&&(Er=!0),Er&&Wt.rotateFree(-e*.008)});const Mx=n=>{const t=Zn.get(n.pointerId);if(Zn.delete(n.pointerId),!t||Er||Zn.size>0)return;if(n.button===2){ol();return}const e=Wt.pick(n.clientX,n.clientY);Ve==="battle"&&al(e.cell,e.unitId)};Fi.addEventListener("pointerup",Mx);Fi.addEventListener("pointercancel",n=>Zn.delete(n.pointerId));Fi.addEventListener("contextmenu",n=>n.preventDefault());Fi.addEventListener("wheel",n=>{n.preventDefault(),Wt.zoomBy(n.deltaY>0?.9:1.1)},{passive:!1});let Va=null;function ol(){if(ee){ee=null,De();return}if(ct?.mode==="skill"||ct?.skillArmed){if(ct.mode="move",ct.skillArmed=!1,ct.dest){const n=Bi();n&&!ja(n)&&(ct.dest=null,ct.path=[])}De();return}if(ct?.dest){ct.dest=null,ct.path=[],De();return}if(ct||ae){sl();return}}window.addEventListener("keydown",n=>{if(n.target instanceof HTMLInputElement)return;const t=n.key.toLowerCase();if(t==="escape"){if(ce){ce=En,En=null,ke();return}Ve==="battle"&&(ee||ct||ae?ol():(ce="pause",ke()));return}if(!(Ve!=="battle"||ce)&&(t==="q"&&Wt.rotate(-1),t==="e"&&Wt.rotate(1),(t==="+"||t==="=")&&Wt.zoomBy(1.15),t==="-"&&Wt.zoomBy(.87),!(xn||!tt||tt.nextToAct!==ft))){if(t==="enter"&&ee&&(n.preventDefault(),rl()),t===" "&&(n.preventDefault(),ce="confirm-pass",ke()),t==="tab"){n.preventDefault();const e=tt.units.filter(s=>s.team===ft&&!ks(tt,s));if(!e.length)return;const i=e.findIndex(s=>s.id===ct?.unitId);ka(e[(i+1)%e.length])}t==="d"&&ct&&Uc("defend"),t==="h"&&ct&&cd()}});function jn(){const n=Ya("#hud");if(!n||!tt)return;const t=tt,e=t.nextToAct===ft&&!xn&&t.phase==="battle",i=sh(t,2)[0],s=t.events.find(u=>u.round>=t.round),r=t.score[ft]-t.score[Ze],a=u=>Array.from({length:Math.max(6,t.po[u])},(h,d)=>`<i class="${d<t.po[u]?"on":""}"></i>`).join(""),o=u=>`<div class="track ${u===ft?"me":"them"}"><span class="who">${ux(u)}</span><span class="bar"><b style="width:${Math.min(100,t.score[u]/Ca*100)}%"></b></span><strong>${t.score[u]}</strong></div>`,c=t.confluences.map(u=>`<span class="cf ${u.owner===ft?"me":u.owner===Ze?"them":""}" title="${u.name}: ${u.value} PD/rodada">${u.value===3?"◆":"◇"}</span>`).join(""),l=t.phase!=="battle"?"Partida encerrada":xn&&t.nextToAct===Ze?`${Ge.name} está decidindo…`:xn?"Resolvendo…":"Sua vez";n.innerHTML=`
    <header class="topbar">
      <div class="dominion" aria-label="Placar de Domínio">
        ${o(ft)}${o(Ze)}
        <div class="dom-foot"><span>Meta ${Ca} com ${Fc} de vantagem</span><span class="cfs">${c}</span><span>${r>0?`você +${r}`:r<0?`${Ge.name} +${-r}`:"empatado"}</span></div>
      </div>
      <div class="roundbox">
        <strong>Rodada ${t.round}<small> de ${t.maxRounds}</small></strong>
        <span class="po"><em>PO</em><span class="pips me">${a(ft)}</span></span>
        <span class="po them"><em>${Ge.name}</em><span class="pips">${a(Ze)}</span></span>
      </div>
      <div class="corner">
        ${s?`<div class="forecast ${i&&i.round===t.round?"urgent":""}" title="${hn(s.text)}"><b>${s.round===t.round?"Fim desta rodada":`Rodada ${s.round}`}</b><span>${hn(s.title)}</span></div>`:""}
        <div class="cam"><button class="icon" data-act="rot-l" aria-label="Girar câmera para a esquerda">⟲</button><button class="icon" data-act="rot-r" aria-label="Girar câmera para a direita">⟳</button><button class="icon" data-act="open-log" aria-label="Histórico">☰</button><button class="icon" data-act="pause" aria-label="Pausar">❚❚</button></div>
      </div>
    </header>
    <aside class="roster">${wx()}</aside>
    <div id="card"></div>
    ${Rn.step<Yn.length&&Ct.tips?`<aside class="tip"><b>Ivo</b><p>${Yn[Rn.step].text}</p><button class="link" data-act="hide-tips">Ocultar dicas</button></aside>`:""}
    <footer class="dock">
      <div class="turn ${e?"mine":"theirs"}"><b>${l}</b><span>${hn(Sx())}</span></div>
      ${ee?bx():""}
      <div class="actions">${Ex(e)}</div>
    </footer>`,cl()}function Sx(){if(!tt||tt.phase!=="battle")return"";if(tt.nextToAct!==ft)return"Observe a jogada; você responde em seguida.";if(ee)return"Toque de novo no alvo ou em Confirmar. Esc ou Voltar cancela.";if(ae?.kind==="summon")return ae.monsterId?"Toque num portal seu destacado.":"Escolha qual Eco da reserva invocar.";if(ae?.kind==="order")return tt.commander[ft].doctrine==="impeto"&&ae.targetId?"Toque na casa de destino.":"Toque num aliado destacado.";const n=Bi();return n&&ct?ct.mode==="skill"?`${zt(n).skill.name}: toque num alvo dourado.`:ct.dest?"Ataque um alvo listrado, use habilidade, defenda ou confirme o movimento.":"Toque numa casa pontilhada para mover ou num inimigo listrado para atacar.":"Escolha um Eco pronto, peça reforço, dê uma Ordem ou passe a rodada."}function bx(){const n=ee;return`<div class="preview" role="dialog" aria-label="Prévia da ação"><h4>${hn(n.title)}</h4><ul>${n.lines.map(t=>`<li>${t}</li>`).join("")}</ul>
    <div class="row"><button class="btn ghost" data-act="cancel">Voltar</button><button class="btn primary" data-act="confirm">${hn(n.confirmLabel)}</button></div></div>`}function Ex(n){if(!tt)return"";const t=tt;if(!n)return'<button class="btn" disabled>Aguarde</button>';const e=Bi();if(e&&ct){const a=zt(e).skill,o=Dr(t,e),c=Bs(e,!0),l=o?t.po[ft]<c?`precisa ${c} PO`:"":`volta na rodada ${e.skillReadyRound}`;return`<button class="btn ${ct.mode==="skill"||ct.skillArmed?"on":""}" data-act="skill" ${l?'aria-disabled="true"':""} title="${hn(a.text)}">${a.name} <small>${l||`+${a.extraPO} PO`}</small></button>
      <button class="btn" data-act="defend">Defender <small>1 PO</small></button>
      <button class="btn" data-act="wait">${ct.dest?"Só mover":"Aguardar"} <small>1 PO</small></button>
      <button class="btn ghost" data-act="cancel">Cancelar</button>`}const i=Nr(t,ft),s=Or(t,ft),r=As[t.commander[ft].doctrine];return ae?.kind==="summon"?t.reserves[ft].map(a=>`<button class="btn ${ae?.kind==="summon"&&ae.monsterId===a?"on":""}" data-act="pick-reserve" data-id="${a}" style="--aff:${ts(a).color}">${ts(a).symbol} ${je(a).name}</button>`).join("")+'<button class="btn ghost" data-act="cancel">Cancelar</button>':ae?.kind==="order"?`<button class="btn on" disabled>${r.order}</button><button class="btn ghost" data-act="cancel">Cancelar</button>`:`<button class="btn" data-act="summon" ${i?'aria-disabled="true"':""} title="${hn(i??"Traz um Eco da reserva por um portal seu")}">Reforço <small>${i&&t.reserves[ft].length===0?"reserva vazia":i?"indisponível":`${Pa} PO`}</small></button>
    <button class="btn" data-act="order" ${s?'aria-disabled="true"':""} title="${hn(s??r.text)}">${r.order} <small>${s?t.round<t.commander[ft].orderReadyRound?`rodada ${t.commander[ft].orderReadyRound}`:"indisponível":`${Ia} PO`}</small></button>
    <button class="btn danger" data-act="ask-pass">Passar a rodada</button>`}function wx(){if(!tt)return"";const n=tt,t=s=>{const r=zt(s),a=ln[r.affinity],o=s.exposed?"exposto":s.activated?"ativado":"pronto";return`<button class="r-unit ${s.team===ft?"me":"them"} ${o} ${ct?.unitId===s.id?"sel":""}" data-act="roster-unit" data-id="${s.id}" style="--aff:${a.color}">
      <span class="sym">${a.symbol}</span><span class="nm">${r.name}</span><span class="hpmini"><b style="width:${s.hp/s.maxHp*100}%"></b></span><span class="state">${o}</span></button>`},e=n.units.filter(s=>s.team===ft),i=n.units.filter(s=>s.team===Ze);return`<div class="r-group"><h5>Seus Ecos</h5>${e.map(t).join("")}${n.reserves[ft].map(s=>`<div class="r-unit reserve" style="--aff:${ts(s).color}"><span class="sym">${ts(s).symbol}</span><span class="nm">${je(s).name}</span><span class="state">reserva</span></div>`).join("")}</div>
    <div class="r-group"><h5>${Ge.name}</h5>${i.map(t).join("")}${n.reserves[Ze].map(s=>`<div class="r-unit reserve them"><span class="sym">${ts(s).symbol}</span><span class="nm">${je(s).name}</span><span class="state">reserva</span></div>`).join("")}</div>`}function cl(){const n=Ya("#card");if(!n||!tt)return;const t=Va??Xs??ct?.unitId??null,e=t?He(tt,t):void 0;if(!e){n.innerHTML="",n.className="";return}const i=zt(e),s=ln[i.affinity],r=i.skill,a=fe(tt,e.x,e.y),o={rocha:"Rocha",cinza:"Cinza aquecida",agua:"Água rasa",mata:"Mata alta",cristal:"Cristal",condutor:"Condutor",fenda:"Fenda astral",ponte:"Ponte frágil",lava:"Lava",parede:"Parede"};n.className=`card ${e.team===ft?"me":"them"}`,n.style.setProperty("--aff",s.color),n.innerHTML=`<header><span class="sym">${s.symbol}</span><div><h4>${i.name}</h4><span>${s.name} · ${Oc[i.role]} · ${e.team===ft?"seu":Ge.name}</span></div><button class="icon small" data-act="close-card" aria-label="Fechar ficha">✕</button></header>
    <div class="hpbar"><b style="width:${e.hp/e.maxHp*100}%"></b><span>${e.hp} / ${e.maxHp} PV</span></div>
    <dl><dt>ATK</dt><dd>${i.atk}</dd><dt>ARM</dt><dd>${i.armor}</dd><dt>MOV</dt><dd>${Ui(e)}${Ui(e)!==i.move?`<small>/${i.move}</small>`:""}</dd><dt>ALC</dt><dd>${i.range}</dd></dl>
    <p class="tactic-note"><b>Movimento:</b> ${arkScout(e)?"ortogonal + diagonal":"ortogonal"} · <b>Ataque:</b> ${arkSymbol(e)?"imóvel / sem ataque":i.role==="atirador"?"linhas retas + diagonais":i.role==="batedor"?"8 direções adjacentes":"alcance ortogonal"}</p>\n    <p class="beats">Vence ${ln[s.beats].symbol} ${ln[s.beats].name} · sobre ${o[Ee(a)]}${a.h?`, altura ${a.h}`:""}</p>
    ${e.statuses.length?`<p class="sts">${e.statuses.map(c=>`<span>${id[c.id]}${c.id==="barreira"?` ${c.value}`:c.untilActivation?"":` (${c.rounds})`}</span>`).join("")}</p>`:""}
    <p class="sk"><b>${r.name}</b> <small>+${r.extraPO} PO · recarga ${r.cooldown}${Dr(tt,e)?" · pronta":` · volta na rodada ${e.skillReadyRound}`}</small><br>${r.text}</p>`}function ke(){let n=Ya("#modal-root");if(n||(n=document.createElement("div"),n.id="modal-root",cn.appendChild(n)),!ce){n.innerHTML="";return}const t=(e,i="")=>`<div class="scrim" data-act="scrim"><div class="modal ${i}" role="dialog" aria-modal="true">${e}</div></div>`;switch(ce){case"pause":n.innerHTML=t(`<h2>Pausa</h2><nav class="stack">
        <button class="btn primary" data-act="resume">Retomar</button>
        <button class="btn" data-act="open-rules">Regras e objetivo</button>
        <button class="btn" data-act="open-options">Opções</button>
        <button class="btn" data-act="ask-restart">Reiniciar missão</button>
        <button class="btn ghost" data-act="ask-menu">Voltar ao menu</button></nav>`);break;case"rules":n.innerHTML=t(`${rd()}<div class="row end"><button class="btn" data-act="back-modal">Voltar</button></div>`,"wide");break;case"log":n.innerHTML=t(`<h2>Histórico</h2><ol class="log">${(tt?.log??[]).slice(-30).reverse().map(e=>`<li class="${e.team===ft?"me":e.team===Ze?"them":""}"><small>R${e.round}</small>${hn(e.text.replace(/o rival/g,Ge.name))}</li>`).join("")}</ol><div class="row end"><button class="btn" data-act="back-modal">Fechar</button></div>`,"wide");break;case"options":{const e=(s,r)=>`<button class="seg ${Ct.speed===s?"on":""}" data-act="opt-speed" data-v="${s}">${r}</button>`,i=(s,r)=>`<button class="seg ${Ct.quality===s?"on":""}" data-act="opt-quality" data-v="${s}">${r}</button>`;n.innerHTML=t(`<h2>Opções</h2>
        <div class="opt"><span>Velocidade das animações</span><div class="segs">${e(1,"1×")}${e(1.5,"1,5×")}${e(2,"2×")}${e(99,"Instantâneo")}</div></div>
        <div class="opt"><span>Qualidade gráfica</span><div class="segs">${i("baixo","Baixa")}${i("medio","Média")}${i("alto","Alta")}</div></div>
        <label class="opt toggle"><input type="checkbox" data-act="opt-sound" ${Ct.sound?"checked":""}> Efeitos sonoros</label>
        <div class="opt"><span>Volume</span><input type="range" min="0" max="1" step="0.05" value="${Ct.volume}" data-act="opt-volume"></div>
        <label class="opt toggle"><input type="checkbox" data-act="opt-motion" ${Ct.reduceMotion?"checked":""}> Reduzir movimento</label>
        <label class="opt toggle"><input type="checkbox" data-act="opt-tips" ${Ct.tips?"checked":""}> Dicas do Ivo durante a partida</label>
        <div class="row end"><button class="btn" data-act="opt-reset">Restaurar padrões</button><button class="btn primary" data-act="back-modal">Pronto</button></div>`);break}case"confirm-pass":{const e=tt?tt.units.filter(i=>i.team===ft&&!i.activated&&!i.exposed).length:0;n.innerHTML=t(`<h2>Passar a rodada?</h2><p>${e?`Você ainda tem ${e} Eco${e>1?"s":""} sem ativar e ${tt.po[ft]} PO. `:""}Depois de passar você não age mais nesta rodada; ${Ge.name} pode continuar até esgotar os PO dele. PO não usados se perdem.</p><div class="row end"><button class="btn" data-act="back-modal">Voltar</button><button class="btn danger" data-act="pass">Passar</button></div>`);break}case"confirm-restart":n.innerHTML=t('<h2>Reiniciar a missão?</h2><p>O progresso desta partida será perdido.</p><div class="row end"><button class="btn" data-act="back-modal">Voltar</button><button class="btn danger" data-act="restart">Reiniciar</button></div>');break;case"confirm-menu":n.innerHTML=t('<h2>Voltar ao menu?</h2><p>A partida em andamento será encerrada.</p><div class="row end"><button class="btn" data-act="back-modal">Voltar</button><button class="btn danger" data-act="go-title">Ir ao menu</button></div>');break}}cn.addEventListener("click",n=>{Ue.unlock();const t=n.target.closest("[data-act]");if(!t)return;const e=t.dataset.act;if(e==="scrim"){n.target===t&&ce!=="confirm-restart"&&(ce=En,En=null,ke());return}t instanceof HTMLInputElement&&(t.type==="checkbox"||t.type==="radio"||t.type==="range")||Tx(e,t)});cn.addEventListener("change",n=>{const t=n.target,e=t.dataset.act;e&&(e==="set-doctrine"&&(Ct.doctrine=t.value,Tn(Ct),wn()),e==="set-diff"&&(Ct.difficulty=t.checked?"historia":"normal",Tn(Ct)),e==="set-first"&&(Ct.playerFirst=t.checked,Tn(Ct)),e==="opt-sound"&&(Ct.sound=t.checked,Tn(Ct),Ns()),e==="opt-motion"&&(Ct.reduceMotion=t.checked,Tn(Ct),Ns()),e==="opt-tips"&&(Ct.tips=t.checked,Tn(Ct),Ct.tips&&Rn.step>=Yn.length&&(Rn.step=0),jn()),e==="opt-volume"&&(Ct.volume=Number(t.value),Tn(Ct),Ns(),Ue.play("select")))});function Tx(n,t){const e=t.dataset.id;switch(n){case"go-title":Bn++,Wt.stop(),ce=null,Ve="title",tt=null,Wt.setState(mr()),wn();break;case"go-squad":Bn++,Wt.stop(),ce=null,Ve="squad",Wt.setState(mr()),wn();break;case"go-briefing":Ve="briefing",Tn({...Ct,squad:fi}),Ct.squad=[...fi],wn();break;case"go-bestiary":Ve="bestiary",wn();break;case"go-rules":Ve="rules",wn();break;case"start":Ue.unlock(),Zu();break;case"toggle-eco":{if(!e)break;Pc=e;const i=ci.indexOf(e);if(i>=0)ci[i]=null;else{const s=Ju([...fi,e]);if(!s.ok){rn(s.reason,"error"),wn();break}ci[ci.indexOf(null)]=e}qu(),Ue.play("select"),Wt.setState(mr()),wn();break}case"squad-suggest":ci=["pedruxo","cinzalon","mineruva","nacarino","zirpim","larveira"],qu(),Wt.setState(mr()),wn();break;case"open-options":En=ce,ce="options",ke();break;case"open-rules":En=ce,ce="rules",ke();break;case"open-log":En=null,ce="log",ke();break;case"back-modal":ce=En,En=null,ke();break;case"pause":ce="pause",ke();break;case"resume":ce=null,ke();break;case"ask-restart":ce="confirm-restart",En="pause",ke();break;case"ask-menu":ce="confirm-menu",En="pause",ke();break;case"restart":ce=null,Zu();break;case"ask-pass":ce="confirm-pass",En=null,ke();break;case"pass":ce=null,ke(),sl(),Za({kind:"pass",team:ft,stateVersion:tt?.version});break;case"opt-speed":Ct.speed=Number(t.dataset.v),Tn(Ct),Ns(),ke();break;case"opt-quality":Ct.quality=t.dataset.v,Tn(Ct),Wt.setQuality(Ct.quality),ke();break;case"opt-reset":{const i=Ct.squad;Ct={...Ax(),squad:i},Tn(Ct),Ns(),Wt.setQuality(Ct.quality),ke();break}case"rot-l":Wt.rotate(-1);break;case"rot-r":Wt.rotate(1);break;case"hide-tips":Ct.tips=!1,Tn(Ct),Rn.step=Yn.length,jn();break;case"close-card":Xs=null,Va=null,cl();break;case"confirm":rl();break;case"cancel":ol();break;case"skill":cd();break;case"defend":Uc("defend");break;case"wait":Uc("wait");break;case"summon":{const i=tt?Nr(tt,ft):"Sem partida.";if(i){rn(i,"error");break}ct=null,ee=null,ae={kind:"summon",monsterId:tt.reserves[ft].length===1?tt.reserves[ft][0]:null},De();break}case"pick-reserve":ae?.kind==="summon"&&e&&(ae.monsterId=e,ee=null,De());break;case"order":{const i=tt?Or(tt,ft):"Sem partida.";if(i){rn(i,"error");break}ct=null,ee=null,ae={kind:"order",targetId:null},De();break}case"roster-unit":{if(!tt||!e)break;const i=He(tt,e);if(!i)break;Xs=i.id,i.team===ft&&!xn&&tt.nextToAct===ft&&!ks(tt,i)&&!ae?ka(i):i.team!==ft&&ct&&!xn?al({x:i.x,y:i.y},i.id):jn();break}}}function Ax(){try{localStorage.removeItem("arkhos.settings.v1")}catch{}return hh()}Wt.setState(mr());let ju=performance.now();function ld(n){requestAnimationFrame(ld);const t=Math.min(.05,(n-ju)/1e3);ju=n,Ve!=="battle"&&!Ct.reduceMotion&&Wt.rotateFree(t*.12)}requestAnimationFrame(ld);wn();window.__arkhos={get state(){return tt},get screen(){return Ve},get busy(){return xn},run:n=>Za(n),tap:(n,t,e)=>al({x:n,y:t},e??null),ai:()=>tt&&ah(tt,ft,"normal")};
