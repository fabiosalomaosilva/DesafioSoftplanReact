import React from 'react';
import MenuBarItem from './MunuBartem';
import { FaMap, FaRocketchat, FaIdCard, FaEdit } from 'react-icons/fa';
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
				<Link to="editcountry">
					<MenuBarItem
						image={<FaEdit className="img-menu-item" />}
						title="Custom"
					/>
				</Link>
				<Link to="chat">
					<MenuBarItem
						image={<FaRocketchat className="img-menu-item" />}
						title="Chat"
					/>
				</Link>
			</div>
		</>
	);
}
