import React from 'react'
import styles from './ProfilePhotoes.module.sass'
import Photo from './Photo'
import p1 from '../../../../../../images/photo_1.jpg'
import p2 from '../../../../../../images/photo_2.jpg'
import p3 from '../../../../../../images/photo_3.jpg'

let ProfilePhotoes = (props) => {

	let p = [
		{id: '23242352', img: p1},
		{id: '34336', img: p2},
		{id: '3636242', img: p3},
		{id: '76555656', img: p2},
		{id: '2324324', img: p1},
		{id: '23423244', img: p3},
		{id: '566576555', img: p1},
		{id: '35456868', img: p3}
	]

	let myPhotoes = p.map( (p) => <Photo img={p.img} id={p.id} /> )

	return (
		<div className={styles.photoes}>
			{myPhotoes}
		</div>
	)
}

export default ProfilePhotoes
