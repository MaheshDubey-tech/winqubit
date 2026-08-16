'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Lock, User, ShieldCheck, Sparkles, ArrowRight, ArrowLeft } from 'lucide-react';
import { useData } from '@/context/DataContext';
import { GlassCard } from '@/components/ui/GlassCard';
import { GlassButton } from '@/components/ui/GlassButton';
import { Badge } from '@/components/ui/Badge';
import confetti from 'canvas-confetti';

export default function AdminLoginPage() {
  const router = useRouter();
  const { loginAdmin } = useData();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const success = loginAdmin(username, password);
    if (success) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {}
      router.push('/admin/dashboard');
    } else {
      setError('Invalid credentials. Default: admin / admin');
    }
  };

  return (
    <div className="min-h-[75vh] flex items-center justify-center py-12 px-4">
      <GlassCard className="max-w-md w-full p-8 sm:p-10 border-white/80 bg-white/65 backdrop-blur-3xl shadow-2xl relative space-y-6">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#6E6785] hover:text-[#5D1451] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Public Website</span>
        </Link>

        <div className="text-center space-y-3">
          <div className="relative w-16 h-16 mx-auto flex items-center justify-center">
            <Image
              src="/winqubit-logo-cutout.png"
              alt="WINQubit"
              width={64}
              height={64}
              className="object-contain"
              priority
            />
          </div>

          <div>
            <Badge variant="featured" className="mb-2">Security Gateway</Badge>
            <h2 className="text-2xl font-black text-[#1E1632] font-outfit">Admin Portal Login</h2>
            <p className="text-xs font-medium text-[#6E6785]">Authenticate to access live content CMS & database</p>
          </div>
        </div>

        {error && (
          <div className="p-3.5 rounded-2xl bg-rose-50 border border-rose-200 text-xs font-bold text-rose-700 text-center animate-in fade-in">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs font-black text-[#1E1632] uppercase tracking-wider">Username</label>
            <div className="relative">
              <User className="w-4 h-4 text-[#6E6785] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                required
                placeholder="User ID (admin)"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full glass-input pl-10 pr-4 py-3 text-xs font-bold"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-black text-[#1E1632] uppercase tracking-wider">Password</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-[#6E6785] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                placeholder="Password (admin)"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full glass-input pl-10 pr-4 py-3 text-xs font-bold"
              />
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-[#EEF2FF] border border-[#C7D2FE] text-[11px] text-[#4F46E5] space-y-1">
            <p className="font-extrabold flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" /> Demo Credentials:
            </p>
            <p>User ID: <strong className="font-mono text-[#5D1451]">admin</strong> | Password: <strong className="font-mono text-[#5D1451]">admin</strong></p>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-full btn-primary text-white font-extrabold text-xs shadow-lg shadow-[#E83CB7]/30 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <span>Sign In to Dashboard</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </GlassCard>
    </div>
  );
}
