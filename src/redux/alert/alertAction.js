import { SHOW_ALERT, REMOVE_ALERT } from './alertType'

export const setAlert = (data, typeRes,   timeout = 2000) => dispatch => {

    dispatch({
        type: SHOW_ALERT,
        payload: {
            message: data,
            type: typeRes,
            open: true,
            onClose: false
            
        }
    });
    setTimeout(() => dispatch({ type: REMOVE_ALERT }), timeout);
};



