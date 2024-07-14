
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export  const supabase = createClient( process.env.supabaseUrl as string  , process.env.supabase_Anon_Key as string)