const FindingDetails = () => {
  return (
    <div className="glass-card rounded-xl p-4">
      <h2 className="text-lg font-bold text-[#F0F0F0] mb-3">Finding Details</h2>
      <div className="space-y-2 text-sm">
        <div className="flex justify-between"><span>Status:</span> <span className="font-medium text-white">Open</span></div>
        <div className="flex justify-between"><span>Found:</span> <span className="font-medium text-white">2024-07-21</span></div>
        <div className="flex justify-between"><span>Assigned:</span> <span className="font-medium text-white">Unassigned</span></div>
      </div>
    </div>
  );
};

export default FindingDetails;
