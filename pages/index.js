import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState } from 'react'

const Home = () => {
	const [favoriteStreamer, setFavoriteStreamer] = useState([])

	const addStreamerChannel = async (event) => {
		event.preventDefault()
		const { value } = event.target.elements.name
		if (value) {
			// http://localhost:3000/api/twitch
			const path = `http://${window.location.hostname}:3000`
			console.error(path)

			let response = await fetch(`${path}/api/twitch`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ data: value })
			})

			const json = await response.json()

			console.log('From the server: ', json.data)
			setFavoriteStreamer((setValue) => [...setValue, value])
			event.target.elements.name.value = ''
		}
	}
	// renderForm
	// const renderForm = () => {
	// 	<div className={styles.formContainer}>
	// 		<form>
	// 			<input
	// 				id="name"
	// 				placeholder="Twitch Channel Name"
	// 				type="text"
	// 			/>
	// 			<button type="submit">Add Streamer</button>
	// 		</form>
	// 	</div>
	// }

	return (
		<div className={styles.container}>
			<Head>
				<title>🎥 Personal Twitch Dashboard</title>
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
				/>
			</Head>
			<div className={styles.inputContainer}>
				<div>
					<h1>Welcome to the Personalized Twitch Dashboard! 🎥</h1>
					<div className={styles.formContainer}>
						<form onSubmit={addStreamerChannel}>
							<input
								id="name"
								placeholder="Twitch Channel Name"
								type="text"
							/>
							<button type="submit">Add Streamer</button>
						</form>
						<div>{favoriteStreamer.join(', ')}</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home
