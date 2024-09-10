import { cn } from '@/lib/utils'
import { cva, VariantProps } from 'class-variance-authority'
import React from 'react'
import { Typography } from '../molecules'

const TitlesVariants = cva('font-semibold md:text-2xl font-unbounded', {
	variants: {
		position: {
			left: 'text-left',
			center: 'text-center',
			right: 'text-right'
		},
		defaultVariants: {
			position: 'left'
		}
	}
})

interface TitlesProps extends VariantProps<typeof TitlesVariants> {
	title: string
	subtitle?: string
	className?: string
}

const Titles = React.forwardRef<HTMLDivElement, TitlesProps>(
	({ subtitle, title, className, position, ...props }, ref) => {
		return (
			<div className={cn('flex flex-col gap-6 max-w-[800px] mx-auto', className)} ref={ref} {...props}>
				{!!subtitle && (
					<Typography
						as="md"
						size="3xl"
						weight="semibold"
						className={cn(TitlesVariants({ position }), 'text-primary uppercase')}
					>
						{subtitle}
					</Typography>
				)}

				<Typography as="h2" size="7xl" weight="bold" className={cn(TitlesVariants({ position }))}>
					{title}
				</Typography>
			</div>
		)
	}
)

Titles.displayName = 'Titles'

export { Titles }
