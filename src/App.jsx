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
  const [state, setState] = useState({id: "", cuota: 0, prestamo: 0, numCuotas: 0, interes: 0, balance: 0, int2: 0});

  return (
    <>
      <FormComp 
        state={state} 
        setState={setState}
      />

      <TableComp 
        id={state.id} 
        prestamo={state.prestamo} 
        numCuota={state.numCuotas} 
        interes={state.interes}  
        cuota={state.cuota} 
        balance={state.balance}
        int2={state.int2}
      />
    </>
  )
}

export default App
