import React from 'react'
import './App.css'

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>🏗️ BIM WebTemplate</h1>
        <p>Building Information Modeling Platform</p>
      </header>

      <main className="main">
        <section className="hero">
          <h2>Bienvenido</h2>
          <p>Este es el inicio de tu aplicación BIM web.</p>
        </section>

        <section className="content">
          <h3>Componentes Base</h3>
          <ul>
            <li>✅ React 18 + Vite</li>
            <li>✅ Tailwind CSS</li>
            <li>✅ Estructura lista para expandir</li>
          </ul>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2025 BIM WebTemplate. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}

export default App
