import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import { Schedule, BlogPreview, Commissions } from './components/Sections';

export default function App() {
  return (
    <div className="min-h-screen bg-[#2C1E12] text-amber-50 font-['Inter','IBM Plex Sans','system-ui']">
      <Navbar />
      <Hero />
      <Schedule />
      <BlogPreview />
      <Commissions />
      <Footer />
    </div>
  );
}
