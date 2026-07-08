import { useState, type FormEvent, type ReactNode } from 'react'

const STORAGE_KEY = 'case-study-unlocked'
const PASSWORD = import.meta.env.VITE_CASE_STUDY_PASSWORD

function isUnlocked() {
  return localStorage.getItem(STORAGE_KEY) === 'true'
}

export function PasswordGate({ children }: { children: ReactNode }) {
  const [unlocked, setUnlocked] = useState(isUnlocked)
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)

  if (unlocked) return <>{children}</>

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (value === PASSWORD) {
      localStorage.setItem(STORAGE_KEY, 'true')
      setUnlocked(true)
      setError(false)
    } else {
      setError(true)
    }
  }

  return (
    <div className="mx-auto flex max-w-sm flex-col items-center px-6 py-32 text-center">
      <h1 className="mb-2 text-xl font-semibold tracking-tight">This case study is private</h1>
      <p className="mb-8 text-sm text-muted-foreground">
        Enter the password to view it.
      </p>
      <form onSubmit={handleSubmit} className="flex w-full flex-col gap-3">
        <input
          type="password"
          inputMode="numeric"
          value={value}
          onChange={(e) => {
            setValue(e.target.value)
            setError(false)
          }}
          autoFocus
          placeholder="Password"
          className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-center text-sm outline-none ring-primary/40 focus:ring-2"
        />
        {error && <p className="text-sm text-destructive">Incorrect password.</p>}
        <button
          type="submit"
          className="w-full rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          Unlock
        </button>
      </form>
    </div>
  )
}
