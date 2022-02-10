/* eslint-disable @typescript-eslint/no-explicit-any */
type AnyObject = Record<string, any>;

function sortObject(unordered: AnyObject) {
	const sorted = Object.keys(unordered).sort();

	return sorted.reduce((obj: AnyObject, key) => {
		obj[key] = unordered[key];
		return obj;
	}, {});
}

export function compareObjects(as_before: AnyObject, as_after: AnyObject): boolean {
	const before = sortObject(as_before);
	const after = sortObject(as_after);

	const isSame = JSON.stringify(before) === JSON.stringify(after);
	return isSame;
}
