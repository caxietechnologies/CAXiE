import { createClient } from '@supabase/supabase-js';

const url = process.env.REACT_APP_SUPABASE_URL || process.env.SUPABASE_URL || '';
const key = process.env.REACT_APP_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY || '';

const looksValidUrl = typeof url === 'string' && /^https?:\/\//.test(url) && !/your_supabase_url_here/i.test(url);
const looksValidKey = typeof key === 'string' && key.length > 20 && !/your_supabase_anon_key_here/i.test(key);

const promise = (data) => Promise.resolve({ data, error: null });
const single = () => promise(null);

const makeThenable = (data) => ({
  then: (resolve) => resolve({ data, error: null }),
  catch: () => {},
  finally: (f) => { try { f(); } catch {} },
  single,
  order: () => makeThenable([]),
  limit: () => promise([]),
});

const tableApi = {
  select: () => tableApi,
  insert: () => promise(null),
  upsert: () => promise(null),
  eq: () => makeThenable([]),
  single,
  order: () => makeThenable([]),
  limit: () => promise([]),
};

const createMockClient = () => ({
  from: () => tableApi,
  auth: {
    getSession: () => Promise.resolve({ data: { session: null }, error: null }),
    getUser: () => Promise.resolve({ data: { user: null }, error: null }),
    onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
    signOut: () => Promise.resolve({ error: null }),
    signInWithPassword: () => Promise.resolve({ data: { session: null, user: null }, error: null }),
  },
});

let supabase;

if (!looksValidUrl || !looksValidKey) {
  // eslint-disable-next-line no-console
  console.warn('[supabase] Missing/invalid configuration. Set REACT_APP_SUPABASE_URL and REACT_APP_SUPABASE_ANON_KEY in a local .env file to connect to Supabase.');
  supabase = createMockClient();
} else {
  supabase = createClient(url, key, { auth: { persistSession: false } });
  // eslint-disable-next-line no-console
  console.log('[supabase] Supabase client initialized.');
}

export const isSupabaseConfigured = looksValidUrl && looksValidKey;
export { supabase };
export default supabase;
