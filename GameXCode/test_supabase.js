// Test script to verify Supabase connection and data
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://pevunpbhupkhdrdvzemc.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBldnVucGJodXBraGRyZHZ6ZW1jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA0NzIzMzQsImV4cCI6MjA3NjA0ODMzNH0.5mS4IElCUD-jk1oOtl-gtN5sHwZnq5n7Vb5gY__xDEo'

const supabase = createClient(supabaseUrl, supabaseKey)

async function testConnection() {
  console.log('Testing Supabase connection...')

  try {
    // Test 1: Check categories table
    console.log('\n1. Testing categories table...')
    const { data: categories, error: catError } = await supabase
      .from('categories')
      .select('*')

    if (catError) {
      console.error('Categories error:', catError)
    } else {
      console.log('Categories found:', categories.length)
      if (categories.length > 0) {
        console.log('First category:', categories[0])
      }
    }

    // Test 2: Check games table
    console.log('\n2. Testing games table...')
    const { data: games, error: gameError } = await supabase
      .from('games')
      .select('*')
      .limit(5)

    if (gameError) {
      console.error('Games error:', gameError)
    } else {
      console.log('Games found:', games.length)
      if (games.length > 0) {
        console.log('First game:', games[0])
      }
    }

    // Test 3: Check admin_users table
    console.log('\n3. Testing admin_users table...')
    const { data: adminUsers, error: adminError } = await supabase
      .from('admin_users')
      .select('*')

    if (adminError) {
      console.error('Admin users error:', adminError)
    } else {
      console.log('Admin users found:', adminUsers.length)
      if (adminUsers.length > 0) {
        console.log('First admin user:', { ...adminUsers[0], password_hash: '[HIDDEN]' })
      }
    }

    // Test 4: Check environment variables
    console.log('\n4. Environment variables check:')
    console.log('ADMIN_ID:', process.env.ADMIN_ID || 'admin')
    console.log('ADMIN_PASSWORD:', process.env.ADMIN_PASSWORD || 'password')

    console.log('\n✅ Test completed!')

  } catch (error) {
    console.error('❌ Test failed:', error.message)
  }
}

testConnection()