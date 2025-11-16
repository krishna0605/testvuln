const Actions = () => {
  return (
    <div className="flex flex-col gap-3">
      <button className="flex w-full items-center justify-center gap-2 rounded-lg h-10 px-4 bg-white/10 text-white text-sm font-medium hover:bg-white/20 transition-colors">
        <span className="material-symbols-outlined text-lg">person_add</span>
        Assign
      </button>
      <button className="flex w-full items-center justify-center gap-2 rounded-lg h-10 px-4 bg-white/10 text-white text-sm font-medium hover:bg-white/20 transition-colors">
        <span className="material-symbols-outlined text-lg">add_comment</span>
        Add Comment
      </button>
    </div>
  );
};

export default Actions;
