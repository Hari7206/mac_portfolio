import { useEffect, useRef } from 'react'
import { Terminal } from 'xterm'
import { FitAddon } from 'xterm-addon-fit'
import 'xterm/css/xterm.css'
import MacWindow from './MacWindow'

const PORTFOLIO = {
  name: 'Hari Thapa',
  role: 'Full Stack Developer',
  location: 'Gurgaon, India',
  email: 'harithapa4654@gmail.com',
  github: 'https://github.com/Hari7206',
  linkedin: 'https://www.linkedin.com/in/hari-thapa-67827835b/',
  website: 'https://react-work-tan.vercel.app/',
  skills: {
    frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    backend: ['Node.js', 'Express', 'REST APIs', 'GraphQL'],
    database: ['MongoDB',],
    tools: ['Git', 'Figma', 'VS Code'],
  },
 projects: [
  {
    name: 'PokeFlux',
    desc: 'A dynamic Pokémon explorer built with React that fetches data from an external API and displays it in a randomized card layout on every refresh.',
    tech: ['React.js', 'JavaScript (ES6+)', 'SCSS', 'REST API', 'Dynamic UI'],
    url: 'https://github.com/hari7206/pokeflux',
  },
  {
    name: 'ShopFlow',
    desc: 'A React-based e-commerce prototype using Context API for state management and React Router for dynamic product navigation and detail pages.',
    tech: ['React.js', 'Context API', 'React Router', 'REST API', 'State Management'],
    url: 'https://github.com/hari7206/shopflow',
  },
  {
    name: 'FocusOS',
    desc: 'An all-in-one productivity dashboard featuring a todo list, pomodoro timer, daily planner, goal tracker, and weather widget in a unified interface.',
    tech: ['JavaScript (ES6)', 'HTML5', 'CSS3', 'Dashboard UI', 'Productivity Tools'],
    url: 'https://github.com/hari7206/focusos',
  },
  {
    name: 'KeyWave',
    desc: 'An interactive virtual piano built with HTML, CSS, and JavaScript that allows users to play notes via keyboard or mouse with real-time feedback.',
    tech: ['JavaScript (ES6)', 'HTML5', 'CSS3', 'DOM Manipulation', 'Interactive UI'],
    url: 'https://github.com/hari7206/keywave',
  }
],
  // experience: [
  //   { role: 'Frontend Developer', company: 'TechNepal Pvt. Ltd.', period: '2023 – Present' },
  //   { role: 'React Intern', company: 'StartupKTM', period: '2022 – 2023' },
  // ],
 education: [
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    school: 'ST ANDREWS INSTITUTE OF TECHNOLOGY & MANAGEMENT',
    year: '2024 – Present'
  }
],
}

const C = {
  green:   (s) => `\x1b[32m${s}\x1b[0m`,
  cyan:    (s) => `\x1b[36m${s}\x1b[0m`,
  yellow:  (s) => `\x1b[33m${s}\x1b[0m`,
  magenta: (s) => `\x1b[35m${s}\x1b[0m`,
  blue:    (s) => `\x1b[34m${s}\x1b[0m`,
  bold:    (s) => `\x1b[1m${s}\x1b[0m`,
  dim:     (s) => `\x1b[2m${s}\x1b[0m`,
  red:     (s) => `\x1b[31m${s}\x1b[0m`,
}

function buildCommands(term) {
  return {
    help: () => {
      term.writeln('')
      term.writeln(C.cyan('╔══════════════════════════════════════════╗'))
      term.writeln(C.cyan('║') + C.bold('         Available Commands               ') + C.cyan('║'))
      term.writeln(C.cyan('╚══════════════════════════════════════════╝'))
      const cmds = [
        ['whoami',     'About me — name, role & location'],
        ['skills',     'My technical skills & stack'],
        ['projects',   'Projects I have built'],
        ['experience', 'Work experience timeline'],
        ['education',  'Academic background'],
        ['contact',    'Ways to reach me'],
        ['social',     'GitHub, LinkedIn & website links'],
        ['banner',     'Show the welcome banner again'],
        ['clear',      'Clear the terminal'],
        ['help',       'Show this help menu'],
      ]
      cmds.forEach(([cmd, desc]) => {
        term.writeln(`  ${C.green(cmd.padEnd(12))} ${C.dim('→')} ${desc}`)
      })
      term.writeln('')
    },

    whoami: () => {
      term.writeln('')
      term.writeln(C.bold(C.yellow('  👤 ' + PORTFOLIO.name)))
      term.writeln(`  ${C.cyan('Role     ')}  ${PORTFOLIO.role}`)
      term.writeln(`  ${C.cyan('Location ')}  ${PORTFOLIO.location}`)
      term.writeln(`  ${C.cyan('Website  ')}  ${PORTFOLIO.website}`)
      term.writeln('')
    },

    skills: () => {
      term.writeln('')
      term.writeln(C.bold(C.yellow('  🛠  Technical Skills')))
      Object.entries(PORTFOLIO.skills).forEach(([cat, list]) => {
        term.writeln(`  ${C.cyan(cat.padEnd(10))}  ${list.map(s => C.green(s)).join(C.dim('  •  '))}`)
      })
      term.writeln('')
    },

    projects: () => {
      term.writeln('')
      term.writeln(C.bold(C.yellow('  🚀 Projects')))
      PORTFOLIO.projects.forEach((p, i) => {
        term.writeln(`  ${C.magenta(`[${i + 1}]`)} ${C.bold(p.name)}`)
        term.writeln(`      ${C.dim(p.desc)}`)
        term.writeln(`      ${C.cyan('Tech:')} ${p.tech.join(', ')}`)
        term.writeln(`      ${C.cyan('URL :')} ${C.blue(p.url)}`)
        term.writeln('')
      })
    },

    experience: () => {
      term.writeln('')
      term.writeln(C.bold(C.yellow('  💼 Work Experience')))
      PORTFOLIO.experience.forEach((e) => {
        term.writeln(`  ${C.green('▸')} ${C.bold(e.role)}`)
        term.writeln(`    ${C.cyan(e.company)}  ${C.dim(e.period)}`)
        term.writeln('')
      })
    },

    education: () => {
      term.writeln('')
      term.writeln(C.bold(C.yellow('  🎓 Education')))
      PORTFOLIO.education.forEach((e) => {
        term.writeln(`  ${C.green('▸')} ${C.bold(e.degree)}`)
        term.writeln(`    ${C.cyan(e.school)}  ${C.dim(e.year)}`)
      })
      term.writeln('')
    },

    contact: () => {
      term.writeln('')
      term.writeln(C.bold(C.yellow('  📬 Contact')))
      term.writeln(`  ${C.cyan('Email    ')}  ${C.green(PORTFOLIO.email)}`)
      term.writeln(`  ${C.cyan('GitHub   ')}  ${C.blue(PORTFOLIO.github)}`)
      term.writeln(`  ${C.cyan('LinkedIn ')}  ${C.blue(PORTFOLIO.linkedin)}`)
      term.writeln('')
    },

    social: () => {
      term.writeln('')
      term.writeln(C.bold(C.yellow('  🌐 Social & Links')))
      term.writeln(`  ${C.magenta('GitHub   ')}  ${C.blue(PORTFOLIO.github)}`)
      term.writeln(`  ${C.magenta('LinkedIn ')}  ${C.blue(PORTFOLIO.linkedin)}`)
      term.writeln(`  ${C.magenta('Website  ')}  ${C.blue(PORTFOLIO.website)}`)
      term.writeln('')
    },

    banner: (term) => {
      printBanner(term)
    },

    clear: (term) => {
      term.clear()
    },
  }
}

function printBanner(term) {
  term.writeln(C.green("  ██╗  ██╗ █████╗ ██████╗ ██╗"))
  term.writeln(C.green("  ██║  ██║██╔══██╗██╔══██╗██║"))
  term.writeln(C.green("  ███████║███████║██████╔╝██║"))
  term.writeln(C.green("  ██╔══██║██╔══██║██╔══██╗██║"))
  term.writeln(C.green("  ██║  ██║██║  ██║██║  ██║██║"))
  term.writeln(C.green("  ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝"))
  term.writeln('')
  term.writeln(`  ${C.bold(C.yellow(PORTFOLIO.name))}  ${C.dim('—')}  ${PORTFOLIO.role}`)
  term.writeln(`  ${C.dim('Type')} ${C.cyan('help')} ${C.dim('to see all available commands.')}`)
  term.writeln('')
}

function Cli({ windowName, setWindowState }) {
  const termRef = useRef(null)

  useEffect(() => {
    const term = new Terminal({
      theme: {
        background: '#0d1117',
        foreground: '#c9d1d9',
        cursor: '#58a6ff',
        selectionBackground: '#264f78',
      },
      fontFamily: '"JetBrains Mono", "Fira Code", monospace',
      fontSize: 13,
      lineHeight: 1.5,
      cursorBlink: true,
      scrollback: 1000,       
    })

    const fitAddon = new FitAddon()
    term.loadAddon(fitAddon)
    term.open(termRef.current)

    requestAnimationFrame(() => fitAddon.fit())

    const ro = new ResizeObserver(() => fitAddon.fit())
    ro.observe(termRef.current)

    printBanner(term)
    term.write(C.green('Hari') + C.dim('@') + C.cyan('portfolio') + C.dim(':~$ '))

    const commands = buildCommands(term)
    let input = ''
    let historyList = []
    let historyIndex = -1

    term.onKey(({ key, domEvent }) => {
      const code = domEvent.key

      if (code === 'Enter') {
        term.writeln('')
        const cmd = input.trim().toLowerCase()

        if (cmd) {
          historyList.unshift(cmd)
          historyIndex = -1

          if (commands[cmd]) {
            commands[cmd](term)
          } else if (cmd !== '') {
            term.writeln(C.red(`  command not found: ${cmd}`) + C.dim('  (try "help")'))
            term.writeln('')
          }
        }

        input = ''
        term.write(C.green('Hari') + C.dim('@') + C.cyan('portfolio') + C.dim(':~$ '))
        term.scrollToBottom()   

      } else if (code === 'Backspace') {
        if (input.length > 0) {
          input = input.slice(0, -1)
          term.write('\b \b')
        }

      } else if (code === 'ArrowUp') {
        if (historyIndex < historyList.length - 1) {
          historyIndex++
          term.write('\b \b'.repeat(input.length))
          input = historyList[historyIndex] || ''
          term.write(input)
        }

      } else if (code === 'ArrowDown') {
        if (historyIndex > 0) {
          historyIndex--
          term.write('\b \b'.repeat(input.length))
          input = historyList[historyIndex] || ''
          term.write(input)
        } else {
          historyIndex = -1
          term.write('\b \b'.repeat(input.length))
          input = ''
        }

      } else if (code === 'Tab') {
        domEvent.preventDefault()
        const partial = input.trim().toLowerCase()
        const matches = Object.keys(commands).filter(c => c.startsWith(partial))
        if (matches.length === 1) {
          term.write('\b \b'.repeat(input.length))
          input = matches[0]
          term.write(input)
        } else if (matches.length > 1) {
          term.writeln('')
          term.writeln(C.dim('  ' + matches.join('   ')))
          term.write(C.green('Hari') + C.dim('@') + C.cyan('portfolio') + C.dim(':~$ ') + input)
        }

      } else if (key.length === 1) {
        input += key
        term.write(key)
      }
    })

    return () => {
      ro.disconnect()
      term.dispose()
    }
  }, [])

  return (
    <MacWindow windowName={windowName} setWindowState={setWindowState}>
      <div
        style={{
          height: '100%',
          width: '100%',
          backgroundColor: '#0d1117',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          paddingBottom: '10px',   
        }}
      >
        <div
          ref={termRef}
          style={{
            flex: 1,
            minHeight: 0,        
            width: '100%',
            paddingLeft: '4px',
            paddingRight: '4px',
            paddingTop: '4px',
            boxSizing: 'border-box',
          }}
        />
      </div>
    </MacWindow>
  )
}

export default Cli