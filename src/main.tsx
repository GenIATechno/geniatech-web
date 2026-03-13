import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.tsx'
import { CasosUso } from './pages/CasosUso.tsx'
import { AutomatizacionEmpresarial } from './pages/servicios/AutomatizacionEmpresarial.tsx'
import { SoftwareAMedida } from './pages/servicios/SoftwareAMedida.tsx'
import { InteligenciaArtificialB2B } from './pages/servicios/InteligenciaArtificialB2B.tsx'
import { Contacto } from './pages/Contacto.tsx'
import { Nosotros } from './pages/Nosotros.tsx'
import { Blog } from './pages/Blog.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <HelmetProvider>
            <BrowserRouter>
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
            </BrowserRouter>
        </HelmetProvider>
    </React.StrictMode>,
)
