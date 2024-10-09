import { quoteFormSchema } from '@/components/organisms/quote-form'
import { ILanding } from '@/interfaces/landing.interface'
import { simpleFetch } from '@/lib/utils/simple-fetch'
import { z } from 'zod'
import { mapGetData } from './get-data.mapper'

export const getData = async (slug: string): Promise<ILanding> => {
	const [data, error] = await simpleFetch<IGenericRecord>(`/landings?populate=deep&filters[slug]=${slug}`)

	if (!!error) {
		console.warn('Error fetching data', error)
	}

	return mapGetData(data!)
}

export const createForm = async (_data: z.infer<typeof quoteFormSchema>): Promise<void> => {
	const data = {
		..._data
	}

	console.log('data', data)

	const [response, error] = await simpleFetch<IGenericRecord>('/landing-forms', {
		headers: {
			'Content-Type': 'application/json'
		},
		method: 'POST',
		body: JSON.stringify({
			data
		})
	})

	if (!!error) {
		console.warn('Error fetching data', error)
	}
}
