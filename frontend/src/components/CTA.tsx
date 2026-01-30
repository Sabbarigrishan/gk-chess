
import { motion } from 'framer-motion';
import Button from './ui/Button';

const CTA = () => {

    return (
        <section className="py-24 relative overflow-hidden">
            {/* Abstract Background */}
            <div className="absolute inset-0 bg-chess-accent/5"></div>
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-chess-accent/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Ready to Make Your Move?
                    </h2>
                    <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                        Join thousands of students and start your journey to mastery today.
                        Limited spots available for the upcoming semester.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button size="lg" className="text-lg px-10 shadow-xl shadow-chess-accent/20" onClick={() => document.dispatchEvent(new CustomEvent('openRegistration'))}>
                            Join Now - Save Your Spot
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTA;
