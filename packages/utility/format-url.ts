import { capitalize } from "./format-text";

export function beautifyUrl(url: URL): string {
	if (url.pathname.length > 1) {
		return url.hostname + url.pathname;
	}
	return url.hostname;
}

export function beautifyUrlDomain(url: URL): string {
	const parts = url.hostname.split(".");
	const label = parts[parts.length - 2];
	return capitalize(label);
}

export function beautifyUrlPath(url: URL): string {
	const trimmed = url.pathname.replace("/", " ").trim();
	const parts = trimmed.split(" ");
	const label = parts[parts.length - 1];
	return capitalize(label);
}
