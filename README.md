# Analizador de Gastos Inteligente - Documentación Completa

## Descripción General

Esta es una **aplicación web interactiva** diseñada para ayudarte a clasificar, registrar y analizar tus gastos personales. La app te permite saber en qué estás gastando tu dinero y, lo más importante, **te advierte cuándo algo NO conviene** hacer desde el punto de vista financiero.

---

## Tipos de Gastos Disponibles

La aplicación clasifica todos tus gastos en 4 categorías principales:

### 1. Gastos Fijos
- **Definición**: Gastos obligatorios que tienes que pagar cada mes, con monto prácticamente igual siempre.
- **Ejemplos**: Alquiler, servicios (agua, luz, gas), seguros, préstamos, suscripciones mensuales.
- **Recomendación**: Idealmente deben ser alrededor del **50%** de tu presupuesto total.
- **¿Conviene?**: Sí, son necesarios. Pero si son más del 70%, la app te lo advierte.

### 2. Gastos Variables
- **Definición**: Gastos necesarios para vivir, pero el monto cambia mes a mes.
- **Ejemplos**: Comida del supermercado, transporte público, gasolina, ropa casual, medicamentos.
- **Recomendación**: Aprox. **25-30%** del presupuesto.
- **¿Conviene?**: Sí, son esenciales. Debes controlarlos pero no eliminarlos.

### 3. Gastos Hormigas
- **Definición**: Gastos pequeños y aparentemente insignificantes, pero que sumados representan mucho dinero.
- **Ejemplos**: Café diario, apps suscritas, caramelos, snacks, toques de transporte, donaciones pequeñas.
- **Recomendación**: Máximo **5%** del presupuesto.
- **¿Conviene?**: **NO, NO CONVIENE en exceso**. Son los primeros a revisar si necesitas ahorrar.
- **Advertencia**: La app te alerta si superan el 10% de tu presupuesto.

### 4. Gastos Discrecionales
- **Definición**: Gastos de placer, entretenimiento o capricho. Son totalmente opcionales.
- **Ejemplos**: Cine, restaurantes, viajes, ropa de marca, videojuegos, suscripciones de streaming.
- **Recomendación**: **15-20%** del presupuesto máximo.
- **¿Conviene?**: Está bien tener algo, pero no en exceso. Si superan el 30%, la app te alerta.
- **Balance**: Es importante disfrutar de la vida, pero sin descuidar el ahorro.

---

## Presupuesto Total

- **Definición**: Es la cantidad máxima de dinero que puedes gastar en el mes.
- **Importancia**: Todos tus gastos se comparan con este monto para calcular porcentajes y avisos.
- **Ejemplo**: Si tu presupuesto es $1,000 y gastas $700, te quedan $300 disponibles.
- **¿Conviene?**: Es **fundamental** establecer uno para poder analizar si conviene cada gasto.

---

## Interfaz de Usuario

### Lado Izquierdo: Formulario de Entrada
1. **Presupuesto Total**: Ingresa la cantidad total de dinero disponible para el mes.
2. **Descripción del Gasto**: Escribe una descripción corta del gasto (ej: "Café en la oficina").
3. **Monto ($)**: Ingresa el valor exacto del gasto.
4. **Tipo de Gasto**: Selecciona una categoría de la lista desplegable.
5. **Información del Tipo**: Se muestra una pista de qué significa cada categoría.
6. **Botón Agregar**: Registra el gasto en la aplicación.

### Lado Derecho: Análisis y Resultados

#### Resumen de Gastos
- **Barra de Progreso**: Visualiza visualmente cuánto de tu presupuesto has usado.
- **Presupuesto Total**: Muestra el monto total disponible.
- **Total Gastado**: Suma de todos los gastos registrados y su porcentaje.
- **Restante**: Dinero disponible aún. Verde si es positivo, rojo si excediste.
- **Gastos por Tipo**: Tarjetas individuales para cada categoría mostrando:
  - Subtotal de esa categoría
  - Lista de todos los gastos en esa categoría
  - Opción para eliminar gastos individuales

#### Análisis y Recomendaciones
La app genera recomendaciones automáticas basadas en análisis inteligente:

**Tipos de Alertas:**
1. VERDE (Éxito): Todo va bien, mantén este ritmo.
2. AZUL (Sugerencia): Información útil pero sin urgencia.
3. NARANJA (Advertencia): Presta atención, hay algo a mejorar.
4. ROJO (Error Crítico): Has excedido tu presupuesto.

**Regla 50/30/20 (Estándar Financiero):**
- 50% en gastos esenciales (Fijos + Variables)
- 30% en discrecionales y otros
- 20% para ahorro

---

## Análisis Automático

La aplicación verifica automáticamente lo siguiente:

### 1. ¿Gastos Esenciales muy altos?
- Si Gastos Fijos + Variables > 70% → Advertencia
- Significa que te queda poco para gastos opcionales y ahorro.
- **¿Conviene?** NO, deberías buscar reducir gastos fijos o variables.
- **Fuente**: Regla 50/30/20 — Bankrate (2024). [Ver fuente completa en sección de Referencias](#1-regla-503020---el-sistema-de-presupuesto-balanceado)

### 2. ¿Gastos Hormigas sin control?
- Si Gastos Hormigas > 10% → Alerta
- Estos gastos pequeños se acumulan rápido.
- **¿Conviene?** NO, revisa tu café diario, apps, snacks, etc.
- **Fuente**: David Bach, "The Latte Factor". [Ver fuente completa en sección de Referencias](#2-principio-de-gastos-hormigas---the-latte-factor)

### 3. ¿Demasiado en gastos de placer?
- Si Gastos Discrecionales > 30% → Alerta
- O si NO tienes nada de discrecionales (y hay otros gastos) → Sugerencia
- **¿Conviene?** Necesitas balance: ahorrar pero también disfrutar.
- **Fuente**: Regla 50/30/20 (recomienda máximo 20% en discrecionales). [Ver fuente completa en sección de Referencias](#4-regla-de-gastos-discrecionales)

### 4. ¿Dinero restante insuficiente?
- Si Restante < 0 → ERROR CRÍTICO: Excediste presupuesto.
- Si Restante < 10% → Advertencia: Poco margen de seguridad.
- Si Restante ≥ 20% → Excelente: Buen control.
- **¿Conviene?** Intenta siempre tener al menos 10% para emergencias.
- **Fuente**: CFPB — Consumer Financial Protection Bureau. [Ver fuente completa en sección de Referencias](#3-fondo-de-emergencia---cfpb-y-federal-reserve)

### 5. ¿Gastos Variables fuera de control?
- Si Gastos Variables > 35% → Alerta
- Están consumiendo demasiado del presupuesto.
- **¿Conviene?** NO, revisa comida, transporte y ropa casual.
- **Fuente**: BLS Consumer Expenditure Survey (2024). [Ver fuente completa en sección de Referencias](#5-proporción-de-gastos-variables---bureau-of-labor-statistics)

### 6. ¿Balance entre placer y obligaciones?
- Si Gastos Discrecionales vs Fijos > 50% → Alerta
- Gastas más en placer que en obligaciones.
- **¿Conviene?** NO, invertir prioridades.
- **Fuente**: Análisis de proporciones financieras — Investopedia. [Ver fuente completa en sección de Referencias](#6-flexibilidad-financiera---investopedia)

### 7. ¿Gastos fijos muy bajos?
- Si Gastos Fijos < 30% → Sugerencia positiva
- Buen signo: no estás atrapado en obligaciones.
- **Fuente**: Investopedia — Fixed vs Variable Expenses. [Ver fuente completa en sección de Referencias](#6-flexibilidad-financiera---investopedia)

### 8. ¿Balance óptimo?
- Si 50% ≤ Esenciales ≤ 60% → Sugerencia positiva
- Estás en el rango ideal según expertos.
- **Fuente**: Regla 50/30/20 — Bankrate (2024). [Ver fuente completa en sección de Referencias](#1-regla-503020---el-sistema-de-presupuesto-balanceado)

---

## Recomendaciones Automáticas Extendidas

La app genera automáticamente hasta **9 tipos de recomendaciones**:

| # | Condición | Tipo | Acción |
|---|-----------|------|--------|
| 1 | Esenciales > 70% | Advertencia | Reduce fijos/variables |
| 2 | 50-60% en esenciales | Éxito | Mantén este balance |
| 3 | Fijos < 30% | Sugerencia | Buen signo |
| 4 | Variables > 35% | Alerta | Controla variables |
| 5 | Hormigas > 10% | Alerta | Revisa pequeños gastos |
| 6 | Hormigas 5-10% | Sugerencia | Sigue monitoreando |
| 7 | Discrecionales 15-25% | Éxito | Balance saludable |
| 8 | Disc/Fijos > 50% | Alerta | Invierte prioridades |
| 9 | Restante < 10% | Advertencia | Aumenta ahorro |

---

## Gráfico de Distribución

Se muestra un gráfico de barras comparativo que ilustra:
- Altura de cada barra = porcentaje del presupuesto
- 5 columnas: Fijos, Variables, Hormigas, Discrecionales, Restante
- Al pasar el mouse, se resalta la barra
- Te ayuda a visualizar rápidamente dónde va tu dinero

---

## Consejos Generales Incluidos

La app muestra automáticamente consejos como:

| Tipo | Porcentaje Ideal | Qué hacer |
|------|------------------|-----------|
| Fijos | ~50% | Necesarios pero intenta reducirlos |
| Variables | 25-30% | Controla pero no elimines |
| Hormigas | <5% | REVISA PRIMERO si necesitas ahorrar |
| Discrecionales | 15-20% | Presupuesta para disfrutar |
| Ahorro | 10-20% | Guarda para emergencias |

---

## Funcionalidades Técnicas

### Estado (State Management)
- **gastos**: Array que almacena todos los gastos registrados con ID único.
- **presupuesto**: Número que guarda el presupuesto total.

### Componentes React
1. **App.jsx**: Componente raíz con header de la aplicación.
2. **GastosAnalyzer.jsx**: Orquesta todo, maneja estados principales.
3. **GastosForm.jsx**: Formulario para agregar nuevos gastos.
4. **GastosResumen.jsx**: Muestra todos los gastos clasificados.
5. **GastosRecomendaciones.jsx**: Genera análisis inteligente.

### Funciones Principales
- `agregarGasto()`: Registra un nuevo gasto.
- `eliminarGasto()`: Elimina un gasto del registro.
- `actualizarPresupuesto()`: Actualiza el presupuesto total.
- Cálculos automáticos de porcentajes y alertas.

---

## Ejemplo Práctico

**Escenario**: Tu presupuesto mensual es **$1,000**

| Tipo | Gasto | Porcentaje | ¿Conviene? |
|------|-------|-----------|-----------|
| Fijos | $500 | 50% | Perfecto |
| Variables | $250 | 25% | Bueno |
| Hormigas | $80 | 8% | Revisa |
| Discrecionales | $100 | 10% | Bien |
| **RESTANTE** | **$70** | **7%** | Poco ahorro |

**Recomendaciones de la app:**
1. Gastos Hormigas al 8% - Reduce a <5%
2. Solo 7% de ahorro - Intenta llegar a 10-20%

**¿Qué hacer?**
- Reduce hormigas en ~$30 (café, snacks, apps)
- Ahora tienes $100 de ahorro = 10%

---

## Cómo Usar

1. **Ingresa tu Presupuesto**: Escribe la cantidad total disponible.
2. **Registra cada Gasto**: Llena descripción, monto, selecciona tipo.
3. **Presiona "Agregar"**: El gasto se registra inmediatamente.
4. **Lee las Recomendaciones**: La app te dice qué NO conviene.
5. **Ajusta si necesario**: Elimina o modifica gastos según el análisis.
6. **Repite**: Registra todos tus gastos del mes.

---

## Diseño Visual

- **Colores**: Colores profesionales y claros.
- **Responsivo**: Funciona en PC, tablet y móvil.
- **Accesibilidad**: Etiquetas claras, contraste adecuado.
- **Interactividad**: Botones sencillos y efectivos.

---

## Conclusión

Esta aplicación es tu **asesor financiero personal** que:
- Clasifica tus gastos automáticamente
- Te muestra en qué gastas dinero
- Te advierte qué NO conviene hacer
- Te ayuda a tomar mejores decisiones financieras
- Promueve el ahorro responsable

**Recuerda**: El objetivo es no eliminar gastos, sino ser **consciente** de dónde va tu dinero y hacer ajustes inteligentes.

---

## Fuentes y Referencias

Esta aplicación se basa en metodologías de finanzas personales reconocidas y estándares financieros internacionales:

### 1. Regla 50/30/20 - El Sistema de Presupuesto Balanceado

- **Fuente Principal**: [Bankrate — "What is the 50/30/20 budget rule?"](https://www.bankrate.com/personal-finance/what-is-the-50-30-20-rule/)
  - **Autor**: Karen Bennett, reportera senior de finanzas personales en Bankrate
  - **Fecha de publicación**: 5 de agosto de 2024
  - **Tipo**: Artículo editorial con revisión financiera certificada

- **Descripción Extendida**: Sistema de presupuesto popularizado por la senadora Elizabeth Warren y su hija Amelia Warren Tyagi en su libro *All Your Worth: The Ultimate Lifetime Money Plan* (2005). Divide el ingreso neto después de impuestos en tres categorías:
  - **50%** para necesidades (*needs*): alquiler, servicios, transporte esencial, alimentación básica
  - **30%** para deseos (*wants*): entretenimiento, gastos discrecionales, ocio
  - **20%** para ahorro y deuda: fondos de emergencia, retiro, pago acelerado de deudas

- **Aplicación en la app**: Base del análisis de gastos esenciales. Cuando Fijos + Variables superan el 70%, la app genera advertencia; entre 50-60%, genera confirmación de éxito.

- **Fuentes alternativas verificadas**:
  - [Fortune — "How to budget: 50/30/20 rule"](https://fortune.com/article/how-to-budget-50-30-20-rule)

---

### 2. Principio de Gastos Hormigas - The Latte Factor

- **Fuente Principal**: [David Bach — "The Latte Factor: Why I Wrote This Book Now"](https://davidbach.com/david-bach-the-latte-factor-why-i-wrote-this-book-now/)
  - **Autor**: David Bach, autor de finanzas personales 10 veces en la lista *New York Times* Best Sellers
  - **Tipo**: Artículo en el sitio oficial del autor
  - **Concepto central**: Los pequeños gastos diarios acumulados resultan en cantidades significativas a lo largo del tiempo

- **Descripción Extendida**:
  - Ejemplo del propio Bach: $10 diarios en café, muffins y snacks = ahorro potencial de varios millones al retirarse si se invierte desde joven
  - $5 diarios invertidos con 10% anual = ~$948,611 en 40 años
  - El concepto va más allá del café: aplica a suscripciones olvidadas, snacks, apps, compras impulsivas pequeñas
  - Énfasis en que pequeños cambios sostenibles son más efectivos que presupuestos drásticos

- **Aplicación en la app**:
  - Alerta cuando Gastos Hormiga superan el 10% del presupuesto
  - Sugerencia de monitoreo cuando están entre 5-10%
  - Categoría dedicada para rastrear estos micro-gastos frecuentes

- **Fuentes alternativas verificadas**:
  - [Afford Anything — "The Latte Factor, with author David Bach" (podcast)](https://affordanything.com/192-the-latte-factor-with-author-david-bach/)
  - [Receiptix — "Small Purchases, Big Impact: Understanding the Latte Factor" (2024)](https://receiptix.io/blog/2024/12/16/small-purchases-big-impact-understanding-the-latte-factor)
  - [Financial Mentor — Latte Factor Calculator](https://www.financialmentor.com/calculator/latte-factor-calculator)

---

### 3. Fondo de Emergencia - CFPB y Federal Reserve

- **Fuente Principal**: [Consumer Financial Protection Bureau (CFPB) — Consumer Tools: Youth Financial Education](https://www.consumerfinance.gov/consumer-tools/educator-tools/youth-financial-education/)
  - **Organización**: Agencia federal independiente de EE.UU. creada por el Congreso para proteger al consumidor financiero
  - **Recomendación oficial**: Mantener un fondo de emergencia equivalente a 3-6 meses de gastos esenciales de vida

- **Descripción Extendida**:
  - El CFPB recomienda que el fondo de emergencia cubra gastos esenciales: vivienda, servicios, alimentación, transporte e insurance
  - Para trabajadores independientes o con ingresos variables, la recomendación sube a 9-12 meses
  - El **Federal Reserve Report on the Economic Well-Being of U.S. Households (2024)** encontró que solo el 55% de adultos estadounidenses tenía ahorros suficientes para cubrir tres meses de gastos
  - El mismo reporte indica que el 13% no podría cubrir una emergencia de $400 por ningún medio
  - Mantener al menos 10% del presupuesto mensual como restante es el primer escalón hacia esa meta de largo plazo

- **Aplicación en la app**:
  - Error crítico si el restante cae por debajo de 0% (déficit mensual)
  - Advertencia si el restante es menor al 10% (fondo de seguridad insuficiente)
  - Éxito si el restante es igual o mayor al 20% (buen ritmo de ahorro)

- **Fuentes alternativas verificadas**:
  - [The Business Standard — "What is an emergency fund and how much should you actually save?" (marzo 2026)](https://www.tbsnews.net/features/how-much-should-you-actually-save)

---

### 4. Regla de Gastos Discrecionales

- **Fuente Principal**: [Experian — "How Much Should You Budget for Discretionary Spending?"](https://www.experian.com/blogs/ask-experian/how-much-to-budget-for-discretionary-spending/)
  - **Autor**: Ben Luthi, especialista en finanzas personales con publicaciones en Time, USA Today y NerdWallet
  - **Tipo**: Artículo editorial de Experian, una de las tres principales agencias de crédito de EE.UU.
  - **Estándar**: Máximo 30% del presupuesto para gastos discrecionales, basado en la regla 50/30/20

- **Descripción Extendida**:
  - Gastos discrecionales incluyen: cine, restaurantes, viajes, ropa de marca, videojuegos, streaming
  - Experian recomienda la regla 50/30/20 como punto de partida: 50% en necesidades, 30% en discrecionales y 20% en ahorro y pago de deuda
  - Si se tiene deuda alta o metas de ahorro ambiciosas, se recomienda reducir el porcentaje discrecional por debajo del 30%
  - Si los gastos básicos no consumen el 50% del ingreso, hay más libertad para ajustar los otros dos segmentos
  - El equilibrio psicológico importa: presupuestos demasiado restrictivos llevan al abandono del plan financiero

- **Aplicación en la app**:
  - Alerta si discrecionales superan el 30%
  - Éxito si discrecionales están entre 15-25%
  - Sugerencia si discrecionales son 0% (el presupuesto puede volverse insostenible a largo plazo)

- **Fuentes alternativas verificadas**:
  - [NerdWallet — "How to Budget Money: A Step-By-Step Guide"](https://www.nerdwallet.com/article/finance/how-to-budget)
  - [Discover — "The beginner's guide to budgeting with the 50-20-30 rule"](https://www.discover.com/online-banking/banking-topics/budgeting-with-the-50-20-30-rule/)

---

### 5. Proporción de Gastos Variables - Bureau of Labor Statistics

- **Fuente Principal**: [Bureau of Labor Statistics — Consumer Expenditure Survey (CEX)](https://www.bls.gov/cex/)
  - **Institución**: Departamento de Trabajo de EE.UU., división de estadísticas del consumidor
  - **Datos base**: Consumer Expenditure Survey, actualizado anualmente
  - **Rango reportado**: 28-30% del presupuesto destinado a gastos variables en el hogar promedio

- **Descripción Extendida**:
  - Los gastos variables incluyen: alimentación en casa, transporte, ropa casual, medicamentos de uso regular
  - A diferencia de los fijos, los variables tienen mayor margen de reducción (comparar precios, cocinar en casa)
  - Superar el 35% reduce significativamente el margen disponible para ahorro y emergencias
  - El promedio nacional reportado por el CEX se sitúa entre 28-30%, considerado el rango óptimo

- **Aplicación en la app**:
  - Alerta si gastos variables superan el 35%
  - Rango neutro/óptimo: 25-30%
  - Sugerencia positiva si están por debajo del 25% (excelente control)

- **Fuentes alternativas verificadas**:
  - [Investopedia — "Variable Cost"](https://www.investopedia.com/terms/v/variablecost.asp)

---

### 6. Flexibilidad Financiera - Bankrate

- **Fuente Principal**: [Bankrate — "Fixed Expenses Vs. Variable Expenses: What's the Difference?"](https://www.bankrate.com/personal-finance/fixed-expenses-vs-variable-expenses/)
  - **Autor**: Karen Bennett, reportera senior de finanzas personales en Bankrate
  - **Fecha de publicación**: 17 de abril de 2025, actualizado en agosto de 2025
  - **Tipo**: Artículo editorial verificado por el Financial Review Board de Bankrate
  - **Tema**: Diferencia entre gastos fijos y variables, y cómo presupuestar ambos para mejorar la estabilidad financiera

- **Descripción Extendida**:
  - Los gastos fijos (renta, seguros, préstamos) son predecibles y deben priorizarse en el presupuesto por ser los más difíciles de reducir a corto plazo
  - Bankrate recomienda la regla 50/30/20 como marco de referencia: ~50% del ingreso neto hacia necesidades, donde la mayoría de los fijos se concentran
  - Mantener gastos fijos por debajo del 50% del ingreso otorga mayor margen de maniobra ante cambios de vida (pérdida de empleo, mudanza, emergencias)
  - Los gastos variables, aunque necesarios, ofrecen mayor flexibilidad para reducir en momentos de ajuste financiero
  - Conocer la diferencia entre fijos y variables permite identificar con precisión dónde recortar sin comprometer las obligaciones esenciales

- **Aplicación en la app**:
  - Sugerencia positiva cuando fijos están por debajo del 30% (alta flexibilidad financiera)
  - Neutro cuando fijos están entre 30-50% (proporción normal según la regla 50/30/20)
  - Advertencia cuando fijos superan el 50% (baja flexibilidad y poco margen de ahorro)

- **Fuentes alternativas verificadas**:
  - [PocketGuard — "Fixed Expenses: Definition, Examples & How to Budget"](https://pocketguard.com/blog/fixed-expenses/)

---

## Metodología del Análisis

La aplicación utiliza **análisis por percentiles** de cada categoría contra el presupuesto total:

```
Porcentaje = (Gastos en Categoría / Presupuesto Total) × 100
```

Luego compara estos percentiles contra **umbrales definidos por expertos** para generar recomendaciones inteligentes.

**Niveles de Severidad**:
- **Crítica** (Rojo): Requiere acción inmediata
- **Alta** (Naranja): Necesita atención pronto
- **Media** (Amarilla): Monitorea de cerca
- **Baja** (Verde/Azul): Información positiva o neutral

---

## Limitaciones Conocidas

Esta app proporciona **análisis general** basado en estándares financieros, pero:
- No reemplaza asesoría de un profesional financiero certificado (CFP)
- Los umbrales son recomendaciones generales; cada situación personal es diferente
- No considera inflación, cambios de contexto o situaciones especiales (altos costos de vida, ingresos variables)
- Se basa en presupuestos mensuales simples; no cubre inversiones ni deuda compleja

---

## Changelog

**v1.0** - Lanzamiento inicial
- 4 categorías de gastos
- Regla 50/30/20
- Análisis automático con 9 tipos de recomendaciones
- Gráfico de distribución
- Basado en estándares financieros reconocidos con fuentes verificadas y accesibles
