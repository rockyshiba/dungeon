export class Toolbox {
    // Class to contain methods used across application

    // Returns a number from a url from the DnD5e api
    // ex. getEntityNumber(http://www.dnd5eapi.co/api/spells/1) returns 1
    getEntityNumber(url: string): string{
        return url.substr(url.lastIndexOf('/') + 1);
    }
}
