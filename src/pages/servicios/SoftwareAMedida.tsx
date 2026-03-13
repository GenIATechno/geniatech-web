import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Code2, Layers, ShieldCheck, Rocket, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ParticleBackground } from '../../components/ParticleBackground';

const schemaService = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Software a Medida para Empresas Chile",
    "description": "Desarrollo de software a medida para empresas B2B en Chile. Creamos aplicaciones de gestión interna, sistemas operativos y plataformas empresariales adaptadas exactamente a tu operación.",
    "provider": {
        "@type": "ProfessionalService",
        "name": "GenIA Tech SpA",
        "url": "https://geniatechno.com",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Santiago",
            "addressRegion": "Región Metropolitana",
            "addressCountry": "CL"
        }
    },
    "areaServed": { "@type": "Country", "name": "Chile" },
    "url": "https://geniatechno.com/servicios/software-a-medida"
};

const capacidades = [
    {
        icon: Layers,
        titulo: "Aplicaciones de gestión interna",
        descripcion: "Plataformas internas para gestionar operaciones, equipos, inventario o clientes. Sin limitaciones de software genérico.",
    },
    {
        icon: Code2,
        titulo: "Sistemas de supervisión operativa",
        descripcion: "Centros de mando en tiempo real que consolidan datos de campo, alertas y KPIs operativos en un solo lugar.",
    },
    {
        icon: ShieldCheck,
        titulo: "Integraciones y APIs empresariales",
        descripcion: "Conectamos tu software nuevo con tus sistemas legados, ERPs, plataformas SaaS y cualquier fuente de datos.",
    },
    {
        icon: Rocket,
        titulo: "MVP funcional en semanas",
        descripcion: "Metodología ágil enfocada en valor: entregamos una versión funcional rápida y evolucionamos junto a tu negocio.",
    },
];

const diferenciadores = [
    "Código propio — no dependes de terceros ni licencias",
    "Deploy en cloud chileno o infraestructura propia",
    "Equipo técnico disponible post-lanzamiento",
    "Documentación técnica y capacitación incluida",
    "Escalable desde 5 hasta 500 usuarios sin rediseño",
    "Integramos IA de forma nativa desde el día 1",
];

export const SoftwareAMedida = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <div className="min-h-screen bg-[#000000] text-gray-200 font-sans selection:bg-safety selection:text-white relative">
            <Helmet>
                <title>Software a Medida para Empresas Chile | GenIA Tech — Desarrollo B2B</title>
                <meta name="description" content="Desarrollo de software a medida para empresas B2B en Chile. Aplicaciones de gestión interna, sistemas operativos y plataformas empresariales. MVP funcional en semanas. Santiago." />
                <meta name="keywords" content="software a medida empresas Chile, desarrollo software B2B Chile, aplicaciones gestión interna, sistema operativo empresarial Santiago, desarrollo software a medida Santiago" />
                <link rel="canonical" href="https://geniatechno.com/servicios/software-a-medida" />
                <meta property="og:title" content="Software a Medida para Empresas en Chile | GenIA Tech" />
                <meta property="og:description" content="Desarrollamos software a medida para empresas B2B en Chile. Gestión interna, supervisión operativa y plataformas empresariales. MVP en semanas." />
                <meta property="og:url" content="https://geniatechno.com/servicios/software-a-medida" />
                <meta property="og:type" content="website" />
                <script type="application/ld+json">{JSON.stringify(schemaService)}</script>
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
                        <Code2 className="w-3.5 h-3.5" /> Servicio — Desarrollo
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
                        Software a Medida para{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-safety to-orange-400">Empresas en Chile</span>
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                        El software genérico no fue diseñado para tu operación. Construimos la plataforma exacta que tu empresa necesita: desde apps de campo hasta centros de mando para la gerencia, con código propio y escalable.
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contacto" className="inline-flex items-center gap-2 bg-gradient-to-r from-safety to-orange-500 text-white font-bold py-4 px-8 rounded-full shadow-[0_0_20px_rgba(255,87,34,0.3)] hover:shadow-[0_0_40px_rgba(255,87,34,0.5)] transition-all hover:-translate-y-1">
                            Cotizar mi Proyecto <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link to="/casos" className="inline-flex items-center gap-2 border border-gray-700 text-gray-300 hover:text-white font-bold py-4 px-8 rounded-full transition-all hover:border-gray-500">
                            Ver Casos de Éxito
                        </Link>
                    </div>
                </motion.div>

                {/* CAPACIDADES */}
                <section className="mb-24">
                    <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12 tracking-tight">
                        ¿Qué tipo de software desarrollamos?
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {capacidades.map((c, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-[#0A0A0A] border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-colors"
                            >
                                <div className="w-12 h-12 bg-safety/10 border border-safety/20 text-safety rounded-xl flex items-center justify-center mb-5">
                                    <c.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-3">{c.titulo}</h3>
                                <p className="text-gray-400 leading-relaxed">{c.descripcion}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* DIFERENCIADORES */}
                <section className="mb-24 bg-[#050505] border border-gray-800 rounded-[2rem] p-10 md:p-14">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-10 tracking-tight">
                        Por qué empresas B2B en Chile eligen GenIA Tech para su software
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {diferenciadores.map((d, i) => (
                            <div key={i} className="flex items-start gap-3 text-gray-300 font-medium">
                                <CheckCircle2 className="w-5 h-5 text-safety mt-0.5 flex-shrink-0" />
                                <span>{d}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <div className="text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        ¿Cuánto cuesta desarrollar software a medida en Chile?
                    </h2>
                    <p className="text-gray-400 mb-8 max-w-xl mx-auto">Proyectos desde $3.5M CLP con MVP funcional en 4–6 semanas. Cuéntanos tu desafío y te entregamos una propuesta técnica sin compromiso.</p>
                    <Link to="/contacto" className="inline-flex items-center gap-2 bg-gradient-to-r from-safety to-orange-500 text-white font-bold py-4 px-10 rounded-full shadow-[0_0_20px_rgba(255,87,34,0.3)] hover:shadow-[0_0_40px_rgba(255,87,34,0.5)] transition-all hover:-translate-y-1">
                        Solicitar Propuesta Técnica <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </main>
        </div>
    );
};
