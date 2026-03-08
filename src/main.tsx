import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.tsx'
import { CasosUso } from './pages/CasosUso.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <HelmetProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/casos" element={<CasosUso />} />
                </Routes>
            </BrowserRouter>
        </HelmetProvider>
    </React.StrictMode>,
)
