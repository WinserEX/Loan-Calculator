import { Form, Container, Row, Col } from "react-bootstrap";
import ButtonComp from "../Button/button";
import './form.css'

const FormComp = () => {
    return (
        <>
            <Container className="container">
                <Row>
                    <Form>
                        <Form.Group controlId="loan">
                            <Form.Label>Monto de Prestamo</Form.Label>
                            <Form.Control type="number" placeholder="¿Cuánto dinero?" />
                        </Form.Group>

                        <Form.Group controlId="cuotas">
                            <Form.Label>Cantidad de Cuotas</Form.Label>
                            <Form.Control type="number" placeholder="¿Cuántas cuotas?" />
                        </Form.Group>

                        <Form.Group controlId="interes">
                            <Form.Label>Porcentaje de Interes</Form.Label>
                            <Form.Control type="number" placeholder="¿Cuántas cuotas?" />
                        </Form.Group>

                        <ButtonComp type="submit" variant={"primary"} />
                    </Form>
                </Row>
            </Container>
        </>
    )
}

export default FormComp;