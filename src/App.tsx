/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { 
  Phone, 
  MapPin, 
  Home, 
  Waves, 
  Piano, 
  Dumbbell, 
  CheckCircle2, 
  ArrowRight,
  Menu,
  X,
  CreditCard,
  MessageCircle,
  Layout,
  Layers,
  Sparkles
} from "lucide-react";
import { useState, useRef } from "react";

const WHATSAPP_LINK = "https://wa.me/6282234837411";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const stats = [
    { label: "Luas Tanah", value: "±280m²" },
    { label: "Luas Bangunan", value: "±600m²" },
    { label: "Lantai", value: "3" },
    { label: "Kamar Tidur", value: "4+2" },
    { label: "Kamar Mandi", value: "4+1" },
    { label: "Listrik", value: "15.000W" },
  ];

  const features = [
    { icon: Waves, title: "Private Pool", desc: "Kolam renang pribadi 5x9m" },
    { icon: Layout, title: "Multipurpose", desc: "Ruang serbaguna 10x15m" },
    { icon: Piano, title: "Music Room", desc: "Lengkap dengan instrumen" },
    { icon: Dumbbell, title: "Home Gym", desc: "Peralatan latihan lengkap" },
    { icon: Sparkles, title: "Full Furnished", desc: "Siap huni dengan furnish mewah" },
    { icon: Home, title: "New Build", desc: "Bangunan modern Tahun 2022" },
  ];

  const locations = [
    { name: "Homeschooling Intl", time: "5 Menit" },
    { name: "Hyatt Hotel", time: "5 Menit" },
    { name: "Kopi Klotok", time: "15 Menit" },
    { name: "UGM", time: "20 Menit" },
    { name: "Malioboro", time: "20 Menit" },
  ];

  return (
    <div className="min-h-screen bg-luxury-paper overflow-x-hidden selection:bg-luxury-gold selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-luxury-paper/80 backdrop-blur-md border-b border-luxury-gold/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="font-serif text-2xl tracking-widest text-luxury-ink">FASCO MANSION</span>
            <span className="text-[10px] tracking-[0.3em] font-medium text-luxury-gold uppercase -mt-1">Residence Jogja</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-10 text-xs font-semibold tracking-widest uppercase text-luxury-ink/60">
            <a href="#about" className="hover:text-luxury-gold transition-colors">About</a>
            <a href="#specs" className="hover:text-luxury-gold transition-colors">Specs</a>
            <a href="#location" className="hover:text-luxury-gold transition-colors">Location</a>
            <a href={WHATSAPP_LINK} className="luxury-button !py-2 !px-6 flex items-center gap-2">
              <MessageCircle size={14} />
              <span>Konsultasi Gratis</span>
            </a>
          </div>

          <button className="md:hidden text-luxury-ink" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 z-40 bg-luxury-paper pt-24 px-6 md:hidden"
        >
          <div className="flex flex-col space-y-8 text-lg font-serif">
            <a href="#about" onClick={() => setIsMenuOpen(false)}>Tentang Kami</a>
            <a href="#specs" onClick={() => setIsMenuOpen(false)}>Spesifikasi</a>
            <a href="#location" onClick={() => setIsMenuOpen(false)}>Lokasi</a>
            <a href={WHATSAPP_LINK} className="text-luxury-gold font-sans font-bold flex items-center gap-2">
              <MessageCircle /> Konsultasi WhatsApp
            </a>
          </div>
        </motion.div>
      )}

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="/src/fascomansion/tampak depan.jpg" 
            alt="Fasco Mansion Exterior"
            className="w-full h-full object-cover brightness-[0.8]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-luxury-paper" />
        </motion.div>

        <div className="relative z-10 text-center max-w-4xl px-6">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-luxury-gold uppercase tracking-[0.5em] text-xs font-bold mb-6"
          >
            Villa Termewah di Jogja
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-serif text-5xl md:text-8xl text-white leading-none mb-8"
          >
            FASCO MANSION <br />
            <span className="serif-display text-luxury-gold/80 italic">Jogja</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-white/80 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto"
          >
            "Temukan Hunian Terbaik untuk Keluargamu. Villa Mewah Full Furnish dengan fasilitas sekelas resor bintang lima."
          </motion.p>
          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ delay: 0.8 }}
             className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="#contact" className="luxury-button flex items-center justify-center gap-2">
              Jadwalkan Survey <ArrowRight size={18} />
            </a>
            <a 
              href={WHATSAPP_LINK} 
              className="bg-white/10 backdrop-blur-sm border border-white/20 px-8 py-3 text-white font-semibold hover:bg-white/20 transition-all flex items-center justify-center gap-2"
            >
              <Phone size={18} /> Hubungi Dian Rini
            </a>
          </motion.div>
        </div>
      </section>

      {/* Services Bar */}
      <section className="bg-luxury-ink py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { icon: Home, title: "Jual Beli Rumah", desc: "Pemasaran properti eksklusif" },
            { icon: CreditCard, title: "Fasilitas KPR", desc: "Bantuan pengajuan KPR sampai cair" },
            { icon: MessageCircle, title: "Konsultasi Properti", desc: "Ekspertis pasar properti Jogja" }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              className="flex items-center gap-6"
            >
              <div className="w-16 h-16 rounded-full border border-luxury-gold/30 flex items-center justify-center text-luxury-gold">
                <item.icon size={28} />
              </div>
              <div>
                <h3 className="text-white font-serif text-lg tracking-wide uppercase">{item.title}</h3>
                <p className="text-white/40 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Main Details */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
          <div className="w-full lg:w-1/2 relative bg-luxury-ink aspect-[4/5] p-2 bg-luxury-gold/10">
             <div className="absolute -top-10 -left-10 w-40 h-40 border-l border-t border-luxury-gold/50 z-10" />
             <img 
               src="/src/fascomansion/Kolam Renang Dari sudut.jpg" 
               alt="Luxury Living Hall" 
               className="w-full h-full object-cover"
               referrerPolicy="no-referrer"
             />
             <div className="absolute bottom-8 right-8 bg-neutral-900 border border-luxury-gold/20 p-10 text-white shadow-2xl max-w-sm hidden md:block">
                <p className="text-xs uppercase tracking-widest text-luxury-gold mb-4">Investasi Berkelas</p>
                <h4 className="font-serif text-3xl italic mb-4">Siap Masuk & Siap Huni</h4>
                <p className="text-sm font-light leading-relaxed text-white/70">
                  Bangunan baru tahun 2022 dengan dokumen lengkap (Surat + IMB). Berlokasi strategis di Jl. Raya Palagan.
                </p>
             </div>
          </div>

          <div className="w-full lg:w-1/2">
            <h2 className="text-luxury-gold uppercase tracking-[0.3em] font-bold text-sm mb-6">FASCO MANSION RESIDENCE</h2>
            <h3 className="font-serif text-5xl text-luxury-ink mb-10 leading-tight">
              Hunian Modern yang Cocok untuk Segala Kebutuhan
            </h3>
            <p className="text-luxury-ink/70 leading-loose mb-12">
              Bukan sekadar rumah, properti ini dirancang dengan fleksibilitas tinggi. Sangat potensial untuk dijadikan <strong>Homestay, Reddoorz, Kantor, Cafe, Salon,</strong> atau <strong>Studio</strong> pribadi. Dengan luas bangunan impresif ±600m², Anda memiliki ruang lebih dari cukup untuk bermimpi.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-12">
              {stats.map((stat, i) => (
                <div key={i} className="border-b border-luxury-gold/20 pb-4">
                  <p className="text-xs uppercase text-luxury-ink/40 tracking-widest mb-1">{stat.label}</p>
                  <p className="text-2xl font-serif text-luxury-ink italic">{stat.value}</p>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-6 p-8 bg-luxury-gold/5 border border-luxury-gold/10">
              <Sparkles className="text-luxury-gold shrink-0" size={40} />
              <div>
                <p className="font-bold text-luxury-ink">Bonus Eksklusif</p>
                <p className="text-sm text-luxury-ink/60">Kitchen Set, 14 Unit AC, dan 5 Water Heater</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="specs" className="bg-white py-24 px-6 border-y border-luxury-gold/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-serif text-4xl text-luxury-ink mb-4 italic">Fasilitas Eksklusif</h2>
            <div className="w-20 h-px bg-luxury-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
            {features.map((feature, i) => (
              <motion.div 
                key={i}
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -20 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 group"
              >
                <div className="shrink-0 w-12 h-12 flex items-center justify-center bg-luxury-paper rounded-xl border border-luxury-gold/20 group-hover:bg-luxury-ink group-hover:text-white transition-all duration-300">
                  <feature.icon size={20} />
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-2 tracking-wide uppercase">{feature.title}</h4>
                  <p className="text-sm text-luxury-ink/50 leading-relaxed font-light">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Price Spotlight */}
      <section className="py-24 px-6 bg-luxury-ink relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-luxury-gold/5 -skew-x-12 translate-x-20" />
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="text-white">
            <p className="text-luxury-gold uppercase tracking-[0.5em] text-xs font-bold mb-4">Investasi Terpercaya</p>
            <h2 className="font-serif text-4xl md:text-6xl italic leading-tight">Penawaran Eksklusif</h2>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-12 border border-luxury-gold/30 text-center min-w-[320px]">
             <p className="text-luxury-gold uppercase text-[10px] tracking-[0.4em] mb-4 font-bold">Harga Penawaran</p>
             <div className="text-white font-serif text-6xl mb-6 tracking-tight">6,9<span className="text-2xl italic text-luxury-gold ml-1">Miliar</span></div>
             <p className="text-white/40 text-sm mb-10 italic">*Nego Langsung Pemilik</p>
             <a href={WHATSAPP_LINK} className="luxury-button w-full block">Ajukan Penawaran Sekarang</a>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-luxury-gold font-bold text-xs uppercase tracking-[0.4em]">Aksesibilitas Tinggi</span>
            <h2 className="font-serif text-5xl text-luxury-ink mt-6 mb-8 italic">Lokasi Sangat Strategis</h2>
            <p className="text-luxury-ink/60 leading-relaxed mb-10">
              Terletak di poros utama Jalan Raya Palagan - Jogja. Sebuah kawasan premium yang dikelilingi oleh pusat bisnis, restoran ternama, dan hotel berbintang.
            </p>
            
            <div className="space-y-6">
              {locations.map((loc, i) => (
                <div key={i} className="flex items-center justify-between py-4 border-b border-luxury-gold/10 group">
                  <div className="flex items-center gap-4">
                    <MapPin className="text-luxury-gold group-hover:scale-125 transition-transform" size={18} />
                    <span className="font-medium text-luxury-ink/80">{loc.name}</span>
                  </div>
                  <span className="text-xs uppercase tracking-widest font-bold text-luxury-gold">{loc.time}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 border border-luxury-gold/10 bg-white shadow-sm flex items-center gap-6">
              <Layers className="text-luxury-gold" size={32} />
              <p className="text-xs text-luxury-ink/50 uppercase tracking-widest leading-6 italic">
                Dekat dengan Kopi Klotok, UGM, Hyatt Hotel, dan Kawasan Wisata Malioboro.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] bg-luxury-ink transform rotate-2 absolute inset-0 -z-10 bg-luxury-gold/20" />
            <img 
               src="/src/fascomansion/depan rumah.jpg" 
               alt="Fasco Mansion Jogja" 
               className="w-full h-full object-cover shadow-2xl relative"
               referrerPolicy="no-referrer"
             />
             <div className="absolute -bottom-6 -right-6 bg-white p-6 shadow-xl border border-luxury-gold/10 max-w-[240px]">
                <p className="text-[10px] uppercase font-bold text-luxury-gold tracking-widest mb-2">Alamat Utama</p>
                <p className="text-sm font-serif italic text-luxury-ink">Jl. Raya Palagan No. 8-10, Ngaglik, Sleman, Yogyakarta</p>
             </div>
          </div>
        </div>
      </section>

      {/* Gallery Highlight */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-16 flex items-end justify-between">
           <div>
            <h2 className="font-serif text-5xl text-luxury-ink italic">Galeri Mansion</h2>
            <div className="w-24 h-1 bg-luxury-gold mt-4" />
           </div>
           <p className="text-xs uppercase tracking-[0.3em] font-extrabold text-luxury-gold/50 hidden md:block">Slide for details &bull; View 4K Photos</p>
        </div>

        <div className="flex overflow-x-auto gap-8 px-6 pb-12 snap-x no-scrollbar">
          {[
            { img: "/src/fascomansion/kolam renang.jpg", tag: "LUXURY POOL" },
            { img: "/src/fascomansion/ruang basket.jpg", tag: "SPORTS HALL" },
            { img: "/src/fascomansion/ruang musik.jpg", tag: "MUSIC STUDIO" },
            { img: "/src/fascomansion/Dapur .jpg", tag: "MODERN KITCHEN" },
            { img: "/src/fascomansion/kamar utama.jpg", tag: "MASTER SUITE" },
            { img: "/src/fascomansion/Ruang tamu.jpg", tag: "LIVING LOUNGE" },
            { img: "/src/fascomansion/kamar mandi anak.jpg", tag: "LUXURY BATHROOM" }
          ].map((item, i) => (
            <motion.div 
               key={i} 
               className="snap-center shrink-0 w-[85vw] md:w-[60vw] lg:w-[45vw] aspect-[4/3] relative group overflow-hidden"
            >
              <img src={item.img} alt={item.tag} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-linear-to-t from-luxury-ink/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <p className="absolute bottom-6 left-6 text-white font-serif italic text-2xl translate-y-4 group-hover:translate-y-0 transition-transform">{item.tag}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Survey & Contact Form */}
      <section id="contact" className="py-24 px-6 bg-luxury-paper">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
          <div className="w-full lg:w-1/2">
             <h2 className="font-serif text-5xl text-luxury-ink mb-10 italic">Jadwalkan Survey</h2>
             <div className="space-y-12">
               <div className="flex gap-6 items-start">
                 <div className="w-12 h-12 border border-luxury-gold rounded-full flex items-center justify-center shrink-0">
                    <span className="text-luxury-gold font-bold">01</span>
                 </div>
                 <div>
                   <h4 className="font-bold uppercase tracking-widest text-xs mb-2">Agent Terpercaya</h4>
                   <p className="font-serif text-2xl italic text-luxury-ink">Dian Rini</p>
                   <p className="text-luxury-ink/60 mt-1">Spesialis Properti Mewah Yogyakarta</p>
                 </div>
               </div>

               <div className="flex gap-6 items-start">
                 <div className="w-12 h-12 border border-luxury-gold rounded-full flex items-center justify-center shrink-0">
                    <span className="text-luxury-gold font-bold">02</span>
                 </div>
                 <div>
                   <h4 className="font-bold uppercase tracking-widest text-xs mb-2">WhatsApp Contact</h4>
                   <p className="font-serif text-2xl italic text-luxury-ink">0822-3483-7411</p>
                   <p className="text-luxury-ink/60 mt-1">Konsultasi gratis mengenai KPR & Legalitas</p>
                 </div>
               </div>

               <div className="pt-10 border-t border-luxury-gold/10">
                 <p className="text-sm italic text-luxury-ink/50 leading-relaxed max-w-md">
                   "Kami memastikan setiap tamu mendapatkan pelayanan personal. Silakan hubungi kami untuk mendapatkan detail brosur lengkap dan video property walkthrough."
                 </p>
               </div>
             </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="bg-white p-12 shadow-2xl border border-luxury-gold/10">
              <h3 className="font-serif text-3xl mb-8">Kirim Minat Anda</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-luxury-ink/40 mb-3">Nama Lengkap</label>
                  <input 
                    type="text" 
                    placeholder="Contoh: Budi Santoso"
                    className="w-full bg-luxury-paper border border-luxury-gold/20 px-6 py-4 focus:outline-none focus:border-luxury-gold transition-colors font-medium" 
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-luxury-ink/40 mb-3">Nomor WhatsApp</label>
                  <input 
                    type="tel" 
                    placeholder="Contoh: 081234567890"
                    className="w-full bg-luxury-paper border border-luxury-gold/20 px-6 py-4 focus:outline-none focus:border-luxury-gold transition-colors font-medium" 
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-luxury-ink/40 mb-3">Pesan Spesifik (Opsional)</label>
                  <textarea 
                    rows={4}
                    placeholder="Apa yang ingin Anda tanyakan?"
                    className="w-full bg-luxury-paper border border-luxury-gold/20 px-6 py-4 focus:outline-none focus:border-luxury-gold transition-colors font-medium resize-none" 
                  />
                </div>
                <button type="submit" className="luxury-button w-full">Hubungi Saya</button>
                <div className="text-center pt-4">
                  <span className="text-[10px] text-luxury-ink/40 uppercase tracking-widest font-bold flex items-center justify-center gap-2">
                    <CheckCircle2 size={12} className="text-luxury-gold" /> Data Aman & Terenkripsi
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-luxury-ink py-20 px-6 border-t border-luxury-gold/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-20">
          <div className="max-w-xs">
            <div className="flex flex-col mb-8">
              <span className="font-serif text-3xl tracking-widest text-white">FASCO MANSION</span>
              <span className="text-[12px] tracking-[0.3em] font-medium text-luxury-gold uppercase -mt-1">Residence Jogja</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed italic">
              Exclusive Luxury Residence in the heart of Palagan Road, Yogyakarta. Modern living meets strategic investment.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-20">
            <div>
              <h4 className="text-luxury-gold uppercase tracking-widest text-[10px] font-bold mb-6">Quick Links</h4>
              <ul className="space-y-4 text-white/60 text-sm font-medium">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About Property</a></li>
                <li><a href="#specs" className="hover:text-white transition-colors">Facilities</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact Agent</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-luxury-gold uppercase tracking-widest text-[10px] font-bold mb-6">Connect</h4>
              <ul className="space-y-4 text-white/60 text-sm font-medium">
                <li><a href={WHATSAPP_LINK} className="hover:text-white transition-colors">WhatsApp</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-20 flex flex-col md:flex-row justify-between items-center text-white/20 text-[10px] uppercase tracking-[0.4em] font-bold">
          <p>&copy; 2026 Fasco Mansion Residence Jogja. All Rights Reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <span className="hover:text-white/40 transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white/40 transition-colors cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
