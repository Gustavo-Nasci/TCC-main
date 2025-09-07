import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function QuemSomos() {
  return (
    <>
      <Header />
      <main style={{ background: 'linear-gradient(to bottom, #2c2c2c, #d3d3d3)', minHeight: '100vh', padding: '40px 20px', color: 'white', textAlign: 'center' }}>
        <h1 style={{ marginBottom: '40px', textAlign: 'center' }}>Conheça Nosso Time</h1>
        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '60px', maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ width: '220px', color: '#000', borderRadius: '20px', padding: '10px' }}>
            <img
              src="/izabella.png"
              alt="Izabella Braga"
              style={{ width: '100%', height: 'auto', borderRadius: '20px' }}
            />
            <p style={{ marginTop: '10px', fontWeight: 'bold', fontSize: '16px', color: '#555' }}><strong>Izabella Braga<br />@braga_iz</strong></p>
          </div>
          <div style={{ width: '220px', color: '#000', borderRadius: '20px', padding: '10px' }}>
            <img
              src="/miriam.png"
              alt="Miriam Fernandes"
              style={{ width: '100%', height: 'auto', borderRadius: '20px' }}
            />
            <p style={{ marginTop: '10px', fontWeight: 'bold', fontSize: '16px', color: '#555' }}><strong>Miriam Fernandes<br />@miriam.fernaandes</strong></p>
          </div>
          <div style={{ width: '220px', color: '#000', borderRadius: '20px', padding: '10px' }}>
            <img
              src="/alice.png"
              alt="Alice Moreira"
              style={{ width: '100%', height: 'auto', borderRadius: '20px' }}
            />
            <p style={{ marginTop: '10px', fontWeight: 'bold', fontSize: '16px', color: '#555' }}><strong>Alice Moreira<br />@alicxy</strong></p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
