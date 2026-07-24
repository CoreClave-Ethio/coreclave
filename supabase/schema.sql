-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Contacts table for form submissions
CREATE TABLE IF NOT EXISTS contacts (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'read', 'replied')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Blog posts table
CREATE TABLE IF NOT EXISTS posts (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  excerpt TEXT,
  content TEXT,
  cover_image TEXT,
  author TEXT NOT NULL DEFAULT 'Coreclave Team',
  tags TEXT[] DEFAULT '{}',
  status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Settings table for site configuration
CREATE TABLE IF NOT EXISTS settings (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  key TEXT NOT NULL UNIQUE,
  value TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Row Level Security Policies
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE settings ENABLE ROW LEVEL SECURITY;

-- Allow public insert on contacts (for contact form)
CREATE POLICY "Allow public insert on contacts" ON contacts
  FOR INSERT TO anon WITH CHECK (true);

-- Allow public read on published posts
CREATE POLICY "Allow public read published posts" ON posts
  FOR SELECT TO anon USING (status = 'published');

-- Allow authenticated users full access
CREATE POLICY "Allow authenticated full access on contacts" ON contacts
  FOR ALL TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Allow authenticated full access on posts" ON posts
  FOR ALL TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Allow authenticated full access on settings" ON settings
  FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers for updated_at
CREATE TRIGGER update_contacts_updated_at
  BEFORE UPDATE ON contacts
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_posts_updated_at
  BEFORE UPDATE ON posts
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_settings_updated_at
  BEFORE UPDATE ON settings
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Insert default settings
INSERT INTO settings (key, value) VALUES
  ('site_name', 'Coreclave'),
  ('tagline', 'Premium Software Solutions'),
  ('email', 'hello@coreclave.com'),
  ('phone', '+251 996 995 878'),
  ('address', 'Arada Sub City, Addis Ababa, Ethiopia')
ON CONFLICT (key) DO NOTHING;

-- Sample blog posts (optional seed data)
INSERT INTO posts (title, slug, excerpt, content, author, tags, status, published_at) VALUES
(
  'Building Scalable APIs with Node.js and Express',
  'building-scalable-apis-nodejs-express',
  'Learn how to design and build APIs that can handle millions of requests with proper architecture patterns.',
  '# Building Scalable APIs\n\nIn today''s digital landscape, APIs are the backbone of modern applications...',
  'Coreclave Team',
  ARRAY['Node.js', 'API', 'Backend'],
  'published',
  NOW() - INTERVAL '5 days'
),
(
  'The Future of React: Server Components Explained',
  'future-of-react-server-components',
  'Deep dive into React Server Components and how they change the way we build modern web applications.',
  '# The Future of React\n\nReact Server Components (RSC) represent a paradigm shift...',
  'Coreclave Team',
  ARRAY['React', 'Frontend', 'Web'],
  'published',
  NOW() - INTERVAL '10 days'
),
(
  'Cloud-Native Architecture Best Practices',
  'cloud-native-architecture-best-practices',
  'Essential patterns and practices for building resilient, scalable cloud-native applications.',
  '# Cloud-Native Architecture Best Practices\n\nCloud-native architecture is more than just running your application on cloud infrastructure...',
  'Coreclave Team',
  ARRAY['Cloud', 'AWS', 'DevOps'],
  'published',
  NOW() - INTERVAL '15 days'
)
ON CONFLICT (slug) DO NOTHING;

-- ==========================================
-- SUPABASE STORAGE FOR BLOG IMAGES
-- ==========================================

-- Create storage bucket for blog images (run this in Supabase Dashboard > SQL Editor)
-- Note: In Supabase, you can also create the bucket via Storage UI or use the storage.createBucket() API

-- Enable storage policies for blog-images bucket (after creating it in Supabase dashboard or via API)
-- Policies below assume the bucket 'blog-images' exists

-- To create bucket via SQL (if supported by your Supabase version):
-- INSERT INTO storage.buckets (id, name, public, avif_autodetection, file_size_limit, allowed_mime_types)
-- VALUES ('blog-images', 'blog-images', true, false, 5242880, ARRAY['image/png', 'image/jpeg', 'image/webp', 'image/gif'])
-- ON CONFLICT (id) DO NOTHING;

-- For public read access to images (anyone can view blog images)
-- CREATE POLICY "Allow public read access to blog-images" ON storage.objects
--   FOR SELECT TO anon USING (bucket_id = 'blog-images');

-- For authenticated users to upload images
-- CREATE POLICY "Allow authenticated uploads to blog-images" ON storage.objects
--   FOR INSERT TO authenticated WITH CHECK (bucket_id = 'blog-images');

-- For authenticated users to update/delete their own images
-- CREATE POLICY "Allow authenticated update/delete on blog-images" ON storage.objects
--   FOR ALL TO authenticated USING (bucket_id = 'blog-images') WITH CHECK (bucket_id = 'blog-images');
