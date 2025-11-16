const FeaturesSection = () => {
  return (
    <section className="flex flex-col gap-8" id="features">
      <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight tracking-tighter text-center">Why VulnScanner?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
        <div className="flex flex-col gap-4 p-6 rounded-xl bg-white/5 border border-white/10">
          <span className="material-symbols-outlined text-primary text-4xl">shield</span>
          <p className="text-[#F0F0F0] text-xl font-medium leading-normal">Comprehensive Scanning</p>
          <p className="text-white/70 text-sm font-normal leading-normal">Identify a wide range of vulnerabilities with our advanced scanning engine.</p>
        </div>
        <div className="flex flex-col gap-4 p-6 rounded-xl bg-white/5 border border-white/10">
          <span className="material-symbols-outlined text-primary text-4xl">task_alt</span>
          <p className="text-[#F0F0F0] text-xl font-medium leading-normal">Actionable Reporting</p>
          <p className="text-white/70 text-sm font-normal leading-normal">Get clear, prioritized reports that help you fix what matters most.</p>
        </div>
        <div className="flex flex-col gap-4 p-6 rounded-xl bg-white/5 border border-white/10">
          <span className="material-symbols-outlined text-primary text-4xl">integration_instructions</span>
          <p className="text-[#F0F0F0] text-xl font-medium leading-normal">Seamless Integration</p>
          <p className="text-white/70 text-sm font-normal leading-normal">Integrate security scanning directly into your development pipeline.</p>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection;
