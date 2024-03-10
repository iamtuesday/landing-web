import { cn } from '@/lib/utils'

interface DetailsItemProps {
	title: string
	details: string | number | React.ReactNode
	className?: string
	avatar?: string
	hasIcon?: boolean
}

export const DetailsItem: React.FC<DetailsItemProps> = ({ title, details, avatar, className, hasIcon }) => {
	return (
		<article className={cn('flex items-center gap-4', className)}>
			<div className="flex flex-col gap-1">
				<strong className="text-[12px] leading-none text-[#707070] font-bold uppercase">{title}</strong>
				{hasIcon ? (
					<div className="flex items-center gap-2">{details}</div>
				) : (
					<p className="leading-normal break-words text-inherit font-semibold">{details}</p>
				)}
			</div>
		</article>
	)
}
