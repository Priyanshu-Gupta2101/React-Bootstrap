import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark text-white mt-auto">
      <Container className="py-3">
        <div className="d-flex flex-row justify-content-center px-auto">
          &copy; {new Date().getFullYear()} Your Company: Created by{" "}
          <Link
            to={"https://github.com/Priyanshu-Gupta2101"}
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Priyanshu Gupta
          </Link>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
