import { cn } from '@/lib/utils'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../ui'

interface OptionType {
	[key: string]: string
}

interface SelectFieldProps<T extends OptionType> {
	selectLabel?: string
	placeholder: string
	arr: Array<T>
	className?: string
	onValueChange(value: string): void
	value?: string
	valueKey?: string // Nueva prop para especificar la propiedad para el valor
	labelKey?: string // Nueva prop para especificar la propiedad para la etiqueta
	id?: string
}

export const SelectField = <T extends OptionType>({
	selectLabel,
	placeholder,
	arr,
	className,
	onValueChange,
	value,
	valueKey = 'value', // Por defecto, se usa 'value' como propiedad para el valor
	labelKey = 'label', // Por defecto, se usa 'label' como propiedad para la etiqueta
	id
}: SelectFieldProps<T>) => {
	return (
		<Select onValueChange={onValueChange} value={value}>
			<SelectTrigger id={id} className={cn(className)}>
				<SelectValue placeholder={placeholder} />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					{selectLabel ? <SelectLabel>{selectLabel}</SelectLabel> : <></>}
					{arr?.map(option => (
						<SelectItem key={option[labelKey]} value={option[valueKey]}>
							{option[labelKey]}
						</SelectItem>
					))}
				</SelectGroup>
			</SelectContent>
		</Select>
	)
}
