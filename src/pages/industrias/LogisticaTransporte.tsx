import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Truck, MapPin, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ParticleBackground } from '../../components/ParticleBackground';

const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "GenIA Tech para Logística y Transporte",
    "provider": {
        "@type": "Organization",
        "name": "GenIA Tech",
        "url": "https://geniatechno.com"
    },
    "areaServed": "Chile",
    "url": "https://geniatechno.com/industrias/logistica-transporte"
};

const problemas = [
    {
        icon: MapPin,
        titulo: "Flota sin trazabilidad en tiempo real",
        descripcion: "Sin sistema de tracking integrado, los clientes preguntan dónde está su pedido y el equipo de despacho no tiene respuesta inmediata. Cada consulta requiere llamar al conductor.",
    },
    {
        icon: Truck,
        titulo: "Asignación de rutas manual e ineficiente",
        descripcion: "Las rutas se planifican manualmente sin optimización. Los conductores hacen recorridos subóptimos que generan consumo excesivo de combustible y tiempos de entrega innecesariamente largos.",
    },
    {
        icon: MessageSquare,
        titulo: "Tiempo de respuesta a clientes muy lento",
        descripcion: "Las consultas comerciales sobre disponibilidad, tarifas y seguimiento de carga se responden en horas. Los competidores que responden en minutos ganan las licitaciones.",
    },
];

const modulos = [
    { id: "M-01", titulo: "Tracking de Flota en Tiempo Real", descripcion: "Panel centralizado con posición GPS de todos los vehículos, estado de carga y estimación de llegada. Alertas automáticas ante desvíos de ruta o paradas no programadas." },
    { id: "M-02", titulo: "Optimización Automática de Rutas", descripcion: "Algoritmo de ruteo que considera carga, destinos, ventanas horarias y restricciones de tráfico. Reducción promedio del 18% en consumo de combustible." },
    { id: "M-03", titulo: "Gestión de Pedidos y Despachos", descripcion: "Módulo de gestión de órdenes de despacho con asignación automática a vehículo y conductor según capacidad y disponibilidad. Confirmación digital de entrega." },
    { id: "M-04", titulo: "Comunicación Conductor-Central por WhatsApp", descripcion: "Bot de WhatsApp para que los conductores reporten novedades, soliciten apoyo y reciban instrucciones sin salir de la app que ya usan." },
    { id: "M-05", titulo: "Portal de Seguimiento para Clientes", descripcion: "Link de tracking personalizado para cada envío. El cliente sigue su carga en tiempo real sin necesidad de llamar al centro de despacho." },
    { id: "M-06", titulo: "Reportes de KPIs Logísticos", descripcion: "Dashboard automático con On-Time Delivery, costo por kilómetro, utilización de flota y reclamos por periodo. Datos para negociación y mejora continua." },
];

const roi = [
    { metrica: "Tiempo de respuesta a consultas de clientes", valor: "−95%" },
    { metrica: "Reducción de consumo de combustible", valor: "18%" },
    { metrica: "Reducción en reclamos por entrega", valor: "55%" },
];

export const LogisticaTransporte = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <div className="min-h-screen bg-[#000000] text-gray-200 font-sans selection:bg-safety selection:text-white relative">
            <Helmet>
                <title>Software Logística Chile | GenIA Tech — Tracking y Automatización</title>
                <meta name="description" content="Tracking flota, control entregas y automatización operativa para logística Chile. Software a medida deployado en semanas." />
                <meta name="keywords" content="software logística Chile, tracking flota transporte, optimización rutas logística, sistema despacho Chile, digitalización transporte Santiago" />
                <link rel="canonical" href="https://geniatechno.com/industrias/logistica-transporte" />
                <meta property="og:title" content="Logística y Transporte en Chile | GenIA Tech — Automatización e IA" />
                <meta property="og:description" content="Tracking flota, control entregas y automatización operativa para empresas de logística en Chile. Software a medida deployado en semanas. Diagnóstico gratuito." />
                <meta property="og:url" content="https://geniatechno.com/industrias/logistica-transporte" />
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
                        <Truck className="w-3.5 h-3.5" /> Industria — Logística y Transporte
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
                        GenIA Tech para{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-safety to-orange-400">Logística y Transporte en Chile</span>
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                        Construimos el sistema operacional que necesita tu empresa logística: tracking de flota, optimización de rutas, portal de seguimiento para clientes y KPIs en tiempo real.
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
                    <p className="text-gray-500 text-center mb-12 max-w-xl mx-auto">Los cuellos de botella más comunes en empresas de logística y transporte en Chile.</p>
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4 tracking-tight">Módulos para tu operación logística</h2>
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight text-center">ROI estimado para logística y transporte</h2>
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
                    <p className="text-gray-500 text-center mb-12 max-w-xl mx-auto">Lo que nos preguntan las empresas de logística antes de implementar.</p>
                    <div className="space-y-4 max-w-3xl mx-auto">
                        {[
                            { p: "¿Se integra con los sistemas de despacho o TMS existentes?", r: "Sí. Integramos con los principales TMS y sistemas de despacho chilenos mediante APIs o exportaciones automáticas. Si no hay API disponible, construimos el conector a medida. El objetivo es que no haya doble carga de información." },
                            { p: "¿Cuánto tarda el onboarding de los conductores al sistema?", r: "Los conductores instalan la app en 5 minutos y reciben una capacitación de 30 minutos. A partir de ahí, el sistema es tan simple como WhatsApp: ven sus rutas del día, confirman entregas y reportan novedades con fotos." },
                            { p: "¿Funciona para flotas mixtas con camiones, furgones y motos?", r: "Sí. El sistema es agnóstico al tipo de vehículo. Cada unidad tiene su perfil con capacidad de carga, restricciones de tránsito y tipo de mercancía que puede transportar. El algoritmo de ruteo considera estas variables al asignar pedidos." },
                        ].map((f, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-[#0A0A0A] border border-gray-800 rounded-2xl p-7">
                                <h3 className="text-base font-bold text-white mb-3">{f.p}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{f.r}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <div className="text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">¿Tu flota opera sin visibilidad en tiempo real?</h2>
                    <p className="text-gray-400 mb-8 max-w-xl mx-auto">Hacemos una auditoría de tus procesos actuales sin costo. En 48 horas te entregamos un mapa de automatización con ROI estimado.</p>
                    <Link to="/contacto" className="inline-flex items-center gap-2 bg-gradient-to-r from-safety to-orange-500 text-white font-bold py-4 px-10 rounded-full shadow-[0_0_20px_rgba(255,87,34,0.3)] hover:shadow-[0_0_40px_rgba(255,87,34,0.5)] transition-all hover:-translate-y-1">
                        Iniciar Diagnóstico Operativo <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </main>
        </div>
    );
};
