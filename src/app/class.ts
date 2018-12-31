import { Choice } from './choice';
import { NamedAPIResource } from './named-apiresource';
import { ClassAPIResource } from './class-apiresource';

export class Class {
    _id: string;
    index: number;
    name: string;
    hit_die: number;
    proficiency_choices: Choice[];
    proficiencies: NamedAPIResource[];
    starting_equipment: ClassAPIResource;
    class_levels: ClassAPIResource;
    subclasses: NamedAPIResource[];
    spellcasting: ClassAPIResource;
    url: string;
}
