import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Stethoscope, Calendar, FileText, Package } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ParticleBackground } from '../../components/ParticleBackground';

const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Software para Clínicas y Salud Chile",
    "description": "Agendamiento online, recordatorios automáticos por WhatsApp y ficha clínica digital para clínicas y centros de salud en Chile.",
    "provider": {
        "@type": "ProfessionalService",
        "name": "GenIA Tech SpA",
        "url": "https://geniatechno.com",
        "address": { "@type": "PostalAddress", "addressLocality": "Santiago", "addressRegion": "Región Metropolitana", "addressCountry": "CL" }
    },
    "areaServed": { "@type": "Country", "name": "Chile" },
    "url": "https://geniatechno.com/industrias/clinicas-salud"
};

const problemas = [
    {
        icon: Calendar,
        titulo: "Agendamiento de horas por teléfono",
        descripcion: "El proceso de agendar, reagendar y confirmar horas médicas se gestiona por llamada telefónica. Las recepcionistas dedican horas a tareas que se pueden automatizar completamente.",
    },
    {
        icon: FileText,
        titulo: "Alta tasa de inasistencias sin aviso previo",
        descripcion: "Sin recordatorios automáticos, los pacientes olvidan sus citas o no avisan que no asistirán. Las horas perdidas representan ingresos no recuperables y agenda desperdiciada.",
    },
    {
        icon: Package,
        titulo: "Gestión de inventario médico en papel",
        descripcion: "El control de medicamentos, insumos y equipos médicos se maneja en cuadernos o planillas. Los quiebres de stock afectan la atención y los excesos generan pérdidas por vencimiento.",
    },
];

const modulos = [
    { id: "M-01", titulo: "Sistema de Agendamiento Online", descripcion: "Portal web y app móvil para que los pacientes agenden, reagenden y cancelen horas 24/7. Sincronización automática con la agenda de cada profesional." },
    { id: "M-02", titulo: "Recordatorios Automáticos por WhatsApp", descripcion: "Envío automático de confirmación, recordatorio a 48h y 2h antes de la cita. Los pacientes confirman o cancelan con un mensaje, liberando agenda disponible." },
    { id: "M-03", titulo: "Ficha Clínica Digital", descripcion: "Registro digital de anamnesis, diagnósticos, prescripciones e indicaciones por consulta. Historial completo del paciente accesible desde cualquier dispositivo autorizado." },
    { id: "M-04", titulo: "Gestión de Inventario Médico", descripcion: "Control de stock de medicamentos, insumos y equipos con alertas de mínimo y vencimiento. Solicitudes de reposición automáticas al llegar al punto de reorden." },
    { id: "M-05", titulo: "Portal de Resultados para Pacientes", descripcion: "Entrega digital de resultados de exámenes, informes y recetas. El paciente recibe un link seguro por WhatsApp o correo sin necesidad de ir a buscar documentos." },
    { id: "M-06", titulo: "Dashboard de Ocupación y Eficiencia", descripcion: "Panel con tasa de ocupación de agenda, inasistencias, tiempos de espera y rendimiento por profesional. Datos para optimizar la operación del centro." },
];

const roi = [
    { metrica: "Reducción de inasistencias a citas", valor: "45%" },
    { metrica: "Reducción de tiempo en agendamiento manual", valor: "70%" },
    { metrica: "Mejora en satisfacción de pacientes", valor: "+30%" },
];

export const ClinicasSalud = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <div className="min-h-screen bg-[#000000] text-gray-200 font-sans selection:bg-safety selection:text-white relative">
            <Helmet>
                <title>Software para Clínicas y Salud en Chile | GenIA Tech — Agendamiento y Automatización</title>
                <meta name="description" content="Agendamiento online, recordatorios automáticos por WhatsApp y ficha clínica digital para clínicas, consultorios y centros de salud en Chile. Reduce inasistencias un 45%." />
                <meta name="keywords" content="software clínicas Chile, agendamiento médico online, recordatorios WhatsApp salud, ficha clínica digital Chile, automatización clínicas Santiago" />
                <link rel="canonical" href="https://geniatechno.com/industrias/clinicas-salud" />
                <meta property="og:title" content="Software para Clínicas y Salud en Chile | GenIA Tech" />
                <meta property="og:description" content="Agendamiento online, recordatorios automáticos y ficha clínica digital para centros de salud en Chile." />
                <meta property="og:url" content="https://geniatechno.com/industrias/clinicas-salud" />
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
                        <Stethoscope className="w-3.5 h-3.5" /> Industria — Clínicas y Salud
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
                        GenIA Tech para{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-safety to-orange-400">Clínicas y Salud en Chile</span>
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                        Automatizamos el agendamiento, los recordatorios y la gestión de pacientes para clínicas y centros de salud en Chile. Menos trabajo administrativo, más tiempo para atender.
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
                    <p className="text-gray-500 text-center mb-12 max-w-xl mx-auto">Los cuellos de botella más frecuentes en clínicas y centros de salud en Chile.</p>
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4 tracking-tight">Módulos para tu clínica o centro de salud</h2>
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight text-center">ROI estimado para clínicas y salud</h2>
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">¿Tu clínica pierde horas en llamadas de agendamiento?</h2>
                    <p className="text-gray-400 mb-8 max-w-xl mx-auto">Hacemos una auditoría de tus procesos actuales sin costo. En 48 horas te entregamos un mapa de automatización con ROI estimado.</p>
                    <Link to="/contacto" className="inline-flex items-center gap-2 bg-gradient-to-r from-safety to-orange-500 text-white font-bold py-4 px-10 rounded-full shadow-[0_0_20px_rgba(255,87,34,0.3)] hover:shadow-[0_0_40px_rgba(255,87,34,0.5)] transition-all hover:-translate-y-1">
                        Iniciar Diagnóstico Operativo <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </main>
        </div>
    );
};
