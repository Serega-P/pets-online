import React from 'react'
import styles from './Navbar.module.sass'
import { NavLink } from 'react-router-dom'
import icon_profile from '../../images/icon_profile.svg'
import icon_messages from '../../images/icon_messages.svg'
import icon_friends from '../../images/icon_friends.svg'
import icon_news from '../../images/icon_news.svg'
import icon_settings from '../../images/icon_settings.svg'

let MenuNavbar = (props) => {

	return (
		<ul className={styles.menu_navbar}>
			<li className={styles.item}>
				<NavLink to='/profile' activeClassName={styles.active}>
					<img src={icon_profile} alt="Profile" />
					Profile
				</NavLink>
			</li>
			<li className={styles.item}>
				<NavLink to='/messages' activeClassName={styles.active}>
					<img src={icon_messages} alt="Messages" />
					Messages
					<div className={styles.notifications}>3</div>
				</NavLink>
			</li>
			<li className={styles.item}>
				<NavLink to='/friends' activeClassName={styles.active}>
					<img src={icon_friends} alt="Friends" />
					Friends
				</NavLink>
			</li>
			<li className={styles.item}>
				<NavLink to='/news' activeClassName={styles.active}>
					<img src={icon_news} alt="News" />
					News
				</NavLink>
			</li>
			<li className={styles.item}>
				<NavLink to='/settings' activeClassName={styles.active}>
					<img src={icon_settings} alt="Settings" />
					Settings
				</NavLink>
			</li>
		</ul>
	)
}

export default MenuNavbar