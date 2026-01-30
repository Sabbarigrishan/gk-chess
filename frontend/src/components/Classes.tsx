
import Section from './ui/Section';
import Card from './ui/Card';
import Button from './ui/Button';
import { motion } from 'framer-motion';
import { Crown, Shield, Swords } from 'lucide-react';

const classes = [
    {
        title: "Pawn Level (Beginner)",
        icon: <Shield className="w-10 h-10 text-chess-accent" />,
        description: "Perfect for absolute beginners. Learn piece movements, basic rules, and fundamental checkmates.",
        price: "$49/month",
        features: ["Basic Rules & Movement", "Simple Checkmates", "Board Vision", "Weekly Online Game"]
    },
    {
        title: "Knight Level (Intermediate)",
        icon: <Swords className="w-10 h-10 text-chess-accent" />,
        description: "For players who know the basics. Focus on tactics, opening principles, and middle-game strategy.",
        price: "$79/month",
        features: ["Tactical Combinations", "Opening Repertoire", "Positional Understanding", "Tournament Preparation"]
    },
    {
        title: "King Level (Advanced)",
        icon: <Crown className="w-10 h-10 text-chess-accent" />,
        description: "Elite training for serious competitors. Advanced endgame theory, grandmaster analysis, and psychological preparation.",
        price: "$119/month",
        features: ["Advanced Endgames", "Calculation Training", "Grandmaster Analysis", "Personal Mentoring"]
    }
];

const Classes = () => {
    return (
        <Section id="classes" className="bg-chess-dark">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">Our Classes</h2>
                <p className="text-slate-400 max-w-2xl mx-auto">
                    Structured learning paths designed for every skill level.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {classes.map((cls, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Card className="h-full flex flex-col hover:border-chess-accent transition-colors duration-300">
                            <div className="mb-6 flex justify-center">
                                <div className="p-4 bg-chess-accent/10 rounded-full">
                                    {cls.icon}
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-white text-center mb-2">{cls.title}</h3>
                            <p className="text-chess-accent text-center font-bold text-xl mb-4">{cls.price}</p>
                            <p className="text-slate-400 text-center mb-8 text-sm">
                                {cls.description}
                            </p>

                            <ul className="space-y-3 mb-8 flex-grow">
                                {cls.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-2 text-slate-300 text-sm">
                                        <div className="w-1.5 h-1.5 rounded-full bg-chess-accent"></div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Button
                                variant={index === 1 ? 'primary' : 'outline'}
                                className="w-full"
                                onClick={() => document.dispatchEvent(new CustomEvent('openRegistration'))}
                            >
                                Join Class
                            </Button>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default Classes;
