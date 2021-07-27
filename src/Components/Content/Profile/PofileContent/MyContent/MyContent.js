import React from 'react'
import styles from './MyContent.module.sass'
import Timeline from './Timeline/Timeline'
import ProfileFriends from './ProfileFriends/ProfileFriends'
import { Route } from 'react-router-dom'
import ProfilePhotoes from './ProfilePhotoes/ProfilePhotoes';


let MyContent = (props) => {
	return (
		<div className={styles.my_content}>
			<Route path="/profile/timeline" component={Timeline}/>
			<Route path="/profile/friends" component={ProfileFriends}/>
			<Route path="/profile/photoes" component={ProfilePhotoes}/>
		</div>
	)
}

export default MyContent