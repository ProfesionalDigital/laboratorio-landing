import { useCallback, useEffect, useMemo, useState } from 'react'
import { AppContext, type PageName } from './context/AppContext'
import { policies, type PolicyKey } from './data/policies'
import { MainPage } from './pages/MainPage'
import { PolicyPage } from './pages/PolicyPage'
import { PqrsModal } from './components/PqrsModal'

function isPolicyKey(value: string): value is PolicyKey {
  return value in policies
}

function App() {
  const [page, setPage] = useState<PageName>('main')
  const [activePolicy, setActivePolicy] = useState<PolicyKey | null>(null)
  const [pqrsOpen, setPqrsOpen] = useState(false)

  const showPage = useCallback((next: PageName) => {
    setPage((prev) => {
      if (next === 'main' && prev !== 'main') {
        history.pushState({}, '', window.location.pathname)
      }
      return next
    })
    window.scrollTo(0, 0)
  }, [])

  const showPolicy = useCallback((key: PolicyKey) => {
    if (!policies[key]) return
    setActivePolicy(key)
    setPage('policy')
    window.scrollTo(0, 0)
    history.pushState({ policy: key }, '', '#politica-' + key)
  }, [])

  const openPqrsModal = useCallback(() => {
    setPqrsOpen(true)
  }, [])

  const closePqrsModal = useCallback(() => {
    setPqrsOpen(false)
  }, [])

  useEffect(() => {
    function onPopState() {
      const hash = location.hash
      if (hash.startsWith('#politica-')) {
        const key = hash.replace('#politica-', '')
        if (isPolicyKey(key)) {
          setActivePolicy(key)
          setPage('policy')
          window.scrollTo(0, 0)
          return
        }
      }
      setPage('main')
      window.scrollTo(0, 0)
    }
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  useEffect(() => {
    const hash = location.hash
    if (hash.startsWith('#politica-')) {
      const key = hash.replace('#politica-', '')
      if (isPolicyKey(key)) {
        setActivePolicy(key)
        setPage('policy')
      }
    }
  }, [])

  const ctx = useMemo(
    () => ({
      page,
      activePolicy,
      showPage,
      showPolicy,
      openPqrsModal,
    }),
    [page, activePolicy, showPage, showPolicy, openPqrsModal],
  )

  return (
    <AppContext.Provider value={ctx}>
      {page === 'main' && (
        <div id="main-page">
          <MainPage />
          <PqrsModal open={pqrsOpen} onClose={closePqrsModal} />
        </div>
      )}
      {page === 'policy' && (
        <div id="policy-page">
          <PolicyPage />
        </div>
      )}
    </AppContext.Provider>
  )
}

export default App
