import React from 'react'
import styles from './Post.module.sass'
import avatar from '../../../../../../../images/user.png'

let PostHeader = (props) => {
	return (
		<div className={styles.post_header}>
			<div className={styles.post_info}>
				<div className={styles.user_avatar}>
					<img src={avatar} alt="User name" />
				</div>
				<div className={styles.user_info}>
					<div className={styles.name}>Poppy</div>
					<div className={styles.time_post}>2 days ago</div>
				</div>
			</div>
			<div className={styles.post_toolbar}><button><span></span></button></div>
		</div>
	)
}

export default PostHeader
