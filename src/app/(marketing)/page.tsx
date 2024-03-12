import { AboutUs, BannerMiddle, BannerPrin, Features, Reviews } from '@/components/organisms'
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
				'Enimaaaaaaaa ad minim veniam, quis nostrud exercitatullamco laboris nisi ut aliquip ex ea commodo consequat.',
			icon: 'https://tuesdays3.sfo3.digitaloceanspaces.com/server-1.png'
		},
		{
			title: 'Get your website up and running in no time',
			description:
				'Enimmmmm ad minim veniam, quis nostrud exercitatullamco laboris nisi ut aliquip ex ea commodo consequat.',
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

			<BannerMiddle
				titles={{
					title: 'Newsletter!',
					subtitle: 'Subscribe and get The special Offer 40% Discount'
				}}
				description="Let your users know a little more about your product or service."
			/>

			<Reviews titles={{ title: 'What clients say', subtitle: '1m satisfied customers' }} />
		</main>
	)
}

export default HomePage
