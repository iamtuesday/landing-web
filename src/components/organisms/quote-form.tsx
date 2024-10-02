'use client'

import { getQuote } from '@/services/get-data.service'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Button, Form, FormControl, FormField, FormItem, FormMessage, Input } from '../ui'

export const quoteFormSchema = z.object({
	fullName: z.optional(z.string().min(3)),
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
			fullName: '',
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

	console.log('errors -->', errors)

	const onSubmit = async (data: z.infer<typeof quoteFormSchema>) => {
		console.log('data -->', data)

		await getQuote(data)

		//TODO: If success, redirect to thank you page
		router.push('/thank-you')
	}

	return (
		<Form {...form}>
			<form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-4 py-12 px-8 bg-white">
				<FormField
					control={form.control}
					name="fullName"
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
								<Input type="text" {...field} placeholder="Message" />
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
