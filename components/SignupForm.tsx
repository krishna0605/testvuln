'use client';

import { useState } from 'react';

const SignupForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('Developer');

  return (
    <form className="flex flex-col gap-4">
      <div className="flex flex-col min-w-40 flex-1">
        <label className="text-text-secondary-dark text-sm font-medium leading-normal pb-2" htmlFor="full-name">Full Name</label>
        <input
          className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-primary-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#3b4c54] bg-[#1b2327]/60 h-12 placeholder:text-[#9cb0ba]/60 p-3 text-base font-normal leading-normal transition-shadow"
          id="full-name"
          placeholder="Enter your full name"
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      </div>
      <div className="flex flex-col min-w-40 flex-1">
        <label className="text-text-secondary-dark text-sm font-medium leading-normal pb-2" htmlFor="email">Email Address</label>
        <input
          className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-primary-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#3b4c54] bg-[#1b2327]/60 h-12 placeholder:text-[#9cb0ba]/60 p-3 text-base font-normal leading-normal transition-shadow"
          id="email"
          placeholder="Enter your email address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex flex-col min-w-40 flex-1">
        <label className="text-text-secondary-dark text-sm font-medium leading-normal pb-2" htmlFor="password">Password</label>
        <div className="relative flex w-full flex-1 items-stretch">
          <input
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-primary-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#3b4c54] bg-[#1b2327]/60 h-12 placeholder:text-[#9cb0ba]/60 p-3 pr-10 text-base font-normal leading-normal transition-shadow"
            id="password"
            placeholder="Enter your password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="absolute inset-y-0 right-0 flex items-center pr-3 text-text-secondary-dark hover:text-text-primary-dark" type="button">
            <span className="material-symbols-outlined text-xl">visibility_off</span>
          </button>
        </div>
      </div>
      <div className="flex flex-col min-w-40 flex-1">
        <label className="text-text-secondary-dark text-sm font-medium leading-normal pb-2" htmlFor="confirm-password">Confirm Password</label>
        <div className="relative flex w-full flex-1 items-stretch">
          <input
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-primary-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#3b4c54] bg-[#1b2327]/60 h-12 placeholder:text-[#9cb0ba]/60 p-3 pr-10 text-base font-normal leading-normal transition-shadow"
            id="confirm-password"
            placeholder="Confirm your password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button className="absolute inset-y-0 right-0 flex items-center pr-3 text-text-secondary-dark hover:text-text-primary-dark" type="button">
            <span className="material-symbols-outlined text-xl">visibility_off</span>
          </button>
        </div>
      </div>
      <div className="flex flex-col min-w-40 flex-1">
        <label className="text-text-secondary-dark text-sm font-medium leading-normal pb-2" htmlFor="role">Role</label>
        <div className="relative">
          <select
            className="form-select appearance-none flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-primary-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#3b4c54] bg-[#1b2327]/60 h-12 placeholder:text-[#9cb0ba]/60 p-3 text-base font-normal leading-normal transition-shadow"
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option>Developer</option>
            <option>Security Engineer</option>
            <option>Team Lead</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-text-secondary-dark">
            <span className="material-symbols-outlined">expand_more</span>
          </div>
        </div>
      </div>
      <div className="pt-4 pb-2">
        <button className="flex w-full items-center justify-center rounded-lg h-12 bg-primary px-6 text-base font-bold text-white shadow-lg shadow-primary/30 transition-all duration-300 ease-in-out hover:bg-sky-500 hover:shadow-glow-primary focus:outline-none focus:ring-4 focus:ring-primary/50" type="submit">
          Create Account
        </button>
      </div>
      <div className="flex items-center gap-3">
        <input className="form-checkbox h-4 w-4 rounded border-2 border-[#3b4c54] bg-[#1b2327]/60 text-primary focus:ring-offset-background-dark focus:ring-2 focus:ring-primary/50" id="terms" type="checkbox"/>
        <label className="text-sm text-text-secondary-dark" htmlFor="terms">
          I agree to the <a className="font-medium text-primary hover:underline" href="#">Terms of Service</a> and <a className="font-medium text-primary hover:underline" href="#">Privacy Policy</a>.
        </label>
      </div>
    </form>
  )
}

export default SignupForm;
