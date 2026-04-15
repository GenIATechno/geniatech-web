import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ChevronDown, MessageCircle, WifiOff, X, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

// ─── Config ──────────────────────────────────────────────────────────────
const WA_LINK = 'https://wa.me/56942762264?text=Hola%2C+me+interesa+solicitar+un+demo+de+AccesIA.+%C2%BFPodemos+coordinar%3F';

const schemaSoftware = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "AccesIA",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Android, Web",
    "description": "Sistema SaaS de control de acceso inteligente para centros logísticos, parques industriales y bodegas en Chile. Modo offline, escaneo QR de carnet chileno, dashboard en tiempo real.",
    "offers": [
        { "@type": "Offer", "name": "Plan Start", "price": "45000", "priceCurrency": "CLP" },
        { "@type": "Offer", "name": "Plan Business", "price": "85000", "priceCurrency": "CLP" },
        { "@type": "Offer", "name": "Plan High-Traffic", "price": "150000", "priceCurrency": "CLP" }
    ],
    "provider": {
        "@type": "Organization",
        "name": "GenIA Tech SpA",
        "url": "https://geniatechno.com",
        "address": { "@type": "PostalAddress", "addressLocality": "Santiago", "addressCountry": "CL" }
    },
    "url": "https://geniatechno.com/software/accesIA"
};

// ─── Dashboard Mockup ─────────────────────────────────────────────────────
const DashboardMockup = () => {
    const rows = [
        { time: '13:42', name: 'M. López', bodega: 'Bodega 3' },
        { time: '13:39', name: 'C. Pérez', bodega: 'Bodega 1' },
        { time: '13:35', name: 'R. Silva', bodega: 'Bodega 3' },
        { time: '13:28', name: 'A. Muñoz', bodega: 'Bodega 2' },
        { time: '13:21', name: 'F. Torres', bodega: 'Bodega 1' },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-md mx-auto lg:mx-0"
        >
            <div className="bg-[#0D0D0D] border border-white/[0.08] rounded-2xl overflow-hidden shadow-[0_60px_120px_rgba(0,0,0,0.9),0_0_0_1px_rgba(255,255,255,0.03)]">
                {/* Header bar */}
                <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/[0.06]">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.9)]" />
                        <span className="text-[11px] font-semibold text-white/50 tracking-widest uppercase">AccesIA</span>
                    </div>
                    <span className="text-[10px] font-black text-green-400/60 uppercase tracking-widest">● En Vivo</span>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 border-b border-white/[0.06]">
                    {[
                        { val: '48', label: 'Registros hoy', accent: false },
                        { val: '12', label: 'En instalación', accent: true },
                        { val: '3', label: 'Bodegas abiertas', accent: false },
                    ].map((s, i) => (
                        <div key={i} className={`px-4 py-4 ${i < 2 ? 'border-r border-white/[0.06]' : ''}`}>
                            <div className={`text-2xl font-black leading-none ${s.accent ? 'text-green-400' : 'text-white'}`}>{s.val}</div>
                            <div className="text-[9px] text-white/25 mt-1.5 leading-tight">{s.label}</div>
                        </div>
                    ))}
                </div>

                {/* Column headers */}
                <div className="grid grid-cols-[64px_1fr_80px_28px] gap-2 px-5 py-2 border-b border-white/[0.04]">
                    {['Hora', 'Nombre', 'Bodega', ''].map((h, i) => (
                        <div key={i} className="text-[9px] font-black uppercase tracking-widest text-white/15">{h}</div>
                    ))}
                </div>

                {/* Rows */}
                {rows.map((row, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.9 + i * 0.08, duration: 0.4 }}
                        className={`grid grid-cols-[64px_1fr_80px_28px] gap-2 items-center px-5 py-2.5 ${i < rows.length - 1 ? 'border-b border-white/[0.04]' : ''}`}
                    >
                        <span className="text-[11px] font-mono text-white/30">{row.time}</span>
                        <span className="text-[11px] font-semibold text-white/70 truncate">{row.name}</span>
                        <span className="text-[11px] text-white/30 truncate">{row.bodega}</span>
                        <div className="w-4 h-4 rounded-full bg-green-400/10 flex items-center justify-center border border-green-400/20">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                        </div>
                    </motion.div>
                ))}

                {/* Footer */}
                <div className="px-5 py-3 border-t border-white/[0.06] flex items-center justify-between bg-[#0A0A0A]">
                    <span className="text-[9px] text-white/20">Sincronizado hace 8s</span>
                    <div className="flex items-center gap-1.5">
                        <WifiOff className="w-3 h-3 text-safety" />
                        <span className="text-[9px] text-safety font-semibold">Offline activo</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

// ─── Offline Visual ────────────────────────────────────────────────────────
const OfflineVisual = () => (
    <div className="relative w-full h-64 flex items-center justify-center">
        {[1, 2, 3].map(i => (
            <motion.div
                key={i}
                className="absolute rounded-full border border-white/[0.06]"
                style={{ width: `${i * 120}px`, height: `${i * 120}px` }}
                animate={{ scale: [1, 1.04, 1], opacity: [0.4, 0.15, 0.4] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.6, ease: 'easeInOut' }}
            />
        ))}
        <div className="relative z-10 bg-[#111] border border-white/10 w-20 h-20 rounded-2xl flex items-center justify-center shadow-[0_20px_40px_rgba(0,0,0,0.6)]">
            <WifiOff className="w-8 h-8 text-safety" />
        </div>
        <motion.div
            className="absolute bottom-8 right-8 bg-[#0D0D0D] border border-green-500/20 rounded-xl px-3 py-2"
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
        >
            <span className="text-[10px] text-green-400 font-semibold">↑ Sincronizando 12 registros...</span>
        </motion.div>
    </div>
);

// ─── QR Visual ────────────────────────────────────────────────────────────
const QRVisual = () => (
    <div className="relative w-full h-64 flex items-center justify-center">
        <div className="bg-[#0D0D0D] border border-white/[0.08] rounded-2xl p-6 shadow-[0_40px_80px_rgba(0,0,0,0.7)]">
            <div className="flex items-center gap-2 mb-4">
                <div className="w-1.5 h-1.5 rounded-full bg-safety animate-pulse" />
                <span className="text-[10px] text-white/30 uppercase tracking-widest font-semibold">Escaneando...</span>
            </div>
            <div className="grid grid-cols-6 gap-1">
                {Array.from({ length: 36 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className="w-4 h-4 rounded-[2px]"
                        style={{ backgroundColor: Math.random() > 0.5 ? 'rgba(255,255,255,0.8)' : 'transparent' }}
                        animate={{ opacity: [1, 0.6, 1] }}
                        transition={{ duration: 1.5, delay: i * 0.02, repeat: Infinity }}
                    />
                ))}
            </div>
            <motion.div
                className="mt-4 pt-4 border-t border-white/[0.06]"
                animate={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, delay: 1.2, repeat: Infinity, repeatDelay: 2 }}
            >
                <p className="text-xs text-white/60 font-semibold">Martín López González</p>
                <p className="text-[11px] text-white/25 mt-0.5">12.345.678-9 · Autorizado</p>
            </motion.div>
        </div>
    </div>
);

// ─── FAQ ──────────────────────────────────────────────────────────────────
const faqs = [
    { q: '¿Funciona sin internet?', a: 'AccesIA registra cada entrada y salida aunque no haya red. Cuando vuelve la señal, sincroniza solo. Diseñado para la realidad de los parques industriales chilenos.' },
    { q: '¿Qué incluye el onboarding de $300.000?', a: 'Configuración de tu instancia, enrolamiento completo de tu base de datos (personal y bodegas), blindado del hardware Samsung Knox y capacitación al personal. En contratos multisede baja a $200.000 por sede.' },
    { q: '¿Puedo probar antes de pagar?', a: '5 días o 50 registros, lo que ocurra primero. Sin contrato. Sin permanencia. Solo resultados.' },
    { q: '¿Incluyen barreras físicas?', a: 'No. GenIA Tech es una empresa de software ágil. Las obras civiles se derivan a partners especializados. Sí integramos relés Wi-Fi/4G para apertura de portones desde la app como proyecto especial.' },
    { q: '¿Descuentos para múltiples sedes?', a: '15% para contratos de 4 a 10 sedes. 25% para más de 10. Contáctanos para una cotización personalizada.' },
];

const FAQItem = ({ q, a }: { q: string; a: string }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className={`border-b transition-colors duration-200 ${open ? 'border-white/10' : 'border-white/[0.06]'}`}>
            <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-6 text-left gap-8 group">
                <span className={`text-base font-semibold transition-colors ${open ? 'text-white' : 'text-white/70 group-hover:text-white'}`}>{q}</span>
                <ChevronDown className={`w-4 h-4 flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180 text-safety' : 'text-white/25'}`} />
            </button>
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22 }}
                        className="overflow-hidden"
                    >
                        <p className="pb-6 text-[#6E6E73] leading-relaxed text-sm">{a}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

// ─── Pricing ──────────────────────────────────────────────────────────────
const plans = [
    {
        id: 'start',
        name: 'Start',
        desc: 'Para bodegas con flujo bajo',
        price: '45.000',
        features: ['600 registros/mes', '1 dispositivo activo', 'Offline nativo', 'QR + manual', 'Soporte email'],
        excluded: ['Reportes automáticos', 'Dashboard multi-sede'],
        featured: false,
    },
    {
        id: 'business',
        name: 'Business',
        desc: 'El estándar industrial',
        price: '85.000',
        features: ['3.000 registros/mes', '3 dispositivos', 'Offline nativo', 'QR + manual', 'Reportes automáticos mensuales', 'Soporte prioritario'],
        excluded: ['Dashboard multi-sede'],
        featured: true,
    },
    {
        id: 'high-traffic',
        name: 'High-Traffic',
        desc: 'Corporativo y multisede',
        price: '150.000',
        features: ['Registros ilimitados', 'Dispositivos ilimitados', 'Offline nativo', 'QR + manual', 'Reportes automáticos semanales y mensuales', 'Dashboard Maestro multi-sede', 'API e integraciones', 'Soporte 24/7'],
        excluded: [],
        featured: false,
    },
];

// ─── Main ─────────────────────────────────────────────────────────────────
export const AccesIA = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    const reveal = (delay = 0) => ({
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-80px' },
        transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] },
    });

    return (
        <div className="min-h-screen bg-[#000000] text-white font-sans selection:bg-safety selection:text-white overflow-x-hidden">
            <Helmet>
                <title>AccesIA | Control de Acceso para Centros Logísticos y Bodegas — Chile</title>
                <meta name="description" content="Sistema SaaS de control de acceso para centros logísticos y bodegas en Chile. Offline nativo, escaneo QR de carnet chileno, dashboard en tiempo real. Desde $45.000 CLP/mes." />
                <meta name="keywords" content="control de acceso bodegas Chile, software acceso logístico SaaS, AccesIA GenIA Tech, sistema acceso parque industrial, offline control acceso Chile" />
                <link rel="canonical" href="https://geniatechno.com/software/accesIA" />
                <meta property="og:title" content="AccesIA — Control de Acceso Inteligente para Logística B2B" />
                <meta property="og:description" content="Offline nativo. QR de carnet chileno. Dashboard en tiempo real. Desde $45.000 CLP/mes por sede." />
                <meta property="og:url" content="https://geniatechno.com/software/accesIA" />
                <meta property="og:type" content="website" />
                <script type="application/ld+json">{JSON.stringify(schemaSoftware)}</script>
            </Helmet>

            {/* ── NAV ─────────────────────────────────────────────────── */}
            <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-12 h-16 bg-[#000]/80 backdrop-blur-xl border-b border-white/[0.06]">
                <Link to="/" className="flex items-center gap-2 group opacity-60 hover:opacity-100 transition-opacity">
                    <ArrowLeft className="w-4 h-4" />
                    <span className="text-sm font-medium">GenIA Tech</span>
                </Link>
                <span className="text-sm font-semibold tracking-tight">AccesIA</span>
                <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="accesia-nav-demo"
                    className="text-sm font-semibold text-safety hover:text-white transition-colors"
                >
                    Solicitar Demo →
                </a>
            </nav>

            <main className="pt-16">

                {/* ── HERO ────────────────────────────────────────────── */}
                <section className="relative min-h-screen flex flex-col justify-center px-6 lg:px-12 py-24">
                    {/* Subtle grid */}
                    <div className="absolute inset-0 pointer-events-none opacity-[0.025]" style={{ backgroundImage: 'linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)', backgroundSize: '72px 72px' }} />
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-40 bg-gradient-to-b from-transparent via-white/10 to-transparent" />

                    <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left: Copy */}
                        <div>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.6 }}
                                className="text-[#6E6E73] text-sm font-semibold tracking-widest uppercase mb-8"
                            >
                                AccesIA
                            </motion.p>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                                className="text-[clamp(48px,7vw,88px)] font-extrabold leading-[1.02] tracking-[-0.03em] mb-8"
                            >
                                Acceso logístico,<br />
                                <span className="text-[#6E6E73]">bajo control.</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                                className="text-[#6E6E73] text-lg leading-relaxed max-w-md mb-10"
                            >
                                Sistema SaaS de control de acceso para centros logísticos y bodegas. Funciona offline. Reportes automáticos. Desde{' '}
                                <span className="text-white font-semibold">$45.000 CLP/mes por sede.</span>
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                className="flex flex-wrap gap-4"
                            >
                                <a
                                    href={WA_LINK}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    id="accesia-hero-cta"
                                    className="inline-flex items-center gap-2 bg-safety text-white font-semibold px-7 py-3.5 rounded-full text-sm hover:bg-[#E64A19] transition-colors shadow-[0_0_30px_rgba(255,87,34,0.2)]"
                                >
                                    <MessageCircle className="w-4 h-4" />
                                    Solicitar Demo
                                </a>
                                <a
                                    href="#precios"
                                    className="inline-flex items-center gap-2 text-white/60 font-semibold px-7 py-3.5 rounded-full text-sm border border-white/[0.1] hover:border-white/20 hover:text-white transition-all"
                                >
                                    Ver planes →
                                </a>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.7 }}
                                className="flex items-center gap-6 mt-10 pt-8 border-t border-white/[0.06]"
                            >
                                <div>
                                    <p className="text-2xl font-black">5 días</p>
                                    <p className="text-[11px] text-[#6E6E73] mt-0.5">Piloto gratuito</p>
                                </div>
                                <div className="w-px h-10 bg-white/[0.08]" />
                                <div>
                                    <p className="text-2xl font-black">2 seg</p>
                                    <p className="text-[11px] text-[#6E6E73] mt-0.5">Por registro QR</p>
                                </div>
                                <div className="w-px h-10 bg-white/[0.08]" />
                                <div>
                                    <p className="text-2xl font-black">0 red</p>
                                    <p className="text-[11px] text-[#6E6E73] mt-0.5">Funciona offline</p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right: Dashboard mockup */}
                        <DashboardMockup />
                    </div>
                </section>

                {/* ── DIVIDER ──────────────────────────────────────────── */}
                <div className="border-t border-white/[0.06]" />

                {/* ── FEATURE 1: OFFLINE ───────────────────────────────── */}
                <section className="py-32 px-6 lg:px-12">
                    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
                        <OfflineVisual />
                        <div>
                            <motion.p {...reveal(0)} className="text-[#6E6E73] text-xs font-semibold uppercase tracking-widest mb-5">Offline nativo</motion.p>
                            <motion.h2 {...reveal(0.05)} className="text-[clamp(36px,5vw,64px)] font-extrabold leading-[1.05] tracking-[-0.03em] mb-6">
                                Sin señal.<br />Sin problema.
                            </motion.h2>
                            <motion.p {...reveal(0.1)} className="text-[#6E6E73] text-base leading-relaxed max-w-md">
                                AccesIA registra cada entrada y salida aunque no haya red. Pensado para la realidad de los parques industriales chilenos: zonas remotas, señal intermitente, cero tolerancia a errores. Cuando vuelve la conexión, sincroniza solo.
                            </motion.p>
                        </div>
                    </div>
                </section>

                {/* ── DIVIDER ──────────────────────────────────────────── */}
                <div className="border-t border-white/[0.06]" />

                {/* ── FEATURE 2: QR SPEED ──────────────────────────────── */}
                <section className="py-32 px-6 lg:px-12 bg-[#030303]">
                    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <motion.p {...reveal(0)} className="text-[#6E6E73] text-xs font-semibold uppercase tracking-widest mb-5">Velocidad de registro</motion.p>
                            <motion.h2 {...reveal(0.05)} className="text-[clamp(36px,5vw,64px)] font-extrabold leading-[1.05] tracking-[-0.03em] mb-6">
                                El carnet chileno<br />tiene un QR.<br />
                                <span className="text-[#6E6E73]">Lo leemos en 2 segundos.</span>
                            </motion.h2>
                            <motion.p {...reveal(0.1)} className="text-[#6E6E73] text-base leading-relaxed max-w-md">
                                Nombre, RUT, foto. Todo validado en el momento. Sin tipeo manual, sin errores humanos. Para flujos de hasta 100 personas por día sin fricción.
                            </motion.p>
                        </div>
                        <QRVisual />
                    </div>
                </section>

                {/* ── DIVIDER ──────────────────────────────────────────── */}
                <div className="border-t border-white/[0.06]" />

                {/* ── FEATURE 3: DASHBOARD ─────────────────────────────── */}
                <section className="py-32 px-6 lg:px-12">
                    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
                        {/* Mini dashboard 2 */}
                        <motion.div {...reveal(0)} className="bg-[#0D0D0D] border border-white/[0.08] rounded-2xl p-6 shadow-[0_40px_80px_rgba(0,0,0,0.7)]">
                            <div className="flex items-center justify-between mb-5">
                                <span className="text-xs font-semibold text-white/40 uppercase tracking-widest">Dashboard Maestro</span>
                                <span className="text-[10px] text-green-400/60 font-bold uppercase tracking-wider">● 3 sedes activas</span>
                            </div>
                            <div className="space-y-3">
                                {[
                                    { name: 'Bodega Central — Santiago', val: 28, max: 60 },
                                    { name: 'Planta Norte — Antofagasta', val: 15, max: 40 },
                                    { name: 'Hub Sur — Concepción', val: 41, max: 80 },
                                ].map((site, i) => (
                                    <div key={i}>
                                        <div className="flex items-center justify-between mb-1.5">
                                            <span className="text-[11px] text-white/60 font-medium">{site.name}</span>
                                            <span className="text-[11px] font-mono text-white/40">{site.val}/{site.max}</span>
                                        </div>
                                        <div className="h-1 bg-white/[0.05] rounded-full overflow-hidden">
                                            <motion.div
                                                className="h-full bg-safety rounded-full"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${(site.val / site.max) * 100}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: 0.3 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-5 pt-5 border-t border-white/[0.06] flex items-center justify-between">
                                <span className="text-[10px] text-white/20">84 registros hoy · 3 sedes</span>
                                <span className="text-[10px] text-safety font-semibold">Ver detalle →</span>
                            </div>
                        </motion.div>

                        <div>
                            <motion.p {...reveal(0)} className="text-[#6E6E73] text-xs font-semibold uppercase tracking-widest mb-5">Multi-sede</motion.p>
                            <motion.h2 {...reveal(0.05)} className="text-[clamp(36px,5vw,64px)] font-extrabold leading-[1.05] tracking-[-0.03em] mb-6">
                                Todas tus sedes.<br />
                                <span className="text-[#6E6E73]">Una pantalla.</span>
                            </motion.h2>
                            <motion.p {...reveal(0.1)} className="text-[#6E6E73] text-base leading-relaxed max-w-md">
                                El Dashboard Maestro centraliza el flujo de personas de todas tus instalaciones en tiempo real. Santiago, Antofagasta, Concepción — todo en una sola vista.
                            </motion.p>
                        </div>
                    </div>
                </section>

                {/* ── DIVIDER ──────────────────────────────────────────── */}
                <div className="border-t border-white/[0.06]" />

                {/* ── STATS ────────────────────────────────────────────── */}
                <section className="py-24 px-6 lg:px-12 bg-[#030303]">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/[0.06]">
                            {[
                                { val: '$300K', label: 'Setup único', sub: 'Todo incluido. Hardware, enrolamiento, capacitación.' },
                                { val: '25%', label: 'Descuento multisede', sub: 'Para contratos de más de 10 sedes.' },
                                { val: '5 días', label: 'Piloto gratuito', sub: 'Sin contrato. Sin permanencia.' },
                            ].map((s, i) => (
                                <motion.div key={i} {...reveal(i * 0.1)} className="px-0 md:px-12 first:pl-0 last:pr-0 py-8 md:py-0">
                                    <p className="text-[clamp(40px,5vw,60px)] font-extrabold tracking-tight leading-none mb-3">{s.val}</p>
                                    <p className="text-white font-semibold text-base mb-2">{s.label}</p>
                                    <p className="text-[#6E6E73] text-sm leading-relaxed">{s.sub}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── DIVIDER ──────────────────────────────────────────── */}
                <div className="border-t border-white/[0.06]" />

                {/* ── PRICING ──────────────────────────────────────────── */}
                <section id="precios" className="py-32 px-6 lg:px-12">
                    <div className="max-w-7xl mx-auto">
                        <motion.div {...reveal(0)} className="max-w-xl mb-16">
                            <p className="text-[#6E6E73] text-xs font-semibold uppercase tracking-widest mb-4">Planes</p>
                            <h2 className="text-[clamp(36px,4vw,52px)] font-extrabold tracking-[-0.03em] leading-tight">
                                Simple de entender.<br />
                                <span className="text-[#6E6E73]">Fácil de escalar.</span>
                            </h2>
                        </motion.div>

                        <div className="grid lg:grid-cols-3 gap-4">
                            {plans.map((plan, i) => (
                                <motion.div
                                    key={plan.id}
                                    {...reveal(i * 0.1)}
                                    className={`relative rounded-2xl p-8 flex flex-col ${plan.featured
                                        ? 'bg-[#0F0F0F] border border-white/15 shadow-[0_0_60px_rgba(255,87,34,0.08)]'
                                        : 'bg-[#0A0A0A] border border-white/[0.07]'
                                        }`}
                                >
                                    {plan.featured && (
                                        <div className="absolute -top-px left-6 right-6 h-px bg-gradient-to-r from-transparent via-safety/60 to-transparent" />
                                    )}
                                    <div className="mb-8">
                                        <p className="text-white font-bold text-lg mb-1">{plan.name}</p>
                                        <p className="text-[#6E6E73] text-sm">{plan.desc}</p>
                                    </div>

                                    <div className="mb-8">
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-4xl font-extrabold tracking-tight">${plan.price}</span>
                                            <span className="text-[#6E6E73] text-sm">CLP/mes por sede</span>
                                        </div>
                                    </div>

                                    <ul className="space-y-3 flex-1 mb-8">
                                        {plan.features.map(f => (
                                            <li key={f} className="flex items-start gap-2.5 text-sm">
                                                <CheckCircle2 className="w-4 h-4 text-white/40 flex-shrink-0 mt-0.5" />
                                                <span className="text-white/70">{f}</span>
                                            </li>
                                        ))}
                                        {plan.excluded.map(f => (
                                            <li key={f} className="flex items-start gap-2.5 text-sm">
                                                <X className="w-4 h-4 text-white/15 flex-shrink-0 mt-0.5" />
                                                <span className="text-white/20">{f}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <a
                                        href={WA_LINK}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        id={`accesia-plan-${plan.id}`}
                                        className={`w-full text-center py-3.5 rounded-xl font-semibold text-sm transition-all ${plan.featured
                                            ? 'bg-safety text-white hover:bg-[#E64A19] shadow-[0_0_20px_rgba(255,87,34,0.2)]'
                                            : 'border border-white/10 text-white/60 hover:border-white/20 hover:text-white'
                                            }`}
                                    >
                                        Solicitar Demo
                                    </a>
                                </motion.div>
                            ))}
                        </div>

                        {/* Add-ons */}
                        <motion.div {...reveal(0.15)} className="mt-5 grid md:grid-cols-2 gap-4">
                            <div className="bg-[#0A0A0A] border border-white/[0.07] rounded-2xl p-6 flex items-start gap-4">
                                <div className="w-10 h-10 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0 text-blue-400 text-xs font-black">KIT</div>
                                <div>
                                    <p className="text-white font-semibold text-sm mb-1">Add-on: Kit Satelital <span className="text-[#6E6E73] font-normal">+$30.000 CLP/mes</span></p>
                                    <p className="text-[#6E6E73] text-sm leading-relaxed">Samsung Galaxy A17 5G con Knox, carcasa reforzada y conectividad Entel o Starlink. Para zonas sin señal.</p>
                                </div>
                            </div>
                            <div className="bg-[#0A0A0A] border border-white/[0.07] rounded-2xl p-6 flex items-start gap-4">
                                <div className="w-10 h-10 bg-green-500/10 border border-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0 text-green-400 text-xs font-black">%</div>
                                <div>
                                    <p className="text-white font-semibold text-sm mb-1">Descuento por volumen</p>
                                    <p className="text-[#6E6E73] text-sm leading-relaxed">15% para 4–10 sedes · 25% para más de 10 sedes. Onboarding desde <span className="text-white">$200.000 CLP/sede</span> en multisede.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* ── DIVIDER ──────────────────────────────────────────── */}
                <div className="border-t border-white/[0.06]" />

                {/* ── FAQ ──────────────────────────────────────────────── */}
                <section id="faq" className="py-32 px-6 lg:px-12 bg-[#030303]">
                    <div className="max-w-3xl mx-auto">
                        <motion.div {...reveal(0)} className="mb-14">
                            <p className="text-[#6E6E73] text-xs font-semibold uppercase tracking-widest mb-4">Preguntas frecuentes</p>
                            <h2 className="text-[clamp(32px,4vw,48px)] font-extrabold tracking-[-0.03em]">Todo lo que necesitas saber.</h2>
                        </motion.div>
                        <motion.div {...reveal(0.05)}>
                            {faqs.map(f => <FAQItem key={f.q} q={f.q} a={f.a} />)}
                        </motion.div>
                    </div>
                </section>

                {/* ── DIVIDER ──────────────────────────────────────────── */}
                <div className="border-t border-white/[0.06]" />

                {/* ── FINAL CTA ────────────────────────────────────────── */}
                <section className="py-40 px-6 lg:px-12 text-center relative overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-safety/[0.04] blur-[120px] rounded-full" />
                    </div>
                    <div className="relative z-10 max-w-3xl mx-auto">
                        <motion.p {...reveal(0)} className="text-[#6E6E73] text-xs font-semibold uppercase tracking-widest mb-6">AccesIA</motion.p>
                        <motion.h2 {...reveal(0.05)} className="text-[clamp(48px,7vw,88px)] font-extrabold leading-[1.02] tracking-[-0.03em] mb-6">
                            Tu operación,<br />
                            <span className="text-[#6E6E73]">bajo control.</span>
                        </motion.h2>
                        <motion.p {...reveal(0.1)} className="text-[#6E6E73] text-base mb-10 max-w-md mx-auto">
                            5 días de prueba real en tu bodega o parque industrial. Sin contrato. Sin permanencia.
                        </motion.p>
                        <motion.div {...reveal(0.15)} className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href={WA_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                id="accesia-final-cta"
                                className="inline-flex items-center gap-2 bg-safety text-white font-semibold px-8 py-4 rounded-full text-sm hover:bg-[#E64A19] transition-colors shadow-[0_0_40px_rgba(255,87,34,0.2)]"
                            >
                                <MessageCircle className="w-4 h-4" />
                                Solicitar Demo por WhatsApp
                            </a>
                            <Link
                                to="/contacto"
                                id="accesia-final-contact"
                                className="inline-flex items-center gap-2 text-white/50 font-semibold px-8 py-4 rounded-full text-sm border border-white/[0.1] hover:border-white/20 hover:text-white transition-all"
                            >
                                Enviar formulario
                            </Link>
                        </motion.div>
                        <motion.p {...reveal(0.2)} className="text-[#6E6E73] text-xs mt-10 opacity-40">
                            Servicios Tecnológicos GenIA SpA · Santiago, Chile
                        </motion.p>
                    </div>
                </section>

            </main>
        </div>
    );
};
