'use client';

import { useState } from 'react';
import SectionHeading from '@/components/layout/SectionHeading';

const portfolioItems = [
  {
    id: 1,
    title: 'Villa Pergola Temizliği',
    category: 'Pergola Temizlik',
    location: 'Çankaya, Ankara',
    date: '2024',
    thumbnail: '/assets/images/portfolio/portfolio-1.svg',
  },
  {
    id: 2,
    title: 'Restoran RollingRoof',
    category: 'RollingRoof Temizlik',
    location: 'Keçiören, Ankara',
    date: '2024',
    thumbnail: '/assets/images/portfolio/portfolio-2.svg',
  },
  {
    id: 3,
    title: 'Cafe ZipPerde',
    category: 'ZipPerde Temizlik',
    location: 'Yenimahalle, Ankara',
    date: '2024',
    thumbnail: '/assets/images/portfolio/portfolio-3.svg',
  },
  {
    id: 4,
    title: 'Otel Bioclimatic',
    category: 'Bioclimatic Temizlik',
    location: 'Antalya',
    date: '2024',
    thumbnail: '/assets/images/portfolio/portfolio-4.svg',
  },
  {
    id: 5,
    title: 'Kafe Tente Temizliği',
    category: 'Tente Temizlik',
    location: 'Bodrum',
    date: '2024',
    thumbnail: '/assets/images/portfolio/portfolio-5.svg',
  },
  {
    id: 6,
    title: 'LED Değişim Projesi',
    category: 'LED Değişim',
    location: 'İstanbul',
    date: '2024',
    thumbnail: '/assets/images/portfolio/portfolio-6.svg',
  },
];

const categories = [
  'Tümü',
  'Pergola Temizlik',
  'Tente Temizlik',
  'Bioclimatic Temizlik',
  'RollingRoof Temizlik',
  'ZipPerde Temizlik',
  'LED Değişim',
];

export default function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState('Tümü');

  const filteredItems =
    selectedCategory === 'Tümü'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            Referans İşlerimiz
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-4">Tamamlanan Projeler</h2>
          <p className="text-gray-600 text-base max-w-2xl mx-auto">
            Pergola RollingRoof BioClimatic Tente temizliğinde başarılı projelerimizi inceleyin
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-teal-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-teal-300 hover:text-teal-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block px-3 py-1 bg-amber-400 text-gray-900 rounded-full text-xs font-bold mb-2">
                      {item.category}
                    </span>
                    <h3 className="text-white font-bold text-base mb-1">{item.title}</h3>
                    <p className="text-white/80 text-xs">{item.location}</p>
                  </div>
                </div>
              </div>
              {/* Info below card */}
              <div className="mt-3 px-1">
                <h3 className="font-semibold text-gray-900 text-sm group-hover:text-teal-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-xs mt-1">
                  {item.location} · {item.date}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-teal-600 text-white rounded-full font-semibold text-sm hover:bg-teal-700 transition-all shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer">
            <i className="ri-gallery-line text-lg"></i>
            Tüm Referansları Gör
          </button>
        </div>
      </div>
    </section>
  );
}
