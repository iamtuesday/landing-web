'use client'

import Image from 'next/image'
import { ThemeEnum } from '../../enums/theme.enum'
import { Titles } from '../atoms'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui'
interface Faqs {
	prompt: {
		title: string
		subtitle: string
	}
	list: {
		id: number
		question: string
		answer: string
	}[]
	gallery: {
		id: number
		url: string
		alt: string
		name: string
		width: number
		height: number
	}[]
}

export const Faqs = ({ prompt, list, gallery }: Faqs) => {
	let content = null

	if (ThemeEnum.isOther()) {
		content = (
			<section className="faqs container grid grid-cols-1 laptop:grid-cols-2 laptop:gap-[5rem] py-[5rem] laptop:py-[10rem]">
				<div>
					{prompt?.title && <Titles {...{ title: prompt.title, subtitle: prompt.subtitle }} />}

					<Accordion type="single" collapsible className="w-full mt-[1.5rem] laptop:mt-[2.5rem]">
						{Array.isArray(list) &&
							list.map((item, index) => {
								return (
									<AccordionItem key={index} value={item.id.toString()}>
										<AccordionTrigger>{item.question}</AccordionTrigger>
										<AccordionContent>{item.answer}</AccordionContent>
									</AccordionItem>
								)
							})}
					</Accordion>
				</div>

				<div className="grid grid-cols-1 laptop:grid-cols-2">
					<figure className="flex items-center">
						{gallery?.[0] && (
							<Image
								src={gallery?.[0]?.url}
								alt={gallery?.[0]?.alt}
								width={gallery?.[0].width}
								height={gallery?.[0].height}
							/>
						)}
					</figure>
					{Array.isArray(gallery) &&
						gallery.slice(1).map((item, index) => {
							return (
								<figure key={index} className="grid">
									<Image src={item?.url!} alt={item.name ?? item.alt} width={item.width} height={item.height} />
								</figure>
							)
						})}
				</div>
			</section>
		)
	}

	return content
}
