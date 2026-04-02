'use client';

import { useState, useEffect } from 'react';
import { siteConfig, navigationItems } from '@/lib/site';

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setMobileMenuOpen(false);
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
              src="/assets/logos/PergoClean_Logo.png"
              alt="PergoClean Logo"
              className="h-14 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={`text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                  scrolled
                    ? 'text-gray-700 hover:text-teal-600'
                    : 'text-white hover:text-teal-300'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={siteConfig.links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-5 h-5 flex items-center justify-center transition-colors ${
                scrolled ? 'text-gray-700 hover:text-pink-600' : 'text-white hover:text-pink-300'
              }`}
            >
              <i className="ri-instagram-line text-lg"></i>
            </a>
            <a
              href={siteConfig.links.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-5 h-5 flex items-center justify-center transition-colors ${
                scrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white hover:text-gray-300'
              }`}
            >
              <i className="ri-tiktok-line text-lg"></i>
            </a>
            <a
              href={siteConfig.links.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-5 h-5 flex items-center justify-center transition-colors ${
                scrolled ? 'text-gray-700 hover:text-red-600' : 'text-white hover:text-red-300'
              }`}
            >
              <i className="ri-youtube-line text-lg"></i>
            </a>
            <a
              href={siteConfig.links.pinterest}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-5 h-5 flex items-center justify-center transition-colors ${
                scrolled ? 'text-gray-700 hover:text-red-700' : 'text-white hover:text-red-300'
              }`}
            >
              <i className="ri-pinterest-line text-lg"></i>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 ${scrolled ? 'text-gray-700' : 'text-white'}`}
          >
            <i className={`ri-${mobileMenuOpen ? 'close' : 'menu'}-line text-2xl`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-6 py-4 space-y-4">
            {navigationItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left text-base font-medium text-gray-700 hover:text-teal-600 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 border-t border-gray-100 flex items-center space-x-4">
              <a
                href={siteConfig.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center text-gray-700 hover:text-pink-600"
              >
                <i className="ri-instagram-line text-xl"></i>
              </a>
              <a
                href={siteConfig.links.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center text-gray-700 hover:text-gray-900"
              >
                <i className="ri-tiktok-line text-xl"></i>
              </a>
              <a
                href={siteConfig.links.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center text-gray-700 hover:text-red-600"
              >
                <i className="ri-youtube-line text-xl"></i>
              </a>
              <a
                href={siteConfig.links.pinterest}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center text-gray-700 hover:text-red-700"
              >
                <i className="ri-pinterest-line text-xl"></i>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
