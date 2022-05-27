import React from 'react';
import { Routes, Route } from 'react-router';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard/index';
import CountryDetails from './pages/CountryDetails/index';
import Countries from './pages/Countries/index';
import Chat from './pages/Chat/index';
import EditCountry from './pages/EditCountry/index';
import Profile from './pages/Profile/index';

const AppRoutes = () => (
	<Routes>
		<Route path="/" element={<Login />} />
		<Route path="/login" element={<Login />} />
		<Route path="/dashboard" element={<Dashboard />}>
			<Route path="countries" element={<Countries />} />
			<Route path="chat" element={<Chat />} />
			<Route path="editcountry" element={<EditCountry />} />
			<Route path="profile" element={<Profile />} />
			<Route path="details/:code" element={<CountryDetails />} />
		</Route>
	</Routes>
);

export default AppRoutes;
