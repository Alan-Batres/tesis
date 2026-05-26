import { useState } from 'react'
import './App.css'
import GastosAnalyzer from './components/GastosAnalyzer'

function App() {
  return (
    <>
      <header className="app-header">
        <h1 className='title'>Chipilupi Finanzas</h1>
        <h2 className='subtitle'>Analizador de Gastos Inteligente</h2>
        <p>Clasifica tus gastos y descubre si conviene o no</p>
      </header>
      <main className="app-main">
        <GastosAnalyzer />
      </main>
    </>
  )
}

export default App
