import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';

export async function GET() {
  const db = await connectDB();
  return NextResponse.json(db.connection.host);
}
