'use client';

import Link from 'next/link';
import { useState } from 'react';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col items-center justify-center overflow-x-hidden p-4 sm:p-6 lg:p-8">
      <div className="absolute inset-0 z-0 bg-grid" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '3rem 3rem' }}></div>
      <div className="absolute left-1/2 top-0 z-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl"></div>
      <div className="relative z-10 flex w-full max-w-md flex-col items-center gap-8 text-center">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-4xl">shield</span>
          <span className="text-3xl font-bold tracking-tight text-text-primary-dark">VulnScanner</span>
        </div>
        <div className="w-full rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-lg">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <p className="font-display text-3xl font-bold leading-tight tracking-tight text-text-primary-dark">Forgot Password?</p>
              <p className="font-display text-base font-normal leading-normal text-text-secondary-dark">No worries — we’ll send you instructions to reset your password.</p>
              <div className="mx-auto mt-2 h-0.5 w-16 bg-primary"></div>
            </div>
            <div className="flex flex-col gap-6">
              <label className="flex flex-col flex-1 text-left">
                <p className="pb-2 font-display text-sm font-medium leading-normal text-text-primary-dark">Email Address</p>
                <input
                  className="form-input flex h-12 w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border-white/10 bg-white/5 p-3 font-display text-base font-normal leading-normal text-text-primary-dark placeholder:text-text-secondary-dark/60 transition-shadow duration-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 focus:glow-shadow"
                  placeholder="Enter your email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 flex-1 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] transition-all duration-300 hover:bg-sky-500 hover:shadow-lg hover:shadow-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background-dark">
                <span className="truncate">Send Reset Link</span>
              </button>
            </div>
            <p className="text-center font-display text-sm font-normal leading-normal text-text-secondary-dark">
              <Link href="/login" className="underline transition-colors hover:text-primary">Back to Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
