import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './login.css';
import { useDispatch } from 'react-redux';
import {getUserDetails} from '../../features/login/loginSlice';

const Login = () => {

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  let handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getUserDetails({
      username: userName,
      password: password,
    }))
  }

  let updateUserName =(event) => {
    setUserName(event.target.value)
  }

  let updatepassword =(event) => {
    setPassword(event.target.value)
  }
 
    return (
        <Container>
        <Row >
          <Col>
            <h1 className='login-form-title'> Login to your account </h1>
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="text" placeholder="Enter  email Id" value={userName} onChange={updateUserName} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={password} onChange={updatepassword} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Forgot password" />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={handleSubmit}>
                Submit
            </Button>
            </Form>           
        
          </Col>
          <Col md={3} >
          
          </Col>
          <Col>
          Space to set the image
          </Col>
        </Row>
      </Container>
    );
};


export default Login;