import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const ScrollyTellingNode = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const visualsRef = useRef<HTMLDivElement>(null);
    const textBlocksRef = useRef<(HTMLDivElement | null)[]>([]);
    
    useEffect(() => {
        const section = sectionRef.current;
        const visuals = visualsRef.current;
        if (!section || !visuals) return;

        // 1. Cambio de contraste inmersivo en todo el root
        const bgTrigger = ScrollTrigger.create({
            trigger: section,
            start: "top 50%",
            end: "bottom 50%",
            onEnter: () => document.getElementById("agrotech-root")?.classList.add("dark-mode-scrolly"),
            onLeave: () => document.getElementById("agrotech-root")?.classList.remove("dark-mode-scrolly"),
            onEnterBack: () => document.getElementById("agrotech-root")?.classList.add("dark-mode-scrolly"),
            onLeaveBack: () => document.getElementById("agrotech-root")?.classList.remove("dark-mode-scrolly"),
        });

        // 2. Timeline Crossfade (Atado al scroll de toda la sección, SIN pin, usando sticky en CSS)
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "top top",
                end: "bottom bottom",
                scrub: 1.5,
            }
        });

        // Fase 1: completo -> despiece
        tl.to("#img-completo", { opacity: 0, duration: 1 }, "phase1")
          .to("#img-despiece", { opacity: 1, duration: 1 }, "phase1");

        // Fase 2: despiece -> terreno
        tl.to("#img-despiece", { opacity: 0, duration: 1 }, "phase2")
          .to("#img-terreno", { opacity: 1, duration: 1 }, "phase2");

        // 3. Iluminar textos en scroll (Opacidad 0.2 a 1.0)
        const textTriggers = textBlocksRef.current.map((block) => {
            if (!block) return null;
            return ScrollTrigger.create({
                trigger: block,
                start: "top 60%",
                end: "bottom 40%",
                toggleClass: { targets: block, className: "opacity-100" },
                onEnter: () => gsap.to(block, { opacity: 1, duration: 0.5 }),
                onLeave: () => gsap.to(block, { opacity: 0.2, duration: 0.5 }),
                onEnterBack: () => gsap.to(block, { opacity: 1, duration: 0.5 }),
                onLeaveBack: () => gsap.to(block, { opacity: 0.2, duration: 0.5 }),
            });
        });

        // Cleanup
        return () => {
            bgTrigger.kill();
            tl.scrollTrigger?.kill();
            tl.kill();
            textTriggers.forEach(t => t?.kill());
            document.getElementById("agrotech-root")?.classList.remove("dark-mode-scrolly");
        };
    }, []);

    return (
        <section ref={sectionRef} className="scroll-cinematic-section relative w-full bg-black text-white">
            
            {/* Visuales (Sticky Full Screen) */}
            <div ref={visualsRef} className="hardware-visual-column sticky top-0 left-0 w-full h-screen overflow-hidden flex items-center justify-center">
                <img src="/nodo-completo.png" id="img-completo" className="absolute w-full h-full object-contain opacity-100 will-change-opacity" alt="Nodo Completo" />
                <img src="/nodo-despiece.png" id="img-despiece" className="absolute w-full h-full object-contain opacity-0 will-change-opacity" alt="Nodo Despiece" />
                <img src="/nodo-terreno.png" id="img-terreno" className="absolute w-full h-full object-contain opacity-0 will-change-opacity" alt="Nodo Terreno" />
                
                {/* Degradado para asegurar que el texto sea legible siempre */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent pointer-events-none"></div>
            </div>
            
            {/* Contenedor de Textos (Scrollean por encima de lo sticky) */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 -mt-[100vh] pointer-events-none">
                
                <div ref={el => textBlocksRef.current[0] = el} className="text-block h-screen flex flex-col justify-center w-full md:w-1/2 opacity-20 transition-all duration-500">
                    <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-white drop-shadow-xl">Diseño Industrial <span className="text-emerald-500 block">Impenetrable.</span></h2>
                    <p className="text-xl md:text-2xl leading-relaxed text-gray-300 drop-shadow-md font-medium">El equipo cerrado e imponente. Construido en polímeros de grado militar para resistir radiación UV, agroquímicos y la intemperie más agresiva del campo, sin comprometer su estética premium.</p>
                </div>
                
                <div ref={el => textBlocksRef.current[1] = el} className="text-block h-screen flex flex-col justify-center w-full md:w-1/2 opacity-20 transition-all duration-500">
                    <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-white drop-shadow-xl">Arquitectura <span className="text-emerald-500 block">Abierta.</span></h2>
                    <p className="text-xl md:text-2xl leading-relaxed text-gray-300 drop-shadow-md font-medium">La vista explotada revela el núcleo de nuestra innovación. Procesamiento Edge AI en la placa verde, batería de alta densidad y conectividad LoRaWAN nativa para transmisión de datos sin depender de redes celulares.</p>
                </div>
                
                <div ref={el => textBlocksRef.current[2] = el} className="text-block h-screen flex flex-col justify-center w-full md:w-1/2 opacity-20 transition-all duration-500">
                    <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-white drop-shadow-xl">Precisión en <span className="text-emerald-500 block">Terreno.</span></h2>
                    <p className="text-xl md:text-2xl leading-relaxed text-gray-300 drop-shadow-md font-medium">El sistema completamente acoplado al tronco de la vid. La pinza ultrasónica y la sonda FDR miden el pulso hídrico de la planta en tiempo real, integrando el hardware de manera orgánica al ecosistema.</p>
                </div>
                
                {/* Espacio extra al final para asegurar que la última imagen se vea completa antes de salir de la sección */}
                <div className="h-[50vh]"></div>
            </div>

        </section>
    );
};
