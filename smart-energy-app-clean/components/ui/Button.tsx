import { ButtonHTMLAttributes, ReactNode } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    children: ReactNode;
}

export function Button({
    className,
    variant = 'primary',
    size = 'md',
    children,
    ...props
}: ButtonProps) {
    return (
        <button
            className={cn(
                'inline-flex items-center justify-center rounded-[var(--radius-btn)] font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
                {
                    'bg-primary text-white hover:bg-primary-hover shadow-md shadow-primary/20': variant === 'primary',
                    'bg-white text-primary border border-primary hover:bg-eco-mint': variant === 'secondary',
                    'bg-transparent border border-gray-300 text-text-main hover:bg-gray-50': variant === 'outline',
                    'bg-transparent text-text-muted hover:text-primary hover:bg-eco-mint/50': variant === 'ghost',

                    'px-3 py-1.5 text-sm': size === 'sm',
                    'px-6 py-3 text-base': size === 'md',
                    'px-8 py-4 text-lg': size === 'lg',
                },
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}
