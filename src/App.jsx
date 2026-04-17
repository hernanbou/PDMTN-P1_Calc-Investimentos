import { useState } from "react"
import CapturaDados from "./components/CapturaDados"
import ExibeDados from "./components/ExibeDados"



function App() {

  const [resultado, setResultado] = useState(null)
  const [historico, setHistorico] = useState([])

  const handleDados = (dados) => {
    let total = Number(dados.valorInicial)
    let aporte = Number(dados.aporteMensal)
    let taxa = Number(dados.juros) / 100
    let meses = Number(dados.periodo)

    let totalInvestido = Number(dados.valorInicial) + (aporte * meses)

    for (let i = 0; i < meses; i++) {
      total = total + (total * taxa)
      total = total + aporte
    }

    let juros = total - totalInvestido

    let rentabilidade = ((juros / totalInvestido) * 100).toFixed(2)

    const resultadoFinal = {
      total: total.toFixed(2),
      totalInvestido: totalInvestido.toFixed(2),
      juros: juros.toFixed(2),
      aportes: meses,
      rentabilidade
    }

    setResultado(resultadoFinal)

    const novoHistorico ={
      data: new Date().toLocaleString(),
      valorFinal: total.toFixed(2)
    }

    setHistorico([...historico, novoHistorico])
  }

  return (
    <main>
      <div>
        <CapturaDados onCalculo={handleDados}
        />
      </div>
      <div>
        <ExibeDados 
          onDados={resultado}
          onHistory={historico}
          />
      </div>
    </main>
  )
}

export default App