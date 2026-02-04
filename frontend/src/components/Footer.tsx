import { Mail, Phone } from 'lucide-react';
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

                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-slate-400 hover:text-chess-accent transition-colors">Home</a></li>
                            <li><a href="#about" className="text-slate-400 hover:text-chess-accent transition-colors">About Us</a></li>

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
