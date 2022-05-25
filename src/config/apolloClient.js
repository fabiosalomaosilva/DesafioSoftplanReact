import { ApolloClient, InMemoryCache, useQuery, makeVar } from '@apollo/client';
import { getCountriesQuery } from './../services/queries';

export const countriesVar = makeVar([]);

export const client = new ApolloClient({
	cache: new InMemoryCache(),
	uri: 'https://countries.trevorblades.com',
});

export const GetCountries = (props) => {
  console.log('Cahamou aqui no GetCountries');
  const {data} = useQuery(getCountriesQuery(), props.client);
};
