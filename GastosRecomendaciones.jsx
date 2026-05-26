import { useMemo } from 'react'
import '../styles/GastosRecomendaciones.css'
 
function GastosRecomendaciones({ gastos, presupuesto }) {
  const analisis = useMemo(() => {
    if (gastos.length === 0 || presupuesto === 0) {
      return null
    }
    const totalGastos = gastos.reduce((sum, g) => sum + g.monto, 0)
    const restante = presupuesto - totalGastos
    const gastosFijos        = gastos.filter(g => g.tipo === 'fijos')
    const gastosVariables    = gastos.filter(g => g.tipo === 'variables')
    const gastosHormigas     = gastos.filter(g => g.tipo === 'hormigas')
    const gastosDiscrecional = gastos.filter(g => g.tipo === 'discrecionales')
    const sumarMontos = (items) => items.reduce((sum, g) => sum + g.monto, 0)
    const totalFijos        = sumarMontos(gastosFijos)
    const totalVariables    = sumarMontos(gastosVariables)
    const totalHormigas     = sumarMontos(gastosHormigas)
    const totalDiscrecional = sumarMontos(gastosDiscrecional)
    const porcFijos        = (totalFijos / presupuesto) * 100
    const porcVariables    = (totalVariables / presupuesto) * 100
    const porcHormigas     = (totalHormigas / presupuesto) * 100
    const porcDiscrecional = (totalDiscrecional / presupuesto) * 100
    const gastosEsenciales = totalFijos + totalVariables
    const porcEsenciales   = (gastosEsenciales / presupuesto) * 100
    const recomendaciones = []
 
    if (porcEsenciales > 70) {
      recomendaciones.push({
        tipo: 'advertencia',
        titulo: 'Gastos Esenciales Muy Altos',
        descripcion: `${porcEsenciales.toFixed(1)}% del presupuesto se va en gastos esenciales. `
          + `La regla 50/30/20 (Bankrate, 2024) recomienda no superar el 50% en necesidades. `
          + `Con más del 70% apenas queda margen para ahorro y emergencias. NO CONVIENE.`,
        gravedad: 'alta'
      })
    } else if (porcEsenciales >= 50 && porcEsenciales <= 60) {
      recomendaciones.push({
        tipo: 'exito',
        titulo: 'Balance Óptimo de Gastos Esenciales',
        descripcion: `${porcEsenciales.toFixed(1)}% en esenciales: estás en el rango ideal según la regla 50/30/20 `
          + `(Elizabeth Warren, "All Your Worth", 2005). CONVIENE mantener este ritmo.`,
        gravedad: 'baja'
      })
    }
 
    if (porcFijos < 30 && totalFijos > 0) {
      recomendaciones.push({
        tipo: 'sugerencia',
        titulo: 'Gastos Fijos Reducidos — Buena Flexibilidad',
        descripcion: `Solo ${porcFijos.toFixed(1)}% en obligaciones fijas. `
          + `Según Investopedia, mantener los fijos por debajo del 30% otorga mayor `
          + `libertad financiera ante imprevistos o cambios de vida. Buen signo.`,
        gravedad: 'baja'
      })
    }
 
    if (porcVariables > 35) {
      recomendaciones.push({
        tipo: 'alerta',
        titulo: 'Gastos Variables Elevados',
        descripcion: `${porcVariables.toFixed(1)}% en variables supera el 35% de alerta. `
          + `El BLS Consumer Expenditure Survey 2024 muestra que el hogar promedio destina `
          + `28-30% a alimentación, transporte y ropa. Controla estos rubros.`,
        gravedad: 'media'
      })
    }
 
    if (porcHormigas > 10) {
      recomendaciones.push({
        tipo: 'alerta',
        titulo: 'Gastos Hormiga Fuera de Control',
        descripcion: `${porcHormigas.toFixed(1)}% en pequeños gastos acumulados. `
          + `David Bach ("The Latte Factor") calcula que $5 diarios en snacks, café y `
          + `suscripciones suman $1,825 al año. NO CONVIENE. Revisa y elimina los superfluos.`,
        gravedad: 'media'
      })
    } else if (porcHormigas > 5 && porcHormigas <= 10) {
      recomendaciones.push({
        tipo: 'sugerencia',
        titulo: 'Monitorea tus Gastos Hormiga',
        descripcion: `${porcHormigas.toFixed(1)}% en pequeños gastos: zona de atención. `
          + `La recomendación es mantenerlos por debajo del 5%. Identifica cuáles son `
          + `prescindibles antes de que superen el umbral de alerta del 10%.`,
        gravedad: 'baja'
      })
    }
 
    if (porcDiscrecional > 30) {
      recomendaciones.push({
        tipo: 'alerta',
        titulo: 'Gastos Discrecionales Altos',
        descripcion: `${porcDiscrecional.toFixed(1)}% en entretenimiento y placer supera el 30%. `
          + `Experian recomienda no exceder ese umbral según la regla 50/30/20: `
          + `reducirlo libera margen para ahorro y pago de deuda.`,
        gravedad: 'media'
      })
    } else if (porcDiscrecional >= 15 && porcDiscrecional <= 25) {
      recomendaciones.push({
        tipo: 'exito',
        titulo: 'Balance Saludable entre Ahorro y Placer',
        descripcion: `${porcDiscrecional.toFixed(1)}% en discrecionales: rango óptimo (15-25%) según Experian. `
          + `Disfrutas sin comprometer tus metas financieras. CONVIENE mantenerlo.`,
        gravedad: 'baja'
      })
    } else if (porcDiscrecional === 0 && gastos.length > 2) {
      recomendaciones.push({
        tipo: 'sugerencia',
        titulo: 'Presupuesta Algo para Disfrutar',
        descripcion: `No registras gastos discrecionales. Experian advierte que un presupuesto `
          + `sin espacio para el disfrute es difícil de sostener en el tiempo. `
          + `Considera incluir un 5-10% para ocio controlado.`,
        gravedad: 'baja'
      })
    }
    const porcRestante = Math.max(0, (restante / presupuesto) * 100)
    
    if (restante < 0) {
      recomendaciones.push({
        tipo: 'error',
        titulo: 'PRESUPUESTO EXCEDIDO — Acción Inmediata',
        descripcion: `Estás ${Math.abs(restante).toFixed(2)} por encima de tu presupuesto. `
          + `El CFPB advierte que operar en déficit mensual dificulta construir el fondo de `
          + `emergencia recomendado (3-6 meses de gastos). Reduce gastos urgentemente.`,
        gravedad: 'critica'
      })
    } else if (porcRestante < 10) {
      recomendaciones.push({
        tipo: 'advertencia',
        titulo: 'Poco Margen de Seguridad',
        descripcion: `Solo ${porcRestante.toFixed(1)}% del presupuesto disponible al final del mes. `
          + `El CFPB recomienda mantener al menos 10% mensual como primer escalón hacia un `
          + `fondo de emergencia de 3-6 meses (Federal Reserve, 2024). NO CONVIENE así.`,
        gravedad: 'alta'
      })
    } else if (porcRestante >= 20) {
      recomendaciones.push({
        tipo: 'exito',
        titulo: 'Buen Control — Margen Saludable',
        descripcion: `${porcRestante.toFixed(1)}% disponible al final del mes. `
          + `Estás construyendo el colchón financiero que el CFPB recomienda. `
          + `Considera mover ese excedente a una cuenta de ahorro de emergencia.`,
        gravedad: 'baja'
      })
    }
 
    if (totalFijos > 0) {
      const ratioDiscVsFijos = (totalDiscrecional / totalFijos) * 100
      if (ratioDiscVsFijos > 50 && porcFijos > 0) {
        recomendaciones.push({
          tipo: 'alerta',
          titulo: 'Gastas Más en Placer que en Obligaciones',
          descripcion: `Tu gasto discrecional representa el ${ratioDiscVsFijos.toFixed(0)}% de tus gastos fijos. `
            + `Invertir estas prioridades dificulta cumplir obligaciones en meses complicados. `
            + `Reorienta al menos la mitad de ese exceso hacia ahorro o fijos pendientes.`,
          gravedad: 'media'
        })
      }
    }
    const porcGastado = (totalGastos / presupuesto) * 100

    if (porcGastado < 40 && gastos.length > 0) {
      recomendaciones.push({
        tipo: 'sugerencia',
        titulo: 'Gasto Total Muy Bajo — Revisa si Falta Registrar',
        descripcion: `Solo registras el ${porcGastado.toFixed(1)}% del presupuesto. `
          + `Esto puede indicar gastos omitidos. Un registro incompleto produce `
          + `análisis inexactos y recomendaciones poco útiles.`,
        gravedad: 'baja'
      })
    }

    if (gastos.length === 0) {
      recomendaciones.push({
        tipo: 'sugerencia',
        titulo: 'Empieza a Registrar tus Gastos',
        descripcion: 'Agrega tus gastos del mes para recibir análisis basados en la regla 50/30/20 '
          + 'y las recomendaciones del CFPB sobre ahorro de emergencia.',
        gravedad: 'baja'
      })
    }
 
    return {
      recomendaciones,
      distribucion: {
        totalFijos,
        totalVariables,
        totalHormigas,
        totalDiscrecional,
        porcFijos,
        porcVariables,
        porcHormigas,
        porcDiscrecional,
        porcRestante
      }
    }
  }, [gastos, presupuesto])
 
  if (!analisis) {
    return null
  }
 

  const ordenGravedad = { critica: 0, alta: 1, media: 2, baja: 3 }
 
  return (
    <div className="gastos-recomendaciones">
      <h2>Análisis y Recomendaciones</h2>
 
      {analisis.recomendaciones.length > 0 && (
        <div className="recomendaciones-list">
          {[...analisis.recomendaciones]
            .sort((a, b) => ordenGravedad[a.gravedad] - ordenGravedad[b.gravedad])
            .map((rec, index) => (
              <div key={index} className={`recomendacion-card ${rec.tipo} gravedad-${rec.gravedad}`}>
                <h3>{rec.titulo}</h3>
                <p>{rec.descripcion}</p>
              </div>
            ))}
        </div>
      )}
 
      <div className="distribucion-chart">
        <h3>Distribución de Gastos</h3>
        <div className="chart-bars">
          {[
            { label: 'Fijos',         total: analisis.distribucion.totalFijos,        porc: analisis.distribucion.porcFijos },
            { label: 'Variables',     total: analisis.distribucion.totalVariables,    porc: analisis.distribucion.porcVariables },
            { label: 'Hormigas',      total: analisis.distribucion.totalHormigas,     porc: analisis.distribucion.porcHormigas },
            { label: 'Discrecionales',total: analisis.distribucion.totalDiscrecional, porc: analisis.distribucion.porcDiscrecional },
            {
              label: 'Restante',
              total: presupuesto - (
                analisis.distribucion.totalFijos +
                analisis.distribucion.totalVariables +
                analisis.distribucion.totalHormigas +
                analisis.distribucion.totalDiscrecional
              ),
              porc: analisis.distribucion.porcRestante
            }
          ].map(({ label, total, porc }) => (
            <div key={label} className="chart-item">
              <div className="chart-bar" style={{ height: `${Math.max(porc, 0)}%` }} />
              <span className="chart-label">{label}<br />${total.toFixed(2)}</span>
              <span className="chart-percent">{porc.toFixed(1)}%</span>
            </div>
          ))}
        </div>
      </div>
 
      <div className="consejos">
        <h3>Guía Rápida — Rangos Recomendados</h3>
        <ul>
          <li>
            <strong>Gastos Fijos:</strong> ~50% del presupuesto.
            Necesarios, pero controla que no superen el 60%.
            <em> (Bankrate, 2024 — regla 50/30/20)</em>
          </li>
          <li>
            <strong>Gastos Variables:</strong> 25-30%.
            Esenciales pero con margen de reducción: compara precios, cocina en casa, usa transporte público.
            <em> (BLS Consumer Expenditure Survey, 2024)</em>
          </li>
          <li>
            <strong>Gastos Hormiga:</strong> Idealmente &lt;5%.
            Son los primeros a revisar cuando necesitas liberar dinero.
            <em> (David Bach, "The Latte Factor")</em>
          </li>
          <li>
            <strong>Gastos Discrecionales:</strong> 15-20% máximo.
            Presupuestar para el disfrute evita el abandono del presupuesto.
            <em> (Experian — "How Much Should You Budget for Discretionary Spending?")</em>
          </li>
          <li>
            <strong>Ahorro / Restante:</strong> Apunta a 10-20% mensual.
            Meta de largo plazo: fondo de emergencia de 3-6 meses de gastos esenciales.
            <em> (CFPB — Consumer Financial Protection Bureau)</em>
          </li>
        </ul>
      </div>
    </div>
  )
}
 
export default GastosRecomendaciones