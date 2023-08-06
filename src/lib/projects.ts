import type { TagId } from "./tags";
import type { TechnologyId } from "./technologies";

export interface Project {
    id: string;
    name: string;
    description?: string;
    startDate: Date;
    endDate?: Date;
    technologies?: readonly TechnologyId[];
    tags?: readonly TagId[];
    repo?: string;
    url?: string;
    image?: string;
}

export const projects = [
    {
        id: "website",
        name: "Website",
        description: "The website you are currently on",
        startDate: new Date("2023-07-21"),
        technologies: ["svelte", "typescript", "tailwind"],
        tags: ["web", "personal"],
        repo: "https://github.com/ttoino/website",
        url: "https://toino.pt",
        image: "/projects/website.png",
    },
    {
        id: "top-commiters",
        name: "Top Commiters",
        description: "The top commiters per country",
        startDate: new Date("2023-05-24"),
        technologies: ["svelte", "typescript", "primer", "mongodb"],
        tags: ["web", "personal"],
        repo: "https://github.com/ttoino/top-commiters",
        url: "https://commits.toino.pt",
        image: "/projects/top-commiters.png",
    },
    {
        id: "jmm",
        name: "Java--",
        description: "A Java compiler written in Java",
        startDate: new Date("2023-03-15"),
        endDate: new Date("2023-05-28"),
        technologies: ["java", "antlr"],
        tags: ["native", "university"],
        repo: "https://github.com/ttoino/feup-c",
    },
    {
        id: "atrellado",
        name: "Atrellado",
        description: "A Trello clone",
        startDate: new Date("2022-09-12"),
        endDate: new Date("2023-03-16"),
        technologies: [
            "laravel",
            "php",
            "postgresql",
            "bootstrap",
            "typescript",
        ],
        tags: ["web", "university"],
        repo: "https://github.com/ttoino/feup-lbaw",
        url: "https://atrellado.toino.pt",
        image: "/projects/atrellado.png",
    },
    {
        id: "center",
        name: "Center",
        description: "A digital online multiplayer board game",
        startDate: new Date("2022-12-20"),
        endDate: new Date("2023-01-17"),
        technologies: ["prolog"],
        tags: ["native", "university", "game"],
        repo: "https://github.com/ttoino/feup-pfl-proj2",
    },
    {
        id: "aocm",
        name: "Advent of Code Manager",
        description: "A CLI to manage Advent of Code",
        startDate: new Date("2022-07-26"),
        endDate: new Date("2022-12-03"),
        technologies: ["python"],
        tags: ["native", "personal"],
        repo: "https://github.com/ttoino/advent-of-code-manager",
    },
    {
        id: "xaufome",
        name: "Xau Fome",
        description: "A food delivery service",
        startDate: new Date("2022-04-01"),
        endDate: new Date("2022-06-14"),
        technologies: ["php", "javascript", "css"],
        tags: ["web", "university"],
        repo: "https://github.com/ttoino/feup-ltw-proj",
        url: "https://xaufome.toino.pt",
        image: "/projects/xaufome.png",
    },
    {
        id: "latex-previewer",
        name: "LaTeX Previewer",
        description: "A LaTeX previewer",
        startDate: new Date("2022-03-29"),
        endDate: new Date("2022-03-30"),
        technologies: ["html", "css", "javascript"],
        tags: ["web", "personal"],
        repo: "https://github.com/ttoino/latex-previewer",
    }
] as const satisfies readonly Project[];
