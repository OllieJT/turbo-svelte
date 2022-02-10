export function handleTitle(headline?: string) {
	if (headline) {
		return `${headline} 💡 Inqling`;
	} else {
		return `Inqling 💡`;
	}
}
