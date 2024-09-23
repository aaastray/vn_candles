import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Header from './layouts/Header/Header.tsx'
import Footer from './layouts/Footer/Footer.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <App />
    <Footer />
  </StrictMode>,
)
