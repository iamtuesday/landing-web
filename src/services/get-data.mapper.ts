import { ILanding } from '@/interfaces/landing.interface'

export const mapGetData = (data: IGenericRecord): ILanding => {
	const _data = data?.data[0]?.attributes

	const newData: ILanding = {
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
				id: item.id,
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
				id: item.id,
				name: item.name,
				job: item.job,
				description: item.description
			}))
		},
		faqs: _data?.faqs
			? {
					prompt: {
						title: _data?.faqs.title,
						subtitle: _data?.faqs.subtitle
					},
					list: Array.isArray(_data?.faqs?.list)
						? _data.faqs.list.map((item: IGenericRecord) => ({
								id: item.id,
								question: item.question,
								answer: item.answer
						  }))
						: [],
					gallery: Array.isArray(_data?.faqs?.gallery) ? _data.faqs.gallery.map((item: IGenericRecord) => {}) : []
			  }
			: undefined,
		seo: !!_data?.seo
			? {
					metaTitle: _data.seo.title,
					metaDescription: _data.seo.description,
					metaImage: !!_data.seo.metaImage
						? {
								url: _data.seo.metaImage.url,
								alt: _data.seo.metaImage.alt,
								name: _data.seo.metaImage.name,
								width: _data.seo.metaImage.width,
								height: _data.seo.metaImage.height
						  }
						: null,
					metaSocial: Array.isArray(_data.seo.metaSocial)
						? _data.seo.metaSocial.map((item: IGenericRecord) => ({
								socialNetwork: item.socialNetwork,
								title: item.title,
								description: item.description,
								image: item.image
						  }))
						: null,
					keywords: !!_data.seo.keywords ? _data.seo.keywords : null,
					metaRobots: !!_data.seo.metaRobots ? _data.seo.metaRobots : null,
					structuredData: !!_data.seo.structuredData ? _data.seo.structuredData : null
			  }
			: null
	}

	return newData
}
