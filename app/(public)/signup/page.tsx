import Link from 'next/link';
import type { Metadata } from 'next';
import SignupForm from '@/components/SignupForm';

export const metadata: Metadata = {
  title: "Create Account - VulnScanner",
};

const SignupPage = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center p-4 lg:p-8 decorative-bg">
      <div className="w-full max-w-lg">
        <header className="text-center mb-8">
          <div className="inline-flex items-center gap-2 text-2xl font-bold tracking-tighter text-text-primary-dark">
            <svg className="h-7 w-7 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286Zm-1.5 6.175L3 12m18 0-1.5-1.5m-5.25 6.75-1.5 1.5M5.25 6.75 3.75 5.25m16.5 1.5L18 5.25m-3 1.5-1.5-1.5m-1.5 1.5-1.5-1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
            <span>VulnScanner</span>
          </div>
          <div className="mt-4">
            <h1 className="text-3xl lg:text-4xl font-black tracking-[-0.033em] text-text-primary-dark">Create Your Account</h1>
            <p className="text-text-secondary-dark text-base font-normal leading-normal mt-2">Start scanning with confidence in minutes.</p>
          </div>
        </header>
        <main className="w-full glassmorphic-card rounded-xl shadow-glow-primary-sm p-6 sm:p-8">
          <SignupForm />
          <div className="relative my-6">
            <div aria-hidden="true" className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border-dark"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-background-dark px-2 text-text-secondary-dark">Or continue with</span>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button className="flex h-11 w-full items-center justify-center gap-2.5 rounded-lg border border-[#3b4c54] bg-[#1b2327]/60 px-4 py-2 text-sm font-medium text-text-primary-dark transition-colors hover:bg-[#3b4c54]/50">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_3034_98)"><path d="M22.488 12.2455C22.488 11.4545 22.416 10.6818 22.284 9.92727H12V14.3364H17.936C17.688 15.6955 16.964 16.85 15.86 17.6591V20.2455H19.512C21.44 18.4227 22.488 15.6136 22.488 12.2455Z" fill="#4285F4"></path><path d="M12 23C15.004 23 17.536 22.0136 19.512 20.2455L15.86 17.6591C14.828 18.4318 13.528 18.8773 12 18.8773C9.132 18.8773 6.712 17.0273 5.86 14.5318H2.084V17.2C3.864 20.6682 7.624 23 12 23Z" fill="#34A853"></path><path d="M5.86 14.5318C5.64 13.8409 5.5 13.0955 5.5 12.2727C5.5 11.45 5.64 10.7045 5.86 10.0136V7.32727H2.084C1.292 8.92273 0.819995 10.55 0.819995 12.2727C0.819995 13.9955 1.292 15.6227 2.084 17.2L5.86 14.5318Z" fill="#FBBC05"></path><path d="M12 5.66364C13.636 5.66364 15.08 6.20909 16.208 7.28182L19.58 4.1C17.532 2.16364 15.004 1 12 1C7.624 1 3.864 3.33182 2.084 6.8L5.86 9.48636C6.712 6.99091 9.132 5.66364 12 5.66364Z" fill="#EA4335"></path></g><defs><clipPath id="clip0_3034_98"><rect fill="white" height="22" transform="translate(0.819995 1)" width="21.668"></rect></clipPath></defs></svg>
              <span>Google</span>
            </button>
            <button className="flex h-11 w-full items-center justify-center gap-2.5 rounded-lg border border-[#3b4c54] bg-[#1b2327]/60 px-4 py-2 text-sm font-medium text-text-primary-dark transition-colors hover:bg-[#3b4c54]/50">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="M12 1.25C6.075 1.25 1.25 6.075 1.25 12C1.25 16.8375 4.4925 20.9125 8.875 22.25C9.5 22.3625 9.6875 21.9875 9.6875 21.675C9.6875 21.3875 9.675 20.5 9.675 19.4625C6.55 20.1 5.75 17.95 5.75 17.95C5.175 16.525 4.3 16.15 4.3 16.15C3.15 15.3375 4.3875 15.35 4.3875 15.35C5.7 15.4375 6.3375 16.7125 6.3375 16.7125C7.4875 18.6625 9.3875 18.1125 10.05 17.8125C10.1625 17.0125 10.475 16.475 10.825 16.175C8.2125 15.875 5.4625 14.8875 5.4625 10.6625C5.4625 9.4375 5.9125 8.425 6.625 7.65C6.5125 7.35 6.1375 6.275 6.7375 4.7375C6.7375 4.7375 7.825 4.3875 9.675 5.6875C10.7125 5.4125 11.8 5.275 12.8875 5.275C13.975 5.275 15.0625 5.4125 16.1 5.6875C17.95 4.3875 19.0375 4.7375 19.0375 4.7375C19.6375 6.275 19.2625 7.35 19.15 7.65C19.8625 8.425 20.3125 9.4375 20.3125 10.6625C20.3125 14.9 17.55 15.875 14.9375 16.175C15.375 16.5625 15.75 17.3 15.75 18.4375C15.75 20.0625 15.7375 21.3625 15.7375 21.675C15.7375 21.9875 15.9125 22.375 16.55 22.25C20.925 20.9125 24.1625 16.8375 24.1625 12C24.1625 6.075 19.3375 1.25 12.8875 1.25H12Z" fill="white" fillRule="evenodd"></path></svg>
              <span>GitHub</span>
            </button>
          </div>
        </main>
        <footer className="mt-6 text-center">
          <p className="text-sm text-text-secondary-dark">
            Already have an account?
            <Link href="/login" className="font-medium text-primary hover:underline">Log in</Link>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default SignupPage;
