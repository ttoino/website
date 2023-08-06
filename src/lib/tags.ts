import DiscordIcon from "./icons/tags/discord.svg?component";
import GameIcon from "./icons/tags/game.svg?component";
import MobileIcon from "./icons/tags/mobile.svg?component";
import NativeIcon from "./icons/tags/native.svg?component";
import PersonalIcon from "./icons/tags/personal.svg?component";
import UniversityIcon from "./icons/tags/university.svg?component";
import WearableIcon from "./icons/tags/wearable.svg?component";
import WebIcon from "./icons/tags/web.svg?component";

export interface Tag {
    label: string;
    icon: typeof MobileIcon;
}

export const tags = {
    discord: { label: "Discord", icon: DiscordIcon },
    game: { label: "Game", icon: GameIcon },
    mobile: { label: "Mobile", icon: MobileIcon },
    native: { label: "Native", icon: NativeIcon },
    personal: { label: "Personal", icon: PersonalIcon },
    university: { label: "University", icon: UniversityIcon },
    wearable: { label: "Wearable", icon: WearableIcon },
    web: { label: "Web", icon: WebIcon },
} as const satisfies Record<string, Tag>;

export type TagId = keyof typeof tags;
