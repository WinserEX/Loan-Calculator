import { Form, Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import './form.css'

const FormComp = ({state, setState}) => {

    const {id, cuota, prestamo, numCuotas, int2, interes, balance} = state

    let handleFormula = (prestamo,numCuotas,interes) => {
        let cuota = ((prestamo*interes)/(1-(1+interes)**(numCuotas*-1)))
        let balance = prestamo - (cuota/numCuotas)
        let balInt = `$${parseInt(balance, 10)}`
        let cuotaInt = `$${parseFloat(cuota).toFixed(2)}`
        let montoInteres = (cuota * interes / 100)
        let mInteInt = `$${parseFloat(montoInteres).toFixed(2)}`
        setState({ ...state, cuota: cuotaInt, balance: balInt, id: 1, int2: mInteInt });
    }

    function handleClick(e) {
        e.preventDefault();
        //setState({ ...state, rows: getAmortizationTable(state.V, state.N, state.i) });
        handleFormula(parseInt(prestamo, 10), parseInt(numCuotas, 10), parseInt(interes, 10))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //parseInt(state.prestamo, 10)
        //parseInt(state.numCuotas, 10)
        //parseInt(state.interes, 10)              
    }

    console.log(state)
    return (
        <>
            <Container className="container">
                <Row>
                    <Form className="mx-auto">
                        <Form.Group controlId="loan">
                            <Form.Label>Monto de Prestamo</Form.Label>
                            <Form.Control 
                                type="number" 
                                placeholder="¿Cuánto dinero?"
                                value={prestamo} 
                                onChange={(e) => setState({ ...state, prestamo: e.target.value })}
                            />
                        </Form.Group>

                        <Form.Group controlId="cuotas">
                            <Form.Label>Cantidad de Cuotas</Form.Label>
                            <Form.Control 
                                type="number" 
                                placeholder="¿Cuántas cuotas?" 
                                value={numCuotas}
                                onChange={(e) => setState({ ...state, numCuotas: e.target.value })}
                            />
                        </Form.Group>

                        <Form.Group controlId="interes">
                            <Form.Label>Porcentaje de Interes</Form.Label>
                            <Form.Control 
                                type="number" 
                                placeholder="Porcentaje de Interes" 
                                value={state.interes}
                                onChange={(e) => setState({ ...state, interes: e.target.value })}
                            />
                        </Form.Group>
                        <Button className="primary" type="submit" onSubmit={handleSubmit} onClick={handleClick}>Submit</Button>
                        {/* <ButtonComp 
                            type="submit" 
                            variant={"primary"} 
                            buttonText={"Calcular"}
                            onClick={handleSubmit} 
                        /> */}
                    </Form>
                </Row>
            </Container>
        </>
    )
}

export default FormComp;