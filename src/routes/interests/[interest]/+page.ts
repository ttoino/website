import { error } from "@sveltejs/kit";
import { type Interest, interests } from "$lib/interests";
import { randomElement } from "$lib/random";

import type { PageLoad } from "./$types";

export const load: PageLoad = ({ params }) => {
    const interest: Interest | undefined = interests.find(
        (i) => i.id === params.interest,
    );

    if (!interest) throw error(404, "Interest not found");

    const model = randomElement(interest.models);

    return {
        interest,
        model,
    };
};
