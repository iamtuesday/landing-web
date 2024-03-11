interface SwiperProps extends React.HTMLAttributes<HTMLElement> {
	'slides-per-view'?: number | string
	navigation?: boolean | string
	pagination?: boolean | string
	loop?: boolean | string
	speed?: number | string
	breakpoints?: object
	init?: boolean | string
	autoplay?: boolean | string
	/* on?: {
    slideChange?: () => void;
    progress?: (s: any, progress: number) => void;
  }; */
	on?: any
}

interface SwiperSlideProps extends React.HTMLAttributes<HTMLElement> {
	key?: string | number
}

declare namespace JSX {
	interface IntrinsicElements {
		'swiper-container': React.DetailedHTMLProps<SwiperProps, HTMLElement>
		'swiper-slide': React.HTMLAttributes<SwiperSlideProps, HTMLElement>
	}
}
