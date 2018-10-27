import { NamedAPIResource } from "./named-apiresource";

export class Race {
    _id: string;
    index: string;
    name: string;
    speed: number;
    ability_bonuses: number[];
    alignment: string;
    age: string;
    size: string;
    size_description: string;
    starting_proficiencies: NamedAPIResource[];
    languages: NamedAPIResource[];
    language_desc: string;
    traits: NamedAPIResource[];
    subraces: NamedAPIResource;
    url: string;
}
