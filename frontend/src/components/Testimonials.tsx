import React from 'react';
import Section from './ui/Section';
import Card from './ui/Card';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
        name: "Saravanan C",
        role: "Student (2200+ Rating)",
        content: "The coach is well-experienced & His coaching style is very impressive.... Personally, I’ve always struggled with endgames, but under his guidance, I became strong at endgames....His teaching has helped me go from a relatively below average player to achieving a 2200+ rating player. If you are looking for a coaching that can really elevate your game, I highly recommend GK Chess Academy."
    },
    {
        name: "Tamizharuvi",
        role: "Local Guide",
        content: "The coach at GK Chess Academy is well-experienced, which suggests a high level of expertise and knowledge. The coach's style is impressive, implying that they can communicate complex ideas in a clear and engaging manner. Im strongly suggesting that GK Chess Academy provides top-notch coaching that can lead to significant improvements in chess skills."
    },
    {
        name: "Saibalaji Gopikrishnan",
        role: "Parent",
        content: "GK Chess Academy is a place where we can admit our kids or ourselves without any second thoughts. The coaches here are highly educative and well experienced with decades of experience. They're providing classes for all the age groups and levels, which is quite significant. They're covering all the topics from movement of pieces... to high level middlegames, endgames and grandmasters game analysis. Since, my daughter is a student here, who started from zero and now is a competitive player, I highly recommend this academy."
    }
];

const Testimonials = () => {
    return (
        <Section id="testimonials" className="bg-slate-900">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">Success Stories</h2>
                <p className="text-slate-400 max-w-2xl mx-auto">
                    Hear from our students and parents about their journey with GK Chess Academy.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Card className="h-full flex flex-col relative bg-slate-800/50 border-slate-700">
                            <Quote className="w-10 h-10 text-chess-accent/20 absolute top-4 right-4" />
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                ))}
                            </div>
                            <p className="text-slate-300 italic mb-6 leading-relaxed flex-grow text-sm">
                                "{testimonial.content}"
                            </p>
                            <div className="mt-auto">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-chess-accent flex items-center justify-center text-chess-dark font-bold text-lg">
                                        {testimonial.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-sm">{testimonial.name}</h4>
                                        <span className="text-xs text-chess-accent">{testimonial.role}</span>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default Testimonials;
