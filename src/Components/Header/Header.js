import React from 'react'
import Logo from './Logo'
import Account from './Account';
import Notifications from './Notifications';

let Header = (props) => {
	return (
		<header className="header">
			<Logo />
			<Notifications />
			<Account />
		</header>
	)
}

export default Header