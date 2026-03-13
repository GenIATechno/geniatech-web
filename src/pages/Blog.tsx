import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Rss } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ParticleBackground } from '../components/ParticleBackground';

const schemaBlog = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Blog GenIA Tech — Automatización e IA B2B en Chile",
    "description": "Artículos y guías sobre automatización empresarial, software a medida e inteligencia artificial para empresas B2B en Chile.",
    "url": "https://geniatechno.com/blog",
    "publisher": {
        "@type": "Organization",
        "name": "GenIA Tech SpA",
        "url": "https://geniatechno.com"
    }
};

const temasProximos = [
    "Cómo automatizar el proceso de cotización en empresas de logística",
    "Software a medida vs. SaaS genérico: cuándo conviene cada uno",
    "Inteligencia artificial en pymes chilenas: casos reales y retorno",
    "Guía: auditar tus procesos operativos en 1 día",
    "Sistema de supervisión operativa: qué es y por qué lo necesitas",
    "Automatización empresarial en Chile: el estado del mercado 2026",
];

export const Blog = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <div className="min-h-screen bg-[#000000] text-gray-200 font-sans selection:bg-safety selection:text-white relative">
            <Helmet>
                <title>Blog | GenIA Tech — Automatización e Inteligencia Artificial B2B en Chile</title>
                <meta name="description" content="Blog de GenIA Tech: artículos, guías y casos reales sobre automatización empresarial, software a medida e inteligencia artificial para empresas B2B en Chile." />
                <meta name="keywords" content="blog automatización empresarial Chile, artículos IA B2B Chile, guías software a medida, automatización procesos pymes Chile, GenIA Tech blog" />
                <link rel="canonical" href="https://geniatechno.com/blog" />
                <meta property="og:title" content="Blog GenIA Tech — Automatización e IA B2B en Chile" />
                <meta property="og:description" content="Artículos y guías sobre automatización empresarial, software a medida e inteligencia artificial para empresas B2B en Chile." />
                <meta property="og:url" content="https://geniatechno.com/blog" />
                <script type="application/ld+json">{JSON.stringify(schemaBlog)}</script>
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

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-20 max-w-3xl mx-auto">
                    <div className="w-16 h-16 bg-safety/10 border border-safety/20 text-safety rounded-2xl flex items-center justify-center mb-8 mx-auto">
                        <Rss className="w-8 h-8" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
                        Próximamente:{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-safety to-orange-400">Blog de Automatización e IA B2B</span>
                    </h1>
                    <p className="text-gray-400 text-lg leading-relaxed mb-8">
                        Estamos preparando artículos, guías y casos reales sobre automatización empresarial, software a medida e inteligencia artificial para empresas B2B en Chile.
                    </p>
                    <span className="inline-flex items-center gap-2 bg-[#111] border border-gray-800 text-safety text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest">
                        <span className="w-2 h-2 rounded-full bg-safety animate-pulse"></span> Lanzamiento Q2 2026
                    </span>
                </motion.div>

                {/* Temas próximos */}
                <section className="mb-24 max-w-3xl mx-auto">
                    <h2 className="text-xl font-bold text-gray-400 text-center mb-8 uppercase tracking-widest text-sm">
                        Temas que cubriremos
                    </h2>
                    <div className="space-y-3">
                        {temasProximos.map((tema, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                                className="bg-[#0A0A0A] border border-gray-800 rounded-xl p-5 flex items-center gap-4 hover:border-gray-700 transition-colors"
                            >
                                <span className="text-safety font-black text-sm w-6 flex-shrink-0">0{i + 1}</span>
                                <p className="text-gray-300 font-medium">{tema}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <div className="text-center">
                    <p className="text-gray-500 mb-6">¿No puedes esperar? Habla directo con un especialista.</p>
                    <Link to="/contacto" className="inline-flex items-center gap-2 bg-gradient-to-r from-safety to-orange-500 text-white font-bold py-4 px-10 rounded-full shadow-[0_0_20px_rgba(255,87,34,0.3)] hover:shadow-[0_0_40px_rgba(255,87,34,0.5)] transition-all hover:-translate-y-1">
                        Solicitar Diagnóstico Gratuito <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </main>
        </div>
    );
};
