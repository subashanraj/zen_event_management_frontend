import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import userIcon from '../assets/user-profile-4255.png';
import './Navbar.css'

function Navigationbar() {
    return (
        <div className='container-fluid'>
            
        <Navbar bg="light" expand="lg">
            <Container fluid className='navigation'>
                <Navbar.Brand href="#">
                    <h1
                        className="me-auto my-2"
                        style={{
                            color: '#000',
                            fontWeight:'600',
                        }}>class</h1>
                </Navbar.Brand>
                <Navbar.Brand>
                    <span className='user-name'>Student Name
                    </span>
                    <img className='user-icon' src={userIcon} alt='' />
                </Navbar.Brand>
                
                </Container>
            </Navbar>
      
         </div>
    );
}

export default Navigationbar;