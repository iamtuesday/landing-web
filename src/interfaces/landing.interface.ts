export type ILanding = {
	title: string
	slug: string
	banner: IBanner
	aboutUs: IAboutUs
	services: IServices
	bannerMiddle: IBannerMiddle
	review: IReviews
	seo?: ISeo | null
}

export type ISeo = {
	metaTitle: string
	metaDescription: string
	metaImage?: IImg | null
	metaSocial: ISeoSocial
	keywords?: string | null
	metaRobots?: string | null
	structuredData?: string | null
}

export type ISeoSocial = {
	socialNetwork: string
	title: string
	description: string
	image: IImg
}

export type IServices = {
	title: string
	subtitle: string
	list: IService[]
}

export type IService = {
	id: string
	title: string
	description: string
	icon: IImg
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
	id: string
	name: string
	job: string
	description: string
}
