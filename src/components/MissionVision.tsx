'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Target, Eye, Leaf, Zap } from 'lucide-react';

export default function MissionVision() {
    const [activeTab, setActiveTab] = useState<'mission' | 'vision'>('mission');

    return (
        <section className="py-24 bg-zinc-900 overflow-hidden">
            <div className="container mx-auto px-4">

                {/* Tabs Header */}
                <div className="flex border-b border-white/10 mb-12">
                    <button
                        onClick={() => setActiveTab('mission')}
                        className={`flex-1 py-4 text-center text-lg font-bold uppercase tracking-wider transition-colors relative ${activeTab === 'mission' ? 'text-solar-gold' : 'text-gray-500 hover:text-gray-300'
                            }`}
                    >
                        Our Mission
                        {activeTab === 'mission' && (
                            <motion.div
                                layoutId="activeTab"
                                className="absolute bottom-0 left-0 right-0 h-1 bg-solar-gold"
                            />
                        )}
                    </button>
                    <button
                        onClick={() => setActiveTab('vision')}
                        className={`flex-1 py-4 text-center text-lg font-bold uppercase tracking-wider transition-colors relative ${activeTab === 'vision' ? 'text-solar-gold' : 'text-gray-500 hover:text-gray-300'
                            }`}
                    >
                        Our Vision
                        {activeTab === 'vision' && (
                            <motion.div
                                layoutId="activeTab"
                                className="absolute bottom-0 left-0 right-0 h-1 bg-solar-gold"
                            />
                        )}
                    </button>
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-12">

                    {/* Content Section */}
                    <div className="w-full lg:w-1/2 min-h-[400px]">
                        <AnimatePresence mode="wait">
                            {activeTab === 'mission' ? (
                                <motion.div
                                    key="mission"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="flex items-center gap-3 mb-6">
                                        <Target className="w-8 h-8 text-solar-gold" />
                                        <h2 className="text-4xl font-bold text-white uppercase">Our Mission</h2>
                                    </div>
                                    <div className="h-1 w-24 bg-solar-gold mb-8" />

                                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                        We believe that renewable energy is the key to building a better future, and we are passionate about making it a reality for everyone.
                                    </p>

                                    <ul className="space-y-4">
                                        <li className="flex items-start gap-3">
                                            <Leaf className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                                            <span className="text-gray-400">To pioneer energy transformation by developing and deploying accessible, reliable, and scalable renewable energy solutions.</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <Zap className="w-6 h-6 text-solar-gold flex-shrink-0 mt-1" />
                                            <span className="text-gray-400">To innovate, harness, commercialise and accelerate the use of renewable energy across India, including the remotest corners.</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <Target className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                                            <span className="text-gray-400">To be the most trusted partner for all stakeholders, creating long-term value through responsible and sustainable practices.</span>
                                        </li>
                                    </ul>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="vision"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="flex items-center gap-3 mb-6">
                                        <Eye className="w-8 h-8 text-solar-gold" />
                                        <h2 className="text-4xl font-bold text-white uppercase">Our Vision</h2>
                                    </div>
                                    <div className="h-1 w-24 bg-solar-gold mb-8" />

                                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                        To empower every home and business with sustainable, clean energy, creating a greener planet for future generations.
                                    </p>

                                    <ul className="space-y-4">
                                        <li className="flex items-start gap-3">
                                            <Leaf className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                                            <span className="text-gray-400">Leading the global transition to zero-carbon energy through technological innovation.</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <Zap className="w-6 h-6 text-solar-gold flex-shrink-0 mt-1" />
                                            <span className="text-gray-400">Building a world where energy is abundant, clean, and accessible to all.</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <Eye className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                                            <span className="text-gray-400">Setting the standard for excellence in solar installation and service delivery.</span>
                                        </li>
                                    </ul>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Image Section */}
                    <div className="w-full lg:w-1/2 relative">
                        <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl shadow-solar-gold/10 border border-white/5">
                            <Image
                                src="/mission-vision.png"
                                alt="Mission and Vision"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
