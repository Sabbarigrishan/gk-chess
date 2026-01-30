import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check } from 'lucide-react';
import Button from './ui/Button';
import Input from './ui/Input';

interface RegistrationModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const RegistrationModal = ({ isOpen, onClose }: RegistrationModalProps) => {
    const [formData, setFormData] = useState({
        studentName: '',
        parentName: '',
        email: '',
        phone: '',
        level: 'Beginner'
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await fetch('http://localhost:3000/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Something went wrong');
            }

            setSuccess(true);
            setTimeout(() => {
                onClose();
                setSuccess(false);
                setFormData({
                    studentName: '',
                    parentName: '',
                    email: '',
                    phone: '',
                    level: 'Beginner'
                })
            }, 3000);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 overflow-y-auto"
                        onClick={onClose}
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
                    >
                        <div
                            className="bg-chess-dark border border-slate-700 w-full max-w-md rounded-2xl shadow-xl overflow-hidden pointer-events-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="p-6 border-b border-slate-700 flex justify-between items-center">
                                <h3 className="text-xl font-bold text-white">Join GK Chess Academy</h3>
                                <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors">
                                    <X size={24} />
                                </button>
                            </div>

                            <div className="p-6">
                                {success ? (
                                    <div className="text-center py-8">
                                        <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <Check className="w-8 h-8 text-green-500" />
                                        </div>
                                        <h4 className="text-xl font-bold text-white mb-2">Registration Successful!</h4>
                                        <p className="text-slate-400">We'll be in touch shortly to schedule your trial class.</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <Input
                                            label="Student Name"
                                            name="studentName"
                                            value={formData.studentName}
                                            onChange={handleChange}
                                            required
                                        />
                                        <Input
                                            label="Parent Name (Optional)"
                                            name="parentName"
                                            value={formData.parentName}
                                            onChange={handleChange}
                                        />
                                        <Input
                                            label="Email Address"
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                        <Input
                                            label="Phone Number"
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                        />

                                        <div className="mb-6">
                                            <label className="block text-sm font-medium text-slate-300 mb-1">
                                                Current Chess Level
                                            </label>
                                            <select
                                                name="level"
                                                value={formData.level}
                                                onChange={handleChange}
                                                className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-chess-accent focus:border-transparent"
                                            >
                                                <option value="Beginner">Beginner (New to Chess)</option>
                                                <option value="Intermediate">Intermediate (Knows Basics)</option>
                                                <option value="Advanced">Advanced (Tournament Player)</option>
                                            </select>
                                        </div>

                                        {error && <p className="text-red-500 text-sm">{error}</p>}

                                        <Button type="submit" disabled={loading} className="w-full">
                                            {loading ? 'Submitting...' : 'Register for Free Trial'}
                                        </Button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default RegistrationModal;
