import { NamedAPIResource } from "./named-apiresource";

export class Condition {
    _id: string;
    index: number;
    name: string;
    level: number;
    class: NamedAPIResource;
    subclass: NamedAPIResource;
    desc: string[];
    url: string;
}
