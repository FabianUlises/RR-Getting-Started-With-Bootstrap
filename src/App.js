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
    </div>
  );
}

export default App;