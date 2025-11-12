const SubscriptionPlan = ({ plan }: { plan: any }) => {
  return (
    <div className={`glass-card rounded-xl p-8 flex flex-col transition-transform duration-300 hover:-translate-y-2 ${plan.popular ? 'border-primary glow-border' : ''}`}>
      {plan.popular && <div className="absolute -top-4 right-8 bg-primary text-white text-xs font-bold uppercase px-3 py-1 rounded-full">Most Popular</div>}
      <h3 className="text-2xl font-bold">{plan.name}</h3>
      <p className="text-4xl font-bold my-4">{plan.price}<span className="text-lg font-medium text-[#A0A0B0]">/mo</span></p>
      <p className="text-[#A0A0B0] h-12">{plan.description}</p>
      <ul className="space-y-3 text-white/90 my-6 flex-grow">
        {plan.features.map((feature: string, index: number) => (
          <li key={index} className="flex items-center gap-3"><span className="material-symbols-outlined text-green-400">check_circle</span> {feature}</li>
        ))}
      </ul>
      <button className={`${plan.popular ? 'btn-primary' : 'btn-secondary'} w-full rounded-lg h-11 text-sm font-bold mt-4`}>{plan.buttonText}</button>
    </div>
  );
};

export default SubscriptionPlan;
