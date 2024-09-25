export enum ThemeEnum {
	AGNOSTIC = 'agnostic',
	DARK = 'dark',
	LIGHT = 'light',
	SYSTEM = 'system',
	OTHER = 'other'
}

export namespace ThemeEnum {
	export function toArray() {
		return new Map<string, string>([
			[ThemeEnum.AGNOSTIC, 'Agnostic'],
			[ThemeEnum.DARK, 'Dark'],
			[ThemeEnum.LIGHT, 'Light'],
			[ThemeEnum.SYSTEM, 'System'],
			[ThemeEnum.OTHER, 'Other']
		])
	}

	export function isAgnostic(): boolean {
		if (!process.env.NEXT_PUBLIC_DEFAULT_THEME) {
			throw new Error('NEXT_PUBLIC_DEFAULT_THEME is not defined')
		}
		return process.env.NEXT_PUBLIC_DEFAULT_THEME === ThemeEnum.AGNOSTIC
	}

	export function isOther(): boolean {
		return process.env.NEXT_PUBLIC_DEFAULT_THEME === ThemeEnum.OTHER
	}
}
