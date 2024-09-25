'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Button, Form, FormControl, FormField, FormItem, FormMessage, Input } from '../ui'

const quoteFormSchema = z.object({
	name: z.optional(z.string().min(3)),
	email: z.string().email(),
	phone: z.string().min(10),
	message: z.string().min(5)
})

export const QuoteForm = () => {
	const form = useForm<z.infer<typeof quoteFormSchema>>({
		resolver: zodResolver(quoteFormSchema),
		defaultValues: {
			name: '',
			email: '',
			phone: '',
			message: ''
		},
		mode: 'onChange'
	})

	const {
		handleSubmit,
		formState: { errors }
	} = form

	const onSubmit = (data: z.infer<typeof quoteFormSchema>) => {
		console.log(data)
	}

	return (
		<Form {...form}>
			<form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-4 py-12 px-8 bg-slate-50">
				<FormField
					control={form.control}
					name="name"
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
					name="message"
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
