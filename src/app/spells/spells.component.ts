import { Component, OnInit } from '@angular/core';
import { SpellsService } from '../spells.service';
import { NamedAPIResourceList } from '../named-apiresource-list';
import { Toolbox } from '../toolbox';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-spells',
  templateUrl: './spells.component.html',
  styleUrls: ['./spells.component.css', '../../material-nav-list-items.css']
})
export class SpellsComponent implements OnInit {

  spellList: NamedAPIResourceList;
  searchSpellList: NamedAPIResourceList = new NamedAPIResourceList();
  spellIndex: string;
  tools: Toolbox = new Toolbox();
  loaded: boolean = false; // determines loading spinner component

  constructor(
    private spellService: SpellsService,
    private titleService: Title,
    private metaServce: Meta
  ) { }

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
    this.spellIndex = this.tools.getEntityNumber(value);
  }

  ngOnInit() {
    // title and meta description
    this.titleService.setTitle('DnD5e Spells');
    this.metaServce.updateTag({
      name: 'description', content: 'DnD5e Spells directory'
    });

    this.searchSpellList.results = [];
    this.searchSpellList.count = 0;
    this.spellService.getSpells().subscribe(results => {
      this.spellList = results;
      this.loaded = true;
    });
  }

}
