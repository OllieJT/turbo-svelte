export type KBD_Event = KeyboardEvent & { currentTarget: EventTarget & Window };

interface Props {
	event: KBD_Event;
	action: () => void;
}

export function handleEnterKey({ event, action }: Props): void {
	if (event.key == "Enter" ?? event.key == "U+000A") {
		event.preventDefault();
		action();
	}
}
