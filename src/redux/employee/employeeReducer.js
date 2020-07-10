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
    UPDATE_EMPLOYEE_REQUEST, UPDATE_EMPLOYEE_SUCCESS
} from "./employeeActionTypes";

let initialState = {
    loading : false,
    employees : [],
    employee : {},
    isSubmitted : false,
    errorMessage : null
};

let employeeReducer = (state = initialState , action) => {
    let {type , payload} = action;
    switch(type) {
        case GET_ALL_EMPLOYEES_REQUEST:
        case CREATE_EMPLOYEE_REQUEST :
        case GET_EMPLOYEE_REQUEST :
        case UPDATE_EMPLOYEE_REQUEST :
        case DELETE_EMPLOYEE_REQUEST :
            return {
                ...state,
                loading: true
            };
        case GET_ALL_EMPLOYEES_SUCCESS:
            return {
                ...state,
                loading: false,
                employees: payload
            };
        case GET_EMPLOYEE_SUCCESS :
            return {
                ...state,
                loading: false,
                employees : [],
                employee: payload
            };
        case GET_ALL_EMPLOYEES_FAILURE:
        case CREATE_EMPLOYEE_FAILURE :
        case GET_EMPLOYEE_FAILURE :
        case UPDATE_EMPLOYEE_FAILURE :
        case DELETE_EMPLOYEE_FAILURE :
            return {
                ...state,
                loading: false,
                employees: [],
                 employee : {},
                errorMessage : payload
            };
        case CREATE_EMPLOYEE_SUCCESS:
        case UPDATE_EMPLOYEE_SUCCESS:
            return {
                ...state,
                employees: [action.payload, ...state.employees],
                loading: false,
                isSubmitted: true
            };
        case DELETE_EMPLOYEE_SUCCESS:
            return {
                ...state,
                employees: state.employees.filter(post => post._id !== payload),
                loading: false
            };  
        case UPDATE_EMPLOYEE_FORM:
            return {
                ...state,
                employee: {
                    ...state.employee,
                    [payload.target.name] : payload.target.value
                }
            };
           
        default : return state;
    }
};
export {employeeReducer};