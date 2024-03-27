import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'

const baseURL = process.env.NEXT_PUBLIC_API_URL

export const axiosConfig = axios.create({
	baseURL,
	headers: {
		'Content-Type': 'application/json'
	}
})

export const axiosFetchConfig = async <T = any>(
	url: string,
	method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
	data?: any,
	options?: AxiosRequestConfig
): Promise<[T | null, AxiosError | null]> => {
	try {
		const response: AxiosResponse<T> = await axios({
			baseURL,
			url,
			method,
			data,
			...options
		})

		return [response.data, null]
	} catch (error) {
		if (axios.isAxiosError(error)) {
			return [null, error]
		} else {
			return [null, error as AxiosError]
		}
	}
}
