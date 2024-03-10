'use client'

import { copyToClipboard } from '@/utils/copy-to-clipboard.utility'
import { useState } from 'react'
import { Button, Icons } from '../ui'

export const JsonDevtool = ({ json }: { json: any }) => {
	const [open, setOpen] = useState(false)
	return (
		<div className="fixed left-10 bottom-20">
			<Button size={'icon'} className="absolute top-0 z-20" onClick={() => setOpen(!open)}>
				{open ? <Icons.close /> : <Icons.eye />}
			</Button>
			{open && (
				<div className="bg-red-100 border  z-10 fixed border-red-400 text-red-700 px-4 py-3 rounded bottom-10 left-10" role="alert">
					<pre className="max-h-96 max-w-[700px] overflow-auto">{json && JSON.stringify(json, null, 2)}</pre>
					<Button size={'icon'} className="absolute top-0 right-0 z-20" onClick={() => copyToClipboard(JSON.stringify(json, null, 2))}>
						<Icons.copy size={16} />
					</Button>
				</div>
			)}
		</div>
	)
}
