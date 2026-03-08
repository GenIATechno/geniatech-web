import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

export const XRaySlider = () => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
        const percent = (x / rect.width) * 100;
        setSliderPosition(percent);
    };

    return (
        <div className="w-full max-w-4xl mx-auto my-12 relative rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-gray-800 bg-[#050505] h-[400px] cursor-ew-resize"
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setSliderPosition(50)}
        >
            {/* BAJO: Desorden (Antes) */}
            <div className="absolute inset-0 w-full h-full custom-pattern-bg grayscale flex items-center justify-center p-8 opacity-60">
                <div className="text-gray-500 font-serif opacity-30 blur-[2px] rotate-[-5deg] text-xl max-w-lg select-none">
                    Carpeta 12... Factura_Final_corregida_4.xlsx... Error línea 402... Revisar reporte a mano... Descuadre en inventario... Faltan 5 aprobaciones físicas...
                </div>
            </div>
            <div className="absolute bottom-6 right-6 font-bold uppercase tracking-widest text-gray-500 bg-[#111] px-4 py-2 rounded-full border border-gray-800 text-xs">
                Operación Tradicional
            </div>

            {/* ARRIBA: Orden GenIA (Después) Clip Path */}
            <div
                className="absolute inset-0 w-full h-full bg-[#0A0A0A] tech-pattern-bg flex items-center justify-center"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-safety/10 via-transparent to-transparent opacity-80 decoration-slice"></div>
                <div className="bg-[#111111] border border-safety/30 rounded-2xl p-6 shadow-[0_0_30px_rgba(255,87,34,0.1)] w-[80%] h-[70%] flex flex-col justify-between">
                    <div className="flex justify-between items-center border-b border-gray-800 pb-4">
                        <span className="text-safety font-bold text-lg tracking-tight">GenIA Dashboard</span>
                        <div className="flex gap-2"><div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]"></div><span className="text-gray-400 text-xs font-semibold">Todo Sincronizado</span></div>
                    </div>
                    <div className="space-y-4 pt-4">
                        <div className="h-4 w-full bg-gray-800 rounded-full overflow-hidden relative">
                            <div className="absolute inset-y-0 left-0 bg-safety w-[98%]"></div>
                        </div>
                        <div className="h-4 w-3/4 bg-gray-800 rounded-full overflow-hidden relative">
                            <div className="absolute inset-y-0 left-0 bg-orange-400 w-[100%]"></div>
                        </div>
                        <div className="text-gray-300 text-sm font-mono mt-4">✓ Conciliación 10.000 filas: 0.1s. Sin errores.</div>
                    </div>
                </div>
                <div className="absolute bottom-6 left-6 font-bold uppercase tracking-widest text-safety bg-safety/10 px-4 py-2 rounded-full border border-safety/30 text-xs backdrop-blur-md">
                    Operación GenIA
                </div>
            </div>

            {/* Línea Divisoria */}
            <div
                className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize flex items-center justify-center pointer-events-none shadow-[0_0_20px_#fff]"
                style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
            >
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black text-xs font-bold shadow-lg">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                </div>
            </div>

            <style>{`
        .custom-pattern-bg {
           background-image: radial-gradient(#333 1px, transparent 1px);
           background-size: 20px 20px;
        }
        .tech-pattern-bg {
           background-image: linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px),
           linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px);
           background-size: 30px 30px;
        }
      `}</style>
        </div>
    );
};
