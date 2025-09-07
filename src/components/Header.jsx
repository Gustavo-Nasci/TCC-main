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
      margin: '20px',
      padding: '10px 30px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      boxShadow: darkMode ? '0 0 10px rgba(255,255,255,0.1)' : '0 0 10px rgba(0,0,0,0.1)',
      color: darkMode ? 'white' : 'black'
    }}>
      <nav style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <img src="/icon.png" alt="Logo" style={{ width: '40px', height: '40px' }} />
        <a href="/" style={{ textDecoration: 'none', color: darkMode ? 'white' : '#000', fontWeight: '600' }}>jogo</a>
        <a href="/produtos" style={{ textDecoration: 'none', color: darkMode ? 'white' : '#000', fontWeight: '600' }}>Produtos</a>
        <a href="/quem-somos" style={{ textDecoration: 'none', color: darkMode ? 'white' : '#000', fontWeight: '600' }}>Quem somos</a>
        <a href="/referencia" style={{ textDecoration: 'none', color: darkMode ? 'white' : '#000', fontWeight: '600' }}>Referência</a>
      </nav>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: darkMode ? '#ccc' : '#555' }}>
        <img src="/icon.png" alt="User Icon" style={{ width: '24px', height: '24px' }} />
        <span>Bem-vindo(a)</span>
        <a href="/login" style={{ textDecoration: 'underline', color: darkMode ? 'white' : '#000', fontWeight: '600' }}>Entrar ou Cadastrar</a>
        <img src="/icon.png" alt="Settings Icon" style={{ width: '24px', height: '24px' }} />
      </div>
      <button
        onClick={toggleTheme}
        style={{
          marginLeft: '20px',
          backgroundColor: '#7bc74d',
          border: 'none',
          borderRadius: '20px',
          padding: '8px 16px',
          cursor: 'pointer',
          fontWeight: '600',
          color: darkMode ? 'black' : 'white'
        }}
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </header>
  );
}
