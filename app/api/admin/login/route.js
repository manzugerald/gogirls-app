import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import sequelize from '@/app/config/database';
import Admin from '@/app/models/Admin';

export async function POST(request) {
  try {
    await sequelize.authenticate(); // Ensure DB is connected

    const { username, password } = await request.json();
    if (!username || !password) {
      return NextResponse.json({ error: 'Username and password are required' }, { status: 400 });
    }

    const admin = await Admin.findOne({ where: { username } });
    if (!admin) {
      return NextResponse.json({ error: 'Admin not found' }, { status: 404 });
    }

    const match = await bcrypt.compare(password, admin.password);
    if (!match) {
      return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
    }

    const token = Buffer.from(`${username}:${Date.now()}`).toString('base64');
    return NextResponse.json({ message: 'Login successful', token, admin: { id: admin.id, username: admin.username } }, { status: 200 });

  } catch (error) {
    console.error('Error in /api/admin/login:', error);
    return NextResponse.json({ error: 'Failed to login', details: error.message }, { status: 500 });
  }
}