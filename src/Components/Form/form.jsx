import { Form, Container, Row, Col } from "react-bootstrap";
//import ButtonComp from "../Button/button";
import './form.css'

const FormComp = ({state, setState}) => {

    let handleFormula = (prestamo,numCuotas,interes) => {
        let cuota = ((prestamo*interes)/(1-(1+interes)**(numCuotas*-1)))
        console.log(`$${parseInt(cuota, 10)}`);
    }

    function handleClick(e) {
        e.preventDefault();
        //setState({ ...state, rows: getAmortizationTable(state.V, state.N, state.i) });
        handleFormula(parseInt(state.prestamo, 10), parseInt(state.numCuotas, 10), parseInt(state.interes, 10))
    }

    const handleSubmit = (e) => {
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
                            />
                        </Form.Group>

                        <Form.Group controlId="cuotas">
                            <Form.Label>Cantidad de Cuotas</Form.Label>
                            <Form.Control 
                                type="number" 
                                placeholder="¿Cuántas cuotas?" 
                                //value={state.numCuotas}
                            />
                        </Form.Group>

                        <Form.Group controlId="interes">
                            <Form.Label>Porcentaje de Interes</Form.Label>
                            <Form.Control type="number" placeholder="¿Cuántas cuotas?" />
                        </Form.Group>
                        <button type="submit" onSubmit={handleSubmit} onClick={handleClick}>Test</button>
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