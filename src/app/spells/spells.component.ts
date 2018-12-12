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

  constructor(private spellService: SpellsService) { }

  getSpellNumber(url: string): string{
    return url.substr(url.lastIndexOf('/') + 1);
  }

  ngOnInit() {
    this.spellService.getSpells().subscribe(results => this.spellList = results);
  }

}
