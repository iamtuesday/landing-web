import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
	const baseURL = process.env.NEXT_BASE_URL || 'localhost:3000'

	return {
		rules: {
			userAgent: '*',
			allow: '/',
			disallow: '/private/'
		},
		sitemap: `${baseURL}/sitemap.xml`
	}
}
