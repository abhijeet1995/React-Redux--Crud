import React, {Fragment, useEffect, useState} from "react";
import {useParams, useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {getAnEmployee, updateEmployee, updateEmployeeForm} from "../../redux/employee/employeeActions";
import PopUp from '../common/Popup'
let UpdateEmployee = () => {
    const [open, setOpen] = useState(false);
    let history = useHistory();
    let {id} = useParams();
    let dispatch = useDispatch();
    let employeeInfo = useSelector((store) => {
        return store.employee;
    });

    let changeInput = (e) => {
        dispatch(updateEmployeeForm(e));
    };

    useEffect(() => {
        dispatch(getAnEmployee(id));
    }, [id]);

    //submitUpdateEmployee
    let submitUpdateEmployee = (e) => {
        e.preventDefault();
        dispatch(updateEmployee(id , employeeInfo.employee , history));
    };

    let alert = useSelector((store) => {
        return store.alert
    });
    const handleClose = () => {
        setOpen(false);
    };
    
    return(
        <Fragment>
            <PopUp type={alert.type} message={alert.message} open={alert.open} close={handleClose} />
          {/*  <pre>{JSON.stringify(employeeInfo)}</pre>*/}
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-5">
                        <div className="card">
                            <div className="card-header bg-secondary text-white">
                                <h3>Update Employee</h3>
                            </div>
                            <div className="card-body bg-light">
                                <form onSubmit={submitUpdateEmployee}>
                                    <div className="form-group">
                                        <input
                                            required
                                            name="first_name"
                                            value={employeeInfo.employee.first_name}
                                            onChange={changeInput}
                                            type="text"
                                            className="form-control" placeholder="First Name"/>
                                    </div>
                                    <div className="form-group">
                                        <input
                                            required
                                            name="last_name"
                                            value={employeeInfo.employee.last_name}
                                            onChange={changeInput}
                                            type="text" className="form-control" placeholder="Last Name"/>
                                    </div>
                                    <div className="form-group">
                                        <input
                                            required
                                            name="email"
                                            value={employeeInfo.employee.email}
                                            onChange={changeInput}
                                            type="email" className="form-control" placeholder="Email"/>
                                    </div>
                                    <div className="form-group">
                                        <input
                                            required
                                            name="gender"
                                            value={employeeInfo.employee.gender}
                                            onChange={changeInput}
                                            type="text" className="form-control" placeholder="Gender" />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            required
                                            name="mobile"
                                            value={employeeInfo.employee.mobile}
                                            onChange={changeInput}
                                            type="text" className="form-control" placeholder=" mobile"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" className="btn btn-secondary btn-sm" value="Update Employee"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};
export default UpdateEmployee;