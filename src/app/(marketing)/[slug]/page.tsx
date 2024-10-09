import type { Metadata, ResolvingMetadata } from 'next'

import { Seo } from '@/components/global/seo'
import { AboutUs, BannerMiddle, BannerPrin, Faqs, Features, Reviews } from '@/components/organisms'
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

	return {
		title: response.title
		// openGraph: {
		// 	images: ['/some-specific-page-image.jpg', ...previousImages]
		// }
	}
}

export default async function SlugPage({ params }: SlugPageProps) {
	const response = await getData(params.slug)

	const { banner, review, services, aboutUs, bannerMiddle, faqs } = response

	return (
		<>
			<BannerPrin banner={banner} />

			<AboutUs aboutUs={aboutUs} />

			<Features title={services.title} subtitle={services.subtitle} list={services.list} />

			<BannerMiddle bannerMiddle={bannerMiddle} />

			<Faqs prompt={faqs?.prompt!} list={faqs?.list!} gallery={faqs?.gallery!} />

			<Reviews review={review} />

			<Seo seo={response.seo!} />
		</>
	)
}
