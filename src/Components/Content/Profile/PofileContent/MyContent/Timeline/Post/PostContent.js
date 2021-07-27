import React from 'react'
import styles from './Post.module.sass'
import img from '../../../../../../../images/post_img.png'

let PostContent = (props) => {
	return (
		<div className={styles.post_content}>
			<div className={styles.post_text}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
				non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</div>
			<div className={styles.post_images}>
				<img src={img} alt="Post images" />
			</div>
		</div>
	)
}

export default PostContent
