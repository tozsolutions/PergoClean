'use client';

import SectionHeading from '@/components/layout/SectionHeading';

const testimonials = [
  {
    name: 'Mehmet Yılmaz',
    location: 'Çankaya, Ankara',
    text: 'Restoran Pergola RollingRoof BioClimatic Tente kumaşımız çok kirlenmişti. Değiştirmeyi düşünüyorduk ama PergoClean sayesinde hem para hem zaman kazandık. İlk günkü gibi oldu!',
    rating: 5,
    image: '/assets/images/references/customer-1.svg',
  },
  {
    name: 'Ayşe Demir',
    location: 'Keçiören, Ankara',
    text: 'Cafe Pergola RollingRoof BioClimatic Tente LED&apos;lerimiz yanıyordu. Hem temizlik hem LED değişimi yaptılar. Çok profesyonel bir ekip, kesinlikle tavsiye ederim.',
    rating: 5,
    image: '/assets/images/references/customer-2.svg',
  },
  {
    name: 'Can Öztürk',
    location: 'Yenimahalle, Ankara',
    text: 'WhatsApp üzerinden hızlıca iletişime geçtik. Aynı gün fiyat teklifi aldık, ertesi gün temizlik yapıldı. Harika bir hizmet!',
    rating: 5,
    image: '/assets/images/references/customer-3.svg',
  },
];

const instagramImages = [
  '/assets/images/portfolio/instagram-1.svg',
  '/assets/images/portfolio/instagram-2.svg',
  '/assets/images/portfolio/instagram-3.svg',
  '/assets/images/portfolio/instagram-4.svg',
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title="Müşterilerimiz Ne Diyor?"
          subtitle="Yüzlerce mutlu müşterimizden bazı yorumlar"
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-medium hover:shadow-large transition-all duration-300 border border-gray-100"
            >
              {/* Quote Icon */}
              <div className="text-amber-400 mb-4">
                <i className="ri-double-quotes-l text-5xl"></i>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <i key={i} className="ri-star-fill text-amber-400 text-lg"></i>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed mb-6 text-sm italic">
                &quot;{testimonial.text}&quot;
              </p>

              {/* Customer Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover object-top"
                />
                <div>
                  <div className="font-bold text-gray-900 text-base">{testimonial.name}</div>
                  <div className="text-gray-500 text-xs">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Feed */}
        <div className="mt-20">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">
              Instagram&apos;da Bizi Takip Edin
            </h3>
            <p className="text-gray-600 text-sm">@PergoClean - Güncel çalışmalarımızı görün</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {instagramImages.map((image, index) => (
              <a
                key={index}
                href="https://www.instagram.com/pergoclean"
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-square rounded-2xl overflow-hidden group cursor-pointer"
              >
                <img
                  src={image}
                  alt={`Instagram ${index + 1}`}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300"
                />
              </a>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="https://www.instagram.com/pergoclean"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-semibold text-sm hover:from-pink-600 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl whitespace-nowrap"
            >
              <i className="ri-instagram-line text-xl"></i>
              Instagram&apos;da Takip Et
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
