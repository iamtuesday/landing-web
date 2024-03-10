'use client'

import { cn } from '@/lib/utils'
import { postImageConfig } from '@/utils/post-image.utility'
import { isValidNextUrl } from '@/utils/valid-url.utility'
import { UploadCloud } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { Icons, Input, Label, buttonVariants } from '../ui'

interface ImageFieldProps {
	onChange: (value: string) => void
	value: string
	alt: string
	variant?: 'default' | 'custom'
	size?: 'avatar' | 'video'
}

export const ImageField = ({ onChange, value, alt, variant = 'default', size = 'video' }: ImageFieldProps) => {
	const [isLoading, setIsLoading] = useState(false)
	const getImageUrl = async (file: File) => {
		setIsLoading(true)
		try {
			const res = await postImageConfig(file)

			if (res === undefined) return console.log('Feiled to post image')

			onChange(res)
		} catch (error) {
			console.log(error)
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<>
			{variant === 'default' ? (
				<article className="flex flex-col gap-1">
					<figure className={cn('aspect-video overflow-hidden rounded-lg')}>
						{isLoading ? (
							<span className="w-full h-full rounded-lg object-cover border  inline-flex justify-center items-center">
								<Icons.spinner className="w-16 h-16 text-accent animate-spin" />
							</span>
						) : !isValidNextUrl(value || '') ? (
							<span className="w-full h-full rounded-lg object-cover border  inline-flex justify-center items-center">
								<UploadCloud className="w-16 h-16 text-accent" />
							</span>
						) : (
							<Image
								src={value as string}
								alt={alt}
								width={400}
								height={200}
								loading="lazy"
								className="aspect-video w-full h-full bg-accent object-cover"
							/>
						)}
					</figure>

					<Label htmlFor="image">
						<div
							className={cn(
								buttonVariants({ variant: 'outline', size: 'lg' }),
								'flex cursor-pointer items-center gap-1 h-8'
							)}
						>
							<Icons.plusCircle className="h-4 w-4" /> Update
						</div>
					</Label>
					<Input
						id="image"
						className="w-20 hidden"
						type="file"
						onChange={(e: any) => {
							const file = e?.target?.files[0]
							getImageUrl(file)
						}}
					/>
				</article>
			) : (
				<article className={cn('flex flex-col gap-1 hover:scale-[1.01] transition-transform')}>
					<Label htmlFor="image">
						<figure
							className={cn(
								' overflow-hidden rounded-lg relative',
								size === 'video' ? 'aspect-video' : 'aspect-square'
							)}
						>
							{isLoading ? (
								<span
									className={cn(
										'w-full h-full rounded-lg object-cover border-dashed border-4 border-foreground/10',
										'inline-flex justify-center items-center'
									)}
								>
									<Icons.spinner className="w-16 h-16 text-foreground/30 animate-spin" />
								</span>
							) : !isValidNextUrl(value || '') ? (
								<span
									className={cn(
										'w-full h-full cursor-pointer rounded-xl bg-accent/5 object-cover border-dashed',
										' border-4 border-foreground/10   inline-flex justify-center items-center'
									)}
								>
									<Icons.image className="w-16 h-16 text-foreground/10" />
								</span>
							) : (
								<>
									<Image
										src={value as string}
										alt={alt}
										width={600}
										height={500}
										loading="lazy"
										className={cn(' w-full h-full bg-accent cursor-pointer object-cover')}
									/>
									<span className="absolute cursor-pointer top-1/2 left-1/2 bg-foreground/70 p-4 rounded-full -translate-x-1/2 -translate-y-1/2 z-20 block">
										<Icons.image className="w-10 h-10 text-white" />
									</span>
								</>
							)}
						</figure>
					</Label>

					<Input
						id="image"
						className="w-20 hidden"
						type="file"
						onChange={(e: any) => {
							const file = e?.target?.files[0]
							getImageUrl(file)
						}}
					/>
				</article>
			)}
		</>
	)
}
