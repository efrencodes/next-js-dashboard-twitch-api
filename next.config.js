module.exports = {
	images: {
		deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
		domains: ['static-cdn.jtvnw.net', 'media.giphy.com']
	},
	reactStrictMode: true,
	eslint: {
		dirs: ['pages', 'utils'] // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
	}
}
