import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './ui/Button';
import logo from '../assets/logo-v2.png';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'About', href: '#about' },
        { name: 'Classes', href: '#classes' },
        { name: 'Why Us', href: '#features' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-chess-dark/90 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-4 flex justify-between items-center">
                <a href="#" className="flex items-center gap-3 group">
                    <img src={logo} alt="GK Chess Academy Logo" className="w-10 h-10 object-contain group-hover:scale-105 transition-transform" />
                    <span className="text-xl font-bold font-sans tracking-tight text-white group-hover:text-chess-accent transition-colors">GK Chess Academy</span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-slate-300 hover:text-chess-accent transition-colors text-sm font-medium uppercase tracking-wider"
                        >
                            {link.name}
                        </a>
                    ))}
                    <Button size="sm" onClick={() => document.dispatchEvent(new CustomEvent('openRegistration'))}>Join Now</Button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-chess-dark border-t border-slate-800 p-4 flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-slate-300 hover:text-chess-accent block py-2"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <Button className="w-full" onClick={() => document.dispatchEvent(new CustomEvent('openRegistration'))}>Join Now</Button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
