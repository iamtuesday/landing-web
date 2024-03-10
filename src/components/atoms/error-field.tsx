import { cn } from '@/lib/utils'

export const ErrorField = ({ ...props }) => {
	return (
		<span
			className={cn('inline-block', 'py-1 px-3', ' text-xs', 'bg-red-50', 'text-red-500', ' border-red-500', 'border', ' rounded-lg')}
			{...props}
		/>
	)
}
