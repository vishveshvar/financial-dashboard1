'use client';

const ranges = ['3 Days', '7 Days', '10 Days', '30 Days'];

export default function FilterBar() {
  return (
    <div className="flex gap-2 flex-wrap">
      {ranges.map((range) => (
        <button
          key={range}
          className="bg-blue-100 hover:bg-blue-200 px-3 py-1 rounded text-sm"
        >
          {range}
        </button>
      ))}
    </div>
  );
}