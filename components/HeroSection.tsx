const HeroSection = () => {
  return (
    <section className="flex flex-col gap-8 items-center justify-center text-center">
      <div className="flex flex-col gap-4">
        <h1 className="text-[#F0F0F0] text-4xl md:text-6xl font-bold leading-tight tracking-tighter">
          Illuminate Your Web Security.
        </h1>
        <h2 className="text-white/70 text-base md:text-lg font-normal leading-normal max-w-2xl mx-auto">
          VulnScanner provides comprehensive, actionable, and integrated security scanning to protect your web applications from threats.
        </h2>
      </div>
      <div className="flex flex-wrap gap-4 justify-center">
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity">
          <span className="truncate">Get Started</span>
        </button>
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-white/10 text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-white/20 transition-colors">
          <span className="truncate">Explore Services</span>
        </button>
      </div>
      <div className="flex gap-3 p-3 flex-wrap justify-center mt-4">
        <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white/5 px-4">
          <p className="text-white/80 text-sm font-medium leading-normal">OWASP Coverage</p>
        </div>
        <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white/5 px-4">
          <p className="text-white/80 text-sm font-medium leading-normal">Actionable Insights</p>
        </div>
        <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white/5 px-4">
          <p className="text-white/80 text-sm font-medium leading-normal">CI/CD Friendly</p>
        </div>
      </div>
    </section>
  )
}

export default HeroSection;
