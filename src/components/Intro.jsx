import React from 'react'
import { useEffect, useState } from "react";
import "./intro.scss"

function Intro() {


    const [pos, setPos] = useState({ x: 0, y: 0 });



const greetings = [
  "Hello",        
  "नमस्ते",      
  "दर्शन",        
  "Hola", 
  "Bonjo",
  "Ciao",       
  "Hallo",     
  "Olá",          
  "Привет",     
  "你好",       
  "こんにちは",   
  "안녕하세요",  
  "مرحبا",     
  "שלום",      
  "Selamat",      
  "Sawubona",
  "Jambo",        
];


  const [text, setText] = useState("");
  const [subText, setSubText] = useState("");

  
  useEffect(() => {
    setTimeout(() => {
      setText("Welcome to my portfolio");
       setSubText("wait... my portfolio is opening ");
    },  100);
    


    setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        setText(greetings[i]);
        setSubText("");
        i++;
        if (i === greetings.length) clearInterval(interval);
      }, 300);

    }, 2000);

  }, []);

  return (
 <div
  className="intro"
  onMouseEnter={() => setActive(true)}
  onMouseLeave={() => {
    setActive(false);
    setPoints([]);
  }}
  onMouseMove={(e) => {
    setPos({
      x: e.clientX,
      y: e.clientY,
    });
  }}
>

    <div
      className="cursor"
      style={{
        left: pos.x,
        top: pos.y,
      }}
    ></div>
      <h1>{text}</h1>
      <p className="sub">{subText}</p>
    </div>
  )
}

export default Intro