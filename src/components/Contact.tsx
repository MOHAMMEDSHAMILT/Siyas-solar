'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, Loader2 } from 'lucide-react';

export default function Contact() {
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<null | 'success' | 'error'>(null);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);

        try {
            const res = await fetch('https://formsubmit.co/ajax/shamilt6009@gmail.com', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
            });

            if (res.ok) {
                setStatus('success');
                (e.target as HTMLFormElement).reset();
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        } finally {
            setLoading(false);
        }
    }

    return (
        <section id="contact" className="py-24 bg-black relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-solar-gold/5 blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Contact Info */}
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Get In Touch</h2>
                        <p className="text-gray-400 text-lg mb-12">
                            Ready to switch to solar? Contact us today for a free consultation and quote.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-5">
                                <div className="p-3 rounded-lg bg-solar-gold/10 text-solar-gold">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-lg">Phone</h3>
                                    <a href="tel:7578345678" className="text-gray-400 hover:text-white transition-colors">
                                        +91 7592839939
                                    </a>
                                    <p className="text-sm text-gray-500 mt-1">Available Mon-Sat, 9am - 6pm</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-5">
                                <div className="p-3 rounded-lg bg-solar-gold/10 text-solar-gold">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-lg">Email</h3>
                                    <a href="mailto:shamilt6009@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                                        siyastechnohub@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-5">
                                <div className="p-3 rounded-lg bg-solar-gold/10 text-solar-gold">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-lg">SIYAS TECHNO HUB Headquarters</h3>
                                    <p className="text-gray-400">
                                        Owner: <span className="text-white font-semibold">Yoosaf Ali</span><br />
                                        Perumbilavu,SH39<br />
                                        Kerala, India
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                        <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-gray-400">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-solar-gold transition-colors"
                                        placeholder="Name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-medium text-gray-400">Phone</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-solar-gold transition-colors"
                                        placeholder="+91 9999999999"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-gray-400">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-solar-gold transition-colors"
                                    placeholder="siyas@example.com"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-gray-400">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={4}
                                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-solar-gold transition-colors resize-none"
                                    placeholder="Tell us about your solar requirements..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-4 bg-solar-gold text-black font-bold rounded-lg hover:bg-white transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <>Send Message <Send className="w-5 h-5" /></>}
                            </button>

                            {status === 'success' && (
                                <p className="text-green-400 text-center text-sm">Message sent successfully! We will get back to you soon.</p>
                            )}
                            {status === 'error' && (
                                <p className="text-red-400 text-center text-sm">Something went wrong. Please try again later.</p>
                            )}
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}
