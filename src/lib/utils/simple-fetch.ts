const baseURL: string = process.env.NEXT_PUBLIC_API_URL || ''
type AsyncTuple<T> = [T | null, Error | null]

interface FetchOptions extends RequestInit {
	revalidate?: number
}

export const simpleFetch = async <T>(
	url: string,
	{
		method = 'GET',
		headers = { 'Content-Type': 'application/json' },
		revalidate = 10,
		...restOptions
	}: FetchOptions = {}
): Promise<AsyncTuple<T>> => {
	try {
		const response = await fetch(`${baseURL}${url}`, {
			method,
			headers,
			next: { revalidate },
			...restOptions
		})

		if (!response.ok) {
			return [null, new Error(`Error ${response.status}: ${response.statusText}`)]
		}

		const data: T = await response.json()
		return [data, null]
	} catch (error: any) {
		return [null, error.message]
	}
}
