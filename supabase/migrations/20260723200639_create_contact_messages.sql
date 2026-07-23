/*
# Create contact_messages table (single-tenant, no auth)

1. New Tables
- `contact_messages`
  - `id` (uuid, primary key)
  - `name` (text, not null) — sender's name
  - `email` (text, not null) — sender's email for replies
  - `message` (text, not null) — the message body
  - `read` (boolean, default false) — whether the portfolio owner has read it
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `contact_messages`.
- This is a no-auth portfolio site; any visitor can submit a message.
- Allow anon + authenticated INSERT (so the contact form works without login).
- Allow anon + authenticated SELECT so a future admin view could list messages.
- Updates and deletes are intentionally NOT granted to anon/authenticated to
  prevent visitors from altering or deleting submitted messages.

3. Notes
- The contact form on the portfolio writes to this table via the anon key.
- No sign-in flow is required or built.
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  read boolean NOT NULL DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_messages" ON contact_messages;
CREATE POLICY "anon_select_messages"
ON contact_messages FOR SELECT
TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_messages" ON contact_messages;
CREATE POLICY "anon_insert_messages"
ON contact_messages FOR INSERT
TO anon, authenticated WITH CHECK (true);
