import { siteConfig } from '@/lib/site';

const services = [
  'Pergola RollingRoof BioClimatic Tente Temizlik',
  'LED Değişimi',
  'Renklendirme',
  'Fiyat Hesaplama',
];

const company = [
  { label: 'Hakkımızda', href: '#' },
  { label: 'Referans İşlerimiz', href: '#portfolio' },
  { label: 'SSS', href: '#faq' },
  { label: 'İletişim', href: '#contact' },
];

export default function SiteFooter() {
  return (
    <footer className="bg-gradient-to-br from-teal-700 to-teal-600 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/assets/logos/PergoClean_Logo.png" alt="PergoClean" className="h-12 w-auto" />
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Türkiye&apos;nin en güvenilir Pergola RollingRoof BioClimatic Tente temizlik hizmeti.
              Ankara genelinde profesyonel çözümler sunuyoruz.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Hizmetler</h4>
            <ul className="space-y-2 text-sm">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-lg mb-4">Kurumsal</h4>
            <ul className="space-y-2 text-sm">
              {company.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-white/80 hover:text-white transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">İletişim</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <i className="ri-map-pin-line text-lg flex-shrink-0 mt-0.5"></i>
                <span className="text-white/80">
                  Timko İş Merkezi, Macun Mah.<br />
                  177. Cad. V8 Kat 1, Yenimahalle/Ankara
                </span>
              </li>
              <li className="flex items-center gap-2">
                <i className="ri-whatsapp-line text-lg"></i>
                <a
                  href={`https://wa.me/${siteConfig.contact.phone.replace('+', '')}`}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <i className="ri-mail-line text-lg"></i>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="border-t border-white/20 pt-8 pb-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-white/70">
              © {new Date().getFullYear()} PergoClean. Tüm hakları saklıdır.
            </div>

            <div className="flex items-center gap-4">
              <a
                href={siteConfig.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
              >
                <i className="ri-instagram-line text-xl"></i>
              </a>
              <a
                href={siteConfig.links.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
              >
                <i className="ri-tiktok-line text-xl"></i>
              </a>
              <a
                href={siteConfig.links.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
              >
                <i className="ri-youtube-line text-xl"></i>
              </a>
              <a
                href={siteConfig.links.pinterest}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
              >
                <i className="ri-pinterest-line text-xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
