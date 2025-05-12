import { useState } from 'react'
import Technique from './Technique'
import Formation from './Formation'
import Personnel from './Personnel'

const Dashboard = ({ onLogout }) => {
  const [selectedOption, setSelectedOption] = useState(null)

  const renderOptionPage = () => {
    switch(selectedOption) {
      case 'TECHNIQUE': return <Technique onBack={() => setSelectedOption(null)} />
      case 'FORMATION': return <Formation onBack={() => setSelectedOption(null)} />
      case 'PERSONNEL': return <Personnel onBack={() => setSelectedOption(null)} />
      default: return (
        <div className="options-container">
          <h2>Choisissez votre espace</h2>
          <div className="options-grid">
            <div className="option-card" onClick={() => setSelectedOption('TECHNIQUE')}>
              <h3>TECHNIQUE</h3>
              <p>Atelier</p>
            </div>
            <div className="option-card" onClick={() => setSelectedOption('FORMATION')}>
              <h3>FORMATION</h3>
              <p>Étudiant</p>
            </div>
            <div className="option-card" onClick={() => setSelectedOption('PERSONNEL')}>
              <h3>PERSONNEL</h3>
              <p>Ressources Humaines</p>
            </div>
          </div>
        </div>
      )
    }
  }

  return (
    <div className="dashboard">
      <header className="app-header">
        <h1>Plateforme CFFAMMA</h1>
        <button className="logout-btn" onClick={onLogout}>
          Déconnexion
        </button>
      </header>
      <main>
        {renderOptionPage()}
      </main>
    </div>
  )
}

export default Dashboard