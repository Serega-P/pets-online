import React from 'react'
import styles from './Timeline.module.sass'
import user from '../../../../../../images/user.png'

let CreatePost = (props) => {
	return (
		<div className={styles.create_post}>
			<div className={styles.user}><img src={user} alt="User name" /></div>
			<div className={styles.input}><input type="text" placeholder="What's Your Mind ?"/></div>
		</div>
	)
}

export default CreatePost
