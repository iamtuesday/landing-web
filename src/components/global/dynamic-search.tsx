'use client'

import { cn } from '@/lib/utils'
import { VariantProps, cva } from 'class-variance-authority'
import { SearchIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { FC, useState } from 'react'
import { Button } from '../ui'

const searchVariants = cva('bg-background/70 tablet:min-w-[450px] rounded-full h-9 flex items-center', {
	variants: {
		variant: {
			default: 'border border-gray-300',
			primary: 'bg-white shadow-sm max-w-lg mx-auto '
		},
		size: {
			default: 'px-4 h-9',
			sm: 'rounded-md px-3',
			lg: 'rounded-md px-8',
			custom: 'h-12 p-2 w-full'
		}
	},
	defaultVariants: {
		variant: 'default',
		size: 'default'
	}
})

interface SearchJobProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof searchVariants> {
	hasButton?: boolean
	placeholder: string
}

export const DynamicSearch: FC<SearchJobProps> = ({ hasButton, variant, placeholder, size }) => {
	const [value, setValue] = useState('')
	const router = useRouter()
	function handleSearch(event: React.KeyboardEvent<HTMLInputElement>) {
		if (value === '') return
		if (event.key !== 'Enter') return
		router.push(`/courses?search=${value}`)
	}

	const handleOnClick = () => {
		if (value === '') return
		router.push(`/courses?search=${value}`)
	}

	return (
		<div className={cn(searchVariants({ variant, size }))}>
			<div className="flex-1 flex gap-1 items-center h-full">
				<SearchIcon size={16} className="ml-1" />
				<input
					type="text"
					className="flex-1 h-full w-full bg-transparent outline-none p-1"
					placeholder={placeholder}
					onChange={e => {
						setValue(e.target.value)
					}}
					onKeyDown={e => {
						handleSearch(e)
					}}
				/>
			</div>
			{hasButton && (
				<Button variant="destructive" className={cn('rounded-full my-1')} onClick={handleOnClick}>
					Search
				</Button>
			)}
		</div>
	)
}

DynamicSearch.displayName = 'DynamicSearch'
