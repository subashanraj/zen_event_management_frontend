//import useState hook to create menu collapse state
import React, { useState } from "react";

import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarContent
} from "react-pro-sidebar";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import zen from '../assets/zen-logo.png';

import { FaList} from "react-icons/fa";
import {
    FiArrowLeftCircle,
    FiArrowRightCircle
} from "react-icons/fi";
import "react-pro-sidebar/dist/css/styles.css";
import "./Sidebar.css";

import {
    Link, useNavigate
} from 'react-router-dom'


function Sidebar() 
{
    let navigate = useNavigate();
    const [menuCollapse, setMenuCollapse] = useState(true);

    const menuIconClick = () => {
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    };

    const handle=() =>{
        navigate('/class/dashboard')
    }
    const handle1 = () => {
        navigate('/class/tasks')
    }
    const handle2 = () => {
        navigate('/class/webcode')
    }
    const handle3 = () => {
        navigate('/class')
    }

    return (
        <div className='home-container'>
            <div id="header">
                <ProSidebar collapsed={menuCollapse}>
                    <SidebarHeader>
                        <div className="logotext">
                            <img id='sidebar-img' src={zen} alt='' />
                            <span id='student'>{menuCollapse ? "" : "Student"}</span>
                        </div>
                        <div className="closemenu" onClick={menuIconClick}>
                            {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
                        </div>
                    </SidebarHeader>
                    <SidebarContent>
                        <Menu iconShape="square">
                            <MenuItem className='icons' onClick={handle3} active={true} icon={<AccountBoxIcon />}>
                                Class</MenuItem>
                            <MenuItem onClick={handle} icon={<FaList />}>Dashboard</MenuItem>
                            <MenuItem onClick={handle1} icon={<FactCheckIcon />}>Tasks</MenuItem>
                            <MenuItem onClick={handle2} icon={<FactCheckIcon />}>Webcode</MenuItem>
                            
                            <MenuItem icon={<FaList />}>Queries</MenuItem>
                            <MenuItem icon={<FactCheckIcon />}>Mock-interview</MenuItem>
                            <MenuItem icon={<FactCheckIcon />}>Certficate</MenuItem>
                        </Menu>
                    </SidebarContent>
                </ProSidebar>
            </div>
        </div>
           
    );
};

export default Sidebar;
