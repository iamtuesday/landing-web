'use client'

import { siteConfig } from '@/config/site'
import { ThemeEnum } from '@/enums/theme.enum'

export const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__container">
				<p className="footer__copyright">
					&copy; {new Date().getFullYear()} {ThemeEnum.isAgnostic() ? siteConfig.name : 'Willka power'}
				</p>
			</div>
		</footer>
	)
}
