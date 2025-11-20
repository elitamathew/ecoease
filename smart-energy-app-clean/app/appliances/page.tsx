'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Zap, Plus, Trash2, Edit2, Clock, Calendar, X } from 'lucide-react';

const initialAppliances = [
    { id: 1, name: 'Heater', type: 'Heating', usage: 5, frequency: 'Daily', cost: 12.50 },
    { id: 2, name: 'Fridge', type: 'Kitchen', usage: 24, frequency: 'Daily', cost: 8.20 },
    { id: 3, name: 'Laptop', type: 'Office', usage: 6, frequency: 'Daily', cost: 1.80 },
    { id: 4, name: 'Washing Machine', type: 'Laundry', usage: 2, frequency: 'Weekly', cost: 2.40 },
];

export default function AppliancesPage() {
    const [appliances, setAppliances] = useState(initialAppliances);
    const [isAdding, setIsAdding] = useState(false);
    const [newAppliance, setNewAppliance] = useState({
        name: '',
        type: 'General',
        usage: 0,
        frequency: 'Daily',
        cost: 0
    });

    const handleAdd = () => {
        if (!newAppliance.name) return;
        setAppliances([
            ...appliances,
            { ...newAppliance, id: Date.now() }
        ]);
        setIsAdding(false);
        setNewAppliance({ name: '', type: 'General', usage: 0, frequency: 'Daily', cost: 0 });
    };

    const handleDelete = (id: number) => {
        setAppliances(appliances.filter(a => a.id !== id));
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-text-main">Appliance Manager</h1>
                    <p className="text-text-muted mt-1">Track and manage your home devices.</p>
                </div>
                <Button className="gap-2" onClick={() => setIsAdding(true)}>
                    <Plus className="w-4 h-4" />
                    Add New Device
                </Button>
            </div>

            {isAdding && (
                <Card className="bg-eco-mint/30 border-primary/20">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="font-bold text-text-main">Add New Device</h3>
                        <button onClick={() => setIsAdding(false)} className="text-text-muted hover:text-text-main">
                            <X className="w-5 h-5" />
                        </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
                        <div className="md:col-span-2">
                            <label className="block text-xs font-medium text-text-muted mb-1">Name</label>
                            <input
                                type="text"
                                placeholder="e.g. TV"
                                className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
                                value={newAppliance.name}
                                onChange={e => setNewAppliance({ ...newAppliance, name: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-text-muted mb-1">Usage (hrs)</label>
                            <input
                                type="number"
                                className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
                                value={newAppliance.usage}
                                onChange={e => setNewAppliance({ ...newAppliance, usage: Number(e.target.value) })}
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-text-muted mb-1">Est. Cost (£)</label>
                            <input
                                type="number"
                                className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
                                value={newAppliance.cost}
                                onChange={e => setNewAppliance({ ...newAppliance, cost: Number(e.target.value) })}
                            />
                        </div>
                        <Button onClick={handleAdd}>Save Device</Button>
                    </div>
                </Card>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {appliances.map((appliance) => (
                    <Card key={appliance.id} className="relative group">
                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
                            <button className="p-2 text-gray-400 hover:text-primary bg-white rounded-full shadow-sm border border-gray-100">
                                <Edit2 className="w-4 h-4" />
                            </button>
                            <button
                                onClick={() => handleDelete(appliance.id)}
                                className="p-2 text-gray-400 hover:text-red-500 bg-white rounded-full shadow-sm border border-gray-100"
                            >
                                <Trash2 className="w-4 h-4" />
                            </button>
                        </div>

                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-full bg-eco-mint flex items-center justify-center text-primary">
                                <Zap className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-text-main">{appliance.name}</h3>
                                <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded-full text-text-muted">
                                    {appliance.type}
                                </span>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center justify-between text-sm">
                                <div className="flex items-center gap-2 text-text-muted">
                                    <Clock className="w-4 h-4" />
                                    <span>Usage</span>
                                </div>
                                <span className="font-semibold text-text-main">{appliance.usage} hrs</span>
                            </div>

                            <div className="flex items-center justify-between text-sm">
                                <div className="flex items-center gap-2 text-text-muted">
                                    <Calendar className="w-4 h-4" />
                                    <span>Frequency</span>
                                </div>
                                <span className="font-semibold text-text-main">{appliance.frequency}</span>
                            </div>

                            <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                                <span className="text-sm text-text-muted">Est. Cost</span>
                                <span className="text-lg font-bold text-primary">£{appliance.cost.toFixed(2)}/wk</span>
                            </div>
                        </div>
                    </Card>
                ))}

                {/* Add New Card Placeholder */}
                <button
                    onClick={() => setIsAdding(true)}
                    className="border-2 border-dashed border-gray-200 rounded-[var(--radius-card)] p-6 flex flex-col items-center justify-center text-gray-400 hover:border-primary hover:text-primary hover:bg-eco-mint/10 transition-all duration-200 h-full min-h-[250px]"
                >
                    <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center mb-4 group-hover:bg-white">
                        <Plus className="w-6 h-6" />
                    </div>
                    <span className="font-semibold">Add Another Device</span>
                </button>
            </div>
        </div>
    );
}
