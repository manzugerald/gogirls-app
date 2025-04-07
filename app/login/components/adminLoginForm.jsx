'use client'; // Ensures the component is client-side

import { useState, useCallback } from 'react';

const AdminLoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      if (isLoading) return;

      setIsLoading(true);
      setMessage('');

      try {
        const response = await fetch('/api/admin/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        });

        const text = await response.text();
        console.log('Raw response from /api/admin/login:', text);
        console.log('Response status:', response.status);
        console.log('Response headers:', Object.fromEntries(response.headers.entries()));

        let data;
        try {
          data = JSON.parse(text);
        } catch (jsonError) {
          console.error('Failed to parse JSON:', jsonError);
          throw new Error(`Invalid server response: ${text} (status: ${response.status})`);
        }

        if (!response.ok) {
          throw new Error(data.error || `Login failed with status: ${response.status}`);
        }

        setMessage(data.message);
        localStorage.setItem('token', data.token);
        localStorage.setItem('admin', JSON.stringify(data.admin));

        // Call the onLogin callback with success
        onLogin({ success: true, message: 'Login and Authentication Successful' });
      } catch (error) {
        setMessage(error.message || 'An error occurred during login');
        console.error('Login error:', error);
        // Call the onLogin callback with failure
        onLogin({ success: false, message: error.message || 'Login Failed' });
      } finally {
        setIsLoading(false);
      }
    },
    [username, password, isLoading, onLogin]
  );

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.heading}>Admin Login</h2>
        <div style={styles.inputGroup}>
          <label htmlFor="username" style={styles.label}>Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
            required
            disabled={isLoading}
          />
          <small style={styles.hint}>Enter your admin username.</small>
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="password" style={styles.label}>Password:</label>
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
            disabled={isLoading}
          />
          <small style={styles.hint}>Your password must be at least 6 characters.</small>
        </div>
        <div style={styles.passwordToggle}>
          <label style={styles.toggleLabel}>
            <input
              type="checkbox"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
              style={styles.toggleCheckbox}
              disabled={isLoading}
            />
            Show Password
          </label>
        </div>
        <button
          type="submit"
          style={{
            ...styles.button,
            ...(isLoading ? { opacity: 0.7, cursor: 'not-allowed' } : {}),
          }}
          disabled={isLoading}
        >
          {isLoading ? 'Logging in...' : 'Login'}
        </button>
      </form>
      {message && (
        <p
          style={{
            ...styles.message,
            color: message.includes('error') ? 'red' : 'green',
          }}
        >
          {message}
        </p>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f4f7fc',
    fontFamily: 'Arial, sans-serif',
  },
  form: {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '400px',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '24px',
    color: '#333',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'inline-block',
    marginRight: '10px',
    fontSize: '14px',
    color: '#555',
    verticalAlign: 'top',
  },
  input: {
    width: 'calc(100% - 120px)',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box',
    transition: 'border 0.3s ease',
  },
  hint: {
    display: 'block',
    fontSize: '12px',
    color: '#888',
    marginTop: '5px',
  },
  passwordToggle: {
    marginBottom: '15px',
  },
  toggleLabel: {
    fontSize: '14px',
    color: '#555',
    cursor: 'pointer',
  },
  toggleCheckbox: {
    marginRight: '5px',
  },
  button: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  message: {
    textAlign: 'center',
    marginTop: '15px',
    fontSize: '14px',
  },
};

export default AdminLoginForm;