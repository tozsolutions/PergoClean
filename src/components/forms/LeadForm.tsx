'use client';

import { useState, FormEvent, ChangeEvent } from 'react';

export interface FormData {
  [key: string]: string;
}

export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'number' | 'select' | 'textarea' | 'date';
  placeholder?: string;
  required?: boolean;
  options?: { value: string; label: string }[];
  min?: number;
  max?: number;
  step?: number;
  maxLength?: number;
  rows?: number;
}

interface LeadFormProps {
  fields: FormField[];
  endpoint: string;
  submitLabel: string;
  successMessage: string;
  errorMessage: string;
  className?: string;
  additionalInfo?: string;
}

export default function LeadForm({
  fields,
  endpoint,
  submitLabel,
  successMessage,
  errorMessage,
  className = '',
  additionalInfo,
}: LeadFormProps) {
  const [formData, setFormData] = useState<FormData>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formDataToSend = new URLSearchParams();
      fields.forEach((field) => {
        if (formData[field.name]) {
          formDataToSend.append(field.name, formData[field.name]);
        }
      });

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formDataToSend.toString(),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({});
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
    <form onSubmit={handleSubmit} data-readdy-form className={`space-y-6 ${className}`}>
      {fields.map((field) => (
        <div key={field.name}>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {field.label}
            {field.required && <span className="text-red-500 ml-1">*</span>}
          </label>

          {field.type === 'select' ? (
            <select
              name={field.name}
              value={formData[field.name] || ''}
              onChange={handleChange}
              required={field.required}
              className="w-full px-4 py-3 bg-white border-b-2 border-gray-300 focus:border-teal-600 outline-none transition-colors text-sm cursor-pointer"
            >
              <option value="">Seçiniz</option>
              {field.options?.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          ) : field.type === 'textarea' ? (
            <>
              <textarea
                name={field.name}
                value={formData[field.name] || ''}
                onChange={handleChange}
                required={field.required}
                maxLength={field.maxLength}
                rows={field.rows || 4}
                placeholder={field.placeholder}
                className="w-full px-4 py-3 bg-white border-b-2 border-gray-300 focus:border-teal-600 outline-none transition-colors text-sm resize-none"
              />
              {field.maxLength && (
                <div className="text-xs text-gray-500 mt-1 text-right">
                  {(formData[field.name] || '').length}/{field.maxLength}
                </div>
              )}
            </>
          ) : (
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name] || ''}
              onChange={handleChange}
              required={field.required}
              min={field.min}
              max={field.max}
              step={field.step}
              placeholder={field.placeholder}
              className="w-full px-4 py-3 bg-white border-b-2 border-gray-300 focus:border-teal-600 outline-none transition-colors text-sm"
            />
          )}
        </div>
      ))}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-semibold text-base hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
      >
        {isSubmitting ? 'Gönderiliyor...' : submitLabel}
      </button>

      {submitStatus === 'success' && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm">
          <i className="ri-check-line mr-2"></i>
          {successMessage}
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm">
          <i className="ri-error-warning-line mr-2"></i>
          {errorMessage}
        </div>
      )}

      {additionalInfo && (
        <p className="text-xs text-gray-500 italic text-center">{additionalInfo}</p>
      )}
    </form>
  );
}
