import Image from 'next/image'

interface FeaturesItemProps {
	title: string
	description: string
	icon: string
}

export const FeaturesItem: React.FC<FeaturesItemProps> = ({ title, description, icon }) => {
	return (
		<div className="features-item">
			<div className="features-item__content">
				<figure className="features-item__icon">
					<Image src={icon} alt={title} width={100} height={100} />
				</figure>
				<div className="features-item__text">
					<h3 className="features-item__title">{title}</h3>
					<p className="features-item__description">{description}</p>
				</div>
			</div>
		</div>
	)
}
