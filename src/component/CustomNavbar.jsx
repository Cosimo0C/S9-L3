import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function CustomNavbar() {
  return (
    <Navbar expand="lg" className="bg-dark">
      <Container>
        <Navbar.Brand className="text-success" href="#home">
          S9-L2
        </Navbar.Brand>
        <Nav className="flex-row fw-semibold gap-2 text-success">
          <Nav href="#">Home</Nav>
          <Nav href="#">About</Nav>
          <Nav href="#">Browse</Nav>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
