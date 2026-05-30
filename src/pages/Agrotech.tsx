import { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Droplet, Zap, Cpu, CloudCog, Mic, Activity, CheckCircle2, BarChart3, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ScrollyTellingNode } from '../components/ScrollyTellingNode';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Agrotech = () => {
    // Form State
    const [formData, setFormData] = useState({
        nombre: '',
        cargo: '',
        empresa: '',
        hectareas: '',
        cultivo: '',
        email: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // GenIA Webhook Configuration
        const webhookUrl = 'https://hook.us1.make.com/EXAMPLE_WEBHOOK_URL_REPLACE_ME';
        
        try {
            await fetch(webhookUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            // Simulamos éxito visual
            setTimeout(() => {
                setIsSubmitting(false);
                setIsSuccess(true);
                setFormData({ nombre: '', cargo: '', empresa: '', hectareas: '', cultivo: '', email: '' });
                setTimeout(() => setIsSuccess(false), 5000);
            }, 1500);
        } catch (error) {
            console.error('Error enviando formulario:', error);
            // Fallback UI para demo
            setTimeout(() => {
                setIsSubmitting(false);
                setIsSuccess(true);
                setTimeout(() => setIsSuccess(false), 5000);
            }, 1000);
        }
    };

    const heroRef = useRef<HTMLElement>(null);
    const heroBgRef = useRef<HTMLDivElement>(null);
    const heroFloating1Ref = useRef<HTMLDivElement>(null);
    const heroFloating2Ref = useRef<HTMLDivElement>(null);
    
    // Novedades
    const mapSectionRef = useRef<HTMLElement>(null);
    const mapBgRef = useRef<HTMLDivElement>(null);
    const droneSectionRef = useRef<HTMLElement>(null);
    const droneImgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        window.scrollTo(0, 0);

        // GSAP Scroll Parallax for Hero
        if (heroRef.current && heroBgRef.current) {
            gsap.to(heroBgRef.current, {
                yPercent: 30, // Background moves down slightly to create depth
                ease: "none",
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                }
            });
        }
        
        // Floating cards moving up at different speeds
        if (heroRef.current && heroFloating1Ref.current) {
            gsap.to(heroFloating1Ref.current, {
                y: -60,
                ease: "none",
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: 1.5
                }
            });
        }
        if (heroRef.current && heroFloating2Ref.current) {
            gsap.to(heroFloating2Ref.current, {
                y: -100,
                ease: "none",
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: 2
                }
            });
        }

        // Gemelo Digital Map Zoom
        if (mapSectionRef.current && mapBgRef.current) {
            gsap.fromTo(mapBgRef.current, 
                { scale: 1 },
                { 
                    scale: 1.15,
                    ease: "none",
                    scrollTrigger: {
                        trigger: mapSectionRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    }
                }
            );
        }

        // Drone Patrol Parallax
        if (droneSectionRef.current && droneImgRef.current) {
            gsap.fromTo(droneImgRef.current,
                { xPercent: -20, yPercent: -20 },
                {
                    xPercent: 0, yPercent: 0,
                    ease: "none",
                    scrollTrigger: {
                        trigger: droneSectionRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    }
                }
            );
        }
    }, []);

    return (
        <div id="agrotech-root" className="min-h-screen font-sans selection:bg-emerald-500 selection:text-white relative transition-colors duration-1000">
            <Helmet>
                <title>GenIA Green Tech | Autopilot Agronómico</title>
                <meta name="description" content="Infraestructura autónoma para la agricultura de alta gama. Optimización hídrica y energética con Edge AI y automatización predictiva." />
                <link rel="canonical" href="https://geniatechno.com/agrotech" />
            </Helmet>

            {/* Navbar */}
            <nav className="fixed w-full z-50 transition-all duration-300 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
                <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <Link to="/" className="flex items-center gap-2 group">
                            <ArrowLeft className="w-5 h-5 text-gray-500 group-hover:text-emerald-600 transition-colors" />
                            <span className="font-bold text-gray-600 group-hover:text-emerald-700 transition-colors">Volver a GenIA</span>
                        </Link>
                        
                        {/* Center Links (Desktop) */}
                        <div className="hidden md:flex items-center space-x-8">
                            <a href="#infraestructura" className="text-sm font-bold text-gray-600 hover:text-emerald-600 transition-colors">Infraestructura</a>
                            <a href="#inteligencia" className="text-sm font-bold text-gray-600 hover:text-emerald-600 transition-colors">Inteligencia Artificial</a>
                            <a href="#m2m" className="text-sm font-bold text-gray-600 hover:text-emerald-600 transition-colors">Drones M2M</a>
                            <a href="#diagnostico" className="text-sm font-bold text-emerald-600 bg-emerald-50 px-4 py-2 rounded-full border border-emerald-100 hover:bg-emerald-100 transition-colors">Agendar Auditoría</a>
                        </div>

                        <div className="flex items-center space-x-2">
                            <Droplet className="w-6 h-6 text-emerald-600" />
                            <span className="text-xl md:text-2xl font-black tracking-tighter text-gray-900">GenIA <span className="text-emerald-600">Agrotech</span></span>
                        </div>
                    </div>
                </div>
            </nav>

            {/* SECCIÓN 1: HERO */}
            <section ref={heroRef} className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 min-h-[90vh] flex items-center bg-gray-50 overflow-hidden">
                {/* AI Generated Background Image */}
                <div ref={heroBgRef} className="absolute inset-0 bg-[url('/agrotech_hero.png')] bg-cover bg-center md:bg-right opacity-40 mix-blend-multiply scale-[1.15]"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>
                
                <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                            <div className="inline-block border border-emerald-200 bg-emerald-50 text-emerald-700 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6 shadow-sm">
                                Infraestructura Autónoma
                            </div>
                            <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 tracking-tight leading-[1.1] mb-6 drop-shadow-sm">
                                Autopilot <span className="text-emerald-600">Agronómico</span>.
                            </h1>
                            <p className="text-gray-600 text-lg lg:text-xl max-w-xl leading-relaxed mb-10 font-medium">
                                Elimine la incertidumbre hídrica y los sobrecostos energéticos. Nuestra infraestructura híbrida transforma la gestión reactiva en una operación predictiva, protegiendo el calibre premium de su fruta y optimizando su OPEX sin inversión de capital.
                            </p>
                            <a href="#diagnostico" className="inline-flex items-center gap-3 bg-emerald-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-600/20 hover:shadow-emerald-600/40 hover:-translate-y-1">
                                Solicitar Diagnóstico Sin Costo <ArrowRight className="w-5 h-5" />
                            </a>
                        </motion.div>

                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.2 }} className="relative h-[450px] w-full flex items-center justify-center lg:mt-0 mt-10">
                            <div className="absolute inset-0 bg-emerald-400/20 blur-[120px] rounded-full pointer-events-none"></div>
                            
                            {/* Main Graph Card */}
                            <motion.div 
                                initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }}
                                className="absolute w-[85%] h-[75%] bg-white/95 backdrop-blur-xl border border-emerald-100 rounded-3xl shadow-[0_20px_40px_-15px_rgba(16,185,129,0.2)] p-6 flex flex-col justify-between z-10"
                            >
                                <div className="flex justify-between items-start">
                                    <div>
                                        <div className="text-xs font-bold text-emerald-600 tracking-widest uppercase mb-1">Cuartel 4 - Cerezos</div>
                                        <div className="text-2xl font-black text-gray-900">Estado Hídrico</div>
                                    </div>
                                    <div className="bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 border border-emerald-200">
                                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div> En Vivo
                                    </div>
                                </div>
                                
                                {/* Complex SVG Graph */}
                                <div className="w-full h-32 relative mt-4">
                                    <svg className="w-full h-full absolute inset-0 overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
                                        <defs>
                                            <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                                                <stop offset="0%" stopColor="rgba(16, 185, 129, 0.4)" />
                                                <stop offset="100%" stopColor="rgba(16, 185, 129, 0)" />
                                            </linearGradient>
                                        </defs>
                                        {/* Threshold Line */}
                                        <line x1="0" y1="70" x2="100" y2="70" stroke="#EF4444" strokeWidth="1" strokeDasharray="2,2" />
                                        <text x="0" y="65" fill="#EF4444" fontSize="4" fontWeight="bold">Límite Estrés</text>
                                        
                                        {/* Area & Line */}
                                        <path d="M0,100 L0,50 Q25,30 50,60 T100,40 L100,100 Z" fill="url(#grad1)" />
                                        <path d="M0,50 Q25,30 50,60 T100,40" fill="none" stroke="#10B981" strokeWidth="3" strokeLinecap="round" />
                                        
                                        {/* Data Point */}
                                        <circle cx="100" cy="40" r="3" fill="#10B981" stroke="white" strokeWidth="1.5" />
                                        <circle cx="100" cy="40" r="6" fill="rgba(16,185,129,0.3)" className="animate-ping" />
                                    </svg>
                                </div>
                            </motion.div>

                            {/* Floating Card 1: Horario Punta */}
                            <motion.div 
                                ref={heroFloating1Ref}
                                initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.6 }}
                                className="absolute right-0 md:-right-8 top-10 bg-white border border-yellow-200 rounded-2xl p-4 shadow-xl shadow-yellow-500/10 z-20 w-48"
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="bg-yellow-50 p-2 rounded-xl"><Zap className="w-5 h-5 text-yellow-500" /></div>
                                    <div className="text-xs font-bold text-gray-900 leading-tight">Optimización<br/>Energética</div>
                                </div>
                                <div className="text-[10px] text-gray-500 font-medium">Bombeo suspendido en Horario Punta.</div>
                                <div className="mt-2 text-sm font-black text-yellow-600 bg-yellow-50 px-2 py-1 rounded-lg text-center border border-yellow-100">Ahorro: 35% OPEX</div>
                            </motion.div>

                            {/* Floating Card 2: AI Weather */}
                            <motion.div 
                                ref={heroFloating2Ref}
                                initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.8 }}
                                className="absolute left-0 md:-left-8 bottom-20 bg-white border border-blue-200 rounded-2xl p-4 shadow-xl shadow-blue-500/10 z-20 w-48"
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="bg-blue-500/20 p-2 rounded-xl"><CloudCog className="w-5 h-5 text-blue-400" /></div>
                                    <div className="text-xs font-bold text-gray-900 leading-tight">GenIA Clima</div>
                                </div>
                                <div className="text-xs text-gray-600 font-medium leading-relaxed">
                                    Lluvia detectada en 3 hrs. <span className="text-emerald-600 font-bold">Ciclo de riego automático cancelado.</span>
                                </div>
                            </motion.div>

                            {/* Floating Badge: Flow */}
                            <motion.div 
                                animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                className="absolute -top-4 left-10 bg-emerald-600 text-white px-4 py-2 rounded-full font-bold text-xs shadow-lg shadow-emerald-600/30 flex items-center gap-2 border border-emerald-500 z-30"
                            >
                                <Activity className="w-4 h-4" /> Flujo de Savia Óptimo
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SECCIÓN 2: INFRAESTRUCTURA (SCROLLYTELLING) */}
            <section id="infraestructura" className="py-24 md:py-40 bg-white relative">
                <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-start relative h-[130vh]">
                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="sticky top-40 z-10">
                            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                                El Costo Oculto de la <span className="text-emerald-600">Gestión Reactiva</span>.
                            </h2>
                            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                                <p>
                                    En los valles de exportación premium, depender de revisiones visuales semanales ya no es sostenible frente a la megasequía. Una ventana de apenas <strong className="text-gray-900">48 horas de estrés hídrico no detectado</strong> compromete irreversiblemente el calibre y el valor comercial de su cosecha.
                                </p>
                                <p>
                                    A este riesgo agronómico se suma el castigo financiero directo: la activación de sistemas de bombeo manuales durante el Horario Punta eléctrico representa hasta un <strong className="text-gray-900">35% del costo operativo (OPEX)</strong> del predio. Es tiempo de evolucionar hacia la autonomía y la precisión absoluta.
                                </p>
                            </div>
                        </motion.div>

                        <div className="space-y-12 md:space-y-24 pt-10 md:pt-48 pb-32">
                            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-100px" }} className="bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-200 shadow-xl shadow-gray-200/50 hover:shadow-2xl transition-shadow">
                                <div className="space-y-10">
                                    <div className="flex items-start gap-6">
                                    <div className="w-16 h-16 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center flex-shrink-0 shadow-sm">
                                        <AlertTriangle className="w-8 h-8 text-red-500" />
                                    </div>
                                    <div>
                                        <div className="text-5xl font-black text-gray-900 mb-1 tracking-tight">48h</div>
                                        <div className="text-sm font-bold tracking-widest text-red-500 uppercase mb-2">Ventana Crítica</div>
                                        <p className="text-gray-500 text-sm leading-relaxed">Tiempo máximo de estrés hídrico antes de que el calibre de la fruta premium se vea castigado en destino.</p>
                                    </div>
                                </div>
                                <div className="w-full h-px bg-gray-200"></div>
                                <div className="flex items-start gap-6">
                                    <div className="w-16 h-16 rounded-2xl bg-yellow-50 border border-yellow-100 flex items-center justify-center flex-shrink-0 shadow-sm">
                                        <BarChart3 className="w-8 h-8 text-yellow-600" />
                                    </div>
                                    <div>
                                        <div className="text-5xl font-black text-gray-900 mb-1 tracking-tight">35%</div>
                                        <div className="text-sm font-bold tracking-widest text-yellow-600 uppercase mb-2">Impacto en OPEX</div>
                                        <p className="text-gray-500 text-sm leading-relaxed">Sobrecosto directo en la factura de energía por bombear agua en horario punta debido a ineficiencia manual.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                            
                            <div className="h-32"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECCIÓN 3: EL CICLO AUTÓNOMO */}
            <section className="py-24 bg-emerald-900 text-white relative overflow-hidden">
                {/* Background organic shapes */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
                    <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-emerald-500 blur-[150px]"></div>
                    <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-emerald-700 blur-[150px]"></div>
                </div>

                <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
                            Orquestación Híbrida: Del Campo a la Nube.
                        </h2>
                        <p className="text-emerald-100 text-lg max-w-2xl mx-auto">
                            Una arquitectura de automatización diseñada para operar sin interrupciones, garantizando el flujo de datos incluso en las zonas rurales más remotas.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Col 1 */}
                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-emerald-950/50 backdrop-blur-sm border border-emerald-800/50 rounded-[2.5rem] p-10 hover:bg-emerald-900/50 transition-colors">
                            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-8">
                                <Cpu className="w-8 h-8 text-emerald-300" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">1. Captura Perimetral</h3>
                            <p className="text-emerald-100/80 leading-relaxed font-light">
                                Nodos IoT autónomos con conectividad privada LoRaWAN (operación offline). Sondas FDR multi-horizonte y pinzas ultrasónicas miden contracción vascular y flujo de savia en la planta.
                            </p>
                        </motion.div>

                        {/* Col 2 */}
                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-white text-gray-900 rounded-[2.5rem] p-10 shadow-2xl shadow-black/20 transform md:-translate-y-4">
                            <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center mb-8">
                                <CloudCog className="w-8 h-8 text-emerald-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Procesamiento Predictivo</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Los datos convergen en la nube. Modelos predictivos cruzan variables fisiológicas con pronósticos climáticos hiperlocales para anticipar la demanda hídrica exacta antes de que ocurra el estrés.
                            </p>
                        </motion.div>

                        {/* Col 3 */}
                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="bg-emerald-950/50 backdrop-blur-sm border border-emerald-800/50 rounded-[2.5rem] p-10 hover:bg-emerald-900/50 transition-colors">
                            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-8">
                                <Droplet className="w-8 h-8 text-emerald-300" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">3. Acción Eficiente</h3>
                            <p className="text-emerald-100/80 leading-relaxed font-light">
                                Activación predictiva de electroválvulas y bombas. Desplazamos automáticamente el consumo energético fuera del Horario Punta, asegurando eficiencia con ahorros hídricos de hasta 20%.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SECCIÓN SCROLLYTELLING: HARDWARE */}
            <ScrollyTellingNode />

            {/* SECCIÓN: IA DE VOZ */}
            <section id="inteligencia" className="py-24 md:py-40 bg-gray-50 relative overflow-hidden min-h-[100vh] flex items-center border-t border-gray-800">
                <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-emerald-900/10 to-transparent blur-3xl pointer-events-none"></div>
                
                <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                    <div className="grid lg:grid-cols-12 gap-16 items-center">
                        {/* Visual Sticky Column */}
                        <div className="lg:col-span-5 sticky top-20 z-10 relative h-[700px] rounded-[3rem] border border-gray-200 overflow-hidden bg-gray-900 shadow-2xl flex items-end justify-center pt-20">
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40 blur-[2px]"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/90 via-gray-900/40 to-transparent"></div>
                            
                            <div className="relative w-[320px] h-[600px] bg-gray-50 rounded-t-[3rem] border-[8px] border-b-0 border-gray-800 shadow-2xl overflow-hidden flex flex-col z-10">
                                <div className="absolute top-0 inset-x-0 flex justify-center z-20">
                                    <div className="w-32 h-7 bg-gray-800 rounded-b-3xl"></div>
                                </div>
                                <div className="bg-emerald-700 pt-14 pb-5 px-6 flex items-center gap-4 text-white shadow-md relative z-10">
                                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md">
                                        <Mic className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-sm">GenIA Agrónomo</div>
                                        <div className="text-xs text-emerald-200 flex items-center gap-1.5 mt-0.5">
                                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></div> En línea
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1 bg-[#F0F2F5] p-5 flex flex-col gap-4 overflow-y-auto">
                                    <div className="self-end max-w-[85%] mt-4">
                                        <div className="bg-emerald-600 text-white rounded-2xl rounded-tr-sm p-3.5 shadow-sm text-[13px] leading-relaxed">
                                            ¿Cuál es el estado hídrico del cuartel 4 de cerezos?
                                        </div>
                                    </div>
                                    <div className="self-start max-w-[90%]">
                                        <div className="bg-white text-gray-800 border border-gray-100 rounded-2xl rounded-tl-sm p-4 shadow-sm text-[13px] leading-relaxed">
                                            El cuartel 4 presenta humedad óptima (85%). El próximo ciclo de riego está programado a las 23:00 hrs de forma automática para evitar el horario punta.
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white border-t border-gray-100 p-4 pb-8">
                                    <div className="bg-gray-100 rounded-full h-12 flex items-center px-4 justify-between border border-gray-200">
                                        <span className="text-gray-400 text-sm font-medium">Escuchando...</span>
                                        <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center animate-pulse shadow-lg shadow-emerald-500/40">
                                            <Mic className="w-4 h-4 text-white" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Text Column */}
                        <div className="lg:col-span-7 space-y-10">
                            <div className="inline-block border border-gray-200 bg-white text-gray-600 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6 shadow-sm">
                                Innovación Exclusiva
                            </div>
                            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                                Inteligencia Artificial a <span className="text-emerald-600">Nivel de Terreno</span>.
                            </h2>
                            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                                <p>
                                    La tecnología más avanzada es aquella que no requiere manual de usuario. Hemos integrado un Asistente Conversacional (LLM) entrenado en fisiología vegetal directamente en nuestro sistema.
                                </p>
                                <p>
                                    Su personal interactúa con la infraestructura mediante comandos de voz en lenguaje natural. Obtienen diagnósticos inmediatos y cruzan datos climáticos sin interpretar dashboards complejos, <strong className="text-gray-900">eliminando la brecha digital y la resistencia cultural</strong>.
                                </p>
                            </div>
                            <ul className="space-y-5">
                                <li className="flex items-center gap-4 text-gray-800 font-semibold bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                                    <div className="bg-emerald-100 p-2 rounded-xl text-emerald-600"><CheckCircle2 className="w-5 h-5" /></div> Interfaz 100% Conversacional.
                                </li>
                                <li className="flex items-center gap-4 text-gray-800 font-semibold bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                                    <div className="bg-emerald-100 p-2 rounded-xl text-emerald-600"><CheckCircle2 className="w-5 h-5" /></div> Entrenado con datos agronómicos hiperlocales.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECCIÓN: VISTA GEO-SATELITAL (GEMELO DIGITAL) */}
            <section ref={mapSectionRef} className="py-24 md:py-40 bg-[#14171A] relative overflow-hidden min-h-[100vh] flex items-center border-t border-gray-800">
                <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-emerald-900/10 to-transparent blur-3xl pointer-events-none"></div>
                
                <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                    <div className="grid lg:grid-cols-12 gap-16 items-center">
                        <div className="lg:col-span-4">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                                VISTA <br/> GEO-SATELITAL
                            </h2>
                            <div className="w-12 h-1 bg-emerald-500 mb-8"></div>
                            
                            <p className="text-gray-400 text-lg mb-12 font-light leading-relaxed">
                                Visualización cartográfica con relieve real y capas dinámicas de vigor biológico.
                            </p>

                            <ul className="space-y-8">
                                <li className="flex items-start gap-4">
                                    <div className="mt-1 bg-emerald-900/40 p-1.5 rounded-lg text-emerald-400">
                                        <div className="w-5 h-5 border-2 border-emerald-400 rounded-sm opacity-80"></div>
                                    </div>
                                    <div>
                                        <p className="text-white text-lg"><strong className="font-bold text-emerald-400">Filtros NDVI:</strong> Identificación de estrés prematuro.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="mt-1 bg-emerald-900/40 p-1.5 rounded-lg text-emerald-400">
                                        <div className="w-5 h-5 border-2 border-emerald-400 rounded-md rotate-45 opacity-80"></div>
                                    </div>
                                    <div>
                                        <p className="text-white text-lg"><strong className="font-bold text-emerald-400">Trazado de Polígonos:</strong> Gestión por sectores.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="mt-1 bg-emerald-900/40 p-1.5 rounded-lg text-emerald-400">
                                        <div className="w-5 h-5 rounded-full border-2 border-emerald-400 opacity-80 flex items-center justify-center">
                                            <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-white text-lg"><strong className="font-bold text-emerald-400">Mapeo de Hardware:</strong> Seguimiento satelital de equipos.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Right Content - Pure Top-Down NDVI Map */}
                        <div className="lg:col-span-8 relative">
                            <div className="shadow-2xl shadow-emerald-900/20 rounded-3xl overflow-hidden bg-gray-900 border-4 border-gray-800 relative group">
                                {/* Generated Pure NDVI Satellite Image based on User Reference */}
                                <img src="/ndvi_map.png?v=4" alt="NDVI Heatmap Reference" className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-105" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECCIÓN: ORQUESTACIÓN M2M (DRONES) */}
            <section id="m2m" ref={droneSectionRef} className="py-24 md:py-40 bg-[#0F1115] relative overflow-hidden min-h-[90vh] flex items-center border-t border-gray-800">
                <div className="absolute left-0 top-0 w-1/2 h-full bg-gradient-to-r from-red-900/10 to-transparent blur-3xl pointer-events-none"></div>
                
                <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left Narrative */}
                        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <div className="inline-flex items-center gap-2 border border-red-500/30 bg-red-500/10 text-red-400 px-3 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6 shadow-sm">
                                <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span> Live Feed
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                                Orquestación<br/><span className="text-red-500">Máquina a Máquina</span>
                            </h2>
                            <div className="w-12 h-1 bg-red-500 mb-8"></div>
                            
                            <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-light mb-10">
                                <p>
                                    Cuando un nodo detecta una anomalía crítica—como una caída abrupta de presión—el sistema toma el control de inmediato.
                                </p>
                                <p>
                                    GenIA transmite las coordenadas de la falla directamente a la flota de drones agrícolas, desplegando una inspección visual autónoma antes de que su equipo tenga que moverse de la oficina.
                                </p>
                            </div>

                            <div className="bg-white/5 backdrop-blur-md border-l-4 border-l-red-500 border-y border-r border-white/10 p-5 rounded-r-2xl shadow-xl flex items-center gap-5">
                                <div className="w-14 h-14 bg-red-500/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-red-500/30">
                                    <AlertTriangle className="w-7 h-7 text-red-400 animate-pulse" />
                                </div>
                                <div>
                                    <div className="text-white font-bold text-sm tracking-wide uppercase mb-1">Intervención Autónoma</div>
                                    <div className="text-gray-400 text-sm">Tiempo de despliegue aéreo: &lt; 3 minutos tras alerta del sensor.</div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right HUD Live Feed */}
                        <div className="relative h-[600px] w-full rounded-2xl border-2 border-gray-800 overflow-hidden bg-black shadow-[0_0_50px_rgba(239,68,68,0.15)] group perspective-[1000px]">
                            {/* Drone Video/Image feed */}
                            <img 
                                ref={droneImgRef}
                                src="https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?auto=format&fit=crop&w=1200&q=80" 
                                alt="Live Drone Feed" 
                                className="absolute inset-0 w-[120%] h-[120%] max-w-none object-cover filter grayscale-[0.3] sepia-[0.2] contrast-[1.1] brightness-[0.8]"
                            />
                            
                            {/* Scanlines Effect */}
                            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjIiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC41Ii8+PC9zdmc+')] opacity-30 pointer-events-none mix-blend-overlay"></div>
                            
                            {/* HUD Crosshairs */}
                            <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-white/40"></div>
                            <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-white/40"></div>
                            <div className="absolute bottom-8 left-8 w-12 h-12 border-b-2 border-l-2 border-white/40"></div>
                            <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-white/40"></div>
                            
                            {/* Center Target Indicator */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <div className="w-32 h-32 border border-red-500/40 rounded-full flex items-center justify-center relative animate-[spin_10s_linear_infinite]">
                                    <div className="absolute top-0 left-1/2 w-1 h-2 bg-red-500"></div>
                                    <div className="absolute bottom-0 left-1/2 w-1 h-2 bg-red-500"></div>
                                    <div className="absolute left-0 top-1/2 w-2 h-1 bg-red-500"></div>
                                    <div className="absolute right-0 top-1/2 w-2 h-1 bg-red-500"></div>
                                </div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-red-500/80 rounded-full animate-ping"></div>
                            </div>
                            
                            {/* Telemetry Data (Top) */}
                            <div className="absolute top-6 left-1/2 -translate-x-1/2 flex items-center gap-8 text-[10px] font-mono text-white/80 bg-black/50 px-4 py-1.5 rounded-full border border-white/10 backdrop-blur-md">
                                <div><span className="text-red-400">ALT</span> 124m</div>
                                <div><span className="text-red-400">SPD</span> 32km/h</div>
                                <div><span className="text-red-400">BAT</span> 64%</div>
                            </div>

                            {/* REC Indicator */}
                            <div className="absolute top-8 right-12 flex items-center gap-2 font-mono text-red-500 text-xs font-bold tracking-widest drop-shadow-[0_0_5px_rgba(239,68,68,0.8)]">
                                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div> REC
                            </div>

                            {/* Telemetry Data (Bottom Left) */}
                            <div className="absolute bottom-10 left-12 font-mono text-xs text-emerald-400 drop-shadow-md">
                                <div className="mb-1">TGT: ANOMALÍA SECTOR 4</div>
                                <div>COORD: 33°27'15"S 70°38'42"W</div>
                            </div>

                            {/* Streaming Bar */}
                            <div className="absolute bottom-8 right-12 w-48 h-1 bg-white/20 rounded-full overflow-hidden">
                                <div className="h-full bg-emerald-500 w-full animate-[pulse_2s_ease-in-out_infinite]"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECCIÓN 5: CONVERSIÓN Y CIERRE */}
            <section id="diagnostico" className="py-24 md:py-40 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gray-50 border border-gray-200 rounded-[3rem] p-8 md:p-16 relative shadow-2xl shadow-gray-200/50">
                        <div className="grid lg:grid-cols-2 gap-16 items-start relative h-auto md:h-[100vh]">
                            
                            {/* Left Text Sticky */}
                            <div className="md:sticky md:top-32 z-10 pt-4">
                            <div>
                                <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">
                                    Convierta su Campo en una Operación <span className="text-emerald-600">Inteligente</span>.
                                </h2>
                                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                    Únase a los productores líderes de la Región Metropolitana que ya están protegiendo su calibre premium y reduciendo estructuralmente sus costos operativos. Nos encargamos de la implementación de extremo a extremo.
                                </p>
                                <div className="space-y-5 text-gray-800 font-medium mb-12">
                                    <div className="flex items-center gap-4 bg-white p-3 rounded-2xl shadow-sm border border-gray-100"><div className="bg-emerald-100 p-1.5 rounded-lg text-emerald-600"><CheckCircle2 className="w-5 h-5" /></div> Sin Inversión de Capital (Hardware en Comodato).</div>
                                    <div className="flex items-center gap-4 bg-white p-3 rounded-2xl shadow-sm border border-gray-100"><div className="bg-emerald-100 p-1.5 rounded-lg text-emerald-600"><CheckCircle2 className="w-5 h-5" /></div> ROI medible en la primera temporada.</div>
                                    <div className="flex items-center gap-4 bg-white p-3 rounded-2xl shadow-sm border border-gray-100"><div className="bg-emerald-100 p-1.5 rounded-lg text-emerald-600"><CheckCircle2 className="w-5 h-5" /></div> Soporte e infraestructura garantizada.</div>
                                </div>
                            </div>
                        </div>
                            {/* Right Form Scroll Column */}
                            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-gray-200/50 border border-gray-100 md:mt-32 mb-10">
                                <h3 className="text-xl font-bold text-gray-900 mb-8">Solicitud de Evaluación Técnica</h3>
                                <form className="space-y-5" onSubmit={handleFormSubmit}>
                                    <div>
                                        <input type="text" required value={formData.nombre} onChange={(e) => setFormData({...formData, nombre: e.target.value})} placeholder="Nombre Completo" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all text-gray-800 placeholder-gray-400" />
                                    </div>
                                    <div>
                                        <input type="text" required value={formData.cargo} onChange={(e) => setFormData({...formData, cargo: e.target.value})} placeholder="Cargo (Ej: Gerente Agrícola)" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all text-gray-800 placeholder-gray-400" />
                                    </div>
                                    <div>
                                        <input type="text" required value={formData.empresa} onChange={(e) => setFormData({...formData, empresa: e.target.value})} placeholder="Empresa / Agrícola" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all text-gray-800 placeholder-gray-400" />
                                    </div>
                                    <div className="grid grid-cols-2 gap-5">
                                        <input type="text" required value={formData.hectareas} onChange={(e) => setFormData({...formData, hectareas: e.target.value})} placeholder="Hectáreas" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all text-gray-800 placeholder-gray-400" />
                                        <input type="text" required value={formData.cultivo} onChange={(e) => setFormData({...formData, cultivo: e.target.value})} placeholder="Cultivo" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all text-gray-800 placeholder-gray-400" />
                                    </div>
                                    <div>
                                        <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} placeholder="Correo Corporativo" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all text-gray-800 placeholder-gray-400" />
                                    </div>
                                    
                                    {isSuccess ? (
                                        <div className="w-full bg-emerald-100 text-emerald-700 font-bold rounded-xl px-5 py-4 mt-4 flex items-center justify-center gap-2 border border-emerald-300">
                                            <CheckCircle2 className="w-5 h-5" /> Solicitud Enviada Exitosamente
                                        </div>
                                    ) : (
                                        <button disabled={isSubmitting} type="submit" className="w-full bg-emerald-600 text-white font-bold rounded-xl px-5 py-4 mt-4 hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed">
                                            {isSubmitting ? 'Procesando...' : 'Agendar Auditoría Sin Costo'}
                                            {!isSubmitting && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                                        </button>
                                    )}
                                </form>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="bg-gray-950 pt-20 pb-10 border-t border-gray-900">
                <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                        <div className="md:col-span-1">
                            <div className="flex items-center space-x-2 mb-6">
                                <Droplet className="w-6 h-6 text-emerald-500" />
                                <span className="text-2xl font-black tracking-tighter text-white">GenIA <span className="text-emerald-500">Agrotech</span></span>
                            </div>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Transformando la agricultura a través de infraestructura autónoma, inteligencia artificial de clase mundial y orquestación máquina a máquina.
                            </p>
                        </div>
                        
                        <div>
                            <h4 className="text-white font-bold mb-6">Plataforma</h4>
                            <ul className="space-y-4 text-sm text-gray-500">
                                <li><a href="#infraestructura" className="hover:text-emerald-400 transition-colors">Sensores LoRaWAN</a></li>
                                <li><a href="#inteligencia" className="hover:text-emerald-400 transition-colors">Asistente de Voz IA</a></li>
                                <li><a href="#m2m" className="hover:text-emerald-400 transition-colors">Gemelo Digital NDVI</a></li>
                                <li><a href="#m2m" className="hover:text-emerald-400 transition-colors">Orquestación Drones</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-bold mb-6">Compañía</h4>
                            <ul className="space-y-4 text-sm text-gray-500">
                                <li><a href="#" className="hover:text-emerald-400 transition-colors">Sobre Nosotros</a></li>
                                <li><a href="#" className="hover:text-emerald-400 transition-colors">Casos de Éxito</a></li>
                                <li><a href="#" className="hover:text-emerald-400 transition-colors">Prensa</a></li>
                                <li><a href="#" className="hover:text-emerald-400 transition-colors">Contacto</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-bold mb-6">Contacto Directo</h4>
                            <ul className="space-y-4 text-sm text-gray-500">
                                <li>Santiago, Región Metropolitana, Chile</li>
                                <li>contacto@geniatech.cl</li>
                                <li>+56 9 1234 5678</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-600 text-xs">
                            &copy; {new Date().getFullYear()} GenIA Tech. Todos los derechos reservados.
                        </p>
                        <div className="flex gap-6 text-xs text-gray-600">
                            <a href="#" className="hover:text-white transition-colors">Términos de Servicio</a>
                            <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};
