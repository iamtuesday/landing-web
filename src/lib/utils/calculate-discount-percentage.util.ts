export function calculateDiscountPercent(originalAmount: number, discountedAmount: number): string {
	const discountAmount = originalAmount - discountedAmount

	if (discountAmount === 0) {
		return '100%'
	}

	const percent = ((discountAmount / originalAmount) * 100).toFixed(2)
	return percent + '%'
}
