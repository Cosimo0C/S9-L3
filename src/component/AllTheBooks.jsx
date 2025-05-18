import { Container, Button, Card, Row, Col } from "react-bootstrap";
import scifi from "../data/scifi.json";
import fantasy from "../data/fantasy.json";
import history from "../data/history.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import { Component } from "react";
class AllTheBooks extends Component {
  state = {
    collection: scifi,
  };
  render() {
    return (
      <Container>
        <h2 className="fw-bold">Libri Disponibili</h2>
        <Container>
          <Button className="mx-1" variant="primary" onClick={() => this.setState({ collection: scifi })}>
            Scifi
          </Button>
          <Button className="mx-1" variant="success" onClick={() => this.setState({ collection: fantasy })}>
            Fantasy
          </Button>
          <Button className="mx-1" variant="dark" onClick={() => this.setState({ collection: history })}>
            History
          </Button>
          <Button className="mx-1" variant="danger" onClick={() => this.setState({ collection: horror })}>
            Horror
          </Button>
          <Button className="mx-1" variant="warning" onClick={() => this.setState({ collection: romance })}>
            Romance
          </Button>
        </Container>
        <Container fluid="xxl my-3">
          <Row xs={1} sm={2} md={3} lg={4} xxl={6}>
            {this.state.collection.map((book) => (
              <Col className="mb-4" key={book.asin}>
                <Card className=" h-100">
                  <Card.Img style={{ height: "300px" }} className="img-fluid object-fit-cover w-100" variant="top" src={book.img} />
                  <Card.Body className=" d-flex flex-column justify-content-between h-50">
                    <Card.Title className="text-truncate">{book.title}</Card.Title>
                    <Card.Text>{book.category}</Card.Text>
                    <Card.Text>{book.price}</Card.Text>
                    <Button variant="primary">Scopri di più</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    );
  }
}

export default AllTheBooks;
