import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Mountain, Shield, Wrench, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ParticleBackground } from '../../components/ParticleBackground';

const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "GenIA Tech para Minería",
    "provider": {
        "@type": "Organization",
        "name": "GenIA Tech",
        "url": "https://geniatechno.com"
    },
    "areaServed": "Chile",
    "url": "https://geniatechno.com/industrias/mineria"
};

const problemas = [
    {
        icon: Shield,
        titulo: "Cumplimiento HSE sin trazabilidad digital",
        descripcion: "Los protocolos de seguridad, permisos de trabajo y registros de incidentes se gestionan en papel. Las auditorías internas y externas consumen semanas de recopilación manual.",
    },
    {
        icon: Wrench,
        titulo: "Mantenimiento de equipos sin sistema predictivo",
        descripcion: "Los programas de mantenimiento preventivo se manejan en planillas. Los paros no planificados por falla de equipos generan pérdidas de producción y costos de emergencia.",
    },
    {
        icon: BarChart3,
        titulo: "Sin visibilidad en tiempo real de la faena",
        descripcion: "Los reportes de producción por turno llegan con horas de retraso. La gerencia toma decisiones con información desactualizada que no refleja el estado real de las operaciones.",
    },
];

const modulos = [
    { id: "M-01", titulo: "App de Control de Faena en Terreno", descripcion: "Registro digital de producción, consumo de insumos y estado de equipos por turno desde dispositivos móviles. Datos disponibles en gerencia en tiempo real." },
    { id: "M-02", titulo: "Gestión de Protocolos HSE", descripcion: "Digitalización de permisos de trabajo, ART, PETS y registros de incidentes. Flujos de aprobación automatizados y trazabilidad completa para auditorías." },
    { id: "M-03", titulo: "Control de Equipos y Mantención Preventiva", descripcion: "Plan de mantenimiento preventivo con alertas automáticas por horómetro o calendario. Historial completo de intervenciones y costos por equipo." },
    { id: "M-04", titulo: "Gestión de Accesos y Permisos de Trabajo", descripcion: "Control digital de accesos a zonas restringidas, vigencia de capacitaciones y habilitaciones del personal. Alertas automáticas ante vencimientos." },
    { id: "M-05", titulo: "Dashboard de Producción por Turno", descripcion: "Panel ejecutivo con KPIs de producción, disponibilidad de equipos y avance vs. plan por turno y guardia. Comparativa histórica integrada." },
    { id: "M-06", titulo: "Alertas de Incidentes en Tiempo Real", descripcion: "Sistema de notificación inmediata ante incidentes, accidentes o condiciones de riesgo. Escalamiento automático a supervisores y gerencia con protocolo digital." },
];

const roi = [
    { metrica: "Mejora en cumplimiento de protocolos HSE", valor: "95%" },
    { metrica: "Reducción en tiempo de auditoría", valor: "70%" },
    { metrica: "Reducción de paros no planificados por falla", valor: "40%" },
];

export const Mineria = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <div className="min-h-screen bg-[#000000] text-gray-200 font-sans selection:bg-safety selection:text-white relative">
            <Helmet>
                <title>Software Minería Chile | GenIA Tech — Control Operativo Faena</title>
                <meta name="description" content="Control accesos faena, permisos trabajo y trazabilidad equipos para minería Chile. Software operativo a medida. Diagnóstico gratuito." />
                <meta name="keywords" content="software minería Chile, control faenas mineras, gestión HSE minería, mantenimiento equipos mina, digitalización minería Chile" />
                <link rel="canonical" href="https://geniatechno.com/industrias/mineria" />
                <meta property="og:title" content="Minería en Chile | GenIA Tech — Automatización e IA" />
                <meta property="og:description" content="Sistema permisos faena, control accesos y trazabilidad equipos para empresas mineras en Chile. Software operativo a medida. Diagnóstico gratuito." />
                <meta property="og:url" content="https://geniatechno.com/industrias/mineria" />
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

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-20 max-w-4xl mx-auto">
                    <span className="inline-flex items-center gap-2 bg-[#111] border border-gray-800 text-safety text-xs font-bold px-4 py-2 rounded-full mb-6 uppercase tracking-widest">
                        <Mountain className="w-3.5 h-3.5" /> Industria — Minería
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
                        GenIA Tech para{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-safety to-orange-400">Minería en Chile</span>
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                        Digitalizamos el control de faenas, la gestión de HSE y el mantenimiento de equipos para empresas mineras en Chile. Visibilidad total de operaciones desde cualquier dispositivo.
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

                <section className="mb-24">
                    <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4 tracking-tight">El problema que resolvemos</h2>
                    <p className="text-gray-500 text-center mb-12 max-w-xl mx-auto">Los cuellos de botella operativos más frecuentes en empresas mineras chilenas.</p>
                    <div className="grid md:grid-cols-3 gap-6">
                        {problemas.map((p, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ delay: i * 0.1 }} className="bg-[#0A0A0A] border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-colors">
                                <div className="w-12 h-12 bg-safety/10 border border-safety/20 text-safety rounded-xl flex items-center justify-center mb-5"><p.icon className="w-6 h-6" /></div>
                                <h3 className="text-lg font-bold text-white mb-3">{p.titulo}</h3>
                                <p className="text-gray-400 leading-relaxed text-sm">{p.descripcion}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <section className="mb-24">
                    <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4 tracking-tight">Módulos para tu operación minera</h2>
                    <p className="text-gray-500 text-center mb-12 max-w-xl mx-auto">Cada módulo se implementa de forma independiente o como suite completa.</p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {modulos.map((m, i) => (
                            <motion.div key={m.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ delay: i * 0.07 }} className="bg-[#0A0A0A] border border-gray-800 rounded-2xl p-7 hover:border-gray-700 transition-colors">
                                <span className="text-xs font-black text-safety bg-safety/10 border border-safety/20 px-3 py-1.5 rounded-full mb-4 inline-block">{m.id}</span>
                                <h3 className="text-base font-bold text-white mb-2">{m.titulo}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{m.descripcion}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <section className="mb-24 bg-[#050505] border border-gray-800 rounded-[2rem] p-10 md:p-14">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight text-center">ROI estimado para minería</h2>
                    <p className="text-gray-500 text-center mb-10 max-w-lg mx-auto">Resultados típicos en los primeros 90 días de implementación.</p>
                    <div className="grid md:grid-cols-3 gap-6">
                        {roi.map((r, i) => (
                            <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-[#0A0A0A] border border-safety/20 rounded-2xl p-8 text-center">
                                <div className="text-4xl md:text-5xl font-black text-safety mb-3">{r.valor}</div>
                                <p className="text-gray-400 text-sm leading-relaxed">{r.metrica}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* PREGUNTAS FRECUENTES */}
                <section className="mb-24">
                    <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4 tracking-tight">Preguntas frecuentes</h2>
                    <p className="text-gray-500 text-center mb-12 max-w-xl mx-auto">Lo que nos preguntan las empresas mineras antes de implementar.</p>
                    <div className="space-y-4 max-w-3xl mx-auto">
                        {[
                            { p: "¿El sistema cumple con los estándares regulatorios mineros en Chile?", r: "El sistema se diseña para cumplir con los requerimientos de SERNAGEOMIN en materia de registro de accidentes, permisos de trabajo y gestión de riesgos. Los formatos de reporte son configurables según el reglamento específico de cada faena." },
                            { p: "¿Funciona en faenas sin conectividad permanente?", r: "Sí. Los módulos de terreno operan offline con sincronización automática. Los permisos de trabajo, registros de acceso y ART se completan sin señal y se envían al sistema central cuando hay conectividad disponible." },
                            { p: "¿Cuánto tarda implementar el control de accesos en una faena activa?", r: "El módulo de control de accesos se implementa en paralelo con la operación en 2 semanas. Se instalan los puntos de control y se registra al personal existente sin detener la producción. La migración desde papel es gradual y progresiva." },
                        ].map((f, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-[#0A0A0A] border border-gray-800 rounded-2xl p-7">
                                <h3 className="text-base font-bold text-white mb-3">{f.p}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{f.r}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <div className="text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">¿Tu faena opera sin visibilidad en tiempo real?</h2>
                    <p className="text-gray-400 mb-8 max-w-xl mx-auto">Hacemos una auditoría de tus procesos actuales sin costo. En 48 horas te entregamos un mapa de digitalización con ROI estimado.</p>
                    <Link to="/contacto" className="inline-flex items-center gap-2 bg-gradient-to-r from-safety to-orange-500 text-white font-bold py-4 px-10 rounded-full shadow-[0_0_20px_rgba(255,87,34,0.3)] hover:shadow-[0_0_40px_rgba(255,87,34,0.5)] transition-all hover:-translate-y-1">
                        Iniciar Diagnóstico Operativo <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </main>
        </div>
    );
};
