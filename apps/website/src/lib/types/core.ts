//import type { SvelteComponent } from "svelte";

export type ICON = any;

export type IMAGE = { src: string; alt?: string };

export type IMAGE_FIXED = IMAGE & { width: number; height: number };

export interface LINK {
	label: string;
	href: string;
}

export interface ICON_LINK extends LINK {
	label: string;
	href: string;
	Icon: ICON;
}
export interface SELECT_OPTION<V extends string = string> {
	label: string;
	value: V;
}
