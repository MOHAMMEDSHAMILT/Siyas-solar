'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, ShoppingCart, Info } from 'lucide-react';
import Image from 'next/image';

const products = [
    {
        id: 1,
        name: "Solar Panel X-Pro",
        category: "Panels",
        price: "Details contact us",
        description: "High-efficiency monocrystalline panels (550W) with 22% efficiency rating. Perfect for residential and commercial rooftops.",
        image: "/panel.png",
        gradient: "from-blue-600/20 to-cyan-500/20"
    },
    {
        id: 2,
        name: "Hybrid Inverter 5kW",
        category: "Inverters",
        price: "Details contact us",
        description: "Smart hybrid inverter with seamless battery backup, Wi-Fi monitoring app, and 98% conversion efficiency.",
        image: "/inverter.png",
        gradient: "from-purple-600/20 to-indigo-500/20"
    },
    {
        id: 3,
        name: "Solar Water Heater",
        category: "Heating",
        price: "Details contact us",
        description: "200L stainless steel tank with high-absorption vacuum tubes. Provides hot water even on cloudy days.",
        image: "/heater.png",
        gradient: "from-orange-500/20 to-red-500/20"
    },
    {
        id: 4,
        name: "Solar Battery",
        category: "Storage",
        price: "Details contact us",
        description: "Heavy-duty tall tubular solar battery for reliable power backup. Long life cycle and high charge acceptance.",
        image: "/utl-battery.png",
        gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
        id: 5,
        name: "Smart CCTV Security",
        category: "Security",
        price: "Details contact us",
        description: "Advanced HD surveillance cameras with night vision, motion detection, and 24/7 mobile monitoring for your home or business.",
        image: "/cctv.png",
        gradient: "from-blue-500/20 to-slate-500/20"
    },
    {
        id: 6,
        name: "CCTV Fitting & Repair",
        category: "Security",
        price: "Service",
        description: "Professional installation and maintenance of HD surveillance systems. We provide fitting, wiring, and repair services.",
        image: "/cctv-install.png",
        gradient: "from-blue-500/20 to-slate-500/20"
    },
    {
        id: 7,
        name: "Home Automation",
        category: "Smarthome",
        price: "From $0.00",
        description: "Control your lighting, climate, and security from a single hub. Professional installation for seamless smart living.",
        image: "/automation.png",
        gradient: "from-cyan-500/20 to-blue-500/20"
    },
    {
        id: 8,
        name: "LED TV & Electronics Service",
        category: "Services",
        price: "Consultation",
        description: "Expert diagnostics and repair services for LED TVs, home appliances, inverters, and solar systems.",
        image: "/tv-repair.png",
        gradient: "from-yellow-500/20 to-orange-500/20"
    }
];

export default function Products() {
    return (
        <section id="products" className="py-24 bg-zinc-950 relative overflow-hidden">
            {/* Background Decor */}
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/siyas-shop.jpg"
                    alt="SIYAS Store"
                    fill
                    className="object-cover opacity-70"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                            Premium <span className="text-solar-gold">Products</span>
                        </h2>
                        <p className="text-gray-400 max-w-lg text-lg">
                            Explore our range of high-performance solar energy solutions designed for durability and efficiency.
                        </p>
                    </motion.div>

                    <motion.button
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="hidden md:flex items-center gap-2 text-solar-gold hover:text-white transition-colors group"
                    >
                        <span className="font-medium">View Full Catalog</span>
                        <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                    </motion.button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group relative bg-[#111] rounded-2xl overflow-hidden border border-white/10 hover:border-solar-gold/50 transition-all duration-500 shadow-lg hover:shadow-solar-gold/10"
                        >
                            {/* Product Image Area */}
                            <div className="relative h-64 w-full overflow-hidden">
                                <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} z-10 mix-blend-overlay opacity-50 group-hover:opacity-100 transition-opacity`} />
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Overlay Badge */}
                                <div className="absolute top-4 left-4 z-20">
                                    <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-white bg-black/60 backdrop-blur-md rounded-full border border-white/10">
                                        {product.category}
                                    </span>
                                </div>
                            </div>

                            {/* Content Area */}
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-lg font-bold text-white group-hover:text-solar-gold transition-colors line-clamp-1">
                                        {product.name}
                                    </h3>
                                </div>

                                <div className="flex items-baseline gap-1 mb-4">
                                    <p className="text-solar-gold font-bold text-xl">{product.price}</p>
                                </div>

                                <p className="text-sm text-gray-400 mb-6 line-clamp-3 h-[60px]">
                                    {product.description}
                                </p>

                                <div className="flex gap-2">
                                    <a
                                        href={`https://wa.me/917592839939?text=${encodeURIComponent(`Hello, I am interested in ordering the ${product.name}. Please provide more details.`)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 py-2.5 rounded-lg bg-white/5 hover:bg-solar-gold hover:text-black text-white text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                                    >
                                        Contact Now <ShoppingCart className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                                    </a>
                                    <button className="p-2.5 rounded-lg bg-white/5 hover:bg-white/20 text-gray-400 hover:text-white transition-colors">
                                        <Info className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <button className="mt-12 w-full md:hidden flex items-center justify-center gap-2 text-solar-gold hover:text-white transition-colors">
                    View All Products <ArrowUpRight className="w-5 h-5" />
                </button>
            </div>
        </section>
    );
}
