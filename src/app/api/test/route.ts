import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import { User } from '@/models/User.model';

export async function POST(req: NextRequest) {
  await connectDB();

  const bodyData = await req.json();

  return NextResponse.json(bodyData);
}
