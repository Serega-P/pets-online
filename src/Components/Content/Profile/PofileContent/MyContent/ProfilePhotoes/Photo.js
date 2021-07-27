import React from 'react'
import styles from './ProfilePhotoes.module.sass'



let Photo = (props) => {
	return (
		<div className={styles.photo}>
			<img src={props.img} alt={props.id} />
		</div>
	)
}

export default Photo
