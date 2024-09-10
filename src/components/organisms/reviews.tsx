import { IReviews } from '@/interfaces/landing.interface'
import { FC } from 'react'
import { Titles } from '../atoms'
import { ReviewSlider } from '../molecules'

export interface ReviewsProps {
	review: IReviews
}
export const Reviews: FC<ReviewsProps> = ({ review }) => {
	return (
		<section className="reviews">
			<Titles title={review.title} subtitle={review.subtitle} position="center" />

			<ReviewSlider list={review.list} />
		</section>
	)
}
