/** @type {import('next').NextConfig} */

const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'tuesdays3.sfo3.digitaloceanspaces.com',
				port: '',
				pathname: '/*'
			}
		]
	},
	redirects: async () => {
		return [
			{
				source: '/',
				destination: '/electrical-panel-upgrades',
				permanent: true
			}
		]
	}
}

export default nextConfig
