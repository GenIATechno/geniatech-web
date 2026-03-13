import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, TrendingUp, Zap, Clock, BarChart3, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ParticleBackground } from '../../components/ParticleBackground';

const schemaService = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Automatización Empresarial Chile",
    "description": "Automatización de procesos operativos para empresas B2B en Chile. Eliminamos tareas manuales repetitivas y construimos flujos inteligentes que operan 24/7 sin fricción humana.",
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
    "url": "https://geniatechno.com/servicios/automatizacion-empresarial"
};

const beneficios = [
    {
        icon: Clock,
        titulo: "Elimina tareas manuales repetitivas",
        descripcion: "Flujos automáticos que procesan datos, generan reportes y envían alertas sin intervención humana, las 24 horas del día.",
    },
    {
        icon: Zap,
        titulo: "Integración con tus sistemas actuales",
        descripcion: "Conectamos tu ERP, CRM, planillas de Excel o cualquier plataforma existente en un ecosistema unificado y automático.",
    },
    {
        icon: TrendingUp,
        titulo: "ROI medible desde el primer mes",
        descripcion: "Cada automatización se diseña con métricas de retorno claras. Sabes exactamente cuánto tiempo y dinero recuperas.",
    },
    {
        icon: BarChart3,
        titulo: "Trazabilidad operativa total",
        descripcion: "Panel de control en vivo para monitorear cada proceso automatizado. Cero cajas negras, máxima visibilidad.",
    },
];

const casos = [
    { industria: "Seguridad Privada", resultado: "Check-in de guardias reducido un 85% con validación biométrica automática." },
    { industria: "Logística y Transporte", resultado: "Tiempo de respuesta a leads comerciales de 4 horas a menos de 5 minutos." },
    { industria: "Retail B2B", resultado: "Reconciliación de inventario automática: de 3 horas diarias a cero minutos." },
];

export const AutomatizacionEmpresarial = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <div className="min-h-screen bg-[#000000] text-gray-200 font-sans selection:bg-safety selection:text-white relative">
            <Helmet>
                <title>Automatización Empresarial Chile | GenIA Tech — Flujos Inteligentes B2B</title>
                <meta name="description" content="Automatización de procesos empresariales para empresas B2B en Chile. Eliminamos tareas manuales, integramos sistemas y deployamos flujos inteligentes en semanas. Santiago, Chile." />
                <meta name="keywords" content="automatización empresarial Chile, automatización de procesos B2B, automatización industrial Santiago, eliminar tareas manuales empresa, flujos automáticos empresas Chile" />
                <link rel="canonical" href="https://geniatechno.com/servicios/automatizacion-empresarial" />
                <meta property="og:title" content="Automatización Empresarial en Chile | GenIA Tech" />
                <meta property="og:description" content="Automatizamos procesos operativos críticos en empresas B2B chilenas. Flujos inteligentes que trabajan 24/7. Resultados en semanas." />
                <meta property="og:url" content="https://geniatechno.com/servicios/automatizacion-empresarial" />
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
                        <Zap className="w-3.5 h-3.5" /> Servicio — Automatización
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
                        Automatización Empresarial{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-safety to-orange-400">para Empresas en Chile</span>
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                        Eliminamos las tareas manuales que le cuestan tiempo y dinero a tu empresa. Construimos flujos automáticos inteligentes que integran tus sistemas actuales y operan 24/7 sin fricción humana.
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="/#contacto" className="inline-flex items-center gap-2 bg-gradient-to-r from-safety to-orange-500 text-white font-bold py-4 px-8 rounded-full shadow-[0_0_20px_rgba(255,87,34,0.3)] hover:shadow-[0_0_40px_rgba(255,87,34,0.5)] transition-all hover:-translate-y-1">
                            Solicitar Diagnóstico Gratuito <ArrowRight className="w-5 h-5" />
                        </a>
                        <Link to="/casos" className="inline-flex items-center gap-2 border border-gray-700 text-gray-300 hover:text-white font-bold py-4 px-8 rounded-full transition-all hover:border-gray-500">
                            Ver Casos de Éxito
                        </Link>
                    </div>
                </motion.div>

                {/* BENEFICIOS */}
                <section className="mb-24">
                    <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12 tracking-tight">
                        ¿Qué automatizamos en tu empresa?
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {beneficios.map((b, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-[#0A0A0A] border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-colors"
                            >
                                <div className="w-12 h-12 bg-safety/10 border border-safety/20 text-safety rounded-xl flex items-center justify-center mb-5">
                                    <b.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-3">{b.titulo}</h3>
                                <p className="text-gray-400 leading-relaxed">{b.descripcion}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* RESULTADOS REALES */}
                <section className="mb-24 bg-[#050505] border border-gray-800 rounded-[2rem] p-10 md:p-14">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-10 tracking-tight">
                        Resultados reales de automatización en empresas chilenas
                    </h2>
                    <div className="space-y-6">
                        {casos.map((c, i) => (
                            <div key={i} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 border-b border-gray-800 pb-6 last:border-b-0 last:pb-0">
                                <span className="text-xs font-black uppercase tracking-widest text-safety bg-safety/10 border border-safety/20 px-3 py-1.5 rounded-full whitespace-nowrap">
                                    {c.industria}
                                </span>
                                <p className="text-gray-300 font-medium flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                                    {c.resultado}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <div className="text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        ¿Cuánto tiempo pierde tu equipo en tareas manuales hoy?
                    </h2>
                    <p className="text-gray-400 mb-8 max-w-xl mx-auto">Hacemos una auditoría de tus procesos actuales sin costo. En 48 horas te entregamos un mapa de automatización con ROI estimado.</p>
                    <a href="/#contacto" className="inline-flex items-center gap-2 bg-gradient-to-r from-safety to-orange-500 text-white font-bold py-4 px-10 rounded-full shadow-[0_0_20px_rgba(255,87,34,0.3)] hover:shadow-[0_0_40px_rgba(255,87,34,0.5)] transition-all hover:-translate-y-1">
                        Iniciar Diagnóstico Operativo <ArrowRight className="w-5 h-5" />
                    </a>
                </div>
            </main>
        </div>
    );
};
