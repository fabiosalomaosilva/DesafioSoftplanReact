import axios from 'axios';
import base64 from 'base-64';

const auth = base64.encode(`${process.env.REACT_APP_RAPIDD_API_USERNAME}:${process.env.REACT_APP_RAPIDD_API_PASSWORD}`);

export const http = axios.create({
	baseURL: 'https://desafiosoftplanapinetcore.azurewebsites.net/',
	headers: {
		'Content-Type': 'application/json',
		'Authorization': 'Basic ' + auth,
}});
