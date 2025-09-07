import React, { useState, useEffect } from 'react';

export function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-theme');
      document.body.style.backgroundColor = '#121212';
      document.body.style.color = 'white';
    } else {
      document.body.classList.remove('dark-theme');
      document.body.style.backgroundColor = '#f0ede4';
      document.body.style.color = 'black';
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <header style={{
      backgroundColor: darkMode ? '#121212' : '#f9f6f0',
      borderRadius: '30px',
      margin: '20px 40px',
      padding: '10px 40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      boxShadow: darkMode ? '0 0 10px rgba(255,255,255,0.1)' : '0 0 10px rgba(0,0,0,0.1)',
      color: darkMode ? 'white' : 'black'
    }}>
      <nav style={{ display: 'flex', alignItems: 'center', gap: '20px', flex: 1, justifyContent: 'space-between' }}>
        <img src="/icon.png" alt="User Icon" style={{ width: '60px', height: '60px' }} />
        <a href="/" style={{ textDecoration: 'none', color: darkMode ? 'white' : '#000', fontWeight: '600', fontSize: '1.1rem' }}>Home</a>
        <a href="/quem-somos" style={{ textDecoration: 'none', color: darkMode ? 'white' : '#000', fontWeight: '600', fontSize: '1.1rem' }}>Quem somos</a>
        <a href="/referencia" style={{ textDecoration: 'none', color: darkMode ? 'white' : '#000', fontWeight: '600', fontSize: '1.1rem' }}>Referência</a>
        <a href="/instrucoes" style={{ textDecoration: 'none', color: darkMode ? 'white' : '#000', fontWeight: '600', fontSize: '1.1rem' }}>Instruções</a>
      </nav>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: darkMode ? 'white' : '#555' }}>
      </div>
      <button
        onClick={toggleTheme}
        style={{
          marginLeft: '40px',
          backgroundColor: '#7bc74d',
          border: 'none',
          borderRadius: '20px',
          padding: '10px 20px',
          cursor: 'pointer',
          fontWeight: '700',
          color: darkMode ? 'black' : 'white',
          fontSize: '1rem'
        }}
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </header>
  );
}
