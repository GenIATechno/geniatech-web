import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, TrendingUp, DollarSign, Clock } from 'lucide-react';

export const ROICalculator = () => {
    const [employees, setEmployees] = useState(5);
    const [hoursPerWeek, setHoursPerWeek] = useState(10);
    const [animatedSavings, setAnimatedSavings] = useState(0);

    // Assume average cost per hour is $10.000 CLP for an administrative role
    const costPerHour = 10000;

    // Total savings per year: Employees * Hours/Week * 52 Weeks * Cost/Hour
    const yearlySavings = employees * hoursPerWeek * 52 * costPerHour;

    // Coin shower logic
    const [coins, setCoins] = useState<{ id: string; x: number }[]>([]);

    useEffect(() => {
        if (yearlySavings > 0) {
            // Drop a new coin whenever the savings update (user moves slider)
            const newCoin = {
                id: Math.random().toString(36).substring(7) + Date.now(),
                x: Math.random() * 80 + 10 // Random X position between 10% and 90%
            };
            setCoins(prev => [...prev.slice(-15), newCoin]); // Keep last 15 coins to avoid memory leaks
        }
    }, [yearlySavings]);

    // Animate the savings number whenever inputs change
    useEffect(() => {
        const duration = 500; // ms
        const steps = 20;
        const stepTime = duration / steps;
        const diff = yearlySavings - animatedSavings;
        const increment = diff / steps;

        let current = animatedSavings;
        let stepCount = 0;

        const timer = setInterval(() => {
            current += increment;
            stepCount++;
            if (stepCount >= steps) {
                setAnimatedSavings(yearlySavings);
                clearInterval(timer);
            } else {
                setAnimatedSavings(current);
            }
        }, stepTime);

        return () => clearInterval(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [yearlySavings]);

    const formatCurrency = (val: number) => {
        return new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP', maximumFractionDigits: 0 }).format(Math.round(val));
    };

    return (
        <div className="w-full bg-[#0A0A0A] border border-gray-800 rounded-3xl p-8 relative overflow-hidden flex flex-col items-center justify-center">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-safety/10 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-500/5 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="text-center mb-8 relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#111] border border-gray-800 text-safety mb-6 shadow-[0_0_30px_rgba(255,87,34,0.15)]">
                    <Calculator className="w-8 h-8" />
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">Proyección de Ahorro GenIA</h3>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                    Descubre cuánto dinero está quemando tu empresa al año en tareas repetitivas que nuestra automatización podría resolver.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-5xl relative z-10">
                {/* Sliders Area */}
                <div className="space-y-10 bg-[#111] p-8 rounded-2xl border border-gray-800">
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <label className="text-sm font-semibold text-gray-300 flex items-center gap-2">
                                <DollarSign className="w-4 h-4 text-safety" />
                                Equipo Administrativo (Personas)
                            </label>
                            <span className="text-xl font-bold text-white bg-gray-900 px-3 py-1 rounded-lg border border-gray-700">{employees}</span>
                        </div>
                        <input
                            type="range"
                            min="1"
                            max="50"
                            value={employees}
                            onChange={(e) => setEmployees(parseInt(e.target.value))}
                            className="w-full accent-safety h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer"
                        />
                    </div>

                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <label className="text-sm font-semibold text-gray-300 flex items-center gap-2">
                                <Clock className="w-4 h-4 text-safety" />
                                Horas perdidas por persona (Semanal)
                            </label>
                            <span className="text-xl font-bold text-white bg-gray-900 px-3 py-1 rounded-lg border border-gray-700">{hoursPerWeek}h</span>
                        </div>
                        <input
                            type="range"
                            min="1"
                            max="40"
                            value={hoursPerWeek}
                            onChange={(e) => setHoursPerWeek(parseInt(e.target.value))}
                            className="w-full accent-safety h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer"
                        />
                    </div>

                    <div className="pt-4 border-t border-gray-800/80">
                        <p className="text-xs text-gray-500 italic flex justify-center text-center">
                            * Cálculo basado en un costo hora-hombre administrativo promedio estimado en Chile.
                        </p>
                    </div>
                </div>

                {/* Result Area */}
                <div className="flex flex-col items-center justify-center text-center bg-gradient-to-b from-[#1A1A1A] to-[#0A0A0A] p-8 rounded-2xl border border-gray-800 shadow-[0_0_50px_rgba(255,87,34,0.05)] relative overflow-hidden group">
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-50"></div>

                    <TrendingUp className="w-12 h-12 text-green-500 mb-6 drop-shadow-[0_0_15px_rgba(34,197,94,0.4)] relative z-10" />

                    <p className="text-gray-400 font-semibold mb-2 uppercase tracking-widest text-sm relative z-10">Fuga de Capital Anual</p>

                    {/* Animated Coins Background Effect */}
                    <div className="absolute inset-x-0 bottom-0 h-full overflow-hidden pointer-events-none opacity-40 z-0">
                        <AnimatePresence>
                            {coins.map((coin) => (
                                <motion.div
                                    key={coin.id}
                                    initial={{ y: -50, opacity: 0, scale: 0.5, rotate: 0 }}
                                    animate={{ y: 300, opacity: [0, 1, 1, 0], scale: 1, rotate: 360 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 1.5, ease: "easeIn" }}
                                    className="absolute top-0 text-green-500 drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]"
                                    style={{ left: `${coin.x}%` }}
                                >
                                    <DollarSign className="w-8 h-8 opacity-60" />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    <motion.div
                        key={yearlySavings}
                        initial={{ scale: 0.9, opacity: 0.8, filter: 'blur(4px)' }}
                        animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
                        className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 mb-6 tabular-nums"
                    >
                        {formatCurrency(animatedSavings)}
                    </motion.div>

                    <div className="bg-green-500/10 border border-green-500/20 px-6 py-3 rounded-full relative z-10">
                        <p className="text-green-400 font-bold text-sm">
                            Este es el monto que la automatización intercepta.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
