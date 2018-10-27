import { NamedAPIResource } from "./named-apiresource";

export class Skill {
    _id: string;
    index: number;
    name: string;
    desc: string[];
    ability_score: NamedAPIResource[];
    url: string;
}
