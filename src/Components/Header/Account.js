import React from 'react'
import styles from './Header.module.sass'
import user from '../../images/user.png'
import arrow from '../../images/arrow_down.svg'

let Account = (props) => {
	return (
		<div className={styles.account}>
			<div className={styles.user}>
				<img src={user} alt="account" />
			</div>
			<div className={styles.arrow_down}>
				<img src={arrow} alt="account" />
			</div>
		</div>
	)
}

export default Account