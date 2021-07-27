import React from 'react'
import styles from './Header.module.sass'
import bell from '../../images/bell.svg'

let Notifications = (props) => {
	return (
		<div className={`${styles.notifications} ${styles.active}`}>
			<img src={bell} alt="Notifications" className={styles.bell} />
		</div>
	)
}

export default Notifications