import react from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import zen from '../assets/zen-logo.png';
import login from '../assets/login-image.png';
import {Link} from 'react-router-dom'
import './Login.css'


function Login() {
    return <>
        <div className="container">
            <div className='logo-container'>
                <img src={zen} alt=''/>
            </div>
            <div className='login-container'>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="example : johndoe@mail.com" required='true'/>
                                   </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" required='true' placeholder="Your password" />
                    </Form.Group>
                    <Link to='class'><Button variant="primary" type="submit">
                        Login
                    </Button></Link>
                    <div className='email'>
                        <a href='#'>Forgot password?</a>
                    </div>
                </Form>  
            </div>
            <div className='login-image'>
                <img src={login} alt='' />

            </div>
        </div>
        </>
}

export default Login