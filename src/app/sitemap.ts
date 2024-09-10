import { simpleFetch } from '@/lib/utils/simple-fetch'
import type { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const baseURL = process.env.NEXT_BASE_URL || 'localhost:3000'
	const [response, error] = await simpleFetch<IGenericRecord>('/landings?populate=deep')

	const landings = response?.data || []

	const landingPosts = landings.map((landing: IGenericRecord) => ({
		url: `${baseURL}/${landing.attributes.slug}`,
		lastModified: new Date(),
		changeFrequency: 'yearly',
		priority: 1
	}))

	return [
		{
			url: `${baseURL}`,
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 1
		},
		...landingPosts
	]
}
