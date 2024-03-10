import * as z from 'zod'

export const loginUserSchema = z.object({
	email: z.string().email().min(3),
	password: z.string().min(6)
})
