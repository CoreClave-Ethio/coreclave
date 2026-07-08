# Coreclave - Next.js + Supabase

A modern, beautiful website for Coreclave built with **Next.js 14**, **Tailwind CSS**, **Supabase**, and a stunning dark tech-blue theme inspired by the reference design.

## Features

### Public Pages
- **Home** - Hero with 3D floating elements, stats, services, about, portfolio, blog preview, contact CTA
- **About** - Company story, values, team
- **Services** - 6 service cards with detailed features
- **Portfolio** - 6 project showcases with tech stacks
- **Blog** - Full blog with Markdown support
- **Contact** - Contact form with info cards

### Admin Dashboard
- **Authentication** - Supabase Auth login
- **Dashboard** - Stats overview, recent contacts & posts
- **Contacts Manager** - View, filter, mark as read, delete submissions
- **Blog Manager** - Create, edit, publish/unpublish, delete posts
- **Settings** - Site configuration (UI ready, connect to Supabase)

### Design
- Dark navy/blue theme matching the Coreclave reference
- Gradient glow effects and glass morphism cards
- Floating geometric animations in hero
- Fully responsive design
- Lucide icons throughout

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Backend**: Supabase (Auth + Database + RLS)
- **UI Components**: Custom shadcn-style components
- **Animations**: Framer Motion
- **Markdown**: react-markdown
- **Icons**: Lucide React

## Setup

### 1. Install Dependencies
```bash
cd coreclave-nextjs
npm install
```

### 2. Create Supabase Project
1. Go to [supabase.com](https://supabase.com) and create a new project
2. Copy your Project URL and Anon Key from Settings > API
3. Create a service role key for admin operations (optional but recommended)

### 3. Configure Environment Variables
```bash
cp .env.example .env.local
```
Edit `.env.local` with your Supabase credentials:
```env
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

### 4. Run Database Schema
1. Go to Supabase Dashboard > SQL Editor
2. Copy the contents of `supabase/schema.sql`
3. Run the SQL to create tables, RLS policies, and seed data

### 5. Create Admin User
In Supabase Dashboard > Authentication > Users, create an admin user with:
- Email: `admin@coreclave.com`
- Password: your secure password

Or use the Supabase Auth API to sign up.

### 6. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.
Admin dashboard: [http://localhost:3000/admin](http://localhost:3000/admin)

## Database Schema

### Tables
- `contacts` - Contact form submissions
- `posts` - Blog posts with Markdown content
- `settings` - Site configuration

### Row Level Security (RLS)
- Public can: insert contacts, read published posts
- Authenticated users can: full CRUD on all tables

## Project Structure
```
src/
  app/              # Next.js App Router pages
  components/       # UI components + sections
  lib/              # Supabase clients + utils
  types/            # TypeScript types
supabase/
  schema.sql        # Database schema + seed data
public/
  images/           # Static images
```

## Deployment

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

Set environment variables in Vercel dashboard.

### Deploy to Netlify
```bash
npm install -g netlify-cli
netlify deploy --build
```

## Customization

- Edit colors in `tailwind.config.ts` under `theme.extend.colors.core`
- Update contact info in `src/app/contact/page.tsx` and `src/components/footer.tsx`
- Add real project images to `public/images/`
- Customize services in `src/components/services-section.tsx`

## License

MIT
"# coreclave" 
