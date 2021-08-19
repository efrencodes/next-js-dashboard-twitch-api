const HOST_NAME = 'https://api.twitch.tv/helix/search/channels'

export default async (req, res) => {
	console.warn('METHOD => ', req.method)
	try {
		if (req.method === 'POST') {
			const { data } = req.body

			const channelName = await getTwitchChannel(data)

			if (channelName) {
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
			const listChannelName = await getListChannelName(
				accessToken,
				channelName
			)

			if (listChannelName) {
				const lowercaseChannelName = channelName.toLowerCase()

				const foundChannel = listChannelName.find((channel) => {
					const lowercaseDisplayName =
						channel.display_name.toLowerCase()
					return lowercaseChannelName === lowercaseDisplayName
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

	const path = `https://id.twitch.tv/oauth2/token?client_id=${process.env.TWITCH_CLIENT_ID}&client_secret=${process.env.TWITCH_SECRET_ID}&grant_type=client_credentials`

	const response = await fetch(path, {
		method: 'POST'
	})

	if (response) {
		const json = await response.json()
		return json.access_token
	}
}

const getListChannelName = async (accessToken, channelName) => {
	console.log('GETTING TWITCH CHANNEL NAME...')

	const path = `${HOST_NAME}?query=${channelName}`

	const response = await fetch(path, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${accessToken}`,
			'Client-Id': process.env.TWITCH_CLIENT_ID
		}
	})

	if (response) {
		const json = await response.json()
		return json.data
	}
}

export const config = {
	api: {
		externalResolver: true
	}
}
