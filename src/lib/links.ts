import type { RouteId } from "$app/types";

export interface Link {
    href: RouteId;
    label: string;
}

export const links = [
    { href: "/about-me", label: "about me" },
    { href: "/projects", label: "projects" },
] as const satisfies readonly Link[];
