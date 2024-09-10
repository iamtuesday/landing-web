'use client'

import { IBannerMiddle } from '@/interfaces/landing.interface'
import Image from 'next/image'
import { FC } from 'react'
import { Typography } from '../molecules'
import { Button, Mdx } from '../ui'

interface BannerMiddleProps {
	bannerMiddle: IBannerMiddle
}

export const BannerMiddle: FC<BannerMiddleProps> = ({ bannerMiddle }: BannerMiddleProps) => {
	const { title, subtitle, description, img } = bannerMiddle

	const subtitleFormat = subtitle?.replace('/', '<span>')

	return (
		<section className="banner-middle">
			<div className="banner-middle__container">
				<div className="banner-middle__content">
					<h3 className="banner-middle__title">{title}</h3>

					<Typography as={Mdx} className="banner-middle__subtitle">
						{subtitleFormat}
					</Typography>

					<p className="banner-middle__description">{description}</p>

					<div className="banner-middle__btn">
						<Button variant="outline">Subscribe Email</Button>
					</div>
				</div>

				<figure className="banner-middle__image">
					<Image src={img.url} alt="newsletter" width={700} height={590} />
				</figure>
			</div>
		</section>
	)
}
