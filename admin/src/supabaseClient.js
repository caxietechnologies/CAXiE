// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || process.env.SUPABASE_URL || '';
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY || '';

const looksValidUrl = typeof supabaseUrl === 'string' && /^https?:\/\//.test(supabaseUrl) && !/your_supabase_url_here/i.test(supabaseUrl);
const looksValidKey = typeof supabaseAnonKey === 'string' && supabaseAnonKey.length > 20 && !/your_supabase_anon_key_here/i.test(supabaseAnonKey);

if (!looksValidUrl || !looksValidKey) {
  // eslint-disable-next-line no-console
  console.warn('[admin/supabase] Missing/invalid configuration. Add REACT_APP_SUPABASE_URL and REACT_APP_SUPABASE_ANON_KEY to your environment to connect to Supabase.');
}

export const supabase = looksValidUrl && looksValidKey
  ? createClient(supabaseUrl, supabaseAnonKey, { auth: { persistSession: false } })
  : { auth: { getSession: () => Promise.resolve({ data: { session: null }, error: null }), getUser: () => Promise.resolve({ data: { user: null }, error: null }), onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }), signOut: () => Promise.resolve({ error: null }), signInWithPassword: () => Promise.resolve({ data: { session: null, user: null }, error: null }), }, from: () => ({ select: () => ({ eq: () => ({ order: () => ({ limit: () => Promise.resolve({ data: [], error: null }) }) }), single: () => Promise.resolve({ data: null, error: null }), order: () => ({ limit: () => Promise.resolve({ data: [], error: null }) }) }), insert: () => Promise.resolve({ data: null, error: null }), upsert: () => Promise.resolve({ data: null, error: null }), delete: () => Promise.resolve({ data: null, error: null }), update: () => Promise.resolve({ data: null, error: null }) }) });