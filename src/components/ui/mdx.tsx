import { cn } from '@/lib/utils'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'

interface MdxProps {
	children: string
	className?: string
}

export const Mdx: React.FC<MdxProps> = ({ children, className }) => {
	return (
		<ReactMarkdown
			remarkPlugins={[remarkGfm]}
			rehypePlugins={[rehypeRaw]}
			className={cn('max-w-none', className)}
			components={{
				code({ node, className, children, ...props }) {
					return (
						<code className={cn('bg-gray-100 p-1 rounded-md', className)} {...props}>
							{children}
						</code>
					)
				}
			}}
		>
			{children}
		</ReactMarkdown>
	)
}
