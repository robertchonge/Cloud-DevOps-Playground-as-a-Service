import React from 'react';

export default function CloudCard({ name, status, region }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-xl">
      <h2 className="text-lg font-semibold text-blue-700">{name}</h2>
      <p>Status: <span className={status === 'Running' ? 'text-green-600' : 'text-red-500'}>{status}</span></p>
      <p className="text-gray-500 text-sm">Region: {region}</p>
    </div>
  );
}
