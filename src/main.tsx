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

// Industrias
const Inmobiliarias = lazy(() => import('./pages/industrias/Inmobiliarias.tsx').then(m => ({ default: m.Inmobiliarias })))
const SeguridadPrivada = lazy(() => import('./pages/industrias/SeguridadPrivada.tsx').then(m => ({ default: m.SeguridadPrivada })))
const Agroindustria = lazy(() => import('./pages/industrias/Agroindustria.tsx').then(m => ({ default: m.Agroindustria })))
const Construccion = lazy(() => import('./pages/industrias/Construccion.tsx').then(m => ({ default: m.Construccion })))
const Mineria = lazy(() => import('./pages/industrias/Mineria.tsx').then(m => ({ default: m.Mineria })))
const LogisticaTransporte = lazy(() => import('./pages/industrias/LogisticaTransporte.tsx').then(m => ({ default: m.LogisticaTransporte })))
const ClinicasSalud = lazy(() => import('./pages/industrias/ClinicasSalud.tsx').then(m => ({ default: m.ClinicasSalud })))
const RetailComercio = lazy(() => import('./pages/industrias/RetailComercio.tsx').then(m => ({ default: m.RetailComercio })))
const OtecOtic = lazy(() => import('./pages/industrias/OtecOtic.tsx').then(m => ({ default: m.OtecOtic })))
const ServiciosProfesionales = lazy(() => import('./pages/industrias/ServiciosProfesionales.tsx').then(m => ({ default: m.ServiciosProfesionales })))

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
                        <Route path="/industrias/inmobiliarias" element={<Inmobiliarias />} />
                        <Route path="/industrias/seguridad-privada" element={<SeguridadPrivada />} />
                        <Route path="/industrias/agroindustria" element={<Agroindustria />} />
                        <Route path="/industrias/construccion" element={<Construccion />} />
                        <Route path="/industrias/mineria" element={<Mineria />} />
                        <Route path="/industrias/logistica-transporte" element={<LogisticaTransporte />} />
                        <Route path="/industrias/clinicas-salud" element={<ClinicasSalud />} />
                        <Route path="/industrias/retail-comercio" element={<RetailComercio />} />
                        <Route path="/industrias/otec-otic" element={<OtecOtic />} />
                        <Route path="/industrias/servicios-profesionales" element={<ServiciosProfesionales />} />
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </HelmetProvider>
    </React.StrictMode>,
)
