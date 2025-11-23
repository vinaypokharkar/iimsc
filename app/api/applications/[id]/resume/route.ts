import { NextResponse } from 'next/server';
import pool from '@/lib/db';
import { cookies } from 'next/headers';

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    // 1. Security Check
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get('admin_session');
    const sessionSecret = process.env.SESSION_SECRET || 'complex-secret-key-change-this';

    if (!sessionCookie || sessionCookie.value !== sessionSecret) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;
    const { searchParams } = new URL(request.url);
    const isView = searchParams.get('view') === 'true';

    // 2. Fetch Resume Data
    const [rows] = await pool.query(
      'SELECT resume_data, resume_mimetype, resume_filename FROM applications WHERE id = ?',
      [id]
    ) as any[];

    if (rows.length === 0) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }

    const file = rows[0];
    
    // Ensure we have a buffer
    const buffer = file.resume_data;
    const disposition = isView ? 'inline' : 'attachment';

    // 3. Return File
    return new NextResponse(buffer, {
      headers: {
        'Content-Type': file.resume_mimetype,
        'Content-Disposition': `${disposition}; filename="${file.resume_filename}"`,
      },
    });

  } catch (error) {
    console.error('Download error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
