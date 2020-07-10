import { SHOW_ALERT,REMOVE_ALERT,REDIRECT } from './alertType'


const initialState = {
	type: "",
	message: "",
	open: false,
	openType: 0
}

let alertReducers = (state = initialState, action)=> {
	const { type, payload } = action;
	switch (type) {
		case SHOW_ALERT:
			return {
				...state,
				...payload
			};
		case REDIRECT:
			return {
				...state,
				...payload,
				open: false
			};
		case REMOVE_ALERT:
			return {
				type: "",
				message: "",
				open: false,
				openType: 0
			}
		default:
			return state;
	}
}
export { alertReducers }