import { NamedAPIResource } from "./named-apiresource";

export class Subrace {
    _id: string;
    index: number;
    name: string;
    race: NamedAPIResource;
    desc: string;
    ability_bonuses: number[];
    starting_proficiencies: NamedAPIResource[];
    languages: NamedAPIResource[];
    traits: NamedAPIResource[];
    url: string;
}
