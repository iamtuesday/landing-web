import { FC } from 'react'
import { Titles } from '../atoms'
import { ReviewSlider } from '../molecules'

export interface ReviewsProps {
	titles: {
		title: string
		subtitle?: string
		className?: string
	}
}
export const Reviews: FC<ReviewsProps> = ({ titles }) => {
	return (
		<section className="reviews">
			<Titles {...titles} position="center" />

			<ReviewSlider
				list={[
					{
						content:
							'Enimaaaaaa ad minim veniam, quis nostrud exercitat ullrem ipsum dolor sit amet, consece adipising elit, o eiusmod tempor incididunt ut labore bit of how ther chancer flat bogeo viele marioa.',
						author: {
							name: 'John Doe',
							position: 'CEO',
							avatar: 'https://tuesdays3.sfo3.digitaloceanspaces.com/customize.png'
						}
					},
					{
						content:
							'Enimfsda ad minim veniam, quis nostrud exercitat ullrem ipsum dolor sit amet, consece adipising elit, o eiusmod tempor incididunt ut labore bit of how ther chancer flat bogeo viele marioa.',
						author: {
							name: 'John Doeeee',
							position: 'CEO',
							avatar: 'https://tuesdays3.sfo3.digitaloceanspaces.com/customize.png'
						}
					},
					{
						content:
							'Enimaaaaaa ad minim veniam, quis nostrud exercitat ullrem ipsum dolor sit amet, consece adipising elit, o eiusmod tempor incididunt ut labore bit of how ther chancer flat bogeo viele marioa.',
						author: {
							name: 'John Dowwe',
							position: 'CEO',
							avatar: 'https://tuesdays3.sfo3.digitaloceanspaces.com/customize.png'
						}
					}
				]}
			/>
		</section>
	)
}
