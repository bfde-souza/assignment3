import { Navbar, Nav, Container } from "react-bootstrap";
import Link from "next/link";

export default function MainNav() {
  return (
    <>
      <Navbar className="fixed-top navbar-dark bg-dark" expand="lg">
        <Container>
          <Navbar.Brand>Bruno Felipi de Souza</Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar-nav" />
          <Navbar.Collapse id="main-navbar-nav">
            <Nav className="me-auto">
              <Link href="/" passHref legacyBehavior>
                <Nav.Link>Listings</Nav.Link>
              </Link>
              <Link href="/about" passHref legacyBehavior>
                <Nav.Link>About</Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
      <br />
    </>
  );
}