import React from 'react'
import ReactDOM from 'react-dom/client'
import { TranslatorProvider } from './contexts/TranslatorContext'
import './index.css'
import { Router } from './routes'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TranslatorProvider>
      <Router />
    </TranslatorProvider>
  </React.StrictMode>,
)
