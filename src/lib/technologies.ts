import AndroidIcon from "./icons/technologies/android.svg?component";
import AntlrIcon from "./icons/technologies/antlr.svg?component";
import BootstrapIcon from "./icons/technologies/bootstrap.svg?component";
import CIcon from "./icons/technologies/c.svg?component";
import CppIcon from "./icons/technologies/cpp.svg?component";
import CssIcon from "./icons/technologies/css.svg?component";
import FirebaseIcon from "./icons/technologies/firebase.svg?component";
import HtmlIcon from "./icons/technologies/html.svg?component";
import JavaIcon from "./icons/technologies/java.svg?component";
import JavascriptIcon from "./icons/technologies/javascript.svg?component";
import KotlinIcon from "./icons/technologies/kotlin.svg?component";
import KtorIcon from "./icons/technologies/ktor.svg?component";
import LanternaIcon from "./icons/technologies/lanterna.svg?component";
import LaravelIcon from "./icons/technologies/laravel.svg?component";
import MongodbIcon from "./icons/technologies/mongodb.svg?component";
import NettyIcon from "./icons/technologies/netty.svg?component";
import PhpIcon from "./icons/technologies/php.svg?component";
import PostgresqlIcon from "./icons/technologies/postgresql.svg?component";
import PrimerIcon from "./icons/technologies/primer.svg?component";
import PrologIcon from "./icons/technologies/prolog.svg?component";
import PygameIcon from "./icons/technologies/pygame.svg?component";
import PythonIcon from "./icons/technologies/python.svg?component";
import RustIcon from "./icons/technologies/rust.svg?component";
import SolrIcon from "./icons/technologies/solr.svg?component";
import SvelteIcon from "./icons/technologies/svelte.svg?component";
import TailwindIcon from "./icons/technologies/tailwind.svg?component";
import ThreejsIcon from "./icons/technologies/threejs.svg?component";
import TypescriptIcon from "./icons/technologies/typescript.svg?component";

export interface Technology {
    icon: typeof AntlrIcon;
    label: string;
}

export const technologies = {
    android: { icon: AndroidIcon, label: "Android" },
    antlr: { icon: AntlrIcon, label: "ANTLR" },
    bootstrap: { icon: BootstrapIcon, label: "Bootstrap" },
    c: { icon: CIcon, label: "C" },
    cpp: { icon: CppIcon, label: "C++" },
    css: { icon: CssIcon, label: "CSS" },
    firebase: { icon: FirebaseIcon, label: "Firebase" },
    html: { icon: HtmlIcon, label: "HTML" },
    java: { icon: JavaIcon, label: "Java" },
    javascript: { icon: JavascriptIcon, label: "JavaScript" },
    kotlin: { icon: KotlinIcon, label: "Kotlin" },
    ktor: { icon: KtorIcon, label: "Ktor" },
    lanterna: { icon: LanternaIcon, label: "Lanterna" },
    laravel: { icon: LaravelIcon, label: "Laravel" },
    mongodb: { icon: MongodbIcon, label: "MongoDB" },
    netty: { icon: NettyIcon, label: "Netty" },
    php: { icon: PhpIcon, label: "PHP" },
    postgresql: { icon: PostgresqlIcon, label: "PostgreSQL" },
    primer: { icon: PrimerIcon, label: "Primer CSS" },
    prolog: { icon: PrologIcon, label: "Prolog" },
    pygame: { icon: PygameIcon, label: "PyGame" },
    python: { icon: PythonIcon, label: "Python" },
    rust: { icon: RustIcon, label: "Rust" },
    solr: { icon: SolrIcon, label: "Solr" },
    svelte: { icon: SvelteIcon, label: "Svelte/SvelteKit" },
    tailwind: { icon: TailwindIcon, label: "Tailwind CSS" },
    threejs: { icon: ThreejsIcon, label: "Three.js" },
    typescript: { icon: TypescriptIcon, label: "TypeScript" },
} as const satisfies Record<string, Technology>;

export type TechnologyId = keyof typeof technologies;
