import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, TrendingUp, Building2, ShieldAlert, BadgeCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ParticleBackground } from '../components/ParticleBackground';

const cases = [
    {
        id: "inout-seguridad",
        client: "Inout Seguridad",
        industry: "Seguridad Privada y Operaciones",
        problem: "Alta fricción en la validación de identidades, turnos de guardias gestionados manualmente, y nula trazabilidad en vivo de rondas e incidentes a lo largo de Chile.",
        solution: "Desarrollo de un ecosistema operativo integral: Creamos una aplicación de campo intuitiva para que los guardias validen su identidad sin fricción, conectada un centro de mando en vivo para la gerencia. Ahora toda la información operativa fluye y alerta de forma automática, sin depender de reportes en papel.",
        results: [
            "Tiempo de check-in reducido en un 85%.",
            "Trazabilidad y GPS en vivo del 100% de la flota.",
            "Eliminación total del papel en bitácoras."
        ],
        roi: "+300%",
        icon: ShieldAlert
    },
    {
        id: "logistica-nacional",
        client: "Empresa de Logística Nacional",
        industry: "Distribución y Transporte",
        problem: "Pérdida de prospectos B2B (38% de 'Drop') por lentitud en la respuesta manual y presupuestación basada en Excel aislado.",
        solution: "Implementación de un cotizador inteligente acoplado a un embudo de ventas automático. En cuanto un prospecto solicita un presupuesto, el equipo comercial recibe alertas instantáneas con toda la información clave ya procesada, eliminando tiempos muertos y el uso de un sinfín de hojas de cálculo aisladas.",
        results: [
            "Tasa de respuesta de leads bajó de 4 horas a < 5 minutos.",
            "Aumento en la retención de clientes B2B.",
            "Pipeline de ventas automatizado 24/7."
        ],
        roi: "+180%",
        icon: TrendingUp
    }
];

export const CasosUso = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[#000000] text-gray-200 font-sans selection:bg-safety selection:text-white relative">
            <Helmet>
                <title>Casos de Éxito y Uso | GenIA Tech</title>
                <meta name="description" content="Descubre cómo GenIA Tech escala empresas B2B en Chile resolviendo problemas críticos operativos con software a medida e IA." />
                <link rel="canonical" href="https://geniatechno.com/casos" />
            </Helmet>

            <ParticleBackground />

            {/* Simple Navbar */}
            <nav className="fixed w-full z-50 transition-all duration-300 bg-[#000000]/80 backdrop-blur-md border-b border-gray-900 shadow-xl">
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
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-20"
                >
                    <h4 className="text-safety font-bold text-xs tracking-[0.2em] uppercase mb-4">Evidencia y Trazabilidad</h4>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
                        Casos de Estudio <span className="text-transparent bg-clip-text bg-gradient-to-r from-safety to-orange-400">B2B</span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Conoce cómo empresas líderes en Chile resolvieron cuellos de botella mediante auditorías precisas, software a medida y arquitecturas desplegadas en tiempo récord por GenIA Tech.
                    </p>
                </motion.div>

                <div className="space-y-12 md:space-y-16">
                    {cases.map((caso, idx) => (
                        <motion.div
                            key={caso.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="bg-[#050505] border border-gray-800 rounded-[2rem] overflow-hidden flex flex-col lg:flex-row group hover:border-gray-700 transition-colors"
                        >
                            {/* Left Side: Client Info */}
                            <div className="w-full lg:w-1/3 bg-[#0A0A0A] p-8 md:p-12 border-r border-gray-800 flex flex-col justify-between">
                                <div>
                                    <div className="w-14 h-14 bg-safety/10 text-safety rounded-2xl flex items-center justify-center mb-6 border border-safety/20">
                                        <caso.icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">{caso.client}</h3>
                                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-8 flex items-center gap-2">
                                        <Building2 className="w-4 h-4" /> {caso.industry}
                                    </p>
                                </div>
                                <div className="mt-8">
                                    <div className="text-[3rem] font-black text-white leading-none tracking-tighter mb-2">
                                        {caso.roi}
                                    </div>
                                    <p className="text-safety font-bold text-sm tracking-widest uppercase">
                                        Impacto Estimado
                                    </p>
                                </div>
                            </div>

                            {/* Right Side: The Story */}
                            <div className="w-full lg:w-2/3 p-8 md:p-12 space-y-10">
                                <div>
                                    <h4 className="text-lg font-black text-gray-300 mb-3 flex items-center gap-2">
                                        El Desafío Operativo
                                    </h4>
                                    <p className="text-gray-400 leading-relaxed">
                                        {caso.problem}
                                    </p>
                                </div>

                                <div className="pl-6 border-l-2 border-safety/50 relative">
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-safety shadow-[0_0_10px_#ff5722]"></div>
                                    <h4 className="text-lg font-black text-white mb-3">
                                        La Solución GenIA
                                    </h4>
                                    <p className="text-gray-300 leading-relaxed font-medium">
                                        {caso.solution}
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-lg font-black text-gray-300 mb-4">Resultados Reales</h4>
                                    <ul className="space-y-3">
                                        {caso.results.map((res, i) => (
                                            <li key={i} className="flex items-start gap-3 text-gray-400">
                                                <BadgeCheck className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                                <span className="leading-relaxed">{res}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-24 text-center">
                    <h3 className="text-2xl font-bold text-white mb-6">¿Listo para ser el próximo caso de éxito en tu industria?</h3>
                    <a href="/#contacto" className="inline-flex items-center gap-2 bg-gradient-to-r from-safety to-orange-500 text-white font-bold py-4 px-8 rounded-full shadow-[0_0_20px_rgba(255,87,34,0.3)] hover:shadow-[0_0_40px_rgba(255,87,34,0.5)] transition-all hover:-translate-y-1 group">
                        Solicitar Diagnóstico Operativo
                    </a>
                </div>
            </main>
        </div>
    );
};
