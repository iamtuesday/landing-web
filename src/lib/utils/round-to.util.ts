export function roundTo(number: number, decimals: number = 0, roundToInteger: boolean = false): number {
	const factor = Math.pow(10, decimals)
	let result = number * factor

	if (roundToInteger) {
		result = Math.round(result)
	} else {
		result = Math.round(result) / factor
	}

	return result
}
