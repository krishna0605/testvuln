const CTASection = () => {
  return (
    <section className="rounded-xl p-10 md:p-16 flex flex-col items-center justify-center text-center gap-6" style={{ background: 'linear-gradient(45deg, #0d9be7, #101c22)' }}>
      <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight tracking-tighter max-w-lg">Ready to Secure Your Applications?</h2>
      <p className="text-white/80 max-w-md">Join thousands of developers and security professionals who trust VulnScanner to protect their digital assets.</p>
      <div className="flex flex-wrap gap-4 justify-center mt-4">
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-white text-black text-base font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity">
          <span className="truncate">Start Free</span>
        </button>
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-transparent border border-white/50 text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-white/10 transition-colors">
          <span className="truncate">Create Account</span>
        </button>
      </div>
    </section>
  )
}

export default CTASection;
