import React from 'react'
import ProfileContent from './PofileContent/ProfileContent'
import styles from './Profile.module.sass'
import ProfileHeader from './ProfileHeader/ProfileHeader'

let Profile = (props) => {
	return (
		<div className={styles.profile}>
			<ProfileHeader />
			<ProfileContent />
		</div>
	)
}

export default Profile
