
import Section from './ui/Section';
import { motion } from 'framer-motion';
import aboutImage from '../assets/about-us.jpg';

const About = () => {
    return (
        <Section id="about" className="bg-slate-900 border-t border-slate-800">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <img
                        src={aboutImage}
                        alt="GK Chess Academy Classroom"
                        className="rounded-2xl shadow-2xl border border-slate-700 w-full h-auto"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl font-bold text-white mb-6">About GK Chess Academy</h2>
                    <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
                        <p>
                            GK Chess Academy is dedicated to developing strong chess players through structured training, strategic thinking, and a passion for the game. Our academy focuses on building a solid foundation in chess fundamentals while gradually guiding students toward advanced concepts and competitive play.
                        </p>
                        <p>
                            We offer systematic coaching for beginners, intermediate, and advanced players, with personalized attention to help every student grow at their own pace. Our training methodology emphasizes tactical awareness, positional understanding, endgame mastery, and tournament preparation.
                        </p>
                        <p>
                            At GK Chess Academy, chess is more than just a game—it is a tool for enhancing concentration, patience, decision-making, and problem-solving skills. We strive to create a positive and motivating learning environment where students gain confidence both on and off the board.
                        </p>
                        <p className="text-chess-accent font-semibold pt-2">
                            Our mission is to nurture talent, inspire excellence, and promote a lifelong love for chess.
                        </p>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
};

export default About;
