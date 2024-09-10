import { ISeo } from '@/interfaces/landing.interface'
import Head from 'next/head'

interface SeoProps {
	seo: ISeo
}

export const Seo = ({ seo }: SeoProps) => {
	return (
		<>
			{!!seo ? (
				<Head>
					<title>{seo.metaTitle}</title>
					<meta name="description" content={seo.metaDescription} />
					{seo.keywords && <meta name="keywords" content={seo.keywords} />}
					{seo.metaRobots && <meta name="robots" content={seo.metaRobots} />}
					{seo.metaImage && (
						<>
							<meta property="og:image" content={seo.metaImage.url} />
							<meta property="twitter:image" content={seo.metaImage.url} />
						</>
					)}
					{seo.metaSocial && (
						<>
							<meta property="og:title" content={seo.metaSocial.title || seo.metaTitle} />
							<meta property="og:description" content={seo.metaSocial.description!} />
							<meta property="twitter:title" content={seo.metaSocial.title || seo.metaTitle} />
							<meta property="twitter:description" content={seo.metaSocial.description || seo.metaDescription} />
						</>
					)}
					{seo.structuredData && <script type="application/ld+json">{seo.structuredData}</script>}
				</Head>
			) : null}
		</>
	)
}
