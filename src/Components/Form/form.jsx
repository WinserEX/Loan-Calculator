import { Form, Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import './form.css'

const FormComp = ({state, setState}) => {

    const {id, cuota, prestamo, numCuotas, montoInteres, interes, balance, capital, row} = state

    let DOP = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'DOP',
    });

    let handleFormula = (prestamo,numCuotas,interes) => {
        let cuota = ((prestamo*(interes/100))/(1-(1+(interes/100))**(numCuotas*-1)))
        let balance = prestamo - cuota
        //let balInt = DOP.format(balance)
        //let cuotaInt = DOP.format(cuota)
        let montoInteres = cuota * interes / 100
        //let montoInteresInt = DOP.format(montoInteres)
        let capital = cuota - montoInteres
        //let capitalInt = DOP.format(capital)
        //setState({ ...state, cuota: cuotaInt, balance: balInt, id: 1, montoInteres: montoInteresInt, capital: capitalInt});
        setState({ ...state, cuota: cuota, balance: balance, id: 1, montoInteres: montoInteres, capital: capital});
    }

    let handleRow = () => {
        row.cuota.push(cuota)
        row.capital.push(capital)
        row.montoInteres.push(montoInteres)
        row.balance.push(balance)
        console.log(row)
    }

    function handleClick(e) {
        e.preventDefault();
        handleFormula(parseInt(prestamo, 10), parseInt(numCuotas, 10), parseInt(interes, 10))
        handleRow();     
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        //parseInt(state.prestamo, 10)
        //parseInt(state.numCuotas, 10)
        //parseInt(state.interes, 10)              
    }

    

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
                                value={interes}
                                onChange={(e) => setState({ ...state, interes: e.target.value })}
                            />
                        </Form.Group>
                        <Button className="primary" type="submit" onSubmit={handleSubmit} onClick={handleClick}>Submit</Button>
                    </Form>
                </Row>
            </Container>
        </>
    )
}

export default FormComp;