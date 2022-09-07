import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import userIcon from '../assets/user-profile-4255.png';
import Sidebar from './Sidebar.js'
import './Navbar.css'
import './Task.css'


function Tasks() {
   
   
    return <>
        <Sidebar/>
        <div className='container-fluid'>

            <Navbar bg="light" expand="lg">
                <Container fluid className='navigation'>
                    <Navbar.Brand href="#">
                        <h1
                            className="me-auto my-1"
                            style={{
                                color: '#000',
                                fontWeight: '600',
                            }}>Task Submission</h1>
                    </Navbar.Brand>
                    <Navbar.Brand>
                        <span className='username'>Student Name
                        </span>
                        <img className='user-icon' src={userIcon} alt='' />
                    </Navbar.Brand>

                </Container>
            </Navbar>
            
        </div>
        <div className='containers'>
            <div  className='blank'></div>
            <div className='task-container'>
                <div className='task-description'>
                    <span className='task-span1'>
                  <h5>Subash</h5>
                    <p>(B36 Weekday TAmil)<br></br>
                            -Javascript-Day-2 : Request & Responce cycle</p>
                        </span>
                    <span className='task-span2'>
                        <p className='eval-p'>submitted on<br></br>
                            13/03/2022</p>
                        <span className='score-container'>
                            <h6 className='score'>3.5</h6>
                            <p id='task'>Task</p>
                        </span>
                    </span>
                </div>
                <div className='task-description'>
                    <span className='task-span1'>
                        <h5>Subash</h5>
                        <p>(B36 Weekday TAmil)<br></br>
                            -Javascript-Day-2 : Request & Responce cycle</p>
                    </span>
                    <span className='task-span2'>
                        <p className='eval-p'>submitted on<br></br>
                            13/03/2022</p>
                        <span className='score-container'>
                        <h6 className='score'>3.5</h6>
                            <p id='task'>Task</p>
                            </span>
                    </span>
                </div>
              
            </div>
        </div>
    </>
}

export default Tasks;