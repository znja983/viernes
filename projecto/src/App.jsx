import { useState } from 'react'
import './App.css'

const tarotCards = [
  { id: 0, name: 'El Loco', meaning: 'Nuevos comienzos, libertad, espontaneidad' },
  { id: 1, name: 'El Mago', meaning: 'Poder, destreza, manifestación' },
  { id: 2, name: 'La Sacerdotisa', meaning: 'Intuición, misterio, conocimiento oculto' },
  { id: 3, name: 'La Emperatriz', meaning: 'Fertilidad, abundancia, belleza' },
  { id: 4, name: 'El Emperador', meaning: 'Autoridad, poder, liderazgo' },
  { id: 5, name: 'El Hierofante', meaning: 'Tradición, espiritualidad, convenciones' },
  { id: 6, name: 'Los Enamorados', meaning: 'Amor, elección, alineación' },
  { id: 7, name: 'El Carro', meaning: 'Control, victoria, determinación' },
  { id: 8, name: 'La Fuerza', meaning: 'Coraje, paciencia, control interno' },
  { id: 9, name: 'El Ermitaño', meaning: 'Introspección, búsqueda interior, sabiduría' },
  { id: 10, name: 'La Rueda de la Fortuna', meaning: 'Destino, ciclos, buena suerte' },
  { id: 11, name: 'La Justicia', meaning: 'Verdad, justicia, legalidad' },
  { id: 12, name: 'El Colgado', meaning: 'Suspensión, restricción, perspectiva' },
  { id: 13, name: 'La Muerte', meaning: 'Transformación, fin de ciclos, renacimiento' },
  { id: 14, name: 'La Templanza', meaning: 'Balance, moderación, armonía' },
  { id: 15, name: 'El Diablo', meaning: 'Tentación, materialismo, apego' },
  { id: 16, name: 'La Torre', meaning: 'Ruptura, caos, revelación súbita' },
  { id: 17, name: 'La Estrella', meaning: 'Esperanza, inspiración, espiritualidad' },
  { id: 18, name: 'La Luna', meaning: 'Ilusión, miedo, subconsciente' },
  { id: 19, name: 'El Sol', meaning: 'Éxito, alegría, vitalidad' },
  { id: 20, name: 'El Juicio', meaning: 'Resurrección, despertar, llamado' },
  { id: 21, name: 'El Mundo', meaning: 'Finalización, plenitud, cumplimiento' }
]

function App() {
  const [cards, setCards] = useState([])
  const [isDrawing, setIsDrawing] = useState(false)

  const drawCards = () => {
    setIsDrawing(true)
    const drawn = []
    const used = new Set()
    
    for (let i = 0; i < 3; i++) {
      let randomIndex
      do {
        randomIndex = Math.floor(Math.random() * tarotCards.length)
      } while (used.has(randomIndex))
      used.add(randomIndex)
      drawn.push(tarotCards[randomIndex])
    }
    
    setCards(drawn)
    setTimeout(() => setIsDrawing(false), 600)
  }

  const resetReading = () => {
    setCards([])
  }

  return (
    <div className="tarot-container">
      <header className="tarot-header">
        <h1>🔮 Lectura del Tarot 🔮</h1>
        <p>Descubre el mensaje del universo</p>
      </header>

      <section className="tarot-cards">
        {cards.length === 0 ? (
          <div className="empty-state">
            <div className="deck-icon">🎴</div>
            <p>Haz tu pregunta y pide una lectura del tarot</p>
          </div>
        ) : (
          <div className="cards-grid">
            {cards.map((card, index) => {
              const positions = ['Pasado', 'Presente', 'Futuro']
              return (
                <div key={index} className="card flipped">
                  <div className="card-inner">
                    <div className="card-back">
                      🔮
                    </div>
                    <div className="card-front">
                      <div className="position-label">{positions[index]}</div>
                      <div className="card-name">{card.name}</div>
                      <div className="card-meaning">{card.meaning}</div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </section>

      <section className="tarot-controls" style={{ marginTop: '40px' }}>
        <button 
          className="draw-button" 
          onClick={drawCards}
          disabled={isDrawing}
        >
          {isDrawing ? 'Revelando...' : '✨ Hacer Lectura ✨'}
        </button>
        {cards.length > 0 && (
          <button 
            className="reset-button" 
            onClick={resetReading}
          >
            Nueva Lectura
          </button>
        )}
      </section>
    </div>
  )
}

export default App
