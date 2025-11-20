'use client';

import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { User, Home, Settings, LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function ProfilePage() {
    const router = useRouter();

    const handleSignOut = () => {
        router.push('/login');
    };

    return (
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
            <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                    <User className="w-8 h-8" />
                </div>
                <div>
                    <h1 className="text-2xl font-bold text-text-main">Alex Johnson</h1>
                    <p className="text-text-muted">alex.johnson@example.com</p>
                </div>
            </div>

            <div className="space-y-6">
                <Card>
                    <div className="flex items-center gap-2 mb-6">
                        <Home className="w-5 h-5 text-primary" />
                        <h2 className="text-xl font-bold text-text-main">Home Details</h2>
                    </div>

                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-text-main mb-1">Home Type</label>
                                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary">
                                    <option>Apartment</option>
                                    <option>House</option>
                                    <option>Studio</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-text-main mb-1">Number of Occupants</label>
                                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4+</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-text-main mb-1">Energy Provider</label>
                            <input
                                type="text"
                                defaultValue="Green Energy Co."
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                            />
                        </div>

                        <div className="pt-4">
                            <Button>Save Changes</Button>
                        </div>
                    </form>
                </Card>

                <Card>
                    <div className="flex items-center gap-2 mb-6">
                        <Settings className="w-5 h-5 text-text-muted" />
                        <h2 className="text-xl font-bold text-text-main">Account Settings</h2>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                            <div>
                                <p className="font-medium text-text-main">Email Notifications</p>
                                <p className="text-sm text-text-muted">Receive weekly energy reports</p>
                            </div>
                            <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
                                <input type="checkbox" name="toggle" id="toggle" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" />
                                <label htmlFor="toggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-primary cursor-pointer"></label>
                            </div>
                        </div>

                        <div className="pt-4 border-t border-gray-100">
                            <Button
                                variant="ghost"
                                className="text-red-600 hover:text-red-700 hover:bg-red-50 w-full justify-start"
                                onClick={handleSignOut}
                            >
                                <LogOut className="w-4 h-4 mr-2" />
                                Sign Out
                            </Button>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
}
