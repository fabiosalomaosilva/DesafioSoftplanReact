import React, { useEffect } from 'react';
import AppRoutes from './routes';
import { client } from './config/apolloClient';
import { ApolloProvider } from '@apollo/client';
import { getUser } from './store/actions';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function App() {
	const user = useSelector((state) => state.user);
	const navigate = useNavigate();

	useEffect(() => {
		if (user == null) {
			const status = getUser();
			if (status === false) {
				navigate('/');
			}
		}}, [user]);
		
	return (
		<ApolloProvider client={client}>
			<AppRoutes />
		</ApolloProvider>
	);
}

export default App;
