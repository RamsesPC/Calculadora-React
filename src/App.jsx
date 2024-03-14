import { useState } from "react"
import './styles.css';
function App() {
const[numeroUno, setNumeroUno]= useState(0);
const[numeroDos, setNumeroDos]= useState(0);
const[resultado, setResultado]= useState(0);

const handleChange=(event)=>{
  setNumeroUno(event.target.value)
}
const handleChangeDos=(event)=>{
  setNumeroDos(event.target.value)
}

const handleSumar=(event)=>{
  setResultado(parseFloat(numeroUno) + parseFloat(numeroDos))
}
const handleRest=(event)=>{
  setResultado(parseFloat(numeroUno) - parseFloat(numeroDos))
}
const handleMult=(event)=>{
  setResultado(parseFloat(numeroUno) * parseFloat(numeroDos))
}
const handleDiv=(event)=>{
  setResultado(parseFloat(numeroUno) / parseFloat(numeroDos))
}
  return (
    <>
     <h1>Calculadora</h1>
    <input type="text"  placeholder="Numero 1" value={numeroUno} onChange={handleChange}/>
    <input type="text" placeholder="Numero 2" value={numeroDos} onChange={handleChangeDos}/>
    <hr />
    <button onClick={handleSumar}>Suma</button>
    <button onClick={handleRest}>Restar</button>
    <button onClick={handleMult}>Multiplicar</button>
    <button onClick={handleDiv}>Dividir</button>
    <hr />
    <p>Resultado: {resultado}</p>
    </>
  )
}

export default App
