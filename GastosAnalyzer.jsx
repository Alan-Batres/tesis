import { useState } from 'react'
import GastosForm from './GastosForm'
import GastosResumen from './GastosResumen'
import GastosRecomendaciones from './GastosRecomendaciones'
import '../styles/GastosAnalyzer.css'

function GastosAnalyzer() {
  const [gastos, setGastos] = useState([])
  const [presupuesto, setPresupuesto] = useState(0)

  const agregarGasto = (nuevoGasto) => {
    setGastos([...gastos, { ...nuevoGasto, id: Date.now() }])
  }

  const eliminarGasto = (id) => {
    setGastos(gastos.filter(g => g.id !== id))
  }

  const actualizarPresupuesto = (monto) => {
    setPresupuesto(Number(monto))
  }

  return (
    <div className="gastos-analyzer">
      <div className="container">
        <section className="section-input">
          <GastosForm 
            onAgregarGasto={agregarGasto}
            onPresupuesto={actualizarPresupuesto}
            presupuestoActual={presupuesto}
          />
        </section>
        <div className='summary'>
          <section className="section-analisis">
            <GastosResumen 
              gastos={gastos}
              presupuesto={presupuesto}
              onEliminarGasto={eliminarGasto}
            />
          </section>
          <section className="section-recomendaciones">
            <GastosRecomendaciones 
              gastos={gastos}
              presupuesto={presupuesto}
            />
          </section>
        </div>
      </div>
    </div>
  )
}

export default GastosAnalyzer
