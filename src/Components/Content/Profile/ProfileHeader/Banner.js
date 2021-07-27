import React from 'react'
import styles from './ProfileHeader.module.sass'
import banner from '../../../../images/profiles_banner.png'

let Banner = (props) => {
	return (
			<div className={styles.profiles_banner}>
				<img src={banner} alt="Banner" />
			</div>
	)
}

export default Banner
