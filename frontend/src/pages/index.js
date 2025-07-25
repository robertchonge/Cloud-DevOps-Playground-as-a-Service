import React, { useEffect, useState } from 'react';
import DashboardHeader from '../components/DashboardHeader';
import CloudCard from '../components/CloudCard';
import Spinner from '../components/Spinner';

export default function Home() {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/resources')
      .then(res => res.json())
      .then(data => {
        setResources(data);
        setLoading(false);
      });
  }, []);

  return (
    <main className="p-6">
      <DashboardHeader />
      {loading ? (
        <div className="flex justify-center p-10"><Spinner /></div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {resources.map(res => (
            <CloudCard key={res.id} {...res} />
          ))}
        </div>
      )}
    </main>
  );
}
