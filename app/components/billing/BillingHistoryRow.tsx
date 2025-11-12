const BillingHistoryRow = ({ item }: { item: any }) => {
  return (
    <tr className="border-b border-white/10">
      <td className="p-4 text-white/90">{item.date}</td>
      <td className="p-4 text-white/90">{item.description}</td>
      <td className="p-4 text-white/90">{item.amount}</td>
      <td className="p-4">
        <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${
          item.status === 'Paid' ? 'bg-green-500/10 text-green-400 ring-green-500/20' : 'bg-red-500/10 text-red-400 ring-red-500/20'
        }`}>
          {item.status}
        </span>
      </td>
      <td className="p-4"><a className="text-primary hover:underline font-medium flex items-center gap-1" href="#">Download<span className="material-symbols-outlined text-base">download</span></a></td>
    </tr>
  );
};

export default BillingHistoryRow;
