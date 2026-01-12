import { error } from "@sveltejs/kit";
import { type Project, projects } from "$lib/projects";

import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ params }) => {
    const project: Project | undefined = projects.find(
        (p) => p.id === params.project,
    );

    if (!project) throw error(404, "Project not found");

    return { project };
};
