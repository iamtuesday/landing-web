import * as z from 'zod'

export const createUserSchema = z.object({
	// firstname: z.string().min(3),
	// lastname: z.string().min(3),
	email: z.string().email().min(3),
	password: z.string().min(6)
})
