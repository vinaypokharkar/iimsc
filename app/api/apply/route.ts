import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    
    const fullName = formData.get('fullName') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const position = formData.get('position') as string;
    const resumeFile = formData.get('resume') as File;
    const honeypot = formData.get('honeypot') as string;

    // 1. Honeypot Check (Anti-Spam)
    if (honeypot) {
      // Return fake success to confuse bots
      return NextResponse.json(
        { message: 'Application submitted successfully' },
        { status: 201 }
      );
    }

    if (!fullName || !email || !resumeFile || !position) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // 2. Server-Side Validation (Security & Integrity)
    
    // Validate Input Lengths (Prevent Buffer Overflows / DB Truncation)
    if (fullName.length > 100 || email.length > 100 || position.length > 100 || phone.length > 20) {
      return NextResponse.json({ error: 'Input fields are too long.' }, { status: 400 });
    }

    // Validate Email Format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email format.' }, { status: 400 });
    }

    // Validate File (Size & Type)
    const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
    const ALLOWED_TYPES = [
      'application/pdf', 
      'application/msword', 
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ];
    
    if (resumeFile.size > MAX_FILE_SIZE) {
      return NextResponse.json({ error: 'File size exceeds 5MB limit.' }, { status: 400 });
    }
    
    if (!ALLOWED_TYPES.includes(resumeFile.type)) {
      return NextResponse.json({ error: 'Invalid file type. Only PDF and Word documents are allowed.' }, { status: 400 });
    }

    // 3. Duplicate Check (Same Name + Same Email)
    const [existing] = await pool.execute(
      'SELECT id FROM applications WHERE full_name = ? AND email = ? LIMIT 1',
      [fullName, email]
    ) as any[];

    if (existing.length > 0) {
      return NextResponse.json(
        { error: 'We have already received your application.' },
        { status: 409 }
      );
    }

    // Convert file to buffer for database storage
    const bytes = await resumeFile.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Insert into database
    const query = `
      INSERT INTO applications 
      (full_name, email, phone, position, resume_filename, resume_data, resume_mimetype) 
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
      fullName,
      email,
      phone,
      position,
      resumeFile.name,
      buffer,
      resumeFile.type
    ];

    await pool.execute(query, values);

    return NextResponse.json(
      { message: 'Application submitted successfully' },
      { status: 201 }
    );

  } catch (error) {
    console.error('Application submission error:', error);
    return NextResponse.json(
      { error: 'Failed to submit application' },
      { status: 500 }
    );
  }
}
