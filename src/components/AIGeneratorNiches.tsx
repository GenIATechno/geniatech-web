import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, ArrowRight, CheckCircle2, Bot, Sparkles, Building2, Search } from 'lucide-react';

const industryKeywords: Record<string, { title: string, desc: string, metrics: string[] }> = {
    'restaurante': {
        title: 'Gestión Inteligente de Inventario y Reservas',
        desc: 'Para el sector gastronómico, implementamos sistemas predictivos basados en IA que anticipan la demanda según clima y fechas. Conectamos tu ERP para auto-gestionar compras de materias primas y evitar mermas.',
        metrics: ['12X Aumento en rotación', 'Cuentas cuadradas diarias']
    },
    'gastronomia': {
        title: 'Gestión Inteligente de Inventario y Reservas',
        desc: 'Para el sector gastronómico, implementamos sistemas predictivos basados en IA que anticipan la demanda según clima y fechas. Conectamos tu ERP para auto-gestionar compras de materias primas y evitar mermas.',
        metrics: ['12X Aumento en rotación', 'Cuentas cuadradas diarias']
    },
    'comida': {
        title: 'Gestión Inteligente de Inventario y Reservas',
        desc: 'Para el sector gastronómico, implementamos sistemas predictivos basados en IA que anticipan la demanda según clima y fechas. Conectamos tu ERP para auto-gestionar compras de materias primas y evitar mermas.',
        metrics: ['12X Aumento en rotación', 'Cuentas cuadradas diarias']
    },
    'seguridad': {
        title: 'Plataforma Operativa 24/7 de Guardias',
        desc: 'Automatizamos la trazabilidad completa. Integración de geocercas, workflows inteligentes ante alertas de intrusión (ej: inasistencias o incidentes) e insights biométricos para máxima transparencia operativa.',
        metrics: ['Monitoreo continuo 24/7', 'Automatización vía N8N']
    },
    'guardias': {
        title: 'Plataforma Operativa 24/7 de Guardias',
        desc: 'Automatizamos la trazabilidad completa. Integración de geocercas, workflows inteligentes ante alertas de intrusión (ej: inasistencias o incidentes) e insights biométricos para máxima transparencia operativa.',
        metrics: ['Monitoreo continuo 24/7', 'Automatización vía N8N']
    },
    'inmobiliaria': {
        title: 'Bots y Agendamiento Autónomo para Real-Estate',
        desc: 'Desplegamos bots omnicanal que precalifican leads hipotecarios y coordinan visitas a propiedades de forma 100% autónoma, acortando radicalmente el recorrido de venta tradicional.',
        metrics: ['Booking Inteligente', 'Precalificador Automático']
    },
    'corredora': {
        title: 'Bots y Agendamiento Autónomo para Real-Estate',
        desc: 'Desplegamos bots omnicanal que precalifican leads hipotecarios y coordinan visitas a propiedades de forma 100% autónoma, acortando radicalmente el recorrido de venta tradicional.',
        metrics: ['Booking Inteligente', 'Precalificador Automático']
    },
    'agricultura': {
        title: 'Automatización de Campo y Control de Cosecha',
        desc: 'Integramos sensores IoT y algoritmos visuales para controlar la exposición, medir mermas y predecir tiempos de riego. Abandonamos el azar apostando 100% a los datos confiables estructurados en la nube.',
        metrics: ['Sensores IoT Inteligentes', '94% precisión en conteos']
    },
    'campo': {
        title: 'Automatización de Campo y Control de Cosecha',
        desc: 'Integramos sensores IoT y algoritmos visuales para controlar la exposición, medir mermas y predecir tiempos de riego. Abandonamos el azar apostando 100% a los datos confiables estructurados en la nube.',
        metrics: ['Sensores IoT Inteligentes', '94% precisión en conteos']
    },
    'salud': {
        title: 'Triaje Clínico y Gestión de Pacientes con IA',
        desc: 'Automatizamos el agendamiento médico, integramos pre-evaluación con bots de IA entrenados en tu especialidad y centralizamos las fichas para una atención clínica sin fricciones administrativas.',
        metrics: ['Reducción 80% No-Shows', 'Onboarding médico fluido']
    },
    'medicina': {
        title: 'Triaje Clínico y Gestión de Pacientes con IA',
        desc: 'Automatizamos el agendamiento médico, integramos pre-evaluación con bots de IA entrenados en tu especialidad y centralizamos las fichas para una atención clínica sin fricciones administrativas.',
        metrics: ['Reducción 80% No-Shows', 'Onboarding médico fluido']
    },
    'clinica': {
        title: 'Triaje Clínico y Gestión de Pacientes con IA',
        desc: 'Automatizamos el agendamiento médico, integramos pre-evaluación con bots de IA entrenados en tu especialidad y centralizamos las fichas para una atención clínica sin fricciones administrativas.',
        metrics: ['Reducción 80% No-Shows', 'Onboarding médico fluido']
    },
    'logistica': {
        title: 'Trazabilidad y Ruteo Dinámico Asistido',
        desc: 'Conectamos tu flota con flujos automatizados para despachos. La IA analiza las mejores rutas en vivo, actualiza a los clientes finales y cuadra digitalmente las entregas con pruebas fotográficas validadas.',
        metrics: ['Ruteo Dinámico', 'Zero Merma en Envíos']
    },
    'transporte': {
        title: 'Trazabilidad y Ruteo Dinámico Asistido',
        desc: 'Conectamos tu flota con flujos automatizados para despachos. La IA analiza las mejores rutas en vivo, actualiza a los clientes finales y cuadra digitalmente las entregas con pruebas fotográficas validadas.',
        metrics: ['Ruteo Dinámico', 'Zero Merma en Envíos']
    },
    'abogado': {
        title: 'LegalTech: Lectura Analítica y Búsqueda Judicial',
        desc: 'Implementamos IA privada que lee, clasifica y extrae datos clave de miles de documentos legales en segundos. Generación de minutas automáticas y clasificación de jurisprudencia personalizada.',
        metrics: ['Lectura a +2.000 ppm', 'Buscador de causas NLP']
    },
    'legal': {
        title: 'LegalTech: Lectura Analítica y Búsqueda Judicial',
        desc: 'Implementamos IA privada que lee, clasifica y extrae datos clave de miles de documentos legales en segundos. Generación de minutas automáticas y clasificación de jurisprudencia personalizada.',
        metrics: ['Lectura a +2.000 ppm', 'Buscador de causas NLP']
    },
    'mineria': {
        title: 'Gemelos Digitales y Mantenimiento Predictivo',
        desc: 'Centralizamos el volumen de datos de tu operación minera (sensores, SCADA) procesándolos con IA para alertar desgastes antes de que sucedan, evitando detenciones millonarias en planta.',
        metrics: ['Mantenimiento Predictivo', 'Alerta Temprana en Cloud']
    },
    'retail': {
        title: 'Omnicanalidad Automatizada e IA de Ventas',
        desc: 'Unificamos todo tu catálogo multitienda. Un motor de recomendaciones inteligentes cruza datos de compradores, automatizando el restock y aumentando el ticket promedio en piloto automático.',
        metrics: ['Upselling Automático', 'Sincronización Total']
    },
};

const predefinedSectors = ['Seguridad', 'Agricultura', 'Inmobiliaria', 'Gastronomía', 'Transporte', 'Legal'];

export const AIGeneratorNiches = () => {
    const [inputValue, setInputValue] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);
    const [result, setResult] = useState<{ title: string, desc: string, metrics: string[] } | null>(null);

    const playBeep = () => {
        try {
            const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.type = 'sine';
            osc.frequency.setValueAtTime(800, ctx.currentTime);
            gain.gain.setValueAtTime(0, ctx.currentTime);
            gain.gain.linearRampToValueAtTime(0.1, ctx.currentTime + 0.05);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
            osc.start(ctx.currentTime);
            osc.stop(ctx.currentTime + 0.3);
        } catch (e) {
            // Ignore if audio context not allowed
        }
    };

    const handleGenerate = (sectorOverride?: string) => {
        const query = (sectorOverride || inputValue).trim().toLowerCase();
        if (!query) return;

        setInputValue(sectorOverride || query);
        setIsGenerating(true);
        setResult(null);

        // Simulamos un retraso de procesamiento de la "IA"
        setTimeout(() => {
            let found = false;
            let matchKey = '';

            for (const key in industryKeywords) {
                if (query.includes(key)) {
                    found = true;
                    matchKey = key;
                    break;
                }
            }

            if (found) {
                setResult(industryKeywords[matchKey]);
            } else {
                // Generative fallback
                const capitalized = query.charAt(0).toUpperCase() + query.slice(1);
                setResult({
                    title: `Sistema Operativo Inteligente para ${capitalized}`,
                    desc: `Para el sector de ${query}, GenIA Tech orquesta flujos de trabajo personalizados. Mediante automatización e Inteligencia Artificial corporativa, eliminamos cuellos de botella manuales, centralizamos tu data y optimizamos los tiempos de respuesta radicalmente.`,
                    metrics: ['Trazabilidad en tiempo real', 'Automatización a medida']
                });
            }
            setIsGenerating(false);
            playBeep();
        }, 1500 + Math.random() * 1000); // 1.5s - 2.5s delay for realistic feel
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') handleGenerate();
    };

    return (
        <div className="bg-[#050505] py-24 relative overflow-hidden" id="casos-uso">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,87,34,0.05)_0%,_transparent_70%)] pointer-events-none"></div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="text-safety font-bold tracking-widest uppercase text-sm mb-3 block flex items-center justify-center gap-2">
                        <Sparkles className="w-4 h-4" /> Transversalidad Pura
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                        De Arados a <span className="text-transparent bg-clip-text bg-gradient-to-r from-safety to-orange-400">Algoritmos.</span>
                    </h2>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
                        ¿No ves tu rubro? Nuestra tecnología es matemáticamente ilimitada. Escribe tu sector y
                        nuestra IA proyectará instantáneamente cómo revolucionarlo.
                    </p>
                </motion.div>

                {/* Input Section */}
                <div className="bg-[#0A0A0A] border border-gray-800 rounded-3xl p-2 max-w-2xl mx-auto flex flex-col md:flex-row gap-2 shadow-2xl relative z-20">
                    <div className="relative flex-1 flex items-center bg-[#111111] rounded-2xl px-4 py-2">
                        <Building2 className="w-5 h-5 text-gray-500 mr-3 hidden sm:block" />
                        <input
                            type="text"
                            placeholder="Ej: Constructora, Despacho Abogados, etc..."
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={handleKeyDown}
                            className="bg-transparent border-none text-white focus:outline-none w-full py-2 placeholder-gray-600 font-medium"
                        />
                    </div>
                    <button
                        onClick={() => handleGenerate()}
                        disabled={isGenerating || !inputValue.trim()}
                        className="bg-safety text-white px-6 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 disabled:opacity-50 hover:bg-[#E64A19] transition-all whitespace-nowrap"
                    >
                        {isGenerating ? (
                            <>
                                <Sparkles className="w-5 h-5 animate-spin" /> Analizando...
                            </>
                        ) : (
                            <>
                                <Search className="w-5 h-5" /> Generar Solución
                            </>
                        )}
                    </button>
                </div>

                <div className="flex flex-wrap justify-center gap-2 mt-6 max-w-3xl mx-auto">
                    {predefinedSectors.map((sector) => (
                        <button
                            key={sector}
                            onClick={() => handleGenerate(sector)}
                            className="text-xs font-semibold text-gray-400 bg-[#111] border border-gray-800 hover:border-safety/50 hover:text-white px-3 py-1.5 rounded-full transition-colors"
                        >
                            {sector}
                        </button>
                    ))}
                </div>

                {/* Result Section */}
                <div className="mt-12 min-h-[300px]">
                    <AnimatePresence mode="wait">
                        {isGenerating && (
                            <motion.div
                                key="loading"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="bg-[#0A0A0A] border border-gray-800/60 rounded-3xl p-10 flex flex-col items-center justify-center h-[300px]"
                            >
                                <div className="relative">
                                    <Cpu className="w-12 h-12 text-safety/50 animate-pulse" />
                                    <div className="absolute inset-0 bg-safety blur-[30px] opacity-20 animate-ping"></div>
                                </div>
                                <div className="mt-6 font-mono text-sm text-safety tracking-widest uppercase">
                                    Computando arquitectura operativa...
                                </div>
                                <div className="w-48 h-1 bg-gray-900 mt-4 rounded-full overflow-hidden relative">
                                    <motion.div
                                        className="h-full bg-safety"
                                        initial={{ width: "0%" }}
                                        animate={{ width: "100%" }}
                                        transition={{ duration: 2, ease: "linear" }}
                                    />
                                </div>
                            </motion.div>
                        )}

                        {result && !isGenerating && (
                            <motion.div
                                key="result"
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                className="bg-[#0A0A0A] border border-safety/30 rounded-3xl p-8 md:p-12 shadow-[0_0_50px_rgba(255,87,34,0.1)] relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-safety to-orange-400"></div>

                                <div className="flex flex-col md:flex-row gap-8 justify-between">
                                    <div className="flex-1">
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-safety/10 border border-safety/20 text-safety text-xs font-bold uppercase tracking-widest mb-6">
                                            <Bot className="w-4 h-4" /> Solución Generada
                                        </div>
                                        <h3 className="text-3xl font-extrabold text-white mb-4 tracking-tight leading-snug">
                                            {result.title}
                                        </h3>
                                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                            {result.desc}
                                        </p>

                                        <div className="flex flex-wrap gap-4">
                                            {result.metrics.map((metric, i) => (
                                                <div key={i} className="bg-[#111111] border border-gray-800 rounded-lg px-4 py-2.5 font-semibold text-gray-300 text-sm flex items-center gap-2">
                                                    <CheckCircle2 className="w-4 h-4 text-safety" /> {metric}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="md:border-l border-gray-800 md:pl-10 flex flex-col justify-center min-w-[200px] gap-4">
                                        <p className="text-gray-500 text-sm italic">
                                            ¿Es este el salto que tu empresa necesita?
                                        </p>
                                        <button
                                            onClick={() => window.dispatchEvent(new CustomEvent('open-form'))}
                                            className="bg-safety text-white hover:bg-[#E64A19] px-6 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all w-full md:w-auto mt-2 shadow-[0_0_20px_rgba(255,87,34,0.3)]"
                                        >
                                            Agendar Auditoría <ArrowRight className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {!result && !isGenerating && (
                            <div className="h-[300px] border border-dashed border-gray-800 rounded-3xl flex flex-col items-center justify-center text-center p-8 bg-[#0A0A0A]/30">
                                <Bot className="w-12 h-12 text-gray-700 mb-4" />
                                <h4 className="text-lg font-bold text-gray-300 mb-2">Esperando tu sector</h4>
                                <p className="text-gray-500 text-sm max-w-sm">
                                    Introduce tu rubro en la barra o elige una opción para que la IA diseñe una propuesta instantánea.
                                </p>
                            </div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};
