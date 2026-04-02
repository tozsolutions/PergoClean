'use client';

import SectionHeading from '@/components/layout/SectionHeading';

const steps = [
  {
    number: '1',
    title: 'İletişim',
    description: 'WhatsApp, telefon veya web sitemizden bize ulaşın',
    icon: 'ri-phone-line',
  },
  {
    number: '2',
    title: 'Keşif & Fiyatlandırma',
    description:
      'Pergola RollingRoof BioClimatic Tente ölçülerinizi alıp size özel fiyat teklifi sunuyoruz',
    icon: 'ri-search-line',
  },
  {
    number: '3',
    title: 'Temizlik',
    description: 'Profesyonel ekibimiz yerinde temizlik işlemini gerçekleştiriyor',
    icon: 'ri-brush-line',
  },
  {
    number: '4',
    title: 'Teslim',
    description: 'Pergola RollingRoof BioClimatic Tente kumaşınız ilk günkü temizliğine kavuşuyor',
    icon: 'ri-check-double-line',
  },
];

export default function ProcessSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title="Nasıl Çalışıyoruz?"
          subtitle="Basit ve hızlı sürecimizle Pergola RollingRoof BioClimatic Tente temizliği artık çok kolay"
          align="center"
        />

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-200 via-teal-400 to-teal-200"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Number Circle */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center text-white text-2xl font-bold shadow-lg relative z-10">
                    {step.number}
                  </div>
                </div>

                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                    <i className={`${step.icon} text-2xl`}></i>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                </div>

                {/* Arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 -right-4 text-teal-400 z-20">
                    <i className="ri-arrow-right-line text-2xl"></i>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="https://wa.me/905367731404"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-green-500 text-white rounded-full font-semibold text-sm hover:bg-green-600 transition-all shadow-lg hover:shadow-xl whitespace-nowrap"
          >
            <i className="ri-whatsapp-line text-xl"></i>
            Hemen Başlayalım
          </a>
        </div>
      </div>
    </section>
  );
}
