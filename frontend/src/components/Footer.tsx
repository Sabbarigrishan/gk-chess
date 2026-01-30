import { Instagram, Mail, Phone, Youtube } from 'lucide-react';
import logo from '../assets/logo-v2.png';

const Footer = () => {
    return (
        <footer id="contact" className="bg-slate-950 border-t border-slate-900 py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-3 mb-6">
                            <img src={logo} alt="GK Chess Academy Logo" className="w-12 h-12 rounded-full object-cover" />
                            <span className="text-xl font-bold text-white">GK Chess Academy</span>
                        </div>
                        <p className="text-slate-400 max-w-sm mb-6">
                            Empowering the next generation of chess masters through world-class coaching and community.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://www.instagram.com/gkchessacademy?igsh=MThpc3lvNTU4NjAwZw==" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-chess-accent transition-colors"><Instagram className="w-5 h-5" /></a>
                            <a href="https://www.youtube.com/channel/UClr1u4kyJRxSiUp8avnmgoQ" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-chess-accent transition-colors"><Youtube className="w-5 h-5" /></a>
                            <a href="https://share.google/ba3vsggVy6MqFdJs3" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-chess-accent transition-colors">
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 0.507 5.387 0 12s5.36 12 12 12c3.627 0 6.373-1.2 8.52-3.253 2.187-2.187 2.973-5.493 2.973-8.28 0-.813-.093-1.6-.24-2.387h-11.773z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-slate-400 hover:text-chess-accent transition-colors">Home</a></li>
                            <li><a href="#about" className="text-slate-400 hover:text-chess-accent transition-colors">About Us</a></li>
                            <li><a href="#classes" className="text-slate-400 hover:text-chess-accent transition-colors">Our Classes</a></li>
                            <li><a href="#testimonials" className="text-slate-400 hover:text-chess-accent transition-colors">Reviews</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-6">Contact</h4>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-slate-400">
                                <Mail size={18} className="text-chess-accent" />
                                <span>Email: chessacademygk@gmail.com</span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-400">
                                <Phone size={18} className="text-chess-accent" />
                                <span>Mobile: +91 8778098865</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} GK Chess Academy. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
