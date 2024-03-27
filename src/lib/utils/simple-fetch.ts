const baseURL: string = process.env.NEXT_PUBLIC_API_URL || ''
type SimpleFetchReturnType<T> = [T | null, Error | null]

export const simpleFetch = async <T>(
	url: string,
	options: RequestInit = {
		method: 'GET',
		next: {
			revalidate: 10
		}
	}
): Promise<SimpleFetchReturnType<T>> => {
	try {
		const response = await fetch(`${baseURL}${url}`, options)
		if (!response.ok) {
			return [null, new Error(`Error ${response.status}: ${response.statusText}`)]
		}

		const data: T = await response.json()
		return [data, null]
	} catch (error: any) {
		return [null, error.message]
	}
}
