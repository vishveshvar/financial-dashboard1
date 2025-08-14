import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const range = searchParams.get('range') || '7';

  const mockData: Record<string, number[]> = {
    '3': [12000, 13000, 12500],
    '7': [14000, 15000, 16000],
    '10': [17000, 16500, 18000],
    '30': [19000, 20000, 21000],
  };

  const labels = ['Day 1', 'Day 2', 'Day 3'];

  return new Response(
    JSON.stringify({
      labels,
      data: mockData[range] || mockData['7'],
    }),
    {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    }
  );
}