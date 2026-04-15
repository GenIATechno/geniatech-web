import { useState, useEffect, lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, CheckCircle2, ShieldAlert, TrendingUp, Sparkles, Facebook, Instagram, Linkedin, Youtube, MessageSquare, Bot, BarChart3, ChevronDown } from 'lucide-react';

import { ParticleBackground } from './components/ParticleBackground';

// Lazy load below-the-fold components to accelerate initial page load speed
const GlowCard = lazy(() => import('./components/GlowCard').then(m => ({ default: m.GlowCard })));
const AnimatedCounter = lazy(() => import('./components/AnimatedCounter').then(m => ({ default: m.AnimatedCounter })));
const GlobalMouseGlow = lazy(() => import('./components/GlobalMouseGlow').then(m => ({ default: m.GlobalMouseGlow })));
const ROICalculator = lazy(() => import('./components/ROICalculator').then(m => ({ default: m.ROICalculator })));
const COICalculator = lazy(() => import('./components/COICalculator').then(m => ({ default: m.COICalculator })));
const AIGeneratorNiches = lazy(() => import('./components/AIGeneratorNiches').then(m => ({ default: m.AIGeneratorNiches })));
const SystemStatus = lazy(() => import('./components/SystemStatus').then(m => ({ default: m.SystemStatus })));
const WorkflowSteps = lazy(() => import('./components/WorkflowSteps').then(m => ({ default: m.WorkflowSteps })));
import { Link } from 'react-router-dom';

const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://geniatechno.com/#organization",
    "name": "GenIA Tech SpA",
    "alternateName": "GenIA Tech",
    "url": "https://geniatechno.com/",
    "logo": "https://geniatechno.com/favicon.png",
    "image": "https://geniatechno.com/tech_glow_bg.png",
    "description": "Empresa de automatización empresarial, software a medida e inteligencia artificial B2B en Chile. Resolvemos cuellos de botella operativos con tecnología deployada en semanas.",
    "slogan": "Inteligencia Operativa. Escalabilidad Absoluta.",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Santiago",
        "addressRegion": "Región Metropolitana",
        "addressCountry": "CL"
    },
    "areaServed": {
        "@type": "Country",
        "name": "Chile"
    },
    "priceRange": "$$$",
    "knowsAbout": [
        "Automatización Empresarial",
        "Software a Medida",
        "Inteligencia Artificial B2B",
        "Sistemas de Supervisión Operativa",
        "Automatización de Procesos"
    ],
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Servicios GenIA Tech",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Automatización Empresarial Chile",
                    "url": "https://geniatechno.com/servicios/automatizacion-empresarial"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Software a Medida para Empresas Chile",
                    "url": "https://geniatechno.com/servicios/software-a-medida"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Inteligencia Artificial B2B Chile",
                    "url": "https://geniatechno.com/servicios/inteligencia-artificial-b2b"
                }
            }
        ]
    },
    "sameAs": [
        "https://www.linkedin.com/company/geniatech"
    ]
};

const ChileFlag = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-3.5 h-3.5 rounded-sm overflow-hidden flex-shrink-0">
        <path fill="#d52b1e" d="M0 256h512v256H0z" />
        <path fill="#fff" d="M170.7 0H512v256H170.7z" />
        <path fill="#0039a6" d="M0 0h170.7v256H0z" />
        <path fill="#fff" d="M120.4 175.7 85.3 150l-35.1 25.7 13.5-40.9-35.1-25.7h43.3L85.3 68l13.4 41.1h43.3l-35.1 25.7 13.5 40.9z" />
    </svg>
);

const LeadForm = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        area: '', areaOtra: '', desafio: '', urgencia: '', presupuesto: '',
        nombre: '', empresa: '', whatsapp: '', email: '',
        tracking: '', trackingOtro: '', referidoNombre: '',
        countryCode: '+56'
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const updateForm = (key: string, val: string) => {
        setFormData(prev => ({ ...prev, [key]: val }));
        // Clean error explicitly if field changes
        if (errors[key]) {
            setErrors(prev => ({ ...prev, [key]: '' }));
        }
    };

    const handleNext = () => setStep(prev => prev + 1);
    const handleBack = () => setStep(prev => prev - 1);

    const handleNextStep5 = () => {
        const newErrors: { [key: string]: string } = {};
        if (formData.nombre.trim().length < 3) newErrors.nombre = "Nombre muy corto (mín. 3 letras).";
        if (formData.empresa.trim().length < 2) newErrors.empresa = "Ingresa una empresa válida.";
        if (!/^[0-9]{8,15}$/.test(formData.whatsapp)) newErrors.whatsapp = "El número debe tener entre 8 y 15 dígitos.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Correo con formato inválido.";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            setErrors({});
            handleNext();
        }
    };

    if (isSubmitted) {
        return (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-[#0A0A0A] p-8 rounded-[24px] border border-gray-800/80 shadow-[0_0_50px_rgba(255,87,34,0.15)] flex flex-col items-center justify-center text-center h-full min-h-[450px]">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200, damping: 20 }} className="w-24 h-24 bg-safety/20 rounded-full flex items-center justify-center mb-6 border border-safety/30">
                    <CheckCircle2 className="w-12 h-12 text-safety" />
                </motion.div>
                <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">¡Solicitud Registrada!</h3>
                <p className="text-gray-400 max-w-sm mb-8">El equipo de análisis de GenIA Tech está revisando tu caso o ya hemos recibido una solicitud de tu dispositivo hoy. Nos pondremos en contacto en breve.</p>
                <button onClick={() => { setIsSubmitted(false); setStep(1); }} className="text-gray-500 font-bold text-xs tracking-widest uppercase hover:text-safety transition-colors">Volver al inicio</button>
            </motion.div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#0A0A0A] p-6 md:p-8 rounded-[24px] border border-gray-800/80 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden h-full flex flex-col justify-center min-h-[480px]"
        >
            <div className="absolute top-0 right-0 w-64 h-64 bg-safety/5 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="flex justify-between items-center mb-8 relative z-10">
                <div className="flex items-center gap-3">
                    {step > 1 && (
                        <button onClick={handleBack} className="text-gray-400 hover:text-white transition-colors bg-[#111] border border-gray-800 p-2 rounded-full cursor-pointer hover:bg-gray-800">
                            <span className="sr-only">Volver</span>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                        </button>
                    )}
                    <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white mb-0">Inicia tu transformación</h3>
                </div>
                <span className="text-xs font-bold text-gray-400 bg-gray-900 border border-gray-800 px-3 py-1 rounded-full whitespace-nowrap">Paso {step} / 6</span>
            </div>

            <div className="w-full bg-[#1A1A1A] h-1.5 rounded-full mb-8 overflow-hidden relative z-10">
                <motion.div
                    className="h-full bg-safety"
                    initial={{ width: 0 }}
                    animate={{ width: `${(step / 6) * 100}%` }}
                    transition={{ duration: 0.4, ease: "circOut" }}
                />
            </div>

            <div className="flex-1 relative z-10">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={step}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                        {step === 1 && (
                            <div className="space-y-4">
                                <label className="block text-sm font-medium text-gray-400 mb-3">¿En qué sector o área principal operas?</label>
                                <div className="grid grid-cols-2 gap-3">
                                    {['Seguridad Privada', 'Minería e Industria', 'Agricultura y Forestal', 'Logística y Transporte', 'Retail y Comercio', 'Servicios Profesionales'].map(opt => (
                                        <motion.button
                                            whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 87, 34, 0.05)" }} whileTap={{ scale: 0.98 }}
                                            key={opt} onClick={() => { updateForm('area', opt); handleNext(); }}
                                            className={`p-3.5 rounded-xl border text-sm font-semibold text-left transition-all ${formData.area === opt ? 'border-safety bg-safety/10 text-white' : 'border-gray-800 hover:border-gray-600 bg-[#111111] text-gray-300'}`}
                                        >
                                            {opt}
                                        </motion.button>
                                    ))}
                                    <motion.button
                                        whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                                        onClick={() => updateForm('area', 'Otra')}
                                        className={`p-3.5 rounded-xl border col-span-2 text-sm font-semibold text-center transition-all ${formData.area === 'Otra' ? 'border-safety bg-[#111] text-white' : 'border-gray-800 hover:border-gray-600 bg-[#111111] text-gray-300'}`}
                                    >
                                        Otra área...
                                    </motion.button>
                                </div>
                                {formData.area === 'Otra' && (
                                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="pt-2 flex gap-2">
                                        <input type="text" placeholder="¿Cuál es tu área?" value={formData.areaOtra} onChange={e => updateForm('areaOtra', e.target.value)} className="flex-1 bg-[#111] border border-gray-800 rounded-xl p-3.5 text-white focus:border-safety transition-colors outline-none font-medium text-sm" />
                                        <button onClick={handleNext} disabled={!formData.areaOtra.trim()} className="bg-safety text-white px-4 rounded-xl disabled:opacity-50 font-bold"><ArrowRight className="w-5 h-5" /></button>
                                    </motion.div>
                                )}
                            </div>
                        )}

                        {step === 2 && (
                            <div className="space-y-4">
                                <label className="block text-sm font-medium text-gray-400 mb-2">¿Cuál es tu problema o cuello de botella diario?</label>
                                <p className="text-xs text-gray-500 mb-4 inline-block">Menciona esa tarea que odias hacer manualmente.</p>
                                <textarea
                                    rows={4}
                                    value={formData.desafio}
                                    onChange={(e) => updateForm('desafio', e.target.value)}
                                    className="w-full bg-[#111111] border border-gray-800 rounded-xl p-4 text-white focus:outline-none focus:border-safety transition-all resize-none shadow-inner text-sm"
                                    placeholder="Ej: Perdemos 3 horas diarias en cruzar planillas de inventario..."
                                />
                                <motion.button
                                    whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                                    onClick={handleNext} disabled={!formData.desafio.trim()}
                                    className="w-full bg-safety text-white p-4 rounded-xl font-bold disabled:opacity-50 flex justify-center items-center gap-2"
                                >
                                    Siguiente paso <ArrowRight className="w-5 h-5" />
                                </motion.button>
                            </div>
                        )}

                        {step === 3 && (
                            <div className="space-y-4">
                                <label className="block text-sm font-medium text-gray-400 mb-3">¿Cuándo te gustaría tener esto implementado?</label>
                                <div className="flex flex-col gap-3">
                                    {['Lo antes posible (Crítico)', 'Planificación a 1-3 meses', 'Aún evaluando retorno / Dudas'].map(opt => (
                                        <motion.button
                                            whileHover={{ x: 5 }} whileTap={{ scale: 0.98 }}
                                            key={opt} onClick={() => { updateForm('urgencia', opt); handleNext(); }}
                                            className={`p-4 rounded-xl border text-sm font-semibold text-left transition-all ${formData.urgencia === opt ? 'border-safety bg-safety/10 text-white shadow-[0_0_15px_rgba(255,87,34,0.1)]' : 'border-gray-800 hover:border-gray-600 bg-[#111111] text-gray-300'}`}
                                        >
                                            {opt}
                                        </motion.button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {step === 4 && (
                            <div className="space-y-4">
                                <label className="block text-sm font-medium text-gray-400 mb-3">Rango de inversión inicial estimado (CLP)</label>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-2">
                                    {['<$1.5M', '$1.5M - $3.5M', '+$3.5M Proyecto Elite'].map(opt => (
                                        <motion.button
                                            whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                                            key={opt} onClick={() => { updateForm('presupuesto', opt); handleNext(); }}
                                            className={`p-4 rounded-xl border text-sm font-semibold text-center transition-all ${formData.presupuesto === opt ? 'border-safety bg-safety/10 text-white' : 'border-gray-800 hover:border-gray-600 bg-[#111111] text-gray-300'}`}
                                        >
                                            {opt}
                                        </motion.button>
                                    ))}
                                    <motion.button
                                        whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                                        onClick={() => { updateForm('presupuesto', 'Por Evaluar / Dudas'); handleNext(); }}
                                        className={`p-4 rounded-xl border text-sm font-semibold text-center transition-all ${formData.presupuesto === 'Por Evaluar / Dudas' ? 'border-safety bg-safety/10 text-white' : 'border-gray-800 hover:border-gray-600 bg-[#111111] text-gray-500'}`}
                                    >
                                        No definido / Ayúdenme
                                    </motion.button>
                                </div>
                            </div>
                        )}

                        {step === 5 && (
                            <div className="space-y-4">
                                <label className="block text-sm font-medium text-gray-400 mb-3">Tus datos de contacto corporativo</label>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <input type="text" placeholder="Nombre completo" value={formData.nombre} onChange={e => updateForm('nombre', e.target.value)} className={`w-full bg-[#111111] border ${errors.nombre ? 'border-red-500' : 'border-gray-800'} rounded-xl p-3.5 text-white focus:outline-none focus:border-safety font-medium text-sm transition-colors`} />
                                        {errors.nombre && <span className="text-red-500 text-xs font-semibold">{errors.nombre}</span>}
                                    </div>
                                    <div className="space-y-1">
                                        <input type="text" placeholder="Empresa / Proyecto" value={formData.empresa} onChange={e => updateForm('empresa', e.target.value)} className={`w-full bg-[#111111] border ${errors.empresa ? 'border-red-500' : 'border-gray-800'} rounded-xl p-3.5 text-white focus:outline-none focus:border-safety font-medium text-sm transition-colors`} />
                                        {errors.empresa && <span className="text-red-500 text-xs font-semibold">{errors.empresa}</span>}
                                    </div>
                                    <div className="space-y-1">
                                        <div className={`flex items-center w-full bg-[#111111] border ${errors.whatsapp ? 'border-red-500' : 'border-gray-800'} rounded-xl focus-within:border-safety transition-colors overflow-hidden relative`}>
                                            <div className="flex items-center justify-center bg-[#1A1A1A] border-r border-gray-800 px-4 py-3.5 h-full">
                                                <span className="text-white text-sm font-bold opacity-80">+56</span>
                                            </div>
                                            <input type="tel" placeholder="WhatsApp (Ej: 9 1234 5678)" value={formData.whatsapp} onChange={e => updateForm('whatsapp', e.target.value.replace(/\D/g, ''))} className="w-full bg-transparent p-3.5 text-white focus:outline-none font-medium text-sm" />
                                        </div>
                                        {errors.whatsapp && <span className="text-red-500 text-xs font-semibold">{errors.whatsapp}</span>}
                                    </div>
                                    <div className="space-y-1">
                                        <input type="email" placeholder="Email (corporativo preferido)" value={formData.email} onChange={e => updateForm('email', e.target.value)} className={`w-full bg-[#111111] border ${errors.email ? 'border-red-500' : 'border-gray-800'} rounded-xl p-3.5 text-white focus:outline-none focus:border-safety font-medium text-sm transition-colors`} />
                                        {errors.email && <span className="text-red-500 text-xs font-semibold">{errors.email}</span>}
                                    </div>
                                </div>
                                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={handleNextStep5}
                                    className="w-full bg-safety text-white p-4 rounded-xl font-bold shadow-lg shadow-safety/20 mt-4 flex justify-center items-center gap-2">
                                    Revisión Final <ArrowRight className="w-5 h-5" />
                                </motion.button>
                            </div>
                        )}

                        {step === 6 && (
                            <div className="space-y-4">
                                <label className="block text-sm font-medium text-gray-400 mb-3">Verificación final: ¿Cómo llegaste a GenIA Tech?</label>
                                <div className="grid grid-cols-2 gap-3 mb-4">
                                    {['LinkedIn', 'Instagram / Social', 'Google / Web', 'Recomendación'].map(opt => (
                                        <motion.button
                                            whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                                            key={opt} onClick={() => updateForm('tracking', opt)}
                                            className={`p-3.5 rounded-xl border font-semibold text-xs md:text-sm text-center transition-all ${formData.tracking === opt ? 'border-safety bg-safety/10 text-white' : 'border-gray-800 hover:border-gray-600 bg-[#111111] text-gray-300'}`}
                                        >
                                            {opt}
                                        </motion.button>
                                    ))}
                                    <motion.button
                                        whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                                        onClick={() => updateForm('tracking', 'Otro')}
                                        className={`p-3.5 rounded-xl border col-span-2 font-semibold text-xs md:text-sm text-center transition-all ${formData.tracking === 'Otro' ? 'border-safety bg-[#111] text-white' : 'border-gray-800 hover:border-gray-600 bg-[#111111] text-gray-300'}`}
                                    >
                                        Otro canal...
                                    </motion.button>
                                </div>
                                {formData.tracking === 'Recomendación' && (
                                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}>
                                        <input type="text" placeholder="Nombre completo de quien te refirió" value={formData.referidoNombre} onChange={e => updateForm('referidoNombre', e.target.value)} className="w-full bg-[#111111] border border-gray-800 rounded-xl p-3.5 text-white focus:outline-none focus:border-safety font-medium text-sm mt-2" />
                                    </motion.div>
                                )}
                                {formData.tracking === 'Otro' && (
                                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}>
                                        <input type="text" placeholder="Especifica por favor" value={formData.trackingOtro} onChange={e => updateForm('trackingOtro', e.target.value)} className="w-full bg-[#111111] border border-gray-800 rounded-xl p-3.5 text-white focus:outline-none focus:border-safety font-medium text-sm mt-2" />
                                    </motion.div>
                                )}
                                <motion.button
                                    whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                                    onClick={async () => {
                                        // RATE LIMITING SPAM PROTECTION (24 Hours)
                                        const lastSub = localStorage.getItem('geniatech_last_sub');
                                        if (lastSub) {
                                            const timeDiff = new Date().getTime() - parseInt(lastSub);
                                            // Si la solicitud fue hecha hace menos de 24 hrs
                                            if (timeDiff < 24 * 60 * 60 * 1000) {
                                                setIsSubmitted(true);
                                                return;
                                            }
                                        }

                                        setIsSubmitting(true);
                                        try {
                                            const webhookUrl = (import.meta as any).env.VITE_N8N_WEBHOOK_URL || 'https://n8n-whatssapp-n8n.bdlk9h.easypanel.host/webhook/geniatech-leads';
                                            await fetch(webhookUrl, {
                                                method: 'POST',
                                                headers: { 'Content-Type': 'application/json' },
                                                body: JSON.stringify({
                                                    ...formData,
                                                    source: 'Geniatech Landing Page',
                                                    timestamp: new Date().toISOString()
                                                })
                                            });
                                            localStorage.setItem('geniatech_last_sub', new Date().getTime().toString());
                                        } catch (error) {
                                            console.error("Error al enviar el formulario a n8n:", error);
                                        } finally {
                                            setIsSubmitting(false);
                                            setIsSubmitted(true);
                                        }
                                    }}
                                    disabled={!formData.tracking || (formData.tracking === 'Recomendación' && !formData.referidoNombre) || (formData.tracking === 'Otro' && !formData.trackingOtro) || isSubmitting}
                                    className="w-full bg-safety text-white p-4 rounded-xl text-lg font-black shadow-lg shadow-safety/20 disabled:opacity-50 mt-4 flex justify-center items-center gap-2 tracking-wide uppercase transition-all hover:bg-[#E64A19] hover:shadow-[0_0_30px_rgba(255,87,34,0.4)] relative overflow-hidden group">
                                    <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 group-hover:translate-x-full duration-1000 transition-transform"></div>
                                    {isSubmitting ? (
                                        <>Procesando... <span className="animate-spin w-5 h-5 border-2 border-white/30 border-t-white rounded-full"></span></>
                                    ) : (
                                        <>Solicitar Auditoría <CheckCircle2 className="w-6 h-6" /></>
                                    )}
                                </motion.button>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>
        </motion.div>
    );
};


export default function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [focusForm, setFocusForm] = useState(false);
    const [isAtBottom, setIsAtBottom] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
    const [isIndustriasOpen, setIsIndustriasOpen] = useState(false);
    const [isMobileIndustriasOpen, setIsMobileIndustriasOpen] = useState(false);
    const [isSoftwareOpen, setIsSoftwareOpen] = useState(false);
    const [isMobileSoftwareOpen, setIsMobileSoftwareOpen] = useState(false);

    useEffect(() => {
        const handleOpenForm = () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setTimeout(() => setFocusForm(true), 300);
        };

        const handleScroll = () => {
            const atBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 150;
            setIsAtBottom(atBottom);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('open-form', handleOpenForm);

        return () => {
            window.removeEventListener('open-form', handleOpenForm);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Variates for stagger animations
    const fadeUpVariant = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
    };

    return (
        <div className="min-h-screen bg-[#000000] text-white font-sans selection:bg-safety selection:text-white pb-0 relative">
            <Suspense fallback={null}>
                <GlobalMouseGlow />
                <SystemStatus />
            </Suspense>
            <Helmet>
                <title>GenIA Tech | Automatización Empresarial, Software a Medida e IA B2B en Chile</title>
                <meta name="description" content="Automatización empresarial, software a medida e inteligencia artificial B2B para empresas en Chile. Resolvemos problemas operativos críticos con soluciones deployadas en semanas. Santiago, Chile." />
                <meta name="keywords" content="automatización empresarial Chile, software a medida empresas Chile, inteligencia artificial B2B Chile, sistema supervisión operativa Santiago, automatización de procesos B2B" />
                <link rel="canonical" href="https://geniatechno.com/" />
                <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
            </Helmet>

            {/* Inline styles for CSS Marquee */}
            <style>
                {`
        @keyframes scrollMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scrollMarquee {
          animation: scrollMarquee 35s linear infinite;
        }
        .mask-linear-edges {
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }
        `}
            </style>

            {/* TOP BANNER */}
            <div className="bg-[#0A0A0A] text-gray-300 border-b border-gray-900 text-[11px] font-bold py-2.5 text-center tracking-widest uppercase flex items-center justify-center gap-2 z-[60] relative">
                <Sparkles className="w-3.5 h-3.5 text-safety animate-pulse" /> IMPLEMENTAMOS SOLUCIONES DE EFICIENCIA OPERATIVA A MEDIDA <ArrowRight className="w-3.5 h-3.5 ml-1 text-safety" />
            </div>

            {/* NAVBAR */}
            <nav className="fixed w-full z-50 bg-[#000000]/80 backdrop-blur-xl border-b border-[#1A1A1A] top-[34px]">
                <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="flex items-center gap-3">
                            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-[26px] font-black tracking-tighter text-white hover:opacity-80 transition-all active:scale-95 group">
                                Gen<span className="text-safety group-hover:drop-shadow-[0_0_8px_rgba(255,87,34,0.8)] transition-all">IA</span> Tech
                            </button>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="hidden md:flex items-center space-x-8 text-sm font-semibold">
                            {/* Dropdown Software */}
                            <div className="relative" onMouseEnter={() => setIsSoftwareOpen(true)} onMouseLeave={() => setIsSoftwareOpen(false)}>
                                <button className={`flex items-center gap-1 cursor-pointer transition-colors ${isSoftwareOpen ? 'text-safety' : 'text-gray-300 hover:text-safety'}`}>
                                    Software <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isSoftwareOpen ? 'rotate-180' : ''}`} />
                                </button>
                                <AnimatePresence>
                                    {isSoftwareOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 8 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 8 }}
                                            transition={{ duration: 0.15 }}
                                            className="absolute top-full left-0 mt-3 w-64 bg-[#0A0A0A] border border-gray-800 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden z-50"
                                        >
                                            <div className="px-5 pt-3 pb-2">
                                                <span className="text-[10px] font-black uppercase tracking-widest text-gray-600">Nuestros Productos</span>
                                            </div>
                                            <Link to="/software/accesIA" onClick={() => setIsSoftwareOpen(false)} className="flex items-center gap-3 px-5 py-3.5 hover:bg-[#111] transition-colors border-b border-gray-900 group">
                                                <div className="w-8 h-8 bg-safety/10 border border-safety/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                                    <span className="text-safety text-xs font-black">AC</span>
                                                </div>
                                                <div>
                                                    <p className="text-white font-bold text-sm group-hover:text-safety transition-colors">AccesIA</p>
                                                    <p className="text-gray-500 text-xs">Control de acceso logístico</p>
                                                </div>
                                            </Link>
                                            <div className="px-5 py-3 opacity-50 cursor-default">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 bg-gray-800 border border-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                                                        <span className="text-gray-500 text-xs font-black">GG</span>
                                                    </div>
                                                    <div>
                                                        <p className="text-gray-500 font-bold text-sm">GenIA Guard</p>
                                                        <p className="text-gray-700 text-xs">Próximamente</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                            {/* Dropdown Servicios */}
                            <div className="relative" onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)}>
                                <button className={`flex items-center gap-1 cursor-pointer transition-colors ${isServicesOpen ? 'text-safety' : 'text-gray-300 hover:text-safety'}`}>
                                    Servicios <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                                </button>
                                <AnimatePresence>
                                    {isServicesOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 8 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 8 }}
                                            transition={{ duration: 0.15 }}
                                            className="absolute top-full left-0 mt-3 w-64 bg-[#0A0A0A] border border-gray-800 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden z-50"
                                        >
                                            <Link to="/servicios/automatizacion-empresarial" onClick={() => setIsServicesOpen(false)} className="flex items-center gap-3 px-5 py-4 text-gray-300 hover:text-white hover:bg-[#111] transition-colors text-sm font-semibold border-b border-gray-900">
                                                Automatización Empresarial
                                            </Link>
                                            <Link to="/servicios/software-a-medida" onClick={() => setIsServicesOpen(false)} className="flex items-center gap-3 px-5 py-4 text-gray-300 hover:text-white hover:bg-[#111] transition-colors text-sm font-semibold border-b border-gray-900">
                                                Software a Medida
                                            </Link>
                                            <Link to="/servicios/inteligencia-artificial-b2b" onClick={() => setIsServicesOpen(false)} className="flex items-center gap-3 px-5 py-4 text-gray-300 hover:text-white hover:bg-[#111] transition-colors text-sm font-semibold">
                                                Inteligencia Artificial B2B
                                            </Link>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                            {/* Dropdown Industrias */}
                            <div className="relative" onMouseEnter={() => setIsIndustriasOpen(true)} onMouseLeave={() => setIsIndustriasOpen(false)}>
                                <button className={`flex items-center gap-1 cursor-pointer transition-colors ${isIndustriasOpen ? 'text-safety' : 'text-gray-300 hover:text-safety'}`}>
                                    Industrias <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isIndustriasOpen ? 'rotate-180' : ''}`} />
                                </button>
                                <AnimatePresence>
                                    {isIndustriasOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 8 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 8 }}
                                            transition={{ duration: 0.15 }}
                                            className="absolute top-full left-0 mt-3 w-72 bg-[#0A0A0A] border border-gray-800 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden z-50"
                                        >
                                            <Link to="/industrias/inmobiliarias" onClick={() => setIsIndustriasOpen(false)} className="flex items-center gap-3 px-5 py-3.5 text-gray-300 hover:text-white hover:bg-[#111] transition-colors text-sm font-semibold border-b border-gray-900">Inmobiliarias</Link>
                                            <Link to="/industrias/seguridad-privada" onClick={() => setIsIndustriasOpen(false)} className="flex items-center gap-3 px-5 py-3.5 text-gray-300 hover:text-white hover:bg-[#111] transition-colors text-sm font-semibold border-b border-gray-900">Seguridad Privada</Link>
                                            <Link to="/industrias/agroindustria" onClick={() => setIsIndustriasOpen(false)} className="flex items-center gap-3 px-5 py-3.5 text-gray-300 hover:text-white hover:bg-[#111] transition-colors text-sm font-semibold border-b border-gray-900">Agroindustria</Link>
                                            <Link to="/industrias/construccion" onClick={() => setIsIndustriasOpen(false)} className="flex items-center gap-3 px-5 py-3.5 text-gray-300 hover:text-white hover:bg-[#111] transition-colors text-sm font-semibold border-b border-gray-900">Construcción</Link>
                                            <Link to="/industrias/mineria" onClick={() => setIsIndustriasOpen(false)} className="flex items-center gap-3 px-5 py-3.5 text-gray-300 hover:text-white hover:bg-[#111] transition-colors text-sm font-semibold border-b border-gray-900">Minería</Link>
                                            <Link to="/industrias/logistica-transporte" onClick={() => setIsIndustriasOpen(false)} className="flex items-center gap-3 px-5 py-3.5 text-gray-300 hover:text-white hover:bg-[#111] transition-colors text-sm font-semibold border-b border-gray-900">Logística y Transporte</Link>
                                            <Link to="/industrias/clinicas-salud" onClick={() => setIsIndustriasOpen(false)} className="flex items-center gap-3 px-5 py-3.5 text-gray-300 hover:text-white hover:bg-[#111] transition-colors text-sm font-semibold border-b border-gray-900">Clínicas y Salud</Link>
                                            <Link to="/industrias/retail-comercio" onClick={() => setIsIndustriasOpen(false)} className="flex items-center gap-3 px-5 py-3.5 text-gray-300 hover:text-white hover:bg-[#111] transition-colors text-sm font-semibold border-b border-gray-900">Retail y Comercio</Link>
                                            <Link to="/industrias/otec-otic" onClick={() => setIsIndustriasOpen(false)} className="flex items-center gap-3 px-5 py-3.5 text-gray-300 hover:text-white hover:bg-[#111] transition-colors text-sm font-semibold border-b border-gray-900">OTEC / OTIC</Link>
                                            <Link to="/industrias/servicios-profesionales" onClick={() => setIsIndustriasOpen(false)} className="flex items-center gap-3 px-5 py-3.5 text-gray-300 hover:text-white hover:bg-[#111] transition-colors text-sm font-semibold">Servicios Profesionales</Link>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                            <Link to="/casos" className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-safety to-orange-400">Casos B2B</Link>
                            <Link to="/nosotros" className="text-gray-300 hover:text-safety transition-colors">Nosotros</Link>
                            <Link to="/blog" className="text-gray-300 hover:text-safety transition-colors">Blog</Link>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="hidden md:flex items-center gap-4">
                            <div className="flex items-center gap-2 bg-[#111111] border border-gray-800 px-3 py-1.5 rounded-full text-xs font-semibold mr-2 cursor-pointer hover:bg-gray-800 transition-colors">
                                <ChileFlag /> Chile <ChevronDown className="w-3 h-3 text-gray-400" />
                            </div>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link
                                    to="/contacto"
                                    className="bg-safety text-white px-5 py-2.5 rounded-full font-bold hover:bg-[#E64A19] transition-colors flex items-center gap-2 text-sm shadow-[0_0_20px_rgba(255,87,34,0.3)]"
                                >
                                    Mi Diagnóstico
                                </Link>
                            </motion.div>
                        </motion.div>

                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-300 hover:text-white p-2">
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden bg-[#0A0A0A] border-b border-[#1A1A1A] overflow-hidden"
                        >
                            <div className="px-4 py-6 space-y-4 flex flex-col">
                                {/* Software expandible */}
                                <div>
                                    <button
                                        onClick={() => setIsMobileSoftwareOpen(!isMobileSoftwareOpen)}
                                        className="w-full flex items-center justify-between text-gray-300 font-semibold text-lg hover:text-safety transition-colors"
                                    >
                                        Software
                                        <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isMobileSoftwareOpen ? 'rotate-180 text-safety' : ''}`} />
                                    </button>
                                    <AnimatePresence>
                                        {isMobileSoftwareOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                className="pl-4 mt-3 space-y-3 border-l-2 border-safety/30 overflow-hidden"
                                            >
                                                <Link onClick={() => setIsMenuOpen(false)} to="/software/accesIA" className="block text-gray-400 font-medium hover:text-white transition-colors">AccesIA — Control de Acceso</Link>
                                                <p className="text-gray-700 font-medium text-sm">GenIA Guard — Próximamente</p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                                {/* Servicios expandible */}
                                <div>
                                    <button
                                        onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                                        className="w-full flex items-center justify-between text-gray-300 font-semibold text-lg hover:text-safety transition-colors"
                                    >
                                        Servicios
                                        <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180 text-safety' : ''}`} />
                                    </button>
                                    <AnimatePresence>
                                        {isMobileServicesOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                className="pl-4 mt-3 space-y-3 border-l-2 border-safety/30 overflow-hidden"
                                            >
                                                <Link onClick={() => setIsMenuOpen(false)} to="/servicios/automatizacion-empresarial" className="block text-gray-400 font-medium hover:text-white transition-colors">Automatización Empresarial</Link>
                                                <Link onClick={() => setIsMenuOpen(false)} to="/servicios/software-a-medida" className="block text-gray-400 font-medium hover:text-white transition-colors">Software a Medida</Link>
                                                <Link onClick={() => setIsMenuOpen(false)} to="/servicios/inteligencia-artificial-b2b" className="block text-gray-400 font-medium hover:text-white transition-colors">Inteligencia Artificial B2B</Link>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                                {/* Industrias expandible */}
                                <div>
                                    <button
                                        onClick={() => setIsMobileIndustriasOpen(!isMobileIndustriasOpen)}
                                        className="w-full flex items-center justify-between text-gray-300 font-semibold text-lg hover:text-safety transition-colors"
                                    >
                                        Industrias
                                        <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isMobileIndustriasOpen ? 'rotate-180 text-safety' : ''}`} />
                                    </button>
                                    <AnimatePresence>
                                        {isMobileIndustriasOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                className="pl-4 mt-3 space-y-3 border-l-2 border-safety/30 overflow-hidden"
                                            >
                                                <Link onClick={() => setIsMenuOpen(false)} to="/industrias/inmobiliarias" className="block text-gray-400 font-medium hover:text-white transition-colors">Inmobiliarias</Link>
                                                <Link onClick={() => setIsMenuOpen(false)} to="/industrias/seguridad-privada" className="block text-gray-400 font-medium hover:text-white transition-colors">Seguridad Privada</Link>
                                                <Link onClick={() => setIsMenuOpen(false)} to="/industrias/agroindustria" className="block text-gray-400 font-medium hover:text-white transition-colors">Agroindustria</Link>
                                                <Link onClick={() => setIsMenuOpen(false)} to="/industrias/construccion" className="block text-gray-400 font-medium hover:text-white transition-colors">Construcción</Link>
                                                <Link onClick={() => setIsMenuOpen(false)} to="/industrias/mineria" className="block text-gray-400 font-medium hover:text-white transition-colors">Minería</Link>
                                                <Link onClick={() => setIsMenuOpen(false)} to="/industrias/logistica-transporte" className="block text-gray-400 font-medium hover:text-white transition-colors">Logística y Transporte</Link>
                                                <Link onClick={() => setIsMenuOpen(false)} to="/industrias/clinicas-salud" className="block text-gray-400 font-medium hover:text-white transition-colors">Clínicas y Salud</Link>
                                                <Link onClick={() => setIsMenuOpen(false)} to="/industrias/retail-comercio" className="block text-gray-400 font-medium hover:text-white transition-colors">Retail y Comercio</Link>
                                                <Link onClick={() => setIsMenuOpen(false)} to="/industrias/otec-otic" className="block text-gray-400 font-medium hover:text-white transition-colors">OTEC / OTIC</Link>
                                                <Link onClick={() => setIsMenuOpen(false)} to="/industrias/servicios-profesionales" className="block text-gray-400 font-medium hover:text-white transition-colors">Servicios Profesionales</Link>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                                <Link onClick={() => setIsMenuOpen(false)} to="/casos" className="font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-safety to-orange-400">Casos B2B</Link>
                                <Link onClick={() => setIsMenuOpen(false)} to="/nosotros" className="text-gray-300 font-semibold text-lg hover:text-safety transition-colors">Nosotros</Link>
                                <Link onClick={() => setIsMenuOpen(false)} to="/blog" className="text-gray-300 font-semibold text-lg hover:text-safety transition-colors">Blog</Link>

                                <div className="pt-4 border-t border-gray-800">
                                    <Link
                                        to="/contacto"
                                        onClick={() => setIsMenuOpen(false)}
                                        className="w-full bg-safety text-white px-5 py-3 rounded-xl font-bold hover:bg-[#E64A19] transition-colors flex items-center justify-center gap-2 text-md shadow-[0_0_20px_rgba(255,87,34,0.3)]"
                                    >
                                        Mi Diagnóstico
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            <AnimatePresence>
                {focusForm && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setFocusForm(false)}
                        className="fixed inset-0 bg-[#000000]/80 backdrop-blur-md z-[55] cursor-pointer"
                        title="Haz clic para volver"
                    />
                )}
            </AnimatePresence>

            <main className="pt-24 md:pt-[110px]">
                {/* HERO SECTION */}
                <section id="contacto" className="relative px-4 sm:px-6 lg:px-8 max-w-8xl mx-auto pb-8 lg:pb-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-8 overflow-hidden min-h-[85vh]">
                    <ParticleBackground />
                    <div className="absolute top-1/4 left-0 w-full h-[500px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-safety/10 via-[#000000] to-[rgba(0,0,0,0.8)] blur-[100px] z-0 hidden lg:block"></div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                        className="w-full lg:w-1/2 relative z-10 lg:pr-12"
                    >
                        <motion.div variants={fadeUpVariant} className="inline-flex items-center gap-2 bg-[#111111] border border-gray-800 text-gray-300 text-xs font-bold px-4 py-2 rounded-full mb-8 shadow-md">
                            <span className="w-2 h-2 rounded-full bg-safety animate-pulse"></span> B2B Tech Partner
                        </motion.div>
                        <motion.h1 variants={fadeUpVariant} className="text-[2.75rem] leading-[1.1] md:text-5xl lg:text-[4.5rem] font-extrabold lg:leading-[1.05] mb-6 md:mb-8 tracking-tight">
                            <span className="block text-white">Automatización</span>
                            <span className="block text-white">Empresarial y</span>
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-safety to-orange-400">Software a Medida<br />en Chile</span>
                        </motion.h1>
                        <motion.p variants={fadeUpVariant} className="text-base md:text-lg lg:text-xl text-gray-400 mb-8 md:mb-10 max-w-xl leading-relaxed">
                            Resolvemos cuellos de botella operativos en empresas B2B con software a medida, inteligencia artificial y automatización de procesos. Soluciones deployadas en semanas, no en meses.
                        </motion.p>
                        <motion.div variants={fadeUpVariant} className="flex flex-wrap gap-3 md:gap-4 mb-2">
                            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2 text-sm font-semibold text-gray-300 bg-[#0A0A0A] border border-gray-800 px-4 py-2.5 rounded-full cursor-default"><CheckCircle2 className="w-4 h-4 text-safety" /> Gestión Rápida</motion.div>
                            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2 text-sm font-semibold text-gray-300 bg-[#0A0A0A] border border-gray-800 px-4 py-2.5 rounded-full cursor-default"><CheckCircle2 className="w-4 h-4 text-safety" /> Retorno Garantizado</motion.div>
                        </motion.div>
                    </motion.div>

                    <div className={`w-full lg:w-1/2 relative min-h-[450px] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${focusForm ? 'z-[60] scale-[1.05]' : 'z-10'}`}>
                        {focusForm && (
                            <button onClick={() => setFocusForm(false)} className="absolute -top-10 right-0 md:-right-4 text-gray-400 hover:text-white bg-safety/20 hover:bg-safety/40 rounded-full p-2 transition-colors z-[70] shadow-xl border border-safety/30">
                                <X className="w-5 h-5" />
                            </button>
                        )}
                        <div className={`transition-all duration-700 ${focusForm ? 'shadow-[0_0_80px_rgba(255,87,34,0.15)] ring-1 ring-safety/50 rounded-2xl bg-[#000000]' : ''}`}>
                            <LeadForm />
                        </div>
                    </div>
                </section>

                {/* LOGO MARQUEE (INFINITE SCROLL) */}
                <motion.section
                    id="clientes"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="pb-20 pt-10 border-y border-gray-900 border-opacity-70 bg-[#020202] relative mt-4 overflow-hidden"
                >
                    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center mb-8">
                        <h2 className="text-sm font-bold text-gray-500 uppercase tracking-widest text-center">Impulsando las operaciones de empresas que lideran sus industrias</h2>
                    </div>

                    <div className="w-full relative py-6 mask-linear-edges overflow-hidden flex items-center">
                        <div className="flex gap-4 w-max animate-scrollMarquee hover:[animation-play-state:paused] pointer-events-auto">
                            {/* Duplicate arrays to create identical seamless loop */}
                            {[...Array(2)].map((_, i) => (
                                <div key={i} className="flex gap-4">
                                    {[
                                        // { name: 'IANSA', font: 'font-serif tracking-widest' },
                                        { name: 'Inout Seguridad', font: 'font-sans font-black tracking-tight uppercase' },
                                        { name: 'AgroPrime', font: 'font-sans font-medium tracking-wide' },
                                        { name: 'FluxCorp', font: 'font-mono font-bold' },
                                        { name: 'RUUF', font: 'font-sans font-black italic tracking-widest' },
                                        { name: 'Fintrack', font: 'font-sans font-extrabold tracking-tighter' },
                                        { name: 'Global Logistics', font: 'font-serif font-bold' },
                                        { name: 'Bsale', font: 'font-sans font-black tracking-tight lowercase' },
                                        { name: 'Movicenter', font: 'font-sans font-bold italic uppercase' },
                                        { name: 'LUI', font: 'font-serif font-medium tracking-[0.2em]' }
                                    ].map((client, j) => (
                                        <div key={`client-${i}-${j}`} className="bg-[#0B0C10] border border-gray-800/60 rounded-xl w-[220px] h-[80px] flex items-center justify-center transition-all hover:bg-gray-800 hover:border-safety/40 cursor-default flex-shrink-0 mx-2">
                                            <span className={`text-xl text-white opacity-70 ${client.font}`}>{client.name}</span>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.section>

                {/* DYNAMIC AI EXTRACTOR SECTION */}
                <Suspense fallback={<div className="h-96 w-full flex items-center justify-center text-gray-400">Cargando Inteligencia Artificial...</div>}>
                    <AIGeneratorNiches />
                </Suspense>

                {/* THE 3 CORE FOCUS CARDS + HUGE STATS */}
                <section id="soluciones" className="py-24 bg-[#000000] overflow-hidden">
                    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-14">
                            <h2 className="text-3xl md:text-[2.5rem] font-extrabold text-white tracking-tight leading-tight">
                                Soluciones de <span className="bg-clip-text text-transparent bg-gradient-to-r from-safety to-orange-400">Automatización e IA</span> para Empresas en Chile
                            </h2>
                            <p className="text-gray-400 mt-4 text-base md:text-lg max-w-2xl mx-auto">
                                Software a medida, inteligencia artificial B2B y sistemas de supervisión operativa para industrias que no pueden permitirse ineficiencia.
                            </p>
                        </div>

                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 mb-20"
                        >
                            <Suspense fallback={null}>
                                {/* Card 1 */}
                                <motion.div variants={fadeUpVariant} className="flex h-full">
                                    <GlowCard className="bg-[#0A0A0A] border border-gray-800 p-5 md:p-8 rounded-[24px] w-full flex flex-col shadow-xl cursor-default">
                                        <div className="bg-safety text-white w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 shadow-[0_8px_16px_rgba(255,87,34,0.3)] relative z-10 transition-transform group-hover:scale-110">
                                            <MessageSquare className="w-5 h-5 md:w-6 md:h-6" />
                                        </div>
                                        <h4 className="text-[1.1rem] leading-tight md:text-2xl font-bold mb-2 md:mb-4 text-white z-10 tracking-tight">Gestión Multi-Etapa</h4>
                                        <p className="text-gray-400 text-xs md:text-[15px] leading-relaxed mb-4 md:mb-8 flex-1 z-10">
                                            Automatiza todo el journey operativo con tecnología e IA que entiende el contexto y el volumen de tu negocio.
                                        </p>
                                        <div className="text-[10px] md:text-[13px] font-bold text-safety flex items-center gap-1.5 z-10">
                                            Optimización +300% <TrendingUp className="w-3 h-3 md:w-4 md:h-4" />
                                        </div>
                                    </GlowCard>
                                </motion.div>

                                {/* Card 2 */}
                                <motion.div variants={fadeUpVariant} className="flex h-full">
                                    <GlowCard className="bg-[#0A0A0A] border border-gray-800 p-5 md:p-8 rounded-[24px] w-full flex flex-col shadow-xl cursor-default">
                                        <div className="bg-safety text-white w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 shadow-[0_8px_16px_rgba(255,87,34,0.3)] relative z-10 transition-transform group-hover:scale-110">
                                            <Bot className="w-5 h-5 md:w-6 md:h-6" />
                                        </div>
                                        <h4 className="text-[1.1rem] leading-tight md:text-2xl font-bold mb-2 md:mb-4 text-white z-10 tracking-tight">IA + Humano</h4>
                                        <p className="text-gray-400 text-xs md:text-[15px] leading-relaxed mb-4 md:mb-8 flex-1 z-10">
                                            Combinación perfecta de inteligencia artificial corporativa y experiencia humana.
                                        </p>
                                        <div className="text-[10px] md:text-[13px] font-bold text-safety flex items-center gap-1.5 z-10">
                                            Eficiencia +1200% <ShieldAlert className="w-3 h-3 md:w-4 md:h-4" />
                                        </div>
                                    </GlowCard>
                                </motion.div>

                                {/* Card 3 */}
                                <motion.div variants={fadeUpVariant} className="flex h-full lg:col-span-1 col-span-2 mx-auto lg:mx-0 lg:w-full w-1/2">
                                    <GlowCard className="bg-[#0A0A0A] border border-gray-800 p-5 md:p-8 rounded-[24px] w-full flex flex-col shadow-xl cursor-default text-center items-center lg:text-left lg:items-start">
                                        <div className="bg-safety text-white w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 shadow-[0_8px_16px_rgba(255,87,34,0.3)] relative z-10 transition-transform group-hover:scale-110">
                                            <BarChart3 className="w-5 h-5 md:w-6 md:h-6" />
                                        </div>
                                        <h4 className="text-[1.1rem] leading-tight md:text-2xl font-bold mb-2 md:mb-4 text-white z-10 tracking-tight">Rendimiento Real</h4>
                                        <p className="text-gray-400 text-xs md:text-[15px] leading-relaxed mb-4 md:mb-8 flex-1 z-10">
                                            Analytics y trazabilidad absoluta para crecimiento veloz.
                                        </p>
                                        <div className="text-[10px] md:text-[13px] font-bold text-safety flex items-center gap-1.5 z-10">
                                            ROI visible +400% <TrendingUp className="w-3 h-3 md:w-4 md:h-4" />
                                        </div>
                                    </GlowCard>
                                </motion.div>
                            </Suspense>
                        </motion.div>

                        {/* Huge Stats Row */}
                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 text-center mt-12 opacity-90"
                        >
                            <Suspense fallback={null}>
                                <motion.div variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1, transition: { type: "spring" } } }} className="space-y-2">
                                    <div className="text-4xl md:text-[3.5rem] font-black text-white leading-none tracking-tighter"><AnimatedCounter to={93} suffix="%" duration={2.5} /></div>
                                    <p className="text-gray-400 text-xs md:text-sm font-semibold max-w-[150px] mx-auto leading-snug">Reducción del tiempo<br />en tareas operativas</p>
                                </motion.div>
                                <motion.div variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1, transition: { type: "spring" } } }} className="space-y-2">
                                    <div className="text-4xl md:text-[3.5rem] font-black text-white leading-none tracking-tighter"><AnimatedCounter to={12} suffix="X" duration={3} /></div>
                                    <p className="text-gray-400 text-xs md:text-sm font-semibold max-w-[150px] mx-auto leading-snug">Aumento de capacidad<br />sin sumar personal</p>
                                </motion.div>
                                <motion.div variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1, transition: { type: "spring" } } }} className="space-y-2">
                                    <div className="text-4xl md:text-[3.5rem] font-black text-white leading-none tracking-tighter"><AnimatedCounter to={39} suffix="%" duration={2.8} /></div>
                                    <p className="text-gray-400 text-xs md:text-sm font-semibold max-w-[150px] mx-auto leading-snug">Reducción de errores<br />y fricción humana</p>
                                </motion.div>
                                <motion.div variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1, transition: { type: "spring" } } }} className="space-y-2">
                                    <div className="text-4xl md:text-[3.5rem] font-black text-white leading-none tracking-tighter"><AnimatedCounter to={27} suffix="%" duration={2} /></div>
                                    <p className="text-gray-400 text-xs md:text-sm font-semibold max-w-[150px] mx-auto leading-snug">Caída en costos ocultos<br />y cuellos de botella</p>
                                </motion.div>
                            </Suspense>
                        </motion.div>
                    </div>
                </section>

                {/* ROI CALCULATOR SECTION */}
                <section className="bg-[#000000] py-20 relative border-t border-gray-900">
                    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="space-y-16"
                        >
                            <Suspense fallback={null}>
                                <ROICalculator />
                                <COICalculator />
                            </Suspense>
                        </motion.div>
                    </div>
                </section>

                {/* WORKFLOW SECTION */}
                <Suspense fallback={null}>
                    <WorkflowSteps />
                </Suspense>

                {/* SOCIO OPERATIVO (CEO SECTION) */}
                <section className="bg-[#050505] py-24 border-y border-gray-900 overflow-hidden" id="nosotros">
                    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col md:flex-row items-center gap-16">
                            <motion.div
                                initial={{ opacity: 0, x: -40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="w-full md:w-1/3 flex justify-center"
                            >
                                <div className="relative">
                                    <div className="absolute inset-0 bg-safety rounded-[32px] rotate-3 scale-105 opacity-20 blur-sm"></div>
                                    <img src="/martin_ceo.png" alt="Martín Díaz, CEO GenIA Tech" loading="lazy" decoding="async" className="rounded-[32px] relative z-10 w-72 h-auto shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-gray-800" />
                                    <motion.div
                                        initial={{ y: 20, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.4 }}
                                        className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-[#1A1A1A] border border-gray-800 px-6 py-3 rounded-full text-sm font-bold whitespace-nowrap shadow-xl flex items-center gap-3 z-20"
                                    >
                                        <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span> Martín Díaz • CEO
                                    </motion.div>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="w-full md:w-2/3"
                            >
                                <h2 className="text-3xl md:text-[2.5rem] font-bold mb-8 leading-tight tracking-tight">Automatización empresarial con IA para empresas B2B en Chile</h2>
                                <div className="p-8 md:p-10 border border-gray-800/80 rounded-[24px] bg-[#0A0A0A] relative shadow-2xl">
                                    <span className="absolute -top-3.5 left-8 bg-safety text-white text-[11px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">Nuestra Filosofía</span>
                                    <p className="text-xl md:text-2xl text-gray-400 font-medium italic leading-relaxed">
                                        "No vendemos software superficial, <span className="text-white">implementamos soluciones operativas</span> que se adaptan al reloj de tu operación. GenIA Tech es el co-piloto tecnológico para el empresario chileno moderno."
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* MITOS VS REALIDAD */}
                <section className="py-24 bg-[#000000] overflow-hidden" id="mitos">
                    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="text-3xl md:text-[2.5rem] font-bold text-center mb-16 tracking-tight"
                        >
                            Mitos vs <span className="bg-clip-text text-transparent bg-gradient-to-r from-safety to-orange-400">Realidad GenIA</span>
                        </motion.h2>

                        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.7 }}
                                className="bg-[#050505] border border-gray-900 rounded-[24px] p-8 md:p-10"
                            >
                                <h3 className="text-xl text-center text-gray-500 font-bold mb-8 tracking-tight">El Mercado Tradicional</h3>
                                <div className="grid grid-cols-2 gap-3 md:gap-6">
                                    {[
                                        "Software lento (6+ meses)",
                                        "IA solo para multinacionales",
                                        "Plataformas difíciles",
                                        "Altos costos y dependencia"
                                    ].map((mito, i) => (
                                        <motion.div whileHover={{ scale: 1.02 }} key={i} className="bg-[#0A0A0A] border border-gray-800 p-3 md:p-5 rounded-xl flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2 md:gap-4 cursor-default">
                                            <X className="w-5 h-5 md:w-6 md:h-6 text-red-500 flex-shrink-0 mt-0.5 opacity-80" />
                                            <p className="text-gray-400 text-[11px] md:text-[15px] leading-relaxed font-medium">{mito}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.7 }}
                                className="bg-[#0A0A0A] border border-safety/20 rounded-[24px] p-8 md:p-10 relative overflow-hidden shadow-[0_0_30px_rgba(255,87,34,0.05)]"
                            >
                                <div className="absolute top-0 right-0 w-64 h-64 bg-safety/5 blur-[80px] rounded-full pointer-events-none"></div>
                                <h3 className="text-xl text-center text-white font-bold mb-8 flex items-center justify-center gap-3 tracking-tight"><CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-safety" /> Al estilo GenIA</h3>
                                <div className="grid grid-cols-2 gap-3 md:gap-6 relative z-10">
                                    {[
                                        "MVP funcional en semanas.",
                                        "IA al alcance de toda PYME.",
                                        "Curva de aprendizaje cero.",
                                        "Software escala contigo."
                                    ].map((realidad, i) => (
                                        <motion.div whileHover={{ scale: 1.02 }} key={i} className="bg-[#111111] border border-gray-800 p-3 md:p-5 rounded-xl flex flex-col sm:flex-row items-center sm:text-left text-center sm:items-start gap-2 md:gap-4 hover:border-safety/30 transition-colors cursor-default">
                                            <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-safety flex-shrink-0 mt-0.5" />
                                            <p className="text-gray-200 text-[11px] md:text-[15px] leading-relaxed font-semibold">{realidad}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </main>

            {/* FLOATING WHATSAPP BUTTON */}
            <a
                href="https://wa.me/56929231069?text=Hola%2C%20quisiera%20pedir%20mi%20diagn%C3%B3stico%20operativo%20B2B%20gratuito."
                target="_blank"
                rel="noopener noreferrer"
                className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 px-5 py-3.5 rounded-full shadow-[0_10px_30px_rgba(34,197,94,0.4)] hover:shadow-[0_10px_40px_rgba(34,197,94,0.6)] ${isAtBottom ? 'translate-y-32 opacity-0 pointer-events-none' : 'translate-y-0 opacity-100 hover:-translate-y-1 pointer-events-auto'} transition-all duration-300 group border border-green-400/40`}
            >
                <div className="flex flex-col text-left">
                    <span className="text-[10px] font-bold text-green-100 uppercase tracking-widest leading-none mb-1 opacity-80 group-hover:opacity-100 transition-opacity">Chat Directo</span>
                    <span className="text-sm font-black text-white leading-none">WhatsApp</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-inner group-hover:rotate-12 transition-transform">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12.031 0C5.399 0 0 5.4 0 12.031c0 2.651.848 5.111 2.302 7.152L.756 24l5.011-1.542a11.96 11.96 0 0 0 6.264 1.764c6.631 0 12.031-5.399 12.031-12.031S18.662 0 12.031 0zm6.533 17.16c-.287.808-1.571 1.541-2.181 1.597-.502.046-1.157.14-3.513-.833-2.884-1.192-4.735-4.145-4.881-4.341-.144-.195-1.166-1.554-1.166-2.964 0-1.41.722-2.112.984-2.392.261-.28.566-.35.753-.35.187 0 .373.003.541.011.173.008.406-.065.635.489.233.563.8 1.956.87 2.102.072.146.12.316.024.503-.095.188-.143.303-.284.47-.144.167-.302.359-.434.484-.146.136-.3.284-.136.568.163.283.725 1.201 1.56 1.954 1.077.969 1.983 1.272 2.27 1.418.288.146.455.12.625-.07.171-.188.736-.856.938-1.15.202-.294.404-.245.666-.147.261.098 1.652.778 1.933.918.282.14.47.234.542.366.072.133.072.766-.215 1.574z" /></svg>
                </div>
            </a>

            {/* FOOTER MODERNIZADO */}
            <footer className="bg-[#0A0A0A] border-t border-gray-900 pt-16 pb-8">
                <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 mb-16 border-b border-gray-900 pb-16">
                        <div className="col-span-2 lg:col-span-2 space-y-6">
                            <div className="flex items-center gap-3">
                                <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-[26px] font-black tracking-tighter text-white hover:opacity-80 transition-all active:scale-95 group">
                                    Gen<span className="text-safety group-hover:drop-shadow-[0_0_8px_rgba(255,87,34,0.8)] transition-all">IA</span> Tech
                                </button>
                                <div className="flex items-center gap-1.5 bg-[#111111] border border-gray-800 px-2 py-1 rounded text-[10px] font-bold text-gray-400">
                                    <ChileFlag /> Chile
                                </div>
                            </div>
                            <p className="text-sm text-gray-500 font-medium leading-relaxed max-w-[280px]">
                                Una agencia operativa maestra con extensiones de inteligencia y automatización para hacer crecer empresas B2B en todo Chile.
                            </p>
                            <div className="font-black text-xl tracking-tighter">
                                INTELIGENCIA <span className="font-medium text-gray-500 italic">OPERATIVA.</span> <br /> ESCALABILIDAD <span className="font-medium text-gray-500 italic">ABSOLUTA.</span>
                            </div>
                        </div>

                        <div className="col-span-1">
                            <h4 className="font-bold text-xs uppercase tracking-widest text-gray-500 mb-6">Producto</h4>
                            <ul className="space-y-4 text-sm font-semibold text-gray-300">
                                <li><a href="#" className="hover:text-white transition-colors">Plataforma</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Automatización</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Connect</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Precios</a></li>
                            </ul>
                        </div>

                        <div className="col-span-1">
                            <h4 className="font-bold text-xs uppercase tracking-widest text-gray-500 mb-6">Empresa</h4>
                            <ul className="space-y-4 text-sm font-semibold text-gray-300">
                                <li><Link to="/nosotros" className="hover:text-white transition-colors">Nosotros</Link></li>
                                <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                                <li><Link to="/contacto" className="hover:text-white transition-colors">Contacto</Link></li>
                            </ul>
                        </div>

                        <div className="col-span-1">
                            <h4 className="font-bold text-xs uppercase tracking-widest text-gray-500 mb-6">Servicios</h4>
                            <ul className="space-y-4 text-sm font-semibold text-gray-300">
                                <li><Link to="/servicios/automatizacion-empresarial" className="hover:text-white transition-colors">Automatización</Link></li>
                                <li><Link to="/servicios/software-a-medida" className="hover:text-white transition-colors">Software a Medida</Link></li>
                                <li><Link to="/servicios/inteligencia-artificial-b2b" className="hover:text-white transition-colors">IA Empresarial</Link></li>
                                <li><Link to="/casos" className="hover:text-white transition-colors">Casos de Éxito</Link></li>
                            </ul>
                        </div>

                        <div className="col-span-2 lg:col-span-1">
                            <h4 className="font-bold text-xs uppercase tracking-widest text-gray-500 mb-6">Industrias</h4>
                            <ul className="space-y-3 text-sm font-semibold text-gray-300">
                                <li><Link to="/industrias/inmobiliarias" className="hover:text-white transition-colors">Inmobiliarias</Link></li>
                                <li><Link to="/industrias/seguridad-privada" className="hover:text-white transition-colors">Seguridad Privada</Link></li>
                                <li><Link to="/industrias/agroindustria" className="hover:text-white transition-colors">Agroindustria</Link></li>
                                <li><Link to="/industrias/construccion" className="hover:text-white transition-colors">Construcción</Link></li>
                                <li><Link to="/industrias/mineria" className="hover:text-white transition-colors">Minería</Link></li>
                                <li><Link to="/industrias/logistica-transporte" className="hover:text-white transition-colors">Logística</Link></li>
                                <li><Link to="/industrias/clinicas-salud" className="hover:text-white transition-colors">Clínicas y Salud</Link></li>
                                <li><Link to="/industrias/retail-comercio" className="hover:text-white transition-colors">Retail y Comercio</Link></li>
                                <li><Link to="/industrias/otec-otic" className="hover:text-white transition-colors">OTEC / OTIC</Link></li>
                                <li><Link to="/industrias/servicios-profesionales" className="hover:text-white transition-colors">Servicios Prof.</Link></li>
                            </ul>
                        </div>

                        <div className="col-span-2 lg:col-span-2">
                            <h4 className="font-bold text-xs uppercase tracking-widest text-gray-500 mb-6">Social</h4>
                            <ul className="space-y-4 text-sm font-semibold text-gray-300">
                                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-3"><Facebook className="w-4 h-4 text-gray-400" /> Facebook</a></li>
                                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-3"><Youtube className="w-4 h-4 text-gray-400" /> YouTube</a></li>
                                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-3"><Instagram className="w-4 h-4 text-gray-400" /> Instagram</a></li>
                                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-3"><Linkedin className="w-4 h-4 text-gray-400" /> LinkedIn</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-12">
                        <div className="w-full lg:w-1/3">
                            {/* Reservado para futuros Partners */}
                        </div>

                        <div className="w-full lg:w-1/3 flex justify-center text-center -mt-8">
                            <div>
                                <h4 className="font-bold text-[11px] uppercase tracking-widest text-gray-500 mb-6">Hecho con ♥ en Chile</h4>
                                <div className="flex items-center justify-center group cursor-default">
                                    <div className="h-32 w-auto opacity-80 group-hover:opacity-100 transition-all group-hover:scale-105 drop-shadow-[0_0_8px_rgba(255,255,255,0.1)] group-hover:drop-shadow-[0_0_15px_rgba(255,87,34,0.4)]">
                                        <img src="/mapa_chile.png" alt="Mapa de Chile" loading="lazy" decoding="async" className="h-full w-auto object-contain" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/3 flex lg:justify-end">
                            {/* Reservado para Respaldos e Inversores */}
                        </div>
                    </div>

                    <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-semibold text-gray-600">
                        <p>Copyright © {new Date().getFullYear()} GenIA Tech SpA — Todos los derechos reservados</p>
                        <div className="flex gap-6">
                            <a href="#" className="hover:text-gray-400 transition-colors">Política de Privacidad</a>
                            <a href="#" className="hover:text-gray-400 transition-colors">Términos de Servicio</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div >
    )
}
