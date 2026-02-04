
import { motion } from 'framer-motion';
import Button from './ui/Button';
import heroImage from '../assets/hero-chess.png';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={heroImage}
                    alt="Chess Board"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-chess-dark/80 via-chess-dark/60 to-chess-dark"></div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 z-10 relative text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight">
                        Master the <span className="text-chess-accent">Game of Kings</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-200 mb-8 max-w-2xl mx-auto font-light">
                        Join GK Chess Academy and elevate your strategic thinking with world-class coaching.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="shadow-lg shadow-chess-accent/20" onClick={() => document.dispatchEvent(new CustomEvent('openRegistration'))}>
                            Start Free Trial
                        </Button>

                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
