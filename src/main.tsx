import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.tsx'
import './index.css'

// Lazy-load all sub-pages so their JS only downloads when navigated to
const CasosUso = lazy(() => import('./pages/CasosUso.tsx').then(m => ({ default: m.CasosUso })))
const Contacto = lazy(() => import('./pages/Contacto.tsx').then(m => ({ default: m.Contacto })))
const Nosotros = lazy(() => import('./pages/Nosotros.tsx').then(m => ({ default: m.Nosotros })))
const Blog = lazy(() => import('./pages/Blog.tsx').then(m => ({ default: m.Blog })))
const AutomatizacionEmpresarial = lazy(() => import('./pages/servicios/AutomatizacionEmpresarial.tsx').then(m => ({ default: m.AutomatizacionEmpresarial })))
const SoftwareAMedida = lazy(() => import('./pages/servicios/SoftwareAMedida.tsx').then(m => ({ default: m.SoftwareAMedida })))
const InteligenciaArtificialB2B = lazy(() => import('./pages/servicios/InteligenciaArtificialB2B.tsx').then(m => ({ default: m.InteligenciaArtificialB2B })))

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <HelmetProvider>
            <BrowserRouter>
                <Suspense fallback={null}>
                    <Routes>
                        <Route path="/" element={<App />} />
                        <Route path="/casos" element={<CasosUso />} />
                        <Route path="/contacto" element={<Contacto />} />
                        <Route path="/nosotros" element={<Nosotros />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/servicios/automatizacion-empresarial" element={<AutomatizacionEmpresarial />} />
                        <Route path="/servicios/software-a-medida" element={<SoftwareAMedida />} />
                        <Route path="/servicios/inteligencia-artificial-b2b" element={<InteligenciaArtificialB2B />} />
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </HelmetProvider>
    </React.StrictMode>,
)
