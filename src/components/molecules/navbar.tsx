'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import * as React from 'react'

import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import { MainNavItem } from '@/types'
import { Icons } from '../ui'

interface MainNavProps {
	items?: MainNavItem[]
}

export function Navbar({ items }: MainNavProps) {
	const pathname = usePathname()
	const [showMobile, setShowMobile] = React.useState<boolean>(false)

	React.useEffect(() => {
		if (showMobile) {
			globalThis.document.body.style.overflow = 'hidden'
		} else {
			globalThis.document.body.style.overflow = 'auto'
		}
	}, [showMobile])

	return (
		<div className="flex items-center gap-6 md:gap-10">
			<Link href="/" className="hidden items-center space-x-2 md:flex">
				{/*   <Icons.logo /> */}
				<span className="font-semibold font-inter text-lg text-foreground">{siteConfig.name}</span>
			</Link>
			{items && (
				<nav className="hidden gap-6 md:flex">
					{items.map((item, index) => (
						<Link
							key={index}
							href={item.href}
							className={cn(
								'font-medium text-sm font-sans transition-colors text-foreground/50 hover:text-foreground',
								pathname === item.href ? 'text-primary' : 'text-foreground/60'
							)}
						>
							{item.title}
						</Link>
					))}
				</nav>
			)}

			<button className="flex items-center space-x-2 md:hidden" onClick={() => setShowMobile(true)}>
				{/* {showMobileMenu ? <Icons.close /> : <Icons.logo />} */}
				<span className="font-bold">Menu</span>
			</button>
			{showMobile && items && (
				<div className="fixed flex gap-4 flex-col top-0 left-0 bg-white w-screen h-screen tablet:hidden z-50 container px-4 py-5 overflow-hidden">
					<button className="place-self-end  rounded-sm" onClick={() => setShowMobile(false)}>
						<Icons.close className="text-foreground/50 w-5 h-5" />
					</button>

					<Link href="/" className="items-center space-x-2">
						{/*   <Icons.logo /> */}
						<span className="font-semibold font-home text-lg text-foreground">{siteConfig.name}</span>
					</Link>

					{items.map((item, index) => (
						<Link
							key={index}
							href={item.href}
							onClick={() => setShowMobile(false)}
							className={cn(
								'font-medium text-sm font-sans transition-colors text-foreground/50 hover:text-foreground',
								pathname === item.href ? 'text-primary' : 'text-foreground/60'
							)}
						>
							{item.title}
						</Link>
					))}
				</div>
			)}
		</div>
	)
}
