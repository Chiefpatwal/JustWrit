import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Home = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div>
      {/* Hero Section */}
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '4rem 1rem',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
           JUSTWRIT
        </h1>
        <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>
          Share Knowledge, Build Careers, Code Together
        </p>
        
        {!isAuthenticated && (
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link 
              to="/register" 
              style={{
                background: '#28a745',
                color: 'white',
                padding: '1rem 2rem',
                textDecoration: 'none',
                borderRadius: '8px',
                fontWeight: 'bold'
              }}
            >
              Get Started
            </Link>
            <Link 
              to="/login"
              style={{
                background: 'transparent',
                color: 'white',
                padding: '1rem 2rem',
                textDecoration: 'none',
                borderRadius: '8px',
                border: '2px solid white',
                fontWeight: 'bold'
              }}
            >
              Login
            </Link>
          </div>
        )}
      </div>

      {/* Categories Section */}
      <div style={{ padding: '4rem 1rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem' }}>
          Explore Categories
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem'
        }}>
          <div style={{
            background: 'white',
            padding: '2rem',
            borderRadius: '12px',
            textAlign: 'center',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📚</div>
            <h3>Study Notes</h3>
            <p>Share and access study materials</p>
            <div style={{ color: '#6c757d', fontWeight: 'bold', marginTop: '1rem' }}>
              1,247 resources
            </div>
          </div>

          <div style={{
            background: 'white',
            padding: '2rem',
            borderRadius: '12px',
            textAlign: 'center',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💼</div>
            <h3>Placement Prep</h3>
            <p>Interview experiences and tips</p>
            <div style={{ color: '#6c757d', fontWeight: 'bold', marginTop: '1rem' }}>
              892 experiences
            </div>
          </div>

          <div style={{
            background: 'white',
            padding: '2rem',
            borderRadius: '12px',
            textAlign: 'center',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔥</div>
            <h3>DSA Resources</h3>
            <p>Data structures and algorithms</p>
            <div style={{ color: '#6c757d', fontWeight: 'bold', marginTop: '1rem' }}>
              634 problems
            </div>
          </div>

          <div style={{
            background: 'white',
            padding: '2rem',
            borderRadius: '12px',
            textAlign: 'center',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⚡</div>
            <h3>Competitive Programming</h3>
            <p>Contest problems and solutions</p>
            <div style={{ color: '#6c757d', fontWeight: 'bold', marginTop: '1rem' }}>
              445 solutions
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions for Logged in Users */}
      {isAuthenticated && (
        <div style={{ padding: '4rem 1rem', maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem' }}>
            Quick Actions
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            <Link 
              to="/dashboard" 
              style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '12px',
                textAlign: 'center',
                textDecoration: 'none',
                color: 'inherit',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                display: 'block'
              }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📊</div>
              <h3>View Dashboard</h3>
              <p>Track your contributions and progress</p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;