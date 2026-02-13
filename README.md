# FASTORY - Personal Hub Website

A professional, bilingual personal website built with Astro and Tailwind CSS. Features a dark minimalist design and serves as a central hub linking to various subdomains.

## Features

- **Bilingual Support**: Full English and Russian translations with route-based i18n (`/en/`, `/ru/`)
- **Dark Professional Theme**: Cyan accent color (#06b6d4) on dark backgrounds
- **Responsive Design**: Mobile-first approach, works on all devices
- **Language Persistence**: User's language preference saved in localStorage
- **Static Site**: Fast, SEO-friendly, fully static HTML generation
- **Modern Stack**: Astro + Tailwind CSS + TypeScript

## Project Structure

```
├── public/
│   ├── _redirects          # Cloudflare Pages redirect (/ → /en)
│   └── favicon.svg         # Site favicon
├── src/
│   ├── components/
│   │   ├── Layout.astro    # Main layout with SEO
│   │   ├── Navbar.astro    # Navigation with language switcher
│   │   ├── Footer.astro    # Footer with social links
│   │   ├── LangSwitch.astro # Language switcher component
│   │   ├── Card.astro      # Reusable card component
│   │   └── Button.astro    # Button variants
│   ├── data/
│   │   ├── projects.en.ts  # English project data
│   │   └── projects.ru.ts  # Russian project data
│   ├── pages/
│   │   ├── en/             # English pages
│   │   │   ├── index.astro
│   │   │   ├── projects.astro
│   │   │   ├── about.astro
│   │   │   └── contact.astro
│   │   └── ru/             # Russian pages
│   │       ├── index.astro
│   │       ├── projects.astro
│   │       ├── about.astro
│   │       └── contact.astro
│   └── styles/
│       └── global.css      # Tailwind imports + custom styles
├── astro.config.mjs
├── tailwind.config.js
└── package.json
```

## Development

### Prerequisites

- Node.js 20.x or higher
- npm or yarn

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Available Scripts

- `npm run dev` - Start Astro development server
- `npm run build` - Build for production (includes type checking)
- `npm run preview` - Preview production build locally

## Pages

### Landing Page (`/en`, `/ru`)

- Hero section with name and positioning
- **Navigation cards** (primary feature):
  - Projects (internal)
  - Portfolio → https://portfolio.fastory.me
  - Notes → https://notes.fastory.me
  - Links → https://links.fastory.me
  - Contact (internal)
- Areas of focus highlights
- Featured projects preview

### Projects Page (`/en/projects`, `/ru/projects`)

- Grid of all project cards
- Each project shows:
  - Title and description
  - Technology tags
  - Status badge (Active, In Progress, Completed)
  - Optional link

### About Page (`/en/about`, `/ru/about`)

- Professional bio
- Technical stack (languages, tools, areas of practice)
- Currently learning section
- Intellectual interests (Jungian psychology, philosophy)

### Contact Page (`/en/contact`, `/ru/contact`)

- Email: prog@fastory.me
- Social links (GitHub, LinkedIn, Telegram)
- Portfolio link
- Open for collaboration section

## Design System

### Colors

- **Background**: `#0a0a0a`
- **Surface**: `#141414`
- **Border**: `#252525`
- **Text**: `#e5e5e5`
- **Muted Text**: `#a3a3a3`
- **Accent**: `#06b6d4` (Cyan/Teal)

### Typography

- **Font**: Inter (from Google Fonts)
- **Weights**: 400 (regular), 600 (semibold), 700 (bold), 800 (extrabold)

## Language Switching

The language switcher:

1. Detects current locale from URL path
2. Replaces `/en/` with `/ru/` (or vice versa) while preserving the rest of the path
3. Stores preference in `localStorage`
4. Automatically redirects on subsequent visits based on stored preference

Example: `/en/projects` → `/ru/projects`

## Deployment

### Cloudflare Pages

1. Connect your repository to Cloudflare Pages
2. Build command: `npm run build`
3. Output directory: `dist`
4. The `_redirects` file will handle root redirect: `/` → `/en`

### Other Platforms

The site is fully static and can be deployed to:

- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

Ensure the root redirect (`/` → `/en`) is configured according to the platform's requirements.

## Adding Content

### Adding a New Project

Edit the project data files:

**English** (`src/data/projects.en.ts`):
```typescript
{
  title: 'Your Project',
  description: 'Short description',
  tags: ['Tag1', 'Tag2'],
  status: 'Active',
  link: 'https://example.com', // optional
  featured: true // optional, shows on homepage
}
```

**Russian** (`src/data/projects.ru.ts`):
```typescript
{
  title: 'Ваш проект',
  description: 'Краткое описание',
  tags: ['Тег1', 'Тег2'],
  status: 'Активен',
  link: 'https://example.com',
  featured: true
}
```

### Updating Social Links

Edit the footer component (`src/components/Footer.astro`) and contact page to add real social media URLs.

## Architecture Decisions

### Why Simple Data Files Instead of Content Collections?

- **Simplicity**: No schema validation overhead for v1
- **Fast Development**: Direct TypeScript objects are easier to work with
- **Maintainability**: Easy to extend later if needed

### Why Folder-Based Routing Instead of Astro i18n Config?

- **Simplicity**: No complex configuration
- **Flexibility**: Full control over language switching logic
- **Clarity**: URL structure is explicit and easy to understand

### Why No Advanced SEO/OG Images/Sitemap for v1?

- **MVP Focus**: Basic meta tags are sufficient for v1
- **Easy Extension**: Can be added later without refactoring
- **Performance**: Fewer build steps = faster builds

## Future Enhancements

Potential additions for future versions:

- [ ] Sitemap generation
- [ ] OpenGraph images
- [ ] Blog/notes section
- [ ] RSS feed
- [ ] Dark/light theme toggle
- [ ] Advanced project filtering
- [ ] GitHub API integration for real project data
- [ ] Analytics integration

## License

Private project for personal use.

## Contact

- **Email**: prog@fastory.me
- **Website**: https://fastory.me
- **Portfolio**: https://portfolio.fastory.me

---

Built with ❤️ using Astro and Tailwind CSS
