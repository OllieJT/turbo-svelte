import type { LINK } from "$types/core";
import { page } from "$app/stores";

export const routes: Record<string, LINK> = {
	home: { label: "Home", href: "/" },
	// about: { label: "About", href: "/about" },
	content: { label: "Articles", href: "/content" },
	// project: { label: "Projects", href: "/project" },
	// contact: { label: "Contact", href: "/contact" },
};

export const allRoutes = Object.values(routes);

export function isActiveRoute(route: LINK) {
	return page.subscribe((current) => current.path === route.href);
}

interface Props {
	type?: string;
	slug: string;
}
export function resolvePath({ slug, type }: Props) {
	switch (type) {
		case "article":
			return `/content/${slug}`;
		default:
			if (type) return `/${type}/${slug}`;
			else return `/${slug}`;
	}
}
