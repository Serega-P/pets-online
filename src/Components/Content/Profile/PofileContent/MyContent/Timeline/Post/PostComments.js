import React from 'react'
import styles from './Post.module.sass'
import avatar from '../../../../../../../images/user.png'
import like from '../../../../../../../images/icon_like.svg'
import replay from '../../../../../../../images/icon_replay.svg'
import send from '../../../../../../../images/icon_send.svg'

let PostComments = (props) => {
	return (
		<div className={styles.comment_area}>
			<div className={styles.comment}>

				<div className={styles.user}>
					<div className={styles.user_avatar}><img src={avatar} alt="User name" /></div>
					<div className={styles.user_name}>Poppy</div>
				</div>
					
					<div className={styles.comment_body}>
						<div className={styles.comment_text}>
							Sed diam nonummy euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
						</div>
						<div className={styles.comment_action_buttons}>
						<button className={`${styles.love} ${styles.action_but}`}>
							<img src={like} alt="Love comment" />
							<span>Love</span>
						</button>
						<button className={`{styles.replay} ${styles.action_but}`}>
							<img src={replay} alt="Replay" />
							<span>Replay</span>
						</button>
					</div>
					</div>
			</div>
			<div className={styles.add_comment}>
				<input type="text" placeholder="Add your Comment.." />
				<button><img src={send} alt="Send comment" /></button>
			</div>
		</div>
	)
}

export default PostComments
