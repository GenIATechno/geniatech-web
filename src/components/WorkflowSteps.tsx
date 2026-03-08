import { motion } from 'framer-motion';
import { Search, Rocket, ShieldCheck } from 'lucide-react';

const steps = [
    {
        id: 1,
        title: "Diagnóstico y Plan Base",
        icon: Search,
        description: "Analizamos tu operación y diseñamos una base tecnológica sólida. Como tus socios operativos, te proponemos arquitecturas, bases de datos y estrategias de seguridad adaptadas a la realidad de tu negocio."
    },
    {
        id: 2,
        title: "Software MVP en 1 Semana",
        icon: Rocket,
        description: "Olvídate de esperar 6 meses por una agencia tradicional. Desarrollamos tu primera app de gestión, plataforma web o integración de IA funcional en un tiempo récord para que veas resultados reales de inmediato."
    },
    {
        id: 3,
        title: "Escala y Ciberseguridad",
        icon: ShieldCheck,
        description: "El desarrollo no termina el día del lanzamiento. Acompañamos tu crecimiento refinando el software, blindando tus datos contra amenazas globales y asegurando que tu tecnología soporte volumen infinito."
    }
];

export const WorkflowSteps = () => {
    return (
        <section className="py-24 bg-[#050505] border-y border-gray-900 overflow-hidden relative" id="procesos">
            {/* Background Accents */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-64 bg-safety/5 blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20 lg:mb-24">
                    <motion.h4
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-safety font-bold text-xs tracking-[0.2em] uppercase mb-4"
                    >
                        Procesos Claros y Ágiles
                    </motion.h4>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-extrabold text-white tracking-tight"
                    >
                        Tu Flujo de Trabajo
                    </motion.h2>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-16 h-1 bg-safety mx-auto mt-6 rounded-full"
                    />
                </div>

                <div className="relative">
                    {/* Connecting Line */}
                    <div className="hidden lg:block absolute top-[45px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-gray-800 to-transparent z-0"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="relative z-10 flex flex-col items-center text-center group"
                            >
                                {/* Expanding Pulse Rings */}
                                <div className="relative mb-8 flex items-center justify-center">
                                    <div className="absolute inset-0 bg-safety rounded-full opacity-0 group-hover:opacity-20 group-hover:scale-150 transition-all duration-700 ease-out blur-md"></div>
                                    <div className="absolute inset-[-10px] bg-[#111] rounded-full border border-gray-800 group-hover:border-safety/50 transition-colors duration-500"></div>
                                    <div className="absolute inset-[-20px] bg-[#0A0A0A] rounded-full border border-gray-900 group-hover:border-gray-700 transition-colors duration-500"></div>

                                    {/* Number Circle */}
                                    <div className="w-24 h-24 rounded-full bg-gradient-to-b from-[#1a1a1a] to-[#0A0A0A] border-2 border-safety flex items-center justify-center relative shadow-[0_0_30px_rgba(255,87,34,0.15)] group-hover:shadow-[0_0_50px_rgba(255,87,34,0.4)] transition-shadow duration-500">
                                        <step.icon className="w-8 h-8 text-safety drop-shadow-lg" strokeWidth={1.5} />
                                        <div className="absolute -top-3 -right-3 w-8 h-8 bg-black border border-gray-800 rounded-full flex items-center justify-center text-xs font-black text-white shadow-lg">
                                            {step.id}
                                        </div>
                                    </div>
                                </div>

                                <motion.h3
                                    className="text-xl font-bold tracking-tight text-white mb-4 group-hover:text-safety transition-colors"
                                >
                                    {step.title}
                                </motion.h3>

                                <p className="text-gray-400 text-[15px] max-w-[280px] leading-relaxed">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
