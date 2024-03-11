import { AboutUs, BannerPrin, Features } from '@/components/organisms'
import { cn } from '@/lib/utils'

const aboutData = {
	titles: {
		title: 'Build and Customize Your Perfect Landing Page',
		subtitle: 'We provide the best solution for your business'
	}
}

const featuresData = {
	titles: {
		title: 'Create a Landing Page In a Minute Not Weeks',
		subtitle: 'We provide the best solution for your business'
	},
	list: [
		{
			title: 'Get high conversions rates',
			description:
				'Enim ad minim veniam, quis nostrud exercitatullamco laboris nisi ut aliquip ex ea commodo consequat.',
			icon: 'https://tuesdays3.sfo3.digitaloceanspaces.com/server-1.png'
		},
		{
			title: 'Get your website up and running in no time',
			description:
				'Enim ad minim veniam, quis nostrud exercitatullamco laboris nisi ut aliquip ex ea commodo consequat.',
			icon: 'https://tuesdays3.sfo3.digitaloceanspaces.com/server-1.png'
		},
		{
			title: 'Get your website up and running in no time',
			description:
				'Enim ad minim veniam, quis nostrud exercitatullamco laboris nisi ut aliquip ex ea commodo consequat.',
			icon: 'https://tuesdays3.sfo3.digitaloceanspaces.com/server-1.png'
		}
	]
}
const HomePage = async () => {
	return (
		<main className={cn('')}>
			<BannerPrin />

			<AboutUs titles={aboutData.titles} />

			<Features titles={featuresData.titles} list={featuresData.list} />
		</main>
	)
}

export default HomePage
