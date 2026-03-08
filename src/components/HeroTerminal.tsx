import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const lines = [
    "> Analizando 20.000 filas de logística... [OK]",
    "> Detectando ineficiencias de workflow... [14 HITS]",
    "> Formulando script de automatización N8N...",
    "> Desplegando IA predictiva al ERP...     [LISTO]",
    "> Ahorro cruzado proyectado Q3: +$15.4M.  [ACTIVO]",
];

export const HeroTerminal = () => {
    const [currentLines, setCurrentLines] = useState<string[]>([]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < lines.length) {
            const timer = setTimeout(() => {
                setCurrentLines((prev) => [...prev, lines[index]]);
                setIndex((prev) => prev + 1);
            }, 1200 + Math.random() * 800); // Random delay typing effect
            return () => clearTimeout(timer);
        } else {
            // Loop it after a few seconds
            const reset = setTimeout(() => {
                setCurrentLines([]);
                setIndex(0);
            }, 5000);
            return () => clearTimeout(reset);
        }
    }, [index]);

    return (
        <div className="w-full bg-[#050505] border border-gray-800 rounded-xl overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.8)] text-xs md:text-sm font-mono text-green-400 opacity-90 backdrop-blur-md h-auto min-h-[140px] relative mt-8 z-20 max-w-lg">
            <div className="bg-[#111] px-3 py-1.5 flex items-center gap-1.5 border-b border-gray-800">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                <span className="ml-2 text-gray-500 text-[10px] uppercase font-sans tracking-widest font-bold">GenIA Agent v2.4</span>
            </div>
            <div className="p-4 space-y-2">
                <AnimatePresence>
                    {currentLines.map((line, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2 }}
                            className="break-words whitespace-pre-wrap"
                        >
                            <span className="text-gray-500 mr-2">~</span>
                            {line}
                        </motion.div>
                    ))}
                    {/* Blinking cursor */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                        className="inline-block w-2.5 h-4 bg-green-500 align-middle ml-2"
                    />
                </AnimatePresence>
            </div>
        </div>
    );
};
