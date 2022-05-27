import { http } from '../config/customApi';

export const editUser = async (user) => {
	console.log(user);
	const userFormat = {
		name: user.name,
		email: user.email,
		photo: user.image,
		loginProvider: 'Google',
		street: user.street,
		number: user.number,
		complement: user.complement,
		city: user.city,
		state: user.state,
		zipcode: user.zipcode,
		district: user.district,
	};
	const response = await http.put('/api/v1/users', userFormat);
	return response.data;
};
