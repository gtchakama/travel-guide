import React from 'react';
import { Navbar, Nav } from "react-bootstrap";


// import './Header.css';
const Header = () => {
    return (

        <Navbar collapseOnSelect expand="lg" style={{ background: 'green', padding: 10, fontSize: 20 }} variant="dark">
            <Navbar.Brand href="/">Travel Guide</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                </Nav>
                {/* <Nav>
                    <Nav.Link href="#deets">Login</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        Register
            </Nav.Link>
                </Nav> */}
            </Navbar.Collapse>
        </Navbar>

    );
}

export default Header;