'use client'

import { cn } from '@/lib/utils'
import { useEffect, useRef } from 'react'
import { register } from 'swiper/element/bundle'
import 'swiper/element/css/autoplay'
import 'swiper/element/css/effect-fade'
import { Icons, Mdx } from '../ui'

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
			breakpoints: {
				375: {
					slidesPerView: 1
				},
				1024: {
					slidesPerView: 2
				}
			},
			injectStyles: [
				`
        .swiper-wrapper {
            position: relative;
            padding: 2.5rem 0;

            @media (min-width: 1024px) {
                padding: calc(3.5rem_*_var(--scale)) 0;
            }
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
		console.log('swiperRef', swiperRef)

		swiperRef.current.swiper.slidePrev()
	}

	const btnNext = () => {
		swiperRef.current.swiper.slideNext()
	}

	return (
		<div className={cn('review-slider')}>
			<div className="review-slider__buttons z-[10]s">
				<button className="review-slider__button" onClick={btnPrev}>
					{<Icons.chevronLeft />}
				</button>
				<button className="review-slider__button" onClick={btnNext}>
					{<Icons.chevronRight />}
				</button>
			</div>

			<swiper-container
				init="false"
				ref={swiperRef}
				speed="900"
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
								<Mdx className="review-slider__content--mdx">{review.content}</Mdx>
							</div>
						</swiper-slide>
					)
				})}
			</swiper-container>
		</div>
	)
}
