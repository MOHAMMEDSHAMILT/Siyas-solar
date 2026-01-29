import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-black border-t border-white/10 py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-2">
                        <span className="text-2xl font-bold text-white tracking-wider mb-4 block">
                            SIYAS <span className="text-solar-gold">TECHNO HUB</span>
                        </span>
                        <p className="text-gray-400 max-w-sm">
                            Empowering homes and businesses with sustainable solar energy solutions. Join the green revolution today.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><Link href="#" className="hover:text-solar-gold transition-colors">Home</Link></li>
                            <li><Link href="#products" className="hover:text-solar-gold transition-colors">Products</Link></li>
                            <li><Link href="#about" className="hover:text-solar-gold transition-colors">About Us</Link></li>
                            <li><Link href="#contact" className="hover:text-solar-gold transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Connect</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="https://wa.me/917592839939" className="hover:text-solar-gold transition-colors">Whatapp</a></li>
                            <li><a href="https://www.instagram.com/siyas_tecno_hub?igsh=OW9nOHV2d2szdW8=" className="hover:text-solar-gold transition-colors">Instagram</a></li>
                            <li><a href="#" className="hover:text-solar-gold transition-colors">Facebook</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} SIYAS TECHNO HUB SOLAR. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
