import { format } from "date-fns";

export const datePretty = (d: Date): string => {
	if (!!d) return format(d, "do MMM yyyy");
	else return d;
};
export const dateMinimal = (d: Date): string => {
	if (!!d) return format(d, "MMM yyyy");
	else return d;
};

export const dateToQuater = (d: Date): string => {
	const year = d.getUTCFullYear();
	const month = d.getUTCMonth();

	if (month <= 2) {
		return `Q1 ${year}`;
	}
	if (month <= 5) {
		return `Q2 ${year}`;
	}
	if (month <= 8) {
		return `Q3 ${year}`;
	}
	if (month <= 11) {
		return `Q4 ${year}`;
	}
	return year.toString();
};
