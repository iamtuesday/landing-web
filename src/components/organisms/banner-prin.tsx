import { ThemeEnum } from '@/enums/theme.enum'
import { cn } from '@/lib/utils'
import { isSet } from '@/lib/utils/common'
import Image from 'next/image'
import Link from 'next/link'
import { CSSProperties, FC } from 'react'
import { Titles } from '../atoms'
import { FormPrin } from '../molecules'

interface BannerPrinProps {
	banner: {
		title: string
		subtitle?: string
		formTitle?: string
		formDescription?: string
	}
}

export const BannerPrin: FC<BannerPrinProps> = ({ banner }) => {
	const phone = process.env.NEXT_PUBLIC_PHONE || '+ (262) 235 5444'

	const formatTitle = (title: string) => {
		if (isSet(title)) {
			return title.replace(/\//g, '<span>')
		}

		return ''
	}

	const formatDescription = (title: string) => {
		if (isSet(title)) {
			return title.replace(/\/([^\/]+)\//g, '<span>$1</span>')
		}

		return ''
	}

	if (ThemeEnum.isAgnostic()) {
		return (
			<section className="banner-prin">
				<div className="banner-prin__container">
					<div className="banner-prin__content">
						<h1 className="banner-prin__title" dangerouslySetInnerHTML={{ __html: formatTitle(banner.title) }} />

						<p className="banner-prin__description">{banner.subtitle}</p>
					</div>

					<div className="banner-prin__form">
						<div className="banner-prin__form-content">
							<h2 className="banner-prin__form-title">{banner.formTitle ?? 'Get your free estimate now!'}</h2>
							<p
								className="banner-prin__form-description"
								dangerouslySetInnerHTML={{
									__html: formatDescription(
										banner.formDescription ??
											'Fill in the form below and we will contact you within 24 hours to get your free estimate.'
									)
								}}
							/>
						</div>
						<FormPrin />
					</div>

					<figure className={cn('banner-prin__figure')}>
						<Image
							src="https://tuesdays3.sfo3.digitaloceanspaces.com/portrait-handsome-construction-worker.png"
							alt="banner-prin"
							width={500}
							height={500}
						/>
					</figure>
				</div>
			</section>
		)
	} else if (ThemeEnum.isOther()) {
		return (
			<section
				className="banner-prin-v2"
				style={
					{
						'--banner-prin-v2': `url('/images/banner-prin-v2.jpg')`
					} as CSSProperties
				}
			>
				<div className="banner-prin-v2__overlay" />
				<div className="banner-prin-v2__content" />

				<header className="banner-prin-v2__header">
					<div className="banner-prin-v2__header-container">
						<span className="banner-prin-v2__header-call">Call now {'— '}</span>
						<Link href={`tel:${phone}`} className="banner-prin-v2__header-phone">
							{phone}
						</Link>
					</div>
					<Titles title={banner.title} subtitle={banner.subtitle} />
				</header>
			</section>
		)
	}

	return undefined
}
