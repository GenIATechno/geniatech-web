import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, TrendingDown, DollarSign, Users, Skull } from 'lucide-react';

export const COICalculator = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [leadsPerMonth, setLeadsPerMonth] = useState(100);
    const [averageValue, setAverageValue] = useState(1000000);
    const [animatedLost, setAnimatedLost] = useState(0);

    // 38% of leads are statistically lost or drop due to delayed human responses.
    const lostPercentage = 0.38;
    const lostLeadsPerMonth = leadsPerMonth * lostPercentage;
    const lostMoneyMonthly = lostLeadsPerMonth * averageValue;
    const lostMoneyYearly = lostMoneyMonthly * 12;

    useEffect(() => {
        if (!isOpen) return;
        const duration = 800;
        const steps = 30;
        const stepTime = duration / steps;
        const diff = lostMoneyYearly - animatedLost;
        const increment = diff / steps;

        let current = animatedLost;
        let stepCount = 0;

        const timer = setInterval(() => {
            current += increment;
            stepCount++;
            if (stepCount >= steps) {
                setAnimatedLost(lostMoneyYearly);
                clearInterval(timer);
            } else {
                setAnimatedLost(current);
            }
        }, stepTime);

        return () => clearInterval(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [lostMoneyYearly, isOpen]);

    const formatCurrency = (val: number) => {
        return new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP', maximumFractionDigits: 0 }).format(Math.round(val));
    };

    return (
        <div className="w-full bg-[#050505] border border-red-900/30 rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(220,38,38,0.05)] relative font-sans">

            {!isOpen ? (
                <div
                    onClick={() => setIsOpen(true)}
                    className="p-10 flex flex-col items-center justify-center cursor-pointer group hover:bg-[#0a0a0a] transition-colors relative overflow-hidden"
                >
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-red-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <AlertTriangle className="w-12 h-12 text-red-500 mb-4 drop-shadow-[0_0_15px_rgba(239,68,68,0.5)] group-hover:scale-110 transition-transform" />
                    <h3 className="text-2xl font-bold text-white tracking-tight uppercase group-hover:text-red-400 transition-colors">
                        Calcula tu Costo de No Automatizar
                    </h3>
                    <p className="text-gray-500 mt-2 font-medium">Click para ver la simulación de pérdida anual.</p>
                </div>
            ) : (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="p-8 md:p-12 relative"
                >
                    {/* Background red glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-red-600/5 blur-[120px] rounded-full pointer-events-none"></div>

                    <div className="text-center mb-12 relative z-10">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-red-950/30 border border-red-900/50 text-red-500 mb-6 shadow-[0_0_30px_rgba(220,38,38,0.2)]">
                            <Skull className="w-8 h-8" />
                        </div>
                        <h3 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">Semáforo de Inacción Empresarial</h3>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                            Al gestionar correos y prospectos manualmente, la latencia humana destruye oportunidades. Un <span className="text-red-400 font-bold">38% de los leads</span> se enfría y muere si no son atendidos antes de 5 minutos.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-5xl mx-auto relative z-10">

                        {/* Sliders Area */}
                        <div className="space-y-10 bg-[#0a0a0a] p-8 rounded-2xl border border-red-950/50 shadow-inner">
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <label className="text-sm font-semibold text-gray-300 flex items-center gap-2">
                                        <Users className="w-4 h-4 text-red-500" />
                                        Prospectos al mes
                                    </label>
                                    <span className="text-xl font-bold text-white bg-red-950/40 px-3 py-1 rounded-lg border border-red-900/50">{leadsPerMonth}</span>
                                </div>
                                <input
                                    type="range"
                                    min="10"
                                    max="1000"
                                    step="10"
                                    value={leadsPerMonth}
                                    onChange={(e) => setLeadsPerMonth(parseInt(e.target.value))}
                                    className="w-full accent-red-600 h-2 bg-gray-900 rounded-lg appearance-none cursor-pointer"
                                />
                            </div>

                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <label className="text-sm font-semibold text-gray-300 flex items-center gap-2">
                                        <DollarSign className="w-4 h-4 text-red-500" />
                                        Ticket Promedio (CLP)
                                    </label>
                                    <span className="text-xl font-bold text-white bg-red-950/40 px-3 py-1 rounded-lg border border-red-900/50">{formatCurrency(averageValue)}</span>
                                </div>
                                <input
                                    type="range"
                                    min="50000"
                                    max="5000000"
                                    step="50000"
                                    value={averageValue}
                                    onChange={(e) => setAverageValue(parseInt(e.target.value))}
                                    className="w-full accent-red-600 h-2 bg-gray-900 rounded-lg appearance-none cursor-pointer"
                                />
                            </div>

                            <div className="pt-6 border-t border-red-950/50">
                                <p className="text-[13px] text-gray-500 italic text-center leading-relaxed">
                                    Mantener el status quo significa operar a ciegas. Cada minuto extra de atención manual disminuye drásticamente el impacto de venta.
                                </p>
                            </div>
                        </div>

                        {/* Result Area */}
                        <div className="flex flex-col items-center justify-center text-center bg-gradient-to-b from-[#1a0505] to-[#0a0000] p-8 rounded-2xl border border-red-900 shadow-[0_0_50px_rgba(220,38,38,0.15)] relative overflow-hidden group">

                            <TrendingDown className="w-12 h-12 text-red-500 mb-6 drop-shadow-[0_0_15px_rgba(239,68,68,0.5)]" />

                            <p className="text-gray-400 font-semibold mb-2 uppercase tracking-widest text-sm">Proyección de Pérdida Anual</p>

                            <motion.div
                                key={lostMoneyYearly}
                                initial={{ scale: 0.9, opacity: 0.8 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-red-200 mb-6 tabular-nums drop-shadow-xl"
                            >
                                {formatCurrency(animatedLost)}
                            </motion.div>

                            <div className="bg-red-500/10 border border-red-500/20 px-6 py-4 rounded-xl mt-4 max-w-sm">
                                <p className="text-red-400 font-bold text-sm leading-relaxed">
                                    Directo a los bolsillos de la competencia que sí automatiza su gestión.
                                </p>
                            </div>

                            <button
                                onClick={() => {
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }}
                                className="mt-8 relative inline-flex h-12 w-full animate-shimmer items-center justify-center rounded-xl border border-green-500 bg-[linear-gradient(110deg,#0a2e15,45%,#15803d,55%,#0a2e15)] bg-[length:200%_100%] px-6 font-bold text-white transition-colors focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-slate-50 uppercase tracking-widest text-xs overflow-hidden group hover:scale-[1.02]"
                            >
                                <span className="absolute inset-0 w-full h-full bg-green-500/10 blur-xl group-hover:bg-green-500/30 transition-all duration-300"></span>
                                <span className="relative z-10">Frena esta hemorragia ahora</span>
                            </button>
                        </div>

                    </div>
                </motion.div>
            )}
        </div>
    );
};
