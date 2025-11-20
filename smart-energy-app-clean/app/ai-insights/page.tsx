'use client';

import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Lightbulb, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

const insights = [
    {
        id: 1,
        title: 'Switch Heater to Eco Mode',
        description: 'Your heater is running at 24°C. Lowering it to 21°C is comfortable and saves significant energy.',
        impact: 'High Impact',
        savings: '£15.00/mo',
        difficulty: 'Easy Win',
        type: 'heating'
    },
    {
        id: 2,
        title: 'Unplug Standby Devices',
        description: 'Your TV and Game Console consume power even when off. Use a smart strip to cut power completely.',
        impact: 'Medium Impact',
        savings: '£4.50/mo',
        difficulty: 'Easy Win',
        type: 'general'
    },
    {
        id: 3,
        title: 'Shift Laundry Time',
        description: 'Running your washing machine between 10pm - 6am can reduce costs by 30% on your current tariff.',
        impact: 'Medium Impact',
        savings: '£3.20/mo',
        difficulty: 'Requires Habit Change',
        type: 'laundry'
    }
];

export default function AIInsightsPage() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-text-main">AI Energy Insights</h1>
                    <p className="text-text-muted mt-1">Personalized recommendations to lower your bill.</p>
                </div>
                <div className="flex items-center gap-2 bg-eco-mint px-4 py-2 rounded-lg text-primary font-medium">
                    <TrendingUp className="w-5 h-5" />
                    <span>Potential Savings: £22.70/mo</span>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                    {insights.map((insight) => (
                        <Card key={insight.id} className="border-l-4 border-l-primary">
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex gap-4">
                                    <div className="mt-1">
                                        <div className="w-10 h-10 rounded-full bg-eco-mint flex items-center justify-center text-primary">
                                            <Lightbulb className="w-5 h-5" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <h3 className="text-lg font-bold text-text-main">{insight.title}</h3>
                                            {insight.difficulty === 'Easy Win' && (
                                                <span className="px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-xs font-bold">
                                                    EASY WIN
                                                </span>
                                            )}
                                            {insight.impact === 'High Impact' && (
                                                <span className="px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 text-xs font-bold">
                                                    HIGH IMPACT
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-text-muted mb-4">{insight.description}</p>
                                        <div className="flex items-center gap-6 text-sm">
                                            <div className="flex items-center gap-2 text-primary font-semibold">
                                                <DollarSignIcon className="w-4 h-4" />
                                                Save {insight.savings}
                                            </div>
                                            <Button variant="ghost" size="sm" className="text-primary hover:text-primary-hover p-0 h-auto">
                                                View Details <ArrowRight className="w-4 h-4 ml-1" />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

                <div className="space-y-6">
                    <Card className="bg-primary text-white">
                        <h3 className="text-lg font-bold mb-2">How it works</h3>
                        <p className="text-white/90 text-sm mb-4">
                            Our AI analyzes your appliance usage patterns and compares them with efficient homes to find savings.
                        </p>
                        <div className="space-y-3">
                            <div className="flex items-center gap-2 text-sm">
                                <CheckCircle className="w-4 h-4 text-white" />
                                <span>Analyzes daily usage</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                                <CheckCircle className="w-4 h-4 text-white" />
                                <span>Identifies waste</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                                <CheckCircle className="w-4 h-4 text-white" />
                                <span>Suggests smart changes</span>
                            </div>
                        </div>
                    </Card>

                    <Card>
                        <h3 className="text-lg font-bold text-text-main mb-4">Your Progress</h3>
                        <div className="space-y-4">
                            <div>
                                <div className="flex justify-between text-sm mb-1">
                                    <span className="text-text-muted">Tips Adopted</span>
                                    <span className="font-semibold text-text-main">3/12</span>
                                </div>
                                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                                    <div className="bg-secondary h-full rounded-full" style={{ width: '25%' }}></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-sm mb-1">
                                    <span className="text-text-muted">Energy Saved</span>
                                    <span className="font-semibold text-text-main">12 kWh</span>
                                </div>
                                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                                    <div className="bg-accent-purple h-full rounded-full" style={{ width: '40%' }}></div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}

function DollarSignIcon({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <line x1="12" x2="12" y1="1" y2="23" />
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
    )
}
