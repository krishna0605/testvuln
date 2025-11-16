const ServicesSection = () => {
  return (
    <section className="flex flex-col gap-8" id="services">
      <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight tracking-tighter text-center">Our Core Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
        <div className="flex flex-col gap-3 p-6 rounded-xl glassmorphic-card">
          <span className="material-symbols-outlined text-primary text-3xl">scanner</span>
          <h4 className="text-[#F0F0F0] font-semibold">Automated Vulnerability Scans</h4>
          <p className="text-white/70 text-sm">Continuously scan your applications for known vulnerabilities.</p>
        </div>
        <div className="flex flex-col gap-3 p-6 rounded-xl glassmorphic-card">
          <span className="material-symbols-outlined text-primary text-3xl">visibility</span>
          <h4 className="text-[#F0F0F0] font-semibold">Real-Time Monitoring</h4>
          <p className="text-white/70 text-sm">Get instant alerts on new threats and suspicious activities.</p>
        </div>
        <div className="flex flex-col gap-3 p-6 rounded-xl glassmorphic-card">
          <span className="material-symbols-outlined text-primary text-3xl">analytics</span>
          <h4 className="text-[#F0F0F0] font-semibold">Detailed Reports &amp; Analytics</h4>
          <p className="text-white/70 text-sm">Receive insightful reports to understand your security posture.</p>
        </div>
        <div className="flex flex-col gap-3 p-6 rounded-xl glassmorphic-card">
          <span className="material-symbols-outlined text-primary text-3xl">hub</span>
          <h4 className="text-[#F0F0F0] font-semibold">Integration Ecosystem</h4>
          <p className="text-white/70 text-sm">Connect with your favorite developer tools and platforms.</p>
        </div>
        <div className="flex flex-col gap-3 p-6 rounded-xl glassmorphic-card">
          <span className="material-symbols-outlined text-primary text-3xl">gavel</span>
          <h4 className="text-[#F0F0F0] font-semibold">Compliance Assistance</h4>
          <p className="text-white/70 text-sm">Streamline adherence to industry standards like PCI-DSS and GDPR.</p>
        </div>
        <div className="flex flex-col gap-3 p-6 rounded-xl glassmorphic-card">
          <span className="material-symbols-outlined text-primary text-3xl">healing</span>
          <h4 className="text-[#F0F0F0] font-semibold">Guided Remediation</h4>
          <p className="text-white/70 text-sm">Step-by-step guidance to help your team fix vulnerabilities fast.</p>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection;
