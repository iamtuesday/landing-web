import { ThemeEnum } from '@/enums/theme.enum'
import { IAboutUs } from '@/interfaces/landing.interface'
import Image from 'next/image'
import { FC } from 'react'
import { Titles } from '../atoms'
import { Typography } from '../molecules'
import { Icons } from '../ui'
import { QuoteForm } from './quote-form'

interface AboutUsProps {
	aboutUs: IAboutUs
}

export const AboutUs: FC<AboutUsProps> = ({ aboutUs }) => {
	const { title, subtitle, description, img, list } = aboutUs

	let content = null

	if (ThemeEnum.isAgnostic()) {
		content = (
			<div className="about-us">
				<Titles title={title} subtitle={subtitle} position="center" />

				<div className="about-us__content">
					<figure className="about-us__image">
						<Image src={img.url} alt="About Us" width={img.width} height={img.height} />
					</figure>

					<div className="about-us__text">
						<p className="about-us__text--description">{description}</p>

						<ul className="about-us__text--list">
							{Array.isArray(list) &&
								list.map(item => (
									<li key={item.id} className="about-us__text--list-item">
										<Icons.check />
										{item.item}
									</li>
								))}
						</ul>
					</div>
				</div>
			</div>
		)
	} else if (ThemeEnum.isOther()) {
		content = (
			<div className="about-us-v2 container">
				<div className="about-us-v2__form">
					<div className="bg-primary p-8">
						<Typography as="h2" size="5xl" weight="semibold" className="text-center text-white">
							Get free quote
						</Typography>
					</div>
					<QuoteForm />
				</div>

				<div className="about-us-v2__content">
					<Titles title={title} subtitle={subtitle} />

					<Typography as="p" size="4xl" weight="light" className="mt-8">
						{description}
					</Typography>

					<ul className="about-us-v2__list">
						{Array.isArray(list) &&
							list.map(item => (
								<li key={item.id} className="about-us-v2__item">
									<Icons.check />
									{item.item}
								</li>
							))}
					</ul>
				</div>
			</div>
		)
	}

	return content
}
