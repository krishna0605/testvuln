const ScanHistoryRow = ({ scan }: { scan: any }) => {
  return (
    <tr className="hover:bg-white/5">
      <td className="p-4 font-medium text-text-heading">{scan.target}</td>
      <td className="p-4">{scan.date}</td>
      <td className="p-4">{scan.duration}</td>
      <td className="p-4">
        <div className="flex items-center gap-2">
          {scan.vulnerabilities.critical > 0 && <span className="rounded-full bg-red-500/20 px-2 py-0.5 text-xs font-semibold text-red-400">{scan.vulnerabilities.critical} Critical</span>}
          {scan.vulnerabilities.high > 0 && <span className="rounded-full bg-orange-500/20 px-2 py-0.5 text-xs font-semibold text-orange-400">{scan.vulnerabilities.high} High</span>}
          {scan.vulnerabilities.medium > 0 && <span className="rounded-full bg-yellow-500/20 px-2 py-0.5 text-xs font-semibold text-yellow-400">{scan.vulnerabilities.medium} Medium</span>}
        </div>
      </td>
      <td className="p-4">
        <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${
          scan.status === 'Critical Found' ? 'bg-red-500/20 text-red-400' :
          scan.status === 'Completed' ? 'bg-green-500/20 text-green-400' : 'bg-gray-500/20 text-gray-400'
        }`}>
          {scan.status}
        </span>
      </td>
      <td className="p-4 text-right">
        <div className="flex items-center justify-end gap-1">
          <button className="flex h-8 w-8 items-center justify-center rounded-md hover:bg-white/10"><span className="material-symbols-outlined text-xl">visibility</span></button>
          <button className="flex h-8 w-8 items-center justify-center rounded-md hover:bg-white/10"><span className="material-symbols-outlined text-xl">download</span></button>
          <button className="flex h-8 w-8 items-center justify-center rounded-md hover:bg-white/10"><span className="material-symbols-outlined text-xl">replay</span></button>
        </div>
      </td>
    </tr>
  );
};

export default ScanHistoryRow;
