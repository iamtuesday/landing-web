import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import React from 'react'

const titleVariants = cva('font-medium font-sans', {
	variants: {
		variant: {
			default: 'text-black/60',
			primary: 'text-primary',
			secondary: 'text-muted-foreground',
			destructive: 'text-destructive',
			outline: 'outline',
			ghost: 'text-foreground',
			link: 'underline underline-offset-4',
			oneline: 'truncate',
			light: 'text-background'
		},
		size: {
			default: 'text-3xl tablet:text-4xl laptop:text-5xl',
			sm: 'text-sm',
			lg: 'text-sm tablet:text-lg laptop:text-lg',
			xl: 'text-xs tablet:text-lg laptop:text-xl',
			'2xl': 'text-lg tablet:text-xl laptop:text-2xl ',
			'3xl': 'text-xl tablet:text-2xl laptop:text-3xl',
			'4xl': 'text-2xl tablet:text-3xl laptop:text-4xl'
		}
	},
	defaultVariants: {
		variant: 'primary',
		size: 'default'
	}
})

const title = {
	h1: 'h1',
	h2: 'h2',
	h3: 'h3',
	h4: 'h4',
	h5: 'h5',
	h6: 'h6'
}

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof titleVariants> {
	tag?: keyof typeof title
}

const Title: React.FC<TitleProps> = ({ className, variant, size, tag = 'h2', children, ...restProps }) => {
	const Tag = title[tag as keyof typeof title] as React.ElementType
	return (
		<Tag className={cn(titleVariants({ variant, size, className }))} variant={variant} size={size} {...restProps}>
			{children}
		</Tag>
	)
}

export { Title, titleVariants }
