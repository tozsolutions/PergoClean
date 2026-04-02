import SectionHeading from '@/components/layout/SectionHeading';
import BeforeAfterSection from './BeforeAfterSection';

const services = [
  {
    icon: 'ri-brush-line',
    title: 'Derin Temizlik',
    description:
      'Pergola RollingRoof BioClimatic Tente kumaşlarınızdaki kir, yağ, duman ve buharlaşma kaynaklı atıkları profesyonel ekipmanlarla temizliyoruz. Kumaşın rengini bozmadan gerekli bakımı yapıyoruz.',
    color: 'text-teal-600',
  },
  {
    icon: 'ri-lightbulb-line',
    title: 'LED Bakım & Değişim',
    description:
      'Eskimiş veya hasar görmüş LED&apos;lerin değiştirilmesi hizmeti sunuyoruz. Tüm işlemleri kayıt altına alarak süreci güvenilir ve şeffaf bir şekilde tamamlıyoruz.',
    color: 'text-amber-500',
  },
  {
    icon: 'ri-palette-line',
    title: 'Renk Yenileme',
    description:
      'LED ışık renklendirme hizmetimizle Pergola RollingRoof BioClimatic Tente sistemlerinize yeni bir görünüm kazandırıyoruz. Farklı renk seçenekleriyle mekanınıza özel atmosfer yaratıyoruz.',
    color: 'text-teal-600',
  },
];

const advantages = [
  {
    icon: 'ri-percent-line',
    title: '%70-80 Tasarruf',
    description: 'Değiştirme yerine temizlik ile ekonomik çözüm',
  },
  {
    icon: 'ri-flask-line',
    title: 'Özel Kimyasal',
    description: 'PVC kaplı polyester teknik kumaşlara özel profesyonel uygulama',
  },
  {
    icon: 'ri-sparkling-line',
    title: 'Yağ, İz, Duman Temizliği',
    description: 'Kumaşınızı ilk günkü haline kavuşturuyoruz',
  },
  {
    icon: 'ri-shield-check-line',
    title: 'Yapı Koruması',
    description: 'Tüm işlemler yerinde yapılır, yapı korunur',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          label="HİZMETLERİMİZ"
          title="Neler<br />Yapıyoruz?"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-soft hover:shadow-large transition-all duration-300 border border-gray-100 group"
            >
              <div
                className={`w-16 h-16 flex items-center justify-center rounded-2xl bg-gray-50 mb-6 group-hover:scale-110 transition-transform ${service.color}`}
              >
                <i className={`${service.icon} text-3xl`}></i>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>

              <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                {service.description}
              </p>

              <button className="text-gray-700 font-medium text-sm hover:text-amber-600 transition-colors flex items-center gap-2 group whitespace-nowrap cursor-pointer">
                Detaylı Bilgi
                <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i>
              </button>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="mt-20 bg-teal-600 rounded-3xl p-12 text-white">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-8 text-center">Neden PergoClean?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                    <i className={`${advantage.icon} text-2xl text-amber-300`}></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-base">{advantage.title}</h4>
                    <p className="text-white/80 text-sm">{advantage.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Before/After Comparison Slider */}
        <BeforeAfterSection />
      </div>
    </section>
  );
}
