const EvidenceTabs = () => {
  return (
    <div className="glass-card rounded-xl p-5">
      <h2 className="text-lg font-bold text-[#F0F0F0] mb-4">Evidence</h2>
      <div className="flex border-b border-white/10 text-sm">
        <button className="border-b-2 border-primary px-4 py-2 text-white">HTTP Request</button>
        <button className="border-b-2 border-transparent px-4 py-2 hover:border-white/20 hover:text-white">HTTP Response</button>
      </div>
      <div className="mt-4 syntax-highlight">
        <pre><code><span className="text-green-400">POST /api/login HTTP/1.1</span>
<span className="text-gray-400">Host:</span> <span className="text-yellow-400">example.com</span>
<span className="text-gray-400">Content-Type:</span> <span className="text-yellow-400">application/json</span>

{'{'}
  <span className="text-gray-400">"username":</span> <span className="text-cyan-300">"admin' OR '1'='1"</span>,
  <span className="text-gray-400">"password":</span> <span className="text-yellow-400">"password"</span>
{'}'}</code></pre>
      </div>
    </div>
  );
};

export default EvidenceTabs;
