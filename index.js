
import { useState } from "react";
const questions = [
  {
    "id": 1,
    "cat": "Ø«Ù‚Ø§ÙØ© Ø¹Ø§Ù…Ø©",
    "q": "ÙƒÙ… Ø¹Ø¯Ø¯ Ø¬Ù‡Ø§Øª Ø§Ù„Ù…Ù…Ù„ÙƒØ© Ø§Ù„Ù…ØºØ±Ø¨ÙŠØ©ØŸ",
    "opts": [
      "10",
      "12",
      "8",
      "14"
    ],
    "ans": 1,
    "exp": "Ø§Ù„Ù…ØºØ±Ø¨ Ù…Ù‚Ø³Ù… Ø¥Ù„Ù‰ 12 Ø¬Ù‡Ø© Ù…Ù†Ø° Ø§Ù„ØªÙ‚Ø³ÙŠÙ… Ø§Ù„Ø¬Ù‡ÙˆÙŠ 2015"
  },
  {
    "id": 2,
    "cat": "Ø§Ù„Ø£Ù…Ù† Ø§Ù„ÙˆØ·Ù†ÙŠ",
    "q": "Ù…ØªÙ‰ ØªØ£Ø³Ø³Øª Ø§Ù„Ù…Ø¯ÙŠØ±ÙŠØ© Ø§Ù„Ø¹Ø§Ù…Ø© Ù„Ù„Ø£Ù…Ù† Ø§Ù„ÙˆØ·Ù†ÙŠØŸ",
    "opts": [
      "16 Ù…Ø§ÙŠ 1956",
      "16 Ù…Ø§ÙŠ 1957",
      "18 Ù…Ø§ÙŠ 1956",
      "16 ÙŠÙˆÙ†ÙŠÙˆ 1956"
    ],
    "ans": 0,
    "exp": "ØªØ£Ø³Ø³Øª Ø§Ù„Ù…Ø¯ÙŠØ±ÙŠØ© Ø§Ù„Ø¹Ø§Ù…Ø© Ù„Ù„Ø£Ù…Ù† Ø§Ù„ÙˆØ·Ù†ÙŠ ÙÙŠ 16 Ù…Ø§ÙŠ 1956"
  },
  {
    "id": 3,
    "cat": "Ø§Ù„Ù‚Ø§Ù†ÙˆÙ†",
    "q": "Ù…Ø§ Ù‡Ùˆ Ø§Ù„ÙØµÙ„ Ø§Ù„Ø°ÙŠ ÙŠÙ†Øµ Ø¹Ù„Ù‰ Ø£Ù† Ø§Ù„Ø¥Ø³Ù„Ø§Ù… Ø¯ÙŠÙ† Ø§Ù„Ø¯ÙˆÙ„Ø© ÙÙŠ Ø§Ù„Ø¯Ø³ØªÙˆØ± Ø§Ù„Ù…ØºØ±Ø¨ÙŠØŸ",
    "opts": [
      "Ø§Ù„ÙØµÙ„ 3",
      "Ø§Ù„ÙØµÙ„ 1",
      "Ø§Ù„ÙØµÙ„ 175",
      "Ø§Ù„ÙØµÙ„ 19"
    ],
    "ans": 1,
    "exp": "Ø§Ù„ÙØµÙ„ Ø§Ù„Ø£ÙˆÙ„ Ù…Ù† Ø¯Ø³ØªÙˆØ± 2011 ÙŠÙ†Øµ Ø£Ù† Ø§Ù„Ù…ØºØ±Ø¨ Ø¯ÙˆÙ„Ø© Ø¥Ø³Ù„Ø§Ù…ÙŠØ©"
  },
  {
    "id": 4,
    "cat": "Ø«Ù‚Ø§ÙØ© Ø¹Ø§Ù…Ø©",
    "q": "Ù…Ø§ Ù‡ÙŠ Ø¹Ø§ØµÙ…Ø© Ø¬Ù‡Ø© Ø·Ù†Ø¬Ø© ØªØ·ÙˆØ§Ù† Ø§Ù„Ø­Ø³ÙŠÙ…Ø©ØŸ",
    "opts": [
      "ØªØ·ÙˆØ§Ù†",
      "Ø·Ù†Ø¬Ø©",
      "Ø§Ù„Ø­Ø³ÙŠÙ…Ø©",
      "Ø§Ù„Ø¹Ø±Ø§Ø¦Ø´"
    ],
    "ans": 1,
    "exp": "Ø·Ù†Ø¬Ø© Ù‡ÙŠ Ø¹Ø§ØµÙ…Ø© Ø§Ù„Ø¬Ù‡Ø©"
  },
  {
    "id": 5,
    "cat": "Ø§Ù„Ø±ÙŠØ§Ø¶ÙŠØ§Øª",
    "q": "Ù…Ø§ Ù‡Ùˆ Ø§Ù„Ø¹Ø¯Ø¯ Ø§Ù„Ø£ÙˆÙ„ÙŠ Ù…Ù† Ø¨ÙŠÙ† Ø§Ù„ØªØ§Ù„ÙŠØŸ",
    "opts": [
      "21",
      "27",
      "29",
      "33"
    ],
    "ans": 2,
    "exp": "29 ÙŠÙ‚Ø¨Ù„ Ø§Ù„Ù‚Ø³Ù…Ø© ÙÙ‚Ø· Ø¹Ù„Ù‰ Ù†ÙØ³Ù‡ Ùˆ 1"
  },
  {
    "id": 6,
    "cat": "Ø§Ù„Ø£Ù…Ù† Ø§Ù„ÙˆØ·Ù†ÙŠ",
    "q": "ÙƒÙ… ÙŠØ¨Ù„Øº Ø³Ù† Ø§Ù„ØªØ±Ø´Ø­ Ù„Ù…Ø¨Ø§Ø±Ø§Ø© Ø­Ø±Ø§Ø³ Ø§Ù„Ø£Ù…Ù†ØŸ",
    "opts": [
      "21-30",
      "21-35",
      "19-25",
      "21-40"
    ],
    "ans": 0,
    "exp": "Ù…Ù† 21 Ø¥Ù„Ù‰ 30 Ø³Ù†Ø© Ø¨Ø§Ù„Ù†Ø³Ø¨Ø© Ù„Ø­Ø±Ø§Ø³ Ø§Ù„Ø£Ù…Ù†"
  },
  {
    "id": 7,
    "cat": "Ø«Ù‚Ø§ÙØ© Ø¹Ø§Ù…Ø©",
    "q": "ÙÙŠ Ø£ÙŠ Ø³Ù†Ø© Ø§Ø³ØªØ±Ø¬Ø¹ Ø§Ù„Ù…ØºØ±Ø¨ Ù…Ø¯ÙŠÙ†Ø© Ø·Ø±ÙØ§ÙŠØ©ØŸ",
    "opts": [
      "1958",
      "1969",
      "1975",
      "1956"
    ],
    "ans": 0,
    "exp": "Ø§Ø³ØªØ±Ø¬Ø¹ Ø§Ù„Ù…ØºØ±Ø¨ Ø·Ø±ÙØ§ÙŠØ© Ø³Ù†Ø© 1958"
  },
  {
    "id": 8,
    "cat": "Ø§Ù„Ù„ØºØ©",
    "q": "Ù…Ø§ Ù‡Ùˆ Ø¬Ù…Ø¹ ÙƒÙ„Ù…Ø© 'Ù‚Ø§Ø¶'ØŸ",
    "opts": [
      "Ù‚Ø¶Ø§Ø©",
      "Ù‚Ø§Ø¶ÙˆÙ†",
      "Ù‚Ø¶Ø§Øª",
      "Ø£Ù‚Ø¶ÙŠØ©"
    ],
    "ans": 0,
    "exp": "Ø¬Ù…Ø¹ Ù‚Ø§Ø¶ Ù‡Ùˆ Ù‚Ø¶Ø§Ø©"
  }
];

export default function Home(){
  const [cat,setCat]=useState("Ø§Ù„ÙƒÙ„");
  const [idx,setIdx]=useState(0);
  const [score,setScore]=useState(0);
  const [showAns,setShowAns]=useState(false);
  const [selected,setSelected]=useState(null);
  const [mode,setMode]=useState("home");
  const filtered = cat==="Ø§Ù„ÙƒÙ„" ? questions : questions.filter(q=>q.cat===cat);
  const q = filtered[idx];

  function answer(i){
    setSelected(i); setShowAns(true);
    if(i===q.ans) setScore(s=>s+1);
  }
  function next(){
    setShowAns(false); setSelected(null);
    if(idx+1<filtered.length) setIdx(idx+1); else setMode("result");
  }

  if(mode==="result") return (
    <div dir="rtl" style={{minHeight:"100vh",background:"#f8f9ff",display:"flex",alignItems:"center",justifyContent:"center",padding:20,fontFamily:"system-ui"}}>
      <div style={{background:"white",padding:30,borderRadius:20,textAlign:"center",maxWidth:400,width:"100%",boxShadow:"0 10px 30px rgba(0,0,0,0.1)"}}>
        <h1 style={{fontSize:32}}>ðŸŽ‰ Ø£Ø­Ø³Ù†Øª!</h1>
        <p style={{fontSize:20,margin:"20px 0"}}>Ø­ØµÙ„Øª Ø¹Ù„Ù‰ {score} Ù…Ù† {filtered.length}</p>
        <div style={{fontSize:48,fontWeight:"bold",color: score/filtered.length>=0.5 ? "#0F8A5F" : "#E85D04"}}>{Math.round(score/filtered.length*100)}%</div>
        <button onClick={()=>{setMode("home");setIdx(0);setScore(0)}} style={{marginTop:20,padding:"12px 24px",background:"#0F1B4D",color:"white",border:"none",borderRadius:10,cursor:"pointer",width:"100%"}}>Ø§Ù„Ø¹ÙˆØ¯Ø© Ù„Ù„Ø±Ø¦ÙŠØ³ÙŠØ©</button>
      </div>
    </div>
  );

  if(mode==="quiz") return (
    <div dir="rtl" style={{minHeight:"100vh",background:"#f8f9ff",padding:16,fontFamily:"system-ui"}}>
      <div style={{maxWidth:600,margin:"0 auto"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:20}}>
          <button onClick={()=>setMode("home")} style={{border:"none",background:"white",padding:"8px 12px",borderRadius:8,cursor:"pointer"}}>â† Ø±Ø¬ÙˆØ¹</button>
          <span style={{background:"#0F1B4D",color:"white",padding:"6px 12px",borderRadius:20,fontSize:14}}>{idx+1} / {filtered.length}</span>
        </div>
        <div style={{background:"white",borderRadius:16,padding:20,boxShadow:"0 4px 20px rgba(0,0,0,0.06)"}}>
          <div style={{color:"#C5A100",fontWeight:"bold",fontSize:12,marginBottom:8}}>{q.cat}</div>
          <h2 style={{fontSize:18,fontWeight:"bold",lineHeight:1.6,marginBottom:20}}>{q.q}</h2>
          <div style={{display:"flex",flexDirection:"column",gap:10}}>
            {q.opts.map((o,i)=>{
              let bg="white", border="#e5e7eb";
              if(showAns){
                if(i===q.ans){ bg="#DCFCE7"; border="#22C55E"; }
                else if(i===selected && i!==q.ans){ bg="#FEE2E2"; border="#EF4444"; }
              } else if(i===selected){ bg="#EEF2FF"; border="#0F1B4D"; }
              return <button key={i} onClick={()=>!showAns && answer(i)} style={{textAlign:"right",padding:"14px 16px",borderRadius:12,border:`2px solid ${border}`,background:bg,cursor:"pointer",fontSize:15}}>{["Ø£","Ø¨","Ø¬","Ø¯"][i]}. {o}</button>
            })}
          </div>
          {showAns && <div style={{marginTop:16,padding:12,background:"#FFFBEB",borderRadius:10,fontSize:14}}><b>ðŸ’¡ Ø§Ù„Ø´Ø±Ø­:</b> {q.exp}</div>}
          {showAns && <button onClick={next} style={{marginTop:16,width:"100%",padding:14,background:"#0F1B4D",color:"white",border:"none",borderRadius:12,fontSize:16,cursor:"pointer",fontWeight:"bold"}}>{idx+1===filtered.length?"Ø¹Ø±Ø¶ Ø§Ù„Ù†ØªÙŠØ¬Ø©":"Ø§Ù„Ø³Ø¤Ø§Ù„ Ø§Ù„ØªØ§Ù„ÙŠ â†’"}</button>}
        </div>
      </div>
    </div>
  );

  return (
    <div dir="rtl" style={{minHeight:"100vh",background:"#FFFDF5",fontFamily:"system-ui"}}>
      <div style={{background:"#0F1B4D",color:"white",padding:"24px 16px 32px",borderRadius:"0 0 24px 24px"}}>
        <div style={{maxWidth:600,margin:"0 auto"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <div><div style={{fontSize:12,opacity:0.7}}>Ù…Ø±Ø­Ø¨Ø§ Ø¨Ùƒ</div><div style={{fontSize:20,fontWeight:"bold"}}>Ù…Ø³ØªØ¹Ø¯ Ù„Ù…Ø¨Ø§Ø±Ø§Ø© Ø§Ù„Ø£Ù…Ù†ØŸ ðŸ‘®</div></div>
            <div style={{background:"rgba(255,255,255,0.15)",padding:"8px 12px",borderRadius:12}}>â­ Ù…Ø³ØªÙˆÙ‰ 3</div>
          </div>
          <div style={{marginTop:20,background:"white",color:"#0F1B4D",borderRadius:16,padding:16,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <div><div style={{fontWeight:"bold"}}>Ø§Ù…ØªØ­Ø§Ù† ØªØ¬Ø±ÙŠØ¨ÙŠ ÙƒØ§Ù…Ù„</div><div style={{fontSize:12,opacity:0.7}}>60 Ø³Ø¤Ø§Ù„ - 60 Ø¯Ù‚ÙŠÙ‚Ø©</div></div>
            <button onClick={()=>{setCat("Ø§Ù„ÙƒÙ„");setIdx(0);setScore(0);setMode("quiz")}} style={{background:"#C5A100",color:"white",border:"none",padding:"10px 16px",borderRadius:10,fontWeight:"bold",cursor:"pointer"}}>Ø§Ø¨Ø¯Ø£ Ø§Ù„Ø¢Ù†</button>
          </div>
        </div>
      </div>
      <div style={{maxWidth:600,margin:"-16px auto 0",padding:16}}>
        <h3 style={{fontWeight:"bold",marginBottom:12}}>Ø§Ø®ØªØ± Ø§Ù„Ù…Ø§Ø¯Ø©</h3>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
          {[
            {name:"Ø§Ù„ÙƒÙ„",count:questions.length,icon:"ðŸ“š",color:"#EEF2FF"},
            {name:"Ø«Ù‚Ø§ÙØ© Ø¹Ø§Ù…Ø©",count:3,icon:"ðŸŒ",color:"#FEF3C7"},
            {name:"Ø§Ù„Ø£Ù…Ù† Ø§Ù„ÙˆØ·Ù†ÙŠ",count:2,icon:"ðŸ‘®",color:"#DBEAFE"},
            {name:"Ø§Ù„Ù‚Ø§Ù†ÙˆÙ†",count:1,icon:"âš–ï¸",color:"#E0E7FF"},
            {name:"Ø§Ù„Ø±ÙŠØ§Ø¶ÙŠØ§Øª",count:1,icon:"ðŸ”¢",color:"#D1FAE5"},
            {name:"Ø§Ù„Ù„ØºØ©",count:1,icon:"âœï¸",color:"#FCE7F3"},
          ].map(c=>(
            <div key={c.name} onClick={()=>{setCat(c.name);setIdx(0);setScore(0);setMode("quiz")}} style={{background:"white",borderRadius:16,padding:16,cursor:"pointer",boxShadow:"0 2px 10px rgba(0,0,0,0.05)",border:"1px solid #f0f0f0"}}>
              <div style={{width:40,height:40,background:c.color,borderRadius:10,display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,marginBottom:10}}>{c.icon}</div>
              <div style={{fontWeight:"bold",fontSize:14}}>{c.name}</div>
              <div style={{fontSize:11,color:"#888",marginTop:4}}>{c.count} Ø³Ø¤Ø§Ù„</div>
              <div style={{marginTop:8,height:4,background:"#f0f0f0",borderRadius:2}}><div style={{width:"40%",height:"100%",background:"#0F1B4D",borderRadius:2}}></div></div>
            </div>
          ))}
        </div>
        <div style={{marginTop:20,background:"white",borderRadius:16,padding:16,display:"flex",gap:12,alignItems:"center"}}>
          <div style={{fontSize:24}}>ðŸ’¡</div>
          <div style={{fontSize:13,lineHeight:1.6}}><b>Ù†ØµÙŠØ­Ø© Ø§Ù„ÙŠÙˆÙ…:</b> Ø±ÙƒØ² Ø¹Ù„Ù‰ ØªØ§Ø±ÙŠØ® ØªØ£Ø³ÙŠØ³ Ø§Ù„Ø£Ù…Ù† Ø§Ù„ÙˆØ·Ù†ÙŠ (16 Ù…Ø§ÙŠ 1956) ÙˆØ¹Ø¯Ø¯ Ø§Ù„Ø¬Ù‡Ø§Øª (12) - ÙƒÙŠØªØ­Ø·Ùˆ Ø¨Ø²Ø§Ù ÙØ§Ù„Ø§Ù…ØªØ­Ø§Ù†!</div>
        </div>
      </div>
      <div style={{height:80}}></div>
      <div style={{position:"fixed",bottom:0,left:0,right:0,background:"white",borderTop:"1px solid #eee",display:"flex",justifyContent:"space-around",padding:"10px 0"}}>
        <div style={{textAlign:"center",color:"#0F1B4D"}}><div>ðŸ </div><div style={{fontSize:10,fontWeight:"bold"}}>Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠØ©</div></div>
        <div style={{textAlign:"center",color:"#aaa"}}><div>ðŸ“</div><div style={{fontSize:10}}>Ø§Ù„Ø§Ø®ØªØ¨Ø§Ø±Ø§Øª</div></div>
        <div style={{textAlign:"center",color:"#aaa"}}><div>ðŸ“š</div><div style={{fontSize:10}}>Ø§Ù„Ø£Ø³Ø¦Ù„Ø©</div></div>
        <div style={{textAlign:"center",color:"#aaa"}}><div>ðŸ“Š</div><div style={{fontSize:10}}>ØªÙ‚Ø¯Ù…ÙŠ</div></div>
      </div>
    </div>
  );
}
