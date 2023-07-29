import MobileIcon from "./icons/tags/mobile.svg?component";
import NativeIcon from "./icons/tags/native.svg?component";
import PersonalIcon from "./icons/tags/personal.svg?component";
import UniversityIcon from "./icons/tags/university.svg?component";
import WearableIcon from "./icons/tags/wearable.svg?component";
import WebIcon from "./icons/tags/web.svg?component";

export interface Tag {
    name: string;
    icon: typeof MobileIcon;
}

export const tags = {
    mobile: { name: "Mobile", icon: MobileIcon },
    native: { name: "Native", icon: NativeIcon },
    personal: { name: "Personal", icon: PersonalIcon },
    university: { name: "University", icon: UniversityIcon },
    wearable: { name: "Wearable", icon: WearableIcon },
    web: { name: "Web", icon: WebIcon },
} as const satisfies Record<string, Tag>;

export type TagId = keyof typeof tags;
