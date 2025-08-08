import React from 'react';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h1>Welcome back, {user?.username}! 👋</h1>
        <p>Here's your activity overview</p>
      </div>

      <div style={statsGridStyle}>
        <div style={statCardStyle}>
          <div style={statIconStyle}>📤</div>
          <div style={statNumberStyle}>{user?.stats?.uploadsCount || 0}</div>
          <div style={statLabelStyle}>Resources Uploaded</div>
        </div>
        
        <div style={statCardStyle}>
          <div style={statIconStyle}>📥</div>
          <div style={statNumberStyle}>{user?.stats?.downloadsCount || 0}</div>
          <div style={statLabelStyle}>Downloads</div>
        </div>
        
        <div style={statCardStyle}>
          <div style={statIconStyle}>⭐</div>
          <div style={statNumberStyle}>0</div>
          <div style={statLabelStyle}>Resources Saved</div>
        </div>
        
        <div style={statCardStyle}>
          <div style={statIconStyle}>🔥</div>
          <div style={statNumberStyle}>1</div>
          <div style={statLabelStyle}>Days Streak</div>
        </div>
      </div>

      <div style={sectionsGridStyle}>
        <div style={sectionStyle}>
          <h2>📋 Recent Activity</h2>
          <div style={activityStyle}>
            <p>No recent activity yet. Start by uploading your first resource!</p>
          </div>
        </div>
        
        <div style={sectionStyle}>
          <h2>🎯 Quick Actions</h2>
          <div style={quickActionsStyle}>
            <button style={actionButtonStyle}>
              📤 Upload Resource
            </button>
            <button style={actionButtonStyle}>
              🔍 Browse Resources
            </button>
            <button style={actionButtonStyle}>
              👤 Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Styles
const containerStyle = {
  minHeight: '100vh',
  backgroundColor: '#f8f9fa',
  padding: '2rem'
};

const headerStyle = {
  textAlign: 'center',
  marginBottom: '3rem'
};

const statsGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: '2rem',
  marginBottom: '3rem',
  maxWidth: '1200px',
  margin: '0 auto 3rem'
};

const statCardStyle = {
  backgroundColor: 'white',
  padding: '2rem',
  borderRadius: '12px',
  textAlign: 'center',
  boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
};

const statIconStyle = {
  fontSize: '2.5rem',
  marginBottom: '1rem'
};

const statNumberStyle = {
  fontSize: '2rem',
  fontWeight: 'bold',
  color: '#2c3e50',
  marginBottom: '0.5rem'
};

const statLabelStyle = {
  color: '#6c757d',
  fontSize: '0.9rem'
};

const sectionsGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
  gap: '2rem',
  maxWidth: '1200px',
  margin: '0 auto'
};

const sectionStyle = {
  backgroundColor: 'white',
  padding: '2rem',
  borderRadius: '12px',
  boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
};

const activityStyle = {
  color: '#6c757d',
  textAlign: 'center',
  padding: '2rem'
};

const quickActionsStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem'
};

const actionButtonStyle = {
  padding: '1rem',
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  fontSize: '1rem',
  transition: 'background-color 0.3s'
};

export default Dashboard;