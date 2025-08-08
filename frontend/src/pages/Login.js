import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await login(formData);
      navigate('/dashboard');
    } catch (error) {
      setError(error.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={containerStyle}>
      <div style={formContainerStyle}>
        <div style={headerStyle}>
          <h2>Login to EngineersHub</h2>
          <p>Welcome back! Please sign in to your account.</p>
        </div>

        {error && (
          <div style={errorStyle}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} style={formStyle}>
          <div style={formGroupStyle}>
            <label style={labelStyle}>Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={inputStyle}
              placeholder="Enter your email"
              required
            />
          </div>

          <div style={formGroupStyle}>
            <label style={labelStyle}>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              style={inputStyle}
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              ...submitButtonStyle,
              backgroundColor: loading ? '#6c757d' : '#007bff'
            }}
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <div style={footerStyle}>
          <p>
            Don't have an account?{' '}
            <Link to="/register" style={linkStyle}>
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

// Styles
const containerStyle = {
  minHeight: '100vh',
  backgroundColor: '#f8f9fa',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1rem'
};

const formContainerStyle = {
  backgroundColor: 'white',
  padding: '3rem',
  borderRadius: '12px',
  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  width: '100%',
  maxWidth: '400px'
};

const headerStyle = {
  textAlign: 'center',
  marginBottom: '2rem'
};

const errorStyle = {
  backgroundColor: '#f8d7da',
  color: '#721c24',
  padding: '0.75rem',
  borderRadius: '6px',
  marginBottom: '1rem',
  textAlign: 'center'
};

const formStyle = {
  width: '100%'
};

const formGroupStyle = {
  marginBottom: '1.5rem'
};

const labelStyle = {
  display: 'block',
  marginBottom: '0.5rem',
  fontWeight: '600',
  color: '#2c3e50'
};

const inputStyle = {
  width: '100%',
  padding: '0.75rem',
  border: '2px solid #dee2e6',
  borderRadius: '6px',
  fontSize: '1rem',
  transition: 'border-color 0.3s'
};

const submitButtonStyle = {
  width: '100%',
  padding: '0.75rem',
  border: 'none',
  borderRadius: '6px',
  fontSize: '1rem',
  fontWeight: '600',
  color: 'white',
  cursor: 'pointer',
  transition: 'background-color 0.3s'
};

const footerStyle = {
  textAlign: 'center',
  marginTop: '2rem',
  paddingTop: '2rem',
  borderTop: '1px solid #dee2e6'
};

const linkStyle = {
  color: '#007bff',
  textDecoration: 'none'
};

export default Login;