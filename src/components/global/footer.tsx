'use client'

import { siteConfig } from '@/config/site'

export const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__container">
				<p className="footer__copyright">
					&copy; {new Date().getFullYear()} {siteConfig.name}
				</p>
			</div>
		</footer>
	)
}
