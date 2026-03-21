import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Analytics } from '@vercel/analytics/react'
/**
 * INTEGRAÇÃO @AXE-CORE/REACT (WCAG 2.1)
 * Executado apenas em ambiente de desenvolvimento.
 * Exibe problemas de acessibilidade diretamente no console do navegador.
 */
if (import.meta.env.DEV) {
  try {
    const axe = await import('@axe-core/react')
    axe.default(React, ReactDOM, 1000)
    console.log('[ACCESSIBILITY] @axe-core/react ativado em ambiente de desenvolvimento.')
  } catch (error) {
    console.error('Falha ao carregar @axe-core/react:', error)
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Analytics />
  </React.StrictMode>,
)
