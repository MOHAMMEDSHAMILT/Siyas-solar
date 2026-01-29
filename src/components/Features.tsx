'use client';

import { motion } from 'framer-motion';
import { Battery, Zap, ShieldCheck, Leaf } from 'lucide-react';

const features = [
    {
        icon: <Zap className="w-8 h-8 text-solar-gold" />,
        title: "High Efficiency",
        description: "Our panels deliver maximum energy output even in low-light conditions."
    },
    {
        icon: <Battery className="w-8 h-8 text-blue-400" />,
        title: "Smart Storage",
        description: "Advanced battery systems to store power for the night or outages."
    },
    {
        icon: <ShieldCheck className="w-8 h-8 text-green-400" />,
        title: "Reliable Warranty",
        description: "25-year performance warranty on all our premium solar installations."
    },
    {
        icon: <Leaf className="w-8 h-8 text-emerald-500" />,
        title: "Eco-Friendly",
        description: "Reduce your carbon footprint purely by switching to renewable solar energy."
    }
];

export default function Features() {
    return (
        <section className="py-24 bg-black relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Why Choose <span className="text-solar-gold">SIYAS TECHNO HUB</span>?</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        We combine cutting-edge technology with expert service to deliver the best solar experience.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-solar-gold/50 transition-colors group"
                        >
                            <div className="mb-4 p-3 bg-white/5 rounded-lg w-fit group-hover:bg-solar-gold/10 transition-colors">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
