import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function References() {
  return (
    <>
      <Header />
      <main style={{
        background: 'linear-gradient(to bottom, #1a1a1a, #e0e0e0)',
        minHeight: '100vh',
        paddingBottom: '100px',
        color: 'white',
        textAlign: 'center',
        position: 'relative',
      }}>
        <h1 style={{ marginTop: '40px', fontSize: '2.5rem', fontWeight: '400' }}>Referências</h1>
        <section style={{
          maxWidth: '900px',
          margin: '40px auto',
          display: 'flex',
          justifyContent: 'space-between',
          gap: '20px',
          position: 'relative',
          padding: '20px',
        }}>
          <div style={{
            backgroundColor: '#2a2a2a',
            borderRadius: '50%',
            width: '150px',
            height: '150px',
            padding: '20px',
            color: 'white',
            fontSize: '0.9rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            boxShadow: '0 0 10px rgba(0,0,0,0.5)',
            flexShrink: 0,
          }}>
            Importância das técnicas de relaxamento na terapia cognitiva para ansiedade Importante of relaxation techniques in cognitive therapy for anxiety
          </div>
          <div style={{
            backgroundColor: '#2a2a2a',
            borderRadius: '50%',
            width: '150px',
            height: '150px',
            padding: '20px',
            color: 'white',
            fontSize: '0.9rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            boxShadow: '0 0 10px rgba(0,0,0,0.5)',
            flexShrink: 0,
          }}>
            Efeitos de intervenções com exercícios respiratórios diafragmáticos nos sintomas de ansiedade em adolescentes: Uma revisão sistemática
          </div>
          <div style={{
            backgroundColor: '#2a2a2a',
            borderRadius: '50%',
            width: '150px',
            height: '150px',
            padding: '20px',
            color: 'white',
            fontSize: '0.9rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            boxShadow: '0 0 10px rgba(0,0,0,0.5)',
            flexShrink: 0,
          }}>
            Aplicação de plantas medicinais no tratamento da ansiedade: uma revisão da literatura Application of medicinal plants in the treatment of anxiety: a literature review
          </div>
          <img src="/panda.png" alt="Panda" style={{
            position: 'absolute',
            right: '-50px',
            bottom: '0',
            width: '150px',
            height: 'auto',
            userSelect: 'none',
          }} />
        </section>
      </main>
      <Footer />
    </>
  );
}
