import { Component, OnInit } from '@angular/core';
import { SpellsService } from '../spells.service';
import { NamedAPIResource } from '../named-apiresource';
import { NamedAPIResourceList } from '../named-apiresource-list';


@Component({
  selector: 'app-spells',
  templateUrl: './spells.component.html',
  styleUrls: ['./spells.component.css']
})
export class SpellsComponent implements OnInit {

  spellList: NamedAPIResourceList;
  searchSpellList: NamedAPIResourceList = new NamedAPIResourceList();
  spellIndex: string;

  constructor(private spellService: SpellsService) { }

  getSpellNumber(url: string): string{
    return url.substr(url.lastIndexOf('/') + 1);
  }

  searchSpells(name: string): void{
    // clear array
    this.searchSpellList.results = [];
    this.searchSpellList.count = 0;

    for(let spell of this.spellList.results){
      if(spell.name.substr(0, name.length).toLowerCase() == name.toLowerCase().trim() ){
        this.searchSpellList.results.push(spell);
        this.searchSpellList.count++;
      }
    }
  }

  changeSpellIndex(value: string){
    this.spellIndex = this.getSpellNumber(value);
    console.log(this.spellIndex);
  }

  ngOnInit() {
    this.searchSpellList.results = [];
    this.searchSpellList.count = 0;
    this.spellService.getSpells().subscribe(results => this.spellList = results);
  }

}
