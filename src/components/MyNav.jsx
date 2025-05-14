import { Navbar, Nav, Container } from "react-bootstrap";

const MyNav = () => (
  <Navbar expand="lg" className="bg-body-tertiary mb-3" bg="dark" data-bs-theme="dark">
    <Container fluid>
      <Navbar.Brand href="#">S9-L3</Navbar.Brand>
      <Nav>
        <Nav.Link href="#">Home</Nav.Link>
        <Nav.Link href="#">About</Nav.Link>
        <Nav.Link href="#">Browse</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
);

export default MyNav;
