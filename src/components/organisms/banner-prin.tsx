import { FC } from 'react'
import { FormPrin } from '../molecules'

interface BannerPrinProps {
	banner: {
		title: string
		subtitle?: string
		formTitle?: string
		formDescription?: string
	}
}

export const BannerPrin: FC<BannerPrinProps> = ({ banner }) => {
	return (
		<section className="banner-prin">
			<div className="banner-prin__container">
				<div className="banner-prin__content">
					<h1 className="banner-prin__title">{banner.title}</h1>

					<p className="banner-prin__description">{banner.subtitle}</p>
				</div>

				<div className="banner-prin__form">
					<div className="banner-prin__form-content">
						<h2 className="banner-prin__form-title">{banner.formTitle ?? 'Get your free estimate now!'}</h2>
						<p className="banner-prin__form-description">{banner.formDescription ?? 'Get your free estimate now!'}</p>
					</div>
					<FormPrin />
				</div>
			</div>
		</section>
	)
}
