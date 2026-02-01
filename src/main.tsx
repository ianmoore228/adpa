import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppRouter } from "@/providers/router/index.tsx";
import './scss/main.scss'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
        <AppRouter />
  </StrictMode>
)