'use client';

import { Card } from '@/components/ui/Card';
import { Leaf, Shield, Users } from 'lucide-react';

export default function AboutPage() {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
            <div className="text-center max-w-2xl mx-auto">
                <h1 className="text-4xl font-bold text-text-main mb-4">Making Energy Efficiency Simple</h1>
                <p className="text-lg text-text-muted">
                    EcoEase helps students and renters understand their energy usage, save money, and reduce their carbon footprint through smart, AI-driven insights.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-eco-mint rounded-full flex items-center justify-center mx-auto text-primary">
                        <Leaf className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-text-main">Sustainability First</h3>
                    <p className="text-text-muted">We believe small changes in daily habits can lead to massive environmental impact.</p>
                </div>
                <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-eco-mint rounded-full flex items-center justify-center mx-auto text-primary">
                        <Users className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-text-main">Student Friendly</h3>
                    <p className="text-text-muted">Designed for renters and students who need simple, actionable advice without complex setups.</p>
                </div>
                <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-eco-mint rounded-full flex items-center justify-center mx-auto text-primary">
                        <Shield className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-text-main">Data Privacy</h3>
                    <p className="text-text-muted">Your energy data is yours. We use it only to give you insights, never to sell to third parties.</p>
                </div>
            </div>

            <Card className="bg-eco-dark text-white p-8 md:p-12 text-center">
                <h2 className="text-3xl font-bold mb-4">Ready to start saving?</h2>
                <p className="text-white/80 mb-8 max-w-xl mx-auto">
                    Join thousands of users who are lowering their bills and helping the planet, one switch at a time.
                </p>
                <a href="/signup" className="inline-block bg-primary hover:bg-primary-hover text-white font-bold py-3 px-8 rounded-lg transition-colors shadow-lg shadow-primary/20">
                    Get Started for Free
                </a>
            </Card>
        </div>
    );
}
