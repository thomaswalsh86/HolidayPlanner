import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { AddressProvider, DateProvider } from './services/addressProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AddressProvider>
      <DateProvider>
        <App />
      </DateProvider>
    </AddressProvider>
  </StrictMode>,
)
