import React, { Fragment, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createEmployee } from "../../redux/employee/employeeActions";
import { useHistory } from 'react-router-dom';
import PopUp from '../common/Popup'
let AddEmployee = () => {
    let history = useHistory();
    let dispatch = useDispatch();

    let buttonElem = useRef(null)
    let [checked, setCheked] = useState(false)

    let [employee, setEmployee] = useState({
        first_name: '',
        last_name: '',
        email: '',
        gender: '',
        mobile: ''
    });

    let alert = useSelector((store) => {
        return store.alert
    });
    console.log("hi i am alert", alert)


    let changeInput = (e) => {
        setCheked(!checked)
        buttonElem.current.disabled = checked
        setEmployee({
            ...employee,
            [e.target.name]: e.target.value
        });
    };

    let submitAddEmployee = (e) => {
        e.preventDefault();
        dispatch(createEmployee(employee, history));
    };

    return (
        <Fragment>
            <PopUp type={alert.type} message={alert.message} open={alert.open} onClose={alert.handleClose} />
            {/* <pre>{JSON.stringify(employee)}</pre>*/}
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-5">
                        <div className="card">
                            <div className="card-header bg-success text-white">
                                <h3>Add Employee</h3>
                            </div>
                            <div className="card-body bg-light">
                                <form onSubmit={submitAddEmployee}>
                                    <div className="form-group">
                                        <input
                                            required
                                            name="first_name"
                                            value={employee.first_name}
                                            onChange={changeInput}
                                            type="text"
                                            className="form-control" placeholder="First Name" />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            required
                                            name="last_name"
                                            value={employee.last_name}
                                            onChange={changeInput}
                                            type="text" className="form-control" placeholder="Last Name" />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            required
                                            name="email"
                                            value={employee.email}
                                            onChange={changeInput}
                                            type="email" className="form-control" placeholder="Email" />
                                    </div>
                                    <div className="form-group">
                                        <select
                                            required
                                            name="gender"
                                            value={employee.gender}
                                            onChange={changeInput}
                                            className="form-control">
                                            <option value="">Select Gender</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <input
                                            required
                                            name="mobile"
                                            value={employee.mobile}
                                            onChange={changeInput}

                                            type="text" className="form-control" placeholder=" mobile" />
                                    </div>
                                    <div className="form-group">
                                        <input ref={buttonElem} type="submit" className="btn btn-success btn-sm" value="Add Employee" disabled />
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
export default AddEmployee;