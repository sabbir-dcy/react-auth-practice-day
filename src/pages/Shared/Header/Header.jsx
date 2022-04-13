import { signOut } from 'firebase/auth'
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../../Auth/firebase.init'

const Header = () => {
  const [user] = useAuthState(auth)
  const navigate = useNavigate()

  const handleLogout = () => {
    signOut(auth)
    navigate('/login')
  }

  return (
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand as={Link} to='/'>
          logo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link as={Link} to='/store'>
              Store
            </Nav.Link>
            <Nav.Link as={Link} to='#pricing'>
              Pricing
            </Nav.Link>
            <NavDropdown title='Dropdown' id='collasible-nav-dropdown'>
              <NavDropdown.Item as={Link} to='#action/3.1'>
                Action
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to='#action/3.2'>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to='#action/3.3'>
                Something
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to='#action/3.4'>
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            {user ? (
              <Button variant='primary' onClick={handleLogout}>
                Logout
              </Button>
            ) : (
              <Nav.Link as={Link} to='/login'>
                Login
              </Nav.Link>
            )}
            <Nav.Link eventKey={2} as={Link} to='/signup'>
              SignUp
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
