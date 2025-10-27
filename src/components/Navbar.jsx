import { ShoppingCart, User, Search } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-neutral-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-emerald-600 grid place-items-center text-white font-bold">D</div>
            <div className="flex flex-col leading-tight">
              <span className="text-xl font-extrabold tracking-tight">DINOOZ</span>
              <span className="text-[11px] uppercase tracking-widest text-neutral-500">Jurassic Meets Contemporary Style</span>
            </div>
          </div>

          <div className="hidden md:flex items-center max-w-md flex-1 mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
              <input
                type="text"
                placeholder="Search dinosaurs, tees, sneakers, decor..."
                className="w-full rounded-full border border-neutral-200 bg-neutral-50 pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white"
              />
            </div>
          </div>

          <nav className="flex items-center gap-3">
            <a href="#" className="text-sm text-neutral-700 hover:text-emerald-600 hidden sm:inline">Shop</a>
            <a href="#" className="text-sm text-neutral-700 hover:text-emerald-600 hidden sm:inline">Collections</a>
            <a href="#" className="text-sm text-neutral-700 hover:text-emerald-600 hidden sm:inline">About</a>
            <button className="relative inline-flex items-center justify-center rounded-full border border-neutral-200 p-2 hover:border-emerald-500 hover:text-emerald-600 transition-colors">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Cart</span>
              <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-emerald-600 text-white text-[10px] grid place-items-center">2</span>
            </button>
            <button className="inline-flex items-center justify-center rounded-full border border-neutral-200 p-2 hover:border-emerald-500 hover:text-emerald-600 transition-colors">
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
