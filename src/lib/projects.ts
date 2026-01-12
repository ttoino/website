import type { Picture } from "vite-imagetools";

import type { TagId } from "./tags";
import type { TechnologyId } from "./technologies";

export type Images = ({ dark: Picture; light: Picture } | Picture)[];

export interface Project {
    description?: string[];
    endDate?: Date;
    id: string;
    images?: Images;
    name: string;
    repo?: string;
    startDate: Date;
    tagline: string;
    tags: readonly TagId[];
    technologies: readonly TechnologyId[];
    url?: string;
}

const projectsWithoutImage = [
    {
        id: "meterial-symbols",
        name: "Meterial Symbols",
        repo: "https://github.com/ttoino/meterial-symbols",
        startDate: new Date("2025-08-22"),
        tagline: "Variable icon font with meter/progress support",
        tags: ["personal"],
        technologies: ["python"],
        url: "https://meterial.toino.pt",
    },
    {
        id: "mopidy-marceline",
        name: "Mopidy Marceline",
        repo: "https://github.com/ttoino/mopidy-marceline",
        startDate: new Date("2025-03-17"),
        tagline: "Stylish Mopidy frontend",
        tags: ["native", "web", "personal"],
        technologies: ["python", "svelte", "tailwind", "typescript"],
    },
    {
        id: "svelte-m3c",
        name: "Svelte M3C",
        repo: "https://github.com/ttoino/svelte-m3c",
        startDate: new Date("2025-03-21"),
        tagline: "Svelte + Tailwind library for Material 3 components",
        tags: ["web", "personal"],
        technologies: ["svelte", "tailwind", "typescript"],
        url: "https://svelte-m3c.toino.pt",
    },
    {
        id: "website",
        name: "Website",
        repo: "https://github.com/ttoino/website",
        startDate: new Date("2023-07-21"),
        tagline: "Personal website and portfolio",
        tags: ["web", "personal"],
        technologies: ["svelte", "tailwind", "typescript"],
        url: "https://toino.pt",
    },
    {
        endDate: new Date("2024-05-21"),
        id: "ementas",
        name: "UP Menus",
        repo: "https://github.com/ttoino/ementas",
        startDate: new Date("2024-04-03"),
        tagline: "Website showing the menus for the University of Porto",
        tags: ["web", "personal", "university"],
        technologies: ["svelte", "tailwind", "typescript"],
        // url: "https://ementas.toino.pt",
    },
    {
        endDate: new Date("2023-12-15"),
        id: "top-commiters",
        name: "Top commiters",
        repo: "https://github.com/ttoino/top-commiters",
        startDate: new Date("2023-05-24"),
        tagline: "Website to track the top GitHub users per country",
        tags: ["web", "personal"],
        technologies: ["primer", "svelte", "typescript"],
        url: "https://commits.toino.pt",
    },
    {
        endDate: new Date("2024-01-04"),
        id: "sgi",
        name: "SGI",
        repo: "https://github.com/ttoino/feup-sgi",
        startDate: new Date("2023-09-20"),
        tagline: "3D projects: two scenes and a game",
        tags: ["web", "university"],
        technologies: ["javascript", "threejs"],
        url: "https://sgi.toino.pt",
    },
    {
        endDate: new Date("2023-12-23"),
        id: "luis",
        name: "LUIS",
        repo: "https://github.com/ttoino/feup-pri",
        startDate: new Date("2023-10-05"),
        tagline: "League of Legends universe search engine",
        tags: ["web", "university"],
        technologies: ["solr", "svelte", "tailwind", "typescript"],
        url: "https://luis.toino.pt",
    },
    {
        endDate: new Date("2023-12-22"),
        id: "sdle",
        name: "SDLE",
        repo: "https://github.com/ttoino/feup-sdle",
        startDate: new Date("2023-11-08"),
        tagline: "Distributed and offline-first shopping list web app",
        tags: ["web", "university"],
        technologies: ["kotlin", "ktor", "svelte", "tailwind", "typescript"],
        url: "https://sdle.toino.pt",
    },
    {
        endDate: new Date("2023-05-28"),
        id: "jmm",
        name: "Java--",
        repo: "https://github.com/ttoino/feup-c",
        startDate: new Date("2023-03-15"),
        tagline: "(Almost) Java compiler written in Java",
        tags: ["terminal", "university"],
        technologies: ["antlr", "java"],
        url: "https://jmm.toino.pt",
    },
    {
        endDate: new Date("2023-03-16"),
        id: "atrellado",
        name: "Atrellado",
        repo: "https://github.com/ttoino/feup-lbaw",
        startDate: new Date("2022-09-12"),
        tagline: "Trello clone",
        tags: ["web", "university"],
        technologies: [
            "bootstrap",
            "laravel",
            "php",
            "postgresql",
            "typescript",
        ],
        url: "https://atrellado.toino.pt",
    },
    {
        endDate: new Date("2023-01-17"),
        id: "center",
        name: "Center",
        repo: "https://github.com/ttoino/feup-pfl-proj2",
        startDate: new Date("2022-12-20"),
        tagline: "Digital online multiplayer board game",
        tags: ["terminal", "game", "university"],
        technologies: ["prolog"],
    },
    {
        endDate: new Date("2022-12-03"),
        id: "aocm",
        name: "Advent of Code Manager",
        repo: "https://github.com/ttoino/advent-of-code-manager",
        startDate: new Date("2022-07-26"),
        tagline: "CLI to manage Advent of Code problems and solutions",
        tags: ["terminal", "personal"],
        technologies: ["python"],
    },
    {
        endDate: new Date("2022-06-14"),
        id: "xaufome",
        name: "Xau Fome",
        repo: "https://github.com/ttoino/feup-ltw-proj",
        startDate: new Date("2022-04-01"),
        tagline: "Food delivery service website",
        tags: ["web", "university"],
        technologies: ["css", "javascript", "php"],
        url: "https://xaufome.toino.pt",
    },
    {
        endDate: new Date("2022-03-30"),
        id: "latex-previewer",
        name: "LaTeX Previewer",
        repo: "https://github.com/ttoino/latex-previewer",
        startDate: new Date("2022-03-29"),
        tagline: "Simple website to preview LaTeX code",
        tags: ["web", "personal"],
        technologies: ["css", "html", "javascript"],
        // url: "https://latex.toino.pt",
    },
    {
        endDate: new Date("2022-01-30"),
        id: "ootb",
        name: "Out of the Breach",
        repo: "https://github.com/ttoino/feup-ldts-proj",
        startDate: new Date("2021-12-27"),
        tagline: "Turn-based strategy game inspired by Into the Breach",
        tags: ["native", "game", "university"],
        technologies: ["java", "lanterna"],
    },
    {
        endDate: new Date("2021-03-30"),
        id: "proggers",
        name: "Proggers",
        repo: "https://github.com/ttoino/proggers-discord-bot",
        startDate: new Date("2021-03-29"),
        tagline: "Single player robot avoidance game in a discord bot",
        tags: ["terminal", "discord", "game", "personal", "university"],
        technologies: ["cpp", "typescript"],
    },
    {
        endDate: new Date("2021-01-24"),
        id: "solitaire",
        name: "Solitaire",
        repo: "https://github.com/ttoino/feup-fpro-solitaire",
        startDate: new Date("2020-12-14"),
        tagline: "Classic solitaire klondike game",
        tags: ["native", "game", "university"],
        technologies: ["pygame", "python"],
    },
    {
        endDate: new Date("2019"),
        id: "bruno",
        name: "Bruno",
        repo: "https://github.com/ttoino/bruno",
        startDate: new Date("2019"),
        tagline: "Online multiplayer terminal-based clone of Uno",
        tags: ["terminal", "game", "personal"],
        technologies: ["firebase", "java", "netty"],
    },
    {
        endDate: new Date("2019"),
        id: "watch-face",
        name: "Custom Watch Face",
        repo: "https://github.com/ttoino/custom-watch-face",
        startDate: new Date("2019"),
        tagline: "Custom watch face for Wear OS",
        tags: ["wearable", "personal"],
        technologies: ["android", "java"],
    },
    {
        endDate: new Date("2019"),
        id: "opcwp",
        name: "OnePlus Custom Wallpaper Provider",
        repo: "https://github.com/ttoino/op-custom-wallpaper-provider",
        startDate: new Date("2019"),
        tagline: "Custom animated wallpaper provider for OnePlus",
        tags: ["mobile", "personal"],
        technologies: ["android", "java"],
    },
] as const satisfies readonly Project[];

const projectImages: Record<string, Picture> = import.meta.glob(
    ["./*/*.png", "./*/dark/*.png", "./*/light/*.png"],
    {
        base: "./images/projects",
        eager: true,
        import: "default",
        query: {
            enhanced: true,
            w: "640;1280;1920",
        },
    },
);

export const projects = projectsWithoutImage.map((project) => {
    const darkImages: Picture[] = [];
    const lightImages: Picture[] = [];
    const images: Picture[] = [];

    for (const [name, image] of Object.entries(projectImages)) {
        if (!name.includes(project.id)) continue;

        if (name.includes("dark")) darkImages.push(image);
        else if (name.includes("light")) lightImages.push(image);
        else images.push(image);
    }

    return {
        ...project,
        images:
            darkImages.length > 0 && darkImages.length === lightImages.length
                ? darkImages.map((image, i) => ({
                      dark: image,
                      light: lightImages[i],
                  }))
                : images.length > 0
                  ? images
                  : undefined,
    };
});
