import React, {Fragment, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteEmployee, getAllEmployees} from "../../redux/employee/employeeActions";
import Spinner from "../spinner/Spinner";
import {Link} from "react-router-dom";

let Home = () => {
    let dispatch = useDispatch();
    let employeeInfo = useSelector((store) => {
        return store.employee.employees
    });

    useEffect(() => {
        dispatch(getAllEmployees());
    }, []);


    // delEmployee
    let delEmployee = (id) => {
        if (window.confirm('Are you sure to delete this record?'))
        dispatch(deleteEmployee(id));
       // dispatch(getAllEmployees());
    };

    return(
        <Fragment>
           {/* <pre>{JSON.stringify(employeeInfo)}</pre>*/}
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <h1>Employee Portal</h1>
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet atque corporis fugiat illum minus necessitatibus omnis optio rem, sed soluta, ut veritatis. Amet cupiditate iure minima repudiandae tempora? Enim, ex!</p>
                        <Link to="/add-employee" className="btn btn-success btn-sm">Add Employee</Link>
                    </div>
                </div>
            </div>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <table className="table table-hover table-light table-striped text-center">
                            <thead className="bg-dark text-white">
                                <tr>
                                    <th>SNO</th>
                                    <th>FIRST NAME</th>
                                    <th>LAST NAME</th>
                                    <th>EMAIL</th>
                                    <th>GENDER</th>
                                    <th>Mobile</th>
                                    <th>ACTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    employeeInfo.loading ? <Spinner/> : <Fragment>
                                        {
                                            employeeInfo.length > 0 ? <Fragment>
                                                {
                                                    employeeInfo.map((employee , index) => {
                                                        return (
                                                            <tr>
                                                                <td>{index + 1}</td>
                                                                <td>{employee.first_name}</td>
                                                                <td>{employee.last_name}</td>
                                                                <td>{employee.email}</td>
                                                                <td>{employee.gender}</td>
                                                                <td>{employee.mobile}</td>
                                                                <td>
                                                                    <Link to={`/employees/${employee._id}`} className="btn btn-secondary btn-sm text-white">Update</Link>
                                                                    <button onClick={()=>(delEmployee(employee._id))} className="btn btn-danger btn-sm">Delete</button>
                                                                </td>
                                                            </tr>
                                                        );
                                                    })
                                                }
                                            </Fragment> : <Fragment>
                                                <tr>
                                                    <td colSpan="7" className="text-danger font-weight-bold">No Records Found</td>
                                                </tr>
                                            </Fragment>
                                        }
                                    </Fragment>
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};
export default Home;