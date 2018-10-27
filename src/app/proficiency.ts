import { NamedAPIResource } from "./named-apiresource";

export class Proficiency {
    _id: string;
    index: number;
    type: string;
    name: string;
    classes: NamedAPIResource[];
    races: NamedAPIResource[];
    url: string;
}
