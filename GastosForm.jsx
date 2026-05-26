import { useState } from 'react'
import '../styles/GastosForm.css'

const TIPOS_GASTOS = {
  fijos: 'Gastos Fijos',
  variables: 'Gastos Variables',
  hormigas: 'Gastos Hormigas',
  discrecionales: 'Gastos Discrecionales'
}

function GastosForm({ onAgregarGasto, onPresupuesto, presupuestoActual }) {
  const [descripcion, setDescripcion] = useState('')
  const [monto, setMonto] = useState('')
  const [tipo, setTipo] = useState('variables')
  const [presupuesto, setPresupuesto] = useState(presupuestoActual)

  const handleAgregar = (e) => {
    e.preventDefault()
    if (!descripcion.trim() || !monto || monto <= 0) {
      alert('Por favor completa todos los campos correctamente')
      return
    }

    onAgregarGasto({
      descripcion: descripcion.trim(),
      monto: Number(monto),
      tipo,
      fecha: new Date().toLocaleDateString()
    })

    setDescripcion('')
    setMonto('')
    setTipo('variables')
  }

  const handlePresupuesto = (e) => {
    const valor = Number(e.target.value)
    setPresupuesto(valor)
    onPresupuesto(valor)
  }

  return (
    <div className="gastos-form">
      <h2>Registra tus Gastos</h2>
      
      <div className="presupuesto-section">
        <label htmlFor="presupuesto">Presupuesto Total Disponible: $</label>
        <input
          id="presupuesto"
          type="number"
          value={presupuesto}
          onChange={handlePresupuesto}
          placeholder="Ingresa tu presupuesto"
          min="0"
        />
      </div>

      <form onSubmit={handleAgregar} className="form">
        <div className="form-group">
          <label htmlFor="descripcion">Descripción del Gasto:</label>
          <input
            id="descripcion"
            type="text"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            placeholder="Ej: Café, Alquiler, Compras..."
          />
        </div>

        <div className="form-group">
          <label htmlFor="monto">Monto ($):</label>
          <input
            id="monto"
            type="number"
            value={monto}
            onChange={(e) => setMonto(e.target.value)}
            placeholder="0.00"
            min="0"
            step="0.01"
          />
        </div>

        <div className="form-group">
          <label htmlFor="tipo">Tipo de Gasto:</label>
          <select
            id="tipo"
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
          >
            {Object.entries(TIPOS_GASTOS).map(([key, label]) => (
              <option key={key} value={key}>{label}</option>
            ))}
          </select>
          <div className="tipo-info">
            {tipo === 'fijos' && <p>Gastos necesarios cada mes (alquiler, servicios)</p>}
            {tipo === 'variables' && <p>Gastos necesarios pero con monto variable (comida, transporte)</p>}
            {tipo === 'hormigas' && <p>Gastos pequeños que no parecen importantes pero suman (snacks, apps)</p>}
            {tipo === 'discrecionales' && <p>Gastos por placer o capricho (películas, ropa, viajes)</p>}
          </div>
        </div>

        <button type="submit" className="btn-agregar">
          Agregar Gasto
        </button>
      </form>
    </div>
  )
}

export default GastosForm
