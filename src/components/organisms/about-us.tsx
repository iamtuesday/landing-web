import { IAboutUs } from '@/app/(marketing)/[slug]/page'
import Image from 'next/image'
import { FC } from 'react'
import { Titles } from '../atoms'
import { Icons } from '../ui'

interface AboutUsProps {
	aboutUs: IAboutUs
}

export const AboutUs: FC<AboutUsProps> = ({ aboutUs }) => {
	console.log(aboutUs)
	const { title, subtitle, description, img, list } = aboutUs
	return (
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
}
