import './App.css';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function App() {
  return (
    <div className="App">
      <h1>Bootstrap Website</h1>
      <Nav activeKey='/home'>
        <Nav.Item>
          <Nav.Link href='/home'>Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/about'>About us</Nav.Link>
        </Nav.Item>
      </Nav>
      <Button variant='success'>Primary</Button>
      <Form>
        <Form.Group controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control type='email' placeholder='Enter email' />
          <Form.Text className='Text-muted'>
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='password' />
        </Form.Group>
        <Form.Group controlId='formBasicCheckbox'>
          <Form.Control type='checkbox' label='check me out' />
        </Form.Group>
        <Button variant='primary'>Submit</Button>
      </Form>
    </div>
  );
}

export default App;