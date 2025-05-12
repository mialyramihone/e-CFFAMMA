import { useState, useEffect } from 'react'
import '../css/Login.css'
import logo from '../img/AgriTech logo copie.png'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [animateIn, setAnimateIn] = useState(false)

  
  useEffect(() => {
    setTimeout(() => {
      setAnimateIn(true)
    }, 100)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    
    setTimeout(() => {
      if (username === 'admin' && password === 'cffamma') {
        setError('')
        
        setTimeout(() => {
          onLogin()
        }, 300)
      } else {
        setError('Identifiants incorrects')
      }
      setIsLoading(false)
    }, 800)
  }

  return (
    <div className={`login-wrapper ${animateIn ? 'fade-in' : ''}`}>
      <div className={`login-card ${animateIn ? 'slide-up' : ''}`}>
        <img src={logo} alt="Logo" className="login-logo pulse" />
        <h1 className="title-animate">Connexion</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nom d'utilisateur</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="input-animate"
            />
          </div>
          <div className="form-group password-group">
            <label>Mot de passe</label>
            <div className="password-field">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="input-animate"
              />
              <span
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
                >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
            </div>
          </div>
          {error && <p className="error shake">{error}</p>}
          <button 
            type="submit" 
            className={isLoading ? 'loading' : ''}
            disabled={isLoading}
          >
            {isLoading ? 'Chargement...' : 'Se connecter'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login