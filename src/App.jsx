import CapturaDados from "./components/CapturaDados"


const calcular = (dados) => {
  console.log(dados)
}

function App() {

  return (
    <div>
      <CapturaDados onCalculo={calcular}/>
    </div>
  )
}

export default App