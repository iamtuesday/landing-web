import { AboutUs, BannerMiddle, BannerPrin, Features, Reviews } from '@/components/organisms'
import { simpleFetch } from '@/lib/utils/simple-fetch'

export type ILandingContract = {
	banner: IBanner
	aboutUs: IAboutUs
	bannerMiddle: IBannerMiddle
	review: IReviews
}

export type IBannerMiddle = {
	title: string
	subtitle: string
	description: string
	bg?: IImg
	img: IImg
}

export type IAboutUs = {
	title: string
	subtitle: string
	description: string
	img: IImg
	list: IAboutUsList[]
}

export type IAboutUsList = {
	id: string
	item: string
}

export type IImg = {
	url: string
	alt: string
	name: string
	width: number
	height: number
}

export type IBanner = {
	title: string
	subtitle: string
	formTitle: string
	formDescription: string
}

export type IReviews = {
	title: string
	subtitle: string
	list: IReview[]
}

export type IReview = {
	name: string
	job: string
	description: string
}

interface SlugPageProps {
	params: {
		slug: string
	}
}

export default async function SlugPage({ params }: SlugPageProps) {
	const [data, error] = await simpleFetch<IGenericRecord>(`/landings?populate=deep&filters[slug]=${params.slug}`)

	const _data = data?.data[0]?.attributes

	const newData = {
		title: _data?.title,
		slug: _data?.slug,
		banner: {
			title: _data?.banner?.title,
			subtitle: _data?.banner?.subtitle,
			formTitle: _data?.banner?.formTitle,
			formDescription: _data?.banner?.formDescription
		},
		services: {
			title: _data?.services?.title,
			subtitle: _data?.services?.subtitle,
			list: _data?.services?.list.map((item: IGenericRecord) => ({
				title: item.title,
				description: item.description,
				icon: {
					url: item.img?.data?.attributes?.url,
					alt: item.img?.data?.attributes?.alternativeText,
					name: item.img?.data?.attributes?.name,
					width: item.img?.data?.attributes?.width,
					height: item.img?.data?.attributes?.height
				}
			}))
		},
		aboutUs: {
			title: _data?.aboutUs?.title,
			subtitle: _data?.aboutUs?.subtitle,
			description: _data?.aboutUs?.description,
			img: {
				url: _data?.aboutUs?.img?.data?.attributes?.url,
				alt: _data?.aboutUs?.img?.data?.attributes?.alternativeText,
				name: _data?.aboutUs?.img?.data?.attributes?.name,
				width: _data?.aboutUs?.img?.data?.attributes?.width,
				height: _data?.aboutUs?.img?.data?.attributes?.height
			},
			list: _data?.aboutUs?.list.map((item: IGenericRecord) => ({
				id: item.id,
				item: item.item
			}))
		},
		bannerMiddle: {
			title: _data?.bannerMiddle?.title,
			subtitle: _data?.bannerMiddle?.subtitle,
			description: _data?.bannerMiddle?.description,
			bg: !!_data?.bannerMiddle?.bg?.data
				? {
						url: _data?.bannerMiddle?.bg?.data?.attributes?.url,
						alt: _data?.bannerMiddle?.bg?.data?.attributes?.alternativeText,
						name: _data?.bannerMiddle?.bg?.data?.attributes?.name,
						width: _data?.bannerMiddle?.bg?.data?.attributes?.width,
						height: _data?.bannerMiddle?.bg?.data?.attributes?.height
				  }
				: undefined,
			img: {
				url: _data?.bannerMiddle?.img?.data?.attributes?.url,
				alt: _data?.bannerMiddle?.img?.data?.attributes?.alternativeText,
				name: _data?.bannerMiddle?.img?.data?.attributes?.name,
				width: _data?.bannerMiddle?.img?.data?.attributes?.width,
				height: _data?.bannerMiddle?.img?.data?.attributes?.height
			}
		},
		review: {
			title: _data?.reviews?.title,
			subtitle: _data?.reviews?.subtitle,
			list: _data?.reviews?.list.map((item: IGenericRecord) => ({
				name: item.name,
				job: item.job,
				description: item.description
			}))
		},
		seo: {}
	}

	if (!!error) {
		return <div>Error: {error.message}</div>
	}

	const { banner, review, services, aboutUs, bannerMiddle } = newData

	return (
		<main>
			<BannerPrin banner={banner} />

			<AboutUs aboutUs={aboutUs} />

			<Features title={services.title} subtitle={services.subtitle} list={services.list} />

			<BannerMiddle bannerMiddle={bannerMiddle} />

			<Reviews review={review} />
		</main>
	)
}
