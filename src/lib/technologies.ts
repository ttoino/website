import AndroidIcon from "./icons/technologies/android.svg?component";
import AntlrIcon from "./icons/technologies/antlr.svg?component";
import BootstrapIcon from "./icons/technologies/bootstrap.svg?component";
import CssIcon from "./icons/technologies/css.svg?component";
import HtmlIcon from "./icons/technologies/html.svg?component";
import JavaIcon from "./icons/technologies/java.svg?component";
import JavascriptIcon from "./icons/technologies/javascript.svg?component";
import LaravelIcon from "./icons/technologies/laravel.svg?component";
import MongodbIcon from "./icons/technologies/mongodb.svg?component";
import PhpIcon from "./icons/technologies/php.svg?component";
import PostgresqlIcon from "./icons/technologies/postgresql.svg?component";
import PrimerIcon from "./icons/technologies/primer.svg?component";
import PythonIcon from "./icons/technologies/python.svg?component";
import RustIcon from "./icons/technologies/rust.svg?component";
import SvelteIcon from "./icons/technologies/svelte.svg?component";
import TailwindIcon from "./icons/technologies/tailwind.svg?component";
import TypescriptIcon from "./icons/technologies/typescript.svg?component";

export interface Technology {
    name: string;
    icon: typeof AntlrIcon;
}

export const technologies = {
    android: { name: "Android", icon: AndroidIcon },
    antlr: { name: "ANTLR", icon: AntlrIcon },
    bootstrap: { name: "Bootstrap", icon: BootstrapIcon },
    css: { name: "CSS", icon: CssIcon },
    html: { name: "HTML", icon: HtmlIcon },
    java: { name: "Java", icon: JavaIcon },
    javascript: { name: "JavaScript", icon: JavascriptIcon },
    laravel: { name: "Laravel", icon: LaravelIcon },
    mongodb: { name: "MongoDB", icon: MongodbIcon },
    php: { name: "PHP", icon: PhpIcon },
    postgresql: { name: "PostgreSQL", icon: PostgresqlIcon },
    primer: { name: "Primer CSS", icon: PrimerIcon },
    python: { name: "Python", icon: PythonIcon },
    rust: { name: "Rust", icon: RustIcon },
    svelte: { name: "Svelte/SvelteKit", icon: SvelteIcon },
    tailwind: { name: "Tailwind CSS", icon: TailwindIcon },
    typescript: { name: "TypeScript", icon: TypescriptIcon },
} as const satisfies Record<string, Technology>;

export type TechnologyId = keyof typeof technologies;
