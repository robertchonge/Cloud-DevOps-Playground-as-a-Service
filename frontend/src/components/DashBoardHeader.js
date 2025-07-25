import React from 'react';

export default function DashboardHeader() {
  return (
    <div className="flex items-center justify-between p-4 bg-blue-800 text-white rounded-lg mb-6">
      <h1 className="text-2xl font-bold">☁️ Cloud Playground</h1>
      <a href="/deploy" className="bg-green-500 px-4 py-2 rounded hover:bg-green-600">+ New Deployment</a>
    </div>
  );
}
