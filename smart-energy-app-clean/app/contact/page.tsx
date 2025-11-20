'use client';

import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Mail, MessageSquare, Phone } from 'lucide-react';

export default function ContactPage() {
    return (
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
            <div className="text-center">
                <h1 className="text-3xl font-bold text-text-main">Contact Support</h1>
                <p className="text-text-muted mt-2">Have questions? We're here to help you save energy.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card className="text-center p-6">
                    <div className="w-12 h-12 bg-eco-mint rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                        <Mail className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-text-main">Email Us</h3>
                    <p className="text-sm text-text-muted mt-1">support@ecoease.com</p>
                </Card>
                <Card className="text-center p-6">
                    <div className="w-12 h-12 bg-eco-mint rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                        <MessageSquare className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-text-main">Live Chat</h3>
                    <p className="text-sm text-text-muted mt-1">Available 9am - 5pm</p>
                </Card>
                <Card className="text-center p-6">
                    <div className="w-12 h-12 bg-eco-mint rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                        <Phone className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-text-main">Call Us</h3>
                    <p className="text-sm text-text-muted mt-1">+1 (555) 123-4567</p>
                </Card>
            </div>

            <Card>
                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-text-main mb-1">Name</label>
                            <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-text-main mb-1">Email</label>
                            <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-text-main mb-1">Subject</label>
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary">
                            <option>General Inquiry</option>
                            <option>Technical Support</option>
                            <option>Billing</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-text-main mb-1">Message</label>
                        <textarea rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"></textarea>
                    </div>
                    <Button className="w-full">Send Message</Button>
                </form>
            </Card>
        </div>
    );
}
