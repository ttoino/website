import type { TagId } from "./tags";
import type { TechnologyId } from "./technologies";

import AocmImage from "./images/projects/aocm.png?enhanced";
import AtrelladoImage from "./images/projects/atrellado.png?enhanced";
import CenterImage from "./images/projects/center.png?enhanced";
import EmentasImage from "./images/projects/ementas.png?enhanced";
import JmmImage from "./images/projects/jmm.png?enhanced";
import LatexPreviewerImage from "./images/projects/latex-previewer.png?enhanced";
import LuisImage from "./images/projects/luis.png?enhanced";
import MarcelineImage from "./images/projects/mopidy-marceline.png?enhanced";
import OotbImage from "./images/projects/ootb.png?enhanced";
import ProggersImage from "./images/projects/proggers.png?enhanced";
import SdleImage from "./images/projects/sdle.png?enhanced";
import SgiImage from "./images/projects/sgi.png?enhanced";
import SolitaireImage from "./images/projects/solitaire.png?enhanced";
import TopCommitersImage from "./images/projects/top-commiters.png?enhanced";
import WatchFaceImage from "./images/projects/watch-face.png?enhanced";
import WebsiteImage from "./images/projects/website.png?enhanced";
import XaufomeImage from "./images/projects/xaufome.png?enhanced";

export interface Project {
    description?: string;
    endDate?: Date;
    id: string;
    image?: typeof AocmImage;
    name: string;
    repo?: string;
    startDate: Date;
    tags: readonly TagId[];
    technologies: readonly TechnologyId[];
    url?: string;
}

export const projects = [
    {
        description: "Variable icon font with meter/progress support",
        id: "meterial-symbols",
        name: "Meterial Symbols",
        repo: "https://github.com/ttoino/meterial-symbols",
        startDate: new Date("2025-08-22"),
        tags: ["personal"],
        technologies: ["python"],
        url: "https://meterial.toino.pt",
    },
    {
        description: "Stylish Mopidy frontend",
        id: "mopidy-marceline",
        image: MarcelineImage,
        name: "Mopidy Marceline",
        repo: "https://github.com/ttoino/mopidy-marceline",
        startDate: new Date("2025-03-17"),
        tags: ["native", "web", "personal"],
        technologies: ["python", "svelte", "tailwind", "typescript"],
    },
    {
        description: "Svelte + Tailwind library for Material 3 components",
        id: "svelte-m3c",
        name: "Svelte M3C",
        repo: "https://github.com/ttoino/svelte-m3c",
        startDate: new Date("2025-03-21"),
        tags: ["web", "personal"],
        technologies: ["svelte", "tailwind", "typescript"],
    },
    {
        description: "Personal website and portfolio",
        id: "website",
        image: WebsiteImage,
        name: "Website",
        repo: "https://github.com/ttoino/website",
        startDate: new Date("2023-07-21"),
        tags: ["web", "personal"],
        technologies: ["svelte", "tailwind", "typescript"],
        url: "https://toino.pt",
    },
    {
        description: "Website showing the menus for the University of Porto",
        endDate: new Date("2024-05-21"),
        id: "ementas",
        image: EmentasImage,
        name: "UP Menus",
        repo: "https://github.com/ttoino/ementas",
        startDate: new Date("2024-04-03"),
        tags: ["web", "personal", "university"],
        technologies: ["svelte", "tailwind", "typescript"],
        // url: "https://ementas.toino.pt",
    },
    {
        description: "Website to track the top GitHub users per country",
        endDate: new Date("2023-12-15"),
        id: "top-commiters",
        image: TopCommitersImage,
        name: "Top commiters",
        repo: "https://github.com/ttoino/top-commiters",
        startDate: new Date("2023-05-24"),
        tags: ["web", "personal"],
        technologies: ["primer", "svelte", "typescript"],
        url: "https://commits.toino.pt",
    },
    {
        description: "3D projects: two scenes and a game",
        endDate: new Date("2024-01-04"),
        id: "sgi",
        image: SgiImage,
        name: "SGI",
        repo: "https://github.com/ttoino/feup-sgi",
        startDate: new Date("2023-09-20"),
        tags: ["web", "university"],
        technologies: ["javascript", "threejs"],
        url: "https://sgi.toino.pt",
    },
    {
        description: "League of Legends universe search engine",
        endDate: new Date("2023-12-23"),
        id: "luis",
        image: LuisImage,
        name: "LUIS",
        repo: "https://github.com/ttoino/feup-pri",
        startDate: new Date("2023-10-05"),
        tags: ["web", "university"],
        technologies: ["solr", "svelte", "tailwind", "typescript"],
        url: "https://luis.toino.pt",
    },
    {
        description: "Distributed and offline-first shopping list web app",
        endDate: new Date("2023-12-22"),
        id: "sdle",
        image: SdleImage,
        name: "SDLE",
        repo: "https://github.com/ttoino/feup-sdle",
        startDate: new Date("2023-11-08"),
        tags: ["web", "university"],
        technologies: ["kotlin", "ktor", "svelte", "tailwind", "typescript"],
        url: "https://sdle.toino.pt",
    },
    {
        description: "(Almost) Java compiler written in Java",
        endDate: new Date("2023-05-28"),
        id: "jmm",
        image: JmmImage,
        name: "Java--",
        repo: "https://github.com/ttoino/feup-c",
        startDate: new Date("2023-03-15"),
        tags: ["terminal", "university"],
        technologies: ["antlr", "java"],
        url: "https://jmm.toino.pt",
    },
    {
        description: "Trello clone",
        endDate: new Date("2023-03-16"),
        id: "atrellado",
        image: AtrelladoImage,
        name: "Atrellado",
        repo: "https://github.com/ttoino/feup-lbaw",
        startDate: new Date("2022-09-12"),
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
        description: "Digital online multiplayer board game",
        endDate: new Date("2023-01-17"),
        id: "center",
        image: CenterImage,
        name: "Center",
        repo: "https://github.com/ttoino/feup-pfl-proj2",
        startDate: new Date("2022-12-20"),
        tags: ["terminal", "game", "university"],
        technologies: ["prolog"],
    },
    {
        description: "CLI to manage Advent of Code problems and solutions",
        endDate: new Date("2022-12-03"),
        id: "aocm",
        image: AocmImage,
        name: "Advent of Code Manager",
        repo: "https://github.com/ttoino/advent-of-code-manager",
        startDate: new Date("2022-07-26"),
        tags: ["terminal", "personal"],
        technologies: ["python"],
    },
    {
        description: "Food delivery service website",
        endDate: new Date("2022-06-14"),
        id: "xaufome",
        image: XaufomeImage,
        name: "Xau Fome",
        repo: "https://github.com/ttoino/feup-ltw-proj",
        startDate: new Date("2022-04-01"),
        tags: ["web", "university"],
        technologies: ["css", "javascript", "php"],
        url: "https://xaufome.toino.pt",
    },
    {
        description: "Simple website to preview LaTeX code",
        endDate: new Date("2022-03-30"),
        id: "latex-previewer",
        image: LatexPreviewerImage,
        name: "LaTeX Previewer",
        repo: "https://github.com/ttoino/latex-previewer",
        startDate: new Date("2022-03-29"),
        tags: ["web", "personal"],
        technologies: ["css", "html", "javascript"],
        // url: "https://latex.toino.pt",
    },
    {
        description: "Turn-based strategy game inspired by Into the Breach",
        endDate: new Date("2022-01-30"),
        id: "ootb",
        image: OotbImage,
        name: "Out of the Breach",
        repo: "https://github.com/ttoino/feup-ldts-proj",
        startDate: new Date("2021-12-27"),
        tags: ["native", "game", "university"],
        technologies: ["java", "lanterna"],
    },
    {
        description: "Single player robot avoidance game in a discord bot",
        endDate: new Date("2021-03-30"),
        id: "proggers",
        image: ProggersImage,
        name: "Proggers",
        repo: "https://github.com/ttoino/proggers-discord-bot",
        startDate: new Date("2021-03-29"),
        tags: ["terminal", "discord", "game", "personal", "university"],
        technologies: ["cpp", "typescript"],
    },
    {
        description: "Classic solitaire klondike game",
        endDate: new Date("2021-01-24"),
        id: "solitaire",
        image: SolitaireImage,
        name: "Solitaire",
        repo: "https://github.com/ttoino/feup-fpro-solitaire",
        startDate: new Date("2020-12-14"),
        tags: ["native", "game", "university"],
        technologies: ["pygame", "python"],
    },
    {
        description: "Online multiplayer terminal-based clone of Uno",
        endDate: new Date("2019"),
        id: "bruno",
        name: "Bruno",
        repo: "https://github.com/ttoino/bruno",
        startDate: new Date("2019"),
        tags: ["terminal", "game", "personal"],
        technologies: ["firebase", "java", "netty"],
    },
    {
        description: "Custom watch face for Wear OS",
        endDate: new Date("2019"),
        id: "watch-face",
        image: WatchFaceImage,
        name: "Custom Watch Face",
        repo: "https://github.com/ttoino/custom-watch-face",
        startDate: new Date("2019"),
        tags: ["wearable", "personal"],
        technologies: ["android", "java"],
    },
    {
        description: "Custom animated wallpaper provider for OnePlus",
        endDate: new Date("2019"),
        id: "opcwp",
        name: "OnePlus Custom Wallpaper Provider",
        repo: "https://github.com/ttoino/op-custom-wallpaper-provider",
        startDate: new Date("2019"),
        tags: ["mobile", "personal"],
        technologies: ["android", "java"],
    },
] as const satisfies readonly Project[];
