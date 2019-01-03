import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SpellsService } from '../spells.service';
import { NamedAPIResource } from '../named-apiresource';
import { Spell } from '../spell';
import { Toolbox } from '../toolbox';

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
    this.spellService.getSpell(id).subscribe(result => this.targetSpell = result);
  }

  constructor(
    private route: ActivatedRoute,
    private spellService: SpellsService
  ) { }

  ngOnInit() {
    this.getSpell();
  }

}
