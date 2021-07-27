import React from 'react'
import styles from './About.module.sass'
import AboutItem from './AboutItem'

let About = (props) => {
	return (
		<div className={styles.about}>
		<h3 className={styles.about_title}>About</h3>

			<ul className={styles.about_list}>
				<AboutItem />
			</ul>
		</div>
	)
}

export default About
