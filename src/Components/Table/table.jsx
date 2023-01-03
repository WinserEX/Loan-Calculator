import Table from 'react-bootstrap/Table';
import { Container } from 'react-bootstrap';

function TableComp({id, prestamo, numCuota, interes, cuota}) {
  return (
    <Container>
        <Table striped bordered hover>
        <thead>
            <tr>
            <th>#</th>
            <th>Monto de Prestamo</th>
            <th>Cantidad de Cuotas</th>
            <th>Porcentaje de Interes</th>
            <th>Monto Cuota</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>{id}</td>
            <td>{prestamo}</td>
            <td>{numCuota}</td>
            <td>{interes}</td>
            <td>{cuota}</td>
            </tr>
        </tbody>
        </Table>
    </Container>    
  );
}

export default TableComp;