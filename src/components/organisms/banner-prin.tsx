import { FormPrin } from '../molecules'

export const BannerPrin = () => {
	return (
		<section className="banner-prin">
			<div className="banner-prin__container">
				<div className="banner-prin__content">
					<h1 className="banner-prin__title">
						#1 Choice for Local <span>Electric Services</span>
					</h1>

					<p className="banner-prin__description">
						Get $25 Off When You Book Today Mention You Saw Our Ad On Google For Discount
					</p>
				</div>

				<div className="banner-prin__form">
					<div className="banner-prin__form-content">
						<h2 className="banner-prin__form-title">Call For An Instant Quote</h2>
						<p className="banner-prin__form-description">
							Fill out the form below or call <span>262 235 5444</span> to get immediate over the phone help.
						</p>
					</div>
					<FormPrin />
				</div>
			</div>
		</section>
	)
}
