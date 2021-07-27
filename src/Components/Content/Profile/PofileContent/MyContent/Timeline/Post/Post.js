import React from 'react'
import styles from './Post.module.sass'
import like from '../../../../../../../images/icon_like.svg'
import comments from '../../../../../../../images/icon_comment.svg'
import share from '../../../../../../../images/icon_share.svg'
import PostHeader from './PostHeader'
import PostContent from './PostContent'
import PostComments from './PostComments'

let Post = (props) => {
	return (
		<article className={styles.post}>
		<PostHeader />
		<PostContent />

		<div className={styles.action_buttons}>
			<div className={styles.left_buttons}>
			<button className={styles.likes}>
				<img src={like} alt="Likes" />
				<span>43</span>
			</button>
			<button className={styles.comments}>
				<img src={comments} alt="Comments" />
				<span>5</span>
			</button>
			</div>
			<button className={styles.share}>
				<img src={share} alt="Share" />
				<span>1</span>
			</button>
		</div>

		<PostComments />

		</article>
	)
}

export default Post
