import { cn } from '@/lib/utils'

export const Description = ({ children, className }: { children?: React.ReactNode; className?: string }) => {
	return <div className={cn('text-sm laptop:text-base text-pretty text-muted-foreground', className)}>{children}</div>
}
