import { cn } from '@/lib/utils'
import { ErrorField } from '../atoms'
import { Input, Label } from '../ui'

interface InputFieldProps {
	value: string
	label: string
	onChange?: (value: any) => void
	error?: string
	placeholder?: string
	className?: string
	isRequired?: boolean
	name?: string
}

export const InputField = ({ value, label, isRequired, name, onChange, error, placeholder, className }: InputFieldProps) => {
	return (
		<div className={cn('flex flex-col gap-2', className)}>
			<Label htmlFor={label}>
				{label}
				{isRequired && <span className="text-destructive">*</span>}
			</Label>
			<Input name={name} id={label} value={value} onChange={onChange} placeholder={placeholder} />
			{error && <ErrorField error={error} />}
		</div>
	)
}
