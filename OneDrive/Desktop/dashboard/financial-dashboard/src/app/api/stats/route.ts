import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    purchases: '0.00 INR',
    redemptions: '0.00 INR',
    rejectedTransactions: '0.00 INR',
    sipRejections: '0.00 INR',
    newSIP: '0.00 INR',
  });
}