import Card from "react-bootstrap/Card";

function SingleBook(libro) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Img src={libro.img} alt={`comertina di${libro.title}`}></Card.Img>
        <Card.Title>{libro.title}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default SingleBook;
