import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ label, error, className = '', ...props }, ref) => {
        return (
            <div className="mb-4">
                <label className="block text-sm font-medium text-slate-300 mb-1">
                    {label}
                </label>
                <input
                    ref={ref}
                    className={`w-full bg-slate-700/50 border ${error ? 'border-red-500' : 'border-slate-600'} rounded-lg px-4 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-chess-accent focus:border-transparent transition-all ${className}`}
                    {...props}
                />
                {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
            </div>
        );
    }
);

Input.displayName = "Input";

export default Input;
