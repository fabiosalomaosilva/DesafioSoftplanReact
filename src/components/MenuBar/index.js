import React from 'react';
import MenuBarItem from './MunuBartem';
import { FaMap, FaRocketchat, FaIdCard } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function MenuBar() {
	return (
		<>
			<div className="box-menu-bar">
				<Link to="countries">
						<MenuBarItem
							image={<FaMap className="img-menu-item" />}
							title="Países"
						/>
				</Link>
				<Link to="chat">
					<MenuBarItem
						image={<FaRocketchat className="img-menu-item" />}
						title="Chat"
					/>
				</Link>
				<Link to="countries">
					<MenuBarItem
						image={<FaIdCard className="img-menu-item" />}
						title="Perfil"
					/>
				</Link>
			</div>
		</>
	);
}
