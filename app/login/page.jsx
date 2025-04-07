'use client'; // Ensures the component is client-side

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter for navigation
import AdminLoginForm from './components/AdminLoginForm'; // Import the AdminLoginForm

export default function LoginPage() {
  const [userType, setUserType] = useState('admin'); // State to manage user type
  const router = useRouter(); // Initialize the router for navigation

  // Callback function to handle login result
  const handleLoginResult = (result) => {
    if (result.success) {
      // Redirect to the dashboard after successful login
      router.push('/dashboard'); 
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <div>
        <label>
          <input
            type="radio"
            value="admin"
            checked={userType === 'admin'}
            onChange={() => setUserType('admin')}
          />
          Admin
        </label>
        <label>
          <input
            type="radio"
            value="author"
            checked={userType === 'author'}
            onChange={() => setUserType('author')}
          />
          Author
        </label>
      </div>
      {userType === 'admin' && <AdminLoginForm onLogin={handleLoginResult} />} {/* Render the AdminLoginForm and pass onLogin callback */}
      {userType === 'author' && <p>Author login form will be here</p>} {/* Placeholder for AuthorLoginForm */}
    </div>
  );
}