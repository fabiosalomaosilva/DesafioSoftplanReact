import { actionTypes } from './actionTypes';

const INITIAL_STATE = {
	user: null,
	selectedCountry: null,
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
		default:
			return state;
	}
};
