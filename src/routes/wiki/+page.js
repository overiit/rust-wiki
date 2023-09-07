import { redirect } from "@sveltejs/kit";
import PageContent from "../../generated/pages.json"

/** @type {import('./$types').PageLoad} */
export async function load() {
    const page = PageContent[0];
    throw redirect(301, "/wiki/" + page.path)
};