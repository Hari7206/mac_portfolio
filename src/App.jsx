import React from 'react'
import './app.scss'
import Dock from './components/Dock'
import Nav from './components/Nav'
import MacWindow from './components/windows/MacWindow'
function App() {
  return (
  <main>
    <Dock/>
    <Nav/>
    <MacWindow/>
  </main>
  )
}

export default App