import { useCallback, useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Badge } from '@/components/ui/badge'
import { allProjects, type Pane } from '@/data/allProjects'
import { site } from '@/data/site'

const COLS = 4
const INTRO = 'intro' as const
type Cell = typeof INTRO | Pane | null

function chunk<T>(items: T[], size: number): T[][] {
  const rows: T[][] = []
  for (let i = 0; i < items.length; i += size) {
    rows.push(items.slice(i, i + size))
  }
  return rows
}

const grid: Cell[][] = (() => {
  const cells: Cell[] = [INTRO, ...allProjects]
  const rows = chunk(cells, COLS)
  const lastRow = rows[rows.length - 1]
  while (lastRow.length < COLS) lastRow.push(null)
  return rows
})()

const ROWS = grid.length

export function PaneBrowser() {
  const [pos, setPos] = useState({ row: 0, col: 0 })
  const lockRef = useRef(false)
  const navigate = useNavigate()

  const move = useCallback((dRow: number, dCol: number) => {
    setPos((prev) => {
      const row = Math.min(Math.max(prev.row + dRow, 0), ROWS - 1)
      const col = Math.min(Math.max(prev.col + dCol, 0), COLS - 1)
      return { row, col }
    })
  }, [])

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'ArrowRight') { e.preventDefault(); move(0, 1) }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); move(0, -1) }
      else if (e.key === 'ArrowDown') { e.preventDefault(); move(1, 0) }
      else if (e.key === 'ArrowUp') { e.preventDefault(); move(-1, 0) }
      else if (e.key === 'Escape') { navigate('/') }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [move, navigate])

  useEffect(() => {
    function onWheel(e: WheelEvent) {
      e.preventDefault()
      if (lockRef.current) return
      const absX = Math.abs(e.deltaX)
      const absY = Math.abs(e.deltaY)
      if (Math.max(absX, absY) < 12) return
      lockRef.current = true
      if (absX > absY) move(0, e.deltaX > 0 ? 1 : -1)
      else move(e.deltaY > 0 ? 1 : -1, 0)
      setTimeout(() => { lockRef.current = false }, 500)
    }
    window.addEventListener('wheel', onWheel, { passive: false })
    return () => window.removeEventListener('wheel', onWheel)
  }, [move])

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-background">
      <div
        className="h-full w-full transition-transform duration-500 ease-out"
        style={{
          width: `${COLS * 100}vw`,
          height: `${ROWS * 100}vh`,
          transform: `translate(${-pos.col * 100}vw, ${-pos.row * 100}vh)`,
        }}
      >
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="flex" style={{ height: '100vh' }}>
            {row.map((cell, colIndex) => {
              if (cell === INTRO) return <IntroPane key="intro" />
              if (cell === null) return <div key={`empty-${rowIndex}-${colIndex}`} style={{ width: '100vw', height: '100vh' }} />
              return <PaneCard key={cell.title} pane={cell} />
            })}
          </div>
        ))}
      </div>

      {/* Overlay chrome */}
      <div className="pointer-events-none absolute inset-0 flex flex-col justify-between p-6">
        <div className="pointer-events-auto flex items-center justify-between">
          <Link to="/" className="text-sm font-medium text-foreground/70 hover:text-foreground">
            ← Classic view
          </Link>
          <span className="text-xs text-muted-foreground">
            {pos.row * COLS + pos.col + 1} / {ROWS * COLS}
          </span>
        </div>
        <div className="pointer-events-auto mx-auto flex gap-1.5 pb-2">
          {grid.flat().map((_, i) => (
            <span
              key={i}
              className={`h-1.5 w-1.5 rounded-full transition-colors ${
                i === pos.row * COLS + pos.col ? 'bg-primary' : 'bg-border'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function IntroPane() {
  return (
    <div
      style={{ width: '100vw', height: '100vh' }}
      className="flex flex-col items-center justify-center gap-4 px-6 text-center"
    >
      <p className="text-sm font-medium uppercase tracking-widest text-primary">{site.role}</p>
      <h1 className="max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">{site.name}</h1>
      <p className="max-w-md text-muted-foreground">
        Use arrow keys or scroll to browse — every pane is a project.
      </p>
    </div>
  )
}

function PaneCard({ pane }: { pane: Pane }) {
  const content = (
    <div className="flex h-full w-full flex-col items-center justify-center gap-5 px-8 text-center sm:px-16">
      {pane.image && (
        <div className="flex max-h-[45vh] max-w-md items-center justify-center overflow-hidden rounded-2xl border border-border bg-muted p-4">
          <img src={pane.image} alt="" className="max-h-[40vh] w-auto object-contain" />
        </div>
      )}
      <div className="flex flex-wrap justify-center gap-1.5">
        {pane.tags.slice(0, 3).map((tag) => (
          <Badge key={tag} variant="secondary" className="font-normal">
            {tag}
          </Badge>
        ))}
      </div>
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{pane.title}</h2>
      <p className="max-w-lg text-muted-foreground">{pane.subtitle}</p>
      {pane.href && (
        <span className="text-sm font-medium text-primary">
          {pane.external ? 'View on Wix ↗' : 'Read the case study →'}
        </span>
      )}
    </div>
  )

  const style = { width: '100vw', height: '100vh' }

  if (!pane.href) {
    return <div style={style}>{content}</div>
  }

  if (pane.external) {
    return (
      <a href={pane.href} target="_blank" rel="noreferrer" style={style} className="block">
        {content}
      </a>
    )
  }

  return (
    <Link to={pane.href} style={style} className="block">
      {content}
    </Link>
  )
}
