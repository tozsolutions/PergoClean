export function cn(...inputs: string[]) {
  return inputs.filter(Boolean).join(' ');
}

export function calculatePrice(
  width: number,
  length: number,
  dirtLevel: 'hafif' | 'orta' | 'yogun'
): number {
  const area = width * length;
  const pricePerSqm = {
    hafif: 200,
    orta: 300,
    yogun: 400,
  }[dirtLevel];

  return Math.round(area * pricePerSqm);
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('tr-TR', {
    style: 'currency',
    currency: 'TRY',
    minimumFractionDigits: 0,
  }).format(price);
}

export function formatDate(date: string): string {
  return new Intl.DateTimeFormat('tr-TR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date));
}
