const RemediationPanel = () => {
  return (
    <div className="glass-card rounded-xl p-4">
      <h2 className="text-lg font-bold text-[#F0F0F0] mb-3">Remediation Steps</h2>
      <ol className="list-decimal list-inside space-y-2 text-sm">
        <li>Use parameterized queries (prepared statements).</li>
        <li>Implement input validation and sanitization.</li>
        <li>Apply the principle of least privilege to database accounts.</li>
        <li>Regularly patch and update database systems.</li>
      </ol>
    </div>
  );
};

export default RemediationPanel;
