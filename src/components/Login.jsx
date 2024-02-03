import { Card, Col, Button, Form, Container } from "react-bootstrap";

function App() {
  return (
    <Container fluid>
      <Card
        style={{
          padding: "2em",
          borderRadius: "25px",
        }}
      >
        <Card.Body
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Col xs={10} md={6}>
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid"
              alt="Sample image"
            />
          </Col>

          <Col
            xs={8}
            md={6}
            style={{
              paddingTop: "5em",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
              Login
            </p>
            <Form.Control
              className="mb-4"
              placeholder="Email address"
              type="email"
              size="md"
              style={{ width: "50%" }}
            />
            <Form.Control
              className="mb-4"
              placeholder="Password"
              type="password"
              size="md"
              style={{ width: "50%" }}
            />

            <div className="d-flex align-items-end flex-column mb-4">
              <Form.Check
                type="checkbox"
                label="Remember me"
                id="flexCheckDefault"
              />
              {"    "}
              <a href="!#">Forgot password?</a>
            </div>

            <div className="d-flex flex-column align-items-center text-center text-md-start mt-4 pt-2">
              <Button className="mb-0 px-5" size="lg">
                Login
              </Button>
              <p className="small fw-bold mt-2 pt-1 mb-2">
                Don&apos;t have an account?{" "}
                <a href="#!" className="link-danger">
                  Sign Up
                </a>
              </p>
            </div>
          </Col>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default App;
