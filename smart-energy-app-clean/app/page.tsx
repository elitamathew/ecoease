'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Zap, ArrowRight } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-eco-bg px-4">
      <div className="text-center space-y-6 max-w-2xl">
        <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto shadow-lg shadow-primary/30">
          <Zap className="w-10 h-10 text-white" fill="currentColor" />
        </div>

        <h1 className="text-5xl font-bold text-text-main tracking-tight">
          EcoEase
        </h1>

        <p className="text-xl text-text-muted">
          Your personal energy assistant. Track usage, save money, and reduce your carbon footprint with AI-driven insights.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link href="/login" className="w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto min-w-[160px]">
              Sign In
            </Button>
          </Link>
          <Link href="/signup" className="w-full sm:w-auto">
            <Button variant="secondary" size="lg" className="w-full sm:w-auto min-w-[160px]">
              Create Account
            </Button>
          </Link>
        </div>

        <div className="pt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="font-bold text-text-main text-lg">Track</h3>
            <p className="text-sm text-text-muted">Monitor appliance usage</p>
          </div>
          <div>
            <h3 className="font-bold text-text-main text-lg">Analyze</h3>
            <p className="text-sm text-text-muted">AI-powered insights</p>
          </div>
          <div>
            <h3 className="font-bold text-text-main text-lg">Save</h3>
            <p className="text-sm text-text-muted">Reduce your monthly bill</p>
          </div>
        </div>
      </div>
    </div>
  );
}
