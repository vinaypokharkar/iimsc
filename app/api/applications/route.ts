import { NextResponse } from 'next/server';
import pool from '@/lib/db';
import { cookies } from 'next/headers';

export async function GET() {
  try {
    // 1. Security Check
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get('admin_session');
    const sessionSecret = process.env.SESSION_SECRET || 'complex-secret-key-change-this';

    if (!sessionCookie || sessionCookie.value !== sessionSecret) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // 2. Fetch Data
    // We try to select created_at, if it doesn't exist, the query might fail.
    // But assuming standard schema. If not, we can remove it.
    // We exclude resume_data (BLOB) to keep the response light.
    const query = `
      SELECT id, full_name, email, phone, position, resume_filename, created_at 
      FROM applications 
      ORDER BY id DESC
    `;
    
    const [rows] = await pool.query(query);

    return NextResponse.json(rows);
  } catch (error: any) {
    console.error('Database error:', error);
    
    // Fallback if created_at doesn't exist
    if (error.code === 'ER_BAD_FIELD_ERROR') {
       try {
         const fallbackQuery = `
          SELECT id, full_name, email, phone, position, resume_filename 
          FROM applications 
          ORDER BY id DESC
        `;
        const [rows] = await pool.query(fallbackQuery);
        return NextResponse.json(rows);
       } catch (retryError) {
         return NextResponse.json({ error: 'Database error' }, { status: 500 });
       }
    }

    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
