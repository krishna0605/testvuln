'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    document.cookie = 'auth_token=dummy_token; Path=/; SameSite=Lax';
    router.push('/dashboard');
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <label className="flex flex-col">
        <p className="text-vuln-text-primary text-sm font-medium leading-normal pb-2">Email Address</p>
        <input
          className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border border-white/10 bg-white/5 p-3 text-base font-normal leading-normal text-vuln-text-primary placeholder:text-vuln-text-secondary/60 focus:border-vuln-accent focus:outline-0 focus:ring-2 focus:ring-vuln-accent/50"
          placeholder="Enter your email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label className="flex flex-col">
        <p className="text-vuln-text-primary text-sm font-medium leading-normal pb-2">Password</p>
        <div className="relative flex w-full flex-1 items-stretch">
          <input
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border border-white/10 bg-white/5 p-3 pr-10 text-base font-normal leading-normal text-vuln-text-primary placeholder:text-vuln-text-secondary/60 focus:border-vuln-accent focus:outline-0 focus:ring-2 focus:ring-vuln-accent/50"
            placeholder="Enter your password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 text-vuln-text-secondary">
            <span className="material-symbols-outlined text-xl">visibility_off</span>
          </div>
        </div>
      </label>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <input className="h-4 w-4 rounded border-white/20 bg-transparent text-vuln-accent checked:bg-vuln-accent checked:border-transparent focus:ring-2 focus:ring-vuln-accent/50 focus:ring-offset-0 focus:ring-offset-vuln-bg" id="remember-me" type="checkbox"/>
          <label className="text-vuln-text-secondary text-sm font-normal leading-normal" htmlFor="remember-me">Remember me</label>
        </div>
        <Link href="/forgot-password">
          <button className="text-vuln-accent text-sm font-medium leading-normal hover:underline">Forgot Password?</button>
        </Link>
      </div>
      <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-11 px-5 flex-1 bg-vuln-accent text-white text-base font-bold leading-normal tracking-wide transition-shadow hover:shadow-[0_0_20px_theme(colors.vuln-accent)]" type="submit">
        <span className="truncate">Log In</span>
      </button>
    </form>
  )
}

export default LoginForm;
