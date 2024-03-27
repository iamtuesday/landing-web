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
	const formatTitle = (title: string) => {
		return title.replace(/\//g, '<span>')
	}

	const formatDescription = (title: string) => {
		return title.replace(/\/([^\/]+)\//g, '<span>$1</span>')
	}

	return (
		<section className="banner-prin">
			<div className="banner-prin__container">
				<div className="banner-prin__content">
					<h1 className="banner-prin__title" dangerouslySetInnerHTML={{ __html: formatTitle(banner.title) }} />

					<p className="banner-prin__description">{banner.subtitle}</p>
				</div>

				<div className="banner-prin__form">
					<div className="banner-prin__form-content">
						<h2 className="banner-prin__form-title">{banner.formTitle ?? 'Get your free estimate now!'}</h2>
						<p
							className="banner-prin__form-description"
							dangerouslySetInnerHTML={{
								__html: formatDescription(
									banner.formDescription ??
										'Fill in the form below and we will contact you within 24 hours to get your free estimate.'
								)
							}}
						/>
					</div>
					<FormPrin />
				</div>
			</div>
		</section>
	)
}
