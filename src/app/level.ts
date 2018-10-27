import { NamedAPIResource } from "./named-apiresource";

export class Level {
    _id: string;
    index: number;
    level: number;
    ability_score_bonuses: number;
    prof_bonus: number;
    feature_choices: NamedAPIResource[];
    features: NamedAPIResource[];
    spellcasting: object;
    class_specific: object;
    class: NamedAPIResource;
    url: string;
}
