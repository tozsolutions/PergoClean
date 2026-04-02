'use client';

import { useState } from 'react';
import SectionHeading from '@/components/layout/SectionHeading';
import { siteConfig } from '@/lib/site';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formDataToSend = new URLSearchParams();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('subject', formData.subject);
      formDataToSend.append('message', formData.message);

      const response = await fetch('/api/lead/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formDataToSend.toString(),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
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
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title="Hemen Başlayalım"
          subtitle="Pergola RollingRoof BioClimatic Tente temizliği için bugün bizimle iletişime geçin"
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-50 rounded-3xl p-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">İletişim Formu</h3>

            <form onSubmit={handleSubmit} data-readdy-form className="space-y-5">
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
                  className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 focus:border-teal-500 outline-none transition-colors text-sm"
                  placeholder="Adınız ve soyadınız"
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
                  className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 focus:border-teal-500 outline-none transition-colors text-sm"
                  placeholder="ornek@email.com"
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
                  className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 focus:border-teal-500 outline-none transition-colors text-sm"
                  placeholder="0555 555 55 55"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Konu
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 focus:border-teal-500 outline-none transition-colors text-sm cursor-pointer"
                >
                  <option value="">Konu Seçin</option>
                  <option value="Fiyat Teklifi">Fiyat Teklifi</option>
                  <option value="Randevu">Randevu</option>
                  <option value="LED Değişimi">LED Değişimi</option>
                  <option value="Genel Bilgi">Genel Bilgi</option>
                  <option value="Diğer">Diğer</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mesajınız
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  maxLength={500}
                  rows={4}
                  className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 focus:border-teal-500 outline-none transition-colors text-sm resize-none"
                  placeholder="Mesajınızı buraya yazın..."
                />
                <div className="text-xs text-gray-500 mt-1 text-right">
                  {(formData.message || '').length}/500
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-teal-600 text-white rounded-xl font-semibold text-sm hover:bg-teal-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {isSubmitting ? 'Gönderiliyor...' : 'Mesaj Gönder'}
              </button>

              {submitStatus === 'success' && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm">
                  <i className="ri-check-line mr-2"></i>
                  Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm">
                  <i className="ri-error-warning-line mr-2"></i>
                  Bir hata oluştu. Lütfen tekrar deneyin.
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">İletişim Bilgileri</h3>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center flex-shrink-0 rounded-xl bg-teal-50 text-teal-600">
                  <i className="ri-map-pin-line text-2xl"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1 text-base">Adres</h4>
                  <p className="text-gray-600 text-sm">
                    Timko İş Merkezi, Macun Mahallesi<br />
                    177. Cadde V8 Kat 1<br />
                    Yenimahalle/Ankara
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center flex-shrink-0 rounded-xl bg-green-50 text-green-600">
                  <i className="ri-whatsapp-line text-2xl"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1 text-base">WhatsApp</h4>
                  <a
                    href={`https://wa.me/${siteConfig.contact.phone.replace('+', '')}`}
                    className="text-gray-600 hover:text-green-600 transition-colors text-sm block"
                  >
                    {siteConfig.contact.phone}
                  </a>
                  <a
                    href={`https://wa.me/${siteConfig.contact.phoneSecondary.replace('+', '')}`}
                    className="text-gray-600 hover:text-green-600 transition-colors text-sm block"
                  >
                    {siteConfig.contact.phoneSecondary}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center flex-shrink-0 rounded-xl bg-blue-50 text-blue-600">
                  <i className="ri-mail-line text-2xl"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1 text-base">E-posta</h4>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center flex-shrink-0 rounded-xl bg-purple-50 text-purple-600">
                  <i className="ri-global-line text-2xl"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1 text-base">Web</h4>
                  <a
                    href={siteConfig.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-purple-600 transition-colors text-sm"
                  >
                    {siteConfig.url}
                  </a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-3xl overflow-hidden shadow-lg h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058.8!2d32.7!3d39.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDU3JzAwLjAiTiAzMsKwNDInMDAuMCJF!5e0!3m2!1str!2str!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="PergoClean Konum"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
