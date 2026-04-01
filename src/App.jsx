import React from 'react'
import './app.scss'
import Dock from './components/Dock'
import Nav from './components/Nav'
import Github from './components/windows/Github'
import Note from './components/windows/Note'
import Resume from './components/windows/Resume'
import Spotify from './components/windows/Spotify'
import Cli from './components/windows/Cli'
import { useState } from 'react'

function App() {

  const [windowState, setWindowState] = useState({
    Github: false,
    Nav: false,
    Resume: false,
    Spotify: false,
    Cli: false,
    Note: false,

  })
  return (
    <main>
    <Nav/>
      <Dock windowState={windowState} setWindowState={setWindowState} />
     
      {windowState.Github && <  Github windowName="Github"  setWindowState={setWindowState} />}
      {windowState.Note && <Note windowName="Note"  setWindowState={setWindowState} />}
      {windowState.Resume && <Resume windowName="Resume"  setWindowState={setWindowState} />}
      {windowState.Spotify && <Spotify windowName="Spotify" setWindowState={setWindowState} />}
      {windowState.Cli && <Cli windowName="Cli"  setWindowState={setWindowState} />}
    </main>

  )
}

export default App