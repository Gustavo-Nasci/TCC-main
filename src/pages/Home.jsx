import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export function Home() {
  return (
    <>
      <Header />
      <main style={{ backgroundColor: '#f0ede4', minHeight: '100vh', paddingBottom: '100px' }}>
        <section style={{ backgroundColor: '#f9f6f0', borderRadius: '30px', margin: '20px auto', maxWidth: '900px', padding: '30px', display: 'flex', gap: '20px', alignItems: 'center' }}>
          <div style={{ flex: 1 }}>
            <h1 style={{ fontWeight: '400', fontSize: '2.5rem', marginBottom: '10px' }}>
              Bem-vindo ao Panda<span style={{ color: '#7bc74d' }}>App</span>
            </h1>
            <p style={{ fontSize: '1rem', lineHeight: '1.5', color: '#333' }}>
              O PandaApp é um aplicativo criado para ajudar na redução da ansiedade e promoção do bem-estar. Ele combina aromaterapia com aromas naturais, meditação guiada e respiração diafragmática para estimular o relaxamento de forma natural e acessível.
            </p>
            <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
              <button style={{ backgroundColor: '#7bc74d', color: 'white', border: 'none', borderRadius: '20px', padding: '10px 20px', cursor: 'pointer' }}>
                Download
              </button>
              <button style={{ backgroundColor: 'white', color: '#333', border: '1px solid #ccc', borderRadius: '20px', padding: '10px 20px', cursor: 'pointer' }}>
                Instruções
              </button>
            </div>
          </div>
          <div style={{ flex: 1, textAlign: 'center' }}>
            <img src="/panda.png" alt="Panda" style={{ maxWidth: '100%', borderRadius: '30px' }} />
          </div>
        </section>

        <section style={{ maxWidth: '900px', margin: '40px auto', display: 'flex', gap: '20px', justifyContent: 'space-between' }}>
          <div style={{ flex: 1, backgroundColor: 'white', borderRadius: '20px', padding: '20px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
            <h2>Projeto</h2>
            <p>O projeto se destaca por unir tecnologia difusora de aromas naturais, meditação guiada e respiração diafragmática em uma única solução. Essa combinação promove relaxamento e redução da ansiedade de forma natural.</p>
          </div>
          <div style={{ flex: 1, backgroundColor: 'white', borderRadius: '20px', padding: '20px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
            <h2>Público-Alvo</h2>
            <p>Adolescentes de 12 a 18 anos, especialmente estudantes com altos níveis de estresse escolar. Também pode atender jovens adultos e profissionais em ambientes estressantes.</p>
          </div>
          <div style={{ flex: 1, backgroundColor: 'white', borderRadius: '20px', padding: '20px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
            <h2>Objetivo</h2>
            <p>Reduzir a ansiedade e promover o bem-estar por meio de uma tecnologia que integra aromaterapia, meditação e técnicas de respiração, atuando na regulação do sistema nervoso</p>
          </div>
        </section>

        <section style={{ maxWidth: '900px', margin: '40px auto', position: 'relative' }}>
          <div style={{ display: 'flex', overflowX: 'auto', gap: '20px', scrollSnapType: 'x mandatory', paddingBottom: '10px' }}>
            <img src="/icon.png" alt="Item 1" style={{ flex: '0 0 auto', width: '200px', height: '150px', borderRadius: '20px', objectFit: 'cover', scrollSnapAlign: 'start' }} />
            <img src="/icon.png" alt="Item 2" style={{ flex: '0 0 auto', width: '200px', height: '150px', borderRadius: '20px', objectFit: 'cover', scrollSnapAlign: 'start' }} />
            <img src="/icon.png" alt="Item 3" style={{ flex: '0 0 auto', width: '200px', height: '150px', borderRadius: '20px', objectFit: 'cover', scrollSnapAlign: 'start' }} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
