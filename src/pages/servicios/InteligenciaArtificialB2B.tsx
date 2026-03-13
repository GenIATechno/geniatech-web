import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Bot, Brain, MessageSquare, BarChart3, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ParticleBackground } from '../../components/ParticleBackground';

const schemaService = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Inteligencia Artificial B2B Chile",
    "description": "Implementación de inteligencia artificial para empresas B2B en Chile. Agentes IA, procesamiento de documentos, análisis predictivo y automatización cognitiva para operaciones empresariales.",
    "provider": {
        "@type": "ProfessionalService",
        "name": "GenIA Tech SpA",
        "url": "https://geniatechno.com",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Santiago",
            "addressRegion": "Región Metropolitana",
            "addressCountry": "CL"
        }
    },
    "areaServed": { "@type": "Country", "name": "Chile" },
    "url": "https://geniatechno.com/servicios/inteligencia-artificial-b2b"
};

const aplicaciones = [
    {
        icon: Bot,
        titulo: "Agentes IA para operaciones",
        descripcion: "Agentes de inteligencia artificial que ejecutan tareas complejas de forma autónoma: clasificar, decidir, alertar y escalar sin intervención humana.",
    },
    {
        icon: MessageSquare,
        titulo: "IA conversacional empresarial",
        descripcion: "Asistentes inteligentes entrenados con el conocimiento de tu empresa para atender a clientes, proveedores y equipos internos a escala.",
    },
    {
        icon: Brain,
        titulo: "Procesamiento inteligente de documentos",
        descripcion: "Extracción, clasificación y análisis automático de contratos, facturas, reportes y cualquier documento que hoy procesas manualmente.",
    },
    {
        icon: BarChart3,
        titulo: "Analítica predictiva operativa",
        descripcion: "Modelos de IA que anticipan cuellos de botella, predicen demanda y generan alertas antes de que los problemas ocurran.",
    },
];

const sectores = [
    { sector: "Logística", uso: "Predicción de rutas, alertas de retraso y cotización automática de fletes." },
    { sector: "Seguridad Privada", uso: "Validación de identidad con IA, rondas predictivas y análisis de incidentes en tiempo real." },
    { sector: "Retail B2B", uso: "Pronóstico de inventario, detección de quiebres de stock y pricing dinámico." },
    { sector: "Servicios Profesionales", uso: "Generación automática de propuestas, contratos y reportes de avance." },
];

export const InteligenciaArtificialB2B = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <div className="min-h-screen bg-[#000000] text-gray-200 font-sans selection:bg-safety selection:text-white relative">
            <Helmet>
                <title>Inteligencia Artificial B2B en Chile | GenIA Tech — IA Empresarial Santiago</title>
                <meta name="description" content="Implementación de inteligencia artificial para empresas B2B en Chile. Agentes IA, analítica predictiva y automatización cognitiva para operaciones empresariales. Santiago, Chile." />
                <meta name="keywords" content="inteligencia artificial B2B Chile, IA empresarial Santiago, agentes IA empresas Chile, inteligencia artificial pymes Chile, analítica predictiva empresas, IA para operaciones empresariales" />
                <link rel="canonical" href="https://geniatechno.com/servicios/inteligencia-artificial-b2b" />
                <meta property="og:title" content="Inteligencia Artificial B2B en Chile | GenIA Tech" />
                <meta property="og:description" content="Implementamos IA en empresas B2B chilenas. Agentes autónomos, procesamiento de documentos y analítica predictiva para operaciones reales." />
                <meta property="og:url" content="https://geniatechno.com/servicios/inteligencia-artificial-b2b" />
                <meta property="og:type" content="website" />
                <script type="application/ld+json">{JSON.stringify(schemaService)}</script>
            </Helmet>

            <ParticleBackground />

            <nav className="fixed w-full z-50 bg-[#000000]/80 backdrop-blur-md border-b border-gray-900 shadow-xl">
                <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <Link to="/" className="flex items-center gap-2 group">
                            <ArrowLeft className="w-5 h-5 text-gray-400 group-hover:text-safety transition-colors" />
                            <span className="font-bold text-gray-300 group-hover:text-white transition-colors">Volver al Inicio</span>
                        </Link>
                        <div className="flex items-center space-x-2">
                            <span className="text-xl md:text-2xl font-black tracking-tighter text-white">GenIA Tech</span>
                            <span className="w-2 h-2 rounded-full bg-safety animate-pulse"></span>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="pt-32 pb-24 relative z-10 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* HERO */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-20 max-w-4xl mx-auto">
                    <span className="inline-flex items-center gap-2 bg-[#111] border border-gray-800 text-safety text-xs font-bold px-4 py-2 rounded-full mb-6 uppercase tracking-widest">
                        <Brain className="w-3.5 h-3.5" /> Servicio — Inteligencia Artificial
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
                        Inteligencia Artificial{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-safety to-orange-400">B2B para Empresas en Chile</span>
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                        La IA no es solo para grandes corporaciones. Implementamos inteligencia artificial en empresas B2B chilenas de todos los tamaños: desde agentes autónomos hasta analítica predictiva integrada en tu operación diaria.
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contacto" className="inline-flex items-center gap-2 bg-gradient-to-r from-safety to-orange-500 text-white font-bold py-4 px-8 rounded-full shadow-[0_0_20px_rgba(255,87,34,0.3)] hover:shadow-[0_0_40px_rgba(255,87,34,0.5)] transition-all hover:-translate-y-1">
                            Evaluar mi Caso de IA <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link to="/casos" className="inline-flex items-center gap-2 border border-gray-700 text-gray-300 hover:text-white font-bold py-4 px-8 rounded-full transition-all hover:border-gray-500">
                            Ver Casos de Éxito
                        </Link>
                    </div>
                </motion.div>

                {/* APLICACIONES */}
                <section className="mb-24">
                    <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12 tracking-tight">
                        Aplicaciones de IA para tu empresa
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {aplicaciones.map((a, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-[#0A0A0A] border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-colors"
                            >
                                <div className="w-12 h-12 bg-safety/10 border border-safety/20 text-safety rounded-xl flex items-center justify-center mb-5">
                                    <a.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-3">{a.titulo}</h3>
                                <p className="text-gray-400 leading-relaxed">{a.descripcion}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* SECTORES */}
                <section className="mb-24 bg-[#050505] border border-gray-800 rounded-[2rem] p-10 md:p-14">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-10 tracking-tight">
                        IA aplicada por sector en Chile
                    </h2>
                    <div className="space-y-6">
                        {sectores.map((s, i) => (
                            <div key={i} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 border-b border-gray-800 pb-6 last:border-b-0 last:pb-0">
                                <span className="text-xs font-black uppercase tracking-widest text-safety bg-safety/10 border border-safety/20 px-3 py-1.5 rounded-full whitespace-nowrap">
                                    {s.sector}
                                </span>
                                <p className="text-gray-300 font-medium flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                                    {s.uso}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <div className="text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        ¿Cómo puede la IA impactar tu operación?
                    </h2>
                    <p className="text-gray-400 mb-8 max-w-xl mx-auto">Analizamos tu operación actual y te mostramos exactamente dónde la inteligencia artificial puede generar retorno medible en tu empresa.</p>
                    <Link to="/contacto" className="inline-flex items-center gap-2 bg-gradient-to-r from-safety to-orange-500 text-white font-bold py-4 px-10 rounded-full shadow-[0_0_20px_rgba(255,87,34,0.3)] hover:shadow-[0_0_40px_rgba(255,87,34,0.5)] transition-all hover:-translate-y-1">
                        Solicitar Análisis de IA <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </main>
        </div>
    );
};
