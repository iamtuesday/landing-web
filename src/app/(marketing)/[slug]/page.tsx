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

	// optionally access and extend (rather than replace) parent metadata
	// const previousImages = (await parent).openGraph?.images || []

	return {
		title: response.title
		// openGraph: {
		// 	images: ['/some-specific-page-image.jpg', ...previousImages]
		// }
	}
}

const faqs = {
	prompt: {
		subtitle: 'Explore faqs',
		title: 'Popular questions about our company'
	},
	list: [
		{
			id: 1,
			question: 'Why to choose us?',
			answer:
				"Whether you need lighting repoirs, electrician upgrades, or a new installation, we're here to provide quality services that meet your needs and exceed your expectations."
		},
		{
			id: 2,
			question: 'How quickly can you get help?',
			answer: ''
		},
		{
			id: 3,
			question: 'How to par for services?',
			answer: ''
		}
	]
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
