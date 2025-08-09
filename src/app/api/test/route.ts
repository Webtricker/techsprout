import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import { User } from '@/Models/User.model';

export async function GET() {
  await connectDB();

  const user = await User.deleteOne({
    username: 'updatedUserName',
  });

  return NextResponse.json({
    user: user.deletedCount,
  });
}
