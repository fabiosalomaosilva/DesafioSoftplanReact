import { actionTypes } from './actionTypes';

const INITIAL_STATE = {
	user: null,
	usersLogged: [],
	selectUserChat: null,
	selectedCountry: null,
	messages: [],
	countries: {
		index: 0,
		offset: 12,
		aditionalInfo: [],
		data: [],
	},
};

export const reducer = (state = INITIAL_STATE, action) => {
	const { type, payload } = action;
	switch (type) {
		case actionTypes.SET_USER:
			return {
				...state,
				user: payload,
			};
		case actionTypes.GET_COUNTRIES:
			return {
				...state,
				countries: payload,
			};
		case actionTypes.SET_COUNTRIES:
			return {
				...state,
				countries: payload,
			};
		case actionTypes.SET_SELECTED_COUNTRY:
			return {
				...state,
				selectedCountry: payload,
			};
		case actionTypes.SET_USERS_LOGGED:
			return {
				...state,
				usersLogged: payload,
			};
		case actionTypes.SELECT_USER_CHAT:
			return {
				...state,
				selectUserChat: payload,
			};
		case actionTypes.SET_MESSAGE:
			return {
				...state,
				messages: [payload, ...state.messages],
			};
		default:
			return state;
	}
};
