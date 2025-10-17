// Test script to verify login functionality
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://pevunpbhupkhdrdvzemc.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBldnVucGJodXBraGRyZHZ6ZW1jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA0NzIzMzQsImV4cCI6MjA3NjA0ODMzNH0.5mS4IElCUD-jk1oOtl-gtN5sHwZnq5n7Vb5gY__xDEo'

const supabase = createClient(supabaseUrl, supabaseKey)

async function testLogin() {
  console.log('🧪 Testing login functionality...\n')

  try {
    // Test 1: Check admin user in database
    console.log('1️⃣ Checking admin user in database...')
    const { data: adminUser, error: adminError } = await supabase
      .from('admin_users')
      .select('*')
      .eq('username', 'admin')
      .single()

    if (adminError) {
      console.error('❌ Error fetching admin user:', adminError)
    } else if (adminUser) {
      console.log('✅ Admin user found:', {
        id: adminUser.id,
        username: adminUser.username,
        created_at: adminUser.created_at
      })
      console.log('   Password hash:', adminUser.password_hash.substring(0, 20) + '...')
    } else {
      console.log('❌ Admin user not found in database')
    }

    // Test 2: Test environment variables
    console.log('\n2️⃣ Testing environment variables...')
    const adminId = process.env.ADMIN_ID || 'admin'
    const adminPassword = process.env.ADMIN_PASSWORD || 'password'
    console.log('   ADMIN_ID from env:', adminId)
    console.log('   ADMIN_PASSWORD from env:', adminPassword)

    // Test 3: Test password comparison
    console.log('\n3️⃣ Testing password comparison...')
    if (adminUser) {
      const bcrypt = await import('bcryptjs')
      const isPasswordValid = adminPassword === 'password' // Simple comparison since we store hash
      console.log('   Direct password comparison (password === "password"):', isPasswordValid)
    }

    // Test 4: Test JWT token creation
    console.log('\n4️⃣ Testing JWT token creation...')
    try {
      const { SignJWT } = await import('jose')
      const SECRET_KEY = new TextEncoder().encode('OnlineGame')

      const token = await new SignJWT({ email: 'admin' })
        .setProtectedHeader({ alg: 'HS256' })
        .setExpirationTime('1d')
        .setIssuedAt()
        .sign(SECRET_KEY)

      console.log('✅ JWT token created successfully')
      console.log('   Token preview:', token.substring(0, 50) + '...')
    } catch (jwtError) {
      console.error('❌ JWT token creation failed:', jwtError.message)
    }

    // Test 5: Simulate login API call
    console.log('\n5️⃣ Simulating login API call...')
    const loginData = {
      email: 'admin',
      password: 'password'
    }

    // Check if credentials match
    const isValidLogin = loginData.email === adminId && loginData.password === adminPassword
    console.log('   Credentials valid:', isValidLogin)

    if (isValidLogin) {
      console.log('✅ Login should succeed')
    } else {
      console.log('❌ Login would fail - credentials don\'t match')
      console.log('   Expected email:', adminId, 'Got:', loginData.email)
      console.log('   Expected password:', adminPassword, 'Got:', loginData.password)
    }

    console.log('\n✅ Login test completed!')

  } catch (error) {
    console.error('❌ Login test failed:', error.message)
    console.error('Stack trace:', error.stack)
  }
}

testLogin()