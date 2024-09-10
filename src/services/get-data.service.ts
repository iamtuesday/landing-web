import { ILanding } from '@/interfaces/landing.interface'
import { simpleFetch } from '@/lib/utils/simple-fetch'
import { mapGetData } from './get-data.mapper'

export const getData = async (slug: string): Promise<ILanding> => {
	const [data, error] = await simpleFetch<IGenericRecord>(`/landings?populate=deep&filters[slug]=${slug}`)

	if (!!error) {
		console.warn('Error fetching data', error)
	}

	const response = mapGetData(data!)

	return response
}
