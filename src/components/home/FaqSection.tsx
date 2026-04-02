'use client';

import { useState } from 'react';
import SectionHeading from '@/components/layout/SectionHeading';

const faqs = [
  {
    question: 'Pergola RollingRoof BioClimatic Tente temizliği ne kadar sürer?',
    answer:
      'Sistem boyutuna göre değişmekle birlikte, ortalama bir Pergola RollingRoof BioClimatic Tente temizliği 2-4 saat arasında tamamlanır. Tüm işlemler yerinde yapılır, söküm gerektirmez.',
  },
  {
    question: 'Hangi tür kumaşları temizliyorsunuz?',
    answer:
      'PVC kaplı polyester teknik kumaşlar başta olmak üzere tüm Pergola RollingRoof BioClimatic Tente kumaş türlerini temizliyoruz. Özel kimyasallarımız kumaşın rengini ve yapısını bozmadan derin temizlik sağlar.',
  },
  {
    question: 'Fiyatlandırma nasıl yapılıyor?',
    answer:
      'Fiyatlandırma Pergola RollingRoof BioClimatic Tente boyutu (m²) ve kirlilik seviyesine göre belirlenir. Web sitemizden veya WhatsApp üzerinden ücretsiz fiyat teklifi alabilirsiniz.',
  },
  {
    question: 'LED değişimi de yapıyor musunuz?',
    answer:
      'Evet, Pergola RollingRoof BioClimatic Tente LED bakım ve değişim hizmetimiz bulunmaktadır. Eskimiş veya hasar görmüş LED&apos;leri değiştiriyor, renklendirme seçenekleri sunuyoruz.',
  },
  {
    question: 'Randevu nasıl alabilirim?',
    answer:
      'Web sitemizden randevu formunu doldurabilir, WhatsApp üzerinden +90 536 773 14 04 numarasından bize ulaşabilir veya telefon ile arayabilirsiniz.',
  },
  {
    question: 'Hangi bölgelere hizmet veriyorsunuz?',
    answer:
      'Ankara genelinde hizmet vermekteyiz. Özellikle Çankaya, Yenimahalle, Keçiören ve çevre ilçelerde aktif olarak çalışıyoruz. Diğer bölgeler için lütfen bizimle iletişime geçin.',
  },
  {
    question: 'Temizlik sonrası garanti var mı?',
    answer:
      'Evet, tüm temizlik işlemlerimiz için memnuniyet garantisi sunuyoruz. Eğer sonuçtan memnun kalmazsanız, ücretsiz olarak tekrar temizlik yapıyoruz.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading
          title="Sık Sorulan Sorular"
          subtitle="Merak ettiklerinizin cevapları burada"
          align="center"
        />

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-soft border border-gray-100 overflow-hidden hover:shadow-medium transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <h4 className="font-semibold text-gray-900 text-base pr-4">{faq.question}</h4>
                <div
                  className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-teal-50 text-teal-600 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                >
                  <i className="ri-arrow-down-s-line text-xl"></i>
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4 text-sm">Başka sorularınız mı var?</p>
          <a
            href="https://wa.me/905367731404"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-full font-semibold text-sm hover:bg-green-600 transition-all shadow-lg hover:shadow-xl whitespace-nowrap"
          >
            <i className="ri-whatsapp-line text-xl"></i>
            WhatsApp&apos;tan Sorun
          </a>
        </div>
      </div>
    </section>
  );
}
