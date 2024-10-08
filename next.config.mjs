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
		],
		domains: ['sfo3.digitaloceanspaces.com']
	},
	redirects: async () => {
		return [
			{
				source: '/',
				destination: '/electrical-panel-upgrades',
				permanent: false
			}
		]
	}
}

export default nextConfig
