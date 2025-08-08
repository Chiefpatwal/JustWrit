import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Upload from './pages/Upload';  // ✅ Add this line
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Protected Routes */}
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/upload" 
              element={
                <ProtectedRoute>
                  <Upload />
                </ProtectedRoute>
              } 
            />

            {/* 404 Page */}
            <Route 
              path="*" 
              element={
                <div style={{
                  textAlign: 'center', 
                  padding: '4rem',
                  minHeight: '100vh',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}>
                  <h1>404 - Page Not Found</h1>
                  <p>The page you're looking for doesn't exist.</p>
                </div>
              } 
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;