import Link from 'next/link';
import type { Metadata } from 'next';
import LoginForm from '@/components/LoginForm';

export const metadata: Metadata = {
  title: "VulnScanner - Login",
};

const LoginPage = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden p-4">
      <div className="animated-grid absolute inset-0 z-0 h-full w-full" style={{ backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      <div className="relative z-10 flex w-full max-w-6xl items-center justify-center">
        <div className="grid w-full grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Left Side: Hero Section (Desktop Only) */}
          <div className="hidden flex-col justify-center gap-6 lg:flex">
            <div className="flex items-center gap-3">
              <svg className="h-10 w-10 text-vuln-accent" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M2 7L12 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M12 22V12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M22 7L12 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M17 4.5L7 9.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              <h1 className="text-4xl font-bold tracking-tighter text-vuln-text-primary">VulnScanner</h1>
            </div>
            <p className="text-5xl font-bold leading-tight tracking-tighter">Illuminate Your<br/>Web Security.</p>
            <p className="max-w-md text-lg text-vuln-text-secondary">Securely access your vulnerability dashboard to monitor, manage, and remediate threats with confidence.</p>
          </div>

          {/* Right Side: Login Form */}
          <div className="flex w-full max-w-md flex-col justify-center">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-lg">
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                  <p className="text-vuln-text-primary text-3xl font-bold leading-tight tracking-tight">Welcome Back</p>
                  <p className="text-vuln-text-secondary text-base font-normal leading-normal">Log in to your account to continue.</p>
                </div>
                <LoginForm />
                <div className="flex items-center gap-4">
                  <hr className="flex-1 border-t border-white/10"/>
                  <p className="text-vuln-text-secondary text-xs">Or continue with</p>
                  <hr className="flex-1 border-t border-white/10"/>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <button className="flex h-11 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 text-sm font-medium text-vuln-text-primary transition-colors hover:bg-white/10">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21.9999 12.2273C21.9999 11.4545 21.9317 10.6818 21.7953 9.93182H12.2272V14.2841H17.8067C17.5817 15.6818 16.8908 16.8864 15.8181 17.6591V20.3636H19.5226C21.0726 18.9659 21.9999 16.8864 21.9999 14.2841V12.2273Z" fill="#4285F4"></path><path d="M12.2272 22C15.0181 22 17.3635 21.0727 19.0454 19.6136L15.8181 17.6591C14.8908 18.25 13.6363 18.6364 12.2272 18.6364C9.62719 18.6364 7.41356 16.9886 6.6181 14.7955H2.79539V17.5909C4.43175 20.25 7.99538 22 12.2272 22Z" fill="#34A853"></path><path d="M6.61818 14.7955C6.39318 14.1818 6.27273 13.5227 6.27273 12.8409C6.27273 12.1591 6.39318 11.5 6.61818 10.8864V8.09091H2.79545C2.25 9.13636 2 10.3636 2 11.6364C2 12.9091 2.25 14.1364 2.79545 15.1818L6.61818 14.7955V14.7955Z" fill="#FBBC05"></path><path d="M12.2272 6.04545C13.7272 6.02273 15.1408 6.56818 16.2272 7.61364L19.1135 4.72727C17.2726 3.02273 14.8863 2 12.2272 2C7.99538 2 4.43175 4.75 2.79539 8.09091L6.6181 10.8864C7.41356 8.69318 9.62719 7.04545 12.2272 7.04545V6.04545Z" fill="#EA4335"></path></svg>
                    Google
                  </button>
                  <button className="flex h-11 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 text-sm font-medium text-vuln-text-primary transition-colors hover:bg-white/10">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.58 6.01 14.05C3.76 14.51 3.28 13.02 3.28 13.02C2.92 12.08 2.42 11.84 2.42 11.84C1.71 11.35 2.47 11.36 2.47 11.36C3.27 11.42 3.68 12.16 3.68 12.16C4.4 13.41 5.64 13.03 6.08 12.82C6.16 12.27 6.38 11.89 6.63 11.69C4.84 11.49 2.95 10.83 2.95 7.78C2.95 6.9 3.25 6.17 3.75 5.61C3.67 5.41 3.42 4.64 3.82 3.63C3.82 3.63 4.48 3.41 6.05 4.41C6.67 4.24 7.34 4.15 8 4.15C8.66 4.15 9.33 4.24 9.95 4.41C11.52 3.41 12.18 3.63 12.18 3.63C12.58 4.64 12.33 5.41 12.25 5.61C12.75 6.17 13.05 6.9 13.05 7.78C13.05 10.84 11.15 11.49 9.37 11.69C9.69 11.94 10.01 12.44 10.01 13.23C10.01 14.34 10 15.26 10 15.53C10 15.74 10.14 15.98 10.54 15.9C13.71 14.93 16 12.09 16 8C16 3.58 12.42 0 8 0Z" fillRule="evenodd"></path></svg>
                    GitHub
                  </button>
                </div>
                <p className="text-center text-sm text-vuln-text-secondary">
                  Don't have an account? <Link href="/signup" className="font-medium text-vuln-accent hover:underline">Create one</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
//hiii