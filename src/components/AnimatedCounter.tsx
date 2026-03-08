import { useEffect, useRef } from 'react';
import { useInView, animate } from 'framer-motion';

interface AnimatedCounterProps {
    from?: number;
    to: number;
    duration?: number;
    suffix?: string;
    className?: string;
}

export const AnimatedCounter = ({
    from = 0,
    to,
    duration = 2.5,
    suffix = '',
    className = '',
}: AnimatedCounterProps) => {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: '-50px' });

    useEffect(() => {
        if (inView && ref.current) {
            animate(from, to, {
                duration,
                ease: 'easeOut',
                onUpdate: (latest) => {
                    if (ref.current) {
                        ref.current.textContent = Math.round(latest) + suffix;
                    }
                },
            });
        }
    }, [inView, from, to, duration, suffix]);

    return <span ref={ref} className={className}>{from}{suffix}</span>;
};
