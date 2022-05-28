import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import img from "../../assets/images/user.jpg";
import { Image } from "../../components/core";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <Image
            src={img}
            className="rounded-circle mr-3"
            width={"32"}
            height={"32"}
          />
          React
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end font-semi-small"
        >
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="About Us" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Details</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Contact Us</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">About US</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home">Our Services</Nav.Link>
            <Nav.Link href="#home">News & Event</Nav.Link>
            <NavDropdown title="Our Projects" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Project1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Project2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Project3</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Project4</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home">Careers</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
