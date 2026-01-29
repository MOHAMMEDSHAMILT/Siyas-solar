'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sun } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-black">
            {/* Background Image (Static Starfield/Space) */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/solar-bg-clean.png"
                    alt="Space Background"
                    fill
                    className="object-cover opacity-50"
                    priority
                />
            </div>



            {/* Content - Clean, No Shadows */}
            <div className="relative z-10 container mx-auto px-4 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8 backdrop-blur-md">
                    <Sun className="w-4 h-4 text-solar-gold" />
                    <span className="text-base text-white font-medium">Powered by SIYAS TECHNO HUB SOLAR</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
                    Power Your World with <br />
                    <span className="text-solar-gold">SOLAR ENERGY</span>
                </h1>

                <p className="text-xl text-gray-100 max-w-2xl mx-auto mb-10 drop-shadow-md">
                    We provide top-tier solar installations, maintenance, and smart energy monitoring aimed at reducing your carbon footprint and electricity bills.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link
                        href="#products"
                        className="px-8 py-4 bg-solar-gold text-black font-bold rounded-lg hover:bg-white transition-colors flex items-center gap-2"
                    >
                        Explore Products <ArrowRight className="w-5 h-5" />
                    </Link>
                    <Link
                        href="#contact"
                        className="px-8 py-4 bg-black/40 border border-white/20 text-white font-medium rounded-lg hover:bg-black/60 transition-colors backdrop-blur-sm"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </section>
    );
}
