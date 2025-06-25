// src/main.tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App' // Note que agora importamos do arquivo App.tsx

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)