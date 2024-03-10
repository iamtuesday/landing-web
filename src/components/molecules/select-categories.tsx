'use client'

import { Badge, Command, CommandGroup, CommandItem } from '@/components/ui'
import { cn } from '@/lib/utils'
import { Command as CommandPrimitive } from 'cmdk'
import { X } from 'lucide-react'
import { useCallback, useRef, useState } from 'react'

type CategoriesType = Record<'value' | 'label', string>
export interface MultiSelectCategories {
	value: string
	label: string
}

interface MultiSelectProps {
	// field: {
	// 	onChange: (value: string[]) => void
	// 	value: string[] | undefined
	// }
	field: any
	defaultValue?: string[]
	categories: MultiSelectCategories[]
}

export function SelectCategories({ field, categories, defaultValue }: MultiSelectProps) {
	const inputRef = useRef<HTMLInputElement>(null)
	const [open, setOpen] = useState(false)

	const [inputValue, setInputValue] = useState('')
	const handleUnselect = useCallback(
		(newSelected: string) => {
			field.onChange([...(field.value || [])].filter(v => v !== newSelected))
		},
		[field]
	)

	const handleSelect = (newSelect: string) => {
		setInputValue('')
		field.onChange([...(field.value || []), newSelect])
	}

	const newSelectables = categories.filter(category => !defaultValue?.includes(category.value))

	return (
		<div>
			<Command className="overflow-visible bg-transparent h-auto">
				<div
					className={cn(
						'flex flex-wrap h-auto min-h-[36px] w-full',
						'rounded-md border border-input',
						'bg-transparent  text-sm',
						'shadow-sm transition-colors',
						'tablet:bg-transparent file:text-sm',
						'placeholder:text-muted-foreground',
						'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring'
					)}
				>
					{defaultValue?.map((id: string) => {
						const category = categories.find(categorie => categorie.value === id)

						return (
							<Badge key={id} variant="secondary" className="m-1 min-h-[30px] rounded-full">
								{category?.label}
								<button
									className="ml-1 ring-offset-background h-full  rounded-full outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
									onClick={() => handleUnselect(id)}
								>
									<X className="h-3 w-3 text-muted-foreground hover:text-foreground" />
								</button>
							</Badge>
						)
					})}
					<CommandPrimitive.Input
						ref={inputRef}
						value={inputValue}
						onValueChange={setInputValue}
						onBlur={() => setOpen(false)}
						onFocus={() => setOpen(true)}
						placeholder="Select categories..."
						className={cn('h-full w-full border-none bg-transparent p-3 outline-none')}
					/>
				</div>
				<div className="relative ">
					{open && newSelectables.length > 0 ? (
						<div className="absolute w-full z-10 top-0 rounded-md border bg-popover text-popover-foreground shadow-md outline-none animate-in">
							<CommandGroup className="max-h-[300px] overflow-y-scroll">
								{newSelectables.map((selected: CategoriesType) => {
									return (
										<CommandItem
											key={selected.value}
											onMouseDown={e => {
												e.preventDefault()
												e.stopPropagation()
											}}
											onSelect={() => {
												handleSelect(selected.value)
											}}
											className={'cursor-pointer'}
											{...field}
										>
											{selected.label}
										</CommandItem>
									)
								})}
							</CommandGroup>
						</div>
					) : null}
				</div>
			</Command>
		</div>
	)
}
