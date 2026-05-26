import '../styles/GastosResumen.css'

const TIPO_INFO = {
  fijos: { emoji: '', nombre: 'Gastos Fijos' },
  variables: { emoji: '', nombre: 'Gastos Variables' },
  hormigas: { emoji: '', nombre: 'Gastos Hormigas' },
  discrecionales: { emoji: '', nombre: 'Gastos Discrecionales' }
}

function GastosResumen({ gastos, presupuesto, onEliminarGasto }) {
  const totalGastos = gastos.reduce((sum, g) => sum + g.monto, 0)
  const restante = presupuesto - totalGastos
  const porcentajeUsado = presupuesto > 0 ? (totalGastos / presupuesto) * 100 : 0

  const gastosPorTipo = {
    fijos: gastos.filter(g => g.tipo === 'fijos'),
    variables: gastos.filter(g => g.tipo === 'variables'),
    hormigas: gastos.filter(g => g.tipo === 'hormigas'),
    discrecionales: gastos.filter(g => g.tipo === 'discrecionales')
  }

  const sumarPorTipo = (tipo) => gastosPorTipo[tipo].reduce((sum, g) => sum + g.monto, 0)

  return (
    <div className="gastos-resumen">
      <h2>Resumen de Gastos</h2>

      {presupuesto > 0 && (
        <div className="presupuesto-info">
          <div className="presupuesto-bar">
            <div 
              className={`barra-usada ${porcentajeUsado > 100 ? 'overflow' : ''}`}
              style={{ width: `${Math.min(porcentajeUsado, 100)}%` }}
            ></div>
          </div>
          <div className="presupuesto-stats">
            <p><strong>Presupuesto Total:</strong> ${presupuesto.toFixed(2)}</p>
            <p><strong>Total Gastado:</strong> ${totalGastos.toFixed(2)} ({porcentajeUsado.toFixed(1)}%)</p>
            <p className={`restante ${restante >= 0 ? 'positivo' : 'negativo'}`}>
              <strong>Restante:</strong> ${restante.toFixed(2)}
            </p>
          </div>
        </div>
      )}

      <div className="gastos-por-tipo">
        {Object.entries(gastosPorTipo).map(([tipo, items]) => (
          <div key={tipo} className={`tipo-card tipo-${tipo}`}>
            <h3>{TIPO_INFO[tipo].emoji} {TIPO_INFO[tipo].nombre}</h3>
            <p className="subtotal">Subtotal: ${sumarPorTipo(tipo).toFixed(2)}</p>
            
            {items.length > 0 ? (
              <ul className="gastos-list">
                {items.map(gasto => (
                  <li key={gasto.id} className="gasto-item">
                    <div className="gasto-info">
                      <span className="descripcion">{gasto.descripcion}</span>
                      <span className="fecha">{gasto.fecha}</span>
                    </div>
                    <div className="gasto-monto-btn">
                      <span className="monto">${gasto.monto.toFixed(2)}</span>
                      <button
                        className="btn-eliminar"
                        onClick={() => onEliminarGasto(gasto.id)}
                        title="Eliminar gasto"
                      >
                        X
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="sin-gastos">Sin gastos registrados</p>
            )}
          </div>
        ))}
      </div>

      {gastos.length === 0 && (
        <div className="empty-state">
          <p>No hay gastos registrados. Comienza a agregar!</p>
        </div>
      )}
    </div>
  )
}

export default GastosResumen
