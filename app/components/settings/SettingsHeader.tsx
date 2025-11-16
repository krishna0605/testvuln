const SettingsHeader = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 px-4 sm:px-6 lg:px-8 glass-card">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3 text-text-heading">
            <div className="size-6 text-primary">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z" fill="currentColor" fillRule="evenodd"></path>
              </svg>
            </div>
            <h2 className="text-text-heading text-lg font-bold">VulnScanner</h2>
          </div>
          <nav className="hidden items-center gap-7 lg:flex">
            <a className="text-text-body text-sm font-medium transition-colors hover:text-text-heading" href="#">Dashboard</a>
            <a className="text-text-body text-sm font-medium transition-colors hover:text-text-heading" href="#">Scans</a>
            <a className="text-text-body text-sm font-medium transition-colors hover:text-text-heading" href="#">Projects</a>
            <a className="text-text-body text-sm font-medium transition-colors hover:text-text-heading" href="#">Reports</a>
            <a className="text-primary text-sm font-bold" href="#">Settings</a>
            <a className="text-text-body text-sm font-medium transition-colors hover:text-text-heading" href="#">Help</a>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end gap-4">
          <label className="hidden md:flex flex-col !h-10 max-w-64 w-full">
            <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
              <div className="text-text-body flex border-none bg-white/5 items-center justify-center pl-3 rounded-l-lg border-r-0">
                <span className="material-symbols-outlined" style={{fontSize: '20px'}}>search</span>
              </div>
              <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-heading focus:outline-0 focus:ring-2 focus:ring-primary/50 border-none bg-white/5 h-full placeholder:text-text-body px-4 rounded-l-none border-l-0 pl-2 text-sm font-normal" placeholder="Search settings..." value=""/>
            </div>
          </label>
          <div className="flex items-center gap-2">
            <button className="hidden sm:flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-colors">
              <span className="truncate">Start New Scan</span>
            </button>
            <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-white/5 text-text-body hover:text-text-heading gap-2 text-sm font-bold min-w-0 px-2.5 transition-colors">
              <span className="material-symbols-outlined" style={{fontSize: '20px'}}>notifications</span>
            </button>
          </div>
          <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="User avatar image" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBIiwNuOx_OUxvYzCUQ5OF8FulHehtOwWtvXaTYghMXARcEM9d3QigZSiJzhUP1NT8R9vslrn0hM9a98Zp7EaqAxH4qihz-FNZS7glM1sCKhMJUgQ_nvQWydGteara6m817glvwCsZ_0K1CF15lwi8HjAlNJ-3Z7VB2d6pwM0EC3Shs5R2DHqkPkuPtG1OFDmy1kCS4tC58IQowau0tnBZzxNCeBFG-pqrjjh7IzaPLVLOSzYHye9px2hNNbRJRBperUphDL00jtHY")'}}></div>
        </div>
      </div>
    </header>
  )
}

export default SettingsHeader;
