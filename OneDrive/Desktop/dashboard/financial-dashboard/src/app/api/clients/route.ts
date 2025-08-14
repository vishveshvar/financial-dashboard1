import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    bubbles: [
      { x: 10, y: 20, r: 15 },
      { x: 30, y: 10, r: 10 },
      { x: 25, y: 30, r: 20 },
      { x: 40, y: 25, r: 12 },
    ],
  });
}