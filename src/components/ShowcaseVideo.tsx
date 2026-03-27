'use client';

import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { Play, Pause } from 'lucide-react';

export default function ShowcaseVideo() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(true);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <section className="py-16 md:py-24 bg-black relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-solar-gold/10 blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto space-y-8">
                    {/* Label/Header */}
                    <div className="text-center space-y-4">
                        <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-solar-gold/10 border border-solar-gold/20"
                        >
                            <div className="w-1.5 h-1.5 rounded-full bg-solar-gold animate-pulse" />
                            <span className="text-solar-gold text-xs font-bold uppercase tracking-widest">Innovation Gallery</span>
                        </motion.div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                            Real-World <span className="text-solar-gold">Installations</span>
                        </h2>
                    </div>

                    {/* Video Container with Premium styling */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        className="relative group lg:p-4 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-3xl shadow-2xl"
                    >
                        <div className="relative rounded-[1.5rem] md:rounded-[2rem] overflow-hidden aspect-video shadow-[0_0_80px_rgba(0,0,0,0.5)]">
                            {/* Glass Overlay on Hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 pointer-events-none opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
                            
                                <video 
                                    ref={videoRef}
                                    src="/videos/video1.mp4" 
                                    autoPlay 
                                    muted 
                                    loop 
                                    playsInline
                                    preload="auto"
                                    onClick={togglePlay}
                                    className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[2000ms] ease-out cursor-pointer"
                                />

                            {/* Play/Stop Toggle Control */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <button
                                    onClick={togglePlay}
                                    className="w-20 h-20 rounded-full bg-solar-gold/90 text-black flex items-center justify-center backdrop-blur-md shadow-[0_0_30px_rgba(255,183,0,0.5)] hover:scale-110 active:scale-95 transition-all"
                                >
                                    {isPlaying ? <Pause className="w-8 h-8 fill-current" /> : <Play className="w-8 h-8 fill-current translate-x-1" />}
                                </button>
                            </div>

                            {/* Floating "Model" Badge */}
                            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-20">
                                <div className="p-4 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-solar-gold flex items-center justify-center">
                                        <svg className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <p className="text-white font-bold text-sm">Solar Model Showcase</p>
                                            <span className="px-1.5 py-0.5 rounded-md bg-white/10 border border-white/20 text-[10px] font-black text-solar-gold tracking-tighter uppercase">Ultra HD</span>
                                        </div>
                                        <p className="text-white/60 text-xs">Premium Installation v1.0</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Corner accents */}
                        <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-solar-gold/30 rounded-tl-2xl pointer-events-none" />
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-solar-gold/30 rounded-br-2xl pointer-events-none" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
