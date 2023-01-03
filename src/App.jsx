import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import FormComp from './Components/Form/form';
import TableComp from './Components/Table/table';

function App() {
  /*
  Formula:
  C = monto cuota
  V = monto prestamo
  N = numero cuotas
  i = interes mensual (interes anual/12)/100
  C = ((V * i)/ (1-(1 + i)**(N * -1)))
  */

  //const [id, setID] = useState(1)
  //const [montoPrestamo, setMontoPrestamo] = useState(5000)
  //const [cantidadCuotas, setCantidadCuotas] = useState(24)
  //const [porcentajeInteres, setPorcentajeInteres] = useState(0.3)
  const [state, setState] = useState({id: "", cuota: "", prestamo: "", numCuotas: "", interes: ""});

  let handleFormula = (v,n,i) => {
    let c = ((v*i)/(1-(1+i)**(n*-1)))
    console.log(`$${Math.round(c)}`)
  }

  return (
    <>
      <FormComp 
        onClick={handleFormula} 
        state={state} 
        setState={setState}
      />
      
      <TableComp 
        id={state.id} 
        prestamo={state.prestamo} 
        numCuota={state.numCuotas} 
        interes={state.interes}  
        cuota={state.cuota} 
      />
    </>
  )
}

export default App
