import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

function App() {
  return (
    <Container fluid>
      <Card className="text-black m-5" style={{ borderRadius: "25px" }}>
        <Card.Body>
          <Row>
            <Col
              md="10"
              lg="6"
              className="order-2 order-lg-1 d-flex flex-column align-items-center"
            >
              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                Sign up
              </p>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <Form.Control
                  type="text"
                  placeholder="Name"
                  className="w-100"
                />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <Form.Control type="email" placeholder="Your Email" />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <Form.Control type="password" placeholder="Password" />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <Form.Control
                  type="password"
                  placeholder="Repeat your password"
                />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <Form.Control type="text" placeholder="Age" className="w-100" />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Address"
                  className="w-100"
                />
              </div>

              <div className="mb-4">
                <Form.Check
                  type="checkbox"
                  label="Subscribe to our newsletter"
                  id="flexCheckDefault"
                />
              </div>

              <Button className="mb-4" size="lg">
                Register
              </Button>
            </Col>

            <Col
              md="10"
              lg="6"
              className="order-1 order-lg-2 d-flex align-items-center"
            >
              <Card.Img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                fluid
              />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default App;
