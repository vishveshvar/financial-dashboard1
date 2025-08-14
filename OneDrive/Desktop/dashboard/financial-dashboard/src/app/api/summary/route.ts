import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    aum: '₹12.19 Cr',
    sip: '₹1.39 Lakh',
    changeAUM: '0.77',
    changeSIP: '0.00',
  });
}