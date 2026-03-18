import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Leaf, MapPin, CloudRain, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ParticleBackground } from '../../components/ParticleBackground';

const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Software para Agroindustria Chile",
    "description": "Supervisión agrícola digital, app de campo y dashboards de producción en tiempo real para empresas agroindustriales en Chile. Caso real: IANSA Chile.",
    "provider": {
        "@type": "ProfessionalService",
        "name": "GenIA Tech SpA",
        "url": "https://geniatechno.com",
        "address": { "@type": "PostalAddress", "addressLocality": "Santiago", "addressRegion": "Región Metropolitana", "addressCountry": "CL" }
    },
    "areaServed": { "@type": "Country", "name": "Chile" },
    "url": "https://geniatechno.com/industrias/agroindustria"
};

const problemas = [
    {
        icon: MapPin,
        titulo: "Supervisión de campo en papel y radio",
        descripcion: "Los registros de terreno, avance de cosecha y estado de cultivos se anotan en planillas de papel. La información tarda días en llegar a la oficina central, imposibilitando decisiones a tiempo.",
    },
    {
        icon: CloudRain,
        titulo: "Sin alertas automáticas de riego y clima",
        descripcion: "El seguimiento de fechas de riego, aplicación de fertilizantes y alertas de helada se gestiona manualmente. Los errores por omisión generan pérdidas directas en rendimiento.",
    },
    {
        icon: Users,
        titulo: "Coordinación de cuadrillas sin visibilidad",
        descripcion: "La asignación de cuadrillas a sectores, el registro de jornadas y el control de rendimiento de cada trabajador de campo se hace sin sistema. Imposible optimizar la operación.",
    },
];

const modulos = [
    { id: "M-01", titulo: "App de Supervisión en Terreno", descripcion: "Aplicación móvil para supervisores de campo con formularios digitales, registro de avance por sector y sincronización automática al llegar a zona con señal." },
    { id: "M-02", titulo: "Dashboard de Producción en Tiempo Real", descripcion: "Panel central con métricas por campo, cuartel y temporada. Comparativa de rendimiento real vs. estimado actualizada diariamente." },
    { id: "M-03", titulo: "Alertas Automáticas de Clima y Riego", descripcion: "Integración con APIs meteorológicas para alertas de helada, lluvia y estrés hídrico. Recordatorios automáticos de aplicación de riego y fertilizantes por sector." },
    { id: "M-04", titulo: "Gestión de Cuadrillas y Jornadas", descripcion: "Asignación digital de cuadrillas por sector, registro de asistencia con geolocalización y cálculo automático de jornadas para liquidación de sueldos." },
    { id: "M-05", titulo: "Registro Fotográfico con GPS", descripcion: "Captura de evidencias de estado de cultivos, plagas o daños con geolocalización y timestamp. Trazabilidad completa de cada evento en terreno." },
    { id: "M-06", titulo: "Reportes de Rendimiento por Cultivo", descripcion: "Informes automáticos de cosecha, calidad y rendimiento por variedad y sector. Exportables para mandantes, cooperativas o procesos de certificación." },
];

const roi = [
    { metrica: "Datos de campo digitalizados desde el primer día", valor: "100%" },
    { metrica: "Reducción en tiempo de reporte de cosecha", valor: "80%" },
    { metrica: "Reducción de pérdidas por riego tardío", valor: "35%" },
];

export const Agroindustria = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <div className="min-h-screen bg-[#000000] text-gray-200 font-sans selection:bg-safety selection:text-white relative">
            <Helmet>
                <title>Software para Agroindustria en Chile | GenIA Tech — Supervisión de Campo</title>
                <meta name="description" content="App de supervisión agrícola, dashboard de producción y alertas automáticas para empresas agroindustriales en Chile. Caso real: IANSA Chile. Digitaliza tu campo desde el día 1." />
                <meta name="keywords" content="software agroindustria Chile, app supervisión agrícola, digitalización campo Chile, gestión cuadrillas agrícola, tecnología agricultura Chile" />
                <link rel="canonical" href="https://geniatechno.com/industrias/agroindustria" />
                <meta property="og:title" content="Software para Agroindustria en Chile | GenIA Tech" />
                <meta property="og:description" content="Supervisión agrícola digital y dashboards de producción en tiempo real para empresas agroindustriales en Chile. Caso real: IANSA Chile." />
                <meta property="og:url" content="https://geniatechno.com/industrias/agroindustria" />
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
                        <Leaf className="w-3.5 h-3.5" /> Industria — Agroindustria
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
                        GenIA Tech para{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-safety to-orange-400">Agroindustria en Chile</span>
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                        Digitalizamos la supervisión de campo, la gestión de cuadrillas y el control de producción agrícola. Caso real con IANSA Chile: de papel a datos en tiempo real en semanas.
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
                        <Leaf className="w-6 h-6 text-safety" />
                    </div>
                    <div>
                        <span className="text-xs font-black text-safety uppercase tracking-widest">Caso Real</span>
                        <p className="text-white font-bold mt-0.5">IANSA Chile — Supervisión agrícola en terreno</p>
                        <p className="text-gray-400 text-sm mt-1">Digitalización completa de supervisión de campo. Datos en tiempo real desde terreno a la oficina central sin intervención manual.</p>
                    </div>
                </div>

                {/* EL PROBLEMA QUE RESOLVEMOS */}
                <section className="mb-24">
                    <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4 tracking-tight">
                        El problema que resolvemos
                    </h2>
                    <p className="text-gray-500 text-center mb-12 max-w-xl mx-auto">Los cuellos de botella más frecuentes en la operación agroindustrial chilena.</p>
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
                        Módulos para tu operación agroindustrial
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
                        ROI estimado para agroindustria
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

                {/* CTA */}
                <div className="text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        ¿Tu operación agrícola sigue en papel?
                    </h2>
                    <p className="text-gray-400 mb-8 max-w-xl mx-auto">Hacemos una auditoría de tus procesos actuales sin costo. En 48 horas te entregamos un mapa de digitalización con ROI estimado.</p>
                    <Link to="/contacto" className="inline-flex items-center gap-2 bg-gradient-to-r from-safety to-orange-500 text-white font-bold py-4 px-10 rounded-full shadow-[0_0_20px_rgba(255,87,34,0.3)] hover:shadow-[0_0_40px_rgba(255,87,34,0.5)] transition-all hover:-translate-y-1">
                        Iniciar Diagnóstico Operativo <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </main>
        </div>
    );
};
