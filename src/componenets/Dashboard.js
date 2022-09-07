
import React from "react";

import Sidebar from "./Sidebar.js";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import userIcon from '../assets/user-profile-4255.png';
import { Dougnut } from "./Dashboard/Doughnut";
import { Barchart } from "./Dashboard/Barchart";
import { RadarChart } from "./Dashboard/RadarChart";
import { LineChart } from "./Dashboard/LineChart";

function DashBoard() {
    return (
        <div className="container-fluid">
            <Sidebar/>
            <div className='container-fluid'>

                <Navbar bg="light" expand="lg">
                    <Container fluid className='navigation'>
                        <Navbar.Brand href="#">
                            <h1
                                className="me-auto my-2"
                                style={{
                                    color: '#000',
                                    fontWeight: '600',
                                }}>Dashboard</h1>
                        </Navbar.Brand>
                        <Navbar.Brand>
                            <span className='user-name'>Student Name
                            </span>
                            <img className='user-icon' src={userIcon} alt='' />
                        </Navbar.Brand>

                    </Container>
                </Navbar>

            </div>
            <div className=" alert alert-primary">
                <div className="row d-flex justify-content-between flex-wrap flex-row ticket-box">
                    <div className="   me-1 mx-2 py-5 mb-3    dash-activity">
                        <h3> Front-End : 85 % </h3>
                    </div>

                    <div className="  me-1 mx-2 py-5 mb-3   dash-activity1">
                        <h3> Back-End : 70 % </h3>
                    </div>

                    <div className="   me-1 mx-2 py-5 mb-3   dash-activity2">
                        <h3> Tasks : 90 % </h3>
                    </div>

                    <div className="  me-1 mx-2 py-5 mb-3   dash-activity3">
                        <h3> Elegablity : True </h3>
                    </div>
                </div>

                {/* Doughnut chart Card */}

                <div className="row d-flex justify-content-center align-items-center flex-wrap first-card">
                    <div className="col-xs-4-ms-5 col-sm-4 col-md-4 col-lg-4 me-5 ">
                        <div className="card row-4">
                            <h5 className="card-header">Overview</h5>
                            <div className="card-body chart-parent card-bg ">
                                <Dougnut />
                            </div>
                        </div>
                    </div>

                    {/* BarChart Card */}

                    <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7 ms-5 second-card">
                        <div className="card">
                            <h5 className="card-header">Webkata</h5>
                            <div className="card-body chart-parent card1-bg">
                                <Barchart />
                            </div>
                        </div>
                    </div>
                    <div className="row d-flex mt-4 justify-content-between align-items-center flex-wrap third-card">
                        {/* Radar chart card */}

                        <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5 me-5 ps-5 mt-6">
                            <div className="card row-4">
                                <h5 className="card-header">Codekata</h5>
                                <div className="card-body chart-parent card2-bg ">
                                    <RadarChart />
                                </div>
                            </div>
                        </div>

                        {/* Line chart card */}

                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ms-5 forth-card">
                            <div className="card">
                                <h5 className="card-header">Micro Arc</h5>
                                <div className="card-body chart-parent card1-bg">
                                    <LineChart />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashBoard;