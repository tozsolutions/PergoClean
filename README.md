# PergoClean Web

Professional pergola cleaning service website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Pixel-Perfect Design**: Matches reference designs with high fidelity
- **Responsive**: Mobile-first, works on all devices
- **SEO Optimized**: Meta tags, Open Graph, Schema.org markup
- **Performance**: Optimized images, code splitting, lazy loading
- **Forms**: Multiple lead capture forms with webhook integration
- **Before/After Slider**: Interactive comparison component
- **Price Calculator**: Real-time price estimation
- **Portfolio Gallery**: Filterable project showcase

##  Prerequisites

- Node.js 18.17 or later
- npm or yarn

## 🛠️ Installation

1. **Clone the repository** (or navigate to the project folder)

```bash
cd pergoclean-web
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

Edit `.env.local` with your configuration:

```env
NEXT_PUBLIC_SITE_URL=https://www.pergoclean.com.tr
NEXT_PUBLIC_COMPANY_NAME=PergoClean
QUOTE_WEBHOOK_URL=your-n8n-webhook-url
APPOINTMENT_WEBHOOK_URL=your-n8n-webhook-url
PHOTO_WEBHOOK_URL=your-n8n-webhook-url
CONTACT_WEBHOOK_URL=your-n8n-webhook-url
NOTIFICATION_EMAIL=Merhaba@pergoclean.com.tr
WHATSAPP_PRIMARY=905367731404
WHATSAPP_SECONDARY=905309550028
```

4. **Add assets**

Copy your logo and images to the `public/assets` folder:

```
public/
├── assets/
│   ├── logos/
│   │   └── PergoClean_Logo.png
│   ├── images/
│   │   ├── hero/
│   │   │   └── pergola-hero.jpg
│   │   ├── products/
│   │   │   ├── 1_before.jpg
│   │   │   ├── 1_after.jpg
│   │   │   └── ...
│   │   ├── portfolio/
│   │   └── references/
```

5. **Run the development server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the website.

## 📁 Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── lead/
│   │       ├── quote/
│   │       ├── appointment/
│   │       ├── photo/
│   │       └── contact/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── forms/
│   │   └── LeadForm.tsx
│   ├── home/
│   │   ├── BeforeAfterSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── DualLeadSection.tsx
│   │   ├── FaqSection.tsx
│   │   ├── HeroSection.tsx
│   │   ├── PortfolioSection.tsx
│   │   ├── PriceCalculatorSection.tsx
│   │   ├── ProcessSection.tsx
│   │   ├── ServicesSection.tsx
│   │   └── TestimonialsSection.tsx
│   └── layout/
│       ├── Container.tsx
│       ├── SectionHeading.tsx
│       ├── SiteFooter.tsx
│       └── SiteHeader.tsx
├── lib/
│   ├── site.ts
│   └── utils.ts
└── public/
    └── assets/
```

## 🎨 Design Tokens

### Colors

- **Primary**: `#0f1e42` (Dark Navy)
- **Accent**: `#0d9488` (Teal)
- **Gold**: `#f59e0b` (Amber)

### Typography

- **Sans**: Inter
- **Display**: Playfair Display

### Border Radius

- `xl`: 1rem (16px)
- `2xl`: 1.5rem (24px)
- `3xl`: 2rem (32px)

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

```bash
# Build locally to test
npm run build

# Start production server
npm start
```

### Docker

```bash
docker build -t pergoclean-web .
docker run -p 3000:3000 pergoclean-web
```

## 🔌 Webhook Integration

The API routes support webhook integration for automation tools like n8n:

### Quote Form Webhook

```json
{
  "width": "5",
  "length": "8",
  "dirtLevel": "orta",
  "name": "John Doe",
  "phone": "+905551234567",
  "email": "john@example.com",
  "estimatedPrice": "1200"
}
```

### Appointment Form Webhook

```json
{
  "name": "John Doe",
  "phone": "+905551234567",
  "email": "john@example.com",
  "date": "2024-04-15",
  "time": "14:00",
  "address": "Full address here"
}
```

## 📱 WhatsApp Integration

WhatsApp click-to-chat links are used throughout the site:

- Primary: `+90 536 773 14 04`
- Secondary: `+90 530 955 00 28`

## 🔍 SEO

The site includes:

- Meta title and description
- Open Graph tags
- Twitter Card tags
- Schema.org LocalBusiness markup
- XML sitemap
- robots.txt

## 📊 Performance

Key performance optimizations:

- Image optimization with Next.js Image
- CSS purging with Tailwind
- Code splitting
- Lazy loading
- Minimal JavaScript

## 🧪 Testing

```bash
# Run linting
npm run lint

# Build for production
npm run build
```

## 📝 Contact Information

- **Address**: Timko İş Merkezi, Macun Mahallesi 177. Cadde V8 Kat 1, Yenimahalle/Ankara
- **Phone**: +90 536 773 14 04 / +90 530 955 00 28
- **Email**: Merhaba@pergoclean.com.tr
- **Website**: https://www.pergoclean.com.tr

## 📄 License

This project is proprietary and confidential.

---

Built with ❤️ by PergoClean Team
