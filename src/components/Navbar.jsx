import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import BNavbar from 'react-bootstrap/Navbar';

function Navbar() {
    return (
        <BNavbar bg="light" expand="lg">
            <Container>
                <BNavbar.Brand href="#home">ISTAD</BNavbar.Brand>
                <BNavbar.Toggle aria-controls="basic-navbar-nav" />
                <BNavbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#category">Categories</Nav.Link>
                        <Nav.Link href="#link">Brands</Nav.Link>
                        <Nav.Link href="#link">Contact</Nav.Link>
                    </Nav>
                </BNavbar.Collapse>
            </Container>
        </BNavbar>
    );
}

export default Navbar;