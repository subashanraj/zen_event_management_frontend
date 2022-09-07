import './App.css';
import Login from '../../zen-portal/src/componenets/Login.js';
import Dashboard from '../../zen-portal/src/componenets/Dashboard.js'
import Webcode from '../../zen-portal/src/componenets/Webcode.js'
import Class from '../../zen-portal/src/componenets/Class.js'
import Tasks from '../../zen-portal/src/componenets/Tasks.js'
import { Routes, Route, BrowserRouter,Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    return (
        <div className='app'>
        
            <BrowserRouter>
               <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="class" element={<Class />} />
                    <Route path="/class/dashboard" element={<Dashboard />} />
                    <Route path="/class/tasks" element={<Tasks />} />
                    <Route path="/class/webcode" element={<Webcode />} />
         
                </Routes>
            </BrowserRouter>
       </div>

  );
}

export default App;
