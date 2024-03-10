'use client'

import { cn } from '@/lib/utils'
import { useRouter } from 'next/navigation'
import { Button, Icons } from '../ui'

export const PrevLink = ({ className, ...props }: { className?: string; [key: string]: any }) => {
	const router = useRouter()

	const handleBack = () => {
		router.back()
	}
	return (
		<Button onClick={handleBack} variant={'ghost'} className={cn('gap-2 items-center text-sm', className)} {...props}>
			<Icons.arrowLeft size={16} /> Back
		</Button>
	)
}
