import { useState } from 'react';

export default function Deploy() {
  const [form, setForm] = useState({ name: '', cloud: 'AWS', region: 'us-east-1' });
  const [message, setMessage] = useState(null);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await fetch('/api/deploy', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    const result = await res.json();
    setMessage(result.message);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4">🚀 Launch New Cloud Resource</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" onChange={handleChange} placeholder="Resource Name" required className="w-full p-2 border rounded" />
        <select name="cloud" onChange={handleChange} className="w-full p-2 border rounded">
          <option value="AWS">AWS</option>
          <option value="Azure">Azure</option>
          <option value="GCP">GCP</option>
        </select>
        <input name="region" onChange={handleChange} placeholder="Region (e.g. us-west-1)" className="w-full p-2 border rounded" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Deploy</button>
        {message && <p className="text-green-600">{message}</p>}
      </form>
    </div>
  );
    }
