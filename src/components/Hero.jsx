export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#2C1E12]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(217,119,6,0.08),transparent_60%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight text-amber-200">
              Sugeng Rawuh ing Greja Komunitas Jawi
            </h1>
            <p className="mt-4 text-amber-100/80 leading-relaxed">
              Situs komunitas sing anget lan nyenengake kang nyawiji kabudayan Jawa lan
              semangat kerohanian. Penuhi urip rohanimu lan tetep nyambung karo komunitas.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#schedule" className="px-5 py-2.5 rounded-full bg-amber-600 text-amber-50 font-semibold shadow hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-400">
                Lihat Jadwal Ibadah
              </a>
              <a href="#blog" className="px-5 py-2.5 rounded-full bg-amber-50/10 text-amber-200 font-semibold ring-1 ring-amber-300/30 hover:bg-amber-50/20">
                Baca Kegiatan & Renungan
              </a>
            </div>
          </div>
          <div className="md:justify-self-end">
            <div className="relative rounded-2xl overflow-hidden ring-1 ring-amber-800/50 shadow-2xl shadow-amber-900/30">
              <img
                src="https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?q=80&w=1480&auto=format&fit=crop"
                alt="Javanese church ambiance"
                className="w-full h-72 md:h-96 object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#2C1E12]/60 via-transparent to-[#2C1E12]/20 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
