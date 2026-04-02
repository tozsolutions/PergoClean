'use client';

import { useState } from 'react';
import SectionHeading from '@/components/layout/SectionHeading';
import { calculatePrice, formatPrice } from '@/lib/utils';

export default function PriceCalculatorSection() {
  const [formData, setFormData] = useState({
    width: '',
    length: '',
    dirtLevel: 'orta',
    name: '',
    phone: '',
    email: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const estimatedPrice =
    formData.width && formData.length
      ? calculatePrice(parseFloat(formData.width), parseFloat(formData.length), formData.dirtLevel as 'hafif' | 'orta' | 'yogun')
      : null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formDataToSend = new URLSearchParams();
      formDataToSend.append('width', formData.width);
      formDataToSend.append('length', formData.length);
      formDataToSend.append('dirtLevel', formData.dirtLevel);
      formDataToSend.append('name', formData.name);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('email', formData.email);
      if (estimatedPrice) {
        formDataToSend.append('estimatedPrice', estimatedPrice.toString());
      }

      const response = await fetch('/api/lead/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formDataToSend.toString(),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ width: '', length: '', dirtLevel: 'orta', name: '', phone: '', email: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="price-calculator" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 rounded-3xl overflow-hidden shadow-large">
          {/* Left Side - Dark */}
          <div className="lg:col-span-2 bg-gradient-to-br from-gray-900 to-gray-800 p-12 flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-bold text-white mb-4 leading-tight">
                Anında Fiyat<br />Hesaplayın
              </h2>
              <p className="text-white/80 text-base mb-12">
                Pergola RollingRoof BioClimatic Tente ölçülerinizi girin, hemen fiyat teklifi alın
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="text-5xl font-bold text-amber-400">500+</div>
                  <div className="text-white text-sm">Mutlu<br />Müşteri</div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-5xl font-bold text-amber-400">2000+</div>
                  <div className="text-white text-sm">Temizlenen<br />Pergola</div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-5xl font-bold text-amber-400">%95</div>
                  <div className="text-white text-sm">Memnuniyet<br />Oranı</div>
                </div>
              </div>

              {estimatedPrice && (
                <div className="mt-8 p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
                  <p className="text-white/70 text-sm mb-2">Tahmini Fiyat</p>
                  <p className="text-3xl font-bold text-amber-400">{formatPrice(estimatedPrice)}</p>
                </div>
              )}
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="flex items-center gap-3 text-white/60 text-xs">
                <i className="ri-shield-check-line text-xl text-amber-400"></i>
                <span>Güvenli ve hızlı fiyat teklifi</span>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="lg:col-span-3 bg-gray-50 p-12">
            {/* Price Info Banner */}
            <div className="mb-8 p-4 bg-amber-50 rounded-xl border border-amber-200">
              <div className="flex items-start gap-3">
                <i className="ri-information-line text-amber-600 text-xl flex-shrink-0"></i>
                <div className="text-sm text-amber-800">
                  <p className="font-semibold mb-1">Fiyat Bilgileri:</p>
                  <ul className="space-y-1">
                    <li>• Hafif Kirlilik: 200 TL/m²</li>
                    <li>• Orta Kirlilik: 300 TL/m²</li>
                    <li>• Yoğun Kirlilik: 400 TL/m²</li>
                  </ul>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} data-readdy-form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Genişlik (m)
                  </label>
                  <input
                    type="number"
                    name="width"
                    value={formData.width}
                    onChange={(e) => setFormData({ ...formData, width: e.target.value })}
                    required
                    step="0.1"
                    min="0"
                    className="w-full px-4 py-3 bg-white border-b-2 border-gray-300 focus:border-teal-600 outline-none transition-colors text-sm"
                    placeholder="Örn: 5"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Uzunluk (m)
                  </label>
                  <input
                    type="number"
                    name="length"
                    value={formData.length}
                    onChange={(e) => setFormData({ ...formData, length: e.target.value })}
                    required
                    step="0.1"
                    min="0"
                    className="w-full px-4 py-3 bg-white border-b-2 border-gray-300 focus:border-teal-600 outline-none transition-colors text-sm"
                    placeholder="Örn: 8"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Kirlilik Seviyesi
                </label>
                <select
                  name="dirtLevel"
                  value={formData.dirtLevel}
                  onChange={(e) => setFormData({ ...formData, dirtLevel: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-white border-b-2 border-gray-300 focus:border-teal-600 outline-none transition-colors text-sm cursor-pointer"
                >
                  <option value="hafif">Hafif Kirlilik (200 TL/m²)</option>
                  <option value="orta">Orta Kirlilik (300 TL/m²)</option>
                  <option value="yogun">Yoğun Kirlilik (400 TL/m²)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Adınız Soyadınız
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-white border-b-2 border-gray-300 focus:border-teal-600 outline-none transition-colors text-sm"
                  placeholder="Adınız ve soyadınız"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Telefon
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-white border-b-2 border-gray-300 focus:border-teal-600 outline-none transition-colors text-sm"
                  placeholder="0555 555 55 55"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  E-posta
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-white border-b-2 border-gray-300 focus:border-teal-600 outline-none transition-colors text-sm"
                  placeholder="ornek@email.com"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-semibold text-base hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {isSubmitting ? 'Gönderiliyor...' : 'Fiyat Teklifi Al'}
              </button>

              {submitStatus === 'success' && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm">
                  <i className="ri-check-line mr-2"></i>
                  Talebiniz başarıyla alındı! WhatsApp ve e-posta ile size ulaşacağız.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm">
                  <i className="ri-error-warning-line mr-2"></i>
                  Bir hata oluştu. Lütfen tekrar deneyin.
                </div>
              )}

              <p className="text-xs text-gray-500 italic text-center">
                n8n otomasyonu ile anında WhatsApp ve e-posta ile fiyat teklifiniz iletilir
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
