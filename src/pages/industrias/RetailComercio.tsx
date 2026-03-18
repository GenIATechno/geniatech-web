import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ShoppingBag, Package, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ParticleBackground } from '../../components/ParticleBackground';

const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "GenIA Tech para Retail y Comercio",
    "provider": {
        "@type": "Organization",
        "name": "GenIA Tech",
        "url": "https://geniatechno.com"
    },
    "areaServed": "Chile",
    "url": "https://geniatechno.com/industrias/retail-comercio"
};

const problemas = [
    {
        icon: Package,
        titulo: "Reconciliación de inventario manual y tardía",
        descripcion: "El cierre de inventario se realiza manualmente al final del día o la semana. Las diferencias entre stock físico y sistema se detectan tarde, generando pérdidas por merma y descuadres con proveedores.",
    },
    {
        icon: Users,
        titulo: "Atención post-venta sin automatización",
        descripcion: "El seguimiento de clientes después de la compra, el manejo de reclamos y las encuestas de satisfacción se gestionan manualmente. Los clientes que no son contactados no vuelven.",
    },
    {
        icon: ShoppingBag,
        titulo: "Sin centralización de proveedores y compras",
        descripcion: "La gestión de órdenes de compra, recepción de mercadería y relación con proveedores se maneja en múltiples canales sin sistema centralizado. Los errores en pedidos generan quiebres de stock.",
    },
];

const modulos = [
    { id: "M-01", titulo: "Inventario en Tiempo Real", descripcion: "Sistema de gestión de stock con actualización automática en cada venta, devolución o recepción. Alertas de mínimo de stock y reportes de rotación por SKU." },
    { id: "M-02", titulo: "Automatización Post-Venta por WhatsApp", descripcion: "Flujos automáticos de seguimiento post-compra, encuestas de satisfacción y ofertas de recompra por WhatsApp. Sin intervención del equipo de ventas." },
    { id: "M-03", titulo: "Portal de Proveedores y Órdenes de Compra", descripcion: "Centralización de órdenes de compra, recepción conforme y gestión de devoluciones con proveedores en un portal digital con trazabilidad completa." },
    { id: "M-04", titulo: "Dashboard de Ventas en Tiempo Real", descripcion: "Panel ejecutivo con ventas del día, semana y mes por tienda, categoría y vendedor. Comparativa vs. período anterior y proyección de cierre mensual." },
    { id: "M-05", titulo: "Fidelización Automática de Clientes", descripcion: "Programa de fidelización con puntos, descuentos y comunicaciones personalizadas automatizadas por WhatsApp y correo según comportamiento de compra." },
    { id: "M-06", titulo: "Gestión de Devoluciones y Cambios", descripcion: "Flujo digital de devoluciones y cambios con registro de motivo, estado de producto y resolución. Trazabilidad completa para análisis de calidad y proveedores." },
];

const roi = [
    { metrica: "Tiempo en reconciliación de inventario diaria", valor: "−3 hrs" },
    { metrica: "Reducción de tickets de soporte con IA", valor: "40%" },
    { metrica: "Incremento en ventas repetidas", valor: "+25%" },
];

export const RetailComercio = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <div className="min-h-screen bg-[#000000] text-gray-200 font-sans selection:bg-safety selection:text-white relative">
            <Helmet>
                <title>Software Retail Chile | GenIA Tech — Control Inventario IA</title>
                <meta name="description" content="Control inventario tiempo real, alertas stock y automatización pedidos para retail Chile. Dashboard ventas por tienda." />
                <meta name="keywords" content="software retail Chile, inventario tiempo real, automatización post-venta Chile, fidelización clientes comercio, software comercio B2B Chile" />
                <link rel="canonical" href="https://geniatechno.com/industrias/retail-comercio" />
                <meta property="og:title" content="Retail y Comercio en Chile | GenIA Tech — Automatización e IA" />
                <meta property="og:description" content="Control inventario, alertas stock y automatización pedidos para empresas retail en Chile. Dashboard ventas en tiempo real. Diagnóstico gratuito." />
                <meta property="og:url" content="https://geniatechno.com/industrias/retail-comercio" />
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
                        <ShoppingBag className="w-3.5 h-3.5" /> Industria — Retail y Comercio
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
                        GenIA Tech para{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-safety to-orange-400">Retail y Comercio en Chile</span>
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                        Automatizamos el inventario, la post-venta y la fidelización de clientes para empresas de retail y comercio en Chile. Menos trabajo manual, más ventas repetidas.
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
                    <p className="text-gray-500 text-center mb-12 max-w-xl mx-auto">Los cuellos de botella más comunes en empresas de retail y comercio en Chile.</p>
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4 tracking-tight">Módulos para tu negocio retail</h2>
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight text-center">ROI estimado para retail y comercio</h2>
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
                    <p className="text-gray-500 text-center mb-12 max-w-xl mx-auto">Lo que nos preguntan las empresas retail antes de implementar.</p>
                    <div className="space-y-4 max-w-3xl mx-auto">
                        {[
                            { p: "¿Se integra con el POS o sistema de caja actual?", r: "Sí. Integramos con los principales POS chilenos (BSALE, Defontana, SAP, sistemas propios) mediante API o archivos de sincronización. Cada venta descuenta automáticamente el stock sin intervención manual." },
                            { p: "¿Funciona para múltiples locales simultáneamente?", r: "El sistema está diseñado para operación multilocal. Cada tienda tiene su stock y ventas independientes, con consolidación automática a nivel central. Los traslados entre locales se gestionan con solicitud y confirmación digital entre los encargados." },
                            { p: "¿Cuánto tiempo toma cargar el inventario inicial al sistema?", r: "Si tienes un Excel o exportación del sistema actual, la carga inicial se hace en 1 día. Si partes desde cero, diseñamos el proceso de toma de inventario con planillas digitales y el equipo hace la carga en una jornada de trabajo por local." },
                        ].map((f, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-[#0A0A0A] border border-gray-800 rounded-2xl p-7">
                                <h3 className="text-base font-bold text-white mb-3">{f.p}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{f.r}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <div className="text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">¿Tu inventario se reconcilia manualmente cada día?</h2>
                    <p className="text-gray-400 mb-8 max-w-xl mx-auto">Hacemos una auditoría de tus procesos actuales sin costo. En 48 horas te entregamos un mapa de automatización con ROI estimado.</p>
                    <Link to="/contacto" className="inline-flex items-center gap-2 bg-gradient-to-r from-safety to-orange-500 text-white font-bold py-4 px-10 rounded-full shadow-[0_0_20px_rgba(255,87,34,0.3)] hover:shadow-[0_0_40px_rgba(255,87,34,0.5)] transition-all hover:-translate-y-1">
                        Iniciar Diagnóstico Operativo <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </main>
        </div>
    );
};
