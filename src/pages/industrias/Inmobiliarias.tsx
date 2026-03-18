import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Building2, MessageSquare, FileText, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ParticleBackground } from '../../components/ParticleBackground';

const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "GenIA Tech para Inmobiliarias",
    "provider": {
        "@type": "Organization",
        "name": "GenIA Tech",
        "url": "https://geniatechno.com"
    },
    "areaServed": "Chile",
    "url": "https://geniatechno.com/industrias/inmobiliarias"
};

const problemas = [
    {
        icon: MessageSquare,
        titulo: "Leads sin seguimiento sistemático",
        descripcion: "Los portales inmobiliarios generan consultas que se pierden en WhatsApp, correos y llamadas sin CRM. El tiempo de respuesta supera las 4 horas y los prospectos se enfrían.",
    },
    {
        icon: FileText,
        titulo: "Contratos y promesas en papel",
        descripcion: "Redacción manual de contratos, promesas y mandatos consume horas de trabajo. Los errores en cláusulas y las demoras en firma retrasan los cierres.",
    },
    {
        icon: BarChart3,
        titulo: "Sin visibilidad real del inventario",
        descripcion: "El stock de propiedades disponibles se gestiona en planillas de Excel. No hay visibilidad instantánea de qué está disponible, arrendado o en proceso.",
    },
];

const modulos = [
    { id: "M-01", titulo: "CRM Inmobiliario Inteligente", descripcion: "Pipeline de propiedades y clientes con scoring automático de leads. Cada consulta se asigna al agente correcto sin intervención manual." },
    { id: "M-02", titulo: "Chatbot WhatsApp para Leads", descripcion: "Respuesta automática 24/7 a consultas de portales y redes sociales. Filtra, califica y agenda visitas sin que el agente intervenga fuera de horario." },
    { id: "M-03", titulo: "Generación de Contratos con IA", descripcion: "Contratos de arriendo, promesas y mandatos generados en segundos desde plantillas validadas por abogados. Firma electrónica integrada." },
    { id: "M-04", titulo: "Portal de Disponibilidad en Tiempo Real", descripcion: "Dashboard actualizado automáticamente con el estado de cada propiedad: disponible, en proceso, arrendada o vendida." },
    { id: "M-05", titulo: "Automatización de Cobranza", descripcion: "Recordatorios automáticos de pago de arriendos por WhatsApp. Flujos de aviso, mora y gestión de cobranza sin intervención del agente." },
    { id: "M-06", titulo: "Reportes de Comisiones Automáticos", descripcion: "Cálculo y distribución automática de comisiones por cierre. Dashboard de rendimiento por agente y cartera de propiedades." },
];

const roi = [
    { metrica: "Reducción en tiempo de respuesta a leads", valor: "85%" },
    { metrica: "Ahorro en horas administrativas semanales", valor: "12 hrs" },
    { metrica: "Aceleración en cierre de contratos", valor: "40%" },
];

export const Inmobiliarias = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <div className="min-h-screen bg-[#000000] text-gray-200 font-sans selection:bg-safety selection:text-white relative">
            <Helmet>
                <title>Software para Inmobiliarias Chile | GenIA Tech — CRM y Automatización</title>
                <meta name="description" content="CRM, bot WhatsApp y automatización para inmobiliarias en Chile. Gestión leads, visitas y agentes. Software a medida deployado en semanas." />
                <meta name="keywords" content="software inmobiliario Chile, CRM para inmobiliarias, automatización inmobiliaria Santiago, gestión de propiedades software, chatbot leads inmobiliarios" />
                <link rel="canonical" href="https://geniatechno.com/industrias/inmobiliarias" />
                <meta property="og:title" content="Inmobiliarias en Chile | GenIA Tech — Automatización e IA" />
                <meta property="og:description" content="CRM, automatización y software a medida para inmobiliarias en Chile. Bot WhatsApp calificador, gestión de visitas y dashboard gerente. Diagnóstico gratuito." />
                <meta property="og:url" content="https://geniatechno.com/industrias/inmobiliarias" />
                <meta property="og:type" content="website" />
                <script type="application/ld+json">{JSON.stringify(schema)}</script>
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
                        <Building2 className="w-3.5 h-3.5" /> Industria — Inmobiliarias
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
                        GenIA Tech para{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-safety to-orange-400">Inmobiliarias en Chile</span>
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                        Construimos el stack tecnológico que necesita tu corredora o inmobiliaria para gestionar leads, contratos y arriendos con automatización real. Sin planillas, sin respuestas tardías.
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contacto" className="inline-flex items-center gap-2 bg-gradient-to-r from-safety to-orange-500 text-white font-bold py-4 px-8 rounded-full shadow-[0_0_20px_rgba(255,87,34,0.3)] hover:shadow-[0_0_40px_rgba(255,87,34,0.5)] transition-all hover:-translate-y-1">
                            Solicitar Diagnóstico Gratuito <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link to="/casos" className="inline-flex items-center gap-2 border border-gray-700 text-gray-300 hover:text-white font-bold py-4 px-8 rounded-full transition-all hover:border-gray-500">
                            Ver Casos de Éxito
                        </Link>
                    </div>
                </motion.div>

                {/* EL PROBLEMA QUE RESOLVEMOS */}
                <section className="mb-24">
                    <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4 tracking-tight">
                        El problema que resolvemos
                    </h2>
                    <p className="text-gray-500 text-center mb-12 max-w-xl mx-auto">Los cuellos de botella operativos más comunes en inmobiliarias chilenas.</p>
                    <div className="grid md:grid-cols-3 gap-6">
                        {problemas.map((p, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-[#0A0A0A] border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-colors"
                            >
                                <div className="w-12 h-12 bg-safety/10 border border-safety/20 text-safety rounded-xl flex items-center justify-center mb-5">
                                    <p.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-3">{p.titulo}</h3>
                                <p className="text-gray-400 leading-relaxed text-sm">{p.descripcion}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* MÓDULOS */}
                <section className="mb-24">
                    <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4 tracking-tight">
                        Módulos para tu inmobiliaria
                    </h2>
                    <p className="text-gray-500 text-center mb-12 max-w-xl mx-auto">Cada módulo se implementa de forma independiente o como suite completa.</p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {modulos.map((m, i) => (
                            <motion.div
                                key={m.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: i * 0.07 }}
                                className="bg-[#0A0A0A] border border-gray-800 rounded-2xl p-7 hover:border-gray-700 transition-colors"
                            >
                                <span className="text-xs font-black text-safety bg-safety/10 border border-safety/20 px-3 py-1.5 rounded-full mb-4 inline-block">{m.id}</span>
                                <h3 className="text-base font-bold text-white mb-2">{m.titulo}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{m.descripcion}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* ROI ESTIMADO */}
                <section className="mb-24 bg-[#050505] border border-gray-800 rounded-[2rem] p-10 md:p-14">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight text-center">
                        ROI estimado para inmobiliarias
                    </h2>
                    <p className="text-gray-500 text-center mb-10 max-w-lg mx-auto">Resultados típicos en los primeros 90 días de implementación.</p>
                    <div className="grid md:grid-cols-3 gap-6">
                        {roi.map((r, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-[#0A0A0A] border border-safety/20 rounded-2xl p-8 text-center"
                            >
                                <div className="text-4xl md:text-5xl font-black text-safety mb-3">{r.valor}</div>
                                <p className="text-gray-400 text-sm leading-relaxed">{r.metrica}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* PREGUNTAS FRECUENTES */}
                <section className="mb-24">
                    <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4 tracking-tight">Preguntas frecuentes</h2>
                    <p className="text-gray-500 text-center mb-12 max-w-xl mx-auto">Lo que nos preguntan las inmobiliarias antes de implementar.</p>
                    <div className="space-y-4 max-w-3xl mx-auto">
                        {[
                            { p: "¿Cuánto tarda implementar el CRM inmobiliario?", r: "El CRM base se configura en 5 días hábiles. Los flujos de WhatsApp y automatización de contratos se agregan en una segunda fase de 2 semanas. La mayoría de las inmobiliarias opera en producción antes del primer mes." },
                            { p: "¿Funciona con los portales actuales como Portal Inmobiliario?", r: "Sí. Integramos con los principales portales inmobiliarios chilenos mediante webhooks o scraping autorizado. Cada consulta que entra al portal llega automáticamente al CRM y activa el flujo de seguimiento." },
                            { p: "¿Pueden varios agentes usar el sistema al mismo tiempo?", r: "El sistema es multiusuario desde el diseño. Cada agente tiene su propio panel con su cartera de clientes, sus propiedades asignadas y su pipeline. El gerente ve el rendimiento consolidado de todo el equipo." },
                        ].map((f, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-[#0A0A0A] border border-gray-800 rounded-2xl p-7">
                                <h3 className="text-base font-bold text-white mb-3">{f.p}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{f.r}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <div className="text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        ¿Tu inmobiliaria sigue operando con planillas y WhatsApp?
                    </h2>
                    <p className="text-gray-400 mb-8 max-w-xl mx-auto">Hacemos una auditoría de tus procesos actuales sin costo. En 48 horas te entregamos un mapa de automatización con ROI estimado.</p>
                    <Link to="/contacto" className="inline-flex items-center gap-2 bg-gradient-to-r from-safety to-orange-500 text-white font-bold py-4 px-10 rounded-full shadow-[0_0_20px_rgba(255,87,34,0.3)] hover:shadow-[0_0_40px_rgba(255,87,34,0.5)] transition-all hover:-translate-y-1">
                        Iniciar Diagnóstico Operativo <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </main>
        </div>
    );
};
