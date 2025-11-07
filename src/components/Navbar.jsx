import { Home, Calendar, BookOpen, Users } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-b from-[#3E2C1C]/95 to-[#2C1E12]/90 backdrop-blur border-b border-amber-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-3 group">
            <div className="h-9 w-9 rounded-full bg-amber-800/20 ring-1 ring-amber-700/40 grid place-items-center">
              <span className="text-amber-400 text-xl">⛪</span>
            </div>
            <div>
              <p className="text-amber-200 font-semibold tracking-wide group-hover:text-amber-300 transition-colors">
                GKM Jawi
              </p>
              <p className="text-[11px] text-amber-300/70 uppercase tracking-widest">Gereja Komunitas Masyarakat</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#blog" className="nav-link">
              <BookOpen className="h-4 w-4" />
              <span>Blog</span>
            </a>
            <a href="#schedule" className="nav-link">
              <Calendar className="h-4 w-4" />
              <span>Jadwal Ibadah</span>
            </a>
            <a href="#commissions" className="nav-link">
              <Users className="h-4 w-4" />
              <span>Komisi</span>
            </a>
            <a href="#home" className="nav-link">
              <Home className="h-4 w-4" />
              <span>Beranda</span>
            </a>
          </nav>
        </div>
      </div>
      <style>{`
        .nav-link{display:inline-flex;align-items:center;gap:.5rem;color:rgb(253 230 138/0.9);font-weight:500}
        .nav-link:hover{color:rgb(251 191 36)}
      `}</style>
    </header>
  );
}
