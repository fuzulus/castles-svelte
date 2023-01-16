import { error } from '@sveltejs/kit';
import castles from '$lib/data/castles.json';

/** @type {import('./$types').PageLoad} */
export function load() {
	if (undefined === castles) {
		error(404, 'Not found');
	}

	return { castles };
}
