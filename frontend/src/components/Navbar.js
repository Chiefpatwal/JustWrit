import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav style={navStyle}>
      <div style={navContainer}>
        <div>
          <Link to="/" style={logoStyle}>
             JUSTWRIT
          </Link>
        </div>
        <div style={navLinks}>
          {isAuthenticated ? (
            <>
              <span style={welcomeStyle}>
                Welcome, {user?.username}!
              </span>
              <Link to="/dashboard" style={linkStyle}>
                Dashboard
              </Link>
              <Link to="/upload" style={linkStyle}>
                Upload
              </Link>
              <button onClick={handleLogout} style={logoutButtonStyle}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" style={linkStyle}>
                Login
              </Link>
              <Link to="/register" style={linkStyle}>
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

// Styles
const navStyle = {
  backgroundColor: '#2c3e50',
  color: 'white',
  padding: '1rem 0',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
};

const navContainer = {
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 1rem'
};

const logoStyle = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '1.5rem',
  fontWeight: 'bold'
};

const navLinks = {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem'
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  padding: '0.5rem 1rem',
  borderRadius: '4px',
  transition: 'background-color 0.3s'
};

const welcomeStyle = {
  color: '#ecf0f1',
  marginRight: '1rem'
};

const logoutButtonStyle = {
  background: '#e74c3c',
  color: 'white',
  border: 'none',
  padding: '0.5rem 1rem',
  borderRadius: '4px',
  cursor: 'pointer',
  transition: 'background-color 0.3s'
};

export default Navbar;