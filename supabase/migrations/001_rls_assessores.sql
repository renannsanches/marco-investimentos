-- Enable RLS on assessores table
ALTER TABLE assessores ENABLE ROW LEVEL SECURITY;

-- Public read: anyone (anon + authenticated) can list assessores for the public page
CREATE POLICY "assessores_select_public"
  ON assessores
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Insert: only authenticated users (admins logged in via Supabase Auth)
CREATE POLICY "assessores_insert_authenticated"
  ON assessores
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Update: only authenticated users
CREATE POLICY "assessores_update_authenticated"
  ON assessores
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Delete: only authenticated users
CREATE POLICY "assessores_delete_authenticated"
  ON assessores
  FOR DELETE
  TO authenticated
  USING (true);

-- Storage bucket: ensure assessores-images allows public read
-- Run this if the bucket was created without public access:
-- UPDATE storage.buckets SET public = true WHERE id = 'assessores-images';

-- Storage RLS: only authenticated users can upload/delete images
-- (These policies are set via Supabase Dashboard > Storage > Policies,
--  but documenting expected state here)
-- INSERT: authenticated only
-- SELECT: public (bucket is public)
-- DELETE: authenticated only
