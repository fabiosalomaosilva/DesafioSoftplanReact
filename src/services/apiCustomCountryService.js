import { http } from '../config/customApi';

export const getAditionalInfoContries = async () => {
	const response = await http.get('/api/v1/Countries');
	return response.data;
};

export const addAditionalInfoContries = async (country) => {
	console.log(country);
	const response = await http.post('/api/v1/Countries', country);
	console.log(response);
	return response.data;
};