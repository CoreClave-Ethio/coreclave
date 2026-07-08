# Deployment Guide - Coreclave Next.js

## Step 1: Set Up Supabase (Backend)

### 1.1 Create Supabase Project
1. Go to [https://supabase.com](https://supabase.com) and sign up/log in
2. Click **"New Project"**
3. Choose your organization, name it `coreclave`, and select a region (closest to your users)
4. Wait for the project to be created (takes ~2 minutes)

### 1.2 Get Your API Keys
1. Go to **Project Settings > API** in the left sidebar
2. Copy these values:
   - **Project URL**: `https://xxxxx.supabase.co`
   - **anon public key**: `eyJ...` (starts with `eyJ`)
   - **service_role key**: `eyJ...` (under **Service Role Key** — keep this secret!)

### 1.3 Run the Database Schema
1. In Supabase Dashboard, go to **SQL Editor** (left sidebar)
2. Click **"New query"**
3. Copy the entire contents of `supabase/schema.sql` from this project
4. Paste it in and click **Run**
5. Verify tables were created: go to **Database > Tables** and check `contacts`, `posts`, and `settings` exist

### 1.4 Create Admin User
1. Go to **Authentication > Users** (left sidebar)
2. Click **"Add user"** or **"Invite user"**
3. Enter:
   - Email: `admin@coreclave.com` (or your preferred email)
   - Password: A strong password (save this!)
4. Click **Create user**

### 1.5 (Optional) Enable Email Auth Provider
1. Go to **Authentication > Providers**
2. Make sure **Email** provider is enabled

---

## Step 2: Configure Environment Variables

### 2.1 Local Development
Create `.env.local` file in the project root:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-url.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
```

### 2.2 For Vercel Deployment (Web UI)
1. Go to your Vercel project dashboard
2. Click **Settings > Environment Variables**
3. Add these variables:
   - `NEXT_PUBLIC_SUPABASE_URL` = your Supabase URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = your anon key

> **Note:** `NEXT_PUBLIC_` prefix makes variables available in browser code. Never expose the service role key publicly!

---

## Step 3: Deploy to Vercel

### Option A: Vercel CLI (Recommended)

```bash
# Install Vercel CLI if not already installed
npm install -g vercel

# Login to Vercel
vercel login

# Navigate to project
cd coreclave-nextjs

# Deploy
vercel
```

Follow the prompts:
- Set up and deploy? **Yes**
- Link to existing project? Choose your project or create new
- Project name: `coreclave`
- Directory: `./` (current directory)

After first deploy, for subsequent deploys:
```bash
vercel --prod    # Production deploy
vercel            # Preview deploy
```

### Option B: GitHub Integration (Auto-deploy)

1. Push your code to a GitHub repository:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/coreclave.git
git push -u origin main
```

2. Go to [https://vercel.com/new](https://vercel.com/new)
3. Import your GitHub repository
4. Vercel will auto-detect Next.js
5. Add environment variables in the setup wizard
6. Click **Deploy**

Now every `git push` will automatically trigger a new deployment!

### Option C: Vercel Dashboard Manual Upload

1. Go to [https://vercel.com/new](https://vercel.com/new)
2. Select **"Import Git Repository"** or **"Upload"**
3. If uploading: zip the project folder (excluding `node_modules` and `.next`)
4. Drag and drop the zip file
5. Set project name and environment variables
6. Click **Deploy**

---

## Step 4: Configure Supabase for Production

### 4.1 Add Vercel Domain to Supabase Auth Redirects
1. Go to **Supabase Dashboard > Authentication > URL Configuration**
2. Set:
   - **Site URL**: `https://your-vercel-app.vercel.app` (your production URL)
   - **Redirect URLs**: Add `https://your-vercel-app.vercel.app/**`

### 4.2 Update Supabase Auth Settings
1. Go to **Authentication > Providers**
2. If using email auth, make sure:
   - **Enable email confirmations** is set as needed (disable for simpler setup)
   - **Secure email change** is configured

### 4.3 (Optional) Set Up Custom Domain
1. In Vercel: **Settings > Domains** > add your custom domain
2. In Supabase: update the Site URL to your custom domain
3. Update DNS records as instructed by Vercel

---

## Step 5: Build and Test Locally (Before Deploying)

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production (catches build errors)
npm run build

# If build succeeds, start production server
npm start
```

Test these URLs:
- `http://localhost:3000` - Homepage
- `http://localhost:3000/blog` - Blog page
- `http://localhost:3000/admin` - Should redirect to login (if not logged in)
- `http://localhost:3000/admin/login` - Admin login

---

## Troubleshooting

### Build fails with "Module not found"
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Supabase connection errors
- Check your `.env.local` or Vercel environment variables
- Verify the Supabase project is active (not paused)
- Check that RLS policies are set correctly (public can read published posts, insert contacts)

### Admin login not working
- Make sure you created the user in Supabase Auth
- Check browser console for errors
- Verify Supabase URL and anon key are correct
- If using email confirmation, check your email or disable it in Supabase Auth settings

### "use client" errors during build
- Components using `useState`, `useEffect`, or browser APIs must have `"use client"` at the top
- Server components (async functions) cannot use client hooks
- Wrap client-only libraries (like ReactMarkdown, framer-motion) in client components

### Images not loading
- Next.js Image component requires domain configuration
- We set `unoptimized: true` in `next.config.js` for easy deployment
- For production, configure domains in `next.config.js` or use the default

---

## Post-Deployment Checklist

- [ ] Homepage loads correctly with all sections
- [ ] Contact form submits to Supabase (check in Admin > Contacts)
- [ ] Blog posts display from Supabase (or fall back to sample data)
- [ ] Admin login works with Supabase Auth credentials
- [ ] Admin dashboard shows correct stats
- [ ] Can create/edit/publish blog posts from admin
- [ ] Contact submissions appear in admin contacts page
- [ ] Responsive design works on mobile
- [ ] All navigation links work
- [ ] No console errors in browser dev tools

---

## Useful Commands

```bash
# Development
npm run dev          # Start dev server on http://localhost:3000

# Building
npm run build        # Build for production
npm run start        # Start production server

# Linting
npm run lint         # Check for ESLint errors

# Vercel
vercel               # Deploy preview
vercel --prod        # Deploy to production
vercel logs          # View production logs
```

---

## Project Structure Reminder

```
coreclave-nextjs/
├── src/
│   ├── app/              # Next.js pages (App Router)
│   ├── components/        # UI components & sections
│   ├── lib/               # Supabase clients & utils
│   └── types/             # TypeScript types
├── supabase/
│   └── schema.sql         # Database schema (run in Supabase SQL Editor)
├── public/                # Static assets
├── .env.local             # Local environment variables (NOT committed)
├── .env.example           # Environment variable template
├── next.config.js         # Next.js configuration
├── tailwind.config.ts     # Tailwind CSS theme
├── vercel.json            # Vercel deployment config
└── package.json           # Dependencies
```

## Support

- **Vercel Docs**: [https://vercel.com/docs](https://vercel.com/docs)
- **Supabase Docs**: [https://supabase.com/docs](https://supabase.com/docs)
- **Next.js Docs**: [https://nextjs.org/docs](https://nextjs.org/docs)
- **Tailwind Docs**: [https://tailwindcss.com/docs](https://tailwindcss.com/docs)
