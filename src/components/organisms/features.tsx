import { Titles } from '../atoms'
import { FeaturesItem } from '../molecules'

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
	console.log(list)
	return (
		<section className="features">
			<Titles {...{ title, subtitle }} position="center" />

			<div className="features__list">
				{list?.map((item, index) => (
					<FeaturesItem key={index} {...item} />
				))}
			</div>
		</section>
	)
}
