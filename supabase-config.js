import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const SUPABASE_URL = 'https://adyyqewxqxaexwezgvqj.supabase.co'
const SUPABASE_ANON_KEY = 'sb_publishable_ueq3KXEUVLeip8dLfG4sDg_D7KLzQ1a'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
