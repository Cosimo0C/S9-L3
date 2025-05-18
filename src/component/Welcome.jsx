import Alert from "react-bootstrap/Alert";

function Welcome() {
  return (
    <>
      <Alert variant={"success"}>
        {" "}
        Ciao! Benvenuto nel mio Shop!
        <h2> Prova a cercare cosa ti serve</h2>
      </Alert>
    </>
  );
}

export default Welcome;
