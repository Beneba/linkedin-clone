import React from "react";
import { Navbar,Nav,Form, Button, NavDropdown,FormControl, Container} from 'react-bootstrap';
// import { FiSearch} from 'react-icons'
import LinkedInlogo from '../../image/logo.png';

function Header() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#"><img src = {LinkedInlogo}  height ="50px" alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
             
            <Form className="d-flex">
              
              <FormControl
               
                type="search" 
                placeholder=" Search for jobs and companies"
                className="me-2"
                aria-label="Search "
              />
              <Button variant="outline-success">Search</Button>
            </Form>

            <Nav.Link href="#action1">Home </Nav.Link>
              <Nav.Link href="#action2">My Network</Nav.Link>
              <Nav.Link href="#action2">Jobs</Nav.Link>
              <Nav.Link href="#action2">Messaging</Nav.Link>
              <Nav.Link href="#action2">Notificatons</Nav.Link>
              <NavDropdown title="Me" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3"></NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Bless Benedict Afetsi
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Acount
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Manage
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Work
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
