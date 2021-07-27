import React from 'react'
import {Link} from 'react-router-dom'
import styles from './Header.module.sass'
import logo from '../../images/logo.svg'

let Logo = (props) => {
	return (
		<Link to='/profile/timeline'>
				<img className={styles.logo} src={logo} alt="Dog-lovers" />
		</Link>
	)
}

export default Logo