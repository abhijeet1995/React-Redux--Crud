import Axios from "axios";
import {
    CREATE_EMPLOYEE_FAILURE,
    CREATE_EMPLOYEE_REQUEST,
    CREATE_EMPLOYEE_SUCCESS, DELETE_EMPLOYEE_FAILURE, DELETE_EMPLOYEE_REQUEST, DELETE_EMPLOYEE_SUCCESS,
    GET_ALL_EMPLOYEES_FAILURE,
    GET_ALL_EMPLOYEES_REQUEST,
    GET_ALL_EMPLOYEES_SUCCESS,
    GET_EMPLOYEE_FAILURE,
    GET_EMPLOYEE_REQUEST,
    GET_EMPLOYEE_SUCCESS, UPDATE_EMPLOYEE_FAILURE,
    UPDATE_EMPLOYEE_FORM,
    UPDATE_EMPLOYEE_REQUEST, UPDATE_EMPLOYEE_SUCCESS,
    RESET_FORM
} from "./employeeActionTypes";
import {setAlert} from '../alert/alertAction'
// GET All Employee
let getAllEmployees = () => {
    return async (dispatch) => {
        try {
            dispatch({type : GET_ALL_EMPLOYEES_REQUEST});
            let response = await Axios.get(`http://localhost:8000/api/employees`);
            dispatch({
                type : GET_ALL_EMPLOYEES_SUCCESS,
                payload : response.data
            });
           
        }
        catch (err) {
            dispatch({
                type : GET_ALL_EMPLOYEES_FAILURE,
                payload : err.response
            });
        }
    };
};

// CREATE an Employee
let createEmployee = (employee,history) => {
    return async (dispatch) => {
        try{
            dispatch({type : CREATE_EMPLOYEE_REQUEST});
            let response = await Axios.post(`http://localhost:8000/api/employees`, employee);
            dispatch({
                type : CREATE_EMPLOYEE_SUCCESS,
                payload : response.data.emp
            });
               dispatch(setAlert("Add Empolyee", "success"))
            //    dispatch({
            //        type:RESET_FORM,
            //        payload: response.data.emp
            //    })
            
        }
        catch (err) {
                dispatch(setAlert(err.response.data.error, "error"))
        }
    };
};

// GET an Employee
let getAnEmployee = (id) => {
    return async (dispatch) => {
        try{
            dispatch({type : GET_EMPLOYEE_REQUEST});
            let response = await Axios.get(`http://localhost:8000/api/employees/${id}`);
            dispatch({
                type : GET_EMPLOYEE_SUCCESS,
                payload : response.data
            });
        }
        catch (err) {
            dispatch({
                type : GET_EMPLOYEE_FAILURE,
                payload : err.response
            });
        }
    };
};

// updateEmployeeForm
let updateEmployeeForm = (e) => {
    return async (dispatch) => {
        dispatch({type : UPDATE_EMPLOYEE_FORM , payload : e});
       
    };
   
};

// updateEmployee
let updateEmployee = (id , employee , history) => {
    return async (dispatch) => {
        try{
            dispatch({type : UPDATE_EMPLOYEE_REQUEST});
            let response = await Axios.put(`http://localhost:8000/api/employees/${id}`, employee);
            dispatch({
                type : UPDATE_EMPLOYEE_SUCCESS,
                payload :response.data
            });
            dispatch(setAlert("Updated succesfully", "success"))
            setTimeout(() => {
                history.push('/'); // got to home page once success
            }, 2000)
        }
        catch (err) {
            dispatch({
                type : UPDATE_EMPLOYEE_FAILURE,
                payload : err.response
            });
            dispatch(setAlert(err.response.data.error, "error"))
        }
    };
};

// deleteEmployee
// let deleteEmployee = (id) => {
//     return async (dispatch) => {
//         try{
//             dispatch({type : DELETE_EMPLOYEE_REQUEST});
//             await Axios.delete(`http://localhost:8000/api/employees/${id}`);
//             dispatch({
//                 type : DELETE_EMPLOYEE_SUCCESS,
//                 payload : id
//             });
//         }
//         catch (err) {
//             dispatch({
//                 type : DELETE_EMPLOYEE_FAILURE,
//                 payload : err.response
//             });
//         }
//     };
// };


const deleteEmployee = (id) => async (dispatch) => {
    console.log("-------Hello------",id);
    try {
        dispatch({
            type:DELETE_EMPLOYEE_REQUEST
        })
        await Axios.delete(`http://localhost:8000/api/employees/${id}`);
        dispatch({
            type: DELETE_EMPLOYEE_SUCCESS,
            payload: id
        });
    }catch(err){
        dispatch({
            type:DELETE_EMPLOYEE_FAILURE,
            payload:err.response
        })
    }
};

export {getAllEmployees ,
    createEmployee ,
    getAnEmployee ,
    updateEmployeeForm ,
    updateEmployee,
    deleteEmployee}