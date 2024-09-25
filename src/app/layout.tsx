import { Analytics } from '@/components/global/analytics'
import { Footer } from '@/components/global/footer'
import { Header } from '@/components/global/header'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import Head from 'next/head'
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
	metadataBase: new URL('https://lp.incanelectric.com'),
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
		icon: process.env.NEXT_PUBLIC_FAVICON || '/favicon.ico'
		// shortcut: '/favicon-16x16.png',
		// apple: '/apple-touch-icon.png'
	},
	manifest: `${siteConfig.url}/site.webmanifest`
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	const theme = process.env.NEXT_PUBLIC_DEFAULT_THEME
	return (
		<html lang="en">
			<Head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="theme-color" content="#000000" />
				<link rel="manifest preload" href="/site.webmanifest" />
			</Head>

			<body
				className={cn(
					'min-h-screen bg-background font-sans antialiased',
					unbounded.variable,
					fontHeading.variable,
					inter.variable,
					fontHome.variable
				)}
			>
				<Header />
				<main data-theme={theme}>{children}</main>
				<Analytics />

				<Toaster />
				<Footer />
			</body>
		</html>
	)
}
