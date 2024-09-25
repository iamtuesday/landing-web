'use client'

import { cn } from '@/lib/utils'
import * as LabelPrimitive from '@radix-ui/react-label'
import { Slot } from '@radix-ui/react-slot'
import * as React from 'react'
import { Controller, ControllerProps, FieldPath, FieldValues, FormProvider, useFormContext } from 'react-hook-form'
import { ErrorField } from '../atoms'
import { Label } from './label'

const Form = FormProvider

type FormFieldContextValue<
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
	name: TName
}

const FormFieldContext = React.createContext<FormFieldContextValue>({} as FormFieldContextValue)

const FormField = <
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
	...props
}: ControllerProps<TFieldValues, TName>) => {
	return (
		<FormFieldContext.Provider value={{ name: props.name }}>
			<Controller {...props} />
		</FormFieldContext.Provider>
	)
}

const useFormField = () => {
	const fieldContext = React.useContext(FormFieldContext)
	const itemContext = React.useContext(FormItemContext)
	const { getFieldState, formState } = useFormContext()

	const fieldState = getFieldState(fieldContext.name, formState)

	if (!fieldContext) {
		throw new Error('useFormField should be used within <FormField>')
	}

	const { id } = itemContext

	return {
		id,
		name: fieldContext.name,
		formItemId: `${id}-form-item`,
		formDescriptionId: `${id}-form-item-description`,
		formMessageId: `${id}-form-item-message`,
		...fieldState
	}
}

type FormItemContextValue = {
	id: string
}

const FormItemContext = React.createContext<FormItemContextValue>({} as FormItemContextValue)

const FormItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => {
		const id = React.useId()

		return (
			<FormItemContext.Provider value={{ id }}>
				<div ref={ref} className={cn('space-y-2', className)} {...props} />
			</FormItemContext.Provider>
		)
	}
)
FormItem.displayName = 'FormItem'

const FormLabel = React.forwardRef<
	React.ElementRef<typeof LabelPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & { isRequired?: boolean }
>(({ className, isRequired, ...props }, ref) => {
	const { error, formItemId } = useFormField()

	return <Label ref={ref} className={cn(className)} isRequired={isRequired} htmlFor={formItemId} {...props} />
})
FormLabel.displayName = 'FormLabel'

const FormControl = React.forwardRef<React.ElementRef<typeof Slot>, React.ComponentPropsWithoutRef<typeof Slot>>(
	({ ...props }, ref) => {
		const { error, formItemId, formDescriptionId, formMessageId } = useFormField()

		return (
			<Slot
				ref={ref}
				id={formItemId}
				aria-describedby={!error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`}
				aria-invalid={!!error}
				{...props}
			/>
		)
	}
)
FormControl.displayName = 'FormControl'

const FormDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
	({ className, ...props }, ref) => {
		const { formDescriptionId } = useFormField()

		return <p ref={ref} id={formDescriptionId} className={cn('text-sm text-muted-foreground', className)} {...props} />
	}
)
FormDescription.displayName = 'FormDescription'

interface FormMessageProps extends React.HTMLAttributes<HTMLParagraphElement> {
	variant?: 'default' | 'custom' // Definimos las opciones válidas para la propiedad variant
}

const FormMessage = React.forwardRef<HTMLParagraphElement, FormMessageProps>(
	({ className, children, variant, ...props }, ref) => {
		const { error, formMessageId } = useFormField()
		const body = error ? String(error?.message) : children

		if (!body) {
			return null
		}

		const variants = {
			default: (
				<p
					ref={ref}
					id={formMessageId}
					className={cn('text-2xl font-medium text-destructive text-red-500', className)}
					{...props}
				>
					{body}
				</p>
			),
			custom: (
				<ErrorField ref={ref} id={formMessageId} {...props}>
					{body}
				</ErrorField>
			)
		}

		return variants[variant || 'default'] || variants.default
	}
)

export default FormMessage

FormMessage.displayName = 'FormMessage'

export { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, useFormField }
