export function calculateDiscountedAmount(amount: number, discount: number): number {
	const discountAmount = (amount * discount) / 100
	return amount - discountAmount
}
