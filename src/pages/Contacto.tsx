import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ParticleBackground } from '../components/ParticleBackground';

const schemaContact = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contacto GenIA Tech — Diagnóstico Operativo Gratuito",
    "description": "Solicita tu diagnóstico operativo gratuito. Un especialista de GenIA Tech analiza tu operación y te propone una solución en menos de 24 horas.",
    "url": "https://geniatechno.com/contacto",
    "mainEntity": {
        "@type": "ProfessionalService",
        "name": "GenIA Tech SpA",
        "url": "https://geniatechno.com",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Santiago",
            "addressRegion": "Región Metropolitana",
            "addressCountry": "CL"
        }
    }
};

// ─── LeadForm (copia exacta del formulario del homepage) ──────────────────────
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
                                        const lastSub = localStorage.getItem('geniatech_last_sub');
                                        if (lastSub) {
                                            const timeDiff = new Date().getTime() - parseInt(lastSub);
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
                                                    source: 'Geniatech Landing Page — /contacto',
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
// ─────────────────────────────────────────────────────────────────────────────

export const Contacto = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <div className="min-h-screen bg-[#000000] text-gray-200 font-sans selection:bg-safety selection:text-white relative">
            <Helmet>
                <title>Contacto | GenIA Tech — Automatización e IA para Empresas Chile</title>
                <meta name="description" content="¿Listo para automatizar tu operación? Completa el diagnóstico gratuito y un especialista de GenIA Tech te contacta en 24 horas. Santiago, Chile." />
                <meta name="keywords" content="contacto GenIA Tech, diagnóstico operativo gratuito Chile, consultoría automatización empresarial, presupuesto software a medida Chile" />
                <link rel="canonical" href="https://geniatechno.com/contacto" />
                <meta property="og:title" content="Contacto | GenIA Tech — Diagnóstico Operativo Gratuito" />
                <meta property="og:description" content="Cuéntanos tu desafío operativo. Completa el formulario y un especialista te responde en menos de 24 horas." />
                <meta property="og:url" content="https://geniatechno.com/contacto" />
                <script type="application/ld+json">{JSON.stringify(schemaContact)}</script>
            </Helmet>

            <ParticleBackground />

            {/* Navbar */}
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

            <main className="pt-32 pb-24 relative z-10">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-12"
                    >
                        <span className="inline-flex items-center gap-2 bg-[#111] border border-gray-800 text-safety text-xs font-bold px-4 py-2 rounded-full mb-6 uppercase tracking-widest">
                            <span className="w-2 h-2 rounded-full bg-safety animate-pulse"></span> Respuesta en menos de 24 hrs
                        </span>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
                            Contacta a GenIA Tech{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-safety to-orange-400">— Soluciones B2B en Chile</span>
                        </h1>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Cuéntanos tu desafío operativo. Te respondemos en menos de 24 horas.
                        </p>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        <LeadForm />
                    </motion.div>

                    {/* Trust signals */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500 font-semibold"
                    >
                        <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-safety" /> Sin compromiso</span>
                        <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-safety" /> Diagnóstico 100% gratuito</span>
                        <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-safety" /> Respuesta en &lt;24 horas</span>
                    </motion.div>
                </div>
            </main>
        </div>
    );
};
