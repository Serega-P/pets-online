import React from 'react'
import styles from './About.module.sass'
import kind from '../../../../../../images/kind_icon.svg'

let AboutItem = (props) => {
	return (
		<li className={styles.about_item}>
			<div className={styles.about_icon} >
				<img src={kind} alt="Kind" />
			</div>
			Kind:
			<strong>Cat</strong>
		</li>
	)
}

export default AboutItem
