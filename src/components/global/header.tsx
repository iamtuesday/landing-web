import { siteConfig } from '@/config/site'

export const Header = () => {
	return (
		<header className="header">
			<div className="header__container">
				<h1 className="header__logo">
					<a href="/">{siteConfig.name}</a>
				</h1>
			</div>
		</header>
	)
}
