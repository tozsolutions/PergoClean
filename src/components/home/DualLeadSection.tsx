'use client';

import { useState } from 'react';

export default function DualLeadSection() {
  const [photoFormData, setPhotoFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [appointmentFormData, setAppointmentFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    address: '',
  });
  const [photoSubmitStatus, setPhotoSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [appointmentSubmitStatus, setAppointmentSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');
  const [isPhotoSubmitting, setIsPhotoSubmitting] = useState(false);
  const [isAppointmentSubmitting, setIsAppointmentSubmitting] = useState(false);

  const handlePhotoSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsPhotoSubmitting(true);
    setPhotoSubmitStatus('idle');

    try {
      const formDataToSend = new URLSearchParams();
      formDataToSend.append('name', photoFormData.name);
      formDataToSend.append('phone', photoFormData.phone);
      formDataToSend.append('email', photoFormData.email);
      formDataToSend.append('message', photoFormData.message);

      const response = await fetch('/api/lead/photo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formDataToSend.toString(),
      });

      if (response.ok) {
        setPhotoSubmitStatus('success');
        setPhotoFormData({ name: '', phone: '', email: '', message: '' });
      } else {
        setPhotoSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setPhotoSubmitStatus('error');
    } finally {
      setIsPhotoSubmitting(false);
    }
  };

  const handleAppointmentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsAppointmentSubmitting(true);
    setAppointmentSubmitStatus('idle');

    try {
      const formDataToSend = new URLSearchParams();
      formDataToSend.append('name', appointmentFormData.name);
      formDataToSend.append('phone', appointmentFormData.phone);
      formDataToSend.append('email', appointmentFormData.email);
      formDataToSend.append('date', appointmentFormData.date);
      formDataToSend.append('time', appointmentFormData.time);
      formDataToSend.append('address', appointmentFormData.address);

      const response = await fetch('/api/lead/appointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formDataToSend.toString(),
      });

      if (response.ok) {
        setAppointmentSubmitStatus('success');
        setAppointmentFormData({
          name: '',
          phone: '',
          email: '',
          date: '',
          time: '',
          address: '',
        });
      } else {
        setAppointmentSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setAppointmentSubmitStatus('error');
    } finally {
      setIsAppointmentSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Photo Upload Card */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-10 shadow-lg">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 flex items-center justify-center rounded-2xl bg-blue-500 text-white">
                <i className="ri-camera-line text-4xl"></i>
              </div>
            </div>

            <h3 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              Fotoğraf Gönderin
            </h3>
            <p className="text-gray-600 text-sm text-center mb-8">
              Pergola fotoğraflarınızı gönderin, size özel analiz ve fiyat teklifi alın
            </p>

            <form onSubmit={handlePhotoSubmit} data-readdy-form className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={photoFormData.name}
                  onChange={(e) => setPhotoFormData({ ...photoFormData, name: e.target.value })}
                  required
                  placeholder="Adınız Soyadınız"
                  className="w-full px-4 py-3 bg-white rounded-xl border border-blue-200 focus:border-blue-500 outline-none transition-colors text-sm"
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  value={photoFormData.phone}
                  onChange={(e) => setPhotoFormData({ ...photoFormData, phone: e.target.value })}
                  required
                  placeholder="Telefon Numaranız"
                  className="w-full px-4 py-3 bg-white rounded-xl border border-blue-200 focus:border-blue-500 outline-none transition-colors text-sm"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={photoFormData.email}
                  onChange={(e) => setPhotoFormData({ ...photoFormData, email: e.target.value })}
                  required
                  placeholder="E-posta Adresiniz"
                  className="w-full px-4 py-3 bg-white rounded-xl border border-blue-200 focus:border-blue-500 outline-none transition-colors text-sm"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={photoFormData.message}
                  onChange={(e) => setPhotoFormData({ ...photoFormData, message: e.target.value })}
                  maxLength={500}
                  placeholder="Sistem / kumaş durumu hakkında notunuz (opsiyonel)"
                  rows={3}
                  className="w-full px-4 py-3 bg-white rounded-xl border border-blue-200 focus:border-blue-500 outline-none transition-colors text-sm resize-none"
                />
                <div className="text-xs text-gray-500 mt-1 text-right">
                  {(photoFormData.message || '').length}/500
                </div>
              </div>

              <button
                type="submit"
                disabled={isPhotoSubmitting}
                className="w-full py-4 bg-blue-500 text-white rounded-xl font-semibold text-sm hover:bg-blue-600 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {isPhotoSubmitting ? 'Gönderiliyor...' : 'Fotoğraf Talebi Gönder'}
              </button>

              {photoSubmitStatus === 'success' && (
                <div className="p-3 bg-green-50 border border-green-200 rounded-lg text-green-800 text-xs">
                  <i className="ri-check-line mr-2"></i>
                  Talebiniz alındı! WhatsApp üzerinden fotoğraf gönderme linki iletilecek.
                </div>
              )}

              {photoSubmitStatus === 'error' && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-800 text-xs">
                  <i className="ri-error-warning-line mr-2"></i>
                  Bir hata oluştu. Lütfen tekrar deneyin.
                </div>
              )}

              <p className="text-xs text-gray-500 italic text-center">
                Fotoğraflarınız otomatik işlenir ve size WhatsApp&apos;tan geri dönüş yapılır
              </p>
            </form>
          </div>

          {/* Appointment Card */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-10 shadow-lg">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 flex items-center justify-center rounded-2xl bg-green-500 text-white">
                <i className="ri-calendar-check-line text-4xl"></i>
              </div>
            </div>

            <h3 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              Hemen Randevu Alın
            </h3>
            <p className="text-gray-600 text-sm text-center mb-8">
              Size uygun tarih ve saatte pergola temizliği için randevu oluşturun
            </p>

            <form onSubmit={handleAppointmentSubmit} data-readdy-form className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={appointmentFormData.name}
                  onChange={(e) =>
                    setAppointmentFormData({ ...appointmentFormData, name: e.target.value })
                  }
                  required
                  placeholder="Adınız Soyadınız"
                  className="w-full px-4 py-3 bg-white rounded-xl border border-green-200 focus:border-green-500 outline-none transition-colors text-sm"
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  value={appointmentFormData.phone}
                  onChange={(e) =>
                    setAppointmentFormData({ ...appointmentFormData, phone: e.target.value })
                  }
                  required
                  placeholder="Telefon Numaranız"
                  className="w-full px-4 py-3 bg-white rounded-xl border border-green-200 focus:border-green-500 outline-none transition-colors text-sm"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={appointmentFormData.email}
                  onChange={(e) =>
                    setAppointmentFormData({ ...appointmentFormData, email: e.target.value })
                  }
                  required
                  placeholder="E-posta Adresiniz"
                  className="w-full px-4 py-3 bg-white rounded-xl border border-green-200 focus:border-green-500 outline-none transition-colors text-sm"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="date"
                  name="date"
                  value={appointmentFormData.date}
                  onChange={(e) =>
                    setAppointmentFormData({ ...appointmentFormData, date: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 bg-white rounded-xl border border-green-200 focus:border-green-500 outline-none transition-colors text-sm cursor-pointer"
                />
                <select
                  name="time"
                  value={appointmentFormData.time}
                  onChange={(e) =>
                    setAppointmentFormData({ ...appointmentFormData, time: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 bg-white rounded-xl border border-green-200 focus:border-green-500 outline-none transition-colors text-sm cursor-pointer"
                >
                  <option value="">Saat</option>
                  <option value="09:00">09:00</option>
                  <option value="10:00">10:00</option>
                  <option value="11:00">11:00</option>
                  <option value="13:00">13:00</option>
                  <option value="14:00">14:00</option>
                  <option value="15:00">15:00</option>
                  <option value="16:00">16:00</option>
                </select>
              </div>
              <div>
                <textarea
                  name="address"
                  value={appointmentFormData.address}
                  onChange={(e) =>
                    setAppointmentFormData({ ...appointmentFormData, address: e.target.value })
                  }
                  required
                  maxLength={500}
                  placeholder="Adres Bilgisi"
                  rows={3}
                  className="w-full px-4 py-3 bg-white rounded-xl border border-green-200 focus:border-green-500 outline-none transition-colors text-sm resize-none"
                />
                <div className="text-xs text-gray-500 mt-1 text-right">
                  {(appointmentFormData.address || '').length}/500
                </div>
              </div>

              <button
                type="submit"
                disabled={isAppointmentSubmitting}
                className="w-full py-4 bg-green-500 text-white rounded-xl font-semibold text-sm hover:bg-green-600 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {isAppointmentSubmitting ? 'Gönderiliyor...' : 'Randevu Oluştur'}
              </button>

              {appointmentSubmitStatus === 'success' && (
                <div className="p-3 bg-green-50 border border-green-200 rounded-lg text-green-800 text-xs">
                  <i className="ri-check-line mr-2"></i>
                  Randevunuz oluşturuldu! E-posta ve WhatsApp ile onay gönderilecek.
                </div>
              )}

              {appointmentSubmitStatus === 'error' && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-800 text-xs">
                  <i className="ri-error-warning-line mr-2"></i>
                  Bir hata oluştu. Lütfen tekrar deneyin.
                </div>
              )}

              <p className="text-xs text-gray-500 italic text-center">
                Randevunuz otomatik olarak e-posta ve WhatsApp ile onaylanır
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
