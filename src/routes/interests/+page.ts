import { redirect } from "@sveltejs/kit";
import { resolve } from "$app/paths";
import { interests } from "$lib/interests";
import { randomElement } from "$lib/random";

import type { PageLoad } from "./$types";

export const load: PageLoad = () => {
    const interest = randomElement(interests);

    redirect(308, resolve("/interests/[interest]", { interest: interest.id }));
};
