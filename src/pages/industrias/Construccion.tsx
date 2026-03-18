import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, HardHat, Package, Users, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ParticleBackground } from '../../components/ParticleBackground';

const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Software para Construcción Chile",
    "description": "Control de avance de obra, gestión de bodega y coordinación de subcontratistas con software a medida para empresas constructoras en Chile.",
    "provider": {
        "@type": "ProfessionalService",
        "name": "GenIA Tech SpA",
        "url": "https://geniatechno.com",
        "address": { "@type": "PostalAddress", "addressLocality": "Santiago", "addressRegion": "Región Metropolitana", "addressCountry": "CL" }
    },
    "areaServed": { "@type": "Country", "name": "Chile" },
    "url": "https://geniatechno.com/industrias/construccion"
};

const problemas = [
    {
        icon: FileText,
        titulo: "Control de avance de obra en planillas",
        descripcion: "El estado de avance de cada frente de trabajo se registra en planillas Excel que se actualizan manualmente. Los mandantes y gerencia reciben información con días de retraso.",
    },
    {
        icon: Package,
        titulo: "Sin visibilidad de bodega en tiempo real",
        descripcion: "Los materiales en bodega se controlan con cuadernos o planillas. Las pérdidas por robo, merma o sobrestock son inevitables sin un sistema de control en tiempo real.",
    },
    {
        icon: Users,
        titulo: "Coordinación de subcontratistas sin trazabilidad",
        descripcion: "La gestión de múltiples subcontratistas en obra sin sistema centralizado genera conflictos de cronograma, sobrecostos y dificultad para responsabilizar por defectos.",
    },
];

const modulos = [
    { id: "M-01", titulo: "App de Control de Avance de Obra", descripcion: "Registro digital de avance por partida, frente de trabajo y subcontratista desde dispositivos móviles. Sincronización automática con el dashboard de gerencia." },
    { id: "M-02", titulo: "Gestión de Bodega y Stock de Materiales", descripcion: "Control de entradas, salidas y saldo de materiales en tiempo real con alertas de stock mínimo. Elimina pérdidas por sobrestock y faltantes críticos." },
    { id: "M-03", titulo: "Coordinación de Subcontratistas", descripcion: "Portal de subcontratistas con asignación de tareas, plazos y responsables. Registro de recepciones de trabajo, observaciones y firma de conformidad digital." },
    { id: "M-04", titulo: "Reportes de Avance para Mandantes", descripcion: "Generación automática de informes de avance con fotos, porcentajes y comparativa vs. programa. Envío programado a mandantes sin intervención del jefe de obra." },
    { id: "M-05", titulo: "Control de Asistencia en Obra", descripcion: "Registro de asistencia de operarios con validación por QR o biometría en terreno. Datos para liquidación de sueldos sin registro manual." },
    { id: "M-06", titulo: "Dashboard de Costos vs. Presupuesto", descripcion: "Comparativa en tiempo real de costos ejecutados versus presupuesto original por partida. Alertas automáticas ante desviaciones que superen umbrales definidos." },
];

const roi = [
    { metrica: "Reducción de pérdidas en bodega de obra", valor: "50%" },
    { metrica: "Tiempo en generar reportes de avance", valor: "−8 hrs" },
    { metrica: "Reducción de sobrestock de materiales", valor: "30%" },
];

export const Construccion = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <div className="min-h-screen bg-[#000000] text-gray-200 font-sans selection:bg-safety selection:text-white relative">
            <Helmet>
                <title>Software para Construcción en Chile | GenIA Tech — Control de Obra</title>
                <meta name="description" content="Control de avance de obra, gestión de bodega y reportes automáticos para mandantes. Software a medida para empresas constructoras en Chile. Santiago." />
                <meta name="keywords" content="software construcción Chile, control avance obra, gestión bodega construcción, software constructoras Chile, digitalización obras Santiago" />
                <link rel="canonical" href="https://geniatechno.com/industrias/construccion" />
                <meta property="og:title" content="Software para Construcción en Chile | GenIA Tech" />
                <meta property="og:description" content="Control de obra, bodega y subcontratistas con software a medida para constructoras en Chile." />
                <meta property="og:url" content="https://geniatechno.com/industrias/construccion" />
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
                        <HardHat className="w-3.5 h-3.5" /> Industria — Construcción
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
                        GenIA Tech para{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-safety to-orange-400">Construcción en Chile</span>
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                        Digitalizamos el control de obra, la gestión de bodega y la coordinación de subcontratistas. Reportes automáticos para mandantes y visibilidad total de costos en tiempo real.
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
                    <p className="text-gray-500 text-center mb-12 max-w-xl mx-auto">Los cuellos de botella más comunes en empresas constructoras en Chile.</p>
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4 tracking-tight">Módulos para tu constructora</h2>
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight text-center">ROI estimado para construcción</h2>
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

                <div className="text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">¿Tu obra sigue con cuadernos y planillas?</h2>
                    <p className="text-gray-400 mb-8 max-w-xl mx-auto">Hacemos una auditoría de tus procesos actuales sin costo. En 48 horas te entregamos un mapa de digitalización con ROI estimado.</p>
                    <Link to="/contacto" className="inline-flex items-center gap-2 bg-gradient-to-r from-safety to-orange-500 text-white font-bold py-4 px-10 rounded-full shadow-[0_0_20px_rgba(255,87,34,0.3)] hover:shadow-[0_0_40px_rgba(255,87,34,0.5)] transition-all hover:-translate-y-1">
                        Iniciar Diagnóstico Operativo <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </main>
        </div>
    );
};
