import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Shield, AlertTriangle, Clock, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ParticleBackground } from '../../components/ParticleBackground';

const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "GenIA Tech para Seguridad Privada",
    "provider": {
        "@type": "Organization",
        "name": "GenIA Tech",
        "url": "https://geniatechno.com"
    },
    "areaServed": "Chile",
    "url": "https://geniatechno.com/industrias/seguridad-privada"
};

const problemas = [
    {
        icon: Clock,
        titulo: "Control de guardias en papel y radio",
        descripcion: "Las rondas y check-in de guardias se registran en papel o por radio. Sin trazabilidad digital, no se puede verificar que los turnos se cumplan ni el recorrido de cada guardia.",
    },
    {
        icon: AlertTriangle,
        titulo: "Sin trazabilidad de incidentes en tiempo real",
        descripcion: "Los incidentes se reportan por llamada telefónica. La central no tiene visibilidad instantánea del estado de cada punto de seguridad ni del agente que atendió el evento.",
    },
    {
        icon: BarChart3,
        titulo: "Reportes manuales a clientes que toman horas",
        descripcion: "Cada reporte semanal o mensual para los clientes se elabora manualmente consolidando registros en papel. El proceso toma horas y es propenso a errores.",
    },
];

const modulos = [
    { id: "M-01", titulo: "App de Check-in para Guardias", descripcion: "Validación de rondas con GPS, QR y biometría desde el celular del guardia. Registro automático de hora, ubicación y evidencia fotográfica en cada punto de control." },
    { id: "M-02", titulo: "Panel Operacional en Tiempo Real", descripcion: "Dashboard centralizado para operadores que muestra el estado de cada guardia, punto de control e incidente activo. Alertas automáticas ante ausencias o desvíos de ruta." },
    { id: "M-03", titulo: "Gestión de Incidentes con Evidencia", descripcion: "Módulo de reporte de incidentes con fotos, videos y ubicación GPS desde el teléfono del guardia. Trazabilidad completa del evento y cierre con firma digital." },
    { id: "M-04", titulo: "Comunicación Guardias-Central por WhatsApp", descripcion: "Bot de WhatsApp para comunicación operativa. Los guardias reportan novedades, solicitan apoyo y reciben instrucciones sin salir de la app de mensajería." },
    { id: "M-05", titulo: "Reportes Automáticos para Clientes", descripcion: "Generación y envío automático de reportes de turno, incidentes y cumplimiento de rondas para cada cliente contratante. Sin intervención del operador." },
    { id: "M-06", titulo: "Control de Asistencia y Turnos", descripcion: "Gestión automática de turnos rotativos, horas extras y asistencia. Integración con sistemas de nómina para eliminar cálculos manuales." },
];

const roi = [
    { metrica: "Reducción en tiempo de check-in de guardias", valor: "85%" },
    { metrica: "Reportes a clientes automatizados", valor: "100%" },
    { metrica: "Reducción en tiempo de respuesta ante incidentes", valor: "60%" },
];

export const SeguridadPrivada = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <div className="min-h-screen bg-[#000000] text-gray-200 font-sans selection:bg-safety selection:text-white relative">
            <Helmet>
                <title>Software Seguridad Privada Chile | GenIA Tech — Control Guardias</title>
                <meta name="description" content="App rondas guardias, dashboard operadores y control turnos para seguridad privada en Chile. Caso real: Inout Seguridad. Diagnóstico gratuito." />
                <meta name="keywords" content="software seguridad privada Chile, app guardias Chile, control rondas guardias, sistema seguridad empresas Chile, automatización seguridad Santiago" />
                <link rel="canonical" href="https://geniatechno.com/industrias/seguridad-privada" />
                <meta property="og:title" content="Seguridad Privada en Chile | GenIA Tech — Automatización e IA" />
                <meta property="og:description" content="App rondas guardias, dashboard operadores y automatización para empresas de seguridad privada en Chile. Sistema probado con Inout Seguridad. Diagnóstico gratuito." />
                <meta property="og:url" content="https://geniatechno.com/industrias/seguridad-privada" />
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
                        <Shield className="w-3.5 h-3.5" /> Industria — Seguridad Privada
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
                        GenIA Tech para{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-safety to-orange-400">Seguridad Privada en Chile</span>
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                        Desarrollamos la plataforma operacional que necesita tu empresa de seguridad: app de guardias con GPS, panel de control centralizado y reportes automáticos. Caso real: Inout Seguridad.
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

                {/* CASO REAL BADGE */}
                <div className="mb-16 bg-[#0A0A0A] border border-safety/30 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-4 max-w-2xl mx-auto text-center sm:text-left">
                    <div className="w-12 h-12 bg-safety/10 border border-safety/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Shield className="w-6 h-6 text-safety" />
                    </div>
                    <div>
                        <span className="text-xs font-black text-safety uppercase tracking-widest">Caso Real</span>
                        <p className="text-white font-bold mt-0.5">Inout Seguridad — App de guardias + Dashboard operadores</p>
                        <p className="text-gray-400 text-sm mt-1">Check-in de guardias reducido un 85% con validación GPS automática. Reportes a clientes 100% automatizados.</p>
                    </div>
                </div>

                {/* EL PROBLEMA QUE RESOLVEMOS */}
                <section className="mb-24">
                    <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4 tracking-tight">
                        El problema que resolvemos
                    </h2>
                    <p className="text-gray-500 text-center mb-12 max-w-xl mx-auto">Los cuellos de botella operativos más comunes en empresas de seguridad privada en Chile.</p>
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
                        Módulos para tu empresa de seguridad
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
                        ROI estimado para seguridad privada
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
                    <p className="text-gray-500 text-center mb-12 max-w-xl mx-auto">Lo que nos preguntan las empresas de seguridad antes de implementar.</p>
                    <div className="space-y-4 max-w-3xl mx-auto">
                        {[
                            { p: "¿Cuánto tarda implementar el sistema de guardias?", r: "La app de guardias y el panel de operadores se despliegan en 2 semanas. El onboarding de los guardias toma 1 día: descarga la app, completa el perfil y ya puede registrar rondas. No requiere capacitación técnica." },
                            { p: "¿Funciona sin internet en terreno?", r: "Sí. La app opera en modo offline y sincroniza los registros de rondas, fotos e incidentes automáticamente cuando recupera señal. Los datos no se pierden aunque el guardia esté en un punto sin cobertura." },
                            { p: "¿Qué pasa si un guardia pierde el celular?", r: "El acceso se bloquea remotamente desde el panel del operador en menos de 30 segundos. El nuevo dispositivo se activa con las mismas credenciales sin pérdida de datos históricos. El celular del guardia nunca almacena información sensible del cliente." },
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
                        ¿Tu empresa de seguridad aún controla guardias con papel?
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
