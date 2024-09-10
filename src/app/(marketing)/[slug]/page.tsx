import type { Metadata, ResolvingMetadata } from 'next'

import { Seo } from '@/components/global/seo'
import { AboutUs, BannerMiddle, BannerPrin, Features, Reviews } from '@/components/organisms'
import { getData } from '@/services/get-data.service'

interface SlugPageProps {
	params: {
		slug: string
	}
	searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
	{ params, searchParams }: SlugPageProps,
	parent: ResolvingMetadata
): Promise<Metadata> {
	const slug = params.slug

	// fetch data
	const response = await getData(slug)

	// optionally access and extend (rather than replace) parent metadata
	// const previousImages = (await parent).openGraph?.images || []

	return {
		title: response.title
		// openGraph: {
		// 	images: ['/some-specific-page-image.jpg', ...previousImages]
		// }
	}
}

export default async function SlugPage({ params }: SlugPageProps) {
	const response = await getData(params.slug)

	const { banner, review, services, aboutUs, bannerMiddle } = response

	return (
		<main>
			<BannerPrin banner={banner} />

			<AboutUs aboutUs={aboutUs} />

			<Features title={services.title} subtitle={services.subtitle} list={services.list} />

			<BannerMiddle bannerMiddle={bannerMiddle} />

			<Reviews review={review} />

			<Seo seo={response.seo!} />
		</main>
	)
}
