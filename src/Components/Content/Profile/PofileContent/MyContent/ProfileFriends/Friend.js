import React from 'react'
import styles from './ProfileFriends.module.sass'
import avatar from '../../../../../../images/user.png'


let Friend = (props) => {
	return (
		<li className={styles.friend_item}>
		<div className={styles.user}>
			<div className={styles.avatar}><img src={avatar} alt="User Name" /></div>
			<div className={styles.name}>Poppy</div>
		</div>
			<button className={styles.button}>Following</button>
		</li>
	)
}

export default Friend
