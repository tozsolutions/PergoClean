interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  light?: boolean;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = 'left',
  light = false,
}: SectionHeadingProps) {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <div className={`mb-16 ${alignClasses[align]}`}>
      {label && (
        <div className="text-xs font-bold uppercase tracking-widest mb-3 text-gray-500">
          {label}
        </div>
      )}
      <h2
        className={`text-5xl font-extrabold leading-tight ${
          light ? 'text-white' : 'text-gray-900'
        }`}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {subtitle && (
        <p
          className={`mt-4 text-base max-w-2xl ${
            light ? 'text-white/80' : 'text-gray-600'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
