import React from 'react';

export function Footer() {
  return (
    <footer style={{ backgroundColor: '#7bc74d', padding: '40px 20px', color: 'white', marginTop: '0', width: '100%', boxSizing: 'border-box' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
          <input
            type="email"
            placeholder="Receba novidades"
            style={{ flex: 1, padding: '10px', borderRadius: '20px', border: 'none', outline: 'none' }}
          />
          <button
            style={{
              backgroundColor: 'white',
              color: '#7bc74d',
              border: 'none',
              borderRadius: '20px',
              padding: '10px 20px',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            &rarr;
          </button>
        </div>
        <nav style={{ display: 'flex', justifyContent: 'center', gap: '30px', fontSize: '14px' }}>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Home</a>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Instruções</a>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Quem somos</a>
          
        </nav>
      </div>
    </footer>
  );
}
