import { error } from "@sveltejs/kit";
import { characters } from "$lib/characters";
import type {PageLoad} from './$types';

export const prerender = true;

export const load: PageLoad = ({ params }) => {

  const c = characters.find((character) => character.path === params.slug);
  if (c) {
    return c;
  }

  throw error(404, "Not found");
}
