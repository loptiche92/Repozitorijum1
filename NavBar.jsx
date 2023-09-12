import { Outlet } from "react-router-dom";
import  Container  from "react-bootstrap/Container";
import Nav from 'react-bootstrap/Nav';
import NavBar from 'react-bootstrap/NavBar'
import { LinkContainer } from 'react-router-bootstrap'
import '../App.css'

const Navbar = () => {
    return (
    <div>
      <NavBar bg='dark' expand='lg'>
        <Container>
            <LinkContainer to='/'>
                <NavBar.Brand className='custom-link'>NereveSys Shop</NavBar.Brand>
            </LinkContainer>
            <NavBar.Toggle aria-controls = 'basic-navbar-nav' className='custom-button'/>
            <NavBar.Collapse id='basic-nav-bar'>
                <Nav className='me-auto'>
                    <LinkContainer to='/'>
                        <Nav.Link className='custom-link'>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='basket/*'>
                        <Nav.Link className='custom-link'>Basket</Nav.Link>
                    </LinkContainer>
                </Nav>
            </NavBar.Collapse>
        </Container>
      </NavBar>
      <Outlet />
    </div>
    )
}
 
export default Navbar;