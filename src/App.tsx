import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { AppContext, QUEJAS_PATH, type PageName } from './context/AppContext'
import { policies, type PolicyKey } from './data/policies'
import { MainPage } from './pages/MainPage'
import { PolicyPage } from './pages/PolicyPage'
import { QuejasPage } from './pages/QuejasPage'
import { PqrsModal } from './components/PqrsModal'

function isPolicyKey(value: string): value is PolicyKey {
  return value in policies
}

function isQuejasPath(pathname: string): boolean {
  return pathname.replace(/\/+$/, '') === QUEJAS_PATH
}

/** Deriva la página activa desde la URL (ruta para quejas, hash para políticas). */
function readUrl(): { page: PageName; policy: PolicyKey | null } {
  if (isQuejasPath(location.pathname)) return { page: 'quejas', policy: null }
  const hash = location.hash
  if (hash.startsWith('#politica-')) {
    const key = hash.replace('#politica-', '')
    if (isPolicyKey(key)) return { page: 'policy', policy: key }
  }
  return { page: 'main', policy: null }
}

function App() {
  const [page, setPage] = useState<PageName>(() => readUrl().page)
  const [activePolicy, setActivePolicy] = useState<PolicyKey | null>(() => readUrl().policy)
  const [pqrsOpen, setPqrsOpen] = useState(false)

  const showPage = useCallback((next: PageName) => {
    setPage((prev) => {
      if (next === 'main' && prev !== 'main') {
        history.pushState({}, '', import.meta.env.BASE_URL)
      }
      return next
    })
  }, [])

  const showPolicy = useCallback((key: PolicyKey) => {
    if (!policies[key]) return
    setActivePolicy(key)
    setPage('policy')
    history.pushState({ policy: key }, '', '#politica-' + key)
  }, [])

  const showQuejas = useCallback(() => {
    setPage('quejas')
    history.pushState({ quejas: true }, '', QUEJAS_PATH)
  }, [])

  const openPqrsModal = useCallback(() => {
    setPqrsOpen(true)
  }, [])

  const closePqrsModal = useCallback(() => {
    setPqrsOpen(false)
  }, [])

  useEffect(() => {
    function syncFromUrl() {
      const next = readUrl()
      if (next.policy) setActivePolicy(next.policy)
      setPage(next.page)
    }
    window.addEventListener('popstate', syncFromUrl)
    return () => window.removeEventListener('popstate', syncFromUrl)
  }, [])

  // Al cambiar de pagina hay que volver al tope. Dos detalles importantes:
  // 1. Debe correr DESPUES de que React monta la pagina nueva; dentro de los handlers
  //    no surte efecto porque la pagina anterior sigue en el DOM.
  // 2. Debe ser 'instant': index.css aplica `scroll-behavior: smooth` al <html>, y un
  //    scrollTo suave se cancela al reemplazarse el DOM, dejando la pagina a media altura.
  // Se omite en el montaje inicial para no romper los enlaces de ancla (/#servicios).
  const isFirstRender = useRef(true)
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [page, activePolicy])

  const ctx = useMemo(
    () => ({
      page,
      activePolicy,
      showPage,
      showPolicy,
      showQuejas,
      openPqrsModal,
    }),
    [page, activePolicy, showPage, showPolicy, showQuejas, openPqrsModal],
  )

  return (
    <AppContext.Provider value={ctx}>
      {page === 'main' && (
        <div id="main-page">
          <MainPage />
        </div>
      )}
      {page === 'policy' && (
        <div id="policy-page">
          <PolicyPage />
        </div>
      )}
      {page === 'quejas' && (
        <div id="quejas-page">
          <QuejasPage />
        </div>
      )}
      <PqrsModal open={pqrsOpen} onClose={closePqrsModal} />
    </AppContext.Provider>
  )
}

export default App
