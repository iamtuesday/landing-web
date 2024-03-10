export type SiteConfig = {
	name: string
	description: string
	url: string
	keywords: string[]
	authors: {
		name: string
		url: string
	}[]
  creator: string
	ogImage: string
	links: {
		twitter: string
		github: string
	}
}

export type NavItem = {
	title: string
	href: string
	disabled?: boolean
}
export type MainNavItem = NavItem

export type MarketingConfig = {
	mainNav: MainNavItem[]
}

export type AuthConfig = {
	mainNav: MainNavItem[]
	login: string
	register: string
	forgotPassword: string
	resetPassword: string
	changePassword: string
	logout: string
}
