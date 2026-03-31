import React, { useState } from 'react'
import Markdown from 'react-markdown'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierDuneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { useEffect } from 'react'
import MacWindow from './MacWindow'
import "./note.scss"

function Note() {

    const [markdown, setmarkdown] = useState(null)

    useEffect(() => {
    fetch("/note.txt")
    .then(res => res.text())
    .then(text => setmarkdown(text))
    }, [])
    
  return (
   <MacWindow>
    <div className="note-window">
        {markdown ? <SyntaxHighlighter language='typescript' style={atelierDuneDark}>{markdown}</SyntaxHighlighter> : <p>Loading...</p>}
    </div>
   </MacWindow>
  )
}

export default Note