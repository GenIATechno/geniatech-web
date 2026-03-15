import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ParticleBackground } from '../components/ParticleBackground';

const schemaNosotros = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "Nosotros — GenIA Tech SpA",
    "description": "GenIA Tech es una empresa chilena de automatización empresarial, software a medida e inteligencia artificial B2B. Fundada por Martín Díaz en Santiago, Chile.",
    "url": "https://geniatechno.com/nosotros",
    "mainEntity": {
        "@type": "ProfessionalService",
        "name": "GenIA Tech SpA",
        "founder": {
            "@type": "Person",
            "name": "Martín Díaz",
            "jobTitle": "CEO & Founder"
        },
        "foundingLocation": "Santiago, Chile",
        "url": "https://geniatechno.com"
    }
};

const valores = [
    { titulo: "Resultados sobre promesas", desc: "Cada proyecto se mide en tiempo ahorrado, errores reducidos y dinero recuperado. Sin métricas de vanidad." },
    { titulo: "Velocidad sin sacrificar calidad", desc: "MVP funcional en semanas, no en meses. Iteramos rápido y entregamos valor desde el primer sprint." },
    { titulo: "Tecnología que escala contigo", desc: "Construimos sobre bases sólidas. Lo que desarrollamos hoy soporta el crecimiento de tu empresa los próximos 5 años." },
    { titulo: "Socio, no proveedor", desc: "Nos involucramos en tu operación como si fuera la nuestra. Tu problema es nuestro problema." },
];

export const Nosotros = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <div className="min-h-screen bg-[#000000] text-gray-200 font-sans selection:bg-safety selection:text-white relative">
            <Helmet>
                <title>Nosotros | GenIA Tech — Automatización Empresarial e IA B2B en Chile</title>
                <meta name="description" content="Conoce a GenIA Tech: empresa chilena de automatización empresarial, software a medida e inteligencia artificial B2B. Fundada por Martín Díaz en Santiago, Chile." />
                <meta name="keywords" content="GenIA Tech empresa Chile, quiénes somos GenIA Tech, Martín Díaz CEO GenIA Tech, empresa automatización Santiago Chile" />
                <link rel="canonical" href="https://geniatechno.com/nosotros" />
                <meta property="og:title" content="Nosotros | GenIA Tech — Santiago, Chile" />
                <meta property="og:description" content="Empresa chilena de automatización empresarial, software a medida e IA B2B. Conoce al equipo y la filosofía que impulsa GenIA Tech." />
                <meta property="og:url" content="https://geniatechno.com/nosotros" />
                <script type="application/ld+json">{JSON.stringify(schemaNosotros)}</script>
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
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-20 max-w-3xl mx-auto">
                    <span className="inline-flex items-center gap-2 bg-[#111] border border-gray-800 text-safety text-xs font-bold px-4 py-2 rounded-full mb-6 uppercase tracking-widest">
                        Santiago, Chile
                    </span>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
                        La empresa detrás de{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-safety to-orange-400">la automatización B2B en Chile</span>
                    </h1>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        GenIA Tech nació para resolver un problema real: las empresas chilenas perdían horas, clientes y dinero en procesos manuales que la tecnología puede eliminar. Somos el equipo que lo hace posible.
                    </p>
                </motion.div>

                {/* CEO SECTION */}
                <section className="mb-24">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="w-full md:w-1/3 flex justify-center"
                        >
                            <div className="relative">
                                <div className="absolute inset-0 bg-safety rounded-[32px] rotate-3 scale-105 opacity-20 blur-sm"></div>
                                <img
                                    src="/martin_ceo.png"
                                    alt="Martín Díaz, CEO y Fundador de GenIA Tech"
                                    loading="lazy"
                                    decoding="async"
                                    className="rounded-[32px] relative z-10 w-72 h-auto shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-gray-800"
                                />
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 }}
                                    className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-[#1A1A1A] border border-gray-800 px-6 py-3 rounded-full text-sm font-bold whitespace-nowrap shadow-xl flex items-center gap-3 z-20"
                                >
                                    <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span> Martín Díaz • CEO & Founder
                                </motion.div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="w-full md:w-2/3"
                        >
                            <h2 className="text-3xl md:text-[2.5rem] font-bold mb-8 leading-tight tracking-tight">
                                Automatización empresarial con IA para empresas B2B en Chile
                            </h2>
                            <div className="p-8 md:p-10 border border-gray-800/80 rounded-[24px] bg-[#0A0A0A] relative shadow-2xl mb-8">
                                <span className="absolute -top-3.5 left-8 bg-safety text-white text-[11px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">Nuestra Filosofía</span>
                                <p className="text-xl md:text-2xl text-gray-400 font-medium italic leading-relaxed">
                                    "No vendemos software superficial, <span className="text-white">implementamos soluciones operativas</span> que se adaptan al reloj de tu operación. GenIA Tech es el co-piloto tecnológico para el empresario chileno moderno."
                                </p>
                            </div>
                            <p className="text-gray-400 leading-relaxed mb-6">
                                Con más de 5 años resolviendo cuellos de botella operativos en empresas chilenas de seguridad, logística, retail y servicios, GenIA Tech desarrolla software a medida, automatizaciones y sistemas de supervisión que generan retorno medible desde el primer mes.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {['Santiago, Chile', 'Fundada 2020', 'B2B Only', '+$7M CLP ticket promedio'].map((tag) => (
                                    <span key={tag} className="text-xs font-bold text-gray-400 bg-[#111] border border-gray-800 px-4 py-2 rounded-full uppercase tracking-widest">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* VALORES */}
                <section className="mb-24">
                    <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12 tracking-tight">
                        Los principios que guían cada proyecto
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {valores.map((v, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-[#0A0A0A] border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-colors"
                            >
                                <div className="flex items-start gap-4">
                                    <CheckCircle2 className="w-6 h-6 text-safety flex-shrink-0 mt-0.5" />
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-2">{v.titulo}</h3>
                                        <p className="text-gray-400 leading-relaxed">{v.desc}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <div className="text-center bg-[#050505] border border-gray-800 rounded-[2rem] p-12 md:p-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        ¿Quieres trabajar con nosotros?
                    </h2>
                    <p className="text-gray-400 mb-8 max-w-xl mx-auto">Cuéntanos tu desafío operativo. En 24 horas te respondemos con un diagnóstico preliminar sin costo.</p>
                    <Link to="/contacto" className="inline-flex items-center gap-2 bg-gradient-to-r from-safety to-orange-500 text-white font-bold py-4 px-10 rounded-full shadow-[0_0_20px_rgba(255,87,34,0.3)] hover:shadow-[0_0_40px_rgba(255,87,34,0.5)] transition-all hover:-translate-y-1">
                        Solicitar Diagnóstico Gratuito <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </main>
        </div>
    );
};
