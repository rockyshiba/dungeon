import { Choice } from "./choice";
import { NamedAPIResource } from "./named-apiresource";
import { ClassAPIResource } from "./class-apiresource";
import { Level } from "./level";

export class Class {
    _id: string;
    index: number;
    name: string;
    hit_die: number;
    proficiency_choices: Choice[];
    proficiencies: NamedAPIResource[];
    starting_equipiment: ClassAPIResource;
    class_levels: Level[]; // Level[]
    subclasses: NamedAPIResource[];
    spellcasting: ClassAPIResource[];
    url: string;
}
