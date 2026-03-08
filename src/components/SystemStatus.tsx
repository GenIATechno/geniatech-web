import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Activity, Server, Zap } from 'lucide-react';

export const SystemStatus = () => {
    const [ping, setPing] = useState(12);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Simulate fluctuating latency for a realistic feel
        const interval = setInterval(() => {
            setPing(Math.floor(Math.random() * (18 - 8 + 1) + 8));
        }, 3000);

        const handleScroll = () => {
            // Hide if we are within 100px of the absolute bottom of the document
            const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
            setIsVisible(!isAtBottom);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            clearInterval(interval);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50, pointerEvents: isVisible ? 'auto' : 'none' }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className={`fixed bottom-6 left-6 z-[60] hidden md:flex items-center gap-3 bg-[#0A0A0A]/80 backdrop-blur-md border border-gray-800/60 p-2.5 rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.5)] cursor-default hover:bg-[#111111]/90 transition-colors`}
        >
            <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-safety/10 border border-safety/20">
                <Activity className="w-4 h-4 text-safety" />
                <div className="absolute inset-0 bg-safety rounded-full blur-[10px] opacity-20 animate-pulse"></div>
            </div>

            <div className="flex flex-col pr-2">
                <div className="flex items-center gap-2 mb-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
                    <span className="text-[10px] font-bold text-gray-300 tracking-widest uppercase font-mono">
                        Red Operativa
                    </span>
                </div>
                <div className="flex items-center gap-2 text-[10px] text-gray-500 font-medium font-mono">
                    <div className="flex items-center gap-1">
                        <Server className="w-3 h-3 text-gray-600" /> CL-SCL
                    </div>
                    <span className="w-0.5 h-2 bg-gray-800"></span>
                    <div className="flex items-center gap-1">
                        <Zap className="w-3 h-3 text-safety/70" /> {ping}ms
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
