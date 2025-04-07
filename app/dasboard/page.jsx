// app/dashboard/page.jsx
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const Dashboard = () => {
  const [admin, setAdmin] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const storedAdmin = localStorage.getItem('admin');

    if (!token) {
      router.push('/login');
      return;
    }

    if (storedAdmin) {
      setAdmin(JSON.parse(storedAdmin));
    } else {
      router.push('/login');
    }
  }, [router]);

  if (!admin) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Welcome, {admin.username}! (ID: {admin.id})</p> // Changed to admin.id
    </div>
  );
};

export default Dashboard;