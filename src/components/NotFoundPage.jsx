import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ marginTop: "10em" }}
    >
      <Row>
        <Col>
          <h1 className="text-center">404 - Page Not Found</h1>
          <p className="text-center">
            The page you are looking for does not exist.
          </p>
          <div className="text-center">
            <Button as={Link} to="/signup" variant="primary">
              Go to Sign Up
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default NotFoundPage;
