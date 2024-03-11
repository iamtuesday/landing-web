import Image from 'next/image'
import { FC } from 'react'
import { Button } from '../ui'

interface BannerMiddleProps {
	titles: {
		title: string
		subtitle?: string
		className?: string
	}
	description: string
}

export const BannerMiddle: FC<BannerMiddleProps> = ({}) => {
	return (
		<section className="banner-middle">
			<div className="banner-middle__container">
				<div className="banner-middle__content">
					<h3 className="banner-middle__title">Newsletter!</h3>
					<p className="banner-middle__text">
						Subscribe and get The special Offer <span>40% Discount</span>
					</p>
					<p className="banner-middle__description">Let your users know a little more about your product or service.</p>
					<div className="banner-middle__btn">
						<Button>Subscribe Email</Button>
					</div>
				</div>

				<figure className="banner-middle__image">
					<Image
						src="https://tuesdays3.sfo3.digitaloceanspaces.com/customize-3.png"
						alt="newsletter"
						width={700}
						height={590}
					/>
				</figure>
			</div>
		</section>
	)
}
