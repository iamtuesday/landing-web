export function isUnset<T>(value: T | null | undefined): value is null | undefined {
	return value === null || value === undefined
}

export function isSet<T>(value: T | null | undefined): value is T {
	return !isUnset(value)
}

export function isUndefined<T>(value: T | null | undefined): value is undefined {
	return value === undefined
}

export function isNull<T>(value: T | null | undefined): value is null {
	return value === null
}

export function isString(value: unknown): value is string {
	return typeof value === 'string'
}

export function isNumber(value: unknown): value is number {
	return typeof value === 'number'
}

export function isBoolean(value: unknown): value is boolean {
	return typeof value === 'boolean'
}

export function isFunction(value: unknown): value is Function {
	return typeof value === 'function'
}
