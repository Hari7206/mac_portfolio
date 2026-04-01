import { useEffect, useRef } from 'react'
import { Terminal } from 'xterm'
import { FitAddon } from 'xterm-addon-fit'
import 'xterm/css/xterm.css'
import MacWindow from './MacWindow'

function Cli() {
  const termRef = useRef(null)

  useEffect(() => {
    const term = new Terminal({ theme: { background: '#1e1e1e' } })
    const fitAddon = new FitAddon()
    term.loadAddon(fitAddon)
    term.open(termRef.current)
    fitAddon.fit()
    term.writeln("Welcome to the Thapa's terminal!")
    term.write('Hari@:~$ ')

    let input = ''
    term.onKey(({ key, domEvent }) => {
      if (domEvent.key === 'Enter') {
        term.writeln('')
        term.writeln(`command: ${input}`)
        input = ''
        term.write('me@React:~$ ')
      } else if (domEvent.key === 'Backspace') {
        if (input.length > 0) {
          input = input.slice(0, -1)
          term.write('\b \b')
        }
      } else {
        input += key
        term.write(key)
      }
    })

    return () => term.dispose()
  }, [])

  return (
    <MacWindow>
      <div ref={termRef} style={{ height: '100%', padding: '4px' }} />
    </MacWindow>
  )
}

export default Cli