import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { AddressProvider } from './services/addressProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AddressProvider>
    <App />
    </AddressProvider>
  </StrictMode>,
)
