import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://pevunpbhupkhdrdvzemc.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBldnVucGJodXBraGRyZHZ6ZW1jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA0NzIzMzQsImV4cCI6MjA3NjA0ODMzNH0.5mS4IElCUD-jk1oOtl-gtN5sHwZnq5n7Vb5gY__xDEo'

// Create a single supabase client for interacting with your database
export const supabase = createClient(supabaseUrl, supabaseKey)

// For backward compatibility and easier migration
export const app = supabase
export const auth = supabase.auth
export const db = supabase
export const rtdb = supabase
