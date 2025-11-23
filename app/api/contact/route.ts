import { NextResponse } from 'next/server';
import pool from '@/lib/db';
import { cookies } from 'next/headers';

// POST: Submit a new contact message
export async function POST(request: Request) {
  try {
    const { name, email, phone, message, honeypot } = await request.json();

    // 1. Honeypot Check (Anti-Spam)
    if (honeypot) {
      // Return fake success to confuse bots
      return NextResponse.json(
        { message: 'Message sent successfully' },
        { status: 201 }
      );
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Basic validation
    if (name.length > 100 || email.length > 100 || (phone && phone.length > 20)) {
        return NextResponse.json({ error: 'Input fields are too long.' }, { status: 400 });
    }

    const query = `
      INSERT INTO contact_messages (name, email, phone, message)
      VALUES (?, ?, ?, ?)
    `;

    await pool.execute(query, [name, email, phone || null, message]);

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Contact form error:', error);
    
    // Check if table doesn't exist
    if (error.code === 'ER_NO_SUCH_TABLE') {
        return NextResponse.json(
            { error: 'Database table not found. Please contact administrator.' },
            { status: 500 }
        );
    }

    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

// GET: Fetch all messages (Admin only)
export async function GET() {
  try {
    // 1. Security Check
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get('admin_session');
    const sessionSecret = process.env.SESSION_SECRET || 'complex-secret-key-change-this';

    if (!sessionCookie || sessionCookie.value !== sessionSecret) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const query = `
      SELECT id, name, email, phone, message, created_at
      FROM contact_messages
      ORDER BY created_at DESC
    `;

    const [rows] = await pool.query(query);

    return NextResponse.json(rows);
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
