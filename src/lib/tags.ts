import DiscordIcon from "./icons/tags/discord.svg?component";
import GameIcon from "./icons/tags/game.svg?component";
import MobileIcon from "./icons/tags/mobile.svg?component";
import NativeIcon from "./icons/tags/native.svg?component";
import NIIcon from "./icons/tags/ni.svg?component";
import PersonalIcon from "./icons/tags/personal.svg?component";
import TerminalIcon from "./icons/tags/terminal.svg?component";
import UniversityIcon from "./icons/tags/university.svg?component";
import WearableIcon from "./icons/tags/wearable.svg?component";
import WebIcon from "./icons/tags/web.svg?component";

export interface Tag {
    icon: typeof MobileIcon;
    label: string;
}

export const tags = {
    discord: { icon: DiscordIcon, label: "Discord" },
    game: { icon: GameIcon, label: "Game" },
    mobile: { icon: MobileIcon, label: "Mobile" },
    native: { icon: NativeIcon, label: "Native" },
    ni: { icon: NIIcon, label: "NIAEFEUP" },
    personal: { icon: PersonalIcon, label: "Personal" },
    terminal: { icon: TerminalIcon, label: "Terminal" },
    university: { icon: UniversityIcon, label: "University" },
    wearable: { icon: WearableIcon, label: "Wearable" },
    web: { icon: WebIcon, label: "Web" },
} as const satisfies Record<string, Tag>;

export type TagId = keyof typeof tags;
