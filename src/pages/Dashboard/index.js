import React, { useEffect } from 'react';
import { NavDropdown } from 'react-bootstrap';
import logo from './../../assets/DesafioSoftplan-512.png';
import MenuBar from './../../components/MenuBar/index';
import { Outlet, useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { GetAuthState, setUser } from './../../store/actions';

export default function Dashboard() {
	const user = useSelector((state) => state.user);
	let navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		const statusAuth = GetAuthState(user);
		if (!statusAuth) {
			navigate('/');
		}
		if (statusAuth !== true && statusAuth !== false) {
			dispatch(setUser(statusAuth));
		}
	}, [navigate, user]);

	return (
		<>
			<div className="header-dashboard">
				<div className="header-dashboard-item">
					<img src={logo} alt="Logo" className="logo-header" />
					<span className="header-dashboard-title ml-10">
						Desafio Full Stack - SOFTPLAN
					</span>
				</div>
				<div className="header-dashboard-item">
					<NavDropdown
						title={user?.name}
						className="header-dashboard-user"
						style={{ color: '#fff' }}
					>
						<NavDropdown.Item href="/">Sair</NavDropdown.Item>
					</NavDropdown>
					<img
						src={user?.image}
						alt="Logo"
						className="logo-header header-user-picture ml-10"
					/>
				</div>
			</div>
			<div className="container-desafio">
				<MenuBar />
				<Outlet />
			</div>
		</>
	);
}
