'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Zap } from 'lucide-react';

export default function SignupPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Mock signup delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        router.push('/dashboard');
    };

    return (
        <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-eco-bg">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <div className="flex justify-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                        <Zap className="w-7 h-7 text-white" fill="currentColor" />
                    </div>
                </div>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-text-main">
                    Create your account
                </h2>
                <p className="mt-2 text-center text-sm text-text-muted">
                    Already have an account?{' '}
                    <Link href="/login" className="font-medium text-primary hover:text-primary-hover">
                        Sign in
                    </Link>
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <Card className="py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-text-main">
                                Email address
                            </label>
                            <div className="mt-1">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-text-main">
                                Password
                            </label>
                            <div className="mt-1">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="new-password"
                                    required
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="homeSize" className="block text-sm font-medium text-text-main">
                                Home Size (Optional)
                            </label>
                            <div className="mt-1">
                                <select
                                    id="homeSize"
                                    name="homeSize"
                                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                                >
                                    <option>Studio / 1 Bedroom</option>
                                    <option>2 Bedrooms</option>
                                    <option>3 Bedrooms</option>
                                    <option>4+ Bedrooms</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <Button type="submit" className="w-full" disabled={isLoading}>
                                {isLoading ? 'Creating account...' : 'Create Account'}
                            </Button>
                        </div>
                    </form>
                </Card>
            </div>
        </div>
    );
}
