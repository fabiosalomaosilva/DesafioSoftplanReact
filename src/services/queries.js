import { gql } from '@apollo/client';

export const getCountriesQuery = () => {
	return gql`
		{
			countries {
				name
				code
				capital
				currency
			}
		}
	`;
};

export const getCountriesQueryByCode = (code) => {
	return gql`
		{
			country(code: "${code}") {
				name
				code
				capital
				currency
			}
		}
	`;
};
