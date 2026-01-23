import type { RouteId } from "$app/types";

export const label = (link: RouteId) => link.replaceAll(/-+|\//g, " ").trim();

export const links = [
    "/about-me",
    "/projects",
] as const satisfies readonly RouteId[];
