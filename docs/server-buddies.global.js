var ServerBuddies=(()=>{var me=Object.defineProperty;var bt=Object.getOwnPropertyDescriptor;var pt=Object.getOwnPropertyNames;var ut=Object.prototype.hasOwnProperty;var yt=(e,s)=>{for(var t in s)me(e,t,{get:s[t],enumerable:!0})},mt=(e,s,t,r)=>{if(s&&typeof s=="object"||typeof s=="function")for(let o of pt(s))!ut.call(e,o)&&o!==t&&me(e,o,{get:()=>s[o],enumerable:!(r=bt(s,o))||r.enumerable});return e};var gt=e=>mt(me({},"__esModule",{value:!0}),e);var Tt={};yt(Tt,{ACCESSORIES:()=>ee,ACTIONS:()=>te,HANG_STYLES:()=>ve,MOODS:()=>se,POSITIONS:()=>Me,SEASONS:()=>ke,characters:()=>Yt,createBuddy:()=>ne,defineServerBuddyElement:()=>ae,ensureStyles:()=>re,renderPreview:()=>Ue,seasonAccessory:()=>j});var y='style="fill:var(--sb-main)"',m='style="fill:var(--sb-dark)"',k='style="fill:var(--sb-light)"',v='style="fill:var(--sb-shell)"',O='style="fill:var(--sb-screen)"',b=(e,s,t,r,o="")=>`<circle class="sb-led ${o}" cx="${e}" cy="${s}" r="${t}" fill="${r}"/>`,B={sclera:"#f8fafc",scleraStroke:"",pupil:"#0f172a",line:"#e2e8f0",mouth:"#38bdf8",down:"#f87171",cheek:"#f472b6"},L={sclera:"#ffffff",scleraStroke:"#475569",pupil:"#0f172a",line:"#334155",mouth:"#334155",down:"#dc2626",cheek:"#fb7185"},Fe=(e,s,t)=>{let r=typeof e=="string"&&e.trim()?e.trim().slice(0,t):s;return r?r.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"):""},Xe=(e,s)=>Math.min(s,Math.round(46/Math.max(e.length,1)*1.9*10)/10),T={server:{id:"server",name:"Server",blurb:"The classic rack-mount server.",colors:{main:"#0058c3",shell:"#1e293b",screen:"#0b1220"},theme:B,face:{dx:0,dy:0,k:1},anchor:{y:14,hw:60,earY:36},body:e=>`
      <line x1="80" y1="14" x2="80" y2="5" stroke="#475569" stroke-width="3" stroke-linecap="round"/>
      ${b(80,4,4,e.led)}
      <rect x="20" y="14" width="120" height="44" rx="13" ${v}/>
      <rect x="28" y="20" width="104" height="32" rx="9" ${O}/>
      <rect x="20" y="62" width="120" height="38" rx="13" ${y}/>
      <rect x="30" y="71" width="62" height="7" rx="3.5" ${m}/>
      <rect x="30" y="83" width="62" height="7" rx="3.5" ${m}/>
      ${b(108,75,3.2,e.led)}${b(120,75,3.2,"#93c5fd","sb-led-b")}
      ${b(108,87,3.2,"#93c5fd","sb-led-c")}${b(120,87,3.2,e.led,"sb-led-d")}
      <rect x="34" y="100" width="22" height="7" rx="3.5" fill="#334155"/>
      <rect x="104" y="100" width="22" height="7" rx="3.5" fill="#334155"/>`},robot:{id:"robot",name:"Robot",blurb:"Round visor, tiny arms, big opinions.",colors:{main:"#f97316",shell:"#e2e8f0",screen:"#0b1220"},theme:B,face:{dx:0,dy:1,k:1},anchor:{y:12,hw:56,earY:40},body:e=>`
      <line x1="80" y1="12" x2="80" y2="5" stroke="#64748b" stroke-width="3" stroke-linecap="round"/>
      ${b(80,4,4.5,e.led)}
      <rect x="17" y="30" width="12" height="22" rx="6" ${m}/>
      <rect x="131" y="30" width="12" height="22" rx="6" ${m}/>
      <rect x="24" y="12" width="112" height="56" rx="26" ${v}/>
      <rect x="34" y="20" width="92" height="40" rx="19" ${O}/>
      <rect x="27" y="74" width="13" height="26" rx="6.5" ${m}/>
      <rect x="120" y="74" width="13" height="26" rx="6.5" ${m}/>
      <rect x="46" y="72" width="68" height="30" rx="11" ${y}/>
      <rect x="55" y="80" width="30" height="6" rx="3" ${m}/>
      <rect x="55" y="90" width="30" height="6" rx="3" ${m}/>
      ${b(98,83,3.4,e.led)}${b(98,93,3.4,"#fed7aa","sb-led-b")}
      <rect x="50" y="102" width="24" height="7" rx="3.5" fill="#475569"/>
      <rect x="86" y="102" width="24" height="7" rx="3.5" fill="#475569"/>`},cat:{id:"cat",name:"Cat",blurb:"Collar tag doubles as the status light.",colors:{main:"#f59e0b",shell:"#fef3c7",screen:"#0b1220"},theme:{...L,sclera:"#ffffff",scleraStroke:"",line:"#44403c",mouth:"#44403c"},face:{dx:0,dy:8,k:1},anchor:{y:15,hw:56,earY:52},body:e=>`
      <path d="M112 98C142 98 148 70 134 62" fill="none" stroke-width="8" stroke-linecap="round" style="stroke:var(--sb-dark)"/>
      <ellipse cx="80" cy="92" rx="34" ry="17" ${y}/>
      <ellipse cx="62" cy="106" rx="11" ry="5" ${k}/>
      <ellipse cx="98" cy="106" rx="11" ry="5" ${k}/>
      <path d="M26 44L30 10L58 26Z" ${y}/>
      <path d="M134 44L130 10L102 26Z" ${y}/>
      <path d="M33 34L35 19L49 27Z" fill="#fbcfe8"/>
      <path d="M127 34L125 19L111 27Z" fill="#fbcfe8"/>
      <ellipse cx="80" cy="52" rx="58" ry="38" ${y}/>
      <ellipse cx="80" cy="63" rx="22" ry="14" ${k}/>
      <rect x="62" y="82" width="36" height="6" rx="3" fill="#ef4444"/>
      ${b(80,91,4.5,e.led)}
      <path d="M30 60H10M32 67L12 73M130 60H150M128 67L148 73" stroke="#64748b" stroke-width="2" stroke-linecap="round" fill="none"/>`},ghost:{id:"ghost",name:"Ghost",blurb:"Friendly, floaty, slightly judgemental.",colors:{main:"#e0e7ff",shell:"#1e293b",screen:"#0b1220"},theme:L,face:{dx:0,dy:3,k:1},anchor:{y:8,hw:50,earY:40},blush:!0,body:e=>`
      <path d="M28 100V52C28 24 50 8 80 8C110 8 132 24 132 52V100Q122 110 112 100Q102 90 92 100Q82 110 72 100Q62 90 52 100Q42 110 28 100Z" ${y}/>
      <ellipse cx="27" cy="68" rx="10" ry="6" transform="rotate(35 27 68)" ${y}/>
      <ellipse cx="133" cy="68" rx="10" ry="6" transform="rotate(-35 133 68)" ${y}/>
      <ellipse cx="80" cy="82" rx="30" ry="12" ${k} opacity=".55"/>
      ${b(80,83,5,e.led)}`},cloud:{id:"cloud",name:"Cloud",blurb:"Perfect for hosting and cloud products.",colors:{main:"#7dd3fc",shell:"#1e293b",screen:"#0b1220"},theme:L,face:{dx:0,dy:6,k:1},anchor:{y:12,hw:38,earY:44},body:e=>`
      <g ${y}>
        <circle cx="46" cy="62" r="24"/>
        <circle cx="80" cy="44" r="32"/>
        <circle cx="114" cy="60" r="26"/>
        <rect x="34" y="56" width="92" height="34" rx="17"/>
      </g>
      <ellipse cx="80" cy="84" rx="38" ry="5" ${k} opacity=".6"/>
      <path class="sb-led" d="M84 92l-11 13h8l-5 12 15-16h-8l5-9z" fill="${e.led}"/>`},database:{id:"database",name:"Database",blurb:"Stacked drives with status lights.",colors:{main:"#10b981",shell:"#1e293b",screen:"#0b1220"},theme:{...L,scleraStroke:"",line:"#064e3b",mouth:"#064e3b",down:"#7f1d1d"},face:{dx:0,dy:3,k:1},anchor:{y:13,hw:46,earY:42},body:e=>`
      <path d="M30 24V92C30 102 52 108 80 108C108 108 130 102 130 92V24Z" ${y}/>
      <path d="M30 58C30 68 52 74 80 74C108 74 130 68 130 58" fill="none" stroke-width="4" style="stroke:var(--sb-dark)"/>
      <path d="M30 84C30 94 52 100 80 100C108 100 130 94 130 84" fill="none" stroke-width="4" style="stroke:var(--sb-dark)"/>
      <ellipse cx="80" cy="24" rx="50" ry="13" ${k}/>
      <rect x="40" y="81" width="38" height="6" rx="3" ${m}/>
      ${b(102,85,3.2,e.led)}${b(114,85,3.2,"#a7f3d0","sb-led-b")}`},router:{id:"router",name:"Router",blurb:"Flat, wide and always broadcasting.",colors:{main:"#a78bfa",shell:"#1e293b",screen:"#0b1220"},theme:{...L,scleraStroke:"",line:"#3b0764",mouth:"#3b0764",down:"#be123c"},face:{dx:0,dy:22,k:1},anchor:{y:38,hw:62,earY:62},blush:!0,body:e=>`
      <line x1="34" y1="40" x2="22" y2="10" stroke="#4c1d95" stroke-width="5" stroke-linecap="round"/>
      <line x1="126" y1="40" x2="138" y2="10" stroke="#4c1d95" stroke-width="5" stroke-linecap="round"/>
      ${b(22,8,4.5,e.led)}${b(138,8,4.5,e.led,"sb-led-b")}
      <g fill="none" stroke-width="3.5" stroke-linecap="round" style="stroke:var(--sb-main)" opacity=".85">
        <path d="M66 28Q80 18 94 28"/><path d="M58 20Q80 3 102 20"/>
      </g>
      <rect x="12" y="40" width="136" height="62" rx="22" ${y}/>
      <rect x="12" y="40" width="136" height="62" rx="22" fill="none" stroke-width="3" style="stroke:var(--sb-dark)"/>
      <rect x="28" y="88" width="14" height="8" rx="3" ${m}/><rect x="48" y="88" width="14" height="8" rx="3" ${m}/>
      <rect x="68" y="88" width="14" height="8" rx="3" ${m}/><rect x="88" y="88" width="14" height="8" rx="3" ${m}/>
      ${b(116,92,3.4,e.led)}${b(128,92,3.4,"#ddd6fe","sb-led-c")}`},shield:{id:"shield",name:"Shield",blurb:"The firewall. Nothing gets past it.",colors:{main:"#e11d48",shell:"#1e293b",screen:"#0b1220"},theme:{...L,scleraStroke:"",line:"#4c0519",mouth:"#4c0519",down:"#fef08a"},face:{dx:0,dy:2,k:1},anchor:{y:10,hw:52,earY:38},body:e=>`
      <path d="M80 6L136 22V58C136 84 112 102 80 114C48 102 24 84 24 58V22Z" ${y}/>
      <path d="M80 6L136 22V58C136 84 112 102 80 114Z" ${m} opacity=".35"/>
      <path d="M80 14L128 28V58C128 79 108 95 80 106C52 95 32 79 32 58V28Z" fill="none" stroke-width="3" style="stroke:var(--sb-light)" opacity=".7"/>
      ${b(80,90,5,e.led)}`},bug:{id:"bug",name:"Bug",blurb:"A friendly bug. Promise it's a feature.",colors:{main:"#65a30d",shell:"#1e293b",screen:"#0b1220"},theme:L,face:{dx:0,dy:4,k:1},anchor:{y:14,hw:54,earY:46},body:e=>`
      <path d="M58 20Q50 6 38 4M102 20Q110 6 122 4" fill="none" stroke="#365314" stroke-width="3.5" stroke-linecap="round"/>
      ${b(38,4,3.6,e.led)}${b(122,4,3.6,e.led,"sb-led-b")}
      <path d="M30 70L12 62M30 84L10 86M32 98L16 110M130 70L148 62M130 84L150 86M128 98L144 110" stroke="#365314" stroke-width="4" stroke-linecap="round" fill="none"/>
      <ellipse cx="80" cy="76" rx="44" ry="34" ${y}/>
      <path d="M80 44V110" stroke-width="3" style="stroke:var(--sb-dark)" fill="none"/>
      <circle cx="60" cy="86" r="6" ${m}/><circle cx="100" cy="86" r="6" ${m}/><circle cx="66" cy="102" r="4.5" ${m}/><circle cx="94" cy="102" r="4.5" ${m}/>
      <ellipse cx="80" cy="46" rx="48" ry="30" ${y}/>
      <ellipse cx="80" cy="62" rx="24" ry="9" ${k} opacity=".5"/>`},container:{id:"container",name:"Container",blurb:"Ships anywhere. Works on every machine.",colors:{main:"#0ea5e9",shell:"#1e293b",screen:"#0b1220"},theme:B,face:{dx:0,dy:0,k:1},anchor:{y:16,hw:58,earY:40},body:e=>`
      <rect x="20" y="16" width="120" height="86" rx="8" ${y}/>
      <g style="stroke:var(--sb-dark)" stroke-width="4" stroke-linecap="round">
        <path d="M38 22V96M54 22V96M106 22V96M122 22V96"/>
      </g>
      <rect x="28" y="20" width="104" height="38" rx="8" ${O}/>
      <rect x="62" y="70" width="36" height="24" rx="5" ${v}/>
      <rect x="70" y="76" width="20" height="5" rx="2.5" ${m}/>
      ${b(80,87,3.4,e.led)}
      <rect x="14" y="98" width="132" height="8" rx="4" fill="#334155"/>`},rocket:{id:"rocket",name:"Rocket",blurb:"Ships to prod on Fridays. Porthole doubles as the face.",colors:{main:"#ef4444",shell:"#e2e8f0",screen:"#0b1220"},theme:B,face:{dx:0,dy:0,k:1},anchor:{y:10,hw:46,earY:40},body:e=>`
      <path d="M42 70L20 92C18 95 20 98 23 98H44Z" ${m}/>
      <path d="M118 70L140 92C142 95 140 98 137 98H116Z" ${m}/>
      <path class="sb-led" d="M64 96Q80 120 96 96Z" fill="#fbbf24"/>
      <path class="sb-led" d="M72 96Q80 111 88 96Z" fill="#fef08a"/>
      <path d="M80 5C52 12 34 36 34 62V90C34 94 36 96 40 96H120C124 96 126 94 126 90V62C126 36 108 12 80 5Z" ${v}/>
      <path d="M80 5C68 9 58 16 50 25H110C102 16 92 9 80 5Z" ${y}/>
      <ellipse cx="80" cy="40" rx="37" ry="19" ${O}/>
      <rect x="34" y="72" width="92" height="8" ${y}/>
      ${b(54,87,3.2,e.led)}${b(80,87,3.2,"#fca5a5","sb-led-b")}${b(106,87,3.2,e.led,"sb-led-c")}`},octopus:{id:"octopus",name:"Octopus",blurb:"A clever cephalopod in lab goggles, with eight arms for multitasking.",colors:{main:"#8b5cf6",shell:"#1e293b",screen:"#0b1220"},theme:L,face:{dx:0,dy:6,k:1},anchor:{y:8,hw:48,earY:48},blush:!0,body:e=>`
      <g fill="none" stroke-width="12" stroke-linecap="round" style="stroke:var(--sb-main)">
        <path d="M44 80C28 92 26 106 42 110"/>
        <path d="M63 86C56 100 62 112 76 110"/>
        <path d="M97 86C104 100 98 112 84 110"/>
        <path d="M116 80C132 92 134 106 118 110"/>
      </g>
      <g ${k}>
        <circle cx="35" cy="95" r="2.4"/><circle cx="58" cy="102" r="2.4"/><circle cx="102" cy="102" r="2.4"/><circle cx="125" cy="95" r="2.4"/>
      </g>
      <ellipse cx="80" cy="48" rx="50" ry="42" ${y}/>
      <ellipse cx="66" cy="22" rx="16" ry="7" ${k} opacity=".45"/>
      <rect x="30" y="35" width="100" height="11" rx="5.5" fill="#1f2937"/>
      <rect x="45" y="39" width="70" height="3" rx="1.5" fill="#f59e0b" opacity=".55"/>
      <path d="M74 41h12" stroke="#b45309" stroke-width="4" stroke-linecap="round"/>
      <g fill="#e0f2fe" stroke="#b45309" stroke-width="3.6">
        <circle cx="62" cy="41" r="14"/><circle cx="98" cy="41" r="14"/>
      </g>
      <path d="M53 33Q57 29 62 29M89 33Q93 29 98 29" stroke="#fff" stroke-width="2.4" stroke-linecap="round" fill="none" opacity=".8"/>
      ${b(80,15,3.5,e.led)}`},penguin:{id:"penguin",name:"Penguin",blurb:"Runs Linux. Will mention it.",colors:{main:"#1e293b",shell:"#f8fafc",screen:"#0b1220"},theme:L,face:{dx:0,dy:3,k:1},anchor:{y:8,hw:46,earY:42},blush:!0,body:e=>`
      <ellipse cx="52" cy="104" rx="19" ry="7" fill="#f59e0b"/>
      <ellipse cx="108" cy="104" rx="19" ry="7" fill="#f59e0b"/>
      <path d="M36 52C20 60 16 82 26 94C34 88 40 70 42 58Z" ${m}/>
      <path d="M124 52C140 60 144 82 134 94C126 88 120 70 118 58Z" ${m}/>
      <ellipse cx="80" cy="58" rx="46" ry="50" ${y}/>
      <ellipse cx="80" cy="40" rx="40" ry="23" ${v}/>
      <ellipse cx="80" cy="86" rx="29" ry="22" ${v}/>
      ${b(80,90,4,e.led)}`},terminal:{id:"terminal",name:"Terminal",blurb:"A tiny shell with a blinking prompt.",colors:{main:"#16a34a",shell:"#1e293b",screen:"#0b1220"},theme:B,face:{dx:0,dy:8,k:1},anchor:{y:10,hw:62,earY:44},body:e=>`
      <rect x="14" y="10" width="132" height="96" rx="11" ${y}/>
      <circle cx="28" cy="19" r="3.4" fill="#fca5a5"/><circle cx="39" cy="19" r="3.4" fill="#fde68a"/><circle cx="50" cy="19" r="3.4" fill="#bbf7d0"/>
      <rect x="20" y="28" width="120" height="72" rx="7" ${O}/>
      <text x="30" y="91" font-family="ui-monospace,SFMono-Regular,Menlo,monospace" font-size="11" font-weight="700" fill="${e.led}">$ ssh buddy</text>
      <rect class="sb-led" x="108" y="81" width="8" height="12" rx="1.5" fill="${e.led}"/>`},invader:{id:"invader",name:"Invader",blurb:"Pixel-perfect arcade alien. Insert coin.",colors:{main:"#22c55e",shell:"#1e293b",screen:"#0b1220"},theme:B,face:{dx:0,dy:20,k:1},anchor:{y:14,hw:52,earY:58},body:e=>{let t=["..#.....#..","...#...#...","..#######..",".##.###.##.","###########","#.#######.#","#.#.....#.#","...##.##..."].map((r,o)=>[...r].map((u,f)=>u==="#"?`<rect x="${19+f*11}" y="${14+o*11}" width="11.5" height="11.5"/>`:"").join("")).join("");return`<g ${y}>${t}</g>
      <rect x="41" y="44" width="78" height="30" rx="7" ${O}/>
      ${b(80,40,3,e.led)}`}},drone:{id:"drone",name:"Drone",blurb:"Quadcopter with a camera for a face.",colors:{main:"#f97316",shell:"#e2e8f0",screen:"#0b1220"},theme:B,face:{dx:0,dy:14,k:1},anchor:{y:36,hw:46,earY:60},body:e=>`
      <g style="stroke:var(--sb-dark)" stroke-width="5" stroke-linecap="round" fill="none">
        <path d="M36 50L26 34M124 50L134 34M50 84L44 100M110 84L116 100"/>
      </g>
      <ellipse class="sb-led" cx="24" cy="29" rx="19" ry="4" ${k} opacity=".75"/>
      <ellipse class="sb-led sb-led-c" cx="136" cy="29" rx="19" ry="4" ${k} opacity=".75"/>
      <rect x="34" y="36" width="92" height="48" rx="22" ${v}/>
      <rect x="42" y="42" width="76" height="36" rx="16" ${O}/>
      <rect x="62" y="84" width="36" height="8" rx="4" ${y}/>
      ${b(80,88,2.6,e.led)}`},salesman:{id:"salesman",name:"Salesman",blurb:"Hawking a SALE board. Act now.",colors:{main:"#2563eb",shell:"#fcd9b6",screen:"#0b1220"},theme:L,face:{dx:0,dy:7,k:1},anchor:{y:12,hw:40,earY:47},blush:!0,body:e=>{let s=Fe(e.saleTitle,"SALE",8),t=Fe(e.saleDetail,"",10);return`
      <rect x="34" y="82" width="92" height="30" rx="15" ${y}/>
      <path d="M62 82L80 106L98 82Z" fill="#f8fafc"/>
      <path d="M76 84h8l3 17l-7 7l-7-7z" fill="#dc2626"/>
      <circle cx="41" cy="48" r="7" ${v}/><circle cx="119" cy="48" r="7" ${v}/>
      <ellipse cx="80" cy="46" rx="40" ry="35" ${v}/>
      <path d="M41 40C40 16 60 8 80 8C100 8 120 16 119 40C112 28 100 22 80 22C60 22 48 28 41 40Z" fill="#3b2417"/>
      <g transform="rotate(5 124 88)">
        <path d="M112 106L108 117M136 106L140 117" stroke="#475569" stroke-width="3" stroke-linecap="round"/>
        <rect x="96" y="62" width="56" height="46" rx="6" fill="#dc2626" stroke="#fff" stroke-width="3"/>
        <text x="124" y="${t?81:92}" text-anchor="middle" font-family="system-ui,sans-serif" font-size="${Xe(s,t?15:19)}" font-weight="900" fill="#fff">${s}</text>
        ${t?`<text x="124" y="99" text-anchor="middle" font-family="system-ui,sans-serif" font-size="${Xe(t,13)}" font-weight="900" fill="#fde047">${t}</text>`:""}
        ${b(146,68,2.6,e.led)}
      </g>
      <circle cx="96" cy="96" r="6.5" ${v}/>`}}},J=Object.keys(T),ee=["auto","none","nightcap","partyhat","crown","glasses","shades","headphones","santahat","witchhat","pumpkin"];function xt(e,s){let t=s.y;if(e==="nightcap")return`<path d="M58 ${t+2}Q62 ${t-36} 102 ${t-22}L104 ${t+2}Z" fill="#ef4444"/>
      <rect x="54" y="${t-3}" width="52" height="8" rx="4" fill="#f8fafc"/>
      <circle cx="103" cy="${t-22}" r="5.5" fill="#f8fafc"/>`;if(e==="santahat")return`<path d="M58 ${t+2}Q60 ${t-34} 100 ${t-20}Q112 ${t-16} 112 ${t-4}L104 ${t+2}Z" fill="#dc2626"/>
      <rect x="54" y="${t-3}" width="52" height="9" rx="4.5" fill="#f8fafc"/>
      <circle cx="112" cy="${t-5}" r="6" fill="#f8fafc"/>`;if(e==="witchhat")return`<ellipse cx="80" cy="${t+1}" rx="40" ry="7" fill="#1e1b2e"/>
      <path d="M62 ${t}Q66 ${t-14} 74 ${t-26}Q78 ${t-36} 94 ${t-40}Q86 ${t-30} 90 ${t-18}Q92 ${t-8} 98 ${t}Z" fill="#2e2548"/>
      <path d="M63 ${t-3}Q80 ${t-8} 97 ${t-3}L98 ${t-11}Q80 ${t-16} 64 ${t-11}Z" fill="#7c3aed"/>
      <rect x="74" y="${t-12}" width="12" height="10" rx="2" fill="none" stroke="#facc15" stroke-width="2.4"/>`;if(e==="pumpkin"){let r=t-11;return`<ellipse cx="62" cy="${r}" rx="14" ry="16" fill="#ea580c"/><ellipse cx="98" cy="${r}" rx="14" ry="16" fill="#ea580c"/>
      <ellipse cx="80" cy="${r}" rx="17" ry="17" fill="#f97316"/>
      <path d="M72 ${r-14}Q69 ${r} 72 ${r+14}M88 ${r-14}Q91 ${r} 88 ${r+14}" stroke="#c2410c" stroke-width="1.5" fill="none" stroke-linecap="round"/>
      <path d="M72 ${r-2}l4-7l4 7zM84 ${r-2}l4-7l4 7z" fill="#fde047"/>
      <path d="M68 ${r+5}l4 4l4-4l4 4l4-4l4 4l4-4l4 4" stroke="#fde047" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M80 ${r-17}Q80 ${r-25} 88 ${r-27}" stroke="#15803d" stroke-width="4.5" fill="none" stroke-linecap="round"/>`}if(e==="partyhat")return`<path d="M63 ${t+2}L80 ${t-34}L97 ${t+2}Z" fill="#f472b6"/>
      <path d="M70 ${t-12}L90 ${t-12}M66 ${t-3}L94 ${t-3}" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/>
      <circle cx="80" cy="${t-35}" r="4.5" fill="#fde047"/>`;if(e==="crown")return`<path d="M58 ${t+3}L57 ${t-18}L69 ${t-7}L80 ${t-22}L91 ${t-7}L103 ${t-18}L102 ${t+3}Z" fill="#facc15" stroke="#ca8a04" stroke-width="2" stroke-linejoin="round"/>
      <circle cx="80" cy="${t-8}" r="3" fill="#ef4444"/><circle cx="66" cy="${t-1}" r="2" fill="#38bdf8"/><circle cx="94" cy="${t-1}" r="2" fill="#38bdf8"/>`;if(e==="headphones"){let r=80-s.hw,o=80+s.hw;return`<path d="M${r+1} ${s.earY}C${r+1} ${t-24} ${o-1} ${t-24} ${o-1} ${s.earY}" fill="none" stroke="#1f2937" stroke-width="5" stroke-linecap="round"/>
      <rect x="${r-6}" y="${s.earY-11}" width="12" height="22" rx="6" fill="#111827"/>
      <rect x="${o-6}" y="${s.earY-11}" width="12" height="22" rx="6" fill="#111827"/>
      <rect x="${r-3}" y="${s.earY-6}" width="4" height="12" rx="2" fill="#38bdf8"/>
      <rect x="${o-1}" y="${s.earY-6}" width="4" height="12" rx="2" fill="#38bdf8"/>`}return""}function wt(e){return e==="glasses"?`<g fill="rgba(186,230,253,.18)" stroke="#0f172a" stroke-width="2.6">
      <circle cx="62" cy="35" r="12"/><circle cx="98" cy="35" r="12"/><path d="M74 35h12" fill="none"/></g>`:e==="shades"?`<g fill="#0f172a"><rect x="47" y="25" width="28" height="18" rx="7"/><rect x="85" y="25" width="28" height="18" rx="7"/></g>
      <path d="M75 31h10" stroke="#0f172a" stroke-width="3.2"/>
      <path d="M52 29l7 0M90 29l7 0" stroke="#e2e8f0" stroke-width="2" stroke-linecap="round" opacity=".55"/>`:""}function $t(e,s,t){let r=e.theme,{dx:o,dy:u,k:f}=e.face,c=s.state==="down",i=s.eyesClosed,d=s.squint&&!c&&!i,C=s.state==="curious",I=`fill="${r.sclera}"${r.scleraStroke?` stroke="${r.scleraStroke}" stroke-width="1.6"`:""}`,g="";if(c)g+=`<g stroke="${r.down}" stroke-width="3" stroke-linecap="round"><path d="M56 29l12 12M68 29L56 41"/><path d="M92 29l12 12M104 29L92 41"/></g>`;else if(i)g+=`<g stroke="${r.line}" stroke-width="3" stroke-linecap="round" fill="none"><path d="M56 36q6 5 12 0"/><path d="M92 36q6 5 12 0"/></g>`;else if(d)g+=`<g stroke="${r.line}" stroke-width="3" stroke-linecap="round" fill="none"><path d="M56 38q6-9 12 0"/><path d="M92 38q6-9 12 0"/></g>`;else{let Q=C?8.5:7.5;g+=`<circle cx="62" cy="35" r="${Q}" ${I}/><circle cx="98" cy="35" r="${Q}" ${I}/>
      <g class="sb-pupils"><circle cx="62" cy="35" r="3.6" fill="${r.pupil}"/><circle cx="98" cy="35" r="3.6" fill="${r.pupil}"/>
      <circle cx="63.2" cy="33.6" r="1.1" fill="#fff"/><circle cx="99.2" cy="33.6" r="1.1" fill="#fff"/></g>`}return(d||e.blush)&&(g+=`<g fill="${r.cheek}" opacity="${d?.6:.32}"><ellipse cx="46" cy="${d?42:44}" rx="5" ry="3"/><ellipse cx="114" cy="${d?42:44}" rx="5" ry="3"/></g>`),c?g+=`<path d="M71 49q9-7 18 0" stroke="${r.down}" stroke-width="2.6" stroke-linecap="round" fill="none"/>`:s.idleAct==="yawn"?g+=`<ellipse cx="80" cy="46" rx="4.5" ry="5.5" fill="${r.mouth}"/>`:s.state==="sleeping"?g+=`<path d="M75 46h10" stroke="${r.mouth}" stroke-width="2.4" stroke-linecap="round"/>`:C?g+=`<circle cx="80" cy="46" r="2.8" fill="none" stroke="${r.mouth}" stroke-width="2.4"/>`:g+=`<path d="M71 45q9 7 18 0" stroke="${r.mouth}" stroke-width="2.6" stroke-linecap="round" fill="none"/>`,g+=wt(t),`<g transform="translate(${80+o} ${40+u}) scale(${f}) translate(-80 -40)">${g}</g>`}function ge(e,s,t){let r=['<g class="sb-body">',e.body(s),$t(e,s,t),xt(t,e.anchor),"</g>"];return(s.state==="down"||s.nervous)&&r.push('<path class="sb-sweat" d="M138 20q5 8 0 12q-5-4 0-12z" fill="#7dd3fc"/>'),s.state==="down"&&r.push('<g class="sb-smoke" fill="#94a3b8"><circle class="sb-smoke-1" cx="64" cy="2" r="4"/><circle class="sb-smoke-2" cx="76" cy="-2" r="3"/><circle class="sb-smoke-3" cx="96" cy="2" r="4"/></g>'),s.state==="sleeping"&&r.push('<g class="sb-zzz" fill="#64748b" font-weight="700" font-family="sans-serif"><text x="124" y="14" font-size="11">z</text><text x="134" y="6" font-size="8">z</text></g>'),r.join("")}var xe="server-buddies-styles",Ne=`
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
`.trim();var Ve=typeof window!="undefined"&&typeof document!="undefined",M=(e,s,t)=>Math.max(s,Math.min(t,e)),ke=["auto","none","christmas","halloween"],kt=["witchhat","pumpkin"];function j(e="auto",s=new Date){if(e==="none")return"none";let t=()=>kt[s.getDate()%2];if(e==="christmas")return"santahat";if(e==="halloween")return t();let r=s.getMonth();return r===11?"santahat":r===9&&s.getDate()>=20?t():"none"}var te=["eyes","swing","drag","boop","combos","idle","sleep","hover","timeOfDay","effects"],ve=["rope","chain","spring","thread","balloon","none"],Me=["top-right","top-left","top-center","bottom-right","bottom-left","bottom-center"],se=["happy","curious","down"],We={rope:{len:150,k:14,damp:.9,max:60},chain:{len:150,k:18,damp:1.5,max:48},spring:{len:120,k:14,damp:.5,max:55,bounce:!0},thread:{len:210,k:8,damp:.3,max:75},balloon:{len:90,k:8,damp:.6,max:40},none:{len:0,k:40,damp:3,max:9}},vt={boop:["Beep!","Boop!","Hi there!","Ping!","200 OK"],hello:"Here we go!",ouch:"Ouch!",celebrate:"Looking healthy!",panic:"Mayday!",paste:"Got it!",throw:"Wheee!",spin:"Wheee!",fall:"Whoa!!",recover:"Phew!",watch:"Hmm\u2026 {time}?"},we=["#0058c3","#22c55e","#f59e0b","#ec4899","#38bdf8"],Mt=Array.from({length:22},(e,s)=>({x:s*37%120-60,delay:s%7*.07,rotate:s*53%360,size:5+s%3*2,color:we[s%we.length]}));function Lt(e){if(typeof e!="string")return null;let s=e.trim().replace(/^#/,"");return s.length===3&&(s=s.split("").map(t=>t+t).join("")),/^[0-9a-f]{6}$/i.test(s)?[0,2,4].map(t=>parseInt(s.slice(t,t+2),16)):null}function je(e,s,t){let r=Lt(e);return r?"#"+r.map((u,f)=>Math.round(u+(s[f]-u)*t)).map(u=>u.toString(16).padStart(2,"0")).join(""):e}function _e(e,s){let t={...e.colors,...s.color?{main:s.color}:{},...s.colors||{}};return{main:t.main,dark:t.dark||je(t.main,[0,0,0],.3),light:t.light||je(t.main,[255,255,255],.55),shell:t.shell,screen:t.screen,balloon:t.balloon||"#f43f5e"}}function Ct(e){let s={};if(Array.isArray(e))for(let t of te)s[t]=e.includes(t);else for(let t of te)s[t]=!(e&&e[t]===!1);return s}function $e(e={}){var c,i,d,C;let s=J.includes(e.character)?e.character:"server",t=Me.includes(e.position)?e.position:"top-right",r=t.startsWith("bottom"),o=ve.includes(e.hang)?e.hang:"rope";r&&(o="none");let u=M(Number(e.size)||104,40,400),f=typeof e.offset=="number"?{x:e.offset,y:0}:{x:28,y:0,...e.offset||{}};return{...e,character:s,position:t,hang:o,size:u,offset:f,length:Number.isFinite(e.length)?M(e.length,0,2e3):We[o].len,accessory:ee.includes(e.accessory)?e.accessory:"auto",season:ke.includes(e.season)?e.season:"auto",zIndex:(c=e.zIndex)!=null?c:40,hideBelow:Number(e.hideBelow)||0,mood:se.includes(e.mood)?e.mood:"happy",sleepAfter:(i=e.sleepAfter)!=null?i:15e3,idleAfter:(d=e.idleAfter)!=null?d:7e3,label:(C=e.label)!=null?C:"Server buddy: click to boop, drag to swing",injectStyles:e.injectStyles!==!1,actions:Ct(e.actions),messages:{...vt,...e.messages||{}}}}function re(){if(!Ve||document.getElementById(xe))return;let e=document.createElement("style");e.id=xe,e.textContent=Ne,document.head.appendChild(e)}function Ge(e){return`--sb-main:${e.main};--sb-dark:${e.dark};--sb-light:${e.light};--sb-shell:${e.shell};--sb-screen:${e.screen};--sb-balloon:${e.balloon}`}function At(e,s){if(e==="none"||s<=0)return"";if(e==="rope")return`<span class="sb-tether sb-tether-rope" style="height:${s}px" aria-hidden="true"></span>`;if(e==="thread")return`<span class="sb-tether sb-tether-thread" style="height:${s}px" aria-hidden="true"></span>`;if(e==="chain"){let t="";for(let r=0,o=6;o<s;r++,o+=9)t+=r%2?`<ellipse cx="8" cy="${o}" rx="1.7" ry="6" fill="#64748b"/>`:`<ellipse cx="8" cy="${o}" rx="4.6" ry="6" fill="none" stroke="#94a3b8" stroke-width="2.2"/>`;return`<svg class="sb-tether sb-tether-svg" width="16" height="${s}" viewBox="0 0 16 ${s}" aria-hidden="true">${t}</svg>`}if(e==="spring"){let t="M11 0";for(let r=0;r+12<=s;r+=12)t+=`Q22 ${r+3} 11 ${r+6}Q0 ${r+9} 11 ${r+12}`;return`<svg class="sb-tether sb-tether-svg" width="22" height="${s}" viewBox="0 0 22 ${s}" preserveAspectRatio="none" aria-hidden="true"><path d="${t}" fill="none" stroke="#94a3b8" stroke-width="2.6" stroke-linecap="round"/></svg>`}return e==="balloon"?`<span class="sb-tether sb-tether-balloon" aria-hidden="true">
      <svg class="sb-balloon" viewBox="0 0 60 76"><path d="M30 2C9 2 2 21 4 36C6 52 20 64 30 66C40 64 54 52 56 36C58 21 51 2 30 2Z" style="fill:var(--sb-balloon)"/>
      <path d="M30 66l-5 8h10z" style="fill:var(--sb-balloon)"/><ellipse cx="19" cy="22" rx="5" ry="9" fill="#fff" opacity=".35" transform="rotate(20 19 22)"/></svg>
      <span class="sb-balloon-string" style="height:${s}px"></span></span>`:""}function Ue(e,s={}){let t=T[e]||T.server,r=$e({...s,character:t.id}),o=_e(t,r),u={saleTitle:r.saleTitle,saleDetail:r.saleDetail,state:s.state||"happy",eyesClosed:!1,squint:!1,idleAct:"",nervous:!1,led:"#22c55e"};u.state==="down"?u.led="#ef4444":u.state==="curious"&&(u.led="#f59e0b");let f=r.accessory==="auto"?j(r.season==="auto"?"none":r.season):r.accessory;return re(),`<svg class="sb-svg sb-static" viewBox="0 0 160 120" role="img" aria-label="${t.name} character" style="${Ge(o)};overflow:visible">${ge(t,u,f)}</svg>`}function Et(){let e=()=>{};return{el:null,update:e,say:e,setMood:e,celebrate:e,panic:e,flinch:e,pass:e,nod:e,nervous:e,boop:e,sleep:e,wake:e,show:e,hide:e,destroy:e}}function ne(e={}){if(!Ve)return Et();let s={...e},t=Pe($e(s)),r=!1,o=f=>(...c)=>r?void 0:t[f](...c);return{get el(){return r?null:t.root},update(f={}){if(r)return;s={...s,...f};let c={mood:t.S.mood,hidden:t.isHidden()};t.destroy(),t=Pe($e({...s,mood:"mood"in f?f.mood:c.mood})),c.hidden&&t.hide()},say:o("say"),setMood:o("setMood"),celebrate:o("celebrate"),panic:o("panic"),flinch:o("flinch"),pass:o("pass"),nod:o("nod"),nervous:o("nervous"),boop:o("boop"),sleep:o("sleep"),wake:o("wake"),show:o("show"),hide:o("hide"),destroy(){r||(r=!0,t.destroy())}}}function Pe(e){let s=T[e.character],t=e.actions,r=We[e.hang],o=_e(s,e);e.injectStyles&&re();let u=new Set,f=(n,a)=>{let l=setTimeout(()=>{u.delete(l),n()},a);return u.add(l),l},c={mood:e.mood,sleeping:!1,idleAct:"",squint:!1,typing:!1,nod:!1,flinch:!1,pass:!1,nervous:!1,fx:"",combo:"",period:"day"},i={angle:0,velocity:0,y:0,vy:0,running:!1,last:0,lastX:null},d={active:!1,moved:!1,startX:0,startY:0,lastAngle:0,lastT:0,velocity:0},C="translate(0px, 0px)",I=0,g=!1,Q=Date.now(),Le=0,oe=0,ie=0,P=0,le=!1,Z=[],ce=0,Ce=0,V=!1,de=!1,Ae="",F=!0,X=e.position,E=typeof e.mount=="string"?document.querySelector(e.mount):e.mount||null,h=document.createElement("div");h.className="sb-hanger"+(E?" sb-in-mount":""),h.setAttribute("data-server-buddy",e.character),h.setAttribute("data-hang",e.hang),h.setAttribute("data-pivot",X.startsWith("bottom")||e.hang==="none"?"bottom":"top"),h.setAttribute("data-side",X.endsWith("left")?"right":"left"),h.style.cssText=Ge(o),h.style.width=`${e.size}px`,h.style.zIndex=String(e.zIndex);let Ee=X.startsWith("top"),et=e.offset.y+(Ee&&e.hang==="none"?12:0);h.style[Ee?"top":"bottom"]=`${et}px`,X.endsWith("right")?h.style.right=`${e.offset.x}px`:X.endsWith("left")?h.style.left=`${e.offset.x}px`:(h.style.left="50%",h.style.marginLeft=`${-e.size/2}px`),h.innerHTML=`<div class="sb-sway"><div class="sb-swing">${At(e.hang,e.length)}<div class="sb-drop"><button type="button" class="sb-buddy"><span class="sb-bubble" aria-hidden="true"></span><span class="sb-fxlayer" aria-hidden="true"></span><svg class="sb-svg" viewBox="0 0 160 120" aria-hidden="true"></svg></button></div></div></div>`;let fe=h.querySelector(".sb-swing"),Se=h.querySelector(".sb-drop"),W=h.querySelector(".sb-tether"),x=h.querySelector(".sb-buddy"),_=h.querySelector(".sb-bubble"),he=h.querySelector(".sb-fxlayer"),z=h.querySelector(".sb-svg"),N=null;x.setAttribute("data-drag",t.drag&&r.len>0?"on":"off"),x.setAttribute("data-boop",t.boop?"on":"off"),t.boop||t.drag?x.setAttribute("aria-label",e.label):(x.setAttribute("aria-hidden","true"),x.tabIndex=-1);let be=null;E?(getComputedStyle(E).position==="static"&&(be=E.style.position,E.style.position="relative"),E.appendChild(h)):document.body.appendChild(h);let tt=()=>c.mood==="down"?"down":c.sleeping?"sleeping":c.mood==="curious"||c.typing?"curious":"happy";function Ye(){if(!F)return;let n=tt(),a=n==="down",l=n==="sleeping"||c.idleAct==="yawn"&&!a,w=a?"#ef4444":n==="curious"?"#f59e0b":"#22c55e",A={saleTitle:e.saleTitle,saleDetail:e.saleDetail,state:n,eyesClosed:l,squint:c.squint,idleAct:c.idleAct,nervous:c.nervous&&!a,led:w},H=e.accessory;if(H==="auto"){let Ze=t.timeOfDay?j(e.season):j(e.season==="auto"?"none":e.season);H=Ze!=="none"?Ze:t.timeOfDay&&c.period==="night"?"nightcap":"none"}x.dataset.state=n,x.dataset.act=c.idleAct,x.dataset.fx=c.fx,x.dataset.combo=c.combo,x.dataset.period=t.timeOfDay?c.period:"day",z.classList.toggle("sb-flinch",c.flinch),z.classList.toggle("sb-pass",c.pass),z.classList.toggle("sb-nod",c.nod),z.classList.toggle("sb-nervous",A.nervous);let R=ge(s,A,H);R!==Ae&&(Ae=R,z.innerHTML=R,N=z.querySelector(".sb-pupils"),N&&(N.style.transform=C))}function G(){if(c.fx==="celebrate"){let n=[o.main,...we.slice(1)];he.innerHTML='<span class="sb-confetti">'+Mt.map((a,l)=>`<i style="--x:${a.x}px;--r:${a.rotate}deg;width:${a.size}px;height:${a.size}px;background:${n[l%n.length]};animation-delay:${a.delay}s"></i>`).join("")+"</span>"}else c.fx==="panic"?he.innerHTML='<span class="sb-alarm"></span>':he.innerHTML=""}function p(n){let a=!1;for(let l in n)c[l]!==n[l]&&(c[l]=n[l],a=!0);a&&Ye()}function $(n){!F||!n||(Ce=Date.now(),_.textContent=n,_.classList.remove("sb-bubble-show"),_.offsetWidth,_.classList.add("sb-bubble-show"))}function st(){r.bounce&&(Se.style.transform=`translateY(${i.y}px)`,W&&(W.style.transform=`scaleY(${(e.length+i.y)/Math.max(e.length,1)})`))}function Te(n){if(!F)return;if(d.moved){i.running=!1;return}let a=Math.min((n-i.last)/1e3,.04);i.last=n,i.velocity+=(-r.k*i.angle-r.damp*i.velocity)*a,i.angle=M(i.angle+i.velocity*a,-r.max,r.max),fe.style.transform=`rotate(${i.angle}deg)`;let l=!0;if(r.bounce&&(i.vy+=(-70*i.y-3.2*i.vy)*a,i.y=M(i.y+i.vy*a,-30,60),st(),l=Math.abs(i.y)<.05&&Math.abs(i.vy)<.5),Math.abs(i.angle)<.05&&Math.abs(i.velocity)<.3&&l){i.angle=i.velocity=i.y=i.vy=0,fe.style.transform="",r.bounce&&(Se.style.transform="",W&&(W.style.transform="")),i.running=!1;return}requestAnimationFrame(Te)}function q(n,a=0){g||!t.swing||(i.velocity=M(i.velocity+n,-400,400),r.bounce&&(i.vy=M(i.vy+a,-300,300)),i.running||(i.running=!0,i.last=performance.now(),requestAnimationFrame(Te)))}function U(n,a){let l=z.getBoundingClientRect(),w=n-(l.left+l.width/2),A=a-(l.top+l.height*.3),H=Math.hypot(w,A)||1,R=Math.min(H/220,1)*3.5;C=`translate(${w/H*R}px, ${A/H*R}px)`,N&&(N.style.transform=C)}function D(){Q=Date.now(),c.sleeping&&p({sleeping:!1})}let S=window.matchMedia?window.matchMedia("(prefers-reduced-motion: reduce)"):null,pe=()=>{g=!!(S&&S.matches)};pe(),S&&S.addEventListener&&S.addEventListener("change",pe);let ue=(n,a)=>!!(a&&n instanceof Element&&n.matches(a)),ze=n=>{if(D(),d.active){if(!d.moved&&Math.hypot(n.clientX-d.startX,n.clientY-d.startY)>6&&(d.moved=!0,i.velocity=0,d.lastAngle=i.angle,d.lastT=performance.now(),x.classList.add("sb-grabbed")),d.moved){let a=h.getBoundingClientRect(),l=M(Math.atan2(n.clientX-(a.left+a.width/2),n.clientY-a.top)*180/Math.PI,-55,55),w=performance.now(),A=Math.max((w-d.lastT)/1e3,.001);d.velocity=d.velocity*.6+(l-d.lastAngle)/A*.4,d.lastAngle=l,d.lastT=w,i.angle=l,fe.style.transform=`rotate(${l}deg)`}return}if(t.eyes){let a=e.lookAt&&n.target instanceof Element?n.target.closest(e.lookAt):null;if(a){let l=a.getBoundingClientRect();U(l.left+l.width/2,l.top+l.height/2)}else Date.now()>oe&&(cancelAnimationFrame(I),I=requestAnimationFrame(()=>U(n.clientX,n.clientY)))}if(t.swing&&i.lastX!==null){let a=x.getBoundingClientRect(),l=Math.hypot(n.clientX-(a.left+a.width/2),n.clientY-(a.top+a.height/2)),w=170*(e.size/104);l<w&&q(M(n.clientX-i.lastX,-30,30)*1.4*(1-l/w))}i.lastX=n.clientX},K=()=>{if(!d.active)return;let n=d.moved;if(d.active=!1,x.classList.remove("sb-grabbed"),n){le=!0,f(()=>le=!1,50),d.moved=!1;let a=M(d.velocity,-400,400);d.velocity=0,q(a),t.boop&&Math.abs(a)>120&&$(e.messages.throw)}},De=n=>{var w;let a=n.getBoundingClientRect(),l=(w=n.selectionStart)!=null?w:(n.value||"").length;U(a.left+Math.min(a.width-24,8+l*8.6),a.top+a.height/2)},He=n=>{!t.eyes||!ue(n.target,e.watchInput)||(D(),oe=Date.now()+1800,De(n.target),p({typing:!0}),clearTimeout(ie),ie=setTimeout(()=>p({typing:!1}),350))},Oe=n=>{!t.eyes||!ue(n.target,e.watchInput)||(D(),oe=Date.now()+1500,De(n.target))},Be=n=>{ue(n.target,e.watchInput)&&(p({nod:!0}),$(e.messages.paste),f(()=>p({nod:!1}),700))},Ie=window.scrollY,qe=()=>{let n=window.scrollY-Ie;if(Ie=window.scrollY,D(),!(Math.abs(n)<8)&&(q(M(n,-60,60)*.6,M(n,-60,60)*1.6),t.eyes)){let a=x.getBoundingClientRect();U(a.left+a.width/2,a.top+a.height/2+(n>0?300:-300))}},Re=()=>D(),rt=setInterval(()=>{let n=Date.now(),a=n-Q;if(t.sleep&&a>e.sleepAfter){p({sleeping:!0,idleAct:""});return}if(t.idle&&a>e.idleAfter&&n>Le&&c.mood!=="down"&&!g&&!d.active){let l=["yawn","watch","dance"],w=l[Math.floor(Math.random()*l.length)];if(Le=n+5e3+Math.random()*3e3,p({idleAct:w}),w==="watch"){let A=new Date().toLocaleTimeString([],{hour:"numeric",minute:"2-digit"});$(e.messages.watch.replace("{time}",A))}f(()=>p({idleAct:""}),2400)}},1e3);window.addEventListener("pointermove",ze,{passive:!0}),window.addEventListener("pointerup",K),window.addEventListener("pointercancel",K),window.addEventListener("scroll",qe,{passive:!0}),window.addEventListener("keydown",Re,{passive:!0}),e.watchInput&&(document.addEventListener("input",He,!0),document.addEventListener("focusin",Oe,!0),document.addEventListener("paste",Be,!0));let nt=()=>{le||!t.boop||Qe()},at=n=>{!t.drag||r.len<=0||n.button!==0&&n.pointerType==="mouse"||(d.active=!0,d.moved=!1,d.startX=n.clientX,d.startY=n.clientY,d.velocity=0)},ot=()=>{t.hover&&(clearTimeout(P),P=setTimeout(()=>p({squint:!0}),1100))},it=()=>{clearTimeout(P),p({squint:!1})};x.addEventListener("click",nt),x.addEventListener("pointerdown",at),x.addEventListener("pointerenter",ot),x.addEventListener("pointerleave",it);let Y=null,ye=()=>{de=!!(Y&&Y.matches),h.hidden=V||de};e.hideBelow>0&&window.matchMedia&&(Y=window.matchMedia(`(max-width:${e.hideBelow-1}px)`),Y.addEventListener&&Y.addEventListener("change",ye),ye());function Qe(){D(),ce+=1,q(ce%2?110:-110,120);let n=Date.now();Z=Z.filter(w=>n-w<3500),Z.push(n);let a=Z.length;if(t.combos&&a>=10&&!g){Z=[],p({combo:"fall"}),$(e.messages.fall),f(()=>{p({combo:""}),$(e.messages.recover)},3300);return}if(t.combos&&a===5&&!g){p({combo:"spin"}),$(e.messages.spin),f(()=>p({combo:""}),900);return}let l=e.messages.boop;$(c.mood==="down"?e.messages.ouch:l[ce%l.length])}function lt(){q(90),$(e.messages.celebrate),!(g||!t.effects)&&(p({fx:"celebrate"}),G(),f(()=>{p({fx:""}),G()},3200))}function ct(){q(160),$(e.messages.panic),!(g||!t.effects)&&(p({fx:"panic"}),G(),f(()=>{p({fx:""}),G()},3600))}function dt(){p({flinch:!0}),f(()=>p({flinch:!1}),500),Date.now()-Ce>1500&&$(e.messages.ouch)}function ft(){p({pass:!0}),f(()=>p({pass:!1}),300)}function ht(){p({nod:!0}),f(()=>p({nod:!1}),700)}if(t.timeOfDay){let n=new Date().getHours();c.period=n>=21||n<5?"night":n<9?"morning":"day"}return Ye(),{root:h,S:c,say:$,setMood(n){se.includes(n)&&p({mood:n})},celebrate:lt,panic:ct,flinch:dt,pass:ft,nod:ht,nervous(n=!0){p({nervous:!!n})},boop:Qe,sleep(){p({sleeping:!0,idleAct:""})},wake:D,show(){V=!1,h.hidden=de},hide(){V=!0,h.hidden=!0},isHidden:()=>V,destroy(){F&&(F=!1,clearInterval(rt),clearTimeout(ie),clearTimeout(P),u.forEach(clearTimeout),u.clear(),cancelAnimationFrame(I),S&&S.removeEventListener&&S.removeEventListener("change",pe),Y&&Y.removeEventListener&&Y.removeEventListener("change",ye),window.removeEventListener("pointermove",ze),window.removeEventListener("pointerup",K),window.removeEventListener("pointercancel",K),window.removeEventListener("scroll",qe),window.removeEventListener("keydown",Re),document.removeEventListener("input",He,!0),document.removeEventListener("focusin",Oe,!0),document.removeEventListener("paste",Be,!0),h.remove(),be!==null&&E&&(E.style.position=be))}}}var St=["character","hang","position","accessory","season","color","size","length","actions","mood","mount","watch-input","look-at","sale-title","sale-detail","hide-below","offset-x","offset-y"];function Ke(e){let s=f=>e.hasAttribute(f)?e.getAttribute(f):void 0,t=f=>f===void 0||f===""?void 0:Number(f),r=s("actions"),o=t(s("offset-x")),u=t(s("offset-y"));return{character:s("character"),hang:s("hang"),position:s("position"),accessory:s("accessory"),season:s("season"),color:s("color"),size:t(s("size")),length:t(s("length")),mood:s("mood"),mount:s("mount"),watchInput:s("watch-input"),lookAt:s("look-at"),saleTitle:s("sale-title"),saleDetail:s("sale-detail"),hideBelow:t(s("hide-below")),offset:o!==void 0||u!==void 0?{...o!==void 0&&{x:o},...u!==void 0&&{y:u}}:void 0,actions:r===void 0?void 0:r.split(",").map(f=>f.trim()).filter(Boolean)}}var Je=e=>Object.fromEntries(Object.entries(e).filter(([,s])=>s!==void 0));function ae(e="server-buddy"){typeof window=="undefined"||typeof customElements=="undefined"||customElements.get(e)||customElements.define(e,class extends HTMLElement{static get observedAttributes(){return St}connectedCallback(){this.style.display="none",this.buddy=ne(Je(Ke(this)))}disconnectedCallback(){this.buddy&&this.buddy.destroy(),this.buddy=null}attributeChangedCallback(){this.buddy&&this.buddy.update(Je(Ke(this)))}})}var Yt=J.map(e=>({id:e,name:T[e].name,blurb:T[e].blurb}));ae();return gt(Tt);})();
