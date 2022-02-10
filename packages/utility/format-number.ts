export function rounded(num: number) {
	const value = Math.round(num * 100) / 100;
	const precision = (precision: number = 2) => parseInt(value.toFixed(precision));

	return {
		value,
		precision,
	};
}
