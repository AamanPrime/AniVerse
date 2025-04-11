import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function GET(request) {
  const authHeader = request.headers.get('authorization');
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return NextResponse.json({ admin: false, error: 'No token provided' }, { status: 401 });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.role === 'admin') {
      return NextResponse.json({ admin: true, user: decoded });
    } else {
      return NextResponse.json({ admin: false, error: 'Not an admin' }, { status: 403 });
    }

  } catch (err) {
    return NextResponse.json({ admin: false, error: 'Invalid token' }, { status: 401 });
  }
}
