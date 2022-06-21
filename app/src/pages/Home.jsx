import { Button, Container, Form } from 'react-bootstrap'
import BrandMessage from '../components/micros/BrandMessage/BrandMessage'

export default function Home() {
  return (
    <Container className='mt-5'>
      <section className='pb-5 h5 text-muted text-uppfercase jumbotron jumbotron-fluid'>
        <div class='container display-6 '>
          <BrandMessage />
        </div>
      </section>

      <div className='d-flex flex-column justify-cofntent-center align-items-md-center'>
        <section className='pt-5 pb-3 text-secondary'>
          {/* <div class="container"> */}
          <h3>Create a new user with balance amount</h3>
          {/* <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p> */}
          {/* </div> */}
        </section>

        <Form>
          <Form.Group className='mb-3 shadow-sm' controlId='formBasicEmail'>
            <Form.Label>Username</Form.Label>
            <Form.Control type='username' placeholder='Enter your username' />
          </Form.Group>

          <Form.Group className='mb-3 shadow-sm' controlId='formBasicPassword'>
            <Form.Label>Email</Form.Label>
            <Form.Control type='email' placeholder='Enter your Email' />
          </Form.Group>

          <Form.Group className='mb-3 shadow-sm ' controlId='formBasicPassword'>
            <Form.Label>Account Balance</Form.Label>
            <Form.Control
              type='accountBalance'
              placeholder='Enter your Account Balance'
            />
          </Form.Group>

          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </div>
    </Container>
  )
}
