import { NamedAPIResource } from "./named-apiresource";

export class AbilityScore {
    _id: string;
    index: number;
    name: string;
    full_name: string;
    desc: string[];
    skills: NamedAPIResource[];
    url: string;
}
