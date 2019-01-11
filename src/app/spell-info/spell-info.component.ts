import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SpellsService } from '../spells.service';
import { NamedAPIResource } from '../named-apiresource';
import { Spell } from '../spell';
import { Toolbox } from '../toolbox';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-spell-info',
  templateUrl: './spell-info.component.html',
  styleUrls: ['./spell-info.component.css']
})
export class SpellInfoComponent implements OnInit {
  targetSpell: Spell;
  toolbox: Toolbox = new Toolbox();

  getSpell(): void {
    const id: string = this.route.snapshot.paramMap.get('id');
    this.spellService.getSpell(id).subscribe(result => {
      this.targetSpell = result;
      this.titleService.setTitle(`DnD5e spell: ${result.name}`);
      this.metaSerivce.updateTag({
        name: 'description', content: `DnD5e spell information for ${result.name}`
      });
    });
  }

  constructor(
    private route: ActivatedRoute,
    private spellService: SpellsService,
    private titleService: Title,
    private metaSerivce: Meta
  ) { }

  ngOnInit() {
    // title and meta description
    this.titleService.setTitle('DnD5e spell information');
    this.metaSerivce.updateTag({
      name: 'description', content: 'DnD5e spell information of a particular spell'
    });

    this.getSpell();
  }

}
