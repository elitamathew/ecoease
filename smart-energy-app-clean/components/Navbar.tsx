'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, Zap, LayoutDashboard, Lightbulb, User, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { clsx } from 'clsx';

const navItems = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Appliances', href: '/appliances', icon: Zap },
    { name: 'AI Insights', href: '/ai-insights', icon: Lightbulb },
    { name: 'Profile', href: '/profile', icon: User },
];

export function Navbar() {
    const pathname = usePathname();
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    // Don't show navbar on auth pages
    if (pathname === '/login' || pathname === '/signup' || pathname === '/') return null;

    const handleSignOut = () => {
        router.push('/login');
    };

    return (
        <nav className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/dashboard" className="flex-shrink-0 flex items-center gap-2">
                            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                                <Zap className="w-5 h-5 text-white" fill="currentColor" />
                            </div>
                            <span className="text-xl font-bold text-text-main tracking-tight">EcoEase</span>
                        </Link>

                        <div className="hidden sm:ml-10 sm:flex sm:space-x-8">
                            {navItems.map((item) => {
                                const isActive = pathname === item.href;
                                return (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={clsx(
                                            'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200',
                                            isActive
                                                ? 'border-primary text-primary'
                                                : 'border-transparent text-text-muted hover:text-text-main hover:border-gray-300'
                                        )}
                                    >
                                        {item.name}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    <div className="hidden sm:ml-6 sm:flex sm:items-center">
                        <Button variant="ghost" size="sm" className="gap-2" onClick={handleSignOut}>
                            <LogOut className="w-4 h-4" />
                            Sign Out
                        </Button>
                    </div>

                    <div className="-mr-2 flex items-center sm:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-text-muted hover:text-text-main hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <X className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Menu className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="sm:hidden bg-white border-b border-gray-100">
                    <div className="pt-2 pb-3 space-y-1">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className={clsx(
                                        'block pl-3 pr-4 py-2 border-l-4 text-base font-medium',
                                        isActive
                                            ? 'bg-eco-mint border-primary text-primary'
                                            : 'border-transparent text-text-muted hover:bg-gray-50 hover:border-gray-300 hover:text-text-main'
                                    )}
                                >
                                    <div className="flex items-center gap-3">
                                        <item.icon className="w-5 h-5" />
                                        {item.name}
                                    </div>
                                </Link>
                            );
                        })}
                        <div className="pt-4 pb-3 border-t border-gray-200">
                            <button
                                className="w-full flex items-center gap-3 pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-text-muted hover:bg-gray-50 hover:text-text-main"
                                onClick={handleSignOut}
                            >
                                <LogOut className="w-5 h-5" />
                                Sign Out
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
