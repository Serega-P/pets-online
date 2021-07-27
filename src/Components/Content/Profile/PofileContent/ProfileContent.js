import React from 'react'
import styles from './ProfileContent.module.sass'
import MyContent from './MyContent/MyContent'
import Sidebar from './Sidebar/Sedebar'


let ProfileContent = (props) => {
	return (
		<div className={styles.profile_content}>
			<MyContent />
			<Sidebar />
		</div>
	)
}

export default ProfileContent