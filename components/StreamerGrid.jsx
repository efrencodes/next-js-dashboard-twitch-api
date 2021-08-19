import React, { useEffect } from 'react'
import Image from 'next/image'
import styles from '../styles/StreamerGrid.module.css'

const StreamerGrid = ({ channels }) => {
	useEffect(() => {
		console.log('STREAMERGRID ==> ', channels)
	}, [channels])

	const removeChannelAction = (id) => {
		console.log(id)
	}

	return (
		<div className={styles.container}>
			<h2>FAVORITE CHANNELS</h2>
			<div className={styles.gridContainer}>
				{channels.length > 0 &&
					channels.map((channel) => (
						<div key={channel.id} className={styles.gridItem}>
							{/* <button onClick={removeChannelAction(channel.id)}>
								X
							</button> */}
							<Image layout="fill" src={channel.thumbnail_url} />
							<div className={styles.gridItemContent}>
								<p>{channel.display_name}</p>
								<p>{channel.game_name}</p>
								{channel.is_live && <p>🔴 Live Now!</p>}
								{!channel.is_live && <p>⚫ Offline</p>}
							</div>
						</div>
					))}
			</div>
			{channels.length === 0 && (
				<div className={styles.gridNoItem}>
					<Image
						src="https://media.giphy.com/media/26n6WywJyh39n1pBu/giphy.gif?cid=ecf05e472hwhrunnyqqbe2ycu7svpts72p7kmb0iyx7mao2p&rid=giphy.gif&ct=g"
						height={250}
						width={350}
					/>
				</div>
			)}
		</div>
	)
}

export default StreamerGrid
