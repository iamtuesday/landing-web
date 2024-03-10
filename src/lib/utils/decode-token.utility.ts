import { JwtPayload, jwtDecode } from 'jwt-decode'

type AuthToken = {
	id: string
	email: string
	roles: string[]
	accessToken: string
	refreshToken?: string
	avatar?: string
}

type TokenDecodeError = {
	message: string
}

export const decodeToken = (token: string) => {
	try {
		if (!token) return null

		const tokenObject = JSON.parse(token) as AuthToken

		const decoded = jwtDecode<JwtPayload>(tokenObject?.accessToken)
		return decoded
	} catch (error) {
		const typedError: TokenDecodeError = {
			message: 'Error al decodificar el token'
		}

		console.error(typedError)

		return null
	}
}
