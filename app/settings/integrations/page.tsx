const IntegrationsSettingsPage = () => {
  return (
    <section className="flex flex-col gap-6">
      <header>
        <h2 className="text-text-heading text-xl font-bold">Integrations</h2>
        <p className="text-text-body mt-1 text-sm">Connect VulnScanner with your favorite tools and workflows.</p>
      </header>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="flex flex-col p-6 transition-all duration-300 transform rounded-xl glass-card hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <img alt="Jira logo" className="w-10 h-10" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoNLYaqbZfT-7dDO90S3sTe1JZbo0hnK14sHx70qoNQBr-pcGX9C9o0tKR8HemXGIqcdE49wel01Df_lHzjj1CUQQORwYJGobiPlJh48aghCmXMSSm_fX7aI9lFhTAztcu0x-aXEo8QdDr4Sdu_RpRpksiqX3LVjjDYuZ9DFua9cyZfE-NVvw8-Yk294QpSatwwCw5618eA017rOIgXarbUq_9ICK49GFt0TtXto8tYkCf1AujhdmGHhUypUpy6dR2OV1UoDKmVgs"/>
              <div>
                <h3 className="font-semibold text-text-heading">Jira</h3>
                <p className="text-sm text-text-body">Create issues directly from findings.</p>
              </div>
            </div>
            <div className="relative flex items-center gap-2 px-2 py-1 text-xs font-medium text-green-300 bg-green-500/10 rounded-full">
              <span className="absolute -top-0.5 -left-0.5 inline-flex w-2.5 h-2.5 bg-green-400 rounded-full animate-ping"></span>
              <span className="inline-flex w-1.5 h-1.5 bg-green-400 rounded-full"></span>
              <span>Connected</span>
            </div>
          </div>
          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center gap-2">
              <button aria-checked="true" className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-primary transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background-dark" role="switch" type="button">
                <span className="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out translate-x-5"></span>
              </button>
              <label className="text-sm text-text-body">Enabled</label>
            </div>
            <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-4 bg-white/5 text-text-heading text-sm font-medium hover:bg-white/10 transition-colors">Manage</button>
          </div>
        </div>
        <div className="flex flex-col p-6 transition-all duration-300 transform rounded-xl glass-card hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <img alt="Slack logo" className="w-10 h-10" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSfHyX16aXf0x9OjLMSaTcvD5oOD52E-MBlAa7kh1L2-tZdqUzhQxeJuYEqKy7zJOG6mkm0CqGRTc8y77hG0cLLho28bzwEIecAUOuNVqJht2uGxBdnGYPOd0O3GqxT3ADI-s6uKEkrs8W-7WX5tGC5dUICI0l4KM9Sgy_BlH9SdSUJbolm3uxAszS6ZQswu6eUqAH8P_PouX7jJqiF8UyMB4whZHn5APe9KzwcwGulr722DkKqvi1sJAty0gqYUb8UnXfO7lD9nQ"/>
              <div>
                <h3 className="font-semibold text-text-heading">Slack</h3>
                <p className="text-sm text-text-body">Get real-time vulnerability notifications.</p>
              </div>
            </div>
            <div className="flex items-center gap-2 px-2 py-1 text-xs font-medium text-text-body bg-white/10 rounded-full">
              <span className="inline-flex w-1.5 h-1.5 bg-gray-500 rounded-full"></span>
              <span>Not Connected</span>
            </div>
          </div>
          <div className="flex items-center justify-end mt-6">
            <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-4 bg-primary text-white text-sm font-medium transition-all duration-300 hover:bg-primary/90 hover:shadow-glow-cyan-hover">Connect</button>
          </div>
        </div>
        <div className="flex flex-col p-6 transition-all duration-300 transform rounded-xl glass-card hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <img alt="GitHub logo" className="w-10 h-10" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkjfUK3ymFtNrvxuUOXGKcGtMoUoHEWCqT0KqRd4EfOuXWKKTQLaCSjOFtpZ8oDMvuV7U9l12mHJf1f1o60u75tAX4IUk1yD8V6k1-dth4R9CwwJmtLM0TV_UP2dPKsrQtGlv7hX5tHnA2txoXrPAMR3aq0WLgLR6i-MS8ueYR1oBL6GZD-VMs6TDlrQd-QHXkrkeoFU68bidBG3FAQOpDbC1NnlcQww_WrDLlUO69nfZpEHDWUAAf5vCWQV-Tx-wBU26yVCo87sI"/>
              <div>
                <h3 className="font-semibold text-text-heading">GitHub</h3>
                <p className="text-sm text-text-body">Integrate security into your CI/CD pipeline.</p>
              </div>
            </div>
            <div className="flex items-center gap-2 px-2 py-1 text-xs font-medium text-text-body bg-white/10 rounded-full">
              <span className="inline-flex w-1.5 h-1.5 bg-gray-500 rounded-full"></span>
              <span>Not Connected</span>
            </div>
          </div>
          <div className="flex items-center justify-end mt-6">
            <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-4 bg-primary text-white text-sm font-medium transition-all duration-300 hover:bg-primary/90 hover:shadow-glow-cyan-hover">Connect</button>
          </div>
        </div>
        <div className="flex flex-col p-6 transition-all duration-300 transform rounded-xl glass-card hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <img alt="Jenkins logo" className="w-10 h-10" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhcSjU4tk8kfvCSWIeZX-tc9I70q4Y_9se1WeGJhL8St-Grol8rcbmMnJ10OIqrU2z0l6KlS8rZzmkjQgHkkpF6mVh2ZoWpZ-d-5V_HfZLvL7iYoVIR8KyZU6NzBlB4qGPVdKcxiQ9lP67yqrIwWjR4GfN-TOBGm-owjYYG45LrJ5yeI-YiNhoSZTokVctnNS0nTJLy5n2Z-UzdAmzJlPwTgCXOA4U1Onp6oe525mYoL2a89dXevgkTCx1Y5UbzRfcD3NU5QD7Nms"/>
              <div>
                <h3 className="font-semibold text-text-heading">Jenkins</h3>
                <p className="text-sm text-text-body">Automate scans in your build process.</p>
              </div>
            </div>
            <div className="relative flex items-center gap-2 px-2 py-1 text-xs font-medium text-green-300 bg-green-500/10 rounded-full">
              <span className="absolute -top-0.5 -left-0.5 inline-flex w-2.5 h-2.5 bg-green-400 rounded-full animate-ping"></span>
              <span className="inline-flex w-1.5 h-1.5 bg-green-400 rounded-full"></span>
              <span>Connected</span>
            </div>
          </div>
          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center gap-2">
              <button aria-checked="false" className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-white/10 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background-dark" role="switch" type="button">
                <span className="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out translate-x-0"></span>
              </button>
              <label className="text-sm text-text-body">Disabled</label>
            </div>
            <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-4 bg-white/5 text-text-heading text-sm font-medium hover:bg-white/10 transition-colors">Manage</button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 pt-6 mt-4 border-t border-white/10">
        <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-transparent border border-white/20 text-text-heading text-sm font-medium hover:bg-white/10 transition-colors">
          Request a New Integration
        </button>
        <p className="text-xs text-text-body">Don't see your tool? Let us know!</p>
      </div>
    </section>
  );
};

export default IntegrationsSettingsPage;
