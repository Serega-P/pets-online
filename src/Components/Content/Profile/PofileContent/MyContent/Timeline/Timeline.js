import React from 'react'
import styles from './Timeline.module.sass'
import CreatePost from './CreatePost'
import Post from './Post/Post'

let Timeline = (props) => {
	return (
		<div className={styles.timeline}>
			<CreatePost />
			<Post />
		</div>
	)
}

export default Timeline
