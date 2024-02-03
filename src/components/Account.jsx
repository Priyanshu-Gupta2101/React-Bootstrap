import { useState } from "react";
import { Container, Card, Form, Button } from "react-bootstrap";

function Account() {
  const [userData, setUserData] = useState({
    name: "John Doe",
    email: "john@example.com",
    age: 30,
    address: "123 Main St, Cityville",
  });

  const [editMode, setEditMode] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditMode(!editMode);
  };

  return (
    <Container className="mt-4">
      {editMode ? (
        <Card className="account-card">
          <Card.Body>
            <Card.Title className="mb-4">Account Details</Card.Title>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="name" className="mb-4">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={userData.name}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="email" className="mb-4">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={userData.email}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="age" className="mb-4">
                <Form.Label>Age</Form.Label>
                <Form.Control
                  type="number"
                  name="age"
                  value={userData.age}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="address" className="mb-4">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="address"
                  value={userData.address}
                  onChange={handleChange}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Save
              </Button>
            </Form>
          </Card.Body>
        </Card>
      ) : (
        <Card
          className="p-4 mb-4 shadow"
          style={{ backgroundColor: "#f8f9fa" }}
        >
          <Card.Body>
            <Card.Title className="mb-4">Account Details</Card.Title>
            <div className="account-details">
              <p>
                <strong>Name:</strong> {userData.name}
              </p>
              <p>
                <strong>Email:</strong> {userData.email}
              </p>
              <p>
                <strong>Age:</strong> {userData.age}
              </p>
              <p>
                <strong>Address:</strong> {userData.address}
              </p>
              <Button variant="primary" onClick={() => setEditMode(true)}>
                Edit
              </Button>
            </div>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
}

export default Account;
