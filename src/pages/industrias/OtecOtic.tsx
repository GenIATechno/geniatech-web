import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, GraduationCap, FileText, Calendar, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ParticleBackground } from '../../components/ParticleBackground';

const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Software para OTEC y OTIC Chile",
    "description": "Gestión de matrículas, automatización de reportes SENCE y seguimiento de asistencia para organismos técnicos de capacitación en Chile.",
    "provider": {
        "@type": "ProfessionalService",
        "name": "GenIA Tech SpA",
        "url": "https://geniatechno.com",
        "address": { "@type": "PostalAddress", "addressLocality": "Santiago", "addressRegion": "Región Metropolitana", "addressCountry": "CL" }
    },
    "areaServed": { "@type": "Country", "name": "Chile" },
    "url": "https://geniatechno.com/industrias/otec-otic"
};

const problemas = [
    {
        icon: FileText,
        titulo: "Reportes SENCE y OTIC en Excel manual",
        descripcion: "La consolidación de asistencias, evaluaciones y actas para los reportes regulatorios se hace manualmente en Excel. Los errores generan observaciones y el proceso consume días de trabajo administrativo.",
    },
    {
        icon: Users,
        titulo: "Matrículas gestionadas por correo y teléfono",
        descripcion: "El proceso de inscripción, recepción de documentos y confirmación de matrícula se hace sin sistema. Los datos de cada inscrito se registran en planillas que nadie centraliza.",
    },
    {
        icon: Calendar,
        titulo: "Coordinación de docentes y salas sin trazabilidad",
        descripcion: "La asignación de docentes a cursos, reserva de salas y comunicación de cambios se gestiona por WhatsApp o correo. Los cruces de agenda y los olvidos generan problemas operativos constantes.",
    },
];

const modulos = [
    { id: "M-01", titulo: "Portal de Matrículas e Inscripciones Online", descripcion: "Formulario digital de inscripción con carga de documentos, validación automática de requisitos y confirmación de matrícula. Sin papel, sin correos manuales." },
    { id: "M-02", titulo: "Automatización de Reportes SENCE/OTIC", descripcion: "Generación automática de actas, listas de asistencia y reportes regulatorios en los formatos requeridos. Reducción del 75% en tiempo de preparación de informes." },
    { id: "M-03", titulo: "Gestión de Docentes y Calendario de Cursos", descripcion: "Asignación de docentes a cursos con control de disponibilidad, alertas de conflicto y comunicación automática de cambios. Agenda centralizada en tiempo real." },
    { id: "M-04", titulo: "Plataforma de Seguimiento de Asistencia", descripcion: "Registro de asistencia por QR o biometría en cada sesión. Alertas automáticas ante inasistencias y cálculo de porcentaje para certificación." },
    { id: "M-05", titulo: "Comunicación con Inscritos por WhatsApp", descripcion: "Flujos automáticos de confirmación de matrícula, recordatorio de clases, envío de material y resultados de evaluación por WhatsApp sin intervención del equipo." },
    { id: "M-06", titulo: "Dashboard de Indicadores de Capacitación", descripcion: "Panel ejecutivo con tasa de ocupación de cursos, asistencia promedio, aprobación por programa y margen por curso. Datos para planificación y licitaciones." },
];

const roi = [
    { metrica: "Reducción en tiempo de reporte a SENCE/OTIC", valor: "75%" },
    { metrica: "Aceleración en procesamiento de matrículas", valor: "3×" },
    { metrica: "Reducción de incidencias administrativas", valor: "60%" },
];

export const OtecOtic = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <div className="min-h-screen bg-[#000000] text-gray-200 font-sans selection:bg-safety selection:text-white relative">
            <Helmet>
                <title>Software para OTEC y OTIC en Chile | GenIA Tech — Gestión de Capacitación</title>
                <meta name="description" content="Software para OTEC y OTIC en Chile. Matrículas online, automatización de reportes SENCE, seguimiento de asistencia y comunicación con inscritos por WhatsApp." />
                <meta name="keywords" content="software OTEC Chile, sistema OTIC Chile, automatización reportes SENCE, gestión matrículas capacitación, digitalización OTEC Santiago" />
                <link rel="canonical" href="https://geniatechno.com/industrias/otec-otic" />
                <meta property="og:title" content="Software para OTEC y OTIC en Chile | GenIA Tech" />
                <meta property="og:description" content="Matrículas online, reportes SENCE automáticos y seguimiento de asistencia para OTEC y OTIC en Chile." />
                <meta property="og:url" content="https://geniatechno.com/industrias/otec-otic" />
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
                        <GraduationCap className="w-3.5 h-3.5" /> Industria — OTEC / OTIC
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
                        GenIA Tech para{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-safety to-orange-400">OTEC y OTIC en Chile</span>
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                        Automatizamos la gestión de matrículas, los reportes regulatorios y la comunicación con inscritos para organismos técnicos de capacitación en Chile. Menos administración, más cursos.
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
                    <p className="text-gray-500 text-center mb-12 max-w-xl mx-auto">Los cuellos de botella más frecuentes en OTEC y OTIC en Chile.</p>
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4 tracking-tight">Módulos para tu OTEC o OTIC</h2>
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight text-center">ROI estimado para OTEC y OTIC</h2>
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">¿Tu equipo dedica días a preparar reportes SENCE?</h2>
                    <p className="text-gray-400 mb-8 max-w-xl mx-auto">Hacemos una auditoría de tus procesos actuales sin costo. En 48 horas te entregamos un mapa de automatización con ROI estimado.</p>
                    <Link to="/contacto" className="inline-flex items-center gap-2 bg-gradient-to-r from-safety to-orange-500 text-white font-bold py-4 px-10 rounded-full shadow-[0_0_20px_rgba(255,87,34,0.3)] hover:shadow-[0_0_40px_rgba(255,87,34,0.5)] transition-all hover:-translate-y-1">
                        Iniciar Diagnóstico Operativo <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </main>
        </div>
    );
};
