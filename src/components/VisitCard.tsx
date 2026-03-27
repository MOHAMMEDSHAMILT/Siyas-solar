'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function VisitCard() {
    return (
        <section className="py-12 bg-black relative">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <motion.div 
                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        viewport={{ once: true }}
                        className="relative group cursor-pointer"
                    >
                        {/* Outer Atmospheric Glow */}
                        <div className="absolute -inset-4 bg-solar-gold/10 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none" />
                        
                        {/* Premium Border and Container */}
                        <div className="relative bg-zinc-950/50 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                            <div className="relative aspect-[16/9]">
                                {/* Image with sophisticated hover zoom */}
                                <Image
                                    src="/visit.jpeg"
                                    alt="Visit Card"
                                    fill
                                    className="object-contain md:object-cover transition-transform duration-[1s] ease-out group-hover:scale-110"
                                />
                                
                                {/* Subtle overlay that disappears on hover */}
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
