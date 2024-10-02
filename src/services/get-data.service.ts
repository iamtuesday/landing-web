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

	const response = mapGetData(data!)

	return response
}

export const getQuote = async (data: z.infer<typeof quoteFormSchema>): Promise<void> => {
	const [response, error] = await simpleFetch<IGenericRecord>('/quotes', {
		method: 'POST',
		body: JSON.stringify(data)
	})

	if (!!error) {
		console.warn('Error fetching data', error)
	}
}
