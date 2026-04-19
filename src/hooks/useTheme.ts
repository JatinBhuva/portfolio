import { useCallback, useEffect, useMemo, useState } from 'react'
import {
  applyTheme,
  getSystemTheme,
  readStoredTheme,
  storeTheme,
  type Theme,
} from '../theme/theme'

type UseThemeOptions = {
  persist?: boolean
}

export function useTheme(options: UseThemeOptions = {}) {
  const persist = options.persist ?? true
  const initialTheme = useMemo<Theme>(() => {
    if (typeof window === 'undefined') return 'light'
    return readStoredTheme() ?? getSystemTheme()
  }, [])

  const [theme, setThemeState] = useState<Theme>(initialTheme)

  useEffect(() => {
    applyTheme(theme)
    if (persist) storeTheme(theme)
  }, [persist, theme])

  useEffect(() => {
    if (!persist) return

    const stored = readStoredTheme()
    if (stored && stored !== theme) setThemeState(stored)

    const onStorage = (event: StorageEvent) => {
      if (event.key !== 'theme') return
      const next = event.newValue === 'dark' || event.newValue === 'light' ? event.newValue : null
      if (next && next !== theme) setThemeState(next)
    }

    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [persist, theme])

  const setTheme = useCallback((next: Theme) => setThemeState(next), [])

  const toggleTheme = useCallback(() => {
    setThemeState((current) => (current === 'dark' ? 'light' : 'dark'))
  }, [])

  return { theme, setTheme, toggleTheme }
}

