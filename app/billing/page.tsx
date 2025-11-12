import Link from 'next/link';
import SubscriptionPlan from '@/app/components/billing/SubscriptionPlan';
import BillingHistoryRow from '@/app/components/billing/BillingHistoryRow';

const subscriptionPlans = [
  {
    name: 'Starter',
    price: '$0',
    description: 'Perfect for individuals and small projects.',
    features: ['Basic vulnerability scanning', '1 Project', 'Weekly reports'],
    buttonText: 'Select Plan',
    popular: false,
  },
  {
    name: 'Professional',
    price: '$49',
    description: 'For professionals and teams requiring more power.',
    features: ['Advanced scanning', '10 Projects', 'API Access & Integrations', 'Priority support'],
    buttonText: 'Select Plan',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Tailored solutions for large-scale organizations.',
    features: ['Unlimited projects', 'Team collaboration features', 'Dedicated account manager & SLA'],
    buttonText: 'Contact Sales',
    popular: false,
  },
];

const billingHistory = [
  {
    date: 'Nov 15, 2024',
    description: 'Professional Plan - Monthly',
    amount: '$49.00',
    status: 'Paid',
  },
  {
    date: 'Oct 15, 2024',
    description: 'Professional Plan - Monthly',
    amount: '$49.00',
    status: 'Paid',
  },
  {
    date: 'Sep 15, 2024',
    description: 'Professional Plan - Monthly',
    amount: '$49.00',
    status: 'Failed',
  },
  {
    date: 'Aug 15, 2024',
    description: 'Professional Plan - Monthly',
    amount: '$49.00',
    status: 'Paid',
  },
];

const BillingPage = () => {
  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <section className="mb-12">
        <div className="flex flex-wrap gap-2 mb-4">
          <Link href="/dashboard" className="text-[#A0A0B0] text-base font-medium hover:text-white">Dashboard</Link>
          <span className="text-[#A0A0B0] text-base font-medium">/</span>
          <span className="text-[#F0F0F0] text-base font-medium">Billing</span>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-[#F0F0F0] text-4xl sm:text-5xl font-bold tracking-tighter">Billing & Subscription</h1>
          <div className="h-0.5 w-20 bg-primary"></div>
          <p className="text-[#A0A0B0] text-lg mt-2">Manage your plan, payment methods, and invoices.</p>
        </div>
      </section>

      <section className="mb-16">
        <div className="glass-card rounded-xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex-1">
              <p className="text-[#A0A0B0] text-sm font-medium uppercase tracking-wider">Current Plan</p>
              <div className="flex items-baseline gap-4 mt-2">
                <p className="text-white text-3xl font-bold">Professional</p>
                <div className="flex items-center gap-2 rounded-full bg-green-500/10 px-3 py-1 text-sm font-medium text-green-400">
                  <div className="h-2 w-2 rounded-full bg-green-400"></div>
                  Active
                </div>
              </div>
              <p className="text-[#A0A0B0] text-base mt-2">$49/mo, renews on Dec 15, 2024</p>
            </div>
            <div className="flex flex-shrink-0 gap-3 w-full md:w-auto">
              <button className="btn-primary flex-1 rounded-lg h-11 px-6 text-sm font-bold">
                <span className="truncate">Upgrade Plan</span>
              </button>
              <button className="btn-secondary flex-1 rounded-lg h-11 px-6 text-sm font-bold">
                <span className="truncate">Cancel Subscription</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-10">Choose Your Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {subscriptionPlans.map((plan, index) => (
            <SubscriptionPlan key={index} plan={plan} />
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Payment Method</h2>
        <div className="glass-card rounded-xl p-6 md:p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <img alt="Visa card logo" className="h-8 w-auto rounded" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDl1TUyhb-kzz9lukksJiET2YSztFDorFCZ4gu4Nob0J5euknzayRigEr1_QdtZ0sQZRmxtLmfpZsrIL69pVgQYcYSq8EwUlyMjVUx4EYNBgHGkT__lTCmaF2BPcqDmD4D3mnykK-oHqhCxZ67nd7juidd5Rn8MbP3qfu9x5ajd45AnjKC4OAW0WZqdlOrJNSEvDto9NuDZw-egqDvlQg_XMQTyBWzfKujD611LzBQF9Ioc0PnGosPp2Ymwbzr54wxPSBN2dad8OzE"/>
              <div>
                <p className="text-white font-semibold">Visa ending in 4242</p>
                <p className="text-[#A0A0B0] text-sm">Expires 12/26</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="text-primary hover:text-primary/80 font-medium text-sm">Change</button>
              <button className="text-[#A0A0B0] hover:text-white font-medium text-sm">Remove</button>
            </div>
          </div>
          <hr className="border-white/10 my-6"/>
          <button className="btn-secondary flex items-center gap-2 rounded-lg h-11 px-6 text-sm font-bold">
            <span className="material-symbols-outlined text-base">add</span>
            <span>Add New Card</span>
          </button>
          <p className="text-xs text-[#A0A0B0] mt-4 text-center sm:text-left">Your payments are securely processed via Stripe.</p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Billing History</h2>
        <div className="glass-card rounded-xl p-2 sm:p-4">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] text-left">
              <thead className="border-b border-white/10">
                <tr>
                  <th className="p-4 text-sm font-semibold text-[#A0A0B0] uppercase tracking-wider">Date</th>
                  <th className="p-4 text-sm font-semibold text-[#A0A0B0] uppercase tracking-wider">Description</th>
                  <th className="p-4 text-sm font-semibold text-[#A0A0B0] uppercase tracking-wider">Amount</th>
                  <th className="p-4 text-sm font-semibold text-[#A0A0B0] uppercase tracking-wider">Status</th>
                  <th className="p-4 text-sm font-semibold text-[#A0A0B0] uppercase tracking-wider">Invoice</th>
                </tr>
              </thead>
              <tbody>
                {billingHistory.map((item, index) => (
                  <BillingHistoryRow key={index} item={item} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="glass-card rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute -left-20 -top-20 w-48 h-48 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="relative flex items-center gap-4">
            <span className="material-symbols-outlined text-4xl text-primary">headset_mic</span>
            <div>
              <h3 className="text-xl font-bold">Need help with billing?</h3>
              <p className="text-[#A0A0B0]">Our team is here to assist with custom plans and questions.</p>
            </div>
          </div>
          <div className="relative flex flex-shrink-0 gap-3 w-full md:w-auto">
            <button className="btn-primary flex-1 rounded-lg h-11 px-6 text-sm font-bold">Contact Support</button>
            <button className="btn-secondary flex-1 rounded-lg h-11 px-6 text-sm font-bold">View FAQs</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BillingPage;
