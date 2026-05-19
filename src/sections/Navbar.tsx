import { useEffect, useState } from 'react'
import { useApp } from '../context/AppContext'

const navLinks = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#por-que-nosotros', label: '¿Por qué nosotros?' },
  { href: '#proceso', label: 'Proceso' },
  { href: '#contacto', label: 'Contacto' },
]

export function Navbar() {
  const { showPage } = useApp()
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  useEffect(() => {
    if (!menuOpen) return
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [menuOpen])

  return (
    <nav className="sticky top-0 z-[100] bg-navy border-b border-white/[0.08] shadow-[0_2px_20px_rgba(0,0,0,0.2)]">
      <div className="max-w-[1180px] mx-auto px-6 flex items-center justify-between h-[70px] gap-6">
        <a
          className="shrink-0 cursor-pointer"
          onClick={() => showPage('main')}
          aria-label="Impormedical · inicio"
        >
          <img src="/logo-im.svg" alt="Impormedical" className="h-10 w-auto block" />
        </a>

        <ul className="hidden min-[900px]:flex items-center gap-7 list-none">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-white/75 text-sm font-medium transition-colors hover:text-white cursor-pointer">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="https://impormedical.my.site.com/solicitudserviciocalibracion"
          target="_blank"
          rel="noreferrer"
          className="hidden min-[900px]:inline-flex bg-orange text-white px-5 py-[9px] rounded-[7px] text-sm font-bold transition-all whitespace-nowrap hover:bg-orange-hover"
        >
          Solicitar calibración →
        </a>

        <button
          type="button"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="min-[900px]:hidden w-10 h-10 flex items-center justify-center rounded-[8px] bg-white/[0.08] border border-white/[0.12] text-white transition-colors hover:bg-white/[0.16]"
        >
          {menuOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="7" x2="21" y2="7" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="17" x2="21" y2="17" />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <>
          <div
            className="min-[900px]:hidden fixed inset-x-0 top-[70px] bottom-0 bg-black/40 z-[99]"
            onClick={closeMenu}
            aria-hidden="true"
          />
          <div className="min-[900px]:hidden absolute top-full inset-x-0 bg-navy border-t border-white/[0.08] shadow-[0_8px_20px_rgba(0,0,0,0.25)] z-[100]">
            <div className="max-w-[1180px] mx-auto px-6 py-5 flex flex-col">
              <ul className="list-none flex flex-col">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={closeMenu}
                      className="block text-white/85 text-[15px] font-medium py-3.5 border-b border-white/10 transition-colors hover:text-white"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="https://impormedical.my.site.com/solicitudserviciocalibracion"
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
                className="mt-5 inline-flex items-center justify-center gap-2 bg-orange text-white px-5 py-3 rounded-lg text-sm font-bold transition-all shadow-[0_4px_14px_rgba(232,146,10,0.35)] hover:bg-orange-hover"
              >
                Solicitar calibración →
              </a>
            </div>
          </div>
        </>
      )}
    </nav>
  )
}
