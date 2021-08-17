const HOST_NAME = 'https://api.twitch.tv/helix/search/channels'

export default async (req, res) => {
	console.warn('METHOD => ', req.method)
	try {
		if (req.method === 'POST') {
			const { data } = req.body

			const channelName = await getTwitchChannel(data)

			if(channelName) {
				console.table(channelName)
				res.status(200).json({ data: channelName })
			}
		}
	} catch (error) {
		console.error(error)
		res.status(500).send()
	}
}

const getTwitchChannel = async (channelName) => {
	console.log('SEARCHING FOR TWITCH CHANNEL...')
	if (channelName) {
		const accessToken = await getTwitchAccessToken()

		if (accessToken) {
			const response = await fetch(`${HOST_NAME}?query=${channelName}`, {
				headers: {
					Authorization: `Bearer ${accessToken}`,
					'Client-Id': process.env.TWITCH_CLIENT_ID
				}
			})

			const json = await response.json()

			if (json.data) {
				const { data } = json
				const lowercaseChannelName = channelName.toLowerCase()

				const foundChannel = data.find((channel) => {
					const lowercaseDisplayName =
						channel.display_name.toLowerCase()
					return lowercaseChannelName.includes(lowercaseDisplayName)
				})

				return foundChannel
			}
		}
		throw new Error('Twitch accesToken was undefined.')
	}
	throw new Error('No channelName provided.')
}

const getTwitchAccessToken = async () => {
	console.log('GETTING ACCESS TOKEN...')

	const path = `https://id.twitch.tv/oauth2/token?client_id=
		${process.env.TWITCH_CLIENT_ID}&client_secret=
		${process.env.TWITCH_SECRET_ID}&grant_type=client_credentials`

	const response = await fetch(path, {
		method: 'POST'
	})

	if (response) {
		const json = await response.json()
		return json.access_token
	}
}
