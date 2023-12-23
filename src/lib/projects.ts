import type { TagId } from "./tags";
import type { TechnologyId } from "./technologies";

import WebsiteImage from "./images/projects/website.png?enhanced";
import TopCommitersImage from "./images/projects/top-commiters.png?enhanced";
import LuisImage from "./images/projects/luis.png?enhanced";
import SdleImage from "./images/projects/sdle.png?enhanced";
import AtrelladoImage from "./images/projects/atrellado.png?enhanced";
import CenterImage from "./images/projects/center.png?enhanced";
import AocmImage from "./images/projects/aocm.png?enhanced";
import XaufomeImage from "./images/projects/xaufome.png?enhanced";
import LatexPreviewerImage from "./images/projects/latex-previewer.png?enhanced";
import OotbImage from "./images/projects/ootb.png?enhanced";
import ProggersImage from "./images/projects/proggers.png?enhanced";
import SolitaireImage from "./images/projects/solitaire.png?enhanced";
import WatchFaceImage from "./images/projects/watch-face.png?enhanced";

export interface Project {
    id: string;
    name: string;
    description?: string;
    startDate: Date;
    endDate?: Date;
    technologies: readonly TechnologyId[];
    tags: readonly TagId[];
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
        technologies: ["svelte", "tailwind", "typescript"],
        tags: ["web", "personal"],
        repo: "https://github.com/ttoino/website",
        url: "https://toino.pt",
        image: WebsiteImage,
    },
    {
        id: "top-commiters",
        name: "Top Commiters",
        description: "The top commiters per country",
        startDate: new Date("2023-05-24"),
        endDate: new Date("2023-12-15"),
        technologies: ["primer", "svelte", "typescript"],
        tags: ["web", "personal"],
        repo: "https://github.com/ttoino/top-commiters",
        url: "https://commits.toino.pt",
        image: TopCommitersImage,
    },
    {
        id: "luis",
        name: "LUIS",
        description: "Search the League of Legends universe stories",
        startDate: new Date("2023-10-05"),
        endDate: new Date("2023-12-23"),
        technologies: ["solr", "svelte", "tailwind", "typescript"],
        tags: ["web", "university"],
        repo: "https://github.com/ttoino/feup-pri",
        url: "https://luis.toino.pt",
        image: LuisImage,
    },
    {
        id: "sdle",
        name: "SDLE",
        description: "Distributed and offline first shopping list web app",
        startDate: new Date("2023-11-08"),
        endDate: new Date("2023-12-22"),
        technologies: ["kotlin", "ktor", "svelte", "tailwind", "typescript"],
        tags: ["web", "university"],
        repo: "https://github.com/ttoino/feup-sdle",
        url: "https://sdle.toino.pt",
        image: SdleImage,
    },
    {
        id: "jmm",
        name: "Java--",
        description: "A Java compiler written in Java",
        startDate: new Date("2023-03-15"),
        endDate: new Date("2023-05-28"),
        technologies: ["antlr", "java"],
        tags: ["terminal", "university"],
        repo: "https://github.com/ttoino/feup-c",
    },
    {
        id: "atrellado",
        name: "Atrellado",
        description: "A Trello clone",
        startDate: new Date("2022-09-12"),
        endDate: new Date("2023-03-16"),
        technologies: [
            "bootstrap",
            "laravel",
            "php",
            "postgresql",
            "typescript",
        ],
        tags: ["web", "university"],
        repo: "https://github.com/ttoino/feup-lbaw",
        url: "https://atrellado.toino.pt",
        image: AtrelladoImage,
    },
    {
        id: "center",
        name: "Center",
        description: "A digital online multiplayer board game",
        startDate: new Date("2022-12-20"),
        endDate: new Date("2023-01-17"),
        technologies: ["prolog"],
        tags: ["terminal", "game", "university"],
        repo: "https://github.com/ttoino/feup-pfl-proj2",
        image: CenterImage,
    },
    {
        id: "aocm",
        name: "Advent of Code Manager",
        description: "A CLI to manage Advent of Code",
        startDate: new Date("2022-07-26"),
        endDate: new Date("2022-12-03"),
        technologies: ["python"],
        tags: ["terminal", "personal"],
        repo: "https://github.com/ttoino/advent-of-code-manager",
        image: AocmImage,
    },
    {
        id: "xaufome",
        name: "Xau Fome",
        description: "A food delivery service",
        startDate: new Date("2022-04-01"),
        endDate: new Date("2022-06-14"),
        technologies: ["css", "javascript", "php"],
        tags: ["web", "university"],
        repo: "https://github.com/ttoino/feup-ltw-proj",
        url: "https://xaufome.toino.pt",
        image: XaufomeImage,
    },
    {
        id: "latex-previewer",
        name: "LaTeX Previewer",
        description: "A LaTeX previewer",
        startDate: new Date("2022-03-29"),
        endDate: new Date("2022-03-30"),
        technologies: ["css", "html", "javascript"],
        tags: ["web", "personal"],
        repo: "https://github.com/ttoino/latex-previewer",
        url: "https://latex.toino.pt",
        image: LatexPreviewerImage,
    },
    {
        id: "ootb",
        name: "Out of the Breach",
        description: "A turn-based strategy game inspired by Into the Breach",
        startDate: new Date("2021-12-27"),
        endDate: new Date("2022-01-30"),
        technologies: ["java", "lanterna"],
        tags: ["native", "game", "university"],
        repo: "https://github.com/ttoino/feup-ldts-proj",
        image: OotbImage,
    },
    {
        id: "proggers",
        name: "Proggers",
        description:
            "A single player game in a discord bot where the player runs away from robots",
        startDate: new Date("2021-03-29"),
        endDate: new Date("2021-03-30"),
        technologies: ["cpp", "typescript"],
        tags: ["terminal", "discord", "game", "personal", "university"],
        repo: "https://github.com/ttoino/proggers-discord-bot",
        image: ProggersImage,
    },
    {
        id: "solitaire",
        name: "Solitaire",
        description: "The classic solitaire klondike game",
        startDate: new Date("2020-12-14"),
        endDate: new Date("2021-01-24"),
        technologies: ["pygame", "python"],
        tags: ["native", "game", "university"],
        repo: "https://github.com/ttoino/feup-fpro-solitaire",
        image: SolitaireImage,
    },
    {
        id: "bruno",
        name: "Bruno",
        description: "A terminal based clone of Uno",
        startDate: new Date("2019"),
        endDate: new Date("2019"),
        technologies: ["firebase", "java", "netty"],
        tags: ["terminal", "game", "personal"],
        repo: "https://github.com/ttoino/bruno",
    },
    {
        id: "watch-face",
        name: "Custom Watch Face",
        description: "A custom watch face for Wear OS",
        startDate: new Date("2019"),
        endDate: new Date("2019"),
        technologies: ["android", "java"],
        tags: ["wearable", "personal"],
        repo: "https://github.com/ttoino/custom-watch-face",
        image: WatchFaceImage,
    },
    {
        id: "opcwp",
        name: "OnePlus Custom Wallpaper Provider",
        description: "A custom animated wallpaper provider for OnePlus",
        startDate: new Date("2019"),
        endDate: new Date("2019"),
        technologies: ["android", "java"],
        tags: ["mobile", "personal"],
        repo: "https://github.com/ttoino/op-custom-wallpaper-provider",
    },
] as const satisfies readonly Project[];
