import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
    className?: string;
    children: React.ReactNode;
}

const Card = ({ className = '', children }: CardProps) => {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className={`bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-6 rounded-xl hover:border-chess-accent/50 transition-colors duration-300 ${className}`}
        >
            {children}
        </motion.div>
    );
};

export default Card;
