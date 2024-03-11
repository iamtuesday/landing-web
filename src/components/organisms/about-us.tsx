import Image from 'next/image'
import { FC } from 'react'
import { Titles } from '../atoms'
import { Icons } from '../ui'

interface AboutUsProps {
	titles: {
		title: string
		subtitle?: string
		className?: string
	}
}
export const AboutUs: FC<AboutUsProps> = ({ titles }) => {
	return (
		<div className="about-us">
			<Titles {...titles} position="center" />

			<div className="about-us__content">
				<figure className="about-us__image">
					<Image
						src="https://tuesdays3.sfo3.digitaloceanspaces.com/customize.png"
						alt="About Us"
						width={700}
						height={590}
					/>
				</figure>

				<div className="about-us__text">
					<p className="about-us__text--description">
						Enim ad minim veniam, quis nostrud exercitat ullrem ipsum dolor sit amet, consece adipising elit, o eiusmod
						tempor incididunt ut labore bit of how ther chancer flat bogeo viele marioa.
					</p>

					<ul className="about-us__text--list">
						<li className="about-us__text--list-item">
							<Icons.check />
							Get high conversions rates
						</li>
						<li className="about-us__text--list-item">
							<Icons.check />
							Get your website up and running in no time
						</li>
						<li className="about-us__text--list-item">
							<Icons.check />
							Virtual Private Marketing
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
