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
import PrologIcon from "./icons/technologies/prolog.svg?component";
import PythonIcon from "./icons/technologies/python.svg?component";
import RustIcon from "./icons/technologies/rust.svg?component";
import SvelteIcon from "./icons/technologies/svelte.svg?component";
import TailwindIcon from "./icons/technologies/tailwind.svg?component";
import TypescriptIcon from "./icons/technologies/typescript.svg?component";

export interface Technology {
    label: string;
    icon: typeof AntlrIcon;
}

export const technologies = {
    android: { label: "Android", icon: AndroidIcon },
    antlr: { label: "ANTLR", icon: AntlrIcon },
    bootstrap: { label: "Bootstrap", icon: BootstrapIcon },
    css: { label: "CSS", icon: CssIcon },
    html: { label: "HTML", icon: HtmlIcon },
    java: { label: "Java", icon: JavaIcon },
    javascript: { label: "JavaScript", icon: JavascriptIcon },
    laravel: { label: "Laravel", icon: LaravelIcon },
    mongodb: { label: "MongoDB", icon: MongodbIcon },
    php: { label: "PHP", icon: PhpIcon },
    postgresql: { label: "PostgreSQL", icon: PostgresqlIcon },
    primer: { label: "Primer CSS", icon: PrimerIcon },
    prolog: { label: "Prolog", icon: PrologIcon },
    python: { label: "Python", icon: PythonIcon },
    rust: { label: "Rust", icon: RustIcon },
    svelte: { label: "Svelte/SvelteKit", icon: SvelteIcon },
    tailwind: { label: "Tailwind CSS", icon: TailwindIcon },
    typescript: { label: "TypeScript", icon: TypescriptIcon },
} as const satisfies Record<string, Technology>;

export type TechnologyId = keyof typeof technologies;
