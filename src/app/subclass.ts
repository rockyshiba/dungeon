import { NamedAPIResource } from './named-apiresource';

export class Subclass {
    _id: string;
    index: number;
    name: string;
    class: NamedAPIResource;
    subclass_flavor: string;
    desc: string;
    features: NamedAPIResource[];
    url: string;
}
