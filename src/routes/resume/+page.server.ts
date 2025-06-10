import { redirect } from '@sveltejs/kit';

export function load() {
	throw redirect(302, '/Resume-Jaxson-Pahukula.pdf');
}
