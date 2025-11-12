const PoCPanel = () => {
  return (
    <div className="glass-card rounded-xl p-5">
      <h2 className="text-lg font-bold text-[#F0F0F0] mb-3">Proof of Concept</h2>
      <p className="text-sm">The payload <code className="bg-white/10 text-cyan-300 text-xs px-1.5 py-1 rounded">' OR '1'='1</code> was used in the `username` parameter of the login form. This caused the SQL query to evaluate to true, bypassing authentication and logging the attacker in as the first user in the database (typically an administrator).</p>
    </div>
  );
};

export default PoCPanel;
