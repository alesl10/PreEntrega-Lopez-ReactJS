import "./navbar.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardWidget from '../cardWidget';


function Menu() {
  return (
    <div className='NavBar'>
      <Navbar bg="dark" expand="xxl" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Tazarpado</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="index.html">Home</Nav.Link>
            <NavDropdown title="Tazas" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Ceramica</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Polimero
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Jarros termico</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="disabled" href="#action/3.4">
                Tazarpado
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <CardWidget />
    </div>

  );
}

export default Menu;