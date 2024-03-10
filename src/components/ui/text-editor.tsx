'use client'
import { cn } from '@/lib/utils'
//https://imzbf.github.io/md-editor-rt/en-US/docs
import { MdEditor, config, en_US } from 'md-editor-rt'
import 'md-editor-rt/lib/style.css'

config({
	editorConfig: {
		languageUserDefined: {
			'en-US': en_US
		}
	}
})
interface TextEditorProps {
	value: string
	onChange: (value: string) => void
}
export const TextEditor = ({ value, onChange }: TextEditorProps) => {
	return (
		<MdEditor
			className={cn('rounded-lg prose max-w-none')}
			toolbars={[
				'revoke',
				'next',
				'title',
				'bold',
				'underline',
				'italic',
				'unorderedList',
				'orderedList',
				'link',
				'table',
				'preview',
				'prettier',
				'=',
				'pageFullscreen'
			]}
			language="en-US"
			theme="light"
			modelValue={value}
			onChange={onChange}
		/>
	)
}
