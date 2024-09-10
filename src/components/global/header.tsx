import Image from 'next/image'
import Link from 'next/link'

export const Header = () => {
	return (
		<header className="header">
			<div className="header__container">
				<Link className="header__logo cursor-pointer" href="https://incanelectric.com">
					<Image
						src="https://tuesdays3.sfo3.digitaloceanspaces.com/LOGO_INCAN_ROJO_1_1_e1671788654389_e1a17bac22_5ab5964982.webp"
						alt="logo"
						width={300}
						height={100}
					/>
				</Link>

				<div className="header__content">
					<span className="header__content--title">Call For An Instant Quote</span>

					<div className="header__content--icon">
						<figure className="header__content--icon-image">
							<svg height="40" viewBox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg">
								<g clipRule="evenodd" fill="rgb(255255,255)" fillRule="evenodd">
									<path d="m7 2.75c-.41421 0-.75.33579-.75.75v17c0 .4142.33579.75.75.75h10c.4142 0 .75-.3358.75-.75v-17c0-.41421-.3358-.75-.75-.75zm-2.25.75c0-1.24264 1.00736-2.25 2.25-2.25h10c1.2426 0 2.25 1.00736 2.25 2.25v17c0 1.2426-1.0074 2.25-2.25 2.25h-10c-1.24264 0-2.25-1.0074-2.25-2.25z"></path>
									<path d="m10.25 5c0-.41421.3358-.75.75-.75h2c.4142 0 .75.33579.75.75s-.3358.75-.75.75h-2c-.4142 0-.75-.33579-.75-.75z"></path>
									<path d="m9.25 19c0-.4142.33579-.75.75-.75h4c.4142 0 .75.3358.75.75s-.3358.75-.75.75h-4c-.41421 0-.75-.3358-.75-.75z"></path>
								</g>
							</svg>
						</figure>

						<div className="header__content--icon-text">
							<a className="text-inherit" href="tel:+ (262) 235 5444" rel="noopener noreferrer">
								+ (262) 235 5444
							</a>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}
