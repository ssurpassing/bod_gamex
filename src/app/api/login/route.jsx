// Import necessary modules
import { NextResponse } from 'next/server';
import { SignJWT } from 'jose'; // Import the SignJWT class from jose

const SECRET_KEY = new TextEncoder().encode('OnlineGame'); // Use TextEncoder to encode the secret key

export async function POST(request) {
  console.log('API login endpoint hit');

  let email, password;

  try {
    const body = await request.json();
    console.log('Request body:', body);
    email = body.email;
    password = body.password;
  } catch (error) {
    console.error('Error parsing request body:', error);
    return NextResponse.json({ success: false, message: 'Invalid request format' }, { status: 400 });
  }

  const correctEmail = process.env.ADMIN_ID;
  const correctPassword = process.env.ADMIN_PASSWORD;

  console.log('Login attempt with:', { email, password });
  console.log('Expected credentials:', { correctEmail, correctPassword });

  if (email === correctEmail && password === correctPassword) {
    try {
      // Create a JWT token
      const token = await new SignJWT({ email })
        .setProtectedHeader({ alg: 'HS256' }) // Set algorithm header
        .setExpirationTime('1d') // Token valid for 1 day
        .setIssuedAt() // Set the issued time
        .sign(SECRET_KEY);

      // Create a response object
      const response = NextResponse.json({ success: true, message: 'Login successful!' }, { status: 200 });

      // Set a cookie with the JWT token
      response.cookies.set('auth_token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', // Set to true in production
        maxAge: 60 * 60 * 24, // 1 day in seconds
        path: '/',
      });

      return response;
    } catch (error) {
      console.error('Error signing JWT:', error.message);
      console.error('Stack trace:', error.stack);
      return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 });
    }
  } else {
    return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 });
  }
}