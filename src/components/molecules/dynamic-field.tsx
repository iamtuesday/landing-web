import { cn } from '@/lib/utils'
import { ErrorField } from '../atoms'
import { Label } from '../ui'

interface DynamicFieldProps {
	error?: string
	children: React.ReactNode
	label: string
	isRequired?: boolean
	className?: string
}

export const DynamicField = ({ children, label, isRequired, error, className }: DynamicFieldProps) => {
	return (
		<div className={cn('flex flex-col gap-3', className)}>
			<Label htmlFor={label}>
				{label}
				{isRequired && <span className="text-destructive">*</span>}
			</Label>
			{children}

			{error && <ErrorField error={error} />}
		</div>
	)
}
