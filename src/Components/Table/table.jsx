import Table from 'react-bootstrap/Table';
import { Container } from 'react-bootstrap';

function TableComp({id, prestamo, numCuota, interes, cuota, balance, int2}) {
  return (
    <Container>
        <Table striped bordered hover>
        <thead>
            <tr>
              <th>#</th>
              <th>Monto Cuota</th>
              <th>Monto de Prestamo</th>
              <th>Cantidad de Cuotas</th>
              <th>Porcentaje de Interes</th>
              <th>Interes</th>
              <th>Balance</th>           
            </tr>
        </thead>
        <tbody>
            <tr>
              <td>{id}</td>
              <td>{cuota}</td>
              <td>{prestamo}</td>
              <td>{numCuota}</td>
              <td>{int2}</td>
              <td>{interes}</td>
              <td>{balance}</td>
            </tr>
        </tbody>
        </Table>
    </Container>    
  );
}

export default TableComp;