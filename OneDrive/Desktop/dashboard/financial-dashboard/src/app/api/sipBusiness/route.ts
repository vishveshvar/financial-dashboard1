import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    barData: [0.6, 1.2, 1.6, 2.4, 1.8, 2.0],
    lineData: [100, 110, 120, 130, 125, 140],
  });
}