var ServerBuddies=(()=>{var ke=Object.defineProperty;var kt=Object.getOwnPropertyDescriptor;var xt=Object.getOwnPropertyNames;var wt=Object.prototype.hasOwnProperty;var $t=(e,s)=>{for(var t in s)ke(e,t,{get:s[t],enumerable:!0})},Ht=(e,s,t,n)=>{if(s&&typeof s=="object"||typeof s=="function")for(let o of xt(s))!wt.call(e,o)&&o!==t&&ke(e,o,{get:()=>s[o],enumerable:!(n=kt(s,o))||n.enumerable});return e};var vt=e=>Ht(ke({},"__esModule",{value:!0}),e);var Ft={};$t(Ft,{ACCESSORIES:()=>se,ACTIONS:()=>ne,HANG_STYLES:()=>Ae,MOODS:()=>re,POSITIONS:()=>Ce,SEASONS:()=>Le,characters:()=>Vt,createBuddy:()=>oe,defineServerBuddyElement:()=>ie,ensureStyles:()=>ae,renderPreview:()=>nt,seasonAccessory:()=>X});var g='style="fill:var(--sb-main)"',x='style="fill:var(--sb-dark)"',L='style="fill:var(--sb-light)"',A='style="fill:var(--sb-shell)"',D='style="fill:var(--sb-screen)"',u=(e,s,t,n,o="")=>`<circle class="sb-led ${o}" cx="${e}" cy="${s}" r="${t}" fill="${n}"/>`,O={sclera:"#f8fafc",scleraStroke:"",pupil:"#0f172a",line:"#e2e8f0",mouth:"#38bdf8",down:"#f87171",cheek:"#f472b6"},v={sclera:"#ffffff",scleraStroke:"#475569",pupil:"#0f172a",line:"#334155",mouth:"#334155",down:"#dc2626",cheek:"#fb7185"},Xe=(e,s,t)=>{let n=typeof e=="string"&&e.trim()?e.trim().slice(0,t):s;return n?n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"):""},je=(e,s)=>Math.min(s,Math.round(46/Math.max(e.length,1)*1.9*10)/10),ee=4,Mt=12,Lt=2,d=(e,s,t,n=1,o=1)=>`<rect x="${Mt+e*ee}" y="${Lt+s*ee}" width="${n*ee+1}" height="${o*ee+1}" ${t.startsWith("style")?t:`fill="${t}"`}/>`,Ne=(e,s)=>e.map((t,n)=>t.replace(/([^.])\1*/g,(o,b,h)=>d(h,n,s[b],o.length))).join(""),_e={k:"#16120f",l:'style="fill:color-mix(in srgb,var(--sb-main) 70%,#fff)"',H:g,h:x,g:'style="fill:color-mix(in srgb,var(--sb-dark) 65%,#000)"',s:"#2a241d",1:"#4a2616",2:"#7a4026",3:"#a65f35",4:"#cf8550",5:"#eeb27a",b:"#8f5230",r:"#e2a087"},At=["...........kkkkkkkkkkkk...........",".........kklllllllHHHhgkk.........",".......kkllllllllllHHHhhgkk.......","......kHHllllllHHHHHHHHhhggk......",".....kHHllllllHHHHHHHHHHhhggk.....","....kHHHllllllHHHHHHHHHHhhhggk....","....kHHHHHHHHHHHHHHHHHHHHhhhgk....","...kHHHHHHHHHHHHHHHHHHHHHhhhggk...","...ksssssssssssssssssssssgggggk...","...kHHHHHHHHHHHHHHHHHHHHHhhhhgk...","..khhhhhhhhhhhhhhhhhhhhhhhhhhggk..",".khhhhhhhhhhhhhhhhhhhhhhhhggggggk.","..kkk2s22211111222211r11111s1kkk..","....k4s44422221332312222222s1k....","....k4s44442223342332222222s1k....","....k4s445432233523322r2222s1k....","....k4s444533333523333r2222s1k....",".....ks44443333342333332221sk.....",".....ks44443333122133332221sk.....",".....k4s444333bbbbbb332222s1k.....","......ks333bbbbbbbbbbb2222sk......","......k43333bbbbbbbbbb22211k......",".......k1113bbb333bbbb2111k.......","........k1133bbb2bbbb2211k........","...kkkkkkk11422222222211kkkkkkk...",".kklllllllllk11111111kHHHHHHHHHkk.","kHHHHHHHHHHHk22222222kHHHHHhhhhhhk","kHHHHHHHHHHHk22222222kHHHHHhhhhhhk"];function Ct(e,s,t){let n=e.theme,o=s.state==="down",b=s.eyesClosed,h=s.squint&&!o&&!b,c=s.state==="curious",a="#2a150c",i="";for(let m of[11,20])o?i+=d(m,12,n.down)+d(m+2,12,n.down)+d(m+1,13,n.down)+d(m,14,n.down)+d(m+2,14,n.down):b?i+=d(m,14,a,3):h?i+=d(m,14,a)+d(m+1,13,a)+d(m+2,14,a):i+=d(m,c?12:13,"#e3d8c4",3)+d(m,c?13:14,"#fbf6ec",3,c?2:1);if(!o&&!b&&!h){let m=c?12:13;i+=`<g class="sb-pupils">${[12,21].map(k=>d(k,m,"#120d0a")+d(k,m+1,"#3b5f7a",1,c?2:1)).join("")}</g>`}return o?i+=d(15,21,a,4)+d(14,22,a)+d(19,22,a):s.idleAct==="yawn"?i+=d(16,20,a,2,3):s.state==="sleeping"?i+=d(15,21,a,4):c?i+=d(16,21,a,2,2):i+=d(14,21,a,4)+d(18,20,a),`<g>${i}</g><g transform="translate(0 23)">${we(t)}</g>`}var Et={k:"#16120f",l:_e.l,H:g,h:x,n:"#2b1e15",m:"#4a3627",q:"#18110c",v:"#ef4444",V:"#b91c1c",w:"#c9b48e",W:"#e6d6b4",1:"#5a2d1c",2:"#8e4d31",3:"#c27d52",4:"#e0a271",5:"#f5c99a"},St=["..................................","..........kkkkkkkkkkkkkk..........",".......kkknmmmmmmmnnnnqqkkk.......","......knnnmmmmmmmmnnnvnvqqqk......",".....knnnmmmmmmmmmnnvvnvvqqqk.....",".....knnnnnnnnnnnnnnnnnnnqqqk.....",".....knnnnnnnnnnnnnnVVnVVqqqk.....","....knnnnnnnnnnnnnnnnVnVnqqqqk....","....knnnnnnnnnnnnnnnnnnnnqqqqk....","....klllHHHHHHHHHHHHHHHHHhhhhkk...","....kHHHHHhhhhhhhhhhhhhhhhhhhhHk..","....knn44443333333333332222qqhHhk.","....knn44422222333322222222qqkkHhk","...k3nn44442222333322222222qq1kkk.","...k42n44442222342322222222q12k...","...k42444542223WWww32222222112k...","...k34444543333342333332222111k...","....kk4444433333523333322211kk....",".....k4444433332431333322211k.....",".....k4444433333113333322211k.....",".....k4444433333333333222211k.....","......k11143333333333322111k......",".......k114433333333332211k.......","........k1143333333332211k........","....kkkkkk11433321332211kkkkkk....",".kkk44444HHH1111111111hhh22222kkk.","k44444444HHH2222222222hhh22222222k","k44444444HHHHHHHHhhhhhhhh22222222k"],xe=[[10,11],[11,11],[11,12],[12,12],[13,12],[13,13],[14,13]],Yt=xe.map(([e,s])=>[33-e,s]);function qt(e,s,t){let n=s.state==="down",o=s.eyesClosed,b=s.squint&&!n&&!o,h=s.state==="curious",c="#1c0e08",a="#ef4444",i="";for(let k of[11,20])n?i+=d(k,12,a)+d(k+2,12,a)+d(k+1,13,a)+d(k,14,a)+d(k+2,14,a):o?i+=d(k,14,c,3):b?i+=d(k,14,"#fbf6ec",3)+d(k+1,14,"#120d0a"):i+=d(k,13,"#e3d8c4",3)+d(k,14,"#fbf6ec",3);!n&&!o&&!b&&(i+=`<g class="sb-pupils">${[12,21].map(k=>d(k,13,"#120d0a")+d(k,14,"#4f8a4a")).join("")}</g>`);let m=n?[]:h?[...xe,[20,11],[21,11],[22,11],[23,11]]:[...xe,...Yt];return i+=m.map(([k,w])=>d(k,w,c)).join(""),n?i+=d(13,20,c,8,4)+d(14,21,"#f6f1e6",6)+d(14,22,"#6b1111",6):s.idleAct==="yawn"?i+=d(15,20,c,4,3)+d(16,21,"#6b1111",2):s.state==="sleeping"||h?i+=d(14,21,c,6):i+=d(13,20,c,8,3)+d(14,21,"#f6f1e6",6)+d(16,21,"#b8ae9c")+d(18,21,"#b8ae9c"),`<g>${i}</g><g transform="translate(0 23)">${we(t)}</g>`}var T={server:{id:"server",name:"Server",blurb:"The classic rack-mount server.",colors:{main:"#0058c3",shell:"#1e293b",screen:"#0b1220"},theme:O,face:{dx:0,dy:0,k:1},anchor:{y:14,hw:60,earY:36},body:e=>`
      <line x1="80" y1="14" x2="80" y2="5" stroke="#475569" stroke-width="3" stroke-linecap="round"/>
      ${u(80,4,4,e.led)}
      <rect x="20" y="14" width="120" height="44" rx="13" ${A}/>
      <rect x="28" y="20" width="104" height="32" rx="9" ${D}/>
      <rect x="20" y="62" width="120" height="38" rx="13" ${g}/>
      <rect x="30" y="71" width="62" height="7" rx="3.5" ${x}/>
      <rect x="30" y="83" width="62" height="7" rx="3.5" ${x}/>
      ${u(108,75,3.2,e.led)}${u(120,75,3.2,"#93c5fd","sb-led-b")}
      ${u(108,87,3.2,"#93c5fd","sb-led-c")}${u(120,87,3.2,e.led,"sb-led-d")}
      <rect x="34" y="100" width="22" height="7" rx="3.5" fill="#334155"/>
      <rect x="104" y="100" width="22" height="7" rx="3.5" fill="#334155"/>`},robot:{id:"robot",name:"Robot",blurb:"Round visor, tiny arms, big opinions.",colors:{main:"#f97316",shell:"#e2e8f0",screen:"#0b1220"},theme:O,face:{dx:0,dy:1,k:1},anchor:{y:12,hw:56,earY:40},body:e=>`
      <line x1="80" y1="12" x2="80" y2="5" stroke="#64748b" stroke-width="3" stroke-linecap="round"/>
      ${u(80,4,4.5,e.led)}
      <rect x="17" y="30" width="12" height="22" rx="6" ${x}/>
      <rect x="131" y="30" width="12" height="22" rx="6" ${x}/>
      <rect x="24" y="12" width="112" height="56" rx="26" ${A}/>
      <rect x="34" y="20" width="92" height="40" rx="19" ${D}/>
      <rect x="27" y="74" width="13" height="26" rx="6.5" ${x}/>
      <rect x="120" y="74" width="13" height="26" rx="6.5" ${x}/>
      <rect x="46" y="72" width="68" height="30" rx="11" ${g}/>
      <rect x="55" y="80" width="30" height="6" rx="3" ${x}/>
      <rect x="55" y="90" width="30" height="6" rx="3" ${x}/>
      ${u(98,83,3.4,e.led)}${u(98,93,3.4,"#fed7aa","sb-led-b")}
      <rect x="50" y="102" width="24" height="7" rx="3.5" fill="#475569"/>
      <rect x="86" y="102" width="24" height="7" rx="3.5" fill="#475569"/>`},cat:{id:"cat",name:"Cat",blurb:"Collar tag doubles as the status light.",colors:{main:"#f59e0b",shell:"#fef3c7",screen:"#0b1220"},theme:{...v,sclera:"#ffffff",scleraStroke:"",line:"#44403c",mouth:"#44403c"},face:{dx:0,dy:8,k:1},anchor:{y:15,hw:56,earY:52},body:e=>`
      <path d="M112 98C142 98 148 70 134 62" fill="none" stroke-width="8" stroke-linecap="round" style="stroke:var(--sb-dark)"/>
      <ellipse cx="80" cy="92" rx="34" ry="17" ${g}/>
      <ellipse cx="62" cy="106" rx="11" ry="5" ${L}/>
      <ellipse cx="98" cy="106" rx="11" ry="5" ${L}/>
      <path d="M26 44L30 10L58 26Z" ${g}/>
      <path d="M134 44L130 10L102 26Z" ${g}/>
      <path d="M33 34L35 19L49 27Z" fill="#fbcfe8"/>
      <path d="M127 34L125 19L111 27Z" fill="#fbcfe8"/>
      <ellipse cx="80" cy="52" rx="58" ry="38" ${g}/>
      <ellipse cx="80" cy="63" rx="22" ry="14" ${L}/>
      <rect x="62" y="82" width="36" height="6" rx="3" fill="#ef4444"/>
      ${u(80,91,4.5,e.led)}
      <path d="M30 60H10M32 67L12 73M130 60H150M128 67L148 73" stroke="#64748b" stroke-width="2" stroke-linecap="round" fill="none"/>`},ghost:{id:"ghost",name:"Ghost",blurb:"Friendly, floaty, slightly judgemental.",colors:{main:"#e0e7ff",shell:"#1e293b",screen:"#0b1220"},theme:v,face:{dx:0,dy:3,k:1},anchor:{y:8,hw:50,earY:40},blush:!0,body:e=>`
      <path d="M28 100V52C28 24 50 8 80 8C110 8 132 24 132 52V100Q122 110 112 100Q102 90 92 100Q82 110 72 100Q62 90 52 100Q42 110 28 100Z" ${g}/>
      <ellipse cx="27" cy="68" rx="10" ry="6" transform="rotate(35 27 68)" ${g}/>
      <ellipse cx="133" cy="68" rx="10" ry="6" transform="rotate(-35 133 68)" ${g}/>
      <ellipse cx="80" cy="82" rx="30" ry="12" ${L} opacity=".55"/>
      ${u(80,83,5,e.led)}`},cloud:{id:"cloud",name:"Cloud",blurb:"Perfect for hosting and cloud products.",colors:{main:"#7dd3fc",shell:"#1e293b",screen:"#0b1220"},theme:v,face:{dx:0,dy:6,k:1},anchor:{y:12,hw:38,earY:44},body:e=>`
      <g ${g}>
        <circle cx="46" cy="62" r="24"/>
        <circle cx="80" cy="44" r="32"/>
        <circle cx="114" cy="60" r="26"/>
        <rect x="34" y="56" width="92" height="34" rx="17"/>
      </g>
      <ellipse cx="80" cy="84" rx="38" ry="5" ${L} opacity=".6"/>
      <path class="sb-led" d="M84 92l-11 13h8l-5 12 15-16h-8l5-9z" fill="${e.led}"/>`},database:{id:"database",name:"Database",blurb:"Stacked drives with status lights.",colors:{main:"#10b981",shell:"#1e293b",screen:"#0b1220"},theme:{...v,scleraStroke:"",line:"#064e3b",mouth:"#064e3b",down:"#7f1d1d"},face:{dx:0,dy:3,k:1},anchor:{y:13,hw:46,earY:42},body:e=>`
      <path d="M30 24V92C30 102 52 108 80 108C108 108 130 102 130 92V24Z" ${g}/>
      <path d="M30 58C30 68 52 74 80 74C108 74 130 68 130 58" fill="none" stroke-width="4" style="stroke:var(--sb-dark)"/>
      <path d="M30 84C30 94 52 100 80 100C108 100 130 94 130 84" fill="none" stroke-width="4" style="stroke:var(--sb-dark)"/>
      <ellipse cx="80" cy="24" rx="50" ry="13" ${L}/>
      <rect x="40" y="81" width="38" height="6" rx="3" ${x}/>
      ${u(102,85,3.2,e.led)}${u(114,85,3.2,"#a7f3d0","sb-led-b")}`},router:{id:"router",name:"Router",blurb:"Flat, wide and always broadcasting.",colors:{main:"#a78bfa",shell:"#1e293b",screen:"#0b1220"},theme:{...v,scleraStroke:"",line:"#3b0764",mouth:"#3b0764",down:"#be123c"},face:{dx:0,dy:22,k:1},anchor:{y:38,hw:62,earY:62},blush:!0,body:e=>`
      <line x1="34" y1="40" x2="22" y2="10" stroke="#4c1d95" stroke-width="5" stroke-linecap="round"/>
      <line x1="126" y1="40" x2="138" y2="10" stroke="#4c1d95" stroke-width="5" stroke-linecap="round"/>
      ${u(22,8,4.5,e.led)}${u(138,8,4.5,e.led,"sb-led-b")}
      <g fill="none" stroke-width="3.5" stroke-linecap="round" style="stroke:var(--sb-main)" opacity=".85">
        <path d="M66 28Q80 18 94 28"/><path d="M58 20Q80 3 102 20"/>
      </g>
      <rect x="12" y="40" width="136" height="62" rx="22" ${g}/>
      <rect x="12" y="40" width="136" height="62" rx="22" fill="none" stroke-width="3" style="stroke:var(--sb-dark)"/>
      <rect x="28" y="88" width="14" height="8" rx="3" ${x}/><rect x="48" y="88" width="14" height="8" rx="3" ${x}/>
      <rect x="68" y="88" width="14" height="8" rx="3" ${x}/><rect x="88" y="88" width="14" height="8" rx="3" ${x}/>
      ${u(116,92,3.4,e.led)}${u(128,92,3.4,"#ddd6fe","sb-led-c")}`},shield:{id:"shield",name:"Shield",blurb:"The firewall. Nothing gets past it.",colors:{main:"#e11d48",shell:"#1e293b",screen:"#0b1220"},theme:{...v,scleraStroke:"",line:"#4c0519",mouth:"#4c0519",down:"#fef08a"},face:{dx:0,dy:2,k:1},anchor:{y:10,hw:52,earY:38},body:e=>`
      <path d="M80 6L136 22V58C136 84 112 102 80 114C48 102 24 84 24 58V22Z" ${g}/>
      <path d="M80 6L136 22V58C136 84 112 102 80 114Z" ${x} opacity=".35"/>
      <path d="M80 14L128 28V58C128 79 108 95 80 106C52 95 32 79 32 58V28Z" fill="none" stroke-width="3" style="stroke:var(--sb-light)" opacity=".7"/>
      ${u(80,90,5,e.led)}`},bug:{id:"bug",name:"Bug",blurb:"A friendly bug. Promise it's a feature.",colors:{main:"#65a30d",shell:"#1e293b",screen:"#0b1220"},theme:v,face:{dx:0,dy:4,k:1},anchor:{y:14,hw:54,earY:46},body:e=>`
      <path d="M58 20Q50 6 38 4M102 20Q110 6 122 4" fill="none" stroke="#365314" stroke-width="3.5" stroke-linecap="round"/>
      ${u(38,4,3.6,e.led)}${u(122,4,3.6,e.led,"sb-led-b")}
      <path d="M30 70L12 62M30 84L10 86M32 98L16 110M130 70L148 62M130 84L150 86M128 98L144 110" stroke="#365314" stroke-width="4" stroke-linecap="round" fill="none"/>
      <ellipse cx="80" cy="76" rx="44" ry="34" ${g}/>
      <path d="M80 44V110" stroke-width="3" style="stroke:var(--sb-dark)" fill="none"/>
      <circle cx="60" cy="86" r="6" ${x}/><circle cx="100" cy="86" r="6" ${x}/><circle cx="66" cy="102" r="4.5" ${x}/><circle cx="94" cy="102" r="4.5" ${x}/>
      <ellipse cx="80" cy="46" rx="48" ry="30" ${g}/>
      <ellipse cx="80" cy="62" rx="24" ry="9" ${L} opacity=".5"/>`},container:{id:"container",name:"Container",blurb:"Ships anywhere. Works on every machine.",colors:{main:"#0ea5e9",shell:"#1e293b",screen:"#0b1220"},theme:O,face:{dx:0,dy:0,k:1},anchor:{y:16,hw:58,earY:40},body:e=>`
      <rect x="20" y="16" width="120" height="86" rx="8" ${g}/>
      <g style="stroke:var(--sb-dark)" stroke-width="4" stroke-linecap="round">
        <path d="M38 22V96M54 22V96M106 22V96M122 22V96"/>
      </g>
      <rect x="28" y="20" width="104" height="38" rx="8" ${D}/>
      <rect x="62" y="70" width="36" height="24" rx="5" ${A}/>
      <rect x="70" y="76" width="20" height="5" rx="2.5" ${x}/>
      ${u(80,87,3.4,e.led)}
      <rect x="14" y="98" width="132" height="8" rx="4" fill="#334155"/>`},rocket:{id:"rocket",name:"Rocket",blurb:"Ships to prod on Fridays. Porthole doubles as the face.",colors:{main:"#ef4444",shell:"#e2e8f0",screen:"#0b1220"},theme:O,face:{dx:0,dy:0,k:1},anchor:{y:10,hw:46,earY:40},body:e=>`
      <path d="M42 70L20 92C18 95 20 98 23 98H44Z" ${x}/>
      <path d="M118 70L140 92C142 95 140 98 137 98H116Z" ${x}/>
      <path class="sb-led" d="M64 96Q80 120 96 96Z" fill="#fbbf24"/>
      <path class="sb-led" d="M72 96Q80 111 88 96Z" fill="#fef08a"/>
      <path d="M80 5C52 12 34 36 34 62V90C34 94 36 96 40 96H120C124 96 126 94 126 90V62C126 36 108 12 80 5Z" ${A}/>
      <path d="M80 5C68 9 58 16 50 25H110C102 16 92 9 80 5Z" ${g}/>
      <ellipse cx="80" cy="40" rx="37" ry="19" ${D}/>
      <rect x="34" y="72" width="92" height="8" ${g}/>
      ${u(54,87,3.2,e.led)}${u(80,87,3.2,"#fca5a5","sb-led-b")}${u(106,87,3.2,e.led,"sb-led-c")}`},octopus:{id:"octopus",name:"Octopus",blurb:"A clever cephalopod in lab goggles, with eight arms for multitasking.",colors:{main:"#8b5cf6",shell:"#1e293b",screen:"#0b1220"},theme:v,face:{dx:0,dy:6,k:1},anchor:{y:8,hw:48,earY:48},blush:!0,body:e=>`
      <g fill="none" stroke-width="12" stroke-linecap="round" style="stroke:var(--sb-main)">
        <path d="M44 80C28 92 26 106 42 110"/>
        <path d="M63 86C56 100 62 112 76 110"/>
        <path d="M97 86C104 100 98 112 84 110"/>
        <path d="M116 80C132 92 134 106 118 110"/>
      </g>
      <g ${L}>
        <circle cx="35" cy="95" r="2.4"/><circle cx="58" cy="102" r="2.4"/><circle cx="102" cy="102" r="2.4"/><circle cx="125" cy="95" r="2.4"/>
      </g>
      <ellipse cx="80" cy="48" rx="50" ry="42" ${g}/>
      <ellipse cx="66" cy="22" rx="16" ry="7" ${L} opacity=".45"/>
      <rect x="30" y="35" width="100" height="11" rx="5.5" fill="#1f2937"/>
      <rect x="45" y="39" width="70" height="3" rx="1.5" fill="#f59e0b" opacity=".55"/>
      <path d="M74 41h12" stroke="#b45309" stroke-width="4" stroke-linecap="round"/>
      <g fill="#e0f2fe" stroke="#b45309" stroke-width="3.6">
        <circle cx="62" cy="41" r="14"/><circle cx="98" cy="41" r="14"/>
      </g>
      <path d="M53 33Q57 29 62 29M89 33Q93 29 98 29" stroke="#fff" stroke-width="2.4" stroke-linecap="round" fill="none" opacity=".8"/>
      ${u(80,15,3.5,e.led)}`},penguin:{id:"penguin",name:"Penguin",blurb:"Runs Linux. Will mention it.",colors:{main:"#1e293b",shell:"#f8fafc",screen:"#0b1220"},theme:v,face:{dx:0,dy:3,k:1},anchor:{y:8,hw:46,earY:42},blush:!0,body:e=>`
      <ellipse cx="52" cy="104" rx="19" ry="7" fill="#f59e0b"/>
      <ellipse cx="108" cy="104" rx="19" ry="7" fill="#f59e0b"/>
      <path d="M36 52C20 60 16 82 26 94C34 88 40 70 42 58Z" ${x}/>
      <path d="M124 52C140 60 144 82 134 94C126 88 120 70 118 58Z" ${x}/>
      <ellipse cx="80" cy="58" rx="46" ry="50" ${g}/>
      <ellipse cx="80" cy="40" rx="40" ry="23" ${A}/>
      <ellipse cx="80" cy="86" rx="29" ry="22" ${A}/>
      ${u(80,90,4,e.led)}`},terminal:{id:"terminal",name:"Terminal",blurb:"A tiny shell with a blinking prompt.",colors:{main:"#16a34a",shell:"#1e293b",screen:"#0b1220"},theme:O,face:{dx:0,dy:8,k:1},anchor:{y:10,hw:62,earY:44},body:e=>`
      <rect x="14" y="10" width="132" height="96" rx="11" ${g}/>
      <circle cx="28" cy="19" r="3.4" fill="#fca5a5"/><circle cx="39" cy="19" r="3.4" fill="#fde68a"/><circle cx="50" cy="19" r="3.4" fill="#bbf7d0"/>
      <rect x="20" y="28" width="120" height="72" rx="7" ${D}/>
      <text x="30" y="91" font-family="ui-monospace,SFMono-Regular,Menlo,monospace" font-size="11" font-weight="700" fill="${e.led}">$ ssh buddy</text>
      <rect class="sb-led" x="108" y="81" width="8" height="12" rx="1.5" fill="${e.led}"/>`},invader:{id:"invader",name:"Invader",blurb:"Pixel-perfect arcade alien. Insert coin.",colors:{main:"#22c55e",shell:"#1e293b",screen:"#0b1220"},theme:O,face:{dx:0,dy:20,k:1},anchor:{y:14,hw:52,earY:58},body:e=>{let t=["..#.....#..","...#...#...","..#######..",".##.###.##.","###########","#.#######.#","#.#.....#.#","...##.##..."].map((n,o)=>[...n].map((b,h)=>b==="#"?`<rect x="${19+h*11}" y="${14+o*11}" width="11.5" height="11.5"/>`:"").join("")).join("");return`<g ${g}>${t}</g>
      <rect x="41" y="44" width="78" height="30" rx="7" ${D}/>
      ${u(80,40,3,e.led)}`}},drone:{id:"drone",name:"Drone",blurb:"Quadcopter with a camera for a face.",colors:{main:"#f97316",shell:"#e2e8f0",screen:"#0b1220"},theme:O,face:{dx:0,dy:14,k:1},anchor:{y:36,hw:46,earY:60},body:e=>`
      <g style="stroke:var(--sb-dark)" stroke-width="5" stroke-linecap="round" fill="none">
        <path d="M36 50L26 34M124 50L134 34M50 84L44 100M110 84L116 100"/>
      </g>
      <ellipse class="sb-led" cx="24" cy="29" rx="19" ry="4" ${L} opacity=".75"/>
      <ellipse class="sb-led sb-led-c" cx="136" cy="29" rx="19" ry="4" ${L} opacity=".75"/>
      <rect x="34" y="36" width="92" height="48" rx="22" ${A}/>
      <rect x="42" y="42" width="76" height="36" rx="16" ${D}/>
      <rect x="62" y="84" width="36" height="8" rx="4" ${g}/>
      ${u(80,88,2.6,e.led)}`},salesman:{id:"salesman",name:"Salesman",blurb:"Hawking a SALE board. Act now.",colors:{main:"#2563eb",shell:"#fcd9b6",screen:"#0b1220"},theme:v,face:{dx:0,dy:7,k:1},anchor:{y:12,hw:40,earY:47},blush:!0,body:e=>{let s=Xe(e.saleTitle,"SALE",8),t=Xe(e.saleDetail,"",10);return`
      <rect x="34" y="82" width="92" height="30" rx="15" ${g}/>
      <path d="M62 82L80 106L98 82Z" fill="#f8fafc"/>
      <path d="M76 84h8l3 17l-7 7l-7-7z" fill="#dc2626"/>
      <circle cx="41" cy="48" r="7" ${A}/><circle cx="119" cy="48" r="7" ${A}/>
      <ellipse cx="80" cy="46" rx="40" ry="35" ${A}/>
      <path d="M41 40C40 16 60 8 80 8C100 8 120 16 119 40C112 28 100 22 80 22C60 22 48 28 41 40Z" fill="#3b2417"/>
      <g transform="rotate(5 124 88)">
        <path d="M112 106L108 117M136 106L140 117" stroke="#475569" stroke-width="3" stroke-linecap="round"/>
        <rect x="96" y="62" width="56" height="46" rx="6" fill="#dc2626" stroke="#fff" stroke-width="3"/>
        <text x="124" y="${t?81:92}" text-anchor="middle" font-family="system-ui,sans-serif" font-size="${je(s,t?15:19)}" font-weight="900" fill="#fff">${s}</text>
        ${t?`<text x="124" y="99" text-anchor="middle" font-family="system-ui,sans-serif" font-size="${je(t,13)}" font-weight="900" fill="#fde047">${t}</text>`:""}
        ${u(146,68,2.6,e.led)}
      </g>
      <circle cx="96" cy="96" r="6.5" ${A}/>`}},marine:{id:"marine",name:"Marine",blurb:"Battle-scarred pixel grunt. Holds the line at 3am.",colors:{main:"#5b6b2e",shell:"#1e293b",screen:"#0b1220"},theme:{...v,down:"#ef4444"},face:{dx:0,dy:23,k:1},faceMarkup:Ct,anchor:{y:10,hw:56,earY:50},body:e=>`${Ne(At,_e)}${u(80,36,3.2,e.led)}`},brawler:{id:"brawler",name:"Brawler",blurb:"Permanently furious pixel bruiser. Page him at your own risk.",colors:{main:"#b91c1c",shell:"#1e293b",screen:"#0b1220"},theme:v,face:{dx:0,dy:23,k:1},faceMarkup:qt,anchor:{y:8,hw:50,earY:58},body:e=>`${Ne(St,Et)}${u(80,41,3,e.led)}`}},te=Object.keys(T),se=["auto","none","nightcap","partyhat","crown","glasses","shades","headphones","santahat","witchhat","pumpkin"];function Tt(e,s){let t=s.y;if(e==="nightcap")return`<path d="M58 ${t+2}Q62 ${t-36} 102 ${t-22}L104 ${t+2}Z" fill="#ef4444"/>
      <rect x="54" y="${t-3}" width="52" height="8" rx="4" fill="#f8fafc"/>
      <circle cx="103" cy="${t-22}" r="5.5" fill="#f8fafc"/>`;if(e==="santahat")return`<path d="M58 ${t+2}Q60 ${t-34} 100 ${t-20}Q112 ${t-16} 112 ${t-4}L104 ${t+2}Z" fill="#dc2626"/>
      <rect x="54" y="${t-3}" width="52" height="9" rx="4.5" fill="#f8fafc"/>
      <circle cx="112" cy="${t-5}" r="6" fill="#f8fafc"/>`;if(e==="witchhat")return`<ellipse cx="80" cy="${t+1}" rx="40" ry="7" fill="#1e1b2e"/>
      <path d="M62 ${t}Q66 ${t-14} 74 ${t-26}Q78 ${t-36} 94 ${t-40}Q86 ${t-30} 90 ${t-18}Q92 ${t-8} 98 ${t}Z" fill="#2e2548"/>
      <path d="M63 ${t-3}Q80 ${t-8} 97 ${t-3}L98 ${t-11}Q80 ${t-16} 64 ${t-11}Z" fill="#7c3aed"/>
      <rect x="74" y="${t-12}" width="12" height="10" rx="2" fill="none" stroke="#facc15" stroke-width="2.4"/>`;if(e==="pumpkin"){let n=t-11;return`<ellipse cx="62" cy="${n}" rx="14" ry="16" fill="#ea580c"/><ellipse cx="98" cy="${n}" rx="14" ry="16" fill="#ea580c"/>
      <ellipse cx="80" cy="${n}" rx="17" ry="17" fill="#f97316"/>
      <path d="M72 ${n-14}Q69 ${n} 72 ${n+14}M88 ${n-14}Q91 ${n} 88 ${n+14}" stroke="#c2410c" stroke-width="1.5" fill="none" stroke-linecap="round"/>
      <path d="M72 ${n-2}l4-7l4 7zM84 ${n-2}l4-7l4 7z" fill="#fde047"/>
      <path d="M68 ${n+5}l4 4l4-4l4 4l4-4l4 4l4-4l4 4" stroke="#fde047" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M80 ${n-17}Q80 ${n-25} 88 ${n-27}" stroke="#15803d" stroke-width="4.5" fill="none" stroke-linecap="round"/>`}if(e==="partyhat")return`<path d="M63 ${t+2}L80 ${t-34}L97 ${t+2}Z" fill="#f472b6"/>
      <path d="M70 ${t-12}L90 ${t-12}M66 ${t-3}L94 ${t-3}" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/>
      <circle cx="80" cy="${t-35}" r="4.5" fill="#fde047"/>`;if(e==="crown")return`<path d="M58 ${t+3}L57 ${t-18}L69 ${t-7}L80 ${t-22}L91 ${t-7}L103 ${t-18}L102 ${t+3}Z" fill="#facc15" stroke="#ca8a04" stroke-width="2" stroke-linejoin="round"/>
      <circle cx="80" cy="${t-8}" r="3" fill="#ef4444"/><circle cx="66" cy="${t-1}" r="2" fill="#38bdf8"/><circle cx="94" cy="${t-1}" r="2" fill="#38bdf8"/>`;if(e==="headphones"){let n=80-s.hw,o=80+s.hw;return`<path d="M${n+1} ${s.earY}C${n+1} ${t-24} ${o-1} ${t-24} ${o-1} ${s.earY}" fill="none" stroke="#1f2937" stroke-width="5" stroke-linecap="round"/>
      <rect x="${n-6}" y="${s.earY-11}" width="12" height="22" rx="6" fill="#111827"/>
      <rect x="${o-6}" y="${s.earY-11}" width="12" height="22" rx="6" fill="#111827"/>
      <rect x="${n-3}" y="${s.earY-6}" width="4" height="12" rx="2" fill="#38bdf8"/>
      <rect x="${o-1}" y="${s.earY-6}" width="4" height="12" rx="2" fill="#38bdf8"/>`}return""}function we(e){return e==="glasses"?`<g fill="rgba(186,230,253,.18)" stroke="#0f172a" stroke-width="2.6">
      <circle cx="62" cy="35" r="12"/><circle cx="98" cy="35" r="12"/><path d="M74 35h12" fill="none"/></g>`:e==="shades"?`<g fill="#0f172a"><rect x="47" y="25" width="28" height="18" rx="7"/><rect x="85" y="25" width="28" height="18" rx="7"/></g>
      <path d="M75 31h10" stroke="#0f172a" stroke-width="3.2"/>
      <path d="M52 29l7 0M90 29l7 0" stroke="#e2e8f0" stroke-width="2" stroke-linecap="round" opacity=".55"/>`:""}function zt(e,s,t){let n=e.theme,{dx:o,dy:b,k:h}=e.face,c=s.state==="down",a=s.eyesClosed,i=s.squint&&!c&&!a,m=s.state==="curious",k=`fill="${n.sclera}"${n.scleraStroke?` stroke="${n.scleraStroke}" stroke-width="1.6"`:""}`,w="";if(c)w+=`<g stroke="${n.down}" stroke-width="3" stroke-linecap="round"><path d="M56 29l12 12M68 29L56 41"/><path d="M92 29l12 12M104 29L92 41"/></g>`;else if(a)w+=`<g stroke="${n.line}" stroke-width="3" stroke-linecap="round" fill="none"><path d="M56 36q6 5 12 0"/><path d="M92 36q6 5 12 0"/></g>`;else if(i)w+=`<g stroke="${n.line}" stroke-width="3" stroke-linecap="round" fill="none"><path d="M56 38q6-9 12 0"/><path d="M92 38q6-9 12 0"/></g>`;else{let Z=m?8.5:7.5;w+=`<circle cx="62" cy="35" r="${Z}" ${k}/><circle cx="98" cy="35" r="${Z}" ${k}/>
      <g class="sb-pupils"><circle cx="62" cy="35" r="3.6" fill="${n.pupil}"/><circle cx="98" cy="35" r="3.6" fill="${n.pupil}"/>
      <circle cx="63.2" cy="33.6" r="1.1" fill="#fff"/><circle cx="99.2" cy="33.6" r="1.1" fill="#fff"/></g>`}return(i||e.blush)&&(w+=`<g fill="${n.cheek}" opacity="${i?.6:.32}"><ellipse cx="46" cy="${i?42:44}" rx="5" ry="3"/><ellipse cx="114" cy="${i?42:44}" rx="5" ry="3"/></g>`),c?w+=`<path d="M71 49q9-7 18 0" stroke="${n.down}" stroke-width="2.6" stroke-linecap="round" fill="none"/>`:s.idleAct==="yawn"?w+=`<ellipse cx="80" cy="46" rx="4.5" ry="5.5" fill="${n.mouth}"/>`:s.state==="sleeping"?w+=`<path d="M75 46h10" stroke="${n.mouth}" stroke-width="2.4" stroke-linecap="round"/>`:m?w+=`<circle cx="80" cy="46" r="2.8" fill="none" stroke="${n.mouth}" stroke-width="2.4"/>`:w+=`<path d="M71 45q9 7 18 0" stroke="${n.mouth}" stroke-width="2.6" stroke-linecap="round" fill="none"/>`,w+=we(t),`<g transform="translate(${80+o} ${40+b}) scale(${h}) translate(-80 -40)">${w}</g>`}function $e(e,s,t){let n=['<g class="sb-body">',e.body(s),(e.faceMarkup||zt)(e,s,t),Tt(t,e.anchor),"</g>"];return(s.state==="down"||s.nervous)&&n.push('<path class="sb-sweat" d="M138 20q5 8 0 12q-5-4 0-12z" fill="#7dd3fc"/>'),s.state==="down"&&n.push('<g class="sb-smoke" fill="#94a3b8"><circle class="sb-smoke-1" cx="64" cy="2" r="4"/><circle class="sb-smoke-2" cx="76" cy="-2" r="3"/><circle class="sb-smoke-3" cx="96" cy="2" r="4"/></g>'),s.state==="sleeping"&&n.push('<g class="sb-zzz" fill="#64748b" font-weight="700" font-family="sans-serif"><text x="124" y="14" font-size="11">z</text><text x="134" y="6" font-size="8">z</text></g>'),n.join("")}var He="server-buddies-styles",Ge=`
.sb-hanger{position:fixed;z-index:40;width:104px;pointer-events:none;box-sizing:border-box}
.sb-hanger *{box-sizing:border-box}
.sb-hanger[hidden]{display:none!important}
.sb-hanger.sb-in-mount{position:absolute}
@media print{.sb-hanger{display:none!important}}

.sb-sway,.sb-swing{transform-origin:50% 0}
.sb-hanger[data-pivot="bottom"] .sb-swing,.sb-hanger[data-pivot="bottom"] .sb-sway{transform-origin:50% 100%}
.sb-hanger[data-hang="rope"] .sb-sway{animation:sb-sway 5s ease-in-out infinite}
.sb-hanger[data-hang="chain"] .sb-sway{animation:sb-sway-s 4.2s ease-in-out infinite}
.sb-hanger[data-hang="spring"] .sb-sway{animation:sb-sway-s 3s ease-in-out infinite}
.sb-hanger[data-hang="thread"] .sb-sway{animation:sb-sway-l 6.5s ease-in-out infinite}
.sb-hanger[data-hang="balloon"] .sb-sway{animation:sb-float 4.5s ease-in-out infinite}

.sb-tether{display:block;margin:0 auto;pointer-events:none}
.sb-tether-rope{width:3px;border-radius:2px;background:repeating-linear-gradient(180deg,#94a3b8 0 5px,#64748b 5px 8px)}
.sb-tether-thread{width:1.5px;border-radius:1px;background:linear-gradient(180deg,#e2e8f0,#94a3b8)}
.sb-tether-svg{overflow:visible;transform-origin:50% 0}
.sb-tether-balloon{display:flex;flex-direction:column;align-items:center}
.sb-balloon{display:block;width:54px;height:auto;overflow:visible}
.sb-balloon-string{display:block;width:1.5px;background:#94a3b8}

.sb-drop{will-change:transform}
.sb-buddy{position:relative;display:block;width:100%;margin:0;padding:0;border:0;border-radius:0;background:none;font:inherit;
  color:inherit;cursor:grab;pointer-events:auto;touch-action:none;perspective:500px;isolation:isolate;
  -webkit-tap-highlight-color:transparent;-webkit-appearance:none;appearance:none}
.sb-buddy[data-drag="off"]{touch-action:auto}
.sb-buddy[data-boop="off"][data-drag="off"]{cursor:default;pointer-events:none}
.sb-buddy:focus-visible{outline:2px solid var(--sb-main,#0058c3);outline-offset:4px;border-radius:14px}
.sb-buddy.sb-grabbed{cursor:grabbing}

.sb-svg{display:block;width:100%;height:auto;overflow:visible;transform-origin:50% 100%;transition:transform .15s ease}
.sb-buddy:active .sb-svg{transform:scale(1.06,.9)}

.sb-buddy[data-state="happy"] .sb-body,.sb-buddy[data-state="curious"] .sb-body{animation:sb-bob 3.2s ease-in-out infinite}
.sb-buddy[data-state="down"] .sb-body{animation:sb-shake .5s linear infinite}
.sb-buddy[data-state="sleeping"] .sb-body{animation:sb-breathe 4s ease-in-out infinite;transform-origin:50% 100%}
.sb-pupils{transition:transform .06s linear}
.sb-led{animation:sb-blink 1.8s ease-in-out infinite}
.sb-led-b{animation-delay:.4s}.sb-led-c{animation-delay:.9s}.sb-led-d{animation-delay:1.3s}
.sb-buddy[data-state="down"] .sb-led{animation-duration:.45s}
.sb-sweat{animation:sb-sweat 1.4s ease-in infinite}
.sb-smoke circle{opacity:0;animation:sb-smoke 2s ease-out infinite}
.sb-smoke-2{animation-delay:.6s}.sb-smoke-3{animation-delay:1.2s}
.sb-zzz{animation:sb-zzz 2.4s ease-in-out infinite}

.sb-bubble{position:absolute;right:70%;top:6px;padding:3px 9px;border-radius:10px;background:#0f172a;color:#fff;
  font:700 11px/1.35 system-ui,-apple-system,"Segoe UI",sans-serif;white-space:nowrap;opacity:0;pointer-events:none;z-index:4}
.sb-hanger[data-side="right"] .sb-bubble{right:auto;left:70%}
.sb-bubble-show{animation:sb-bubble 1.4s ease-out forwards}

.sb-svg.sb-flinch .sb-body{animation:sb-flinch .5s ease-out}
.sb-svg.sb-nervous .sb-body{animation:sb-jitter .28s linear infinite}
.sb-svg.sb-pass .sb-led{filter:brightness(2.4) drop-shadow(0 0 3px #86efac)}
.sb-svg.sb-nod .sb-body{animation:sb-nod .7s ease-in-out}
.sb-buddy[data-act="dance"] .sb-body{animation:sb-dance .45s ease-in-out infinite}
.sb-buddy[data-act="dance"] .sb-led{animation-duration:.25s}
.sb-buddy[data-act="yawn"] .sb-body{animation:sb-yawn 2.4s ease-in-out}
.sb-buddy[data-combo="spin"] .sb-svg{animation:sb-spin .8s ease-in-out}
.sb-buddy[data-combo="fall"]{animation:sb-fall 3.2s both}
.sb-buddy[data-period="morning"] .sb-svg{filter:drop-shadow(0 0 12px rgba(251,191,36,.6))}

.sb-confetti{position:absolute;left:50%;top:24px;width:0;height:0;z-index:3;pointer-events:none}
.sb-confetti i{position:absolute;left:0;top:0;border-radius:1px;opacity:0;animation:sb-confetti 2.4s ease-out forwards}
.sb-alarm{position:absolute;inset:-18px;z-index:-1;border-radius:50%;
  background:radial-gradient(circle,rgba(239,68,68,.6),transparent 65%);animation:sb-alarm .5s ease-in-out infinite alternate;pointer-events:none}

@keyframes sb-sway{0%,100%{transform:rotate(-2.2deg)}50%{transform:rotate(2.2deg)}}
@keyframes sb-sway-s{0%,100%{transform:rotate(-1.3deg)}50%{transform:rotate(1.3deg)}}
@keyframes sb-sway-l{0%,100%{transform:rotate(-3.6deg)}50%{transform:rotate(3.6deg)}}
@keyframes sb-float{0%,100%{transform:translateY(0) rotate(-1.8deg)}50%{transform:translateY(5px) rotate(1.8deg)}}
@keyframes sb-bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}
@keyframes sb-shake{0%,100%{transform:translateX(0)}25%{transform:translateX(-1.5px)}75%{transform:translateX(1.5px)}}
@keyframes sb-breathe{0%,100%{transform:scaleY(1)}50%{transform:scaleY(.97)}}
@keyframes sb-blink{0%,100%{opacity:1}50%{opacity:.35}}
@keyframes sb-sweat{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(18px);opacity:0}}
@keyframes sb-smoke{0%{transform:translateY(0) scale(.6);opacity:.7}100%{transform:translateY(-18px) scale(1.5);opacity:0}}
@keyframes sb-zzz{0%,100%{transform:translateY(0);opacity:.4}50%{transform:translateY(-4px);opacity:1}}
@keyframes sb-bubble{0%{opacity:0;transform:translateY(6px)}15%,70%{opacity:1;transform:translateY(0)}100%{opacity:0;transform:translateY(-4px)}}
@keyframes sb-bubble-static{0%,80%{opacity:1}100%{opacity:0}}
@keyframes sb-flinch{0%{transform:translate(0,0) scale(1)}20%{transform:translate(-3px,2px) scale(.94,1.04)}45%{transform:translate(3px,0) scale(1.03)}100%{transform:translate(0,0) scale(1)}}
@keyframes sb-jitter{0%,100%{transform:translateX(0)}25%{transform:translateX(-.8px)}75%{transform:translateX(.8px)}}
@keyframes sb-nod{0%,100%{transform:translateY(0)}30%{transform:translateY(5px)}60%{transform:translateY(-2px)}}
@keyframes sb-dance{0%,100%{transform:translate(0,0) rotate(0)}25%{transform:translate(-3px,-4px) rotate(-4deg)}75%{transform:translate(3px,-4px) rotate(4deg)}}
@keyframes sb-yawn{0%,100%{transform:scale(1)}40%,60%{transform:scale(1.05,.96)}}
@keyframes sb-spin{from{transform:rotateY(0)}to{transform:rotateY(360deg)}}
@keyframes sb-fall{0%{transform:translateY(0) rotate(0);animation-timing-function:cubic-bezier(.5,0,.9,.6)}22%{transform:translateY(115vh) rotate(24deg)}62%{transform:translateY(115vh) rotate(24deg);animation-timing-function:cubic-bezier(.2,.7,.3,1)}100%{transform:translateY(0) rotate(0)}}
@keyframes sb-confetti{0%{transform:translate(0,0) rotate(0);opacity:1}25%{transform:translate(calc(var(--x) * .8),-56px) rotate(var(--r));opacity:1}100%{transform:translate(var(--x),170px) rotate(calc(var(--r) + 540deg));opacity:0}}
@keyframes sb-alarm{from{opacity:.35}to{opacity:1}}

@media (prefers-reduced-motion:reduce){
  .sb-sway,.sb-buddy *,.sb-buddy .sb-body,.sb-tether{animation:none!important;transition:none!important}
  .sb-buddy .sb-bubble-show{animation:sb-bubble-static 1.8s forwards!important}
}
`.trim();var Je=typeof window!="undefined"&&typeof document!="undefined",C=(e,s,t)=>Math.max(s,Math.min(t,e)),Le=["auto","none","christmas","halloween"],Bt=["witchhat","pumpkin"];function X(e="auto",s=new Date){if(e==="none")return"none";let t=()=>Bt[s.getDate()%2];if(e==="christmas")return"santahat";if(e==="halloween")return t();let n=s.getMonth();return n===11?"santahat":n===9&&s.getDate()>=20?t():"none"}var ne=["eyes","swing","drag","boop","combos","idle","sleep","hover","timeOfDay","effects"],Ae=["rope","chain","spring","thread","balloon","none"],Ce=["top-right","top-left","top-center","bottom-right","bottom-left","bottom-center"],re=["happy","curious","down"],et={rope:{len:150,k:14,damp:.9,max:60},chain:{len:150,k:18,damp:1.5,max:48},spring:{len:120,k:14,damp:.5,max:55,bounce:!0},thread:{len:210,k:8,damp:.3,max:75},balloon:{len:90,k:8,damp:.6,max:40},none:{len:0,k:40,damp:3,max:9}},Rt={boop:["Beep!","Boop!","Hi there!","Ping!","200 OK"],hello:"Here we go!",ouch:"Ouch!",celebrate:"Looking healthy!",panic:"Mayday!",paste:"Got it!",throw:"Wheee!",spin:"Wheee!",fall:"Whoa!!",recover:"Phew!",watch:"Hmm\u2026 {time}?"},ve=["#0058c3","#22c55e","#f59e0b","#ec4899","#38bdf8"],Dt=Array.from({length:22},(e,s)=>({x:s*37%120-60,delay:s%7*.07,rotate:s*53%360,size:5+s%3*2,color:ve[s%ve.length]}));function Ot(e){if(typeof e!="string")return null;let s=e.trim().replace(/^#/,"");return s.length===3&&(s=s.split("").map(t=>t+t).join("")),/^[0-9a-f]{6}$/i.test(s)?[0,2,4].map(t=>parseInt(s.slice(t,t+2),16)):null}function Ue(e,s,t){let n=Ot(e);return n?"#"+n.map((b,h)=>Math.round(b+(s[h]-b)*t)).map(b=>b.toString(16).padStart(2,"0")).join(""):e}function tt(e,s){let t={...e.colors,...s.color?{main:s.color}:{},...s.colors||{}};return{main:t.main,dark:t.dark||Ue(t.main,[0,0,0],.3),light:t.light||Ue(t.main,[255,255,255],.55),shell:t.shell,screen:t.screen,balloon:t.balloon||"#f43f5e"}}function It(e){let s={};if(Array.isArray(e))for(let t of ne)s[t]=e.includes(t);else for(let t of ne)s[t]=!(e&&e[t]===!1);return s}function Me(e={}){var c,a,i,m;let s=te.includes(e.character)?e.character:"server",t=Ce.includes(e.position)?e.position:"top-right",n=t.startsWith("bottom"),o=Ae.includes(e.hang)?e.hang:"rope";n&&(o="none");let b=C(Number(e.size)||104,40,400),h=typeof e.offset=="number"?{x:e.offset,y:0}:{x:28,y:0,...e.offset||{}};return{...e,character:s,position:t,hang:o,size:b,offset:h,length:Number.isFinite(e.length)?C(e.length,0,2e3):et[o].len,accessory:se.includes(e.accessory)?e.accessory:"auto",season:Le.includes(e.season)?e.season:"auto",zIndex:(c=e.zIndex)!=null?c:40,hideBelow:Number(e.hideBelow)||0,mood:re.includes(e.mood)?e.mood:"happy",sleepAfter:(a=e.sleepAfter)!=null?a:15e3,idleAfter:(i=e.idleAfter)!=null?i:7e3,label:(m=e.label)!=null?m:"Server buddy: click to boop, drag to swing",injectStyles:e.injectStyles!==!1,actions:It(e.actions),messages:{...Rt,...e.messages||{}}}}function ae(){if(!Je||document.getElementById(He))return;let e=document.createElement("style");e.id=He,e.textContent=Ge,document.head.appendChild(e)}function st(e){return`--sb-main:${e.main};--sb-dark:${e.dark};--sb-light:${e.light};--sb-shell:${e.shell};--sb-screen:${e.screen};--sb-balloon:${e.balloon}`}function Qt(e,s){if(e==="none"||s<=0)return"";if(e==="rope")return`<span class="sb-tether sb-tether-rope" style="height:${s}px" aria-hidden="true"></span>`;if(e==="thread")return`<span class="sb-tether sb-tether-thread" style="height:${s}px" aria-hidden="true"></span>`;if(e==="chain"){let t="";for(let n=0,o=6;o<s;n++,o+=9)t+=n%2?`<ellipse cx="8" cy="${o}" rx="1.7" ry="6" fill="#64748b"/>`:`<ellipse cx="8" cy="${o}" rx="4.6" ry="6" fill="none" stroke="#94a3b8" stroke-width="2.2"/>`;return`<svg class="sb-tether sb-tether-svg" width="16" height="${s}" viewBox="0 0 16 ${s}" aria-hidden="true">${t}</svg>`}if(e==="spring"){let t="M11 0";for(let n=0;n+12<=s;n+=12)t+=`Q22 ${n+3} 11 ${n+6}Q0 ${n+9} 11 ${n+12}`;return`<svg class="sb-tether sb-tether-svg" width="22" height="${s}" viewBox="0 0 22 ${s}" preserveAspectRatio="none" aria-hidden="true"><path d="${t}" fill="none" stroke="#94a3b8" stroke-width="2.6" stroke-linecap="round"/></svg>`}return e==="balloon"?`<span class="sb-tether sb-tether-balloon" aria-hidden="true">
      <svg class="sb-balloon" viewBox="0 0 60 76"><path d="M30 2C9 2 2 21 4 36C6 52 20 64 30 66C40 64 54 52 56 36C58 21 51 2 30 2Z" style="fill:var(--sb-balloon)"/>
      <path d="M30 66l-5 8h10z" style="fill:var(--sb-balloon)"/><ellipse cx="19" cy="22" rx="5" ry="9" fill="#fff" opacity=".35" transform="rotate(20 19 22)"/></svg>
      <span class="sb-balloon-string" style="height:${s}px"></span></span>`:""}function nt(e,s={}){let t=T[e]||T.server,n=Me({...s,character:t.id}),o=tt(t,n),b={saleTitle:n.saleTitle,saleDetail:n.saleDetail,state:s.state||"happy",eyesClosed:!1,squint:!1,idleAct:"",nervous:!1,led:"#22c55e"};b.state==="down"?b.led="#ef4444":b.state==="curious"&&(b.led="#f59e0b");let h=n.accessory==="auto"?X(n.season==="auto"?"none":n.season):n.accessory;return ae(),`<svg class="sb-svg sb-static" viewBox="0 0 160 120" role="img" aria-label="${t.name} character" style="${st(o)};overflow:visible">${$e(t,b,h)}</svg>`}function Zt(){let e=()=>{};return{el:null,update:e,say:e,setMood:e,celebrate:e,panic:e,flinch:e,pass:e,nod:e,nervous:e,boop:e,sleep:e,wake:e,show:e,hide:e,destroy:e}}function oe(e={}){if(!Je)return Zt();let s={...e},t=Ke(Me(s)),n=!1,o=h=>(...c)=>n?void 0:t[h](...c);return{get el(){return n?null:t.root},update(h={}){if(n)return;s={...s,...h};let c={mood:t.S.mood,hidden:t.isHidden()};t.destroy(),t=Ke(Me({...s,mood:"mood"in h?h.mood:c.mood})),c.hidden&&t.hide()},say:o("say"),setMood:o("setMood"),celebrate:o("celebrate"),panic:o("panic"),flinch:o("flinch"),pass:o("pass"),nod:o("nod"),nervous:o("nervous"),boop:o("boop"),sleep:o("sleep"),wake:o("wake"),show:o("show"),hide:o("hide"),destroy(){n||(n=!0,t.destroy())}}}function Ke(e){let s=T[e.character],t=e.actions,n=et[e.hang],o=tt(s,e);e.injectStyles&&ae();let b=new Set,h=(r,l)=>{let f=setTimeout(()=>{b.delete(f),r()},l);return b.add(f),f},c={mood:e.mood,sleeping:!1,idleAct:"",squint:!1,typing:!1,nod:!1,flinch:!1,pass:!1,nervous:!1,fx:"",combo:"",period:"day"},a={angle:0,velocity:0,y:0,vy:0,running:!1,last:0,lastX:null},i={active:!1,moved:!1,startX:0,startY:0,lastAngle:0,lastT:0,velocity:0},m="translate(0px, 0px)",k=0,w=!1,Z=Date.now(),Ee=0,le=0,ce=0,j=0,de=!1,P=[],he=0,Se=0,N=!1,fe=!1,Ye="",V=!0,F=e.position,S=typeof e.mount=="string"?document.querySelector(e.mount):e.mount||null,p=document.createElement("div");p.className="sb-hanger"+(S?" sb-in-mount":""),p.setAttribute("data-server-buddy",e.character),p.setAttribute("data-hang",e.hang),p.setAttribute("data-pivot",F.startsWith("bottom")||e.hang==="none"?"bottom":"top"),p.setAttribute("data-side",F.endsWith("left")?"right":"left"),p.style.cssText=st(o),p.style.width=`${e.size}px`,p.style.zIndex=String(e.zIndex);let qe=F.startsWith("top"),ot=e.offset.y+(qe&&e.hang==="none"?12:0);p.style[qe?"top":"bottom"]=`${ot}px`,F.endsWith("right")?p.style.right=`${e.offset.x}px`:F.endsWith("left")?p.style.left=`${e.offset.x}px`:(p.style.left="50%",p.style.marginLeft=`${-e.size/2}px`),p.innerHTML=`<div class="sb-sway"><div class="sb-swing">${Qt(e.hang,e.length)}<div class="sb-drop"><button type="button" class="sb-buddy"><span class="sb-bubble" aria-hidden="true"></span><span class="sb-fxlayer" aria-hidden="true"></span><svg class="sb-svg" viewBox="0 0 160 120" aria-hidden="true"></svg></button></div></div></div>`;let be=p.querySelector(".sb-swing"),Te=p.querySelector(".sb-drop"),_=p.querySelector(".sb-tether"),$=p.querySelector(".sb-buddy"),G=p.querySelector(".sb-bubble"),ue=p.querySelector(".sb-fxlayer"),z=p.querySelector(".sb-svg"),W=null;$.setAttribute("data-drag",t.drag&&n.len>0?"on":"off"),$.setAttribute("data-boop",t.boop?"on":"off"),t.boop||t.drag?$.setAttribute("aria-label",e.label):($.setAttribute("aria-hidden","true"),$.tabIndex=-1);let pe=null;S?(getComputedStyle(S).position==="static"&&(pe=S.style.position,S.style.position="relative"),S.appendChild(p)):document.body.appendChild(p);let it=()=>c.mood==="down"?"down":c.sleeping?"sleeping":c.mood==="curious"||c.typing?"curious":"happy";function ze(){if(!V)return;let r=it(),l=r==="down",f=r==="sleeping"||c.idleAct==="yawn"&&!l,H=l?"#ef4444":r==="curious"?"#f59e0b":"#22c55e",E={saleTitle:e.saleTitle,saleDetail:e.saleDetail,state:r,eyesClosed:f,squint:c.squint,idleAct:c.idleAct,nervous:c.nervous&&!l,led:H},R=e.accessory;if(R==="auto"){let We=t.timeOfDay?X(e.season):X(e.season==="auto"?"none":e.season);R=We!=="none"?We:t.timeOfDay&&c.period==="night"?"nightcap":"none"}$.dataset.state=r,$.dataset.act=c.idleAct,$.dataset.fx=c.fx,$.dataset.combo=c.combo,$.dataset.period=t.timeOfDay?c.period:"day",z.classList.toggle("sb-flinch",c.flinch),z.classList.toggle("sb-pass",c.pass),z.classList.toggle("sb-nod",c.nod),z.classList.toggle("sb-nervous",E.nervous);let Q=$e(s,E,R);Q!==Ye&&(Ye=Q,z.innerHTML=Q,W=z.querySelector(".sb-pupils"),W&&(W.style.transform=m))}function U(){if(c.fx==="celebrate"){let r=[o.main,...ve.slice(1)];ue.innerHTML='<span class="sb-confetti">'+Dt.map((l,f)=>`<i style="--x:${l.x}px;--r:${l.rotate}deg;width:${l.size}px;height:${l.size}px;background:${r[f%r.length]};animation-delay:${l.delay}s"></i>`).join("")+"</span>"}else c.fx==="panic"?ue.innerHTML='<span class="sb-alarm"></span>':ue.innerHTML=""}function y(r){let l=!1;for(let f in r)c[f]!==r[f]&&(c[f]=r[f],l=!0);l&&ze()}function M(r){!V||!r||(Se=Date.now(),G.textContent=r,G.classList.remove("sb-bubble-show"),G.offsetWidth,G.classList.add("sb-bubble-show"))}function lt(){n.bounce&&(Te.style.transform=`translateY(${a.y}px)`,_&&(_.style.transform=`scaleY(${(e.length+a.y)/Math.max(e.length,1)})`))}function Be(r){if(!V)return;if(i.moved){a.running=!1;return}let l=Math.min((r-a.last)/1e3,.04);a.last=r,a.velocity+=(-n.k*a.angle-n.damp*a.velocity)*l,a.angle=C(a.angle+a.velocity*l,-n.max,n.max),be.style.transform=`rotate(${a.angle}deg)`;let f=!0;if(n.bounce&&(a.vy+=(-70*a.y-3.2*a.vy)*l,a.y=C(a.y+a.vy*l,-30,60),lt(),f=Math.abs(a.y)<.05&&Math.abs(a.vy)<.5),Math.abs(a.angle)<.05&&Math.abs(a.velocity)<.3&&f){a.angle=a.velocity=a.y=a.vy=0,be.style.transform="",n.bounce&&(Te.style.transform="",_&&(_.style.transform="")),a.running=!1;return}requestAnimationFrame(Be)}function I(r,l=0){w||!t.swing||(a.velocity=C(a.velocity+r,-400,400),n.bounce&&(a.vy=C(a.vy+l,-300,300)),a.running||(a.running=!0,a.last=performance.now(),requestAnimationFrame(Be)))}function K(r,l){let f=z.getBoundingClientRect(),H=r-(f.left+f.width/2),E=l-(f.top+f.height*.3),R=Math.hypot(H,E)||1,Q=Math.min(R/220,1)*3.5;m=`translate(${H/R*Q}px, ${E/R*Q}px)`,W&&(W.style.transform=m)}function B(){Z=Date.now(),c.sleeping&&y({sleeping:!1})}let Y=window.matchMedia?window.matchMedia("(prefers-reduced-motion: reduce)"):null,ye=()=>{w=!!(Y&&Y.matches)};ye(),Y&&Y.addEventListener&&Y.addEventListener("change",ye);let me=(r,l)=>!!(l&&r instanceof Element&&r.matches(l)),Re=r=>{if(B(),i.active){if(!i.moved&&Math.hypot(r.clientX-i.startX,r.clientY-i.startY)>6&&(i.moved=!0,a.velocity=0,i.lastAngle=a.angle,i.lastT=performance.now(),$.classList.add("sb-grabbed")),i.moved){let l=p.getBoundingClientRect(),f=C(Math.atan2(r.clientX-(l.left+l.width/2),r.clientY-l.top)*180/Math.PI,-55,55),H=performance.now(),E=Math.max((H-i.lastT)/1e3,.001);i.velocity=i.velocity*.6+(f-i.lastAngle)/E*.4,i.lastAngle=f,i.lastT=H,a.angle=f,be.style.transform=`rotate(${f}deg)`}return}if(t.eyes){let l=e.lookAt&&r.target instanceof Element?r.target.closest(e.lookAt):null;if(l){let f=l.getBoundingClientRect();K(f.left+f.width/2,f.top+f.height/2)}else Date.now()>le&&(cancelAnimationFrame(k),k=requestAnimationFrame(()=>K(r.clientX,r.clientY)))}if(t.swing&&a.lastX!==null){let l=$.getBoundingClientRect(),f=Math.hypot(r.clientX-(l.left+l.width/2),r.clientY-(l.top+l.height/2)),H=170*(e.size/104);f<H&&I(C(r.clientX-a.lastX,-30,30)*1.4*(1-f/H))}a.lastX=r.clientX},J=()=>{if(!i.active)return;let r=i.moved;if(i.active=!1,$.classList.remove("sb-grabbed"),r){de=!0,h(()=>de=!1,50),i.moved=!1;let l=C(i.velocity,-400,400);i.velocity=0,I(l),t.boop&&Math.abs(l)>120&&M(e.messages.throw)}},De=r=>{var H;let l=r.getBoundingClientRect(),f=(H=r.selectionStart)!=null?H:(r.value||"").length;K(l.left+Math.min(l.width-24,8+f*8.6),l.top+l.height/2)},Oe=r=>{!t.eyes||!me(r.target,e.watchInput)||(B(),le=Date.now()+1800,De(r.target),y({typing:!0}),clearTimeout(ce),ce=setTimeout(()=>y({typing:!1}),350))},Ie=r=>{!t.eyes||!me(r.target,e.watchInput)||(B(),le=Date.now()+1500,De(r.target))},Qe=r=>{me(r.target,e.watchInput)&&(y({nod:!0}),M(e.messages.paste),h(()=>y({nod:!1}),700))},Ze=window.scrollY,Pe=()=>{let r=window.scrollY-Ze;if(Ze=window.scrollY,B(),!(Math.abs(r)<8)&&(I(C(r,-60,60)*.6,C(r,-60,60)*1.6),t.eyes)){let l=$.getBoundingClientRect();K(l.left+l.width/2,l.top+l.height/2+(r>0?300:-300))}},Ve=()=>B(),ct=setInterval(()=>{let r=Date.now(),l=r-Z;if(t.sleep&&l>e.sleepAfter){y({sleeping:!0,idleAct:""});return}if(t.idle&&l>e.idleAfter&&r>Ee&&c.mood!=="down"&&!w&&!i.active){let f=["yawn","watch","dance"],H=f[Math.floor(Math.random()*f.length)];if(Ee=r+5e3+Math.random()*3e3,y({idleAct:H}),H==="watch"){let E=new Date().toLocaleTimeString([],{hour:"numeric",minute:"2-digit"});M(e.messages.watch.replace("{time}",E))}h(()=>y({idleAct:""}),2400)}},1e3);window.addEventListener("pointermove",Re,{passive:!0}),window.addEventListener("pointerup",J),window.addEventListener("pointercancel",J),window.addEventListener("scroll",Pe,{passive:!0}),window.addEventListener("keydown",Ve,{passive:!0}),e.watchInput&&(document.addEventListener("input",Oe,!0),document.addEventListener("focusin",Ie,!0),document.addEventListener("paste",Qe,!0));let dt=()=>{de||!t.boop||Fe()},ht=r=>{!t.drag||n.len<=0||r.button!==0&&r.pointerType==="mouse"||(i.active=!0,i.moved=!1,i.startX=r.clientX,i.startY=r.clientY,i.velocity=0)},ft=()=>{t.hover&&(clearTimeout(j),j=setTimeout(()=>y({squint:!0}),1100))},bt=()=>{clearTimeout(j),y({squint:!1})};$.addEventListener("click",dt),$.addEventListener("pointerdown",ht),$.addEventListener("pointerenter",ft),$.addEventListener("pointerleave",bt);let q=null,ge=()=>{fe=!!(q&&q.matches),p.hidden=N||fe};e.hideBelow>0&&window.matchMedia&&(q=window.matchMedia(`(max-width:${e.hideBelow-1}px)`),q.addEventListener&&q.addEventListener("change",ge),ge());function Fe(){B(),he+=1,I(he%2?110:-110,120);let r=Date.now();P=P.filter(H=>r-H<3500),P.push(r);let l=P.length;if(t.combos&&l>=10&&!w){P=[],y({combo:"fall"}),M(e.messages.fall),h(()=>{y({combo:""}),M(e.messages.recover)},3300);return}if(t.combos&&l===5&&!w){y({combo:"spin"}),M(e.messages.spin),h(()=>y({combo:""}),900);return}let f=e.messages.boop;M(c.mood==="down"?e.messages.ouch:f[he%f.length])}function ut(){I(90),M(e.messages.celebrate),!(w||!t.effects)&&(y({fx:"celebrate"}),U(),h(()=>{y({fx:""}),U()},3200))}function pt(){I(160),M(e.messages.panic),!(w||!t.effects)&&(y({fx:"panic"}),U(),h(()=>{y({fx:""}),U()},3600))}function yt(){y({flinch:!0}),h(()=>y({flinch:!1}),500),Date.now()-Se>1500&&M(e.messages.ouch)}function mt(){y({pass:!0}),h(()=>y({pass:!1}),300)}function gt(){y({nod:!0}),h(()=>y({nod:!1}),700)}if(t.timeOfDay){let r=new Date().getHours();c.period=r>=21||r<5?"night":r<9?"morning":"day"}return ze(),{root:p,S:c,say:M,setMood(r){re.includes(r)&&y({mood:r})},celebrate:ut,panic:pt,flinch:yt,pass:mt,nod:gt,nervous(r=!0){y({nervous:!!r})},boop:Fe,sleep(){y({sleeping:!0,idleAct:""})},wake:B,show(){N=!1,p.hidden=fe},hide(){N=!0,p.hidden=!0},isHidden:()=>N,destroy(){V&&(V=!1,clearInterval(ct),clearTimeout(ce),clearTimeout(j),b.forEach(clearTimeout),b.clear(),cancelAnimationFrame(k),Y&&Y.removeEventListener&&Y.removeEventListener("change",ye),q&&q.removeEventListener&&q.removeEventListener("change",ge),window.removeEventListener("pointermove",Re),window.removeEventListener("pointerup",J),window.removeEventListener("pointercancel",J),window.removeEventListener("scroll",Pe),window.removeEventListener("keydown",Ve),document.removeEventListener("input",Oe,!0),document.removeEventListener("focusin",Ie,!0),document.removeEventListener("paste",Qe,!0),p.remove(),pe!==null&&S&&(S.style.position=pe))}}}var Pt=["character","hang","position","accessory","season","color","size","length","actions","mood","mount","watch-input","look-at","sale-title","sale-detail","hide-below","offset-x","offset-y"];function rt(e){let s=h=>e.hasAttribute(h)?e.getAttribute(h):void 0,t=h=>h===void 0||h===""?void 0:Number(h),n=s("actions"),o=t(s("offset-x")),b=t(s("offset-y"));return{character:s("character"),hang:s("hang"),position:s("position"),accessory:s("accessory"),season:s("season"),color:s("color"),size:t(s("size")),length:t(s("length")),mood:s("mood"),mount:s("mount"),watchInput:s("watch-input"),lookAt:s("look-at"),saleTitle:s("sale-title"),saleDetail:s("sale-detail"),hideBelow:t(s("hide-below")),offset:o!==void 0||b!==void 0?{...o!==void 0&&{x:o},...b!==void 0&&{y:b}}:void 0,actions:n===void 0?void 0:n.split(",").map(h=>h.trim()).filter(Boolean)}}var at=e=>Object.fromEntries(Object.entries(e).filter(([,s])=>s!==void 0));function ie(e="server-buddy"){typeof window=="undefined"||typeof customElements=="undefined"||customElements.get(e)||customElements.define(e,class extends HTMLElement{static get observedAttributes(){return Pt}connectedCallback(){this.style.display="none",this.buddy=oe(at(rt(this)))}disconnectedCallback(){this.buddy&&this.buddy.destroy(),this.buddy=null}attributeChangedCallback(){this.buddy&&this.buddy.update(at(rt(this)))}})}var Vt=te.map(e=>({id:e,name:T[e].name,blurb:T[e].blurb}));ie();return vt(Ft);})();
