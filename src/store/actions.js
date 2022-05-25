import { getLocalStorage } from '../utils/localStorage';
import { actionTypes } from './actionTypes';
import { setLocalStorage } from './../utils/localStorage';

export const setUser = (user) => {
	return {
		type: actionTypes.SET_USER,
		payload: user,
	};
};

export const getUser = () => {
	const userLocalStorage = getLocalStorage('@desafio-softplan/profile');
	if (userLocalStorage) {
		setUser(JSON.parse(userLocalStorage));
		return JSON.parse(userLocalStorage);
	} else {
		return null;
	}
};

export const logout = () => {
	setLocalStorage('@desafio-softplan/profile', null);
	setLocalStorage('@desafio-softplan/token', null);
	return {
		type: actionTypes.SET_USER,
		payload: null,
	};
};

export const GetAuthState = (user) => {
	if (user === null) {
		const userLocalStorage = getLocalStorage('profile');
		if (userLocalStorage) {
			return JSON.parse(userLocalStorage);
		}
		return false;
	}
	return true;
};

export const getCountries = (state) => {
	return {
		type: actionTypes.GET_COUNTRIES,
		payload: state,
	};
};

export const setCountries = (countries) => {
	return {
		type: actionTypes.SET_COUNTRIES,
		payload: countries,
	};
};

export const setSelectedCountry = (country) => {
	return {
		type: actionTypes.SET_SELECTED_COUNTRY,
		payload: country,
	};
};

export const setUsersLogged = (users) => {
	return {
		type: actionTypes.SET_USERS_LOGGED,
		payload: users,
	};
};

export const setUserChat = (user) => {
	return {
		type: actionTypes.SELECT_USER_CHAT,
		payload: user,
	};
};

export const setMessage = (message) => {
	return {
		type: actionTypes.SET_MESSAGE,
		payload: message,
	};
};
