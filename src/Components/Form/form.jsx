import { Form, Container, Row, Col } from "react-bootstrap";
import ButtonComp from "../Button/button";
import './form.css'

const FormComp = ({onClick, state, setState}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        onClick(
                parseInt(state.prestamo, 10), 
                parseInt(state.numCuotas, 10), 
                parseInt(state.interes, 10)
                )
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
                            <Form.Control type="number" placeholder="¿Cuántas cuotas?" />
                        </Form.Group>

                        <Form.Group controlId="interes">
                            <Form.Label>Porcentaje de Interes</Form.Label>
                            <Form.Control type="number" placeholder="¿Cuántas cuotas?" />
                        </Form.Group>
                        <button type="submit" onClick={onClick}>Test</button>
                        <ButtonComp 
                            type="submit" 
                            variant={"primary"} 
                            buttonText={"Calcular"}
                            onClick={handleSubmit} 
                        />
                    </Form>
                </Row>
            </Container>
        </>
    )
}

export default FormComp;