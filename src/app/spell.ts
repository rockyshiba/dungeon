import { NamedAPIResource } from "./named-apiresource";

export class Spell {
    _id: string;
    index: number;
    name: string;
    desc: string[];
    page: string;
    range: string;
    components: string[];
    ritual: string;
    duration: string;
    concentration: string;
    casting_time: string;
    level: number;
    school: NamedAPIResource;
    classes: NamedAPIResource[];
    subclasses: NamedAPIResource[];
    url: string;
}
