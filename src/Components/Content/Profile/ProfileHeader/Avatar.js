import React from 'react'
import styles from './ProfileHeader.module.sass'
import avatar from '../../../../images/user.png'

let Avatar = (props) => {
	return (
			<div className={styles.profile_avatar}>
				<img src={avatar} alt="User name" />
			</div>
	)
}

export default Avatar
