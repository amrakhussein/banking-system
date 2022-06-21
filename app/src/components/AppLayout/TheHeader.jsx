import { Container, Nav, Navbar } from 'react-bootstrap'
import './TheHeader.css'

const TheHeader = () => {
  return (
    <header className='header'>
      <Navbar bg='light' expand='lg' className='my-2'>
        <Container className=''>
          <Navbar.Brand href='#home' className=''>
            Fakify Bank!
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='nav-links ms-auto '>
              <Nav.Link href='/home' className='ps-5 '>
                Home
              </Nav.Link>
              <Nav.Link href='/users' className='ps-5 '>
                Users
              </Nav.Link>
              <Nav.Link href='/transactions' className='ps-5 '>
                Transactions
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default TheHeader
