import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();

    // Use environment variables for credentials
    const adminUser = process.env.ADMIN_USERNAME;
    const adminPass = process.env.ADMIN_PASSWORD;
    const sessionSecret = process.env.SESSION_SECRET || 'complex-secret-key-change-this';

    if (!adminUser || !adminPass) {
      return NextResponse.json(
        { success: false, message: 'Server misconfiguration: Missing admin credentials' },
        { status: 500 }
      );
    }

    if (username === adminUser && password === adminPass) {
      const cookieStore = await cookies();
      
      // Set a secure, HTTP-only cookie
      // We use the sessionSecret as the value to verify against
      cookieStore.set('admin_session', sessionSecret, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24, // 1 day
        path: '/',
      });

      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 });
  }
}
