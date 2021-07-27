import React from 'react'
import styles from './ProfileFriends.module.sass'
import Friend from './Friend'


let ProfileFriends = (props) => {
	return (
		<ul className={styles.list_friends}>
			<Friend />
		</ul>
	)
}

export default ProfileFriends
