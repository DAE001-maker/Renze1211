
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Capabilities from './components/Capabilities';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      <Header />
      <main>
        <Hero />
        <Products />
        <Capabilities />
        
        {/* Industry Focus Section */}
        <section id="industries" className="py-24 bg-black text-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Industries We Empower</h2>
                <p className="text-gray-400 max-w-xl">From delicate handicrafts to mass-produced food supplies, Renze provides the structural integrity and aesthetic appeal your brand deserves.</p>
              </div>
              <div className="hidden md:block h-px flex-grow bg-white/20 mx-12"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Gourmet Food", desc: "Tea, spices, and luxury snacks in hermetically sealed tubes.", img: "https://picsum.photos/seed/food/600/800" },
                { name: "Premium Electronics", desc: "Sleek, protective cylindrical casing for modern tech gadgets.", img: "https://picsum.photos/seed/tech/600/800" },
                { name: "Artisanal Crafts", desc: "Texture-rich, premium paper boxes for high-end boutique goods.", img: "https://picsum.photos/seed/art/600/800" }
              ].map((item, i) => (
                <div key={i} className="group relative h-[450px] overflow-hidden rounded-2xl">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                  <div className="absolute bottom-8 left-8 right-8">
                    <h3 className="text-2xl font-bold mb-2">{item.name}</h3>
                    <p className="text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ContactForm />
      </main>
      <Footer />
      <AIAssistant />

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 1.2s ease-out;
        }
      `}</style>
    </div>
  );
};

export default App;
