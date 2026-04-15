import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ArrowLeft, ArrowRight, CheckCircle2, X, Zap, Wifi, WifiOff,
    QrCode, BarChart3, Package, Shield, Smartphone, Building2,
    Clock, Star, ChevronDown, MessageCircle, Layers, Globe, Users
} from 'lucide-react';
import { Link } from 'react-router-dom';

// ─── Schema.org SoftwareApplication ────────────────────────────────────────
const schemaSoftware = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "AccesIA",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Android, Web",
    "description": "Sistema SaaS de control de acceso inteligente para centros logísticos, parques industriales y bodegas en Chile. Modo offline, escaneo QR de carnet chileno, dashboard en tiempo real y reportes automáticos.",
    "offers": [
        {
            "@type": "Offer",
            "name": "Plan Start",
            "price": "45000",
            "priceCurrency": "CLP",
            "priceSpecification": { "@type": "UnitPriceSpecification", "billingDuration": "P1M" }
        },
        {
            "@type": "Offer",
            "name": "Plan Business",
            "price": "85000",
            "priceCurrency": "CLP",
            "priceSpecification": { "@type": "UnitPriceSpecification", "billingDuration": "P1M" }
        },
        {
            "@type": "Offer",
            "name": "Plan High-Traffic",
            "price": "150000",
            "priceCurrency": "CLP",
            "priceSpecification": { "@type": "UnitPriceSpecification", "billingDuration": "P1M" }
        }
    ],
    "provider": {
        "@type": "Organization",
        "name": "GenIA Tech SpA",
        "url": "https://geniatechno.com",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Santiago",
            "addressCountry": "CL"
        }
    },
    "url": "https://geniatechno.com/software/accesIA",
    "featureList": [
        "Modo offline para zonas sin señal",
        "Escaneo QR de carnet chileno",
        "Reportes automáticos diarios y semanales",
        "Dashboard maestro multi-sede en tiempo real",
        "Hardware Samsung Knox configurado",
        "API e integraciones avanzadas"
    ]
};

// ─── WhatsApp CTA ─────────────────────────────────────────────────────────
const WA_LINK =
    'https://wa.me/56942762264?text=Hola%2C+me+interesa+solicitar+un+demo+de+AccesIA.+%C2%BFPodemos+coordinar?';

// ─── Features ────────────────────────────────────────────────────────────
const features = [
    {
        icon: WifiOff,
        title: 'Modo Offline Nativo',
        desc: 'Opera sin internet en zonas remotas o con señal deficiente. Sincronización automática al reconectarse.',
        badge: 'Diferenciador clave',
    },
    {
        icon: QrCode,
        title: 'Escaneo QR Carnet Chileno',
        desc: 'Registro instantáneo leyendo el código QR del carnet nacional. Validación de identidad en menos de 2 segundos.',
        badge: null,
    },
    {
        icon: BarChart3,
        title: 'Dashboard en Tiempo Real',
        desc: 'Panel maestro que centraliza todas tus sedes en una sola pantalla. Métricas de flujo, alertas y ocupación al instante.',
        badge: 'High-Traffic',
    },
    {
        icon: Zap,
        title: 'Reportes Automáticos',
        desc: 'Reportes diarios y semanales enviados automáticamente al correo del cliente, sin intervención manual.',
        badge: 'Business+',
    },
    {
        icon: Package,
        title: 'Gestión de Bodegas',
        desc: 'Enrolamiento previo de personal y configuración de bodegas. Control granular de quién accede a qué área.',
        badge: null,
    },
    {
        icon: Smartphone,
        title: 'Hardware Samsung Knox',
        desc: 'Dispositivos Samsung Galaxy A17 configurados y bloqueados en modo kiosco. Listos para operar desde el día 1.',
        badge: 'Opcional',
    },
];

// ─── How it works ────────────────────────────────────────────────────────
const steps = [
    {
        num: '01',
        title: 'Setup & Onboarding',
        desc: 'Configuramos tu instancia, enrolamos tu base de datos completa, instalamos el hardware y capacitamos a tu equipo. Todo en un solo día.',
    },
    {
        num: '02',
        title: 'Operación desde el Día 1',
        desc: 'Tu equipo registra accesos vía QR o ingreso manual en la app. El sistema funciona con o sin internet gracias al modo offline.',
    },
    {
        num: '03',
        title: 'Control Total en Tu Email',
        desc: 'Recibes reportes automáticos cada mañana. Desde el dashboard ves en tiempo real el flujo de personas en todas tus sedes.',
    },
];

// ─── Plans ───────────────────────────────────────────────────────────────
const plans = [
    {
        id: 'start',
        name: 'Start',
        tagline: 'Para bodegas con flujo bajo',
        price: '45.000',
        currency: 'CLP',
        period: '/mes por sede',
        color: 'from-gray-700 to-gray-600',
        borderColor: 'border-gray-700',
        accentColor: 'text-gray-300',
        featured: false,
        features: [
            'Hasta 600 registros / mes',
            '1 dispositivo (sesión activa)',
            'Ingreso manual de patentes',
            'Escaneo QR carnet chileno',
            'Modo offline nativo',
            'Gestión de bodegas y enrolamiento',
            'Soporte vía email',
            'Reportes manuales',
        ],
        notIncluded: ['Reportes automáticos', 'Dashboard en tiempo real', 'API e integraciones'],
    },
    {
        id: 'business',
        name: 'Business',
        tagline: 'El estándar industrial',
        price: '85.000',
        currency: 'CLP',
        period: '/mes por sede',
        color: 'from-safety to-orange-500',
        borderColor: 'border-safety',
        accentColor: 'text-safety',
        featured: true,
        features: [
            'Hasta 3.000 registros / mes',
            '3 dispositivos simultáneos',
            'Ingreso manual de patentes',
            'Escaneo QR carnet chileno',
            'Modo offline nativo',
            'Gestión de bodegas y enrolamiento',
            'Reportes automáticos diarios y semanales',
            'Soporte prioritario',
        ],
        notIncluded: ['Dashboard maestro multi-sede', 'API e integraciones', 'Soporte 24/7'],
    },
    {
        id: 'high-traffic',
        name: 'High-Traffic',
        tagline: 'Solución corporativa multi-sede',
        price: '150.000',
        currency: 'CLP',
        period: '/mes por sede',
        color: 'from-violet-600 to-purple-500',
        borderColor: 'border-violet-500',
        accentColor: 'text-violet-400',
        featured: false,
        features: [
            'Registros ilimitados',
            'Dispositivos ilimitados',
            'Ingreso manual de patentes',
            'Escaneo QR carnet chileno',
            'Modo offline nativo',
            'Gestión de bodegas y enrolamiento',
            'Reportes automáticos diarios y semanales',
            'Dashboard Maestro multi-sede en vivo',
            'Acceso API e integraciones',
            'Soporte prioritario 24/7',
        ],
        notIncluded: [],
    },
];

// ─── FAQ ─────────────────────────────────────────────────────────────────
const faqs = [
    {
        q: '¿El sistema funciona sin internet?',
        a: 'Sí. AccesIA tiene modo offline nativo. Los registros se guardan localmente y se sincronizan automáticamente cuando se restablece la conexión. Perfecto para zonas de baja señal o parques industriales remotos.',
    },
    {
        q: '¿Qué incluye el setup de $300.000 CLP?',
        a: 'El onboarding cubre: configuración de tu instancia en Supabase, enrolamiento manual de toda tu base de datos (personal y bodegas), configuración y blindaje del hardware Samsung Knox, y capacitación completa al personal. En contratos multisede el precio baja a $200.000 CLP por sede.',
    },
    {
        q: '¿Puedo empezar con un piloto antes de pagar?',
        a: 'Sí. Ofrecemos un piloto controlado de 5 días o 50 registros máximo (lo que ocurra primero), con enrolamiento básico para validar la tecnología en tu operación antes de cualquier compromiso de pago.',
    },
    {
        q: '¿Incluyen barreras físicas o motores de acceso?',
        a: 'No directamente. GenIA Tech es una empresa de software. Las obras civiles (barreras, motores, tótems) se derivan a partners especializados con los que trabajamos. Sí integramos relés Wi-Fi/4G para apertura de portones desde la app como proyecto especial.',
    },
    {
        q: '¿Hay descuentos para múltiples sedes?',
        a: 'Sí. Recibe un 15% de descuento en el total mensual para contratos de 4 a 10 sedes, y 25% para más de 10 sedes. Contáctanos para una cotización multisede personalizada.',
    },
    {
        q: '¿El sistema funciona fuera de Chile?',
        a: 'AccesIA está calibrado para el carnet chileno (6 dígitos, QR estándar). La expansión a Colombia, Perú y México está en hoja de ruta con lectores de documentos específicos por país.',
    },
];

// ─── FAQItem ─────────────────────────────────────────────────────────────
const FAQItem = ({ q, a }: { q: string; a: string }) => {
    const [open, setOpen] = useState(false);
    return (
        <div
            className={`border rounded-2xl overflow-hidden transition-colors ${open ? 'border-safety/40 bg-[#0D0D0D]' : 'border-gray-800 bg-[#0A0A0A]'}`}
        >
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                aria-expanded={open}
            >
                <span className="font-semibold text-white text-sm md:text-base">{q}</span>
                <ChevronDown
                    className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180 text-safety' : ''}`}
                />
            </button>
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="overflow-hidden"
                    >
                        <p className="px-6 pb-6 text-gray-400 leading-relaxed text-sm md:text-base">{a}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

// ─── Main Component ───────────────────────────────────────────────────────
export const AccesIA = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    const fadeUp = {
        hidden: { opacity: 0, y: 24 },
        visible: (i = 0) => ({
            opacity: 1, y: 0,
            transition: { duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }
        }),
    };

    return (
        <div className="min-h-screen bg-[#000000] text-gray-200 font-sans selection:bg-safety selection:text-white relative overflow-x-hidden">
            <Helmet>
                <title>AccesIA | Control de Acceso SaaS para Centros Logísticos y Bodegas en Chile</title>
                <meta
                    name="description"
                    content="AccesIA es el sistema SaaS de control de acceso para centros logísticos, parques industriales y bodegas en Chile. Modo offline, escaneo QR carnet, dashboard en tiempo real. Desde $45.000 CLP/mes."
                />
                <meta
                    name="keywords"
                    content="control de acceso bodegas Chile, sistema acceso logístico SaaS, AccesIA GenIA Tech, control ingreso parque industrial Chile, software acceso bodega offline, escaneo QR carnet control acceso"
                />
                <link rel="canonical" href="https://geniatechno.com/software/accesIA" />
                <meta property="og:title" content="AccesIA — Control de Acceso Inteligente para Logística B2B en Chile" />
                <meta
                    property="og:description"
                    content="Sistema SaaS de control de acceso con modo offline, escaneo QR de carnet chileno y dashboard en tiempo real. Desde $45.000 CLP/mes por sede."
                />
                <meta property="og:url" content="https://geniatechno.com/software/accesIA" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://geniatechno.com/tech_glow_bg.png" />
                <script type="application/ld+json">{JSON.stringify(schemaSoftware)}</script>
            </Helmet>

            {/* ── NAVBAR ─────────────────────────────────────────────── */}
            <nav className="fixed w-full z-50 bg-[#000000]/85 backdrop-blur-xl border-b border-[#1A1A1A]">
                <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <Link to="/" className="flex items-center gap-2 group">
                            <ArrowLeft className="w-5 h-5 text-gray-500 group-hover:text-safety transition-colors" />
                            <span className="font-semibold text-gray-400 group-hover:text-white transition-colors text-sm">
                                Volver al Inicio
                            </span>
                        </Link>
                        <Link to="/" className="text-[22px] font-black tracking-tighter text-white">
                            Gen<span className="text-safety">IA</span> Tech
                        </Link>
                        <a
                            href={WA_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            id="accesia-nav-cta"
                            className="hidden md:flex items-center gap-2 bg-safety text-white px-5 py-2.5 rounded-full font-bold text-sm hover:bg-[#E64A19] transition-colors shadow-[0_0_20px_rgba(255,87,34,0.25)]"
                        >
                            <MessageCircle className="w-4 h-4" /> Solicitar Demo
                        </a>
                    </div>
                </div>
            </nav>

            <main className="pt-20">

                {/* ── HERO ───────────────────────────────────────────── */}
                <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
                    {/* Background glow */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-safety/8 blur-[120px] rounded-full" />
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-violet-600/5 blur-[100px] rounded-full" />
                        {/* Grid overlay */}
                        <div
                            className="absolute inset-0 opacity-[0.03]"
                            style={{
                                backgroundImage: 'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
                                backgroundSize: '60px 60px',
                            }}
                        />
                    </div>

                    <div className="relative z-10 max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 bg-[#111] border border-gray-800 text-gray-300 text-xs font-bold px-4 py-2 rounded-full mb-8 uppercase tracking-widest"
                        >
                            <span className="w-2 h-2 rounded-full bg-safety animate-pulse" />
                            Software SaaS B2B — Control de Acceso
                        </motion.div>

                        <motion.h1
                            custom={0}
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            className="text-5xl md:text-6xl lg:text-[5rem] font-extrabold leading-[1.05] tracking-tight mb-6"
                        >
                            Control de acceso{' '}
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-safety via-orange-400 to-amber-300">
                                inteligente
                            </span>
                            <br className="hidden md:block" />
                            {' '}para logística B2B
                        </motion.h1>

                        <motion.p
                            custom={1}
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
                        >
                            SaaS de gestión de acceso con modo offline, escaneo QR de carnet chileno y
                            dashboard en tiempo real. Desde{' '}
                            <span className="text-white font-semibold">$45.000 CLP/mes por sede.</span>
                        </motion.p>

                        <motion.div
                            custom={2}
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                        >
                            <a
                                href={WA_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                id="accesia-hero-cta-primary"
                                className="inline-flex items-center gap-2 bg-gradient-to-r from-safety to-orange-500 text-white font-bold py-4 px-8 rounded-full shadow-[0_0_30px_rgba(255,87,34,0.35)] hover:shadow-[0_0_50px_rgba(255,87,34,0.55)] transition-all hover:-translate-y-0.5 text-base"
                            >
                                <MessageCircle className="w-5 h-5" />
                                Solicitar Demo
                                <ArrowRight className="w-4 h-4" />
                            </a>
                            <a
                                href="#precios"
                                id="accesia-hero-cta-secondary"
                                className="inline-flex items-center gap-2 border border-gray-700 text-gray-300 hover:text-white font-bold py-4 px-8 rounded-full transition-all hover:border-gray-500 text-base"
                            >
                                Ver Planes y Precios
                            </a>
                        </motion.div>

                        {/* Trust badges */}
                        <motion.div
                            custom={3}
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            className="flex flex-wrap gap-3 justify-center mt-12"
                        >
                            {[
                                { icon: WifiOff, label: 'Funciona sin internet' },
                                { icon: Shield, label: 'Hardware Samsung Knox' },
                                { icon: Zap, label: 'Piloto en 5 días' },
                                { icon: Globe, label: 'Expansión LATAM' },
                            ].map(({ icon: Icon, label }) => (
                                <span
                                    key={label}
                                    className="flex items-center gap-1.5 bg-[#0D0D0D] border border-gray-800 text-gray-400 text-xs font-semibold px-4 py-2 rounded-full"
                                >
                                    <Icon className="w-3.5 h-3.5 text-safety" />
                                    {label}
                                </span>
                            ))}
                        </motion.div>
                    </div>

                    {/* Scroll cue */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2 }}
                        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                    >
                        <span className="text-xs text-gray-600 uppercase tracking-widest font-semibold">Scroll</span>
                        <div className="w-px h-10 bg-gradient-to-b from-gray-600 to-transparent" />
                    </motion.div>
                </section>

                {/* ── PILOT BANNER ────────────────────────────────────── */}
                <section className="py-6 bg-[#0A0A0A] border-y border-gray-900">
                    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-safety/10 border border-safety/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Star className="w-5 h-5 text-safety" />
                                </div>
                                <div>
                                    <p className="text-white font-bold text-sm">Piloto controlado gratuito</p>
                                    <p className="text-gray-500 text-xs">5 días o 50 registros — lo que ocurra primero. Sin pago previo.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6 text-sm text-gray-400">
                                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-green-500" /> Enrolamiento básico incluido</span>
                                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-green-500" /> Video demo disponible</span>
                            </div>
                            <a
                                href={WA_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                id="accesia-pilot-cta"
                                className="flex-shrink-0 bg-[#111] border border-safety/40 text-safety font-bold text-sm px-6 py-3 rounded-full hover:bg-safety/10 transition-colors"
                            >
                                Iniciar Piloto →
                            </a>
                        </div>
                    </div>
                </section>

                {/* ── FEATURES ────────────────────────────────────────── */}
                <section id="funcionalidades" className="py-24 px-4 sm:px-6 lg:px-8 max-w-8xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-xs font-bold text-safety uppercase tracking-widest mb-3 block">Funcionalidades</span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                            Todo lo que necesita tu operación logística
                        </h2>
                        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
                            Diseñado para la realidad de los parques industriales chilenos: zonas sin señal, flujos masivos de personas y necesidad de trazabilidad total.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {features.map((f, i) => (
                            <motion.div
                                key={f.title}
                                custom={i}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: '-60px' }}
                                className="bg-[#0A0A0A] border border-gray-800 rounded-2xl p-7 hover:border-gray-700 transition-all group relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-safety/3 blur-[60px] rounded-full pointer-events-none group-hover:bg-safety/6 transition-colors" />
                                <div className="flex items-start justify-between mb-5">
                                    <div className="w-12 h-12 bg-safety/10 border border-safety/20 text-safety rounded-xl flex items-center justify-center">
                                        <f.icon className="w-6 h-6" />
                                    </div>
                                    {f.badge && (
                                        <span className="text-[10px] font-black uppercase tracking-widest text-safety bg-safety/10 border border-safety/20 px-2.5 py-1 rounded-full">
                                            {f.badge}
                                        </span>
                                    )}
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">{f.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* ── HOW IT WORKS ────────────────────────────────────── */}
                <section className="py-20 bg-[#050505] border-y border-gray-900">
                    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <span className="text-xs font-bold text-safety uppercase tracking-widest mb-3 block">¿Cómo funciona?</span>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                                Operativo en un día
                            </h2>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8 relative">
                            {/* Connector line */}
                            <div className="hidden md:block absolute top-8 left-[calc(16.6%+1rem)] right-[calc(16.6%+1rem)] h-px bg-gradient-to-r from-transparent via-safety/30 to-transparent" />
                            {steps.map((s, i) => (
                                <motion.div
                                    key={s.num}
                                    custom={i}
                                    variants={fadeUp}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: '-60px' }}
                                    className="text-center relative"
                                >
                                    <div className="w-16 h-16 bg-[#0A0A0A] border-2 border-safety/40 rounded-2xl flex items-center justify-center mx-auto mb-6 text-safety font-black text-xl">
                                        {s.num}
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-3">{s.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">{s.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── PRICING ─────────────────────────────────────────── */}
                <section id="precios" className="py-24 px-4 sm:px-6 lg:px-8 max-w-8xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-xs font-bold text-safety uppercase tracking-widest mb-3 block">Pricing</span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                            Planes simples. Crecimiento predecible.
                        </h2>
                        <p className="text-gray-400 mt-4 max-w-xl mx-auto text-sm">
                            Precios por sede activa. Sin comisiones ocultas. Escala cuando lo necesites.
                        </p>
                    </div>

                    {/* Plan cards */}
                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        {plans.map((plan, i) => (
                            <motion.div
                                key={plan.id}
                                custom={i}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: '-60px' }}
                                className={`relative bg-[#0A0A0A] border-2 ${plan.borderColor} rounded-3xl p-8 flex flex-col ${plan.featured ? 'shadow-[0_0_50px_rgba(255,87,34,0.15)]' : ''}`}
                            >
                                {plan.featured && (
                                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                                        <span className="bg-gradient-to-r from-safety to-orange-500 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full whitespace-nowrap shadow-lg">
                                            ⭐ Más popular
                                        </span>
                                    </div>
                                )}

                                <div className="mb-6">
                                    <div className={`inline-flex items-center gap-1.5 bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}>
                                        <span className="text-2xl font-black">Plan {plan.name}</span>
                                    </div>
                                    <p className="text-gray-500 text-sm mt-1">{plan.tagline}</p>
                                </div>

                                <div className="mb-8">
                                    <div className="flex items-end gap-1">
                                        <span className="text-5xl font-extrabold text-white tracking-tight">${plan.price}</span>
                                        <span className="text-gray-500 text-sm mb-2">{plan.currency}</span>
                                    </div>
                                    <span className="text-gray-500 text-xs">{plan.period}</span>
                                </div>

                                <ul className="space-y-3 flex-1 mb-8">
                                    {plan.features.map((feat) => (
                                        <li key={feat} className="flex items-start gap-2.5 text-sm text-gray-300">
                                            <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                            {feat}
                                        </li>
                                    ))}
                                    {plan.notIncluded.map((feat) => (
                                        <li key={feat} className="flex items-start gap-2.5 text-sm text-gray-600">
                                            <X className="w-4 h-4 text-gray-700 flex-shrink-0 mt-0.5" />
                                            {feat}
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href={WA_LINK}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    id={`accesia-plan-${plan.id}-cta`}
                                    className={`w-full text-center py-4 rounded-2xl font-bold text-sm transition-all ${plan.featured
                                        ? 'bg-gradient-to-r from-safety to-orange-500 text-white shadow-[0_0_20px_rgba(255,87,34,0.3)] hover:shadow-[0_0_30px_rgba(255,87,34,0.5)] hover:-translate-y-0.5'
                                        : 'bg-[#111] border border-gray-700 text-gray-300 hover:border-gray-500 hover:text-white'
                                        }`}
                                >
                                    Solicitar Demo →
                                </a>
                            </motion.div>
                        ))}
                    </div>

                    {/* Add-on + Volume discounts */}
                    <div className="grid md:grid-cols-2 gap-5">
                        {/* Add-on */}
                        <div className="bg-[#0A0A0A] border border-gray-800 rounded-2xl p-7">
                            <div className="flex items-start gap-4 mb-5">
                                <div className="w-11 h-11 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Wifi className="w-5 h-5 text-blue-400" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold">Add-on: Kit Satelital</h3>
                                    <p className="text-gray-500 text-sm">+$30.000 CLP / mes</p>
                                </div>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Incluye Samsung Galaxy A17 5G configurado con Samsung Knox (modo kiosco de seguridad), carcasa de alto impacto, vidrio templado y conectividad Entel o Starlink. Ideal para zonas sin señal o rurales.
                            </p>
                        </div>

                        {/* Volume discounts */}
                        <div className="bg-[#0A0A0A] border border-gray-800 rounded-2xl p-7">
                            <div className="flex items-start gap-4 mb-5">
                                <div className="w-11 h-11 bg-green-500/10 border border-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Building2 className="w-5 h-5 text-green-400" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold">Descuentos por Volumen</h3>
                                    <p className="text-gray-500 text-sm">Para contratos multisede</p>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center justify-between bg-[#111] rounded-xl px-4 py-3">
                                    <span className="text-gray-300 text-sm font-medium flex items-center gap-2">
                                        <Layers className="w-4 h-4 text-gray-500" />
                                        4 – 10 sedes
                                    </span>
                                    <span className="text-green-400 font-bold text-sm">15% descuento</span>
                                </div>
                                <div className="flex items-center justify-between bg-[#111] rounded-xl px-4 py-3">
                                    <span className="text-gray-300 text-sm font-medium flex items-center gap-2">
                                        <Layers className="w-4 h-4 text-gray-500" />
                                        +10 sedes
                                    </span>
                                    <span className="text-green-400 font-bold text-sm">25% descuento</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Setup fee banner */}
                    <div className="mt-5 bg-[#0A0A0A] border border-yellow-500/20 rounded-2xl p-7 flex flex-col md:flex-row items-start md:items-center gap-6">
                        <div className="w-11 h-11 bg-yellow-500/10 border border-yellow-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Clock className="w-5 h-5 text-yellow-400" />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-white font-bold mb-1">Onboarding: $300.000 CLP <span className="text-gray-500 font-normal text-sm">(pago único por sede)</span></h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Cubre configuración de instancia Supabase, enrolamiento manual de toda tu base de datos (personal y bodegas), configuración Samsung Knox, blindado físico del equipo y capacitación al personal. <span className="text-yellow-400 font-semibold">En contratos multisede: $200.000 CLP/sede.</span>
                            </p>
                        </div>
                        <a
                            href={WA_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            id="accesia-setup-cta"
                            className="flex-shrink-0 bg-[#111] border border-yellow-500/30 text-yellow-400 font-bold text-sm px-6 py-3 rounded-full hover:bg-yellow-500/10 transition-colors whitespace-nowrap"
                        >
                            Cotizar proyecto →
                        </a>
                    </div>
                </section>

                {/* ── TARGET INDUSTRIES ───────────────────────────────── */}
                <section className="py-20 bg-[#050505] border-y border-gray-900">
                    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-14">
                            <span className="text-xs font-bold text-safety uppercase tracking-widest mb-3 block">¿Para quién es AccesIA?</span>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                                Industrias que ya lo usan
                            </h2>
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {[
                                { icon: Package, name: 'Centros Logísticos', desc: 'Control de flujo masivo de personal y proveedores' },
                                { icon: Building2, name: 'Parques Industriales', desc: 'Acceso multi-empresa en una sola plataforma' },
                                { icon: Layers, name: 'Bodegas de Arriendo', desc: 'Administradoras con múltiples sedes y clientes' },
                                { icon: Users, name: 'Seguridad Privada', desc: 'Digitalización del servicio de control de acceso' },
                            ].map(({ icon: Icon, name, desc }, i) => (
                                <motion.div
                                    key={name}
                                    custom={i}
                                    variants={fadeUp}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: '-60px' }}
                                    className="bg-[#0A0A0A] border border-gray-800 rounded-2xl p-6 text-center hover:border-gray-700 transition-colors group"
                                >
                                    <div className="w-12 h-12 bg-safety/10 border border-safety/20 text-safety rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-white font-bold mb-2 text-sm">{name}</h3>
                                    <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── FAQ ─────────────────────────────────────────────── */}
                <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                    <div className="text-center mb-14">
                        <span className="text-xs font-bold text-safety uppercase tracking-widest mb-3 block">FAQ</span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                            Preguntas frecuentes
                        </h2>
                    </div>
                    <div className="space-y-3">
                        {faqs.map((faq) => (
                            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
                        ))}
                    </div>
                </section>

                {/* ── FINAL CTA ────────────────────────────────────────── */}
                <section className="py-24 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="relative bg-[#0A0A0A] border border-gray-800 rounded-[2rem] p-12 md:p-16 text-center overflow-hidden"
                        >
                            <div className="absolute inset-0 pointer-events-none">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-safety/6 blur-[100px] rounded-full" />
                            </div>
                            <div className="relative z-10">
                                <span className="text-xs font-bold text-safety uppercase tracking-widest mb-4 block">¿Listo para digitalizarte?</span>
                                <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
                                    Tu primer piloto,{' '}
                                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-safety to-orange-400">
                                        sin costo
                                    </span>
                                </h2>
                                <p className="text-gray-400 max-w-xl mx-auto mb-10 text-lg">
                                    5 días de prueba real en tu operación. Sin contratos. Sin permanencia. Solo resultados.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <a
                                        href={WA_LINK}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        id="accesia-footer-cta-primary"
                                        className="inline-flex items-center gap-2 bg-gradient-to-r from-safety to-orange-500 text-white font-bold py-4 px-10 rounded-full shadow-[0_0_30px_rgba(255,87,34,0.35)] hover:shadow-[0_0_50px_rgba(255,87,34,0.55)] transition-all hover:-translate-y-0.5 text-base"
                                    >
                                        <MessageCircle className="w-5 h-5" />
                                        Solicitar Demo por WhatsApp
                                    </a>
                                    <Link
                                        to="/contacto"
                                        id="accesia-footer-cta-secondary"
                                        className="inline-flex items-center gap-2 border border-gray-700 text-gray-300 hover:text-white font-bold py-4 px-8 rounded-full transition-all hover:border-gray-500 text-base"
                                    >
                                        Enviar Formulario
                                    </Link>
                                </div>
                                <p className="text-gray-600 text-xs mt-8">
                                    Atención a empresas B2B · Santiago, Chile · Expansión LATAM 2025
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* ── FOOTER MINI ──────────────────────────────────────── */}
                <footer className="border-t border-gray-900 py-8 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-8xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
                        <span>© 2026 <span className="text-gray-400 font-semibold">Servicios Tecnológicos GenIA SpA</span> · Santiago, Chile</span>
                        <div className="flex items-center gap-6">
                            <Link to="/" className="hover:text-gray-400 transition-colors">Inicio</Link>
                            <Link to="/contacto" className="hover:text-gray-400 transition-colors">Contacto</Link>
                            <Link to="/casos" className="hover:text-gray-400 transition-colors">Casos B2B</Link>
                        </div>
                    </div>
                </footer>
            </main>
        </div>
    );
};
