'use client'

import { cn } from '@/lib/utils'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { register } from 'swiper/element/bundle'
import 'swiper/element/css/autoplay'
import 'swiper/element/css/effect-fade'
import { Icons } from '../ui'

interface ReviewListProps {
	list: {
		content: string
		author: {
			name: string
			position: string
			avatar?: string
		}
	}[]
}

export const ReviewSlider: React.FC<ReviewListProps> = ({ list }) => {
	const swiperRef = useRef(null) as any

	useEffect(() => {
		// Register Swiper web component
		register()

		// Object with parameters
		const params = {
			slidesPerView: 2,
			spaceBetween: 20,
			breakpoints: {
				375: {
					slidesPerView: 1
				},
				1024: {
					slidesPerView: 2,
					spaceBetween: 20
				}
			},
			injectStyles: [
				`
        .swiper-wrapper {
					position: relative;
					gap: 1.5rem;
        }
        .swiper-pagination {
            position: absolute;
            z-index: 10;
            bottom: 0 !important;
            left: 50%;
            transform: translateX(0);
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .swiper-pagination-bullet {
            width: 0.8rem;
            height: 0.8rem;
            background-color: #fff;
            border: 2px solid #ee1d22; 
        }

        .swiper-pagination-bullet-active {
            background-color: #ee1d22;
          }
        `
			]

			// array with CSS urls
			/* injectStylesUrls: ['path/to/one.css', 'path/to/two.css'], */
		}

		// Assign it to swiper element
		Object.assign(swiperRef.current, params)

		// initialize swiper
		swiperRef.current.initialize()
	}, [])

	const btnPrev = () => {
		swiperRef.current.swiper.slidePrev()
	}

	const btnNext = () => {
		swiperRef.current.swiper.slideNext()
	}

	return (
		<div className={cn('review-slider')}>
			<div className="review-slider__buttons">
				<button className="review-slider__button review-slider__button--prev" onClick={btnPrev}>
					{<Icons.chevronLeft />}
				</button>
				<button className="review-slider__button review-slider__button--next" onClick={btnNext}>
					{<Icons.chevronRight />}
				</button>
			</div>

			<swiper-container
				init="false"
				ref={swiperRef}
				speed="1200"
				loop="true"
				navigation="false"
				pagination="false"
				css-mode="true"
				autoplay="true"
			>
				{list.map((review, index) => {
					return (
						<swiper-slide key={index}>
							<div className={cn('review-slider__content')}>
								<p className="review-slider__content--text">{review.content}</p>
								<div className="review-slider__content--author">
									<figure className="review-slider__content--author-image">
										<Image
											src="https://tuesdays3.sfo3.digitaloceanspaces.com/quote.png"
											alt={review.author.name}
											width={100}
											height={100}
										/>
									</figure>

									<div className="review-slider__content--author-info">
										<p className="review-slider__content--author-name">{review.author.name}</p>
										<p className="review-slider__content--author-position">{review.author.position}</p>
									</div>
								</div>
							</div>
						</swiper-slide>
					)
				})}
			</swiper-container>
		</div>
	)
}
