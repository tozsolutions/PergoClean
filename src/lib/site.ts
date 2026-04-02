export const siteConfig = {
  name: 'PergoClean',
  description: 'Profesyonel pergola temizliği ve LED değişim hizmeti',
  url: 'https://www.pergoclean.com.tr',
  ogImage: 'https://www.pergoclean.com.tr/og.jpg',
  links: {
    instagram: 'https://www.instagram.com/pergoclean',
    tiktok: 'https://www.tiktok.com/@pergoclean',
    youtube: 'https://www.youtube.com/@pergoclean',
    pinterest: 'https://www.pinterest.com/pergoclean',
  },
  contact: {
    address: 'Timko İş Merkezi, Macun Mahallesi 177. Cadde V8 Kat 1, Yenimahalle/Ankara',
    phone: '+905367731404',
    phoneSecondary: '+905309550028',
    email: 'Merhaba@pergoclean.com.tr',
  },
  openingHours: {
    opens: '09:00',
    closes: '18:00',
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  },
};

export const navigationItems = [
  { label: 'Hizmetler', href: '#services' },
  { label: 'Fiyat Hesapla', href: '#price-calculator' },
  { label: 'Referanslar', href: '#portfolio' },
  { label: 'Blog', href: '/blog' },
  { label: 'SSS', href: '#faq' },
  { label: 'İletişim', href: '#contact' },
];

export const priceTiers = {
  hafif: { price: 200, label: 'Hafif Kirlilik' },
  orta: { price: 300, label: 'Orta Kirlilik' },
  yogun: { price: 400, label: 'Yoğun Kirlilik' },
};

export const stats = {
  customers: '500+',
  systems: '2000+',
  satisfaction: '%95',
};
