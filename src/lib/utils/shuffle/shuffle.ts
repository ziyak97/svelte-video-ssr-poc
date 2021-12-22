// https://stackoverflow.com/a/53758827/12453982
export function shuffle(array: Array<unknown>, seed: number): Array<unknown> {
	// <-- ADDED ARGUMENT
	let m = array.length;

	// While there remain elements to shuffle…
	while (m) {
		// Pick a remaining element…
		const i = Math.floor(random(seed) * m--); // <-- MODIFIED LINE

		// And swap it with the current element.
		const t = array[m];
		array[m] = array[i];
		array[i] = t;
		++seed; // <-- ADDED LINE
	}

	return array;
}

function random(seed: number) {
	const x = Math.sin(seed++) * 10000;
	return x - Math.floor(x);
}
