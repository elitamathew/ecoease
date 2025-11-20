'use client';

import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { Zap, TrendingDown, ArrowRight, Leaf, DollarSign, Lightbulb } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const weeklyData = [
    { day: 'Mon', kwh: 12 },
    { day: 'Tue', kwh: 15 },
    { day: 'Wed', kwh: 18 },
    { day: 'Thu', kwh: 10 },
    { day: 'Fri', kwh: 14 },
    { day: 'Sat', kwh: 22 },
    { day: 'Sun', kwh: 19 },
];

const appliances = [
    { name: 'Heater', cost: '£12.50', usage: '15 hrs', trend: 'up' },
    { name: 'Fridge', cost: '£8.20', usage: '168 hrs', trend: 'stable' },
    { name: 'Laptop', cost: '£1.80', usage: '42 hrs', trend: 'down' },
];

export default function Dashboard() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-text-main">Energy Command Center</h1>
                    <p className="text-text-muted mt-1">Welcome back, Alex! Here's your energy snapshot.</p>
                </div>
                <Link href="/appliances">
                    <Button className="gap-2">
                        <Zap className="w-4 h-4" />
                        Add Appliance
                    </Button>
                </Link>
            </div>

            {/* Top Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* Eco Score */}
                <Card className="relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <Leaf className="w-24 h-24 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-text-muted mb-2">EcoEase Score</h3>
                    <div className="flex items-end gap-4">
                        <span className="text-5xl font-bold text-primary">78</span>
                        <span className="text-sm text-text-muted mb-2">/ 100</span>
                    </div>
                    <p className="text-sm text-text-muted mt-2">
                        Top 20% of energy savers! 🌿
                    </p>
                    <div className="w-full bg-gray-100 h-2 rounded-full mt-4 overflow-hidden">
                        <div className="bg-primary h-full rounded-full" style={{ width: '78%' }}></div>
                    </div>
                </Card>

                {/* Weekly Cost */}
                <Card className="relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <DollarSign className="w-24 h-24 text-secondary" />
                    </div>
                    <h3 className="text-lg font-semibold text-text-muted mb-2">Weekly Cost</h3>
                    <div className="flex items-end gap-4">
                        <span className="text-5xl font-bold text-text-main">£24.50</span>
                    </div>
                    <div className="flex items-center gap-2 mt-2 text-sm text-primary font-medium">
                        <TrendingDown className="w-4 h-4" />
                        <span>12% less than last week</span>
                    </div>
                </Card>

                {/* Active Appliances */}
                <Card className="relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <Zap className="w-24 h-24 text-accent-orange" />
                    </div>
                    <h3 className="text-lg font-semibold text-text-muted mb-2">Active Devices</h3>
                    <div className="flex items-end gap-4">
                        <span className="text-5xl font-bold text-text-main">8</span>
                    </div>
                    <p className="text-sm text-text-muted mt-2">
                        Heater is your top consumer today.
                    </p>
                </Card>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Chart Section (Span 2) */}
                <div className="lg:col-span-2 space-y-6">
                    <Card>
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-xl font-bold text-text-main">Weekly Usage (kWh)</h3>
                            <select className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                                <option>This Week</option>
                                <option>Last Week</option>
                            </select>
                        </div>
                        <div className="h-[300px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={weeklyData}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                                    <XAxis
                                        dataKey="day"
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fill: '#6B7280', fontSize: 12 }}
                                        dy={10}
                                    />
                                    <YAxis
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fill: '#6B7280', fontSize: 12 }}
                                    />
                                    <Tooltip
                                        cursor={{ fill: '#F3F4F6' }}
                                        contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                                    />
                                    <Bar dataKey="kwh" radius={[6, 6, 0, 0]}>
                                        {weeklyData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.kwh > 20 ? '#FFB366' : '#2ECC71'} />
                                        ))}
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </Card>

                    {/* Top Consumers List */}
                    <Card>
                        <h3 className="text-xl font-bold text-text-main mb-4">Top Energy Consumers</h3>
                        <div className="space-y-4">
                            {appliances.map((appliance) => (
                                <div key={appliance.name} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition-colors">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-eco-mint flex items-center justify-center text-primary">
                                            <Zap className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-text-main">{appliance.name}</p>
                                            <p className="text-sm text-text-muted">{appliance.usage}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-bold text-text-main">{appliance.cost}</p>
                                        <p className="text-xs text-text-muted">est. weekly</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-4 pt-4 border-t border-gray-100 text-center">
                            <Link href="/appliances">
                                <Button variant="ghost" className="text-primary hover:text-primary-hover">
                                    View All Appliances <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </Link>
                        </div>
                    </Card>
                </div>

                {/* Sidebar / AI Recommendations (Span 1) */}
                <div className="space-y-6">

                    {/* AI Insight Card */}
                    <Card className="bg-gradient-to-br from-primary to-eco-dark text-white border-none">
                        <div className="flex items-start justify-between mb-4">
                            <div className="p-2 bg-white/20 rounded-lg">
                                <Lightbulb className="w-6 h-6 text-white" />
                            </div>
                            <span className="bg-white/20 px-2 py-1 rounded text-xs font-medium">AI Insight</span>
                        </div>
                        <h3 className="text-lg font-bold mb-2">Reduce Heater Usage</h3>
                        <p className="text-white/90 text-sm mb-4">
                            Your heater accounts for 45% of your bill. Lowering it by 2°C could save you £15/month.
                        </p>
                        <Link href="/ai-insights">
                            <Button variant="secondary" size="sm" className="w-full border-none">
                                View Details
                            </Button>
                        </Link>
                    </Card>

                    {/* Quick Tips */}
                    <Card>
                        <h3 className="text-lg font-bold text-text-main mb-4">Quick Tips</h3>
                        <div className="space-y-4">
                            <div className="p-3 bg-eco-mint rounded-xl border border-primary/10">
                                <div className="flex gap-3">
                                    <div className="mt-1">
                                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-text-main">Unplug Laptop</p>
                                        <p className="text-xs text-text-muted mt-1">Fully charged! Unplug to save battery health and energy.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 bg-orange-50 rounded-xl border border-orange-100">
                                <div className="flex gap-3">
                                    <div className="mt-1">
                                        <div className="w-2 h-2 rounded-full bg-accent-orange"></div>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-text-main">Peak Hours Alert</p>
                                        <p className="text-xs text-text-muted mt-1">Electricity is expensive right now (5pm - 8pm).</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Link href="/ai-insights">
                            <Button variant="outline" className="w-full mt-4">
                                See All Tips
                            </Button>
                        </Link>
                    </Card>
                </div>
            </div>
        </div>
    );
}
