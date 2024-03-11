import { Analytics } from '@/components/global/analytics'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import { Toaster } from 'sonner'

const unbounded = localFont({
	src: '../assets/fonts/Unbounded-Regular.woff2',
	variable: '--font-unbounded'
})

const inter = Inter({
	subsets: ['latin'],
	variable: '--inter'
})

const fontHeading = localFont({
	src: '../assets/fonts/Unbounded-Bold.woff2',
	variable: '--font-heading'
})

const fontHome = localFont({
	src: '../assets/fonts/font-Home.woff2',
	variable: '--font-home'
})

export const metadata: Metadata = {
	metadataBase: new URL('https://acme.com'),
	title: {
		default: siteConfig.name,
		template: `%s | ${siteConfig.name}`
	},
	description: siteConfig.description,
	keywords: siteConfig.keywords,
	authors: siteConfig.authors,
	creator: siteConfig.creator,
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: siteConfig.url,
		title: siteConfig.name,
		description: siteConfig.description,
		siteName: siteConfig.name
	},
	twitter: {
		card: 'summary_large_image',
		title: siteConfig.name,
		description: siteConfig.description,
		images: [`${siteConfig.url}/og.jpg`],
		creator: '@shadcn'
	},
	icons: {
		icon: '/favicon.ico',
		shortcut: '/favicon-16x16.png',
		apple: '/apple-touch-icon.png'
	},
	manifest: `${siteConfig.url}/site.webmanifest`
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<head />
			<body
				className={cn(
					'min-h-screen bg-background font-sans antialiased',
					unbounded.variable,
					fontHeading.variable,
					inter.variable,
					fontHome.variable
				)}
			>
				{children}
				<Analytics />

				<Toaster />
			</body>
		</html>
	)
}
