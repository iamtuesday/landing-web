import { Typography } from '@/components/molecules'
import { buttonVariants } from '@/components/ui'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

export default async function ThankYouPage() {
	return (
		<div className={cn('grid h-[80.5vh] w-full place-items-center')}>
			<div className="flex flex-col justify-center items-center gap-4">
				<figure
					className={cn(
						'w-[15rem] h-auto rounded-full bg-primary-100 flex items-center justify-center',
						'laptop:w-[calc(20rem_*_var(--scale))]'
					)}
				>
					<Image src="/images/email.svg" alt="Thank you" width={200} height={200} className="w-full h-full" />
				</figure>
				<Typography as="h1" size="7xl" weight="semibold">
					Thank for submitting!
				</Typography>
				<Typography as="p" size="2xl" weight="normal" className="mt-4">
					Your message has been sent successfully.
				</Typography>

				<div className="mt-8">
					<Link href="/" className={cn(buttonVariants({ variant: 'rounded' }))}>
						Go back to home
					</Link>
				</div>
			</div>
		</div>
	)
}
