import { ArmorClass } from "./armor-class";

export class Armor {
    _id: string;
    index: number;
    type: string;
    subtype: string;
    armor_class: ArmorClass;
    strength: number;
    stealth: string;
    weight: number;
}
