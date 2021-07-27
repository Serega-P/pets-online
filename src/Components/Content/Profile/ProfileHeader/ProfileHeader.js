import React from 'react'
import styles from './ProfileHeader.module.sass'
import ProfileNav from './ProfileNav'
import Banner from './Banner'
import Avatar from './Avatar'
import UserName from './UserName'

let ProfileHeader = (props) => {
	return (
		<div className={styles.header}>
			<Banner />
			<Avatar />
			<UserName />
			<ProfileNav />
		</div>
	)
}

export default ProfileHeader
