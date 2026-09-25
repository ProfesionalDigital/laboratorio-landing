import { createContext, useContext } from 'react'
import type { PolicyKey } from '../data/policies'

export type PageName = 'main' | 'policy' | 'quejas'

/** Ruta real (no hash) de la página de quejas y retroalimentación. */
export const QUEJAS_PATH = '/quejas-y-retroalimentacion-de-partes-interesadas'

export interface AppContextValue {
  page: PageName
  activePolicy: PolicyKey | null
  showPage: (page: PageName) => void
  showPolicy: (key: PolicyKey) => void
  showQuejas: () => void
  openPqrsModal: () => void
}

export const AppContext = createContext<AppContextValue | null>(null)

export function useApp(): AppContextValue {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used within AppProvider')
  return ctx
}
