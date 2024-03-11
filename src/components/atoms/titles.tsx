import { cn } from '@/lib/utils'
import { FC } from 'react'

interface TitlesProps {
	title: string
	subtitle?: string
	className?: string
	position?: 'left' | 'right' | 'center'
}

export const Titles: FC<TitlesProps> = ({ subtitle, title, className, position = 'left' }) => {
	const titleClasses = {
		'font-semibold md:text-2xl font-unbounded': true,
		'text-center': position === 'center',
		'text-right': position === 'right',
		'text-left': position === 'left'
	}

	return (
		<div className={cn('flex flex-col gap-6 max-w-[80rem]', position === 'center' && 'mx-auto', className)}>
			{subtitle != null && <h3 className={cn('uppercase text-primary', titleClasses)}>{subtitle}</h3>}
			<h2 className={cn('text-4xl font-bold font-unbounded leading-12 md:text-4xl lg:text-7xl', titleClasses)}>
				{title}
			</h2>
		</div>
	)
}
