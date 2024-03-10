'use client'

import { cn } from '@/lib/utils'
import { MdPreview } from 'md-editor-rt'
import 'md-editor-rt/lib/preview.css'
import 'md-editor-rt/lib/style.css'
import { useState } from 'react'

export const PreviewMd = ({ text, className }: { text: string; className?: string }) => {
	const [id] = useState('preview-only')
	// const [scrollElement] = useState(document.documentElement)

	return (
		<>
			<MdPreview language="en-US" editorId={id} modelValue={text} className={cn('prose', className)} />
			{/* <MdCatalog editorId={id} scrollElement={scrollElement} /> */}
		</>
	)
}
