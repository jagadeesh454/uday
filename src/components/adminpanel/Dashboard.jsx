import React from 'react';
import Routing from './Routing';
import {employees} from '../../utils/constants'
import { useNavigate } from 'react-router-dom';
function  Dashboard() {
    const navigate = useNavigate()
    

    function logoutHandler()
    {
        navigate("/")
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                    <Routing/>  
                    </div>
                    <div className="col-md-10" style={{ border: "1px solid black" }}>
                        <div className=" d-flex justify-content-between">
                        <h2>Welcome to Simbiotick HRMS, <b style={{color:"blue"}}>Samyuktha P T</b></h2>
                        
                        <button className='btn btn-danger' onClick={logoutHandler}>Logout</button>
                        </div>
                        <br />
                        <div className="row d-flex justify-content-evenly align-items-">
                            <div className="col-md-3" style={{ border: "1px solid black" }}>
                                Total Employees section
                            </div>
                            <div className="col-md-3 m-6" style={{ border: "1px solid black" }}>
                                Leave Requests
                            </div>
                            <div className="col-md-2">
                                <div className="container">
                                    <div className="row">
                                        <div className="col">Attendance</div>
                                        <div className="col">Absent</div>
                                        <div className="col">Request</div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col">
                                        wish them
                                    </div>
                                    <div className="col">
                                        Employee Name <button className='btn btn-primary'>Wish Them</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className="container">
                            <div className="row">
                                <h3>Employees List</h3>
                                <div className="col-md-10" style={{ border: "1px solid black" }}>
                                    <table className="table text-center">
                                        <thead className='text-center'>
                                            <tr className='text-center'>
                                            <th>No.</th>
                                            <th>Employee Name</th>
                                            <th>Employee Type</th>
                                            <th>Email</th>
                                            <th>Department</th>
                                            <th>Designation</th>
                                            <th>Joining Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {employees.map((emp,index) => {
                                                return (
                                                        <tr key={index}>
                                                            <td>{emp.enum}</td>
                                                            <td>{emp.ename}</td>
                                                            <td>{emp.etype}</td>
                                                            <td>{emp.eemail}</td>
                                                            <td>{emp.edep}</td>
                                                            <td>{emp.edes}</td>
                                                            <td>{emp.jdate}</td>
                                                        </tr>
                                           )
                                            })}
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            

        </>
    );
}

export default Dashboard;
