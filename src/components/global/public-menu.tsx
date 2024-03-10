import { marketingConfig } from '@/config/marketing'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { Navbar } from '../molecules'
import { buttonVariants } from '../ui'

export const PublicMenu = () => {
	return (
		<div className="container flex gap-4 items-center justify-between p-0">
			<Navbar items={marketingConfig.mainNav} />

			{/* <DynamicSearch placeholder="Search" /> */}

			<ul>
				<li>
					<Link href="/login" className={cn(buttonVariants({ size: 'sm' }), 'w-20')}>
						Login
					</Link>
				</li>
			</ul>
		</div>
	)
}
