import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CustomNavbar from "./component/CustomNavbar";
import MyFooter from "./component/MyFooter";
import Welcome from "./component/Welcome";
import AllTheBooks from "./component/AllTheBooks";
import { Container } from "react-bootstrap";
function App() {
  return (
    <Container fluid>
      <CustomNavbar />
      <Welcome />
      <AllTheBooks />
      <MyFooter />
    </Container>
  );
}

export default App;
