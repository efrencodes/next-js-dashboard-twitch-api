import Head from 'next/head'
import styles from '../styles/Home.module.css'
import StreamerGrid from '../components/StreamerGrid'
import { useState } from 'react'
import Image from 'next/image'

const Home = () => {
	// const [favoriteChannels, setFavoriteChannels] = useState([
	// 	{
	// 		broadcaster_language: 'es',
	// 		broadcaster_login: 'gndxdev',
	// 		display_name: 'gndxdev',
	// 		game_id: '509670',
	// 		game_name: 'Science & Technology',
	// 		id: '488869837',
	// 		is_live: false,
	// 		tag_ids: [],
	// 		thumbnail_url:
	// 			'https://static-cdn.jtvnw.net/jtv_user_pictures/1b633c9c-18f2-4ef8-a9e9-5b69291bcefb-profile_image-300x300.png',
	// 		title: '🔥 Un Frontend en cuarentena #Frontend #JavaScript',
	// 		started_at: ''
	// 	}
	// ])
	const [favoriteChannels, setFavoriteChannels] = useState([])

	const addStreamerChannel = async (event) => {
		event.preventDefault()
		const { value } = event.target.elements.name
		if (value) {
			// http://localhost:3000/api/twitch
			// const path = `https://${window.location.hostname}:3000`
			let response = await fetch(`api/twitch`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ data: value })
			})

			const dataChannel = await response.json()

			setFavoriteChannels((setValue) => [...setValue, dataChannel.data])
			event.target.elements.name.value = ''
		}
	}

	return (
		<div className={styles.container}>
			<Head>
				<title>Personal Twitch Dashboard</title>
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
				/>
				<meta
					name="description"
					content="Build a personalized Twitch dashboard using the Twitch API + Next.js "
				/>
				<meta charset="UTF-8" />
				<meta
					name="keywords"
					content="nextjs,reactjs,css modules,api routes"
				/>
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://next-js-dashboard-twitch-api.vercel.app/" />
				<meta property="og:title" content="website" />
				<meta
					property="og:type"
					content="Personal Twitch Dashboard"
				/>
				<meta
					property="og:description"
					content="Build a personalized Twitch dashboard using the Twitch API + Next.js "
				/>
				<meta
					property="og:image"
					content="https://res.cloudinary.com/efrenmartinez/image/upload/v1630521109/efrenmartinez.dev/projects/twitch-dashboard_zdk94v.png"
				/>
				// Twitter Card
				<meta property="twitter:card" content="summary_large_image" />
				<meta
					property="twitter:url"
					content="https://next-js-dashboard-twitch-api.vercel.app/"
				/>
				<meta
					property="twitter:title"
					content="Personal Twitch Dashboard"
				/>
				<meta
					property="twitter:description"
					content="Build a personalized Twitch dashboard using the Twitch API + Next.js "
				/>
				<meta
					property="twitter:image"
					content="https://res.cloudinary.com/efrenmartinez/image/upload/v1630521109/efrenmartinez.dev/projects/twitch-dashboard_zdk94v.png"
				/>
				<meta property="twitter:creator" content="@efrencodes" />
				<meta property="twitter:site" content="@efrencodes" />
				<meta
					property="twitter:image:alt"
					content="Personal Twitch Dashboard"
				/>
			</Head>
			<div className={styles.inputContainer}>
				<div>
					<Image
						width={60}
						height={70}
						src="/TwitchGlitchWhite.png"
					/>
					<h1>Welcome to the Personalized Twitch Dashboard</h1>
					<div className={styles.formContainer}>
						<form onSubmit={addStreamerChannel}>
							<input
								id="name"
								placeholder="Twitch Channel Name"
								type="text"
							/>
							<button type="submit">Add Streamer</button>
						</form>
					</div>
					<StreamerGrid channels={favoriteChannels} />
				</div>
				<footer className={styles.footer}>
					<a
						href="https://vercel.com/docs"
						target="_blank"
						rel="noopener noreferrer"
					>
						Powered by{' '}
						<span className={styles.logo}>
							<Image
								src="/vercel.svg"
								alt="Vercel Logo"
								width={72}
								height={16}
							/>
						</span>
					</a>
				</footer>
			</div>
		</div>
	)
}

export default Home
