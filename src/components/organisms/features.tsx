'use client'

import { ThemeEnum } from '@/enums/theme.enum'
import Image from 'next/image'
import { Titles } from '../atoms'
import { FeaturesItem, Typography } from '../molecules'

interface FeaturesProps {
	title: string
	subtitle?: string
	className?: string
	list: {
		title: string
		description: string
		icon: {
			url: string
			alt: string
			name: string
			width: number
			height: number
		}
	}[]
}

export const Features: React.FC<FeaturesProps> = ({ title, subtitle, className, list }) => {
	let content = null

	if (ThemeEnum.isAgnostic()) {
		content = (
			<section className="features">
				<Titles {...{ title, subtitle }} position="center" />

				<div className="features__list">
					{Array.isArray(list) &&
						list.map((item, index) => {
							return <FeaturesItem key={index} {...item} />
						})}
				</div>
			</section>
		)
	} else if (ThemeEnum.isOther()) {
		content = (
			<section className="features-v2">
				<Titles {...{ title, subtitle }} position="center" />
				<div className="features-v2__list">
					{Array.isArray(list) &&
						list.map((item, index) => {
							return (
								<div key={index} className="features-v2__item">
									<figure className="features-v2__figure">
										<Image src={item?.icon.url} alt={item?.icon.name} width={50} height={50} />
									  <span className="features-v2__circle">
                      {index + 1}
                    </span>
                  </figure>

									<Typography as="h3" size="5xl" weight="semibold" className="text-center">
										{item.title}
									</Typography>

									<Typography as="p" size="2xl" weight="normal" className="text-center">
										{item.description}
									</Typography>
								</div>
							)
						})}
				</div>
			</section>
		)
	}

	return content
}
