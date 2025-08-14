'use client';

import React from 'react';


type CardProps = {
  title: string;
  value: string;
  momChange: string;
  positive?: boolean;
};

const MainCard = ({ title, value, momChange, positive = true }: CardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 w-full">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-gray-900 dark:text-white text-lg font-semibold">{title}</h2>
        <span
          className={`text-sm font-medium ${
            positive ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
          }`}
        >
          {momChange} MoM
        </span>
      </div>
      <div className="text-2xl font-bold text-gray-800 dark:text-gray-100">{value}</div>
      <button className="mt-4 text-blue-600 dark:text-blue-400 hover:underline text-sm">
        View Report
      </button>
    </div>

  );
};


export default function MainCardSection() {
  return (
     <section className="w-full px-4 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        <MainCard title="AUM" value="₹12.19 Cr" momChange="+0.77%" positive />
        <MainCard title="SIP" value="₹1.39 Lakh" momChange="+0.00%" positive />
      </div>
    </section>

  );
}