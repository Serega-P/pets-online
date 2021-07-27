import React from 'react'
import styles from './Sidebar.module.sass'
import About from './About/About'

let Sidebar = (props) => {
	return (
		<div className={styles.sidebar}>
			<About />
		</div>
	)
}

export default Sidebar
