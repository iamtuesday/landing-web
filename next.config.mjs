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
	}
}

export default nextConfig
