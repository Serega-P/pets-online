import React from 'react'
import styles from './ProfileHeader.module.sass'
import { NavLink } from 'react-router-dom';

let ProfileNav = (props) => {
	return (
		<div className={styles.profile_nav}>
			<nav className={styles.profile_menu}>
				<NavLink to='/profile/timeline' activeClassName={styles.active}>Timeline</NavLink>
				<NavLink to='/profile/friends' activeClassName={styles.active}>Friends</NavLink>
				<NavLink to='/profile/photoes' activeClassName={styles.active}>Photoes</NavLink>
			</nav>
		</div>
	)
}

export default ProfileNav
