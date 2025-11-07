import { Calendar, Mic2, Users, BookOpen } from 'lucide-react';

export function Schedule() {
  const items = [
    { day: 'Minggu', time: '09:00 WIB', name: 'Ibadah Umum' },
    { day: 'Rabu', time: '19:00 WIB', name: 'Persekutuan Doa' },
    { day: 'Sabtu', time: '17:00 WIB', name: 'Latihan Paduan Suara' },
  ];
  return (
    <section id="schedule" className="bg-[#22160E] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <Calendar className="h-5 w-5 text-amber-400" />
          <h2 className="text-amber-100 text-2xl font-bold">Jadwal Ibadah</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {items.map((it, i) => (
            <div key={i} className="rounded-xl bg-gradient-to-br from-[#3E2C1C] to-[#2C1E12] p-5 ring-1 ring-amber-900/30">
              <p className="text-amber-300 font-medium">{it.day}</p>
              <p className="text-amber-100 text-lg font-semibold">{it.name}</p>
              <p className="text-amber-200/70">{it.time}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BlogPreview() {
  const posts = [
    {
      title: 'Syukur ing Saben Dina',
      excerpt: 'Renungan ringkes babagan rasa syukur lan kabecikan Gusti.',
      img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1470&auto=format&fit=crop',
    },
    {
      title: 'Seduluran Komunitas',
      excerpt: 'Nyawiji lan guyub rukun minangka dhasar komunitas.',
      img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1470&auto=format&fit=crop',
    },
    {
      title: 'Panglipur kang Saged',
      excerpt: 'Tetesan panglipur nalika ngadhepi cobaan urip.',
      img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1470&auto=format&fit=crop',
    },
  ];
  return (
    <section id="blog" className="bg-[#2C1E12] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <BookOpen className="h-5 w-5 text-amber-400" />
          <h2 className="text-amber-100 text-2xl font-bold">Kegiatan & Renungan</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((p, idx) => (
            <article key={idx} className="group rounded-2xl overflow-hidden ring-1 ring-amber-900/30 bg-[#3E2C1C]">
              <div className="h-40 overflow-hidden">
                <img src={p.img} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h3 className="text-amber-100 font-semibold">{p.title}</h3>
                <p className="text-amber-200/80 text-sm mt-1">{p.excerpt}</p>
                <button className="mt-4 text-amber-300 font-medium hover:text-amber-200">Baca Selengkapnya →</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Commissions() {
  const groups = [
    { name: 'Komisi Pemuda', icon: Users, desc: 'Ruang tumbuh lan pelayanan kanggo mudha.' },
    { name: 'Komisi Wanita', icon: Users, desc: 'Panglipur lan pangembangan iman wanita.' },
    { name: 'Komisi Pria', icon: Users, desc: 'Pangayoman lan panguatan kanggo bapak-bapak.' },
    { name: 'Komisi Anak', icon: Users, desc: 'Sinau injil kanthi seneng lan kreatif.' },
    { name: 'Tim Pujian', icon: Mic2, desc: 'Ngawula lumantar pangibadah lan pujian.' },
    { name: 'Diakonia', icon: Users, desc: 'Pelayanan sosial kanggo sesami.' },
  ];
  return (
    <section id="commissions" className="bg-[#22160E] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <Users className="h-5 w-5 text-amber-400" />
          <h2 className="text-amber-100 text-2xl font-bold">Komisi</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {groups.map((g, i) => (
            <div key={i} className="rounded-2xl p-5 bg-gradient-to-br from-[#3E2C1C] to-[#2C1E12] ring-1 ring-amber-900/30">
              <div className="flex items-center gap-3">
                <g.icon className="h-5 w-5 text-amber-400" />
                <h3 className="text-amber-100 font-semibold">{g.name}</h3>
              </div>
              <p className="text-amber-200/80 mt-2 text-sm">{g.desc}</p>
              <button className="mt-4 text-amber-300 hover:text-amber-200 font-medium">Lihat Rincian →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
