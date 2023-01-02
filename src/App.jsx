import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import FormComp from './Components/Form/form';

function App() {
  const [count, setCount] = useState(0)

  return (
    <FormComp />
  )
}

export default App
