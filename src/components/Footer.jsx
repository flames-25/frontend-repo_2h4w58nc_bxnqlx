export default function Footer(){
  return (
    <footer className="bg-[#1A120B] border-t border-amber-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-3 gap-8 text-amber-200/80">
          <div>
            <p className="text-amber-200 font-semibold">GKM Jawi</p>
            <p className="text-sm mt-2">Ngurmati tradhisi Jawa lan ngugemi iman. Panggonan sing anget kanggo kabeh sedulur.</p>
          </div>
          <div>
            <p className="text-amber-200 font-semibold">Kontak</p>
            <p className="text-sm mt-2">Jl. Kasatriyan 12, Yogyakarta</p>
            <p className="text-sm">Senin - Sabtu 08.00 - 16.00 WIB</p>
          </div>
          <div>
            <p className="text-amber-200 font-semibold">Ikuti Kami</p>
            <div className="mt-2 flex gap-3">
              <a className="hover:text-amber-300" href="#">Instagram</a>
              <a className="hover:text-amber-300" href="#">YouTube</a>
              <a className="hover:text-amber-300" href="#">Facebook</a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-amber-900/30 text-sm text-amber-300/70">
          © {new Date().getFullYear()} GKM Jawi. Kabeh hak dilindhungi.
        </div>
      </div>
    </footer>
  );
}
