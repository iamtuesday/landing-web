import { AboutUs, BannerMiddle, BannerPrin, Features, Reviews } from '@/components/organisms'
import { simpleFetch } from '@/lib/utils/simple-fetch'

interface SlugPageProps {
	params: {
		slug: string
	}
}
export default async function SlugPage({ params }: SlugPageProps) {
	const [data, error] = await simpleFetch<any>(`/landings?populate=deep&filters[slug]=${params.slug}`)

	/**
	 * Added mappers
	 */

	const newData = {
		title: data?.data[0]?.attributes?.title,
		slug: data?.data[0]?.attributes?.slug,
		banner: {
			title: data?.data[0]?.attributes?.banner?.title,
			subtitle: data?.data[0]?.attributes?.banner?.subtitle,
			formTitle: data?.data[0]?.attributes?.banner?.formTitle,
			formDescription: data?.data[0]?.attributes?.banner?.formDescription
		},
		services: {
			title: data?.data[0]?.attributes?.services?.title,
			subtitle: data?.data[0]?.attributes?.services?.subtitle,
			list: data?.data[0]?.attributes?.services?.list.map((item: any) => ({
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
			title: data?.data[0]?.attributes?.aboutUs?.title,
			subtitle: data?.data[0]?.attributes?.aboutUs?.subtitle,
			description: data?.data[0]?.attributes?.aboutUs?.description,
			img: {
				url: data?.data[0]?.attributes?.aboutUs?.img?.data?.attributes?.url,
				alt: data?.data[0]?.attributes?.aboutUs?.img?.data?.attributes?.alternativeText,
				name: data?.data[0]?.attributes?.aboutUs?.img?.data?.attributes?.name,
				width: data?.data[0]?.attributes?.aboutUs?.img?.data?.attributes?.width,
				height: data?.data[0]?.attributes?.aboutUs?.img?.data?.attributes?.height
			}
		},
		bannerMiddle: {
			title: data?.data[0]?.attributes?.bannerMiddle?.title,
			subtitle: data?.data[0]?.attributes?.bannerMiddle?.subtitle,
			description: data?.data[0]?.attributes?.bannerMiddle?.description,
			bg: {
				url: data?.data[0]?.attributes?.bannerMiddle?.bg?.data?.attributes?.url,
				alt: data?.data[0]?.attributes?.bannerMiddle?.bg?.data?.attributes?.alternativeText,
				name: data?.data[0]?.attributes?.bannerMiddle?.bg?.data?.attributes?.name,
				width: data?.data[0]?.attributes?.bannerMiddle?.bg?.data?.attributes?.width,
				height: data?.data[0]?.attributes?.bannerMiddle?.bg?.data?.attributes?.height
			},
			img: {
				url: data?.data[0]?.attributes?.bannerMiddle?.img?.data?.attributes?.url,
				alt: data?.data[0]?.attributes?.bannerMiddle?.img?.data?.attributes?.alternativeText,
				name: data?.data[0]?.attributes?.bannerMiddle?.img?.data?.attributes?.name,
				width: data?.data[0]?.attributes?.bannerMiddle?.img?.data?.attributes?.width,
				height: data?.data[0]?.attributes?.bannerMiddle?.img?.data?.attributes?.height
			}
		},
		reviews: {
			title: data?.data[0]?.attributes?.reviews?.title,
			subtitle: data?.data[0]?.attributes?.reviews?.subtitle,
			list: data?.data[0]?.attributes?.reviews?.list.map((item: any) => ({
				name: item.name,
				job: item.job,
				description: item.description
			}))
		},
		seo: {}
	}

	if (error) {
		return <div>Error: {error.message}</div>
	}

	const { banner, reviews, services, aboutUs } = newData

	return (
		<main>
			<BannerPrin banner={banner} />

			<AboutUs titles={aboutUs} />

			<Features title={services.title} subtitle={services.subtitle} list={services.list} />

			<BannerMiddle titles={newData.bannerMiddle} description={newData.bannerMiddle.description} />

			<Reviews titles={reviews} />
		</main>
	)
}
