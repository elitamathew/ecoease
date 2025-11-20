import { HTMLAttributes, ReactNode } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    noPadding?: boolean;
}

export function Card({ className, children, noPadding = false, ...props }: CardProps) {
    return (
        <div
            className={cn(
                'bg-white rounded-[var(--radius-card)] shadow-sm border border-gray-100 overflow-hidden',
                !noPadding && 'p-6',
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
