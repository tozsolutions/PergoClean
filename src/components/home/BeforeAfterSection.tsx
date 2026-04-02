'use client';

import { useState, useRef, useCallback, useEffect } from 'react';

interface BeforeAfterItem {
  before: string;
  after: string;
  title: string;
  category: string;
}

const sliderData: BeforeAfterItem[] = [
  {
    before: '/assets/images/products/1_before.jpg',
    after: '/assets/images/products/cleaning_after.jpeg',
    title: 'Pergola Kumaş Temizliği',
    category: 'Derin Temizlik',
  },
  {
    before: '/assets/images/products/2_before.jpeg',
    after: '/assets/images/products/2_after.jpeg',
    title: 'LED Işık Değişimi',
    category: 'LED Bakım',
  },
  {
    before: '/assets/images/products/4_Before_rollingroof.jpeg',
    after: '/assets/images/products/4_After_rollingroof.jpeg',
    title: 'RollingRoof Temizlik',
    category: 'RollingRoof',
  },
];

function SingleSlider({ item }: { item: BeforeAfterItem }) {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current || !isDragging.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percent);
  }, []);

  const handleMouseDown = useCallback(() => {
    isDragging.current = true;
  }, []);

  const handleMouseUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      handleMove(e.clientX);
    },
    [handleMove]
  );

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      handleMove(e.touches[0].clientX);
    },
    [handleMove]
  );

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp, handleTouchMove]);

  return (
    <div className="group">
      <div
        ref={containerRef}
        className="relative w-full h-[340px] rounded-2xl overflow-hidden cursor-col-resize select-none shadow-md hover:shadow-xl transition-shadow duration-300"
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        {/* After Image (Background) */}
        <div className="absolute inset-0">
          <img
            src={item.after}
            alt={`${item.title} - Sonra`}
            className="w-full h-full object-cover object-top"
            draggable={false}
          />
        </div>

        {/* Before Image (Clipped) */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
        >
          <img
            src={item.before}
            alt={`${item.title} - Önce`}
            className="w-full h-full object-cover object-top"
            draggable={false}
          />
        </div>

        {/* Labels */}
        <div
          className="absolute top-4 left-4 px-3 py-1.5 rounded-lg text-xs font-bold text-white uppercase tracking-wider transition-opacity"
          style={{
            background: 'linear-gradient(135deg, #ef4444, #f97316)',
            opacity: sliderPos > 15 ? 1 : 0,
          }}
        >
          Önce
        </div>
        <div
          className="absolute top-4 right-4 px-3 py-1.5 rounded-lg text-xs font-bold text-white uppercase tracking-wider transition-opacity"
          style={{
            background: 'linear-gradient(135deg, #10b981, #14b8a6)',
            opacity: sliderPos < 85 ? 1 : 0,
          }}
        >
          Sonra
        </div>

        {/* Slider Line */}
        <div
          className="absolute top-0 bottom-0 w-[3px] bg-white/90 z-10"
          style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
        >
          {/* Handle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 bg-white rounded-full shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
            <div className="flex items-center gap-0.5">
              <i className="ri-arrow-left-s-line text-gray-700 text-base"></i>
              <i className="ri-arrow-right-s-line text-gray-700 text-base"></i>
            </div>
          </div>
        </div>

        {/* Gradient overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
      </div>

      {/* Info */}
      <div className="mt-4 flex items-center justify-between px-1">
        <div>
          <h4 className="text-base font-bold text-gray-900">{item.title}</h4>
          <span className="text-xs text-gray-500">{item.category}</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-teal-600 font-medium">
          <i className="ri-drag-move-2-line text-sm w-4 h-4 flex items-center justify-center"></i>
          Kaydırarak karşılaştır
        </div>
      </div>
    </div>
  );
}

export default function BeforeAfterSection() {
  return (
    <div className="mt-20">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-amber-50 text-amber-500">
          <i className="ri-contrast-2-line text-lg"></i>
        </div>
        <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">
          Önce / Sonra
        </span>
      </div>
      <h3 className="text-3xl font-extrabold text-gray-900 mb-3">
        Farkı Gözlerinizle Görün
      </h3>
      <p className="text-gray-500 text-sm mb-10 max-w-lg">
        Slider&apos;ı sürükleyerek temizlik öncesi ve sonrası arasındaki farkı keşfedin. Kumaşlarınız
        ilk günkü haline kavuşuyor.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {sliderData.map((item, index) => (
          <SingleSlider key={index} item={item} />
        ))}
      </div>
    </div>
  );
}
