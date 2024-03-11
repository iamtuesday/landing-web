import { Titles } from '../atoms'
import { FeaturesItem } from '../molecules'

interface FeaturesProps {
	titles: {
		title: string
		subtitle?: string
		className?: string
	}
	list: {
		title: string
		description: string
		icon: string
	}[]
}
export const Features: React.FC<FeaturesProps> = ({ titles, list }) => {
	return (
		<section className="features">
			<Titles {...titles} />

			<div className="features__list">
				{list?.map((item, index) => (
					<FeaturesItem key={index} {...item} />
				))}
			</div>
		</section>
	)
}
