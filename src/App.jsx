import React from 'react'
import { useState , useEffect } from 'react'
import './app.scss'
import Dock from './components/Dock'
import Nav from './components/Nav'
import Github from './components/windows/Github'
import Note from './components/windows/Note'
import Resume from './components/windows/Resume'
import Spotify from './components/windows/Spotify'
import Cli from './components/windows/Cli'
import Intro from './components/Intro'

function App() {

  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
  const timer = setTimeout(() => {
    setShowIntro(false);
  }, 10000);

  return () => clearTimeout(timer);
}, []);

 const wallpapers = Array.from({ length: 18 }, (_, i) => `/wallpapers/wall${i + 1}.jpg`);
const [currentWall, setCurrentWall] = useState(Math.floor(Math.random() * 18))
useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWall((prev) => (prev + 1) % wallpapers.length);
    }, 120000); 



    return () => clearInterval(interval);
  }, []);

  const [windowState, setWindowState] = useState({
    Github: false,
    Nav: false,
    Resume: false,
    Spotify: false,
    Cli: false,
    Note: false,

  })

   if (showIntro) {
    return <Intro />;
  }
  return (
    <main
    style={
      {
          backgroundImage: `url(${wallpapers[currentWall]})`,
      }
    }
    >
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