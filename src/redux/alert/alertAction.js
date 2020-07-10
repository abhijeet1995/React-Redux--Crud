import { SHOW_ALERT, REMOVE_ALERT } from './alertType'

export const setAlert = (data, typeRes, onClose, timeout = 5000) => dispatch => {

    dispatch({
        type: SHOW_ALERT,
        payload: {
            message: data,
            type: typeRes,
            open: true,
            onClose: onClose ? onClose : false,
            // openType: openType ? openType : 0,
            // cancelButton: cancelButton ? cancelButton : false,
            // cancelButton: cancelButton ? cancelButton : false
        }
    });
    setTimeout(() => dispatch({ type: REMOVE_ALERT }), timeout);
};



