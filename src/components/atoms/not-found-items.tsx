import { cn } from '@/lib/utils'
import { Title } from '../ui'

interface NotFoundItemsProps {
	icon: JSX.Element
	title?: string
	description?: string
	className?: string
}
export const NotFoundItems = ({ icon, title, description, className }: NotFoundItemsProps) => {
	return (
		<div className={cn('flex  flex-col gap-2 justify-center items-center', className)}>
			<span className="text-foreground/50">{icon}</span>
			{title && (
				<Title variant={'ghost'} size={'2xl'}>
					{title}
				</Title>
			)}
			{description && <p className="text-sm text-foreground/50">{description}</p>}
		</div>
	)
}
