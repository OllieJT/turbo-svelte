import { writable, Writable } from "svelte/store";

interface UI_STATE_MENU {
	isOpen: boolean;
}

type UI_STATE_MODAL = string | null;

interface UI_STATE {
	menu: UI_STATE_MENU;
	modal: UI_STATE_MODAL;
}

const uiStateData: Writable<UI_STATE> = writable({
	menu: {
		isOpen: false,
	},
	modal: null,
});

export const uiState = {
	subscribe: uiStateData.subscribe,
	menu: {
		toggle: () =>
			uiStateData.update((prev) => ({
				...prev,
				menu: { ...prev.menu, isOpen: !prev.menu.isOpen },
			})),
		set: (isOpen: boolean) =>
			uiStateData.update((prev) => ({ ...prev, menu: { ...prev.menu, isOpen } })),
	},

	modal: {
		close: () => uiStateData.update((prev) => ({ ...prev, modal: null })),
	},
};
