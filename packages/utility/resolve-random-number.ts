interface Props {
	min: number;
	max: number;
}

export function useRandomNumber({ min, max }: Props): number {
	return Math.random() * (max - min) + min;
}
