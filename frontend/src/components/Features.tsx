
import { motion } from 'framer-motion';
import { Users, Trophy, Zap, BookOpen } from 'lucide-react';
import Section from './ui/Section';
import Card from './ui/Card';

const features = [
    {
        icon: <Users className="w-8 h-8 text-chess-accent" />,
        title: "Expert Grandmasters",
        description: "Learn directly from titled players who have mastered the game at the highest level."
    },
    {
        icon: <BookOpen className="w-8 h-8 text-chess-accent" />,
        title: "Structured Curriculum",
        description: "From openings to endgames, our comprehensive course takes you from beginner to pro."
    },
    {
        icon: <Trophy className="w-8 h-8 text-chess-accent" />,
        title: "Weekly Tournaments",
        description: "Compete with fellow students and win prizes in our regular online and offline events."
    },
    {
        icon: <Zap className="w-8 h-8 text-chess-accent" />,
        title: "Live Analysis",
        description: "Get real-time feedback on your games and understand your mistakes instantly."
    }
];

const Features = () => {
    return (
        <Section id="features" className="bg-chess-dark relative">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-chess-accent/50 to-transparent"></div>
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">Why Choose Us?</h2>
                <p className="text-slate-400 max-w-2xl mx-auto">
                    We provide everything you need to become a stronger player, faster.
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
                    >
                        <Card className="h-full text-center hover:bg-slate-800">
                            <div className="bg-chess-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default Features;
