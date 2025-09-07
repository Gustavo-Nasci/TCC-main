import { useState } from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export function Instrucoes() {
  return (
    <>
      <Header />
      <main style={{ backgroundColor: '#121212', color: 'white', minHeight: '100vh', paddingBottom: '100px' }}>
        <section style={{ maxWidth: '900px', margin: '40px auto', padding: '20px', textAlign: 'center' }}>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'space-between', marginBottom: '20px' }}>
            <div style={{ backgroundColor: '#7bc74d', borderRadius: '10px', padding: '20px', flex: 1, color: 'black' }}>
              <ol>
                <li>Conecte o Arduino à fonte de 5V ou bateria recarregável.</li>
                <li>Insira o cartão microSD no DFPlayer Mini, contendo áudios nomeados como 0001.mp3, 0002.mp3, etc.</li>
                <li>Certifique-se de que os difusores estão com líquido e corretamente conectados.</li>
                <li>Abra o aplicativo que enviará os comandos Bluetooth (ainda em desenvolvimento no Figma).</li>
                <li>Ligue o dispositivo.</li>
              </ol>
            </div>
            <div style={{ backgroundColor: '#7bc74d', borderRadius: '10px', padding: '20px', flex: 1, color: 'black' }}>
              <ol>
                <li>O usuário liga o dispositivo.</li>
                <li>Abre o app e escolhe o modo de respiração (ex: Relaxamento).</li>
                <li>O app envia os parâmetros de respiração e aroma desejado.</li>
                <li>O dispositivo:</li>
                <ul>
                  <li>Controla o brilho do LED para guiar a respiração.</li>
                  <li>Vibra durante a fase de “segurar”.</li>
                  <li>Ativa o aroma selecionado no início da inspiração.</li>
                  <li>Reproduz uma meditação correspondente ao momento.</li>
                </ul>
              </ol>
            </div>
            <div style={{ backgroundColor: '#7bc74d', borderRadius: '10px', padding: '20px', flex: 1, color: 'black' }}>
              <p>Digite 1 para definir o tempo de inspiração para 6 segundos.</p>
              <p>Digite 2 para definir o tempo de inspiração para 4 segundos.</p>
              <p>Digite 3 para definir o tempo de expiração para 7 segundos.</p>
              <p>Digite 4 para definir o tempo de expiração para 4 segundos.</p>
            </div>
          </div>
          <div style={{ marginTop: '40px', backgroundColor: '#333', height: '300px', borderRadius: '10px' }}>
            {/* Placeholder for video or image */}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}