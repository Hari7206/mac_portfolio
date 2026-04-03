import React, { useState } from 'react'
import './dock.scss'
import Spotify from './windows/Spotify'


function Dock({ setWindowState }) {

  const [hoverState, sethoverState] = useState(false)

  return (
    <div className="foot"
      onMouseEnter={() => sethoverState(true)}
      onMouseLeave={() => sethoverState(false)}>
      <footer className='dock'
        style={{
          transform: hoverState
            ? "translate(-50%, 0)"
            : "translate(-50%, 150%)"
        }}
      >
        <div
          onClick={() => {
            setWindowState(state => ({ ...state, Cli: !state.Cli }))
          }}
          className="icon cli">
          <img src="/doc-icons/cli.svg" alt="" />
        </div>

        <div className="icon mail"
          onClick={() => {
            window.open("mailto:harithapa4654@gmail.com", "_blank")
          }}
        >
          <img src="/doc-icons/mail.svg" alt="" />
        </div>
        <div className="icon calender"
          onClick={() => {
            window.open("https://calendar.google.com/", "_blank")
          }}
        >
          <img src="/doc-icons/calender.svg" alt="" />
        </div>
        <div className="icon link"
          onClick={() => {
            window.open("https://www.linkedin.com/in/hari-thapa-67827835b/", "_blank")
          }}
        >
          <img src="/doc-icons/link.svg" alt="" />
        </div>
        <div className="icon note"
          onClick={() => {
            setWindowState(state => ({ ...state, Note: !state.Note }))
          }}
        >
          <img src="/doc-icons/note.svg" alt="" />
        </div>
        <div className="icon pdf"
          onClick={() => {
            setWindowState(state => ({ ...state, Resume: !state.Resume }))
          }}
        >
          <img src="/doc-icons/pdf.svg" alt="" />
        </div>
        <div className="icon spotify"
          onClick={() => {
            setWindowState(state => ({ ...state, Spotify: !state.Spotify }))
          }}
        >
          <img src="/doc-icons/spotify.svg" alt="" />
        </div>
        <div className="icon github"
          onClick={() => {
            setWindowState(state => ({ ...state, Github: !state.Github }))
          }}
        >
          <img src="/doc-icons/github.svg" alt="" />
        </div>

      </footer>
    </div>
  )
}

export default Dock