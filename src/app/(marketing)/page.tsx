import { BannerPrin } from '@/components/organisms'
import { cn } from '@/lib/utils'
import { Briefcase, CircleDollarSignIcon, EditIcon, Headphones, PencilRuler, Pin, Shield, Star } from 'lucide-react'

const homeData = {
	heroSection: {
		title: 'Enjoy Your Learning Today',
		image: {
			img: 'https://tuesdays3.sfo3.digitaloceanspaces.com/banner-image.webp',
			alt: 'Home Banner',
			url: '/images/img_banner_hero.png'
		},
		description: 'Build your skills with online courses from anywhere.',
		socials: [
			{
				url: '',
				social: 'Facebook'
			},
			{
				url: '',
				social: 'Youtube'
			},
			{
				url: '',
				social: 'Linkedin'
			}
		],
		trustedByList: [
			{
				url: '/images/microsoft.svg'
			},
			{
				url: '/images/airbnb.svg'
			},
			{
				url: '/images/bissell.svg'
			}
		]
	},
	howToStart: {
		title: 'Up your work game, it’s easy',
		video: {
			url: '/videos/video-2.mp4',
			alt: 'Video'
		},
		howToStartList: [
			{
				title: 'No cost to join',
				details: 'Register and browse professionals, explore projects, or even book a consultation.',
				icon: EditIcon
			},
			{
				title: 'Post a job and hire top talent',
				details: 'Finding talent doesn’t have to be a chore. Post a job or we can search for you!',
				icon: Pin
			},
			{
				title: 'Work with the best—without breaking the bank',
				details: 'Upwork makes it affordable to up your work and take advantage of low transaction rates.',
				icon: Shield
			}
		]
	},
	forEntrerpriseBanner: {
		headline: 'Enterprise Suite',
		title: 'This is how good companies find good company.',
		description:
			'Access the top 1% of talent on Online Jobs, and a full suite of hybrid workforce management tools. This is how innovation works now.',
		descriptionList: [
			{
				desc: 'Access expert talent to fill your skill gaps',
				icon: PencilRuler
			},
			{
				desc: 'Control your workflow: hire, classify and pay your talent',
				icon: Briefcase
			},
			{
				desc: 'Partner with Online Jobs for end-to-end support',
				icon: Headphones
			}
		],
		image: {
			url: '/images/enterprise-2023.webp',
			alt: 'Enterprise'
		}
	},

	forClientBanner: {
		image: {
			url: '/images/find-talent.jpg',
			alt: 'Home Banner'
		},
		headline: 'For clients',
		title: 'Find talent your way',
		description:
			'Work with the largest network of independent professionals and get things done—from quick turnarounds to big transformations.',
		sources: [
			{
				title: 'Post a job and hire a pro',
				linkName: 'How it works'
			},
			{
				title: 'Browse Jobs and find talent',
				linkName: 'View jobs'
			},
			{
				title: 'Get advice and sources',
				linkName: 'Sources'
			}
		]
	},
	whyOnlineJobs: {
		title: 'Why businesses turn to Online Jobs',
		clientQualityTitle: 'We’re the world’s work marketplace',
		reasonList: [
			{
				icon: Star,
				title: 'Proof of quality',
				description: 'Check any pro’s work samples, client reviews, and identity verification.'
			},
			{
				icon: CircleDollarSignIcon,
				title: 'No cost until you hire',
				description: 'Interview potential fits for your job, negotiate rates, and only pay for work you approve.'
			},
			{
				icon: 'CheckCircle',
				title: 'Safe and secure',
				description:
					'Focus on your work knowing we help protect your data and privacy. We’re here with 24/7 support if you need it.'
			}
		],
		clientQualityList: [
			{
				title: '4.9/5',
				description: 'Clients rate professionals on Upwork'
			}
		]
	},
	forTalentBanner: {
		image: {
			url: '/images/find-great-work.webp',
			alt: 'Find talent'
		},
		headline: 'For talent',
		title: 'Find great work',
		description: 'Meet clients you’re excited to work with and take your career or business to new heights.',
		quoteList: [
			{
				quote: 'Find opportunities for every stage of your freelance career'
			},
			{
				quote: 'Control when, where, and how you work'
			},
			{
				quote: 'Explore different ways to earn'
			}
		]
	}
}

const { forEntrerpriseBanner, howToStart, heroSection, forClientBanner, whyOnlineJobs, forTalentBanner } = homeData

const HomePage = async () => {
	return (
		<main className={cn('')}>
	    <BannerPrin />
	  </main>
	)
}

export default HomePage
