'use client'

import { createForm } from '@/services/get-data.service'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Button, Form, FormControl, FormField, FormItem, FormMessage, Input, Textarea } from '../ui'

export const quoteFormSchema = z.object({
	fullname: z.optional(z.string().min(3)),
	email: z.string().email(),
	phone: z.string().min(10),
	address: z.optional(z.string().min(3)),
	issue: z.string().min(5)
})

export const QuoteForm = () => {
	const router = useRouter()
	const form = useForm<z.infer<typeof quoteFormSchema>>({
		resolver: zodResolver(quoteFormSchema),
		defaultValues: {
			fullname: '',
			email: '',
			phone: '',
			address: undefined,
			issue: ''
		},
		mode: 'onChange'
	})

	const {
		handleSubmit,
		formState: { errors }
	} = form

	const onSubmit = async (data: z.infer<typeof quoteFormSchema>) => {
		const response = await createForm({
			...data
		})

		if (response?.[1]) {
			console.warn('Error fetching data', response?.[1])
		}

		router.push('/thank-you')
	}

	return (
		<Form {...form}>
			<form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-4 py-12 px-8 bg-white">
				<FormField
					control={form.control}
					name="fullname"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input type="text" {...field} placeholder="Name" />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input type="email" {...field} placeholder="Email" />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="phone"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input type="tel" {...field} placeholder="Phone" />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="issue"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Textarea {...field} placeholder="Issue" />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<div className="mt-8">
					<Button type="submit">Make an Enquiry</Button>
				</div>
			</form>
		</Form>
	)
}
