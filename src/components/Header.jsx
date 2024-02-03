import { Navbar, Nav, Button, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

function Header() {
  return (
    <Navbar fixed="top" bg="dark" variant="dark" expand="lg" className="px-5 ">
      <Navbar.Brand as={Link} to="/">
        Your Website Name
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse
        id="basic-navbar-nav"
        className="d-flex justify-content-end "
      >
        <Nav className="ml-auto mr-4 align-items-center">
          <Nav.Link as={Link} to="/signup">
            <Button>Signup</Button>
          </Nav.Link>
          <Nav.Link as={Link} to="/login">
            <Button>Login</Button>
          </Nav.Link>
          <NavDropdown title={<FaUser />} className="dropstart top-10">
            <NavDropdown.Item as={Link} to="/account">
              Profile
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
